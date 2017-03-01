/**
 * Created by Dandoh on 2/23/17.
 */
/**
 * Created by Dandoh on 2/23/17.
 */

import React, {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class Header extends Component {
    static propTypes = {
        // library: React.PropTypes.array,
        // tracks: React.PropTypes.array,
        // trackPlayingId: React.PropTypes.string,
        // wordlists: React.PropTypes.array,
        // playerStatus: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav activeKey={ 1 } onSelect={ undefined }>
                    <LinkContainer to='/lists'>
                        <NavItem eventKey={ 1 }>Lists</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/setting'>
                        <NavItem eventKey={ 2 }>Setting</NavItem>
                    </LinkContainer>
                </Nav>
            </div>
        );
    }
}