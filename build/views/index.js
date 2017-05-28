<<<<<<< HEAD
webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(47);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var appConfig = {
  host: "http://iface.qiyi.com",
  publicData: {
    app_k: "f0f6c3ee5709615310c0f053dc9c65f2",
    app_v: 8.4,
    app_t: 0,
    platform_id: 10,
    dev_os: 6.0,
    dev_ua: "MI 5",
    dev_hw: {
      cpu: 0,
      gpu: "",
      mem: "50.4MB"
    },
    net_sts: 1,
    scrn_sts: 1,
    scrn_res: "1334*750",
    scrn_dpi: "153600",
    qyid: "87390BD2-DACE-497B-9CD4-2FD14354B2A4",
    secure_v: 1,
    secure_p: "GPhone",
    core: 1,
    req_sn: "1493946331320",
    req_times: 1
  },
  dpr: 1,
  isMobile: false,
  width: 0, // 屏幕宽度
  height: 0 // 屏幕高度
},
    doc = document,
    win = window,
    docEl = doc.documentElement,
    metaEl = doc.querySelector('meta[name="viewport"]');

// 获取设备信息
(function getDeviceInf() {
  var appVersion = win.navigator.appVersion,
      isAndroid = appVersion.match(/android (\d\.\d)/i),
      isIPhone = appVersion.match(/iphone os (\d)/i),
      devicePixelRatio = win.devicePixelRatio,
      width = docEl.getBoundingClientRect().width,
      height = docEl.clientHeight,
      dpr = 1,
      mobileSystemV = 0;
  // 是手机
  if (isAndroid || isIPhone) {
    appConfig.isMobile = true;
    mobileSystemV = isAndroid ? isAndroid[1] : isIPhone[1];
  }
  if (isIPhone) {
    if (devicePixelRatio >= 3) {
      dpr = 3;
    } else if (devicePixelRatio >= 2) {
      dpr = 2;
    } else {
      dpr = 1;
    }
  } else {
    dpr = 1;
  }
  docEl.setAttribute('data-dpr', dpr);
  updateRem(width, dpr);
  appConfig.dpr = dpr;
  appConfig.width = width;
  appConfig.height = height;
  appConfig.publicData.scrn_dpi = width * height;
  appConfig.publicData.scrn_res = width + '*' + height;
  appConfig.publicData.dev_os = mobileSystemV || 6.0;
})();

// 动态获取屏幕宽度、高度,同时更新REM
function getScreenSize() {
  var width = docEl.getBoundingClientRect().width,
      height = docEl.clientHeight;
  updateRem(width, appConfig.dpr);
  return {
    width: width,
    height: height
  };
}

// 更新rem

function updateRem(width, dpr) {
  var rem = void 0;
  if (width / dpr > 540) {
    width = 540 * dpr;
  }
  rem = width / 10;
  appConfig.rem = rem;
  docEl.style.fontSize = rem + 'px';
}

// 解析query

function parseURLQuery(str) {
  var queryStr = decodeURI(str).split('?')[1],
      result = {};
  if (queryStr) {
    var queryArry = queryStr.split('&'),
        i = void 0,
        keyValue = void 0,
        len = void 0;
    for (i = 0, len = queryArry.length; i < len; i++) {
      keyValue = queryArry[i].split('=');
      result[keyValue[0]] = keyValue[1];
    }
  }
  return result;
}

// 根据两点坐标判断touch方向

function getTouchDirection(startX, startY, endX, endY) {
  var disY = startY - endY,
      disX = endX - startX,
      touchDis = Math.sqrt(disX * disX + disY * disY),
      tanV = disY / disX,
      dir = Math.atan2(disY, disX) / Math.PI * 180;
  if (touchDis < 3) {
    return 0;
  }
  if (dir <= 135 && dir > 45) {
    return 1; // 向上
  }
  if (dir <= -45 && dir > -135) {
    return -1; //向下
  }
  if (dir <= 45 && dir > -45) {
    return 2; // 向右
  }
  if (dir >= 135 && dir <= 180 || disX <= -135 && dir > -180) {
    return -2; // 向左
  }
  return 0;
}

module.exports = {
  config: appConfig,
  parseURLQuery: parseURLQuery,
  getScreenSize: getScreenSize,
  getTouchDirection: getTouchDirection
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(46);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(71)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(48)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          if (this.subscription) this.subscription.tryUnsubscribe();
          this.initSubscription();
          if (shouldHandleStateChanges) this.subscription.trySubscribe();
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(23);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(12);



function verifyPlainObject(value, displayName, methodName) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ajaxExpanding = function () {
	function isDomObject(domObject, type) {
		if (domObject == null || undefined) {
			return false;
		}
		if ((typeof domObject === 'undefined' ? 'undefined' : _typeof(domObject)) == 'object' && domObject.nodeType === 1) {
			if (!type || type == 'all' || domObject.nodeName.toLowerCase() == type.toLowerCase()) return true;else return false;
		} else {
			return false;
		}
	}
	function suffixParse(fileName) {
		var array = fileName.split('.');
		return array[array.length - 1];
	}
	function isJson(obj) {
		var isjson = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
		return isjson;
	}
	function getXhr() {
		return new XMLHttpRequest();
	}
	function encodeData(dataObj, name, that, dataType) {
		var data = '',
		    i,
		    j,
		    isSuffix = true,
		    isSize = true,
		    suffix,
		    size,
		    len,
		    errorInf = '',
		    checkInf = {},
		    checkInfs = [],
		    key;
		switch (dataType) {
			case 'json':
				if ((typeof dataObj === 'undefined' ? 'undefined' : _typeof(dataObj)) == 'object') {
					for (key in dataObj) {
						if (dataObj[key]) {
							if (data !== '') data += '&' + key + '=' + JSON.stringify(dataObj[key]).replace(/\"/g, "");else data += key + '=' + JSON.stringify(dataObj[key]).replace(/\"/g, "");
						}
					}
				} else if (typeof dataObj == 'string') {
					data = dataObj;
				}
				break;
			case 'form':
				// 通过formData 传输
				if (window.FormData) {
					var formData = new FormData();
					if ((typeof dataObj === 'undefined' ? 'undefined' : _typeof(dataObj)) == 'object') {
						for (key in dataObj) {
							// 文件检测
							if (Object.prototype.toString.call(dataObj[key].value) == '[object FileList]') {
								checkInf = {
									isCheck: true,
									type: dataObj[key].type || key
								};
								len = dataObj[key].value.length;
								if (len == 0) {
									that.ischeck = false;
									checkInf.isCheck = false;
								}
								if (dataObj[key].suffix && that.ischeck) {
									for (i = 0; i < len; i++) {
										suffix = suffixParse(dataObj[key].value[i].name);
										that.ischeck = dataObj[key].suffix.some(function (value) {
											return suffix.toLowerCase() == value.toLowerCase();
										});
										isSuffix = that.ischeck;
									}
								}
								if (dataObj[key].maxSize && isSuffix && that.ischeck) {
									for (i = 0; i < len; i++) {
										size = dataObj[key].value[i].size;
										if (size > dataObj[key].maxSize * 1024 * 1024) {
											that.ischeck = false;
											isSize = false;
										}
									}
								}
								if (len > 0 && !that.ischeck) {
									if (!isSuffix) {
										errorInf = '文件格式不满足:' + dataObj[key].suffix.join(',') + '格式';
									} else if (!isSize) {
										errorInf = '文件大小超过:' + dataObj[key].maxSize + 'mb';
									}
									checkInf.isCheck = false;
								}
								if (that.ischeck) {
									for (i = 0; i < len; i++) {
										formData.append(key, dataObj[key].value[i]);
									}
								}
								checkInf.errorInf = errorInf ? errorInf : dataObj[key].errorInf;
								checkInfs.push(checkInf);
							} else {
								if (dataObj[key].pattern) {
									checkInf = {
										isCheck: true,
										type: dataObj[key].type || key
									};
									var value;
									if (dataObj[key].checkValue != undefined) {
										value = dataObj[key].checkValue;
									} else {
										value = dataObj[key].value;
									}
									if (!dataObj[key].pattern.test(value)) {
										that.ischeck = false;
										checkInf.isCheck = false;
									} else {
										formData.append(key, dataObj[key].value);
									}
									checkInf.errorInf = dataObj[key].errorInf;
									checkInfs.push(checkInf);
								} else {
									formData.append(key, dataObj[key].value);
								}
							}
						}
						if (that.onCheck) {
							that.onCheck(checkInfs);
						}
						data = formData;
					}
				}
				break;
		}
		return data;
	}
	return {
		init: function init(ajaxInf) {
			var that = this[ajaxInf.name] = {};
			that.result = null;
			that.handleData = ajaxInf.handleData || null;
			that.type = ajaxInf.type || 'get';
			that.async = ajaxInf.async || false;
			that.dataType = ajaxInf.dataType || 'json';
			that.timeOut = ajaxInf.timeOut;
			that.xhr = getXhr();
		},
		send: function send(dataInf, name, bindObj) {
			// 发送数据
			var that = this[name],
			    xhr = that.xhr,
			    data;
			that.ischeck = true;
			that.onCheck = dataInf.onCheck;
			data = encodeData(dataInf.data, name, that, that.dataType);
			if (that.ischeck) {
				that.stopFlag = false;
				that.timeoutFlag = false;
				if (dataInf.onStart) {
					dataInf.onStart();
				}
				if (!bindObj) bindObj = that;
				if (dataInf.onProgress) {
					try {
						xhr.onprogress = function (e) {
							if (e.total > 0) dataInf.onProgress.call(bindObj, e.loaded, e.total);
						};
					} catch (e) {}
				}
				if (dataInf.onAbort) {
					try {
						xhr.onabort = function (e) {
							if (that.stopFlag) dataInf.onAbort.call(bindObj, xhr.status);
						};
					} catch (e) {}
				}
				if (dataInf.onError) {
					try {
						xhr.onerror = function (e) {
							dataInf.onError.call(bindObj);
						};
					} catch (e) {}
				}
				xhr.onreadystatechange = function (e) {
					if (xhr.readyState === 4) {
						clearTimeout(timer);
						if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
							that.result = that.handleData == null ? xhr.responseText : that.handleData(xhr.responseText);
							if (dataInf.onSuccess) {
								dataInf.onSuccess.call(bindObj, that.result);
							}
						} else {
							if (!that.stopFlag && !that.timeoutFlag) {
								if (dataInf.onFail) dataInf.onFail.call(bindObj, xhr.status);
							}
						}
					}
					if (xhr.readyState === 0) {
						var timer = setTimeout(function () {
							that.timeoutFlag = true;
							if (that.async && that.timeoutFlag) {
								xhr.abort();
								if (dataInf.onTimeOut) {
									dataInf.onTimeOut.call(bindObj);
								}
							}
						}, that.timeOut);
					}
				};
				if (that.type == 'post') {
					xhr.open(that.type, dataInf.url, that.async); // 创建ajax请求
				} else if (that.type == 'get') {
					if (dataInf.data) {
						xhr.open(that.type, dataInf.url + '?' + data, that.async);
					} else {
						xhr.open(that.type, dataInf.url, that.async);
					}
				}
				if (that.dataType == 'json') xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"); // 设置发送信息的数据类型
				if (that.type == 'get') xhr.send(null);else {
					xhr.send(data);
				}
			}
		},
		stop: function stop(name) {
			if (this[name].xhr && !isDomObject(this[name].xhr)) {
				this[name].stopFlag = true;
				this[name].xhr.abort();
			}
		},
		parse: function parse(inputData, outputData, pattern) {
			var result, j, k, i, len;
			switch ((typeof inputData === 'undefined' ? 'undefined' : _typeof(inputData)).toLowerCase()) {

				case 'string':
					if (pattern.toLowerCase() === 'json') {
						result = JSON.parse(inputData);
					}
					break;
				case 'object':
					if (Object.prototype.toString.call(pattern) === '[object Array]') {
						for (i = 0, len = pattern.length; i < len; i++) {
							if (!pattern[i][2]) {
								if (Object.prototype.toString.call(pattern[i][0]) === '[object Array]') {
									throw new Error('输入的数据不能是数组,除非有处理函数');
								} else {
									outputData[pattern[i][1]] = inputData[pattern[i][0]];
								}
							} else {
								if (Object.prototype.toString.call(pattern[i][0]) === '[object Array]') {
									outputData[pattern[i][1]] = pattern[i][2](inputData[pattern[i][0]]);
								}
								outputData[pattern[i][1]] = pattern[i][2](inputData[pattern[i][0]]);
							}
						}
						result = outputData;
					} else if (typeof pattern == 'function') {
						result = pattern(inputData);
					}
					break;
				default:
					result = inputData;
					break;
			}
			return result;
		}
	};
}();

if (( false ? 'undefined' : _typeof(module)) == 'object') module.exports = {
	ajaxExpanding: ajaxExpanding
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module)))

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(44);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(45);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(17);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(41);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(49);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["b"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
  Provider.displayName = 'Provider';

  return Provider;
}

/* harmony default export */ __webpack_exports__["a"] = (createProvider());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(59);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(21);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function (dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(21);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(23);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (process.env.NODE_ENV !== 'production') __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(60);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(12);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(24);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(27);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(69);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28), __webpack_require__(29)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _redux = __webpack_require__(26);

var _reactRedux = __webpack_require__(61);

var _indexView = __webpack_require__(133);

var _ajax = __webpack_require__(16);

var _reactDom = __webpack_require__(70);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  NavList: NavList_reducers,
  Carousel: Carousel_reducers,
  Cards: Cards_reducers,
  search: search_reducers
});
var store = (0, _redux.createStore)(reducers);
var timerID = null,
    isLocalStorage = !!window.localStorage;

function createTimeid() {
  timerID = setInterval(function () {
    store.dispatch({
      type: 'changIndex',
      changIndexType: 1
    });
  }, 3000);
}
// 导航栏的reducers
function NavList_reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { items: [], index: 0 };
  var action = arguments[1];

  switch (action.type) {
    case 'getNavListItems':
      return Object.assign({}, state, {
        items: action.items,
        index: action.index,
        showLen: action.showLen,
        callback: action.callback,
        isOn: false
      });
    case 'scrollChange':
      return Object.assign({}, state, {
        showLen: action.showLen
      });
      break;
    case 'clickItem':
      return Object.assign({}, state, {
        index: action.index
      });
      break;
    case 'clickBtn':
      return Object.assign({}, state, {
        isOn: !state.isOn
      });
      break;
    default:
      return state;
  }
}
// 轮播图的reducers
function Carousel_reducers(state, action) {
  if (state === undefined) {
    state = {
      index: 0, // 轮播图的初始索引
      width: 1180, // 轮播图显示宽度
      time: 3000, // 轮播动画时间
      setIntervalTime: 2000, // 自动轮播时间(ms)
      items: []
    };
  }
  switch (action.type) {
    case 'getCarouselItems':
      createTimeid();
      return Object.assign({}, state, {
        items: action.items,
        width: action.width,
        height: action.height,
        index: 0
      });
      break;
    case 'changIndex':
      var index = void 0,
          changIndexType = action.changIndexType;
      if (changIndexType) {
        index = (state.index + changIndexType) % state.items.length;
        if (index < 0) index = state.items.length - 1;
      } else {
        index = action.index;
      }
      return Object.assign({}, state, {
        index: index
      });
      break;
    case 'scrollChange':
      return Object.assign({}, state, {
        width: action.width,
        height: action.height
      });
    case 'getStartXY':
      return Object.assign({}, state, {
        startX: action.x,
        startY: action.y
      });
    case 'touchChangeIndex':
      var dir = (0, _ajax.getTouchDirection)(state.startX, state.startY, action.x, action.y),
          changeIndex = 0,
          Index = void 0;
      if (dir == 2) {
        changeIndex = -1;
      } else if (dir == -2) {
        changeIndex = 1;
      }
      Index = (state.index + changeIndex) % state.items.length;
      if (Index < 0) Index = state.items.length - 1;
      return Object.assign({}, state, {
        index: Index
      });
      break;
    default:
      return state;
  }
}
// 搜索框的reducers
function search_reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { value: '' };
  var action = arguments[1];

  switch (action.type) {
    case 'inputValue':
      return Object.assign({}, state, {
        value: action.value
      });
      break;
    case 'submit':
      var searchValue = state.value;
      if (isLocalStorage) {
        var history = localStorage.getItem('searchHistory') || '';
        if (history === '') {
          history = searchValue;
        } else {
          history += '&' + searchValue;
        }
        localStorage.setItem('searchHistory', history);
      }
      window.location.href = 'search.html?searchContent=' + encodeURI(searchValue);
      return state;
      break;
    case 'showMobileSearch':
      window.location.href = 'searchMobile.html';
      break;
    default:
      return state;
  }
}
function Cards_reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { cards: [] };
  var action = arguments[1];

  switch (action.type) {
    case 'getCardInf':
      var cards = state.cards;
      cards.push(action.card);
      return Object.assign({}, state, {
        cards: cards
      });
      break;
    default:
      return state;
  }
}
function mapStateToProps(state) {
  return {
    NavListState: state.NavList,
    CarouselState: state.Carousel,
    CardsState: state.Cards,
    searchState: state.search
  };
}
function mapDispatchToProps(dispatch) {
  return {
    NavListDispatch: { // 导航栏的dispatch
      clickBtn: function clickBtn() {
        dispatch({ type: 'clickBtn' });
      }
    },
    CarouseDispatch: { // 轮播图的dispatch
      clickLast: function clickLast() {
        clearInterval(timerID);
        dispatch({
          type: 'changIndex',
          changIndexType: -1
        });
      },
      clickNext: function clickNext() {
        clearInterval(timerID);
        dispatch({
          type: 'changIndex',
          changIndexType: 1
        });
      },
      clickNav: function clickNav(e) {
        var target = e.target,
            index = parseInt(target.getAttribute("data-index"));
        clearInterval(timerID);
        dispatch({
          type: 'changIndex',
          index: index
        });
      },
      touchStart: function touchStart(e) {
        var touchs = e.touches[0];
        dispatch({
          type: 'getStartXY',
          x: touchs.pageX,
          y: touchs.pageY
        });
        clearInterval(timerID);
      },
      touchEnd: function touchEnd(e) {
        var endX = void 0,
            endY = void 0,
            touchs = e.changedTouches[0];
        endX = touchs.pageX;
        endY = touchs.pageY;
        dispatch({
          type: 'touchChangeIndex',
          x: touchs.pageX,
          y: touchs.pageY
        });
        clearInterval(timerID);
        createTimeid();
        return false;
      },
      mouseOut: function mouseOut(e) {
        clearInterval(timerID);
        createTimeid();
      },
      mouseOver: function mouseOver(e) {
        clearInterval(timerID);
      }
    },
    topDisPatch: {
      search: function search() {
        var isMobile = _ajax.config.isMobile;
        if (isMobile) {
          dispatch({ type: 'showMobileSearch' });
        } else {
          dispatch({ type: 'submit' });
        }
      },
      input: function input(e) {
        var value = e.target.value;
        dispatch({
          type: 'inputValue',
          value: value
        });
      }
    }
  };
}
var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_indexView.Blue_Container);
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(App, null)
), document.getElementById('container'));
module.exports = store;

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ajaxExpandMiniMin = __webpack_require__(30);

var _ajax = __webpack_require__(16);

var _index = __webpack_require__(126);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 全局常量
var win = window,
    host = _ajax.config.host,
    publicData = _ajax.config.publicData;

// 全局变量
/**
 *
 *
 *
**/
var tid = void 0,
    scrollW = (0, _ajax.getScreenSize)().width;
// 初始化ajaxExpanding对象 getNavList-获取导航栏信息 getCarousel-获取轮播图信息
_ajaxExpandMiniMin.ajaxExpanding.init({
  name: 'getNavList',
  dataType: 'json',
  type: 'get',
  async: true,
  handleData: function handleData(result) {
    return JSON.parse(result);
  }
});
_ajaxExpandMiniMin.ajaxExpanding.init({
  name: 'getCarousel',
  dataType: 'json',
  type: 'get',
  async: true,
  handleData: function handleData(result) {
    return JSON.parse(result);
  }
});
// 公共函数

function scrollChange() {
  clearTimeout(tid);
  tid = setTimeout(function () {
    scrollW = (0, _ajax.getScreenSize)().width;
    _index2.default.dispatch(createAction('scrollChange', {
      showLen: scrollW > 768 ? 10 : 4,
      width: scrollW > 768 ? 1180 : scrollW,
      height: scrollW > 768 ? 316 / 640 * 1180 : 316 / 640 * scrollW
    }));
  }, 300);
}

function createAction(type, data) {
  var action = data || {};
  action.type = type;
  return action;
}

// 导航栏组件逻辑控制
(function () {

  var getChannelList = host + '/openapi/realtime/channel',
      data = publicData;
  data.type = 'list';
  data.version = 7.5;
  // ajax获取导航栏数据
  _ajaxExpandMiniMin.ajaxExpanding.send({
    url: getChannelList,
    data: data,
    onSuccess: function onSuccess(result) {
      var i,
          len,
          data = result.data,
          items = [];
      for (i = 0, len = data.length; i < len; i++) {
        items.push({
          name: data[i].name,
          id: data[i].id
        });
      }
      _index2.default.dispatch(createAction('getNavListItems', {
        items: items,
        index: -1,
        callback: clickNav,
        showLen: scrollW > 768 ? 10 : 4
      }));
    }
  }, 'getNavList');
  // 监听页面变化，自适应改变组件参数
  win.addEventListener('resize', scrollChange, false);
  win.addEventListener('pageshow', scrollChange, false);
  function clickNav(item, index) {
    window.location.href = 'pagination.html?type=' + item.id;
  }
})();

// 获取推荐信息

(function () {
  var getCarouselURL = host + '/openapi/realtime/recommend',
      data = publicData;
  _ajaxExpandMiniMin.ajaxExpanding.send({
    url: getCarouselURL,
    data: data,
    onSuccess: function onSuccess(result) {
      var i = void 0,
          len = void 0,
          code = result.code,
          data = result.data;
      for (i = 0, len = data.length; i < len; i++) {
        handleRecommend(data[i].title, data[i]);
      }
    }
  }, 'getCarousel');
})();

// 将推荐信息分发给个组件处理

function handleRecommend(title, data) {
  switch (title) {
    case '轮播图':
      setCarousel(data);
      break;
    default:
      setCardInf(data);
      break;
  }
}

// 设置轮播图信息

function setCarousel(data) {
  var i = void 0,
      items = [],
      videos = data.video_list,
      len = videos.length;
  for (i = 0; i < len; i++) {
    items.push({
      src: '#',
      img: videos[i].img,
      title: videos[i].short_title
    });
  }
  _index2.default.dispatch(createAction('getCarouselItems', {
    items: items,
    width: scrollW <= 768 ? scrollW : 1180,
    height: scrollW > 768 ? 316 / 640 * 1180 : 316 / 640 * scrollW
  }));
}

// 设置各个卡片的信息

function setCardInf(data) {
  var i = void 0,
      items = [],
      card = {},
      title = data.title,
      id = data.channel_id,
      videos = data.video_list,
      len = videos.length;
  for (i = 0; i < len; i++) {
    items.push({
      src: '#',
      img: videos[i].img,
      title: videos[i].short_title
    });
  }
  card.id = id;
  card.title = title;
  card.items = items;
  _index2.default.dispatch(createAction('getCardInf', {
    card: card
  }));
}

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 导航栏
var Blue_NavList = function (_React$Component) {
  _inherits(Blue_NavList, _React$Component);

  function Blue_NavList(props) {
    _classCallCheck(this, Blue_NavList);

    var _this = _possibleConstructorReturn(this, (Blue_NavList.__proto__ || Object.getPrototypeOf(Blue_NavList)).call(this, props));

    _this._clickBtn = _this._clickBtn.bind(_this);
    return _this;
  }

  _createClass(Blue_NavList, [{
    key: '_click',
    value: function _click(item, index) {
      var that = this;
      return function () {
        that.props.callback(item, index);
      };
    }
  }, {
    key: '_createList',
    value: function _createList(items, index) {
      var i = void 0,
          len = void 0,
          result = [];
      for (i = 0, len = items.length; i < len; i++) {
        result.push(_react2.default.createElement(
          'a',
          { onClick: this._click(items[i], i),
            key: i, className: index === i ? 'on' : 'off'
          },
          items[i].name
        ));
      }
      return result;
    }
  }, {
    key: '_clickBtn',
    value: function _clickBtn() {
      this.props.clickBtn({
        type: 'clickBtn'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          index = _props.index,
          callback = _props.callback,
          isOn = _props.isOn,
          showLen = _props.showLen;

      var len = items.length;
      return _react2.default.createElement(
        'nav',
        { className: 'Blue_NavList' },
        _react2.default.createElement(
          'div',
          { className: 'list maxWarp', style: { height: isOn ? Math.ceil(len / showLen) * 20 + 'px' : '40px' } },
          this._createList(items, index, callback)
        ),
        _react2.default.createElement(
          'div',
          { className: 'dropBox' },
          _react2.default.createElement('button', { onClick: this._clickBtn,
            className: isOn ? 'on' : 'off'
          })
        )
      );
    }
  }]);

  return Blue_NavList;
}(_react2.default.Component);
// 轮播图

var Blue_Carousel = function (_React$Component2) {
  _inherits(Blue_Carousel, _React$Component2);

  function Blue_Carousel() {
    _classCallCheck(this, Blue_Carousel);

    return _possibleConstructorReturn(this, (Blue_Carousel.__proto__ || Object.getPrototypeOf(Blue_Carousel)).apply(this, arguments));
  }

  _createClass(Blue_Carousel, [{
    key: 'render',
    value: function render() {
      var bodyShow = [],
          navShow = [],
          i = void 0,
          _props2 = this.props,
          items = _props2.items,
          width = _props2.width,
          CarouseDispatch = _props2.CarouseDispatch,
          index = _props2.index,
          clickLast = _props2.clickLast,
          clickNext = _props2.clickNext,
          clickNav = _props2.clickNav,
          touchStart = _props2.touchStart,
          touchEnd = _props2.touchEnd,
          mouseOut = _props2.mouseOut,
          mouseOver = _props2.mouseOver,
          height = _props2.height,
          len = items.length;

      for (i = 0; i < len; i++) {
        bodyShow.push(_react2.default.createElement(
          'li',
          { key: i, style: { width: width + 'px' } },
          _react2.default.createElement('img', { src: items[i].img }),
          _react2.default.createElement(
            'span',
            null,
            items[i].title
          )
        ));
        navShow.push(_react2.default.createElement('li', { 'data-index': i,
          key: i,
          onClick: clickNav,
          className: i == index ? "on" : "off" }));
      }
      return _react2.default.createElement(
        'div',
        { onMouseOut: mouseOut,
          onMouseOver: mouseOver,
          onTouchStart: touchStart,
          onTouchEnd: touchEnd,
          style: { height: height + 'px' },
          className: "BluMUI_Carousel " },
        _react2.default.createElement(
          'ul',
          { className: 'body',
            style: {
              left: -1 * index * width + "px",
              width: len * width + 'px' } },
          bodyShow
        ),
        _react2.default.createElement(
          'div',
          { className: 'nav' },
          _react2.default.createElement(
            'ul',
            { className: 'control' },
            width > 768 ? _react2.default.createElement('button', { onClick: clickLast,
              className: 'last' }) : void 0,
            _react2.default.createElement(
              'ul',
              { className: 'showNav' },
              navShow
            ),
            width > 768 ? _react2.default.createElement('button', { onClick: clickNext,
              className: 'next' }) : void 0
          )
        )
      );
    }
  }]);

  return Blue_Carousel;
}(_react2.default.Component);

// 内容卡片


var Blue_CardBox = function (_React$Component3) {
  _inherits(Blue_CardBox, _React$Component3);

  function Blue_CardBox() {
    _classCallCheck(this, Blue_CardBox);

    return _possibleConstructorReturn(this, (Blue_CardBox.__proto__ || Object.getPrototypeOf(Blue_CardBox)).apply(this, arguments));
  }

  _createClass(Blue_CardBox, [{
    key: '_createItems',
    value: function _createItems(items) {
      var i = void 0,
          len = void 0,
          result = [];
      for (i = 0, len = items.length; i < len; i++) {
        result.push(_react2.default.createElement(
          'div',
          { key: i, className: 'card' },
          _react2.default.createElement('img', { src: items[i].img }),
          _react2.default.createElement(
            'span',
            null,
            items[i].title
          )
        ));
      }
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var card = this.props.card;

      return _react2.default.createElement(
        'section',
        { className: 'Blue_CardBox' },
        _react2.default.createElement(
          'header',
          { className: 'header' },
          _react2.default.createElement(
            'span',
            { className: 'title', style: { backgroundImage: 'url(../resource/images/title-' + card.id + '.png)' } },
            card.title
          ),
          _react2.default.createElement(
            'span',
            { className: 'more' },
            '\u66F4\u591A'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cardWarp' },
          this._createItems(card.items)
        )
      );
    }
  }]);

  return Blue_CardBox;
}(_react2.default.Component);

// 顶部


var Blue_Top = function (_React$Component4) {
  _inherits(Blue_Top, _React$Component4);

  function Blue_Top(props) {
    _classCallCheck(this, Blue_Top);

    return _possibleConstructorReturn(this, (Blue_Top.__proto__ || Object.getPrototypeOf(Blue_Top)).call(this, props));
  }

  _createClass(Blue_Top, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          search = _props3.search,
          input = _props3.input;

      return _react2.default.createElement(
        'div',
        { className: 'Blue_Top' },
        _react2.default.createElement(
          'div',
          { className: 'maxWarp' },
          _react2.default.createElement(
            'div',
            { className: 'search' },
            _react2.default.createElement('input', { placeholder: '\u8BF7\u8F93\u5165\u4F60\u60F3\u641C\u7D22\u7684\u5185\u5BB9', onInput: input }),
            _react2.default.createElement('button', { onClick: search })
          )
        )
      );
    }
  }]);

  return Blue_Top;
}(_react2.default.Component);

var Blue_Container = function (_React$Component5) {
  _inherits(Blue_Container, _React$Component5);

  function Blue_Container(props) {
    _classCallCheck(this, Blue_Container);

    return _possibleConstructorReturn(this, (Blue_Container.__proto__ || Object.getPrototypeOf(Blue_Container)).call(this, props));
  }

  _createClass(Blue_Container, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          CarouseDispatch = _props4.CarouseDispatch,
          NavListDispatch = _props4.NavListDispatch,
          topDisPatch = _props4.topDisPatch,
          NavListState = _props4.NavListState,
          CarouselState = _props4.CarouselState,
          CardsState = _props4.CardsState;

      return _react2.default.createElement(
        'div',
        { className: 'Blue_Container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(Blue_Top, topDisPatch),
          _react2.default.createElement(Blue_NavList, _extends({}, NavListState, NavListDispatch))
        ),
        _react2.default.createElement(Blue_Carousel, _extends({}, CarouselState, CarouseDispatch)),
        _react2.default.createElement(
          'div',
          { id: 'body' },
          CardsState.cards.map(function (card, index) {
            return _react2.default.createElement(Blue_CardBox, { card: card, key: index });
          })
        ),
        _react2.default.createElement(
          'footer',
          null,
          '\u84DD\u5C71\u5DE5\u4F5C\u5BA415\u7EA7\u524D\u7AEF\u7EC4\u5236\u4F5C'
        )
      );
    }
  }]);

  return Blue_Container;
}(_react2.default.Component);

module.exports = {
  Blue_Container: Blue_Container
};

/***/ })
],[129]);
=======
webpackJsonp([3],[,,,,,,,,function(t,e,n){"use strict";function r(t){if(!n.i(a.a)(t)||n.i(o.a)(t)!=c)return!1;var e=n.i(i.a)(t);if(null===e)return!0;var r=p.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==f}var o=n(38),i=n(40),a=n(45),c="[object Object]",s=Function.prototype,u=Object.prototype,l=s.toString,p=u.hasOwnProperty,f=l.call(Object);e.a=r},,function(t,e,n){"use strict";function r(t){"undefined"!=typeof console&&console.error;try{throw new Error(t)}catch(t){}}e.a=r},,,,function(t,e,n){"use strict";function r(){var t=l.getBoundingClientRect().width,e=l.clientHeight;return o(t,c.dpr),{width:t,height:e}}function o(t,e){var n=void 0;t/e>540&&(t=540*e),n=t/10,c.rem=n,l.style.fontSize=n+"px"}function i(t){var e=decodeURI(t).split("?")[1],n={};if(e){var r=e.split("&"),o=void 0,i=void 0,a=void 0;for(o=0,a=r.length;o<a;o++)i=r[o].split("="),n[i[0]]=i[1]}return n}function a(t,e,n,r){var o=e-r,i=n-t,a=Math.sqrt(i*i+o*o),c=Math.atan2(o,i)/Math.PI*180;return a<3?0:c<=135&&c>45?1:c<=-45&&c>-135?-1:c<=45&&c>-45?2:c>=135&&c<=180||i<=-135&&c>-180?-2:0}var c={host:"http://iface.qiyi.com",publicData:{app_k:"f0f6c3ee5709615310c0f053dc9c65f2",app_v:8.4,app_t:0,platform_id:10,dev_os:6,dev_ua:"MI 5",dev_hw:{cpu:0,gpu:"",mem:"50.4MB"},net_sts:1,scrn_sts:1,scrn_res:"1334*750",scrn_dpi:"153600",qyid:"87390BD2-DACE-497B-9CD4-2FD14354B2A4",secure_v:1,secure_p:"GPhone",core:1,req_sn:"1493946331320",req_times:1},dpr:1,isMobile:!1,width:0,height:0},s=document,u=window,l=s.documentElement;s.querySelector('meta[name="viewport"]');!function(){var t=u.navigator.appVersion,e=t.match(/android (\d\.\d)/i),n=t.match(/iphone os (\d)/i),r=u.devicePixelRatio,i=l.getBoundingClientRect().width,a=l.clientHeight,s=1,p=0;(e||n)&&(c.isMobile=!0,p=e?e[1]:n[1]),s=n?r>=3?3:r>=2?2:1:1,l.setAttribute("data-dpr",s),o(i,s),c.dpr=s,c.width=i,c.height=a,c.publicData.scrn_dpi=i*a,c.publicData.scrn_res=i+"*"+a,c.publicData.dev_os=p||6}(),t.exports={config:c,parseURLQuery:i,getScreenSize:r,getTouchDirection:a}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var r=n(44),o=r.a.Symbol;e.a=o},function(t,e,n){t.exports=n(46)()},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function c(){}function s(t,e){var n={run:function(r){try{var o=t(e.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(t){n.shouldComponentUpdate=!0,n.error=t}}};return n}function u(t){var e,u,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=l.getDisplayName,w=void 0===f?function(t){return"ConnectAdvanced("+t+")"}:f,O=l.methodName,S=void 0===O?"connectAdvanced":O,x=l.renderCountProp,j=void 0===x?void 0:x,C=l.shouldHandleStateChanges,E=void 0===C||C,P=l.storeKey,_=void 0===P?"store":P,k=l.withRef,N=void 0!==k&&k,T=a(l,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),I=_+"Subscription",M=m++,D=(e={},e[_]=v.a,e[I]=v.b,e),R=(u={},u[I]=v.b,u);return function(e){d()("function"==typeof e,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(e));var a=e.displayName||e.name||"Component",u=w(a),l=b({},T,{getDisplayName:w,methodName:S,renderCountProp:j,shouldHandleStateChanges:E,storeKey:_,withRef:N,displayName:u,wrappedComponentName:a,WrappedComponent:e}),f=function(a){function p(t,e){r(this,p);var n=o(this,a.call(this,t,e));return n.version=M,n.state={},n.renderCount=0,n.store=t[_]||e[_],n.propsMode=Boolean(t[_]),n.setWrappedInstance=n.setWrappedInstance.bind(n),d()(n.store,'Could not find "'+_+'" in either the context or props of "'+u+'". Either wrap the root component in a <Provider>, or explicitly pass "'+_+'" as a prop to "'+u+'".'),n.initSelector(),n.initSubscription(),n}return i(p,a),p.prototype.getChildContext=function(){var t,e=this.propsMode?null:this.subscription;return t={},t[I]=e||this.context[I],t},p.prototype.componentDidMount=function(){E&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},p.prototype.componentWillReceiveProps=function(t){this.selector.run(t)},p.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},p.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=c,this.store=null,this.selector.run=c,this.selector.shouldComponentUpdate=!1},p.prototype.getWrappedInstance=function(){return d()(N,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+S+"() call."),this.wrappedInstance},p.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},p.prototype.initSelector=function(){var e=t(this.store.dispatch,l);this.selector=s(e,this.store),this.selector.run(this.props)},p.prototype.initSubscription=function(){if(E){var t=(this.propsMode?this.props:this.context)[I];this.subscription=new y.a(this.store,t,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},p.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(g)):this.notifyNestedSubs()},p.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},p.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},p.prototype.addExtraProps=function(t){if(!(N||j||this.propsMode&&this.subscription))return t;var e=b({},t);return N&&(e.ref=this.setWrappedInstance),j&&(e[j]=this.renderCount++),this.propsMode&&this.subscription&&(e[I]=this.subscription),e},p.prototype.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return n.i(h.createElement)(e,this.addExtraProps(t.props))},p}(h.Component);return f.WrappedComponent=e,f.displayName=u,f.childContextTypes=R,f.contextTypes=D,f.propTypes=D,p()(f,e)}}e.a=u;var l=n(36),p=n.n(l),f=n(37),d=n.n(f),h=n(7),y=(n.n(h),n(59)),v=n(21),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},m=0,g={}},function(t,e,n){"use strict";function r(t){return function(e,n){function r(){return o}var o=t(e,n);return r.dependsOnOwnProps=!1,r}}function o(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function i(t,e){return function(e,n){var r=(n.displayName,function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)});return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=o(t);var i=r(e,n);return"function"==typeof i&&(r.mapToProps=i,r.dependsOnOwnProps=o(i),i=r(e,n)),i},r}}e.b=r,e.a=i;n(22)},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return a});var r=n(18),o=n.n(r),i=o.a.shape({trySubscribe:o.a.func.isRequired,tryUnsubscribe:o.a.func.isRequired,notifyNestedSubs:o.a.func.isRequired,isSubscribed:o.a.func.isRequired}),a=o.a.shape({subscribe:o.a.func.isRequired,dispatch:o.a.func.isRequired,getState:o.a.func.isRequired})},function(t,e,n){"use strict";n(8),n(10)},function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.a=r},function(t,e,n){"use strict";function r(t,e,i){function s(){m===b&&(m=b.slice())}function u(){return v}function l(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return s(),m.push(t),function(){if(e){e=!1,s();var n=m.indexOf(t);m.splice(n,1)}}}function p(t){if(!n.i(o.a)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(g)throw new Error("Reducers may not dispatch actions.");try{g=!0,v=y(v,t)}finally{g=!1}for(var e=b=m,r=0;r<e.length;r++)e[r]();return t}function f(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");y=t,p({type:c.INIT})}function d(){var t,e=l;return t={subscribe:function(t){function n(){t.next&&t.next(u())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:e(n)}}},t[a.a]=function(){return this},t}var h;if("function"==typeof e&&void 0===i&&(i=e,e=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(r)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var y=t,v=e,b=[],m=b,g=!1;return p({type:c.INIT}),h={dispatch:p,subscribe:l,getState:u,replaceReducer:f},h[a.a]=d,h}n.d(e,"b",function(){return c}),e.a=r;var o=n(8),i=n(64),a=n.n(i),c={INIT:"@@redux/INIT"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=n(63),i=n(62),a=n(61),c=n(23);n(26);n.d(e,"createStore",function(){return r.a}),n.d(e,"combineReducers",function(){return o.a}),n.d(e,"bindActionCreators",function(){return i.a}),n.d(e,"applyMiddleware",function(){return a.a}),n.d(e,"compose",function(){return c.a})},function(t,e,n){"use strict"},function(t,e,n){"use strict";(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,n){return null!=t&&("object"==(void 0===t?"undefined":e(t))&&1===t.nodeType&&(!n||"all"==n||t.nodeName.toLowerCase()==n.toLowerCase()))}function n(t){var e=t.split(".");return e[e.length-1]}function r(){return new XMLHttpRequest}function o(t,r,o,i){var a,c,s,u,l="",p=!0,f=!0,d="",h={},y=[];switch(i){case"json":if("object"==(void 0===t?"undefined":e(t)))for(u in t)t[u]&&(l+=""!==l?"&"+u+"="+JSON.stringify(t[u]).replace(/\"/g,""):u+"="+JSON.stringify(t[u]).replace(/\"/g,""));else"string"==typeof t&&(l=t);break;case"form":if(window.FormData){var v=new FormData;if("object"==(void 0===t?"undefined":e(t))){for(u in t)if("[object FileList]"==Object.prototype.toString.call(t[u].value)){if(h={isCheck:!0,type:t[u].type||u},s=t[u].value.length,0==s&&(o.ischeck=!1,h.isCheck=!1),t[u].suffix&&o.ischeck)for(a=0;a<s;a++)c=n(t[u].value[a].name),o.ischeck=t[u].suffix.some(function(t){return c.toLowerCase()==t.toLowerCase()}),p=o.ischeck;if(t[u].maxSize&&p&&o.ischeck)for(a=0;a<s;a++)t[u].value[a].size>1024*t[u].maxSize*1024&&(o.ischeck=!1,f=!1);if(s>0&&!o.ischeck&&(p?f||(d="文件大小超过:"+t[u].maxSize+"mb"):d="文件格式不满足:"+t[u].suffix.join(",")+"格式",h.isCheck=!1),o.ischeck)for(a=0;a<s;a++)v.append(u,t[u].value[a]);h.errorInf=d||t[u].errorInf,y.push(h)}else if(t[u].pattern){h={isCheck:!0,type:t[u].type||u};var b;b=void 0!=t[u].checkValue?t[u].checkValue:t[u].value,t[u].pattern.test(b)?v.append(u,t[u].value):(o.ischeck=!1,h.isCheck=!1),h.errorInf=t[u].errorInf,y.push(h)}else v.append(u,t[u].value);o.onCheck&&o.onCheck(y),l=v}}}return l}return{init:function(t){var e=this[t.name]={};e.result=null,e.handleData=t.handleData||null,e.type=t.type||"get",e.async=t.async||!1,e.dataType=t.dataType||"json",e.timeOut=t.timeOut,e.xhr=r()},send:function(t,e,n){var r,i=this[e],a=i.xhr;if(i.ischeck=!0,i.onCheck=t.onCheck,r=o(t.data,e,i,i.dataType),i.ischeck){if(i.stopFlag=!1,i.timeoutFlag=!1,t.onStart&&t.onStart(),n||(n=i),t.onProgress)try{a.onprogress=function(e){e.total>0&&t.onProgress.call(n,e.loaded,e.total)}}catch(t){}if(t.onAbort)try{a.onabort=function(e){i.stopFlag&&t.onAbort.call(n,a.status)}}catch(t){}if(t.onError)try{a.onerror=function(e){t.onError.call(n)}}catch(t){}a.onreadystatechange=function(e){if(4===a.readyState&&(clearTimeout(r),a.status>=200&&a.status<300||304==a.status?(i.result=null==i.handleData?a.responseText:i.handleData(a.responseText),t.onSuccess&&t.onSuccess.call(n,i.result)):i.stopFlag||i.timeoutFlag||t.onFail&&t.onFail.call(n,a.status)),0===a.readyState)var r=setTimeout(function(){i.timeoutFlag=!0,i.async&&i.timeoutFlag&&(a.abort(),t.onTimeOut&&t.onTimeOut.call(n))},i.timeOut)},"post"==i.type?a.open(i.type,t.url,i.async):"get"==i.type&&(t.data?a.open(i.type,t.url+"?"+r,i.async):a.open(i.type,t.url,i.async)),"json"==i.dataType&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),"get"==i.type?a.send(null):a.send(r)}},stop:function(e){this[e].xhr&&!t(this[e].xhr)&&(this[e].stopFlag=!0,this[e].xhr.abort())},parse:function(t,n,r){var o,i,a;switch((void 0===t?"undefined":e(t)).toLowerCase()){case"string":"json"===r.toLowerCase()&&(o=JSON.parse(t));break;case"object":if("[object Array]"===Object.prototype.toString.call(r)){for(i=0,a=r.length;i<a;i++)if(r[i][2])"[object Array]"===Object.prototype.toString.call(r[i][0])&&(n[r[i][1]]=r[i][2](t[r[i][0]])),n[r[i][1]]=r[i][2](t[r[i][0]]);else{if("[object Array]"===Object.prototype.toString.call(r[i][0]))throw new Error("输入的数据不能是数组,除非有处理函数");n[r[i][1]]=t[r[i][0]]}o=n}else"function"==typeof r&&(o=r(t));break;default:o=t}return o}}}();"object"==e(t)&&(t.exports={ajaxExpanding:n})}).call(e,n(16)(t))},,,,,,,,,function(t,e,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},i="function"==typeof Object.getOwnPropertySymbols;t.exports=function(t,e,n){if("string"!=typeof e){var a=Object.getOwnPropertyNames(e);i&&(a=a.concat(Object.getOwnPropertySymbols(e)));for(var c=0;c<a.length;++c)if(!(r[a[c]]||o[a[c]]||n&&n[a[c]]))try{t[a[c]]=e[a[c]]}catch(t){}}return t}},function(t,e,n){"use strict";var r=function(t,e,n,r,o,i,a,c){if(!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],l=0;s=new Error(e.replace(/%s/g,function(){return u[l++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}};t.exports=r},function(t,e,n){"use strict";function r(t){return null==t?void 0===t?s:c:u&&u in Object(t)?n.i(i.a)(t):n.i(a.a)(t)}var o=n(17),i=n(41),a=n(42),c="[object Null]",s="[object Undefined]",u=o.a?o.a.toStringTag:void 0;e.a=r},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(e,n(15))},function(t,e,n){"use strict";var r=n(43),o=n.i(r.a)(Object.getPrototypeOf,Object);e.a=o},function(t,e,n){"use strict";function r(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(e?t[s]=n:delete t[s]),o}var o=n(17),i=Object.prototype,a=i.hasOwnProperty,c=i.toString,s=o.a?o.a.toStringTag:void 0;e.a=r},function(t,e,n){"use strict";function r(t){return i.call(t)}var o=Object.prototype,i=o.toString;e.a=r},function(t,e,n){"use strict";function r(t,e){return function(n){return t(e(n))}}e.a=r},function(t,e,n){"use strict";var r=n(39),o="object"==typeof self&&self&&self.Object===Object&&self,i=r.a||o||Function("return this")();e.a=i},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t}e.a=r},function(t,e,n){"use strict";var r=n(6),o=n(0),i=n(68);t.exports=function(){function t(t,e,n,r,a,c){c!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e};return n.checkPropTypes=r,n.PropTypes=n,n}},,,,,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1],a=n||e+"Subscription",s=function(t){function n(i,a){r(this,n);var c=o(this,t.call(this,i,a));return c[e]=i.store,c}return i(n,t),n.prototype.getChildContext=function(){var t;return t={},t[e]=this[e],t[a]=null,t},n.prototype.render=function(){return c.Children.only(this.props.children)},n}(c.Component);return s.propTypes={store:l.a.isRequired,children:u.a.element.isRequired},s.childContextTypes=(t={},t[e]=l.a.isRequired,t[a]=l.b,t),s.displayName="Provider",s}e.b=a;var c=n(7),s=(n.n(c),n(18)),u=n.n(s),l=n(21);n(10);e.a=a()},function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function i(t,e){return t===e}var a=n(19),c=n(60),s=n(53),u=n(54),l=n(55),p=n(56),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.connectHOC,n=void 0===e?a.a:e,d=t.mapStateToPropsFactories,h=void 0===d?u.a:d,y=t.mapDispatchToPropsFactories,v=void 0===y?s.a:y,b=t.mergePropsFactories,m=void 0===b?l.a:b,g=t.selectorFactory,w=void 0===g?p.a:g;return function(t,e,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=s.pure,l=void 0===u||u,p=s.areStatesEqual,d=void 0===p?i:p,y=s.areOwnPropsEqual,b=void 0===y?c.a:y,g=s.areStatePropsEqual,O=void 0===g?c.a:g,S=s.areMergedPropsEqual,x=void 0===S?c.a:S,j=r(s,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),C=o(t,h,"mapStateToProps"),E=o(e,v,"mapDispatchToProps"),P=o(a,m,"mergeProps");return n(w,f({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:C,initMapDispatchToProps:E,initMergeProps:P,pure:l,areStatesEqual:d,areOwnPropsEqual:b,areStatePropsEqual:O,areMergedPropsEqual:x},j))}}()},function(t,e,n){"use strict";function r(t){return"function"==typeof t?n.i(c.a)(t,"mapDispatchToProps"):void 0}function o(t){return t?void 0:n.i(c.b)(function(t){return{dispatch:t}})}function i(t){return t&&"object"==typeof t?n.i(c.b)(function(e){return n.i(a.bindActionCreators)(t,e)}):void 0}var a=n(25),c=n(20);e.a=[r,o,i]},function(t,e,n){"use strict";function r(t){return"function"==typeof t?n.i(i.a)(t,"mapStateToProps"):void 0}function o(t){return t?void 0:n.i(i.b)(function(){return{}})}var i=n(20);e.a=[r,o]},function(t,e,n){"use strict";function r(t,e,n){return c({},n,t,e)}function o(t){return function(e,n){var r=(n.displayName,n.pure),o=n.areMergedPropsEqual,i=!1,a=void 0;return function(e,n,c){var s=t(e,n,c);return i?r&&o(s,a)||(a=s):(i=!0,a=s),a}}}function i(t){return"function"==typeof t?o(t):void 0}function a(t){return t?void 0:function(){return r}}var c=(n(22),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t});e.a=[i,a]},function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function i(t,e,n,r,o){function i(o,i){return h=o,y=i,v=t(h,y),b=e(r,y),m=n(v,b,y),d=!0,m}function a(){return v=t(h,y),e.dependsOnOwnProps&&(b=e(r,y)),m=n(v,b,y)}function c(){return t.dependsOnOwnProps&&(v=t(h,y)),e.dependsOnOwnProps&&(b=e(r,y)),m=n(v,b,y)}function s(){var e=t(h,y),r=!f(e,v);return v=e,r&&(m=n(v,b,y)),m}function u(t,e){var n=!p(e,y),r=!l(t,h);return h=t,y=e,n&&r?a():n?c():r?s():m}var l=o.areStatesEqual,p=o.areOwnPropsEqual,f=o.areStatePropsEqual,d=!1,h=void 0,y=void 0,v=void 0,b=void 0,m=void 0;return function(t,e){return d?u(t,e):i(t,e)}}function a(t,e){var n=e.initMapStateToProps,a=e.initMapDispatchToProps,c=e.initMergeProps,s=r(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),u=n(t,s),l=a(t,s),p=c(t,s);return(s.pure?i:o)(u,l,p,t,s)}e.a=a;n(57)},function(t,e,n){"use strict";n(10)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(51),o=n(19),i=n(52);n.d(e,"Provider",function(){return r.a}),n.d(e,"createProvider",function(){return r.b}),n.d(e,"connectAdvanced",function(){return o.a}),n.d(e,"connect",function(){return i.a})},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){var t=[],e=[];return{clear:function(){e=i,t=i},notify:function(){for(var n=t=e,r=0;r<n.length;r++)n[r]()},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==i&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}}n.d(e,"a",function(){return c});var i=null,a={notify:function(){}},c=function(){function t(e,n,o){r(this,t),this.store=e,this.parentSub=n,this.onStateChange=o,this.unsubscribe=null,this.listeners=a}return t.prototype.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},t.prototype.notifyNestedSubs=function(){this.listeners.notify()},t.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},t.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=o())},t.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=a)},t}()},function(t,e,n){"use strict";function r(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!==t&&e!==e}function o(t,e){if(r(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(var a=0;a<n.length;a++)if(!i.call(e,n[a])||!r(t[n[a]],e[n[a]]))return!1;return!0}e.a=o;var i=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,a){var c=t(n,r,a),s=c.dispatch,u=[],l={getState:c.getState,dispatch:function(t){return s(t)}};return u=e.map(function(t){return t(l)}),s=o.a.apply(void 0,u)(c.dispatch),i({},c,{dispatch:s})}}}e.a=r;var o=n(23),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";function r(t,e){return function(){return e(t.apply(void 0,arguments))}}function o(t,e){if("function"==typeof t)return r(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),o={},i=0;i<n.length;i++){var a=n[i],c=t[a];"function"==typeof c&&(o[a]=r(c,e))}return o}e.a=o},function(t,e,n){"use strict";function r(t,e){var n=e&&e.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:a.b.INIT}))throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+a.b.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function i(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var a=e[i];"function"==typeof t[a]&&(n[a]=t[a])}var c,s=Object.keys(n);try{o(n)}catch(t){c=t}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(c)throw c;for(var o=!1,i={},a=0;a<s.length;a++){var u=s[a],l=n[u],p=t[u],f=l(p,e);if(void 0===f){var d=r(u,e);throw new Error(d)}i[u]=f,o=o||f!==p}return o?i:t}}e.a=i;var a=n(24);n(8),n(26)},function(t,e,n){t.exports=n(65)},function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(66),a=function(t){return t&&t.__esModule?t:{default:t}}(i);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var c=(0,a.default)(o);e.default=c}).call(e,n(15),n(16)(t))},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){O=setInterval(function(){w.dispatch({type:"changIndex",changIndexType:1})},3e3)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[],index:0},e=arguments[1];switch(e.type){case"getNavListItems":return Object.assign({},t,{items:e.items,index:e.index,showLen:e.showLen,callback:e.callback,isOn:!1});case"scrollChange":return Object.assign({},t,{showLen:e.showLen});case"clickItem":return Object.assign({},t,{index:e.index});case"clickBtn":return Object.assign({},t,{isOn:!t.isOn});default:return t}}function a(t,e){switch(void 0===t&&(t={index:0,width:1180,time:3e3,setIntervalTime:2e3,items:[]}),e.type){case"getCarouselItems":return o(),Object.assign({},t,{items:e.items,width:e.width,height:e.height,index:0});case"changIndex":var n=void 0,r=e.changIndexType;return r?(n=(t.index+r)%t.items.length)<0&&(n=t.items.length-1):n=e.index,Object.assign({},t,{index:n});case"scrollChange":return Object.assign({},t,{width:e.width,height:e.height});case"getStartXY":return Object.assign({},t,{startX:e.x,startY:e.y});case"touchChangeIndex":var i=(0,h.getTouchDirection)(t.startX,t.startY,e.x,e.y),a=0,c=void 0;return 2==i?a=-1:-2==i&&(a=1),c=(t.index+a)%t.items.length,c<0&&(c=t.items.length-1),Object.assign({},t,{index:c});default:return t}}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:""},e=arguments[1];switch(e.type){case"inputValue":return Object.assign({},t,{value:e.value});case"submit":var n=t.value;if(S){var r=localStorage.getItem("searchHistory")||"";""===r?r=n:r+="&"+n,localStorage.setItem("searchHistory",r)}return window.location.href="search.html?searchContent="+encodeURI(n),t;case"showMobileSearch":window.location.href="searchMobile.html";break;default:return t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cards:[]},e=arguments[1];switch(e.type){case"getCardInf":var n=t.cards;return n.push(e.card),Object.assign({},t,{cards:n});default:return t}}function u(t){return{NavListState:t.NavList,CarouselState:t.Carousel,CardsState:t.Cards,searchState:t.search}}function l(t){return{NavListDispatch:{clickBtn:function(){t({type:"clickBtn"})}},CarouseDispatch:{clickLast:function(){clearInterval(O),t({type:"changIndex",changIndexType:-1})},clickNext:function(){clearInterval(O),t({type:"changIndex",changIndexType:1})},clickNav:function(e){var n=e.target,r=parseInt(n.getAttribute("data-index"));clearInterval(O),t({type:"changIndex",index:r})},touchStart:function(e){var n=e.touches[0];t({type:"getStartXY",x:n.pageX,y:n.pageY}),clearInterval(O)},touchEnd:function(e){var n=e.changedTouches[0];return n.pageX,n.pageY,t({type:"touchChangeIndex",x:n.pageX,y:n.pageY}),clearInterval(O),o(),!1},mouseOut:function(t){clearInterval(O),o()},mouseOver:function(t){clearInterval(O)}},topDisPatch:{search:function(){var e=h.config.isMobile;t(e?{type:"showMobileSearch"}:{type:"submit"})},input:function(e){var n=e.target.value;t({type:"inputValue",value:n})}}}}var p=n(25),f=n(58),d=n(127),h=n(14),y=n(67),v=r(y),b=n(7),m=r(b),g=(0,p.combineReducers)({NavList:i,Carousel:a,Cards:s,search:c}),w=(0,p.createStore)(g),O=null,S=!!window.localStorage,x=(0,f.connect)(u,l)(d.Blue_Container);v.default.render(m.default.createElement(f.Provider,{store:w},m.default.createElement(x,null)),document.getElementById("container")),t.exports=w},,,function(t,e,n){"use strict";function r(){clearTimeout(y),y=setTimeout(function(){v=(0,u.getScreenSize)().width,p.default.dispatch(o("scrollChange",{showLen:v>768?10:4,width:v>768?1180:v,height:v>768?582.625:.49375*v}))},300)}function o(t,e){var n=e||{};return n.type=t,n}function i(t,e){switch(t){case"轮播图":a(e);break;default:c(e)}}function a(t){var e=void 0,n=[],r=t.video_list,i=r.length;for(e=0;e<i;e++)n.push({src:"#",img:r[e].img,title:r[e].short_title});p.default.dispatch(o("getCarouselItems",{items:n,width:v<=768?v:1180,height:v>768?582.625:.49375*v}))}function c(t){var e=void 0,n=[],r={},i=t.title,a=t.channel_id,c=t.video_list,s=c.length;for(e=0;e<s;e++)n.push({src:"#",img:c[e].img,title:c[e].short_title});r.id=a,r.title=i,r.items=n,p.default.dispatch(o("getCardInf",{card:r}))}var s=n(27),u=n(14),l=n(121),p=function(t){return t&&t.__esModule?t:{default:t}}(l),f=window,d=u.config.host,h=u.config.publicData,y=void 0,v=(0,u.getScreenSize)().width;s.ajaxExpanding.init({name:"getNavList",dataType:"json",type:"get",async:!0,handleData:function(t){return JSON.parse(t)}}),s.ajaxExpanding.init({name:"getCarousel",dataType:"json",type:"get",async:!0,handleData:function(t){return JSON.parse(t)}}),function(){function t(t,e){window.location.href="pagination.html?type="+t.id}var e=d+"/openapi/realtime/channel",n=h;n.type="list",n.version=7.5,s.ajaxExpanding.send({url:e,data:n,onSuccess:function(e){var n,r,i=e.data,a=[];for(n=0,r=i.length;n<r;n++)a.push({name:i[n].name,id:i[n].id});p.default.dispatch(o("getNavListItems",{items:a,index:-1,callback:t,showLen:v>768?10:4}))}},"getNavList"),f.addEventListener("resize",r,!1),f.addEventListener("pageshow",r,!1)}(),function(){var t=d+"/openapi/realtime/recommend",e=h;s.ajaxExpanding.send({url:t,data:e,onSuccess:function(t){var e=void 0,n=void 0,r=(t.code,t.data);for(e=0,n=r.length;e<n;e++)i(r[e].title,r[e])}},"getCarousel")}()},,,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(7),u=function(t){return t&&t.__esModule?t:{default:t}}(s),l=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._clickBtn=n._clickBtn.bind(n),n}return i(e,t),c(e,[{key:"_click",value:function(t,e){var n=this;return function(){n.props.callback(t,e)}}},{key:"_createList",value:function(t,e){var n=void 0,r=void 0,o=[];for(n=0,r=t.length;n<r;n++)o.push(u.default.createElement("a",{onClick:this._click(t[n],n),key:n,className:e===n?"on":"off"},t[n].name));return o}},{key:"_clickBtn",value:function(){this.props.clickBtn({type:"clickBtn"})}},{key:"render",value:function(){var t=this.props,e=t.items,n=t.index,r=t.callback,o=t.isOn,i=t.showLen,a=e.length;return u.default.createElement("nav",{className:"Blue_NavList"},u.default.createElement("div",{className:"list maxWarp",style:{height:o?20*Math.ceil(a/i)+"px":"40px"}},this._createList(e,n,r)),u.default.createElement("div",{className:"dropBox"},u.default.createElement("button",{onClick:this._clickBtn,className:o?"on":"off"})))}}]),e}(u.default.Component),p=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),c(e,[{key:"render",value:function(){var t=[],e=[],n=void 0,r=this.props,o=r.items,i=r.width,a=(r.CarouseDispatch,r.index),c=r.clickLast,s=r.clickNext,l=r.clickNav,p=r.touchStart,f=r.touchEnd,d=r.mouseOut,h=r.mouseOver,y=r.height,v=o.length;for(n=0;n<v;n++)t.push(u.default.createElement("li",{key:n,style:{width:i+"px"}},u.default.createElement("img",{src:o[n].img}),u.default.createElement("span",null,o[n].title))),e.push(u.default.createElement("li",{"data-index":n,key:n,onClick:l,className:n==a?"on":"off"}));return u.default.createElement("div",{onMouseOut:d,onMouseOver:h,onTouchStart:p,onTouchEnd:f,style:{height:y+"px"},className:"BluMUI_Carousel "},u.default.createElement("ul",{className:"body",style:{left:-1*a*i+"px",width:v*i+"px"}},t),u.default.createElement("div",{className:"nav"},u.default.createElement("ul",{className:"control"},i>768?u.default.createElement("button",{onClick:c,className:"last"}):void 0,u.default.createElement("ul",{className:"showNav"},e),i>768?u.default.createElement("button",{onClick:s,className:"next"}):void 0)))}}]),e}(u.default.Component),f=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),c(e,[{key:"_createItems",value:function(t){var e=void 0,n=void 0,r=[];for(e=0,n=t.length;e<n;e++)r.push(u.default.createElement("div",{key:e,className:"card"},u.default.createElement("img",{src:t[e].img}),u.default.createElement("span",null,t[e].title)));return r}},{key:"render",value:function(){var t=this.props.card;return u.default.createElement("section",{className:"Blue_CardBox"},u.default.createElement("header",{className:"header"},u.default.createElement("span",{className:"title",style:{backgroundImage:"url(../resource/images/title-"+t.id+".png)"}},t.title),u.default.createElement("span",{className:"more"},"更多")),u.default.createElement("div",{className:"cardWarp"},this._createItems(t.items)))}}]),e}(u.default.Component),d=function(t){function e(t){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),c(e,[{key:"render",value:function(){var t=this.props,e=t.search,n=t.input;return u.default.createElement("div",{className:"Blue_Top"},u.default.createElement("div",{className:"maxWarp"},u.default.createElement("div",{className:"search"},u.default.createElement("input",{placeholder:"请输入你想搜索的内容",onInput:n}),u.default.createElement("button",{onClick:e}))))}}]),e}(u.default.Component),h=function(t){function e(t){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),c(e,[{key:"render",value:function(){var t=this.props,e=t.CarouseDispatch,n=t.NavListDispatch,r=t.topDisPatch,o=t.NavListState,i=t.CarouselState,c=t.CardsState;return u.default.createElement("div",{className:"Blue_Container"},u.default.createElement("header",null,u.default.createElement(d,r),u.default.createElement(l,a({},o,n))),u.default.createElement(p,a({},i,e)),u.default.createElement("div",{id:"body"},c.cards.map(function(t,e){return u.default.createElement(f,{card:t,key:e})})),u.default.createElement("footer",null,"蓝山工作室15级前端组制作"))}}]),e}(u.default.Component);t.exports={Blue_Container:h}}],[124]);
>>>>>>> e90d9e2933772bcbb3746b797ab4a8c818e71f3a
