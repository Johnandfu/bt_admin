(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-address-index"],{"0470":function(e,t,a){var o=a("24fb"),r=a("1de5"),n=a("7cda"),i=a("7032");t=o(!1);var c=r(n),l=r(i);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 通用样式\r\n */[data-v-3783e340]:root{--border-color:#e4e7ed;--page-background-color:#1b2c42;--page-part-color:#e7fef9;--brand-color:#2befbc;--text-color:#202020;--popup-background:#fff;--popup-border-color:#e5e5e5;--navbar-height:44px;--active-color:#fff;--inactive-clor:#768da9;--subtext-color:#eee;--tabbar-color:#fff;--kline-background:#fff}.dark[data-v-3783e340]{--border-color:#3a495c;--page-background-color:#1b2c42;--page-part-color:#2a405c;--text-color:#768da9;--popup-background:#2a405c;--popup-border-color:#768da9;--tabbar-color:#2a405c;--kline-background:#2a405c;background-color:var(--page-background-color)!important;min-height:100vh;color:#e2e8e4}@font-face{font-family:DIN-Medium;src:url('+c+")}@font-face{font-family:DIN-Regular-2;src:url("+l+')}uni-page-body[data-v-3783e340]{width:100%;height:100%;color:#090909;background-color:var(--page-background-color);\r\n  /* font-family: \'DIN-Regular-2\', \'DIN-Medium\',"Arial","Microsoft YaHei","黑体","宋体",sans-serif; */font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,Hiragino Sans GB,Microsoft Yahei,sans-serif}body[data-v-3783e340]{background-color:var(--page-background-color)}\r\n/*设置项通用样式*/.u-search[data-v-3783e340]{display:flex;flex-direction:row;align-items:center;flex:1}.u-content[data-v-3783e340]{display:flex;flex-direction:row;align-items:center;padding:0 %?18?%;flex:1}.u-clear-icon[data-v-3783e340]{display:flex;flex-direction:row;align-items:center}.u-input[data-v-3783e340]{flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-3783e340]{width:%?40?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-3783e340]{color:#909399}.u-action[data-v-3783e340]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-3783e340]{width:%?80?%;margin-left:%?10?%}',""]),e.exports=t},"0777":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o}));var o={lwNavbar:a("cd1f").default,uSearch:a("7bf0").default,settingItem:a("4b19").default},r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"v-container-wrap dark"},[o("lw-navbar",{attrs:{title:e.$t("user.address.title"),"border-bottom":!1}}),o("v-uni-view",{staticClass:"search-item search-item-dark"},[o("u-search",{attrs:{color:"#fff","show-action":!1,isCustomIcon:!0,clearabled:!1,shape:"square",placeholder:e.$t("user.address.search"),"bg-color":"var(--page-part-color)"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onSearchChange.apply(void 0,arguments)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[o("v-uni-view",{attrs:{slot:"customIcon"},slot:"customIcon"},[o("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[o("v-uni-image",{staticClass:"search-icon",attrs:{src:a("8442")}})],1)],1)],1)],1),o("v-uni-scroll-view",{staticClass:"scroll-wrap",attrs:{"scroll-y":!0}},e._l(e.currencyList,(function(t,a){return o("setting-item",{key:a,attrs:{title:t.name,weight:!1},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onAddressClick(t)}}})})),1)],1)},n=[]},"0f0b":function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(e){this.$emit("input",e),this.$emit("change",e)},value:{immediate:!0,handler:function(e){this.keyword=e}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(e){this.keyword=e.detail.value},clear:function(){var e=this;this.keyword="",this.$nextTick((function(){e.$emit("clear")}))},search:function(e){this.$emit("search",e.detail.value);try{uni.hideKeyboard()}catch(e){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(e){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var e=this;setTimeout((function(){e.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};t.default=o},"27f9":function(e,t,a){var o=a("3338");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("4f06").default;r("5434a847",o,!0,{sourceMap:!1,shadowMode:!1})},"311d":function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"setting-item",props:{arrow:{type:Boolean,default:!0},title:{type:String,default:""},value:{type:String|Number,default:""},weight:{type:Boolean,default:!0}},data:function(){return{}},methods:{click:function(e){this.$emit("click",e)}}};t.default=o},3338:function(e,t,a){var o=a("24fb"),r=a("1de5"),n=a("7cda"),i=a("7032");t=o(!1);var c=r(n),l=r(i);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 通用样式\r\n */[data-v-0be4b272]:root{--border-color:#e4e7ed;--page-background-color:#1b2c42;--page-part-color:#e7fef9;--brand-color:#2befbc;--text-color:#202020;--popup-background:#fff;--popup-border-color:#e5e5e5;--navbar-height:44px;--active-color:#fff;--inactive-clor:#768da9;--subtext-color:#eee;--tabbar-color:#fff;--kline-background:#fff}.dark[data-v-0be4b272]{--border-color:#3a495c;--page-background-color:#1b2c42;--page-part-color:#2a405c;--text-color:#768da9;--popup-background:#2a405c;--popup-border-color:#768da9;--tabbar-color:#2a405c;--kline-background:#2a405c;background-color:var(--page-background-color)!important;min-height:100vh;color:#e2e8e4}@font-face{font-family:DIN-Medium;src:url('+c+")}@font-face{font-family:DIN-Regular-2;src:url("+l+')}uni-page-body[data-v-0be4b272]{width:100%;height:100%;color:#090909;background-color:var(--page-background-color);\r\n  /* font-family: \'DIN-Regular-2\', \'DIN-Medium\',"Arial","Microsoft YaHei","黑体","宋体",sans-serif; */font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,Hiragino Sans GB,Microsoft Yahei,sans-serif}body[data-v-0be4b272]{background-color:var(--page-background-color)}\r\n/*设置项通用样式*/.v-contianer-wrap[data-v-0be4b272]{height:100%;background-color:#fff}.v-contianer-wrap.dark[data-v-0be4b272]{background-color:var(--page-part-color)}.search-item[data-v-0be4b272]{background-color:var(--page-part-color);padding:%?10?% %?12?%;border-bottom:%?2?% solid var(--border-color);left:0;right:0;top:0;z-index:100}.search-icon[data-v-0be4b272]{width:%?40?%;height:%?40?%}.scroll-wrap[data-v-0be4b272]{height:calc(100% - 44px);overflow:hidden}',""]),e.exports=t},3694:function(e,t,a){"use strict";a.r(t);var o=a("311d"),r=a.n(o);for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=r.a},"36d6":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o}));var o={uIcon:a("9edf").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"item-wrap"},[a("v-uni-view",{staticClass:"setting-item",class:["setting-item-dark",e.weight?"weight":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.click.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"left"},[e._v(e._s(e.title))]),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"right-content"},[e._v(e._s(e.value))]),a("v-uni-view",{staticClass:"arrow",style:{opacity:e.arrow?"1":"0"}},[a("u-icon",{attrs:{name:"arrow-right",color:"#2f4159",size:"36"}})],1)],1)],1)],1)},n=[]},"39c3":function(e,t,a){"use strict";a("4de4"),a("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{path:"/pages/user/address/address",keyword:"",loading:!1,list:this.webConf.baseCoin}},computed:{currencyList:function(){var e=this.keyword.toLowerCase(),t=this.list.filter((function(t){if(9999!=t.currency_id)return t.name.toLowerCase().indexOf(e)>-1}));return t}},onLoad:function(){this.fetchAccountsList()},methods:{onSearchChange:function(e){var t=this;this.list.filter((function(e){var a=t.keyword.toLowerCase();return e.name.indexOf(a)>0}))},onAddressClick:function(e){var t={currency_id:e.currency_id,coin:e.name};this.$u.route({url:this.path,params:t})},fetchAccountsList:function(){}}};t.default=o},"3eb1":function(e,t,a){var o=a("24fb"),r=a("1de5"),n=a("7cda"),i=a("7032");t=o(!1);var c=r(n),l=r(i);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 通用样式\r\n */[data-v-854beab0]:root{--border-color:#e4e7ed;--page-background-color:#1b2c42;--page-part-color:#e7fef9;--brand-color:#2befbc;--text-color:#202020;--popup-background:#fff;--popup-border-color:#e5e5e5;--navbar-height:44px;--active-color:#fff;--inactive-clor:#768da9;--subtext-color:#eee;--tabbar-color:#fff;--kline-background:#fff}.dark[data-v-854beab0]{--border-color:#3a495c;--page-background-color:#1b2c42;--page-part-color:#2a405c;--text-color:#768da9;--popup-background:#2a405c;--popup-border-color:#768da9;--tabbar-color:#2a405c;--kline-background:#2a405c;background-color:var(--page-background-color)!important;min-height:100vh;color:#e2e8e4}@font-face{font-family:DIN-Medium;src:url('+c+")}@font-face{font-family:DIN-Regular-2;src:url("+l+')}uni-page-body[data-v-854beab0]{width:100%;height:100%;color:#090909;background-color:var(--page-background-color);\r\n  /* font-family: \'DIN-Regular-2\', \'DIN-Medium\',"Arial","Microsoft YaHei","黑体","宋体",sans-serif; */font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,Hiragino Sans GB,Microsoft Yahei,sans-serif}body[data-v-854beab0]{background-color:var(--page-background-color)}\r\n/*设置项通用样式*/.item-wrap .setting-item[data-v-854beab0]{border-bottom:%?2?% solid var(--border-color);background-color:#fff;padding:%?30?% %?30?%;font-size:%?24?%;color:var(--text-color);display:flex;align-items:center}.item-wrap .setting-item.weight[data-v-854beab0]{font-weight:700}.item-wrap .setting-item .left[data-v-854beab0]{flex:1}.item-wrap .setting-item .right[data-v-854beab0]{flex:1;display:flex;justify-content:flex-end}.item-wrap .setting-item .right .right-content[data-v-854beab0]{font-weight:400;margin-right:%?20?%;display:flex;justify-content:center;align-items:center}.item-wrap .setting-item .right .arrow[data-v-854beab0]{width:%?30?%;display:flex;align-items:center}.item-wrap .setting-item.setting-item-dark[data-v-854beab0]{background-color:#2a405c;color:#768ca9}.item-wrap .setting-item.setting-item-light[data-v-854beab0]{background-color:#edfefb;color:#5e5e5e;border-bottom:%?2?% solid #fff}',""]),e.exports=t},"4b19":function(e,t,a){"use strict";a.r(t);var o=a("36d6"),r=a("3694");for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("6133");var i,c=a("f0c5"),l=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"854beab0",null,!1,o["a"],i);t["default"]=l.exports},6133:function(e,t,a){"use strict";var o=a("b7f2"),r=a.n(o);r.a},"7bf0":function(e,t,a){"use strict";a.r(t);var o=a("b0e7"),r=a("a2d4");for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("e61b");var i,c=a("f0c5"),l=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"3783e340",null,!1,o["a"],i);t["default"]=l.exports},8442:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAQAAAAkGDomAAAD60lEQVRo3u2aTUhUURTH/y+EvnHKj6jQUSJalDC2qIgCoxZFYBOYW2dXbUoqQmojLQwkaqJdG10EgYlaEEVU6kYwCkcKDKIcCzUiaKBE+qB/C0Xqvvs+7nv3vhnC8xYDlzn/+3vnvnvePfc+YNEWLb9mBXXkXmxCBSpRgTgq8R3vF64xazSPd8Q4T/Iuv9LNptjBRq6JGm0Dr/A1VWyIZ7k8Grg1bOcsg9g0T5iGW84WfmEYe8NGc3jHOUkd9pwH9MOt5hB12g29eGV8Rd12W1seZByDiLt4TqAPWWQAZK0swARiAOpQhSSKXfweIWnNho9eDT85RiHDZiZcveuYZtbRf5ix8IM75QhX51slxZyDyuOwgM+kslmmFHVibHWATIfB65JKdgZUizEj1WsKindGKtcc4oZj7JRq7ggitk8ilFMdWoluq0T3E9eryizjtAQvoSWrpiSIfaoi5yQiKW2JPy1Rr1URWMnPNoFWre+mAZv+AxX3i7pmrtKM3uXXudiWsbKhM769l4QNsN+v6wVzT98//dhTzh5/ji/E+BlaX1YFeqtwvc0taWwJLM7mST9OJ8VFgcESImYLxlbnfy+Z/60X2vvMAVo5DApN9d5lkWgJGDQ2i+Wpl0NDNBPEZaKUug/xdqF1wPB+SxYTQtN2d8ByodVwBAGIk3CdGuBA5IDlaoDRm2IEc8aBsqEArUzkgB5D/Ltwd1jnAD+Kecp4v2IPU0qAiB5wWg0wevOIoMifMA6UCBdB80Mc9xvBuUlxSHh1j0e+WFjh5ZLf5dYT7wXrQ6G9zmgIRXXv6pinhHsaiXTJv83babPNyVgMbRtJk/7cPgQsqNXjJ5653PTneD2iwj0dsMBlhc1xPJIE478XSQw7tA/viK2PBv/uJfxmdpjZYdN/qSZwSbLFqG0229IzSe5Xk5BtYX4xuAX8VF3msERGA6IU7werg0hdlh4ZpDQ/e3PWw6IgcoNSsWuBZ26/y+lndwBEruWEVGxEfcKwieMeB7RBosgaR7l+/88jk55wIRCPuQj2ssl9e51VPC1JyYEQnQ+0d+MeSlx3VzqRATBq5RaK1TiAJJKuJcM3rJK09qLR+qUaxQqOaf8koI8xPtI30Kt4XyteKwBwqUZEgG2a4GZ4ZEFTM2Ite0PDpf89etWMCHALbwWEy7GNayWKuhEBVvOq48cWchtlCx0/UTGACADcyXa+9UQb5nnvPTIuZY8XYsAPHFmLQ9iIUpSgDKXYgBl8Xrjeodua8qlThC4c1ZQXDVV5Rd5RzD/iHQngrI9yPo9RnOXBgtqJFhALDU9ALES8vxB/FijePGKXQiG/aP+H/QGZOtxFLSQuHgAAAABJRU5ErkJggg=="},"8bfd":function(e,t,a){"use strict";a.r(t);var o=a("0777"),r=a("cbb0");for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("d731");var i,c=a("f0c5"),l=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"0be4b272",null,!1,o["a"],i);t["default"]=l.exports},a2d4:function(e,t,a){"use strict";a.r(t);var o=a("0f0b"),r=a.n(o);for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=r.a},b0e7:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o}));var o={uIcon:a("9edf").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-search",style:{margin:e.margin},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-content",style:{backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100rpx":"10rpx",border:e.borderStyle,height:e.height+"rpx"}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[a("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color}})],1),a("v-uni-input",{staticClass:"u-input",style:[{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor},e.inputStyle],attrs:{"confirm-type":"search",value:e.value,disabled:e.disabled,focus:e.focus,maxlength:e.maxlength,"placeholder-class":"u-placeholder-class",placeholder:e.placeholder,"placeholder-style":"color: "+e.placeholderColor,type:"text"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blur.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputChange.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.getFocus.apply(void 0,arguments)}}}),e.keyword&&e.clearabled&&e.focused?a("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[a("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):e._e()],1),a("v-uni-view",{staticClass:"u-action",class:[e.showActionBtn||e.show?"u-action-active":""],style:[e.actionStyle],on:{click:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.custom.apply(void 0,arguments)}}},[e._v(e._s(e.actionText))])],1)},n=[]},b7f2:function(e,t,a){var o=a("3eb1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("4f06").default;r("a87656f0",o,!0,{sourceMap:!1,shadowMode:!1})},cbb0:function(e,t,a){"use strict";a.r(t);var o=a("39c3"),r=a.n(o);for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=r.a},d731:function(e,t,a){"use strict";var o=a("27f9"),r=a.n(o);r.a},e61b:function(e,t,a){"use strict";var o=a("f2d5"),r=a.n(o);r.a},f2d5:function(e,t,a){var o=a("0470");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("4f06").default;r("ea15b1e2",o,!0,{sourceMap:!1,shadowMode:!1})}}]);