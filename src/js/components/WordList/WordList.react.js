/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';


export default class WordList extends Component {
    static propTypes = {
        wordLists: React.PropTypes.array,
        allWords: React.PropTypes.array,
        filteredWords: React.PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.buildWordRows = this.buildWordRows.bind(this);
    }

    render() {
        return (
            <div>
                <ul>
                    { this.buildWordRows() }
                </ul>
            </div>
        );
    }

    buildWordRows() {
        return this.props.currentWords.map((word) => {
            return (
                <li>
                    { word }
                </li>
            )
        });

    }
}