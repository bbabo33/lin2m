import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { colorTheme } from '@/component/global/provider';

const CSelectBox = styled.select
    `
                width: 100%;
                color: ${props => colorTheme[props.color] || '#22252F'};
                background: ${props => colorTheme[props.bgColor] || '#ffffff'};
                min-height: 43px;
                font-size: inherit;
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

    const [name, setName] = useState('');
    const [bgColor, setBgColor] = useState('$color07');
    const [color, setColor] = useState('$color01');

    /**
     * name useEffect
     */
    useEffect(() => {
        setName(props.name);
    }, [props.name]);

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

    function emitValue(target) {
        props.change({name: props.name, val : target.value});
    }

    return (<CSelectBox
                bgColor={bgColor}
                color={color}
                onChange={(e) => emitValue(e.target)}
            >
                <option value=''>선택</option>
                {props.options && props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </CSelectBox>
    );
}

export { CustomSelectBox } 