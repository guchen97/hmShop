<template>
	<view class="pages">
    <swiper indicator-dots indicator-active-color="#b50e03" autoplay circular>
      <swiper-item v-for="item in swiperList" :key="item.goods_id">
        <image :src="item.image_src" mode="aspectFit"></image>
      </swiper-item>
    </swiper>

    <view class="nav">
      <navigator class="nav-item" :url="item.path" v-for="(item, index) in navConfigs" :key="index">
        <view :class="`iconfont icon-${item.iconName}`"></view>
        <text>{{item.label}}</text>
      </navigator>
    </view>

    <view class="commend">
      <view class="commend-title">推荐商品</view>
      <goods-list :goods="goodsList" @clickItem="onClickGoodsItem"></goods-list>
    </view>
	</view>
</template>

<script>
import goodsList from '../../components/goodsLIst/goodsList'
	export default {
		data() {
			return {
        swiperList: [],
        goodsList: [],
        navConfigs: [
          {
            iconName: 'goods',
            label: '黑马超市',
            path: '/pages/goods/goods'
          },
          {
            iconName: 'about',
            label: '关于我们',
            path: '/pages/about/about'
          },
          {
            iconName: 'picture',
            label: '社区图片',
            path: '/pages/community/community'
          },
          {
            iconName: 'video',
            label: '学习视频',
            path: '/pages/study/study'
          }
        ]
			}
		},
		onLoad() {
      this.getSwiperList()
      this.getGoodsList()
		},
		methods: {
      async getSwiperList(){
        const res = await this.$api.getSwiperList()
        this.swiperList = res
      },
      async	getGoodsList(){
        const { goods } = await this.$api.getGoodsList({pagenum: 1, pagesize: 10})
        this.goodsList = goods
      },
      onClickGoodsItem(id){
        uni.navigateTo({url: '/pages/goodsDetail/goodsDetail?id='+id})
      }
		},
    components: { goodsList }
	}
</script>

<style lang="scss" scoped>
  .pages{
    swiper{
      height: 340rpx;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .nav{
      display: flex;
      justify-content: space-around;
      padding-bottom: 20rpx;
      &-item{
        text-align: center;
        view{
          width: 120rpx;
          height: 120rpx;
          line-height: 120rpx;
          margin: 20rpx;
          border-radius: 60rpx;
          color: #fff;
          background-color: $color-parmary;
          font-size: 50rpx;
        }
        .icon-picture{
          font-size: 45rpx;
        }
        text{
          font-size: 30rpx;
        }
      }
    }
    .commend{
      background-color: #eee;
      &-title{
        height: 100rpx;
        line-height: 100rpx;
        border-top: 6rpx solid #eee;
        color: $color-parmary;
        background-color: #fff;
        text-align: center;
        letter-spacing: 40rpx;
      }
    }
  }
</style>