// import React, { Fragment, useEffect, useState } from 'react';
import React from 'react';
import '@/scss/component/function_base/linList.scss';
import { InfoFrame } from '@/component/parts/info_frame';

function LinList(props) {

    // Fragment 쓰면 DOM안에서 리딩 후 지워진다
    return(
        // <Fragment>
        <div className="list">
            <div className="list--search">
                <InfoFrame bgColor="$color03" borderRadius="10" padding={{tb: 13.5, lr: 40 }} minHeight={43}>
                    {'childText 입니다'}
                </InfoFrame>
            </div>
            <div className="list--content"></div>
        </div>
        // </Fragment>
    );
}

export { LinList };
