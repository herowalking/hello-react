import React, { Component } from 'react';
import TemperatureInput from './temperatureInput';
import BoilingVerdict from './boilingVerdict'

// const EventEmitter = require('events').EventEmitter;

// EventEmitter 是不是就是观察者模式的一种。

var EventEmitter = {
    _events: {},
    emit: function(event, data){
        if(!this._events[event]) {
            return;
        }
        for(var i=0; i< this._events[event].length; i++){
            this._events[event][i](data);
        }
    },
    on: function(event, callback){
        if(!this._events[event]) {
            this._events[event] = [];
        }

        this._events[event].push(callback);
    }
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        // this.eventEmitter = new EventEmitter();
        this.eventEmitter = EventEmitter
    }
    /* componentDidMount(){
         eventEmitter.on('event test', () =>{
             this.setState({
                 hello: '晨曦'
             });
         })
     }*/
    render() {
        return (
            <div>
                {/*{this.state.hello}*/}
                <TemperatureInput
                    scale="c"
                    eventEmitter={this.eventEmitter}/>
                <TemperatureInput
                    scale="f"
                    eventEmitter={this.eventEmitter}/>
                <BoilingVerdict
                    eventEmitter={this.eventEmitter} />
            </div>
        );
    }
}

/*
setTimeout(function(){
    eventEmitter.emit('event test');
    }, 3000)
*/


export default Calculator