
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import '@/scss/component/function_base/grid.scss';
import { colorTheme, unitProvider, forWayCss } from '@/component/global/provider';
import { CustomButton } from '@/component/parts/index';

const Container = styled.div
                    `
                    width: 100%;
                    box-sizing: border-box;
                    font-size: ${props => unitProvider(props.size || 28, 'px')};
                    `;

// 테이블에 border-collapse: collapse 주면 border-radius 안먹음. table-layout:fixed 사용
const Table = styled.table
                    `
                    width: 100%;
                    table-layout:fixed;
                    border-spacing: 0;
                    `;

const THead = styled.thead
                    `
                    color: ${props => colorTheme[props.hColor] || '#22252F'};
                    background: ${props => colorTheme[props.hBackGround] || '#ffffff'};
                    border-radius: 10px 10px 0 0;
                    `;

const TBody = styled.tbody
                    `
                    color: ${props => colorTheme[props.bColor] || '#22252F'};
                    background: ${props => colorTheme[props.bBackGround] || '#ffffff'};
                    `;

const Tr = styled.tr
                    `
                    height: 60px;
                    `;
                    
const RadiusTr = styled(Tr)
                    `
                    border-radius: ${props => forWayCss(props.radius.t || 0, props.radius.r || 0, props.radius.b || 0, props.radius.l || 0, 'px')};
                    `;


/**
 * Grid
 * 
 * 구성
 * 
 * Container
 *  -> Table(그리드)
 *      -> THead
 *      -> TBody
 *  -> Btn(더보기 버튼)
 * 
 * @param {*} props
 * -> header columns
 * -> data
 * -> page
 * -> size
 */
function Grid(props) {

    const [columns, setColumns] = useState([]);
    const [hColor, setHColor] = useState('$color01');
    const [hBackGround, setHBackGround] = useState('$color07');
    const [bColor, setBColor] = useState('$color01');
    const [bBackGround, setBBackGround] = useState('$color07');
    const [datas, setDatas] = useState([]);
    
    useEffect(() => {
        // console.log(props.colums);
        setColumns(props.colums);
    }, [props.columns]);

    useEffect(() => {
        // console.log(props.hColor);
        setHColor(props.hColor);
    }, [props.hColor]);

    useEffect(() => {
        // console.log(props.hBackGround);
        setHBackGround(props.hBackGround);
    }, [props.hBackGround]);
    
    useEffect(() => {
        // console.log(props.hColor);
        setBColor(props.bColor);
    }, [props.bColor]);

    useEffect(() => {
        // console.log(props.hBackGround);
        setBBackGround(props.bBackGround);
    }, [props.bBackGround]);

    useEffect(() => {
        // console.log(props.datas);
        setDatas(props.datas);
    }, [props.datas]);

    function buttonFunc(val) {
        alert(val);
    }

    function rowFunc(val, e) {
        console.log(val);
        console.log(e);
    }

    return (
        <Container>
            <Table className="grid-table">
                <colgroup>
                    {columns && columns.map((x, idx) => {return <col key={`colgroup-${idx}`} width={x.width} />})}
                </colgroup>
                <THead hColor={hColor} hBackGround={hBackGround} >
                    <RadiusTr radius={{t: 10, r: 10, b:0, l:0}}>
                        {columns && columns.map((x, idx) => {return <td key={`th-${idx}`}>{x.nm}</td>})}
                    </RadiusTr>
                </THead>
                <TBody bColor={bColor} bBackGround={bBackGround} >
                    {
                        datas && datas.map((row, trIdx) => {
                            return( 
                                <Tr className="grid-rows" key={`tr-${trIdx}`} onClick={(e) => rowFunc(row, e)}>
                                    {
                                        Object.entries(row).map(([key, value]) => {
                                            return <td key={`td-${key}`}>{value}</td>
                                        })
                                    }
                                </Tr>
                            )
                        })
                    }
                </TBody>
            </Table>
            <div className="btn-area">
                <CustomButton bgColor="$color05" size={28} color="$color07" weight={400} borderRadius={0} padding={{tb: 0, lr: 0 }} click={buttonFunc}>+more</CustomButton>
            </div>
        </Container>
    );
}

export { Grid };