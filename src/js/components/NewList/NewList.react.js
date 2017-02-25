/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import {Col, Button, ButtonGroup} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


export default class NewList extends Component {
    static propTypes = {
        // library: React.PropTypes.array,
        // tracks: React.PropTypes.array,
        // trackPlayingId: React.PropTypes.string,
        // wordlists: React.PropTypes.array,
        // playerStatus: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        console.log("Render new list screen");
        return (
            <div>
                <h1>Let's create a new list!</h1>
                <h2>Whatever you’re learning, Reson can help.</h2>
                <textarea autocapitalize="off"
                          value={this.state.value} onChange={this.handleChange}
                          placeholder="Type a list of words you want to learn, or paste up to 100 pages of text here."/>
                <LinkContainer to={{pathname: '/confirm', query: {words: this.state.value}}}>
                    <Button className="green ss-navigateright right">
                        Next Step
                    </Button>
                </LinkContainer>


            </div>
        );
    }


}