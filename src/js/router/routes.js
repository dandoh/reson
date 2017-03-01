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
import Lists from '../components/Lists/Lists.react'
import Setting from '../components/Setting/Setting.React'

const init = {

    app: () => {
        AppActions.wordlists.refresh();
        AppActions.init();
    },

    confirmWords: (route) => {
        let words = route.location.query.words.trim().split(' ');
        console.log(words);
        AppActions.wordlists.lookInAudioFolders(words);
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
        <Route path='confirm' component={ ConfirmList } onEnter={ init.confirmWords }/>
        <Route path='play'>
            <Route path=':wordlistId' component={ WordList } onEnter={ init.wordListInit }/>
        </Route>
        <Route path='setting' components={ Setting }/>
        <Route path='lists' components={ Lists }/>
    </Route>
);


export default routes;
