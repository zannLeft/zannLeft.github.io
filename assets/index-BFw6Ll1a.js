(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var o0={exports:{}},yu={},a0={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),hy=Symbol.for("react.portal"),py=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),gy=Symbol.for("react.profiler"),vy=Symbol.for("react.provider"),_y=Symbol.for("react.context"),xy=Symbol.for("react.forward_ref"),yy=Symbol.for("react.suspense"),Sy=Symbol.for("react.memo"),Ey=Symbol.for("react.lazy"),rp=Symbol.iterator;function My(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var l0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u0=Object.assign,c0={};function lo(t,e,n){this.props=t,this.context=e,this.refs=c0,this.updater=n||l0}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function d0(){}d0.prototype=lo.prototype;function Af(t,e,n){this.props=t,this.context=e,this.refs=c0,this.updater=n||l0}var Rf=Af.prototype=new d0;Rf.constructor=Af;u0(Rf,lo.prototype);Rf.isPureReactComponent=!0;var sp=Array.isArray,f0=Object.prototype.hasOwnProperty,Pf={current:null},h0={key:!0,ref:!0,__self:!0,__source:!0};function p0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)f0.call(e,i)&&!h0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ea,type:t,key:s,ref:o,props:r,_owner:Pf.current}}function Ty(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function wy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var op=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wy(""+t.key):e.toString(36)}function Cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case hy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ju(o,0):i,sp(r)?(n="",t!=null&&(n=t.replace(op,"$&/")+"/"),Cl(r,e,n,"",function(u){return u})):r!=null&&(Lf(r)&&(r=Ty(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(op,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",sp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ju(s,a);o+=Cl(s,e,n,l,r)}else if(l=My(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ju(s,a++),o+=Cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function La(t,e,n){if(t==null)return t;var i=[],r=0;return Cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function by(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Al={transition:null},Cy={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Al,ReactCurrentOwner:Pf};function m0(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!Lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=lo;He.Fragment=py;He.Profiler=gy;He.PureComponent=Af;He.StrictMode=my;He.Suspense=yy;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;He.act=m0;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=u0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)f0.call(e,l)&&!h0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ea,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:_y,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vy,_context:t},t.Consumer=t};He.createElement=p0;He.createFactory=function(t){var e=p0.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:xy,render:t}};He.isValidElement=Lf;He.lazy=function(t){return{$$typeof:Ey,_payload:{_status:-1,_result:t},_init:by}};He.memo=function(t,e){return{$$typeof:Sy,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};He.unstable_act=m0;He.useCallback=function(t,e){return an.current.useCallback(t,e)};He.useContext=function(t){return an.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return an.current.useDeferredValue(t)};He.useEffect=function(t,e){return an.current.useEffect(t,e)};He.useId=function(){return an.current.useId()};He.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return an.current.useMemo(t,e)};He.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};He.useRef=function(t){return an.current.useRef(t)};He.useState=function(t){return an.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return an.current.useTransition()};He.version="18.3.1";a0.exports=He;var U=a0.exports;const wt=Sa(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=U,Ry=Symbol.for("react.element"),Py=Symbol.for("react.fragment"),Ly=Object.prototype.hasOwnProperty,Dy=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iy={key:!0,ref:!0,__self:!0,__source:!0};function g0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ly.call(e,i)&&!Iy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ry,type:t,key:s,ref:o,props:r,_owner:Dy.current}}yu.Fragment=Py;yu.jsx=g0;yu.jsxs=g0;o0.exports=yu;var P=o0.exports,pd={},v0={exports:{}},Tn={},_0={exports:{}},x0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,X){var V=D.length;D.push(X);e:for(;0<V;){var O=V-1>>>1,B=D[O];if(0<r(B,X))D[O]=X,D[V]=B,V=O;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],V=D.pop();if(V!==X){D[0]=V;e:for(var O=0,B=D.length,ae=B>>>1;O<ae;){var ue=2*(O+1)-1,ce=D[ue],xe=ue+1,we=D[xe];if(0>r(ce,V))xe<B&&0>r(we,ce)?(D[O]=we,D[xe]=V,O=xe):(D[O]=ce,D[ue]=V,O=ue);else if(xe<B&&0>r(we,V))D[O]=we,D[xe]=V,O=xe;else break e}}return X}function r(D,X){var V=D.sortIndex-X.sortIndex;return V!==0?V:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=D)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function y(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,J(T);else{var X=n(u);X!==null&&q(y,X.startTime-D)}}function T(D,X){v=!1,x&&(x=!1,f(L),L=-1),p=!0;var V=d;try{for(g(X),h=n(l);h!==null&&(!(h.expirationTime>X)||D&&!Q());){var O=h.callback;if(typeof O=="function"){h.callback=null,d=h.priorityLevel;var B=O(h.expirationTime<=X);X=t.unstable_now(),typeof B=="function"?h.callback=B:h===n(l)&&i(l),g(X)}else i(l);h=n(l)}if(h!==null)var ae=!0;else{var ue=n(u);ue!==null&&q(y,ue.startTime-X),ae=!1}return ae}finally{h=null,d=V,p=!1}}var w=!1,S=null,L=-1,E=5,b=-1;function Q(){return!(t.unstable_now()-b<E)}function te(){if(S!==null){var D=t.unstable_now();b=D;var X=!0;try{X=S(!0,D)}finally{X?z():(w=!1,S=null)}}else w=!1}var z;if(typeof _=="function")z=function(){_(te)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=te,z=function(){$.postMessage(null)}}else z=function(){m(te,0)};function J(D){S=D,w||(w=!0,z())}function q(D,X){L=m(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,J(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var V=d;d=X;try{return D()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=d;d=D;try{return X()}finally{d=V}},t.unstable_scheduleCallback=function(D,X,V){var O=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?O+V:O):V=O,D){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=V+B,D={id:c++,callback:X,priorityLevel:D,startTime:V,expirationTime:B,sortIndex:-1},V>O?(D.sortIndex=V,e(u,D),n(l)===null&&D===n(u)&&(x?(f(L),L=-1):x=!0,q(y,V-O))):(D.sortIndex=B,e(l,D),v||p||(v=!0,J(T))),D},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(D){var X=d;return function(){var V=d;d=X;try{return D.apply(this,arguments)}finally{d=V}}}})(x0);_0.exports=x0;var Ny=_0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=U,Mn=Ny;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,Jo={};function qr(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(Jo[t]=e,t=0;t<e.length;t++)y0.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=Object.prototype.hasOwnProperty,Oy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ap={},lp={};function Fy(t){return md.call(lp,t)?!0:md.call(ap,t)?!1:Oy.test(t)?lp[t]=!0:(ap[t]=!0,!1)}function ky(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function By(t,e,n,i){if(e===null||typeof e>"u"||ky(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Df=/[\-:]([a-z])/g;function If(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Df,If);Gt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Df,If);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Df,If);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(By(e,n,r,i)&&(n=null),i||r===null?Fy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),Uf=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),vd=Symbol.for("react.suspense"),_d=Symbol.for("react.suspense_list"),Ff=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),M0=Symbol.for("react.offscreen"),up=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,ec;function Uo(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function zy(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case bs:return"Portal";case gd:return"Profiler";case Uf:return"StrictMode";case vd:return"Suspense";case _d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E0:return(t.displayName||"Context")+".Consumer";case S0:return(t._context.displayName||"Context")+".Provider";case Of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ff:return e=t.displayName||null,e!==null?e:xd(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return xd(t(e))}catch{}}return null}function Hy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xd(e);case 8:return e===Uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function T0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vy(t){var e=T0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ia(t){t._valueTracker||(t._valueTracker=Vy(t))}function w0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=T0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yd(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function b0(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function Sd(t,e){b0(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ed(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ed(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function Hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Oo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function C0(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,R0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gy=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){Gy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function P0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function L0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=P0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Wy=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wd(t,e){if(e){if(Wy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=null;function kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ad=null,Vs=null,Gs=null;function pp(t){if(t=wa(t)){if(typeof Ad!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=wu(e),Ad(t.stateNode,t.type,e))}}function D0(t){Vs?Gs?Gs.push(t):Gs=[t]:Vs=t}function I0(){if(Vs){var t=Vs,e=Gs;if(Gs=Vs=null,pp(t),e)for(t=0;t<e.length;t++)pp(e[t])}}function N0(t,e){return t(e)}function U0(){}var ic=!1;function O0(t,e,n){if(ic)return t(e,n);ic=!0;try{return N0(t,e,n)}finally{ic=!1,(Vs!==null||Gs!==null)&&(U0(),I0())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var i=wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Rd=!1;if(Ni)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Rd=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Rd=!1}function jy(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vo=!1,Vl=null,Gl=!1,Pd=null,Xy={onError:function(t){Vo=!0,Vl=t}};function $y(t,e,n,i,r,s,o,a,l){Vo=!1,Vl=null,jy.apply(Xy,arguments)}function Yy(t,e,n,i,r,s,o,a,l){if($y.apply(this,arguments),Vo){if(Vo){var u=Vl;Vo=!1,Vl=null}else throw Error(ie(198));Gl||(Gl=!0,Pd=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function F0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mp(t){if(Kr(t)!==t)throw Error(ie(188))}function qy(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mp(r),t;if(s===i)return mp(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function k0(t){return t=qy(t),t!==null?B0(t):null}function B0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=B0(t);if(e!==null)return e;t=t.sibling}return null}var z0=Mn.unstable_scheduleCallback,gp=Mn.unstable_cancelCallback,Ky=Mn.unstable_shouldYield,Zy=Mn.unstable_requestPaint,xt=Mn.unstable_now,Qy=Mn.unstable_getCurrentPriorityLevel,Bf=Mn.unstable_ImmediatePriority,H0=Mn.unstable_UserBlockingPriority,Wl=Mn.unstable_NormalPriority,Jy=Mn.unstable_LowPriority,V0=Mn.unstable_IdlePriority,Su=null,ci=null;function e1(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(Su,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:i1,t1=Math.log,n1=Math.LN2;function i1(t){return t>>>=0,t===0?32:31-(t1(t)/n1|0)|0}var Ua=64,Oa=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fo(a):(s&=o,s!==0&&(i=Fo(s)))}else o=n&~r,o!==0?i=Fo(o):s!==0&&(i=Fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function r1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=r1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G0(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function o1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function W0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j0,Hf,X0,$0,Y0,Dd=!1,Fa=[],sr=null,or=null,ar=null,na=new Map,ia=new Map,Ji=[],a1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function _o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function l1(t,e,n,i,r){switch(e){case"focusin":return sr=_o(sr,t,e,n,i,r),!0;case"dragenter":return or=_o(or,t,e,n,i,r),!0;case"mouseover":return ar=_o(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return na.set(s,_o(na.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ia.set(s,_o(ia.get(s)||null,t,e,n,i,r)),!0}return!1}function q0(t){var e=Ir(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=F0(n),e!==null){t.blockedOn=e,Y0(t.priority,function(){X0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cd=i,n.target.dispatchEvent(i),Cd=null}else return e=wa(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function _p(t,e,n){Rl(t)&&n.delete(e)}function u1(){Dd=!1,sr!==null&&Rl(sr)&&(sr=null),or!==null&&Rl(or)&&(or=null),ar!==null&&Rl(ar)&&(ar=null),na.forEach(_p),ia.forEach(_p)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,u1)))}function ra(t){function e(r){return xo(r,t)}if(0<Fa.length){xo(Fa[0],t);for(var n=1;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&xo(sr,t),or!==null&&xo(or,t),ar!==null&&xo(ar,t),na.forEach(e),ia.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)q0(n),n.blockedOn===null&&Ji.shift()}var Ws=zi.ReactCurrentBatchConfig,Xl=!0;function c1(t,e,n,i){var r=qe,s=Ws.transition;Ws.transition=null;try{qe=1,Vf(t,e,n,i)}finally{qe=r,Ws.transition=s}}function d1(t,e,n,i){var r=qe,s=Ws.transition;Ws.transition=null;try{qe=4,Vf(t,e,n,i)}finally{qe=r,Ws.transition=s}}function Vf(t,e,n,i){if(Xl){var r=Id(t,e,n,i);if(r===null)pc(t,e,i,$l,n),vp(t,i);else if(l1(r,t,e,n,i))i.stopPropagation();else if(vp(t,i),e&4&&-1<a1.indexOf(t)){for(;r!==null;){var s=wa(r);if(s!==null&&j0(s),s=Id(t,e,n,i),s===null&&pc(t,e,i,$l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pc(t,e,i,null,n)}}var $l=null;function Id(t,e,n,i){if($l=null,t=kf(i),t=Ir(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=F0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $l=t,null}function K0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qy()){case Bf:return 1;case H0:return 4;case Wl:case Jy:return 16;case V0:return 536870912;default:return 16}default:return 16}}var nr=null,Gf=null,Pl=null;function Z0(){if(Pl)return Pl;var t,e=Gf,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function xp(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:xp,this.isPropagationStopped=xp,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wf=wn(uo),Ta=dt({},uo,{view:0,detail:0}),f1=wn(Ta),sc,oc,yo,Eu=dt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(sc=t.screenX-yo.screenX,oc=t.screenY-yo.screenY):oc=sc=0,yo=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),yp=wn(Eu),h1=dt({},Eu,{dataTransfer:0}),p1=wn(h1),m1=dt({},Ta,{relatedTarget:0}),ac=wn(m1),g1=dt({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),v1=wn(g1),_1=dt({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x1=wn(_1),y1=dt({},uo,{data:0}),Sp=wn(y1),S1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M1[t])?!!e[t]:!1}function jf(){return T1}var w1=dt({},Ta,{key:function(t){if(t.key){var e=S1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b1=wn(w1),C1=dt({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=wn(C1),A1=dt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),R1=wn(A1),P1=dt({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=wn(P1),D1=dt({},Eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I1=wn(D1),N1=[9,13,27,32],Xf=Ni&&"CompositionEvent"in window,Go=null;Ni&&"documentMode"in document&&(Go=document.documentMode);var U1=Ni&&"TextEvent"in window&&!Go,Q0=Ni&&(!Xf||Go&&8<Go&&11>=Go),Mp=" ",Tp=!1;function J0(t,e){switch(t){case"keyup":return N1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function O1(t,e){switch(t){case"compositionend":return ev(e);case"keypress":return e.which!==32?null:(Tp=!0,Mp);case"textInput":return t=e.data,t===Mp&&Tp?null:t;default:return null}}function F1(t,e){if(As)return t==="compositionend"||!Xf&&J0(t,e)?(t=Z0(),Pl=Gf=nr=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var k1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k1[t.type]:e==="textarea"}function tv(t,e,n,i){D0(i),e=Yl(e,"onChange"),0<e.length&&(n=new Wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wo=null,sa=null;function B1(t){fv(t,0)}function Mu(t){var e=Ls(t);if(w0(e))return t}function z1(t,e){if(t==="change")return e}var nv=!1;if(Ni){var lc;if(Ni){var uc="oninput"in document;if(!uc){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),uc=typeof bp.oninput=="function"}lc=uc}else lc=!1;nv=lc&&(!document.documentMode||9<document.documentMode)}function Cp(){Wo&&(Wo.detachEvent("onpropertychange",iv),sa=Wo=null)}function iv(t){if(t.propertyName==="value"&&Mu(sa)){var e=[];tv(e,sa,t,kf(t)),O0(B1,e)}}function H1(t,e,n){t==="focusin"?(Cp(),Wo=e,sa=n,Wo.attachEvent("onpropertychange",iv)):t==="focusout"&&Cp()}function V1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(sa)}function G1(t,e){if(t==="click")return Mu(e)}function W1(t,e){if(t==="input"||t==="change")return Mu(e)}function j1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:j1;function oa(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!md.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,e){var n=Ap(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ap(n)}}function rv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sv(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X1(t){var e=sv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rv(n.ownerDocument.documentElement,n)){if(i!==null&&$f(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rp(n,s);var o=Rp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $1=Ni&&"documentMode"in document&&11>=document.documentMode,Rs=null,Nd=null,jo=null,Ud=!1;function Pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ud||Rs==null||Rs!==Hl(i)||(i=Rs,"selectionStart"in i&&$f(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&oa(jo,i)||(jo=i,i=Yl(Nd,"onSelect"),0<i.length&&(e=new Wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function Ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},cc={},ov={};Ni&&(ov=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Tu(t){if(cc[t])return cc[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ov)return cc[t]=e[n];return t}var av=Tu("animationend"),lv=Tu("animationiteration"),uv=Tu("animationstart"),cv=Tu("transitionend"),dv=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){dv.set(t,e),qr(e,[t])}for(var dc=0;dc<Lp.length;dc++){var fc=Lp[dc],Y1=fc.toLowerCase(),q1=fc[0].toUpperCase()+fc.slice(1);vr(Y1,"on"+q1)}vr(av,"onAnimationEnd");vr(lv,"onAnimationIteration");vr(uv,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(cv,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yy(i,e,void 0,t),t.currentTarget=null}function fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,u),s=l}}}if(Gl)throw t=Pd,Gl=!1,Pd=null,t}function tt(t,e){var n=e[zd];n===void 0&&(n=e[zd]=new Set);var i=t+"__bubble";n.has(i)||(hv(e,t,2,!1),n.add(i))}function hc(t,e,n){var i=0;e&&(i|=4),hv(n,t,i,e)}var za="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[za]){t[za]=!0,y0.forEach(function(n){n!=="selectionchange"&&(K1.has(n)||hc(n,!1,t),hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[za]||(e[za]=!0,hc("selectionchange",!1,e))}}function hv(t,e,n,i){switch(K0(e)){case 1:var r=c1;break;case 4:r=d1;break;default:r=Vf}n=r.bind(null,e,n,t),r=void 0,!Rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}O0(function(){var u=s,c=kf(n),h=[];e:{var d=dv.get(t);if(d!==void 0){var p=Wf,v=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":p=b1;break;case"focusin":v="focus",p=ac;break;case"focusout":v="blur",p=ac;break;case"beforeblur":case"afterblur":p=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=R1;break;case av:case lv:case uv:p=v1;break;case cv:p=L1;break;case"scroll":p=f1;break;case"wheel":p=I1;break;case"copy":case"cut":case"paste":p=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ep}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var _=u,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,f!==null&&(y=ta(_,f),y!=null&&x.push(la(_,y,g)))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Cd&&(v=n.relatedTarget||n.fromElement)&&(Ir(v)||v[Ui]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Ir(v):null,v!==null&&(m=Kr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=yp,y="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ep,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?d:Ls(p),g=v==null?d:Ls(v),d=new x(y,_+"leave",p,n,c),d.target=m,d.relatedTarget=g,y=null,Ir(c)===u&&(x=new x(f,_+"enter",v,n,c),x.target=g,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,f=v,_=0,g=x;g;g=es(g))_++;for(g=0,y=f;y;y=es(y))g++;for(;0<_-g;)x=es(x),_--;for(;0<g-_;)f=es(f),g--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=es(x),f=es(f)}x=null}else x=null;p!==null&&Ip(h,d,p,x,!1),v!==null&&m!==null&&Ip(h,m,v,x,!0)}}e:{if(d=u?Ls(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=z1;else if(wp(d))if(nv)T=W1;else{T=V1;var w=H1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=G1);if(T&&(T=T(t,u))){tv(h,T,n,c);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Ed(d,"number",d.value)}switch(w=u?Ls(u):window,t){case"focusin":(wp(w)||w.contentEditable==="true")&&(Rs=w,Nd=u,jo=null);break;case"focusout":jo=Nd=Rs=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,Pp(h,n,c);break;case"selectionchange":if($1)break;case"keydown":case"keyup":Pp(h,n,c)}var S;if(Xf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else As?J0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Q0&&n.locale!=="ko"&&(As||L!=="onCompositionStart"?L==="onCompositionEnd"&&As&&(S=Z0()):(nr=c,Gf="value"in nr?nr.value:nr.textContent,As=!0)),w=Yl(u,L),0<w.length&&(L=new Sp(L,t,null,n,c),h.push({event:L,listeners:w}),S?L.data=S:(S=ev(n),S!==null&&(L.data=S)))),(S=U1?O1(t,n):F1(t,n))&&(u=Yl(u,"onBeforeInput"),0<u.length&&(c=new Sp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=S))}fv(h,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ta(t,n),s!=null&&i.unshift(la(t,s,r)),s=ta(t,e),s!=null&&i.push(la(t,s,r))),t=t.return}return i}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ta(n,s),l!=null&&o.unshift(la(n,l,a))):r||(l=ta(n,s),l!=null&&o.push(la(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Z1=/\r\n?/g,Q1=/\u0000|\uFFFD/g;function Np(t){return(typeof t=="string"?t:""+t).replace(Z1,`
`).replace(Q1,"")}function Ha(t,e,n){if(e=Np(e),Np(t)!==e&&n)throw Error(ie(425))}function ql(){}var Od=null,Fd=null;function kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bd=typeof setTimeout=="function"?setTimeout:void 0,J1=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(t){return Up.resolve(null).then(t).catch(tS)}:Bd;function tS(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ra(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),ai="__reactFiber$"+co,ua="__reactProps$"+co,Ui="__reactContainer$"+co,zd="__reactEvents$"+co,nS="__reactListeners$"+co,iS="__reactHandles$"+co;function Ir(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Op(t);t!==null;){if(n=t[ai])return n;t=Op(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[ai]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function wu(t){return t[ua]||null}var Hd=[],Ds=-1;function _r(t){return{current:t}}function nt(t){0>Ds||(t.current=Hd[Ds],Hd[Ds]=null,Ds--)}function Je(t,e){Ds++,Hd[Ds]=t.current,t.current=e}var gr={},Jt=_r(gr),dn=_r(!1),Vr=gr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Kl(){nt(dn),nt(Jt)}function Fp(t,e,n){if(Jt.current!==gr)throw Error(ie(168));Je(Jt,e),Je(dn,n)}function pv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Hy(t)||"Unknown",r));return dt({},n,i)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Vr=Jt.current,Je(Jt,t),Je(dn,dn.current),!0}function kp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=pv(t,e,Vr),i.__reactInternalMemoizedMergedChildContext=t,nt(dn),nt(Jt),Je(Jt,t)):nt(dn),Je(dn,n)}var Mi=null,bu=!1,gc=!1;function mv(t){Mi===null?Mi=[t]:Mi.push(t)}function rS(t){bu=!0,mv(t)}function xr(){if(!gc&&Mi!==null){gc=!0;var t=0,e=qe;try{var n=Mi;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,bu=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),z0(Bf,xr),r}finally{qe=e,gc=!1}}return null}var Is=[],Ns=0,Ql=null,Jl=0,Pn=[],Ln=0,Gr=null,wi=1,bi="";function Ar(t,e){Is[Ns++]=Jl,Is[Ns++]=Ql,Ql=t,Jl=e}function gv(t,e,n){Pn[Ln++]=wi,Pn[Ln++]=bi,Pn[Ln++]=Gr,Gr=t;var i=wi;t=bi;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Qn(e)+r|n<<r|i,bi=s+t}else wi=1<<s|n<<r|i,bi=t}function Yf(t){t.return!==null&&(Ar(t,1),gv(t,1,0))}function qf(t){for(;t===Ql;)Ql=Is[--Ns],Is[Ns]=null,Jl=Is[--Ns],Is[Ns]=null;for(;t===Gr;)Gr=Pn[--Ln],Pn[Ln]=null,bi=Pn[--Ln],Pn[Ln]=null,wi=Pn[--Ln],Pn[Ln]=null}var En=null,Sn=null,rt=!1,Yn=null;function vv(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Sn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:wi,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Sn=null,!0):!1;default:return!1}}function Vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gd(t){if(rt){var e=Sn;if(e){var n=e;if(!Bp(t,e)){if(Vd(t))throw Error(ie(418));e=lr(n.nextSibling);var i=En;e&&Bp(t,e)?vv(i,n):(t.flags=t.flags&-4097|2,rt=!1,En=t)}}else{if(Vd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,rt=!1,En=t}}}function zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Va(t){if(t!==En)return!1;if(!rt)return zp(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kd(t.type,t.memoizedProps)),e&&(e=Sn)){if(Vd(t))throw _v(),Error(ie(418));for(;e;)vv(t,e),e=lr(e.nextSibling)}if(zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=En?lr(t.stateNode.nextSibling):null;return!0}function _v(){for(var t=Sn;t;)t=lr(t.nextSibling)}function Qs(){Sn=En=null,rt=!1}function Kf(t){Yn===null?Yn=[t]:Yn.push(t)}var sS=zi.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ga(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hp(t){var e=t._init;return e(t._payload)}function xv(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=fr(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,y){return _===null||_.tag!==6?(_=Mc(g,f.mode,y),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,y){var T=g.type;return T===Cs?c(f,_,g.props.children,y,g.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qi&&Hp(T)===_.type)?(y=r(_,g.props),y.ref=So(f,_,g),y.return=f,y):(y=kl(g.type,g.key,g.props,null,f.mode,y),y.ref=So(f,_,g),y.return=f,y)}function u(f,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Tc(g,f.mode,y),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function c(f,_,g,y,T){return _===null||_.tag!==7?(_=Fr(g,f.mode,y,T),_.return=f,_):(_=r(_,g),_.return=f,_)}function h(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Mc(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Da:return g=kl(_.type,_.key,_.props,null,f.mode,g),g.ref=So(f,null,_),g.return=f,g;case bs:return _=Tc(_,f.mode,g),_.return=f,_;case qi:var y=_._init;return h(f,y(_._payload),g)}if(Oo(_)||go(_))return _=Fr(_,f.mode,g,null),_.return=f,_;Ga(f,_)}return null}function d(f,_,g,y){var T=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(f,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Da:return g.key===T?l(f,_,g,y):null;case bs:return g.key===T?u(f,_,g,y):null;case qi:return T=g._init,d(f,_,T(g._payload),y)}if(Oo(g)||go(g))return T!==null?null:c(f,_,g,y,null);Ga(f,g)}return null}function p(f,_,g,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(g)||null,a(_,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return f=f.get(y.key===null?g:y.key)||null,l(_,f,y,T);case bs:return f=f.get(y.key===null?g:y.key)||null,u(_,f,y,T);case qi:var w=y._init;return p(f,_,g,w(y._payload),T)}if(Oo(y)||go(y))return f=f.get(g)||null,c(_,f,y,T,null);Ga(_,y)}return null}function v(f,_,g,y){for(var T=null,w=null,S=_,L=_=0,E=null;S!==null&&L<g.length;L++){S.index>L?(E=S,S=null):E=S.sibling;var b=d(f,S,g[L],y);if(b===null){S===null&&(S=E);break}t&&S&&b.alternate===null&&e(f,S),_=s(b,_,L),w===null?T=b:w.sibling=b,w=b,S=E}if(L===g.length)return n(f,S),rt&&Ar(f,L),T;if(S===null){for(;L<g.length;L++)S=h(f,g[L],y),S!==null&&(_=s(S,_,L),w===null?T=S:w.sibling=S,w=S);return rt&&Ar(f,L),T}for(S=i(f,S);L<g.length;L++)E=p(S,f,L,g[L],y),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?L:E.key),_=s(E,_,L),w===null?T=E:w.sibling=E,w=E);return t&&S.forEach(function(Q){return e(f,Q)}),rt&&Ar(f,L),T}function x(f,_,g,y){var T=go(g);if(typeof T!="function")throw Error(ie(150));if(g=T.call(g),g==null)throw Error(ie(151));for(var w=T=null,S=_,L=_=0,E=null,b=g.next();S!==null&&!b.done;L++,b=g.next()){S.index>L?(E=S,S=null):E=S.sibling;var Q=d(f,S,b.value,y);if(Q===null){S===null&&(S=E);break}t&&S&&Q.alternate===null&&e(f,S),_=s(Q,_,L),w===null?T=Q:w.sibling=Q,w=Q,S=E}if(b.done)return n(f,S),rt&&Ar(f,L),T;if(S===null){for(;!b.done;L++,b=g.next())b=h(f,b.value,y),b!==null&&(_=s(b,_,L),w===null?T=b:w.sibling=b,w=b);return rt&&Ar(f,L),T}for(S=i(f,S);!b.done;L++,b=g.next())b=p(S,f,L,b.value,y),b!==null&&(t&&b.alternate!==null&&S.delete(b.key===null?L:b.key),_=s(b,_,L),w===null?T=b:w.sibling=b,w=b);return t&&S.forEach(function(te){return e(f,te)}),rt&&Ar(f,L),T}function m(f,_,g,y){if(typeof g=="object"&&g!==null&&g.type===Cs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Da:e:{for(var T=g.key,w=_;w!==null;){if(w.key===T){if(T=g.type,T===Cs){if(w.tag===7){n(f,w.sibling),_=r(w,g.props.children),_.return=f,f=_;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qi&&Hp(T)===w.type){n(f,w.sibling),_=r(w,g.props),_.ref=So(f,w,g),_.return=f,f=_;break e}n(f,w);break}else e(f,w);w=w.sibling}g.type===Cs?(_=Fr(g.props.children,f.mode,y,g.key),_.return=f,f=_):(y=kl(g.type,g.key,g.props,null,f.mode,y),y.ref=So(f,_,g),y.return=f,f=y)}return o(f);case bs:e:{for(w=g.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Tc(g,f.mode,y),_.return=f,f=_}return o(f);case qi:return w=g._init,m(f,_,w(g._payload),y)}if(Oo(g))return v(f,_,g,y);if(go(g))return x(f,_,g,y);Ga(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=Mc(g,f.mode,y),_.return=f,f=_),o(f)):n(f,_)}return m}var Js=xv(!0),yv=xv(!1),eu=_r(null),tu=null,Us=null,Zf=null;function Qf(){Zf=Us=tu=null}function Jf(t){var e=eu.current;nt(eu),t._currentValue=e}function Wd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){tu=t,Zf=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(Zf!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(tu===null)throw Error(ie(308));Us=t,tu.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Nr=null;function eh(t){Nr===null?Nr=[t]:Nr.push(t)}function Sv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,eh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ev(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zf(t,n)}}function Vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=dt({},h,d);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=h}}function Gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ba={},di=_r(ba),ca=_r(ba),da=_r(ba);function Ur(t){if(t===ba)throw Error(ie(174));return t}function nh(t,e){switch(Je(da,e),Je(ca,t),Je(di,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}nt(di),Je(di,e)}function eo(){nt(di),nt(ca),nt(da)}function Mv(t){Ur(da.current);var e=Ur(di.current),n=Td(e,t.type);e!==n&&(Je(ca,t),Je(di,n))}function ih(t){ca.current===t&&(nt(di),nt(ca))}var at=_r(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function rh(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Il=zi.ReactCurrentDispatcher,_c=zi.ReactCurrentBatchConfig,Wr=0,ct=null,At=null,Ut=null,ru=!1,Xo=!1,fa=0,oS=0;function Wt(){throw Error(ie(321))}function sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function oh(t,e,n,i,r,s){if(Wr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?cS:dS,t=n(i,r),Xo){s=0;do{if(Xo=!1,fa=0,25<=s)throw Error(ie(301));s+=1,Ut=At=null,e.updateQueue=null,Il.current=fS,t=n(i,r)}while(Xo)}if(Il.current=su,e=At!==null&&At.next!==null,Wr=0,Ut=At=ct=null,ru=!1,e)throw Error(ie(300));return t}function ah(){var t=fa!==0;return fa=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ct.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Bn(){if(At===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Ut===null?ct.memoizedState:Ut.next;if(e!==null)Ut=e,At=t;else{if(t===null)throw Error(ie(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Ut===null?ct.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ha(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ct.lanes|=c,jr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Tv(){}function wv(t,e){var n=ct,i=Bn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,lh(Av.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,pa(9,Cv.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ie(349));Wr&30||bv(n,e,r)}return r}function bv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cv(t,e,n,i){e.value=n,e.getSnapshot=i,Rv(e)&&Pv(t)}function Av(t,e,n){return n(function(){Rv(e)&&Pv(t)})}function Rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function Pv(t){var e=Oi(t,1);e!==null&&Jn(e,t,1,-1)}function Wp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=uS.bind(null,ct,t),[e.memoizedState,t]}function pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Lv(){return Bn().memoizedState}function Nl(t,e,n,i){var r=si();ct.flags|=t,r.memoizedState=pa(1|e,n,void 0,i===void 0?null:i)}function Cu(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&sh(i,o.deps)){r.memoizedState=pa(e,n,s,i);return}}ct.flags|=t,r.memoizedState=pa(1|e,n,s,i)}function jp(t,e){return Nl(8390656,8,t,e)}function lh(t,e){return Cu(2048,8,t,e)}function Dv(t,e){return Cu(4,2,t,e)}function Iv(t,e){return Cu(4,4,t,e)}function Nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uv(t,e,n){return n=n!=null?n.concat([t]):null,Cu(4,4,Nv.bind(null,e,t),n)}function uh(){}function Ov(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function kv(t,e,n){return Wr&21?(ti(n,e)||(n=G0(),ct.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function aS(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=_c.transition;_c.transition={};try{t(!1),e()}finally{qe=n,_c.transition=i}}function Bv(){return Bn().memoizedState}function lS(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},zv(t))Hv(e,n);else if(n=Sv(t,e,n,i),n!==null){var r=on();Jn(n,t,i,r),Vv(n,e,i)}}function uS(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(zv(t))Hv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Sv(t,e,r,i),n!==null&&(r=on(),Jn(n,t,i,r),Vv(n,e,i))}}function zv(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Hv(t,e){Xo=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zf(t,n)}}var su={readContext:kn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},cS={readContext:kn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,Nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=lS.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:Wp,useDebugValue:uh,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Wp(!1),e=t[0];return t=aS.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=si();if(rt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ot===null)throw Error(ie(349));Wr&30||bv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jp(Av.bind(null,i,s,t),[t]),i.flags|=2048,pa(9,Cv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Ot.identifierPrefix;if(rt){var n=bi,i=wi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dS={readContext:kn,useCallback:Ov,useContext:kn,useEffect:lh,useImperativeHandle:Uv,useInsertionEffect:Dv,useLayoutEffect:Iv,useMemo:Fv,useReducer:xc,useRef:Lv,useState:function(){return xc(ha)},useDebugValue:uh,useDeferredValue:function(t){var e=Bn();return kv(e,At.memoizedState,t)},useTransition:function(){var t=xc(ha)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Tv,useSyncExternalStore:wv,useId:Bv,unstable_isNewReconciler:!1},fS={readContext:kn,useCallback:Ov,useContext:kn,useEffect:lh,useImperativeHandle:Uv,useInsertionEffect:Dv,useLayoutEffect:Iv,useMemo:Fv,useReducer:yc,useRef:Lv,useState:function(){return yc(ha)},useDebugValue:uh,useDeferredValue:function(t){var e=Bn();return At===null?e.memoizedState=t:kv(e,At.memoizedState,t)},useTransition:function(){var t=yc(ha)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Tv,useSyncExternalStore:wv,useId:Bv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=dr(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(Jn(e,t,r,i),Dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=dr(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(Jn(e,t,r,i),Dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=dr(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(Jn(e,t,i,n),Dl(e,t,i))}};function Xp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,i)||!oa(r,s):!0}function Gv(t,e,n){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=fn(e)?Vr:Jt.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function Xd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},th(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=fn(e)?Vr:Jt.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Au.enqueueReplaceState(r,r.state,null),nu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function to(t,e){try{var n="",i=e;do n+=zy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hS=typeof WeakMap=="function"?WeakMap:Map;function Wv(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){au||(au=!0,rf=i),$d(t,e)},n}function jv(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$d(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=CS.bind(null,t,e,n),e.then(t,t))}function qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var pS=zi.ReactCurrentOwner,cn=!1;function sn(t,e,n,i){e.child=t===null?yv(e,null,n,i):Js(e,t.child,n,i)}function Zp(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=oh(t,e,n,i,s,r),n=ah(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(rt&&n&&Yf(e),e.flags|=1,sn(t,e,i,r),e.child)}function Qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xv(t,e,s,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Xv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(oa(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return Yd(t,e,n,i,r)}function $v(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(Fs,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je(Fs,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Je(Fs,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Je(Fs,xn),xn|=i;return sn(t,e,r,n),e.child}function Yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yd(t,e,n,i,r){var s=fn(n)?Vr:Jt.current;return s=Zs(e,s),js(e,r),n=oh(t,e,n,i,s,r),i=ah(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(rt&&i&&Yf(e),e.flags|=1,sn(t,e,n,r),e.child)}function Jp(t,e,n,i,r){if(fn(n)){var s=!0;Zl(e)}else s=!1;if(js(e,r),e.stateNode===null)Ul(t,e),Gv(e,n,i),Xd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kn(u):(u=fn(n)?Vr:Jt.current,u=Zs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&$p(e,o,i,u),Ki=!1;var d=e.memoizedState;o.state=d,nu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||dn.current||Ki?(typeof c=="function"&&(jd(e,n,c,i),l=e.memoizedState),(a=Ki||Xp(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ev(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:jn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=fn(n)?Vr:Jt.current,l=Zs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&$p(e,o,i,l),Ki=!1,d=e.memoizedState,o.state=d,nu(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||dn.current||Ki?(typeof p=="function"&&(jd(e,n,p,i),v=e.memoizedState),(u=Ki||Xp(e,n,u,i,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return qd(t,e,n,i,s,r)}function qd(t,e,n,i,r,s){Yv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&kp(e,n,!1),Fi(t,e,s);i=e.stateNode,pS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&kp(e,n,!0),e.child}function qv(t){var e=t.stateNode;e.pendingContext?Fp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fp(t,e.context,!1),nh(t,e.containerInfo)}function em(t,e,n,i,r){return Qs(),Kf(r),e.flags|=256,sn(t,e,n,i),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kv(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Je(at,r&1),t===null)return Gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lu(o,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zd(n),e.memoizedState=Kd,t):ch(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return mS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kd,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ch(t,e){return e=Lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,i){return i!==null&&Kf(i),Js(e,t.child,null,n),t=ch(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Sc(Error(ie(422))),Wa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lu({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=Zd(o),e.memoizedState=Kd,s);if(!(e.mode&1))return Wa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Sc(s,i,void 0),Wa(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),Jn(i,t,r,-1))}return gh(),i=Sc(Error(ie(421))),Wa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=AS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=lr(r.nextSibling),En=e,rt=!0,Yn=null,t!==null&&(Pn[Ln++]=wi,Pn[Ln++]=bi,Pn[Ln++]=Gr,wi=t.id,bi=t.overflow,Gr=e),e=ch(e,i.children),e.flags|=4096,e)}function tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wd(t.return,e,n)}function Ec(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Zv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tm(t,n,e);else if(t.tag===19)tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Je(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ec(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&iu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ec(e,!0,n,null,s);break;case"together":Ec(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gS(t,e,n){switch(e.tag){case 3:qv(e),Qs();break;case 5:Mv(e);break;case 1:fn(e.type)&&Zl(e);break;case 4:nh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(eu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?Kv(t,e,n):(Je(at,at.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);Je(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Zv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,$v(t,e,n)}return Fi(t,e,n)}var Qv,Qd,Jv,e_;Qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qd=function(){};Jv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(di.current);var s=null;switch(n){case"input":r=yd(t,r),i=yd(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=Md(t,r),i=Md(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ql)}wd(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};e_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vS(t,e,n){var i=e.pendingProps;switch(qf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return fn(e.type)&&Kl(),jt(e),null;case 3:return i=e.stateNode,eo(),nt(dn),nt(Jt),rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(af(Yn),Yn=null))),Qd(t,e),jt(e),null;case 5:ih(e);var r=Ur(da.current);if(n=e.type,t!==null&&e.stateNode!=null)Jv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return jt(e),null}if(t=Ur(di.current),Va(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[ua]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)tt(ko[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":cp(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":fp(i,s),tt("invalid",i)}wd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":Ia(i),dp(i,s,!0);break;case"textarea":Ia(i),hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[ua]=i,Qv(t,e,!1,!1),e.stateNode=t;e:{switch(o=bd(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)tt(ko[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":cp(t,i),r=yd(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),tt("invalid",t);break;case"textarea":fp(t,i),r=Md(t,i),tt("invalid",t);break;default:r=i}wd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?L0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&R0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ea(t,l):typeof l=="number"&&ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&Nf(t,s,l,o))}switch(n){case"input":Ia(t),dp(t,i,!1);break;case"textarea":Ia(t),hp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)e_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Ur(da.current),Ur(di.current),Va(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return jt(e),null;case 13:if(nt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&Sn!==null&&e.mode&1&&!(e.flags&128))_v(),Qs(),e.flags|=98560,s=!1;else if(s=Va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ai]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Yn!==null&&(af(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?Rt===0&&(Rt=3):gh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return eo(),Qd(t,e),t===null&&aa(e.stateNode.containerInfo),jt(e),null;case 10:return Jf(e.type._context),jt(e),null;case 17:return fn(e.type)&&Kl(),jt(e),null;case 19:if(nt(at),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>no&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=iu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return jt(e),null}else 2*xt()-s.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=at.current,Je(at,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return mh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function _S(t,e){switch(qf(e),e.tag){case 1:return fn(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),nt(dn),nt(Jt),rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ih(e),null;case 13:if(nt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(at),null;case 4:return eo(),null;case 10:return Jf(e.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var ja=!1,qt=!1,xS=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Jd(t,e,n){try{n()}catch(i){pt(t,e,i)}}var nm=!1;function yS(t,e){if(Od=Xl,t=sv(),$f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fd={focusedElem:t,selectionRange:n},Xl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:jn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){pt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return v=nm,nm=!1,v}function $o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jd(e,n,s)}r=r.next}while(r!==i)}}function Ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t_(t){var e=t.alternate;e!==null&&(t.alternate=null,t_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[ua],delete e[zd],delete e[nS],delete e[iS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n_(t){return t.tag===5||t.tag===3||t.tag===4}function im(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(i!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}function nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}var Bt=null,Xn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)i_(t,e,n),n=n.sibling}function i_(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(Su,n)}catch{}switch(n.tag){case 5:qt||Os(n,e);case 6:var i=Bt,r=Xn;Bt=null,Gi(t,e,n),Bt=i,Xn=r,Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),ra(t)):mc(Bt,n.stateNode));break;case 4:i=Bt,r=Xn,Bt=n.stateNode.containerInfo,Xn=!0,Gi(t,e,n),Bt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jd(n,e,o),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!qt&&(Os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Gi(t,e,n),qt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xS),e.forEach(function(i){var r=RS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Xn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Xn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Bt===null)throw Error(ie(160));i_(s,o,r),Bt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r_(e,t),e=e.sibling}function r_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ii(t),i&4){try{$o(3,t,t.return),Ru(3,t)}catch(x){pt(t,t.return,x)}try{$o(5,t,t.return)}catch(x){pt(t,t.return,x)}}break;case 1:zn(e,t),ii(t),i&512&&n!==null&&Os(n,n.return);break;case 5:if(zn(e,t),ii(t),i&512&&n!==null&&Os(n,n.return),t.flags&32){var r=t.stateNode;try{ea(r,"")}catch(x){pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&b0(r,s),bd(a,o);var u=bd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?L0(r,h):c==="dangerouslySetInnerHTML"?R0(r,h):c==="children"?ea(r,h):Nf(r,c,h,u)}switch(a){case"input":Sd(r,s);break;case"textarea":C0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Hs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Hs(r,!!s.multiple,s.defaultValue,!0):Hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ua]=s}catch(x){pt(t,t.return,x)}}break;case 6:if(zn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){pt(t,t.return,x)}}break;case 3:if(zn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(x){pt(t,t.return,x)}break;case 4:zn(e,t),ii(t);break;case 13:zn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hh=xt())),i&4&&rm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(u=qt)||c,zn(e,t),qt=u):zn(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ve=t,c=t.child;c!==null;){for(h=ve=c;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:$o(4,d,d.return);break;case 1:Os(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){pt(i,n,x)}}break;case 5:Os(d,d.return);break;case 22:if(d.memoizedState!==null){om(h);continue}}p!==null?(p.return=d,ve=p):om(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=P0("display",o))}catch(x){pt(t,t.return,x)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){pt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zn(e,t),ii(t),i&4&&rm(t);break;case 21:break;default:zn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ea(r,""),i.flags&=-33);var s=im(t);nf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=im(t);tf(t,a,o);break;default:throw Error(ie(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SS(t,e,n){ve=t,s_(t)}function s_(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ja;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=ja;var u=qt;if(ja=o,(qt=l)&&!u)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?am(r):l!==null?(l.return=o,ve=l):am(r);for(;s!==null;)ve=s,s_(s),s=s.sibling;ve=r,ja=a,qt=u}sm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):sm(t)}}function sm(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ra(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}qt||e.flags&512&&ef(e)}catch(d){pt(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function om(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function am(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ru(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{ef(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{ef(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var ES=Math.ceil,ou=zi.ReactCurrentDispatcher,dh=zi.ReactCurrentOwner,Fn=zi.ReactCurrentBatchConfig,je=0,Ot=null,Tt=null,Vt=0,xn=0,Fs=_r(0),Rt=0,ma=null,jr=0,Pu=0,fh=0,Yo=null,un=null,hh=0,no=1/0,Ei=null,au=!1,rf=null,cr=null,Xa=!1,ir=null,lu=0,qo=0,sf=null,Ol=-1,Fl=0;function on(){return je&6?xt():Ol!==-1?Ol:Ol=xt()}function dr(t){return t.mode&1?je&2&&Vt!==0?Vt&-Vt:sS.transition!==null?(Fl===0&&(Fl=G0()),Fl):(t=qe,t!==0||(t=window.event,t=t===void 0?16:K0(t.type)),t):1}function Jn(t,e,n,i){if(50<qo)throw qo=0,sf=null,Error(ie(185));Ma(t,n,i),(!(je&2)||t!==Ot)&&(t===Ot&&(!(je&2)&&(Pu|=n),Rt===4&&er(t,Vt)),hn(t,i),n===1&&je===0&&!(e.mode&1)&&(no=xt()+500,bu&&xr()))}function hn(t,e){var n=t.callbackNode;s1(t,e);var i=jl(t,t===Ot?Vt:0);if(i===0)n!==null&&gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gp(n),e===1)t.tag===0?rS(lm.bind(null,t)):mv(lm.bind(null,t)),eS(function(){!(je&6)&&xr()}),n=null;else{switch(W0(i)){case 1:n=Bf;break;case 4:n=H0;break;case 16:n=Wl;break;case 536870912:n=V0;break;default:n=Wl}n=h_(n,o_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o_(t,e){if(Ol=-1,Fl=0,je&6)throw Error(ie(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=jl(t,t===Ot?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uu(t,i);else{e=i;var r=je;je|=2;var s=l_();(Ot!==t||Vt!==e)&&(Ei=null,no=xt()+500,Or(t,e));do try{wS();break}catch(a){a_(t,a)}while(!0);Qf(),ou.current=s,je=r,Tt!==null?e=0:(Ot=null,Vt=0,e=Rt)}if(e!==0){if(e===2&&(r=Ld(t),r!==0&&(i=r,e=of(t,r))),e===1)throw n=ma,Or(t,0),er(t,i),hn(t,xt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!MS(r)&&(e=uu(t,i),e===2&&(s=Ld(t),s!==0&&(i=s,e=of(t,s))),e===1))throw n=ma,Or(t,0),er(t,i),hn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Rr(t,un,Ei);break;case 3:if(er(t,i),(i&130023424)===i&&(e=hh+500-xt(),10<e)){if(jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bd(Rr.bind(null,t,un,Ei),e);break}Rr(t,un,Ei);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ES(i/1960))-i,10<i){t.timeoutHandle=Bd(Rr.bind(null,t,un,Ei),i);break}Rr(t,un,Ei);break;case 5:Rr(t,un,Ei);break;default:throw Error(ie(329))}}}return hn(t,xt()),t.callbackNode===n?o_.bind(null,t):null}function of(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=uu(t,e),t!==2&&(e=un,un=n,e!==null&&af(e)),t}function af(t){un===null?un=t:un.push.apply(un,t)}function MS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~fh,e&=~Pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function lm(t){if(je&6)throw Error(ie(327));Xs();var e=jl(t,0);if(!(e&1))return hn(t,xt()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var i=Ld(t);i!==0&&(e=i,n=of(t,i))}if(n===1)throw n=ma,Or(t,0),er(t,e),hn(t,xt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,un,Ei),hn(t,xt()),null}function ph(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(no=xt()+500,bu&&xr())}}function Xr(t){ir!==null&&ir.tag===0&&!(je&6)&&Xs();var e=je;je|=1;var n=Fn.transition,i=qe;try{if(Fn.transition=null,qe=1,t)return t()}finally{qe=i,Fn.transition=n,je=e,!(je&6)&&xr()}}function mh(){xn=Fs.current,nt(Fs)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,J1(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(qf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:eo(),nt(dn),nt(Jt),rh();break;case 5:ih(i);break;case 4:eo();break;case 13:nt(at);break;case 19:nt(at);break;case 10:Jf(i.type._context);break;case 22:case 23:mh()}n=n.return}if(Ot=t,Tt=t=fr(t.current,null),Vt=xn=e,Rt=0,ma=null,fh=Pu=jr=0,un=Yo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function a_(t,e){do{var n=Tt;try{if(Qf(),Il.current=su,ru){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ru=!1}if(Wr=0,Ut=At=ct=null,Xo=!1,fa=0,dh.current=null,n===null||n.return===null){Rt=1,ma=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=qp(o);if(p!==null){p.flags&=-257,Kp(p,o,a,s,e),p.mode&1&&Yp(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Yp(s,u,e),gh();break e}l=Error(ie(426))}}else if(rt&&a.mode&1){var m=qp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kp(m,o,a,s,e),Kf(to(l,a));break e}}s=l=to(l,a),Rt!==4&&(Rt=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Wv(s,l,e);Vp(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cr===null||!cr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=jv(s,a,e);Vp(s,y);break e}}s=s.return}while(s!==null)}c_(n)}catch(T){e=T,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function l_(){var t=ou.current;return ou.current=su,t===null?su:t}function gh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ot===null||!(jr&268435455)&&!(Pu&268435455)||er(Ot,Vt)}function uu(t,e){var n=je;je|=2;var i=l_();(Ot!==t||Vt!==e)&&(Ei=null,Or(t,e));do try{TS();break}catch(r){a_(t,r)}while(!0);if(Qf(),je=n,ou.current=i,Tt!==null)throw Error(ie(261));return Ot=null,Vt=0,Rt}function TS(){for(;Tt!==null;)u_(Tt)}function wS(){for(;Tt!==null&&!Ky();)u_(Tt)}function u_(t){var e=f_(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?c_(t):Tt=e,dh.current=null}function c_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_S(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=vS(n,e,xn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function Rr(t,e,n){var i=qe,r=Fn.transition;try{Fn.transition=null,qe=1,bS(t,e,n,i)}finally{Fn.transition=r,qe=i}return null}function bS(t,e,n,i){do Xs();while(ir!==null);if(je&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(o1(t,s),t===Ot&&(Tt=Ot=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,h_(Wl,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=qe;qe=1;var a=je;je|=4,dh.current=null,yS(t,n),r_(n,t),X1(Fd),Xl=!!Od,Fd=Od=null,t.current=n,SS(n),Zy(),je=a,qe=o,Fn.transition=s}else t.current=n;if(Xa&&(Xa=!1,ir=t,lu=r),s=t.pendingLanes,s===0&&(cr=null),e1(n.stateNode),hn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(au)throw au=!1,t=rf,rf=null,t;return lu&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===sf?qo++:(qo=0,sf=t):qo=0,xr(),null}function Xs(){if(ir!==null){var t=W0(lu),e=Fn.transition,n=qe;try{if(Fn.transition=null,qe=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,lu=0,je&6)throw Error(ie(331));var r=je;for(je|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:$o(8,c,s)}var h=c.child;if(h!==null)h.return=c,ve=h;else for(;ve!==null;){c=ve;var d=c.sibling,p=c.return;if(t_(c),c===u){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ve=f;break e}ve=s.return}}var _=t.current;for(ve=_;ve!==null;){o=ve;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ve=g;else e:for(o=_;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ru(9,a)}}catch(T){pt(a,a.return,T)}if(a===o){ve=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ve=y;break e}ve=a.return}}if(je=r,xr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(Su,t)}catch{}i=!0}return i}finally{qe=n,Fn.transition=e}}return!1}function um(t,e,n){e=to(n,e),e=Wv(t,e,1),t=ur(t,e,1),e=on(),t!==null&&(Ma(t,1,e),hn(t,e))}function pt(t,e,n){if(t.tag===3)um(t,t,n);else for(;e!==null;){if(e.tag===3){um(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=to(n,t),t=jv(e,t,1),e=ur(e,t,1),t=on(),e!==null&&(Ma(e,1,t),hn(e,t));break}}e=e.return}}function CS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Vt&n)===n&&(Rt===4||Rt===3&&(Vt&130023424)===Vt&&500>xt()-hh?Or(t,0):fh|=n),hn(t,e)}function d_(t,e){e===0&&(t.mode&1?(e=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):e=1);var n=on();t=Oi(t,e),t!==null&&(Ma(t,e,n),hn(t,n))}function AS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d_(t,n)}function RS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),d_(t,n)}var f_;f_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,gS(t,e,n);cn=!!(t.flags&131072)}else cn=!1,rt&&e.flags&1048576&&gv(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Zs(e,Jt.current);js(e,n),r=oh(null,e,i,t,r,n);var s=ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Zl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,th(e),r.updater=Au,e.stateNode=r,r._reactInternals=e,Xd(e,i,t,n),e=qd(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&Yf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=LS(i),t=jn(i,t),r){case 0:e=Yd(null,e,i,t,n);break e;case 1:e=Jp(null,e,i,t,n);break e;case 11:e=Zp(null,e,i,t,n);break e;case 14:e=Qp(null,e,i,jn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Yd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Jp(t,e,i,r,n);case 3:e:{if(qv(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ev(t,e),nu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=to(Error(ie(423)),e),e=em(t,e,i,n,r);break e}else if(i!==r){r=to(Error(ie(424)),e),e=em(t,e,i,n,r);break e}else for(Sn=lr(e.stateNode.containerInfo.firstChild),En=e,rt=!0,Yn=null,n=yv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),i===r){e=Fi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Mv(e),t===null&&Gd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,kd(i,r)?o=null:s!==null&&kd(i,s)&&(e.flags|=32),Yv(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&Gd(e),null;case 13:return Kv(t,e,n);case 4:return nh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Js(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Zp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Je(eu,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!dn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=kn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Qp(t,e,i,r,n);case 15:return Xv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ul(t,e),e.tag=1,fn(i)?(t=!0,Zl(e)):t=!1,js(e,n),Gv(e,i,r),Xd(e,i,r,n),qd(null,e,i,!0,t,n);case 19:return Zv(t,e,n);case 22:return $v(t,e,n)}throw Error(ie(156,e.tag))};function h_(t,e){return z0(t,e)}function PS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new PS(t,e,n,i)}function vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LS(t){if(typeof t=="function")return vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Of)return 11;if(t===Ff)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return Fr(n.children,r,s,e);case Uf:o=8,r|=8;break;case gd:return t=On(12,n,e,r|2),t.elementType=gd,t.lanes=s,t;case vd:return t=On(13,n,e,r),t.elementType=vd,t.lanes=s,t;case _d:return t=On(19,n,e,r),t.elementType=_d,t.lanes=s,t;case M0:return Lu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S0:o=10;break e;case E0:o=9;break e;case Of:o=11;break e;case Ff:o=14;break e;case qi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Lu(t,e,n,i){return t=On(22,t,i,e),t.elementType=M0,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _h(t,e,n,i,r,s,o,a,l){return t=new DS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(s),t}function IS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function p_(t){if(!t)return gr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(fn(n))return pv(t,n,e)}return e}function m_(t,e,n,i,r,s,o,a,l){return t=_h(n,i,!0,t,r,s,o,a,l),t.context=p_(null),n=t.current,i=on(),r=dr(n),s=Ri(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,Ma(t,r,i),hn(t,i),t}function Du(t,e,n,i){var r=e.current,s=on(),o=dr(r);return n=p_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,o),t!==null&&(Jn(t,r,o,s),Dl(t,r,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xh(t,e){cm(t,e),(t=t.alternate)&&cm(t,e)}function NS(){return null}var g_=typeof reportError=="function"?reportError:function(t){console.error(t)};function yh(t){this._internalRoot=t}Iu.prototype.render=yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Du(t,e,null,null)};Iu.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Du(null,t,null,null)}),e[Ui]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=$0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&q0(t)}};function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function US(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=cu(o);s.call(u)}}var o=m_(e,i,t,0,null,!1,!1,"",dm);return t._reactRootContainer=o,t[Ui]=o.current,aa(t.nodeType===8?t.parentNode:t),Xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=cu(l);a.call(u)}}var l=_h(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=l,t[Ui]=l.current,aa(t.nodeType===8?t.parentNode:t),Xr(function(){Du(e,l,n,i)}),l}function Uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cu(o);a.call(l)}}Du(e,o,t,r)}else o=US(n,e,t,r,i);return cu(o)}j0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(zf(e,n|1),hn(e,xt()),!(je&6)&&(no=xt()+500,xr()))}break;case 13:Xr(function(){var i=Oi(t,1);if(i!==null){var r=on();Jn(i,t,1,r)}}),xh(t,1)}};Hf=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=on();Jn(e,t,134217728,n)}xh(t,134217728)}};X0=function(t){if(t.tag===13){var e=dr(t),n=Oi(t,e);if(n!==null){var i=on();Jn(n,t,e,i)}xh(t,e)}};$0=function(){return qe};Y0=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};Ad=function(t,e,n){switch(e){case"input":if(Sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wu(i);if(!r)throw Error(ie(90));w0(i),Sd(i,r)}}}break;case"textarea":C0(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};N0=ph;U0=Xr;var OS={usingClientEntryPoint:!1,Events:[wa,Ls,wu,D0,I0,ph]},Mo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FS={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=k0(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||NS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Su=$a.inject(FS),ci=$a}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sh(e))throw Error(ie(200));return IS(t,e,null,n)};Tn.createRoot=function(t,e){if(!Sh(t))throw Error(ie(299));var n=!1,i="",r=g_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_h(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,aa(t.nodeType===8?t.parentNode:t),new yh(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=k0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Xr(t)};Tn.hydrate=function(t,e,n){if(!Nu(e))throw Error(ie(200));return Uu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Sh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=g_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m_(e,null,t,1,n??null,r,!1,s,o),t[Ui]=e.current,aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Iu(e)};Tn.render=function(t,e,n){if(!Nu(e))throw Error(ie(200));return Uu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(ie(40));return t._reactRootContainer?(Xr(function(){Uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};Tn.unstable_batchedUpdates=ph;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Uu(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function v_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v_)}catch(t){console.error(t)}}v_(),v0.exports=Tn;var __=v0.exports;const ks=Sa(__);var fm=__;pd.createRoot=fm.createRoot,pd.hydrateRoot=fm.hydrateRoot;var x_={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=r(s,i(a)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=r(o,a));return o}function r(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(x_);var kS=x_.exports;const ft=Sa(kS),BS=["xxl","xl","lg","md","sm","xs"],zS="xs",Eh=U.createContext({prefixes:{},breakpoints:BS,minBreakpoint:zS});function Ft(t,e){const{prefixes:n}=U.useContext(Eh);return t||n[e]||e}function y_(){const{breakpoints:t}=U.useContext(Eh);return t}function S_(){const{minBreakpoint:t}=U.useContext(Eh);return t}const Zr=U.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:i,...r},s)=>{const o=Ft(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return P.jsx(n,{ref:s,...r,className:ft(i,e?`${o}${a}`:o)})});Zr.displayName="Container";var hm={exports:{}},lf={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(i){function r(o,a,l,u,c,h){var d=u||"<<anonymous>>",p=h||l;if(a[l]==null)return o?new Error("Required "+c+" `"+p+"` was not specified "+("in `"+d+"`.")):null;for(var v=arguments.length,x=Array(v>6?v-6:0),m=6;m<v;m++)x[m-6]=arguments[m];return i.apply(void 0,[a,l,d,c,p].concat(x))}var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}t.exports=e.default})(lf,lf.exports);var HS=lf.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=HS,i=r(n);function r(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,h=Array(c),d=0;d<c;d++)h[d]=arguments[d];var p=null;return a.forEach(function(v){if(p==null){var x=v.apply(void 0,h);x!=null&&(p=x)}}),p}return(0,i.default)(u)}t.exports=e.default})(hm,hm.exports);function uf(){return uf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},uf.apply(null,arguments)}function E_(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function pm(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function VS(t){var e=GS(t,"string");return typeof e=="symbol"?e:String(e)}function GS(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function WS(t,e,n){var i=U.useRef(t!==void 0),r=U.useState(e),s=r[0],o=r[1],a=t!==void 0,l=i.current;return i.current=a,!a&&l&&s!==e&&o(e),[a?t:s,U.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function M_(t,e){return Object.keys(e).reduce(function(n,i){var r,s=n,o=s[pm(i)],a=s[i],l=E_(s,[pm(i),i].map(VS)),u=e[i],c=WS(a,o,t[u]),h=c[0],d=c[1];return uf({},l,(r={},r[i]=h,r[u]=d,r))},t)}function cf(t,e){return cf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},cf(t,e)}function jS(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,cf(t,e)}var XS=Function.prototype.bind.call(Function.prototype.call,[].slice);function Pr(t,e){return XS(t.querySelectorAll(e))}function $S(){const[,t]=U.useReducer(e=>!e,!1);return t}const mm=t=>!t||typeof t=="function"?t:e=>{t.current=e};function YS(t,e){const n=mm(t),i=mm(e);return r=>{n&&n(r),i&&i(r)}}function Ca(t,e){return U.useMemo(()=>YS(t,e),[t,e])}const Mh=U.createContext(null);Mh.displayName="NavContext";const qS=U.createContext(null),ga=(t,e=null)=>t!=null?String(t):e||null,$r=qS,fo=U.createContext(null),KS="data-rr-ui-",ZS="rrUi";function Ou(t){return`${KS}${t}`}function QS(t){return`${ZS}${t}`}function JS(t){const e=U.useRef(t);return U.useEffect(()=>{e.current=t},[t]),e}function Nn(t){const e=JS(t);return U.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const eE=["as","disabled"];function tE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function nE(t){return!t||t.trim()==="#"}function T_({tagName:t,disabled:e,href:n,target:i,rel:r,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||i!=null||r!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&nE(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?i:void 0,"aria-disabled":e||void 0,rel:t==="a"?r:void 0,onClick:c,onKeyDown:h},u]}const w_=U.forwardRef((t,e)=>{let{as:n,disabled:i}=t,r=tE(t,eE);const[s,{tagName:o}]=T_(Object.assign({tagName:n,disabled:i},r));return P.jsx(o,Object.assign({},r,s,{ref:e}))});w_.displayName="Button";const iE=["as","active","eventKey"];function rE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function b_({key:t,onClick:e,active:n,id:i,role:r,disabled:s}){const o=U.useContext($r),a=U.useContext(Mh),l=U.useContext(fo);let u=n;const c={role:r};if(a){!r&&a.role==="tablist"&&(c.role="tab");const h=a.getControllerId(t??null),d=a.getControlledId(t??null);c[Ou("event-key")]=t,c.id=h||i,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=d)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=Nn(h=>{s||(e==null||e(h),t!=null&&o&&!h.isPropagationStopped()&&o(t,h))}),[c,{isActive:u}]}const C_=U.forwardRef((t,e)=>{let{as:n=w_,active:i,eventKey:r}=t,s=rE(t,iE);const[o,a]=b_(Object.assign({key:ga(r,s.href),active:i},s));return o[Ou("active")]=a.isActive,P.jsx(n,Object.assign({},s,o,{ref:e}))});C_.displayName="NavItem";const sE=C_,oE=["as","onSelect","activeKey","role","onKeyDown"];function aE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const gm=()=>{},vm=Ou("event-key"),A_=U.forwardRef((t,e)=>{let{as:n="div",onSelect:i,activeKey:r,role:s,onKeyDown:o}=t,a=aE(t,oE);const l=$S(),u=U.useRef(!1),c=U.useContext($r),h=U.useContext(fo);let d,p;h&&(s=s||"tablist",r=h.activeKey,d=h.getControlledId,p=h.getControllerId);const v=U.useRef(null),x=g=>{const y=v.current;if(!y)return null;const T=Pr(y,`[${vm}]:not([aria-disabled=true])`),w=y.querySelector("[aria-selected=true]");if(!w||w!==document.activeElement)return null;const S=T.indexOf(w);if(S===-1)return null;let L=S+g;return L>=T.length&&(L=0),L<0&&(L=T.length-1),T[L]},m=(g,y)=>{g!=null&&(i==null||i(g,y),c==null||c(g,y))},f=g=>{if(o==null||o(g),!h)return;let y;switch(g.key){case"ArrowLeft":case"ArrowUp":y=x(-1);break;case"ArrowRight":case"ArrowDown":y=x(1);break;default:return}y&&(g.preventDefault(),m(y.dataset[QS("EventKey")]||null,g),u.current=!0,l())};U.useEffect(()=>{if(v.current&&u.current){const g=v.current.querySelector(`[${vm}][aria-selected=true]`);g==null||g.focus()}u.current=!1});const _=Ca(e,v);return P.jsx($r.Provider,{value:m,children:P.jsx(Mh.Provider,{value:{role:s,activeKey:ga(r),getControlledId:d||gm,getControllerId:p||gm},children:P.jsx(n,Object.assign({},a,{onKeyDown:f,ref:_,role:s}))})})});A_.displayName="Nav";const lE=Object.assign(A_,{Item:sE}),Qr=U.createContext(null);Qr.displayName="NavbarContext";const R_=U.createContext(null);R_.displayName="CardHeaderContext";const P_=U.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ft(e,"nav-item"),P.jsx(n,{ref:r,className:ft(t,e),...i})));P_.displayName="NavItem";function uE(){const t=U.useRef(!0),e=U.useRef(()=>t.current);return U.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function cE(t){const e=U.useRef(null);return U.useEffect(()=>{e.current=t}),e.current}const dE=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",fE=typeof document<"u",df=fE||dE?U.useLayoutEffect:U.useEffect,hE=["onKeyDown"];function pE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function mE(t){return!t||t.trim()==="#"}const L_=U.forwardRef((t,e)=>{let{onKeyDown:n}=t,i=pE(t,hE);const[r]=T_(Object.assign({tagName:"a"},i)),s=Nn(o=>{r.onKeyDown(o),n==null||n(o)});return mE(i.href)||i.role==="button"?P.jsx("a",Object.assign({ref:e},i,r,{onKeyDown:s})):P.jsx("a",Object.assign({ref:e},i,{onKeyDown:n}))});L_.displayName="Anchor";const D_=U.forwardRef(({bsPrefix:t,className:e,as:n=L_,active:i,eventKey:r,disabled:s=!1,...o},a)=>{t=Ft(t,"nav-link");const[l,u]=b_({key:ga(r,o.href),active:i,disabled:s,...o});return P.jsx(n,{...o,...l,ref:a,disabled:s,className:ft(e,t,s&&"disabled",u.isActive&&"active")})});D_.displayName="NavLink";const I_=U.forwardRef((t,e)=>{const{as:n="div",bsPrefix:i,variant:r,fill:s=!1,justify:o=!1,navbar:a,navbarScroll:l,className:u,activeKey:c,...h}=M_(t,{activeKey:"onSelect"}),d=Ft(i,"nav");let p,v,x=!1;const m=U.useContext(Qr),f=U.useContext(R_);return m?(p=m.bsPrefix,x=a??!0):f&&({cardHeaderBsPrefix:v}=f),P.jsx(lE,{as:n,ref:e,activeKey:c,className:ft(u,{[d]:!x,[`${p}-nav`]:x,[`${p}-nav-scroll`]:x&&l,[`${v}-${r}`]:!!v,[`${d}-${r}`]:!!r,[`${d}-fill`]:s,[`${d}-justified`]:o}),...h})});I_.displayName="Nav";const $n=Object.assign(I_,{Item:P_,Link:D_}),N_=U.forwardRef(({bsPrefix:t,className:e,as:n,...i},r)=>{t=Ft(t,"navbar-brand");const s=n||(i.href?"a":"span");return P.jsx(s,{...i,ref:r,className:ft(e,t)})});N_.displayName="NavbarBrand";function Th(t){return t&&t.ownerDocument||document}function gE(t){var e=Th(t);return e&&e.defaultView||window}function vE(t,e){return gE(t).getComputedStyle(t,e)}var _E=/([A-Z])/g;function xE(t){return t.replace(_E,"-$1").toLowerCase()}var yE=/^ms-/;function Ya(t){return xE(t).replace(yE,"-ms-")}var SE=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function EE(t){return!!(t&&SE.test(t))}function Pi(t,e){var n="",i="";if(typeof e=="string")return t.style.getPropertyValue(Ya(e))||vE(t).getPropertyValue(Ya(e));Object.keys(e).forEach(function(r){var s=e[r];!s&&s!==0?t.style.removeProperty(Ya(r)):EE(r)?i+=r+"("+s+") ":n+=Ya(r)+": "+s+";"}),i&&(n+="transform: "+i+";"),t.style.cssText+=";"+n}var U_={exports:{}},ME="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",TE=ME,wE=TE;function O_(){}function F_(){}F_.resetWarningCache=O_;var bE=function(){function t(i,r,s,o,a,l){if(l!==wE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:F_,resetWarningCache:O_};return n.PropTypes=n,n};U_.exports=bE();var k_=U_.exports;const Yt=Sa(k_),_m={disabled:!1},B_=wt.createContext(null);var CE=function(e){return e.scrollTop},Bo="unmounted",Zi="exited",qn="entering",Ti="entered",va="exiting",Hi=function(t){jS(e,t);function e(i,r){var s;s=t.call(this,i,r)||this;var o=r,a=o&&!o.isMounting?i.enter:i.appear,l;return s.appearStatus=null,i.in?a?(l=Zi,s.appearStatus=qn):l=Ti:i.unmountOnExit||i.mountOnEnter?l=Bo:l=Zi,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(r,s){var o=r.in;return o&&s.status===Bo?{status:Zi}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(r){var s=null;if(r!==this.props){var o=this.state.status;this.props.in?o!==qn&&o!==Ti&&(s=qn):(o===qn||o===Ti)&&(s=va)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var r=this.props.timeout,s,o,a;return s=o=a=r,r!=null&&typeof r!="number"&&(s=r.exit,o=r.enter,a=r.appear!==void 0?r.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(r,s){if(r===void 0&&(r=!1),s!==null)if(this.cancelNextCallback(),s===qn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:ks.findDOMNode(this);o&&CE(o)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Zi&&this.setState({status:Bo})},n.performEnter=function(r){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:r,l=this.props.nodeRef?[a]:[ks.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!r&&!o||_m.disabled){this.safeSetState({status:Ti},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:qn},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Ti},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var r=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:ks.findDOMNode(this);if(!s||_m.disabled){this.safeSetState({status:Zi},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:va},function(){r.props.onExiting(a),r.onTransitionEnd(o.exit,function(){r.safeSetState({status:Zi},function(){r.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(r,s){s=this.setNextCallback(s),this.setState(r,s)},n.setNextCallback=function(r){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,r(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(r,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:ks.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}r!=null&&setTimeout(this.nextCallback,r)},n.render=function(){var r=this.state.status;if(r===Bo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=E_(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return wt.createElement(B_.Provider,{value:null},typeof o=="function"?o(r,a):wt.cloneElement(wt.Children.only(o),a))},e}(wt.Component);Hi.contextType=B_;Hi.propTypes={};function ts(){}Hi.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ts,onEntering:ts,onEntered:ts,onExit:ts,onExiting:ts,onExited:ts};Hi.UNMOUNTED=Bo;Hi.EXITED=Zi;Hi.ENTERING=qn;Hi.ENTERED=Ti;Hi.EXITING=va;const Fu=!!(typeof window<"u"&&window.document&&window.document.createElement);var ff=!1,hf=!1;try{var wc={get passive(){return ff=!0},get once(){return hf=ff=!0}};Fu&&(window.addEventListener("test",wc,wc),window.removeEventListener("test",wc,!0))}catch{}function AE(t,e,n,i){if(i&&typeof i!="boolean"&&!hf){var r=i.once,s=i.capture,o=n;!hf&&r&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,ff?i:s)}t.addEventListener(e,n,i)}function RE(t,e,n,i){var r=i&&typeof i!="boolean"?i.capture:i;t.removeEventListener(e,n,r),n.__once&&t.removeEventListener(e,n.__once,r)}function du(t,e,n,i){return AE(t,e,n,i),function(){RE(t,e,n,i)}}function PE(t,e,n,i){if(i===void 0&&(i=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(e,n,i),t.dispatchEvent(r)}}function LE(t){var e=Pi(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function DE(t,e,n){n===void 0&&(n=5);var i=!1,r=setTimeout(function(){i||PE(t,"transitionend",!0)},e+n),s=du(t,"transitionend",function(){i=!0},{once:!0});return function(){clearTimeout(r),s()}}function IE(t,e,n,i){n==null&&(n=LE(t)||0);var r=DE(t,n,i),s=du(t,"transitionend",e);return function(){r(),s()}}function xm(t,e){const n=Pi(t,e)||"",i=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*i}function wh(t,e){const n=xm(t,"transitionDuration"),i=xm(t,"transitionDelay"),r=IE(t,s=>{s.target===t&&(r(),e(s))},n+i)}function To(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...r){e.apply(this,r),n.apply(this,r)}},null)}function z_(t){t.offsetHeight}function NE(t){return t&&"setState"in t?ks.findDOMNode(t):t??null}const bh=wt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:i,onExiting:r,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=U.useRef(null),d=Ca(h,l),p=w=>{d(NE(w))},v=w=>S=>{w&&h.current&&w(h.current,S)},x=U.useCallback(v(t),[t]),m=U.useCallback(v(e),[e]),f=U.useCallback(v(n),[n]),_=U.useCallback(v(i),[i]),g=U.useCallback(v(r),[r]),y=U.useCallback(v(s),[s]),T=U.useCallback(v(o),[o]);return P.jsx(Hi,{ref:c,...u,onEnter:x,onEntered:f,onEntering:m,onExit:_,onExited:y,onExiting:g,addEndListener:T,nodeRef:h,children:typeof a=="function"?(w,S)=>a(w,{...S,ref:p}):wt.cloneElement(a,{ref:p})})}),UE={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function OE(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,i=e[n],r=UE[t];return i+parseInt(Pi(e,r[0]),10)+parseInt(Pi(e,r[1]),10)}const FE={[Zi]:"collapse",[va]:"collapsing",[qn]:"collapsing",[Ti]:"collapse show"},kE=wt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:i,onExiting:r,className:s,children:o,dimension:a="height",in:l=!1,timeout:u=300,mountOnEnter:c=!1,unmountOnExit:h=!1,appear:d=!1,getDimensionValue:p=OE,...v},x)=>{const m=typeof a=="function"?a():a,f=U.useMemo(()=>To(w=>{w.style[m]="0"},t),[m,t]),_=U.useMemo(()=>To(w=>{const S=`scroll${m[0].toUpperCase()}${m.slice(1)}`;w.style[m]=`${w[S]}px`},e),[m,e]),g=U.useMemo(()=>To(w=>{w.style[m]=null},n),[m,n]),y=U.useMemo(()=>To(w=>{w.style[m]=`${p(m,w)}px`,z_(w)},i),[i,p,m]),T=U.useMemo(()=>To(w=>{w.style[m]=null},r),[m,r]);return P.jsx(bh,{ref:x,addEndListener:wh,...v,"aria-expanded":v.role?l:null,onEnter:f,onEntering:_,onEntered:g,onExit:y,onExiting:T,childRef:o.ref,in:l,timeout:u,mountOnEnter:c,unmountOnExit:h,appear:d,children:(w,S)=>wt.cloneElement(o,{...S,className:ft(s,o.props.className,FE[w],m==="width"&&"collapse-horizontal")})})}),H_=U.forwardRef(({children:t,bsPrefix:e,...n},i)=>{e=Ft(e,"navbar-collapse");const r=U.useContext(Qr);return P.jsx(kE,{in:!!(r&&r.expanded),...n,children:P.jsx("div",{ref:i,className:e,children:t})})});H_.displayName="NavbarCollapse";const V_=U.forwardRef(({bsPrefix:t,className:e,children:n,label:i="Toggle navigation",as:r="button",onClick:s,...o},a)=>{t=Ft(t,"navbar-toggler");const{onToggle:l,expanded:u}=U.useContext(Qr)||{},c=Nn(h=>{s&&s(h),l&&l()});return r==="button"&&(o.type="button"),P.jsx(r,{...o,ref:a,onClick:c,"aria-label":i,className:ft(e,t,!u&&"collapsed"),children:n||P.jsx("span",{className:`${t}-icon`})})});V_.displayName="NavbarToggle";const pf=new WeakMap,ym=(t,e)=>{if(!t||!e)return;const n=pf.get(e)||new Map;pf.set(e,n);let i=n.get(t);return i||(i=e.matchMedia(t),i.refCount=0,n.set(i.media,i)),i};function BE(t,e=typeof window>"u"?void 0:window){const n=ym(t,e),[i,r]=U.useState(()=>n?n.matches:!1);return df(()=>{let s=ym(t,e);if(!s)return r(!1);let o=pf.get(e);const a=()=>{r(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),i}function zE(t){const e=Object.keys(t);function n(a,l){return a===l?l:a?`${a} and ${l}`:l}function i(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function r(a){const l=i(a);let u=t[l];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function s(a){let l=t[a];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function o(a,l,u){let c;typeof a=="object"?(c=a,u=l,l=!0):(l=l||!0,c={[a]:l});let h=U.useMemo(()=>Object.entries(c).reduce((d,[p,v])=>((v==="up"||v===!0)&&(d=n(d,s(p))),(v==="down"||v===!0)&&(d=n(d,r(p))),d),""),[JSON.stringify(c)]);return BE(h,u)}return o}const HE=zE({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function bc(t){t===void 0&&(t=Th());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Sm(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function VE(t){const e=U.useRef(t);return e.current=t,e}function GE(t){const e=VE(t);U.useEffect(()=>()=>e.current(),[])}function WE(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Em=Ou("modal-open");class Ch{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:i=!1}={}){this.handleContainerOverflow=n,this.isRTL=i,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return WE(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},i=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[i]:r.style[i]},e.scrollBarWidth&&(n[i]=`${parseInt(Pi(r,i)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Em,""),Pi(r,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Em),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const G_=U.createContext(Fu?window:void 0);G_.Provider;function Ah(){return U.useContext(G_)}const Cc=(t,e)=>Fu?t==null?(e||Th()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function jE(t,e){const n=Ah(),[i,r]=U.useState(()=>Cc(t,n==null?void 0:n.document));if(!i){const s=Cc(t);s&&r(s)}return U.useEffect(()=>{},[e,i]),U.useEffect(()=>{const s=Cc(t);s!==i&&r(s)},[t,i]),i}function Rh({children:t,in:e,onExited:n,mountOnEnter:i,unmountOnExit:r}){const s=U.useRef(null),o=U.useRef(e),a=Nn(n);U.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=Ca(s,t.ref),u=U.cloneElement(t,{ref:l});return e?u:r||!o.current&&i?null:u}function XE(t){return t.code==="Escape"||t.keyCode===27}function $E(){const t=U.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const YE=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function qE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function KE(t){let{onEnter:e,onEntering:n,onEntered:i,onExit:r,onExiting:s,onExited:o,addEndListener:a,children:l}=t,u=qE(t,YE);const{major:c}=$E(),h=c>=19?l.props.ref:l.ref,d=U.useRef(null),p=Ca(d,typeof l=="function"?null:h),v=w=>S=>{w&&d.current&&w(d.current,S)},x=U.useCallback(v(e),[e]),m=U.useCallback(v(n),[n]),f=U.useCallback(v(i),[i]),_=U.useCallback(v(r),[r]),g=U.useCallback(v(s),[s]),y=U.useCallback(v(o),[o]),T=U.useCallback(v(a),[a]);return Object.assign({},u,{nodeRef:d},e&&{onEnter:x},n&&{onEntering:m},i&&{onEntered:f},r&&{onExit:_},s&&{onExiting:g},o&&{onExited:y},a&&{addEndListener:T},{children:typeof l=="function"?(w,S)=>l(w,Object.assign({},S,{ref:p})):U.cloneElement(l,{ref:p})})}const ZE=["component"];function QE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const JE=U.forwardRef((t,e)=>{let{component:n}=t,i=QE(t,ZE);const r=KE(i);return P.jsx(n,Object.assign({ref:e},r))});function eM({in:t,onTransition:e}){const n=U.useRef(null),i=U.useRef(!0),r=Nn(e);return df(()=>{if(!n.current)return;let s=!1;return r({in:t,element:n.current,initial:i.current,isStale:()=>s}),()=>{s=!0}},[t,r]),df(()=>(i.current=!1,()=>{i.current=!0}),[]),n}function tM({children:t,in:e,onExited:n,onEntered:i,transition:r}){const[s,o]=U.useState(!e);e&&s&&o(!1);const a=eM({in:!!e,onTransition:u=>{const c=()=>{u.isStale()||(u.in?i==null||i(u.element,u.initial):(o(!0),n==null||n(u.element)))};Promise.resolve(r(u)).then(c,h=>{throw u.in||o(!0),h})}}),l=Ca(a,t.ref);return s&&!e?null:U.cloneElement(t,{ref:l})}function Mm(t,e,n){return t?P.jsx(JE,Object.assign({},n,{component:t})):e?P.jsx(tM,Object.assign({},n,{transition:e})):P.jsx(Rh,Object.assign({},n))}const nM=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function iM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}let Ac;function rM(t){return Ac||(Ac=new Ch({ownerDocument:t==null?void 0:t.document})),Ac}function sM(t){const e=Ah(),n=t||rM(e),i=U.useRef({dialog:null,backdrop:null});return Object.assign(i.current,{add:()=>n.add(i.current),remove:()=>n.remove(i.current),isTopModal:()=>n.isTopModal(i.current),setDialogRef:U.useCallback(r=>{i.current.dialog=r},[]),setBackdropRef:U.useCallback(r=>{i.current.backdrop=r},[])})}const W_=U.forwardRef((t,e)=>{let{show:n=!1,role:i="dialog",className:r,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:h,runTransition:d,backdropTransition:p,runBackdropTransition:v,autoFocus:x=!0,enforceFocus:m=!0,restoreFocus:f=!0,restoreFocusOptions:_,renderDialog:g,renderBackdrop:y=_e=>P.jsx("div",Object.assign({},_e)),manager:T,container:w,onShow:S,onHide:L=()=>{},onExit:E,onExited:b,onExiting:Q,onEnter:te,onEntering:z,onEntered:Y}=t,$=iM(t,nM);const J=Ah(),q=jE(w),D=sM(T),X=uE(),V=cE(n),[O,B]=U.useState(!n),ae=U.useRef(null);U.useImperativeHandle(e,()=>D,[D]),Fu&&!V&&n&&(ae.current=bc(J==null?void 0:J.document)),n&&O&&B(!1);const ue=Nn(()=>{if(D.add(),mt.current=du(document,"keydown",Te),ke.current=du(document,"focus",()=>setTimeout(xe),!0),S&&S(),x){var _e,Ce;const $e=bc((_e=(Ce=D.dialog)==null?void 0:Ce.ownerDocument)!=null?_e:J==null?void 0:J.document);D.dialog&&$e&&!Sm(D.dialog,$e)&&(ae.current=$e,D.dialog.focus())}}),ce=Nn(()=>{if(D.remove(),mt.current==null||mt.current(),ke.current==null||ke.current(),f){var _e;(_e=ae.current)==null||_e.focus==null||_e.focus(_),ae.current=null}});U.useEffect(()=>{!n||!q||ue()},[n,q,ue]),U.useEffect(()=>{O&&ce()},[O,ce]),GE(()=>{ce()});const xe=Nn(()=>{if(!m||!X()||!D.isTopModal())return;const _e=bc(J==null?void 0:J.document);D.dialog&&_e&&!Sm(D.dialog,_e)&&D.dialog.focus()}),we=Nn(_e=>{_e.target===_e.currentTarget&&(u==null||u(_e),a===!0&&L())}),Te=Nn(_e=>{l&&XE(_e)&&D.isTopModal()&&(c==null||c(_e),_e.defaultPrevented||L())}),ke=U.useRef(),mt=U.useRef(),De=(..._e)=>{B(!0),b==null||b(..._e)};if(!q)return null;const F=Object.assign({role:i,ref:D.setDialogRef,"aria-modal":i==="dialog"?!0:void 0},$,{style:s,className:r,tabIndex:-1});let ot=g?g(F):P.jsx("div",Object.assign({},F,{children:U.cloneElement(o,{role:"document"})}));ot=Mm(h,d,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:E,onExiting:Q,onExited:De,onEnter:te,onEntering:z,onEntered:Y,children:ot});let Me=null;return a&&(Me=y({ref:D.setBackdropRef,onClick:we}),Me=Mm(p,v,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Me})),P.jsx(P.Fragment,{children:ks.createPortal(P.jsxs(P.Fragment,{children:[Me,ot]}),q)})});W_.displayName="Modal";const oM=Object.assign(W_,{Manager:Ch}),aM={[qn]:"show",[Ti]:"show"},ku=U.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:i,...r},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...r},a=U.useCallback((l,u)=>{z_(l),i==null||i(l,u)},[i]);return P.jsx(bh,{ref:s,addEndListener:wh,...o,onEnter:a,childRef:e.ref,children:(l,u)=>U.cloneElement(e,{...u,className:ft("fade",t,e.props.className,aM[l],n[l])})})});ku.displayName="Fade";const j_=U.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ft(e,"offcanvas-body"),P.jsx(n,{ref:r,className:ft(t,e),...i})));j_.displayName="OffcanvasBody";const lM={[qn]:"show",[Ti]:"show"},X_=U.forwardRef(({bsPrefix:t,className:e,children:n,in:i=!1,mountOnEnter:r=!1,unmountOnExit:s=!1,appear:o=!1,...a},l)=>(t=Ft(t,"offcanvas"),P.jsx(bh,{ref:l,addEndListener:wh,in:i,mountOnEnter:r,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(u,c)=>U.cloneElement(n,{...c,className:ft(e,n.props.className,(u===qn||u===va)&&`${t}-toggling`,lM[u])})})));X_.displayName="OffcanvasToggling";const $_=U.createContext({onHide(){}}),uM={"aria-label":Yt.string,onClick:Yt.func,variant:Yt.oneOf(["white"])},Ph=U.forwardRef(({className:t,variant:e,"aria-label":n="Close",...i},r)=>P.jsx("button",{ref:r,type:"button",className:ft("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...i}));Ph.displayName="CloseButton";Ph.propTypes=uM;const cM=U.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:i,children:r,...s},o)=>{const a=U.useContext($_),l=Nn(()=>{a==null||a.onHide(),i==null||i()});return P.jsxs("div",{ref:o,...s,children:[r,n&&P.jsx(Ph,{"aria-label":t,variant:e,onClick:l})]})}),Y_=U.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:i=!1,...r},s)=>(t=Ft(t,"offcanvas-header"),P.jsx(cM,{ref:s,...r,className:ft(e,t),closeLabel:n,closeButton:i})));Y_.displayName="OffcanvasHeader";const dM=t=>U.forwardRef((e,n)=>P.jsx("div",{...e,ref:n,className:ft(e.className,t)})),fM=dM("h5"),q_=U.forwardRef(({className:t,bsPrefix:e,as:n=fM,...i},r)=>(e=Ft(e,"offcanvas-title"),P.jsx(n,{ref:r,className:ft(t,e),...i})));q_.displayName="OffcanvasTitle";function hM(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function pM(t,e){t.classList?t.classList.add(e):hM(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function Tm(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function mM(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Tm(t.className,e):t.setAttribute("class",Tm(t.className&&t.className.baseVal||"",e))}const ns={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class K_ extends Ch{adjustAndStore(e,n,i){const r=n.style[e];n.dataset[e]=r,Pi(n,{[e]:`${parseFloat(Pi(n,e))+i}px`})}restore(e,n){const i=n.dataset[e];i!==void 0&&(delete n.dataset[e],Pi(n,{[e]:i}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(pM(n,"modal-open"),!e.scrollBarWidth)return;const i=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Pr(n,ns.FIXED_CONTENT).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth)),Pr(n,ns.STICKY_CONTENT).forEach(s=>this.adjustAndStore(r,s,-e.scrollBarWidth)),Pr(n,ns.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();mM(n,"modal-open");const i=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Pr(n,ns.FIXED_CONTENT).forEach(s=>this.restore(i,s)),Pr(n,ns.STICKY_CONTENT).forEach(s=>this.restore(r,s)),Pr(n,ns.NAVBAR_TOGGLER).forEach(s=>this.restore(r,s))}}let Rc;function gM(t){return Rc||(Rc=new K_(t)),Rc}function vM(t){return P.jsx(X_,{...t})}function _M(t){return P.jsx(ku,{...t})}const Z_=U.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":i,placement:r="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:l=!0,scroll:u=!1,onEscapeKeyDown:c,onShow:h,onHide:d,container:p,autoFocus:v=!0,enforceFocus:x=!0,restoreFocus:m=!0,restoreFocusOptions:f,onEntered:_,onExit:g,onExiting:y,onEnter:T,onEntering:w,onExited:S,backdropClassName:L,manager:E,renderStaticNode:b=!1,...Q},te)=>{const z=U.useRef();t=Ft(t,"offcanvas");const{onToggle:Y}=U.useContext(Qr)||{},[$,J]=U.useState(!1),q=HE(s||"xs","up");U.useEffect(()=>{J(s?o&&!q:o)},[o,s,q]);const D=Nn(()=>{Y==null||Y(),d==null||d()}),X=U.useMemo(()=>({onHide:D}),[D]);function V(){return E||(u?(z.current||(z.current=new K_({handleContainerOverflow:!1})),z.current):gM())}const O=(ce,...xe)=>{ce&&(ce.style.visibility="visible"),T==null||T(ce,...xe)},B=(ce,...xe)=>{ce&&(ce.style.visibility=""),S==null||S(...xe)},ae=U.useCallback(ce=>P.jsx("div",{...ce,className:ft(`${t}-backdrop`,L)}),[L,t]),ue=ce=>P.jsx("div",{...ce,...Q,className:ft(e,s?`${t}-${s}`:t,`${t}-${r}`),"aria-labelledby":i,children:n});return P.jsxs(P.Fragment,{children:[!$&&(s||b)&&ue({}),P.jsx($_.Provider,{value:X,children:P.jsx(oM,{show:$,ref:te,backdrop:a,container:p,keyboard:l,autoFocus:v,enforceFocus:x&&!u,restoreFocus:m,restoreFocusOptions:f,onEscapeKeyDown:c,onShow:h,onHide:D,onEnter:O,onEntering:w,onEntered:_,onExit:g,onExiting:y,onExited:B,manager:V(),transition:vM,backdropTransition:_M,renderBackdrop:ae,renderDialog:ue})})]})});Z_.displayName="Offcanvas";const xM=Object.assign(Z_,{Body:j_,Header:Y_,Title:q_}),Q_=U.forwardRef((t,e)=>{const n=U.useContext(Qr);return P.jsx(xM,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});Q_.displayName="NavbarOffcanvas";const J_=U.forwardRef(({className:t,bsPrefix:e,as:n="span",...i},r)=>(e=Ft(e,"navbar-text"),P.jsx(n,{ref:r,className:ft(t,e),...i})));J_.displayName="NavbarText";const ex=U.forwardRef((t,e)=>{const{bsPrefix:n,expand:i=!0,variant:r="light",bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:h,onSelect:d,collapseOnSelect:p=!1,...v}=M_(t,{expanded:"onToggle"}),x=Ft(n,"navbar"),m=U.useCallback((...g)=>{d==null||d(...g),p&&c&&(h==null||h(!1))},[d,p,c,h]);v.role===void 0&&u!=="nav"&&(v.role="navigation");let f=`${x}-expand`;typeof i=="string"&&(f=`${f}-${i}`);const _=U.useMemo(()=>({onToggle:()=>h==null?void 0:h(!c),bsPrefix:x,expanded:!!c,expand:i}),[x,c,i,h]);return P.jsx(Qr.Provider,{value:_,children:P.jsx($r.Provider,{value:m,children:P.jsx(u,{ref:e,...v,className:ft(l,x,i&&f,r&&`${x}-${r}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});ex.displayName="Navbar";const qa=Object.assign(ex,{Brand:N_,Collapse:H_,Offcanvas:Q_,Text:J_,Toggle:V_}),tx="/assets/logo-Oldk0yq9.svg",nx="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.996%2016V15.9993H16V10.1313C16%207.26065%2015.382%205.04932%2012.026%205.04932C10.4127%205.04932%209.33%205.93465%208.888%206.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267%209.31732%209.23667%207.97065%2010.9613%207.97065C12.6607%207.97065%2012.686%209.55998%2012.686%2010.7993V16H15.996Z'%20fill='white'/%3e%3cpath%20d='M0.264008%205.31812H3.58134V16.0001H0.264008V5.31812Z'%20fill='white'/%3e%3cpath%20d='M1.92133%200C0.860667%200%200%200.860667%200%201.92133C0%202.982%200.860667%203.86067%201.92133%203.86067C2.982%203.86067%203.84267%202.982%203.84267%201.92133C3.842%200.860667%202.98133%200%201.92133%200V0Z'%20fill='white'/%3e%3c/svg%3e",ix="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.54%202.65667H12.0007V0.112667C11.7487%200.078%2010.882%200%209.87267%200C7.76667%200%206.324%201.32467%206.324%203.75933V6H4V8.844H6.324V16H9.17333V8.84467H11.4033L11.7573%206.00067H9.17267V4.04133C9.17333%203.21933%209.39467%202.65667%2010.54%202.65667V2.65667Z'%20fill='white'/%3e%3c/svg%3e",rx="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.00269%203.8916C5.73406%203.8916%203.89743%205.73024%203.89743%207.99686C3.89743%2010.2655%205.73606%2012.1021%208.00269%2012.1021C10.2713%2012.1021%2012.108%2010.2635%2012.108%207.99686C12.108%205.72824%2010.2693%203.8916%208.00269%203.8916V3.8916ZM8.00269%2010.6615C6.53005%2010.6615%205.33807%209.46884%205.33807%207.99686C5.33807%206.52489%206.53072%205.33224%208.00269%205.33224C9.47467%205.33224%2010.6673%206.52489%2010.6673%207.99686C10.668%209.46884%209.47533%2010.6615%208.00269%2010.6615V10.6615Z'%20fill='white'/%3e%3cpath%20d='M11.2986%200.0502569C9.82665%20-0.0184086%206.18071%20-0.0150753%204.7074%200.0502569C3.41276%200.110922%202.27078%200.423584%201.35013%201.34423C-0.188512%202.88287%200.00815137%204.95617%200.00815137%207.99678C0.00815137%2011.1087%20-0.165179%2013.134%201.35013%2014.6493C2.89477%2016.1933%204.99806%2015.9913%208.00268%2015.9913C11.0853%2015.9913%2012.1493%2015.9933%2013.2393%2015.5713C14.7212%2014.996%2015.8399%2013.6714%2015.9492%2011.2921C16.0185%209.81942%2016.0145%206.17415%2015.9492%204.70084C15.8172%201.89222%2014.3099%200.188921%2011.2986%200.0502569V0.0502569ZM13.6286%2013.6314C12.6199%2014.64%2011.2206%2014.55%207.98335%2014.55C4.65007%2014.55%203.31343%2014.5993%202.33811%2013.6214C1.2148%2012.5034%201.41813%2010.7081%201.41813%207.98612C1.41813%204.30285%201.04013%201.65023%204.73674%201.4609C5.58605%201.4309%205.83605%201.4209%207.97401%201.4209L8.00401%201.4409C11.5566%201.4409%2014.3439%201.06891%2014.5112%204.76484C14.5492%205.60816%2014.5579%205.86149%2014.5579%207.99612C14.5572%2011.2907%2014.6199%2012.6354%2013.6286%2013.6314V13.6314Z'%20fill='white'/%3e%3cpath%20d='M12.2706%204.6889C12.8004%204.6889%2013.2299%204.2594%2013.2299%203.72958C13.2299%203.19976%2012.8004%202.77026%2012.2706%202.77026C11.7408%202.77026%2011.3113%203.19976%2011.3113%203.72958C11.3113%204.2594%2011.7408%204.6889%2012.2706%204.6889Z'%20fill='white'/%3e%3c/svg%3e",yM=()=>{const[t,e]=U.useState("home"),[n,i]=U.useState(!1);U.useEffect(()=>{const s=()=>{window.scrollY>50?i(!0):i(!1)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const r=s=>{e(s)};return P.jsx("div",{children:P.jsx(qa,{expand:"lg",className:n?"scrolled":"",children:P.jsxs(Zr,{children:[P.jsx(qa.Brand,{href:"#home",children:P.jsx("img",{src:tx,alt:"Logo"})}),P.jsx(qa.Toggle,{"aria-controls":"basic-navbar-nav",children:P.jsx("span",{className:"navbar-toggler-icon"})}),P.jsxs(qa.Collapse,{id:"basic-navbar-nav",children:[P.jsxs($n,{className:"me-auto",children:[P.jsx($n.Link,{href:"#home",className:t==="home"?"active navbar-link":"navbar-link",onClick:()=>r("home"),children:"Home"}),P.jsx($n.Link,{href:"#skills",className:t==="skills"?"active navbar-link":"navbar-link",onClick:()=>r("skills"),children:"Skills"}),P.jsx($n.Link,{href:"#projects",className:t==="projects"?"active navbar-link":"navbar-link",onClick:()=>r("projects"),children:"Projects"})]}),P.jsx("span",{className:"navbar-text",children:P.jsxs("div",{className:"social-icon",children:[P.jsx("span",{className:"social-ln",children:P.jsx("a",{href:"https://www.linkedin.com/in/%C5%BEan-ro%C5%A1tan-a787b92b2/",target:"_blank",rel:"noopener noreferrer",children:P.jsx("img",{src:nx,alt:""})})}),P.jsx("span",{className:"social-f",children:P.jsx("a",{href:"https://www.facebook.com/profile.php?id=100010029815991&locale=sl_SI",target:"_blank",rel:"noopener noreferrer",children:P.jsx("img",{src:ix,alt:""})})}),P.jsx("span",{className:"social-in",children:P.jsx("a",{href:"https://www.instagram.com/zan_rostan/",target:"_blank",rel:"noopener noreferrer",children:P.jsx("img",{src:rx,alt:""})})}),P.jsx("button",{className:"vvd",onClick:()=>{var s;r("connect"),(s=document.getElementById("connect"))==null||s.scrollIntoView({behavior:"smooth"})},children:P.jsx("span",{children:"Contact me"})})]})})]})]})})})};function SM({as:t,bsPrefix:e,className:n,...i}){e=Ft(e,"col");const r=y_(),s=S_(),o=[],a=[];return r.forEach(l=>{const u=i[l];delete i[l];let c,h,d;typeof u=="object"&&u!=null?{span:c,offset:h,order:d}=u:c=u;const p=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${p}`:`${e}${p}-${c}`),d!=null&&a.push(`order${p}-${d}`),h!=null&&a.push(`offset${p}-${h}`)}),[{...i,className:ft(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const zt=U.forwardRef((t,e)=>{const[{className:n,...i},{as:r="div",bsPrefix:s,spans:o}]=SM(t);return P.jsx(r,{...i,ref:e,className:ft(n,!o.length&&s)})});zt.displayName="Col";function EM(t,e,n){const i=U.useRef(t!==void 0),[r,s]=U.useState(e),o=t!==void 0,a=i.current;return i.current=o,!o&&a&&r!==e&&s(e),[o?t:r,U.useCallback((...l)=>{const[u,...c]=l;let h=n==null?void 0:n(u,...c);return s(u),h},[n])]}const fu={prefix:String(Math.round(Math.random()*1e10)),current:0},sx=wt.createContext(fu),MM=wt.createContext(!1);let TM=!!(typeof window<"u"&&window.document&&window.document.createElement),Pc=new WeakMap;function wM(t=!1){let e=U.useContext(sx),n=U.useRef(null);if(n.current===null&&!t){var i,r;let s=(r=wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||r===void 0||(i=r.ReactCurrentOwner)===null||i===void 0?void 0:i.current;if(s){let o=Pc.get(s);o==null?Pc.set(s,{id:e.current,state:s.memoizedState}):s.memoizedState!==o.state&&(e.current=o.id,Pc.delete(s))}n.current=++e.current}return n.current}function bM(t){let e=U.useContext(sx);e===fu&&!TM&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=wM(!!t),i=`react-aria${e.prefix}`;return t||`${i}-${n}`}function CM(t){let e=wt.useId(),[n]=U.useState(DM()),i=n?"react-aria":`react-aria${fu.prefix}`;return t||`${i}-${e}`}const AM=typeof wt.useId=="function"?CM:bM;function RM(){return!1}function PM(){return!0}function LM(t){return()=>{}}function DM(){return typeof wt.useSyncExternalStore=="function"?wt.useSyncExternalStore(LM,RM,PM):U.useContext(MM)}const ui=U.forwardRef(({bsPrefix:t,className:e,as:n="div",...i},r)=>{const s=Ft(t,"row"),o=y_(),a=S_(),l=`${s}-cols`,u=[];return o.forEach(c=>{const h=i[c];delete i[c];let d;h!=null&&typeof h=="object"?{cols:d}=h:d=h;const p=c!==a?`-${c}`:"";d!=null&&u.push(`${l}${p}-${d}`)}),P.jsx(n,{ref:r,...i,className:ft(e,s,...u)})});ui.displayName="Row";const IM=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],NM=["activeKey","getControlledId","getControllerId"],UM=["as"];function mf(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ox(t){let{active:e,eventKey:n,mountOnEnter:i,transition:r,unmountOnExit:s,role:o="tabpanel",onEnter:a,onEntering:l,onEntered:u,onExit:c,onExiting:h,onExited:d}=t,p=mf(t,IM);const v=U.useContext(fo);if(!v)return[Object.assign({},p,{role:o}),{eventKey:n,isActive:e,mountOnEnter:i,transition:r,unmountOnExit:s,onEnter:a,onEntering:l,onEntered:u,onExit:c,onExiting:h,onExited:d}];const{activeKey:x,getControlledId:m,getControllerId:f}=v,_=mf(v,NM),g=ga(n);return[Object.assign({},p,{role:o,id:m(n),"aria-labelledby":f(n)}),{eventKey:n,isActive:e==null&&g!=null?ga(x)===g:e,transition:r||_.transition,mountOnEnter:i??_.mountOnEnter,unmountOnExit:s??_.unmountOnExit,onEnter:a,onEntering:l,onEntered:u,onExit:c,onExiting:h,onExited:d}]}const ax=U.forwardRef((t,e)=>{let{as:n="div"}=t,i=mf(t,UM);const[r,{isActive:s,onEnter:o,onEntering:a,onEntered:l,onExit:u,onExiting:c,onExited:h,mountOnEnter:d,unmountOnExit:p,transition:v=Rh}]=ox(i);return P.jsx(fo.Provider,{value:null,children:P.jsx($r.Provider,{value:null,children:P.jsx(v,{in:s,onEnter:o,onEntering:a,onEntered:l,onExit:u,onExiting:c,onExited:h,mountOnEnter:d,unmountOnExit:p,children:P.jsx(n,Object.assign({},r,{ref:e,hidden:!s,"aria-hidden":!s}))})})})});ax.displayName="TabPanel";const lx=t=>{const{id:e,generateChildId:n,onSelect:i,activeKey:r,defaultActiveKey:s,transition:o,mountOnEnter:a,unmountOnExit:l,children:u}=t,[c,h]=EM(r,s,i),d=AM(e),p=U.useMemo(()=>n||((x,m)=>d?`${d}-${m}-${x}`:null),[d,n]),v=U.useMemo(()=>({onSelect:h,activeKey:c,transition:o,mountOnEnter:a||!1,unmountOnExit:l||!1,getControlledId:x=>p(x,"tabpane"),getControllerId:x=>p(x,"tab")}),[h,c,o,a,l,p]);return P.jsx(fo.Provider,{value:v,children:P.jsx($r.Provider,{value:h||null,children:u})})};lx.Panel=ax;function ux(t){return typeof t=="boolean"?t?ku:Rh:t}const cx=({transition:t,...e})=>P.jsx(lx,{...e,transition:ux(t)});cx.displayName="TabContainer";const dx=U.forwardRef(({className:t,bsPrefix:e,as:n="div",...i},r)=>(e=Ft(e,"tab-content"),P.jsx(n,{ref:r,className:ft(t,e),...i})));dx.displayName="TabContent";const fx=U.forwardRef(({bsPrefix:t,transition:e,...n},i)=>{const[{className:r,as:s="div",...o},{isActive:a,onEnter:l,onEntering:u,onEntered:c,onExit:h,onExiting:d,onExited:p,mountOnEnter:v,unmountOnExit:x,transition:m=ku}]=ox({...n,transition:ux(e)}),f=Ft(t,"tab-pane");return P.jsx(fo.Provider,{value:null,children:P.jsx($r.Provider,{value:null,children:P.jsx(m,{in:a,onEnter:l,onEntering:u,onEntered:c,onExit:h,onExiting:d,onExited:p,mountOnEnter:v,unmountOnExit:x,children:P.jsx(s,{...o,ref:i,className:ft(r,f,a&&"active")})})})})});fx.displayName="TabPane";const OM={eventKey:Yt.oneOfType([Yt.string,Yt.number]),title:Yt.node.isRequired,disabled:Yt.bool,tabClassName:Yt.string,tabAttrs:Yt.object},hx=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};hx.propTypes=OM;const wo=Object.assign(hx,{Container:cx,Content:dx,Pane:fx});var FM=["color","size","title","className"];function gf(){return gf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gf.apply(this,arguments)}function kM(t,e){if(t==null)return{};var n=BM(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function BM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var Lh=U.forwardRef(function(t,e){var n=t.color,i=t.size,r=t.title,s=t.className,o=kM(t,FM);return wt.createElement("svg",gf({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:n,className:["bi","bi-arrow-right-circle",s].filter(Boolean).join(" ")},o),r?wt.createElement("title",null,r):null,wt.createElement("path",{fillRule:"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"}))});Lh.propTypes={color:Yt.string,size:Yt.oneOfType([Yt.string,Yt.number]),title:Yt.string,className:Yt.string};Lh.defaultProps={color:"currentColor",size:"1em",title:null,className:""};const zM="/assets/profile3d-BRNhsKcG.png";var Bu={},px="Expected a function",wm=NaN,HM="[object Symbol]",VM=/^\s+|\s+$/g,GM=/^[-+]0x[0-9a-f]+$/i,WM=/^0b[01]+$/i,jM=/^0o[0-7]+$/i,XM=parseInt,$M=typeof tr=="object"&&tr&&tr.Object===Object&&tr,YM=typeof self=="object"&&self&&self.Object===Object&&self,qM=$M||YM||Function("return this")(),KM=Object.prototype,ZM=KM.toString,QM=Math.max,JM=Math.min,Lc=function(){return qM.Date.now()};function e2(t,e,n){var i,r,s,o,a,l,u=0,c=!1,h=!1,d=!0;if(typeof t!="function")throw new TypeError(px);e=bm(e)||0,hu(n)&&(c=!!n.leading,h="maxWait"in n,s=h?QM(bm(n.maxWait)||0,e):s,d="trailing"in n?!!n.trailing:d);function p(w){var S=i,L=r;return i=r=void 0,u=w,o=t.apply(L,S),o}function v(w){return u=w,a=setTimeout(f,e),c?p(w):o}function x(w){var S=w-l,L=w-u,E=e-S;return h?JM(E,s-L):E}function m(w){var S=w-l,L=w-u;return l===void 0||S>=e||S<0||h&&L>=s}function f(){var w=Lc();if(m(w))return _(w);a=setTimeout(f,x(w))}function _(w){return a=void 0,d&&i?p(w):(i=r=void 0,o)}function g(){a!==void 0&&clearTimeout(a),u=0,i=l=r=a=void 0}function y(){return a===void 0?o:_(Lc())}function T(){var w=Lc(),S=m(w);if(i=arguments,r=this,l=w,S){if(a===void 0)return v(l);if(h)return a=setTimeout(f,e),p(l)}return a===void 0&&(a=setTimeout(f,e)),o}return T.cancel=g,T.flush=y,T}function t2(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(px);return hu(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),e2(t,e,{leading:i,maxWait:e,trailing:r})}function hu(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function n2(t){return!!t&&typeof t=="object"}function i2(t){return typeof t=="symbol"||n2(t)&&ZM.call(t)==HM}function bm(t){if(typeof t=="number")return t;if(i2(t))return wm;if(hu(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=hu(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(VM,"");var n=WM.test(t);return n||jM.test(t)?XM(t.slice(2),n?2:8):GM.test(t)?wm:+t}var r2=t2,s2=function(e,n,i,r){var s=i?i.call(r,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var h=e[c],d=n[c];if(s=i?i.call(r,h,d,c):void 0,s===!1||s===void 0&&h!==d)return!1}return!0};Bu.__esModule=!0;Bu.default=void 0;var Ka=l2(U),Cn=Dh(k_),o2=Dh(r2),a2=Dh(s2);function Dh(t){return t&&t.__esModule?t:{default:t}}function l2(t){if(t&&t.__esModule)return t;var e={};if(t!=null){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}}return e.default=t,e}function Bs(){return Bs=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bs.apply(this,arguments)}function u2(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var Ih=function(t){u2(e,t);function e(i){var r;return r=t.call(this,i)||this,r.isVisible=function(s,o,a){var l=s.top,u=s.left,c=s.bottom,h=s.right,d=s.width,p=s.height,v=r.props,x=v.offset,m=v.partialVisibility;if(l+h+c+u===0)return!1;var f=0-x,_=0-x,g=o+x,y=a+x;return m?l+p>=f&&u+d>=_&&c-p<=y&&h-d<=g:l>=f&&u>=_&&c<=y&&h<=g},r.isComponentVisible=function(){setTimeout(function(){if(!(!r.nodeRef||!r.nodeRef.getBoundingClientRect)){var s=document.documentElement,o=r.props.once,a=r.nodeRef.getBoundingClientRect(),l=window.innerWidth||s.clientWidth,u=window.innerHeight||s.clientHeight,c=r.isVisible(a,l,u);c&&o&&r.removeListener(),r.setState({isVisible:c})}},0)},r.setNodeRef=function(s){return r.nodeRef=s},r.ownProps=Object.keys(e.propTypes),r.state={isVisible:!1},r.throttleCb=(0,o2.default)(r.isComponentVisible,r.props.throttleInterval),i.nodeRef&&r.setNodeRef(i.nodeRef),r}var n=e.prototype;return n.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},n.componentDidUpdate=function(r){(0,a2.default)(this.getChildProps(this.props),this.getChildProps(r))||this.isComponentVisible()},n.componentWillUnmount=function(){this.removeListener()},n.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},n.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},n.getChildProps=function(r){var s=this;r===void 0&&(r=this.props);var o={};return Object.keys(r).forEach(function(a){s.ownProps.indexOf(a)===-1&&(o[a]=r[a])}),o},n.getChildren=function(){var r=this;return typeof this.props.children=="function"?this.props.children(Bs({},this.getChildProps(),{isVisible:this.state.isVisible})):Ka.default.Children.map(this.props.children,function(s){return Ka.default.cloneElement(s,Bs({},r.getChildProps(),{isVisible:r.state.isVisible}))})},n.render=function(){var r=this.props,s=r.className,o=r.style,a=r.nodeRef,l=r.tag,u=Bs({},s&&{className:s},o&&{style:o});return Ka.default.createElement(l,Bs({ref:!a&&this.setNodeRef},u),this.getChildren())},e}(Ka.PureComponent);Bu.default=Ih;Ih.propTypes={once:Cn.default.bool,throttleInterval:function(e,n,i){var r=e[n];return!Number.isInteger(r)||r<0?new Error("The "+n+" prop you provided to "+i+" is not a valid integer >= 0."):null},children:Cn.default.oneOfType([Cn.default.func,Cn.default.element,Cn.default.arrayOf(Cn.default.element)]),style:Cn.default.object,className:Cn.default.string,offset:Cn.default.number,partialVisibility:Cn.default.bool,nodeRef:Cn.default.object,tag:Cn.default.string};Ih.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"};var mx=void 0,c2=d2(Bu);function d2(t){return t&&t.__esModule?t:{default:t}}var f2=c2.default;mx=f2;const h2=()=>{const[t,e]=U.useState(0),[n,i]=U.useState(!1),r=["a CS student.","a creative web designer.","a 3D animation enthusiast.","a Photoshop wizard.","a game developer.","a website architect.","a software developer.","a UI/UX thinker.","a digital creator."],[s,o]=U.useState(""),[a,l]=U.useState(Math.random()*100),u=2e3,[c,h]=U.useState(!1),[d,p]=U.useState(!0);U.useEffect(()=>{let x=setInterval(()=>{v()},a);return()=>{clearInterval(x)}},[s]);const v=()=>{let x=t%r.length,m=r[x],f=n?m.substring(0,s.length-1):m.substring(0,s.length+1);o(f),h(f===m),n&&l(50),!n&&f===m?(i(!0),l(u)):n&&f===""&&(i(!1),e(t+1),l(100))};return U.useEffect(()=>{const x=setInterval(()=>{p(c?m=>!m:!0)},500);return()=>clearInterval(x)},[c]),P.jsx("section",{className:"banner",id:"home",children:P.jsx(Zr,{children:P.jsxs(ui,{className:"align-items-center",children:[P.jsx(zt,{xs:12,md:6,xl:7,children:P.jsx(mx,{children:P.jsxs("div",{children:[P.jsx("span",{className:"tagline",children:"Welcome to my Portfolio"}),P.jsxs("h1",{children:["Hi I'm Žan, ",P.jsx("div",{}),P.jsxs("span",{className:"wrap",children:[s,P.jsx("span",{className:"tall-line",style:{opacity:d?1:0},children:"|"})]}),P.jsx("div",{})]}),P.jsx("p",{children:"Hi, I’m Žan, a digital creator studying at the Computer and Information Science Faculty in Ljubljana. I’ve been playing with computers since a very early age, which sparked my passion for solving logical challenges and turning innovative ideas into reality. I love experimenting with new technologies and adding a creative touch to my projects, like my published 2D educational game for a local utility company. I focus on understanding all aspects of a project to ensure cohesive and impactful solutions. I’m passionate about staying current with IT trends, and right now, I’m exploring Flutter, Dart, and AI. I’m excited to work on larger, collaborative projects that have a wider impact."}),P.jsxs("button",{onClick:()=>window.open("https://github.com/zannLeft","_blank"),children:["My GitHub",P.jsx(Lh,{size:25})]})]})})}),P.jsx(zt,{xs:12,md:6,xl:5,className:"img-box-container",children:P.jsx("img",{src:zM,alt:"Header img"})})]})})})};var Nh={},Uh={},lt={},zu={};(function(t){function e(o,a,l){var u=a.slidesToShow,c=a.currentSlide;return l.length>2*u?o+2*u:c>=l.length?l.length+o:o}function n(o,a){if(a.length>2*o){for(var l={},u=a.length-2*o,c=a.length-u,h=u,d=0;d<c;d++)l[d]=h,h++;var p=a.length+c,v=p+a.slice(0,2*o).length,x=0;for(d=p;d<=v;d++)l[d]=x,x++;var m=p,f=0;for(d=c;d<m;d++)l[d]=f,f++;return l}l={};var _=3*a.length,g=0;for(d=0;d<_;d++)l[d]=g,++g===a.length&&(g=0);return l}function i(o,a){return a.length<o?a:a.length>2*o?a.slice(a.length-2*o,a.length).concat(a,a.slice(0,2*o)):a.concat(a,a)}function r(o,a){return a.length>2*o?2*o:a.length}function s(o,a,l){var u,c=o.currentSlide,h=o.slidesToShow,d=o.itemWidth,p=o.totalItems,v=0,x=0,m=c===0,f=a.length-(a.length-2*h);return a.length<h?(x=v=0,m=u=!1):a.length>2*h?((u=c>=f+a.length)&&(x=-d*(v=c-a.length)),m&&(x=-d*(v=f+(a.length-2*h)))):((u=c>=2*a.length)&&(x=-d*(v=c-a.length)),m&&(x=l.showDots?-d*(v=a.length):-d*(v=p/3))),{isReachingTheEnd:u,isReachingTheStart:m,nextSlide:v,nextPosition:x}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOriginalCounterPart=e,t.getOriginalIndexLookupTableByClones=n,t.getClones=i,t.getInitialSlideInInfiniteMode=r,t.checkClonesPosition=s})(zu);var $s={};Object.defineProperty($s,"__esModule",{value:!0});function p2(t,e,n,i){var r=0,s=i||n;return e&&s&&(r=t[s].partialVisibilityGutter||t[s].paritialVisibilityGutter),r}function m2(t,e){var n;return e[t]&&(n=(100/e[t].items).toFixed(1)),n}function g2(t,e,n){return Math.round(n/(e+(t.centerMode?1:0)))}$s.getPartialVisibilityGutter=p2,$s.getWidthFromDeviceType=m2,$s.getItemClientSideWidth=g2;var Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});var vf=$s;function Oh(t){var e=t.slidesToShow;return t.totalItems<e}function v2(t,e){var n,i=t.domLoaded,r=t.slidesToShow,s=t.containerWidth,o=t.itemWidth,a=e.deviceType,l=e.responsive,u=e.ssr,c=e.partialVisbile,h=e.partialVisible,d=!!(i&&r&&s&&o);u&&a&&!d&&(n=vf.getWidthFromDeviceType(a,l));var p=!!(u&&a&&!d&&n);return{shouldRenderOnSSR:p,flexBisis:n,domFullyLoaded:d,partialVisibilityGutter:vf.getPartialVisibilityGutter(l,c||h,a,t.deviceType),shouldRenderAtAll:p||d}}function _2(t,e){var n=e.currentSlide,i=e.slidesToShow;return n<=t&&t<n+i}function gx(t,e,n){var i=n||t.transform;return!e.infinite&&t.currentSlide===0||Oh(t)?i:i+t.itemWidth/2}function x2(t){return!(0<t.currentSlide)}function vx(t){var e=t.currentSlide,n=t.totalItems;return!(e+t.slidesToShow<n)}function _x(t,e,n,i){e===void 0&&(e=0);var r=t.currentSlide,s=t.slidesToShow,o=vx(t),a=!n.infinite&&o,l=i||t.transform;if(Oh(t))return l;var u=l+r*e;return a?u+(t.containerWidth-(t.itemWidth-e)*s):u}function xx(t,e){return t.rtl?-1*e:e}function y2(t,e,n){var i=e.partialVisbile,r=e.partialVisible,s=e.responsive,o=e.deviceType,a=e.centerMode,l=n||t.transform,u=vf.getPartialVisibilityGutter(s,i||r,o,t.deviceType);return xx(e,r||i?_x(t,u,e,n):a?gx(t,e,n):l)}function S2(t,e){var n=t.domLoaded,i=t.slidesToShow,r=t.containerWidth,s=t.itemWidth,o=e.deviceType,a=e.responsive,l=e.slidesToSlide||1,u=!!(n&&i&&r&&s);return e.ssr&&e.deviceType&&!u&&Object.keys(a).forEach(function(c){var h=a[c].slidesToSlide;o===c&&h&&(l=h)}),u&&Object.keys(a).forEach(function(c){var h=a[c],d=h.breakpoint,p=h.slidesToSlide,v=d.max,x=d.min;p&&window.innerWidth>=x&&window.innerWidth<=v&&(l=p)}),l}Nt.notEnoughChildren=Oh,Nt.getInitialState=v2,Nt.getIfSlideIsVisbile=_2,Nt.getTransformForCenterMode=gx,Nt.isInLeftEnd=x2,Nt.isInRightEnd=vx,Nt.getTransformForPartialVsibile=_x,Nt.parsePosition=xx,Nt.getTransform=y2,Nt.getSlidesToSlide=S2;var Fh={};Object.defineProperty(Fh,"__esModule",{value:!0});var E2=function(t,e,n){var i;return function(){var r=arguments;i||(t.apply(this,r),i=!0,typeof n=="function"&&n(!0),setTimeout(function(){i=!1,typeof n=="function"&&n(!1)},e))}};Fh.default=E2;var yx={};(function(t){function e(n,i){var r=i.partialVisbile,s=i.partialVisible,o=i.centerMode,a=i.ssr,l=i.responsive;if((r||s)&&o)throw new Error("center mode can not be used at the same time with partialVisible");if(!l)throw a?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(l&&typeof l!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e})(yx);var kh={};Object.defineProperty(kh,"__esModule",{value:!0});var M2=Nt;function T2(t,e,n){n===void 0&&(n=0);var i,r,s=t.slidesToShow,o=t.currentSlide,a=t.itemWidth,l=t.totalItems,u=M2.getSlidesToSlide(t,e),c=o+1+n+s+(0<n?0:u);return r=c<=l?-a*(i=o+n+(0<n?0:u)):l<c&&o!==l-s?-a*(i=l-s):i=void 0,{nextSlides:i,nextPosition:r}}kh.populateNextSlides=T2;var Bh={};Object.defineProperty(Bh,"__esModule",{value:!0});var w2=U,b2=Nt,C2=Nt;function A2(t,e,n){n===void 0&&(n=0);var i,r,s=t.currentSlide,o=t.itemWidth,a=t.slidesToShow,l=e.children,u=e.showDots,c=e.infinite,h=b2.getSlidesToSlide(t,e),d=s-n-(0<n?0:h),p=(w2.Children.toArray(l).length-a)%h;return r=0<=d?(i=d,u&&!c&&0<p&&C2.isInRightEnd(t)&&(i=s-p),-o*i):i=d<0&&s!==0?0:void 0,{nextSlides:i,nextPosition:r}}Bh.populatePreviousSlides=A2;var Sx={};(function(t){function e(n,i,r,s,o,a){var l,u,c=n.itemWidth,h=n.slidesToShow,d=n.totalItems,p=n.currentSlide,v=i.infinite,x=!1,m=Math.round((r-s)/c),f=Math.round((s-r)/c),_=r<o;if(o<r&&m<=h){l="right";var g=Math.abs(-c*(d-h)),y=a-(s-o),T=p===d-h;(Math.abs(y)<=g||T&&v)&&(u=y,x=!0)}return _&&f<=h&&(l="left",((y=a+(o-s))<=0||p===0&&v)&&(x=!0,u=y)),{direction:l,nextPosition:u,canContinue:x}}Object.defineProperty(t,"__esModule",{value:!0}),t.populateSlidesOnMouseTouchMove=e})(Sx);Object.defineProperty(lt,"__esModule",{value:!0});var Za=zu;lt.getOriginalCounterPart=Za.getOriginalCounterPart,lt.getClones=Za.getClones,lt.checkClonesPosition=Za.checkClonesPosition,lt.getInitialSlideInInfiniteMode=Za.getInitialSlideInInfiniteMode;var Dc=$s;lt.getWidthFromDeviceType=Dc.getWidthFromDeviceType,lt.getPartialVisibilityGutter=Dc.getPartialVisibilityGutter,lt.getItemClientSideWidth=Dc.getItemClientSideWidth;var Wi=Nt;lt.getInitialState=Wi.getInitialState,lt.getIfSlideIsVisbile=Wi.getIfSlideIsVisbile,lt.getTransformForCenterMode=Wi.getTransformForCenterMode,lt.getTransformForPartialVsibile=Wi.getTransformForPartialVsibile,lt.isInLeftEnd=Wi.isInLeftEnd,lt.isInRightEnd=Wi.isInRightEnd,lt.notEnoughChildren=Wi.notEnoughChildren,lt.getSlidesToSlide=Wi.getSlidesToSlide;var R2=Fh;lt.throttle=R2.default;var P2=yx;lt.throwError=P2.default;var L2=kh;lt.populateNextSlides=L2.populateNextSlides;var D2=Bh;lt.populatePreviousSlides=D2.populatePreviousSlides;var I2=Sx;lt.populateSlidesOnMouseTouchMove=I2.populateSlidesOnMouseTouchMove;var Hu={},N2=tr&&tr.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)r.hasOwnProperty(s)&&(i[s]=r[s])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(Hu,"__esModule",{value:!0});var U2=U;function O2(t){return"clientY"in t}Hu.isMouseMoveEvent=O2;var F2=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return N2(e,t),e}(U2.Component);Hu.default=F2;var zh={},Hh={};Object.defineProperty(Hh,"__esModule",{value:!0});var k2=zu,B2=Nt;function z2(t,e,n,i){var r={},s=B2.getSlidesToSlide(e,n);return Array(t).fill(0).forEach(function(o,a){var l=k2.getOriginalCounterPart(a,e,i);if(a===0)r[0]=l;else{var u=r[a-1]+s;r[a]=u}}),r}Hh.getLookupTableForNextSlides=z2;Object.defineProperty(zh,"__esModule",{value:!0});var bo=U,H2=zu,V2=Hh,Cm=Nt,G2=function(t){var e=t.props,n=t.state,i=t.goToSlide,r=t.getState,s=e.showDots,o=e.customDot,a=e.dotListClass,l=e.infinite,u=e.children;if(!s||Cm.notEnoughChildren(n))return null;var c,h=n.currentSlide,d=n.slidesToShow,p=Cm.getSlidesToSlide(n,e),v=bo.Children.toArray(u);c=l?Math.ceil(v.length/p):Math.ceil((v.length-d)/p)+1;var x=V2.getLookupTableForNextSlides(c,n,e,v),m=H2.getOriginalIndexLookupTableByClones(d,v),f=m[h];return bo.createElement("ul",{className:"react-multi-carousel-dot-list "+a},Array(c).fill(0).map(function(_,g){var y,T;if(l){T=x[g];var w=m[T];y=f===w||w<=f&&f<w+p}else{var S=v.length-d,L=g*p;y=(T=S<L?S:L)===h||T<h&&h<T+p&&h<v.length-d}return o?bo.cloneElement(o,{index:g,active:y,key:g,onClick:function(){return i(T)},carouselState:r()}):bo.createElement("li",{"data-index":g,key:g,className:"react-multi-carousel-dot "+(y?"react-multi-carousel-dot--active":"")},bo.createElement("button",{"aria-label":"Go to slide "+(g+1),onClick:function(){return i(T)}}))}))};zh.default=G2;var Vu={};Object.defineProperty(Vu,"__esModule",{value:!0});var pu=U,W2=function(t){var e=t.customLeftArrow,n=t.getState,i=t.previous,r=t.disabled,s=t.rtl;if(e)return pu.cloneElement(e,{onClick:function(){return i()},carouselState:n(),disabled:r,rtl:s});var o=s?"rtl":"";return pu.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+o,onClick:function(){return i()},type:"button",disabled:r})};Vu.LeftArrow=W2;var j2=function(t){var e=t.customRightArrow,n=t.getState,i=t.next,r=t.disabled,s=t.rtl;if(e)return pu.cloneElement(e,{onClick:function(){return i()},carouselState:n(),disabled:r,rtl:s});var o=s?"rtl":"";return pu.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+o,onClick:function(){return i()},type:"button",disabled:r})};Vu.RightArrow=j2;var Vh={};Object.defineProperty(Vh,"__esModule",{value:!0});var Qa=U,Ic=lt,X2=function(t){var e=t.props,n=t.state,i=t.goToSlide,r=t.clones,s=t.notEnoughChildren,o=n.itemWidth,a=e.children,l=e.infinite,u=e.itemClass,c=e.itemAriaLabel,h=e.partialVisbile,d=e.partialVisible,p=Ic.getInitialState(n,e),v=p.flexBisis,x=p.shouldRenderOnSSR,m=p.domFullyLoaded,f=p.partialVisibilityGutter;return p.shouldRenderAtAll?(h&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),Qa.createElement(Qa.Fragment,null,(l?r:Qa.Children.toArray(a)).map(function(_,g){return Qa.createElement("li",{key:g,"data-index":g,onClick:function(){e.focusOnSelect&&i(g)},"aria-hidden":Ic.getIfSlideIsVisbile(g,n)?"false":"true","aria-label":c||(_.props.ariaLabel?_.props.ariaLabel:null),style:{flex:x?"1 0 "+v+"%":"auto",position:"relative",width:m?((h||d)&&f&&!s?o-f:o)+"px":"auto"},className:"react-multi-carousel-item "+(Ic.getIfSlideIsVisbile(g,n)?"react-multi-carousel-item--active":"")+" "+u},_)}))):null};Vh.default=X2;var $2=tr&&tr.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)r.hasOwnProperty(s)&&(i[s]=r[s])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(Uh,"__esModule",{value:!0});var kt=U,vt=lt,Er=Hu,Y2=zh,Am=Vu,q2=Vh,Ja=Nt,ri=400,Rm="transform 400ms ease-in-out",K2=function(t){function e(n){var i=t.call(this,n)||this;return i.containerRef=kt.createRef(),i.listRef=kt.createRef(),i.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:kt.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},i.onResize=i.onResize.bind(i),i.handleDown=i.handleDown.bind(i),i.handleMove=i.handleMove.bind(i),i.handleOut=i.handleOut.bind(i),i.onKeyUp=i.onKeyUp.bind(i),i.handleEnter=i.handleEnter.bind(i),i.setIsInThrottle=i.setIsInThrottle.bind(i),i.next=vt.throttle(i.next.bind(i),n.transitionDuration||ri,i.setIsInThrottle),i.previous=vt.throttle(i.previous.bind(i),n.transitionDuration||ri,i.setIsInThrottle),i.goToSlide=vt.throttle(i.goToSlide.bind(i),n.transitionDuration||ri,i.setIsInThrottle),i.onMove=!1,i.initialX=0,i.lastX=0,i.isAnimationAllowed=!1,i.direction="",i.initialY=0,i.isInThrottle=!1,i.transformPlaceHolder=0,i}return $2(e,t),e.prototype.resetTotalItems=function(){var n=this,i=kt.Children.count(this.props.children),r=vt.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,i));this.setState({totalItems:i,currentSlide:r},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},e.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},e.prototype.setTransformDirectly=function(n,i){var r=this.props.additionalTransfrom;this.transformPlaceHolder=n;var s=Ja.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(i),this.listRef.current.style.transform="translate3d("+(s+r)+"px,0,0)")},e.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||Rm:"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(n,i,r,s){var o=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var a=kt.Children.toArray(this.props.children),l=vt.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,a),u=vt.getClones(this.state.slidesToShow,a),c=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:u.length,currentSlide:r&&!s?c:l},function(){o.correctItemsPosition(i||o.state.itemWidth)})},e.prototype.setItemsToShow=function(n,i){var r=this,s=this.props.responsive;Object.keys(s).forEach(function(o){var a=s[o],l=a.breakpoint,u=a.items,c=l.max,h=l.min,d=[window.innerWidth];window.screen&&window.screen.width&&d.push(window.screen.width);var p=Math.min.apply(Math,d);h<=p&&p<=c&&(r.setState({slidesToShow:u,deviceType:o}),r.setContainerAndItemWidth(u,n,i))})},e.prototype.setContainerAndItemWidth=function(n,i,r){var s=this;if(this.containerRef&&this.containerRef.current){var o=this.containerRef.current.offsetWidth,a=vt.getItemClientSideWidth(this.props,n,o);this.setState({containerWidth:o,itemWidth:a},function(){s.props.infinite&&s.setClones(n,a,i,r)}),i&&this.correctItemsPosition(a)}},e.prototype.correctItemsPosition=function(n,i,r){i&&(this.isAnimationAllowed=!0),!i&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;r&&this.setTransformDirectly(s,!0),this.setState({transform:s})},e.prototype.onResize=function(n){var i;i=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(i)},e.prototype.componentDidUpdate=function(n,i){var r=this,s=n.keyBoardControl,o=n.autoPlay,a=n.children,l=i.containerWidth,u=i.domLoaded,c=i.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){r.setItemsToShow(!0)},this.props.transitionDuration||ri)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),a.length!==this.props.children.length?e.clonesTimeout=setTimeout(function(){r.props.infinite?r.setClones(r.state.slidesToShow,r.state.itemWidth,!0,!0):r.resetTotalItems()},this.props.transitionDuration||ri):this.props.infinite&&this.state.currentSlide!==c&&this.correctClonesPosition({domLoaded:u}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&vt.isInRightEnd(this.state)){var h=this.props.transitionDuration||ri;e.isInThrottleTimeout=setTimeout(function(){r.setIsInThrottle(!1),r.resetAutoplayInterval(),r.goToSlide(0,void 0,!!r.props.rewindWithAnimation)},h+this.props.autoPlaySpeed)}},e.prototype.correctClonesPosition=function(n){var i=this,r=n.domLoaded,s=kt.Children.toArray(this.props.children),o=vt.checkClonesPosition(this.state,s,this.props),a=o.isReachingTheEnd,l=o.isReachingTheStart,u=o.nextSlide,c=o.nextPosition;this.state.domLoaded&&r&&(a||l)&&(this.isAnimationAllowed=!1,e.transformTimeout=setTimeout(function(){i.setState({transform:c,currentSlide:u})},this.props.transitionDuration||ri))},e.prototype.next=function(n){var i=this;n===void 0&&(n=0);var r=this.props,s=r.afterChange,o=r.beforeChange;if(!vt.notEnoughChildren(this.state)){var a=vt.populateNextSlides(this.state,this.props,n),l=a.nextSlides,u=a.nextPosition,c=this.state.currentSlide;l!==void 0&&u!==void 0&&(typeof o=="function"&&o(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){typeof s=="function"&&(e.afterChangeTimeout=setTimeout(function(){s(c,i.getState())},i.props.transitionDuration||ri))}))}},e.prototype.previous=function(n){var i=this;n===void 0&&(n=0);var r=this.props,s=r.afterChange,o=r.beforeChange;if(!vt.notEnoughChildren(this.state)){var a=vt.populatePreviousSlides(this.state,this.props,n),l=a.nextSlides,u=a.nextPosition;if(l!==void 0&&u!==void 0){var c=this.state.currentSlide;typeof o=="function"&&o(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){typeof s=="function"&&(e.afterChangeTimeout2=setTimeout(function(){s(c,i.getState())},i.props.transitionDuration||ri))})}}},e.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),e.clonesTimeout&&clearTimeout(e.clonesTimeout),e.isInThrottleTimeout&&clearTimeout(e.isInThrottleTimeout),e.transformTimeout&&clearTimeout(e.transformTimeout),e.afterChangeTimeout&&clearTimeout(e.afterChangeTimeout),e.afterChangeTimeout2&&clearTimeout(e.afterChangeTimeout2),e.afterChangeTimeout3&&clearTimeout(e.afterChangeTimeout3)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.getCords=function(n){var i=n.clientX,r=n.clientY;return{clientX:Ja.parsePosition(this.props,i),clientY:Ja.parsePosition(this.props,r)}},e.prototype.handleDown=function(n){if(!(!Er.isMouseMoveEvent(n)&&!this.props.swipeable||Er.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var i=this.getCords(Er.isMouseMoveEvent(n)?n:n.touches[0]),r=i.clientX,s=i.clientY;this.onMove=!0,this.initialX=r,this.initialY=s,this.lastX=r,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(n){if(!(!Er.isMouseMoveEvent(n)&&!this.props.swipeable||Er.isMouseMoveEvent(n)&&!this.props.draggable||vt.notEnoughChildren(this.state))){var i=this.getCords(Er.isMouseMoveEvent(n)?n:n.touches[0]),r=i.clientX,s=i.clientY,o=this.initialX-r,a=this.initialY-s;if(this.onMove){if(!(Math.abs(o)>Math.abs(a)))return;var l=vt.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,r,this.transformPlaceHolder),u=l.direction,c=l.nextPosition,h=l.canContinue;u&&(this.direction=u,h&&c!==void 0&&this.setTransformDirectly(c)),this.lastX=r}}},e.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var i=n.type==="touchend"&&!this.props.swipeable,r=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!i&&!r&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(n){var i=n.getBoundingClientRect(),r=i.top,s=r===void 0?0:r,o=i.left,a=o===void 0?0:o,l=i.bottom,u=l===void 0?0:l,c=i.right,h=c===void 0?0:c;return 0<=s&&0<=a&&u<=(window.innerHeight||document.documentElement.clientHeight)&&h<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},e.prototype.onKeyUp=function(n){var i=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(i))return this.previous();break;case 39:if(this.isChildOfCarousel(i))return this.next();break;case 9:if(this.isChildOfCarousel(i)&&i instanceof HTMLInputElement&&this.isInViewport(i))return this.next()}},e.prototype.handleEnter=function(n){Er.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(n,i,r){var s=this;if(r===void 0&&(r=!0),!this.isInThrottle){var o=this.state.itemWidth,a=this.props,l=a.afterChange,u=a.beforeChange,c=this.state.currentSlide;typeof u!="function"||i&&(typeof i!="object"||i.skipBeforeChange)||u(n,this.getState()),this.isAnimationAllowed=r,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-o*n},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof l!="function"||i&&(typeof i!="object"||i.skipAfterChange)||(e.afterChangeTimeout3=setTimeout(function(){l(c,s.getState())},s.props.transitionDuration||ri))})}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(n){var i=this,r=this.props,s=r.customLeftArrow,o=r.rtl;return kt.createElement(Am.LeftArrow,{customLeftArrow:s,getState:function(){return i.getState()},previous:this.previous,disabled:n,rtl:o})},e.prototype.renderRightArrow=function(n){var i=this,r=this.props,s=r.customRightArrow,o=r.rtl;return kt.createElement(Am.RightArrow,{customRightArrow:s,getState:function(){return i.getState()},next:this.next,disabled:n,rtl:o})},e.prototype.renderButtonGroups=function(){var n=this,i=this.props.customButtonGroup;return i?kt.cloneElement(i,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(r,s){return n.goToSlide(r,s)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var n=this;return kt.createElement(Y2.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},e.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var i=kt.Children.toArray(this.props.children);n=vt.getClones(this.state.slidesToShow,i)}return kt.createElement(q2.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:vt.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var n=this.props,i=n.deviceType,r=n.arrows,s=n.renderArrowsWhenDisabled,o=n.removeArrowOnDeviceType,a=n.infinite,l=n.containerClass,u=n.sliderClass,c=n.customTransition,h=n.additionalTransfrom,d=n.renderDotsOutside,p=n.renderButtonGroupOutside,v=n.className,x=n.rtl,m=vt.getInitialState(this.state,this.props),f=m.shouldRenderOnSSR,_=m.shouldRenderAtAll,g=vt.isInLeftEnd(this.state),y=vt.isInRightEnd(this.state),T=r&&!(o&&(i&&-1<o.indexOf(i)||this.state.deviceType&&-1<o.indexOf(this.state.deviceType)))&&!vt.notEnoughChildren(this.state)&&_,w=!a&&g,S=!a&&y,L=Ja.getTransform(this.state,this.props);return kt.createElement(kt.Fragment,null,kt.createElement("div",{className:"react-multi-carousel-list "+l+" "+v,dir:x?"rtl":"ltr",ref:this.containerRef},kt.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+u,style:{transition:this.isAnimationAllowed?c||Rm:"none",overflow:f?"hidden":"unset",transform:"translate3d("+(L+h)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),T&&(!w||s)&&this.renderLeftArrow(w),T&&(!S||s)&&this.renderRightArrow(S),_&&!p&&this.renderButtonGroups(),_&&!d&&this.renderDotsList()),_&&d&&this.renderDotsList(),_&&p&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},e}(kt.Component);Uh.default=K2;Object.defineProperty(Nh,"__esModule",{value:!0});var Z2=Uh;Nh.default=Z2.default;var Q2=Nh;const J2=Sa(Q2),Nc="data:image/svg+xml,%3csvg%20id='ejFyC1I0bHX1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20204%20204'%20shape-rendering='geometricPrecision'%20text-rendering='geometricPrecision'%20project-id='604eb9d133ae4d8ebef5eef9c59050cb'%20export-id='cd4794c2a57b44b29215b3ebec6df805'%20cached='false'%3e%3cdefs%3e%3clinearGradient%20id='ejFyC1I0bHX2-fill'%20x1='-12.4348'%20y1='91.2145'%20x2='228.124'%20y2='92.098'%20spreadMethod='pad'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(0%200)'%3e%3cstop%20id='ejFyC1I0bHX2-fill-0'%20offset='0%25'%20stop-color='%23f4a300'/%3e%3cstop%20id='ejFyC1I0bHX2-fill-1'%20offset='100%25'%20stop-color='%23f0d58c'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M187.639,69.9021c5.453-2.0435,11.587.7122,13.057,6.3463c5.542,21.2379,4.106,43.8026-4.26,64.2976-9.699,23.764-28.001,42.997-51.254,53.863-23.254,10.866-49.7487,12.566-74.1999,4.76-24.4512-7.805-45.061-24.541-57.7179-46.87s-16.43038-48.609-10.5677-73.5974C8.55918,53.7134,23.627,31.854,44.8941,17.4842s47.17-20.1936,72.5409-16.30956c21.882,3.3498,41.98,13.70806,57.356,29.37196c4.078,4.1554,3.292,10.8339-1.262,14.4624-4.554,3.6284-11.144,2.8182-15.334-1.2258-11.983-11.5677-27.318-19.219-43.951-21.7653-20.1259-3.0811-40.6739,1.5387-57.5446,12.9379C39.8288,46.355,27.8758,63.6955,23.2251,83.518c-4.6507,19.822-1.6572,40.67,8.3831,58.383c10.0404,17.713,26.3897,30.989,45.7861,37.181c19.3965,6.192,40.4147,4.843,58.8607-3.777c18.446-8.619,32.964-23.876,40.659-42.727c6.359-15.579,7.67-32.6663,3.901-48.89-1.318-5.6716,1.372-11.7423,6.824-13.7859Z'%20fill='url(%23ejFyC1I0bHX2-fill)'/%3e%3cg%20transform='matrix(.2%200%200%200.2%2062%2062)'%3e%3cpath%20d='M0,200v200h200h200v-200-200h-200L0,0v200m310.036-18.244c16.068,1.159,27.77,6.342,37.478,16.6c3.248,3.432,9.698,12.359,9.443,13.069-.115.319-27.645,18.098-28.58,18.456-.334.129-1.165-.847-2.358-2.769-12.885-20.758-44.108-15.107-39.722,7.189c1.621,8.239,6.16,11.635,28.342,21.206c24.964,10.771,36.722,18.507,44.408,29.217c11.422,15.914,12.183,41.512,1.741,58.523-19.416,31.632-80.603,33.899-110.408,4.092-6.198-6.199-13.387-16.481-12.257-17.531.612-.569,29.523-17.26,29.896-17.26.157,0,1.249,1.411,2.428,3.136c9.162,13.412,19.317,19.064,34.306,19.094c17.276.034,27.22-8.07,25.618-20.879-1.156-9.236-6.751-13.544-31.131-23.972-33.888-14.495-46.3-26.752-49.601-48.983-5.403-36.389,20.777-62.044,60.397-59.188m-93.033,71.381c-.115,63.705-.179,69.755-.774,72.719-5.32,26.473-21.367,40.142-49.585,42.237-26.658,1.979-48.472-9.269-59.998-30.935l-1.683-3.164l15.05-9.107c8.277-5.009,15.161-9.151,15.297-9.204s1.133,1.419,2.215,3.27c6.823,11.673,12.542,15.676,22.385,15.672c11.209-.005,16.607-4.006,19.034-14.108.639-2.661.689-6.982.803-69.852l.121-67.015h18.63h18.63l-.125,69.487'%20transform='translate(-3.69766%200)'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3cpath%20d='M297.601,181.783c-32.774,2.704-52.696,27.278-47.962,59.161c3.301,22.231,15.713,34.488,49.601,48.983c24.38,10.428,29.975,14.736,31.131,23.972c1.602,12.809-8.342,20.913-25.618,20.879-14.989-.03-25.144-5.682-34.306-19.094-1.179-1.725-2.271-3.136-2.428-3.136-.373,0-29.284,16.691-29.896,17.26-1.13,1.05,6.059,11.332,12.257,17.531c29.805,29.807,90.992,27.54,110.408-4.092c10.442-17.011,9.681-42.609-1.741-58.523-7.686-10.71-19.444-18.446-44.408-29.217-22.182-9.571-26.721-12.967-28.342-21.206-2.259-11.484,5.383-20.021,17.886-19.98c9.385.031,16.504,4.201,21.836,12.791c1.193,1.922,2.024,2.898,2.358,2.769.935-.358,28.465-18.137,28.58-18.456.255-.71-6.195-9.637-9.443-13.069-11.984-12.663-28.965-18.301-49.913-16.573M179.747,250.665c-.114,62.87-.164,67.191-.803,69.852-2.427,10.102-7.825,14.103-19.034,14.108-9.843.004-15.562-3.999-22.385-15.672-1.082-1.851-2.079-3.323-2.215-3.27s-7.02,4.195-15.297,9.204l-15.05,9.107l1.683,3.164c11.526,21.666,33.34,32.914,59.998,30.935c28.218-2.095,44.265-15.764,49.585-42.237.595-2.964.659-9.014.774-72.719l.125-69.487h-18.63-18.63l-.121,67.015'%20fill='rgba(52,52,52,0)'%20fill-rule='evenodd'/%3e%3c/g%3e%3c/svg%3e",eT="/assets/meter2-BJBqIKSA.svg",tT="data:image/svg+xml,%3csvg%20id='emXZbtoTHVQ1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20204%20204'%20shape-rendering='geometricPrecision'%20text-rendering='geometricPrecision'%20project-id='604eb9d133ae4d8ebef5eef9c59050cb'%20export-id='c538b8388ff74ebd9771cc0b97dc759e'%20cached='false'%3e%3cdefs%3e%3clinearGradient%20id='emXZbtoTHVQ2-fill'%20x1='-12.4348'%20y1='91.2145'%20x2='228.124'%20y2='92.098'%20spreadMethod='pad'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(0%200)'%3e%3cstop%20id='emXZbtoTHVQ2-fill-0'%20offset='0%25'%20stop-color='%23f4a300'/%3e%3cstop%20id='emXZbtoTHVQ2-fill-1'%20offset='100%25'%20stop-color='%23f0d58c'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M187.639,69.9021c5.453-2.0435,11.587.7122,13.057,6.3463c5.542,21.2379,4.106,43.8026-4.26,64.2976-9.699,23.764-28.001,42.997-51.254,53.863-23.254,10.866-49.7487,12.566-74.1999,4.76-24.4512-7.805-45.061-24.541-57.7179-46.87s-16.43038-48.609-10.5677-73.5974C8.55918,53.7134,23.627,31.854,44.8941,17.4842s47.17-20.1936,72.5409-16.30956c21.882,3.3498,41.98,13.70806,57.356,29.37196c4.078,4.1554,3.292,10.8339-1.262,14.4624-4.554,3.6284-11.144,2.8182-15.334-1.2258-11.983-11.5677-27.318-19.219-43.951-21.7653-20.1259-3.0811-40.6739,1.5387-57.5446,12.9379C39.8288,46.355,27.8758,63.6955,23.2251,83.518c-4.6507,19.822-1.6572,40.67,8.3831,58.383c10.0404,17.713,26.3897,30.989,45.7861,37.181c19.3965,6.192,40.4147,4.843,58.8607-3.777c18.446-8.619,32.964-23.876,40.659-42.727c6.359-15.579,7.67-32.6663,3.901-48.89-1.318-5.6716,1.372-11.7423,6.824-13.7859Z'%20fill='url(%23emXZbtoTHVQ2-fill)'/%3e%3cg%20transform='matrix(1.2%200%200%201.2-532.285438-265.97743)'%3e%3cg%20transform='matrix(.706386%200%200%200.706386%20457.828%20220.192)'%3e%3cpath%20d='M99.75,67.46875C71.718268,67.468752,73.46875,79.625,73.46875,79.625L73.5,92.21875h26.75v3.78125h-37.375c0,0-17.9375-2.034276-17.9375,26.25s15.65625,27.28125,15.65625,27.28125h9.34375v-13.125c0,0-.503652-15.65625,15.40625-15.65625s26.53125,0,26.53125,0s14.90625.24096,14.90625-14.40625s0-24.21875,0-24.21875s2.26318-14.65625-27.03125-14.65625ZM85,75.9375c2.661429-.000002,4.8125,2.151071,4.8125,4.8125s-2.151071,4.8125-4.8125,4.8125-4.8125-2.151071-4.8125-4.8125s2.151071-4.8125,4.8125-4.8125Z'%20fill='%23fff'/%3e%3cpath%20d='M100.5461,177.31485c28.03174,0,26.28125-12.15625,26.28125-12.15625l-.0312-12.59375h-26.75v-3.78125h37.375c0,0,17.9375,2.03427,17.9375-26.25001s-15.65625-27.281247-15.65625-27.281247h-9.34375v13.124997c0,0,.50366,15.65625-15.40625,15.65625s-26.531252,0-26.531252,0-14.90625-.24096-14.90625,14.40626s0,24.21875,0,24.21875-2.26318,14.65625,27.031252,14.65625Zm14.75-8.46875c-2.66143,0-4.8125-2.15107-4.8125-4.8125s2.15107-4.8125,4.8125-4.8125s4.8125,2.15107,4.8125,4.8125-2.15107,4.8125-4.8125,4.8125Z'%20fill='%23fff'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",nT="data:image/svg+xml,%3csvg%20id='em9Nb0uFzRt1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20204%20204'%20shape-rendering='geometricPrecision'%20text-rendering='geometricPrecision'%20project-id='604eb9d133ae4d8ebef5eef9c59050cb'%20export-id='2132c3a414714d2fb98d850dc19e47de'%20cached='true'%3e%3cdefs%3e%3clinearGradient%20id='em9Nb0uFzRt2-fill'%20x1='-12.4348'%20y1='91.2145'%20x2='228.124'%20y2='92.098'%20spreadMethod='pad'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(0%200)'%3e%3cstop%20id='em9Nb0uFzRt2-fill-0'%20offset='0%25'%20stop-color='%23f4a300'/%3e%3cstop%20id='em9Nb0uFzRt2-fill-1'%20offset='100%25'%20stop-color='%23f0d58c'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M187.639,69.9021c5.453-2.0435,11.587.7122,13.057,6.3463c5.542,21.2379,4.106,43.8026-4.26,64.2976-9.699,23.764-28.001,42.997-51.254,53.863-23.254,10.866-49.7487,12.566-74.1999,4.76-24.4512-7.805-45.061-24.541-57.7179-46.87s-16.43038-48.609-10.5677-73.5974C8.55918,53.7134,23.627,31.854,44.8941,17.4842s47.17-20.1936,72.5409-16.30956c21.882,3.3498,41.98,13.70806,57.356,29.37196c4.078,4.1554,3.292,10.8339-1.262,14.4624-4.554,3.6284-11.144,2.8182-15.334-1.2258-11.983-11.5677-27.318-19.219-43.951-21.7653-20.1259-3.0811-40.6739,1.5387-57.5446,12.9379C39.8288,46.355,27.8758,63.6955,23.2251,83.518c-4.6507,19.822-1.6572,40.67,8.3831,58.383c10.0404,17.713,26.3897,30.989,45.7861,37.181c19.3965,6.192,40.4147,4.843,58.8607-3.777c18.446-8.619,32.964-23.876,40.659-42.727c6.359-15.579,7.67-32.6663,3.901-48.89-1.318-5.6716,1.372-11.7423,6.824-13.7859Z'%20fill='url(%23em9Nb0uFzRt2-fill)'/%3e%3cg%20transform='matrix(.370221%200%200%200.370221%2054.689088%2048.826523)'%3e%3cpath%20d='M255.569,84.452376c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269-13.543,7.987-81.348,46.834-101.553,58.537-8.321,4.817-12.37,12.189-12.372,21.771-.013,39.455,0,78.909-.013,118.365c0,4.724.991,8.909,2.988,12.517c2.053,3.711,5.169,6.813,9.386,9.254c20.206,11.703,88.02,50.547,101.56,58.536c9.106,5.373,17.997,5.565,27.17.269c34.015-19.64,68.075-39.198,102.105-58.817c4.217-2.44,7.333-5.544,9.386-9.252c1.994-3.608,2.987-7.793,2.987-12.518c0,0,0-78.889-.013-118.345'%20fill='%23fff'/%3e%3cpath%20d='M201.892326,116.294008v13.473684h13.473684v-13.473684h6.736842v13.473684h13.473685v6.736842h-13.473685v13.473684h13.473685v6.736842h-13.473685v13.473684h-6.736842v-13.473684h-13.473684v13.473684h-6.736842v-13.473684h-13.473684v-6.736842h13.473684v-13.473684h-13.473684v-6.736842h13.473684v-13.473684h6.736842Zm13.473684,20.210526h-13.473684v13.473684h13.473684v-13.473684Z'%20fill='%233c3c3c'/%3e%3cpath%20d='M128.456752,48.625876c35.143771,0,65.827133,19.086298,82.26181,47.456068l-.16037-.273068-41.348577,23.808283c-8.146656-13.793605-23.081479-23.102087-40.213232-23.293787l-.539631-.003018c-26.125574,0-47.306081,21.179389-47.306081,47.304962c0,8.543615,2.277774,16.552204,6.238976,23.469476c8.154098,14.235253,23.482907,23.836606,41.067105,23.836606c17.69277,0,33.108884-9.723357,41.221568-24.110835l-.197128.345313l41.286486,23.918037c-16.254398,28.129557-46.517408,47.156948-81.252701,47.536189l-1.058225.005774c-35.254582,0-66.025249-19.203824-82.418512-47.72358-8.002993-13.922969-12.582048-30.064389-12.582048-47.27698c0-52.466052,42.532268-94.99944,95.00056-94.99944Z'%20fill='%233c3c3c'/%3e%3c/g%3e%3c/svg%3e",iT="/assets/color-sharp-ChqwjIRt.png",rT={superLargeDesktop:{breakpoint:{max:4e3,min:1024},items:6},desktop:{breakpoint:{max:1024,min:768},items:5},tablet:{breakpoint:{max:768,min:464},items:4},mobile:{breakpoint:{max:464,min:0},items:3}},sT=()=>P.jsxs("section",{className:"skill",id:"skills",children:[P.jsx(Zr,{children:P.jsx(ui,{children:P.jsx(zt,{children:P.jsxs("div",{className:"skill-bx",children:[P.jsx("h2",{children:"Skills"}),P.jsx("p",{children:"Through my studies and personal projects, I’ve developed a strong skill set in programming and development. I’m proficient in languages such as Java, C, C++, C#, Python, JavaScript, SQL, PHP, and R. I have experience with tools and frameworks like Unity, Adobe Suite, Blender, GitHub, and TypeScript. My background includes effective teamwork and problem-solving skills, cultivated through collaborative projects and individual challenges. I continuously enhance my expertise through self-learning and hands-on experience."}),P.jsxs(J2,{responsive:rT,infinite:!0,className:"skill-slider",children:[P.jsxs("div",{className:"item",children:[P.jsx("img",{src:Nc,alt:"Image",draggable:"false"}),P.jsx("h5",{children:"Web Development"})]}),P.jsxs("div",{className:"item",children:[P.jsx("img",{src:eT,alt:"Image",draggable:"false"}),P.jsx("h5",{children:"IDK yet"})]}),P.jsxs("div",{className:"item",children:[P.jsx("img",{src:tT,alt:"Image",draggable:"false"}),P.jsx("h5",{children:"Something cool?"})]}),P.jsxs("div",{className:"item",children:[P.jsx("img",{src:Nc,alt:"Image",draggable:"false"}),P.jsx("h5",{children:"Aha"})]}),P.jsxs("div",{className:"item",children:[P.jsx("img",{src:Nc,alt:"Image",draggable:"false"}),P.jsx("h5",{children:"Java"})]}),P.jsxs("div",{className:"item",children:[P.jsx("img",{src:nT,alt:"Image",draggable:"false"}),P.jsx("h5",{children:"HTML"})]})]})]})})})}),P.jsx("img",{className:"background-image-left",src:iT})]}),Uc=({title:t,description:e,imgUrl:n})=>P.jsx(zt,{sm:6,md:4,children:P.jsxs("div",{className:"proj-imgbx",children:[P.jsx("img",{src:n,alt:t}),P.jsxs("div",{className:"proj-txtx",children:[P.jsx("h4",{children:t}),P.jsx("span",{children:e})]})]})}),oT="/assets/color-sharp2-Is-Kymxb.png",aT="/assets/project-img1-3CJTTsdY.png",el="/assets/project-img2-DjhIq5BM.png",lT="/assets/project-img3-B5LJvaFM.png",uT=()=>{const t=[{title:"ZANN.IO",description:"Personal portfolio website made with Vite&React",imgUrl:aT},{title:"Unity3D Games",description:"Games made in the Unity3D game engine with Netcode",imgUrl:el},{title:"Flutter Demo",description:"My first Flutter app, written in Dart",imgUrl:lT}],e=[{title:"Ime projekta",description:"Opis projekta",imgUrl:el},{title:"Ime projekta2",description:"Opis projekta",imgUrl:el},{title:"Ime projekta3",description:"Opis projekta",imgUrl:el}];return P.jsxs("section",{className:"project",id:"projects",children:[P.jsx(Zr,{children:P.jsx(ui,{children:P.jsxs(zt,{children:[P.jsx("h2",{children:"Projects"}),P.jsx("p",{children:"I’ve worked on a variety of projects, including websites, 3D animations, and an educational game featured on a public utility company’s website, showcasing my ability to merge creativity with practical impact. My personal projects involve experiments and learning new skills, such as developing a multiplayer Unity game and creating animations for my YouTube channel. I’ve also completed various university assignments. These experiences have sharpened my technical skills and demonstrated my ability to deliver effective solutions."}),P.jsxs(wo.Container,{id:"projects-tab",defaultActiveKey:"first",children:[P.jsxs($n,{variant:"pills",className:"nav-pills mb-5 justify-content-center align-items-center",id:"pills-tab",children:[P.jsx($n.Item,{children:P.jsx($n.Link,{eventKey:"first",children:"Personal"})}),P.jsx($n.Item,{children:P.jsx($n.Link,{eventKey:"second",children:"Studies"})}),P.jsx($n.Item,{children:P.jsx($n.Link,{eventKey:"third",children:"Professional"})})]}),P.jsxs(wo.Content,{children:[P.jsx(wo.Pane,{eventKey:"first",children:P.jsx(ui,{children:t.map((n,i)=>P.jsx(Uc,{...n},i))})}),P.jsxs(wo.Pane,{eventKey:"second",children:[" ",P.jsx(ui,{children:e.map((n,i)=>P.jsx(Uc,{...n},i))})]}),P.jsxs(wo.Pane,{eventKey:"third",children:[" ",P.jsx(ui,{children:t.map((n,i)=>P.jsx(Uc,{...n},i))})]})]})]})]})})}),P.jsx("img",{className:"background-image-right",src:oT})]})},cT="/assets/connect-dnJYqFE5.png",dT=()=>{const t={firstName:"",lastName:"",email:"",phone:"",message:""},[e,n]=U.useState(t),[i,r]=U.useState("Send"),[s,o]=U.useState({success:!1,message:""}),a=(u,c)=>{n({...e,[u]:c})},l=async u=>{u.preventDefault(),r("Sending...");let c=await fetch("http://192.168.64.103:5000/contact",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)});r("Send");const h=await c.json();n(t),h.code===200?o({success:!0,message:"Message sent successfully"}):o({success:!1,message:"Something went wrong, please try again later."})};return P.jsx("section",{className:"contact",id:"connect",children:P.jsx(Zr,{children:P.jsxs(ui,{className:"align-items-center",children:[P.jsx(zt,{md:6,children:P.jsx("img",{src:cT,alt:"Contact Us"})}),P.jsxs(zt,{md:6,children:[P.jsx("h2",{children:"Get In Touch"}),P.jsx("form",{onSubmit:l,children:P.jsxs(ui,{children:[P.jsx(zt,{sm:6,className:"px-1",children:P.jsx("input",{type:"text",value:e.firstName,placeholder:"First Name",onChange:u=>a("firstName",u.target.value)})}),P.jsx(zt,{sm:6,className:"px-1",children:P.jsx("input",{type:"text",value:e.lastName,placeholder:"Last Name",onChange:u=>a("lastName",u.target.value)})}),P.jsx(zt,{sm:6,className:"px-1",children:P.jsx("input",{type:"email",value:e.email,placeholder:"Email Address",onChange:u=>a("email",u.target.value)})}),P.jsx(zt,{sm:6,className:"px-1",children:P.jsx("input",{type:"tel",value:e.phone,placeholder:"Phone No.",onChange:u=>a("phone",u.target.value)})}),P.jsxs(zt,{children:[P.jsx("textarea",{rows:6,value:e.message,placeholder:"Message",onChange:u=>a("message",u.target.value)}),P.jsx("button",{type:"submit",children:P.jsx("span",{children:i})})]}),s.message&&P.jsx(zt,{children:P.jsx("p",{className:s.success===!1?"danger":"success",children:s.message})})]})})]})]})})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="156",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fT=0,Pm=1,hT=2,Ex=1,pT=2,Si=3,fi=0,pn=1,Un=2,Li=0,Ys=1,Lm=2,Dm=3,Im=4,mT=5,ws=100,gT=101,vT=102,Nm=103,Um=104,_T=200,xT=201,yT=202,ST=203,Mx=204,Tx=205,ET=206,MT=207,TT=208,wT=209,bT=210,CT=0,AT=1,RT=2,_f=3,PT=4,LT=5,DT=6,IT=7,wx=0,NT=1,UT=2,hr=0,OT=1,FT=2,kT=3,BT=4,zT=5,bx=300,io=301,ro=302,mu=303,xf=304,Gu=306,yf=1e3,Kn=1001,Sf=1002,ut=1003,Om=1004,Oc=1005,Dn=1006,HT=1007,_a=1008,pr=1009,VT=1010,GT=1011,Wh=1012,Cx=1013,rr=1014,Ci=1015,so=1016,Ax=1017,Rx=1018,kr=1020,WT=1021,Zn=1023,jT=1024,XT=1025,Br=1026,oo=1027,$T=1028,Px=1029,YT=1030,Lx=1031,Dx=1033,Fc=33776,kc=33777,Bc=33778,zc=33779,Fm=35840,km=35841,Bm=35842,zm=35843,qT=36196,Hm=37492,Vm=37496,Gm=37808,Wm=37809,jm=37810,Xm=37811,$m=37812,Ym=37813,qm=37814,Km=37815,Zm=37816,Qm=37817,Jm=37818,eg=37819,tg=37820,ng=37821,Hc=36492,ig=36494,rg=36495,KT=36283,sg=36284,og=36285,ag=36286,Ix=3e3,zr=3001,ZT=3200,QT=3201,Nx=0,JT=1,Hr="",it="srgb",hi="srgb-linear",Wu="display-p3",Vc=7680,ew=519,tw=512,nw=513,iw=514,rw=515,sw=516,ow=517,aw=518,lw=519,Ef=35044,lg="300 es",Mf=1035,Ai=2e3,gu=2001;class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ug=1234567;const Ko=Math.PI/180,xa=180/Math.PI;function Di(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function jh(t,e){return(t%e+e)%e}function uw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function cw(t,e,n){return t!==e?(n-t)/(e-t):0}function Zo(t,e,n){return(1-n)*t+n*e}function dw(t,e,n,i){return Zo(t,e,1-Math.exp(-n*i))}function fw(t,e=1){return e-Math.abs(jh(t,e*2)-e)}function hw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function pw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function mw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function gw(t,e){return t+Math.random()*(e-t)}function vw(t){return t*(.5-Math.random())}function _w(t){t!==void 0&&(ug=t);let e=ug+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xw(t){return t*Ko}function yw(t){return t*xa}function Tf(t){return(t&t-1)===0&&t!==0}function Sw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ew(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*h,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*h,a*u);break;case"ZXZ":t.set(l*h,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*v,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*v,a*u);break;case"ZYZ":t.set(l*v,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ke(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mw={DEG2RAD:Ko,RAD2DEG:xa,generateUUID:Di,clamp:Kt,euclideanModulo:jh,mapLinear:uw,inverseLerp:cw,lerp:Zo,damp:dw,pingpong:fw,smoothstep:hw,smootherstep:pw,randInt:mw,randFloat:gw,randFloatSpread:vw,seededRandom:_w,degToRad:xw,radToDeg:yw,isPowerOfTwo:Tf,ceilPowerOfTwo:Sw,floorPowerOfTwo:vu,setQuaternionFromProperEuler:Ew,normalize:Ke,denormalize:li};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],_=r[1],g=r[4],y=r[7],T=r[2],w=r[5],S=r[8];return s[0]=o*x+a*_+l*T,s[3]=o*m+a*g+l*w,s[6]=o*f+a*y+l*S,s[1]=u*x+c*_+h*T,s[4]=u*m+c*g+h*w,s[7]=u*f+c*y+h*S,s[2]=d*x+p*_+v*T,s[5]=d*m+p*g+v*w,s[8]=d*f+p*y+v*S,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gc.makeScale(e,n)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Fe;function Ux(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _u(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Tw(){const t=_u("canvas");return t.style.display="block",t}const cg={};function Qo(t){t in cg||(cg[t]=!0,console.warn(t))}function qs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const ww=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),bw=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cw(t){return t.convertSRGBToLinear().applyMatrix3(bw)}function Aw(t){return t.applyMatrix3(ww).convertLinearToSRGB()}const Rw={[hi]:t=>t,[it]:t=>t.convertSRGBToLinear(),[Wu]:Cw},Pw={[hi]:t=>t,[it]:t=>t.convertLinearToSRGB(),[Wu]:Aw},Hn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return hi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Rw[e],r=Pw[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ss;class Ox{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=_u("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_u("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qs(n[i]/255)*255):n[i]=qs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lw=0;class Fx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=Di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jc(r[o].image)):s.push(jc(r[o]))}else s=jc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function jc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ox.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dw=0;class Zt extends Jr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Kn,r=Kn,s=Dn,o=_a,a=Zn,l=pr,u=Zt.DEFAULT_ANISOTROPY,c=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=Di(),this.name="",this.source=new Fx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===zr?it:Hr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?zr:Ix}set encoding(e){Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zr?it:Hr}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=bx;Zt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(p+1)/2,T=(f+1)/2,w=(c+d)/4,S=(h+x)/4,L=(v+m)/4;return g>y&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=S/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=L/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=S/s,r=L/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-x)/_,this.z=(d-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iw extends Jr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Qo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zr?it:Hr),this.texture=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Iw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class kx extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nw extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||u!==p||c!==v){let m=1-a;const f=l*d+u*p+c*v+h*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const T=Math.sqrt(g),w=Math.atan2(T,f*_);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const y=a*_;if(l=l*m+d*y,u=u*m+p*y,c=c*m+v*y,h=h*m+x*y,m===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=T,u*=T,c*=T,h*=T}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*h+l*p-u*d,e[n+1]=l*v+c*d+u*h-a*p,e[n+2]=u*v+c*p+a*d-l*h,e[n+3]=c*v-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h-d*p*v;break;case"YXZ":this._x=d*c*h+u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h+d*p*v;break;case"ZXY":this._x=d*c*h-u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h-d*p*v;break;case"ZYX":this._x=d*c*h-u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h+d*p*v;break;case"YZX":this._x=d*c*h+u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h-d*p*v;break;case"XZY":this._x=d*c*h-u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,h=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-h*-o,this.y=c*l+d*-o+h*-s-u*-a,this.z=h*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new N,dg=new Yr;class Aa{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox),os.applyMatrix4(e.matrixWorld),this.union(os);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)gi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(gi)}else r.boundingBox===null&&r.computeBoundingBox(),os.copy(r.boundingBox),os.applyMatrix4(e.matrixWorld),this.union(os)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),tl.subVectors(this.max,Co),as.subVectors(e.a,Co),ls.subVectors(e.b,Co),us.subVectors(e.c,Co),ji.subVectors(ls,as),Xi.subVectors(us,ls),Mr.subVectors(as,us);let n=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-Mr.z,Mr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,Mr.z,0,-Mr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-Mr.y,Mr.x,0];return!$c(n,as,ls,us,tl)||(n=[1,0,0,0,1,0,0,0,1],!$c(n,as,ls,us,tl))?!1:(nl.crossVectors(ji,Xi),n=[nl.x,nl.y,nl.z],$c(n,as,ls,us,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new N,new N,new N,new N,new N,new N,new N,new N],gi=new N,os=new Aa,as=new N,ls=new N,us=new N,ji=new N,Xi=new N,Mr=new N,Co=new N,tl=new N,nl=new N,Tr=new N;function $c(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),u=n.dot(Tr),c=i.dot(Tr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Uw=new Aa,Ao=new N,Yc=new N;class Xh{constructor(e=new N,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Uw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Yc)),this.expandByPoint(Ao.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new N,qc=new N,il=new N,$i=new N,Kc=new N,rl=new N,Zc=new N;class Bx{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),il.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(il),a=$i.dot(this.direction),l=-$i.dot(il),u=$i.lengthSq(),c=Math.abs(1-o*o);let h,d,p,v;if(c>0)if(h=o*l-a,d=o*a-l,v=s*c,h>=0)if(d>=-v)if(d<=v){const x=1/c;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qc).addScaledVector(il,d),p}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){Kc.subVectors(n,e),rl.subVectors(i,e),Zc.crossVectors(Kc,rl);let o=this.direction.dot(Zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(rl.crossVectors($i,rl));if(l<0)return null;const u=a*this.direction.dot(Kc.cross($i));if(u<0||l+u>o)return null;const c=-a*$i.dot(Zc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,u,c,h,d,p,v,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,u,c,h,d,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,v=a*c,x=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,v=u*c,x=u*h;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,v=u*c,x=u*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,v=a*c,x=a*h;n[0]=l*c,n[4]=v*u-p,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+x,n[5]=o*c,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*c,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ow,e,Fw)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Yi.crossVectors(i,vn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Yi.crossVectors(i,vn)),Yi.normalize(),sl.crossVectors(vn,Yi),r[0]=Yi.x,r[4]=sl.x,r[8]=vn.x,r[1]=Yi.y,r[5]=sl.y,r[9]=vn.y,r[2]=Yi.z,r[6]=sl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],_=i[3],g=i[7],y=i[11],T=i[15],w=r[0],S=r[4],L=r[8],E=r[12],b=r[1],Q=r[5],te=r[9],z=r[13],Y=r[2],$=r[6],J=r[10],q=r[14],D=r[3],X=r[7],V=r[11],O=r[15];return s[0]=o*w+a*b+l*Y+u*D,s[4]=o*S+a*Q+l*$+u*X,s[8]=o*L+a*te+l*J+u*V,s[12]=o*E+a*z+l*q+u*O,s[1]=c*w+h*b+d*Y+p*D,s[5]=c*S+h*Q+d*$+p*X,s[9]=c*L+h*te+d*J+p*V,s[13]=c*E+h*z+d*q+p*O,s[2]=v*w+x*b+m*Y+f*D,s[6]=v*S+x*Q+m*$+f*X,s[10]=v*L+x*te+m*J+f*V,s[14]=v*E+x*z+m*q+f*O,s[3]=_*w+g*b+y*Y+T*D,s[7]=_*S+g*Q+y*$+T*X,s[11]=_*L+g*te+y*J+T*V,s[15]=_*E+g*z+y*q+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],_=h*m*u-x*d*u+x*l*p-a*m*p-h*l*f+a*d*f,g=v*d*u-c*m*u-v*l*p+o*m*p+c*l*f-o*d*f,y=c*x*u-v*h*u+v*a*p-o*x*p-c*a*f+o*h*f,T=v*h*l-c*x*l-v*a*d+o*x*d+c*a*m-o*h*m,w=n*_+i*g+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=_*S,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*S,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*f+i*l*f)*S,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*S,e[4]=g*S,e[5]=(c*m*s-v*d*s+v*r*p-n*m*p-c*r*f+n*d*f)*S,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*f-n*l*f)*S,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*S,e[8]=y*S,e[9]=(v*h*s-c*x*s-v*i*p+n*x*p+c*i*f-n*h*f)*S,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*f+n*a*f)*S,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*S,e[12]=T*S,e[13]=(c*x*r-v*h*r+v*i*d-n*x*d-c*i*m+n*h*m)*S,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*S,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*d+n*a*d)*S,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,v=s*h,x=o*c,m=o*h,f=a*h,_=l*u,g=l*c,y=l*h,T=i.x,w=i.y,S=i.z;return r[0]=(1-(x+f))*T,r[1]=(p+y)*T,r[2]=(v-g)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(d+f))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(v+g)*S,r[9]=(m-_)*S,r[10]=(1-(d+x))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const u=1/s,c=1/o,h=1/a;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,n.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===Ai)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===gu)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*c;let v,x;if(a===Ai)v=(o+s)*h,x=-2*h;else if(a===gu)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const cs=new N,Vn=new yt,Ow=new N(0,0,0),Fw=new N(1,1,1),Yi=new N,sl=new N,vn=new N,fg=new yt,hg=new Yr;class ju{constructor(e=0,n=0,i=0,r=ju.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hg.setFromEuler(this),this.setFromQuaternion(hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ju.DEFAULT_ORDER="XYZ";class zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kw=0;const pg=new N,ds=new Yr,_i=new yt,ol=new N,Ro=new N,Bw=new N,zw=new Yr,mg=new N(1,0,0),gg=new N(0,1,0),vg=new N(0,0,1),Hw={type:"added"},Vw={type:"removed"};class Qt extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new N,n=new ju,i=new Yr,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Fe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(vg,e)}translateOnAxis(e,n){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ol.copy(e):ol.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ro,ol,this.up):_i.lookAt(ol,Ro,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(_i),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Vw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,Bw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,zw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new N(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new N,xi=new N,Qc=new N,yi=new N,fs=new N,hs=new N,_g=new N,Jc=new N,ed=new N,td=new N;let al=!1;class In{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),xi.subVectors(i,n),Qc.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(xi),l=Gn.dot(Qc),u=xi.dot(xi),c=xi.dot(Qc),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(u*l-a*c)*d,v=(o*c-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi),yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,n,i,r,s,o,a,l){return al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),al=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,yi),l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),xi.subVectors(e,n),Gn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Gn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),al=!0),In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),hs.subVectors(s,i),Jc.subVectors(e,i);const l=fs.dot(Jc),u=hs.dot(Jc);if(l<=0&&u<=0)return n.copy(i);ed.subVectors(e,r);const c=fs.dot(ed),h=hs.dot(ed);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(fs,o);td.subVectors(e,s);const p=fs.dot(td),v=hs.dot(td);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(hs,a);const m=c*v-p*h;if(m<=0&&h-c>=0&&p-v>=0)return _g.subVectors(s,r),a=(h-c)/(h-c+(p-v)),n.copy(r).addScaledVector(_g,a);const f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(fs,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gw=0;class ho extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Ys,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mx,this.blendDst=Tx,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_f,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ew,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ll={h:0,s:0,l:0};function nd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Hn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Hn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Hn.workingColorSpace){if(e=jh(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=nd(o,s,e+1/3),this.g=nd(o,s,e),this.b=nd(o,s,e-1/3)}return Hn.toWorkingColorSpace(this,r),this}setStyle(e,n=it){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=it){const i=Hx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}copyLinearToSRGB(e){return this.r=Wc(e.r),this.g=Wc(e.g),this.b=Wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return Hn.fromWorkingColorSpace($t.copy(this),e),Math.round(Kt($t.r*255,0,255))*65536+Math.round(Kt($t.g*255,0,255))*256+Math.round(Kt($t.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Hn.workingColorSpace){Hn.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Hn.workingColorSpace){return Hn.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=it){Hn.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==it?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wn),Wn.h+=e,Wn.s+=n,Wn.l+=i,this.setHSL(Wn.h,Wn.s,Wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wn),e.getHSL(ll);const i=Zo(Wn.h,ll.h,n),r=Zo(Wn.s,ll.s,n),s=Zo(Wn.l,ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Xe;Xe.NAMES=Hx;class Vx extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new N,ul=new Se;class ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ef,this.updateRange={offset:0,count:-1},this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ke(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=li(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=li(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=li(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=li(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ef&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Gx extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Wx extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ii extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ww=0;const An=new yt,id=new Qt,ps=new N,_n=new Aa,Po=new Aa,It=new N;class Vi extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ux(e)?Wx:Gx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ii(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(_n.min,Po.min),_n.expandByPoint(It),It.addVectors(_n.max,Po.max),_n.expandByPoint(It)):(_n.expandByPoint(Po.min),_n.expandByPoint(Po.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(ps.fromBufferAttribute(e,u),It.add(ps)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let b=0;b<a;b++)u[b]=new N,c[b]=new N;const h=new N,d=new N,p=new N,v=new Se,x=new Se,m=new Se,f=new N,_=new N;function g(b,Q,te){h.fromArray(r,b*3),d.fromArray(r,Q*3),p.fromArray(r,te*3),v.fromArray(o,b*2),x.fromArray(o,Q*2),m.fromArray(o,te*2),d.sub(h),p.sub(h),x.sub(v),m.sub(v);const z=1/(x.x*m.y-m.x*x.y);isFinite(z)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(z),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(z),u[b].add(f),u[Q].add(f),u[te].add(f),c[b].add(_),c[Q].add(_),c[te].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,Q=y.length;b<Q;++b){const te=y[b],z=te.start,Y=te.count;for(let $=z,J=z+Y;$<J;$+=3)g(i[$+0],i[$+1],i[$+2])}const T=new N,w=new N,S=new N,L=new N;function E(b){S.fromArray(s,b*3),L.copy(S);const Q=u[b];T.copy(Q),T.sub(S.multiplyScalar(S.dot(Q))).normalize(),w.crossVectors(L,Q);const z=w.dot(c[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=z}for(let b=0,Q=y.length;b<Q;++b){const te=y[b],z=te.start,Y=te.count;for(let $=z,J=z+Y;$<J;$+=3)E(i[$+0]),E(i[$+1]),E(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,h=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let f=0;f<c;f++)d[v++]=u[p++]}return new ei(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new yt,wr=new Bx,cl=new Xh,yg=new N,ms=new N,gs=new N,vs=new N,rd=new N,dl=new N,fl=new Se,hl=new Se,pl=new Se,Sg=new N,Eg=new N,Mg=new N,ml=new N,gl=new N;class Qe extends Qt{constructor(e=new Vi,n=new Vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(rd.fromBufferAttribute(h,e),o?dl.addScaledVector(rd,c):dl.addScaledVector(rd.sub(n),c))}n.add(dl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(cl.containsPoint(wr.origin)===!1&&(wr.intersectSphere(cl,yg)===null||wr.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(xg.copy(s).invert(),wr.copy(e.ray).applyMatrix4(xg),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,T=g;y<T;y+=3){const w=a.getX(y),S=a.getX(y+1),L=a.getX(y+2);r=vl(this,f,e,i,u,c,h,w,S,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=vl(this,o,e,i,u,c,h,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,T=g;y<T;y+=3){const w=y,S=y+1,L=y+2;r=vl(this,f,e,i,u,c,h,w,S,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=m,g=m+1,y=m+2;r=vl(this,o,e,i,u,c,h,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function jw(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fi,a),l===null)return null;gl.copy(a),gl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(gl);return u<n.near||u>n.far?null:{distance:u,point:gl.clone(),object:t}}function vl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ms),t.getVertexPosition(l,gs),t.getVertexPosition(u,vs);const c=jw(t,e,n,i,ms,gs,vs,ml);if(c){r&&(fl.fromBufferAttribute(r,a),hl.fromBufferAttribute(r,l),pl.fromBufferAttribute(r,u),c.uv=In.getInterpolation(ml,ms,gs,vs,fl,hl,pl,new Se)),s&&(fl.fromBufferAttribute(s,a),hl.fromBufferAttribute(s,l),pl.fromBufferAttribute(s,u),c.uv1=In.getInterpolation(ml,ms,gs,vs,fl,hl,pl,new Se),c.uv2=c.uv1),o&&(Sg.fromBufferAttribute(o,a),Eg.fromBufferAttribute(o,l),Mg.fromBufferAttribute(o,u),c.normal=In.getInterpolation(ml,ms,gs,vs,Sg,Eg,Mg,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new N,materialIndex:0};In.getNormal(ms,gs,vs,h.normal),c.face=h}return c}class _t extends Vi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ii(u,3)),this.setAttribute("normal",new Ii(c,3)),this.setAttribute("uv",new Ii(h,2));function v(x,m,f,_,g,y,T,w,S,L,E){const b=y/S,Q=T/L,te=y/2,z=T/2,Y=w/2,$=S+1,J=L+1;let q=0,D=0;const X=new N;for(let V=0;V<J;V++){const O=V*Q-z;for(let B=0;B<$;B++){const ae=B*b-te;X[x]=ae*_,X[m]=O*g,X[f]=Y,u.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[f]=w>0?1:-1,c.push(X.x,X.y,X.z),h.push(B/S),h.push(1-V/L),q+=1}}for(let V=0;V<L;V++)for(let O=0;O<S;O++){const B=d+O+$*V,ae=d+O+$*(V+1),ue=d+(O+1)+$*(V+1),ce=d+(O+1)+$*V;l.push(B,ae,ce),l.push(ae,ue,ce),D+=6}a.addGroup(p,D,E),p+=D,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=ao(t[n]);for(const r in i)e[r]=i[r]}return e}function Xw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jx(t){return t.getRenderTarget()===null?t.outputColorSpace:hi}const Xx={clone:ao,merge:rn};var $w=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$w,this.fragmentShader=Yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=Xw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $x extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends $x{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,xs=1;class qw extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new yn(_s,xs,e,n);r.layers=this.layers,this.add(r);const s=new yn(_s,xs,e,n);s.layers=this.layers,this.add(s);const o=new yn(_s,xs,e,n);o.layers=this.layers,this.add(o);const a=new yn(_s,xs,e,n);a.layers=this.layers,this.add(a);const l=new yn(_s,xs,e,n);l.layers=this.layers,this.add(l);const u=new yn(_s,xs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Yx extends Zt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:io,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kw extends ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Qo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zr?it:Hr),this.texture=new Yx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _t(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Li});s.uniforms.tEquirect.value=n;const o=new Qe(r,s),a=n.minFilter;return n.minFilter===_a&&(n.minFilter=Dn),new qw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const sd=new N,Zw=new N,Qw=new Fe;class Qi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sd.subVectors(i,n).cross(Zw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Qw.getNormalMatrix(e),r=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Xh,_l=new N;class $h{constructor(e=new Qi,n=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-f).normalize(),i[1].setComponents(l+s,d+u,m+p,y+f).normalize(),i[2].setComponents(l+o,d+c,m+v,y+_).normalize(),i[3].setComponents(l-o,d-c,m-v,y-_).normalize(),i[4].setComponents(l-a,d-h,m-x,y-g).normalize(),n===Ai)i[5].setComponents(l+a,d+h,m+x,y+g).normalize();else if(n===gu)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Jw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,h,d),u.onUploadCallback();let v;if(h instanceof Float32Array)v=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=t.SHORT;else if(h instanceof Uint32Array)v=t.UNSIGNED_INT;else if(h instanceof Int32Array)v=t.INT;else if(h instanceof Int8Array)v=t.BYTE;else if(h instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const d=c.array,p=c.updateRange;t.bindBuffer(h,u),p.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:o,remove:a,update:l}}class Yh extends Vi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let f=0;f<c;f++){const _=f*d-o;for(let g=0;g<u;g++){const y=g*h-s;v.push(y,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+u*f,y=_+u*(f+1),T=_+1+u*(f+1),w=_+1+u*f;p.push(g,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Ii(v,3)),this.setAttribute("normal",new Ii(x,3)),this.setAttribute("uv",new Ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.width,e.height,e.widthSegments,e.heightSegments)}}var eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ob=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,db=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Eb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mb=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$b=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Zb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,gC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_C=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,EC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,NC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,BC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$C=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_A=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:eb,alphahash_pars_fragment:tb,alphamap_fragment:nb,alphamap_pars_fragment:ib,alphatest_fragment:rb,alphatest_pars_fragment:sb,aomap_fragment:ob,aomap_pars_fragment:ab,begin_vertex:lb,beginnormal_vertex:ub,bsdfs:cb,iridescence_fragment:db,bumpmap_pars_fragment:fb,clipping_planes_fragment:hb,clipping_planes_pars_fragment:pb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:gb,color_fragment:vb,color_pars_fragment:_b,color_pars_vertex:xb,color_vertex:yb,common:Sb,cube_uv_reflection_fragment:Eb,defaultnormal_vertex:Mb,displacementmap_pars_vertex:Tb,displacementmap_vertex:wb,emissivemap_fragment:bb,emissivemap_pars_fragment:Cb,colorspace_fragment:Ab,colorspace_pars_fragment:Rb,envmap_fragment:Pb,envmap_common_pars_fragment:Lb,envmap_pars_fragment:Db,envmap_pars_vertex:Ib,envmap_physical_pars_fragment:jb,envmap_vertex:Nb,fog_vertex:Ub,fog_pars_vertex:Ob,fog_fragment:Fb,fog_pars_fragment:kb,gradientmap_pars_fragment:Bb,lightmap_fragment:zb,lightmap_pars_fragment:Hb,lights_lambert_fragment:Vb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Wb,lights_toon_fragment:Xb,lights_toon_pars_fragment:$b,lights_phong_fragment:Yb,lights_phong_pars_fragment:qb,lights_physical_fragment:Kb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Qb,lights_fragment_maps:Jb,lights_fragment_end:eC,logdepthbuf_fragment:tC,logdepthbuf_pars_fragment:nC,logdepthbuf_pars_vertex:iC,logdepthbuf_vertex:rC,map_fragment:sC,map_pars_fragment:oC,map_particle_fragment:aC,map_particle_pars_fragment:lC,metalnessmap_fragment:uC,metalnessmap_pars_fragment:cC,morphcolor_vertex:dC,morphnormal_vertex:fC,morphtarget_pars_vertex:hC,morphtarget_vertex:pC,normal_fragment_begin:mC,normal_fragment_maps:gC,normal_pars_fragment:vC,normal_pars_vertex:_C,normal_vertex:xC,normalmap_pars_fragment:yC,clearcoat_normal_fragment_begin:SC,clearcoat_normal_fragment_maps:EC,clearcoat_pars_fragment:MC,iridescence_pars_fragment:TC,opaque_fragment:wC,packing:bC,premultiplied_alpha_fragment:CC,project_vertex:AC,dithering_fragment:RC,dithering_pars_fragment:PC,roughnessmap_fragment:LC,roughnessmap_pars_fragment:DC,shadowmap_pars_fragment:IC,shadowmap_pars_vertex:NC,shadowmap_vertex:UC,shadowmask_pars_fragment:OC,skinbase_vertex:FC,skinning_pars_vertex:kC,skinning_vertex:BC,skinnormal_vertex:zC,specularmap_fragment:HC,specularmap_pars_fragment:VC,tonemapping_fragment:GC,tonemapping_pars_fragment:WC,transmission_fragment:jC,transmission_pars_fragment:XC,uv_pars_fragment:$C,uv_pars_vertex:YC,uv_vertex:qC,worldpos_vertex:KC,background_vert:ZC,background_frag:QC,backgroundCube_vert:JC,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:rA,distanceRGBA_vert:sA,distanceRGBA_frag:oA,equirect_vert:aA,equirect_frag:lA,linedashed_vert:uA,linedashed_frag:cA,meshbasic_vert:dA,meshbasic_frag:fA,meshlambert_vert:hA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:vA,meshnormal_frag:_A,meshphong_vert:xA,meshphong_frag:yA,meshphysical_vert:SA,meshphysical_frag:EA,meshtoon_vert:MA,meshtoon_frag:TA,points_vert:wA,points_frag:bA,shadow_vert:CA,shadow_frag:AA,sprite_vert:RA,sprite_frag:PA},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},oi={basic:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:rn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:rn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:rn([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:rn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:rn([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:rn([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:rn([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:rn([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};oi.physical={uniforms:rn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const xl={r:0,b:0,g:0};function LA(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function v(m,f){let _=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Gu)?(c===void 0&&(c=new Qe(new _t(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:ao(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=g.colorSpace!==it,(h!==g||d!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Qe(new Yh(2,2),new Bi({name:"BackgroundMaterial",uniforms:ao(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=g.colorSpace!==it,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function x(m,f){m.getRGB(xl,jx(t)),i.buffers.color.setClear(xl.r,xl.g,xl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function DA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function h(Y,$,J,q,D){let X=!1;if(o){const V=x(q,J,$);u!==V&&(u=V,p(u.object)),X=f(Y,q,J,D),X&&_(Y,q,J,D)}else{const V=$.wireframe===!0;(u.geometry!==q.id||u.program!==J.id||u.wireframe!==V)&&(u.geometry=q.id,u.program=J.id,u.wireframe=V,X=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(X||c)&&(c=!1,L(Y,$,J,q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(Y){return i.isWebGL2?t.bindVertexArray(Y):s.bindVertexArrayOES(Y)}function v(Y){return i.isWebGL2?t.deleteVertexArray(Y):s.deleteVertexArrayOES(Y)}function x(Y,$,J){const q=J.wireframe===!0;let D=a[Y.id];D===void 0&&(D={},a[Y.id]=D);let X=D[$.id];X===void 0&&(X={},D[$.id]=X);let V=X[q];return V===void 0&&(V=m(d()),X[q]=V),V}function m(Y){const $=[],J=[],q=[];for(let D=0;D<r;D++)$[D]=0,J[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:J,attributeDivisors:q,object:Y,attributes:{},index:null}}function f(Y,$,J,q){const D=u.attributes,X=$.attributes;let V=0;const O=J.getAttributes();for(const B in O)if(O[B].location>=0){const ue=D[B];let ce=X[B];if(ce===void 0&&(B==="instanceMatrix"&&Y.instanceMatrix&&(ce=Y.instanceMatrix),B==="instanceColor"&&Y.instanceColor&&(ce=Y.instanceColor)),ue===void 0||ue.attribute!==ce||ce&&ue.data!==ce.data)return!0;V++}return u.attributesNum!==V||u.index!==q}function _(Y,$,J,q){const D={},X=$.attributes;let V=0;const O=J.getAttributes();for(const B in O)if(O[B].location>=0){let ue=X[B];ue===void 0&&(B==="instanceMatrix"&&Y.instanceMatrix&&(ue=Y.instanceMatrix),B==="instanceColor"&&Y.instanceColor&&(ue=Y.instanceColor));const ce={};ce.attribute=ue,ue&&ue.data&&(ce.data=ue.data),D[B]=ce,V++}u.attributes=D,u.attributesNum=V,u.index=q}function g(){const Y=u.newAttributes;for(let $=0,J=Y.length;$<J;$++)Y[$]=0}function y(Y){T(Y,0)}function T(Y,$){const J=u.newAttributes,q=u.enabledAttributes,D=u.attributeDivisors;J[Y]=1,q[Y]===0&&(t.enableVertexAttribArray(Y),q[Y]=1),D[Y]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,$),D[Y]=$)}function w(){const Y=u.newAttributes,$=u.enabledAttributes;for(let J=0,q=$.length;J<q;J++)$[J]!==Y[J]&&(t.disableVertexAttribArray(J),$[J]=0)}function S(Y,$,J,q,D,X,V){V===!0?t.vertexAttribIPointer(Y,$,J,D,X):t.vertexAttribPointer(Y,$,J,q,D,X)}function L(Y,$,J,q){if(i.isWebGL2===!1&&(Y.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=q.attributes,X=J.getAttributes(),V=$.defaultAttributeValues;for(const O in X){const B=X[O];if(B.location>=0){let ae=D[O];if(ae===void 0&&(O==="instanceMatrix"&&Y.instanceMatrix&&(ae=Y.instanceMatrix),O==="instanceColor"&&Y.instanceColor&&(ae=Y.instanceColor)),ae!==void 0){const ue=ae.normalized,ce=ae.itemSize,xe=n.get(ae);if(xe===void 0)continue;const we=xe.buffer,Te=xe.type,ke=xe.bytesPerElement,mt=i.isWebGL2===!0&&(Te===t.INT||Te===t.UNSIGNED_INT||ae.gpuType===Cx);if(ae.isInterleavedBufferAttribute){const De=ae.data,F=De.stride,ot=ae.offset;if(De.isInstancedInterleavedBuffer){for(let Me=0;Me<B.locationSize;Me++)T(B.location+Me,De.meshPerAttribute);Y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Me=0;Me<B.locationSize;Me++)y(B.location+Me);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Me=0;Me<B.locationSize;Me++)S(B.location+Me,ce/B.locationSize,Te,ue,F*ke,(ot+ce/B.locationSize*Me)*ke,mt)}else{if(ae.isInstancedBufferAttribute){for(let De=0;De<B.locationSize;De++)T(B.location+De,ae.meshPerAttribute);Y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<B.locationSize;De++)y(B.location+De);t.bindBuffer(t.ARRAY_BUFFER,we);for(let De=0;De<B.locationSize;De++)S(B.location+De,ce/B.locationSize,Te,ue,ce*ke,ce/B.locationSize*De*ke,mt)}}else if(V!==void 0){const ue=V[O];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(B.location,ue);break;case 3:t.vertexAttrib3fv(B.location,ue);break;case 4:t.vertexAttrib4fv(B.location,ue);break;default:t.vertexAttrib1fv(B.location,ue)}}}}w()}function E(){te();for(const Y in a){const $=a[Y];for(const J in $){const q=$[J];for(const D in q)v(q[D].object),delete q[D];delete $[J]}delete a[Y]}}function b(Y){if(a[Y.id]===void 0)return;const $=a[Y.id];for(const J in $){const q=$[J];for(const D in q)v(q[D].object),delete q[D];delete $[J]}delete a[Y.id]}function Q(Y){for(const $ in a){const J=a[$];if(J[Y.id]===void 0)continue;const q=J[Y.id];for(const D in q)v(q[D].object),delete q[D];delete J[Y.id]}}function te(){z(),c=!0,u!==l&&(u=l,p(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:te,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:Q,initAttributes:g,enableAttribute:y,disableUnusedAttributes:w}}function IA(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,h){if(h===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,h),n.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function NA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=o||e.has("OES_texture_float"),T=g&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function UA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,g=_*4;let y=f.clippingState||null;l.value=y,y=c(v,d,g,p);for(let T=0;T!==g;++T)y[T]=n[T];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function OA(t){let e=new WeakMap;function n(o,a){return a===mu?o.mapping=io:a===xf&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===mu||a===xf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Kw(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kx extends $x{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,Tg=[.125,.215,.35,.446,.526,.582],Dr=20,od=new Kx,wg=new Xe;let ad=null;const Lr=(1+Math.sqrt(5))/2,ys=1/Lr,bg=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Lr,ys),new N(0,Lr,-ys),new N(ys,0,Lr),new N(-ys,0,Lr),new N(Lr,ys,0),new N(-Lr,ys,0)];class Cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ad=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad),e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:so,format:Zn,colorSpace:hi,depthBuffer:!1},r=Ag(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FA(s)),this._blurMaterial=kA(s,e,n)}return r}_compileMaterial(e){const n=new Qe(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(wg),c.toneMapping=hr,c.autoClear=!1;const p=new Vx({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),v=new Qe(new _t,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(wg),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;yl(r,_*g,f>2?g:0,g,g),c.setRenderTarget(r),x&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;yl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,od)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bg[(r-1)%bg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Qe(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),x=s/v,m=isFinite(s)?1+Math.floor(c*x):Dr;m>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const f=[];let _=0;for(let S=0;S<Dr;++S){const L=S/x,E=Math.exp(-L*L/2);f.push(E),S===0?_+=E:S<m&&(_+=2*E)}for(let S=0;S<f.length;S++)f[S]=f[S]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const y=this._sizeLods[r],T=3*y*(r>g-zs?r-g+zs:0),w=4*(this._cubeSize-y);yl(n,T,w,3*y,2*y),l.setRenderTarget(n),l.render(h,od)}}function FA(t){const e=[],n=[],i=[];let r=t;const s=t-zs+1+Tg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-zs?l=Tg[o-t+zs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,v=6,x=3,m=2,f=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let w=0;w<p;w++){const S=w%3*2/3-1,L=w>2?0:-1,E=[S,L,0,S+2/3,L,0,S+2/3,L+1,0,S,L,0,S+2/3,L+1,0,S,L+1,0];_.set(E,x*v*w),g.set(d,m*v*w);const b=[w,w,w,w,w,w];y.set(b,f*v*w)}const T=new Vi;T.setAttribute("position",new ei(_,x)),T.setAttribute("uv",new ei(g,m)),T.setAttribute("faceIndex",new ei(y,f)),e.push(T),r>zs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ag(t,e,n){const i=new ki(t,e,n);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function kA(t,e,n){const i=new Float32Array(Dr),r=new N(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Rg(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pg(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===mu||l===xf,c=l===io||l===ro;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Cg(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){n===null&&(n=new Cg(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function zA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HA(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const T=_[g+0],w=_[g+1],S=_[g+2];d.push(T,w,w,S,S,T)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const T=g+0,w=g+1,S=g+2;d.push(T,w,w,S,S,T)}}else return;const m=new(Ux(d)?Wx:Gx)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function VA(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,p){t.drawElements(s,p,a,d*l),n.update(p,s,1)}function h(d,p,v){if(v===0)return;let x,m;if(r)x=t,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,p,a,d*l,v),n.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h}function GA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WA(t,e){return t[0]-e[0]}function jA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function XA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new st,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==x){let $=function(){z.dispose(),s.delete(c),c.removeEventListener("dispose",$)};var p=$;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let E=0;g===!0&&(E=1),y===!0&&(E=2),T===!0&&(E=3);let b=c.attributes.position.count*E,Q=1;b>e.maxTextureSize&&(Q=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const te=new Float32Array(b*Q*4*x),z=new kx(te,b,Q,x);z.type=Ci,z.needsUpdate=!0;const Y=E*4;for(let J=0;J<x;J++){const q=w[J],D=S[J],X=L[J],V=b*Q*4*J;for(let O=0;O<q.count;O++){const B=O*Y;g===!0&&(o.fromBufferAttribute(q,O),te[V+B+0]=o.x,te[V+B+1]=o.y,te[V+B+2]=o.z,te[V+B+3]=0),y===!0&&(o.fromBufferAttribute(D,O),te[V+B+4]=o.x,te[V+B+5]=o.y,te[V+B+6]=o.z,te[V+B+7]=0),T===!0&&(o.fromBufferAttribute(X,O),te[V+B+8]=o.x,te[V+B+9]=o.y,te[V+B+10]=o.z,te[V+B+11]=X.itemSize===4?o.w:1)}}m={count:x,texture:z,size:new Se(b,Q)},s.set(c,m),c.addEventListener("dispose",$)}let f=0;for(let g=0;g<d.length;g++)f+=d[g];const _=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let x=i[c.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[c.id]=x}for(let y=0;y<v;y++){const T=x[y];T[0]=y,T[1]=d[y]}x.sort(jA);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(WA);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],S=T[1];w!==Number.MAX_SAFE_INTEGER&&S?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),f&&c.getAttribute("morphNormal"+y)!==f[w]&&c.setAttribute("morphNormal"+y,f[w]),r[y]=S,_+=S):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const g=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function $A(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Zx=new Zt,Qx=new kx,Jx=new Nw,ey=new Yx,Lg=[],Dg=[],Ig=new Float32Array(16),Ng=new Float32Array(9),Ug=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lg[r];if(s===void 0&&(s=new Float32Array(r),Lg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xu(t,e){let n=Dg[e];n===void 0&&(n=new Int32Array(e),Dg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function QA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Ug.set(i),t.uniformMatrix2fv(this.addr,!1,Ug),Lt(n,i)}}function JA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Ng.set(i),t.uniformMatrix3fv(this.addr,!1,Ng),Lt(n,i)}}function eR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Ig.set(i),t.uniformMatrix4fv(this.addr,!1,Ig),Lt(n,i)}}function tR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function sR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function uR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Zx,r)}function cR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jx,r)}function dR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ey,r)}function fR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qx,r)}function hR(t){switch(t){case 5126:return YA;case 35664:return qA;case 35665:return KA;case 35666:return ZA;case 35674:return QA;case 35675:return JA;case 35676:return eR;case 5124:case 35670:return tR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return rR;case 5125:return sR;case 36294:return oR;case 36295:return aR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return fR}}function pR(t,e){t.uniform1fv(this.addr,e)}function mR(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function gR(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function vR(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function _R(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xR(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yR(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function SR(t,e){t.uniform1iv(this.addr,e)}function ER(t,e){t.uniform2iv(this.addr,e)}function MR(t,e){t.uniform3iv(this.addr,e)}function TR(t,e){t.uniform4iv(this.addr,e)}function wR(t,e){t.uniform1uiv(this.addr,e)}function bR(t,e){t.uniform2uiv(this.addr,e)}function CR(t,e){t.uniform3uiv(this.addr,e)}function AR(t,e){t.uniform4uiv(this.addr,e)}function RR(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Zx,s[o])}function PR(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Jx,s[o])}function LR(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ey,s[o])}function DR(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Qx,s[o])}function IR(t){switch(t){case 5126:return pR;case 35664:return mR;case 35665:return gR;case 35666:return vR;case 35674:return _R;case 35675:return xR;case 35676:return yR;case 5124:case 35670:return SR;case 35667:case 35671:return ER;case 35668:case 35672:return MR;case 35669:case 35673:return TR;case 5125:return wR;case 36294:return bR;case 36295:return CR;case 36296:return AR;case 35678:case 36198:case 36298:case 36306:case 35682:return RR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return DR}}class NR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=hR(n.type)}}class UR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=IR(n.type)}}class OR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function Og(t,e){t.seq.push(e),t.map[e.id]=e}function FR(t,e,n){const i=t.name,r=i.length;for(ld.lastIndex=0;;){const s=ld.exec(i),o=ld.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Og(n,u===void 0?new NR(a,t,e):new UR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new OR(a),Og(n,h)),n=h}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);FR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let kR=0;function BR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function zR(t){switch(t){case hi:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+BR(t.getShaderSource(e),o)}else return r}function HR(t,e){const n=zR(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function VR(t,e){let n;switch(e){case OT:n="Linear";break;case FT:n="Reinhard";break;case kT:n="OptimizedCineon";break;case BT:n="ACESFilmic";break;case zT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function GR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zo).join(`
`)}function WR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zo(t){return t!==""}function Bg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(t){return t.replace(XR,YR)}const $R=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YR(t,e){let n=Ue[e];if(n===void 0){const i=$R.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wf(n)}const qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(t){return t.replace(qR,KR)}function KR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function QR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function e3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wx:e="ENVMAP_BLENDING_MULTIPLY";break;case NT:e="ENVMAP_BLENDING_MIX";break;case UT:e="ENVMAP_BLENDING_ADD";break}return e}function t3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function n3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ZR(n),u=QR(n),c=JR(n),h=e3(n),d=t3(n),p=n.isWebGL2?"":GR(n),v=WR(s),x=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(zo).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(zo).join(`
`),f.length>0&&(f+=`
`)):(m=[Vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),f=[p,Vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hr?"#define TONE_MAPPING":"",n.toneMapping!==hr?Ue.tonemapping_pars_fragment:"",n.toneMapping!==hr?VR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,HR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),o=wf(o),o=Bg(o,n),o=zg(o,n),a=wf(a),a=Bg(a,n),a=zg(a,n),o=Hg(o),a=Hg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+m+o,y=_+f+a,T=Fg(r,r.VERTEX_SHADER,g),w=Fg(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,T),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const E=r.getProgramInfoLog(x).trim(),b=r.getShaderInfoLog(T).trim(),Q=r.getShaderInfoLog(w).trim();let te=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,T,w);else{const Y=kg(r,T,"vertex"),$=kg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+Y+`
`+$)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(b===""||Q==="")&&(z=!1);z&&(this.diagnostics={runnable:te,programLog:E,vertexShader:{log:b,prefix:m},fragmentShader:{log:Q,prefix:f}})}r.deleteShader(T),r.deleteShader(w);let S;this.getUniforms=function(){return S===void 0&&(S=new Bl(r,x)),S};let L;return this.getAttributes=function(){return L===void 0&&(L=jR(r,x)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let i3=0;class r3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new s3(e),n.set(e,i)),i}}class s3{constructor(e){this.id=i3++,this.code=e,this.usedTimes=0}}function o3(t,e,n,i,r,s,o){const a=new zx,l=new r3,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,b,Q,te,z){const Y=te.fog,$=z.geometry,J=E.isMeshStandardMaterial?te.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||J),D=q&&q.mapping===Gu?q.image.height:null,X=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const V=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,O=V!==void 0?V.length:0;let B=0;$.morphAttributes.position!==void 0&&(B=1),$.morphAttributes.normal!==void 0&&(B=2),$.morphAttributes.color!==void 0&&(B=3);let ae,ue,ce,xe;if(X){const et=oi[X];ae=et.vertexShader,ue=et.fragmentShader}else ae=E.vertexShader,ue=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const we=t.getRenderTarget(),Te=z.isInstancedMesh===!0,ke=!!E.map,mt=!!E.matcap,De=!!q,F=!!E.aoMap,ot=!!E.lightMap,Me=!!E.bumpMap,_e=!!E.normalMap,Ce=!!E.displacementMap,$e=!!E.emissiveMap,Oe=!!E.metalnessMap,Ie=!!E.roughnessMap,We=E.anisotropy>0,bt=E.clearcoat>0,Dt=E.iridescence>0,A=E.sheen>0,M=E.transmission>0,G=We&&!!E.anisotropyMap,se=bt&&!!E.clearcoatMap,ne=bt&&!!E.clearcoatNormalMap,oe=bt&&!!E.clearcoatRoughnessMap,Ee=Dt&&!!E.iridescenceMap,le=Dt&&!!E.iridescenceThicknessMap,W=A&&!!E.sheenColorMap,R=A&&!!E.sheenRoughnessMap,ee=!!E.specularMap,ge=!!E.specularColorMap,fe=!!E.specularIntensityMap,me=M&&!!E.transmissionMap,Le=M&&!!E.thicknessMap,Ge=!!E.gradientMap,I=!!E.alphaMap,pe=E.alphaTest>0,j=!!E.alphaHash,re=!!E.extensions,de=!!$.attributes.uv1,Be=!!$.attributes.uv2,Ye=!!$.attributes.uv3;let Ze=hr;return E.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ze=t.toneMapping),{isWebGL2:c,shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:ae,fragmentShader:ue,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:Te,instancingColor:Te&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:hi,map:ke,matcap:mt,envMap:De,envMapMode:De&&q.mapping,envMapCubeUVHeight:D,aoMap:F,lightMap:ot,bumpMap:Me,normalMap:_e,displacementMap:d&&Ce,emissiveMap:$e,normalMapObjectSpace:_e&&E.normalMapType===JT,normalMapTangentSpace:_e&&E.normalMapType===Nx,metalnessMap:Oe,roughnessMap:Ie,anisotropy:We,anisotropyMap:G,clearcoat:bt,clearcoatMap:se,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,iridescence:Dt,iridescenceMap:Ee,iridescenceThicknessMap:le,sheen:A,sheenColorMap:W,sheenRoughnessMap:R,specularMap:ee,specularColorMap:ge,specularIntensityMap:fe,transmission:M,transmissionMap:me,thicknessMap:Le,gradientMap:Ge,opaque:E.transparent===!1&&E.blending===Ys,alphaMap:I,alphaTest:pe,alphaHash:j,combine:E.combine,mapUv:ke&&x(E.map.channel),aoMapUv:F&&x(E.aoMap.channel),lightMapUv:ot&&x(E.lightMap.channel),bumpMapUv:Me&&x(E.bumpMap.channel),normalMapUv:_e&&x(E.normalMap.channel),displacementMapUv:Ce&&x(E.displacementMap.channel),emissiveMapUv:$e&&x(E.emissiveMap.channel),metalnessMapUv:Oe&&x(E.metalnessMap.channel),roughnessMapUv:Ie&&x(E.roughnessMap.channel),anisotropyMapUv:G&&x(E.anisotropyMap.channel),clearcoatMapUv:se&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:W&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:R&&x(E.sheenRoughnessMap.channel),specularMapUv:ee&&x(E.specularMap.channel),specularColorMapUv:ge&&x(E.specularColorMap.channel),specularIntensityMapUv:fe&&x(E.specularIntensityMap.channel),transmissionMapUv:me&&x(E.transmissionMap.channel),thicknessMapUv:Le&&x(E.thicknessMap.channel),alphaMapUv:I&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(_e||We),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:Be,vertexUv3s:Ye,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(ke||I),fog:!!Y,useFog:E.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:B,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&E.map.colorSpace===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Un,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:re&&E.extensions.derivatives===!0,extensionFragDepth:re&&E.extensions.fragDepth===!0,extensionDrawBuffers:re&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Q in E.defines)b.push(Q),b.push(E.defines[Q]);return E.isRawShaderMaterial===!1&&(_(b,E),g(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function _(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function g(E,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const b=v[E.type];let Q;if(b){const te=oi[b];Q=Xx.clone(te.uniforms)}else Q=E.uniforms;return Q}function T(E,b){let Q;for(let te=0,z=u.length;te<z;te++){const Y=u[te];if(Y.cacheKey===b){Q=Y,++Q.usedTimes;break}}return Q===void 0&&(Q=new n3(t,b,E,s),u.push(Q)),Q}function w(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function S(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:S,programs:u,dispose:L}}function a3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function l3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||l3),i.length>1&&i.sort(d||Gg),r.length>1&&r.sort(d||Gg)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function u3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Wg,t.set(i,[o])):r>=s.length?(o=new Wg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function c3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Xe};break;case"SpotLight":n={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function d3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let f3=0;function h3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function p3(t,e){const n=new c3,i=d3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new N);const s=new N,o=new yt,a=new yt;function l(c,h){let d=0,p=0,v=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let x=0,m=0,f=0,_=0,g=0,y=0,T=0,w=0,S=0,L=0;c.sort(h3);const E=h===!0?Math.PI:1;for(let Q=0,te=c.length;Q<te;Q++){const z=c[Q],Y=z.color,$=z.intensity,J=z.distance,q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=Y.r*$*E,p+=Y.g*$*E,v+=Y.b*$*E;else if(z.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(z.sh.coefficients[D],$);else if(z.isDirectionalLight){const D=n.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const X=z.shadow,V=i.get(z);V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,r.directionalShadow[x]=V,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=z.shadow.matrix,y++}r.directional[x]=D,x++}else if(z.isSpotLight){const D=n.get(z);D.position.setFromMatrixPosition(z.matrixWorld),D.color.copy(Y).multiplyScalar($*E),D.distance=J,D.coneCos=Math.cos(z.angle),D.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),D.decay=z.decay,r.spot[f]=D;const X=z.shadow;if(z.map&&(r.spotLightMap[S]=z.map,S++,X.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[f]=X.matrix,z.castShadow){const V=i.get(z);V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,r.spotShadow[f]=V,r.spotShadowMap[f]=q,w++}f++}else if(z.isRectAreaLight){const D=n.get(z);D.color.copy(Y).multiplyScalar($),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),r.rectArea[_]=D,_++}else if(z.isPointLight){const D=n.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*E),D.distance=z.distance,D.decay=z.decay,z.castShadow){const X=z.shadow,V=i.get(z);V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,r.pointShadow[m]=V,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=z.shadow.matrix,T++}r.point[m]=D,m++}else if(z.isHemisphereLight){const D=n.get(z);D.skyColor.copy(z.color).multiplyScalar($*E),D.groundColor.copy(z.groundColor).multiplyScalar($*E),r.hemi[g]=D,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const b=r.hash;(b.directionalLength!==x||b.pointLength!==m||b.spotLength!==f||b.rectAreaLength!==_||b.hemiLength!==g||b.numDirectionalShadows!==y||b.numPointShadows!==T||b.numSpotShadows!==w||b.numSpotMaps!==S)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+S-L,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=L,b.directionalLength=x,b.pointLength=m,b.spotLength=f,b.rectAreaLength=_,b.hemiLength=g,b.numDirectionalShadows=y,b.numPointShadows=T,b.numSpotShadows=w,b.numSpotMaps=S,r.version=f3++)}function u(c,h){let d=0,p=0,v=0,x=0,m=0;const f=h.matrixWorldInverse;for(let _=0,g=c.length;_<g;_++){const y=c[_];if(y.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(y.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function jg(t,e){const n=new p3(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function m3(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new jg(t,e),n.set(s,[l])):o>=a.length?(l=new jg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class g3 extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v3 extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y3(t,e,n){let i=new $h;const r=new Se,s=new Se,o=new st,a=new g3({depthPacking:QT}),l=new v3,u={},c=n.maxTextureSize,h={[fi]:pn,[pn]:fi,[Un]:Un},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:_3,fragmentShader:x3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Vi;v.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qe(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ex;let f=this.type;this.render=function(T,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const L=t.getRenderTarget(),E=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(Li),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const te=f!==Si&&this.type===Si,z=f===Si&&this.type!==Si;for(let Y=0,$=T.length;Y<$;Y++){const J=T[Y],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const D=q.getFrameExtents();if(r.multiply(D),s.copy(q.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/D.x),r.x=s.x*D.x,q.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/D.y),r.y=s.y*D.y,q.mapSize.y=s.y)),q.map===null||te===!0||z===!0){const V=this.type!==Si?{minFilter:ut,magFilter:ut}:{};q.map!==null&&q.map.dispose(),q.map=new ki(r.x,r.y,V),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const X=q.getViewportCount();for(let V=0;V<X;V++){const O=q.getViewport(V);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),Q.viewport(o),q.updateMatrices(J,V),i=q.getFrustum(),y(w,S,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Si&&_(q,S),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(L,E,b)};function _(T,w){const S=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ki(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,S,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,S,p,x,null)}function g(T,w,S,L){let E=null;const b=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)E=b;else if(E=S.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Q=E.uuid,te=w.uuid;let z=u[Q];z===void 0&&(z={},u[Q]=z);let Y=z[te];Y===void 0&&(Y=E.clone(),z[te]=Y),E=Y}if(E.visible=w.visible,E.wireframe=w.wireframe,L===Si?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=t.properties.get(E);Q.light=S}return E}function y(T,w,S,L,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Si)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const te=e.update(T),z=T.material;if(Array.isArray(z)){const Y=te.groups;for(let $=0,J=Y.length;$<J;$++){const q=Y[$],D=z[q.materialIndex];if(D&&D.visible){const X=g(T,D,L,E);t.renderBufferDirect(S,null,te,X,T,q)}}}else if(z.visible){const Y=g(T,z,L,E);t.renderBufferDirect(S,null,te,Y,T,null)}}const Q=T.children;for(let te=0,z=Q.length;te<z;te++)y(Q[te],w,S,L,E)}}function S3(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const pe=new st;let j=null;const re=new st(0,0,0,0);return{setMask:function(de){j!==de&&!I&&(t.colorMask(de,de,de,de),j=de)},setLocked:function(de){I=de},setClear:function(de,Be,Ye,Ze,mn){mn===!0&&(de*=Ze,Be*=Ze,Ye*=Ze),pe.set(de,Be,Ye,Ze),re.equals(pe)===!1&&(t.clearColor(de,Be,Ye,Ze),re.copy(pe))},reset:function(){I=!1,j=null,re.set(-1,0,0,0)}}}function s(){let I=!1,pe=null,j=null,re=null;return{setTest:function(de){de?we(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(de){pe!==de&&!I&&(t.depthMask(de),pe=de)},setFunc:function(de){if(j!==de){switch(de){case CT:t.depthFunc(t.NEVER);break;case AT:t.depthFunc(t.ALWAYS);break;case RT:t.depthFunc(t.LESS);break;case _f:t.depthFunc(t.LEQUAL);break;case PT:t.depthFunc(t.EQUAL);break;case LT:t.depthFunc(t.GEQUAL);break;case DT:t.depthFunc(t.GREATER);break;case IT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}j=de}},setLocked:function(de){I=de},setClear:function(de){re!==de&&(t.clearDepth(de),re=de)},reset:function(){I=!1,pe=null,j=null,re=null}}}function o(){let I=!1,pe=null,j=null,re=null,de=null,Be=null,Ye=null,Ze=null,mn=null;return{setTest:function(et){I||(et?we(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(et){pe!==et&&!I&&(t.stencilMask(et),pe=et)},setFunc:function(et,ni,en){(j!==et||re!==ni||de!==en)&&(t.stencilFunc(et,ni,en),j=et,re=ni,de=en)},setOp:function(et,ni,en){(Be!==et||Ye!==ni||Ze!==en)&&(t.stencilOp(et,ni,en),Be=et,Ye=ni,Ze=en)},setLocked:function(et){I=et},setClear:function(et){mn!==et&&(t.clearStencil(et),mn=et)},reset:function(){I=!1,pe=null,j=null,re=null,de=null,Be=null,Ye=null,Ze=null,mn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let d={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,y=null,T=null,w=null,S=null,L=null,E=!1,b=null,Q=null,te=null,z=null,Y=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(D)[1]),J=q>=1):D.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),J=q>=2);let X=null,V={};const O=t.getParameter(t.SCISSOR_BOX),B=t.getParameter(t.VIEWPORT),ae=new st().fromArray(O),ue=new st().fromArray(B);function ce(I,pe,j,re){const de=new Uint8Array(4),Be=t.createTexture();t.bindTexture(I,Be),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<j;Ye++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(pe,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(pe+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Be}const xe={};xe[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),we(t.DEPTH_TEST),l.setFunc(_f),Ce(!1),$e(Pm),we(t.CULL_FACE),Me(Li);function we(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function Te(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function ke(I,pe){return p[I]!==pe?(t.bindFramebuffer(I,pe),p[I]=pe,i&&(I===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=pe),I===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=pe)),!0):!1}function mt(I,pe){let j=x,re=!1;if(I)if(j=v.get(pe),j===void 0&&(j=[],v.set(pe,j)),I.isWebGLMultipleRenderTargets){const de=I.texture;if(j.length!==de.length||j[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,Ye=de.length;Be<Ye;Be++)j[Be]=t.COLOR_ATTACHMENT0+Be;j.length=de.length,re=!0}}else j[0]!==t.COLOR_ATTACHMENT0&&(j[0]=t.COLOR_ATTACHMENT0,re=!0);else j[0]!==t.BACK&&(j[0]=t.BACK,re=!0);re&&(n.isWebGL2?t.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function De(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const F={[ws]:t.FUNC_ADD,[gT]:t.FUNC_SUBTRACT,[vT]:t.FUNC_REVERSE_SUBTRACT};if(i)F[Nm]=t.MIN,F[Um]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(F[Nm]=I.MIN_EXT,F[Um]=I.MAX_EXT)}const ot={[_T]:t.ZERO,[xT]:t.ONE,[yT]:t.SRC_COLOR,[Mx]:t.SRC_ALPHA,[bT]:t.SRC_ALPHA_SATURATE,[TT]:t.DST_COLOR,[ET]:t.DST_ALPHA,[ST]:t.ONE_MINUS_SRC_COLOR,[Tx]:t.ONE_MINUS_SRC_ALPHA,[wT]:t.ONE_MINUS_DST_COLOR,[MT]:t.ONE_MINUS_DST_ALPHA};function Me(I,pe,j,re,de,Be,Ye,Ze){if(I===Li){f===!0&&(Te(t.BLEND),f=!1);return}if(f===!1&&(we(t.BLEND),f=!0),I!==mT){if(I!==_||Ze!==E){if((g!==ws||w!==ws)&&(t.blendEquation(t.FUNC_ADD),g=ws,w=ws),Ze)switch(I){case Ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lm:t.blendFunc(t.ONE,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Im:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Im:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,T=null,S=null,L=null,_=I,E=Ze}return}de=de||pe,Be=Be||j,Ye=Ye||re,(pe!==g||de!==w)&&(t.blendEquationSeparate(F[pe],F[de]),g=pe,w=de),(j!==y||re!==T||Be!==S||Ye!==L)&&(t.blendFuncSeparate(ot[j],ot[re],ot[Be],ot[Ye]),y=j,T=re,S=Be,L=Ye),_=I,E=!1}function _e(I,pe){I.side===Un?Te(t.CULL_FACE):we(t.CULL_FACE);let j=I.side===pn;pe&&(j=!j),Ce(j),I.blending===Ys&&I.transparent===!1?Me(Li):Me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const re=I.stencilWrite;u.setTest(re),re&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){b!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),b=I)}function $e(I){I!==fT?(we(t.CULL_FACE),I!==Q&&(I===Pm?t.cullFace(t.BACK):I===hT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),Q=I}function Oe(I){I!==te&&(J&&t.lineWidth(I),te=I)}function Ie(I,pe,j){I?(we(t.POLYGON_OFFSET_FILL),(z!==pe||Y!==j)&&(t.polygonOffset(pe,j),z=pe,Y=j)):Te(t.POLYGON_OFFSET_FILL)}function We(I){I?we(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function bt(I){I===void 0&&(I=t.TEXTURE0+$-1),X!==I&&(t.activeTexture(I),X=I)}function Dt(I,pe,j){j===void 0&&(X===null?j=t.TEXTURE0+$-1:j=X);let re=V[j];re===void 0&&(re={type:void 0,texture:void 0},V[j]=re),(re.type!==I||re.texture!==pe)&&(X!==j&&(t.activeTexture(j),X=j),t.bindTexture(I,pe||xe[I]),re.type=I,re.texture=pe)}function A(){const I=V[X];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){ae.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function fe(I){ue.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ue.copy(I))}function me(I,pe){let j=h.get(pe);j===void 0&&(j=new WeakMap,h.set(pe,j));let re=j.get(I);re===void 0&&(re=t.getUniformBlockIndex(pe,I.name),j.set(I,re))}function Le(I,pe){const re=h.get(pe).get(I);c.get(pe)!==re&&(t.uniformBlockBinding(pe,re,I.__bindingPointIndex),c.set(pe,re))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,V={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,y=null,T=null,w=null,S=null,L=null,E=!1,b=null,Q=null,te=null,z=null,Y=null,ae.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:we,disable:Te,bindFramebuffer:ke,drawBuffers:mt,useProgram:De,setBlending:Me,setMaterial:_e,setFlipSided:Ce,setCullFace:$e,setLineWidth:Oe,setPolygonOffset:Ie,setScissorTest:We,activeTexture:bt,bindTexture:Dt,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:R,texImage3D:ee,updateUBOMapping:me,uniformBlockBinding:Le,texStorage2D:le,texStorage3D:W,texSubImage2D:se,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ee,scissor:ge,viewport:fe,reset:Ge}}function E3(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return f?new OffscreenCanvas(A,M):_u("canvas")}function g(A,M,G,se){let ne=1;if((A.width>se||A.height>se)&&(ne=se/Math.max(A.width,A.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=M?vu:Math.floor,Ee=oe(ne*A.width),le=oe(ne*A.height);x===void 0&&(x=_(Ee,le));const W=G?_(Ee,le):x;return W.width=Ee,W.height=le,W.getContext("2d").drawImage(A,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ee+"x"+le+")."),W}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Tf(A.width)&&Tf(A.height)}function T(A){return a?!1:A.wrapS!==Kn||A.wrapT!==Kn||A.minFilter!==ut&&A.minFilter!==Dn}function w(A,M){return A.generateMipmaps&&M&&A.minFilter!==ut&&A.minFilter!==Dn}function S(A){t.generateMipmap(A)}function L(A,M,G,se,ne=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=M;return M===t.RED&&(G===t.FLOAT&&(oe=t.R32F),G===t.HALF_FLOAT&&(oe=t.R16F),G===t.UNSIGNED_BYTE&&(oe=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(oe=t.R8UI),G===t.UNSIGNED_SHORT&&(oe=t.R16UI),G===t.UNSIGNED_INT&&(oe=t.R32UI),G===t.BYTE&&(oe=t.R8I),G===t.SHORT&&(oe=t.R16I),G===t.INT&&(oe=t.R32I)),M===t.RG&&(G===t.FLOAT&&(oe=t.RG32F),G===t.HALF_FLOAT&&(oe=t.RG16F),G===t.UNSIGNED_BYTE&&(oe=t.RG8)),M===t.RGBA&&(G===t.FLOAT&&(oe=t.RGBA32F),G===t.HALF_FLOAT&&(oe=t.RGBA16F),G===t.UNSIGNED_BYTE&&(oe=se===it&&ne===!1?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)),(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function E(A,M,G){return w(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==ut&&A.minFilter!==Dn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){return A===ut||A===Om||A===Oc?t.NEAREST:t.LINEAR}function Q(A){const M=A.target;M.removeEventListener("dispose",Q),z(M),M.isVideoTexture&&v.delete(M)}function te(A){const M=A.target;M.removeEventListener("dispose",te),$(M)}function z(A){const M=i.get(A);if(M.__webglInit===void 0)return;const G=A.source,se=m.get(G);if(se){const ne=se[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&Y(A),Object.keys(se).length===0&&m.delete(G)}i.remove(A)}function Y(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const G=A.source,se=m.get(G);delete se[M.__cacheKey],o.memory.textures--}function $(A){const M=A.texture,G=i.get(A),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let oe=0;oe<G.__webglFramebuffer[ne].length;oe++)t.deleteFramebuffer(G.__webglFramebuffer[ne][oe]);else t.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[ne]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,oe=M.length;ne<oe;ne++){const Ee=i.get(M[ne]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(A)}let J=0;function q(){J=0}function D(){const A=J;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),J+=1,A}function X(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function V(A,M){const G=i.get(A);if(A.isVideoTexture&&bt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const se=A.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(G,A,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function O(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ke(G,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function B(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ke(G,A,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function ae(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){mt(G,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const ue={[yf]:t.REPEAT,[Kn]:t.CLAMP_TO_EDGE,[Sf]:t.MIRRORED_REPEAT},ce={[ut]:t.NEAREST,[Om]:t.NEAREST_MIPMAP_NEAREST,[Oc]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[HT]:t.LINEAR_MIPMAP_NEAREST,[_a]:t.LINEAR_MIPMAP_LINEAR},xe={[tw]:t.NEVER,[lw]:t.ALWAYS,[nw]:t.LESS,[rw]:t.LEQUAL,[iw]:t.EQUAL,[aw]:t.GEQUAL,[sw]:t.GREATER,[ow]:t.NOTEQUAL};function we(A,M,G){if(G?(t.texParameteri(A,t.TEXTURE_WRAP_S,ue[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ue[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ue[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ce[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ce[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Kn||M.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,b(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==ut&&M.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ut||M.minFilter!==Oc&&M.minFilter!==_a||M.type===Ci&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===so&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Te(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",Q));const se=M.source;let ne=m.get(se);ne===void 0&&(ne={},m.set(se,ne));const oe=X(M);if(oe!==A.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[oe].usedTimes++;const Ee=ne[A.__cacheKey];Ee!==void 0&&(ne[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&Y(M)),A.__cacheKey=oe,A.__webglTexture=ne[oe].texture}return G}function ke(A,M,G){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const ne=Te(A,M),oe=M.source;n.bindTexture(se,A.__webglTexture,t.TEXTURE0+G);const Ee=i.get(oe);if(oe.version!==Ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+G),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=T(M)&&y(M.image)===!1;let W=g(M.image,le,!1,c);W=Dt(M,W);const R=y(W)||a,ee=s.convert(M.format,M.colorSpace);let ge=s.convert(M.type),fe=L(M.internalFormat,ee,ge,M.colorSpace,M.isVideoTexture);we(se,M,R);let me;const Le=M.mipmaps,Ge=a&&M.isVideoTexture!==!0,I=Ee.__version===void 0||ne===!0,pe=E(M,W,R);if(M.isDepthTexture)fe=t.DEPTH_COMPONENT,a?M.type===Ci?fe=t.DEPTH_COMPONENT32F:M.type===rr?fe=t.DEPTH_COMPONENT24:M.type===kr?fe=t.DEPTH24_STENCIL8:fe=t.DEPTH_COMPONENT16:M.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Br&&fe===t.DEPTH_COMPONENT&&M.type!==Wh&&M.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=rr,ge=s.convert(M.type)),M.format===oo&&fe===t.DEPTH_COMPONENT&&(fe=t.DEPTH_STENCIL,M.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=kr,ge=s.convert(M.type))),I&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,fe,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,fe,W.width,W.height,0,ee,ge,null));else if(M.isDataTexture)if(Le.length>0&&R){Ge&&I&&n.texStorage2D(t.TEXTURE_2D,pe,fe,Le[0].width,Le[0].height);for(let j=0,re=Le.length;j<re;j++)me=Le[j],Ge?n.texSubImage2D(t.TEXTURE_2D,j,0,0,me.width,me.height,ee,ge,me.data):n.texImage2D(t.TEXTURE_2D,j,fe,me.width,me.height,0,ee,ge,me.data);M.generateMipmaps=!1}else Ge?(I&&n.texStorage2D(t.TEXTURE_2D,pe,fe,W.width,W.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,W.width,W.height,ee,ge,W.data)):n.texImage2D(t.TEXTURE_2D,0,fe,W.width,W.height,0,ee,ge,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&I&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,fe,Le[0].width,Le[0].height,W.depth);for(let j=0,re=Le.length;j<re;j++)me=Le[j],M.format!==Zn?ee!==null?Ge?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,W.depth,ee,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,fe,me.width,me.height,W.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,W.depth,ee,ge,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,fe,me.width,me.height,W.depth,0,ee,ge,me.data)}else{Ge&&I&&n.texStorage2D(t.TEXTURE_2D,pe,fe,Le[0].width,Le[0].height);for(let j=0,re=Le.length;j<re;j++)me=Le[j],M.format!==Zn?ee!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,me.width,me.height,ee,me.data):n.compressedTexImage2D(t.TEXTURE_2D,j,fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?n.texSubImage2D(t.TEXTURE_2D,j,0,0,me.width,me.height,ee,ge,me.data):n.texImage2D(t.TEXTURE_2D,j,fe,me.width,me.height,0,ee,ge,me.data)}else if(M.isDataArrayTexture)Ge?(I&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,fe,W.width,W.height,W.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,ee,ge,W.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,W.width,W.height,W.depth,0,ee,ge,W.data);else if(M.isData3DTexture)Ge?(I&&n.texStorage3D(t.TEXTURE_3D,pe,fe,W.width,W.height,W.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,ee,ge,W.data)):n.texImage3D(t.TEXTURE_3D,0,fe,W.width,W.height,W.depth,0,ee,ge,W.data);else if(M.isFramebufferTexture){if(I)if(Ge)n.texStorage2D(t.TEXTURE_2D,pe,fe,W.width,W.height);else{let j=W.width,re=W.height;for(let de=0;de<pe;de++)n.texImage2D(t.TEXTURE_2D,de,fe,j,re,0,ee,ge,null),j>>=1,re>>=1}}else if(Le.length>0&&R){Ge&&I&&n.texStorage2D(t.TEXTURE_2D,pe,fe,Le[0].width,Le[0].height);for(let j=0,re=Le.length;j<re;j++)me=Le[j],Ge?n.texSubImage2D(t.TEXTURE_2D,j,0,0,ee,ge,me):n.texImage2D(t.TEXTURE_2D,j,fe,ee,ge,me);M.generateMipmaps=!1}else Ge?(I&&n.texStorage2D(t.TEXTURE_2D,pe,fe,W.width,W.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee,ge,W)):n.texImage2D(t.TEXTURE_2D,0,fe,ee,ge,W);w(M,R)&&S(se),Ee.__version=oe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function mt(A,M,G){if(M.image.length!==6)return;const se=Te(A,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const oe=i.get(ne);if(ne.version!==oe.__version||se===!0){n.activeTexture(t.TEXTURE0+G),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,W=[];for(let j=0;j<6;j++)!Ee&&!le?W[j]=g(M.image[j],!1,!0,u):W[j]=le?M.image[j].image:M.image[j],W[j]=Dt(M,W[j]);const R=W[0],ee=y(R)||a,ge=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),me=L(M.internalFormat,ge,fe,M.colorSpace),Le=a&&M.isVideoTexture!==!0,Ge=oe.__version===void 0||se===!0;let I=E(M,R,ee);we(t.TEXTURE_CUBE_MAP,M,ee);let pe;if(Ee){Le&&Ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,I,me,R.width,R.height);for(let j=0;j<6;j++){pe=W[j].mipmaps;for(let re=0;re<pe.length;re++){const de=pe[re];M.format!==Zn?ge!==null?Le?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,de.width,de.height,ge,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,de.width,de.height,ge,fe,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,me,de.width,de.height,0,ge,fe,de.data)}}}else{pe=M.mipmaps,Le&&Ge&&(pe.length>0&&I++,n.texStorage2D(t.TEXTURE_CUBE_MAP,I,me,W[0].width,W[0].height));for(let j=0;j<6;j++)if(le){Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,W[j].width,W[j].height,ge,fe,W[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,me,W[j].width,W[j].height,0,ge,fe,W[j].data);for(let re=0;re<pe.length;re++){const Be=pe[re].image[j].image;Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,Be.width,Be.height,ge,fe,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,me,Be.width,Be.height,0,ge,fe,Be.data)}}else{Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ge,fe,W[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,me,ge,fe,W[j]);for(let re=0;re<pe.length;re++){const de=pe[re];Le?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,ge,fe,de.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,me,ge,fe,de.image[j])}}}w(M,ee)&&S(t.TEXTURE_CUBE_MAP),oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function De(A,M,G,se,ne,oe){const Ee=s.convert(G.format,G.colorSpace),le=s.convert(G.type),W=L(G.internalFormat,Ee,le,G.colorSpace);if(!i.get(M).__hasExternalTextures){const ee=Math.max(1,M.width>>oe),ge=Math.max(1,M.height>>oe);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,oe,W,ee,ge,M.depth,0,Ee,le,null):n.texImage2D(ne,oe,W,ee,ge,0,Ee,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),We(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,0,Ie(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(A,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let se=t.DEPTH_COMPONENT16;if(G||We(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ci?se=t.DEPTH_COMPONENT32F:ne.type===rr&&(se=t.DEPTH_COMPONENT24));const oe=Ie(M);We(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,se,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,se,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const se=Ie(M);G&&We(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):We(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<se.length;ne++){const oe=se[ne],Ee=s.convert(oe.format,oe.colorSpace),le=s.convert(oe.type),W=L(oe.internalFormat,Ee,le,oe.colorSpace),R=Ie(M);G&&We(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,R,W,M.width,M.height):We(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R,W,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,W,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ot(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,ne=Ie(M);if(M.depthTexture.format===Br)We(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===oo)We(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Me(A){const M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ot(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),F(M.__webglDepthbuffer[se],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),F(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(A,M,G){const se=i.get(A);M!==void 0&&De(se.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Me(A)}function Ce(A){const M=A.texture,G=i.get(A),se=i.get(M);A.addEventListener("dispose",te),A.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,Ee=y(A)||a;if(ne){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let W=0;W<M.mipmaps.length;W++)G.__webglFramebuffer[le][W]=t.createFramebuffer()}else G.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)G.__webglFramebuffer[le]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(oe)if(r.drawBuffers){const le=A.texture;for(let W=0,R=le.length;W<R;W++){const ee=i.get(le[W]);ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&We(A)===!1){const le=oe?M:[M];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<le.length;W++){const R=le[W];G.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[W]);const ee=s.convert(R.format,R.colorSpace),ge=s.convert(R.type),fe=L(R.internalFormat,ee,ge,R.colorSpace,A.isXRRenderTarget===!0),me=Ie(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,fe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,G.__webglColorRenderbuffer[W])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),F(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),we(t.TEXTURE_CUBE_MAP,M,Ee);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)De(G.__webglFramebuffer[le][W],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,W);else De(G.__webglFramebuffer[le],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);w(M,Ee)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){const le=A.texture;for(let W=0,R=le.length;W<R;W++){const ee=le[W],ge=i.get(ee);n.bindTexture(t.TEXTURE_2D,ge.__webglTexture),we(t.TEXTURE_2D,ee,Ee),De(G.__webglFramebuffer,A,ee,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D,0),w(ee,Ee)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,se.__webglTexture),we(le,M,Ee),a&&M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)De(G.__webglFramebuffer[W],A,M,t.COLOR_ATTACHMENT0,le,W);else De(G.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,le,0);w(M,Ee)&&S(le),n.unbindTexture()}A.depthBuffer&&Me(A)}function $e(A){const M=y(A)||a,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let se=0,ne=G.length;se<ne;se++){const oe=G[se];if(w(oe,M)){const Ee=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(oe).__webglTexture;n.bindTexture(Ee,le),S(Ee),n.unbindTexture()}}}function Oe(A){if(a&&A.samples>0&&We(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,se=A.height;let ne=t.COLOR_BUFFER_BIT;const oe=[],Ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(A),W=A.isWebGLMultipleRenderTargets===!0;if(W)for(let R=0;R<M.length;R++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+R,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+R,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let R=0;R<M.length;R++){oe.push(t.COLOR_ATTACHMENT0+R),A.depthBuffer&&oe.push(Ee);const ee=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ee===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),W&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[R]),ee===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),W){const ge=i.get(M[R]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,G,se,0,0,G,se,ne,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let R=0;R<M.length;R++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+R,t.RENDERBUFFER,le.__webglColorRenderbuffer[R]);const ee=i.get(M[R]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+R,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(h,A.samples)}function We(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(A){const M=o.render.frame;v.get(A)!==M&&(v.set(A,M),A.update())}function Dt(A,M){const G=A.colorSpace,se=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Mf||G!==hi&&G!==Hr&&(G===it||G===Wu?a===!1?e.has("EXT_sRGB")===!0&&se===Zn?(A.format=Mf,A.minFilter=Dn,A.generateMipmaps=!1):M=Ox.sRGBToLinear(M):(se!==Zn||ne!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=D,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=ae,this.rebindTextures=_e,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=De,this.useMultisampledRTT=We}const M3=0,Ct=1;function T3(t,e,n){const i=n.isWebGL2;function r(s,o=Hr){let a;const l=o===it||o===Wu?Ct:M3;if(s===pr)return t.UNSIGNED_BYTE;if(s===Ax)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Rx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===VT)return t.BYTE;if(s===GT)return t.SHORT;if(s===Wh)return t.UNSIGNED_SHORT;if(s===Cx)return t.INT;if(s===rr)return t.UNSIGNED_INT;if(s===Ci)return t.FLOAT;if(s===so)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===WT)return t.ALPHA;if(s===Zn)return t.RGBA;if(s===jT)return t.LUMINANCE;if(s===XT)return t.LUMINANCE_ALPHA;if(s===Br)return t.DEPTH_COMPONENT;if(s===oo)return t.DEPTH_STENCIL;if(s===Mf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$T)return t.RED;if(s===Px)return t.RED_INTEGER;if(s===YT)return t.RG;if(s===Lx)return t.RG_INTEGER;if(s===Dx)return t.RGBA_INTEGER;if(s===Fc||s===kc||s===Bc||s===zc)if(l===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fm||s===km||s===Bm||s===zm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Fm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===km)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hm||s===Vm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hm)return l===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gm||s===Wm||s===jm||s===Xm||s===$m||s===Ym||s===qm||s===Km||s===Zm||s===Qm||s===Jm||s===eg||s===tg||s===ng)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$m)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ym)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Km)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jm)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===eg)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tg)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ng)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hc||s===ig||s===rg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Hc)return l===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ig)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===KT||s===sg||s===og||s===ag)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Hc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===sg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===og)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ag)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===kr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class w3 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b3={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(u,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ty extends Zt{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Br,c!==Br&&c!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Br&&(i=rr),i===void 0&&c===oo&&(i=kr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class C3 extends Jr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,v=null;const x=n.getContextAttributes();let m=null,f=null;const _=[],g=[],y=new yn;y.layers.enable(1),y.viewport=new st;const T=new yn;T.layers.enable(2),T.viewport=new st;const w=[y,T],S=new w3;S.layers.enable(1),S.layers.enable(2);let L=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let B=_[O];return B===void 0&&(B=new ud,_[O]=B),B.getTargetRaySpace()},this.getControllerGrip=function(O){let B=_[O];return B===void 0&&(B=new ud,_[O]=B),B.getGripSpace()},this.getHand=function(O){let B=_[O];return B===void 0&&(B=new ud,_[O]=B),B.getHandSpace()};function b(O){const B=g.indexOf(O.inputSource);if(B===-1)return;const ae=_[B];ae!==void 0&&(ae.update(O.inputSource,O.frame,u||o),ae.dispatchEvent({type:O.type,data:O.inputSource}))}function Q(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",te);for(let O=0;O<_.length;O++){const B=g[O];B!==null&&(g[O]=null,_[O].disconnect(B))}L=null,E=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:p}),f=new ki(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let B=null,ae=null,ue=null;x.depth&&(ue=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=x.stencil?oo:Br,ae=x.stencil?kr:rr);const ce={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),f=new ki(d.textureWidth,d.textureHeight,{format:Zn,type:pr,depthTexture:new ty(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const xe=e.properties.get(f);xe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(O){for(let B=0;B<O.removed.length;B++){const ae=O.removed[B],ue=g.indexOf(ae);ue>=0&&(g[ue]=null,_[ue].disconnect(ae))}for(let B=0;B<O.added.length;B++){const ae=O.added[B];let ue=g.indexOf(ae);if(ue===-1){for(let xe=0;xe<_.length;xe++)if(xe>=g.length){g.push(ae),ue=xe;break}else if(g[xe]===null){g[xe]=ae,ue=xe;break}if(ue===-1)break}const ce=_[ue];ce&&ce.connect(ae)}}const z=new N,Y=new N;function $(O,B,ae){z.setFromMatrixPosition(B.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);const ue=z.distanceTo(Y),ce=B.projectionMatrix.elements,xe=ae.projectionMatrix.elements,we=ce[14]/(ce[10]-1),Te=ce[14]/(ce[10]+1),ke=(ce[9]+1)/ce[5],mt=(ce[9]-1)/ce[5],De=(ce[8]-1)/ce[0],F=(xe[8]+1)/xe[0],ot=we*De,Me=we*F,_e=ue/(-De+F),Ce=_e*-De;B.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ce),O.translateZ(_e),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const $e=we+_e,Oe=Te+_e,Ie=ot-Ce,We=Me+(ue-Ce),bt=ke*Te/Oe*$e,Dt=mt*Te/Oe*$e;O.projectionMatrix.makePerspective(Ie,We,bt,Dt,$e,Oe),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function J(O,B){B===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(B.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;S.near=T.near=y.near=O.near,S.far=T.far=y.far=O.far,(L!==S.near||E!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,E=S.far);const B=O.parent,ae=S.cameras;J(S,B);for(let ue=0;ue<ae.length;ue++)J(ae[ue],B);ae.length===2?$(S,y,T):S.projectionMatrix.copy(y.projectionMatrix),q(O,S,B)};function q(O,B,ae){ae===null?O.matrix.copy(B.matrixWorld):(O.matrix.copy(ae.matrixWorld),O.matrix.invert(),O.matrix.multiply(B.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(B.projectionMatrix),O.projectionMatrixInverse.copy(B.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=xa*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let D=null;function X(O,B){if(c=B.getViewerPose(u||o),v=B,c!==null){const ae=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ue=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let ce=0;ce<ae.length;ce++){const xe=ae[ce];let we=null;if(p!==null)we=p.getViewport(xe);else{const ke=h.getViewSubImage(d,xe);we=ke.viewport,ce===0&&(e.setRenderTargetTextures(f,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(f))}let Te=w[ce];Te===void 0&&(Te=new yn,Te.layers.enable(ce),Te.viewport=new st,w[ce]=Te),Te.matrix.fromArray(xe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(xe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(we.x,we.y,we.width,we.height),ce===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Te)}}for(let ae=0;ae<_.length;ae++){const ue=g[ae],ce=_[ae];ue!==null&&ce!==void 0&&ce.update(ue,B,u||o)}D&&D(O,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),v=null}const V=new qx;V.setAnimationLoop(X),this.setAnimationLoop=function(O){D=O},this.dispose=function(){}}}function A3(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,jx(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R3(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function u(_,g){let y=r[_.id];y===void 0&&(v(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const T=g.program;i.updateUBOMapping(_,T);const w=e.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function c(_){const g=h();_.__bindingPointIndex=g;const y=t.createBuffer(),T=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],y=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,S=y.length;w<S;w++){const L=y[w];if(p(L,w,T)===!0){const E=L.__offset,b=Array.isArray(L.value)?L.value:[L.value];let Q=0;for(let te=0;te<b.length;te++){const z=b[te],Y=x(z);typeof z=="number"?(L.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,E+Q,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=z.elements[0],L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=z.elements[0],L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=z.elements[0]):(z.toArray(L.__data,Q),Q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,E,L.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,y){const T=_.value;if(y[g]===void 0){if(typeof T=="number")y[g]=T;else{const w=Array.isArray(T)?T:[T],S=[];for(let L=0;L<w.length;L++)S.push(w[L].clone());y[g]=S}return!0}else if(typeof T=="number"){if(y[g]!==T)return y[g]=T,!0}else{const w=Array.isArray(y[g])?y[g]:[y[g]],S=Array.isArray(T)?T:[T];for(let L=0;L<w.length;L++){const E=w[L];if(E.equals(S[L])===!1)return E.copy(S[L]),!0}}return!1}function v(_){const g=_.uniforms;let y=0;const T=16;let w=0;for(let S=0,L=g.length;S<L;S++){const E=g[S],b={boundary:0,storage:0},Q=Array.isArray(E.value)?E.value:[E.value];for(let te=0,z=Q.length;te<z;te++){const Y=Q[te],$=x(Y);b.boundary+=$.boundary,b.storage+=$.storage}if(E.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,S>0){w=y%T;const te=T-w;w!==0&&te-b.boundary<0&&(y+=T-w,E.__offset=y)}y+=b.storage}return w=y%T,w>0&&(y+=T-w),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class ny{constructor(e={}){const{canvas:n=Tw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=it,this._useLegacyLights=!1,this.toneMapping=hr,this.toneMappingExposure=1;const g=this;let y=!1,T=0,w=0,S=null,L=-1,E=null;const b=new st,Q=new st;let te=null;const z=new Xe(0);let Y=0,$=n.width,J=n.height,q=1,D=null,X=null;const V=new st(0,0,$,J),O=new st(0,0,$,J);let B=!1;const ae=new $h;let ue=!1,ce=!1,xe=null;const we=new yt,Te=new Se,ke=new N,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return S===null?q:1}let F=i;function ot(C,k){for(let K=0;K<C.length;K++){const H=C[K],Z=n.getContext(H,k);if(Z!==null)return Z}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gh}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",re,!1),F===null){const k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),F=ot(k,C),F===null)throw ot(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Me,_e,Ce,$e,Oe,Ie,We,bt,Dt,A,M,G,se,ne,oe,Ee,le,W,R,ee,ge,fe,me,Le;function Ge(){Me=new zA(F),_e=new NA(F,Me,e),Me.init(_e),fe=new T3(F,Me,_e),Ce=new S3(F,Me,_e),$e=new GA(F),Oe=new a3,Ie=new E3(F,Me,Ce,Oe,_e,fe,$e),We=new OA(g),bt=new BA(g),Dt=new Jw(F,_e),me=new DA(F,Me,Dt,_e),A=new HA(F,Dt,$e,me),M=new $A(F,A,Dt,$e),R=new XA(F,_e,Ie),Ee=new UA(Oe),G=new o3(g,We,bt,Me,_e,me,Ee),se=new A3(g,Oe),ne=new u3,oe=new m3(Me,_e),W=new LA(g,We,bt,Ce,M,d,l),le=new y3(g,M,_e),Le=new R3(F,$e,_e,Ce),ee=new IA(F,Me,$e,_e),ge=new VA(F,Me,$e,_e),$e.programs=G.programs,g.capabilities=_e,g.extensions=Me,g.properties=Oe,g.renderLists=ne,g.shadowMap=le,g.state=Ce,g.info=$e}Ge();const I=new C3(g,F);this.xr=I,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize($,J,!1))},this.getSize=function(C){return C.set($,J)},this.setSize=function(C,k,K=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,J=k,n.width=Math.floor(C*q),n.height=Math.floor(k*q),K===!0&&(n.style.width=C+"px",n.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set($*q,J*q).floor()},this.setDrawingBufferSize=function(C,k,K){$=C,J=k,q=K,n.width=Math.floor(C*K),n.height=Math.floor(k*K),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,k,K,H){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,k,K,H),Ce.viewport(b.copy(V).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(O)},this.setScissor=function(C,k,K,H){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,k,K,H),Ce.scissor(Q.copy(O).multiplyScalar(q).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(C){Ce.setScissorTest(B=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(C=!0,k=!0,K=!0){let H=0;if(C){let Z=!1;if(S!==null){const ye=S.texture.format;Z=ye===Dx||ye===Lx||ye===Px}if(Z){const ye=S.texture.type,be=ye===pr||ye===rr||ye===Wh||ye===kr||ye===Ax||ye===Rx,Re=W.getClearColor(),Pe=W.getClearAlpha(),ze=Re.r,Ae=Re.g,Ne=Re.b;be?(p[0]=ze,p[1]=Ae,p[2]=Ne,p[3]=Pe,F.clearBufferuiv(F.COLOR,0,p)):(v[0]=ze,v[1]=Ae,v[2]=Ne,v[3]=Pe,F.clearBufferiv(F.COLOR,0,v))}else H|=F.COLOR_BUFFER_BIT}k&&(H|=F.DEPTH_BUFFER_BIT),K&&(H|=F.STENCIL_BUFFER_BIT),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",re,!1),ne.dispose(),oe.dispose(),Oe.dispose(),We.dispose(),bt.dispose(),M.dispose(),me.dispose(),Le.dispose(),G.dispose(),I.dispose(),I.removeEventListener("sessionstart",et),I.removeEventListener("sessionend",ni),xe&&(xe.dispose(),xe=null),en.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=$e.autoReset,k=le.enabled,K=le.autoUpdate,H=le.needsUpdate,Z=le.type;Ge(),$e.autoReset=C,le.enabled=k,le.autoUpdate=K,le.needsUpdate=H,le.type=Z}function re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function de(C){const k=C.target;k.removeEventListener("dispose",de),Be(k)}function Be(C){Ye(C),Oe.remove(C)}function Ye(C){const k=Oe.get(C).programs;k!==void 0&&(k.forEach(function(K){G.releaseProgram(K)}),C.isShaderMaterial&&G.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,K,H,Z,ye){k===null&&(k=mt);const be=Z.isMesh&&Z.matrixWorld.determinant()<0,Re=uy(C,k,K,H,Z);Ce.setMaterial(H,be);let Pe=K.index,ze=1;if(H.wireframe===!0){if(Pe=A.getWireframeAttribute(K),Pe===void 0)return;ze=2}const Ae=K.drawRange,Ne=K.attributes.position;let ht=Ae.start*ze,gt=(Ae.start+Ae.count)*ze;ye!==null&&(ht=Math.max(ht,ye.start*ze),gt=Math.min(gt,(ye.start+ye.count)*ze)),Pe!==null?(ht=Math.max(ht,0),gt=Math.min(gt,Pe.count)):Ne!=null&&(ht=Math.max(ht,0),gt=Math.min(gt,Ne.count));const bn=gt-ht;if(bn<0||bn===1/0)return;me.setup(Z,H,Re,K,Pe);let pi,St=ee;if(Pe!==null&&(pi=Dt.get(Pe),St=ge,St.setIndex(pi)),Z.isMesh)H.wireframe===!0?(Ce.setLineWidth(H.wireframeLinewidth*De()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(Z.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),Ce.setLineWidth(Ve*De()),Z.isLineSegments?St.setMode(F.LINES):Z.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else Z.isPoints?St.setMode(F.POINTS):Z.isSprite&&St.setMode(F.TRIANGLES);if(Z.isInstancedMesh)St.renderInstances(ht,bn,Z.count);else if(K.isInstancedBufferGeometry){const Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,qu=Math.min(K.instanceCount,Ve);St.renderInstances(ht,bn,qu)}else St.render(ht,bn)},this.compile=function(C,k){function K(H,Z,ye){H.transparent===!0&&H.side===Un&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,Pa(H,Z,ye),H.side=fi,H.needsUpdate=!0,Pa(H,Z,ye),H.side=Un):Pa(H,Z,ye)}m=oe.get(C),m.init(),_.push(m),C.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(g._useLegacyLights),C.traverse(function(H){const Z=H.material;if(Z)if(Array.isArray(Z))for(let ye=0;ye<Z.length;ye++){const be=Z[ye];K(be,C,H)}else K(Z,C,H)}),_.pop(),m=null};let Ze=null;function mn(C){Ze&&Ze(C)}function et(){en.stop()}function ni(){en.start()}const en=new qx;en.setAnimationLoop(mn),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(C){Ze=C,I.setAnimationLoop(C),C===null?en.stop():en.start()},I.addEventListener("sessionstart",et),I.addEventListener("sessionend",ni),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(k),k=I.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,k,S),m=oe.get(C,_.length),m.init(),_.push(m),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ae.setFromProjectionMatrix(we),ce=this.localClippingEnabled,ue=Ee.init(this.clippingPlanes,ce),x=ne.get(C,f.length),x.init(),f.push(x),Qh(C,k,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,X),this.info.render.frame++,ue===!0&&Ee.beginShadows();const K=m.state.shadowsArray;if(le.render(K,C,k),ue===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(x,C),m.setupLights(g._useLegacyLights),k.isArrayCamera){const H=k.cameras;for(let Z=0,ye=H.length;Z<ye;Z++){const be=H[Z];Jh(x,C,be,be.viewport)}}else Jh(x,C,k);S!==null&&(Ie.updateMultisampleRenderTarget(S),Ie.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(g,C,k),me.resetDefaultState(),L=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Qh(C,k,K,H){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ae.intersectsSprite(C)){H&&ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const be=M.update(C),Re=C.material;Re.visible&&x.push(C,be,Re,K,ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ae.intersectsObject(C))){const be=M.update(C),Re=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ke.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ke.copy(be.boundingSphere.center)),ke.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(Re)){const Pe=be.groups;for(let ze=0,Ae=Pe.length;ze<Ae;ze++){const Ne=Pe[ze],ht=Re[Ne.materialIndex];ht&&ht.visible&&x.push(C,be,ht,K,ke.z,Ne)}}else Re.visible&&x.push(C,be,Re,K,ke.z,null)}}const ye=C.children;for(let be=0,Re=ye.length;be<Re;be++)Qh(ye[be],k,K,H)}function Jh(C,k,K,H){const Z=C.opaque,ye=C.transmissive,be=C.transparent;m.setupLightsView(K),ue===!0&&Ee.setGlobalState(g.clippingPlanes,K),ye.length>0&&ly(Z,ye,k,K),H&&Ce.viewport(b.copy(H)),Z.length>0&&Ra(Z,k,K),ye.length>0&&Ra(ye,k,K),be.length>0&&Ra(be,k,K),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ly(C,k,K,H){const Z=_e.isWebGL2;xe===null&&(xe=new ki(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?so:pr,minFilter:_a,samples:Z?4:0})),g.getDrawingBufferSize(Te),Z?xe.setSize(Te.x,Te.y):xe.setSize(vu(Te.x),vu(Te.y));const ye=g.getRenderTarget();g.setRenderTarget(xe),g.getClearColor(z),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),g.clear();const be=g.toneMapping;g.toneMapping=hr,Ra(C,K,H),Ie.updateMultisampleRenderTarget(xe),Ie.updateRenderTargetMipmap(xe);let Re=!1;for(let Pe=0,ze=k.length;Pe<ze;Pe++){const Ae=k[Pe],Ne=Ae.object,ht=Ae.geometry,gt=Ae.material,bn=Ae.group;if(gt.side===Un&&Ne.layers.test(H.layers)){const pi=gt.side;gt.side=pn,gt.needsUpdate=!0,ep(Ne,K,H,ht,gt,bn),gt.side=pi,gt.needsUpdate=!0,Re=!0}}Re===!0&&(Ie.updateMultisampleRenderTarget(xe),Ie.updateRenderTargetMipmap(xe)),g.setRenderTarget(ye),g.setClearColor(z,Y),g.toneMapping=be}function Ra(C,k,K){const H=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,ye=C.length;Z<ye;Z++){const be=C[Z],Re=be.object,Pe=be.geometry,ze=H===null?be.material:H,Ae=be.group;Re.layers.test(K.layers)&&ep(Re,k,K,Pe,ze,Ae)}}function ep(C,k,K,H,Z,ye){C.onBeforeRender(g,k,K,H,Z,ye),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(g,k,K,H,C,ye),Z.transparent===!0&&Z.side===Un&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,g.renderBufferDirect(K,k,H,Z,C,ye),Z.side=fi,Z.needsUpdate=!0,g.renderBufferDirect(K,k,H,Z,C,ye),Z.side=Un):g.renderBufferDirect(K,k,H,Z,C,ye),C.onAfterRender(g,k,K,H,Z,ye)}function Pa(C,k,K){k.isScene!==!0&&(k=mt);const H=Oe.get(C),Z=m.state.lights,ye=m.state.shadowsArray,be=Z.state.version,Re=G.getParameters(C,Z.state,ye,k,K),Pe=G.getProgramCacheKey(Re);let ze=H.programs;H.environment=C.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(C.isMeshStandardMaterial?bt:We).get(C.envMap||H.environment),ze===void 0&&(C.addEventListener("dispose",de),ze=new Map,H.programs=ze);let Ae=ze.get(Pe);if(Ae!==void 0){if(H.currentProgram===Ae&&H.lightsStateVersion===be)return tp(C,Re),Ae}else Re.uniforms=G.getUniforms(C),C.onBuild(K,Re,g),C.onBeforeCompile(Re,g),Ae=G.acquireProgram(Re,Pe),ze.set(Pe,Ae),H.uniforms=Re.uniforms;const Ne=H.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=Ee.uniform),tp(C,Re),H.needsLights=dy(C),H.lightsStateVersion=be,H.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.directionalShadowMap.value=Z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotShadowMap.value=Z.state.spotShadowMap,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMap.value=Z.state.pointShadowMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix);const ht=Ae.getUniforms(),gt=Bl.seqWithValue(ht.seq,Ne);return H.currentProgram=Ae,H.uniformsList=gt,Ae}function tp(C,k){const K=Oe.get(C);K.outputColorSpace=k.outputColorSpace,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function uy(C,k,K,H,Z){k.isScene!==!0&&(k=mt),Ie.resetTextureUnits();const ye=k.fog,be=H.isMeshStandardMaterial?k.environment:null,Re=S===null?g.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:hi,Pe=(H.isMeshStandardMaterial?bt:We).get(H.envMap||be),ze=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ae=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!K.morphAttributes.position,ht=!!K.morphAttributes.normal,gt=!!K.morphAttributes.color;let bn=hr;H.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(bn=g.toneMapping);const pi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=pi!==void 0?pi.length:0,Ve=Oe.get(H),qu=m.state.lights;if(ue===!0&&(ce===!0||C!==E)){const gn=C===E&&H.id===L;Ee.setState(H,C,gn)}let Et=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==qu.state.version||Ve.outputColorSpace!==Re||Z.isInstancedMesh&&Ve.instancing===!1||!Z.isInstancedMesh&&Ve.instancing===!0||Z.isSkinnedMesh&&Ve.skinning===!1||!Z.isSkinnedMesh&&Ve.skinning===!0||Z.isInstancedMesh&&Ve.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ve.instancingColor===!1&&Z.instanceColor!==null||Ve.envMap!==Pe||H.fog===!0&&Ve.fog!==ye||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ee.numPlanes||Ve.numIntersection!==Ee.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Ae||Ve.morphTargets!==Ne||Ve.morphNormals!==ht||Ve.morphColors!==gt||Ve.toneMapping!==bn||_e.isWebGL2===!0&&Ve.morphTargetsCount!==St)&&(Et=!0):(Et=!0,Ve.__version=H.version);let yr=Ve.currentProgram;Et===!0&&(yr=Pa(H,k,Z));let np=!1,mo=!1,Ku=!1;const tn=yr.getUniforms(),Sr=Ve.uniforms;if(Ce.useProgram(yr.program)&&(np=!0,mo=!0,Ku=!0),H.id!==L&&(L=H.id,mo=!0),np||E!==C){tn.setValue(F,"projectionMatrix",C.projectionMatrix),tn.setValue(F,"viewMatrix",C.matrixWorldInverse);const gn=tn.map.cameraPosition;gn!==void 0&&gn.setValue(F,ke.setFromMatrixPosition(C.matrixWorld)),_e.logarithmicDepthBuffer&&tn.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&tn.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,mo=!0,Ku=!0)}if(Z.isSkinnedMesh){tn.setOptional(F,Z,"bindMatrix"),tn.setOptional(F,Z,"bindMatrixInverse");const gn=Z.skeleton;gn&&(_e.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),tn.setValue(F,"boneTexture",gn.boneTexture,Ie),tn.setValue(F,"boneTextureSize",gn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zu=K.morphAttributes;if((Zu.position!==void 0||Zu.normal!==void 0||Zu.color!==void 0&&_e.isWebGL2===!0)&&R.update(Z,K,yr),(mo||Ve.receiveShadow!==Z.receiveShadow)&&(Ve.receiveShadow=Z.receiveShadow,tn.setValue(F,"receiveShadow",Z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sr.envMap.value=Pe,Sr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),mo&&(tn.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&cy(Sr,Ku),ye&&H.fog===!0&&se.refreshFogUniforms(Sr,ye),se.refreshMaterialUniforms(Sr,H,q,J,xe),Bl.upload(F,Ve.uniformsList,Sr,Ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Bl.upload(F,Ve.uniformsList,Sr,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&tn.setValue(F,"center",Z.center),tn.setValue(F,"modelViewMatrix",Z.modelViewMatrix),tn.setValue(F,"normalMatrix",Z.normalMatrix),tn.setValue(F,"modelMatrix",Z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const gn=H.uniformsGroups;for(let Qu=0,fy=gn.length;Qu<fy;Qu++)if(_e.isWebGL2){const ip=gn[Qu];Le.update(ip,yr),Le.bind(ip,yr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yr}function cy(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function dy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,k,K){Oe.get(C.texture).__webglTexture=k,Oe.get(C.depthTexture).__webglTexture=K;const H=Oe.get(C);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=K===void 0,H.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const K=Oe.get(C);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,K=0){S=C,T=k,w=K;let H=!0,Z=null,ye=!1,be=!1;if(C){const Pe=Oe.get(C);Pe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(F.FRAMEBUFFER,null),H=!1):Pe.__webglFramebuffer===void 0?Ie.setupRenderTarget(C):Pe.__hasExternalTextures&&Ie.rebindTextures(C,Oe.get(C.texture).__webglTexture,Oe.get(C.depthTexture).__webglTexture);const ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const Ae=Oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ae[k])?Z=Ae[k][K]:Z=Ae[k],ye=!0):_e.isWebGL2&&C.samples>0&&Ie.useMultisampledRTT(C)===!1?Z=Oe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ae)?Z=Ae[K]:Z=Ae,b.copy(C.viewport),Q.copy(C.scissor),te=C.scissorTest}else b.copy(V).multiplyScalar(q).floor(),Q.copy(O).multiplyScalar(q).floor(),te=B;if(Ce.bindFramebuffer(F.FRAMEBUFFER,Z)&&_e.drawBuffers&&H&&Ce.drawBuffers(C,Z),Ce.viewport(b),Ce.scissor(Q),Ce.setScissorTest(te),ye){const Pe=Oe.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,K)}else if(be){const Pe=Oe.get(C.texture),ze=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.__webglTexture,K||0,ze)}L=-1},this.readRenderTargetPixels=function(C,k,K,H,Z,ye,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){Ce.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Pe=C.texture,ze=Pe.format,Ae=Pe.type;if(ze!==Zn&&fe.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ae===so&&(Me.has("EXT_color_buffer_half_float")||_e.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ae!==pr&&fe.convert(Ae)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Ci&&(_e.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-H&&K>=0&&K<=C.height-Z&&F.readPixels(k,K,H,Z,fe.convert(ze),fe.convert(Ae),ye)}finally{const Pe=S!==null?Oe.get(S).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(C,k,K=0){const H=Math.pow(2,-K),Z=Math.floor(k.image.width*H),ye=Math.floor(k.image.height*H);Ie.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,C.x,C.y,Z,ye),Ce.unbindTexture()},this.copyTextureToTexture=function(C,k,K,H=0){const Z=k.image.width,ye=k.image.height,be=fe.convert(K.format),Re=fe.convert(K.type);Ie.setTexture2D(K,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,C.x,C.y,Z,ye,be,Re,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,be,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,H,C.x,C.y,be,Re,k.image),H===0&&K.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,k,K,H,Z=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=C.max.x-C.min.x+1,be=C.max.y-C.min.y+1,Re=C.max.z-C.min.z+1,Pe=fe.convert(H.format),ze=fe.convert(H.type);let Ae;if(H.isData3DTexture)Ie.setTexture3D(H,0),Ae=F.TEXTURE_3D;else if(H.isDataArrayTexture)Ie.setTexture2DArray(H,0),Ae=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Ne=F.getParameter(F.UNPACK_ROW_LENGTH),ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gt=F.getParameter(F.UNPACK_SKIP_PIXELS),bn=F.getParameter(F.UNPACK_SKIP_ROWS),pi=F.getParameter(F.UNPACK_SKIP_IMAGES),St=K.isCompressedTexture?K.mipmaps[0]:K.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,C.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,C.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?F.texSubImage3D(Ae,Z,k.x,k.y,k.z,ye,be,Re,Pe,ze,St.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ae,Z,k.x,k.y,k.z,ye,be,Re,Pe,St.data)):F.texSubImage3D(Ae,Z,k.x,k.y,k.z,ye,be,Re,Pe,ze,St),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,bn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pi),Z===0&&H.generateMipmaps&&F.generateMipmap(Ae),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ie.setTextureCube(C,0):C.isData3DTexture?Ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ie.setTexture2DArray(C,0):Ie.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){T=0,w=0,S=null,Ce.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?zr:Ix}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zr?it:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class P3 extends ny{}P3.prototype.isWebGL1Renderer=!0;class L3 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class D3{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ef,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new N;class xu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}setX(e,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=li(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=li(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=li(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=li(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ei(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class iy extends ho{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ss;const Lo=new N,Es=new N,Ms=new N,Ts=new Se,Do=new Se,ry=new yt,Sl=new N,Io=new N,El=new N,Xg=new Se,cd=new Se,$g=new Se;class I3 extends Qt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new Vi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new D3(n,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new xu(i,3,0,!1)),Ss.setAttribute("uv",new xu(i,2,3,!1))}this.geometry=Ss,this.material=e!==void 0?e:new iy,this.center=new Se(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),ry.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ms.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ml(Sl.set(-.5,-.5,0),Ms,o,Es,r,s),Ml(Io.set(.5,-.5,0),Ms,o,Es,r,s),Ml(El.set(.5,.5,0),Ms,o,Es,r,s),Xg.set(0,0),cd.set(1,0),$g.set(1,1);let a=e.ray.intersectTriangle(Sl,Io,El,!1,Lo);if(a===null&&(Ml(Io.set(-.5,.5,0),Ms,o,Es,r,s),cd.set(0,1),a=e.ray.intersectTriangle(Sl,El,Io,!1,Lo),a===null))return;const l=e.ray.origin.distanceTo(Lo);l<e.near||l>e.far||n.push({distance:l,point:Lo.clone(),uv:In.getInterpolation(Lo,Sl,Io,El,Xg,cd,$g,new Se),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ml(t,e,n,i,r,s){Ts.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Do.x=s*Ts.x-r*Ts.y,Do.y=r*Ts.x+s*Ts.y):Do.copy(Ts),t.copy(e),t.x+=Do.x,t.y+=Do.y,t.applyMatrix4(ry)}class zl extends Zt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ya extends ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nx,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sy extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const dd=new yt,Yg=new N,qg=new N;class N3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $h,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Yg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yg),qg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(qg),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kg=new yt,No=new N,fd=new N;class U3 extends N3{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),No.setFromMatrixPosition(e.matrixWorld),i.position.copy(No),fd.copy(i.position),fd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(fd),i.updateMatrixWorld(),r.makeTranslation(-No.x,-No.y,-No.z),Kg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kg)}}class O3 extends sy{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new U3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class F3 extends sy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class oy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Zg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Zg(){return(typeof performance>"u"?Date:performance).now()}class Qg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Kt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);function Kh(t,e,n,i,r,s,o,a){const l=(S,L,E,b)=>[new Se(S/o,1-b/a),new Se(E/o,1-b/a),new Se(E/o,1-L/a),new Se(S/o,1-L/a)],u=l(e+s,n,e+i+s,n+s),c=l(e+i+s,n,e+i*2+s,n+s),h=l(e,n+s,e+s,n+s+r),d=l(e+s,n+s,e+i+s,n+s+r),p=l(e+i+s,n+s,e+i+s*2,n+r+s),v=l(e+i+s*2,n+s,e+i*2+s*2,n+r+s),x=t.attributes.uv,m=[p[3],p[2],p[0],p[1]],f=[h[3],h[2],h[0],h[1]],_=[u[3],u[2],u[0],u[1]],g=[c[0],c[1],c[3],c[2]],y=[d[3],d[2],d[0],d[1]],T=[v[3],v[2],v[0],v[1]],w=[];for(const S of[m,f,_,g,y,T])for(const L of S)w.push(L.x,L.y);x.set(new Float32Array(w)),x.needsUpdate=!0}function Rn(t,e,n,i,r,s){Kh(t,e,n,i,r,s,64,64)}function bf(t,e,n,i,r,s){Kh(t,e,n,i,r,s,64,32)}class Cr extends Ht{constructor(e,n){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:n}),e.name="inner",n.name="outer"}}class k3 extends Ht{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new ya({side:fi}),this.layer2Material=new ya({side:Un,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new _t(8,8,8);Rn(e,0,0,8,8,8);const n=new Qe(e,this.layer1Material),i=new _t(9,9,9);Rn(i,32,0,8,8,8);const r=new Qe(i,this.layer2Material);this.head=new Cr(n,r),this.head.name="head",this.head.add(n,r),n.position.y=4,r.position.y=4,this.add(this.head);const s=new _t(8,12,4);Rn(s,16,16,8,12,4);const o=new Qe(s,this.layer1Material),a=new _t(8.5,12.5,4.5);Rn(a,16,32,8,12,4);const l=new Qe(a,this.layer2Material);this.body=new Cr(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const u=new _t,c=new Qe(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{c.scale.x=this.slim?3:4,c.scale.y=12,c.scale.z=4,Rn(u,40,16,this.slim?3:4,12,4)});const h=new _t,d=new Qe(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3.5:4.5,d.scale.y=12.5,d.scale.z=4.5,Rn(h,40,32,this.slim?3:4,12,4)});const p=new Ht;p.add(c,d),this.modelListeners.push(()=>{p.position.x=this.slim?-.5:-1}),p.position.y=-4,this.rightArm=new Cr(c,d),this.rightArm.name="rightArm",this.rightArm.add(p),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const v=new _t,x=new Qe(v,this.layer1MaterialBiased);this.modelListeners.push(()=>{x.scale.x=this.slim?3:4,x.scale.y=12,x.scale.z=4,Rn(v,32,48,this.slim?3:4,12,4)});const m=new _t,f=new Qe(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Rn(m,48,48,this.slim?3:4,12,4)});const _=new Ht;_.add(x,f),this.modelListeners.push(()=>{_.position.x=this.slim?.5:1}),_.position.y=-4,this.leftArm=new Cr(x,f),this.leftArm.name="leftArm",this.leftArm.add(_),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const g=new _t(4,12,4);Rn(g,0,16,4,12,4);const y=new Qe(g,this.layer1MaterialBiased),T=new _t(4.5,12.5,4.5);Rn(T,0,32,4,12,4);const w=new Qe(T,this.layer2MaterialBiased),S=new Ht;S.add(y,w),S.position.y=-6,this.rightLeg=new Cr(y,w),this.rightLeg.name="rightLeg",this.rightLeg.add(S),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const L=new _t(4,12,4);Rn(L,16,48,4,12,4);const E=new Qe(L,this.layer1MaterialBiased),b=new _t(4.5,12.5,4.5);Rn(b,0,48,4,12,4);const Q=new Qe(b,this.layer2MaterialBiased),te=new Ht;te.add(E,Q),te.position.y=-6,this.leftLeg=new Cr(E,Q),this.leftLeg.name="leftLeg",this.leftLeg.add(te),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(n=>n())}getBodyParts(){return this.children.filter(e=>e instanceof Cr)}setInnerLayerVisible(e){this.getBodyParts().forEach(n=>n.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(n=>n.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0)}}class B3 extends Ht{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ya({side:Un,transparent:!0,alphaTest:1e-5});const e=new _t(10,16,1);bf(e,0,0,10,16,1),this.cape=new Qe(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class z3 extends Ht{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ya({side:Un,transparent:!0,alphaTest:1e-5});const e=new _t(12,22,4);bf(e,22,0,10,20,2);const n=new Qe(e,this.material);n.position.x=-5,n.position.y=-10,n.position.z=-1,this.leftWing=new Ht,this.leftWing.add(n),this.add(this.leftWing);const i=new _t(12,22,4);bf(i,22,0,10,20,2);const r=new Qe(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new Ht,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class H3 extends Ht{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ya({side:fi});const e=new _t(8,8,4/3);Kh(e,0,0,6,6,1,14,7),this.rightEar=new Qe(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Qe(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Jg=10.8*Math.PI/180;class V3 extends Ht{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new k3,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new B3,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Jg,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new z3,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new H3,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Jg,this.elytra.resetJoints()}}function Tl(t){return t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}function Cf(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(s.data[l+3]!==255)return!0}return!1}function $u(t){return t/64}function e0(t,e,n){if(n){if(Cf(t,0,0,e,e))return}else if(Cf(t,0,0,e,e/2))return;const i=$u(e),r=(s,o,a,l)=>t.clearRect(s*i,o*i,a*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),n&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function G3(t,e){t.save(),t.scale(-1,1);const n=$u(e),i=(r,s,o,a,l,u)=>t.drawImage(t.canvas,r*n,s*n,o*n,a*n,-l*n,u*n,-o*n,a*n);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),t.restore()}function W3(t,e){let n=!1;if(e.width!==e.height)if(e.width===2*e.height)n=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=t.getContext("2d",{willReadFrequently:!0});if(n){const r=e.width;t.width=r,t.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),G3(i,r),e0(i,t.width,!1)}else t.width=e.width,t.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,t.width,t.height),e0(i,t.width,!0)}function j3(t){if(t.width===2*t.height)return t.width/64;if(t.width*17===t.height*22)return t.width/22;if(t.width*11===t.height*23)return t.width/46;throw new Error(`Bad cape size: ${t.width}x${t.height}`)}function X3(t,e){const n=j3(e);t.width=64*n,t.height=32*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function $3(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function Y3(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=(o+a*i)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function q3(t){const e=$u(t.width),n=t.getContext("2d",{willReadFrequently:!0}),i=(a,l,u,c)=>Cf(n,a*e,l*e,u*e,c*e),r=(a,l,u,c)=>$3(n,a*e,l*e,u*e,c*e),s=(a,l,u,c)=>Y3(n,a*e,l*e,u*e,c*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function K3(t){if(t.width===t.height*2&&t.height%7===0)return t.height/7;throw new Error(`Bad ears size: ${t.width}x${t.height}`)}function Z3(t,e){const n=K3(e);t.width=14*n,t.height=7*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function t0(t,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=$u(e.width),i=14*n,r=7*n;t.width=i,t.height=r;const s=t.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,i,r),s.drawImage(e,24*n,0,i,r,0,0,i,r)}async function wl(t){const e=document.createElement("img");return new Promise((n,i)=>{e.onload=()=>n(e),e.onerror=i,e.crossOrigin="anonymous",typeof t=="string"?e.src=t:(t.crossOrigin!==void 0&&(e.crossOrigin=t.crossOrigin),t.referrerPolicy!==void 0&&(e.referrerPolicy=t.referrerPolicy),e.src=t.src)})}const n0={type:"change"},hd={type:"start"},i0={type:"end"},bl=new Bx,r0=new Qi,Q3=Math.cos(70*Mw.DEG2RAD);class J3 extends Jr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",M),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(n0),i.update(),s=r.NONE},this.update=function(){const R=new N,ee=new Yr().setFromUnitVectors(e.up,new N(0,1,0)),ge=ee.clone().invert(),fe=new N,me=new Yr,Le=new N,Ge=2*Math.PI;return function(pe=null){const j=i.object.position;R.copy(j).sub(i.target),R.applyQuaternion(ee),a.setFromVector3(R),i.autoRotate&&s===r.NONE&&Q(E(pe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let re=i.minAzimuthAngle,de=i.maxAzimuthAngle;isFinite(re)&&isFinite(de)&&(re<-Math.PI?re+=Ge:re>Math.PI&&(re-=Ge),de<-Math.PI?de+=Ge:de>Math.PI&&(de-=Ge),re<=de?a.theta=Math.max(re,Math.min(de,a.theta)):a.theta=a.theta>(re+de)/2?Math.max(re,a.theta):Math.min(de,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=X(a.radius):a.radius=X(a.radius*u),R.setFromSpherical(a),R.applyQuaternion(ge),j.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let Be=!1;if(i.zoomToCursor&&w){let Ye=null;if(i.object.isPerspectiveCamera){const Ze=R.length();Ye=X(Ze*u);const mn=Ze-Ye;i.object.position.addScaledVector(y,mn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ze=new N(T.x,T.y,0);Ze.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Be=!0;const mn=new N(T.x,T.y,0);mn.unproject(i.object),i.object.position.sub(mn).add(Ze),i.object.updateMatrixWorld(),Ye=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ye).add(i.object.position):(bl.origin.copy(i.object.position),bl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(bl.direction))<Q3?e.lookAt(i.target):(r0.setFromNormalAndCoplanarPoint(i.object.up,i.target),bl.intersectPlane(r0,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Be=!0);return u=1,w=!1,Be||fe.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(n0),fe.copy(i.object.position),me.copy(i.object.quaternion),Le.copy(i.target),Be=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ne),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",We),i.domElement.removeEventListener("wheel",A),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",We),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",M),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Qg,l=new Qg;let u=1;const c=new N,h=new Se,d=new Se,p=new Se,v=new Se,x=new Se,m=new Se,f=new Se,_=new Se,g=new Se,y=new N,T=new Se;let w=!1;const S=[],L={};function E(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function Q(R){l.theta-=R}function te(R){l.phi-=R}const z=function(){const R=new N;return function(ge,fe){R.setFromMatrixColumn(fe,0),R.multiplyScalar(-ge),c.add(R)}}(),Y=function(){const R=new N;return function(ge,fe){i.screenSpacePanning===!0?R.setFromMatrixColumn(fe,1):(R.setFromMatrixColumn(fe,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(ge),c.add(R)}}(),$=function(){const R=new N;return function(ge,fe){const me=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;R.copy(Le).sub(i.target);let Ge=R.length();Ge*=Math.tan(i.object.fov/2*Math.PI/180),z(2*ge*Ge/me.clientHeight,i.object.matrix),Y(2*fe*Ge/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(ge*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),Y(fe*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(R){if(!i.zoomToCursor)return;w=!0;const ee=i.domElement.getBoundingClientRect(),ge=R.clientX-ee.left,fe=R.clientY-ee.top,me=ee.width,Le=ee.height;T.x=ge/me*2-1,T.y=-(fe/Le)*2+1,y.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function X(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function V(R){h.set(R.clientX,R.clientY)}function O(R){D(R),f.set(R.clientX,R.clientY)}function B(R){v.set(R.clientX,R.clientY)}function ae(R){d.set(R.clientX,R.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ee=i.domElement;Q(2*Math.PI*p.x/ee.clientHeight),te(2*Math.PI*p.y/ee.clientHeight),h.copy(d),i.update()}function ue(R){_.set(R.clientX,R.clientY),g.subVectors(_,f),g.y>0?J(b()):g.y<0&&q(b()),f.copy(_),i.update()}function ce(R){x.set(R.clientX,R.clientY),m.subVectors(x,v).multiplyScalar(i.panSpeed),$(m.x,m.y),v.copy(x),i.update()}function xe(R){D(R),R.deltaY<0?q(b()):R.deltaY>0&&J(b()),i.update()}function we(R){let ee=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?te(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?te(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),ee=!0;break}ee&&(R.preventDefault(),i.update())}function Te(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),ee=.5*(S[0].pageY+S[1].pageY);h.set(R,ee)}}function ke(){if(S.length===1)v.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),ee=.5*(S[0].pageY+S[1].pageY);v.set(R,ee)}}function mt(){const R=S[0].pageX-S[1].pageX,ee=S[0].pageY-S[1].pageY,ge=Math.sqrt(R*R+ee*ee);f.set(0,ge)}function De(){i.enableZoom&&mt(),i.enablePan&&ke()}function F(){i.enableZoom&&mt(),i.enableRotate&&Te()}function ot(R){if(S.length==1)d.set(R.pageX,R.pageY);else{const ge=W(R),fe=.5*(R.pageX+ge.x),me=.5*(R.pageY+ge.y);d.set(fe,me)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ee=i.domElement;Q(2*Math.PI*p.x/ee.clientHeight),te(2*Math.PI*p.y/ee.clientHeight),h.copy(d)}function Me(R){if(S.length===1)x.set(R.pageX,R.pageY);else{const ee=W(R),ge=.5*(R.pageX+ee.x),fe=.5*(R.pageY+ee.y);x.set(ge,fe)}m.subVectors(x,v).multiplyScalar(i.panSpeed),$(m.x,m.y),v.copy(x)}function _e(R){const ee=W(R),ge=R.pageX-ee.x,fe=R.pageY-ee.y,me=Math.sqrt(ge*ge+fe*fe);_.set(0,me),g.set(0,Math.pow(_.y/f.y,i.zoomSpeed)),J(g.y),f.copy(_)}function Ce(R){i.enableZoom&&_e(R),i.enablePan&&Me(R)}function $e(R){i.enableZoom&&_e(R),i.enableRotate&&ot(R)}function Oe(R){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",We)),oe(R),R.pointerType==="touch"?G(R):bt(R))}function Ie(R){i.enabled!==!1&&(R.pointerType==="touch"?se(R):Dt(R))}function We(R){Ee(R),S.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",We)),i.dispatchEvent(i0),s=r.NONE}function bt(R){let ee;switch(R.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case is.DOLLY:if(i.enableZoom===!1)return;O(R),s=r.DOLLY;break;case is.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;B(R),s=r.PAN}else{if(i.enableRotate===!1)return;V(R),s=r.ROTATE}break;case is.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;V(R),s=r.ROTATE}else{if(i.enablePan===!1)return;B(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(hd)}function Dt(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ae(R);break;case r.DOLLY:if(i.enableZoom===!1)return;ue(R);break;case r.PAN:if(i.enablePan===!1)return;ce(R);break}}function A(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(hd),xe(R),i.dispatchEvent(i0))}function M(R){i.enabled===!1||i.enablePan===!1||we(R)}function G(R){switch(le(R),S.length){case 1:switch(i.touches.ONE){case rs.ROTATE:if(i.enableRotate===!1)return;Te(),s=r.TOUCH_ROTATE;break;case rs.PAN:if(i.enablePan===!1)return;ke(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case rs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(),s=r.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(hd)}function se(R){switch(le(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ot(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Me(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;$e(R),i.update();break;default:s=r.NONE}}function ne(R){i.enabled!==!1&&R.preventDefault()}function oe(R){S.push(R)}function Ee(R){delete L[R.pointerId];for(let ee=0;ee<S.length;ee++)if(S[ee].pointerId==R.pointerId){S.splice(ee,1);return}}function le(R){let ee=L[R.pointerId];ee===void 0&&(ee=new Se,L[R.pointerId]=ee),ee.set(R.pageX,R.pageY)}function W(R){const ee=R.pointerId===S[0].pointerId?S[1]:S[0];return L[ee.pointerId]}i.domElement.addEventListener("contextmenu",ne),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",We),i.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}const eP={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Yu{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tP=new Kx(-1,1,1,-1,0,1),Zh=new Vi;Zh.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3));Zh.setAttribute("uv",new Ii([0,2,0,0,2,0],2));class nP{constructor(e){this._mesh=new Qe(Zh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tP)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ay extends Yu{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Bi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xx.clone(e.uniforms),this.material=new Bi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new nP(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class s0 extends Yu{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class iP extends Yu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class rP{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Se);this._width=i.width,this._height=i.height,n=new ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:so}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ay(eP),this.copyPass.material.blending=Li,this.clock=new oy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}s0!==void 0&&(o instanceof s0?i=!0:o instanceof iP&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sP extends Yu{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const oP={uniforms:{tDiffuse:{value:null},resolution:{value:new Se(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class aP extends I3{constructor(e="",n={}){const i=new iy({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=n.font===void 0?"48px Minecraft":n.font,this.margin=n.margin===void 0?[5,10,5,10]:n.margin,this.textStyle=n.textStyle===void 0?"white":n.textStyle,this.backgroundStyle=n.backgroundStyle===void 0?"rgba(0,0,0,.25)":n.backgroundStyle,this.height=n.height===void 0?4:n.height,(n.repaintAfterLoaded===void 0?!0:n.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let n=e.getContext("2d");n.font=this.font;const i=n.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],n=e.getContext("2d"),n.font=this.font,n.fillStyle=this.backgroundStyle,n.fillRect(0,0,e.width,e.height),n.fillStyle=this.textStyle,n.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new zl(e);r.magFilter=ut,r.minFilter=ut,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class lP{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new F3(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new O3(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new L3,this.camera=new yn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),this.renderer=new ny({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let n;this.renderer.capabilities.isWebGL2&&(n=new ki(0,0,{depthTexture:new ty(0,0,Ci)})),this.composer=new rP(this.renderer,n),this.renderPass=new sP(this.scene,this.camera),this.fxaaPass=new ay(oP),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new V3,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new Ht,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new J3(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new oy,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new zl(this.skinCanvas),this.skinTexture.magFilter=ut,this.skinTexture.minFilter=ut,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new zl(this.capeCanvas),this.capeTexture.magFilter=ut,this.capeTexture.minFilter=ut,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new zl(this.earsCanvas),this.earsTexture.magFilter=ut,this.earsTexture.minFilter=ut,this.playerObject.ears.map=this.earsTexture}loadSkin(e,n={}){if(e===null)this.resetSkin();else if(Tl(e))W3(this.skinCanvas,e),this.recreateSkinTexture(),n.model===void 0||n.model==="auto-detect"?this.playerObject.skin.modelType=q3(this.skinCanvas):this.playerObject.skin.modelType=n.model,n.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(n.ears===!0||n.ears=="load-only")&&(t0(this.earsCanvas,e),this.recreateEarsTexture(),n.ears===!0&&(this.playerObject.ears.visible=!0));else return wl(e).then(i=>this.loadSkin(i,n))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,n={}){if(e===null)this.resetCape();else if(Tl(e))X3(this.capeCanvas,e),this.recreateCapeTexture(),n.makeVisible!==!1&&(this.playerObject.backEquipment=n.backEquipment===void 0?"cape":n.backEquipment);else return wl(e).then(i=>this.loadCape(i,n))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,n={}){if(e===null)this.resetEars();else if(Tl(e))n.textureType==="skin"?t0(this.earsCanvas,e):Z3(this.earsCanvas,e),this.recreateEarsTexture(),n.makeVisible!==!1&&(this.playerObject.ears.visible=!0);else return wl(e).then(i=>this.loadEars(i,n))}resetEars(){this.playerObject.ears.visible=!1,this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,mu)}loadBackground(e,n){if(Tl(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Zt,this.backgroundTexture.image=e,n!==void 0&&(this.backgroundTexture.mapping=n),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return wl(e).then(i=>this.loadBackground(i,n))}draw(){const e=this.clock.getDelta();this._animation!==null&&this._animation.update(this.playerObject,e),this.autoRotate&&(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new Se).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new Se).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Xe||e instanceof Zt?this.scene.background=e:this.scene.background=new Xe(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Qt||(e=new aP(e)),this.playerWrapper.add(e),e.position.y=20),this._nameTag=e}}const uP="/assets/mc-skin-gOt1rK4l.png",cP=()=>{const t=U.useRef(null),e=U.useRef(null);return U.useEffect(()=>(t.current&&(e.current=new lP({canvas:t.current,width:150,height:150,skin:uP,enableControls:!0}),e.current.autoRotate=!0,e.current.autoRotateSpeed=.1),()=>{e.current&&(e.current.dispose(),e.current=null)}),[]),P.jsx("footer",{className:"footer",children:P.jsx(Zr,{children:P.jsxs(ui,{className:"align-items-center justify-content-center",children:[P.jsx(zt,{xs:12,sm:4,className:"mb-3 mb-sm-0",children:P.jsx("canvas",{ref:t,id:"canvas",width:"300",height:"400"})}),P.jsx(zt,{xs:12,sm:4,className:"mb-3 mb-sm-0 text-center",children:P.jsx("img",{src:tx,alt:"Logo"})}),P.jsxs(zt,{xs:12,sm:4,className:"mb-3 mb-sm-0 text-center text-sm-end",children:[P.jsxs("div",{className:"social-icon",children:[P.jsx("span",{className:"social-ln",children:P.jsx("a",{href:"#",children:P.jsx("img",{src:nx,alt:""})})}),P.jsx("span",{className:"social-f",children:P.jsx("a",{href:"#",children:P.jsx("img",{src:ix,alt:""})})}),P.jsx("span",{className:"social-in",children:P.jsx("a",{href:"#",children:P.jsx("img",{src:rx,alt:""})})})]}),P.jsx("p",{className:"mb-3 mb-sm-0",children:"CopyRight 2024. All Rights Reserved"})]})]})})})};function dP(){return P.jsx(P.Fragment,{children:P.jsxs("div",{children:[P.jsx(yM,{}),P.jsx(h2,{}),P.jsx(sT,{}),P.jsx(uT,{}),P.jsx(dT,{}),P.jsx(cP,{})]})})}pd.createRoot(document.getElementById("root")).render(P.jsx(wt.StrictMode,{children:P.jsx(dP,{})}));
