/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import AppActions from '../../actions/AppActions';
import ListRow from '../Shared/ListRow.react'
import {Col, Button, ButtonGroup} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';


export default class Lists extends Component {
    static propTypes = {
        wordLists: React.PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.buildWordLists = this.buildWordLists.bind(this);
    }


    render() {
        const divStyle = {
            'overflow-y': 'scroll',
            'height': '300px'
        };

        return (
            <div>
                <div style={divStyle}> { this.buildWordLists() } </div>
                <LinkContainer to='/new'>
                    <Button color="green">Create new list</Button>
                </LinkContainer>
            </div>
        )
    }

    buildWordLists() {
        if (this.props.wordLists.length > 0) {
            return (
                <div>
                    <ul>
                        { this.buildPlayListRow() }
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    NO PLAY LIST!
                </div>
            )
        }
    }

    buildPlayListRow() {
        return this.props.wordLists.map((list) => {
            return (
                <ListRow wordList={list}/>
            )
        });

    }


}