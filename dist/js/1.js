webpackJsonp([1],{334:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(4),l=n(c),s=r(29),f=r(476),p=n(f);r(498);var d=function(e){function t(e,r){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.getLandscapeMarquee=function(e){n.landscapeMarqueeParams=e},n.stoplandscapeMarquee=function(){n.landscapeMarqueeParams.stopMarquee()},n.runlandscapeMarquee=function(){n.landscapeMarqueeParams.runMarquee()},n.getVerticalMarquee=function(e){n.verticalMarqueeParams=e},n.stopVerticalMarquee=function(){n.verticalMarqueeParams.stopMarquee()},n.runVerticalMarquee=function(){n.verticalMarqueeParams.runMarquee()},n.state={loopData:[{txt:"这是一条数据1"},{txt:"这是一条数据2"},{txt:"这是一条数据3"},{txt:"这是一条数据4"}]},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.state.loopData;return l.default.createElement("div",null,l.default.createElement("div",{className:"type-title"},"默认横向滚动"),l.default.createElement("div",{className:"box-landscape"},l.default.createElement(p.default,{loopData:e,getMarquee:this.getLandscapeMarquee})),l.default.createElement("div",{className:"botton",onClick:this.runlandscapeMarquee},"运动"),l.default.createElement("div",{className:"botton",onClick:this.stoplandscapeMarquee},"暂停"),l.default.createElement("div",{className:"type-title"},"竖向滚动"),l.default.createElement("div",{className:"box-vertical"},l.default.createElement(p.default,{loopData:e,getMarquee:this.getVerticalMarquee,direction:"vertical",verticalItemHeight:"60px"})),l.default.createElement("div",{className:"botton",onClick:this.runVerticalMarquee},"运动"),l.default.createElement("div",{className:"botton",onClick:this.stopVerticalMarquee},"暂停"))}}]),t}(c.Component),m=function(e,t){return{}},y=function(e){return{}};t.default=(0,s.connect)(m,y)(d)},397:function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(485),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=o.default},477:function(e,t,r){"use strict";var n={};e.exports=n},478:function(e,t,r){"use strict";function n(e,t,r,n,a,i,u,c){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,a,i,u,c],f=0;l=new Error(t.replace(/%s/g,function(){return s[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=n},479:function(e,t,r){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,u,c=n(e),l=1;l<arguments.length;l++){r=Object(arguments[l]);for(var s in r)a.call(r,s)&&(c[s]=r[s]);if(o){u=o(r);for(var f=0;f<u.length;f++)i.call(r,u[f])&&(c[u[f]]=r[u[f]])}}return c}},480:function(e,t,r){"use strict";var n=r(397),o=r(478),a=r(482);e.exports=function(){function e(e,t,r,n,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},481:function(e,t,r){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=r(480)()},482:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},483:function(e,t,r){"use strict";function n(e){for(var t=arguments.length-1,r="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);throw t=Error(r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function o(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||P}function a(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||P}function i(){}function u(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||P}function c(e,t,r){var n,o={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)T.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:x,type:e,key:a,ref:i,props:o,_owner:R.current}}function l(e){return"object"===(void 0===e?"undefined":b(e))&&null!==e&&e.$$typeof===x}function s(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function f(e,t,r,n){if(F.length){var o=F.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function p(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>F.length&&F.push(e)}function d(e,t,r,o){var a=void 0===e?"undefined":b(e);"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case x:case _:case O:case k:i=!0}}if(i)return r(o,e,""===t?"."+m(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){a=e[u];var c=t+m(a,u);i+=d(a,c,r,o)}else if(null===e||void 0===e?c=null:(c=j&&e[j]||e["@@iterator"],c="function"==typeof c?c:null),"function"==typeof c)for(e=c.call(e),u=0;!(a=e.next()).done;)a=a.value,c=t+m(a,u++),i+=d(a,c,r,o);else"object"===a&&(r=""+e,n("31","[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function m(e,t){return"object"===(void 0===e?"undefined":b(e))&&null!==e&&null!=e.key?s(e.key):t.toString(36)}function y(e,t){e.func.call(e.context,t,e.count++)}function h(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?v(e,n,r,g.thatReturnsArgument):null!=e&&(l(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r,e={$$typeof:x,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),n.push(e))}function v(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(C,"$&/")+"/"),t=f(t,a,n,o),null==e||d(e,"",h,t),p(t)}/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=r(479),w=r(477),g=r(397),M="function"==typeof Symbol&&Symbol.for,x=M?Symbol.for("react.element"):60103,_=M?Symbol.for("react.call"):60104,O=M?Symbol.for("react.return"):60105,k=M?Symbol.for("react.portal"):60106,E=M?Symbol.for("react.fragment"):60107,j="function"==typeof Symbol&&Symbol.iterator,P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!==(void 0===e?"undefined":b(e))&&"function"!=typeof e&&null!=e&&n("85"),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=o.prototype;var S=a.prototype=new i;S.constructor=a,q(S,o.prototype),S.isPureReactComponent=!0;var A=u.prototype=new i;A.constructor=u,q(A,o.prototype),A.unstable_isAsyncReactComponent=!0,A.render=function(){return this.props.children};var R={current:null},T=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0},C=/\/+/g,F=[],I={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return v(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;t=f(null,null,t,r),null==e||d(e,"",y,t),p(t)},count:function(e){return null==e?0:d(e,"",g.thatReturnsNull,null)},toArray:function(e){var t=[];return v(e,t,null,g.thatReturnsArgument),t},only:function(e){return l(e)||n("143"),e}},Component:o,PureComponent:a,unstable_AsyncComponent:u,Fragment:E,createElement:c,cloneElement:function(e,t,r){var n=q({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=R.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)T.call(t,c)&&!N.hasOwnProperty(c)&&(n[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)n.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];n.children=u}return{$$typeof:x,type:e.type,key:o,ref:a,props:n,_owner:i}},createFactory:function(e){var t=c.bind(null,e);return t.type=e,t},isValidElement:l,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:R,assign:q}},D=Object.freeze({default:I}),$=D&&I||D;e.exports=$.default?$.default:$},484:function(e,t,r){"use strict";e.exports=r(483)},485:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(484),f=n(s),p=r(481),d=n(p),m=r(486),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(m);r(496),r(497),y.raf();var h=(c=u=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.initMarquee=function(){r.timerMarquee&&r.stopMarquee(),r.runMarquee()},r.landscapeMarquee=function(){r.domMw.scrollLeft>=r.domMi.scrollWidth?r.domMw.scrollLeft=0:r.domMw.scrollLeft++,r.timerMarquee=requestAnimationFrame(r.landscapeMarquee)},r.verticalMarquee=function(){r.domMw.scrollTop>=r.domMi.scrollHeight?r.domMw.scrollTop=0:r.domMw.scrollTop++,r.timerMarquee=requestAnimationFrame(r.verticalMarquee)},r.runMarquee=function(){r.timerMarquee&&r.stopMarquee(),"vertical"===r.props.direction?r.timerMarquee=requestAnimationFrame(r.verticalMarquee):r.timerMarquee=requestAnimationFrame(r.landscapeMarquee)},r.stopMarquee=function(){cancelAnimationFrame(r.timerMarquee)},r.componentDidMount=function(){r.initMarquee();var e=r.props.getMarquee;e&&e({runMarquee:r.runMarquee,stopMarquee:r.stopMarquee})},r.timerMarquee=null,r.domMi=null,r.domMw=null,r.state={},r}return i(t,e),l(t,[{key:"renderLandscapeMarquee",value:function(){var e=this,t=this.props.loopData;return f.default.createElement("div",{className:"marquee-landscape-wrap",ref:function(t){e.domMw=t}},f.default.createElement("div",{className:"marquee-landscape-item",ref:function(t){e.domMi=t}},t.map(function(e,t){return f.default.createElement("div",{className:"marquee-landscape-txt",key:t},e.txt)})),f.default.createElement("div",{className:"marquee-landscape-item"},t.map(function(e,t){return f.default.createElement("div",{className:"marquee-landscape-txt",key:t},e.txt)})))}},{key:"renderVerticalMarquee",value:function(){var e=this,t=this.props,r=t.loopData,n=t.verticalItemHeight;return f.default.createElement("div",{className:"marquee-vertical-wrap",ref:function(t){e.domMw=t}},f.default.createElement("div",{className:"marquee-vertical-item",ref:function(t){e.domMi=t}},r.map(function(e,t){return f.default.createElement("div",{style:{height:n,lineHeight:n},className:"marquee-vertical-txt",key:t},e.txt)})),f.default.createElement("div",{className:"marquee-vertical-item"},r.map(function(e,t){return f.default.createElement("div",{style:{height:n,lineHeight:n},className:"marquee-vertical-txt",key:t},e.txt)})))}},{key:"render",value:function(){var e=this.props.direction;return f.default.createElement("div",{className:"react-marquee-box"},"landscape"===e?this.renderLandscapeMarquee():this.renderVerticalMarquee())}}]),t}(s.Component),u.defaultProps={direction:"landscape",verticalItemHeight:"60px"},c);t.default=h,h.propTypes={loop:d.default.bool,loopData:d.default.array,getMarquee:d.default.func,direction:d.default.string,verticalItemHeight:d.default.string}},486:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.raf=function(){for(var e=0,t=["webkit","moz"],r=0;r<t.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[t[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[r]+"CancelAnimationFrame"]||window[t[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,r){var n=(new Date).getTime(),o=Math.max(0,16-(n-e)),a=window.setTimeout(function(){t(n+o)},o);return e=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}},491:function(e,t,r){t=e.exports=r(78)(!1),t.push([e.i,".react-marquee-box,.react-marquee-box .marquee-landscape-wrap{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.react-marquee-box .marquee-landscape-wrap{display:flex;align-items:center}.react-marquee-box .marquee-landscape-wrap .marquee-landscape-item{float:left;height:100%;white-space:nowrap}.react-marquee-box .marquee-landscape-wrap .marquee-landscape-item .marquee-landscape-txt{padding:0 10px;white-space:nowrap;display:inline-block;height:100%}",""])},492:function(e,t,r){t=e.exports=r(78)(!1),t.push([e.i,".react-marquee-box .marquee-vertical-wrap{width:100%;height:100%;overflow:hidden}.react-marquee-box .marquee-vertical-wrap .marquee-vertical-item .marquee-vertical-txt{height:60px;line-height:60px}",""])},493:function(e,t,r){t=e.exports=r(78)(!1),t.push([e.i,".box-landscape{width:100%;position:relative;height:50px;border:1px solid red;font-size:18px;color:#323232;line-height:50px}.botton{font-size:16px;line-height:40px;width:100px;background-color:#ccc;display:inline-block;margin:10px;text-align:center}.box-vertical{width:100%;height:240px;border:1px solid red;position:relative;font-size:18px;color:#323232}.type-title{font-size:20px;color:#323232;font-weight:700;padding:10px}",""])},496:function(e,t,r){var n=r(491);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;r(79)(n,o);n.locals&&(e.exports=n.locals)},497:function(e,t,r){var n=r(492);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;r(79)(n,o);n.locals&&(e.exports=n.locals)},498:function(e,t,r){var n=r(493);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;r(79)(n,o);n.locals&&(e.exports=n.locals)}});