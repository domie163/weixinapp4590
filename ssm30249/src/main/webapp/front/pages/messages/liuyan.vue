<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0 0 240rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221219/e2fba4798c544678b229915b312732b5.png) no-repeat center bottom / 100% auto,#f6f6f6","height":"auto"}'>
		<form :style='{"width":"100%","padding":"100rpx 40rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"12rpx 24rpx","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}'>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true" v-model="ruleForm.username" placeholder="留言人用户名"></input>
			</view>
			<view :style='{"padding":"12rpx 24rpx","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}'>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' v-model="ruleForm.content" placeholder="留言内容"></textarea>
			</view>
			<view @tap="uploadTap" :style='{"padding":"12rpx 24rpx","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}'>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.cpicture" :src="baseUrl+ruleForm.cpicture" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"width":"100%","justifyContent":"center","display":"flex","height":"auto"}'>
				<button :style='{"border":"0","padding":"0 40rpx","margin":"48rpx 20rpx","color":"#069ffa","borderRadius":"16rpx","background":"radial-gradient(circle, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"216rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red margin-tb-sm">提交</button>
			</view>
		</form>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					userid: '',
					username: '',
					content: '',
					reply: '',
					cpicture: '',
				},
				user: {}
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
            if(table == `huiyuan`){
                this.ruleForm.username = this.user.huiyuanzhanghao
            }
            if(table == `shangjia`){
                this.ruleForm.username = this.user.shangjiazhanghao
            }
			this.styleChange()
		},
		methods: {
			uploadTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.cpicture = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.my-publish-pv .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.myPublishForm.content.input.backgroundColor
					// })
				})
			},
			async onSubmitTap() {
				if(this.ruleForm.content){
                    this.ruleForm.avatarurl = uni.getStorageSync('headportrait')?uni.getStorageSync('headportrait'):'';
                    var sensitiveWords = "";
                    var sensitiveWordsArr = [];
                    if(sensitiveWords) {
                        sensitiveWordsArr = sensitiveWords.split(",");
                    }
                    for(var i=0; i<sensitiveWordsArr.length; i++){
                        //全局替换
                        var reg = new RegExp(sensitiveWordsArr[i],"g");
                        //判断内容中是否包括敏感词
                        if (this.ruleForm.content.indexOf(sensitiveWordsArr[i]) > -1) {
                            // 将敏感词替换为 **
                            this.ruleForm.content = this.ruleForm.content.replace(reg,"**");
                        }
                    }
					await this.$api.add(`messages`, this.ruleForm);
					this.$utils.msgBack('提交成功');
				}else{
					this.$utils.msg("请填写留言内容")
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
