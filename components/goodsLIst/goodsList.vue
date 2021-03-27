<template>
	<view class="goods-list">
    <view class="goods-list-item" v-for="item in goods" :key="item.goods_id">
      <image :src="item.goods_small_logo"></image>
      <view class="goods-list-item-price">
        <text>￥{{item.goods_price}}</text>
        <text>￥{{item.goods_price}}</text>
      </view>
      <view class="goods-list-item-title">{{item.goods_name}}</view>
    </view>
	</view>
</template>

<script>
	export default {
    props: ['goods']
	}
</script>

<style lang="scss" scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15rpx;
    &-item{
      width: 326rpx;
      margin-bottom: 15rpx;
      padding: 15rpx;
      background-color: #fff;
      image{
        display: block;
        width: 80%;
        height: 300rpx;
        margin: 0 auto;
      }
      &-price{
        margin: 20rpx 0;
        color: $color-parmary;
        font-size: 30rpx;
        text:last-child{
          margin-left: 20rpx;
          color: #ccc;
          font-size: 24rpx;
          text-decoration: line-through;
        }
      }
      &-title{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;

        line-height: 45rpx;
        font-size: 28rpx;
      }
    }
  }
</style>
