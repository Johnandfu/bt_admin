(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-assets-deposit-charge~pages-assets-index~pages-assets-record~pages-assets-tradeAccount~pages-a~f70fe2d5"],{"14bc7":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),o={},i={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:o,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=i},2100:function(t,e,a){var n=a("617b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("a0615f46",n,!0,{sourceMap:!1,shadowMode:!1})},2216:function(t,e,a){"use strict";a.r(e);var n=a("d612"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"3e3b":function(t,e,a){"use strict";var n=a("bdb3"),o=a.n(n);o.a},5195:function(t,e,a){t.exports=a.p+"static/img/dark-bg-setting.3b228f3d.png"},"5d73":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uIcon:a("9edf").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[a("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),a("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?a("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[a("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?a("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?a("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[a("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),a("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),a("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?a("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},i=[]},"5e41":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uNavbar:a("b4e9").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content darkStyle"},[a("u-navbar",{class:{noboxshadow:1!=t.boxShadow},attrs:{"is-back":t.isBack,"custom-back":t.goToBack,title:t.title,leftIconColor:t.leftIconColor,"border-bottom":t.borderBottom}},[a("v-uni-view",{staticStyle:{flex:"1"},attrs:{slot:"default"},slot:"default"},[t._t("default")],2),a("v-uni-view",{staticClass:"slot-wrap",attrs:{slot:"right"},slot:"right"},[t._t("right")],2)],1)],1)},i=[]},"617b":function(t,e,a){var n=a("24fb"),o=a("1de5"),i=a("7cda"),r=a("7032");e=n(!1);var l=o(i),c=o(r);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 通用样式\r\n */[data-v-67988de8]:root{--border-color:#e4e7ed;--page-background-color:#1b2c42;--page-part-color:#e7fef9;--brand-color:#2befbc;--text-color:#202020;--popup-background:#fff;--popup-border-color:#e5e5e5;--navbar-height:44px;--active-color:#fff;--inactive-clor:#768da9;--subtext-color:#eee;--tabbar-color:#fff;--kline-background:#fff}.dark[data-v-67988de8]{--border-color:#3a495c;--page-background-color:#1b2c42;--page-part-color:#2a405c;--text-color:#768da9;--popup-background:#2a405c;--popup-border-color:#768da9;--tabbar-color:#2a405c;--kline-background:#2a405c;background-color:var(--page-background-color)!important;min-height:100vh;color:#e2e8e4}@font-face{font-family:DIN-Medium;src:url('+l+")}@font-face{font-family:DIN-Regular-2;src:url("+c+')}uni-page-body[data-v-67988de8]{width:100%;height:100%;color:#090909;background-color:var(--page-background-color);\r\n  /* font-family: \'DIN-Regular-2\', \'DIN-Medium\',"Arial","Microsoft YaHei","黑体","宋体",sans-serif; */font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,Hiragino Sans GB,Microsoft Yahei,sans-serif}body[data-v-67988de8]{background-color:var(--page-background-color)}\r\n/*设置项通用样式*/.u-navbar[data-v-67988de8]{width:100%}.u-navbar-fixed[data-v-67988de8]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-67988de8]{width:100%}.u-navbar-inner[data-v-67988de8]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-67988de8]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-67988de8]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-67988de8]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-67988de8]{flex:1}.u-title[data-v-67988de8]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-67988de8]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-67988de8]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},ad87:function(t,e,a){"use strict";var n=a("2100"),o=a.n(n);o.a},b4e9:function(t,e,a){"use strict";a.r(e);var n=a("5d73"),o=a("daaa");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("ad87");var r,l=a("f0c5"),c=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"67988de8",null,!1,n["a"],r);e["default"]=c.exports},bdb3:function(t,e,a){var n=a("e2ba");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("378437c6",n,!0,{sourceMap:!1,shadowMode:!1})},cd1f:function(t,e,a){"use strict";a.r(e);var n=a("5e41"),o=a("2216");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("3e3b");var r,l=a("f0c5"),c=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"24479fba",null,!1,n["a"],r);e["default"]=c.exports},d612:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{isBack:{type:Boolean,default:!0},title:{type:String,default:""},borderBottom:{type:Boolean,default:!1},boxShadow:{type:Boolean,default:!0},leftIconColor:{type:String,default:"#303133"}},data:function(){return{}},methods:{goToBack:function(){var t=getCurrentPages();1===t.length?uni.switchTab({url:"/pages/index/index"}):uni.navigateBack({delta:1})}}};e.default=n},daaa:function(t,e,a){"use strict";a.r(e);var n=a("14bc7"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},e2ba:function(t,e,a){var n=a("24fb"),o=a("1de5"),i=a("5195");e=n(!1);var r=o(i);e.push([t.i,".noboxshadow[data-v-24479fba] .u-navbar{box-shadow:none}.v-center[data-v-24479fba]{display:flex;align-items:center}.r-center[data-v-24479fba]{display:flex;justify-content:center}.center[data-v-24479fba]{display:flex;justify-content:center;align-items:center}.column[data-v-24479fba]{display:flex;flex-flow:column nowrap}.no-shrink[data-v-24479fba]{flex-shrink:0}.grow[data-v-24479fba]{flex-grow:1}.page-height[data-v-24479fba]{height:calc(100vh - 44px - 0px)}.page-back[data-v-24479fba]{background:url("+r+") no-repeat;background-size:100% 100%}.bg[data-v-24479fba]{background:url("+r+") no-repeat;background-size:100% 100%;background-attachment:fixed}.top-bar-height[data-v-24479fba]{height:calc(44px + 0px)}.content.darkStyle .u-status-bar[data-v-24479fba]{background-color:var(--page-background-color)!important}.content.darkStyle .u-navbar[data-v-24479fba]{background-color:var(--page-background-color)!important;box-shadow:0 %?4?% %?4?% 0 rgba(10,16,23,.4)}.content.darkStyle .u-navbar .u-title[data-v-24479fba]{color:#fff!important}.content.darkStyle .u-navbar.u-border-bottom[data-v-24479fba]::after{border-color:#1a293c}.content .u-navbar .u-title[data-v-24479fba]{color:#202020!important}.content .u-navbar.u-border-bottom[data-v-24479fba]::after{border-color:#ededed}.content .slot-wrap[data-v-24479fba]{height:100%;display:flex;align-items:center}.content .title[data-v-24479fba]{font-weight:700;font-size:%?30?%;padding:0 %?30?%;width:%?630?%;text-align:center}.content .title.ellipsis[data-v-24479fba]{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;text-overflow:ellipsis;white-space:nowrap}.slot-wrap[data-v-24479fba]{display:flex;padding-left:%?30?%;padding-right:%?30?%;justify-content:space-between}.slot-wrap .slot-back[data-v-24479fba]{width:%?40?%;height:%?40?%}",""]),t.exports=e}}]);