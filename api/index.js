import http from '../utils/http'

// home
export const getSwiperList = parms => http('/home/swiperdata', parms)

export const getGoodsList = parms => http('/goods/search', parms)