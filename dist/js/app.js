webpackJsonp([2],{143:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_LOCATION_LIST="GET_LOCATION_LIST",e.GET_LOCATION_MORE="GET_LOCATION_MORE"},145:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n(75),n(339);var o=n(4),i=r(o),a=n(37),u=n(29),c=n(332),l=r(c),s=n(329),f=r(s);(0,a.render)(i.default.createElement(u.Provider,{store:f.default},l.default),document.getElementById("app"),function(){console.log("callback")})},164:function(t,e,n){"use strict";t.exports=n(320)},320:function(t,e,n){"use strict";var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(321),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},321:function(t,e,n){"use strict";(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(n){function r(t,e,n,r){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),u=new h(r||[]);return a._invoke=s(t,n,u),a}function o(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function u(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function l(t){function n(r,i,a,u){var c=o(t[r],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"===(void 0===s?"undefined":e(s))&&b.call(s,"__await")?Promise.resolve(s.__await).then(function(t){n("next",t,a,u)},function(t){n("throw",t,a,u)}):Promise.resolve(s).then(function(t){l.value=t,a(l)},u)}u(c.arg)}function r(t,e){function r(){return new Promise(function(r,o){n(t,e,r,o)})}return i=i?i.then(r,r):r()}var i;this._invoke=r}function s(t,e,n){var r=k;return function(i,a){if(r===M)throw new Error("Generator is already running");if(r===P){if("throw"===i)throw a;return y()}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=f(u,n);if(c){if(c===T)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===k)throw r=P,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=M;var l=o(t,e,n);if("normal"===l.type){if(r=n.done?P:j,l.arg===T)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=P,n.method="throw",n.arg=l.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,f(t,e),"throw"===e.method))return T;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var r=o(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,T;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,T):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,T)}function p(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function m(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(b.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return r.next=r}}return{next:y}}function y(){return{value:v,done:!0}}var v,g=Object.prototype,b=g.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},_=w.iterator||"@@iterator",O=w.asyncIterator||"@@asyncIterator",E=w.toStringTag||"@@toStringTag",x="object"===e(t),L=n.regeneratorRuntime;if(L)return void(x&&(t.exports=L));L=n.regeneratorRuntime=x?t.exports:{},L.wrap=r;var k="suspendedStart",j="suspendedYield",M="executing",P="completed",T={},N={};N[_]=function(){return this};var S=Object.getPrototypeOf,R=S&&S(S(m([])));R&&R!==g&&b.call(R,_)&&(N=R);var A=u.prototype=i.prototype=Object.create(N);a.prototype=A.constructor=u,u.constructor=a,u[E]=a.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,E in t||(t[E]="GeneratorFunction")),t.prototype=Object.create(A),t},L.awrap=function(t){return{__await:t}},c(l.prototype),l.prototype[O]=function(){return this},L.AsyncIterator=l,L.async=function(t,e,n,o){var i=new l(r(t,e,n,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(A),A[E]="Generator",A[_]=function(){return this},A.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},L.values=m,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&b.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=b.call(o,"catchLoc"),u=b.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&b.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),T},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),d(n),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;d(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:m(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),T}}}(function(){return this}()||Function("return this")())}).call(e,n(142)(t))},326:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u,c,l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(4),f=r(s),p=n(29),d=(n(45),n(76)),h=r(d),m=(c=u=function(t){function e(t,n){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return a(e,t),l(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return f.default.createElement("div",{className:"container"},f.default.createElement(h.default,{component:"div",className:"content",transitionName:"carousel1",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.props.children))}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),e}(s.Component),u.defaultProps={title:"123"},c),y=function(t){return{}},v=function(t){return{}};e.default=(0,p.connect)(y,v)(m)},327:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:u.GET_LOCATION_MORE,data:t}}function o(t){return{type:u.GET_LOCATION_LIST,data:t.books}}function i(t){return function(e){e(r()),l.default.getLocalNews(function(n){e(o(n)),t&&t()})}}Object.defineProperty(e,"__esModule",{value:!0}),e.fetchLocationLsit=i;var a=n(143),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(a),c=n(328),l=function(t){return t&&t.__esModule?t:{default:t}}(c)},328:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={getLocalNews:function(t){$.ajax({type:"GET",url:"https://api.douban.com/v2/book/search?q=%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91&count=20&start=1",dataType:"jsonp",data:{},success:function(e){t(e)}})}}},329:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),i=n(77),a=r(i),u=n(330),c=r(u),l=(0,o.createStore)(c.default,(0,o.applyMiddleware)(a.default));window.store=l,e.default=l},330:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(28),o=n(331),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=(0,r.combineReducers)({locationState:i.default})},331:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments[1];switch(e.type){case i.GET_LOCATION_MORE:return Object.assign({},t,{isMore:e.data});case i.GET_LOCATION_LIST:var n=e.data,r=[];return n&&n.length>0&&(r=n.map(function(t){return{summary:t.summary,title:t.title,image:t.image,price:t.price}})),Object.assign({},t,{list:t.list.concat(r),isMore:!0});default:return t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(143),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(o),a={list:[],isMore:!0}},332:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),i=r(o),a=n(45),u=n(326),c=r(u),l=n(334),s=r(l),f=a.hashHistory,p=function(t,e){n.e(0).then(function(t){e(null,n(343).default)}.bind(null,n)).catch(n.oe)},d=function(t,e){n.e(1).then(function(t){e(null,n(344).default)}.bind(null,n)).catch(n.oe)},h=i.default.createElement(a.Router,{history:f},i.default.createElement(a.Route,{path:"/",component:c.default},i.default.createElement(a.IndexRoute,{component:s.default}),i.default.createElement(a.Route,{path:"home",component:s.default}),i.default.createElement(a.Route,{path:"antd",getComponent:p}),i.default.createElement(a.Route,{path:"marquee",getComponent:d}),i.default.createElement(a.Redirect,{from:"*",to:"/"})));e.default=h},333:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){Object.assign.apply(Object,[t.prototype].concat(e))}}},334:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var a=e[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}return r("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c,l,s=n(164),f=r(s),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=n(4),h=r(d),m=n(29),y=n(28);n(340);var v=n(327),g=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(v),b=n(333),w=r(b),_=0,O=(c=(0,w.default)({test:function(){console.log("mixin")}}))(l=function(t){function e(t,n){var r=this;i(this,e);var u=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return u.testAsyncFn=o(f.default.mark(function t(){return f.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(t,e){setTimeout(function(){console.log(158),t()},2e3)});case 2:case"end":return t.stop()}},t,r)})),u.handleScrollMore=function(){document.body.scrollTop+window.innerHeight>=document.getElementById("wrap").clientHeight-200&&u.props.isMore&&u.props.actions.fetchLocationLsit(function(){})},u.handleScrollMore=u.handleScrollMore.bind(u),u.props.actions.fetchLocationLsit(function(){}),u.testAsyncFn(),u.test(),console.log("this.props:",u.props),u}return u(e,t),p(e,[{key:"renderList",value:function(){var t=this.props.list;if(0!=t.length){var e=[],n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;e.push(h.default.createElement("div",{className:"item",key:++_},h.default.createElement("img",{className:"item-image",src:u.image}),h.default.createElement("div",{className:"item-title"},u.title),h.default.createElement("div",{className:"item-summary"},u.summary)))}}catch(t){r=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return e}}},{key:"render",value:function(){var t=this.renderList();return h.default.createElement("div",{className:"wrap",id:"wrap"},t)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScrollMore)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScrollMore)}}]),e}(d.Component))||l,E=function(t,e){return{list:t.locationState.list,isMore:t.locationState.isMore}},x=function(t){return{actions:(0,y.bindActionCreators)(g,t)}},L=window.c=(0,m.connect)(E,x)(O);e.default=L},335:function(t,e,n){e=t.exports=n(78)(!1),e.push([t.i,"*{margin:0;padding:0;box-sizing:border-box;-webkit-box-sizing:border-box}li{list-style:none}body,html{line-height:1;height:100%;font-family:Helvetica,Verdana,Arial,sans-serif;-webkit-font-smoothing:antialiased;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;text-rendering:optimizelegibility}body{min-width:300px;max-width:640px;margin:0 auto;position:relative;background-color:#f9f9f9}#app{height:100%}.example-enter{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.example-enter-active{transition:all 1s ease-out}.example-enter-active,.example-leave{-webkit-transform:translateZ(0);transform:translateZ(0)}.example-leave-active{transition:all 1s ease-out;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel1-enter{opacity:0}.carousel1-enter-active{opacity:1;transition:opacity .3s ease-in}.carousel1-leave{opacity:1}.carousel1-leave-active{opacity:0;transition:opacity .3s ease-in}",""])},336:function(t,e,n){e=t.exports=n(78)(!1),e.push([t.i,".item{width:100%;height:auto;background-color:#fff;border-bottom:1px solid #ebebeb;position:relative;padding:.39063rem .46875rem .39063rem 2.5rem;min-height:2.8125rem}.item:active{background-color:#ebebeb}.item .item-image{width:1.57813rem;height:2.28125rem;position:absolute;left:.46875rem;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.item .item-title{font-size:.46875rem;line-height:.65625rem;color:#000;padding-bottom:.15625rem;padding-top:.15625rem;max-width:7.03125rem;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all}.item .item-summary,.item .item-title{text-overflow:ellipsis;overflow:hidden}.item .item-summary{color:#999;line-height:.4375rem;font-size:.40625rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}",""])},339:function(t,e,n){var r=n(335);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(79)(r,o);r.locals&&(t.exports=r.locals)},340:function(t,e,n){var r=n(336);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(79)(r,o);r.locals&&(t.exports=r.locals)},341:function(t,e,n){t.exports=n(145)}},[341]);