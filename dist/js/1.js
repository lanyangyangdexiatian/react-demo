webpackJsonp([1],{344:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=a(4),u=r(c),s=a(29),p=a(119),f=r(p);a(492);var d=function(e){function t(e,a){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return r.getLandscapeMarquee=function(e){r.landscapeMarqueeParams=e},r.stoplandscapeMarquee=function(){r.landscapeMarqueeParams.stopMarquee()},r.runlandscapeMarquee=function(){r.landscapeMarqueeParams.runMarquee()},r.getVerticalMarquee=function(e){r.verticalMarqueeParams=e},r.stopVerticalMarquee=function(){r.verticalMarqueeParams.stopMarquee()},r.runVerticalMarquee=function(){r.verticalMarqueeParams.runMarquee()},r.state={loopData:[{txt:"这是一条数据1"},{txt:"这是一条数据2"},{txt:"这是一条数据3"},{txt:"这是一条数据4"}]},r}return i(t,e),l(t,[{key:"render",value:function(){var e=this.state.loopData;return u.default.createElement("div",null,u.default.createElement("div",{className:"type-title"},"默认横向滚动"),u.default.createElement("div",{className:"box-landscape"},u.default.createElement(f.default,{loopData:e,getMarquee:this.getLandscapeMarquee})),u.default.createElement("div",{className:"botton",onClick:this.runlandscapeMarquee},"运动"),u.default.createElement("div",{className:"botton",onClick:this.stoplandscapeMarquee},"暂停"),u.default.createElement("div",{className:"type-title"},"竖向滚动"),u.default.createElement("div",{className:"box-vertical"},u.default.createElement(f.default,{loopData:e,getMarquee:this.getVerticalMarquee,direction:"vertical",verticalItemHeight:"60px"})),u.default.createElement("div",{className:"botton",onClick:this.runVerticalMarquee},"运动"),u.default.createElement("div",{className:"botton",onClick:this.stopVerticalMarquee},"暂停"))}}]),t}(c.Component),m=function(e,t){return{}},h=function(e){return{}};t.default=(0,s.connect)(m,h)(d)},489:function(e,t,a){t=e.exports=a(78)(!1),t.push([e.i,".box-landscape{width:100%;position:relative;height:50px;border:1px solid red;font-size:18px;color:#323232;line-height:50px}.botton{font-size:16px;line-height:40px;width:100px;background-color:#ccc;display:inline-block;margin:10px;text-align:center}.box-vertical{width:100%;height:240px;border:1px solid red;position:relative;font-size:18px;color:#323232}.type-title{font-size:20px;color:#323232;font-weight:700;padding:10px}",""])},492:function(e,t,a){var r=a(489);"string"==typeof r&&(r=[[e.i,r,""]]);var n={};n.transform=void 0;a(79)(r,n);r.locals&&(e.exports=r.locals)}});