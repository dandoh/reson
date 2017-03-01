/**
 * Created by Dandoh on 2/25/17.
 */
import AppConstants from '../constants/AppConstants';
import app          from '../app';

export default (state = {}, payload) => {
    switch (payload.type) {

        case (AppConstants.APP_SETTING_ADD_FOLDERS): {
            console.log(payload.audioFolders);
            const newFolders = payload.audioFolders;
            let audioFolders = app.config.get('audioFolders');

            audioFolders = audioFolders.concat(newFolders);
            console.log("setting.js: Line 16: ");
            console.log(audioFolders);
            app.config.set('audioFolders', audioFolders);
            app.config.saveSync();
            return {...state}
        }

        case (AppConstants.APP_SETTING_DELETE_FOLDER): {
            console.log("den day roi ne");
            let audioFolders = app.config.get('audioFolders');
            console.log(audioFolders);
            let deleteFolder = payload.folderPath;


            audioFolders = audioFolders.filter((folder) => {
                return deleteFolder != folder;
            });

            app.config.set('audioFolders', audioFolders);
            app.config.saveSync();

            return {...state}
        }

        default: {
            return state;
        }
    }
}