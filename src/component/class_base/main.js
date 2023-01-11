import React from 'react';
import '@/scss/component/class_base/main.scss';
import { LinList } from '@/component/function_base/linList'

export default class main extends React.Component {
    
    constructor() {
        super();
    }

    render() {
        return (
        <div className="main">
            <div className="main--header"></div>
            <div className="main--content">
                <LinList />
            </div>
            <div className="main--footer"></div>
        </div>
        );
    }
}