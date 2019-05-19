/**
 * Created by qingguoing on 16/9/8.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

if(module.hot){
 module.hot.accept()
}

class Parent extends Component {
    constructor(){
        super();
        this.state = {
            child1Flag:1
        };
        console.log('parent-constructor')
    }
    componentDidMount(){
        console.log('parent-componentDidMount')
        this.setState({child1Flag:2})
    }
    componentWillUnmount() {
        console.log('parent componentWillUnmount');
    }
    render() {
        console.log('parent-render');
        return (
            <div className="test1">
                {this.state.child1Flag}
                {this.state.child1Flag==1?<Child></Child>:<Child2></Child2>}
            </div>
        )
    }
}

class Child extends Component{
    constructor(){
        super();
        console.log('child1-constructor')
    }
    componentDidMount(){
        console.log('child1-componentDidMount')
    }
    componentWillUnmount() {
        console.log('child1 componentWillUnmount');
    }
    render(){
        console.log('child1-render');
        return (
            <div>
                child1
            </div>
        )
    }
}
class Child2 extends Component{
    constructor(){
        super()
        console.log('child2-constructor')
    }
    componentDidMount(){
        console.log('child2-componentDidMount')
    }
    componentWillUnmount() {
        console.log('child2 componentWillUnmount');
    }
    render(){
        console.log('child2-render');
        return (
            <div>
                child2
            </div>
        )
    }
}
ReactDOM.render(
    <Parent>
    </Parent>,
    document.getElementById('content')
);
