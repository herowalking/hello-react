import React, { Component } from 'react';

class ItemEs6 extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.stage = {
            age : 28
        }

        this.age = 18;
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.setState({ age: this.stage.age + 1 });
        this.setState((prevState) => ({ age: prevState.age + 1 }));
        this.setState((prevState) => ({ age: prevState.age + 1 }));
    }

    render() {
        return <div>我的年龄是：{this.state.age}</div>
    }
}

export default ItemEs6;