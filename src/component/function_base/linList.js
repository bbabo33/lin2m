import React, { Fragment, useEffect, useState } from 'react';
import '@/scss/component/function_base/linList.scss';

function LinList(props) {

    // Fragment 쓰면 DOM안에서 리딩 후 지워진다
    return(
        // <Fragment>
        <div className="list">
            <div className="list--search"></div>
            <div className="list--content"></div>
        </div>
        // </Fragment>
    );
}

export { LinList };
