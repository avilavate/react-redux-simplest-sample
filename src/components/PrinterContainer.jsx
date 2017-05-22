import React, { Component } from 'react';
import store from '../reducers/reducer.js'

import { Printer } from './Printer';


export class PrinterContainer extends Component {

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

    render(){
        return (
            <Printer ProcessedMessage={this.state.message} />
        );
    }
}