/*! For license information please see 8.09746105.chunk.js.LICENSE.txt */
(this.webpackJsonpNewsApiReact=this.webpackJsonpNewsApiReact||[]).push([[8],{125:function(e,t,n){"use strict";var r=n(16),a="function"===typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.forward_ref"):60112,p=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,m="function"===typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function j(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||v}function O(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var S=x.prototype=new O;S.constructor=x,r(S,j.prototype),S.isPureReactComponent=!0;var _={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,a={},o=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)C.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:i,type:e,key:o,ref:s,props:a,_owner:_.current}}function N(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,k=[];function T(e,t,n,r){if(k.length){var a=k.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>k.length&&k.push(e)}function A(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case o:s=!0}}if(s)return n(r,e,""===t?"."+D(e,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=t+D(a=e[c],c);s+=A(a,u,n,r)}else if(null===e||"object"!==typeof e?u=null:u="function"===typeof(u=m&&e[m]||e["@@iterator"])?u:null,"function"===typeof u)for(e=u.call(e),c=0;!(a=e.next()).done;)s+=A(a=a.value,u=t+D(a,c++),n,r);else if("object"===a)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return s}function L(e,t,n){return null==e?0:A(e,"",t,n)}function D(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,a){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),L(e,I,t=T(t,i,r,a)),R(t)}var M={current:null};function $(){var e=M.current;if(null===e)throw Error(g(321));return e}var W={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;L(e,U,t=T(null,null,t,n)),R(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=s,t.Profiler=u,t.PureComponent=x,t.StrictMode=c,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(g(267,e));var a=r({},e.props),o=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)C.call(t,l)&&!E.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];a.children=u}return{$$typeof:i,type:e.type,key:o,ref:s,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="16.14.0"},126:function(e,t){function n(e,t){if(!(this instanceof n))return new n(e,t);this.per_page=e||25,this.length=t||10}e.exports=n,n.prototype.build=function(e,t){var n=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>n&&(t=n);var r=Math.max(1,t-Math.floor(this.length/2)),a=Math.min(n,t+Math.floor(this.length/2));a-r+1<this.length&&(t<n/2?a=Math.min(n,a+(this.length-(a-r))):r=Math.max(1,r-(this.length-(a-r)))),a-r+1>this.length&&(t>n/2?r++:a--);var i=this.per_page*(t-1);i<0&&(i=0);var o=this.per_page*t-1;return o<0&&(o=0),o>Math.max(e-1,0)&&(o=Math.max(e-1,0)),{total_pages:n,pages:Math.min(a-r+1,n),current_page:t,first_page:r,last_page:a,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<n,total_results:e,results:Math.min(o-i+1,e),first_result:i,last_result:o}}},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(87)),a=o(n(8)),i=o(n(43));function o(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return u(this,t),f(this,d(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"handleClick",value:function(e){var t=this.props,n=t.isDisabled,r=t.pageNumber;e.preventDefault(),n||this.props.onClick(r)}},{key:"render",value:function(){var e,t=this.props,n=t.pageText,a=(t.pageNumber,t.activeClass),o=t.itemClass,s=t.linkClass,c=t.activeLinkClass,u=t.disabledClass,l=t.isActive,f=t.isDisabled,d=t.href,p=t.ariaLabel,h=(0,i.default)(o,(b(e={},a,l),b(e,u,f),e)),m=(0,i.default)(s,b({},c,l));return r.default.createElement("li",{className:h,onClick:this.handleClick.bind(this)},r.default.createElement("a",{className:m,href:d,"aria-label":p},n))}}])&&l(n.prototype,a),o&&l(n,o),t}(r.Component);t.default=h,b(h,"propTypes",{pageText:a.default.oneOfType([a.default.string,a.default.element]),pageNumber:a.default.number.isRequired,onClick:a.default.func.isRequired,isActive:a.default.bool.isRequired,isDisabled:a.default.bool,activeClass:a.default.string,activeLinkClass:a.default.string,itemClass:a.default.string,linkClass:a.default.string,disabledClass:a.default.string,href:a.default.string}),b(h,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})},128:function(e,t,n){(function(t){var r=n(129),a=n(130),i=n(131),o=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function s(e){console.log("[dotenv][DEBUG] ".concat(e))}var c={config:function(e){var n,o=a.resolve(t.cwd(),".env"),u="utf8",l=Boolean(e&&e.debug),f=Boolean(e&&e.override);e&&(null!=e.path&&(o="~"===(n=e.path)[0]?a.join(i.homedir(),n.slice(1)):n),null!=e.encoding&&(u=e.encoding));try{var d=c.parse(r.readFileSync(o,{encoding:u}));return Object.keys(d).forEach((function(e){Object.prototype.hasOwnProperty.call(Object({NODE_ENV:"production",PUBLIC_URL:"/NewsApiReact",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"d04b4b00bc314bef8ed54f05c0ffc01b"}),e)?(!0===f&&(Object({NODE_ENV:"production",PUBLIC_URL:"/NewsApiReact",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"d04b4b00bc314bef8ed54f05c0ffc01b"})[e]=d[e]),l&&s('"'.concat(e,!0===f?'" is already defined in `process.env` and WAS overwritten':'" is already defined in `process.env` and was NOT overwritten'))):Object({NODE_ENV:"production",PUBLIC_URL:"/NewsApiReact",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"d04b4b00bc314bef8ed54f05c0ffc01b"})[e]=d[e]})),{parsed:d}}catch(p){return l&&s("Failed to load ".concat(o," ").concat(p.message)),{error:p}}},parse:function(e){var t,n={},r=e.toString();for(r=r.replace(/\r\n?/gm,"\n");null!=(t=o.exec(r));){var a=t[1],i=t[2]||"",s=(i=i.trim())[0];i=i.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===s&&(i=(i=i.replace(/\\n/g,"\n")).replace(/\\r/g,"\r")),n[a]=i}return n}};e.exports.config=c.config,e.exports.parse=c.parse,e.exports=c}).call(this,n(62))},129:function(e,t){},130:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var o=i>=0?arguments[i]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,a="/"===o.charAt(0))}return(a?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!a).join("/"))||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===a(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"))||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),i=r(n.split("/")),o=Math.min(a.length,i.length),s=o,c=0;c<o;c++)if(a[c]!==i[c]){s=c;break}var u=[];for(c=s;c<a.length;c++)u.push("..");return(u=u.concat(i.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,a=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!a){r=i;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){n=t+1;break}}else-1===r&&(a=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,a=!0,i=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47!==s)-1===r&&(a=!1,r=o+1),46===s?-1===t?t=o:1!==i&&(i=1):-1!==t&&(i=-1);else if(!a){n=o+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(62))},131:function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!==typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!==typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}},188:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(0),a=n(61),i=n(48),o=n(77),s=n.n(o),c=n(14),u=n(78),l=n(73),f=n(15),d=(n(44),n(50)),p=n(187),b=(n(56),n(51)),h=n(52),m=(n(57),n(3));function g(e){var t=Object(h.b)(),n=t.register,r=t.handleSubmit,a=(t.formState.errors,e.onSubmitData);return Object(m.jsxs)("form",{action:"/",method:"post",onSubmit:r((function(e){e&&a(e.searchNews)})),children:[Object(m.jsxs)("div",{className:"row col-md-12  d-flex justify-content-end mb-3",children:[Object(m.jsx)("div",{className:"col-md-4 ",children:Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",Object(i.a)({className:"form-control",placeholder:"Search in title (ex:food)"},n("searchNews")))})}),Object(m.jsx)("div",{className:"col-md-4 ",children:Object(m.jsxs)("button",{type:"submit",className:"btn btn-primary mt-0 mx-0 ",children:[Object(m.jsx)("i",{className:"ic icon-angle-left-b"})," Search"]})})]}),Object(m.jsx)("hr",{})]})}function v(e){var t=Object(h.b)(),n=t.register,r=t.handleSubmit,a=(t.formState.errors,e.onSubmitData);return Object(m.jsxs)("form",{action:"/",method:"post",onSubmit:r((function(e){e&&a(e.searchbycountry)})),children:[Object(m.jsxs)("div",{className:"row col-md-12  d-flex justify-content-end mb-3",children:[Object(m.jsx)("div",{className:"col-md-4 ",children:Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",Object(i.a)({className:"form-control",placeholder:"Search by country(ae,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,es,fr..)"},n("searchbycountry")))})}),Object(m.jsx)("div",{className:"col-md-4 ",children:Object(m.jsxs)("button",{type:"submit",className:"btn btn-primary mt-0 mx-0 ",children:[Object(m.jsx)("i",{className:"ic icon-angle-left-b"})," Search"]})})]}),Object(m.jsx)("hr",{})]})}function y(e){var t=Object(h.b)(),n=t.register,r=t.handleSubmit,a=(t.formState.errors,e.onSubmitData);return Object(m.jsxs)("form",{action:"/",method:"post",onSubmit:r((function(e){e&&a(e.searchbylanguage)})),children:[Object(m.jsxs)("div",{className:"row col-md-12  d-flex justify-content-end mb-3",children:[Object(m.jsx)("div",{className:"col-md-4 ",children:Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",Object(i.a)({className:"form-control",placeholder:"Search by language(ar,cn,de,en,es,fr,he,it,nl,no,pt,ru,se,sv,ud,zh)"},n("searchbylanguage")))})}),Object(m.jsx)("div",{className:"col-md-4 ",children:Object(m.jsxs)("button",{type:"submit",className:"btn btn-primary mt-0 mx-0 ",children:[Object(m.jsx)("i",{className:"ic icon-angle-left-b"})," Search"]})})]}),Object(m.jsx)("hr",{})]})}var j=n(63),O=n(55),x=n.n(O),S=n(49);function _(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],h=Object(r.useState)(null),O=Object(l.a)(h,2),_=O[0],C=O[1],E=Object(r.useState)(!1),w=Object(l.a)(E,2),N=w[0],P=w[1],k=Object(r.useState)(1),T=Object(l.a)(k,2),R=T[0],A=T[1],L=Object(r.useState)(null),D=Object(l.a)(L,2),U=(D[0],D[1],Object(r.useState)(!0)),I=Object(l.a)(U,2),F=(I[0],I[1]),M=Object(r.useState)(10),$=Object(l.a)(M,1)[0],W=Object(r.useState)("actualit\xe9s"),V=Object(l.a)(W,2),K=V[0],G=V[1],H=Object(f.b)(),q=localStorage.getItem("user"),B=JSON.parse(q);n(128).config();var z=S.api_key;var J=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(R+1),F(!0),e.next=4,x.a.get("https://newsapi.org/v2/everything?q=actualit\xe9s&page=".concat(R,"&pageSize=").concat($,"&apiKey=").concat(z));case 4:t=e.sent,console.log(t),o((function(e){return[].concat(Object(c.a)(e),Object(c.a)(t.data.articles))})),F(!1),console.log(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,x.a.get("https://newsapi.org/v2/everything?q=actualit\xe9s&page=".concat(R,"&pageSize=").concat($,"&apiKey=").concat(z));case 3:t=e.sent,o((function(e){return[].concat(Object(c.a)(e),Object(c.a)(t.data.articles))})),F(!1),console.log(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{onSubmitData:function(e){G(e),A(1),console.log("searchKeyword",e),function(){var t=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.next=3,x.a.get("https://newsapi.org/v2/everything?qInTitle=".concat(e,"&page=").concat(R,"&pageSize=").concat($,"&apiKey=").concat(z));case 3:n=t.sent,o(n.data.articles),console.log(n.data.articles),F(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}}),Object(m.jsx)(v,{onSubmitData:function(e){G(e),A(1),console.log("searchKeyword",e),function(){var t=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.next=3,x.a.get("https://newsapi.org/v2/top-headlines?country=".concat(e,"&page=").concat(R,"&pageSize=").concat($,"&apiKey=").concat(z));case 3:n=t.sent,o(n.data.articles),console.log(n.data.articles),F(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}}),Object(m.jsx)(y,{onSubmitData:function(e){G(e),A(1),console.log("searchKeyword",e),function(){var t=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.next=3,x.a.get("https://newsapi.org/v2/top-headlines?language=".concat(e,"&page=").concat(R,"&pageSize=").concat($,"&apiKey=").concat(z));case 3:n=t.sent,o(n.data.articles),console.log(n.data.articles),F(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}}),Object(m.jsx)("div",{className:"row col-md-12   mx-5",children:Object(m.jsxs)("h3",{children:["Results for: ",K]})}),Object(m.jsx)(j.a,{dataLength:a.length,next:J,hasMore:!0,loader:Object(m.jsx)("h4",{children:"loading"}),endMessage:Object(m.jsx)("p",{style:{textAlign:"center"},children:Object(m.jsx)("b",{children:" You have seen it all"})}),children:Object(m.jsx)("div",{className:"container ",children:Object(m.jsx)("div",{className:"row col-md-12   mx-5 ",children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(m.jsxs)("div",{className:"card m-5 ",style:{width:"60rem"},children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsxs)("div",{children:[e.title,B&&Object(m.jsx)("a",{className:"add-news",onClick:function(){return function(e){e&&H(b.a.save(Object(i.a)({userid:B.id},e)))}(e)},children:"Add to my list"})]})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("img",{className:"img-thumbnail",style:{width:"60rem",height:"20rem"},src:e.urlToImage,alt:e.urlToImage}),Object(m.jsx)("p",{className:"card-text",children:e.description}),Object(m.jsxs)("p",{className:"fw-light",children:["Source : ",null===e||void 0===e?void 0:e.source.name]}),Object(m.jsx)("div",{className:"d-flex justify-content-end",children:Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){var t;(t=e)&&(P(!0),C(t))},children:"Details"})})]})]},t)}))})})}),Object(m.jsxs)(p.a,{show:N,onHide:function(){return P(!1)},children:[Object(m.jsxs)(p.a.Header,{children:[Object(m.jsx)(p.a.Title,{children:"Artical Details"}),Object(m.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:function(){return P(!1)}})]}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)("div",{className:"d-flex justify-content-end artical-published-date",children:Object(d.a)(new Date(null===_||void 0===_?void 0:_.publishedAt))}),Object(m.jsxs)("b",{children:[null===_||void 0===_?void 0:_.title," "]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),null===_||void 0===_?void 0:_.content,Object(m.jsx)("a",{href:null===_||void 0===_?void 0:_.url,target:"_blank",rel:"noreferrer",children:"see the full artical"}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"d-flex justify-content-end",children:null===_||void 0===_?void 0:_.author})]})]})]})}function C(){return Object(m.jsx)(a.a,{children:Object(m.jsx)(_,{title:"Home Page"})})}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));n(42);var r={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})};return fetch("/users/authenticate",n).then(i).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e}))},logout:a,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/users/register",t).then(i)}};function a(){localStorage.removeItem("user")}function i(e){return e.text().then((function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&(a(),location.reload(!0));var r=n&&n.message||e.statusText;return Promise.reject(r)}return n}))}var o="ALERT_SUCCESS",s="ALERT_ERROR",c="ALERT_CLEAR",u="USERS_REGISTER_REQUEST",l="USERS_REGISTER_SUCCESS",f="USERS_REGISTER_FAILURE",d="USERS_LOGIN_REQUEST",p="USERS_LOGIN_SUCCESS",b="USERS_LOGIN_FAILURE",h="USERS_LOGOUT",m={success:function(e){return{type:o,message:e}},error:function(e){return{type:s,message:e}},clear:function(){return{type:c}}};var g={login:function(e,t){return function(n){n({type:d,user:{email:e}}),r.login(e,t).then((function(e){n(function(e){return{type:p,user:e}}(e)),window.location.href="home"}),(function(e){n(function(e){return{type:b,error:e}}(e)),n(m.error(e))}))}},logout:function(){return r.logout(),{type:h}},registerUser:function(e){return function(t){t(function(e){return{type:u,user:e}}(e)),r.register(e).then((function(e){t(function(e){return{type:l,user:e}}()),window.location.href="login",t(m.success("Registration successful"))}),(function(e){t(function(e){return{type:f,error:e}}(e)),t(m.error(e))}))}}}},42:function(e,t,n){"use strict";function r(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer ".concat(e.token)}:{}}n.d(t,"a",(function(){return r}))},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(55);var r=n(42),a=n(49);a.api_key;var i={saveNews:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/news/save",t)},deleteNews:function(e){var t={method:"DELETE",headers:Object(r.a)(),body:JSON.stringify(e)};return fetch("/news/delete",t)},getMyNews:function(){var e={method:"GET",headers:Object(r.a)()};return fetch("/myNews",e)}}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var r=n(15),a=n(41),i=n(3);function o(){var e=Object(r.b)(),t=localStorage.getItem("user"),n=JSON.parse(t);return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("header",{className:"site-header text-center  mb-0",children:Object(i.jsx)("div",{className:"menu-container row align-items-center container-fluid mx-auto",children:Object(i.jsxs)("div",{className:"row  menus  mr-auto mr-lg-0  mt-16 mt-lg-0",children:[Object(i.jsx)("span",{className:"col-md-2 site-name",children:Object(i.jsx)("a",{href:"/",children:"News"})}),n?Object(i.jsx)("span",{className:"col-md-4 site-menu",children:Object(i.jsx)("a",{className:"/mylist"===window.location.pathname?"active":"",href:"/mylist",children:"My List"})}):Object(i.jsx)("span",{className:"col-md-4"}),Object(i.jsx)("ul",{className:" col-md-6 d-flex justify-content-end list-unstyled align-items-center ",children:(null===n||void 0===n?void 0:n.name)?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("li",{className:"nav-item px-3",children:["Hi ",null===n||void 0===n?void 0:n.name," !"]})," ",Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("button",{type:"button",onClick:function(t){e(a.b.logout()),window.location.href="home"},className:"btn btn-primary",children:"Logout"})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/login",children:"Login"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/register",children:"Register"})})]})})]})})})})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(0);var r=n(3);function a(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("footer",{className:"text-start site-footer d-block mb-5 ms-5 mt-auto",children:[Object(r.jsx)("p",{className:"mb-0",children:" \xa9 2022  of France"}),Object(r.jsx)("p",{className:"poweredBy",children:"Powered by Takwa"})]})})}},49:function(e){e.exports=JSON.parse('{"api_key":"5d6344128e9843d38603f37aaf736308"}')},50:function(e,t,n){"use strict";function r(e,t){var n=new Date(e),r=n.getFullYear(),a=n.getMonth()+1,i=n.getDate();i<10&&(i="0".concat(i)),a<10&&(a="0".concat(a));var o="".concat(r,"-").concat(a,"-").concat(i);return t?t(o):o}n.d(t,"a",(function(){return r}))},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(44),a=" NEWS_SAVE_REQUEST",i=" NEWS_SAVE_SUCCESS",o=" NEWS_SAVE_FAILURE",s="NEWS_GETALL_REQUEST",c="NEWS_GETALL_SUCCESS",u="NEWS_GETALL_FAILURE",l="NEWS_DELETE_REQUEST",f="NEWS_DELETE_SUCCESS",d="NEWS_DELETE_FAILURE";var p={save:function(e){return function(t){t(function(e){return{type:a,news:e}}(e)),r.a.saveNews(e).then((function(e){t(function(e){return{type:i,news:e}}(e)),alert("Added Successfuly!")}),(function(e){t(function(e){return{type:o,error:e}}(e)),alert(e)}))}},getMyNews:function(){return function(e){e({type:s}),r.a.getMyNews().then((function(t){return e(function(e){return{type:c,news:e}}(t))}),(function(t){return e(function(e){return{type:u,error:e}}(t))}))}},delete:function(e){return function(t){t(function(e){return{type:l,news:e}}(e)),r.a.deleteNews(e).then((function(e){t(function(e){return{type:f,news:e}}(e)),alert("Deleted Successfuly!"),location.reload(!0)}),(function(e){t(function(e){return{type:d,error:e}}(e)),alert(e)}))}}}},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(87)),a=c(n(8)),i=c(n(126)),o=c(n(127)),s=c(n(43));function c(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){return f(this,t),p(this,b(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"isFirstPageVisible",value:function(e){var t=this.props,n=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||n&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,n=t.hideDisabled;return!(t.hideNavigation||n&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,n=t.hideDisabled;return!(t.hideNavigation||n&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,n=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||n&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,n=t.itemsCountPerPage,a=t.pageRangeDisplayed,c=t.activePage,u=t.prevPageText,l=t.nextPageText,f=t.firstPageText,d=t.lastPageText,p=t.totalItemsCount,b=t.onChange,h=t.activeClass,m=t.itemClass,g=t.itemClassFirst,v=t.itemClassPrev,y=t.itemClassNext,j=t.itemClassLast,O=t.activeLinkClass,x=t.disabledClass,S=(t.hideDisabled,t.hideNavigation,t.linkClass),_=t.linkClassFirst,C=t.linkClassPrev,E=t.linkClassNext,w=t.linkClassLast,N=(t.hideFirstLastPages,t.getPageUrl),P=new i.default(n,a).build(p,c),k=P.first_page;k<=P.last_page;k++)e.push(r.default.createElement(o.default,{isActive:k===c,key:k,href:N(k),pageNumber:k,pageText:k+"",onClick:b,itemClass:m,linkClass:S,activeClass:h,activeLinkClass:O,ariaLabel:"Go to page number ".concat(k)}));return this.isPrevPageVisible(P.has_previous_page)&&e.unshift(r.default.createElement(o.default,{key:"prev"+P.previous_page,href:N(P.previous_page),pageNumber:P.previous_page,onClick:b,pageText:u,isDisabled:!P.has_previous_page,itemClass:(0,s.default)(m,v),linkClass:(0,s.default)(S,C),disabledClass:x,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(P.has_previous_page)&&e.unshift(r.default.createElement(o.default,{key:"first",href:N(1),pageNumber:1,onClick:b,pageText:f,isDisabled:!P.has_previous_page,itemClass:(0,s.default)(m,g),linkClass:(0,s.default)(S,_),disabledClass:x,ariaLabel:"Go to first page"})),this.isNextPageVisible(P.has_next_page)&&e.push(r.default.createElement(o.default,{key:"next"+P.next_page,href:N(P.next_page),pageNumber:P.next_page,onClick:b,pageText:l,isDisabled:!P.has_next_page,itemClass:(0,s.default)(m,y),linkClass:(0,s.default)(S,E),disabledClass:x,ariaLabel:"Go to next page"})),this.isLastPageVisible(P.has_next_page)&&e.push(r.default.createElement(o.default,{key:"last",href:N(P.total_pages),pageNumber:P.total_pages,onClick:b,pageText:d,isDisabled:P.current_page===P.total_pages,itemClass:(0,s.default)(m,j),linkClass:(0,s.default)(S,w),disabledClass:x,ariaLabel:"Go to last page"})),e}},{key:"render",value:function(){var e=this.buildPages();return r.default.createElement("ul",{className:this.props.innerClass},e)}}])&&d(n.prototype,a),c&&d(n,c),t}(r.default.Component);t.default=g,m(g,"propTypes",{totalItemsCount:a.default.number.isRequired,onChange:a.default.func.isRequired,activePage:a.default.number,itemsCountPerPage:a.default.number,pageRangeDisplayed:a.default.number,prevPageText:a.default.oneOfType([a.default.string,a.default.element]),nextPageText:a.default.oneOfType([a.default.string,a.default.element]),lastPageText:a.default.oneOfType([a.default.string,a.default.element]),firstPageText:a.default.oneOfType([a.default.string,a.default.element]),disabledClass:a.default.string,hideDisabled:a.default.bool,hideNavigation:a.default.bool,innerClass:a.default.string,itemClass:a.default.string,itemClassFirst:a.default.string,itemClassPrev:a.default.string,itemClassNext:a.default.string,itemClassLast:a.default.string,linkClass:a.default.string,activeClass:a.default.string,activeLinkClass:a.default.string,linkClassFirst:a.default.string,linkClassPrev:a.default.string,linkClassNext:a.default.string,linkClassLast:a.default.string,hideFirstLastPages:a.default.bool,getPageUrl:a.default.func}),m(g,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}})},57:function(e,t,n){},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(45),n(0);var r=n(54),a=n(46),i=n(47),o=n(3);function s(e){var t=e.children,n=e.title;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{children:Object(o.jsx)("title",{children:n})}),Object(o.jsxs)("div",{className:"outer-container",children:[Object(o.jsx)(a.a,{}),Object(o.jsx)("div",{className:"container-root mainWrap ",children:t}),Object(o.jsx)(i.a,{})]})]})}},87:function(e,t,n){"use strict";e.exports=n(125)}}]);
//# sourceMappingURL=8.09746105.chunk.js.map