import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { colorTheme, unitProvider, twoWayCss } from '@/component/global/provider';

const Container = styled.div
        `
        background-color: ${props => colorTheme[props.bgColor] || '#ffffff'};
        border-radius: ${props => unitProvider(props.borderRadius || 20, 'px')};
        padding: ${props => twoWayCss(props.padding.tb, props.padding.lr, 'px')};
        min-height: ${props => unitProvider(props.minHeight || 20, 'px')};
        `
;

/**
 * 검색조건 / content 등 내용을 담는 틀
 * 
 * 필요인자
 * @param {*} props
 *  -> padding
 *  -> background
 *  -> border-radius
 *  -> min-height
 * @returns 
 */
function InfoFrame(props) {

    const [bgColor, setBgColor] = useState('$color08');
    const [borderRadius, setBorderRadius] = useState(0);
    const [padding, setPadding] = useState({tb: 0, lr: 0});
    const [minHeight, setMinHeight] = useState(0);

    /**
     * https://ko.reactjs.org/docs/hooks-effect.html
     * React가 DOM을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우 사용
     * 
     * 현재 css를 변경하는데 적절하다고 생각하진 않지만, 연습용이니까...
     * 
     * props로 전달받은 색상 코드값을 scss에 어떻게 전달할 것인가...
     * 
     *  원하는 방식
     *  1. 부모에서 컴포넌트에 맞는 값을 object로 내림
     *  2. 자식 컴포넌트는 해당 색상코드, 또는 마진/패딩 상하좌우 값을 받음
     *  3. 해당 scss에 mixin으로 원하는 값을 전달하여 scss 적용
     * 
     *  -> 1. 테스트 용도로 bgColor를 className과 유사하게 맵핑하여 사용은 해봄
     *      -> 여러 값이 들어왔을 때, 한계성이 분명해보임
     *  
     *  -> 2. styled-components 사용
     *      -> 결국 inline css로 색상표 활용못함
     *      -> 어떤 경우에 사용하는게 맞는지
     */

    /**
     * bgColor useEffect
     */
    useEffect(() => {
        setBgColor(props.bgColor);
        // makeRender();
    }, [props.bgColor]);

    /**
     * borderRadius useEffect
     */
    useEffect(() => {
        setBorderRadius(props.borderRadius);
        // makeRender();
    }, [props.borderRadius]);

    /**
     * padding useEffect
     */
    useEffect(() => {
        setPadding(props.padding);
        // makeRender();
    }, [props.padding]);

    /**
     * minHeight useEffect
     */
    useEffect(() => {
        setMinHeight(props.minHeight);
        // makeRender();
    }, [props.minHeight]);

    // function makeRender() {

    //     // 1. 테스트 용도로 bgColor를 className과 유사하게 맵핑하여 사용은 해봄
    //     // return (
    //     // <div className={ bgColor }>
    //     //     { bgColor }
    //     // </div>
    //     // )

    //     // 2. styled Component
    //     // 코드화된 색상 원값으로 찾기
    //     //let colorText = findColor(bgColor);

    //     return (
    //         <Container bgColor={bgColor} borderRadius={borderRadius} padding={padding} minHeight={minHeight}>
    //             검색조건 용도 컴포넌트
    //         </Container>
    //     );
    // }

    return (
        <Container bgColor={bgColor} borderRadius={borderRadius} padding={padding} minHeight={minHeight}>
            { props.children }
        </Container>
    );
}

export { InfoFrame };

