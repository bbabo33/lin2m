import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { colorTheme } from '@/component/global/provider';

const CSelectBox = styled.select
                `
                width: 100%;
                color: ${props => colorTheme[props.color] || '#22252F'};
                background: ${props => colorTheme[props.bgColor] || '#ffffff'};
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
function CustomSelectBox(props) {

    const [bgColor, setBgColor] = useState('$color07');
    const [color, setColor] = useState('$color01');

    /**
     * bgColor useEffect
     */
    useEffect(() => {
        setBgColor(props.bgColor);
    }, [props.bgColor]);

    /**
     * color useEffect
     */
    useEffect(() => {
        setColor(props.color);
    }, [props.color]);

    return (<CSelectBox bgColor={bgColor} 
                    color={color} >
                        {props.children}
            </CSelectBox>
    );
}

export { CustomSelectBox } 