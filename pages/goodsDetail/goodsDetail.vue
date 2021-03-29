<template>
	<view class="pages">
		<swiper indicator-dots indicator-active-color="#b50e03" autoplay circular>
      <swiper-item v-for="item in goodsDetail.pics" :key="item.goods_id">
        <image :src="item.pics_big_url" mode="aspectFit"></image>
      </swiper-item>
    </swiper>

    <view class="info">
      <view class="info-price">
        <text>￥{{goodsDetail.goods_price}}</text>
        <text>￥{{goodsDetail.goods_price}}</text>
      </view>
      <view class="info-title">{{goodsDetail.goods_name}}</view>
    </view>

    <view class="stock">
      <view>货号：{{goodsDetail.goods_id}}</view>
      <view>库存：{{goodsDetail.goods_number}}</view>
    </view>

    <rich-text :nodes="goodsDetail.goods_introduce"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsDetail: {}
			}
		},
    onLoad(e){
      console.log(e);
      this.getGoodsDetail(e.id)
    },
		methods: {
			async getGoodsDetail(id){
        const res = await this.$api.getGoodsDetail({goods_id: id})
        this.goodsDetail = res
      }
		}
	}
</script>

<style lang="scss" scoped>
.pages{
  swiper{
    height: 750rpx;
    image{
      width: 100%;
      height: 100%;
    }
  }

  .info{
    padding: 20rpx 25rpx;
    border-top: 8rpx solid #eee;
    &-price{
      
    }
    &-title{

    }
  }
  .stock{
    padding: 20rpx 25rpx;
    border-top: 8rpx solid #eee;
  }
}
</style>
