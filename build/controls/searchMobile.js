webpackJsonp([2],[,,,,,,,,function(e,t,n){"use strict";function r(){var e=d.getBoundingClientRect().width,t=d.clientHeight;return e*l.scale>=768?(l.imgSzie="_480_360",l.isMobile=!1):(l.imgSzie="_180_236",l.isMobile=!0),i(e,l.dpr),{width:Math.ceil(e*l.scale),height:Math.ceil(t*l.scale)}}function o(e,t,n){var r;for(r in t)t.hasOwnProperty(r)&&!n.hasOwnProperty(r)&&(e[r]=t[r]);for(r in n)n.hasOwnProperty(r)&&(e[r]=n[r]);return e}function i(e,t){var n=void 0;e/t>540&&(e=540*t),n=e/10,l.rem=n,d.style.fontSize=n+"px",e*l.scale<=768&&(l.isMobile=!0)}function a(e){var t=decodeURI(e).split("?")[1],n={};if(t){var r=t.split("&"),o=void 0,i=void 0,a=void 0;for(o=0,a=r.length;o<a;o++)i=r[o].split("="),n[i[0]]=i[1]}return n}function s(e,t,n,r){var o=t-r,i=n-e,a=Math.sqrt(i*i+o*o),s=Math.atan2(o,i)/Math.PI*180;return a<3?0:s<=135&&s>45?1:s<=-45&&s>-135?-1:s<=45&&s>-45?2:s>=135&&s<=180||i<=-135&&s>-180?-2:0}function c(e,t,n){var r=n||"";return e.length>=t&&(e=e.substring(0,t-1)+r),e}function u(e){var t=e.lastIndexOf(".",e.length),n=e.substring(0,t),r=e.substring(t,e.length);return n+l.imgSzie+r+"?sign=iqiyi"}var l={host:"http://iface.qiyi.com",ourHost:"http://www.yuchenblog.cn:8080/iqiyi",publicData:{app_k:"f0f6c3ee5709615310c0f053dc9c65f2",app_v:8.4,app_t:0,platform_id:10,dev_os:6,dev_ua:"MI 5",dev_hw:{cpu:0,gpu:"",mem:"50.4MB"},net_sts:1,scrn_sts:1,scrn_res:"1334*750",scrn_dpi:"153600",qyid:"87390BD2-DACE-497B-9CD4-2FD14354B2A4",secure_v:1,secure_p:"GPhone",core:1,req_sn:"1493946331320",req_times:1},dpr:1,scale:1,isMobile:!1,width:0,height:0},p=document,f=window,d=p.documentElement,h=p.querySelector('meta[name="viewport"]');!function(){var e=f.navigator.appVersion,t=e.match(/android (\d\.\d)/i),n=e.match(/iphone os (\d)/i),r=f.devicePixelRatio,o=d.getBoundingClientRect().width,a=d.clientHeight,s=1,c=1,u=0;(t||n)&&(u=t?t[1]:n[1]),s=n?r>=3?3:r>=2?2:1:1,c=parseFloat((1/s).toFixed(2)),d.setAttribute("data-dpr",s),h.setAttribute("content","width=device-width,initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),i(o,s),o*c>=768?l.imgSzie="_480_360":(l.imgSzie="_180_236",l.isMobile=!0),l.scale=c,l.dpr=s,l.width=o,l.height=a,l.publicData.scrn_dpi=o*a,l.publicData.scrn_res=o+"*"+a,l.publicData.dev_os=u||6}(),e.exports={config:l,getImgURL:u,parseURLQuery:a,getScreenSize:r,getTouchDirection:s,getlimitStr:c,assign:o}},function(e,t,n){"use strict";function r(e){if(!n.i(a.a)(e)||n.i(o.a)(e)!=s)return!1;var t=n.i(i.a)(e);if(null===t)return!0;var r=p.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==f}var o=n(38),i=n(40),a=n(45),s="[object Object]",c=Function.prototype,u=Object.prototype,l=c.toString,p=u.hasOwnProperty,f=l.call(Object);t.a=r},,function(e,t,n){"use strict";function r(e){"undefined"!=typeof console&&console.error;try{throw new Error(e)}catch(e){}}t.a=r},,,,function(e,t,n){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e){var t=e.split(".");return t[t.length-1]}function n(){return new XMLHttpRequest}function r(n,r,o){var i,a,s,c,u="",l=!0,p=!0,f="",d={},h=[];switch(o){case"json":if("object"==(void 0===n?"undefined":t(n)))for(c in n)void 0!==n[c]&&null!==n[c]&&(u+=""!==u?"&"+c+"="+JSON.stringify(n[c]).replace(/\"/g,""):c+"="+JSON.stringify(n[c]).replace(/\"/g,""));else"string"==typeof n&&(u=n);break;case"form":if(window.FormData){var y=new FormData;if("object"==(void 0===n?"undefined":t(n))){for(c in n)if("[object FileList]"==Object.prototype.toString.call(n[c].value)){if(d={isCheck:!0,type:n[c].type||c},s=n[c].value.length,0==s&&(r.ischeck=!1,d.isCheck=!1),n[c].suffix&&r.ischeck)for(i=0;i<s;i++)a=e(n[c].value[i].name),r.ischeck=n[c].suffix.some(function(e){return a.toLowerCase()==e.toLowerCase()}),l=r.ischeck;if(n[c].maxSize&&l&&r.ischeck)for(i=0;i<s;i++)n[c].value[i].size>1024*n[c].maxSize*1024&&(r.ischeck=!1,p=!1);if(s>0&&!r.ischeck&&(l?p||(f="文件大小超过:"+n[c].maxSize+"mb"):f="文件格式不满足:"+n[c].suffix.join(",")+"格式",d.isCheck=!1),r.ischeck)for(i=0;i<s;i++)y.append(c,n[c].value[i]);d.errorInf=f||n[c].errorInf,h.push(d)}else if(n[c].pattern){d={isCheck:!0,type:n[c].type||c};var m;m=void 0!=n[c].checkValue?n[c].checkValue:n[c].value,n[c].pattern.test(m)?y.append(c,n[c].value):(r.ischeck=!1,d.isCheck=!1),d.errorInf=n[c].errorInf,h.push(d)}else y.append(c,n[c].value);r.onCheck&&r.onCheck(h),u=y}}}return u}function o(e,t){this.result=null,this.handleData=e.handleData||null,this.type=e.type||"get",this.async=e.async||!1,this.dataType=e.dataType||"json",this.timeOut=e.timeOut,this.url=e.url,this.ischeck=!0,this.preResult=[],this.data=e.data,this.xhr=n(),this.onProgress=e.onProgress,this.onSuccess=e.onSuccess,this.onAbort=e.onAbort,this.onFail=e.onFail,this.onError=e.onError,this.onCheck=e.onCheck,this.onStart=e.onStart,this.bindObj=t||this}return o.prototype={constructor:o,send:function(){var e=r(this.data,this,this.dataType),t=this.bindObj,n=this.xhr,o=this;if(this.ischeck){if(this.stopFlag=!1,this.timeoutFlag=!1,this.onStart&&this.onStart(),t||(t=this),this.onProgress)try{n.onprogress=function(e){e.total>0&&this.onProgress.call(t,e.loaded,e.total)}}catch(e){}if(this.onAbort)try{n.onabort=function(e){this.stopFlag&&this.onAbort.call(t,n.status)}}catch(e){}if(this.onError)try{n.onerror=function(e){this.onError.call(t)}}catch(e){}n.onreadystatechange=function(e){if(4===n.readyState&&(clearTimeout(r),n.status>=200&&n.status<300||304==n.status?(o.result=null==o.handleData?n.responseText:o.handleData(n.responseText),o.onSuccess&&o.onSuccess.call(t,o.result)):o.stopFlag||o.timeoutFlag||o.onFail&&o.onFail.call(t,n.status)),0===n.readyState)var r=setTimeout(function(){o.timeoutFlag=!0,o.async&&o.timeoutFlag&&(n.abort(),this.onTimeOut&&o.onTimeOut.call(t))},o.timeOut)},"post"==this.type?n.open(this.type,this.url,this.async):"get"==this.type&&(this.data?n.open(this.type,this.url+"?"+e,this.async):n.open(this.type,this.url,this.async)),"json"==this.dataType&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),"get"==this.type?n.send(null):n.send(e)}},stop:function(){this.stopFlag=!0,this.xhr.abort()}},{init:function(e,t){return new o(e)}}}();"object"==t(e)&&(e.exports={ajaxExpanding:n})}).call(t,n(17)(e))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r=n(44),o=r.a.Symbol;t.a=o},function(e,t,n){e.exports=n(46)()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(){}function c(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}function u(e){var t,u,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=l.getDisplayName,w=void 0===f?function(e){return"ConnectAdvanced("+e+")"}:f,S=l.methodName,O=void 0===S?"connectAdvanced":S,E=l.renderCountProp,P=void 0===E?void 0:E,_=l.shouldHandleStateChanges,j=void 0===_||_,C=l.storeKey,x=void 0===C?"store":C,N=l.withRef,T=void 0!==N&&N,k=a(l,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),M=x+"Subscription",I=b++,R=(t={},t[x]=m.a,t[M]=m.b,t),q=(u={},u[M]=m.b,u);return function(t){d()("function"==typeof t,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(t));var a=t.displayName||t.name||"Component",u=w(a),l=v({},k,{getDisplayName:w,methodName:O,renderCountProp:P,shouldHandleStateChanges:j,storeKey:x,withRef:T,displayName:u,wrappedComponentName:a,WrappedComponent:t}),f=function(a){function p(e,t){r(this,p);var n=o(this,a.call(this,e,t));return n.version=I,n.state={},n.renderCount=0,n.store=e[x]||t[x],n.propsMode=Boolean(e[x]),n.setWrappedInstance=n.setWrappedInstance.bind(n),d()(n.store,'Could not find "'+x+'" in either the context or props of "'+u+'". Either wrap the root component in a <Provider>, or explicitly pass "'+x+'" as a prop to "'+u+'".'),n.initSelector(),n.initSubscription(),n}return i(p,a),p.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return e={},e[M]=t||this.context[M],e},p.prototype.componentDidMount=function(){j&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},p.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},p.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},p.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=s,this.store=null,this.selector.run=s,this.selector.shouldComponentUpdate=!1},p.prototype.getWrappedInstance=function(){return d()(T,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+O+"() call."),this.wrappedInstance},p.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},p.prototype.initSelector=function(){var t=e(this.store.dispatch,l);this.selector=c(t,this.store),this.selector.run(this.props)},p.prototype.initSubscription=function(){if(j){var e=(this.propsMode?this.props:this.context)[M];this.subscription=new y.a(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},p.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(g)):this.notifyNestedSubs()},p.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},p.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},p.prototype.addExtraProps=function(e){if(!(T||P||this.propsMode&&this.subscription))return e;var t=v({},e);return T&&(t.ref=this.setWrappedInstance),P&&(t[P]=this.renderCount++),this.propsMode&&this.subscription&&(t[M]=this.subscription),t},p.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return n.i(h.createElement)(t,this.addExtraProps(e.props))},p}(h.Component);return f.WrappedComponent=t,f.displayName=u,f.childContextTypes=q,f.contextTypes=R,f.propTypes=R,p()(f,t)}}t.a=u;var l=n(36),p=n.n(l),f=n(37),d=n.n(f),h=n(5),y=(n.n(h),n(59)),m=n(22),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=0,g={}},function(e,t,n){"use strict";function r(e){return function(t,n){function r(){return o}var o=e(t,n);return r.dependsOnOwnProps=!1,r}}function o(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function i(e,t){return function(t,n){var r=(n.displayName,function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)});return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=o(e);var i=r(t,n);return"function"==typeof i&&(r.mapToProps=i,r.dependsOnOwnProps=o(i),i=r(t,n)),i},r}}t.b=r,t.a=i;n(23)},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var r=n(19),o=n.n(r),i=o.a.shape({trySubscribe:o.a.func.isRequired,tryUnsubscribe:o.a.func.isRequired,notifyNestedSubs:o.a.func.isRequired,isSubscribed:o.a.func.isRequired}),a=o.a.shape({subscribe:o.a.func.isRequired,dispatch:o.a.func.isRequired,getState:o.a.func.isRequired})},function(e,t,n){"use strict";n(9),n(11)},function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var r=t[t.length-1],o=t.slice(0,-1);return function(){return o.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}}t.a=r},function(e,t,n){"use strict";function r(e,t,i){function c(){b===v&&(b=v.slice())}function u(){return m}function l(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return c(),b.push(e),function(){if(t){t=!1,c();var n=b.indexOf(e);b.splice(n,1)}}}function p(e){if(!n.i(o.a)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(g)throw new Error("Reducers may not dispatch actions.");try{g=!0,m=y(m,e)}finally{g=!1}for(var t=v=b,r=0;r<t.length;r++)t[r]();return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");y=e,p({type:s.INIT})}function d(){var e,t=l;return e={subscribe:function(e){function n(){e.next&&e.next(u())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[a.a]=function(){return this},e}var h;if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(r)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var y=e,m=t,v=[],b=v,g=!1;return p({type:s.INIT}),h={dispatch:p,subscribe:l,getState:u,replaceReducer:f},h[a.a]=d,h}n.d(t,"b",function(){return s}),t.a=r;var o=n(9),i=n(64),a=n.n(i),s={INIT:"@@redux/INIT"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),o=n(63),i=n(62),a=n(61),s=n(24);n(27);n.d(t,"createStore",function(){return r.a}),n.d(t,"combineReducers",function(){return o.a}),n.d(t,"bindActionCreators",function(){return i.a}),n.d(t,"applyMiddleware",function(){return a.a}),n.d(t,"compose",function(){return s.a})},function(e,t,n){"use strict"},,,,,,,,,function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},i="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,n){if("string"!=typeof t){var a=Object.getOwnPropertyNames(t);i&&(a=a.concat(Object.getOwnPropertySymbols(t)));for(var s=0;s<a.length;++s)if(!(r[a[s]]||o[a[s]]||n&&n[a[s]]))try{e[a[s]]=t[a[s]]}catch(e){}}return e}},function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],l=0;c=new Error(t.replace(/%s/g,function(){return u[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};e.exports=r},function(e,t,n){"use strict";function r(e){return null==e?void 0===e?c:s:u&&u in Object(e)?n.i(i.a)(e):n.i(a.a)(e)}var o=n(18),i=n(41),a=n(42),s="[object Null]",c="[object Undefined]",u=o.a?o.a.toStringTag:void 0;t.a=r},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(t,n(16))},function(e,t,n){"use strict";var r=n(43),o=n.i(r.a)(Object.getPrototypeOf,Object);t.a=o},function(e,t,n){"use strict";function r(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=s.call(e);return r&&(t?e[c]=n:delete e[c]),o}var o=n(18),i=Object.prototype,a=i.hasOwnProperty,s=i.toString,c=o.a?o.a.toStringTag:void 0;t.a=r},function(e,t,n){"use strict";function r(e){return i.call(e)}var o=Object.prototype,i=o.toString;t.a=r},function(e,t,n){"use strict";function r(e,t){return function(n){return e(t(n))}}t.a=r},function(e,t,n){"use strict";var r=n(39),o="object"==typeof self&&self&&self.Object===Object&&self,i=r.a||o||Function("return this")();t.a=i},function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e}t.a=r},function(e,t,n){"use strict";var r=n(7),o=n(0),i=n(68);e.exports=function(){function e(e,t,n,r,a,s){s!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},,,,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1],a=n||t+"Subscription",c=function(e){function n(i,a){r(this,n);var s=o(this,e.call(this,i,a));return s[t]=i.store,s}return i(n,e),n.prototype.getChildContext=function(){var e;return e={},e[t]=this[t],e[a]=null,e},n.prototype.render=function(){return s.Children.only(this.props.children)},n}(s.Component);return c.propTypes={store:l.a.isRequired,children:u.a.element.isRequired},c.childContextTypes=(e={},e[t]=l.a.isRequired,e[a]=l.b,e),c.displayName="Provider",c}t.b=a;var s=n(5),c=(n.n(s),n(19)),u=n.n(c),l=n(22);n(11);t.a=a()},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function i(e,t){return e===t}var a=n(20),s=n(60),c=n(53),u=n(54),l=n(55),p=n(56),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,n=void 0===t?a.a:t,d=e.mapStateToPropsFactories,h=void 0===d?u.a:d,y=e.mapDispatchToPropsFactories,m=void 0===y?c.a:y,v=e.mergePropsFactories,b=void 0===v?l.a:v,g=e.selectorFactory,w=void 0===g?p.a:g;return function(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=c.pure,l=void 0===u||u,p=c.areStatesEqual,d=void 0===p?i:p,y=c.areOwnPropsEqual,v=void 0===y?s.a:y,g=c.areStatePropsEqual,S=void 0===g?s.a:g,O=c.areMergedPropsEqual,E=void 0===O?s.a:O,P=r(c,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),_=o(e,h,"mapStateToProps"),j=o(t,m,"mapDispatchToProps"),C=o(a,b,"mergeProps");return n(w,f({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:_,initMapDispatchToProps:j,initMergeProps:C,pure:l,areStatesEqual:d,areOwnPropsEqual:v,areStatePropsEqual:S,areMergedPropsEqual:E},P))}}()},function(e,t,n){"use strict";function r(e){return"function"==typeof e?n.i(s.a)(e,"mapDispatchToProps"):void 0}function o(e){return e?void 0:n.i(s.b)(function(e){return{dispatch:e}})}function i(e){return e&&"object"==typeof e?n.i(s.b)(function(t){return n.i(a.bindActionCreators)(e,t)}):void 0}var a=n(26),s=n(21);t.a=[r,o,i]},function(e,t,n){"use strict";function r(e){return"function"==typeof e?n.i(i.a)(e,"mapStateToProps"):void 0}function o(e){return e?void 0:n.i(i.b)(function(){return{}})}var i=n(21);t.a=[r,o]},function(e,t,n){"use strict";function r(e,t,n){return s({},n,e,t)}function o(e){return function(t,n){var r=(n.displayName,n.pure),o=n.areMergedPropsEqual,i=!1,a=void 0;return function(t,n,s){var c=e(t,n,s);return i?r&&o(c,a)||(a=c):(i=!0,a=c),a}}}function i(e){return"function"==typeof e?o(e):void 0}function a(e){return e?void 0:function(){return r}}var s=(n(23),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});t.a=[i,a]},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function i(e,t,n,r,o){function i(o,i){return h=o,y=i,m=e(h,y),v=t(r,y),b=n(m,v,y),d=!0,b}function a(){return m=e(h,y),t.dependsOnOwnProps&&(v=t(r,y)),b=n(m,v,y)}function s(){return e.dependsOnOwnProps&&(m=e(h,y)),t.dependsOnOwnProps&&(v=t(r,y)),b=n(m,v,y)}function c(){var t=e(h,y),r=!f(t,m);return m=t,r&&(b=n(m,v,y)),b}function u(e,t){var n=!p(t,y),r=!l(e,h);return h=e,y=t,n&&r?a():n?s():r?c():b}var l=o.areStatesEqual,p=o.areOwnPropsEqual,f=o.areStatePropsEqual,d=!1,h=void 0,y=void 0,m=void 0,v=void 0,b=void 0;return function(e,t){return d?u(e,t):i(e,t)}}function a(e,t){var n=t.initMapStateToProps,a=t.initMapDispatchToProps,s=t.initMergeProps,c=r(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),u=n(e,c),l=a(e,c),p=s(e,c);return(c.pure?i:o)(u,l,p,e,c)}t.a=a;n(57)},function(e,t,n){"use strict";n(11)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(51),o=n(20),i=n(52);n.d(t,"Provider",function(){return r.a}),n.d(t,"createProvider",function(){return r.b}),n.d(t,"connectAdvanced",function(){return o.a}),n.d(t,"connect",function(){return i.a})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){var e=[],t=[];return{clear:function(){t=i,e=i},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&e!==i&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}n.d(t,"a",function(){return s});var i=null,a={notify:function(){}},s=function(){function e(t,n,o){r(this,e),this.store=t,this.parentSub=n,this.onStateChange=o,this.unsubscribe=null,this.listeners=a}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=o())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=a)},e}()},function(e,t,n){"use strict";function r(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}function o(e,t){if(r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=0;a<n.length;a++)if(!i.call(t,n[a])||!r(e[n[a]],t[n[a]]))return!1;return!0}t.a=o;var i=Object.prototype.hasOwnProperty},function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,a){var s=e(n,r,a),c=s.dispatch,u=[],l={getState:s.getState,dispatch:function(e){return c(e)}};return u=t.map(function(e){return e(l)}),c=o.a.apply(void 0,u)(s.dispatch),i({},s,{dispatch:c})}}}t.a=r;var o=n(24),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},function(e,t,n){"use strict";function r(e,t){return function(){return t(e.apply(void 0,arguments))}}function o(e,t){if("function"==typeof e)return r(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),o={},i=0;i<n.length;i++){var a=n[i],s=e[a];"function"==typeof s&&(o[a]=r(s,t))}return o}t.a=o},function(e,t,n){"use strict";function r(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:a.b.INIT}))throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.b.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function i(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++){var a=t[i];"function"==typeof e[a]&&(n[a]=e[a])}var s,c=Object.keys(n);try{o(n)}catch(e){s=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(s)throw s;for(var o=!1,i={},a=0;a<c.length;a++){var u=c[a],l=n[u],p=e[u],f=l(p,t);if(void 0===f){var d=r(u,t);throw new Error(d)}i[u]=f,o=o||f!==p}return o?i:e}}t.a=i;var a=n(25);n(9),n(27)},function(e,t,n){e.exports=n(65)},function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(66),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var s=(0,a.default)(o);t.default=s}).call(t,n(16),n(17)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e){var t=e.split("&"),n=void 0,r=void 0,o=[];for(n=0,r=t.length;n<r;n++)o.push(t[n]);return o}return[]}function i(e,t){var n=void 0,r=void 0,o="",i=localStorage.getItem("searchHistory")||"";for(o=""===i?e:i+"&"+e,n=0,r=t.length;n<r;n++)if(e===t[n]){o=i;break}return o}function a(e,t){switch(void 0===e&&(e={value:"",isShow:!0,myhistory:[],items:[],desc:"",isSearching:!1,isUpdateing:!1,showTop:!1}),t.type){case"init":var n=localStorage.getItem("searchHistory"),r=o(n),a=t.content;return a&&t.ajaxSearch(a,n),(0,f.assign)({},e,{myhistory:r||[],ajaxSearch:t.ajaxSearch,value:t.content,isShow:t.isShow,isSearching:!!a});case"updateing":return(0,f.assign)({},e,{isUpdateing:!0});case"showTop":return(0,f.assign)({},e,{showTop:t.showTop});case"submit":if(g){var s=e.value,c=i(s,e.myhistory),u="searchMobile.html?content="+s;history.pushState({},"",u),e.ajaxSearch(s,c)}return(0,f.assign)({},e,{isSearching:!0,isShow:!1});case"inputValue":return(0,f.assign)({},e,{value:t.value});case"empty":return localStorage.removeItem("searchHistory"),(0,f.assign)({},e,{myhistory:[]});case"getSearchResult":return(0,f.assign)({},e,{isShow:!1,isSearching:!1,items:t.items,desc:t.desc});case"updateResult":return(0,f.assign)({},e,{isShow:!1,isSearching:!1,items:e.items.concat(t.items),desc:t.desc,isUpdateing:!1});case"clickHistory":var l=t.value,p=i(l,e.myhistory),d="searchMobile.html?content="+l;return history.pushState({},"",d),e.ajaxSearch(l,p),(0,f.assign)({},e,{isSearching:!0,isShow:!1,value:l});default:return e}}function s(e){return{searchState:e.search,PtState:e.Pt}}function c(e){return{searchDispatch:{search:function(){e({type:"submit"})},input:function(t){var n=t.target.value;e({type:"inputValue",value:n})},keyPress:function(t){13==t.charCode&&e({type:"submit"})},empty:function(){e({type:"empty"})},toTop:function(){scrollTo(0,0)},clickHistory:function(t){e({type:"clickHistory",value:t})}}}}var u=n(26),l=n(58),p=n(130),f=n(8),d=n(67),h=r(d),y=n(5),m=r(y),v=(0,u.combineReducers)({search:a}),b=(0,u.createStore)(v),g=!!window.localStorage,w=(0,l.connect)(s,c)(p.Blue_Container);h.default.render(m.default.createElement(l.Provider,{store:b},m.default.createElement(w,null)),document.getElementById("container")),e.exports=b},,,function(e,t,n){"use strict";function r(){clearTimeout(f),f=setTimeout(function(){d=(0,a.getScreenSize)().width},300)}function o(e,t){var n=t||{};return n.type=e,n}var i=n(15),a=n(8),s=n(123),c=function(e){return e&&e.__esModule?e:{default:e}}(s),u=(window,a.config.host),l=u+"/openapi/realtime/search",p=a.config.publicData,f=void 0,d=(0,a.getScreenSize)().width;!function(e,t){function n(e,t,n){var r=p;r.key=e,r.from="mobile_list",r.pg_num=h,r.page_size=d>768?10:5,r.version=7.5,y=!1,i.ajaxExpanding.init({url:l,data:r,dataType:"json",type:"get",async:!0,handleData:function(e){return JSON.parse(e)},onSuccess:function(e){var r=e.data,i=e.code,s=void 0,u="",l=[],p=void 0,f=void 0;if(++h,y=!0,f=d>=1180?25:15,1e5===i){for(s=0,p=r.length;s<p;s++)l.push({title:(0,a.getlimitStr)(r[s].short_title,f),score:r[s].sns_score,img:r[s].img});t&&localStorage.setItem("searchHistory",t)}else u="未搜索到相应内容";c.default.dispatch(o(n?"updateResult":"getSearchResult",{items:l,desc:u}))},onFail:function(){this.data.req_times+=1,this.send()}}).send()}var s=(0,a.parseURLQuery)(e.location.href),u=s.content,f=!0,h=1,y=!1,m=void 0;u&&(f=!1),c.default.dispatch(o("init",{ajaxSearch:n,isShow:f,content:u||""})),e.addEventListener("load",function(){setTimeout(function(){e.addEventListener("popstate",function(){return e.location.reload()},!1)},0)},!1),e.addEventListener("scroll",function(e){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,r=Math.min(document.documentElement.scrollHeight,document.documentElement.clientHeight),i=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight),a=t-i+r;t>700?c.default.dispatch(o("showTop",{showTop:!0})):c.default.dispatch(o("showTop",{showTop:!1})),a>=-10&&(!m||m<a)&&(c.default.dispatch(o("updateing",{isUpdateing:!0})),y&&n(u,!1,!0)),m=a}),e.addEventListener("resize",r,!1),e.addEventListener("pageshow",r,!1)}(window,document)},,,,function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(5),l=function(e){return e&&e.__esModule?e:{default:e}}(u),p=n(8),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"_createStar",value:function(e,t){var n=void 0,r=void 0,o=[];for(e>t&&(e=t),n=0,r=t;n<r;n++)o.push(l.default.createElement("span",{className:n<e?"star onstar":"star nostar",key:n,"data-key":n}));return o}},{key:"render",value:function(){var e=this.props.score,t=Math.floor(e/2);return l.default.createElement("div",{className:"Blue_Score"},this._createStar(t,5),l.default.createElement("span",{className:"score fontSizeM"},e))}}]),t}(l.default.Component),d=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props;e.search,e.input;return l.default.createElement("div",{className:"Blue_Top fontSizeM maxWarp"},l.default.createElement("a",{href:"../index.html"},l.default.createElement("span",{className:"logo"})),l.default.createElement("span",null,"搜索"))}}]),t}(l.default.Component),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props.item,t=e.img,n=e.title,r=e.score;return l.default.createElement("div",{className:"Blue_SearchCard"},l.default.createElement("img",{src:t}),l.default.createElement("div",{className:"desc fontSizeL"},l.default.createElement("span",{className:"name"},n),l.default.createElement(f,{score:+r||0})))}}]),t}(l.default.Component),y=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"_creatCards",value:function(e,t){var n=void 0,r=e.length,o=[];if(0===r)o.push(l.default.createElement("p",{className:"searching fontSizeM",key:0},t));else for(n=0;n<r;n++)o.push(l.default.createElement(h,{key:n,item:e[n]}));return o}},{key:"_clickHistory",value:function(e){var t=this;return function(){t.props.clickHistory(e)}}},{key:"render",value:function(){var e=this.props,t=e.input,n=e.search,r=e.myhistory,o=e.empty,i=e.isShow,a=e.items,s=e.desc,c=e.value,u=e.keyPress,f=e.isSearching,d=e.isUpdateing,h=this;return l.default.createElement("div",{className:"Blue_SearchMobile"},l.default.createElement("div",{className:"searchWarp"},l.default.createElement("div",{className:"inputWarp maxWarp"},l.default.createElement("input",{className:"fontSizeL",value:c,onInput:t,onKeyPress:u}),l.default.createElement("button",{onClick:n}))),i&&!f&&l.default.createElement("div",{className:"myHistory"},l.default.createElement("div",{className:"maxWarp"},l.default.createElement("h1",{className:"fontSizeM"},"搜索记录"),l.default.createElement("ul",null,r.map(function(e,t){return l.default.createElement("li",{key:t,onClick:h._clickHistory(e),className:"fontSizeM"},l.default.createElement("span",null,e))})),r.length>0?l.default.createElement("div",null,l.default.createElement("button",{className:"empty",onClick:o}),l.default.createElement("p",{className:"emptyWarn fontSizeSS"},"清空记录")):l.default.createElement("p",{className:"fontSizeM"},"目前还没有搜索记录!"))),i||f?void 0:l.default.createElement("div",{className:"searchContent"},l.default.createElement("div",{className:"maxWarp"},this._creatCards(a,s))),d&&l.default.createElement("div",{className:"searching",style:{marginTop:0}},l.default.createElement("img",{className:"searchImg",src:p.config.ourHost+"/resource/images/loading.gif"}),l.default.createElement("p",{className:"fontSizeM"},"正在加載中....")),!i&&!f&&l.default.createElement("footer",{className:"fontSizeSS"},"蓝山工作室15级前端组制作"),f&&l.default.createElement("div",{className:"searching"},l.default.createElement("img",{className:"searchImg",src:p.config.ourHost+"/resource/images/loading.gif"}),l.default.createElement("p",{className:"fontSizeM"},"正在搜索中....")))}}]),t}(l.default.Component),m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"_create",value:function(){var e=[],t=void 0,n=this.props,o=n.click,i=n.start,a=n.showNum,s=n.index,c=n.sum;for(t=i;t<=a+i-1;t++)t<=a+i-a+1&&a+i>a+1?(t==a+i-a+1&&e.push(l.default.createElement("li",r({onClick:o,className:"item",key:t,"data-index":!1},"className",""),"...")),t==a+i-a&&e.push(l.default.createElement("li",r({onClick:o,className:"item",key:1,"data-index":1},"className",""),1))):t>=a+i-2&&a+i<=c?(t==a+i-2&&e.push(l.default.createElement("li",r({onClick:o,className:"item",key:t,"data-index":!1},"className",""),"...")),t==a+i-1&&e.push(l.default.createElement("li",r({onClick:o,className:"item",key:c,"data-index":c},"className",""),c))):e.push(l.default.createElement("li",r({onClick:o,className:"item",key:t,"data-index":t},"className",t==s?"cur":""),t));return e}},{key:"render",value:function(){return l.default.createElement("ul",{id:"warp"},this._create())}}]),t}(l.default.Component),v=(function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.sum,n=e.index,r=e.start,o=e.showNum,i=e.last,a=e.next,s=e.click;return o>t&&(o=t),l.default.createElement("div",null,t>1&&l.default.createElement("div",{id:"turnPageWarp"},l.default.createElement("div",{className:"BluMUI_PT"},l.default.createElement("button",{id:"lastPage",onClick:i,className:"last"}),l.default.createElement(m,{sum:t,click:s,showNum:o,index:n,start:r}),l.default.createElement("button",{id:"nextPage",onClick:a,className:"next"}))))}}])}(l.default.Component),function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.searchState,n=(e.PtState,e.searchDispatch);return l.default.createElement("div",{className:"Blue_Container"},l.default.createElement("header",null,l.default.createElement(d,null)),l.default.createElement(y,s({},t,n)),t.showTop&&l.default.createElement("button",{className:"backTopBtn",onClick:n.toTop}))}}]),t}(l.default.Component));e.exports={Blue_Container:v}}],[126]);