<template>
	<view class="pages">
    <image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode="widthFix"></image>

		<view class="info">
      <view @click="callPhone">联系电话：400-618-9090 ( 点击拨打 )</view>
      <view>校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
    </view>

		<map :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 120.363172,
				latitude: 30.312212,
				scale: 13,
				markers:[
					{
						longitude: 120.363172,
						latitude: 30.312212,
						iconPath: '../../static/hmlogo.png',
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			callPhone(){
        uni.makePhoneCall({ phoneNumber: '400-618-9090' })
			}
		}
	}
</script>

<style lang="scss" scoped>
.pages{
  image{
    width: 100%;
  }
  .info{
    padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
		}
  }

  map{
		width: 100%;
		height: 750rpx;
	}
}
</style>
