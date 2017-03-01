import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import KeyBinding from 'react-keybinding-component';
import {Col, Button, ButtonGroup} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import app from '../app';

// components
import Header from './Header/Header.react'
import Footer from './Footer/Footer.react'

import {connect} from 'react-redux';

import AppActions from '../actions/AppActions';


/*
 |--------------------------------------------------------------------------
 | The App
 |--------------------------------------------------------------------------
 */

class Reson extends Component {

    static propTypes = {
        store: React.PropTypes.object,
        children: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        const store = this.props.store;
        const config = {...app.config.getAll()};
        console.log("render app");
        return (
            <div>
                <Header
                    //TODO - header properties here
                />
                <div className='main-content'>
                    <Row className='content'>
                        { React.cloneElement(
                            this.props.children, {
                                app: this,
                                config,
                                wordLists: store.wordLists,
                                allWords: store.words[store.cursor].all,
                                currentWords: store.words[store.cursor].sub,
                                wordsToCreate: store.wordsToCreate,
                                queue: store.queue,
                                queueCursor       :store.queueCursor,
                                numQueueLoop      :store.numQueueLoop,
                                repeat            :  store.repeat,
                                playerStatus      : store.playerStatus
                            })
                        }
                    </Row>
                </div>
                <Footer
                    // TODO - footer properties here
                />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {store: {...state}};
}

export default connect(mapStateToProps)(Reson);
