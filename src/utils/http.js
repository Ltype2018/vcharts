
//axios封装
import axios from 'axios'
const service = axios.create({
    timeout:5000
})

service.interceptors.request.use((config) =>{
    return config
}, (error) =>{
    error.data = {}
    error.data.msg = "service error"
    return Promise.resolve(error)
})

service.interceptors.response.use((res) => {
    const status = res.status
    let msg = ''
    if (status < 200 || status >= 300) {
        msg = showStatus(status)
        if (typeof res.data === 'string') {
            res.data = {msg}
        } else {
            res.data.msg = msg
        }
    }
    return res
}, (error) => {
    error.data = {}
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    return Promise.resolve(error)
})


const showStatus = (status) => {
    let message = ''
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 401:
            message = '未授权，请重新登录(401)'
            break
        case 403:
            message = '拒绝访问(403)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
}

export default service