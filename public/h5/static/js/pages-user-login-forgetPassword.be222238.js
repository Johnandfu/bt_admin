(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login-forgetPassword"],{"0ae4":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"u-code-wrap"})},a=[]},"178e":function(t,e,r){"use strict";r.r(e);var n=r("9708"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"1c26":function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("1da1")),a={data:function(){var t=this;return{step:1,seconds:60,agreement:!1,customStyle:{color:"#e2e8e4",fontSize:"24rpx"},form:{type:"email",areacode:"1",user_string:"",code:"",password:"",re_password:""},sendTxt:"",rules:{user_string:[{validator:function(e,r,n){if("mobile"==t.form.type){if(!r)return n(new Error(t.$t("reg.qsrsjh"))),!1;var o=/^[0-9]{7,16}$/;if(!o.test(r))return n(new Error(t.$t("reg.qsrzqsjh"))),!1}else if("email"==t.form.type){if(!r)return n(new Error(t.$t("reg.qsryx"))),!1;if(!t.$u.test.email(r))return n(new Error(t.$t("reg.qsrzqyx"))),!1}return!0},trigger:["change","blur"]}],code:[{required:!0,message:this.$t("reg.qsryzm"),trigger:["change","blur"]}]},rules2:{password:[{required:!0,message:this.$t("reg.qsrmm"),trigger:["change","blur"]},{min:6,message:this.$t("reg.zxcd6w"),trigger:["change","blur"]}],re_password:[{required:!0,message:this.$t("reg.qsrqrmm"),trigger:["change","blur"]},{validator:function(e,r,n){return r===t.form.password},message:this.$t("reg.lcmmbyz"),trigger:["change","blur"]}]}}},methods:{gotoChoose:function(){var t=this;uni.$once("chooseArea",(function(e){t.form.areacode=e.area_code})),this.$u.route("/pages/user/login/choose")},codeChange:function(t){this.sendTxt=t},getCode:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var e,r,n,o,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.uCode.canGetCode){t.next=32;break}if(e=null,"mobile"!=this.form.type){t.next=17;break}if(this.form.user_string){t.next=6;break}return this.$u.toast(this.$t("reg.qsrsjh")),t.abrupt("return");case 6:if(r=/^[0-9]{7,16}$/,r.test(this.form.user_string)){t.next=10;break}return this.$u.toast(this.$t("reg.qsrzqsjh")),t.abrupt("return");case 10:return n={user_string:this.form.user_string,type:"forget",area_code:this.form.areacode},uni.showLoading(),t.next=14,this.$u.api.sendSms(n).catch((function(t){uni.hideToast(),a.$u.toast(t.message)}));case 14:e=t.sent,t.next=28;break;case 17:if(this.form.user_string){t.next=20;break}return this.$u.toast(this.$t("reg.qsryx")),t.abrupt("return");case 20:if(this.$u.test.email(this.form.user_string)){t.next=23;break}return this.$u.toast(this.$t("reg.qsrzqyx")),t.abrupt("return");case 23:return o={user_string:this.form.user_string,type:"forget"},uni.showLoading(),t.next=27,this.$u.api.sendMail(o).catch((function(t){uni.hideToast(),a.$u.toast(t.message)}));case 27:e=t.sent;case 28:uni.hideLoading(),e&&(this.$u.toast(e),this.$refs.uCode.start()),t.next=32;break;case 32:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),switchChange:function(t){var e=this;this.form.type="left"==t?"email":"mobile",this.form.user_string="",this.form.code="",setTimeout((function(){e.$refs.uForm.resetFields()}),50)},nextStep:function(t){var e=this;this.$refs.uForm.validate(function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=13;break}if("mobile"!=e.form.type){t.next=7;break}return t.next=4,e.$u.api.checkMoblie({mobile_code:e.form.code}).catch((function(t){}));case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,e.$u.api.checkEmail({email_code:e.form.code}).catch((function(t){}));case 9:n=t.sent;case 10:if(n){t.next=12;break}return t.abrupt("return",!1);case 12:e.step=2;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},tapBtn:function(t){var e=this;this.$refs.uForm2.validate((function(t){if(t){var r={account:e.form.user_string,password:e.form.password,repassword:e.form.re_password,code:e.form.code};e.$u.api.forgetPwd(r).then((function(t){t&&(e.$u.toast(t||"Success"),setTimeout((function(){uni.redirectTo({url:"/pages/user/login/login"})}),1500))})).catch((function(t){}))}}))}},onLoad:function(t){},onReady:function(){this.$refs.uForm.setRules(this.rules),this.$refs.uForm2.setRules(this.rules2)}};e.default=a},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},22435:function(t,e,r){"use strict";var n=r("7ca1"),o=r.n(n);o.a},"327a":function(t,e,r){"use strict";r.r(e);var n=r("f1b6"),o=r("d5dc");for(var a in o)"default"!==a&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("22435");var i,s=r("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"8450af64",null,!1,n["a"],i);e["default"]=c.exports},5858:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAV1BMVEVFXXFFXHFFW3FFXHFFW3BFWnBEW3BEXHBEWnFFW3BEXHBFXHFAWHBDXHBEW3BEW3EAAABEXHBAYHBFWnBEXHBEXHBEXHBEW3FDW3FFW3BFXHFEW3FFXHHgy31RAAAAHHRSTlM/wKCQ3zBwQE/Pv28gUI/gAH8QYICv77Bfn9DwGoef7wAAAplJREFUaN7tme2WoyAMhrWKjFZrQcQZ8f6vczs1fowbMaLunLOH/K3kOUASkrfB82ILPMADPMADPGBm7C5ElqVdl2aZEHd2LuDjEXcLix8fZwF4rTvUdM1PALCss1jGDgLyr27DvvIDAPnoCPaQrgCZzv20SnH+OhHGuVLt/JdUugHYdLemqRZOZNWY6baZC6Aa/RuFf6FGhK72A8TkfvUEpBo3IfYCxqWNNUryZvhO7QNUw7pkK86T4ctqD2C4X1Nsp2phrDeNAiT4L0kljZVAkFTAEP+lpBVMWVryAQNEcD7kkszglCIaIIdbK55kK2BJTgLciPGDxNKNAuAQ//teRsgHRgD09d/k+wBwrtk2gNsTc9Ug9fkmoN+rkXsB0uAn+xdAu21g2ILeAvQBZ1w6IIMGd4AmWeMCaNBkWwJiW2W0W1+BYzuA9bEgXQASzeYAy8jWrQ1tsQoQYKGg3ADoYhSQXAcI8XSkWV8Ewt8FxGtlnfTu9O+aFdBHmus0g63+14Dy+BG1/3kURVcn2uWlIsFCmWopodhdXq4hTg88OOVvP5kF3htQTJMefegNnNsWQ2y89P7GSxMbr8tbR6gW2q35DQndNaRCvQ9Q09v3yweQ60eoYQjU9CFQr0cGOsaCWBNTx1gQ9Fr6IA5jaUwbxMG/IQ/i0+CrKVKCto7VW2LIfcv/3UkMmck5tV3OqR3lnBmhE+uC1KharZcWi6Q2CWYrcpaYRDcHSW266bfG+7kUBT9nerBxEgWnfACxRogg+JY1g0CIn4Kno6z5IkQUYTZ6ugqz31Fy23J/OyItv28itLkPj4rj7zdupvH+MNOcIe/35SAql97LiFbO6X+xJEqF4Suu2jBUKiG/qP5vLg/wAA/wgDPsDwyjazhJuOo6AAAAAElFTkSuQmCC"},"720a":function(t,e,r){var n=r("cc5b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("3a0460cc",n,!0,{sourceMap:!1,shadowMode:!1})},"7ca1":function(t,e,r){var n=r("d7a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("40c70150",n,!0,{sourceMap:!1,shadowMode:!1})},8598:function(t,e,r){"use strict";var n=r("720a"),o=r.n(n);o.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var f="suspendedStart",d="suspendedYield",m="executing",h="completed",g={},p={};p[i]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(C([])));b&&b!==n&&o.call(b,i)&&(p=b);var X=A.prototype=E.prototype=Object.create(p);k.prototype=X.constructor=A,A.constructor=k,A[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(X),t},l.awrap=function(t){return{__await:t}},T(x.prototype),x.prototype[s]=function(){return this},l.AsyncIterator=x,l.async=function(t,e,r,n){var o=new x(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},T(X),X[c]="Generator",X[i]=function(){return this},X.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(W),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),W(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;W(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function w(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=P(t,r,i),a}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function E(){}function k(){}function A(){}function T(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t){function e(r,n,a,i){var s=y(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function P(t,e,r){var n=f;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return F()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=U(i,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var c=y(t,e,r);if("normal"===c.type){if(n=r.done?h:d,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function U(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,U(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=y(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function W(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function C(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9708:function(t,e,r){"use strict";r("a9e3"),r("ac1f"),r("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-verification-code",props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(t){this.secNum=t}}},methods:{checkKeepRunning:function(){var t=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var e=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>e?(this.secNum=t-e,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--t.secNum?t.changeEvent(t.changeText.replace(/x|X/,t.secNum)):(clearInterval(t.timer),t.timer=null,t.changeEvent(t.endText),t.secNum=t.seconds,t.$emit("end"),t.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(t){this.$emit("change",t)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:t+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};e.default=n},a2bc:function(t,e){t.exports="data:image/png;base64,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"},c897:function(t,e,r){"use strict";r.r(e);var n=r("0ae4"),o=r("178e");for(var a in o)"default"!==a&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("8598");var i,s=r("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"9d4a1b3e",null,!1,n["a"],i);e["default"]=c.exports},cc5b:function(t,e,r){var n=r("24fb"),o=r("1de5"),a=r("7cda"),i=r("7032");e=n(!1);var s=o(a),c=o(i);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 通用样式\r\n */[data-v-9d4a1b3e]:root{--border-color:#e4e7ed;--page-background-color:#1b2c42;--page-part-color:#e7fef9;--brand-color:#2befbc;--text-color:#202020;--popup-background:#fff;--popup-border-color:#e5e5e5;--navbar-height:44px;--active-color:#fff;--inactive-clor:#768da9;--subtext-color:#eee;--tabbar-color:#fff;--kline-background:#fff}.dark[data-v-9d4a1b3e]{--border-color:#3a495c;--page-background-color:#1b2c42;--page-part-color:#2a405c;--text-color:#768da9;--popup-background:#2a405c;--popup-border-color:#768da9;--tabbar-color:#2a405c;--kline-background:#2a405c;background-color:var(--page-background-color)!important;min-height:100vh;color:#e2e8e4}@font-face{font-family:DIN-Medium;src:url('+s+")}@font-face{font-family:DIN-Regular-2;src:url("+c+')}uni-page-body[data-v-9d4a1b3e]{width:100%;height:100%;color:#090909;background-color:var(--page-background-color);\r\n  /* font-family: \'DIN-Regular-2\', \'DIN-Medium\',"Arial","Microsoft YaHei","黑体","宋体",sans-serif; */font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,Hiragino Sans GB,Microsoft Yahei,sans-serif}body[data-v-9d4a1b3e]{background-color:var(--page-background-color)}\r\n/*设置项通用样式*/.u-code-wrap[data-v-9d4a1b3e]{width:0;height:0;position:fixed;z-index:-1}',""]),t.exports=e},d5dc:function(t,e,r){"use strict";r.r(e);var n=r("1c26"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},d7a6:function(t,e,r){var n=r("24fb"),o=r("1de5"),a=r("7cda"),i=r("7032"),s=r("5195"),c=r("5858"),u=r("a2bc");e=n(!1);var l=o(a),f=o(i),d=o(s),m=o(c),h=o(u);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 通用样式\r\n */[data-v-8450af64]:root{--border-color:#e4e7ed;--page-background-color:#1b2c42;--page-part-color:#e7fef9;--brand-color:#2befbc;--text-color:#202020;--popup-background:#fff;--popup-border-color:#e5e5e5;--navbar-height:44px;--active-color:#fff;--inactive-clor:#768da9;--subtext-color:#eee;--tabbar-color:#fff;--kline-background:#fff}.dark[data-v-8450af64]{--border-color:#3a495c;--page-background-color:#1b2c42;--page-part-color:#2a405c;--text-color:#768da9;--popup-background:#2a405c;--popup-border-color:#768da9;--tabbar-color:#2a405c;--kline-background:#2a405c;background-color:var(--page-background-color)!important;min-height:100vh;color:#e2e8e4}@font-face{font-family:DIN-Medium;src:url('+l+")}@font-face{font-family:DIN-Regular-2;src:url("+f+')}uni-page-body[data-v-8450af64]{width:100%;height:100%;color:#090909;background-color:var(--page-background-color);\r\n  /* font-family: \'DIN-Regular-2\', \'DIN-Medium\',"Arial","Microsoft YaHei","黑体","宋体",sans-serif; */font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,Hiragino Sans GB,Microsoft Yahei,sans-serif}body[data-v-8450af64]{background-color:var(--page-background-color)}\r\n/*设置项通用样式*/.v-content-wrap[data-v-8450af64]{background:url('+d+") no-repeat;background-size:100% 100%;background-attachment:fixed}.content[data-v-8450af64]{padding:0 %?40?%}.content[data-v-8450af64] .u-form-item--right{min-height:%?88?%;line-height:%?88?%;border-radius:%?10?%;background:#2a405c}.content[data-v-8450af64] .u-form-item--right .u-form-item--right__content{padding:0 %?30?%;min-height:%?88?%}.content[data-v-8450af64] .u-form-item--right .u-input{position:relative;flex:1;display:flex;align-items:center}.content .bottom[data-v-8450af64]{margin:%?50?% auto %?30?%;display:flex;justify-content:center;align-items:center}.content .bottom .bottom-content[data-v-8450af64]{height:%?100?%;line-height:%?100?%;text-align:center;width:60%;border-top:%?2?% solid #ebeef5;color:var(--text-color);font-size:%?28?%;font-weight:700}.content .bottom .bottom-content .light-tip[data-v-8450af64]{color:#2de2b4}.v-content-wrap.dark .bottom .bottom-content[data-v-8450af64]{border-top:%?2?% solid #2c425a;color:#e2e8e4}.login[data-v-8450af64]{overflow:hidden}.login .switch-types[data-v-8450af64]{display:flex;align-items:baseline;margin-top:%?40?%;margin-bottom:%?60?%}.login-form .send[data-v-8450af64]{color:#2de2b4}.login-form .prefix[data-v-8450af64]{color:var(--text-color);font-size:%?24?%;font-weight:700;margin-right:%?40?%;color:#e2e8e4}.login-form .prefix .down[data-v-8450af64]{margin-left:%?10?%}.agreement[data-v-8450af64]{display:flex;align-items:center;margin-top:%?30?%}.agreement .checkbox[data-v-8450af64]{flex:0 0 auto;width:%?40?%;height:%?40?%;background:url("+m+");background-size:100% 100%;margin-right:%?10?%}.agreement .checkbox.checked[data-v-8450af64]{background:url("+h+");background-size:100% 100%}.agreement .agreement-text[data-v-8450af64]{font-size:%?24?%;color:#909399}.agreement .agreement-text .light-tip[data-v-8450af64]{color:#2de2b4}.button-wrap[data-v-8450af64]{margin-top:%?50?%}",""]),t.exports=e},f1b6:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var n={lwNavbar:r("cd1f").default,uForm:r("cecd").default,uFormItem:r("407f").default,uIcon:r("9edf").default,uInput:r("3c2c").default,uVerificationCode:r("c897").default,exButtonWrap:r("55a6").default},o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"v-content-wrap dark"},[r("lw-navbar",{attrs:{"box-shadow":!1,title:t.$t("forget.zhmm")}}),r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"login"},[r("v-uni-view",{staticClass:"login-form"},[1==t.step?[r("u-form",{ref:"uForm",attrs:{model:t.form,"border-bottom":!1}},["mobile"==t.form.type?r("u-form-item",{attrs:{"label-position":"top","border-bottom":!1,prop:"user_string"}},[r("uni-view",{staticClass:"prefix",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoChoose.apply(void 0,arguments)}}},[t._v("+"+t._s(t.form.areacode)),r("u-icon",{staticClass:"down",attrs:{name:"arrow-down"}})],1),r("u-input",{attrs:{placeholder:t.$t("forget.zcsjh"),"custom-style":t.customStyle},model:{value:t.form.user_string,callback:function(e){t.$set(t.form,"user_string",e)},expression:"form.user_string"}})],1):r("u-form-item",{attrs:{"label-position":"top","border-bottom":!1,prop:"user_string"}},[r("u-input",{attrs:{placeholder:t.$t("forget.zcyxh"),"custom-style":t.customStyle},model:{value:t.form.user_string,callback:function(e){t.$set(t.form,"user_string",e)},expression:"form.user_string"}})],1),r("u-form-item",{attrs:{"label-position":"top","border-bottom":!1,prop:"code"}},[r("u-input",{attrs:{type:"number",placeholder:t.$t("reg.yanzhengma"),"custom-style":t.customStyle},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),r("v-uni-view",{staticClass:"send",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[r("u-verification-code",{ref:"uCode",attrs:{seconds:t.seconds,"change-text":"Xs","start-text":t.$t("reg.fasong"),"end-text":t.$t("reg.fasong"),"keep-running":!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}}),r("v-uni-text",[t._v(t._s(t.sendTxt||t.$t("reg.fasong")))])],1)],1)],1),r("v-uni-view",{staticClass:"button-wrap"},[r("ex-button-wrap",{attrs:{"class-name":"circle large darkStyle",text:t.$t("forget.xiayibu")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.throttle(t.nextStep,1e3)}}})],1)]:t._e(),r("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==t.step,expression:"step==2"}]},[r("u-form",{ref:"uForm2",attrs:{model:t.form,"border-bottom":!1}},[r("u-form-item",{attrs:{"label-position":"top","border-bottom":!1,prop:"password"}},[r("u-input",{attrs:{type:"password","password-icon":!0,placeholder:t.$t("forget.newpwd"),"custom-style":t.customStyle},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("u-form-item",{attrs:{"label-position":"top","border-bottom":!1,prop:"re_password"}},[r("u-input",{attrs:{type:"password","password-icon":!0,placeholder:t.$t("reg.querenmima"),"custom-style":t.customStyle},model:{value:t.form.re_password,callback:function(e){t.$set(t.form,"re_password",e)},expression:"form.re_password"}})],1)],1),r("v-uni-view",{staticClass:"button-wrap"},[r("ex-button-wrap",{attrs:{theme:"sell","class-name":"circle large darkStyle",disabled:!t.form.code,text:t.$t("forget.tijiao")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.throttle(t.tapBtn,1e3)}}})],1)],1)],2)],1)],1)],1)},a=[]}}]);