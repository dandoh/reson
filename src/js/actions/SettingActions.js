/**
 * Created by Dandoh on 2/24/17.
 */
import {hashHistory} from 'react-router';
import models from '../models/models'
import store from '../store.js';
import AppConstants  from '../constants/AppConstants';
import fs       from 'fs';
import path     from 'path';
import Promise  from 'bluebird';

const dialog = electron.remote.dialog;
const realpathAsync = Promise.promisify(fs.realpath);

const addFolders = () => {
    dialog.showOpenDialog({
        properties: ['openDirectory', 'multiSelections']
    }, (folders) => {
        if (folders !== undefined) {
            Promise.map(folders, (folder) => {
                return realpathAsync(folder);
            }).then((resolvedFolders) => {
                store.dispatch({
                    type: AppConstants.APP_SETTING_ADD_FOLDERS,
                    audioFolders: resolvedFolders
                });
            });
        }
    });
};

const deleteFolder = (folderPath) => {
    console.log("ahahah");
    store.dispatch({
        type: AppConstants.APP_SETTING_DELETE_FOLDER,
        folderPath
    })
};


export default {
    addFolders,
    deleteFolder
}
