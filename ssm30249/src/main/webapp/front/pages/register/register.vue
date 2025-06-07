<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"400rpx 80rpx 80rpx","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left top / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right top / 240rpx,url(http://codegen.caihongy.cn/20230321/b0b15b8f8c9e4b778250fc34ceaf14a0.png) no-repeat center top / 100% auto,#fff","height":"100%"}'>
		<view :style='{"width":"100%","padding":"24rpx","borderRadius":"8rpx","background":"#fff","display":"block","height":"auto"}'>
			<image :style='{"width":"160rpx","margin":"0 auto 24rpx auto","borderRadius":"8rpx","display":"none","height":"160rpx"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" mode="aspectFill"></image>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='huiyuan'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.huiyuanzhanghao"  type="text"  class="uni-input" name="" placeholder="会员账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='huiyuan'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='huiyuan'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='huiyuan'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.huiyuanxingming"  type="text"  class="uni-input" name="" placeholder="会员姓名" />
			</view>
			<picker :style='{"margin":"24rpx 0 24rpx 0","borderColor":"#d5d7d8","borderRadius":"0px","background":"#fff","borderWidth":"0 0 2rpx 0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='huiyuan'"  @change="huiyuanxingbieChange" :value="huiyuanxingbieIndex" :range="huiyuanxingbieOptions">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#767676"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='huiyuan'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.nianling"  type="text"  class="uni-input" name="" placeholder="年龄" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='huiyuan'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.youxiang"  type="text"  class="uni-input" name="" placeholder="邮箱" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='huiyuan'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.shoujihao"  type="text"  class="uni-input" name="" placeholder="手机号" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='huiyuan'" @tap="huiyuantouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"border":"2rpx solid #d5d7d8","padding":"4rpx","borderRadius":"0px","objectFit":"cover","display":"block","width":"200rpx","height":"120rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"border":"2rpx solid #d5d7d8","padding":"4rpx","borderRadius":"0px","objectFit":"cover","display":"block","width":"200rpx","height":"120rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.shangjiazhanghao"  type="text"  class="uni-input" name="" placeholder="商家账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.dianpumingcheng"  type="text"  class="uni-input" name="" placeholder="店铺名称" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.fuzeren"  type="text"  class="uni-input" name="" placeholder="负责人" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"rgb(255, 255, 255)","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.lianxifangshi"  type="text"  class="uni-input" name="" placeholder="联系方式" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 0px 0","height":"auto"}' v-if="tableName=='shangjia'" @tap="shangjiatouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"border":"2rpx solid #d5d7d8","padding":"4rpx","borderRadius":"0px","objectFit":"cover","display":"block","width":"200rpx","height":"120rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"border":"2rpx solid #d5d7d8","padding":"4rpx","borderRadius":"0px","objectFit":"cover","display":"block","width":"200rpx","height":"120rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<button :style='{"border":"0","padding":"0px","margin":"24rpx 0 24rpx 0","color":"#fff","borderRadius":"24rpx","background":"url(http://codegen.caihongy.cn/20221219/a612b8d092364fdf92654a5a57d0a4f0.png) no-repeat 80% center / auto 36rpx,linear-gradient(270deg, rgba(6,159,250,1) 0%, rgba(7,43,254,1) 80%, rgba(7,43,254,1) 100%),#072bfe","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","height":"88rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
                huiyuanxingbieOptions: [],
                huiyuanxingbieIndex: 0,
				ruleForm: {
                huiyuanzhanghao: '',
                mima: '',
                huiyuanxingming: '',
                xingbie: '',
                nianling: '',
                youxiang: '',
                shoujihao: '',
                touxiang: '',
                money: '',
                shangjiazhanghao: '',
                mima: '',
                dianpumingcheng: '',
                fuzeren: '',
                lianxifangshi: '',
                touxiang: '',
                shhf: '',
                money: '',
				},
				tableName:""
			}
		},
        components: {
            multipleSelect
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            }
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='huiyuan'){
                this.huiyuanxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.huiyuanxingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

            // 下拉变化
            huiyuanxingbieChange(e) {
                    this.huiyuanxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.huiyuanxingbieOptions[this.huiyuanxingbieIndex]
            },
            huiyuantouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            shangjiatouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.huiyuanzhanghao) && `huiyuan` == this.tableName){
					this.$utils.msg(`会员账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `huiyuan` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`huiyuan` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.huiyuanxingming) && `huiyuan` == this.tableName){
					this.$utils.msg(`会员姓名不能为空`);
					return
				}
				if(`huiyuan` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
					return
				}
				if(`huiyuan` == this.tableName && this.ruleForm.shoujihao&&(!this.$validate.isMobile(this.ruleForm.shoujihao))){
					this.$utils.msg(`手机号应输入手机格式`);
					return
				}
				if(`huiyuan` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				if((!this.ruleForm.shangjiazhanghao) && `shangjia` == this.tableName){
					this.$utils.msg(`商家账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `shangjia` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`shangjia` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.dianpumingcheng) && `shangjia` == this.tableName){
					this.$utils.msg(`店铺名称不能为空`);
					return
				}
				if(`shangjia` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
					this.$utils.msg(`联系方式应输入手机格式`);
					return
				}
				if(`shangjia` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
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
