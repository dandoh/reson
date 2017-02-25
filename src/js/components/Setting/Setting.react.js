/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import {Col, Button, ButtonGroup} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import AppActions from '../../actions/AppActions';


export default class NewList extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.addFolders = this.addFolders.bind(this);
    }


    render() {
        console.log("Setting.react.js: Line 22: ");
        console.log(this.props.config);
        const audioFolders = this.props.config.audioFolders;

        if (audioFolders.length == 0) {
            return (
                <div>
                    <h1 onClick={ this.addFolders }>
                        Click here to add audio folders</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <ol>
                        { audioFolders.map((folder) => {
                            return (
                                <li>
                                    { folder }
                                </li>
                            )
                        })}
                    </ol>
                    <Button className="green ss-navigateright right" onClick={ this.addFolders }>
                        Add New Folder
                    </Button>
                </div>
            )
        }

    }

    addFolders() {
        console.log("clicked add audio folders");
        AppActions.setting.addFolders();
    }
}