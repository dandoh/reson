import WordListActions from './WordListActions'
import SettingActions from './SettingActions'
import app from '../app'
import {hashHistory} from 'react-router';

import PlayerActions       from './PlayerActions';
import Player from '../lib/player';

const init = () => {


    console.log("Calling init");
    const folders = app.config.get('audioFolders');
    if (folders.length == 0) {
        // move to setting screne
        console.log("Go to setting");
        hashHistory.replace('/setting');
    } else {
        // move to main screen
        hashHistory.replace('/lists');
    }

    Player.addIntervalActionAfterEnded(PlayerActions.next);
};

export default {
    wordlists: WordListActions,
    setting: SettingActions,
    player: PlayerActions,
    init
};