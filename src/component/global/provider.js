/**
 * styled-component에 활용하는 css를 컨버팅하는 역할
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

export { colorTheme, unitProvider, twoWayCss } 