<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0 0 0px","background":"#f6f6f6","height":"auto"}'>
		<swiper :style='{"width":"100%","padding":"20rpx 0 20rpx ","background":"none","height":"400rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","position":"relative","borderRadius":"24rpx","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"60rpx 0 60rpx","margin":"20rpx 0 0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right center / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left center / 240rpx,url(http://codegen.caihongy.cn/20221219/53c3a93f62624145a4483eea1ef21d2d.png) no-repeat center top,url(http://codegen.caihongy.cn/20221219/4d6a4e63542545c29d09fa1fffe85408.png) no-repeat center bottom,#069ffa","display":"flex","width":"100%","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"25%","padding":"12rpx 0","margin":"10rpx 0","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#eee","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		
		<!-- 新闻资讯 -->
		<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0","background":"#f6f6f6","display":"flex","width":"100%","justifyContent":"space-between"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","color":"#333","borderRadius":"0 0 0px 0","background":"none","display":"inline-block","width":"auto","fontSize":"32rpx","lineHeight":"80rpx","height":"80rpx"}'>公告信息</view>
				<text :style='{"padding":"0 40rpx","margin":"-16rpx 0px 0 0","fontSize":"28rpx","lineHeight":"80rpx","color":"#666","background":"none"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  
			
			
		  <!-- 样式4 -->
		  
		  <!-- 样式5 -->
		  
		  <!-- 样式6 -->
		  
		  <!-- 样式7 -->
		  <view class="news-box4" :style='{"width":"100%","padding":"100rpx 24rpx","margin":"0","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right top / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left center / 240rpx,url(http://codegen.caihongy.cn/20221219/53c3a93f62624145a4483eea1ef21d2d.png) no-repeat center top,url(http://codegen.caihongy.cn/20221219/1b095853bf4e4d35a2bb619408c392b3.png) no-repeat center bottom,linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%)","height":"auto"}'>
			<block v-for="(item,index) in news" :key="index">
			  <view @tap="onNewsDetailTap(item.id)" v-if="index%2==0" class="list-item" :style='{"boxShadow":"0 2rpx 0px rgba(0,0,0,.3)","padding":"0 0 24rpx","margin":"0 0 20rpx","flexWrap":"wrap","display":"flex","width":"100%","height":"auto"}'>
				<image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"16rpx","display":"block","height":"200rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
				<view class="list-item-body" :style='{"width":"calc(100% - 200rpx)","padding":"0","margin":"0","height":"auto"}'>
				  <view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#111","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="title ">{{item.title}}</view>
				  <view :style='{"padding":"0 20rpx","margin":"0","overflow":"hidden","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{item.introduction}}</view>
				  <view :style='{"width":"100%","padding":"0 20rpx","margin":"0","lineHeight":"48rpx","fontSize":"24rpx","color":"#666"}' class="time">{{item.addtime.split(" ")[0]}}</view>
				</view>
			  </view>
			  <view @tap="onNewsDetailTap(item.id)" v-if="index%2==1" class="list-item" :style='{"boxShadow":"0 2rpx 0px rgba(0,0,0,.3)","padding":"0 0 24rpx","margin":"0 0 20rpx","flexWrap":"wrap","display":"flex","width":"100%","height":"auto"}'>
				<view class="list-item-body" :style='{"width":"calc(100% - 200rpx)","padding":"0","margin":"0","height":"auto"}'>
				  <view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#111","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="title ">{{item.title}}</view>
				  <view :style='{"padding":"0 20rpx","margin":"0","overflow":"hidden","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{item.introduction}}</view>
				  <view :style='{"width":"100%","padding":"0 20rpx","margin":"0","lineHeight":"48rpx","fontSize":"24rpx","color":"#666"}' class="time">{{item.addtime.split(" ")[0]}}</view>
				</view>
				<image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"16rpx","display":"block","height":"200rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
			  </view>
			</block>
		  </view>
		  
		  <!-- 样式8 -->
		  
		  <!-- 样式9 -->
			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 新闻资讯 -->
		

		<!-- 商品推荐 -->
		<view class="listBox recommend">
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"100%","padding":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0","background":"#069ffa"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","color":"#fff","borderRadius":"0 0 0px 0","background":"none","display":"inline-block","width":"auto","fontSize":"32rpx","lineHeight":"80rpx","height":"80rpx"}'>商品信息推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<!-- 样式1 -->
			<view class="list-box style1" :style='{"padding":"60rpx 0 80rpx","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"0","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right bottom / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left center / 240rpx,url(http://codegen.caihongy.cn/20221219/d55bc2bf078b40b39162a99845585be0.png) no-repeat center top,url(http://codegen.caihongy.cn/20221219/4d6a4e63542545c29d09fa1fffe85408.png) no-repeat center bottom,linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%)","display":"flex","width":"calc(100% - 0px)","justifyContent":"space-between","height":"auto"}'>
				<view @tap="onDetailTap('shangpinxinxi',product.id)" v-for="(product,index) in shangpinxinxilist" :key="index" class="list-item" :style='{"border":"0px solid #f7de91","boxShadow":"0 8rpx 6rpx rgba(0,0,0,.1),inset 0px 0px 0px 0px #ffef92","padding":"0px 0 24rpx 0","margin":"40rpx 3% 40rpx","backgroundColor":"rgba(255,255,255,.8)","borderRadius":"24rpx","textAlign":"center","flexWrap":"wrap","display":"flex","width":"44%","position":"relative","height":"auto"}'>
					<view :style='{"padding":"0px 20rpx","margin":"0 auto","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"none","width":"96%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","order":"2"}' class="list-item-title ">{{product.shangpinmingcheng}}</view>
					<view :style='{"padding":"0px 20rpx","margin":"0 auto","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"none","width":"96%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","order":"2"}' class="list-item-title ">{{product.shangpinfenlei}}</view>
					<image :style='{"padding":"0","margin":"16rpx auto 0px","objectFit":"cover","borderRadius":"24rpx","display":"block","width":"260rpx","height":"260rpx","order":"1"}' class="list-item-image" mode="aspectFill" v-if="product.shangpintupian.substring(0,4)=='http'" :src="product.shangpintupian"></image>
					<image :style='{"padding":"0","margin":"16rpx auto 0px","objectFit":"cover","borderRadius":"24rpx","display":"block","width":"260rpx","height":"260rpx","order":"1"}' class="list-item-image" mode="aspectFill" v-else :src="product.shangpintupian?baseUrl+product.shangpintupian.split(',')[0]:''"></image>
					<view :style='{"padding":"0 32rpx 0 8rpx","color":"#c00","borderRadius":"0px","textAlign":"center","background":"none","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"700","order":"3"}' class="list-item-pirce">￥{{product.price}}</view>
				</view>
			</view>
			
			
			
			  
			
			
			  
			
			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 商品推荐 -->
		
		

		<!-- 商品列表 -->
																						<view class="listBox list">
			<view v-if="false && 1 == 1" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"padding":"80rpx 0 20rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0","background":"url(http://codegen.caihongy.cn/20221219/53c3a93f62624145a4483eea1ef21d2d.png) no-repeat center top,#069efa","display":"flex","width":"100%","justifyContent":"space-between"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","color":"#111","borderRadius":"0 0 0px 0","background":"none","display":"inline-block","width":"auto","fontSize":"32rpx","height":"80rpx"}'>农产品监督</view>
				<text :style='{"padding":"0 40rpx","margin":"-16rpx 0px 0 0","fontSize":"28rpx","color":"#eee","background":"none"}' @tap="onPageTap('nongchanpinjiandu')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  
		  		  
		  		  <!-- 样式3 -->
		  <view v-if="3 == 3" class="list-box style3" :style='{"padding":"0px 24rpx 60rpx","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"0px 0px 0px","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right top / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left center / 240rpx,url(http://codegen.caihongy.cn/20221219/1b095853bf4e4d35a2bb619408c392b3.png) no-repeat center bottom,linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%)","width":"calc(100% - 0px)","height":"auto"}'>
			<view @tap="onDetailTap('nongchanpinjiandu',product.id)" v-for="(product,index) in homenongchanpinjiandulist" :key="index" class="list-item" :style='{"border":"0px solid #f7de91","padding":"20rpx","boxShadow":"0 8rpx 6rpx rgba(0,0,0,.1),inset 0px 0px 0px 0px #ffef92","margin":"0 0 40rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"rgba(255,255,255,.8)","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			  			  			  			  			  			  			  			  			  			  			  <image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"200rpx"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
			  <image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"200rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
			  			  			  			  			  			  			  			  			  			  			  			  			  			  			  			  			  <view class="list-item-body" :style='{"border":"0px dotted #f7de91","padding":"0","margin":"0","overflow":"hidden","borderRadius":"16rpx","background":"none","width":"calc(100% - 224rpx)","position":"relative","height":"192rpx"}'>
				                				                				                				<view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","borderRadius":"16rpx","background":"none","width":"80%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title">{{product.shangpinmingcheng}}</view>
								                				<view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","borderRadius":"16rpx","background":"none","width":"80%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title">{{product.shangpinfenlei}}</view>
								                				                				                				                				                				                				                				                																																																																																																											  </view>
			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 1 == 3" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																																						<!-- 商品列表 -->
		
		

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				shangpinxinxilist: [],
				homenongchanpinjiandulist: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			// 公告信息
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list

			// 推荐信息
			if(uni.getStorageSync("userid")!==null) {
				res = await this.$api.recommend2('shangpinxinxi', {
                    page: 1,
                    limit: 4
                });
			} else {
				res = await this.$api.recommend('shangpinxinxi', {                                              
                    page: 1,
                    limit: 4
                });
			}
			this.shangpinxinxilist = res.data.list

			res = await this.$api.list('nongchanpinjiandu', {
                sfsh :'是',
				page: 1,

				limit: 6
			});
			this.homenongchanpinjiandulist = res.data.list
		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
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
