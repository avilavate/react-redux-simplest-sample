import React, { Component } from 'react';
import store from '../reducers/reducer.js'
import {postState} from '../actions/action.js';

export class App extends Component {
    state = {
        message: ''
    };
    onSubmit(e) {
        e.preventDefault();
        store.dispatch(postState(this.state.message));
        this.setState({ message: '' });
    }
    onMessageChanged(e) {
        var message = e.target.value;
        console.log(message)
        this.setState({ message: message });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Text Case Changer..." onChange={this.onMessageChanged.bind(this)} value={this.state.message} />

                <button onClick={this.onSubmit.bind(this)}>Send.. </button>
            </div>
        );
    }
}
