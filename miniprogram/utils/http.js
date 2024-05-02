import http from 'wechat-http'

http.baseURL = 'https://live-api.itheima.net'

http.intercept.response=(res)=>{
    return res.data
}

export default http