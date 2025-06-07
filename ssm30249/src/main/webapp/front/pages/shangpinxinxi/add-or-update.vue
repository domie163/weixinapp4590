<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0 0 240rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221219/e2fba4798c544678b229915b312732b5.png) no-repeat center bottom / 100% auto,#f6f6f6","height":"auto"}'>
		<form :style='{"width":"100%","padding":"100rpx 40rpx","background":"none","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商家账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangjiazhanghao" v-model="ruleForm.shangjiazhanghao" placeholder="商家账号"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">店铺名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.dianpumingcheng" v-model="ruleForm.dianpumingcheng" placeholder="店铺名称"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品编号</view>
				<view :style='{"padding":"0px 24rpx","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"#666","flex":"1"}' class="right-input">
					{{ruleForm.shangpinbianhao}}
				</view>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangpinmingcheng" v-model="ruleForm.shangpinmingcheng" placeholder="商品名称"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 20rpx 0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品分类</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="shangpinfenleiChange" :value="shangpinfenleiIndex"  :range="shangpinfenleiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.shangpinfenlei?ruleForm.shangpinfenlei:"请选择商品分类"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="" @tap="shangpintupianTap">
				<view :style='{"width":"auto","padding":"0 20rpx 0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品图片</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.shangpintupian" :src="baseUrl+ruleForm.shangpintupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品规格</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangpinguige" v-model="ruleForm.shangpinguige" placeholder="商品规格"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">价格</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.price" v-model="ruleForm.price" placeholder="价格"></input>
			</view>
			
			<!-- 否 -->
 

			
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#111","fontWeight":"500"}' class="title">商品详情</view>
                <xia-editor ref="editor" :style='{"minHeight":"300rpx","border":"0px solid #f7de91","padding":"16rpx","boxShadow":"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6","borderRadius":"16rpx","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","width":"100%","height":"auto"}' v-model="ruleForm.shangpinxiangqing" placeholder="商品详情" @editorChange="shangpinxiangqingChange"></xia-editor>
			</view>
			
			<view :style='{"width":"100%","margin":"40rpx 0 0 0","justifyContent":"space-between","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0","color":"#069ffa","borderRadius":"16rpx","background":"radial-gradient(circle, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","width":"48%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="clicktimeConfirm" ref="clicktime" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				shangjiazhanghao: '',
				dianpumingcheng: '',
				shangpinbianhao: this.getUUID(),
				shangpinmingcheng: '',
				shangpinfenlei: '',
				shangpintupian: '',
				shangpinguige: '',
				shangpinxiangqing: '',
				price: '',
				},
				shangpinfenleiOptions: [],
				shangpinfenleiIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   shangjiazhanghao : false,
                   dianpumingcheng : false,
                   shangpinbianhao : false,
                   shangpinmingcheng : false,
                   shangpinfenlei : false,
                   shangpintupian : false,
                   shangpinguige : false,
                   shangpinxiangqing : false,
                   thumbsupnum : false,
                   crazilynum : false,
                   clicktime : false,
                   price : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.shangjiazhanghao = this.user.shangjiazhanghao
			this.ro.shangjiazhanghao = true;
			this.ruleForm.dianpumingcheng = this.user.dianpumingcheng
			this.ro.dianpumingcheng = true;


			// 下拉框
			res = await this.$api.option(`shangpinfenlei`,`shangpinfenlei`,{});
			this.shangpinfenleiOptions = res.data;
            this.shangpinfenleiOptions.unshift("请选择商品分类");

			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`shangpinxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='shangjiazhanghao'){
					this.ruleForm.shangjiazhanghao = obj[o];
					this.ro.shangjiazhanghao = true;
					continue;
					}
					if(o=='dianpumingcheng'){
					this.ruleForm.dianpumingcheng = obj[o];
					this.ro.dianpumingcheng = true;
					continue;
					}
					if(o=='shangpinbianhao'){
					this.ruleForm.shangpinbianhao = obj[o];
					this.ro.shangpinbianhao = true;
					continue;
					}
					if(o=='shangpinmingcheng'){
					this.ruleForm.shangpinmingcheng = obj[o];
					this.ro.shangpinmingcheng = true;
					continue;
					}
					if(o=='shangpinfenlei'){
					this.ruleForm.shangpinfenlei = obj[o];
					this.ro.shangpinfenlei = true;
					continue;
					}
					if(o=='shangpintupian'){
					this.ruleForm.shangpintupian = obj[o].split(",")[0];
					this.ro.shangpintupian = true;
					continue;
					}
					if(o=='shangpinguige'){
					this.ruleForm.shangpinguige = obj[o];
					this.ro.shangpinguige = true;
					continue;
					}
					if(o=='shangpinxiangqing'){
					this.ruleForm.shangpinxiangqing = obj[o];
					this.ro.shangpinxiangqing = true;
					continue;
					}
					if(o=='thumbsupnum'){
					this.ruleForm.thumbsupnum = obj[o];
					this.ro.thumbsupnum = true;
					continue;
					}
					if(o=='crazilynum'){
					this.ruleForm.crazilynum = obj[o];
					this.ro.crazilynum = true;
					continue;
					}
					if(o=='clicktime'){
					this.ruleForm.clicktime = obj[o];
					this.ro.clicktime = true;
					continue;
					}
					if(o=='price'){
					this.ruleForm.price = obj[o];
					this.ro.price = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            shangpinxiangqingChange(e) {
                this.ruleForm.shangpinxiangqing = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			clicktimeConfirm(val) {
				console.log(val)
				this.ruleForm.clicktime = val.result;
				this.$forceUpdate();
			},

			// 下拉变化
			shangpinfenleiChange(e) {
				this.shangpinfenleiIndex = e.target.value
				this.ruleForm.shangpinfenlei = this.shangpinfenleiOptions[this.shangpinfenleiIndex]
			},

			shangpintupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.shangpintupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

























//跨表计算判断
				var obj;
				if((!this.ruleForm.shangpinmingcheng)){
					this.$utils.msg(`商品名称不能为空`);
					return
				}
				if((!this.ruleForm.shangpinfenlei)){
					this.$utils.msg(`商品分类不能为空`);
					return
				}
				if(this.ruleForm.thumbsupnum&&(!this.$validate.isIntNumer(this.ruleForm.thumbsupnum))){
					this.$utils.msg(`赞应输入整数`);
					return
				}
				if(this.ruleForm.crazilynum&&(!this.$validate.isIntNumer(this.ruleForm.crazilynum))){
					this.$utils.msg(`踩应输入整数`);
					return
				}
				if((!this.ruleForm.price)){
					this.$utils.msg(`价格不能为空`);
					return
				}
				if(this.ruleForm.price&&(!this.$validate.isNumber(this.ruleForm.price))){
					this.$utils.msg(`价格应输入数字`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`shangpinxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`shangpinxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`shangpinxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`shangpinxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`shangpinxinxi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
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
