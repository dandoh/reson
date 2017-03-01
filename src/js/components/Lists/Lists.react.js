/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import AppActions from '../../actions/AppActions';


export default class Lists extends Component {
    static propTypes = {
        wordLists: React.PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.buildWordLists = this.buildWordLists.bind(this);
    }

    render() {
        return (
            <div>
                <div> this.buildWordList() </div>
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
                <li>
                    <div>
                        { list.name }
                    </div>
                    <button>Play</button>
                </li>
            )
        });

    }
}