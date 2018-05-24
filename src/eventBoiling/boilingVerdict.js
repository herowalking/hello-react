import React from 'react';

class BoilingVerdict extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isboil : 'not'
        }
    }

    componentDidMount(){
        this.props.eventEmitter.on('temp change', (obj)=> {
            obj.celsius >= 100 ? this.setState({
                isboil : 'would'
            }) : this.setState({
                isboil : 'not'
            })
        })
    }

    render() {
        return <p>The water { this.state.isboil } boil.</p>;
    }
}

export default BoilingVerdict

// 不用 props，使用emit发射的内容 使用状态。