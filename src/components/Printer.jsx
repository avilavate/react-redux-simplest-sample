import React, { Component } from 'react';
import store from '../reducers/reducer.js'
import { postState } from '../actions/action.js';

export class Printer extends Component {
    state = {
        message: ''
    };

    componentWillMount() {
        store.subscribe(() => {
            var state = store.getState();
            this.setState({
                message: state.data.text
            });
        });
    }

    render() {
        return (
            <span>
                {this.state.message}
            </span>
        );
    }
}