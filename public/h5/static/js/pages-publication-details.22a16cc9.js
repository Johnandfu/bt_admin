(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-publication-details"],{"0cc2":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAAXNSR0IArs4c6QAAARRJREFUOE+d1DFL1WEUB+Dn0Adwa7LFQbClzRa3cHFwybFBJcEhcgkiFHUQQh2l1VqjscEP0AcQx8QlCByMwE/wkytcec17b/5994f3Ped3zlvueZKMYR6v6z4myWO8wgb+/BclGccy1vATKyNRkgmsYgnHeFNVp0NRkim8xUv8wPuqOuuVMxAleYZ3mMURtqvqV7/+OyjJND7gOb5hv6p+tw27hZLMYAtP8Rmfqur83w7foCQvsIMnOMBhVV0MiuQaJZnDLnoBfsTXqvo7LMNKsoA9PMI6vlfV5ajQe+gEk9jEl2FPutWIB930oJr613buXgO75dTAbhPRwG6z18BuU97AbvvUwG6b28Buf0QD+7/R4hWYe4GOSWoaPAAAAABJRU5ErkJggg=="},"21b9":function(t,n,i){"use strict";i.r(n);var e=i("d900"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"26b0":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var e={uniPopup:i("65d5").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"publication_root"},[e("section",{staticClass:"header"},[e("v-uni-image",{attrs:{src:i("0cc2")},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateBack.apply(void 0,arguments)}}}),t._v(t._s(t.$t("currency.subscription")))],1),e("section",{staticClass:"contents"},[e("div",{staticClass:"item"},[e("div",{staticClass:"title"},[e("span",[t._v(t._s(t.currentData.new_currency_name))])]),e("div",{staticClass:"schedule"},[t._v(t._s(Number(t.currentData.num).toFixed(2))+"\n\t\t\t\t"+t._s(t.currentData.new_currency_name)),e("span",[t._v(t._s(t.$t("currency.currency"))+"\n\t\t\t\t\t/")]),t._v(t._s((Number(t.currentData.num)*Number(t.currentData.change_rate)).toFixed(2))+"\n\t\t\t\t"+t._s(t.currentData.new_currency_name)),e("span",[t._v(t._s(t.$t("currency.currency")))])]),e("v-uni-progress",{staticClass:"progress",attrs:{percent:((Number(t.currentData.num)-Number(t.currentData.last_num||0))/Number(t.currentData.num)*100).toFixed(2),"show-info":!0,activeColor:"rgba(43, 166, 147, 1)",backgroundColor:"rgba(0, 0, 0, 0.1)","border-radius":4}}),e("div",{staticClass:"form"},[e("div",{staticClass:"form_item"},[e("span",[t._v(t._s(t.$t("currency.issue_price")))]),e("span",{staticClass:"special"},[t._v("1 "+t._s(t.currentData.new_currency_name)+" = "+t._s(t.currentData.change_rate)+"\n\t\t\t\t\t\tUSDT")])]),e("div",{staticClass:"form_item"},[e("span",[t._v(t._s(t.$t("currency.subscription_currencies")))]),e("span",[t._v("USDT")])]),e("div",{staticClass:"form_item"},[e("span",[t._v(t._s(t.$t("currency.subscription_starttime")))]),e("span",[t._v(t._s(t.currentData.created_at))])]),e("div",{staticClass:"form_item"},[e("span",[t._v(t._s(t.$t("currency.lockup_period")))]),e("span",[t._v(t._s(t.currentData.day)+" "+t._s(t.$t("currency.day")))])]),e("div",{staticClass:"form_item"},[e("span",[t._v(t._s(t.$t("currency.estimated_launchtime")))]),e("span",[t._v(t._s(t.currentData.online_time))])]),e("div",{staticClass:"form_item"},[e("span",[t._v(t._s(t.$t("currency.expected_gross_return")))]),e("span",[t._v(t._s(t.currentData.predict_rate))])]),e("div",{staticClass:"form_item"},[e("span",[t._v(t._s(t.$t("currency.introduction")))]),e("span",[t._v(t._s(t.currentData.introduction))])])])],1)]),e("section",{staticClass:"buttons"},[e("div",{staticClass:"buttons_item input"},[e("v-uni-input",{attrs:{type:"number",placeholder:t.$t("currency.please_enter_the_amount")},model:{value:t.price,callback:function(n){t.price=n},expression:"price"}}),e("div",{staticClass:"line"}),e("v-uni-picker",{staticClass:"picker",attrs:{mode:"selector",range:t.currencyList,value:"key","range-key":"name"},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.onPickChange.apply(void 0,arguments)}}},[e("v-uni-view",[t._v(t._s(t.currency.name))])],1)],1),e("div",{staticClass:"buttons_item subscription",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSubmit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("currency.immediate_subscription")))])]),e("uni-popup",{ref:"popup",attrs:{type:"center","background-color":"rgba(27, 44, 66, 1)"}},[e("div",{staticClass:"popup"},[e("span",[t._v(t._s(t.$t("withdrawCreate.default[3]")))]),e("div",{staticClass:"info"},[t._v(t._s(t.$t("currency.subscription_successful")))]),e("div",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("currency.confirm")))])])])],1)},a=[]},"5f74":function(t,n,i){"use strict";var e=i("9821"),o=i.n(e);o.a},"7d9c":function(t,n,i){var e=i("24fb"),o=i("1de5"),a=i("7cda"),c=i("7032");n=e(!1);var r=o(a),s=o(c);n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 通用样式\r\n */[data-v-2102c92c]:root{--border-color:#e4e7ed;--page-background-color:#1b2c42;--page-part-color:#e7fef9;--brand-color:#2befbc;--text-color:#202020;--popup-background:#fff;--popup-border-color:#e5e5e5;--navbar-height:44px;--active-color:#fff;--inactive-clor:#768da9;--subtext-color:#eee;--tabbar-color:#fff;--kline-background:#fff}.dark[data-v-2102c92c]{--border-color:#3a495c;--page-background-color:#1b2c42;--page-part-color:#2a405c;--text-color:#768da9;--popup-background:#2a405c;--popup-border-color:#768da9;--tabbar-color:#2a405c;--kline-background:#2a405c;background-color:var(--page-background-color)!important;min-height:100vh;color:#e2e8e4}@font-face{font-family:DIN-Medium;src:url('+r+")}@font-face{font-family:DIN-Regular-2;src:url("+s+')}uni-page-body[data-v-2102c92c]{width:100%;height:100%;color:#090909;background-color:var(--page-background-color);\r\n  /* font-family: \'DIN-Regular-2\', \'DIN-Medium\',"Arial","Microsoft YaHei","黑体","宋体",sans-serif; */font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,Hiragino Sans GB,Microsoft Yahei,sans-serif}body[data-v-2102c92c]{background-color:var(--page-background-color)}\r\n/*设置项通用样式*/.publication_root[data-v-2102c92c]{width:100%;height:100%;display:flex;flex-direction:column;overflow-y:scroll}.publication_root .header[data-v-2102c92c]{position:relative;width:100%;height:44px;display:flex;align-items:center;justify-content:center;font-size:18px;font-family:PingFang SC;font-weight:500;color:#fff;padding:0 16px;box-sizing:border-box;flex-shrink:0}.publication_root .header uni-image[data-v-2102c92c]{position:absolute;width:9px;height:17px;left:16px}.publication_root .contents[data-v-2102c92c]{width:100%;display:flex;flex-direction:column;align-items:center}.publication_root .contents .item[data-v-2102c92c]{margin-top:16px;width:385px;flex-shrink:0;background:#193949;border-radius:6px;display:flex;flex-direction:column;padding:20px;box-sizing:border-box;transition:all .3s}.publication_root .contents .item[data-v-2102c92c]:last-child{margin-bottom:20px}.publication_root .contents .item .title[data-v-2102c92c]{width:100%;display:flex;justify-content:space-between;font-size:14px;font-family:PingFang SC;font-weight:500;color:#fff}.publication_root .contents .item .schedule[data-v-2102c92c]{width:100%;display:inline;font-size:15px;font-family:Heiti SC;font-weight:700;color:#fff;margin-top:20px}.publication_root .contents .item .schedule span[data-v-2102c92c]{font-size:15px;font-family:PingFang SC;font-weight:400;color:#fff;margin:0 6px}.publication_root .contents .item .lock_time[data-v-2102c92c]{width:100%;margin-top:20px;display:flex;flex-direction:column;font-size:13px;font-family:PingFang SC;font-weight:400;color:#fff}.publication_root .contents .item .lock_time span[data-v-2102c92c]:last-child{font-size:15px;font-family:PingFang SC;font-weight:600;color:#fff;margin-top:15px}.publication_root .contents .item .progress[data-v-2102c92c]{height:7px;margin-top:17px}.publication_root .contents .item .progress[data-v-2102c92c] .uni-progress-bar{height:100%!important}.publication_root .contents .item .btns[data-v-2102c92c]{width:100%;display:flex;align-items:flex-start;justify-content:space-between;margin-top:20px}.publication_root .contents .item .btns span[data-v-2102c92c]{font-size:13px;font-family:PingFang SC;font-weight:400;color:#fff}.publication_root .contents .item .btns div[data-v-2102c92c]{width:96px;height:28px;border:1px solid #2ba693;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:14px;font-family:PingFang SC;font-weight:600;color:#2ba693}.publication_root .contents .item .form[data-v-2102c92c]{margin-top:4px;width:100%;display:flex;flex-direction:column}.publication_root .contents .item .form .form_item[data-v-2102c92c]{width:100%;margin-top:20px;display:flex;align-items:center;justify-content:space-between;word-break:unset}.publication_root .contents .item .form .form_item span[data-v-2102c92c]{flex:1 0;font-size:13px;font-family:PingFang SC;font-weight:400;color:hsla(0,0%,100%,.5)}.publication_root .contents .item .form .form_item span[data-v-2102c92c]:first-child{white-space:nowrap}.publication_root .contents .item .form .form_item span[data-v-2102c92c]:last-child{text-align:right}.publication_root .contents .item .form .form_item .special[data-v-2102c92c]{font-size:14px;font-family:JDZhengHT;font-weight:400;color:#2ba693}.publication_root .buttons[data-v-2102c92c]{width:100%;display:flex;flex-direction:column;margin-bottom:20px}.publication_root .buttons .buttons_item[data-v-2102c92c]{width:calc(100% - 30px);margin:16px 15px 0 15px;height:48px;border-radius:4px}.publication_root .buttons .input[data-v-2102c92c]{margin:0 15px 0 15px;background:#f2f5fb;padding:0 18px;box-sizing:border-box;display:flex;align-items:center}.publication_root .buttons .input uni-input[data-v-2102c92c]{flex:1 0;display:flex;align-items:center}.publication_root .buttons .input .line[data-v-2102c92c]{width:1px;height:22px;margin:0 11px;background-color:#000}.publication_root .buttons .input .picker[data-v-2102c92c]{width:50px;height:100%;font-size:15px;font-weight:600;color:#2ba693;display:flex;align-items:center;justify-content:center}.publication_root .buttons .subscription[data-v-2102c92c]{background:#2ba693;font-size:18px;font-family:PingFang SC;font-weight:600;color:#fff;display:flex;align-items:center;justify-content:center}.publication_root .buttons .soldout[data-v-2102c92c]{background:#0d1621;font-size:18px;font-family:PingFang SC;font-weight:600;color:#fff;display:flex;align-items:center;justify-content:center}.publication_root[data-v-2102c92c] .uni-progress-info{color:#fff}.publication_root .popup[data-v-2102c92c]{padding:30px 20px;width:358px;background:#1b2c42;border-radius:7px;box-sizing:border-box;overflow:hidden;display:flex;flex-direction:column;align-items:center}.publication_root .popup span[data-v-2102c92c]{width:100%;font-size:18px;font-family:PingFang SC;font-weight:500;color:#fff;display:flex;justify-content:center}.publication_root .popup .info[data-v-2102c92c]{width:100%;font-size:15px;font-family:PingFang SC;font-weight:400;color:#2ba693;line-height:19px;display:flex;justify-content:center;margin-top:22px}.publication_root .popup .btn[data-v-2102c92c]{width:177px;height:48px;background:#2ba693;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:18px;font-family:PingFang SC;font-weight:400;color:#fff;margin-top:22px}',""]),t.exports=n},9821:function(t,n,i){var e=i("7d9c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("08901de2",e,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,n,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var e=o(i("06c5"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,n){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,e.default)(t))||n&&t&&"number"===typeof t.length){i&&(t=i);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,r=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,c=t},f:function(){try{r||null==i["return"]||i["return"]()}finally{if(s)throw c}}}}},c0d1:function(t,n,i){"use strict";i.r(n);var e=i("26b0"),o=i("21b9");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("5f74");var c,r=i("f0c5"),s=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"2102c92c",null,!1,e["a"],c);n["default"]=s.exports},d900:function(t,n,i){"use strict";(function(t){var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("b85c")),a={name:"Publication",data:function(){return{list:[],currency:{key:"USDT",name:"USDT"},currencyList:[{key:"USDT",name:"USDT"}],currentData:{},price:""}},computed:{id:function(){return this.$route.query.id}},watch:{id:{handler:function(){t("log","onShow"," at pages/publication/details.vue:120"),this.init()},immediate:!0}},methods:{init:function(){var n=this;this.id&&this.$u.api.getPurchaseDetails({id:this.id}).then((function(i){t("log",i," at pages/publication/details.vue:133"),n.currentData=i})).catch((function(t){}))},onOpenClick:function(t){var n,i=(0,o.default)(this.list);try{for(i.s();!(n=i.n()).done;){var e=n.value;e.isOpen=!1}}catch(a){i.e(a)}finally{i.f()}t.isOpen=!0},onPickChange:function(n){var i=n.target.value;t("log",i," at pages/publication/details.vue:147"),this.currency=this.currencyList[i]},onSubmit:function(){var t=this;if(!this.price||isNaN(this.price))return this.$u.toast(this.$t("currency.please_enter_the_amount"));this.$u.api.sendOrder({amount:this.price,config_id:this.currentData.id}).then((function(n){t.$u.toast(t.$t("currency.subscription_successful")),t.price="",setTimeout((function(){t.$router.go(-1)}),1500)})).catch((function(t){}))},onConfirm:function(){this.$refs.popup.close()},navigateBack:function(){window.history.go(-1)},toPurchase:function(){this.$u.route("/page/publication/purchase")}}};n.default=a}).call(this,i("0de9")["log"])}}]);