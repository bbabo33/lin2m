// import React, { Fragment, useEffect, useState } from 'react';
import React from 'react';
import '@/scss/component/function_base/linList.scss';
import { InfoFrame } from '@/component/parts/info_frame';
import { CustomButton, CustomSelectBox, CustomInputBox } from '@/component/parts/index';

function LinList(props) {

    function buttonFunc(val) {
        alert(val);
    }

    // Fragment 쓰면 DOM안에서 리딩 후 지워진다
    return(
        // <Fragment>
        <div className="list">
            <div className="list--search">
                <InfoFrame bgColor="$color03" borderRadius="10" padding={{tb: 14.5, lr: 40 }} minHeight={43}>
                    <CustomButton bgColor="$color07" size={23} color="$color01" weight={400} borderRadius={10} padding={{tb: 6, lr: 19 }} click={buttonFunc}>검색</CustomButton>
                    <CustomSelectBox>
                        <option value="">서버선택</option>
                    </CustomSelectBox>
                    <CustomInputBox />
                </InfoFrame>
            </div>
            <div className="list--content"></div>
        </div>
        // </Fragment>
    );
}

export { LinList };
