<template>
	<view class="pages">
		 <scroll-view class="title" scroll-y>
       <view :class="{active: activeIndex === index}" v-for="(item, index) in categoryList" :key="index" @click="onClickTitle(index)">{{item.floor_title.name}}</view>
     </scroll-view>
		 <scroll-view v-if="categoryList.length" class="content" scroll-y>
       <view class="content-item" v-for="(item, index) in categoryList[activeIndex].product_list" :key="index" @click="onClickPreviewImage(item.image_src)">
         <image :src="item.image_src" mode="widthFix"></image>
       </view>
     </scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [],
        activeIndex: 0
			}
		},
    onLoad(){
      this.getCategoryList()
    },
		methods: {
			async getCategoryList(){
        const res = await this.$api.getCategoryList()
        this.categoryList = [...res, ...res, ...res, ...res, ...res]
      },
      onClickTitle(index){
        this.activeIndex = index
      },
      onClickPreviewImage(current){
        const urls = this.categoryList[this.activeIndex].product_list.map(item => item.image_src)
        uni.previewImage({ current, urls})
      }
		}
	}
</script>

<style lang="scss" scoped>
page{
  height: 100%;
}
.pages{
  height: 100%;
  display: flex;
  .title{
    height: 100%;
    width: 300rpx;
    border-right: 2rpx solid #eee;
    view{
      border-top: 2rpx solid #eee;
      line-height: 100rpx;
      text-align: center;
      &.active{
        color: #fff;
        background-color: $color-parmary;
      }
    }
  }
  .content{
    height: 100%;
    &-item{
      padding: 20rpx 20rpx 0 20rpx;
      image{
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>
