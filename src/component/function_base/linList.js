// import React, { Fragment, useEffect, useState } from 'react';
import React from 'react';
import '@/scss/component/function_base/linList.scss';
import { InfoFrame } from '@/component/parts/info_frame';
import { CustomButton, CustomSelectBox, CustomInputBox, Grid } from '@/component/parts/index';
import { customLinAxios } from '@/axios/Axios';
import { itemGrade } from '@/component/global/commonCode';
import axios from 'axios';

export default class LinList extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: false,      // 로딩
      gridData: [],           // 그리드에 전달하는 data
      search: {            // 검색 조회 파라미터
        server_id: '',
        search_keyword: '',
        from_enchant_level: 0,
        page: 1,
        size: 10,
      },
      enchantOptions: [     // 검색 조건 강화옵션
        { name: '1', value: 1 }
        , { name: '2', value: 2 }
        , { name: '3', value: 3 }
        , { name: '4', value: 4 }
        , { name: '5', value: 5 }
        , { name: '6', value: 6 }
      ],
      serverOptions: [],      // 검색 조건 서버
      lastPage: 0,            // 그리드 라스트 페이지
      columns: [             // 그리드에 전달하는 columns
        { nm: '서버명', width: '15%' }
        , { nm: '아이템명', width: '25%' }
        , { nm: '강화', width: '10%' }
        , { nm: '현 최저가', width: '10%' }
        , { nm: '28일 평균가', width: '20%' }
        , { nm: '월드', width: '10%' }
        , { nm: '등급', width: '10%' }
      ],
    }

  }

  // 여러 API 하나로 처리
  axiosAll = function(apis, _self) {
    axios.all(
      apis.map((x) => x.api)
    )
    .then((result) => {
        (result || []).forEach((returnApi, idx) => {
          apis[idx].callBack(returnApi.data, _self);
        })
      }
    )
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      this.setState({ loading: false });
    });
  }

  // 검색버튼
  searchBtnFunc = function () {
    // console.log(this.state.search);

    this.setState({
      search: {
        ...this.state.search
        , page: 1
      }
    });

    let searchParam = this.state.search;
    searchParam.page = 1;

    const _self = this;

    const apis = [
      {api: customLinAxios.get('/market/items/search', { params: this.state.search }), callBack: this.parseSearchItem}
    ];

    this.axiosAll(apis, _self);
  }

  // 그리드 안에 더보기버튼
  moreBtnFunc = function() {

    const _self = this;

    /**
     * 이 경우, 바로 state가 변경되지 않음
     * setState 호출은 비동기적으로 이뤄지기 때문에 브라우저 이벤트가 끝날 시점에 state를 일괄적으로 업데이트한다
     */
    let pageNum = this.state.search.page;
    this.setState({
      search: {
        ...this.state.search
        , page: pageNum + 1
      }
    });

    let searchParam = this.state.search;
    searchParam.page = searchParam.page + 1;

    // console.log(this.state.search);
    // console.log(searchParam);

    const apis = [
      {api: customLinAxios.get('/market/items/search', { params: searchParam }), callBack: this.parseSearchItem}
    ];

    this.axiosAll(apis, _self);
  }

  selectServerChange (obj) {
    this.setState({
      search: {
        ...this.state.search
        , server_id: obj.val
      }
    });
  }

  selectEnchantChange (obj) {
    this.setState({
      search: {
        ...this.state.search
        , from_enchant_level: obj.val
      }
    });
  }

  selectItemChange (obj) {
    this.setState({
      search: {
        ...this.state.search
        , search_keyword: obj.val
      }
    });
  }

  // 서버 목록 조회 parse
  parseSearchServer(servers, _self) {
    let serverList = [];

    (servers || []).forEach((mainServer) => {
      mainServer.servers.forEach((x, idx) => {
        // name: ,value:
        serverList.push({ 'name': x.server_name, 'value': x.server_id });
      });
    });

    _self.setState({ serverOptions: serverList });
  }

  // 아이템 목록 조회 parse
  parseSearchItem(items, _self) {
    
    let gridData;

    if( _self.state.search.page === 1 ) {
      gridData = [];
    } else {
      gridData = _self.state.gridData;
    }

    (items.contents || []).forEach((item) => {
      gridData.push(
        {
          serverNm: item.server_name
          , itemNm: item.item_name
          , plus: item.enchant_level
          , lowPrice: item.now_min_unit_price
          , average: item.avg_unit_price
          , world: item.world ? '월드' : '지역'
          , grade: itemGrade[item.grade]
        }
      );
    });

    _self.setState({ gridData: gridData, lastPage: items.pagination.last_page });
  }

  enterPress() {
    this.searchBtnFunc();
  }

  // 해당 class에서 데이터를 조회하는 hook 기준은 componentDidMount
  componentDidMount() {
    this.setState({ loading: true });

    const _self = this;

    const apis = [
      {api: customLinAxios.get('/market/servers'), callBack: this.parseSearchServer}
      , {api: customLinAxios.get('/market/items/search', { params: this.state.search }), callBack: this.parseSearchItem}
    ]

    this.axiosAll(apis, _self);
  }

  componentDidUpdate() {
    console.log(this.state.gridData);
  }

  render() {
    if (this.state.loading) return <div>로딩중...</div>
    return (
      // Fragment 쓰면 DOM안에서 리딩 후 지워진다
      // <Fragment>
      <div className="list">
        <div className="list-search">
          <InfoFrame bgColor="$color03" borderRadius="10" padding={{ tb: 8.5, lr: 40 }} minHeight={43}>
            <div className="list-search--area">
              <div className="list-search--area--group">
                <div className="search-title">서버</div>
                <div className="search-text">
                  <CustomSelectBox change={this.selectServerChange.bind(this)} name='serverNm' options={this.state.serverOptions}>
                  </CustomSelectBox>
                </div>
              </div>
              <div className="list-search--area--group">
                <div className="search-title">아이템</div>
                <div className="search-text">
                  <CustomInputBox enterPress={this.enterPress.bind(this)} change={this.selectItemChange.bind(this)} name='itemNm' />
                </div>
              </div>
              <div className="list-search--area--group">
                <div className="search-title">강화수치</div>
                <div className="search-text">
                  <CustomSelectBox change={this.selectEnchantChange.bind(this)} name='enchant' options={this.state.enchantOptions}>
                    {/* <option value="">서버선택</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option> */}
                  </CustomSelectBox>
                </div>
              </div>
              <div>
                <CustomButton bgColor="$color07" size={23} color="$color01" weight={400} borderRadius={10} padding={{ tb: 6, lr: 19 }} click={() => this.searchBtnFunc()}>검색</CustomButton>
              </div>
            </div>
          </InfoFrame>
        </div>
        <div className="list-content">
          <Grid 
            colums={this.state.columns} 
            hColor="$color07" 
            hBackGround="$color05" 
            bColor="$color01" 
            bBackGround="$color06" 
            datas={this.state.gridData} 
            moreBtnFunc={this.moreBtnFunc.bind(this)}
            showMore={this.state.search.page != 0 && this.state.lastPage > this.state.search.page}
          />
        </div>
      </div>
      // </Fragment>
    )
  };
}

export { LinList };

// function LinList(props) {

//     const search = {
//         serverNm: '',
//         itemNm: '',
//         enchant: 0,
//         page: 1,
//         size: 10,
//     };

//     const enchantOptions = [
//         { name: '1', value: 1}
//         ,{ name: '2', value: 2}
//         ,{ name: '3', value: 3}
//     ];

//     const serverOptions = [];

//     function buttonFunc() {
//         customLinAxios.get('/market/servers')
//                     .then((result) => {
//                         console.log(result);
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                     })
//                     .finally(() => {

//                     });
//     }

//     function selectChange(obj) {
//         search[obj.name] = obj.val;
//         // console.log(search);
//     }

//     const columns = [
//         {nm: '서버명', width: '10%'}
//         ,{nm: '아이템명', width: '30%'}
//         ,{nm: '강화', width: '10%'}
//         ,{nm: '현 최저가', width: '10%'}
//         ,{nm: '28일 평균가', width: '20%'}
//         ,{nm: '월드', width: '10%'}
//         ,{nm: '등급', width: '10%'}
//     ];

//     const datas = [
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//         {serverNm: '에리카02', itemNm: '완력의 미스릴 티셔츠', plus: '+1', lowPrice: '250', average: '220', world: '지역', grade: '레어'},
//     ];

//     // Fragment 쓰면 DOM안에서 리딩 후 지워진다
//     return(
//         // <Fragment>
//         <div className="list">
//             <div className="list-search">
//                 <InfoFrame bgColor="$color03" borderRadius="10" padding={{tb: 8.5, lr: 40 }} minHeight={43}>
//                     <div className="list-search--area">
//                         <div className="list-search--area--group">
//                             <div className="search-title">서버</div>
//                             <div className="search-text">
//                                 <CustomSelectBox change={selectChange} name='serverNm' default={search.serverNm} options={serverOptions}>
//                                     <option value="">서버선택</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                 </CustomSelectBox>
//                             </div>
//                         </div>
//                         <div className="list-search--area--group">
//                             <div className="search-title">아이템</div>
//                             <div className="search-text">
//                                 <CustomInputBox change={selectChange} name='itemNm' />
//                             </div>
//                         </div>
//                         <div className="list-search--area--group">
//                             <div className="search-title">강화수치</div>
//                             <div className="search-text">
//                                 <CustomSelectBox change={selectChange} name='enchant' default={search.enchant} options={enchantOptions}>
//                                     {/* <option value="">서버선택</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option> */}
//                                 </CustomSelectBox>
//                             </div>
//                         </div>
//                         <div>
//                             <CustomButton bgColor="$color07" size={23} color="$color01" weight={400} borderRadius={10} padding={{tb: 6, lr: 19 }} click={buttonFunc}>검색</CustomButton>
//                         </div>
//                     </div>
//                 </InfoFrame>
//             </div>
//             <div className="list-content">
//                 <Grid colums={columns} hColor="$color07" hBackGround="$color05" bColor="$color01" bBackGround="$color06" datas={datas}/>
//             </div>
//         </div>
//         // </Fragment>
//     );
// }

// export { LinList };
