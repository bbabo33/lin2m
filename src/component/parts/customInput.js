import React, { useEffect, useState } from 'react';
import styled from "styled-components";
// import { colorTheme, unitProvider, twoWayCss } from '@/component/global/provider';

const CInputBox = styled.input
                `
                width: 100%;
                min-height: 43px;
                `
;
/**
 * 커스텀 SelectBox
 * 
 * @param {*} props
 *  -> background
 *  -> font-size
 *  -> color
 *  -> font-weight
 *  -> border-radius
 *  -> padding
 */
function CustomInputBox(props) {

    const [name, setName] = useState('');
    const [text, setText] = useState('');

    /**
     * name useEffect
     */
    useEffect(() => {
        setName(props.name);
    }, [props.name]);

    /**
     * text useEffect
     */
    useEffect(() => {
        setText(props.text);
    }, props.text);

    function emitValue(target) {
        props.change({name: props.name, val : target.value});
    }

    return (
            <CInputBox
                onChange={(e) => emitValue(e.target)}
            />
    );
}

export { CustomInputBox } 