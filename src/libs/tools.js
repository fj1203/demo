/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
    const keysArr1 = Object.keys(obj1)
    const keysArr2 = Object.keys(obj2)
    if (keysArr1.length !== keysArr2.length) return false
    else if (keysArr1.length === 0 && keysArr2.length === 0) return true
    /* eslint-disable-next-line */
    else return !keysArr1.some(key => obj1[key] != obj2[key])
}

/**
 *
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @param [*] filter 只针对filter
 * @description 判断两个对象是否不相等，这两个对象的值可以是数字/字符串/对象[Object]
 */
export const objNotEqual = (obj1, obj2, filter) => {
    if (typeof obj1 !== 'object' || obj2 === undefined) return obj1 != obj2
    let keys1 = Object.keys(obj1).filter(item => !filter || filter.indexOf(item) > -1)
    let keys2 = Object.keys(obj2).filter(item => !filter || filter.indexOf(item) > -1)
    if (keys1.length !== keys2.length) return true
    else return keys1.some(key => objNotEqual(obj1[key], obj2[key]))
}

/**
 * @param [*] arr 数组
 * @param {*} obj 对象
 * @param [*] filter 只针对filter
 * @description 判断数组是否包含对象，对象的值可以是数字/字符串/对象[Object]
 */
export const objInArr = (arr = [], obj, filter) => arr.findIndex(item => !objNotEqual(item, obj, filter))

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * @description 日期格式化 dateFormat(date, fmt)
 */
export const dateFormat = (date, fmt = 'yyyy-MM-dd') => {
    if (date) date = (date instanceof Date) ? date : new Date(date)
    else return ''
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
    }
    Object.keys(o).forEach((k) => {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
        }
    })
    return fmt
}

/**
 * @description 金额数字格式化 numberFormat(str, fixed)
 */
export const numberFormat = (str, fixed) => {
    if (!str && str !== 0) return ''
    if (typeof str === 'string') str = str.replace(/,/g, '')
    let _thousandsRE = /\d{1,3}(?=(\d{3})+$)/g
    let _pointRe = /^(\d+)((\.\d+)?)$/
    let _replaceStr = '$&,'
    let _numberVal = str * 1
    let _string = _numberVal >= 0 ? String(str) : String(str).slice(1)
    let _fixed = fixed
    if (_fixed === undefined) fixed = 2
    _string = Number(_string).toFixed(fixed)
    let value = _string.replace(_pointRe, (str, s1, s2) => {
        return s1.replace(_thousandsRE, _replaceStr) + s2
    })
    return _numberVal >= 0 ? value : '-' + value
}
/**
 * @description 格式化银行卡 manglingFormatCardNumber(str, fixed)
 */
export const manglingFormatCardNumber = cardNumber => {
    if (cardNumber && cardNumber.length > 8) {
        return `${'*'.repeat(cardNumber.length - 2).replace(/(.{4})/g, `$1 `)}${cardNumber.length % 4 ? ' ' : ''}${cardNumber.slice(-2)}`
    }
    return cardNumber
}
