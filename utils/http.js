const BASE_URL = "https://api-hmugo-web.itheima.net/api/public/v1"
export default (url, parms, type) => {
  return new Promise( (resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      data: parms || {},
      method: type || 'GET',
      success: res => {
        if(res.statusCode !== 200) uni.showToast({title: '获取数据失败'})
        resolve(res.data.message)
      },
      fail: err => {
        uni.showToast({title: '请求失败'})
        reject(err)
      }
    })
  })
}