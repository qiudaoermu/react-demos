/**
 * Created by qingguoing on 16/9/8.
 */
import React, { Component } from 'react';


import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HOC from './hoc1.js';
import './style.scss';

if(module.hot){
 module.hot.accept()
}
class Demo extends Component {
    render() {
        return (
            <div className="test1">
                {this.props.children.map(function (value,index) {
                        return (<li key={index}>{value}</li>)
                })}
            </div>
        )
    }
}



Demo.propTypes = {
    test: PropTypes.string
};

const Wrap = HOC(Demo);

ReactDOM.render(
    <div>
         <Wrap hoc1="qingguoing" test="name">
                <h2>title4443422</h2>
                <div>content content content</div>
         </Wrap>
    </div>,
    document.getElementById('content')
);
