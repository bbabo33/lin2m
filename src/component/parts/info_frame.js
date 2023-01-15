import React, { useState, useEffect } from 'react';
import '@/scss/component/parts/info_frame.scss';
import styled, { css } from "styled-components";

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

    const [bgColor, setBgColor] = useState('color08');
    const [borderRadius, setBorderRadius] = useState(0);

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
     */
    useEffect(() => {
        setBgColor(props.bgColor || 'color08');
        setBorderRadius(props.borderRadius || 0);
        makeRender();
    })

    function makeRender() {

        // 1. 테스트 용도로 bgColor를 className과 유사하게 맵핑하여 사용은 해봄
        // return (
        // <div className={ bgColor }>
        //     { bgColor }
        // </div>
        // )

        // 2. styled Component
        // 코드화된 색상 원값으로 찾기
        let colorText = findColor(bgColor);

        const Container = styled.div(
            css`
            background-color: #2685d5;
            border-radius: 10px;
            padding: 13.5px 40px;
            min-height: 43px;
            `,
        );

        return (
            <Container bg={colorText} borderRadius={borderRadius} >
                검색조건 용도 컴포넌트
            </Container>
        );
    }

    function findColor(codeColor) {
        // 컬러표
        const colors = {
            color01: '#22252F'
            ,color02: '#08599e'
            ,color03: '#2685d5'
            ,color04: '#6bb1ed'
            ,color05: '#96bfed'
            ,color06: '#F4F8FF'
            ,color07: '#ffffff'
            ,color08: '#00e668'
            ,color09: '#aeaaaa'
        };

        return colors[codeColor] || 'white';
    }

    return (
        makeRender()
    );
}

export { InfoFrame };

