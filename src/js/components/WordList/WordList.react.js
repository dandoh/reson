/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import AppActions from '../../actions/AppActions';


export default class WordList extends Component {
    static propTypes = {
        wordLists: React.PropTypes.array,
        allWords: React.PropTypes.array,
        filteredWords: React.PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.buildWordRows = this.buildWordRows.bind(this);
        this.start = this.start.bind(this);
        this.handleChangeNumLoop = this.handleChangeNumLoop.bind(this);
        this.handleChangeInterval = this.handleChangeInterval.bind(this);
        this.state = {numLoop: 1, interval: 1};

    }

    handleChangeNumLoop() {
        this.setState({numLoop: event.target.value});
    }

    handleChangeInterval() {
        this.setState({interval: event.target.value});
    }

    render() {
        if (this.props.currentWords.length > 0) {
            return (
                <div>
                    <div>Number loop :</div>
                    <input type="text" value={this.state.numLoop} onChange={this.handleChangeNumLoop}/>
                    <div>Interval time between words :</div>
                    <input type="text" value={this.state.interval} onChange={this.handleChangeInterval}/>
                    <button onClick={ this.start }>Play</button>
                    <ul>
                        { this.buildWordRows() }
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    Nothing here !
                </div>
            )
        }
    }

    start() {
        AppActions.player.start(this.props.currentWords[0]._id,
            this.state.numLoop,
            this.state.interval);
    }

    buildWordRows() {
        return this.props.currentWords.map((word) => {
            return (
                <li>
                    { word.word }
                </li>
            )
        });

    }
}