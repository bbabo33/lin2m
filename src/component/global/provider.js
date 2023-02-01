/**
 * styled-component에 활용하는 css를 컨버팅하는 역할
 * 
 * css-in-js 라는 워딩에서
 * js에 css를 입히는 느낌으로 provider를 만들었음
 */
const colorTheme = {
    // 컬러표. _variable.scss와 일치해야함
    $color01: '#22252F',
    $color02: '#08599e',
    $color03: '#2685d5',
    $color04: '#6bb1ed',
    $color05: '#96bfed',
    $color06: '#F4F8FF',
    $color07: '#ffffff',
    $color08: '#00e668',
    $color09: '#aeaaaa',
}

/**
 * 값과 단위를 합침
 * @param {*} val -- 값 
 * @param {*} unit -- 단위
 * @returns 
 */
const unitProvider = function(val, unit) {
    const _val = val || 0;
    const _unit = unit || 'px';

    return _val+_unit;
}

/**
 * 위/아래, 양옆 값 주기
 * @param {*} tb -- top/bottom 값
 * @param {*} lr -- left/right 값
 * @param {*} unit -- 단위
 */
const twoWayCss = function(tb, lr, unit) {
    const _tb = tb || 0;
    const _lr = lr || 0;

    const _unit = unit || 'px';

    return `${unitProvider(_tb, _unit)} ${unitProvider(_lr, _unit)}`
}

/**
 * 네방향 값 주기
 * @param {*} t 
 * @param {*} r 
 * @param {*} b 
 * @param {*} l 
 * @param {*} unit 
 */
const forWayCss = function (t, r, b, l, unit) {
    const _t = t || 0;
    const _r = r || 0;
    const _b = b || 0;
    const _l = l || 0;

    const _unit = unit || 'px';

    return `${unitProvider(_t, _unit)} ${unitProvider(_r, _unit)} ${unitProvider(_b, _unit)} ${unitProvider(_l, _unit)}`
}

export { colorTheme, unitProvider, twoWayCss, forWayCss } 