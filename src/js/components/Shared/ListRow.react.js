/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import AppActions from '../../actions/AppActions';

import { LinkContainer } from 'react-router-bootstrap';
import {Col, Button, ButtonGroup} from 'react-bootstrap';


export default class Lists extends Component {
    static propTypes = {
        wordList: React.PropTypes.object,
    };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>
                <div>
                    { this.props.wordList.name }
                </div>
                <LinkContainer to={'/play/' + this.props.wordList._id}>
                    <button onClick={ this.goToWordList }>Play</button>
                </LinkContainer>


            </li>
        );
    }


}