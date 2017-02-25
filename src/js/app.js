import path     from 'path';
import teeny    from 'teeny-conf';

const remote = electron.remote;
const app = remote.app;


/*
 |--------------------------------------------------------------------------
 | Some variables
 |--------------------------------------------------------------------------
 */

const browserWindows = {};
browserWindows.main = remote.getCurrentWindow();

const pathUserData = app.getPath('userData');
const pathSrc = __dirname;


/*
 |--------------------------------------------------------------------------
 | Config
 |--------------------------------------------------------------------------
 */

const conf = new teeny(path.join(pathUserData, 'config.json'));
conf.loadOrCreateSync();

// conf.set('audioFolders', []);
// conf.saveSync();


/*
 |--------------------------------------------------------------------------
 | supported Formats
 |--------------------------------------------------------------------------
 */

const supportedExtensions = [
    '.mp3',
    '.mp4',
    '.aac',
    '.m4a',
    '.3gp',
    '.wav',

    // Opus
    '.ogg',
    '.ogv',
    '.ogm',
    '.opus'
];

/*
 |--------------------------------------------------------------------------
 | Export
 |--------------------------------------------------------------------------
 */

export default {
    supportedExtensions, // supported audio formats
    pathSrc,             // path of the app
    browserWindows,      // Object containing all the windows
    version: app.getVersion(), // Museeks version
    config: conf,             // teeny-conf
    initialConfig: conf.getAll(),    // the config at the start of the application
};
