import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyDOM extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom);
        console.log(this.refs.span);
        console.log(this.span);
    }

    render() {
        return (
            <div>
                {this.props.children}
                <span ref={(span) => this.span = span}></span>
            </div>
        )
    }
}

export default MyDOM