import React from 'react';
import '@/scss/component/class_base/main.scss';

export default class main extends React.Component {
    
    constructor() {
        super();
    }

    render() {
        return (
        <div className="main">
            <div className="content"></div>
        </div>
        );
    }
}