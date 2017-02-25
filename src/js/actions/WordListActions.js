/**
 * Created by Dandoh on 2/24/17.
 */
import {hashHistory} from 'react-router';
import models from '../models/models'
import store from '../store.js';
import AppConstants  from '../constants/AppConstants';

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

const createWordList = async(name, words) => {
    const wordList = {
        name,
        words,
    };
    try {
        const doc = await models.WordList.insertAsync(wordList);
        // TODO - load words
        refresh();
        hashHistory.replace(`/play/${doc._id}`);


    } catch (err) {
        console.log(err);
    }

};

const load = async(_id) => {
    try {
        const wordList = await models.WordList.findOneAsync({_id});
        store.dispatch({
            type: AppConstants.APP_LIST_LOAD_ONE,
            words: wordList.words,
        });
    } catch (err) {
        console.warn(err);
    }
};


export default {
    createWordList,
    load,
    refresh
}
