/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import AppActions from '../../actions/AppActions';

import {LinkContainer} from 'react-router-bootstrap';
import {Col, Button, ButtonGroup} from 'react-bootstrap';


export default class Lists extends Component {
    static propTypes = {
        folder: React.PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.deleteFolder = this.deleteFolder.bind(this);
    }


    render() {
        return (
            <li>
                <div>
                    { this.props.folder }
                </div>
                <button onClick={ this.deleteFolder }>delete</button>
            </li>
        );
    }

    deleteFolder() {
        console.log("hihihi");
        AppActions.setting.deleteFolder(this.props.folder);
    }


}