/**
 * Created by Dandoh on 2/24/17.
 */


/*
 | Database
 */

import linvodb  from 'linvodb3';
import leveljs  from 'level-js';
import Promise  from 'bluebird';

const remote = electron.remote;
const app = remote.app;


const pathUserData = app.getPath('userData');
linvodb.defaults.store = {db: leveljs}; // Comment out to use LevelDB instead of level-js
// Set dbPath - this should be done explicitly and will be the dir where each model's store is saved
linvodb.dbPath = pathUserData;

console.log("Path user data " + pathUserData);

const Word = new linvodb('word', {
    word: String,
    path: String,
    meaning: String,
});

Word.ensureIndex({fieldName: 'word', unique: true});
Word.ensureIndex({fieldName: 'path', unique: true});

const WordList = new linvodb('wordlist', {
    name: String,
    words: {
        type: [String],
        default: []
    }
});

const models = {
    Word,
    WordList
};

Promise.promisifyAll(models.Word.find().__proto__);
Promise.promisifyAll(models.Word);
Promise.promisifyAll(models.WordList);


export default models;