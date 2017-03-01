/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import {Col, Button, ButtonGroup} from 'react-bootstrap';
import AppActions from '../../actions/AppActions';

export default class ConfirmList extends Component {
    static propTypes = {
        wordsToCreate: React.PropTypes.array
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
        if (this.props.wordsToCreate.length > 0) {

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
        } else {
            return (
                <div>
                    Loading ...
                </div>
            )
        }
    }

    buildWordRows() {
        return this.props.wordsToCreate.map((wordAndPath) => {
            return (
                <li>
                    { wordAndPath.word }
                </li>
            )
        });

    }

    createNewWordList() {
        AppActions.wordlists.createWordList(this.state.value,
            this.props.wordsToCreate);
    }
}