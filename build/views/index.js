webpackJsonp([3],[,,,,,,,,function(e,t,n){"use strict";function r(e){if(!n.i(a.a)(e)||n.i(o.a)(e)!=c)return!1;var t=n.i(i.a)(e);if(null===t)return!0;var r=p.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==f}var o=n(38),i=n(40),a=n(45),c="[object Object]",s=Function.prototype,u=Object.prototype,l=s.toString,p=u.hasOwnProperty,f=l.call(Object);t.a=r},,function(e,t,n){"use strict";function r(e){"undefined"!=typeof console&&console.error;try{throw new Error(e)}catch(e){}}t.a=r},function(e,t,n){"use strict";function r(){var e=p.getBoundingClientRect().width,t=p.clientHeight;return o(e,s.dpr),{width:Math.ceil(e*s.scale),height:Math.ceil(t*s.scale)}}function o(e,t){var n=void 0;e/t>540&&(e=540*t),n=e/10,s.rem=n,p.style.fontSize=n+"px",e<=768&&(s.isMobile=!0)}function i(e){var t=decodeURI(e).split("?")[1],n={};if(t){var r=t.split("&"),o=void 0,i=void 0,a=void 0;for(o=0,a=r.length;o<a;o++)i=r[o].split("="),n[i[0]]=i[1]}return n}function a(e,t,n,r){var o=t-r,i=n-e,a=Math.sqrt(i*i+o*o),c=Math.atan2(o,i)/Math.PI*180;return a<3?0:c<=135&&c>45?1:c<=-45&&c>-135?-1:c<=45&&c>-45?2:c>=135&&c<=180||i<=-135&&c>-180?-2:0}function c(e,t,n){var r=n||"";return e.length>=t&&(e=e.substring(0,t-1)+r),e}var s={host:"http://iface.qiyi.com",publicData:{app_k:"f0f6c3ee5709615310c0f053dc9c65f2",app_v:8.4,app_t:0,platform_id:10,dev_os:6,dev_ua:"MI 5",dev_hw:{cpu:0,gpu:"",mem:"50.4MB"},net_sts:1,scrn_sts:1,scrn_res:"1334*750",scrn_dpi:"153600",qyid:"87390BD2-DACE-497B-9CD4-2FD14354B2A4",secure_v:1,secure_p:"GPhone",core:1,req_sn:"1493946331320",req_times:1},dpr:1,scale:1,isMobile:!1,width:0,height:0},u=document,l=window,p=u.documentElement,f=u.querySelector('meta[name="viewport"]');!function(){var e=l.navigator.appVersion,t=e.match(/android (\d\.\d)/i),n=e.match(/iphone os (\d)/i),r=l.devicePixelRatio,i=p.getBoundingClientRect().width,a=p.clientHeight,c=1,u=1,d=0;(t||n)&&(s.isMobile=!0,d=t?t[1]:n[1]),c=n?r>=3?3:r>=2?2:1:1,u=parseFloat((1/c).toFixed(2)),p.setAttribute("data-dpr",c),f.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),o(i,c),s.scale=u,s.dpr=c,s.width=i,s.height=a,s.publicData.scrn_dpi=i*a,s.publicData.scrn_res=i+"*"+a,s.publicData.dev_os=d||6}(),e.exports={config:s,parseURLQuery:i,getScreenSize:r,getTouchDirection:a,getlimitStr:c}},,,,function(e,t,n){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,n){return null!=e&&("object"==(void 0===e?"undefined":t(e))&&1===e.nodeType&&(!n||"all"==n||e.nodeName.toLowerCase()==n.toLowerCase()))}function n(e){var t=e.split(".");return t[t.length-1]}function r(){return new XMLHttpRequest}function o(e,r,o,i){var a,c,s,u,l="",p=!0,f=!0,d="",h={},y=[];switch(i){case"json":if("object"==(void 0===e?"undefined":t(e)))for(u in e)void 0!==e[u]&&null!==e[u]&&(l+=""!==l?"&"+u+"="+JSON.stringify(e[u]).replace(/\"/g,""):u+"="+JSON.stringify(e[u]).replace(/\"/g,""));else"string"==typeof e&&(l=e);break;case"form":if(window.FormData){var v=new FormData;if("object"==(void 0===e?"undefined":t(e))){for(u in e)if("[object FileList]"==Object.prototype.toString.call(e[u].value)){if(h={isCheck:!0,type:e[u].type||u},s=e[u].value.length,0==s&&(o.ischeck=!1,h.isCheck=!1),e[u].suffix&&o.ischeck)for(a=0;a<s;a++)c=n(e[u].value[a].name),o.ischeck=e[u].suffix.some(function(e){return c.toLowerCase()==e.toLowerCase()}),p=o.ischeck;if(e[u].maxSize&&p&&o.ischeck)for(a=0;a<s;a++)e[u].value[a].size>1024*e[u].maxSize*1024&&(o.ischeck=!1,f=!1);if(s>0&&!o.ischeck&&(p?f||(d="文件大小超过:"+e[u].maxSize+"mb"):d="文件格式不满足:"+e[u].suffix.join(",")+"格式",h.isCheck=!1),o.ischeck)for(a=0;a<s;a++)v.append(u,e[u].value[a]);h.errorInf=d||e[u].errorInf,y.push(h)}else if(e[u].pattern){h={isCheck:!0,type:e[u].type||u};var b;b=void 0!=e[u].checkValue?e[u].checkValue:e[u].value,e[u].pattern.test(b)?v.append(u,e[u].value):(o.ischeck=!1,h.isCheck=!1),h.errorInf=e[u].errorInf,y.push(h)}else v.append(u,e[u].value);o.onCheck&&o.onCheck(y),l=v}}}return l}return{init:function(e){var t=this[e.name]={};t.result=null,t.handleData=e.handleData||null,t.type=e.type||"get",t.async=e.async||!1,t.dataType=e.dataType||"json",t.timeOut=e.timeOut,t.xhr=r()},send:function(e,t,n){var r,i=this[t],a=i.xhr;if(i.ischeck=!0,i.onCheck=e.onCheck,r=o(e.data,t,i,i.dataType),i.ischeck){if(i.stopFlag=!1,i.timeoutFlag=!1,e.onStart&&e.onStart(),n||(n=i),e.onProgress)try{a.onprogress=function(t){t.total>0&&e.onProgress.call(n,t.loaded,t.total)}}catch(e){}if(e.onAbort)try{a.onabort=function(t){i.stopFlag&&e.onAbort.call(n,a.status)}}catch(e){}if(e.onError)try{a.onerror=function(t){e.onError.call(n)}}catch(e){}a.onreadystatechange=function(t){if(4===a.readyState&&(clearTimeout(r),a.status>=200&&a.status<300||304==a.status?(i.result=null==i.handleData?a.responseText:i.handleData(a.responseText),e.onSuccess&&e.onSuccess.call(n,i.result)):i.stopFlag||i.timeoutFlag||e.onFail&&e.onFail.call(n,a.status)),0===a.readyState)var r=setTimeout(function(){i.timeoutFlag=!0,i.async&&i.timeoutFlag&&(a.abort(),e.onTimeOut&&e.onTimeOut.call(n))},i.timeOut)},"post"==i.type?a.open(i.type,e.url,i.async):"get"==i.type&&(e.data?a.open(i.type,e.url+"?"+r,i.async):a.open(i.type,e.url,i.async)),"json"==i.dataType&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),"get"==i.type?a.send(null):a.send(r)}},stop:function(t){this[t].xhr&&!e(this[t].xhr)&&(this[t].stopFlag=!0,this[t].xhr.abort())},parse:function(e,n,r){var o,i,a;switch((void 0===e?"undefined":t(e)).toLowerCase()){case"string":"json"===r.toLowerCase()&&(o=JSON.parse(e));break;case"object":if("[object Array]"===Object.prototype.toString.call(r)){for(i=0,a=r.length;i<a;i++)if(r[i][2])"[object Array]"===Object.prototype.toString.call(r[i][0])&&(n[r[i][1]]=r[i][2](e[r[i][0]])),n[r[i][1]]=r[i][2](e[r[i][0]]);else{if("[object Array]"===Object.prototype.toString.call(r[i][0]))throw new Error("输入的数据不能是数组,除非有处理函数");n[r[i][1]]=e[r[i][0]]}o=n}else"function"==typeof r&&(o=r(e));break;default:o=e}return o}}}();"object"==t(e)&&(e.exports={ajaxExpanding:n})}).call(t,n(17)(e))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r=n(44),o=r.a.Symbol;t.a=o},function(e,t,n){e.exports=n(46)()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function c(){}function s(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}function u(e){var t,u,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=l.getDisplayName,w=void 0===f?function(e){return"ConnectAdvanced("+e+")"}:f,O=l.methodName,S=void 0===O?"connectAdvanced":O,x=l.renderCountProp,j=void 0===x?void 0:x,C=l.shouldHandleStateChanges,E=void 0===C||C,P=l.storeKey,_=void 0===P?"store":P,N=l.withRef,k=void 0!==N&&N,T=a(l,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),I=_+"Subscription",M=m++,D=(t={},t[_]=v.a,t[I]=v.b,t),R=(u={},u[I]=v.b,u);return function(t){d()("function"==typeof t,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(t));var a=t.displayName||t.name||"Component",u=w(a),l=b({},T,{getDisplayName:w,methodName:S,renderCountProp:j,shouldHandleStateChanges:E,storeKey:_,withRef:k,displayName:u,wrappedComponentName:a,WrappedComponent:t}),f=function(a){function p(e,t){r(this,p);var n=o(this,a.call(this,e,t));return n.version=M,n.state={},n.renderCount=0,n.store=e[_]||t[_],n.propsMode=Boolean(e[_]),n.setWrappedInstance=n.setWrappedInstance.bind(n),d()(n.store,'Could not find "'+_+'" in either the context or props of "'+u+'". Either wrap the root component in a <Provider>, or explicitly pass "'+_+'" as a prop to "'+u+'".'),n.initSelector(),n.initSubscription(),n}return i(p,a),p.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return e={},e[I]=t||this.context[I],e},p.prototype.componentDidMount=function(){E&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},p.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},p.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},p.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=c,this.store=null,this.selector.run=c,this.selector.shouldComponentUpdate=!1},p.prototype.getWrappedInstance=function(){return d()(k,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+S+"() call."),this.wrappedInstance},p.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},p.prototype.initSelector=function(){var t=e(this.store.dispatch,l);this.selector=s(t,this.store),this.selector.run(this.props)},p.prototype.initSubscription=function(){if(E){var e=(this.propsMode?this.props:this.context)[I];this.subscription=new y.a(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},p.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(g)):this.notifyNestedSubs()},p.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},p.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},p.prototype.addExtraProps=function(e){if(!(k||j||this.propsMode&&this.subscription))return e;var t=b({},e);return k&&(t.ref=this.setWrappedInstance),j&&(t[j]=this.renderCount++),this.propsMode&&this.subscription&&(t[I]=this.subscription),t},p.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return n.i(h.createElement)(t,this.addExtraProps(e.props))},p}(h.Component);return f.WrappedComponent=t,f.displayName=u,f.childContextTypes=R,f.contextTypes=D,f.propTypes=D,p()(f,t)}}t.a=u;var l=n(36),p=n.n(l),f=n(37),d=n.n(f),h=n(5),y=(n.n(h),n(59)),v=n(22),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=0,g={}},function(e,t,n){"use strict";function r(e){return function(t,n){function r(){return o}var o=e(t,n);return r.dependsOnOwnProps=!1,r}}function o(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function i(e,t){return function(t,n){var r=(n.displayName,function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)});return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=o(e);var i=r(t,n);return"function"==typeof i&&(r.mapToProps=i,r.dependsOnOwnProps=o(i),i=r(t,n)),i},r}}t.b=r,t.a=i;n(23)},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var r=n(19),o=n.n(r),i=o.a.shape({trySubscribe:o.a.func.isRequired,tryUnsubscribe:o.a.func.isRequired,notifyNestedSubs:o.a.func.isRequired,isSubscribed:o.a.func.isRequired}),a=o.a.shape({subscribe:o.a.func.isRequired,dispatch:o.a.func.isRequired,getState:o.a.func.isRequired})},function(e,t,n){"use strict";n(8),n(10)},function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var r=t[t.length-1],o=t.slice(0,-1);return function(){return o.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}}t.a=r},function(e,t,n){"use strict";function r(e,t,i){function s(){m===b&&(m=b.slice())}function u(){return v}function l(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return s(),m.push(e),function(){if(t){t=!1,s();var n=m.indexOf(e);m.splice(n,1)}}}function p(e){if(!n.i(o.a)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(g)throw new Error("Reducers may not dispatch actions.");try{g=!0,v=y(v,e)}finally{g=!1}for(var t=b=m,r=0;r<t.length;r++)t[r]();return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");y=e,p({type:c.INIT})}function d(){var e,t=l;return e={subscribe:function(e){function n(){e.next&&e.next(u())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[a.a]=function(){return this},e}var h;if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(r)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var y=e,v=t,b=[],m=b,g=!1;return p({type:c.INIT}),h={dispatch:p,subscribe:l,getState:u,replaceReducer:f},h[a.a]=d,h}n.d(t,"b",function(){return c}),t.a=r;var o=n(8),i=n(64),a=n.n(i),c={INIT:"@@redux/INIT"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),o=n(63),i=n(62),a=n(61),c=n(24);n(27);n.d(t,"createStore",function(){return r.a}),n.d(t,"combineReducers",function(){return o.a}),n.d(t,"bindActionCreators",function(){return i.a}),n.d(t,"applyMiddleware",function(){return a.a}),n.d(t,"compose",function(){return c.a})},function(e,t,n){"use strict"},,,,,,,,,function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},i="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,n){if("string"!=typeof t){var a=Object.getOwnPropertyNames(t);i&&(a=a.concat(Object.getOwnPropertySymbols(t)));for(var c=0;c<a.length;++c)if(!(r[a[c]]||o[a[c]]||n&&n[a[c]]))try{e[a[c]]=t[a[c]]}catch(e){}}return e}},function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],l=0;s=new Error(t.replace(/%s/g,function(){return u[l++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}};e.exports=r},function(e,t,n){"use strict";function r(e){return null==e?void 0===e?s:c:u&&u in Object(e)?n.i(i.a)(e):n.i(a.a)(e)}var o=n(18),i=n(41),a=n(42),c="[object Null]",s="[object Undefined]",u=o.a?o.a.toStringTag:void 0;t.a=r},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(t,n(16))},function(e,t,n){"use strict";var r=n(43),o=n.i(r.a)(Object.getPrototypeOf,Object);t.a=o},function(e,t,n){"use strict";function r(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[s]=n:delete e[s]),o}var o=n(18),i=Object.prototype,a=i.hasOwnProperty,c=i.toString,s=o.a?o.a.toStringTag:void 0;t.a=r},function(e,t,n){"use strict";function r(e){return i.call(e)}var o=Object.prototype,i=o.toString;t.a=r},function(e,t,n){"use strict";function r(e,t){return function(n){return e(t(n))}}t.a=r},function(e,t,n){"use strict";var r=n(39),o="object"==typeof self&&self&&self.Object===Object&&self,i=r.a||o||Function("return this")();t.a=i},function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e}t.a=r},function(e,t,n){"use strict";var r=n(7),o=n(0),i=n(68);e.exports=function(){function e(e,t,n,r,a,c){c!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},,,,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1],a=n||t+"Subscription",s=function(e){function n(i,a){r(this,n);var c=o(this,e.call(this,i,a));return c[t]=i.store,c}return i(n,e),n.prototype.getChildContext=function(){var e;return e={},e[t]=this[t],e[a]=null,e},n.prototype.render=function(){return c.Children.only(this.props.children)},n}(c.Component);return s.propTypes={store:l.a.isRequired,children:u.a.element.isRequired},s.childContextTypes=(e={},e[t]=l.a.isRequired,e[a]=l.b,e),s.displayName="Provider",s}t.b=a;var c=n(5),s=(n.n(c),n(19)),u=n.n(s),l=n(22);n(10);t.a=a()},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function i(e,t){return e===t}var a=n(20),c=n(60),s=n(53),u=n(54),l=n(55),p=n(56),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,n=void 0===t?a.a:t,d=e.mapStateToPropsFactories,h=void 0===d?u.a:d,y=e.mapDispatchToPropsFactories,v=void 0===y?s.a:y,b=e.mergePropsFactories,m=void 0===b?l.a:b,g=e.selectorFactory,w=void 0===g?p.a:g;return function(e,t,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=s.pure,l=void 0===u||u,p=s.areStatesEqual,d=void 0===p?i:p,y=s.areOwnPropsEqual,b=void 0===y?c.a:y,g=s.areStatePropsEqual,O=void 0===g?c.a:g,S=s.areMergedPropsEqual,x=void 0===S?c.a:S,j=r(s,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),C=o(e,h,"mapStateToProps"),E=o(t,v,"mapDispatchToProps"),P=o(a,m,"mergeProps");return n(w,f({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:C,initMapDispatchToProps:E,initMergeProps:P,pure:l,areStatesEqual:d,areOwnPropsEqual:b,areStatePropsEqual:O,areMergedPropsEqual:x},j))}}()},function(e,t,n){"use strict";function r(e){return"function"==typeof e?n.i(c.a)(e,"mapDispatchToProps"):void 0}function o(e){return e?void 0:n.i(c.b)(function(e){return{dispatch:e}})}function i(e){return e&&"object"==typeof e?n.i(c.b)(function(t){return n.i(a.bindActionCreators)(e,t)}):void 0}var a=n(26),c=n(21);t.a=[r,o,i]},function(e,t,n){"use strict";function r(e){return"function"==typeof e?n.i(i.a)(e,"mapStateToProps"):void 0}function o(e){return e?void 0:n.i(i.b)(function(){return{}})}var i=n(21);t.a=[r,o]},function(e,t,n){"use strict";function r(e,t,n){return c({},n,e,t)}function o(e){return function(t,n){var r=(n.displayName,n.pure),o=n.areMergedPropsEqual,i=!1,a=void 0;return function(t,n,c){var s=e(t,n,c);return i?r&&o(s,a)||(a=s):(i=!0,a=s),a}}}function i(e){return"function"==typeof e?o(e):void 0}function a(e){return e?void 0:function(){return r}}var c=(n(23),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});t.a=[i,a]},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function i(e,t,n,r,o){function i(o,i){return h=o,y=i,v=e(h,y),b=t(r,y),m=n(v,b,y),d=!0,m}function a(){return v=e(h,y),t.dependsOnOwnProps&&(b=t(r,y)),m=n(v,b,y)}function c(){return e.dependsOnOwnProps&&(v=e(h,y)),t.dependsOnOwnProps&&(b=t(r,y)),m=n(v,b,y)}function s(){var t=e(h,y),r=!f(t,v);return v=t,r&&(m=n(v,b,y)),m}function u(e,t){var n=!p(t,y),r=!l(e,h);return h=e,y=t,n&&r?a():n?c():r?s():m}var l=o.areStatesEqual,p=o.areOwnPropsEqual,f=o.areStatePropsEqual,d=!1,h=void 0,y=void 0,v=void 0,b=void 0,m=void 0;return function(e,t){return d?u(e,t):i(e,t)}}function a(e,t){var n=t.initMapStateToProps,a=t.initMapDispatchToProps,c=t.initMergeProps,s=r(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),u=n(e,s),l=a(e,s),p=c(e,s);return(s.pure?i:o)(u,l,p,e,s)}t.a=a;n(57)},function(e,t,n){"use strict";n(10)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(51),o=n(20),i=n(52);n.d(t,"Provider",function(){return r.a}),n.d(t,"createProvider",function(){return r.b}),n.d(t,"connectAdvanced",function(){return o.a}),n.d(t,"connect",function(){return i.a})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){var e=[],t=[];return{clear:function(){t=i,e=i},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&e!==i&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}n.d(t,"a",function(){return c});var i=null,a={notify:function(){}},c=function(){function e(t,n,o){r(this,e),this.store=t,this.parentSub=n,this.onStateChange=o,this.unsubscribe=null,this.listeners=a}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=o())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=a)},e}()},function(e,t,n){"use strict";function r(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}function o(e,t){if(r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=0;a<n.length;a++)if(!i.call(t,n[a])||!r(e[n[a]],t[n[a]]))return!1;return!0}t.a=o;var i=Object.prototype.hasOwnProperty},function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,a){var c=e(n,r,a),s=c.dispatch,u=[],l={getState:c.getState,dispatch:function(e){return s(e)}};return u=t.map(function(e){return e(l)}),s=o.a.apply(void 0,u)(c.dispatch),i({},c,{dispatch:s})}}}t.a=r;var o=n(24),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},function(e,t,n){"use strict";function r(e,t){return function(){return t(e.apply(void 0,arguments))}}function o(e,t){if("function"==typeof e)return r(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),o={},i=0;i<n.length;i++){var a=n[i],c=e[a];"function"==typeof c&&(o[a]=r(c,t))}return o}t.a=o},function(e,t,n){"use strict";function r(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:a.b.INIT}))throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.b.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function i(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++){var a=t[i];"function"==typeof e[a]&&(n[a]=e[a])}var c,s=Object.keys(n);try{o(n)}catch(e){c=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(c)throw c;for(var o=!1,i={},a=0;a<s.length;a++){var u=s[a],l=n[u],p=e[u],f=l(p,t);if(void 0===f){var d=r(u,t);throw new Error(d)}i[u]=f,o=o||f!==p}return o?i:e}}t.a=i;var a=n(25);n(8),n(27)},function(e,t,n){e.exports=n(65)},function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(66),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var c=(0,a.default)(o);t.default=c}).call(t,n(16),n(17)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){O=setInterval(function(){w.dispatch({type:"changIndex",changIndexType:1})},3e3)}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[],index:0},t=arguments[1];switch(t.type){case"getNavListItems":return Object.assign({},e,{items:t.items,index:t.index,showLen:t.showLen,callback:t.callback,isOn:!1});case"scrollChange":return Object.assign({},e,{showLen:t.showLen});case"clickItem":return Object.assign({},e,{index:t.index});case"clickBtn":return Object.assign({},e,{isOn:!e.isOn});default:return e}}function a(e,t){switch(void 0===e&&(e={index:0,width:1180,time:3e3,setIntervalTime:2e3,items:[]}),t.type){case"getCarouselItems":return o(),Object.assign({},e,{items:t.items,width:t.width,height:t.height,index:0});case"changIndex":var n=void 0,r=t.changIndexType;return r?(n=(e.index+r)%e.items.length)<0&&(n=e.items.length-1):n=t.index,Object.assign({},e,{index:n});case"scrollChange":return Object.assign({},e,{width:t.width,height:t.height});case"getStartXY":return Object.assign({},e,{startX:t.x,startY:t.y});case"touchChangeIndex":var i=(0,h.getTouchDirection)(e.startX,e.startY,t.x,t.y),a=0,c=void 0;return 2==i?a=-1:-2==i&&(a=1),c=(e.index+a)%e.items.length,c<0&&(c=e.items.length-1),Object.assign({},e,{index:c});default:return e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:""},t=arguments[1];switch(t.type){case"inputValue":return Object.assign({},e,{value:t.value});case"submit":var n=e.value;if(S){var r=localStorage.getItem("searchHistory")||"";""===r?r=n:r+="&"+n,localStorage.setItem("searchHistory",r)}return window.location.href="search.html?searchContent="+encodeURI(n),e;case"showMobileSearch":window.location.href="searchMobile.html";break;default:return e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cards:[]},t=arguments[1];switch(t.type){case"getCardInf":var n=e.cards;return n.push(t.card),Object.assign({},e,{cards:n});default:return e}}function u(e){return{NavListState:e.NavList,CarouselState:e.Carousel,CardsState:e.Cards,searchState:e.search}}function l(e){return{NavListDispatch:{clickBtn:function(){e({type:"clickBtn"})}},CarouseDispatch:{clickLast:function(){clearInterval(O),e({type:"changIndex",changIndexType:-1})},clickNext:function(){clearInterval(O),e({type:"changIndex",changIndexType:1})},clickNav:function(t){var n=t.target,r=parseInt(n.getAttribute("data-index"));clearInterval(O),e({type:"changIndex",index:r})},touchStart:function(t){var n=t.touches[0];e({type:"getStartXY",x:n.pageX,y:n.pageY}),clearInterval(O)},touchEnd:function(t){var n=t.changedTouches[0];return n.pageX,n.pageY,e({type:"touchChangeIndex",x:n.pageX,y:n.pageY}),clearInterval(O),o(),!1},mouseOut:function(e){clearInterval(O),o()},mouseOver:function(e){clearInterval(O)}},topDisPatch:{search:function(){var t=h.config.isMobile;e(t?{type:"showMobileSearch"}:{type:"submit"})},input:function(t){var n=t.target.value;e({type:"inputValue",value:n})}}}}var p=n(26),f=n(58),d=n(128),h=n(11),y=n(67),v=r(y),b=n(5),m=r(b),g=(0,p.combineReducers)({NavList:i,Carousel:a,Cards:s,search:c}),w=(0,p.createStore)(g),O=null,S=!!window.localStorage,x=(0,f.connect)(u,l)(d.Blue_Container);v.default.render(m.default.createElement(f.Provider,{store:w},m.default.createElement(x,null)),document.getElementById("container")),e.exports=w},,,function(e,t,n){"use strict";function r(){clearTimeout(y),y=setTimeout(function(){v=(0,u.getScreenSize)().width,p.default.dispatch(o("scrollChange",{showLen:v>768?10:4,width:v>768?1180:v,height:v>768?582.625:.49375*v}))},300)}function o(e,t){var n=t||{};return n.type=e,n}function i(e,t){switch(e){case"轮播图":a(t);break;default:c(t)}}function a(e){var t=void 0,n=[],r=e.video_list,i=r.length;for(t=0;t<i;t++)n.push({src:"#",img:r[t].img,title:(0,u.getlimitStr)(r[t].short_title,15,"...")});p.default.dispatch(o("getCarouselItems",{items:n,width:v<=768?v/u.config.scale:1180,height:v>768?582.625:.49375*v/u.config.scale}))}function c(e){var t=void 0,n=[],r={},i=e.title,a=e.channel_id,c=e.video_list,s=c.length;for(t=0;t<s;t++)n.push({src:"#",img:c[t].img,title:(0,u.getlimitStr)(c[t].short_title,10)});r.id=a,r.title=i,r.items=n,p.default.dispatch(o("getCardInf",{card:r}))}var s=n(15),u=n(11),l=n(121),p=function(e){return e&&e.__esModule?e:{default:e}}(l),f=window,d=u.config.host,h=u.config.publicData,y=void 0,v=(0,u.getScreenSize)().width;s.ajaxExpanding.init({name:"getNavList",dataType:"json",type:"get",async:!0,handleData:function(e){return JSON.parse(e)}}),s.ajaxExpanding.init({name:"getCarousel",dataType:"json",type:"get",async:!0,handleData:function(e){return JSON.parse(e)}}),function(){function e(e,t){window.location.href="pagination.html?type="+e.id}var t=d+"/openapi/realtime/channel",n=h;n.type="list",n.version=7.5,s.ajaxExpanding.send({url:t,data:n,onSuccess:function(t){var n,r,i=t.data,a=[];for(n=0,r=i.length;n<r;n++)a.push({name:i[n].name,id:i[n].id});p.default.dispatch(o("getNavListItems",{items:a,index:-1,callback:e,showLen:v>768?10:4}))}},"getNavList"),f.addEventListener("resize",r,!1),f.addEventListener("pageshow",r,!1)}(),function(){var e=d+"/openapi/realtime/recommend",t=h;s.ajaxExpanding.send({url:e,data:t,onSuccess:function(e){var t=void 0,n=void 0,r=(e.code,e.data);for(t=0,n=r.length;t<n;t++)i(r[t].title,r[t])}},"getCarousel")}()},,,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),u=function(e){return e&&e.__esModule?e:{default:e}}(s),l=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._clickBtn=n._clickBtn.bind(n),n}return i(t,e),c(t,[{key:"_click",value:function(e,t){var n=this;return function(){n.props.callback(e,t)}}},{key:"_createList",value:function(e,t){var n=void 0,r=void 0,o=[];for(n=0,r=e.length;n<r;n++)o.push(u.default.createElement("a",{onClick:this._click(e[n],n),key:n,className:"fontSizeS"},e[n].name));return o}},{key:"_clickBtn",value:function(){this.props.clickBtn({type:"clickBtn"})}},{key:"render",value:function(){var e=this.props,t=e.items,n=e.index,r=e.callback,o=e.isOn,i=e.showLen,a=t.length;return u.default.createElement("nav",{className:"Blue_NavList"},u.default.createElement("div",{className:"list maxWarp",style:{height:o?40*Math.ceil(a/i)/75+"rem":40/75+"rem"}},this._createList(t,n,r)),u.default.createElement("div",{className:"dropBox"},u.default.createElement("button",{onClick:this._clickBtn,className:o?"on":"off"})))}}]),t}(u.default.Component),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=[],t=[],n=void 0,r=this.props,o=r.items,i=r.width,a=(r.CarouseDispatch,r.index),c=r.clickLast,s=r.clickNext,l=r.clickNav,p=r.touchStart,f=r.touchEnd,d=r.mouseOut,h=r.mouseOver,y=r.height,v=o.length;for(n=0;n<v;n++)e.push(u.default.createElement("li",{key:n,style:{width:i+"px"}},u.default.createElement("img",{src:o[n].img}),u.default.createElement("span",null,o[n].title))),t.push(u.default.createElement("li",{"data-index":n,key:n,onClick:l,className:n==a?"on":"off"}));return u.default.createElement("div",{onMouseOut:d,onMouseOver:h,onTouchStart:p,onTouchEnd:f,style:{height:y+"px"},className:"BluMUI_Carousel "},u.default.createElement("ul",{className:"body",style:{left:-1*a*i+"px",width:v*i+"px"}},e),u.default.createElement("div",{className:"nav"},u.default.createElement("ul",{className:"control"},u.default.createElement("ul",{className:"showNav"},t))),u.default.createElement("button",{onClick:s,className:"next"}),u.default.createElement("button",{onClick:c,className:"last"}))}}]),t}(u.default.Component),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"_createItems",value:function(e){var t=void 0,n=void 0,r=[];for(t=0,n=e.length;t<n;t++)r.push(u.default.createElement("div",{key:t,className:"card"},u.default.createElement("img",{src:e[t].img}),u.default.createElement("span",null,e[t].title)));return r}},{key:"render",value:function(){var e=this.props.card;return u.default.createElement("section",{className:"Blue_CardBox fontSizeS"},u.default.createElement("header",{className:"header"},u.default.createElement("span",{className:"title fontSizeL",style:{backgroundImage:"url(../resource/images/title-"+e.id+".png)"}},e.title),u.default.createElement("span",{className:"more fontSizeL"},"更多")),u.default.createElement("div",{className:"cardWarp"},this._createItems(e.items)))}}]),t}(u.default.Component),d=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.search,n=e.input;return u.default.createElement("div",{className:"Blue_Top"},u.default.createElement("div",{className:"maxWarp"},u.default.createElement("a",{href:"#"},u.default.createElement("span",{className:"logo"})),u.default.createElement("div",{className:"search"},u.default.createElement("input",{placeholder:"请输入你想搜索的内容",onInput:n}),u.default.createElement("button",{onClick:t}))))}}]),t}(u.default.Component),h=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.CarouseDispatch,n=e.NavListDispatch,r=e.topDisPatch,o=e.NavListState,i=e.CarouselState,c=e.CardsState;return u.default.createElement("div",{className:"Blue_Container"},u.default.createElement("header",null,u.default.createElement(d,r),u.default.createElement(l,a({},o,n))),u.default.createElement(p,a({},i,t)),u.default.createElement("div",{id:"body"},c.cards.map(function(e,t){return u.default.createElement(f,{card:e,key:t})})),u.default.createElement("footer",{className:"fontSizeSS"},"蓝山工作室15级前端组制作"))}}]),t}(u.default.Component);e.exports={Blue_Container:h}}],[124]);