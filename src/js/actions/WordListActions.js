/**
 * Created by Dandoh on 2/24/17.
 */
import {hashHistory} from 'react-router';
import models from '../models/models'
import store from '../store.js';
import AppConstants  from '../constants/AppConstants';
import app   from '../app';
import utils from '../util/utils'

import fs       from 'fs';
import path     from 'path';
import globby   from 'globby';
import Promise  from 'bluebird';

const realpathAsync = Promise.promisify(fs.realpath);

const refresh = async() => {
    try {
        const wordLists = await models.WordList.find({}).sort({name: 1}).execAsync();
        store.dispatch({
            type: AppConstants.APP_LIST_REFRESH,
            wordLists
        });
    } catch (err) {
        console.warn(err);
    }
};

const createWordList = async(name, wordsWithPath) => {
    console.log("WordListActions.js: Line 31: ");
    const wordList = {
        name,
        words: wordsWithPath.map((wwp) => {
            return wwp.word
        })
    };
    try {
        const addListRes = await models.WordList.insertAsync(wordList);
        // TODO - store words
        const addWordsRes = await Promise.map(wordsWithPath, (w) => {
            return new Promise((resolve, reject) => {
                models.Word.findOne(w, (err, doc) => {
                    if (!doc) {
                        models.Word.insert(w, (e, r) => {
                            resolve(r);
                        });
                    } else {
                        resolve(false);
                    }
                })
            });

        });

        console.log(addWordsRes);


        refresh();
        hashHistory.replace(`/play/${addListRes._id}`);

    } catch (err) {
        console.warn(err);
    }

};

const load = async(_id) => {
    try {
        const wordList = await models.WordList.findOneAsync({_id});
        const words = await models.Word.findAsync({word: {$in: wordList.words}});

        console.log("Den day roi hahaha: Line 60: ");
        store.dispatch({
            type: AppConstants.APP_LIST_LOAD_ONE,
            words: words,
        });
    } catch (err) {
        console.warn(err);
    }
};

const lookInAudioFolders = async(words) => {
    console.log("Init confirm!!!");
    let wordsWithPath = await Promise.map(words, (word) => {
        console.log(word);
        return findPath(word);
    });

    let existedWords = wordsWithPath.filter((wordAndPath) => {
        return wordAndPath.path != null
    });
    console.log(existedWords);
    store.dispatch({
        type: AppConstants.APP_LIST_ADD_LIST,
        words: existedWords
    });

};

const findPath = async(word) => {
    let folders = app.config.get('audioFolders');
    let firstLetter = word.charAt(0);

    let possiblePaths = utils.flatten(folders.map((folder) => {
        return [
            path.join(folder, firstLetter, word + '.mp3'),
        ]
    }));
    let pathsAndPossibility = await Promise.map(possiblePaths, (filePath) => {
        return new Promise((resolve, reject) => {
            fs.exists(filePath, (exist) => {
                resolve({
                    filePath,
                    exist
                })
            })
        })
    });

    let usedPath = null;
    for (let i = 0; i < pathsAndPossibility.length; i++) {
        if (pathsAndPossibility[i].exist) {
            usedPath = pathsAndPossibility[i].filePath
            break;
        }
    }

    return {
        word,
        path: usedPath
    }
};


export default {
    createWordList,
    load,
    refresh,
    lookInAudioFolders
}
