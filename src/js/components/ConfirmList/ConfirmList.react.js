/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import {Col, Button, ButtonGroup} from 'react-bootstrap';
import AppActions from '../../actions/AppActions';

export default class ConfirmList extends Component {
    static propTypes = {
        // library: React.PropTypes.array,
        // tracks: React.PropTypes.array,
        // trackPlayingId: React.PropTypes.string,
        // wordlists: React.PropTypes.array,
        // playerStatus: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {value: ''};
        // if there is an alternative way to get words ?
        this.buildWordRows = this.buildWordRows.bind(this);
        this.createNewWordList = this.createNewWordList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        this.props.words = this.props.location.query.words.trim().split(' ');
        return (
            <div>
                <h1>List words: </h1>
                <ul>
                    { this.buildWordRows() }
                </ul>

                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <Button onClick={ this.createNewWordList }>
                    Create
                </Button>
            </div>
        );
    }

    buildWordRows() {
        return this.props.words.map((word) => {
            return (
                <li>
                    { word }
                </li>
            )
        });

    }

    createNewWordList() {
        AppActions.wordlists.createWordList(this.state.value, this.props.words);
    }
}