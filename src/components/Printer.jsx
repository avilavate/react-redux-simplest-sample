import React, { Component } from 'react';
import store from '../reducers/reducer.js'


export class Printer extends Component {
    render() {
        return (
            <span>
                {this.props.ProcessedMessage}
            </span>
        );
    }
}