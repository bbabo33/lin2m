// import React, { Fragment, useEffect, useState } from 'react';
import React from 'react';
import '@/scss/component/function_base/linList.scss';
import { InfoFrame } from '@/component/parts/info_frame';
import { CustomButton, CustomSelectBox, CustomInputBox, Grid } from '@/component/parts/index';

function LinList(props) {

    function buttonFunc(val) {
        alert(val);
    }

    const columns = [
        {nm: '서버명', width: '10%'}
        ,{nm: '아이템명', width: '30%'}
        ,{nm: '강화', width: '10%'}
        ,{nm: '현 최저가', width: '10%'}
        ,{nm: '28일 평균가', width: '20%'}
        ,{nm: '월드', width: '10%'}
        ,{nm: '등급', width: '10%'}
    ];

    const datas = [
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
    ];

    // Fragment 쓰면 DOM안에서 리딩 후 지워진다
    return(
        // <Fragment>
        <div className="list">
            <div className="list--search">
                <InfoFrame bgColor="$color03" borderRadius="10" padding={{tb: 14.5, lr: 40 }} minHeight={43}>
                    {/* 
                    <CustomButton bgColor="$color07" size={23} color="$color01" weight={400} borderRadius={10} padding={{tb: 6, lr: 19 }} click={buttonFunc}>검색</CustomButton>
                    <CustomSelectBox>
                        <option value="">서버선택</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </CustomSelectBox>
                    <CustomInputBox /> 
                    */}
                </InfoFrame>
            </div>
            <div className="list--content">
                <Grid colums={columns} hColor="$color07" hBackGround="$color05" bColor="$color01" bBackGround="$color06" datas={datas}/>
            </div>
        </div>
        // </Fragment>
    );
}

export { LinList };
