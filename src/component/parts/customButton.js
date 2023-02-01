import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { colorTheme, unitProvider, twoWayCss } from '@/component/global/provider';

const CButton = styled.button
                `
                width: 100%;
                height: 100%;
                color: ${props => colorTheme[props.color] || '#22252F'};
                background: ${props => colorTheme[props.bgColor] || '#ffffff'};
                font-size: ${props => unitProvider(props.size || 20, 'px')};
                font-weight: ${props => props.weight || 400};
                border-radius: ${props => unitProvider(props.borderRadius || 0, 'px')};
                border: none;
                &:hover {cursor: pointer};
                padding: ${props => twoWayCss(props.padding.tb, props.padding.lr, 'px')};
                `
;
/**
 * 커스텀 버튼
 * 
 * @param {*} props
 *  -> background
 *  -> font-size
 *  -> color
 *  -> font-weight
 *  -> border-radius
 *  -> padding
 */
function CustomButton(props) {

    const [bgColor, setBgColor] = useState('$color07');
    const [size, setSize] = useState(20);
    const [color, setColor] = useState('$color01');
    const [weight, setWeight] = useState(400);
    const [borderRadius, setBorderRadius] = useState(0);
    const [padding, setPadding] = useState({tb: 0, lr: 0});

    /**
     * bgColor useEffect
     */
    useEffect(() => {
        setBgColor(props.bgColor);
    }, [props.bgColor]);

    /**
     * size useEffect
     */
    useEffect(() => {
        setSize(props.size);
    }, [props.size]);

    /**
     * color useEffect
     */
    useEffect(() => {
        setColor(props.color);
    }, [props.color]);

    /**
     * weight useEffect
     */
    useEffect(() => {
        setWeight(props.weight);
    }, [props.weight]);

    /**
     * borderRadius useEffect
     */
    useEffect(() => {
        setBorderRadius(props.borderRadius);
    }, [props.borderRadius]);

    /**
     * padding useEffect
     */
    useEffect(() => {
        setPadding(props.padding);
        // makeRender();
    }, [props.padding]);

    return (<CButton bgColor={bgColor} 
                    size={size} 
                    color={color} 
                    weight={weight} 
                    borderRadius={borderRadius} 
                    padding={padding}
                    onClick={() => props.click({name: 'hong', title: '성진'})}
                    >
                        {props.children}
            </CButton>
    );
}

export { CustomButton } 