import React from 'react';
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

    return (<CInputBox>
                {props.children}
            </CInputBox>
    );
}

export { CustomInputBox } 