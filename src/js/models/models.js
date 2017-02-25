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
    name: String,
    path: String,
    meaning: [String],
    title: String,
});

Word.ensureIndex({fieldName: 'path', unique: true});
Word.ensureIndex({fieldName: 'name', unique: true});

const WordList = new linvodb('wordListInit', {
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