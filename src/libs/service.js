import axios from './axios'

// 获取机构列表
export function getOrgList (pOrgCode) {
    return axios.post('/common/org', { pOrgCode })
}

export function downloadBlob (url, data) {
    return axios.post(url, data, { responseType: 'blob' }).then(res => {
        const blob = new Blob([res.data])
        const fileName = decodeURIComponent(res.headers['content-disposition'].split(';')[1].split('filename=')[1])
        if ('download' in document.createElement('a')) { // 非IE下载
            let a = document.createElement('a')
            a.download = fileName
            a.style.display = 'none'
            a.href = URL.createObjectURL(blob)
            document.body.appendChild(a)
            a.click()
            URL.revokeObjectURL(a.href) // 释放URL 对象
            document.body.removeChild(a)
        } else { // IE10+下载
            navigator.msSaveBlob(blob, fileName)
        }
    })
}

export function downloadForm (url, data) {
    // let iframe = document.createElement('iframe')
    let form = document.createElement('form')
    form.method = 'post'
    form.action = `${process.env.VUE_APP_BASEURL}${url}`
    for (let key in data) {
        let i = document.createElement('input')
        i.type = 'hidden'
        i.value = data[key]
        i.name = key
        form.appendChild(i)
    }
    // iframe.appendChild(form)
    document.body.appendChild(form)
    form.submit()
    form.remove()
    // iframe.remove()
}
