import http from '../utils/http'

export const getSwiperList = parms => http('/home/swiperdata', parms)

export const getGoodsList = parms => http('/goods/search', parms)

export const getCategoryList = parms => http('/home/floordata', parms)

export const getGoodsDetail = parms => http('/goods/detail', parms)