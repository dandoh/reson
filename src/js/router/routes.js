// Modules
import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Actions
import AppActions from '../actions/AppActions';

// Components
import App      from '../components/App.react';
import NewList from '../components/NewList/NewList.react'
import ConfirmList from '../components/ConfirmList/ConfirmList.react'
import WordList from '../components/WordList/WordList.react'
import Setting from '../components/Setting/Setting.React'

const init = {

    app: () => {
        AppActions.init();
    },

    initConfirmWords: (route) => {

    },

    wordListInit: (route) => {
        AppActions.wordlists.load(route.params.wordlistId);
    }
};

// Router
const routes = (
    <Route component={ App } path='/'>
        <IndexRoute onEnter={ init.app }/>
        <Route path='new' component={ NewList }/>
        <Route path='confirm' component={ ConfirmList } onEnter={ init.initConfirmWords }/>
        <Route path='play'>
            <Route path=':wordlistId' component={ WordList } onEnter={ init.wordListInit }/>
        </Route>
        <Route path='setting' components={ Setting }/>
        {/*<Route path='settings' component={ Settings }>*/}
        {/*<IndexRedirect to="library" />*/}
        {/*<Route path='about' component={ SettingsAbout } />*/}
        {/*<Route path='advanced' component={ SettingsAdvanced } />*/}
        {/*<Route path='audio' component={ SettingsAudio } />*/}
        {/*<Route path='interface' component={ SettingsUI } />*/}
        {/*<Route path='library' component={ SettingsLibrary } />*/}
        {/*</Route>*/}
        {/*<Route path='wordlists' component={ Playlists }>*/}
        {/*<Route path=':playlistId' component={ Playlist } onEnter={ init.playlist } />*/}
        {/*</Route>*/}
    </Route>
);


export default routes;
