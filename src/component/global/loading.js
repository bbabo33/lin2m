import styled from "styled-components";

const LoadingLayer = styled.div
`
                    z-index: 1000;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: ${props => props.loading === 'true'? 'block': 'none'};
                    background-color: #8f8f8f96;
                    `;

const LoadingImg = styled.img

function Loading(props) {

    return(
        /**
         * styledComponent에서 boolean값으로 넘기려 하면 warning 뜸
         * boolean보다는 string value로 값을 넘겨서 그 값을 비교하는 방식으로 수정
         */
        <LoadingLayer loading={props.loading.toString()}>
            {/* <img src={require('@/assets/imgs/lineage2m.PNG')} /> */}
        </LoadingLayer>
    );
}

export { Loading }