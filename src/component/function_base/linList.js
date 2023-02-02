// import React, { Fragment, useEffect, useState } from 'react';
import React from 'react';
import '@/scss/component/function_base/linList.scss';
import { InfoFrame } from '@/component/parts/info_frame';
import { CustomButton, CustomSelectBox, CustomInputBox, Grid } from '@/component/parts/index';

function LinList(props) {

    const search = {
        serverNm: '',
        itemNm: '',
        enchant: 0,
        page: 1,
        size: 10,
    };

    const enchantOptions = [
        { name: '1', value: 1}
        ,{ name: '2', value: 2}
        ,{ name: '3', value: 3}
    ];

    const serverOptions = [
        { name: '1', value: 1}
        ,{ name: '2', value: 2}
        ,{ name: '3', value: 3}
    ];

    function buttonFunc() {
        // console.log(search);
    }

    function selectChange(obj) {
        search[obj.name] = obj.val;
        // console.log(search);
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
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
        {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
    ];

    // Fragment 쓰면 DOM안에서 리딩 후 지워진다
    return(
        // <Fragment>
        <div className="list">
            <div className="list-search">
                <InfoFrame bgColor="$color03" borderRadius="10" padding={{tb: 8.5, lr: 40 }} minHeight={43}>
                    <div className="list-search--area">
                        <div className="list-search--area--group">
                            <div className="search-title">서버</div>
                            <div className="search-text">
                                <CustomSelectBox change={selectChange} name='serverNm' default={search.serverNm} options={serverOptions}>
                                    <option value="">서버선택</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </CustomSelectBox>
                            </div>
                        </div>
                        <div className="list-search--area--group">
                            <div className="search-title">아이템</div>
                            <div className="search-text">
                                <CustomInputBox change={selectChange} name='itemNm' /> 
                            </div>
                        </div>
                        <div className="list-search--area--group">
                            <div className="search-title">강화수치</div>
                            <div className="search-text">
                                <CustomSelectBox change={selectChange} name='enchant' default={search.enchant} options={enchantOptions}>
                                    {/* <option value="">서버선택</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option> */}
                                </CustomSelectBox>
                            </div>
                        </div>
                        <div>
                            <CustomButton bgColor="$color07" size={23} color="$color01" weight={400} borderRadius={10} padding={{tb: 6, lr: 19 }} click={buttonFunc}>검색</CustomButton>
                        </div>
                    </div>
                </InfoFrame>
            </div>
            <div className="list-content">
                <Grid colums={columns} hColor="$color07" hBackGround="$color05" bColor="$color01" bBackGround="$color06" datas={datas}/>
            </div>
        </div>
        // </Fragment>
    );
}

export { LinList };
