<template>
	<button type="primary" @click="cx">查询</button>
  <view class="category">
    <view v-for="memorabilia in memorabilias" :key="memorabilia.id" class="table-row">
      <view class="table-cell">
        <text>id: {{ memorabilia.id }}</text>
      </view>
      <view class="table-cell">
        <text>happenTime: {{ memorabilia.happenTime }}</text>
      </view>
      <view class="table-cell">
        <text>createTime: {{ memorabilia.createTime }}</text>
      </view>
      <view class="table-cell">
        <text>updateTime: {{ memorabilia.updateTime }}</text>
      </view>
      <view class="table-cell">
        <text>content: {{ memorabilia.content }}</text>
      </view>
      <view class="table-cell1">
        <text></text>
      </view>
      <br>
    </view>
  </view>
</template>


<script>
	import { getRequest } from '@/http/index.js'
	export default {
		data() {
			return {
				searchValue: '',
				bgcolor: '#1296db',
				frontColor: '#ffffff',
				type: 'bottom',
				memorabilias:[],
				articles:[],
				cur:0
			}
		},
		onLoad() {
			//导航栏背景
			uni.setNavigationBarColor({
				backgroundColor: this.bgcolor,
				frontColor: this.fontColor
			})
			//this.init();
			
		},

		methods: {
			cx(){
				getRequest('api/memorabilia/all')
				.then(res => {
					this.memorabilias = res.data.memorabilias;
					console.log(this.memorabilias);
					// this.articleCats.push({})
					// articleCats.forEach(item => {
					// 	if(item.content != '推荐')
					// 		this.articleCats.push(item);
					// 	else
					// 		this.articleCats[0] = item;
					// })
					
				}).catch(err => {
					console.error(err);
				})
			},
			
			search(e) {
				console.log(e)
			},
			scroll(e) {
				// console.log(e)
			}
		}
	}
</script>

<style>
	.category {
	    display: flex;
	    flex-wrap: wrap;
	  }
	  .table-row {
	    width: 50%; /* 两列 */
	    display: flex;
	    flex-wrap: wrap;
	  }
	  .table-cell {
	    width: 50%; /* 一半宽度 */
		border: 1px solid #000; /* 添加边框样式 */
		padding: 5px; /* 添加内边距 */
	  }
	  .table-cell1 {
	    width: 50%; /* 一半宽度 */
	  		padding: 5px; /* 添加内边距 */
	  }

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		height: 60rpx;
		border-bottom: 1upx solid #ccc;
	}
	/deep/::-webkit-scrollbar{
		display: none;
		width: 0;
		height: 0;
	}

	.cur-item{
		font-size: 28rpx;
		font-weight: bold;
		color: white;
		background-color: #1296db;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100upx;
		line-height: 60rpx;
		text-align: center;
		font-size: 20rpx;
		overflow: hidden;
	}

	.more {
		position: absolute;
		top: 10upx;
		right: 0;
		background-color: #f5f5f5;
	}
</style>