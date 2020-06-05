import { dateFormat, numberFormat, manglingFormatCardNumber } from './tools'

const filters = {
    dateFormat,
    numberFormat,
    manglingFormatCardNumber
}

const importFilter = Vue => {
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    })
}

export default importFilter
