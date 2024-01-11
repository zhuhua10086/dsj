<template>
	<view>
		
		<uni-forms class="myForm" ref="myForm" :modelValue="add" :rules="rules">
			<uni-forms-item name="content" required>
				<uni-easyinput class="input" inputmode="content" v-model="add.content" placeholder="请输入大事件名字"
					suffix-icon="content" />
			</uni-forms-item>
			<uni-forms-item name="happenTime" required>
							<uni-easyinput class="input" v-model="add.happenTime" placeholder="请输入大事件时间" suffix-icon="happenTime" />
						</uni-forms-item>
			<uni-forms-item name="userId" required>
				<uni-easyinput class="input" v-model="add.userId" placeholder="请输入大事件userId"
					suffix-icon="userId" />
			</uni-forms-item>
			<uni-forms-item name="id" required>
				<uni-easyinput class="input" v-model="add.id" placeholder="请输入大事件ID"
					suffix-icon="id" />
			</uni-forms-item>
			<button type="primary" @click="tj">提交</button>
			
		</uni-forms>

<view class="">
	<uni-forms-item name="id" required>
		<uni-easyinput class="input" v-model="add.id" placeholder="请输入大事件ID"
			suffix-icon="id" />
	</uni-forms-item>
	<button type="primary" @click="cx">查询</button>
</view>
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
	</view>
</template>

<script>
	import { postRequest} from '@/http/index.js'
	import { getRequest } from '@/http/index.js'
	export default {
		data() {
			return {
				memorabilias:[],
				add:{
					content:'',
					happenTime:new Date().toISOString().substr(0, 16),
					userId:'',
					id:''
				},
				loading:true,
				rules:{
					content:{
						rules:[
							{
								required:true,
								errorMessage:'必填项'
							},
						]
					},
					happenTime:{
						rules:[
							{
								required:true,
								errorMessage:'必填项'
							},
						]
					},
					userId:{
						rules:[
							{
								required:true,
								errorMessage:'必填项'
							},
						]
					},
					id:{
						rules:[
							{
								required:true,
								errorMessage:'必填项'
							},
						]
					},
				}
			}
		},
		onReady(){
			this.$refs.myForm.setRules(this.rules);
		},
		methods: {
			tj(){
				
			    this.$refs.myForm.validate().then(() => {
			        // 表单验证通过，发送提交请求
			        postRequest('api/memorabilia/add', this.add)
			            .then(response => {
			                // 处理提交成功的逻辑，例如跳转页面或显示提交成功的提示信息
			                console.log('提交成功', response);
			                // 例如跳转到提交成功页面
			                 
			            })
			            .catch(error => {
			                // 处理提交失败的逻辑，例如显示注提交失败的提示信息
			                console.error('提交失败', error);
			                // 例如显示提交失败的提示信息
			                this.$message.error('提交失败，请重试');
			            });
			    }).catch(errors => {
			        // 表单验证未通过，errors包含了每个字段的验证错误信息
			        console.log('表单验证未通过', errors);
			        // 可以根据具体情况处理验证未通过的逻辑，例如显示错误提示信息
			        this.$message.error('请填写正确的信息');
			    });
			},
			cx(){
				const id = this.add.id;
				console.log(id);
				getRequest(`api/memorabilia/one/${id}`)
				.then(res => {
					 this.memorabilias = [res.data.memorabilia]; 
					 console.log(this.memorabilias);
					}).catch(err => {
					console.error(err);
				})
			},
			btnEmailCode(){
				
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
	.myForm {
		padding: 40px 10px 0 10px;
		margin: 10px;
		height: calc(50vh - 140px);
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
	}

	.myForm-emailCode {
		display: flex
	}

	.myForm-emailCode .input {
		width: 60%;
	}

	.myForm-emailCode button {
		width: 40%;
	}

	.logo {
		width: 100%;
		height: 140px;
		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 0 0 10px 10px;

	}

	image {
		width: 100px;
		height: 100px;

	}
</style>