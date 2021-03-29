<template>
	<view class="pages">
    <goods-list :goods="goodsList" @clickItem="onClickGoodsItem"></goods-list>
    <view v-if="hasMoreData" class="nodata">----- 我是有底线的 -----</view>
  </view>
</template>

<script>
import goodsList from "../../components/goodsLIst/goodsList";
	export default {
		data() {
			return {
				goodsList: [],
        pagenum: 1,
        total: 0,
        hasMoreData: false
			}
		},
    onLoad() {
      this.getGoodsList()
		},
    onPullDownRefresh(){
      this.pagenum = 1
      this.goodsList = []
      this.hasMoreData = false
      setTimeout(() => {
        this.getGoodsList('isPullDown')
      }, 1000)
    },
    onReachBottom(){
      if(this.goodsList.length == this.total) return this.hasMoreData = true
      this.pagenum++
      this.getGoodsList()
    },
		methods: {
			async	getGoodsList(isPullDown){
        const { goods, total } = await this.$api.getGoodsList({query: '创维', pagenum: this.pagenum, pagesize: 10})
        this.goodsList = [...this.goodsList, ...goods]
        this.total = total
        isPullDown === 'isPullDown' && uni.stopPullDownRefresh()
      },
      onClickGoodsItem(id){
        uni.navigateTo({url: '/pages/goodsDetail/goodsDetail?goodsId='+id})
      }
		},
    components: { goodsList }
	}
</script>

<style lang="scss" scoped>
page{
  background-color: #eee;
}
  .pages{
    padding-bottom: 20rpx;
    .nodata{
      color: #666;
      font-size: 28rpx;
      text-align: center;
    }
  }
</style>
