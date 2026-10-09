(()=>{var qE=Object.create;var Kx=Object.defineProperty;var YE=Object.getOwnPropertyDescriptor;var ZE=Object.getOwnPropertyNames;var KE=Object.getPrototypeOf,JE=Object.prototype.hasOwnProperty;var se=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var QE=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ZE(t))!JE.call(n,s)&&s!==e&&Kx(n,s,{get:()=>t[s],enumerable:!(i=YE(t,s))||i.enumerable});return n};var Es=(n,t,e)=>(e=n!=null?qE(KE(n)):{},QE(t||!n||!n.__esModule?Kx(e,"default",{value:n,enumerable:!0}):e,n));var oy=se(kt=>{"use strict";var Xp=Symbol.for("react.transitional.element"),jE=Symbol.for("react.portal"),$E=Symbol.for("react.fragment"),tA=Symbol.for("react.strict_mode"),eA=Symbol.for("react.profiler"),nA=Symbol.for("react.consumer"),iA=Symbol.for("react.context"),sA=Symbol.for("react.forward_ref"),rA=Symbol.for("react.suspense"),aA=Symbol.for("react.memo"),ey=Symbol.for("react.lazy"),Jx=Symbol.iterator;function oA(n){return n===null||typeof n!="object"?null:(n=Jx&&n[Jx]||n["@@iterator"],typeof n=="function"?n:null)}var ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iy=Object.assign,sy={};function eo(n,t,e){this.props=n,this.context=t,this.refs=sy,this.updater=e||ny}eo.prototype.isReactComponent={};eo.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")};eo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ry(){}ry.prototype=eo.prototype;function Wp(n,t,e){this.props=n,this.context=t,this.refs=sy,this.updater=e||ny}var qp=Wp.prototype=new ry;qp.constructor=Wp;iy(qp,eo.prototype);qp.isPureReactComponent=!0;var Qx=Array.isArray,Le={H:null,A:null,T:null,S:null,V:null},ay=Object.prototype.hasOwnProperty;function Yp(n,t,e,i,s,r){return e=r.ref,{$$typeof:Xp,type:n,key:t,ref:e!==void 0?e:null,props:r}}function lA(n,t){return Yp(n.type,t,void 0,void 0,void 0,n.props)}function Zp(n){return typeof n=="object"&&n!==null&&n.$$typeof===Xp}function cA(n){var t={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(e){return t[e]})}var jx=/\/+/g;function kp(n,t){return typeof n=="object"&&n!==null&&n.key!=null?cA(""+n.key):t.toString(36)}function $x(){}function uA(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then($x,$x):(n.status="pending",n.then(function(t){n.status==="pending"&&(n.status="fulfilled",n.value=t)},function(t){n.status==="pending"&&(n.status="rejected",n.reason=t)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function to(n,t,e,i,s){var r=typeof n;(r==="undefined"||r==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Xp:case jE:a=!0;break;case ey:return a=n._init,to(a(n._payload),t,e,i,s)}}if(a)return s=s(n),a=i===""?"."+kp(n,0):i,Qx(s)?(e="",a!=null&&(e=a.replace(jx,"$&/")+"/"),to(s,t,e,"",function(c){return c})):s!=null&&(Zp(s)&&(s=lA(s,e+(s.key==null||n&&n.key===s.key?"":(""+s.key).replace(jx,"$&/")+"/")+a)),t.push(s)),1;a=0;var o=i===""?".":i+":";if(Qx(n))for(var l=0;l<n.length;l++)i=n[l],r=o+kp(i,l),a+=to(i,t,e,r,s);else if(l=oA(n),typeof l=="function")for(n=l.call(n),l=0;!(i=n.next()).done;)i=i.value,r=o+kp(i,l++),a+=to(i,t,e,r,s);else if(r==="object"){if(typeof n.then=="function")return to(uA(n),t,e,i,s);throw t=String(n),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function tf(n,t,e){if(n==null)return n;var i=[],s=0;return to(n,i,"","",function(r){return t.call(e,r,s++)}),i}function fA(n){if(n._status===-1){var t=n._result;t=t(),t.then(function(e){(n._status===0||n._status===-1)&&(n._status=1,n._result=e)},function(e){(n._status===0||n._status===-1)&&(n._status=2,n._result=e)}),n._status===-1&&(n._status=0,n._result=t)}if(n._status===1)return n._result.default;throw n._result}var ty=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function hA(){}kt.Children={map:tf,forEach:function(n,t,e){tf(n,function(){t.apply(this,arguments)},e)},count:function(n){var t=0;return tf(n,function(){t++}),t},toArray:function(n){return tf(n,function(t){return t})||[]},only:function(n){if(!Zp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};kt.Component=eo;kt.Fragment=$E;kt.Profiler=eA;kt.PureComponent=Wp;kt.StrictMode=tA;kt.Suspense=rA;kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Le;kt.__COMPILER_RUNTIME={__proto__:null,c:function(n){return Le.H.useMemoCache(n)}};kt.cache=function(n){return function(){return n.apply(null,arguments)}};kt.cloneElement=function(n,t,e){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var i=iy({},n.props),s=n.key,r=void 0;if(t!=null)for(a in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(s=""+t.key),t)!ay.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=e;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];i.children=o}return Yp(n.type,s,void 0,void 0,r,i)};kt.createContext=function(n){return n={$$typeof:iA,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:nA,_context:n},n};kt.createElement=function(n,t,e){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)ay.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=e;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return Yp(n,r,void 0,void 0,null,s)};kt.createRef=function(){return{current:null}};kt.forwardRef=function(n){return{$$typeof:sA,render:n}};kt.isValidElement=Zp;kt.lazy=function(n){return{$$typeof:ey,_payload:{_status:-1,_result:n},_init:fA}};kt.memo=function(n,t){return{$$typeof:aA,type:n,compare:t===void 0?null:t}};kt.startTransition=function(n){var t=Le.T,e={};Le.T=e;try{var i=n(),s=Le.S;s!==null&&s(e,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(hA,ty)}catch(r){ty(r)}finally{Le.T=t}};kt.unstable_useCacheRefresh=function(){return Le.H.useCacheRefresh()};kt.use=function(n){return Le.H.use(n)};kt.useActionState=function(n,t,e){return Le.H.useActionState(n,t,e)};kt.useCallback=function(n,t){return Le.H.useCallback(n,t)};kt.useContext=function(n){return Le.H.useContext(n)};kt.useDebugValue=function(){};kt.useDeferredValue=function(n,t){return Le.H.useDeferredValue(n,t)};kt.useEffect=function(n,t,e){var i=Le.H;if(typeof e=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(n,t)};kt.useId=function(){return Le.H.useId()};kt.useImperativeHandle=function(n,t,e){return Le.H.useImperativeHandle(n,t,e)};kt.useInsertionEffect=function(n,t){return Le.H.useInsertionEffect(n,t)};kt.useLayoutEffect=function(n,t){return Le.H.useLayoutEffect(n,t)};kt.useMemo=function(n,t){return Le.H.useMemo(n,t)};kt.useOptimistic=function(n,t){return Le.H.useOptimistic(n,t)};kt.useReducer=function(n,t,e){return Le.H.useReducer(n,t,e)};kt.useRef=function(n){return Le.H.useRef(n)};kt.useState=function(n){return Le.H.useState(n)};kt.useSyncExternalStore=function(n,t,e){return Le.H.useSyncExternalStore(n,t,e)};kt.useTransition=function(){return Le.H.useTransition()};kt.version="19.1.0"});var kl=se((oI,ly)=>{"use strict";ly.exports=oy()});var xy=se(Ue=>{"use strict";function jp(n,t){var e=n.length;n.push(t);t:for(;0<e;){var i=e-1>>>1,s=n[i];if(0<ef(s,t))n[i]=t,n[e]=s,e=i;else break t}}function es(n){return n.length===0?null:n[0]}function sf(n){if(n.length===0)return null;var t=n[0],e=n.pop();if(e!==t){n[0]=e;t:for(var i=0,s=n.length,r=s>>>1;i<r;){var a=2*(i+1)-1,o=n[a],l=a+1,c=n[l];if(0>ef(o,e))l<s&&0>ef(c,o)?(n[i]=c,n[l]=e,i=l):(n[i]=o,n[a]=e,i=a);else if(l<s&&0>ef(c,e))n[i]=c,n[l]=e,i=l;else break t}}return t}function ef(n,t){var e=n.sortIndex-t.sortIndex;return e!==0?e:n.id-t.id}Ue.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(cy=performance,Ue.unstable_now=function(){return cy.now()}):(Kp=Date,uy=Kp.now(),Ue.unstable_now=function(){return Kp.now()-uy});var cy,Kp,uy,As=[],ur=[],dA=1,Si=null,Nn=3,$p=!1,Xl=!1,Wl=!1,tm=!1,dy=typeof setTimeout=="function"?setTimeout:null,py=typeof clearTimeout=="function"?clearTimeout:null,fy=typeof setImmediate<"u"?setImmediate:null;function nf(n){for(var t=es(ur);t!==null;){if(t.callback===null)sf(ur);else if(t.startTime<=n)sf(ur),t.sortIndex=t.expirationTime,jp(As,t);else break;t=es(ur)}}function em(n){if(Wl=!1,nf(n),!Xl)if(es(As)!==null)Xl=!0,io||(io=!0,no());else{var t=es(ur);t!==null&&nm(em,t.startTime-n)}}var io=!1,ql=-1,my=5,gy=-1;function _y(){return tm?!0:!(Ue.unstable_now()-gy<my)}function Jp(){if(tm=!1,io){var n=Ue.unstable_now();gy=n;var t=!0;try{t:{Xl=!1,Wl&&(Wl=!1,py(ql),ql=-1),$p=!0;var e=Nn;try{e:{for(nf(n),Si=es(As);Si!==null&&!(Si.expirationTime>n&&_y());){var i=Si.callback;if(typeof i=="function"){Si.callback=null,Nn=Si.priorityLevel;var s=i(Si.expirationTime<=n);if(n=Ue.unstable_now(),typeof s=="function"){Si.callback=s,nf(n),t=!0;break e}Si===es(As)&&sf(As),nf(n)}else sf(As);Si=es(As)}if(Si!==null)t=!0;else{var r=es(ur);r!==null&&nm(em,r.startTime-n),t=!1}}break t}finally{Si=null,Nn=e,$p=!1}t=void 0}}finally{t?no():io=!1}}}var no;typeof fy=="function"?no=function(){fy(Jp)}:typeof MessageChannel<"u"?(Qp=new MessageChannel,hy=Qp.port2,Qp.port1.onmessage=Jp,no=function(){hy.postMessage(null)}):no=function(){dy(Jp,0)};var Qp,hy;function nm(n,t){ql=dy(function(){n(Ue.unstable_now())},t)}Ue.unstable_IdlePriority=5;Ue.unstable_ImmediatePriority=1;Ue.unstable_LowPriority=4;Ue.unstable_NormalPriority=3;Ue.unstable_Profiling=null;Ue.unstable_UserBlockingPriority=2;Ue.unstable_cancelCallback=function(n){n.callback=null};Ue.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):my=0<n?Math.floor(1e3/n):5};Ue.unstable_getCurrentPriorityLevel=function(){return Nn};Ue.unstable_next=function(n){switch(Nn){case 1:case 2:case 3:var t=3;break;default:t=Nn}var e=Nn;Nn=t;try{return n()}finally{Nn=e}};Ue.unstable_requestPaint=function(){tm=!0};Ue.unstable_runWithPriority=function(n,t){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var e=Nn;Nn=n;try{return t()}finally{Nn=e}};Ue.unstable_scheduleCallback=function(n,t,e){var i=Ue.unstable_now();switch(typeof e=="object"&&e!==null?(e=e.delay,e=typeof e=="number"&&0<e?i+e:i):e=i,n){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=e+s,n={id:dA++,callback:t,priorityLevel:n,startTime:e,expirationTime:s,sortIndex:-1},e>i?(n.sortIndex=e,jp(ur,n),es(As)===null&&n===es(ur)&&(Wl?(py(ql),ql=-1):Wl=!0,nm(em,e-i))):(n.sortIndex=s,jp(As,n),Xl||$p||(Xl=!0,io||(io=!0,no()))),n};Ue.unstable_shouldYield=_y;Ue.unstable_wrapCallback=function(n){var t=Nn;return function(){var e=Nn;Nn=t;try{return n.apply(this,arguments)}finally{Nn=e}}}});var vy=se((cI,yy)=>{"use strict";yy.exports=xy()});var Sy=se(Fn=>{"use strict";var pA=kl();function My(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fr(){}var Bn={d:{f:fr,r:function(){throw Error(My(522))},D:fr,C:fr,L:fr,m:fr,X:fr,S:fr,M:fr},p:0,findDOMNode:null},mA=Symbol.for("react.portal");function gA(n,t,e){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mA,key:i==null?null:""+i,children:n,containerInfo:t,implementation:e}}var Yl=pA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function rf(n,t){if(n==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Bn;Fn.createPortal=function(n,t){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(My(299));return gA(n,t,null,e)};Fn.flushSync=function(n){var t=Yl.T,e=Bn.p;try{if(Yl.T=null,Bn.p=2,n)return n()}finally{Yl.T=t,Bn.p=e,Bn.d.f()}};Fn.preconnect=function(n,t){typeof n=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Bn.d.C(n,t))};Fn.prefetchDNS=function(n){typeof n=="string"&&Bn.d.D(n)};Fn.preinit=function(n,t){if(typeof n=="string"&&t&&typeof t.as=="string"){var e=t.as,i=rf(e,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;e==="style"?Bn.d.S(n,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):e==="script"&&Bn.d.X(n,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Fn.preinitModule=function(n,t){if(typeof n=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var e=rf(t.as,t.crossOrigin);Bn.d.M(n,{crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Bn.d.M(n)};Fn.preload=function(n,t){if(typeof n=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var e=t.as,i=rf(e,t.crossOrigin);Bn.d.L(n,e,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Fn.preloadModule=function(n,t){if(typeof n=="string")if(t){var e=rf(t.as,t.crossOrigin);Bn.d.m(n,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Bn.d.m(n)};Fn.requestFormReset=function(n){Bn.d.r(n)};Fn.unstable_batchedUpdates=function(n,t){return n(t)};Fn.useFormState=function(n,t,e){return Yl.H.useFormState(n,t,e)};Fn.useFormStatus=function(){return Yl.H.useHostTransitionStatus()};Fn.version="19.1.0"});var Ey=se((fI,Ty)=>{"use strict";function by(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(by)}catch(n){console.error(n)}}by(),Ty.exports=Sy()});var wb=se(wh=>{"use strict";var dn=vy(),Yv=kl(),_A=Ey();function tt(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Zv(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ic(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function Kv(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function Ay(n){if(Ic(n)!==n)throw Error(tt(188))}function xA(n){var t=n.alternate;if(!t){if(t=Ic(n),t===null)throw Error(tt(188));return t!==n?null:n}for(var e=n,i=t;;){var s=e.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){e=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===e)return Ay(s),n;if(r===i)return Ay(s),t;r=r.sibling}throw Error(tt(188))}if(e.return!==i.return)e=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===e){a=!0,e=s,i=r;break}if(o===i){a=!0,i=s,e=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===e){a=!0,e=r,i=s;break}if(o===i){a=!0,i=r,e=s;break}o=o.sibling}if(!a)throw Error(tt(189))}}if(e.alternate!==i)throw Error(tt(190))}if(e.tag!==3)throw Error(tt(188));return e.stateNode.current===e?n:t}function Jv(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=Jv(n),t!==null)return t;n=n.sibling}return null}var De=Object.assign,yA=Symbol.for("react.element"),af=Symbol.for("react.transitional.element"),nc=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),Im=Symbol.for("react.profiler"),vA=Symbol.for("react.provider"),jv=Symbol.for("react.consumer"),Ds=Symbol.for("react.context"),Cg=Symbol.for("react.forward_ref"),Pm=Symbol.for("react.suspense"),Om=Symbol.for("react.suspense_list"),Ng=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Bm=Symbol.for("react.activity"),MA=Symbol.for("react.memo_cache_sentinel"),wy=Symbol.iterator;function Zl(n){return n===null||typeof n!="object"?null:(n=wy&&n[wy]||n["@@iterator"],typeof n=="function"?n:null)}var SA=Symbol.for("react.client.reference");function Fm(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===SA?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case uo:return"Fragment";case Im:return"Profiler";case Qv:return"StrictMode";case Pm:return"Suspense";case Om:return"SuspenseList";case Bm:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case nc:return"Portal";case Ds:return(n.displayName||"Context")+".Provider";case jv:return(n._context.displayName||"Context")+".Consumer";case Cg:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ng:return t=n.displayName||null,t!==null?t:Fm(n.type)||"Memo";case pr:t=n._payload,n=n._init;try{return Fm(n(t))}catch{}}return null}var ic=Array.isArray,Ot=Yv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=_A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,da={pending:!1,data:null,method:null,action:null},zm=[],fo=-1;function ls(n){return{current:n}}function Sn(n){0>fo||(n.current=zm[fo],zm[fo]=null,fo--)}function Pe(n,t){fo++,zm[fo]=n.current,n.current=t}var rs=ls(null),vc=ls(null),Tr=ls(null),Of=ls(null);function Bf(n,t){switch(Pe(Tr,t),Pe(vc,n),Pe(rs,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?Uv(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=Uv(t),n=mb(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Sn(rs),Pe(rs,n)}function Do(){Sn(rs),Sn(vc),Sn(Tr)}function Hm(n){n.memoizedState!==null&&Pe(Of,n);var t=rs.current,e=mb(t,n.type);t!==e&&(Pe(vc,n),Pe(rs,e))}function Ff(n){vc.current===n&&(Sn(rs),Sn(vc)),Of.current===n&&(Sn(Of),Nc._currentValue=da)}var Vm=Object.prototype.hasOwnProperty,Dg=dn.unstable_scheduleCallback,im=dn.unstable_cancelCallback,bA=dn.unstable_shouldYield,TA=dn.unstable_requestPaint,as=dn.unstable_now,EA=dn.unstable_getCurrentPriorityLevel,$v=dn.unstable_ImmediatePriority,tM=dn.unstable_UserBlockingPriority,zf=dn.unstable_NormalPriority,AA=dn.unstable_LowPriority,eM=dn.unstable_IdlePriority,wA=dn.log,RA=dn.unstable_setDisableYieldValue,Pc=null,oi=null;function vr(n){if(typeof wA=="function"&&RA(n),oi&&typeof oi.setStrictMode=="function")try{oi.setStrictMode(Pc,n)}catch{}}var li=Math.clz32?Math.clz32:DA,CA=Math.log,NA=Math.LN2;function DA(n){return n>>>=0,n===0?32:31-(CA(n)/NA|0)|0}var of=256,lf=4194304;function ua(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function hh(n,t,e){var i=n.pendingLanes;if(i===0)return 0;var s=0,r=n.suspendedLanes,a=n.pingedLanes;n=n.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?s=ua(i):(a&=o,a!==0?s=ua(a):e||(e=o&~n,e!==0&&(s=ua(e))))):(o=i&~r,o!==0?s=ua(o):a!==0?s=ua(a):e||(e=i&~n,e!==0&&(s=ua(e)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,e=t&-t,r>=e||r===32&&(e&4194048)!==0)?t:s}function Oc(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function LA(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nM(){var n=of;return of<<=1,(of&4194048)===0&&(of=256),n}function iM(){var n=lf;return lf<<=1,(lf&62914560)===0&&(lf=4194304),n}function sm(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function Bc(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function UA(n,t,e,i,s,r){var a=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var o=n.entanglements,l=n.expirationTimes,c=n.hiddenUpdates;for(e=a&~e;0<e;){var u=31-li(e),h=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var d=f[u];d!==null&&(d.lane&=-536870913)}e&=~h}i!==0&&sM(n,i,0),r!==0&&s===0&&n.tag!==0&&(n.suspendedLanes|=r&~(a&~t))}function sM(n,t,e){n.pendingLanes|=t,n.suspendedLanes&=~t;var i=31-li(t);n.entangledLanes|=t,n.entanglements[i]=n.entanglements[i]|1073741824|e&4194090}function rM(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var i=31-li(e),s=1<<i;s&t|n[i]&t&&(n[i]|=t),e&=~s}}function Lg(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ug(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function aM(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:Eb(n.type))}function IA(n,t){var e=le.p;try{return le.p=n,t()}finally{le.p=e}}var Pr=Math.random().toString(36).slice(2),Dn="__reactFiber$"+Pr,Zn="__reactProps$"+Pr,Go="__reactContainer$"+Pr,Gm="__reactEvents$"+Pr,PA="__reactListeners$"+Pr,OA="__reactHandles$"+Pr,Ry="__reactResources$"+Pr,Fc="__reactMarker$"+Pr;function Ig(n){delete n[Dn],delete n[Zn],delete n[Gm],delete n[PA],delete n[OA]}function ho(n){var t=n[Dn];if(t)return t;for(var e=n.parentNode;e;){if(t=e[Go]||e[Dn]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=Ov(n);n!==null;){if(e=n[Dn])return e;n=Ov(n)}return t}n=e,e=n.parentNode}return null}function ko(n){if(n=n[Dn]||n[Go]){var t=n.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return n}return null}function sc(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(tt(33))}function bo(n){var t=n[Ry];return t||(t=n[Ry]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vn(n){n[Fc]=!0}var oM=new Set,lM={};function Ta(n,t){Lo(n,t),Lo(n+"Capture",t)}function Lo(n,t){for(lM[n]=t,n=0;n<t.length;n++)oM.add(t[n])}var BA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cy={},Ny={};function FA(n){return Vm.call(Ny,n)?!0:Vm.call(Cy,n)?!1:BA.test(n)?Ny[n]=!0:(Cy[n]=!0,!1)}function bf(n,t,e){if(FA(t))if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+e)}}function cf(n,t,e){if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+e)}}function ws(n,t,e,i){if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(t,e,""+i)}}var rm,Dy;function oo(n){if(rm===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);rm=t&&t[1]||"",Dy=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rm+n+Dy}var am=!1;function om(n,t){if(!n||am)return"";am=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(d){var f=d}Reflect.construct(n,[],h)}else{try{h.call()}catch(d){f=d}n.call(h.prototype)}}else{try{throw Error()}catch(d){f=d}(h=n())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(d){if(d&&f&&typeof d.stack=="string")return[d.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=i&&0<=s);break}}}finally{am=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?oo(e):""}function zA(n){switch(n.tag){case 26:case 27:case 5:return oo(n.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 15:return om(n.type,!1);case 11:return om(n.type.render,!1);case 1:return om(n.type,!0);case 31:return oo("Activity");default:return""}}function Ly(n){try{var t="";do t+=zA(n),n=n.return;while(n);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function Ti(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function cM(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function HA(n){var t=cM(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),i=""+n[t];if(!n.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var s=e.get,r=e.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,r.call(this,a)}}),Object.defineProperty(n,t,{enumerable:e.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Hf(n){n._valueTracker||(n._valueTracker=HA(n))}function uM(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),i="";return n&&(i=cM(n)?n.checked?"true":"false":n.value),n=i,n!==e?(t.setValue(n),!0):!1}function Vf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var VA=/[\n"\\]/g;function wi(n){return n.replace(VA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function km(n,t,e,i,s,r,a,o){n.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?n.type=a:n.removeAttribute("type"),t!=null?a==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+Ti(t)):n.value!==""+Ti(t)&&(n.value=""+Ti(t)):a!=="submit"&&a!=="reset"||n.removeAttribute("value"),t!=null?Xm(n,a,Ti(t)):e!=null?Xm(n,a,Ti(e)):i!=null&&n.removeAttribute("value"),s==null&&r!=null&&(n.defaultChecked=!!r),s!=null&&(n.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+Ti(o):n.removeAttribute("name")}function fM(n,t,e,i,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),t!=null||e!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;e=e!=null?""+Ti(e):"",t=t!=null?""+Ti(t):e,o||t===n.value||(n.value=t),n.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=o?n.checked:!!i,n.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(n.name=a)}function Xm(n,t,e){t==="number"&&Vf(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function To(n,t,e,i){if(n=n.options,t){t={};for(var s=0;s<e.length;s++)t["$"+e[s]]=!0;for(e=0;e<n.length;e++)s=t.hasOwnProperty("$"+n[e].value),n[e].selected!==s&&(n[e].selected=s),s&&i&&(n[e].defaultSelected=!0)}else{for(e=""+Ti(e),t=null,s=0;s<n.length;s++){if(n[s].value===e){n[s].selected=!0,i&&(n[s].defaultSelected=!0);return}t!==null||n[s].disabled||(t=n[s])}t!==null&&(t.selected=!0)}}function hM(n,t,e){if(t!=null&&(t=""+Ti(t),t!==n.value&&(n.value=t),e==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=e!=null?""+Ti(e):""}function dM(n,t,e,i){if(t==null){if(i!=null){if(e!=null)throw Error(tt(92));if(ic(i)){if(1<i.length)throw Error(tt(93));i=i[0]}e=i}e==null&&(e=""),t=e}e=Ti(t),n.defaultValue=e,i=n.textContent,i===e&&i!==""&&i!==null&&(n.value=i)}function Uo(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var GA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uy(n,t,e){var i=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":i?n.setProperty(t,e):typeof e!="number"||e===0||GA.has(t)?t==="float"?n.cssFloat=e:n[t]=(""+e).trim():n[t]=e+"px"}function pM(n,t,e){if(t!=null&&typeof t!="object")throw Error(tt(62));if(n=n.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&e[s]!==i&&Uy(n,s,i)}else for(var r in t)t.hasOwnProperty(r)&&Uy(n,r,t[r])}function Pg(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tf(n){return XA.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Wm=null;function Og(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var po=null,Eo=null;function Iy(n){var t=ko(n);if(t&&(n=t.stateNode)){var e=n[Zn]||null;t:switch(n=t.stateNode,t.type){case"input":if(km(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+wi(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var i=e[t];if(i!==n&&i.form===n.form){var s=i[Zn]||null;if(!s)throw Error(tt(90));km(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<e.length;t++)i=e[t],i.form===n.form&&uM(i)}break t;case"textarea":hM(n,e.value,e.defaultValue);break t;case"select":t=e.value,t!=null&&To(n,!!e.multiple,t,!1)}}}var lm=!1;function mM(n,t,e){if(lm)return n(t,e);lm=!0;try{var i=n(t);return i}finally{if(lm=!1,(po!==null||Eo!==null)&&(Sh(),po&&(t=po,n=Eo,Eo=po=null,Iy(t),n)))for(t=0;t<n.length;t++)Iy(n[t])}}function Mc(n,t){var e=n.stateNode;if(e===null)return null;var i=e[Zn]||null;if(i===null)return null;e=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break t;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(tt(231,t,typeof e));return e}var Fs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qm=!1;if(Fs)try{so={},Object.defineProperty(so,"passive",{get:function(){qm=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{qm=!1}var so,Mr=null,Bg=null,Ef=null;function gM(){if(Ef)return Ef;var n,t=Bg,e=t.length,i,s="value"in Mr?Mr.value:Mr.textContent,r=s.length;for(n=0;n<e&&t[n]===s[n];n++);var a=e-n;for(i=1;i<=a&&t[e-i]===s[r-i];i++);return Ef=s.slice(n,1<i?1-i:void 0)}function Af(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function uf(){return!0}function Py(){return!1}function Kn(n){function t(e,i,s,r,a){this._reactName=e,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(e=n[o],this[o]=e?e(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?uf:Py,this.isPropagationStopped=Py,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=uf)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=uf)},persist:function(){},isPersistent:uf}),t}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Kn(Ea),zc=De({},Ea,{view:0,detail:0}),WA=Kn(zc),cm,um,Kl,ph=De({},zc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kl&&(Kl&&n.type==="mousemove"?(cm=n.screenX-Kl.screenX,um=n.screenY-Kl.screenY):um=cm=0,Kl=n),cm)},movementY:function(n){return"movementY"in n?n.movementY:um}}),Oy=Kn(ph),qA=De({},ph,{dataTransfer:0}),YA=Kn(qA),ZA=De({},zc,{relatedTarget:0}),fm=Kn(ZA),KA=De({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),JA=Kn(KA),QA=De({},Ea,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jA=Kn(QA),$A=De({},Ea,{data:0}),By=Kn($A),tw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iw(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=nw[n])?!!t[n]:!1}function Fg(){return iw}var sw=De({},zc,{key:function(n){if(n.key){var t=tw[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Af(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ew[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fg,charCode:function(n){return n.type==="keypress"?Af(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Af(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),rw=Kn(sw),aw=De({},ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fy=Kn(aw),ow=De({},zc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fg}),lw=Kn(ow),cw=De({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),uw=Kn(cw),fw=De({},ph,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),hw=Kn(fw),dw=De({},Ea,{newState:0,oldState:0}),pw=Kn(dw),mw=[9,13,27,32],zg=Fs&&"CompositionEvent"in window,ac=null;Fs&&"documentMode"in document&&(ac=document.documentMode);var gw=Fs&&"TextEvent"in window&&!ac,_M=Fs&&(!zg||ac&&8<ac&&11>=ac),zy=" ",Hy=!1;function xM(n,t){switch(n){case"keyup":return mw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yM(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var mo=!1;function _w(n,t){switch(n){case"compositionend":return yM(t);case"keypress":return t.which!==32?null:(Hy=!0,zy);case"textInput":return n=t.data,n===zy&&Hy?null:n;default:return null}}function xw(n,t){if(mo)return n==="compositionend"||!zg&&xM(n,t)?(n=gM(),Ef=Bg=Mr=null,mo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _M&&t.locale!=="ko"?null:t.data;default:return null}}var yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vy(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!yw[n.type]:t==="textarea"}function vM(n,t,e,i){po?Eo?Eo.push(i):Eo=[i]:po=i,t=rh(t,"onChange"),0<t.length&&(e=new dh("onChange","change",null,e,i),n.push({event:e,listeners:t}))}var oc=null,Sc=null;function vw(n){hb(n,0)}function mh(n){var t=sc(n);if(uM(t))return n}function Gy(n,t){if(n==="change")return t}var MM=!1;Fs&&(Fs?(hf="oninput"in document,hf||(hm=document.createElement("div"),hm.setAttribute("oninput","return;"),hf=typeof hm.oninput=="function"),ff=hf):ff=!1,MM=ff&&(!document.documentMode||9<document.documentMode));var ff,hf,hm;function ky(){oc&&(oc.detachEvent("onpropertychange",SM),Sc=oc=null)}function SM(n){if(n.propertyName==="value"&&mh(Sc)){var t=[];vM(t,Sc,n,Og(n)),mM(vw,t)}}function Mw(n,t,e){n==="focusin"?(ky(),oc=t,Sc=e,oc.attachEvent("onpropertychange",SM)):n==="focusout"&&ky()}function Sw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mh(Sc)}function bw(n,t){if(n==="click")return mh(t)}function Tw(n,t){if(n==="input"||n==="change")return mh(t)}function Ew(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var fi=typeof Object.is=="function"?Object.is:Ew;function bc(n,t){if(fi(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),i=Object.keys(t);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var s=e[i];if(!Vm.call(t,s)||!fi(n[s],t[s]))return!1}return!0}function Xy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wy(n,t){var e=Xy(n);n=0;for(var i;e;){if(e.nodeType===3){if(i=n+e.textContent.length,n<=t&&i>=t)return{node:e,offset:t-n};n=i}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Xy(e)}}function bM(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?bM(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function TM(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=Vf(n.document);t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=Vf(n.document)}return t}function Hg(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var Aw=Fs&&"documentMode"in document&&11>=document.documentMode,go=null,Ym=null,lc=null,Zm=!1;function qy(n,t,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Zm||go==null||go!==Vf(i)||(i=go,"selectionStart"in i&&Hg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),lc&&bc(lc,i)||(lc=i,i=rh(Ym,"onSelect"),0<i.length&&(t=new dh("onSelect","select",null,t,e),n.push({event:t,listeners:i}),t.target=go)))}function ca(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var _o={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},dm={},EM={};Fs&&(EM=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function Aa(n){if(dm[n])return dm[n];if(!_o[n])return n;var t=_o[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in EM)return dm[n]=t[e];return n}var AM=Aa("animationend"),wM=Aa("animationiteration"),RM=Aa("animationstart"),ww=Aa("transitionrun"),Rw=Aa("transitionstart"),Cw=Aa("transitioncancel"),CM=Aa("transitionend"),NM=new Map,Km="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Km.push("scrollEnd");function Gi(n,t){NM.set(n,t),Ta(t,[n])}var Yy=new WeakMap;function Ri(n,t){if(typeof n=="object"&&n!==null){var e=Yy.get(n);return e!==void 0?e:(t={value:n,source:t,stack:Ly(t)},Yy.set(n,t),t)}return{value:n,source:t,stack:Ly(t)}}var bi=[],xo=0,Vg=0;function gh(){for(var n=xo,t=Vg=xo=0;t<n;){var e=bi[t];bi[t++]=null;var i=bi[t];bi[t++]=null;var s=bi[t];bi[t++]=null;var r=bi[t];if(bi[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&DM(e,s,r)}}function _h(n,t,e,i){bi[xo++]=n,bi[xo++]=t,bi[xo++]=e,bi[xo++]=i,Vg|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function Gg(n,t,e,i){return _h(n,t,e,i),Gf(n)}function Xo(n,t){return _h(n,null,null,t),Gf(n)}function DM(n,t,e){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e);for(var s=!1,r=n.return;r!==null;)r.childLanes|=e,i=r.alternate,i!==null&&(i.childLanes|=e),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(s=!0)),n=r,r=r.return;return n.tag===3?(r=n.stateNode,s&&t!==null&&(s=31-li(e),n=r.hiddenUpdates,i=n[s],i===null?n[s]=[t]:i.push(t),t.lane=e|536870912),r):null}function Gf(n){if(50<xc)throw xc=0,gg=null,Error(tt(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var yo={};function Nw(n,t,e,i){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,t,e,i){return new Nw(n,t,e,i)}function kg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Os(n,t){var e=n.alternate;return e===null?(e=ai(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function LM(n,t){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function wf(n,t,e,i,s,r){var a=0;if(i=n,typeof n=="function")kg(n)&&(a=1);else if(typeof n=="string")a=NR(n,e,rs.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case Bm:return n=ai(31,e,t,s),n.elementType=Bm,n.lanes=r,n;case uo:return pa(e.children,s,r,t);case Qv:a=8,s|=24;break;case Im:return n=ai(12,e,t,s|2),n.elementType=Im,n.lanes=r,n;case Pm:return n=ai(13,e,t,s),n.elementType=Pm,n.lanes=r,n;case Om:return n=ai(19,e,t,s),n.elementType=Om,n.lanes=r,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case vA:case Ds:a=10;break t;case jv:a=9;break t;case Cg:a=11;break t;case Ng:a=14;break t;case pr:a=16,i=null;break t}a=29,e=Error(tt(130,n===null?"null":typeof n,"")),i=null}return t=ai(a,e,t,s),t.elementType=n,t.type=i,t.lanes=r,t}function pa(n,t,e,i){return n=ai(7,n,i,t),n.lanes=e,n}function pm(n,t,e){return n=ai(6,n,null,t),n.lanes=e,n}function mm(n,t,e){return t=ai(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var vo=[],Mo=0,kf=null,Xf=0,Ei=[],Ai=0,ma=null,Ls=1,Us="";function fa(n,t){vo[Mo++]=Xf,vo[Mo++]=kf,kf=n,Xf=t}function UM(n,t,e){Ei[Ai++]=Ls,Ei[Ai++]=Us,Ei[Ai++]=ma,ma=n;var i=Ls;n=Us;var s=32-li(i)-1;i&=~(1<<s),e+=1;var r=32-li(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Ls=1<<32-li(t)+s|e<<s|i,Us=r+n}else Ls=1<<r|e<<s|i,Us=n}function Xg(n){n.return!==null&&(fa(n,1),UM(n,1,0))}function Wg(n){for(;n===kf;)kf=vo[--Mo],vo[Mo]=null,Xf=vo[--Mo],vo[Mo]=null;for(;n===ma;)ma=Ei[--Ai],Ei[Ai]=null,Us=Ei[--Ai],Ei[Ai]=null,Ls=Ei[--Ai],Ei[Ai]=null}var zn=null,Xe=null,oe=!1,ga=null,is=!1,Jm=Error(tt(519));function va(n){var t=Error(tt(418,""));throw Tc(Ri(t,n)),Jm}function Zy(n){var t=n.stateNode,e=n.type,i=n.memoizedProps;switch(t[Dn]=n,t[Zn]=i,e){case"dialog":Qt("cancel",t),Qt("close",t);break;case"iframe":case"object":case"embed":Qt("load",t);break;case"video":case"audio":for(e=0;e<wc.length;e++)Qt(wc[e],t);break;case"source":Qt("error",t);break;case"img":case"image":case"link":Qt("error",t),Qt("load",t);break;case"details":Qt("toggle",t);break;case"input":Qt("invalid",t),fM(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Hf(t);break;case"select":Qt("invalid",t);break;case"textarea":Qt("invalid",t),dM(t,i.value,i.defaultValue,i.children),Hf(t)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||i.suppressHydrationWarning===!0||pb(t.textContent,e)?(i.popover!=null&&(Qt("beforetoggle",t),Qt("toggle",t)),i.onScroll!=null&&Qt("scroll",t),i.onScrollEnd!=null&&Qt("scrollend",t),i.onClick!=null&&(t.onclick=Eh),t=!0):t=!1,t||va(n)}function Ky(n){for(zn=n.return;zn;)switch(zn.tag){case 5:case 13:is=!1;return;case 27:case 3:is=!0;return;default:zn=zn.return}}function Jl(n){if(n!==zn)return!1;if(!oe)return Ky(n),oe=!0,!1;var t=n.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Sg(n.type,n.memoizedProps)),e=!e),e&&Xe&&va(n),Ky(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(tt(317));t:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8)if(e=n.data,e==="/$"){if(t===0){Xe=Vi(n.nextSibling);break t}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++;n=n.nextSibling}Xe=null}}else t===27?(t=Xe,Or(n.type)?(n=Eg,Eg=null,Xe=n):Xe=t):Xe=zn?Vi(n.stateNode.nextSibling):null;return!0}function Hc(){Xe=zn=null,oe=!1}function Jy(){var n=ga;return n!==null&&(Yn===null?Yn=n:Yn.push.apply(Yn,n),ga=null),n}function Tc(n){ga===null?ga=[n]:ga.push(n)}var Qm=ls(null),wa=null,Is=null;function gr(n,t,e){Pe(Qm,t._currentValue),t._currentValue=e}function Bs(n){n._currentValue=Qm.current,Sn(Qm)}function jm(n,t,e){for(;n!==null;){var i=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),n===e)break;n=n.return}}function $m(n,t,e,i){var s=n.child;for(s!==null&&(s.return=n);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=e,o=r.alternate,o!==null&&(o.lanes|=e),jm(r.return,e,n),i||(a=null);break t}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(tt(341));a.lanes|=e,r=a.alternate,r!==null&&(r.lanes|=e),jm(a,e,n),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===n){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function Vc(n,t,e,i){n=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(tt(387));if(a=a.memoizedProps,a!==null){var o=s.type;fi(s.pendingProps.value,a.value)||(n!==null?n.push(o):n=[o])}}else if(s===Of.current){if(a=s.alternate,a===null)throw Error(tt(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(n!==null?n.push(Nc):n=[Nc])}s=s.return}n!==null&&$m(t,n,e,i),t.flags|=262144}function Wf(n){for(n=n.firstContext;n!==null;){if(!fi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ma(n){wa=n,Is=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ln(n){return IM(wa,n)}function df(n,t){return wa===null&&Ma(n),IM(n,t)}function IM(n,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Is===null){if(n===null)throw Error(tt(308));Is=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else Is=Is.next=t;return e}var Dw=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(e,i){n.push(i)}};this.abort=function(){t.aborted=!0,n.forEach(function(e){return e()})}},Lw=dn.unstable_scheduleCallback,Uw=dn.unstable_NormalPriority,fn={$$typeof:Ds,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qg(){return{controller:new Dw,data:new Map,refCount:0}}function Gc(n){n.refCount--,n.refCount===0&&Lw(Uw,function(){n.controller.abort()})}var cc=null,tg=0,Io=0,Ao=null;function Iw(n,t){if(cc===null){var e=cc=[];tg=0,Io=m0(),Ao={status:"pending",value:void 0,then:function(i){e.push(i)}}}return tg++,t.then(Qy,Qy),t}function Qy(){if(--tg===0&&cc!==null){Ao!==null&&(Ao.status="fulfilled");var n=cc;cc=null,Io=0,Ao=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function Pw(n,t){var e=[],i={status:"pending",value:null,reason:null,then:function(s){e.push(s)}};return n.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<e.length;s++)(0,e[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<e.length;s++)(0,e[s])(void 0)}),i}var jy=Ot.S;Ot.S=function(n,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Iw(n,t),jy!==null&&jy(n,t)};var _a=ls(null);function Yg(){var n=_a.current;return n!==null?n:Re.pooledCache}function Rf(n,t){t===null?Pe(_a,_a.current):Pe(_a,t.pool)}function PM(){var n=Yg();return n===null?null:{parent:fn._currentValue,pool:n}}var kc=Error(tt(460)),OM=Error(tt(474)),xh=Error(tt(542)),eg={then:function(){}};function $y(n){return n=n.status,n==="fulfilled"||n==="rejected"}function pf(){}function BM(n,t,e){switch(e=n[e],e===void 0?n.push(t):e!==t&&(t.then(pf,pf),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,ev(n),n;default:if(typeof t.status=="string")t.then(pf,pf);else{if(n=Re,n!==null&&100<n.shellSuspendCounter)throw Error(tt(482));n=t,n.status="pending",n.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,ev(n),n}throw uc=t,kc}}var uc=null;function tv(){if(uc===null)throw Error(tt(459));var n=uc;return uc=null,n}function ev(n){if(n===kc||n===xh)throw Error(tt(483))}var mr=!1;function Zg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ng(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Er(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ar(n,t,e){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Gf(n),DM(n,null,e),t}return _h(n,i,t,e),Gf(n)}function fc(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,rM(n,e)}}function gm(n,t){var e=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var s=null,r=null;if(e=e.firstBaseUpdate,e!==null){do{var a={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,e=e.next}while(e!==null);r===null?s=r=t:r=r.next=t}else s=r=t;e={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}var ig=!1;function hc(){if(ig){var n=Ao;if(n!==null)throw n}}function dc(n,t,e,i){ig=!1;var s=n.updateQueue;mr=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var h=s.baseState;a=0,u=c=l=null,o=r;do{var f=o.lane&-536870913,d=f!==o.lane;if(d?(ne&f)===f:(i&f)===f){f!==0&&f===Io&&(ig=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=n,S=o;f=t;var m=e;switch(S.tag){case 1:if(g=S.payload,typeof g=="function"){h=g.call(m,h,f);break t}h=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,f=typeof g=="function"?g.call(m,h,f):g,f==null)break t;h=De({},h,f);break t;case 2:mr=!0}}f=o.callback,f!==null&&(n.flags|=64,d&&(n.flags|=8192),d=s.callbacks,d===null?s.callbacks=[f]:d.push(f))}else d={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=d,l=h):u=u.next=d,a|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);u===null&&(l=h),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,r===null&&(s.shared.lanes=0),Ir|=a,n.lanes=a,n.memoizedState=h}}function FM(n,t){if(typeof n!="function")throw Error(tt(191,n));n.call(t)}function zM(n,t){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)FM(e[n],t)}var Po=ls(null),qf=ls(0);function nv(n,t){n=Vs,Pe(qf,n),Pe(Po,t),Vs=n|t.baseLanes}function sg(){Pe(qf,Vs),Pe(Po,Po.current)}function Kg(){Vs=qf.current,Sn(Po),Sn(qf)}var Lr=0,Yt=null,ye=null,rn=null,Yf=!1,wo=!1,Sa=!1,Zf=0,Ec=0,Ro=null,Ow=0;function Ke(){throw Error(tt(321))}function Jg(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!fi(n[e],t[e]))return!1;return!0}function Qg(n,t,e,i,s,r){return Lr=r,Yt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ot.H=n===null||n.memoizedState===null?gS:_S,Sa=!1,r=e(i,s),Sa=!1,wo&&(r=VM(t,e,i,s)),HM(n),r}function HM(n){Ot.H=Kf;var t=ye!==null&&ye.next!==null;if(Lr=0,rn=ye=Yt=null,Yf=!1,Ec=0,Ro=null,t)throw Error(tt(300));n===null||Mn||(n=n.dependencies,n!==null&&Wf(n)&&(Mn=!0))}function VM(n,t,e,i){Yt=n;var s=0;do{if(wo&&(Ro=null),Ec=0,wo=!1,25<=s)throw Error(tt(301));if(s+=1,rn=ye=null,n.updateQueue!=null){var r=n.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ot.H=kw,r=t(e,i)}while(wo);return r}function Bw(){var n=Ot.H,t=n.useState()[0];return t=typeof t.then=="function"?Xc(t):t,n=n.useState()[0],(ye!==null?ye.memoizedState:null)!==n&&(Yt.flags|=1024),t}function jg(){var n=Zf!==0;return Zf=0,n}function $g(n,t,e){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~e}function t0(n){if(Yf){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}Yf=!1}Lr=0,rn=ye=Yt=null,wo=!1,Ec=Zf=0,Ro=null}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Yt.memoizedState=rn=n:rn=rn.next=n,rn}function an(){if(ye===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=ye.next;var t=rn===null?Yt.memoizedState:rn.next;if(t!==null)rn=t,ye=n;else{if(n===null)throw Yt.alternate===null?Error(tt(467)):Error(tt(310));ye=n,n={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},rn===null?Yt.memoizedState=rn=n:rn=rn.next=n}return rn}function e0(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xc(n){var t=Ec;return Ec+=1,Ro===null&&(Ro=[]),n=BM(Ro,n,t),t=Yt,(rn===null?t.memoizedState:rn.next)===null&&(t=t.alternate,Ot.H=t===null||t.memoizedState===null?gS:_S),n}function yh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Xc(n);if(n.$$typeof===Ds)return Ln(n)}throw Error(tt(438,String(n)))}function n0(n){var t=null,e=Yt.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var i=Yt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=e0(),Yt.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(n),i=0;i<n;i++)e[i]=MA;return t.index++,e}function zs(n,t){return typeof t=="function"?t(n):t}function Cf(n){var t=an();return i0(t,ye,n)}function i0(n,t,e){var i=n.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=e;var s=n.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=n.baseState,s===null)n.memoizedState=r;else{t=s.next;var o=a=null,l=null,c=t,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(ne&h)===h:(Lr&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Io&&(u=!0);else if((Lr&f)===f){c=c.next,f===Io&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,a=r):l=l.next=h,Yt.lanes|=f,Ir|=f;h=c.action,Sa&&e(r,h),r=c.hasEagerState?c.eagerState:e(r,h)}else f={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=r):l=l.next=f,Yt.lanes|=h,Ir|=h;c=c.next}while(c!==null&&c!==t);if(l===null?a=r:l.next=o,!fi(r,n.memoizedState)&&(Mn=!0,u&&(e=Ao,e!==null)))throw e;n.memoizedState=r,n.baseState=a,n.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function _m(n){var t=an(),e=t.queue;if(e===null)throw Error(tt(311));e.lastRenderedReducer=n;var i=e.dispatch,s=e.pending,r=t.memoizedState;if(s!==null){e.pending=null;var a=s=s.next;do r=n(r,a.action),a=a.next;while(a!==s);fi(r,t.memoizedState)||(Mn=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),e.lastRenderedState=r}return[r,i]}function GM(n,t,e){var i=Yt,s=an(),r=oe;if(r){if(e===void 0)throw Error(tt(407));e=e()}else e=t();var a=!fi((ye||s).memoizedState,e);a&&(s.memoizedState=e,Mn=!0),s=s.queue;var o=WM.bind(null,i,s,n);if(Wc(2048,8,o,[n]),s.getSnapshot!==t||a||rn!==null&&rn.memoizedState.tag&1){if(i.flags|=2048,Oo(9,vh(),XM.bind(null,i,s,e,t),null),Re===null)throw Error(tt(349));r||(Lr&124)!==0||kM(i,t,e)}return e}function kM(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=Yt.updateQueue,t===null?(t=e0(),Yt.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function XM(n,t,e,i){t.value=e,t.getSnapshot=i,qM(t)&&YM(n)}function WM(n,t,e){return e(function(){qM(t)&&YM(n)})}function qM(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!fi(n,e)}catch{return!0}}function YM(n){var t=Xo(n,2);t!==null&&ui(t,n,2)}function rg(n){var t=Wn();if(typeof n=="function"){var e=n;if(n=e(),Sa){vr(!0);try{e()}finally{vr(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:n},t}function ZM(n,t,e,i){return n.baseState=e,i0(n,ye,typeof i=="function"?i:zs)}function Fw(n,t,e,i,s){if(Mh(n))throw Error(tt(485));if(n=t.action,n!==null){var r={payload:s,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Ot.T!==null?e(!0):r.isTransition=!1,i(r),e=t.pending,e===null?(r.next=t.pending=r,KM(t,r)):(r.next=e.next,t.pending=e.next=r)}}function KM(n,t){var e=t.action,i=t.payload,s=n.state;if(t.isTransition){var r=Ot.T,a={};Ot.T=a;try{var o=e(s,i),l=Ot.S;l!==null&&l(a,o),iv(n,t,o)}catch(c){ag(n,t,c)}finally{Ot.T=r}}else try{r=e(s,i),iv(n,t,r)}catch(c){ag(n,t,c)}}function iv(n,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){sv(n,t,i)},function(i){return ag(n,t,i)}):sv(n,t,e)}function sv(n,t,e){t.status="fulfilled",t.value=e,JM(t),n.state=e,t=n.pending,t!==null&&(e=t.next,e===t?n.pending=null:(e=e.next,t.next=e,KM(n,e)))}function ag(n,t,e){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=e,JM(t),t=t.next;while(t!==i)}n.action=null}function JM(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function QM(n,t){return t}function rv(n,t){if(oe){var e=Re.formState;if(e!==null){t:{var i=Yt;if(oe){if(Xe){e:{for(var s=Xe,r=is;s.nodeType!==8;){if(!r){s=null;break e}if(s=Vi(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Xe=Vi(s.nextSibling),i=s.data==="F!";break t}}va(i)}i=!1}i&&(t=e[0])}}return e=Wn(),e.memoizedState=e.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:QM,lastRenderedState:t},e.queue=i,e=dS.bind(null,Yt,i),i.dispatch=e,i=rg(!1),r=o0.bind(null,Yt,!1,i.queue),i=Wn(),s={state:t,dispatch:null,action:n,pending:null},i.queue=s,e=Fw.bind(null,Yt,s,r,e),s.dispatch=e,i.memoizedState=n,[t,e,!1]}function av(n){var t=an();return jM(t,ye,n)}function jM(n,t,e){if(t=i0(n,t,QM)[0],n=Cf(zs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Xc(t)}catch(a){throw a===kc?xh:a}else i=t;t=an();var s=t.queue,r=s.dispatch;return e!==t.memoizedState&&(Yt.flags|=2048,Oo(9,vh(),zw.bind(null,s,e),null)),[i,r,n]}function zw(n,t){n.action=t}function ov(n){var t=an(),e=ye;if(e!==null)return jM(t,e,n);an(),t=t.memoizedState,e=an();var i=e.queue.dispatch;return e.memoizedState=n,[t,i,!1]}function Oo(n,t,e,i){return n={tag:n,create:e,deps:i,inst:t,next:null},t=Yt.updateQueue,t===null&&(t=e0(),Yt.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=n.next=n:(i=e.next,e.next=n,n.next=i,t.lastEffect=n),n}function vh(){return{destroy:void 0,resource:void 0}}function $M(){return an().memoizedState}function Nf(n,t,e,i){var s=Wn();i=i===void 0?null:i,Yt.flags|=n,s.memoizedState=Oo(1|t,vh(),e,i)}function Wc(n,t,e,i){var s=an();i=i===void 0?null:i;var r=s.memoizedState.inst;ye!==null&&i!==null&&Jg(i,ye.memoizedState.deps)?s.memoizedState=Oo(t,r,e,i):(Yt.flags|=n,s.memoizedState=Oo(1|t,r,e,i))}function lv(n,t){Nf(8390656,8,n,t)}function tS(n,t){Wc(2048,8,n,t)}function eS(n,t){return Wc(4,2,n,t)}function nS(n,t){return Wc(4,4,n,t)}function iS(n,t){if(typeof t=="function"){n=n();var e=t(n);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function sS(n,t,e){e=e!=null?e.concat([n]):null,Wc(4,4,iS.bind(null,t,n),e)}function s0(){}function rS(n,t){var e=an();t=t===void 0?null:t;var i=e.memoizedState;return t!==null&&Jg(t,i[1])?i[0]:(e.memoizedState=[n,t],n)}function aS(n,t){var e=an();t=t===void 0?null:t;var i=e.memoizedState;if(t!==null&&Jg(t,i[1]))return i[0];if(i=n(),Sa){vr(!0);try{n()}finally{vr(!1)}}return e.memoizedState=[i,t],i}function r0(n,t,e){return e===void 0||(Lr&1073741824)!==0?n.memoizedState=t:(n.memoizedState=e,n=JS(),Yt.lanes|=n,Ir|=n,e)}function oS(n,t,e,i){return fi(e,t)?e:Po.current!==null?(n=r0(n,e,i),fi(n,t)||(Mn=!0),n):(Lr&42)===0?(Mn=!0,n.memoizedState=e):(n=JS(),Yt.lanes|=n,Ir|=n,t)}function lS(n,t,e,i,s){var r=le.p;le.p=r!==0&&8>r?r:8;var a=Ot.T,o={};Ot.T=o,o0(n,!1,t,e);try{var l=s(),c=Ot.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=Pw(l,i);pc(n,t,u,ci(n))}else pc(n,t,i,ci(n))}catch(h){pc(n,t,{then:function(){},status:"rejected",reason:h},ci())}finally{le.p=r,Ot.T=a}}function Hw(){}function og(n,t,e,i){if(n.tag!==5)throw Error(tt(476));var s=cS(n).queue;lS(n,s,t,da,e===null?Hw:function(){return uS(n),e(i)})}function cS(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:da,baseState:da,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:da},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:e},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function uS(n){var t=cS(n).next.queue;pc(n,t,{},ci())}function a0(){return Ln(Nc)}function fS(){return an().memoizedState}function hS(){return an().memoizedState}function Vw(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var e=ci();n=Er(e);var i=Ar(t,n,e);i!==null&&(ui(i,t,e),fc(i,t,e)),t={cache:qg()},n.payload=t;return}t=t.return}}function Gw(n,t,e){var i=ci();e={lane:i,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},Mh(n)?pS(t,e):(e=Gg(n,t,e,i),e!==null&&(ui(e,n,i),mS(e,t,i)))}function dS(n,t,e){var i=ci();pc(n,t,e,i)}function pc(n,t,e,i){var s={lane:i,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(Mh(n))pS(t,s);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,o=r(a,e);if(s.hasEagerState=!0,s.eagerState=o,fi(o,a))return _h(n,t,s,0),Re===null&&gh(),!1}catch{}if(e=Gg(n,t,s,i),e!==null)return ui(e,n,i),mS(e,t,i),!0}return!1}function o0(n,t,e,i){if(i={lane:2,revertLane:m0(),action:i,hasEagerState:!1,eagerState:null,next:null},Mh(n)){if(t)throw Error(tt(479))}else t=Gg(n,e,i,2),t!==null&&ui(t,n,2)}function Mh(n){var t=n.alternate;return n===Yt||t!==null&&t===Yt}function pS(n,t){wo=Yf=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function mS(n,t,e){if((e&4194048)!==0){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,rM(n,e)}}var Kf={readContext:Ln,use:yh,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},gS={readContext:Ln,use:yh,useCallback:function(n,t){return Wn().memoizedState=[n,t===void 0?null:t],n},useContext:Ln,useEffect:lv,useImperativeHandle:function(n,t,e){e=e!=null?e.concat([n]):null,Nf(4194308,4,iS.bind(null,t,n),e)},useLayoutEffect:function(n,t){return Nf(4194308,4,n,t)},useInsertionEffect:function(n,t){Nf(4,2,n,t)},useMemo:function(n,t){var e=Wn();t=t===void 0?null:t;var i=n();if(Sa){vr(!0);try{n()}finally{vr(!1)}}return e.memoizedState=[i,t],i},useReducer:function(n,t,e){var i=Wn();if(e!==void 0){var s=e(t);if(Sa){vr(!0);try{e(t)}finally{vr(!1)}}}else s=t;return i.memoizedState=i.baseState=s,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},i.queue=n,n=n.dispatch=Gw.bind(null,Yt,n),[i.memoizedState,n]},useRef:function(n){var t=Wn();return n={current:n},t.memoizedState=n},useState:function(n){n=rg(n);var t=n.queue,e=dS.bind(null,Yt,t);return t.dispatch=e,[n.memoizedState,e]},useDebugValue:s0,useDeferredValue:function(n,t){var e=Wn();return r0(e,n,t)},useTransition:function(){var n=rg(!1);return n=lS.bind(null,Yt,n.queue,!0,!1),Wn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,e){var i=Yt,s=Wn();if(oe){if(e===void 0)throw Error(tt(407));e=e()}else{if(e=t(),Re===null)throw Error(tt(349));(ne&124)!==0||kM(i,t,e)}s.memoizedState=e;var r={value:e,getSnapshot:t};return s.queue=r,lv(WM.bind(null,i,r,n),[n]),i.flags|=2048,Oo(9,vh(),XM.bind(null,i,r,e,t),null),e},useId:function(){var n=Wn(),t=Re.identifierPrefix;if(oe){var e=Us,i=Ls;e=(i&~(1<<32-li(i)-1)).toString(32)+e,t="\xAB"+t+"R"+e,e=Zf++,0<e&&(t+="H"+e.toString(32)),t+="\xBB"}else e=Ow++,t="\xAB"+t+"r"+e.toString(32)+"\xBB";return n.memoizedState=t},useHostTransitionStatus:a0,useFormState:rv,useActionState:rv,useOptimistic:function(n){var t=Wn();t.memoizedState=t.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=o0.bind(null,Yt,!0,e),e.dispatch=t,[n,t]},useMemoCache:n0,useCacheRefresh:function(){return Wn().memoizedState=Vw.bind(null,Yt)}},_S={readContext:Ln,use:yh,useCallback:rS,useContext:Ln,useEffect:tS,useImperativeHandle:sS,useInsertionEffect:eS,useLayoutEffect:nS,useMemo:aS,useReducer:Cf,useRef:$M,useState:function(){return Cf(zs)},useDebugValue:s0,useDeferredValue:function(n,t){var e=an();return oS(e,ye.memoizedState,n,t)},useTransition:function(){var n=Cf(zs)[0],t=an().memoizedState;return[typeof n=="boolean"?n:Xc(n),t]},useSyncExternalStore:GM,useId:fS,useHostTransitionStatus:a0,useFormState:av,useActionState:av,useOptimistic:function(n,t){var e=an();return ZM(e,ye,n,t)},useMemoCache:n0,useCacheRefresh:hS},kw={readContext:Ln,use:yh,useCallback:rS,useContext:Ln,useEffect:tS,useImperativeHandle:sS,useInsertionEffect:eS,useLayoutEffect:nS,useMemo:aS,useReducer:_m,useRef:$M,useState:function(){return _m(zs)},useDebugValue:s0,useDeferredValue:function(n,t){var e=an();return ye===null?r0(e,n,t):oS(e,ye.memoizedState,n,t)},useTransition:function(){var n=_m(zs)[0],t=an().memoizedState;return[typeof n=="boolean"?n:Xc(n),t]},useSyncExternalStore:GM,useId:fS,useHostTransitionStatus:a0,useFormState:ov,useActionState:ov,useOptimistic:function(n,t){var e=an();return ye!==null?ZM(e,ye,n,t):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:n0,useCacheRefresh:hS},Co=null,Ac=0;function mf(n){var t=Ac;return Ac+=1,Co===null&&(Co=[]),BM(Co,n,t)}function Ql(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function gf(n,t){throw t.$$typeof===yA?Error(tt(525)):(n=Object.prototype.toString.call(t),Error(tt(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function cv(n){var t=n._init;return t(n._payload)}function xS(n){function t(p,_){if(n){var M=p.deletions;M===null?(p.deletions=[_],p.flags|=16):M.push(_)}}function e(p,_){if(!n)return null;for(;_!==null;)t(p,_),_=_.sibling;return null}function i(p){for(var _=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function s(p,_){return p=Os(p,_),p.index=0,p.sibling=null,p}function r(p,_,M){return p.index=M,n?(M=p.alternate,M!==null?(M=M.index,M<_?(p.flags|=67108866,_):M):(p.flags|=67108866,_)):(p.flags|=1048576,_)}function a(p){return n&&p.alternate===null&&(p.flags|=67108866),p}function o(p,_,M,x){return _===null||_.tag!==6?(_=pm(M,p.mode,x),_.return=p,_):(_=s(_,M),_.return=p,_)}function l(p,_,M,x){var T=M.type;return T===uo?u(p,_,M.props.children,x,M.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pr&&cv(T)===_.type)?(_=s(_,M.props),Ql(_,M),_.return=p,_):(_=wf(M.type,M.key,M.props,null,p.mode,x),Ql(_,M),_.return=p,_)}function c(p,_,M,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==M.containerInfo||_.stateNode.implementation!==M.implementation?(_=mm(M,p.mode,x),_.return=p,_):(_=s(_,M.children||[]),_.return=p,_)}function u(p,_,M,x,T){return _===null||_.tag!==7?(_=pa(M,p.mode,x,T),_.return=p,_):(_=s(_,M),_.return=p,_)}function h(p,_,M){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=pm(""+_,p.mode,M),_.return=p,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case af:return M=wf(_.type,_.key,_.props,null,p.mode,M),Ql(M,_),M.return=p,M;case nc:return _=mm(_,p.mode,M),_.return=p,_;case pr:var x=_._init;return _=x(_._payload),h(p,_,M)}if(ic(_)||Zl(_))return _=pa(_,p.mode,M,null),_.return=p,_;if(typeof _.then=="function")return h(p,mf(_),M);if(_.$$typeof===Ds)return h(p,df(p,_),M);gf(p,_)}return null}function f(p,_,M,x){var T=_!==null?_.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:o(p,_,""+M,x);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case af:return M.key===T?l(p,_,M,x):null;case nc:return M.key===T?c(p,_,M,x):null;case pr:return T=M._init,M=T(M._payload),f(p,_,M,x)}if(ic(M)||Zl(M))return T!==null?null:u(p,_,M,x,null);if(typeof M.then=="function")return f(p,_,mf(M),x);if(M.$$typeof===Ds)return f(p,_,df(p,M),x);gf(p,M)}return null}function d(p,_,M,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(M)||null,o(_,p,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case af:return p=p.get(x.key===null?M:x.key)||null,l(_,p,x,T);case nc:return p=p.get(x.key===null?M:x.key)||null,c(_,p,x,T);case pr:var E=x._init;return x=E(x._payload),d(p,_,M,x,T)}if(ic(x)||Zl(x))return p=p.get(M)||null,u(_,p,x,T,null);if(typeof x.then=="function")return d(p,_,M,mf(x),T);if(x.$$typeof===Ds)return d(p,_,M,df(_,x),T);gf(_,x)}return null}function g(p,_,M,x){for(var T=null,E=null,A=_,y=_=0,w=null;A!==null&&y<M.length;y++){A.index>y?(w=A,A=null):w=A.sibling;var C=f(p,A,M[y],x);if(C===null){A===null&&(A=w);break}n&&A&&C.alternate===null&&t(p,A),_=r(C,_,y),E===null?T=C:E.sibling=C,E=C,A=w}if(y===M.length)return e(p,A),oe&&fa(p,y),T;if(A===null){for(;y<M.length;y++)A=h(p,M[y],x),A!==null&&(_=r(A,_,y),E===null?T=A:E.sibling=A,E=A);return oe&&fa(p,y),T}for(A=i(A);y<M.length;y++)w=d(A,p,y,M[y],x),w!==null&&(n&&w.alternate!==null&&A.delete(w.key===null?y:w.key),_=r(w,_,y),E===null?T=w:E.sibling=w,E=w);return n&&A.forEach(function(N){return t(p,N)}),oe&&fa(p,y),T}function S(p,_,M,x){if(M==null)throw Error(tt(151));for(var T=null,E=null,A=_,y=_=0,w=null,C=M.next();A!==null&&!C.done;y++,C=M.next()){A.index>y?(w=A,A=null):w=A.sibling;var N=f(p,A,C.value,x);if(N===null){A===null&&(A=w);break}n&&A&&N.alternate===null&&t(p,A),_=r(N,_,y),E===null?T=N:E.sibling=N,E=N,A=w}if(C.done)return e(p,A),oe&&fa(p,y),T;if(A===null){for(;!C.done;y++,C=M.next())C=h(p,C.value,x),C!==null&&(_=r(C,_,y),E===null?T=C:E.sibling=C,E=C);return oe&&fa(p,y),T}for(A=i(A);!C.done;y++,C=M.next())C=d(A,p,y,C.value,x),C!==null&&(n&&C.alternate!==null&&A.delete(C.key===null?y:C.key),_=r(C,_,y),E===null?T=C:E.sibling=C,E=C);return n&&A.forEach(function(B){return t(p,B)}),oe&&fa(p,y),T}function m(p,_,M,x){if(typeof M=="object"&&M!==null&&M.type===uo&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case af:t:{for(var T=M.key;_!==null;){if(_.key===T){if(T=M.type,T===uo){if(_.tag===7){e(p,_.sibling),x=s(_,M.props.children),x.return=p,p=x;break t}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pr&&cv(T)===_.type){e(p,_.sibling),x=s(_,M.props),Ql(x,M),x.return=p,p=x;break t}e(p,_);break}else t(p,_);_=_.sibling}M.type===uo?(x=pa(M.props.children,p.mode,x,M.key),x.return=p,p=x):(x=wf(M.type,M.key,M.props,null,p.mode,x),Ql(x,M),x.return=p,p=x)}return a(p);case nc:t:{for(T=M.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===M.containerInfo&&_.stateNode.implementation===M.implementation){e(p,_.sibling),x=s(_,M.children||[]),x.return=p,p=x;break t}else{e(p,_);break}else t(p,_);_=_.sibling}x=mm(M,p.mode,x),x.return=p,p=x}return a(p);case pr:return T=M._init,M=T(M._payload),m(p,_,M,x)}if(ic(M))return g(p,_,M,x);if(Zl(M)){if(T=Zl(M),typeof T!="function")throw Error(tt(150));return M=T.call(M),S(p,_,M,x)}if(typeof M.then=="function")return m(p,_,mf(M),x);if(M.$$typeof===Ds)return m(p,_,df(p,M),x);gf(p,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,_!==null&&_.tag===6?(e(p,_.sibling),x=s(_,M),x.return=p,p=x):(e(p,_),x=pm(M,p.mode,x),x.return=p,p=x),a(p)):e(p,_)}return function(p,_,M,x){try{Ac=0;var T=m(p,_,M,x);return Co=null,T}catch(A){if(A===kc||A===xh)throw A;var E=ai(29,A,null,p.mode);return E.lanes=x,E.return=p,E}}}var Bo=xS(!0),yS=xS(!1),Ni=ls(null),os=null;function _r(n){var t=n.alternate;Pe(hn,hn.current&1),Pe(Ni,n),os===null&&(t===null||Po.current!==null||t.memoizedState!==null)&&(os=n)}function vS(n){if(n.tag===22){if(Pe(hn,hn.current),Pe(Ni,n),os===null){var t=n.alternate;t!==null&&t.memoizedState!==null&&(os=n)}}else xr(n)}function xr(){Pe(hn,hn.current),Pe(Ni,Ni.current)}function Ps(n){Sn(Ni),os===n&&(os=null),Sn(hn)}var hn=ls(0);function Jf(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||Tg(e)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xm(n,t,e,i){t=n.memoizedState,e=e(i,t),e=e==null?t:De({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var lg={enqueueSetState:function(n,t,e){n=n._reactInternals;var i=ci(),s=Er(i);s.payload=t,e!=null&&(s.callback=e),t=Ar(n,s,i),t!==null&&(ui(t,n,i),fc(t,n,i))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var i=ci(),s=Er(i);s.tag=1,s.payload=t,e!=null&&(s.callback=e),t=Ar(n,s,i),t!==null&&(ui(t,n,i),fc(t,n,i))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=ci(),i=Er(e);i.tag=2,t!=null&&(i.callback=t),t=Ar(n,i,e),t!==null&&(ui(t,n,e),fc(t,n,e))}};function uv(n,t,e,i,s,r,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!bc(e,i)||!bc(s,r):!0}function fv(n,t,e,i){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,i),t.state!==n&&lg.enqueueReplaceState(t,t.state,null)}function ba(n,t){var e=t;if("ref"in t){e={};for(var i in t)i!=="ref"&&(e[i]=t[i])}if(n=n.defaultProps){e===t&&(e=De({},e));for(var s in n)e[s]===void 0&&(e[s]=n[s])}return e}var Qf=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function MS(n){Qf(n)}function SS(n){console.error(n)}function bS(n){Qf(n)}function jf(n,t){try{var e=n.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function hv(n,t,e){try{var i=n.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function cg(n,t,e){return e=Er(e),e.tag=3,e.payload={element:null},e.callback=function(){jf(n,t)},e}function TS(n){return n=Er(n),n.tag=3,n}function ES(n,t,e,i){var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;n.payload=function(){return s(r)},n.callback=function(){hv(t,e,i)}}var a=e.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){hv(t,e,i),typeof s!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Xw(n,t,e,i,s){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=e.alternate,t!==null&&Vc(t,e,s,!0),e=Ni.current,e!==null){switch(e.tag){case 13:return os===null?_g():e.alternate===null&&We===0&&(We=3),e.flags&=-257,e.flags|=65536,e.lanes=s,i===eg?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([i]):t.add(i),Cm(n,i,s)),!1;case 22:return e.flags|=65536,i===eg?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([i]):e.add(i)),Cm(n,i,s)),!1}throw Error(tt(435,e.tag))}return Cm(n,i,s),_g(),!1}if(oe)return t=Ni.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Jm&&(n=Error(tt(422),{cause:i}),Tc(Ri(n,e)))):(i!==Jm&&(t=Error(tt(423),{cause:i}),Tc(Ri(t,e))),n=n.current.alternate,n.flags|=65536,s&=-s,n.lanes|=s,i=Ri(i,e),s=cg(n.stateNode,i,s),gm(n,s),We!==4&&(We=2)),!1;var r=Error(tt(520),{cause:i});if(r=Ri(r,e),_c===null?_c=[r]:_c.push(r),We!==4&&(We=2),t===null)return!0;i=Ri(i,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,n=s&-s,e.lanes|=n,n=cg(e.stateNode,i,n),gm(e,n),!1;case 1:if(t=e.type,r=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))))return e.flags|=65536,s&=-s,e.lanes|=s,s=TS(s),ES(s,n,e,i),gm(e,s),!1}e=e.return}while(e!==null);return!1}var AS=Error(tt(461)),Mn=!1;function An(n,t,e,i){t.child=n===null?yS(t,null,e,i):Bo(t,n.child,e,i)}function dv(n,t,e,i,s){e=e.render;var r=t.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return Ma(t),i=Qg(n,t,e,a,r,s),o=jg(),n!==null&&!Mn?($g(n,t,s),Hs(n,t,s)):(oe&&o&&Xg(t),t.flags|=1,An(n,t,i,s),t.child)}function pv(n,t,e,i,s){if(n===null){var r=e.type;return typeof r=="function"&&!kg(r)&&r.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=r,wS(n,t,r,i,s)):(n=wf(e.type,null,i,t,t.mode,s),n.ref=t.ref,n.return=t,t.child=n)}if(r=n.child,!l0(n,s)){var a=r.memoizedProps;if(e=e.compare,e=e!==null?e:bc,e(a,i)&&n.ref===t.ref)return Hs(n,t,s)}return t.flags|=1,n=Os(r,i),n.ref=t.ref,n.return=t,t.child=n}function wS(n,t,e,i,s){if(n!==null){var r=n.memoizedProps;if(bc(r,i)&&n.ref===t.ref)if(Mn=!1,t.pendingProps=i=r,l0(n,s))(n.flags&131072)!==0&&(Mn=!0);else return t.lanes=n.lanes,Hs(n,t,s)}return ug(n,t,e,i,s)}function RS(n,t,e){var i=t.pendingProps,s=i.children,r=n!==null?n.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=r!==null?r.baseLanes|e:e,n!==null){for(s=t.child=n.child,r=0;s!==null;)r=r|s.lanes|s.childLanes,s=s.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return mv(n,t,i,e)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&Rf(t,r!==null?r.cachePool:null),r!==null?nv(t,r):sg(),vS(t);else return t.lanes=t.childLanes=536870912,mv(n,t,r!==null?r.baseLanes|e:e,e)}else r!==null?(Rf(t,r.cachePool),nv(t,r),xr(t),t.memoizedState=null):(n!==null&&Rf(t,null),sg(),xr(t));return An(n,t,s,e),t.child}function mv(n,t,e,i){var s=Yg();return s=s===null?null:{parent:fn._currentValue,pool:s},t.memoizedState={baseLanes:e,cachePool:s},n!==null&&Rf(t,null),sg(),vS(t),n!==null&&Vc(n,t,i,!0),null}function Df(n,t){var e=t.ref;if(e===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(tt(284));(n===null||n.ref!==e)&&(t.flags|=4194816)}}function ug(n,t,e,i,s){return Ma(t),e=Qg(n,t,e,i,void 0,s),i=jg(),n!==null&&!Mn?($g(n,t,s),Hs(n,t,s)):(oe&&i&&Xg(t),t.flags|=1,An(n,t,e,s),t.child)}function gv(n,t,e,i,s,r){return Ma(t),t.updateQueue=null,e=VM(t,i,e,s),HM(n),i=jg(),n!==null&&!Mn?($g(n,t,r),Hs(n,t,r)):(oe&&i&&Xg(t),t.flags|=1,An(n,t,e,r),t.child)}function _v(n,t,e,i,s){if(Ma(t),t.stateNode===null){var r=yo,a=e.contextType;typeof a=="object"&&a!==null&&(r=Ln(a)),r=new e(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=lg,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Zg(t),a=e.contextType,r.context=typeof a=="object"&&a!==null?Ln(a):yo,r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(xm(t,e,a,i),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&lg.enqueueReplaceState(r,r.state,null),dc(t,i,r,s),hc(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(n===null){r=t.stateNode;var o=t.memoizedProps,l=ba(e,o);r.props=l;var c=r.context,u=e.contextType;a=yo,typeof u=="object"&&u!==null&&(a=Ln(u));var h=e.getDerivedStateFromProps;u=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&fv(t,r,i,a),mr=!1;var f=t.memoizedState;r.state=f,dc(t,i,r,s),hc(),c=t.memoizedState,o||f!==c||mr?(typeof h=="function"&&(xm(t,e,h,i),c=t.memoizedState),(l=mr||uv(t,e,l,i,f,c,a))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=a,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,ng(n,t),a=t.memoizedProps,u=ba(e,a),r.props=u,h=t.pendingProps,f=r.context,c=e.contextType,l=yo,typeof c=="object"&&c!==null&&(l=Ln(c)),o=e.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==h||f!==l)&&fv(t,r,i,l),mr=!1,f=t.memoizedState,r.state=f,dc(t,i,r,s),hc();var d=t.memoizedState;a!==h||f!==d||mr||n!==null&&n.dependencies!==null&&Wf(n.dependencies)?(typeof o=="function"&&(xm(t,e,o,i),d=t.memoizedState),(u=mr||uv(t,e,u,i,f,d,l)||n!==null&&n.dependencies!==null&&Wf(n.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,d,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),r.props=i,r.state=d,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(t.flags|=1024),i=!1)}return r=i,Df(n,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,n!==null&&i?(t.child=Bo(t,n.child,null,s),t.child=Bo(t,null,e,s)):An(n,t,e,s),t.memoizedState=r.state,n=t.child):n=Hs(n,t,s),n}function xv(n,t,e,i){return Hc(),t.flags|=256,An(n,t,e,i),t.child}var ym={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vm(n){return{baseLanes:n,cachePool:PM()}}function Mm(n,t,e){return n=n!==null?n.childLanes&~e:0,t&&(n|=Ci),n}function CS(n,t,e){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=n!==null&&n.memoizedState===null?!1:(hn.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,n===null){if(oe){if(s?_r(t):xr(t),oe){var o=Xe,l;if(l=o){t:{for(l=o,o=is;l.nodeType!==8;){if(!o){o=null;break t}if(l=Vi(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:ma!==null?{id:Ls,overflow:Us}:null,retryLane:536870912,hydrationErrors:null},l=ai(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,zn=t,Xe=null,l=!0):l=!1}l||va(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Tg(o)?t.lanes=32:t.lanes=536870912,null;Ps(t)}return o=i.children,i=i.fallback,s?(xr(t),s=t.mode,o=$f({mode:"hidden",children:o},s),i=pa(i,s,e,null),o.return=t,i.return=t,o.sibling=i,t.child=o,s=t.child,s.memoizedState=vm(e),s.childLanes=Mm(n,a,e),t.memoizedState=ym,i):(_r(t),fg(t,o))}if(l=n.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(_r(t),t.flags&=-257,t=Sm(n,t,e)):t.memoizedState!==null?(xr(t),t.child=n.child,t.flags|=128,t=null):(xr(t),s=i.fallback,o=t.mode,i=$f({mode:"visible",children:i.children},o),s=pa(s,o,e,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,Bo(t,n.child,null,e),i=t.child,i.memoizedState=vm(e),i.childLanes=Mm(n,a,e),t.memoizedState=ym,t=s);else if(_r(t),Tg(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(tt(419)),i.stack="",i.digest=a,Tc({value:i,source:null,stack:null}),t=Sm(n,t,e)}else if(Mn||Vc(n,t,e,!1),a=(e&n.childLanes)!==0,Mn||a){if(a=Re,a!==null&&(i=e&-e,i=(i&42)!==0?1:Lg(i),i=(i&(a.suspendedLanes|e))!==0?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,Xo(n,i),ui(a,n,i),AS;o.data==="$?"||_g(),t=Sm(n,t,e)}else o.data==="$?"?(t.flags|=192,t.child=n.child,t=null):(n=l.treeContext,Xe=Vi(o.nextSibling),zn=t,oe=!0,ga=null,is=!1,n!==null&&(Ei[Ai++]=Ls,Ei[Ai++]=Us,Ei[Ai++]=ma,Ls=n.id,Us=n.overflow,ma=t),t=fg(t,i.children),t.flags|=4096);return t}return s?(xr(t),s=i.fallback,o=t.mode,l=n.child,c=l.sibling,i=Os(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?s=Os(c,s):(s=pa(s,o,e,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=n.child.memoizedState,o===null?o=vm(e):(l=o.cachePool,l!==null?(c=fn._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=PM(),o={baseLanes:o.baseLanes|e,cachePool:l}),s.memoizedState=o,s.childLanes=Mm(n,a,e),t.memoizedState=ym,i):(_r(t),e=n.child,n=e.sibling,e=Os(e,{mode:"visible",children:i.children}),e.return=t,e.sibling=null,n!==null&&(a=t.deletions,a===null?(t.deletions=[n],t.flags|=16):a.push(n)),t.child=e,t.memoizedState=null,e)}function fg(n,t){return t=$f({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function $f(n,t){return n=ai(22,n,null,t),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Sm(n,t,e){return Bo(t,n.child,null,e),n=fg(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function yv(n,t,e){n.lanes|=t;var i=n.alternate;i!==null&&(i.lanes|=t),jm(n.return,t,e)}function bm(n,t,e,i,s){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=e,r.tailMode=s)}function NS(n,t,e){var i=t.pendingProps,s=i.revealOrder,r=i.tail;if(An(n,t,i.children,e),i=hn.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yv(n,e,t);else if(n.tag===19)yv(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}switch(Pe(hn,i),s){case"forwards":for(e=t.child,s=null;e!==null;)n=e.alternate,n!==null&&Jf(n)===null&&(s=e),e=e.sibling;e=s,e===null?(s=t.child,t.child=null):(s=e.sibling,e.sibling=null),bm(t,!1,s,e,r);break;case"backwards":for(e=null,s=t.child,t.child=null;s!==null;){if(n=s.alternate,n!==null&&Jf(n)===null){t.child=s;break}n=s.sibling,s.sibling=e,e=s,s=n}bm(t,!0,e,null,r);break;case"together":bm(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),Ir|=t.lanes,(e&t.childLanes)===0)if(n!==null){if(Vc(n,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(tt(153));if(t.child!==null){for(n=t.child,e=Os(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=Os(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function l0(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&Wf(n)))}function Ww(n,t,e){switch(t.tag){case 3:Bf(t,t.stateNode.containerInfo),gr(t,fn,n.memoizedState.cache),Hc();break;case 27:case 5:Hm(t);break;case 4:Bf(t,t.stateNode.containerInfo);break;case 10:gr(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(_r(t),t.flags|=128,null):(e&t.child.childLanes)!==0?CS(n,t,e):(_r(t),n=Hs(n,t,e),n!==null?n.sibling:null);_r(t);break;case 19:var s=(n.flags&128)!==0;if(i=(e&t.childLanes)!==0,i||(Vc(n,t,e,!1),i=(e&t.childLanes)!==0),s){if(i)return NS(n,t,e);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Pe(hn,hn.current),i)break;return null;case 22:case 23:return t.lanes=0,RS(n,t,e);case 24:gr(t,fn,n.memoizedState.cache)}return Hs(n,t,e)}function DS(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps)Mn=!0;else{if(!l0(n,e)&&(t.flags&128)===0)return Mn=!1,Ww(n,t,e);Mn=(n.flags&131072)!==0}else Mn=!1,oe&&(t.flags&1048576)!==0&&UM(t,Xf,t.index);switch(t.lanes=0,t.tag){case 16:t:{n=t.pendingProps;var i=t.elementType,s=i._init;if(i=s(i._payload),t.type=i,typeof i=="function")kg(i)?(n=ba(i,n),t.tag=1,t=_v(null,t,i,n,e)):(t.tag=0,t=ug(null,t,i,n,e));else{if(i!=null){if(s=i.$$typeof,s===Cg){t.tag=11,t=dv(null,t,i,n,e);break t}else if(s===Ng){t.tag=14,t=pv(null,t,i,n,e);break t}}throw t=Fm(i)||i,Error(tt(306,t,""))}}return t;case 0:return ug(n,t,t.type,t.pendingProps,e);case 1:return i=t.type,s=ba(i,t.pendingProps),_v(n,t,i,s,e);case 3:t:{if(Bf(t,t.stateNode.containerInfo),n===null)throw Error(tt(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,ng(n,t),dc(t,i,null,e);var a=t.memoizedState;if(i=a.cache,gr(t,fn,i),i!==r.cache&&$m(t,[fn],e,!0),hc(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=xv(n,t,i,e);break t}else if(i!==s){s=Ri(Error(tt(424)),t),Tc(s),t=xv(n,t,i,e);break t}else for(n=t.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Xe=Vi(n.firstChild),zn=t,oe=!0,ga=null,is=!0,e=yS(t,null,i,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Hc(),i===s){t=Hs(n,t,e);break t}An(n,t,i,e)}t=t.child}return t;case 26:return Df(n,t),n===null?(e=Fv(t.type,null,t.pendingProps,null))?t.memoizedState=e:oe||(e=t.type,n=t.pendingProps,i=ah(Tr.current).createElement(e),i[Dn]=t,i[Zn]=n,Rn(i,e,n),vn(i),t.stateNode=i):t.memoizedState=Fv(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return Hm(t),n===null&&oe&&(i=t.stateNode=_b(t.type,t.pendingProps,Tr.current),zn=t,is=!0,s=Xe,Or(t.type)?(Eg=s,Xe=Vi(i.firstChild)):Xe=s),An(n,t,t.pendingProps.children,e),Df(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&oe&&((s=i=Xe)&&(i=_R(i,t.type,t.pendingProps,is),i!==null?(t.stateNode=i,zn=t,Xe=Vi(i.firstChild),is=!1,s=!0):s=!1),s||va(t)),Hm(t),s=t.type,r=t.pendingProps,a=n!==null?n.memoizedProps:null,i=r.children,Sg(s,r)?i=null:a!==null&&Sg(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=Qg(n,t,Bw,null,null,e),Nc._currentValue=s),Df(n,t),An(n,t,i,e),t.child;case 6:return n===null&&oe&&((n=e=Xe)&&(e=xR(e,t.pendingProps,is),e!==null?(t.stateNode=e,zn=t,Xe=null,n=!0):n=!1),n||va(t)),null;case 13:return CS(n,t,e);case 4:return Bf(t,t.stateNode.containerInfo),i=t.pendingProps,n===null?t.child=Bo(t,null,i,e):An(n,t,i,e),t.child;case 11:return dv(n,t,t.type,t.pendingProps,e);case 7:return An(n,t,t.pendingProps,e),t.child;case 8:return An(n,t,t.pendingProps.children,e),t.child;case 12:return An(n,t,t.pendingProps.children,e),t.child;case 10:return i=t.pendingProps,gr(t,t.type,i.value),An(n,t,i.children,e),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ma(t),s=Ln(s),i=i(s),t.flags|=1,An(n,t,i,e),t.child;case 14:return pv(n,t,t.type,t.pendingProps,e);case 15:return wS(n,t,t.type,t.pendingProps,e);case 19:return NS(n,t,e);case 31:return i=t.pendingProps,e=t.mode,i={mode:i.mode,children:i.children},n===null?(e=$f(i,e),e.ref=t.ref,t.child=e,e.return=t,t=e):(e=Os(n.child,i),e.ref=t.ref,t.child=e,e.return=t,t=e),t;case 22:return RS(n,t,e);case 24:return Ma(t),i=Ln(fn),n===null?(s=Yg(),s===null&&(s=Re,r=qg(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=e),s=r),t.memoizedState={parent:i,cache:s},Zg(t),gr(t,fn,s)):((n.lanes&e)!==0&&(ng(n,t),dc(t,null,null,e),hc()),s=n.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),gr(t,fn,i)):(i=r.cache,gr(t,fn,i),i!==s.cache&&$m(t,[fn],e,!0))),An(n,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Rs(n){n.flags|=4}function vv(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!vb(t)){if(t=Ni.current,t!==null&&((ne&4194048)===ne?os!==null:(ne&62914560)!==ne&&(ne&536870912)===0||t!==os))throw uc=eg,OM;n.flags|=8192}}function _f(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?iM():536870912,n.lanes|=t,Fo|=t)}function jl(n,t){if(!oe)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ve(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,i=0;if(t)for(var s=n.child;s!==null;)e|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=n,s=s.sibling;else for(s=n.child;s!==null;)e|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=n,s=s.sibling;return n.subtreeFlags|=i,n.childLanes=e,t}function qw(n,t,e){var i=t.pendingProps;switch(Wg(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return e=t.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Bs(fn),Do(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(Jl(t)?Rs(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jy())),Ve(t),null;case 26:return e=t.memoizedState,n===null?(Rs(t),e!==null?(Ve(t),vv(t,e)):(Ve(t),t.flags&=-16777217)):e?e!==n.memoizedState?(Rs(t),Ve(t),vv(t,e)):(Ve(t),t.flags&=-16777217):(n.memoizedProps!==i&&Rs(t),Ve(t),t.flags&=-16777217),null;case 27:Ff(t),e=Tr.current;var s=t.type;if(n!==null&&t.stateNode!=null)n.memoizedProps!==i&&Rs(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Ve(t),null}n=rs.current,Jl(t)?Zy(t,n):(n=_b(s,i,e),t.stateNode=n,Rs(t))}return Ve(t),null;case 5:if(Ff(t),e=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==i&&Rs(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Ve(t),null}if(n=rs.current,Jl(t))Zy(t,n);else{switch(s=ah(Tr.current),n){case 1:n=s.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:n=s.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":n=s.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":n=s.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?n.multiple=!0:i.size&&(n.size=i.size);break;default:n=typeof i.is=="string"?s.createElement(e,{is:i.is}):s.createElement(e)}}n[Dn]=t,n[Zn]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=n;t:switch(Rn(n,e,i),e){case"button":case"input":case"select":case"textarea":n=!!i.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Rs(t)}}return Ve(t),t.flags&=-16777217,null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==i&&Rs(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(n=Tr.current,Jl(t)){if(n=t.stateNode,e=t.memoizedProps,i=null,s=zn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}n[Dn]=t,n=!!(n.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||pb(n.nodeValue,e)),n||va(t)}else n=ah(n).createTextNode(i),n[Dn]=t,t.stateNode=n}return Ve(t),null;case 13:if(i=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(s=Jl(t),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[Dn]=t}else Hc(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),s=!1}else s=Jy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Ps(t),t):(Ps(t),null)}if(Ps(t),(t.flags&128)!==0)return t.lanes=e,t;if(e=i!==null,n=n!==null&&n.memoizedState!==null,e){i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)}return e!==n&&e&&(t.child.flags|=8192),_f(t,t.updateQueue),Ve(t),null;case 4:return Do(),n===null&&g0(t.stateNode.containerInfo),Ve(t),null;case 10:return Bs(t.type),Ve(t),null;case 19:if(Sn(hn),s=t.memoizedState,s===null)return Ve(t),null;if(i=(t.flags&128)!==0,r=s.rendering,r===null)if(i)jl(s,!1);else{if(We!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(r=Jf(n),r!==null){for(t.flags|=128,jl(s,!1),n=r.updateQueue,t.updateQueue=n,_f(t,n),t.subtreeFlags=0,n=e,e=t.child;e!==null;)LM(e,n),e=e.sibling;return Pe(hn,hn.current&1|2),t.child}n=n.sibling}s.tail!==null&&as()>eh&&(t.flags|=128,i=!0,jl(s,!1),t.lanes=4194304)}else{if(!i)if(n=Jf(r),n!==null){if(t.flags|=128,i=!0,n=n.updateQueue,t.updateQueue=n,_f(t,n),jl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!r.alternate&&!oe)return Ve(t),null}else 2*as()-s.renderingStartTime>eh&&e!==536870912&&(t.flags|=128,i=!0,jl(s,!1),t.lanes=4194304);s.isBackwards?(r.sibling=t.child,t.child=r):(n=s.last,n!==null?n.sibling=r:t.child=r,s.last=r)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=as(),t.sibling=null,n=hn.current,Pe(hn,i?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return Ps(t),Kg(),i=t.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(e&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),e=t.updateQueue,e!==null&&_f(t,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==e&&(t.flags|=2048),n!==null&&Sn(_a),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Bs(fn),Ve(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function Yw(n,t){switch(Wg(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Bs(fn),Do(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return Ff(t),null;case 13:if(Ps(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));Hc()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return Sn(hn),null;case 4:return Do(),null;case 10:return Bs(t.type),null;case 22:case 23:return Ps(t),Kg(),n!==null&&Sn(_a),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return Bs(fn),null;case 25:return null;default:return null}}function LS(n,t){switch(Wg(t),t.tag){case 3:Bs(fn),Do();break;case 26:case 27:case 5:Ff(t);break;case 4:Do();break;case 13:Ps(t);break;case 19:Sn(hn);break;case 10:Bs(t.type);break;case 22:case 23:Ps(t),Kg(),n!==null&&Sn(_a);break;case 24:Bs(fn)}}function qc(n,t){try{var e=t.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var s=i.next;e=s;do{if((e.tag&n)===n){i=void 0;var r=e.create,a=e.inst;i=r(),a.destroy=i}e=e.next}while(e!==s)}}catch(o){Ee(t,t.return,o)}}function Ur(n,t,e){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&n)===n){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=t;var l=e,c=o;try{c()}catch(u){Ee(s,l,u)}}}i=i.next}while(i!==r)}}catch(u){Ee(t,t.return,u)}}function US(n){var t=n.updateQueue;if(t!==null){var e=n.stateNode;try{zM(t,e)}catch(i){Ee(n,n.return,i)}}}function IS(n,t,e){e.props=ba(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(i){Ee(n,t,i)}}function mc(n,t){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var i=n.stateNode;break;case 30:i=n.stateNode;break;default:i=n.stateNode}typeof e=="function"?n.refCleanup=e(i):e.current=i}}catch(s){Ee(n,t,s)}}function ss(n,t){var e=n.ref,i=n.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(s){Ee(n,t,s)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(s){Ee(n,t,s)}else e.current=null}function PS(n){var t=n.type,e=n.memoizedProps,i=n.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break t;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(s){Ee(n,n.return,s)}}function Tm(n,t,e){try{var i=n.stateNode;hR(i,n.type,e,t),i[Zn]=t}catch(s){Ee(n,n.return,s)}}function OS(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Or(n.type)||n.tag===4}function Em(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||OS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Or(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hg(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(n),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Eh));else if(i!==4&&(i===27&&Or(n.type)&&(e=n.stateNode,t=null),n=n.child,n!==null))for(hg(n,t,e),n=n.sibling;n!==null;)hg(n,t,e),n=n.sibling}function th(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(i!==4&&(i===27&&Or(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(th(n,t,e),n=n.sibling;n!==null;)th(n,t,e),n=n.sibling}function BS(n){var t=n.stateNode,e=n.memoizedProps;try{for(var i=n.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Rn(t,i,e),t[Dn]=n,t[Zn]=e}catch(r){Ee(n,n.return,r)}}var Ns=!1,Je=!1,Am=!1,Mv=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Zw(n,t){if(n=n.containerInfo,vg=uh,n=TM(n),Hg(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else t:{e=(e=n.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{e.nodeType,r.nodeType}catch{e=null;break t}var a=0,o=-1,l=-1,c=0,u=0,h=n,f=null;e:for(;;){for(var d;h!==e||s!==0&&h.nodeType!==3||(o=a+s),h!==r||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===n)break e;if(f===e&&++c===s&&(o=a),f===r&&++u===i&&(l=a),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}e=o===-1||l===-1?null:{start:o,end:l}}else e=null}e=e||{start:0,end:0}}else e=null;for(Mg={focusedElem:n,selectionRange:e},uh=!1,yn=t;yn!==null;)if(t=yn,n=t.child,(t.subtreeFlags&1024)!==0&&n!==null)n.return=t,yn=n;else for(;yn!==null;){switch(t=yn,r=t.alternate,n=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&r!==null){n=void 0,e=t,s=r.memoizedProps,r=r.memoizedState,i=e.stateNode;try{var g=ba(e.type,s,e.elementType===e.type);n=i.getSnapshotBeforeUpdate(g,r),i.__reactInternalSnapshotBeforeUpdate=n}catch(S){Ee(e,e.return,S)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,e=n.nodeType,e===9)bg(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":bg(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(tt(163))}if(n=t.sibling,n!==null){n.return=t.return,yn=n;break}yn=t.return}}function FS(n,t,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:hr(n,e),i&4&&qc(5,e);break;case 1:if(hr(n,e),i&4)if(n=e.stateNode,t===null)try{n.componentDidMount()}catch(a){Ee(e,e.return,a)}else{var s=ba(e.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(s,t,n.__reactInternalSnapshotBeforeUpdate)}catch(a){Ee(e,e.return,a)}}i&64&&US(e),i&512&&mc(e,e.return);break;case 3:if(hr(n,e),i&64&&(n=e.updateQueue,n!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{zM(n,t)}catch(a){Ee(e,e.return,a)}}break;case 27:t===null&&i&4&&BS(e);case 26:case 5:hr(n,e),t===null&&i&4&&PS(e),i&512&&mc(e,e.return);break;case 12:hr(n,e);break;case 13:hr(n,e),i&4&&VS(n,e),i&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=iR.bind(null,e),yR(n,e))));break;case 22:if(i=e.memoizedState!==null||Ns,!i){t=t!==null&&t.memoizedState!==null||Je,s=Ns;var r=Je;Ns=i,(Je=t)&&!r?dr(n,e,(e.subtreeFlags&8772)!==0):hr(n,e),Ns=s,Je=r}break;case 30:break;default:hr(n,e)}}function zS(n){var t=n.alternate;t!==null&&(n.alternate=null,zS(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&Ig(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ie=null,qn=!1;function Cs(n,t,e){for(e=e.child;e!==null;)HS(n,t,e),e=e.sibling}function HS(n,t,e){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Pc,e)}catch{}switch(e.tag){case 26:Je||ss(e,t),Cs(n,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Je||ss(e,t);var i=Ie,s=qn;Or(e.type)&&(Ie=e.stateNode,qn=!1),Cs(n,t,e),yc(e.stateNode),Ie=i,qn=s;break;case 5:Je||ss(e,t);case 6:if(i=Ie,s=qn,Ie=null,Cs(n,t,e),Ie=i,qn=s,Ie!==null)if(qn)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(e.stateNode)}catch(r){Ee(e,t,r)}else try{Ie.removeChild(e.stateNode)}catch(r){Ee(e,t,r)}break;case 18:Ie!==null&&(qn?(n=Ie,Pv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),Uc(n)):Pv(Ie,e.stateNode));break;case 4:i=Ie,s=qn,Ie=e.stateNode.containerInfo,qn=!0,Cs(n,t,e),Ie=i,qn=s;break;case 0:case 11:case 14:case 15:Je||Ur(2,e,t),Je||Ur(4,e,t),Cs(n,t,e);break;case 1:Je||(ss(e,t),i=e.stateNode,typeof i.componentWillUnmount=="function"&&IS(e,t,i)),Cs(n,t,e);break;case 21:Cs(n,t,e);break;case 22:Je=(i=Je)||e.memoizedState!==null,Cs(n,t,e),Je=i;break;default:Cs(n,t,e)}}function VS(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Uc(n)}catch(e){Ee(t,t.return,e)}}function Kw(n){switch(n.tag){case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new Mv),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new Mv),t;default:throw Error(tt(435,n.tag))}}function wm(n,t){var e=Kw(n);t.forEach(function(i){var s=sR.bind(null,n,i);e.has(i)||(e.add(i),i.then(s,s))})}function ii(n,t){var e=t.deletions;if(e!==null)for(var i=0;i<e.length;i++){var s=e[i],r=n,a=t,o=a;t:for(;o!==null;){switch(o.tag){case 27:if(Or(o.type)){Ie=o.stateNode,qn=!1;break t}break;case 5:Ie=o.stateNode,qn=!1;break t;case 3:case 4:Ie=o.stateNode.containerInfo,qn=!0;break t}o=o.return}if(Ie===null)throw Error(tt(160));HS(r,a,s),Ie=null,qn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)GS(t,n),t=t.sibling}var Hi=null;function GS(n,t){var e=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ii(t,n),si(n),i&4&&(Ur(3,n,n.return),qc(3,n),Ur(5,n,n.return));break;case 1:ii(t,n),si(n),i&512&&(Je||e===null||ss(e,e.return)),i&64&&Ns&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var s=Hi;if(ii(t,n),si(n),i&512&&(Je||e===null||ss(e,e.return)),i&4){var r=e!==null?e.memoizedState:null;if(i=n.memoizedState,e===null)if(i===null)if(n.stateNode===null){t:{i=n.type,e=n.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Fc]||r[Dn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),Rn(r,i,e),r[Dn]=n,vn(r),i=r;break t;case"link":var a=Hv("link","href",s).get(i+(e.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&r.getAttribute("rel")===(e.rel==null?null:e.rel)&&r.getAttribute("title")===(e.title==null?null:e.title)&&r.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){a.splice(o,1);break e}}r=s.createElement(i),Rn(r,i,e),s.head.appendChild(r);break;case"meta":if(a=Hv("meta","content",s).get(i+(e.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(e.content==null?null:""+e.content)&&r.getAttribute("name")===(e.name==null?null:e.name)&&r.getAttribute("property")===(e.property==null?null:e.property)&&r.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&r.getAttribute("charset")===(e.charSet==null?null:e.charSet)){a.splice(o,1);break e}}r=s.createElement(i),Rn(r,i,e),s.head.appendChild(r);break;default:throw Error(tt(468,i))}r[Dn]=n,vn(r),i=r}n.stateNode=i}else Vv(s,n.type,n.stateNode);else n.stateNode=zv(s,i,n.memoizedProps);else r!==i?(r===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):r.count--,i===null?Vv(s,n.type,n.stateNode):zv(s,i,n.memoizedProps)):i===null&&n.stateNode!==null&&Tm(n,n.memoizedProps,e.memoizedProps)}break;case 27:ii(t,n),si(n),i&512&&(Je||e===null||ss(e,e.return)),e!==null&&i&4&&Tm(n,n.memoizedProps,e.memoizedProps);break;case 5:if(ii(t,n),si(n),i&512&&(Je||e===null||ss(e,e.return)),n.flags&32){s=n.stateNode;try{Uo(s,"")}catch(d){Ee(n,n.return,d)}}i&4&&n.stateNode!=null&&(s=n.memoizedProps,Tm(n,s,e!==null?e.memoizedProps:s)),i&1024&&(Am=!0);break;case 6:if(ii(t,n),si(n),i&4){if(n.stateNode===null)throw Error(tt(162));i=n.memoizedProps,e=n.stateNode;try{e.nodeValue=i}catch(d){Ee(n,n.return,d)}}break;case 3:if(If=null,s=Hi,Hi=oh(t.containerInfo),ii(t,n),Hi=s,si(n),i&4&&e!==null&&e.memoizedState.isDehydrated)try{Uc(t.containerInfo)}catch(d){Ee(n,n.return,d)}Am&&(Am=!1,kS(n));break;case 4:i=Hi,Hi=oh(n.stateNode.containerInfo),ii(t,n),si(n),Hi=i;break;case 12:ii(t,n),si(n);break;case 13:ii(t,n),si(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(d0=as()),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,wm(n,i)));break;case 22:s=n.memoizedState!==null;var l=e!==null&&e.memoizedState!==null,c=Ns,u=Je;if(Ns=c||s,Je=u||l,ii(t,n),Je=u,Ns=c,si(n),i&8192)t:for(t=n.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(e===null||l||Ns||Je||ha(n)),e=null,t=n;;){if(t.tag===5||t.tag===26){if(e===null){l=e=t;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(d){Ee(l,l.return,d)}}}else if(t.tag===6){if(e===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(d){Ee(l,l.return,d)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=n.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,wm(n,e))));break;case 19:ii(t,n),si(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,wm(n,i)));break;case 30:break;case 21:break;default:ii(t,n),si(n)}}function si(n){var t=n.flags;if(t&2){try{for(var e,i=n.return;i!==null;){if(OS(i)){e=i;break}i=i.return}if(e==null)throw Error(tt(160));switch(e.tag){case 27:var s=e.stateNode,r=Em(n);th(n,r,s);break;case 5:var a=e.stateNode;e.flags&32&&(Uo(a,""),e.flags&=-33);var o=Em(n);th(n,o,a);break;case 3:case 4:var l=e.stateNode.containerInfo,c=Em(n);hg(n,c,l);break;default:throw Error(tt(161))}}catch(u){Ee(n,n.return,u)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function kS(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;kS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function hr(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)FS(n,t.alternate,t),t=t.sibling}function ha(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:Ur(4,t,t.return),ha(t);break;case 1:ss(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&IS(t,t.return,e),ha(t);break;case 27:yc(t.stateNode);case 26:case 5:ss(t,t.return),ha(t);break;case 22:t.memoizedState===null&&ha(t);break;case 30:ha(t);break;default:ha(t)}n=n.sibling}}function dr(n,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=n,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:dr(s,r,e),qc(4,r);break;case 1:if(dr(s,r,e),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){Ee(i,i.return,c)}if(i=r,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)FM(l[s],o)}catch(c){Ee(i,i.return,c)}}e&&a&64&&US(r),mc(r,r.return);break;case 27:BS(r);case 26:case 5:dr(s,r,e),e&&i===null&&a&4&&PS(r),mc(r,r.return);break;case 12:dr(s,r,e);break;case 13:dr(s,r,e),e&&a&4&&VS(s,r);break;case 22:r.memoizedState===null&&dr(s,r,e),mc(r,r.return);break;case 30:break;default:dr(s,r,e)}t=t.sibling}}function c0(n,t){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&Gc(e))}function u0(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&Gc(n))}function ns(n,t,e,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)XS(n,t,e,i),t=t.sibling}function XS(n,t,e,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:ns(n,t,e,i),s&2048&&qc(9,t);break;case 1:ns(n,t,e,i);break;case 3:ns(n,t,e,i),s&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&Gc(n)));break;case 12:if(s&2048){ns(n,t,e,i),n=t.stateNode;try{var r=t.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(l){Ee(t,t.return,l)}}else ns(n,t,e,i);break;case 13:ns(n,t,e,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?ns(n,t,e,i):gc(n,t):r._visibility&2?ns(n,t,e,i):(r._visibility|=2,lo(n,t,e,i,(t.subtreeFlags&10256)!==0)),s&2048&&c0(a,t);break;case 24:ns(n,t,e,i),s&2048&&u0(t.alternate,t);break;default:ns(n,t,e,i)}}function lo(n,t,e,i,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=n,a=t,o=e,l=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:lo(r,a,o,l,s),qc(8,a);break;case 23:break;case 22:var u=a.stateNode;a.memoizedState!==null?u._visibility&2?lo(r,a,o,l,s):gc(r,a):(u._visibility|=2,lo(r,a,o,l,s)),s&&c&2048&&c0(a.alternate,a);break;case 24:lo(r,a,o,l,s),s&&c&2048&&u0(a.alternate,a);break;default:lo(r,a,o,l,s)}t=t.sibling}}function gc(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=n,i=t,s=i.flags;switch(i.tag){case 22:gc(e,i),s&2048&&c0(i.alternate,i);break;case 24:gc(e,i),s&2048&&u0(i.alternate,i);break;default:gc(e,i)}t=t.sibling}}var rc=8192;function ro(n){if(n.subtreeFlags&rc)for(n=n.child;n!==null;)WS(n),n=n.sibling}function WS(n){switch(n.tag){case 26:ro(n),n.flags&rc&&n.memoizedState!==null&&LR(Hi,n.memoizedState,n.memoizedProps);break;case 5:ro(n);break;case 3:case 4:var t=Hi;Hi=oh(n.stateNode.containerInfo),ro(n),Hi=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=rc,rc=16777216,ro(n),rc=t):ro(n));break;default:ro(n)}}function qS(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function $l(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var i=t[e];yn=i,ZS(i,n)}qS(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)YS(n),n=n.sibling}function YS(n){switch(n.tag){case 0:case 11:case 15:$l(n),n.flags&2048&&Ur(9,n,n.return);break;case 3:$l(n);break;case 12:$l(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,Lf(n)):$l(n);break;default:$l(n)}}function Lf(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var i=t[e];yn=i,ZS(i,n)}qS(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:Ur(8,t,t.return),Lf(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,Lf(t));break;default:Lf(t)}n=n.sibling}}function ZS(n,t){for(;yn!==null;){var e=yn;switch(e.tag){case 0:case 11:case 15:Ur(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Gc(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,yn=i;else t:for(e=n;yn!==null;){i=yn;var s=i.sibling,r=i.return;if(zS(i),i===e){yn=null;break t}if(s!==null){s.return=r,yn=s;break t}yn=r}}}var Jw={getCacheForType:function(n){var t=Ln(fn),e=t.data.get(n);return e===void 0&&(e=n(),t.data.set(n,e)),e}},Qw=typeof WeakMap=="function"?WeakMap:Map,pe=0,Re=null,jt=null,ne=0,de=0,ri=null,Sr=!1,Wo=!1,f0=!1,Vs=0,We=0,Ir=0,xa=0,h0=0,Ci=0,Fo=0,_c=null,Yn=null,dg=!1,d0=0,eh=1/0,nh=null,wr=null,wn=0,Rr=null,zo=null,No=0,pg=0,mg=null,KS=null,xc=0,gg=null;function ci(){if((pe&2)!==0&&ne!==0)return ne&-ne;if(Ot.T!==null){var n=Io;return n!==0?n:m0()}return aM()}function JS(){Ci===0&&(Ci=(ne&536870912)===0||oe?nM():536870912);var n=Ni.current;return n!==null&&(n.flags|=32),Ci}function ui(n,t,e){(n===Re&&(de===2||de===9)||n.cancelPendingCommit!==null)&&(Ho(n,0),br(n,ne,Ci,!1)),Bc(n,e),((pe&2)===0||n!==Re)&&(n===Re&&((pe&2)===0&&(xa|=e),We===4&&br(n,ne,Ci,!1)),cs(n))}function QS(n,t,e){if((pe&6)!==0)throw Error(tt(327));var i=!e&&(t&124)===0&&(t&n.expiredLanes)===0||Oc(n,t),s=i?tR(n,t):Rm(n,t,!0),r=i;do{if(s===0){Wo&&!i&&br(n,t,0,!1);break}else{if(e=n.current.alternate,r&&!jw(e)){s=Rm(n,t,!1),r=!1;continue}if(s===2){if(r=t,n.errorRecoveryDisabledLanes&r)var a=0;else a=n.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var o=n;s=_c;var l=o.current.memoizedState.isDehydrated;if(l&&(Ho(o,a).flags|=256),a=Rm(o,a,!1),a!==2){if(f0&&!l){o.errorRecoveryDisabledLanes|=r,xa|=r,s=4;break t}r=Yn,Yn=s,r!==null&&(Yn===null?Yn=r:Yn.push.apply(Yn,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Ho(n,0),br(n,t,0,!0);break}t:{switch(i=n,r=s,r){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:br(i,t,Ci,!Sr);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=d0+300-as(),10<s)){if(br(i,t,Ci,!Sr),hh(i,0,!0)!==0)break t;i.timeoutHandle=gb(Sv.bind(null,i,e,Yn,nh,dg,t,Ci,xa,Fo,Sr,r,2,-0,0),s);break t}Sv(i,e,Yn,nh,dg,t,Ci,xa,Fo,Sr,r,0,-0,0)}}break}while(!0);cs(n)}function Sv(n,t,e,i,s,r,a,o,l,c,u,h,f,d){if(n.timeoutHandle=-1,h=t.subtreeFlags,(h&8192||(h&16785408)===16785408)&&(Cc={stylesheets:null,count:0,unsuspend:DR},WS(t),h=UR(),h!==null)){n.cancelPendingCommit=h(Tv.bind(null,n,t,r,e,i,s,a,o,l,u,1,f,d)),br(n,r,a,!c);return}Tv(n,t,r,e,i,s,a,o,l)}function jw(n){for(var t=n;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var s=e[i],r=s.getSnapshot;s=s.value;try{if(!fi(r(),s))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(n,t,e,i){t&=~h0,t&=~xa,n.suspendedLanes|=t,n.pingedLanes&=~t,i&&(n.warmLanes|=t),i=n.expirationTimes;for(var s=t;0<s;){var r=31-li(s),a=1<<r;i[r]=-1,s&=~a}e!==0&&sM(n,e,t)}function Sh(){return(pe&6)===0?(Yc(0,!1),!1):!0}function p0(){if(jt!==null){if(de===0)var n=jt.return;else n=jt,Is=wa=null,t0(n),Co=null,Ac=0,n=jt;for(;n!==null;)LS(n.alternate,n),n=n.return;jt=null}}function Ho(n,t){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,pR(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),p0(),Re=n,jt=e=Os(n.current,null),ne=t,de=0,ri=null,Sr=!1,Wo=Oc(n,t),f0=!1,Fo=Ci=h0=xa=Ir=We=0,Yn=_c=null,dg=!1,(t&8)!==0&&(t|=t&32);var i=n.entangledLanes;if(i!==0)for(n=n.entanglements,i&=t;0<i;){var s=31-li(i),r=1<<s;t|=n[s],i&=~r}return Vs=t,gh(),e}function jS(n,t){Yt=null,Ot.H=Kf,t===kc||t===xh?(t=tv(),de=3):t===OM?(t=tv(),de=4):de=t===AS?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ri=t,jt===null&&(We=1,jf(n,Ri(t,n.current)))}function $S(){var n=Ot.H;return Ot.H=Kf,n===null?Kf:n}function tb(){var n=Ot.A;return Ot.A=Jw,n}function _g(){We=4,Sr||(ne&4194048)!==ne&&Ni.current!==null||(Wo=!0),(Ir&134217727)===0&&(xa&134217727)===0||Re===null||br(Re,ne,Ci,!1)}function Rm(n,t,e){var i=pe;pe|=2;var s=$S(),r=tb();(Re!==n||ne!==t)&&(nh=null,Ho(n,t)),t=!1;var a=We;t:do try{if(de!==0&&jt!==null){var o=jt,l=ri;switch(de){case 8:p0(),a=6;break t;case 3:case 2:case 9:case 6:Ni.current===null&&(t=!0);var c=de;if(de=0,ri=null,So(n,o,l,c),e&&Wo){a=0;break t}break;default:c=de,de=0,ri=null,So(n,o,l,c)}}$w(),a=We;break}catch(u){jS(n,u)}while(!0);return t&&n.shellSuspendCounter++,Is=wa=null,pe=i,Ot.H=s,Ot.A=r,jt===null&&(Re=null,ne=0,gh()),a}function $w(){for(;jt!==null;)eb(jt)}function tR(n,t){var e=pe;pe|=2;var i=$S(),s=tb();Re!==n||ne!==t?(nh=null,eh=as()+500,Ho(n,t)):Wo=Oc(n,t);t:do try{if(de!==0&&jt!==null){t=jt;var r=ri;e:switch(de){case 1:de=0,ri=null,So(n,t,r,1);break;case 2:case 9:if($y(r)){de=0,ri=null,bv(t);break}t=function(){de!==2&&de!==9||Re!==n||(de=7),cs(n)},r.then(t,t);break t;case 3:de=7;break t;case 4:de=5;break t;case 7:$y(r)?(de=0,ri=null,bv(t)):(de=0,ri=null,So(n,t,r,7));break;case 5:var a=null;switch(jt.tag){case 26:a=jt.memoizedState;case 5:case 27:var o=jt;if(!a||vb(a)){de=0,ri=null;var l=o.sibling;if(l!==null)jt=l;else{var c=o.return;c!==null?(jt=c,bh(c)):jt=null}break e}}de=0,ri=null,So(n,t,r,5);break;case 6:de=0,ri=null,So(n,t,r,6);break;case 8:p0(),We=6;break t;default:throw Error(tt(462))}}eR();break}catch(u){jS(n,u)}while(!0);return Is=wa=null,Ot.H=i,Ot.A=s,pe=e,jt!==null?0:(Re=null,ne=0,gh(),We)}function eR(){for(;jt!==null&&!bA();)eb(jt)}function eb(n){var t=DS(n.alternate,n,Vs);n.memoizedProps=n.pendingProps,t===null?bh(n):jt=t}function bv(n){var t=n,e=t.alternate;switch(t.tag){case 15:case 0:t=gv(e,t,t.pendingProps,t.type,void 0,ne);break;case 11:t=gv(e,t,t.pendingProps,t.type.render,t.ref,ne);break;case 5:t0(t);default:LS(e,t),t=jt=LM(t,Vs),t=DS(e,t,Vs)}n.memoizedProps=n.pendingProps,t===null?bh(n):jt=t}function So(n,t,e,i){Is=wa=null,t0(t),Co=null,Ac=0;var s=t.return;try{if(Xw(n,s,t,e,ne)){We=1,jf(n,Ri(e,n.current)),jt=null;return}}catch(r){if(s!==null)throw jt=s,r;We=1,jf(n,Ri(e,n.current)),jt=null;return}t.flags&32768?(oe||i===1?n=!0:Wo||(ne&536870912)!==0?n=!1:(Sr=n=!0,(i===2||i===9||i===3||i===6)&&(i=Ni.current,i!==null&&i.tag===13&&(i.flags|=16384))),nb(t,n)):bh(t)}function bh(n){var t=n;do{if((t.flags&32768)!==0){nb(t,Sr);return}n=t.return;var e=qw(t.alternate,t,Vs);if(e!==null){jt=e;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=n}while(t!==null);We===0&&(We=5)}function nb(n,t){do{var e=Yw(n.alternate,n);if(e!==null){e.flags&=32767,jt=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(n=n.sibling,n!==null)){jt=n;return}jt=n=e}while(n!==null);We=6,jt=null}function Tv(n,t,e,i,s,r,a,o,l){n.cancelPendingCommit=null;do Th();while(wn!==0);if((pe&6)!==0)throw Error(tt(327));if(t!==null){if(t===n.current)throw Error(tt(177));if(r=t.lanes|t.childLanes,r|=Vg,UA(n,e,r,a,o,l),n===Re&&(jt=Re=null,ne=0),zo=t,Rr=n,No=e,pg=r,mg=s,KS=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,rR(zf,function(){return ob(!0),null})):(n.callbackNode=null,n.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ot.T,Ot.T=null,s=le.p,le.p=2,a=pe,pe|=4;try{Zw(n,t,e)}finally{pe=a,le.p=s,Ot.T=i}}wn=1,ib(),sb(),rb()}}function ib(){if(wn===1){wn=0;var n=Rr,t=zo,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=Ot.T,Ot.T=null;var i=le.p;le.p=2;var s=pe;pe|=4;try{GS(t,n);var r=Mg,a=TM(n.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&bM(o.ownerDocument.documentElement,o)){if(l!==null&&Hg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var h=o.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var d=f.getSelection(),g=o.textContent.length,S=Math.min(l.start,g),m=l.end===void 0?S:Math.min(l.end,g);!d.extend&&S>m&&(a=m,m=S,S=a);var p=Wy(o,S),_=Wy(o,m);if(p&&_&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var M=h.createRange();M.setStart(p.node,p.offset),d.removeAllRanges(),S>m?(d.addRange(M),d.extend(_.node,_.offset)):(M.setEnd(_.node,_.offset),d.addRange(M))}}}}for(h=[],d=o;d=d.parentNode;)d.nodeType===1&&h.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var x=h[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}uh=!!vg,Mg=vg=null}finally{pe=s,le.p=i,Ot.T=e}}n.current=t,wn=2}}function sb(){if(wn===2){wn=0;var n=Rr,t=zo,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=Ot.T,Ot.T=null;var i=le.p;le.p=2;var s=pe;pe|=4;try{FS(n,t.alternate,t)}finally{pe=s,le.p=i,Ot.T=e}}wn=3}}function rb(){if(wn===4||wn===3){wn=0,TA();var n=Rr,t=zo,e=No,i=KS;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?wn=5:(wn=0,zo=Rr=null,ab(n,n.pendingLanes));var s=n.pendingLanes;if(s===0&&(wr=null),Ug(e),t=t.stateNode,oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ot.T,s=le.p,le.p=2,Ot.T=null;try{for(var r=n.onRecoverableError,a=0;a<i.length;a++){var o=i[a];r(o.value,{componentStack:o.stack})}}finally{Ot.T=t,le.p=s}}(No&3)!==0&&Th(),cs(n),s=n.pendingLanes,(e&4194090)!==0&&(s&42)!==0?n===gg?xc++:(xc=0,gg=n):xc=0,Yc(0,!1)}}function ab(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,Gc(t)))}function Th(n){return ib(),sb(),rb(),ob(n)}function ob(){if(wn!==5)return!1;var n=Rr,t=pg;pg=0;var e=Ug(No),i=Ot.T,s=le.p;try{le.p=32>e?32:e,Ot.T=null,e=mg,mg=null;var r=Rr,a=No;if(wn=0,zo=Rr=null,No=0,(pe&6)!==0)throw Error(tt(331));var o=pe;if(pe|=4,YS(r.current),XS(r,r.current,a,e),pe=o,Yc(0,!1),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Pc,r)}catch{}return!0}finally{le.p=s,Ot.T=i,ab(n,t)}}function Ev(n,t,e){t=Ri(e,t),t=cg(n.stateNode,t,2),n=Ar(n,t,2),n!==null&&(Bc(n,2),cs(n))}function Ee(n,t,e){if(n.tag===3)Ev(n,n,e);else for(;t!==null;){if(t.tag===3){Ev(t,n,e);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){n=Ri(e,n),e=TS(2),i=Ar(t,e,2),i!==null&&(ES(e,i,t,n),Bc(i,2),cs(i));break}}t=t.return}}function Cm(n,t,e){var i=n.pingCache;if(i===null){i=n.pingCache=new Qw;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(e)||(f0=!0,s.add(e),n=nR.bind(null,n,t,e),t.then(n,n))}function nR(n,t,e){var i=n.pingCache;i!==null&&i.delete(t),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,Re===n&&(ne&e)===e&&(We===4||We===3&&(ne&62914560)===ne&&300>as()-d0?(pe&2)===0&&Ho(n,0):h0|=e,Fo===ne&&(Fo=0)),cs(n)}function lb(n,t){t===0&&(t=iM()),n=Xo(n,t),n!==null&&(Bc(n,t),cs(n))}function iR(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),lb(n,e)}function sR(n,t){var e=0;switch(n.tag){case 13:var i=n.stateNode,s=n.memoizedState;s!==null&&(e=s.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),lb(n,e)}function rR(n,t){return Dg(n,t)}var ih=null,co=null,xg=!1,sh=!1,Nm=!1,ya=0;function cs(n){n!==co&&n.next===null&&(co===null?ih=co=n:co=co.next=n),sh=!0,xg||(xg=!0,oR())}function Yc(n,t){if(!Nm&&sh){Nm=!0;do for(var e=!1,i=ih;i!==null;){if(!t)if(n!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-li(42|n)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(e=!0,Av(i,r))}else r=ne,r=hh(i,i===Re?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Oc(i,r)||(e=!0,Av(i,r));i=i.next}while(e);Nm=!1}}function aR(){cb()}function cb(){sh=xg=!1;var n=0;ya!==0&&(dR()&&(n=ya),ya=0);for(var t=as(),e=null,i=ih;i!==null;){var s=i.next,r=ub(i,t);r===0?(i.next=null,e===null?ih=s:e.next=s,s===null&&(co=e)):(e=i,(n!==0||(r&3)!==0)&&(sh=!0)),i=s}Yc(n,!1)}function ub(n,t){for(var e=n.suspendedLanes,i=n.pingedLanes,s=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var a=31-li(r),o=1<<a,l=s[a];l===-1?((o&e)===0||(o&i)!==0)&&(s[a]=LA(o,t)):l<=t&&(n.expiredLanes|=o),r&=~o}if(t=Re,e=ne,e=hh(n,n===t?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i=n.callbackNode,e===0||n===t&&(de===2||de===9)||n.cancelPendingCommit!==null)return i!==null&&i!==null&&im(i),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||Oc(n,e)){if(t=e&-e,t===n.callbackPriority)return t;switch(i!==null&&im(i),Ug(e)){case 2:case 8:e=tM;break;case 32:e=zf;break;case 268435456:e=eM;break;default:e=zf}return i=fb.bind(null,n),e=Dg(e,i),n.callbackPriority=t,n.callbackNode=e,t}return i!==null&&i!==null&&im(i),n.callbackPriority=2,n.callbackNode=null,2}function fb(n,t){if(wn!==0&&wn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(Th(!0)&&n.callbackNode!==e)return null;var i=ne;return i=hh(n,n===Re?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i===0?null:(QS(n,i,t),ub(n,as()),n.callbackNode!=null&&n.callbackNode===e?fb.bind(null,n):null)}function Av(n,t){if(Th())return null;QS(n,t,!0)}function oR(){mR(function(){(pe&6)!==0?Dg($v,aR):cb()})}function m0(){return ya===0&&(ya=nM()),ya}function wv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Tf(""+n)}function Rv(n,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,n.id&&e.setAttribute("form",n.id),t.parentNode.insertBefore(e,t),n=new FormData(n),e.parentNode.removeChild(e),n}function lR(n,t,e,i,s){if(t==="submit"&&e&&e.stateNode===s){var r=wv((s[Zn]||null).action),a=i.submitter;a&&(t=(t=a[Zn]||null)?wv(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var o=new dh("action","action",null,i,s);n.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ya!==0){var l=a?Rv(s,a):new FormData(s);og(e,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?Rv(s,a):new FormData(s),og(e,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(xf=0;xf<Km.length;xf++)yf=Km[xf],Cv=yf.toLowerCase(),Nv=yf[0].toUpperCase()+yf.slice(1),Gi(Cv,"on"+Nv);var yf,Cv,Nv,xf;Gi(AM,"onAnimationEnd");Gi(wM,"onAnimationIteration");Gi(RM,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(ww,"onTransitionRun");Gi(Rw,"onTransitionStart");Gi(Cw,"onTransitionCancel");Gi(CM,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wc));function hb(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var i=n[e],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){Qf(u)}s.currentTarget=null,r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){Qf(u)}s.currentTarget=null,r=l}}}}function Qt(n,t){var e=t[Gm];e===void 0&&(e=t[Gm]=new Set);var i=n+"__bubble";e.has(i)||(db(t,n,2,!1),e.add(i))}function Dm(n,t,e){var i=0;t&&(i|=4),db(e,n,i,t)}var vf="_reactListening"+Math.random().toString(36).slice(2);function g0(n){if(!n[vf]){n[vf]=!0,oM.forEach(function(e){e!=="selectionchange"&&(cR.has(e)||Dm(e,!1,n),Dm(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[vf]||(t[vf]=!0,Dm("selectionchange",!1,t))}}function db(n,t,e,i){switch(Eb(t)){case 2:var s=OR;break;case 8:s=BR;break;default:s=v0}e=s.bind(null,t,e,n),s=void 0,!qm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?n.addEventListener(t,e,{capture:!0,passive:s}):n.addEventListener(t,e,!0):s!==void 0?n.addEventListener(t,e,{passive:s}):n.addEventListener(t,e,!1)}function Lm(n,t,e,i,s){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=ho(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=r=a;continue t}o=o.parentNode}}i=i.return}mM(function(){var c=r,u=Og(e),h=[];t:{var f=NM.get(n);if(f!==void 0){var d=dh,g=n;switch(n){case"keypress":if(Af(e)===0)break t;case"keydown":case"keyup":d=rw;break;case"focusin":g="focus",d=fm;break;case"focusout":g="blur",d=fm;break;case"beforeblur":case"afterblur":d=fm;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Oy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=YA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=lw;break;case AM:case wM:case RM:d=JA;break;case CM:d=uw;break;case"scroll":case"scrollend":d=WA;break;case"wheel":d=hw;break;case"copy":case"cut":case"paste":d=jA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Fy;break;case"toggle":case"beforetoggle":d=pw}var S=(t&4)!==0,m=!S&&(n==="scroll"||n==="scrollend"),p=S?f!==null?f+"Capture":null:f;S=[];for(var _=c,M;_!==null;){var x=_;if(M=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||M===null||p===null||(x=Mc(_,p),x!=null&&S.push(Rc(_,x,M))),m)break;_=_.return}0<S.length&&(f=new d(f,g,null,e,u),h.push({event:f,listeners:S}))}}if((t&7)===0){t:{if(f=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",f&&e!==Wm&&(g=e.relatedTarget||e.fromElement)&&(ho(g)||g[Go]))break t;if((d||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,d?(g=e.relatedTarget||e.toElement,d=c,g=g?ho(g):null,g!==null&&(m=Ic(g),S=g.tag,g!==m||S!==5&&S!==27&&S!==6)&&(g=null)):(d=null,g=c),d!==g)){if(S=Oy,x="onMouseLeave",p="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(S=Fy,x="onPointerLeave",p="onPointerEnter",_="pointer"),m=d==null?f:sc(d),M=g==null?f:sc(g),f=new S(x,_+"leave",d,e,u),f.target=m,f.relatedTarget=M,x=null,ho(u)===c&&(S=new S(p,_+"enter",g,e,u),S.target=M,S.relatedTarget=m,x=S),m=x,d&&g)e:{for(S=d,p=g,_=0,M=S;M;M=ao(M))_++;for(M=0,x=p;x;x=ao(x))M++;for(;0<_-M;)S=ao(S),_--;for(;0<M-_;)p=ao(p),M--;for(;_--;){if(S===p||p!==null&&S===p.alternate)break e;S=ao(S),p=ao(p)}S=null}else S=null;d!==null&&Dv(h,f,d,S,!1),g!==null&&m!==null&&Dv(h,m,g,S,!0)}}t:{if(f=c?sc(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var T=Gy;else if(Vy(f))if(MM)T=Tw;else{T=Sw;var E=Mw}else d=f.nodeName,!d||d.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Pg(c.elementType)&&(T=Gy):T=bw;if(T&&(T=T(n,c))){vM(h,T,e,u);break t}E&&E(n,f,c),n==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Xm(f,"number",f.value)}switch(E=c?sc(c):window,n){case"focusin":(Vy(E)||E.contentEditable==="true")&&(go=E,Ym=c,lc=null);break;case"focusout":lc=Ym=go=null;break;case"mousedown":Zm=!0;break;case"contextmenu":case"mouseup":case"dragend":Zm=!1,qy(h,e,u);break;case"selectionchange":if(Aw)break;case"keydown":case"keyup":qy(h,e,u)}var A;if(zg)t:{switch(n){case"compositionstart":var y="onCompositionStart";break t;case"compositionend":y="onCompositionEnd";break t;case"compositionupdate":y="onCompositionUpdate";break t}y=void 0}else mo?xM(n,e)&&(y="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(y="onCompositionStart");y&&(_M&&e.locale!=="ko"&&(mo||y!=="onCompositionStart"?y==="onCompositionEnd"&&mo&&(A=gM()):(Mr=u,Bg="value"in Mr?Mr.value:Mr.textContent,mo=!0)),E=rh(c,y),0<E.length&&(y=new By(y,n,null,e,u),h.push({event:y,listeners:E}),A?y.data=A:(A=yM(e),A!==null&&(y.data=A)))),(A=gw?_w(n,e):xw(n,e))&&(y=rh(c,"onBeforeInput"),0<y.length&&(E=new By("onBeforeInput","beforeinput",null,e,u),h.push({event:E,listeners:y}),E.data=A)),lR(h,n,c,e,u)}hb(h,t)})}function Rc(n,t,e){return{instance:n,listener:t,currentTarget:e}}function rh(n,t){for(var e=t+"Capture",i=[];n!==null;){var s=n,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Mc(n,e),s!=null&&i.unshift(Rc(n,s,r)),s=Mc(n,t),s!=null&&i.push(Rc(n,s,r))),n.tag===3)return i;n=n.return}return[]}function ao(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Dv(n,t,e,i,s){for(var r=t._reactName,a=[];e!==null&&e!==i;){var o=e,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Mc(e,r),c!=null&&a.unshift(Rc(e,c,l))):s||(c=Mc(e,r),c!=null&&a.push(Rc(e,c,l)))),e=e.return}a.length!==0&&n.push({event:t,listeners:a})}var uR=/\r\n?/g,fR=/\u0000|\uFFFD/g;function Lv(n){return(typeof n=="string"?n:""+n).replace(uR,`
`).replace(fR,"")}function pb(n,t){return t=Lv(t),Lv(n)===t}function Eh(){}function xe(n,t,e,i,s,r){switch(e){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Uo(n,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Uo(n,""+i);break;case"className":cf(n,"class",i);break;case"tabIndex":cf(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":cf(n,e,i);break;case"style":pM(n,i,r);break;case"data":if(t!=="object"){cf(n,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||e!=="href")){n.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=Tf(""+i),n.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(e==="formAction"?(t!=="input"&&xe(n,t,"name",s.name,s,null),xe(n,t,"formEncType",s.formEncType,s,null),xe(n,t,"formMethod",s.formMethod,s,null),xe(n,t,"formTarget",s.formTarget,s,null)):(xe(n,t,"encType",s.encType,s,null),xe(n,t,"method",s.method,s,null),xe(n,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=Tf(""+i),n.setAttribute(e,i);break;case"onClick":i!=null&&(n.onclick=Eh);break;case"onScroll":i!=null&&Qt("scroll",n);break;case"onScrollEnd":i!=null&&Qt("scrollend",n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(e=i.__html,e!=null){if(s.children!=null)throw Error(tt(60));n.innerHTML=e}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}e=Tf(""+i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""+i):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":i===!0?n.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,i):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(e,i):n.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(e):n.setAttribute(e,i);break;case"popover":Qt("beforetoggle",n),Qt("toggle",n),bf(n,"popover",i);break;case"xlinkActuate":ws(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ws(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ws(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ws(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ws(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ws(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ws(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ws(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ws(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":bf(n,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=kA.get(e)||e,bf(n,e,i))}}function yg(n,t,e,i,s,r){switch(e){case"style":pM(n,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(e=i.__html,e!=null){if(s.children!=null)throw Error(tt(60));n.innerHTML=e}}break;case"children":typeof i=="string"?Uo(n,i):(typeof i=="number"||typeof i=="bigint")&&Uo(n,""+i);break;case"onScroll":i!=null&&Qt("scroll",n);break;case"onScrollEnd":i!=null&&Qt("scrollend",n);break;case"onClick":i!=null&&(n.onclick=Eh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lM.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(s=e.endsWith("Capture"),t=e.slice(2,s?e.length-7:void 0),r=n[Zn]||null,r=r!=null?r[e]:null,typeof r=="function"&&n.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(t,i,s);break t}e in n?n[e]=i:i===!0?n.setAttribute(e,""):bf(n,e,i)}}}function Rn(n,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qt("error",n),Qt("load",n);var i=!1,s=!1,r;for(r in e)if(e.hasOwnProperty(r)){var a=e[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:xe(n,t,r,a,e,null)}}s&&xe(n,t,"srcSet",e.srcSet,e,null),i&&xe(n,t,"src",e.src,e,null);return;case"input":Qt("invalid",n);var o=r=a=s=null,l=null,c=null;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"name":s=u;break;case"type":a=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:xe(n,t,i,u,e,null)}}fM(n,r,o,l,c,a,s,!1),Hf(n);return;case"select":Qt("invalid",n),i=a=r=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:xe(n,t,s,o,e,null)}t=r,e=a,n.multiple=!!i,t!=null?To(n,!!i,t,!1):e!=null&&To(n,!!i,e,!0);return;case"textarea":Qt("invalid",n),r=s=i=null;for(a in e)if(e.hasOwnProperty(a)&&(o=e[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:xe(n,t,a,o,e,null)}dM(n,i,s,r),Hf(n);return;case"option":for(l in e)e.hasOwnProperty(l)&&(i=e[l],i!=null)&&(l==="selected"?n.selected=i&&typeof i!="function"&&typeof i!="symbol":xe(n,t,l,i,e,null));return;case"dialog":Qt("beforetoggle",n),Qt("toggle",n),Qt("cancel",n),Qt("close",n);break;case"iframe":case"object":Qt("load",n);break;case"video":case"audio":for(i=0;i<wc.length;i++)Qt(wc[i],n);break;case"image":Qt("error",n),Qt("load",n);break;case"details":Qt("toggle",n);break;case"embed":case"source":case"link":Qt("error",n),Qt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in e)if(e.hasOwnProperty(c)&&(i=e[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:xe(n,t,c,i,e,null)}return;default:if(Pg(t)){for(u in e)e.hasOwnProperty(u)&&(i=e[u],i!==void 0&&yg(n,t,u,i,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(i=e[o],i!=null&&xe(n,t,o,i,e,null))}function hR(n,t,e,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,u=null;for(d in e){var h=e[d];if(e.hasOwnProperty(d)&&h!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(d)||xe(n,t,d,null,i,h)}}for(var f in i){var d=i[f];if(h=e[f],i.hasOwnProperty(f)&&(d!=null||h!=null))switch(f){case"type":r=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":a=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:d!==h&&xe(n,t,f,d,i,h)}}km(n,a,o,l,c,u,r,s);return;case"select":d=a=o=f=null;for(r in e)if(l=e[r],e.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(r)||xe(n,t,r,null,i,l)}for(s in i)if(r=i[s],l=e[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&xe(n,t,s,r,i,l)}t=o,e=a,i=d,f!=null?To(n,!!e,f,!1):!!i!=!!e&&(t!=null?To(n,!!e,t,!0):To(n,!!e,e?[]:"",!1));return;case"textarea":d=f=null;for(o in e)if(s=e[o],e.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:xe(n,t,o,null,i,s)}for(a in i)if(s=i[a],r=e[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":f=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==r&&xe(n,t,a,s,i,r)}hM(n,f,d);return;case"option":for(var g in e)f=e[g],e.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g)&&(g==="selected"?n.selected=!1:xe(n,t,g,null,i,f));for(l in i)f=i[l],d=e[l],i.hasOwnProperty(l)&&f!==d&&(f!=null||d!=null)&&(l==="selected"?n.selected=f&&typeof f!="function"&&typeof f!="symbol":xe(n,t,l,f,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in e)f=e[S],e.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S)&&xe(n,t,S,null,i,f);for(c in i)if(f=i[c],d=e[c],i.hasOwnProperty(c)&&f!==d&&(f!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:xe(n,t,c,f,i,d)}return;default:if(Pg(t)){for(var m in e)f=e[m],e.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&yg(n,t,m,void 0,i,f);for(u in i)f=i[u],d=e[u],!i.hasOwnProperty(u)||f===d||f===void 0&&d===void 0||yg(n,t,u,f,i,d);return}}for(var p in e)f=e[p],e.hasOwnProperty(p)&&f!=null&&!i.hasOwnProperty(p)&&xe(n,t,p,null,i,f);for(h in i)f=i[h],d=e[h],!i.hasOwnProperty(h)||f===d||f==null&&d==null||xe(n,t,h,f,i,d)}var vg=null,Mg=null;function ah(n){return n.nodeType===9?n:n.ownerDocument}function Uv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mb(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function Sg(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Um=null;function dR(){var n=window.event;return n&&n.type==="popstate"?n===Um?!1:(Um=n,!0):(Um=null,!1)}var gb=typeof setTimeout=="function"?setTimeout:void 0,pR=typeof clearTimeout=="function"?clearTimeout:void 0,Iv=typeof Promise=="function"?Promise:void 0,mR=typeof queueMicrotask=="function"?queueMicrotask:typeof Iv<"u"?function(n){return Iv.resolve(null).then(n).catch(gR)}:gb;function gR(n){setTimeout(function(){throw n})}function Or(n){return n==="head"}function Pv(n,t){var e=t,i=0,s=0;do{var r=e.nextSibling;if(n.removeChild(e),r&&r.nodeType===8)if(e=r.data,e==="/$"){if(0<i&&8>i){e=i;var a=n.ownerDocument;if(e&1&&yc(a.documentElement),e&2&&yc(a.body),e&4)for(e=a.head,yc(e),a=e.firstChild;a;){var o=a.nextSibling,l=a.nodeName;a[Fc]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&a.rel.toLowerCase()==="stylesheet"||e.removeChild(a),a=o}}if(s===0){n.removeChild(r),Uc(t);return}s--}else e==="$"||e==="$?"||e==="$!"?s++:i=e.charCodeAt(0)-48;else i=0;e=r}while(e);Uc(t)}function bg(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":bg(e),Ig(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function _R(n,t,e,i){for(;n.nodeType===1;){var s=e;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[Fc])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==s.rel||n.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||n.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||n.getAttribute("title")!==(s.title==null?null:s.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(s.src==null?null:s.src)||n.getAttribute("type")!==(s.type==null?null:s.type)||n.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=Vi(n.nextSibling),n===null)break}return null}function xR(n,t,e){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Vi(n.nextSibling),n===null))return null;return n}function Tg(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function yR(n,t){var e=n.ownerDocument;if(n.data!=="$?"||e.readyState==="complete")t();else{var i=function(){t(),e.removeEventListener("DOMContentLoaded",i)};e.addEventListener("DOMContentLoaded",i),n._reactRetry=i}}function Vi(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return n}var Eg=null;function Ov(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return n;t--}else e==="/$"&&t++}n=n.previousSibling}return null}function _b(n,t,e){switch(t=ah(e),n){case"html":if(n=t.documentElement,!n)throw Error(tt(452));return n;case"head":if(n=t.head,!n)throw Error(tt(453));return n;case"body":if(n=t.body,!n)throw Error(tt(454));return n;default:throw Error(tt(451))}}function yc(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Ig(n)}var Di=new Map,Bv=new Set;function oh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Gs=le.d;le.d={f:vR,r:MR,D:SR,C:bR,L:TR,m:ER,X:wR,S:AR,M:RR};function vR(){var n=Gs.f(),t=Sh();return n||t}function MR(n){var t=ko(n);t!==null&&t.tag===5&&t.type==="form"?uS(t):Gs.r(n)}var qo=typeof document>"u"?null:document;function xb(n,t,e){var i=qo;if(i&&typeof t=="string"&&t){var s=wi(t);s='link[rel="'+n+'"][href="'+s+'"]',typeof e=="string"&&(s+='[crossorigin="'+e+'"]'),Bv.has(s)||(Bv.add(s),n={rel:n,crossOrigin:e,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Rn(t,"link",n),vn(t),i.head.appendChild(t)))}}function SR(n){Gs.D(n),xb("dns-prefetch",n,null)}function bR(n,t){Gs.C(n,t),xb("preconnect",n,t)}function TR(n,t,e){Gs.L(n,t,e);var i=qo;if(i&&n&&t){var s='link[rel="preload"][as="'+wi(t)+'"]';t==="image"&&e&&e.imageSrcSet?(s+='[imagesrcset="'+wi(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(s+='[imagesizes="'+wi(e.imageSizes)+'"]')):s+='[href="'+wi(n)+'"]';var r=s;switch(t){case"style":r=Vo(n);break;case"script":r=Yo(n)}Di.has(r)||(n=De({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:n,as:t},e),Di.set(r,n),i.querySelector(s)!==null||t==="style"&&i.querySelector(Zc(r))||t==="script"&&i.querySelector(Kc(r))||(t=i.createElement("link"),Rn(t,"link",n),vn(t),i.head.appendChild(t)))}}function ER(n,t){Gs.m(n,t);var e=qo;if(e&&n){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+wi(i)+'"][href="'+wi(n)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Yo(n)}if(!Di.has(r)&&(n=De({rel:"modulepreload",href:n},t),Di.set(r,n),e.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Kc(r)))return}i=e.createElement("link"),Rn(i,"link",n),vn(i),e.head.appendChild(i)}}}function AR(n,t,e){Gs.S(n,t,e);var i=qo;if(i&&n){var s=bo(i).hoistableStyles,r=Vo(n);t=t||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(Zc(r)))o.loading=5;else{n=De({rel:"stylesheet",href:n,"data-precedence":t},e),(e=Di.get(r))&&_0(n,e);var l=a=i.createElement("link");vn(l),Rn(l,"link",n),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Uf(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function wR(n,t){Gs.X(n,t);var e=qo;if(e&&n){var i=bo(e).hoistableScripts,s=Yo(n),r=i.get(s);r||(r=e.querySelector(Kc(s)),r||(n=De({src:n,async:!0},t),(t=Di.get(s))&&x0(n,t),r=e.createElement("script"),vn(r),Rn(r,"link",n),e.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function RR(n,t){Gs.M(n,t);var e=qo;if(e&&n){var i=bo(e).hoistableScripts,s=Yo(n),r=i.get(s);r||(r=e.querySelector(Kc(s)),r||(n=De({src:n,async:!0,type:"module"},t),(t=Di.get(s))&&x0(n,t),r=e.createElement("script"),vn(r),Rn(r,"link",n),e.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function Fv(n,t,e,i){var s=(s=Tr.current)?oh(s):null;if(!s)throw Error(tt(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Vo(e.href),e=bo(s).hoistableStyles,i=e.get(t),i||(i={type:"style",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=Vo(e.href);var r=bo(s).hoistableStyles,a=r.get(n);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,a),(r=s.querySelector(Zc(n)))&&!r._p&&(a.instance=r,a.state.loading=5),Di.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Di.set(n,e),r||CR(s,n,e,a.state))),t&&i===null)throw Error(tt(528,""));return a}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yo(e),e=bo(s).hoistableScripts,i=e.get(t),i||(i={type:"script",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,n))}}function Vo(n){return'href="'+wi(n)+'"'}function Zc(n){return'link[rel="stylesheet"]['+n+"]"}function yb(n){return De({},n,{"data-precedence":n.precedence,precedence:null})}function CR(n,t,e,i){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=n.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Rn(t,"link",e),vn(t),n.head.appendChild(t))}function Yo(n){return'[src="'+wi(n)+'"]'}function Kc(n){return"script[async]"+n}function zv(n,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var i=n.querySelector('style[data-href~="'+wi(e.href)+'"]');if(i)return t.instance=i,vn(i),i;var s=De({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),vn(i),Rn(i,"style",s),Uf(i,e.precedence,n),t.instance=i;case"stylesheet":s=Vo(e.href);var r=n.querySelector(Zc(s));if(r)return t.state.loading|=4,t.instance=r,vn(r),r;i=yb(e),(s=Di.get(s))&&_0(i,s),r=(n.ownerDocument||n).createElement("link"),vn(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),Rn(r,"link",i),t.state.loading|=4,Uf(r,e.precedence,n),t.instance=r;case"script":return r=Yo(e.src),(s=n.querySelector(Kc(r)))?(t.instance=s,vn(s),s):(i=e,(s=Di.get(r))&&(i=De({},e),x0(i,s)),n=n.ownerDocument||n,s=n.createElement("script"),vn(s),Rn(s,"link",i),n.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Uf(i,e.precedence,n));return t.instance}function Uf(n,t,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===t)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(n,r.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(n,t.firstChild))}function _0(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function x0(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var If=null;function Hv(n,t,e){if(If===null){var i=new Map,s=If=new Map;s.set(e,i)}else s=If,i=s.get(e),i||(i=new Map,s.set(e,i));if(i.has(n))return i;for(i.set(n,null),e=e.getElementsByTagName(n),s=0;s<e.length;s++){var r=e[s];if(!(r[Fc]||r[Dn]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=n+a;var o=i.get(a);o?o.push(r):i.set(a,[r])}}return i}function Vv(n,t,e){n=n.ownerDocument||n,n.head.insertBefore(e,t==="title"?n.querySelector("head > title"):null)}function NR(n,t,e){if(e===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(n=t.disabled,typeof t.precedence=="string"&&n==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vb(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Cc=null;function DR(){}function LR(n,t,e){if(Cc===null)throw Error(tt(475));var i=Cc;if(t.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=Vo(e.href),r=n.querySelector(Zc(s));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(i.count++,i=lh.bind(i),n.then(i,i)),t.state.loading|=4,t.instance=r,vn(r);return}r=n.ownerDocument||n,e=yb(e),(s=Di.get(s))&&_0(e,s),r=r.createElement("link"),vn(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),Rn(r,"link",e),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=lh.bind(i),n.addEventListener("load",t),n.addEventListener("error",t))}}function UR(){if(Cc===null)throw Error(tt(475));var n=Cc;return n.stylesheets&&n.count===0&&Ag(n,n.stylesheets),0<n.count?function(t){var e=setTimeout(function(){if(n.stylesheets&&Ag(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(e)}}:null}function lh(){if(this.count--,this.count===0){if(this.stylesheets)Ag(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ch=null;function Ag(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ch=new Map,t.forEach(IR,n),ch=null,lh.call(n))}function IR(n,t){if(!(t.state.loading&4)){var e=ch.get(n);if(e)var i=e.get(null);else{e=new Map,ch.set(n,e);for(var s=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(e.set(a.dataset.precedence,a),i=a)}i&&e.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=e.get(a)||i,r===i&&e.set(null,s),e.set(a,s),this.count++,i=lh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(s,n.firstChild)),t.state.loading|=4}}var Nc={$$typeof:Ds,Provider:null,Consumer:null,_currentValue:da,_currentValue2:da,_threadCount:0};function PR(n,t,e,i,s,r,a,o){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sm(0),this.hiddenUpdates=sm(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Mb(n,t,e,i,s,r,a,o,l,c,u,h){return n=new PR(n,t,e,a,o,l,c,h),t=1,r===!0&&(t|=24),r=ai(3,null,null,t),n.current=r,r.stateNode=n,t=qg(),t.refCount++,n.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:e,cache:t},Zg(r),n}function Sb(n){return n?(n=yo,n):yo}function bb(n,t,e,i,s,r){s=Sb(s),i.context===null?i.context=s:i.pendingContext=s,i=Er(t),i.payload={element:e},r=r===void 0?null:r,r!==null&&(i.callback=r),e=Ar(n,i,t),e!==null&&(ui(e,n,t),fc(e,n,t))}function Gv(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function y0(n,t){Gv(n,t),(n=n.alternate)&&Gv(n,t)}function Tb(n){if(n.tag===13){var t=Xo(n,67108864);t!==null&&ui(t,n,67108864),y0(n,67108864)}}var uh=!0;function OR(n,t,e,i){var s=Ot.T;Ot.T=null;var r=le.p;try{le.p=2,v0(n,t,e,i)}finally{le.p=r,Ot.T=s}}function BR(n,t,e,i){var s=Ot.T;Ot.T=null;var r=le.p;try{le.p=8,v0(n,t,e,i)}finally{le.p=r,Ot.T=s}}function v0(n,t,e,i){if(uh){var s=wg(i);if(s===null)Lm(n,t,i,fh,e),kv(n,i);else if(zR(s,n,t,e,i))i.stopPropagation();else if(kv(n,i),t&4&&-1<FR.indexOf(n)){for(;s!==null;){var r=ko(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=ua(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-li(a);o.entanglements[1]|=l,a&=~l}cs(r),(pe&6)===0&&(eh=as()+500,Yc(0,!1))}}break;case 13:o=Xo(r,2),o!==null&&ui(o,r,2),Sh(),y0(r,2)}if(r=wg(i),r===null&&Lm(n,t,i,fh,e),r===s)break;s=r}s!==null&&i.stopPropagation()}else Lm(n,t,i,null,e)}}function wg(n){return n=Og(n),M0(n)}var fh=null;function M0(n){if(fh=null,n=ho(n),n!==null){var t=Ic(n);if(t===null)n=null;else{var e=t.tag;if(e===13){if(n=Kv(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return fh=n,null}function Eb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(EA()){case $v:return 2;case tM:return 8;case zf:case AA:return 32;case eM:return 268435456;default:return 32}default:return 32}}var Rg=!1,Cr=null,Nr=null,Dr=null,Dc=new Map,Lc=new Map,yr=[],FR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kv(n,t){switch(n){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Dc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lc.delete(t.pointerId)}}function tc(n,t,e,i,s,r){return n===null||n.nativeEvent!==r?(n={blockedOn:t,domEventName:e,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=ko(t),t!==null&&Tb(t)),n):(n.eventSystemFlags|=i,t=n.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),n)}function zR(n,t,e,i,s){switch(t){case"focusin":return Cr=tc(Cr,n,t,e,i,s),!0;case"dragenter":return Nr=tc(Nr,n,t,e,i,s),!0;case"mouseover":return Dr=tc(Dr,n,t,e,i,s),!0;case"pointerover":var r=s.pointerId;return Dc.set(r,tc(Dc.get(r)||null,n,t,e,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Lc.set(r,tc(Lc.get(r)||null,n,t,e,i,s)),!0}return!1}function Ab(n){var t=ho(n.target);if(t!==null){var e=Ic(t);if(e!==null){if(t=e.tag,t===13){if(t=Kv(e),t!==null){n.blockedOn=t,IA(n.priority,function(){if(e.tag===13){var i=ci();i=Lg(i);var s=Xo(e,i);s!==null&&ui(s,e,i),y0(e,i)}});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pf(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=wg(n.nativeEvent);if(e===null){e=n.nativeEvent;var i=new e.constructor(e.type,e);Wm=i,e.target.dispatchEvent(i),Wm=null}else return t=ko(e),t!==null&&Tb(t),n.blockedOn=e,!1;t.shift()}return!0}function Xv(n,t,e){Pf(n)&&e.delete(t)}function HR(){Rg=!1,Cr!==null&&Pf(Cr)&&(Cr=null),Nr!==null&&Pf(Nr)&&(Nr=null),Dr!==null&&Pf(Dr)&&(Dr=null),Dc.forEach(Xv),Lc.forEach(Xv)}function Mf(n,t){n.blockedOn===t&&(n.blockedOn=null,Rg||(Rg=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,HR)))}var Sf=null;function Wv(n){Sf!==n&&(Sf=n,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,function(){Sf===n&&(Sf=null);for(var t=0;t<n.length;t+=3){var e=n[t],i=n[t+1],s=n[t+2];if(typeof i!="function"){if(M0(i||e)===null)continue;break}var r=ko(e);r!==null&&(n.splice(t,3),t-=3,og(r,{pending:!0,data:s,method:e.method,action:i},i,s))}}))}function Uc(n){function t(l){return Mf(l,n)}Cr!==null&&Mf(Cr,n),Nr!==null&&Mf(Nr,n),Dr!==null&&Mf(Dr,n),Dc.forEach(t),Lc.forEach(t);for(var e=0;e<yr.length;e++){var i=yr[e];i.blockedOn===n&&(i.blockedOn=null)}for(;0<yr.length&&(e=yr[0],e.blockedOn===null);)Ab(e),e.blockedOn===null&&yr.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var s=e[i],r=e[i+1],a=s[Zn]||null;if(typeof r=="function")a||Wv(e);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Zn]||null)o=a.formAction;else if(M0(s)!==null)continue}else o=a.action;typeof o=="function"?e[i+1]=o:(e.splice(i,3),i-=3),Wv(e)}}}function S0(n){this._internalRoot=n}Ah.prototype.render=S0.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(tt(409));var e=t.current,i=ci();bb(e,i,n,t,null,null)};Ah.prototype.unmount=S0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;bb(n.current,2,null,n,null,null),Sh(),t[Go]=null}};function Ah(n){this._internalRoot=n}Ah.prototype.unstable_scheduleHydration=function(n){if(n){var t=aM();n={blockedOn:null,target:n,priority:t};for(var e=0;e<yr.length&&t!==0&&t<yr[e].priority;e++);yr.splice(e,0,n),e===0&&Ab(n)}};var qv=Yv.version;if(qv!=="19.1.0")throw Error(tt(527,qv,"19.1.0"));le.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(tt(188)):(n=Object.keys(n).join(","),Error(tt(268,n)));return n=xA(t),n=n!==null?Jv(n):null,n=n===null?null:n.stateNode,n};var VR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ec=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ec.isDisabled&&ec.supportsFiber))try{Pc=ec.inject(VR),oi=ec}catch{}var ec;wh.createRoot=function(n,t){if(!Zv(n))throw Error(tt(299));var e=!1,i="",s=MS,r=SS,a=bS,o=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=Mb(n,1,!1,null,null,e,i,s,r,a,o,null),n[Go]=t.current,g0(n),new S0(t)};wh.hydrateRoot=function(n,t,e){if(!Zv(n))throw Error(tt(299));var i=!1,s="",r=MS,a=SS,o=bS,l=null,c=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(l=e.unstable_transitionCallbacks),e.formState!==void 0&&(c=e.formState)),t=Mb(n,1,!0,t,e??null,i,s,r,a,o,l,c),t.context=Sb(null),e=t.current,i=ci(),i=Lg(i),s=Er(i),s.callback=null,Ar(e,s,i),e=i,t.current.lanes=e,Bc(t,e),cs(t),n[Go]=t.current,g0(n),new Ah(t)};wh.version="19.1.0"});var Nb=se((dI,Cb)=>{"use strict";function Rb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rb)}catch(n){console.error(n)}}Rb(),Cb.exports=wb()});var na=se(Za=>{var Tx,GL=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Za.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};Za.getSymbolTotalCodewords=function(t){return GL[t]};Za.getBCHDigit=function(n){let t=0;for(;n!==0;)t++,n>>>=1;return t};Za.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Tx=t};Za.isKanjiModeEnabled=function(){return typeof Tx<"u"};Za.toSJIS=function(t){return Tx(t)}});var Rp=se(Oi=>{Oi.L={bit:1};Oi.M={bit:0};Oi.Q={bit:3};Oi.H={bit:2};function kL(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return Oi.L;case"m":case"medium":return Oi.M;case"q":case"quartile":return Oi.Q;case"h":case"high":return Oi.H;default:throw new Error("Unknown EC Level: "+n)}}Oi.isValid=function(t){return t&&typeof t.bit<"u"&&t.bit>=0&&t.bit<4};Oi.from=function(t,e){if(Oi.isValid(t))return t;try{return kL(t)}catch{return e}}});var BT=se((CB,OT)=>{function PT(){this.buffer=[],this.length=0}PT.prototype={get:function(n){let t=Math.floor(n/8);return(this.buffer[t]>>>7-n%8&1)===1},put:function(n,t){for(let e=0;e<t;e++)this.putBit((n>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),n&&(this.buffer[t]|=128>>>this.length%8),this.length++}};OT.exports=PT});var zT=se((NB,FT)=>{function ku(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}ku.prototype.set=function(n,t,e,i){let s=n*this.size+t;this.data[s]=e,i&&(this.reservedBit[s]=!0)};ku.prototype.get=function(n,t){return this.data[n*this.size+t]};ku.prototype.xor=function(n,t,e){this.data[n*this.size+t]^=e};ku.prototype.isReserved=function(n,t){return this.reservedBit[n*this.size+t]};FT.exports=ku});var Ex=se(Cp=>{var XL=na().getSymbolSize;Cp.getRowColCoords=function(t){if(t===1)return[];let e=Math.floor(t/7)+2,i=XL(t),s=i===145?26:Math.ceil((i-13)/(2*e-2))*2,r=[i-7];for(let a=1;a<e-1;a++)r[a]=r[a-1]-s;return r.push(6),r.reverse()};Cp.getPositions=function(t){let e=[],i=Cp.getRowColCoords(t),s=i.length;for(let r=0;r<s;r++)for(let a=0;a<s;a++)r===0&&a===0||r===0&&a===s-1||r===s-1&&a===0||e.push([i[r],i[a]]);return e}});var GT=se(VT=>{var WL=na().getSymbolSize,HT=7;VT.getPositions=function(t){let e=WL(t);return[[0,0],[e-HT,0],[0,e-HT]]}});var kT=se(Ce=>{Ce.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var Ka={N1:3,N2:3,N3:40,N4:10};Ce.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7};Ce.from=function(t){return Ce.isValid(t)?parseInt(t,10):void 0};Ce.getPenaltyN1=function(t){let e=t.size,i=0,s=0,r=0,a=null,o=null;for(let l=0;l<e;l++){s=r=0,a=o=null;for(let c=0;c<e;c++){let u=t.get(l,c);u===a?s++:(s>=5&&(i+=Ka.N1+(s-5)),a=u,s=1),u=t.get(c,l),u===o?r++:(r>=5&&(i+=Ka.N1+(r-5)),o=u,r=1)}s>=5&&(i+=Ka.N1+(s-5)),r>=5&&(i+=Ka.N1+(r-5))}return i};Ce.getPenaltyN2=function(t){let e=t.size,i=0;for(let s=0;s<e-1;s++)for(let r=0;r<e-1;r++){let a=t.get(s,r)+t.get(s,r+1)+t.get(s+1,r)+t.get(s+1,r+1);(a===4||a===0)&&i++}return i*Ka.N2};Ce.getPenaltyN3=function(t){let e=t.size,i=0,s=0,r=0;for(let a=0;a<e;a++){s=r=0;for(let o=0;o<e;o++)s=s<<1&2047|t.get(a,o),o>=10&&(s===1488||s===93)&&i++,r=r<<1&2047|t.get(o,a),o>=10&&(r===1488||r===93)&&i++}return i*Ka.N3};Ce.getPenaltyN4=function(t){let e=0,i=t.data.length;for(let r=0;r<i;r++)e+=t.data[r];return Math.abs(Math.ceil(e*100/i/5)-10)*Ka.N4};function qL(n,t,e){switch(n){case Ce.Patterns.PATTERN000:return(t+e)%2===0;case Ce.Patterns.PATTERN001:return t%2===0;case Ce.Patterns.PATTERN010:return e%3===0;case Ce.Patterns.PATTERN011:return(t+e)%3===0;case Ce.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2===0;case Ce.Patterns.PATTERN101:return t*e%2+t*e%3===0;case Ce.Patterns.PATTERN110:return(t*e%2+t*e%3)%2===0;case Ce.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}Ce.applyMask=function(t,e){let i=e.size;for(let s=0;s<i;s++)for(let r=0;r<i;r++)e.isReserved(r,s)||e.xor(r,s,qL(t,r,s))};Ce.getBestMask=function(t,e){let i=Object.keys(Ce.Patterns).length,s=0,r=1/0;for(let a=0;a<i;a++){e(a),Ce.applyMask(a,t);let o=Ce.getPenaltyN1(t)+Ce.getPenaltyN2(t)+Ce.getPenaltyN3(t)+Ce.getPenaltyN4(t);Ce.applyMask(a,t),o<r&&(r=o,s=a)}return s}});var wx=se(Ax=>{var ia=Rp(),Np=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Dp=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ax.getBlocksCount=function(t,e){switch(e){case ia.L:return Np[(t-1)*4+0];case ia.M:return Np[(t-1)*4+1];case ia.Q:return Np[(t-1)*4+2];case ia.H:return Np[(t-1)*4+3];default:return}};Ax.getTotalCodewordsCount=function(t,e){switch(e){case ia.L:return Dp[(t-1)*4+0];case ia.M:return Dp[(t-1)*4+1];case ia.Q:return Dp[(t-1)*4+2];case ia.H:return Dp[(t-1)*4+3];default:return}}});var XT=se(Up=>{var Xu=new Uint8Array(512),Lp=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)Xu[e]=t,Lp[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)Xu[e]=Xu[e-255]})();Up.log=function(t){if(t<1)throw new Error("log("+t+")");return Lp[t]};Up.exp=function(t){return Xu[t]};Up.mul=function(t,e){return t===0||e===0?0:Xu[Lp[t]+Lp[e]]}});var WT=se(Wu=>{var Rx=XT();Wu.mul=function(t,e){let i=new Uint8Array(t.length+e.length-1);for(let s=0;s<t.length;s++)for(let r=0;r<e.length;r++)i[s+r]^=Rx.mul(t[s],e[r]);return i};Wu.mod=function(t,e){let i=new Uint8Array(t);for(;i.length-e.length>=0;){let s=i[0];for(let a=0;a<e.length;a++)i[a]^=Rx.mul(e[a],s);let r=0;for(;r<i.length&&i[r]===0;)r++;i=i.slice(r)}return i};Wu.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let i=0;i<t;i++)e=Wu.mul(e,new Uint8Array([1,Rx.exp(i)]));return e}});var ZT=se((BB,YT)=>{var qT=WT();function Cx(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}Cx.prototype.initialize=function(t){this.degree=t,this.genPoly=qT.generateECPolynomial(this.degree)};Cx.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let i=qT.mod(e,this.genPoly),s=this.degree-i.length;if(s>0){let r=new Uint8Array(this.degree);return r.set(i,s),r}return i};YT.exports=Cx});var Nx=se(KT=>{KT.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}});var Dx=se(rr=>{var JT="[0-9]+",YL="[A-Z $%*+\\-./:]+",qu="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";qu=qu.replace(/u/g,"\\u");var ZL="(?:(?![A-Z0-9 $%*+\\-./:]|"+qu+`)(?:.|[\r
]))+`;rr.KANJI=new RegExp(qu,"g");rr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");rr.BYTE=new RegExp(ZL,"g");rr.NUMERIC=new RegExp(JT,"g");rr.ALPHANUMERIC=new RegExp(YL,"g");var KL=new RegExp("^"+qu+"$"),JL=new RegExp("^"+JT+"$"),QL=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");rr.testKanji=function(t){return KL.test(t)};rr.testNumeric=function(t){return JL.test(t)};rr.testAlphanumeric=function(t){return QL.test(t)}});var sa=se(un=>{var jL=Nx(),Lx=Dx();un.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};un.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};un.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};un.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};un.MIXED={bit:-1};un.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!jL.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]};un.getBestModeForData=function(t){return Lx.testNumeric(t)?un.NUMERIC:Lx.testAlphanumeric(t)?un.ALPHANUMERIC:Lx.testKanji(t)?un.KANJI:un.BYTE};un.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")};un.isValid=function(t){return t&&t.bit&&t.ccBits};function $L(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return un.NUMERIC;case"alphanumeric":return un.ALPHANUMERIC;case"kanji":return un.KANJI;case"byte":return un.BYTE;default:throw new Error("Unknown mode: "+n)}}un.from=function(t,e){if(un.isValid(t))return t;try{return $L(t)}catch{return e}}});var eE=se(Ja=>{var Ip=na(),tU=wx(),QT=Rp(),ra=sa(),Ux=Nx(),$T=7973,jT=Ip.getBCHDigit($T);function eU(n,t,e){for(let i=1;i<=40;i++)if(t<=Ja.getCapacity(i,e,n))return i}function tE(n,t){return ra.getCharCountIndicator(n,t)+4}function nU(n,t){let e=0;return n.forEach(function(i){let s=tE(i.mode,t);e+=s+i.getBitsLength()}),e}function iU(n,t){for(let e=1;e<=40;e++)if(nU(n,e)<=Ja.getCapacity(e,t,ra.MIXED))return e}Ja.from=function(t,e){return Ux.isValid(t)?parseInt(t,10):e};Ja.getCapacity=function(t,e,i){if(!Ux.isValid(t))throw new Error("Invalid QR Code version");typeof i>"u"&&(i=ra.BYTE);let s=Ip.getSymbolTotalCodewords(t),r=tU.getTotalCodewordsCount(t,e),a=(s-r)*8;if(i===ra.MIXED)return a;let o=a-tE(i,t);switch(i){case ra.NUMERIC:return Math.floor(o/10*3);case ra.ALPHANUMERIC:return Math.floor(o/11*2);case ra.KANJI:return Math.floor(o/13);case ra.BYTE:default:return Math.floor(o/8)}};Ja.getBestVersionForData=function(t,e){let i,s=QT.from(e,QT.M);if(Array.isArray(t)){if(t.length>1)return iU(t,s);if(t.length===0)return 1;i=t[0]}else i=t;return eU(i.mode,i.getLength(),s)};Ja.getEncodedBits=function(t){if(!Ux.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;Ip.getBCHDigit(e)-jT>=0;)e^=$T<<Ip.getBCHDigit(e)-jT;return t<<12|e}});var rE=se(sE=>{var Ix=na(),iE=1335,sU=21522,nE=Ix.getBCHDigit(iE);sE.getEncodedBits=function(t,e){let i=t.bit<<3|e,s=i<<10;for(;Ix.getBCHDigit(s)-nE>=0;)s^=iE<<Ix.getBCHDigit(s)-nE;return(i<<10|s)^sU}});var oE=se((kB,aE)=>{var rU=sa();function Ul(n){this.mode=rU.NUMERIC,this.data=n.toString()}Ul.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Ul.prototype.getLength=function(){return this.data.length};Ul.prototype.getBitsLength=function(){return Ul.getBitsLength(this.data.length)};Ul.prototype.write=function(t){let e,i,s;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),s=parseInt(i,10),t.put(s,10);let r=this.data.length-e;r>0&&(i=this.data.substr(e),s=parseInt(i,10),t.put(s,r*3+1))};aE.exports=Ul});var cE=se((XB,lE)=>{var aU=sa(),Px=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Il(n){this.mode=aU.ALPHANUMERIC,this.data=n}Il.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Il.prototype.getLength=function(){return this.data.length};Il.prototype.getBitsLength=function(){return Il.getBitsLength(this.data.length)};Il.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=Px.indexOf(this.data[e])*45;i+=Px.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(Px.indexOf(this.data[e]),6)};lE.exports=Il});var fE=se((WB,uE)=>{var oU=sa();function Pl(n){this.mode=oU.BYTE,typeof n=="string"?this.data=new TextEncoder().encode(n):this.data=new Uint8Array(n)}Pl.getBitsLength=function(t){return t*8};Pl.prototype.getLength=function(){return this.data.length};Pl.prototype.getBitsLength=function(){return Pl.getBitsLength(this.data.length)};Pl.prototype.write=function(n){for(let t=0,e=this.data.length;t<e;t++)n.put(this.data[t],8)};uE.exports=Pl});var dE=se((qB,hE)=>{var lU=sa(),cU=na();function Ol(n){this.mode=lU.KANJI,this.data=n}Ol.getBitsLength=function(t){return t*13};Ol.prototype.getLength=function(){return this.data.length};Ol.prototype.getBitsLength=function(){return Ol.getBitsLength(this.data.length)};Ol.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=cU.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}};hE.exports=Ol});var pE=se((YB,Ox)=>{"use strict";var Yu={single_source_shortest_paths:function(n,t,e){var i={},s={};s[t]=0;var r=Yu.PriorityQueue.make();r.push(t,0);for(var a,o,l,c,u,h,f,d,g;!r.empty();){a=r.pop(),o=a.value,c=a.cost,u=n[o]||{};for(l in u)u.hasOwnProperty(l)&&(h=u[l],f=c+h,d=s[l],g=typeof s[l]>"u",(g||d>f)&&(s[l]=f,r.push(l,f),i[l]=o))}if(typeof e<"u"&&typeof s[e]>"u"){var S=["Could not find a path from ",t," to ",e,"."].join("");throw new Error(S)}return i},extract_shortest_path_from_predecessor_list:function(n,t){for(var e=[],i=t,s;i;)e.push(i),s=n[i],i=n[i];return e.reverse(),e},find_path:function(n,t,e){var i=Yu.single_source_shortest_paths(n,t,e);return Yu.extract_shortest_path_from_predecessor_list(i,e)},PriorityQueue:{make:function(n){var t=Yu.PriorityQueue,e={},i;n=n||{};for(i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e.queue=[],e.sorter=n.sorter||t.default_sorter,e},default_sorter:function(n,t){return n.cost-t.cost},push:function(n,t){var e={value:n,cost:t};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof Ox<"u"&&(Ox.exports=Yu)});var SE=se(Bl=>{var he=sa(),_E=oE(),xE=cE(),yE=fE(),vE=dE(),Zu=Dx(),Pp=na(),uU=pE();function mE(n){return unescape(encodeURIComponent(n)).length}function Ku(n,t,e){let i=[],s;for(;(s=n.exec(e))!==null;)i.push({data:s[0],index:s.index,mode:t,length:s[0].length});return i}function ME(n){let t=Ku(Zu.NUMERIC,he.NUMERIC,n),e=Ku(Zu.ALPHANUMERIC,he.ALPHANUMERIC,n),i,s;return Pp.isKanjiModeEnabled()?(i=Ku(Zu.BYTE,he.BYTE,n),s=Ku(Zu.KANJI,he.KANJI,n)):(i=Ku(Zu.BYTE_KANJI,he.BYTE,n),s=[]),t.concat(e,i,s).sort(function(a,o){return a.index-o.index}).map(function(a){return{data:a.data,mode:a.mode,length:a.length}})}function Bx(n,t){switch(t){case he.NUMERIC:return _E.getBitsLength(n);case he.ALPHANUMERIC:return xE.getBitsLength(n);case he.KANJI:return vE.getBitsLength(n);case he.BYTE:return yE.getBitsLength(n)}}function fU(n){return n.reduce(function(t,e){let i=t.length-1>=0?t[t.length-1]:null;return i&&i.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}function hU(n){let t=[];for(let e=0;e<n.length;e++){let i=n[e];switch(i.mode){case he.NUMERIC:t.push([i,{data:i.data,mode:he.ALPHANUMERIC,length:i.length},{data:i.data,mode:he.BYTE,length:i.length}]);break;case he.ALPHANUMERIC:t.push([i,{data:i.data,mode:he.BYTE,length:i.length}]);break;case he.KANJI:t.push([i,{data:i.data,mode:he.BYTE,length:mE(i.data)}]);break;case he.BYTE:t.push([{data:i.data,mode:he.BYTE,length:mE(i.data)}])}}return t}function dU(n,t){let e={},i={start:{}},s=["start"];for(let r=0;r<n.length;r++){let a=n[r],o=[];for(let l=0;l<a.length;l++){let c=a[l],u=""+r+l;o.push(u),e[u]={node:c,lastCount:0},i[u]={};for(let h=0;h<s.length;h++){let f=s[h];e[f]&&e[f].node.mode===c.mode?(i[f][u]=Bx(e[f].lastCount+c.length,c.mode)-Bx(e[f].lastCount,c.mode),e[f].lastCount+=c.length):(e[f]&&(e[f].lastCount=c.length),i[f][u]=Bx(c.length,c.mode)+4+he.getCharCountIndicator(c.mode,t))}}s=o}for(let r=0;r<s.length;r++)i[s[r]].end=0;return{map:i,table:e}}function gE(n,t){let e,i=he.getBestModeForData(n);if(e=he.from(t,i),e!==he.BYTE&&e.bit<i.bit)throw new Error('"'+n+'" cannot be encoded with mode '+he.toString(e)+`.
 Suggested mode is: `+he.toString(i));switch(e===he.KANJI&&!Pp.isKanjiModeEnabled()&&(e=he.BYTE),e){case he.NUMERIC:return new _E(n);case he.ALPHANUMERIC:return new xE(n);case he.KANJI:return new vE(n);case he.BYTE:return new yE(n)}}Bl.fromArray=function(t){return t.reduce(function(e,i){return typeof i=="string"?e.push(gE(i,null)):i.data&&e.push(gE(i.data,i.mode)),e},[])};Bl.fromString=function(t,e){let i=ME(t,Pp.isKanjiModeEnabled()),s=hU(i),r=dU(s,e),a=uU.find_path(r.map,"start","end"),o=[];for(let l=1;l<a.length-1;l++)o.push(r.table[a[l]].node);return Bl.fromArray(fU(o))};Bl.rawSplit=function(t){return Bl.fromArray(ME(t,Pp.isKanjiModeEnabled()))}});var TE=se(bE=>{var Bp=na(),Fx=Rp(),pU=BT(),mU=zT(),gU=Ex(),_U=GT(),Vx=kT(),Gx=wx(),xU=ZT(),Op=eE(),yU=rE(),vU=sa(),zx=SE();function MU(n,t){let e=n.size,i=_U.getPositions(t);for(let s=0;s<i.length;s++){let r=i[s][0],a=i[s][1];for(let o=-1;o<=7;o++)if(!(r+o<=-1||e<=r+o))for(let l=-1;l<=7;l++)a+l<=-1||e<=a+l||(o>=0&&o<=6&&(l===0||l===6)||l>=0&&l<=6&&(o===0||o===6)||o>=2&&o<=4&&l>=2&&l<=4?n.set(r+o,a+l,!0,!0):n.set(r+o,a+l,!1,!0))}}function SU(n){let t=n.size;for(let e=8;e<t-8;e++){let i=e%2===0;n.set(e,6,i,!0),n.set(6,e,i,!0)}}function bU(n,t){let e=gU.getPositions(t);for(let i=0;i<e.length;i++){let s=e[i][0],r=e[i][1];for(let a=-2;a<=2;a++)for(let o=-2;o<=2;o++)a===-2||a===2||o===-2||o===2||a===0&&o===0?n.set(s+a,r+o,!0,!0):n.set(s+a,r+o,!1,!0)}}function TU(n,t){let e=n.size,i=Op.getEncodedBits(t),s,r,a;for(let o=0;o<18;o++)s=Math.floor(o/3),r=o%3+e-8-3,a=(i>>o&1)===1,n.set(s,r,a,!0),n.set(r,s,a,!0)}function Hx(n,t,e){let i=n.size,s=yU.getEncodedBits(t,e),r,a;for(r=0;r<15;r++)a=(s>>r&1)===1,r<6?n.set(r,8,a,!0):r<8?n.set(r+1,8,a,!0):n.set(i-15+r,8,a,!0),r<8?n.set(8,i-r-1,a,!0):r<9?n.set(8,15-r-1+1,a,!0):n.set(8,15-r-1,a,!0);n.set(i-8,8,1,!0)}function EU(n,t){let e=n.size,i=-1,s=e-1,r=7,a=0;for(let o=e-1;o>0;o-=2)for(o===6&&o--;;){for(let l=0;l<2;l++)if(!n.isReserved(s,o-l)){let c=!1;a<t.length&&(c=(t[a]>>>r&1)===1),n.set(s,o-l,c),r--,r===-1&&(a++,r=7)}if(s+=i,s<0||e<=s){s-=i,i=-i;break}}}function AU(n,t,e){let i=new pU;e.forEach(function(l){i.put(l.mode.bit,4),i.put(l.getLength(),vU.getCharCountIndicator(l.mode,n)),l.write(i)});let s=Bp.getSymbolTotalCodewords(n),r=Gx.getTotalCodewordsCount(n,t),a=(s-r)*8;for(i.getLengthInBits()+4<=a&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);let o=(a-i.getLengthInBits())/8;for(let l=0;l<o;l++)i.put(l%2?17:236,8);return wU(i,n,t)}function wU(n,t,e){let i=Bp.getSymbolTotalCodewords(t),s=Gx.getTotalCodewordsCount(t,e),r=i-s,a=Gx.getBlocksCount(t,e),o=i%a,l=a-o,c=Math.floor(i/a),u=Math.floor(r/a),h=u+1,f=c-u,d=new xU(f),g=0,S=new Array(a),m=new Array(a),p=0,_=new Uint8Array(n.buffer);for(let A=0;A<a;A++){let y=A<l?u:h;S[A]=_.slice(g,g+y),m[A]=d.encode(S[A]),g+=y,p=Math.max(p,y)}let M=new Uint8Array(i),x=0,T,E;for(T=0;T<p;T++)for(E=0;E<a;E++)T<S[E].length&&(M[x++]=S[E][T]);for(T=0;T<f;T++)for(E=0;E<a;E++)M[x++]=m[E][T];return M}function RU(n,t,e,i){let s;if(Array.isArray(n))s=zx.fromArray(n);else if(typeof n=="string"){let c=t;if(!c){let u=zx.rawSplit(n);c=Op.getBestVersionForData(u,e)}s=zx.fromString(n,c||40)}else throw new Error("Invalid data");let r=Op.getBestVersionForData(s,e);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);let a=AU(t,e,s),o=Bp.getSymbolSize(t),l=new mU(o);return MU(l,t),SU(l),bU(l,t),Hx(l,e,0),t>=7&&TU(l,t),EU(l,a),isNaN(i)&&(i=Vx.getBestMask(l,Hx.bind(null,l,e))),Vx.applyMask(i,l),Hx(l,e,i),{modules:l,version:t,errorCorrectionLevel:e,maskPattern:i,segments:s}}bE.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let i=Fx.M,s,r;return typeof e<"u"&&(i=Fx.from(e.errorCorrectionLevel,Fx.M),s=Op.from(e.version),r=Vx.from(e.maskPattern),e.toSJISFunc&&Bp.setToSJISFunction(e.toSJISFunc)),RU(t,s,i,r)}});var PE=se(zp=>{"use strict";var OU=Symbol.for("react.transitional.element"),BU=Symbol.for("react.fragment");function IE(n,t,e){var i=null;if(e!==void 0&&(i=""+e),t.key!==void 0&&(i=""+t.key),"key"in t){e={};for(var s in t)s!=="key"&&(e[s]=t[s])}else e=t;return t=e.ref,{$$typeof:OU,type:n,key:i,ref:t!==void 0?t:null,props:e}}zp.Fragment=BU;zp.jsx=IE;zp.jsxs=IE});var Qu=se((tF,OE)=>{"use strict";OE.exports=PE()});var Gp=Es(kl()),kE=Es(Nb());var aa=Es(kl());var d1=0,l_=1,p1=2;var Cu=1,m1=2,Tl=3,Ki=0,Xn=1,ti=2,xs=0,Ia=1,c_=2,u_=3,f_=4,g1=5;var Xr=100,_1=101,x1=102,y1=103,v1=104,M1=200,S1=201,b1=202,T1=203,ed=204,nd=205,E1=206,A1=207,w1=208,R1=209,C1=210,N1=211,D1=212,L1=213,U1=214,id=0,sd=1,rd=2,Pa=3,ad=4,od=5,ld=6,cd=7,h_=0,I1=1,P1=2,xi=0,d_=1,p_=2,m_=3,g_=4,__=5,x_=6,y_=7,K0="attached",O1="detached",v_=300,Qr=301,ka=302,Cd=303,Nd=304,Nu=306,Wr=1e3,Ui=1001,cl=1002,Qe=1003,Dd=1004;var Xa=1005;var je=1006,El=1007;var Ji=1008;var ei=1009,M_=1010,S_=1011,Al=1012,Ld=1013,Qi=1014,yi=1015,ys=1016,Ud=1017,Id=1018,wl=1020,b_=35902,T_=35899,E_=1021,A_=1022,vi=1023,ds=1026,jr=1027,Pd=1028,Od=1029,$r=1030,Bd=1031;var Fd=1033,Du=33776,Lu=33777,Uu=33778,Iu=33779,zd=35840,Hd=35841,Vd=35842,Gd=35843,kd=36196,Xd=37492,Wd=37496,qd=37488,Yd=37489,Pu=37490,Zd=37491,Kd=37808,Jd=37809,Qd=37810,jd=37811,$d=37812,tp=37813,ep=37814,np=37815,ip=37816,sp=37817,rp=37818,ap=37819,op=37820,lp=37821,cp=36492,up=36494,fp=36495,hp=36283,dp=36284,Ou=36285,pp=36286;var Oa=2300,Ba=2301,td=2302,J0=2303,Q0=2400,j0=2401,$0=2402,B1=2500;var w_=0,Bu=1,Rl=2,F1=3200;var mp=0,z1=1,sr="",Ge="srgb",Gn="srgb-linear",au="linear",fe="srgb";var La=7680;var t_=519,H1=512,V1=513,G1=514,gp=515,k1=516,X1=517,_p=518,W1=519,ud=35044,Fu=35048;var R_="300 es",Yi=2e3,ul=2001;function GR(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function kR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function q1(){let n=fl("canvas");return n.style.display="block",n}var Db={},hl=null;function ou(...n){let t="THREE."+n.shift();hl?hl("log",t,...n):console.log(t,...n)}function Y1(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Rt(...n){n=Y1(n);let t="THREE."+n.shift();if(hl)hl("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Pt(...n){n=Y1(n);let t="THREE."+n.shift();if(hl)hl("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ua(...n){let t=n.join(" ");t in Db||(Db[t]=!0,Rt(...n))}function Z1(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var K1={[id]:sd,[rd]:ld,[ad]:cd,[Pa]:od,[sd]:id,[ld]:rd,[cd]:ad,[od]:Pa},ps=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lb=1234567,su=Math.PI/180,Fa=180/Math.PI;function Zi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function C_(n,t){return(n%t+t)%t}function XR(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function WR(n,t,e){return n!==t?(e-n)/(t-n):0}function ru(n,t,e){return(1-e)*n+e*t}function qR(n,t,e,i){return ru(n,t,1-Math.exp(-e*i))}function YR(n,t=1){return t-Math.abs(C_(n,t*2)-t)}function ZR(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function KR(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function JR(n,t){return n+Math.floor(Math.random()*(t-n+1))}function QR(n,t){return n+Math.random()*(t-n)}function jR(n){return n*(.5-Math.random())}function $R(n){n!==void 0&&(Lb=n);let t=Lb+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tC(n){return n*su}function eC(n){return n*Fa}function nC(n){return(n&n-1)===0&&n!==0}function iC(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sC(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rC(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ii={DEG2RAD:su,RAD2DEG:Fa,generateUUID:Zi,clamp:$t,euclideanModulo:C_,mapLinear:XR,inverseLerp:WR,lerp:ru,damp:qR,pingpong:YR,smoothstep:ZR,smootherstep:KR,randInt:JR,randFloat:QR,randFloatSpread:jR,seededRandom:$R,degToRad:tC,radToDeg:eC,isPowerOfTwo:nC,ceilPowerOfTwo:iC,floorPowerOfTwo:sC,setQuaternionFromProperEuler:rC,normalize:me,denormalize:qi},Kt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],S=r[a+3];if(h!==S||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*S;m<0&&(f=-f,d=-d,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,l=l*p+f*o,c=c*p+d*o,u=u*p+g*o,h=h*p+S*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+g*o,h=h*p+S*o;let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ub.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ub.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return b0.copy(this).projectOnVector(t),this.sub(b0)}reflect(t){return this.sub(b0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},b0=new U,Ub=new pn,Ht=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],S=s[0],m=s[3],p=s[6],_=s[1],M=s[4],x=s[7],T=s[2],E=s[5],A=s[8];return r[0]=a*S+o*_+l*T,r[3]=a*m+o*M+l*E,r[6]=a*p+o*x+l*A,r[1]=c*S+u*_+h*T,r[4]=c*m+u*M+h*E,r[7]=c*p+u*x+h*A,r[2]=f*S+d*_+g*T,r[5]=f*m+d*M+g*E,r[8]=f*p+d*x+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return t[0]=h*S,t[1]=(s*c-u*i)*S,t[2]=(o*i-s*a)*S,t[3]=f*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ua("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(T0.makeScale(t,e)),this}rotate(t){return Ua("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(T0.makeRotation(-t)),this}translate(t,e){return Ua("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(T0.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},T0=new Ht,Ib=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pb=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aC(){let n={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=ll(s.r),s.g=ll(s.g),s.b=ll(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===sr?au:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gn]:{primaries:t,whitePoint:i,transfer:au,toXYZ:Ib,fromXYZ:Pb,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Ib,fromXYZ:Pb,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var Zt=aC();function Ks(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ll(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Zo,fd=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zo===void 0&&(Zo=fl("canvas")),Zo.width=t.width,Zo.height=t.height;let s=Zo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Zo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fl("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ks(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ks(e[i]/255)*255):e[i]=Ks(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},oC=0,dl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oC++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(E0(s[a].image)):r.push(E0(s[a]))}else r=E0(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function E0(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var lC=0,A0=new U,mn=class n extends ps{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ui,s=Ui,r=je,a=Ji,o=vi,l=ei,c=n.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=Zi(),this.name="",this.source=new dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(A0).x}get height(){return this.source.getSize(A0).y}get depth(){return this.source.getSize(A0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==v_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=v_;mn.DEFAULT_ANISOTROPY=1;var ge=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(d+1)/2,T=(p+1)/2,E=(u+f)/4,A=(h+S)/4,y=(g+m)/4;return M>x&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=A/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=y/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=y/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-S)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hd=class extends ps{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new mn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new dl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends hd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},lu=class extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dd=class extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,u,h,f,d,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,f,d,g,S,m)}set(t,e,i,s,r,a,o,l,c,u,h,f,d,g,S,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ko.setFromMatrixColumn(t,0).length(),r=1/Ko.setFromMatrixColumn(t,1).length(),a=1/Ko.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*h,g=o*u,S=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-S*c,e[9]=-o*l,e[2]=S-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,g=c*u,S=c*h;e[0]=f+S*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=S+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,g=c*u,S=c*h;e[0]=f-S*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=S-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,d=a*h,g=o*u,S=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+S,e[1]=l*h,e[5]=S*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,S=o*c;e[0]=l*u,e[4]=S-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-S*h}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,S=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+S,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=S*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cC,t,uC)}lookAt(t,e,i){let s=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Br.crossVectors(i,hi),Br.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Br.crossVectors(i,hi)),Br.normalize(),Rh.crossVectors(hi,Br),s[0]=Br.x,s[4]=Rh.x,s[8]=hi.x,s[1]=Br.y,s[5]=Rh.y,s[9]=hi.y,s[2]=Br.z,s[6]=Rh.z,s[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],S=i[6],m=i[10],p=i[14],_=i[3],M=i[7],x=i[11],T=i[15],E=s[0],A=s[4],y=s[8],w=s[12],C=s[1],N=s[5],B=s[9],K=s[13],Q=s[2],F=s[6],Y=s[10],X=s[14],$=s[3],nt=s[7],ut=s[11],mt=s[15];return r[0]=a*E+o*C+l*Q+c*$,r[4]=a*A+o*N+l*F+c*nt,r[8]=a*y+o*B+l*Y+c*ut,r[12]=a*w+o*K+l*X+c*mt,r[1]=u*E+h*C+f*Q+d*$,r[5]=u*A+h*N+f*F+d*nt,r[9]=u*y+h*B+f*Y+d*ut,r[13]=u*w+h*K+f*X+d*mt,r[2]=g*E+S*C+m*Q+p*$,r[6]=g*A+S*N+m*F+p*nt,r[10]=g*y+S*B+m*Y+p*ut,r[14]=g*w+S*K+m*X+p*mt,r[3]=_*E+M*C+x*Q+T*$,r[7]=_*A+M*N+x*F+T*nt,r[11]=_*y+M*B+x*Y+T*ut,r[15]=_*w+M*K+x*X+T*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],S=t[7],m=t[11],p=t[15],_=l*d-c*f,M=o*d-c*h,x=o*f-l*h,T=a*d-c*u,E=a*f-l*u,A=a*h-o*u;return e*(S*_-m*M+p*x)-i*(g*_-m*T+p*E)+s*(g*M-S*T+p*A)-r*(g*x-S*E+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],S=t[13],m=t[14],p=t[15],_=e*o-i*a,M=e*l-s*a,x=e*c-r*a,T=i*l-s*o,E=i*c-r*o,A=s*c-r*l,y=u*S-h*g,w=u*m-f*g,C=u*p-d*g,N=h*m-f*S,B=h*p-d*S,K=f*p-d*m,Q=_*K-M*B+x*N+T*C-E*w+A*y;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/Q;return t[0]=(o*K-l*B+c*N)*F,t[1]=(s*B-i*K-r*N)*F,t[2]=(S*A-m*E+p*T)*F,t[3]=(f*E-h*A-d*T)*F,t[4]=(l*C-a*K-c*w)*F,t[5]=(e*K-s*C+r*w)*F,t[6]=(m*x-g*A-p*M)*F,t[7]=(u*A-f*x+d*M)*F,t[8]=(a*B-o*C+c*y)*F,t[9]=(i*C-e*B-r*y)*F,t[10]=(g*E-S*x+p*_)*F,t[11]=(h*x-u*E-d*_)*F,t[12]=(o*w-a*N-l*y)*F,t[13]=(e*N-i*w+s*y)*F,t[14]=(S*M-g*T-m*_)*F,t[15]=(u*T-h*M+f*_)*F,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,S=a*u,m=a*h,p=o*h,_=l*c,M=l*u,x=l*h,T=i.x,E=i.y,A=i.z;return s[0]=(1-(S+p))*T,s[1]=(d+x)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+M)*A,s[9]=(m-_)*A,s[10]=(1-(f+S))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ko.set(s[0],s[1],s[2]).length(),o=Ko.set(s[4],s[5],s[6]).length(),l=Ko.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ki.copy(this);let c=1/a,u=1/o,h=1/l;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=u,ki.elements[5]*=u,ki.elements[6]*=u,ki.elements[8]*=h,ki.elements[9]*=h,ki.elements[10]*=h,e.setFromRotationMatrix(ki),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Yi,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===Yi)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ul)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Yi,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===Yi)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===ul)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ko=new U,ki=new zt,cC=new U(0,0,0),uC=new U(1,1,1),Br=new U,Rh=new U,hi=new U,Ob=new zt,Bb=new pn,Js=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ob.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ob,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bb.setFromEuler(this),this.setFromQuaternion(Bb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Js.DEFAULT_ORDER="XYZ";var cu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fC=0,Fb=new U,Jo=new pn,ks=new zt,Ch=new U,Jc=new U,hC=new U,dC=new pn,zb=new U(1,0,0),Hb=new U(0,1,0),Vb=new U(0,0,1),Gb={type:"added"},pC={type:"removed"},Qo={type:"childadded",child:null},w0={type:"childremoved",child:null},Oe=class n extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fC++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new Js,i=new pn,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ht}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jo.setFromAxisAngle(t,e),this.quaternion.multiply(Jo),this}rotateOnWorldAxis(t,e){return Jo.setFromAxisAngle(t,e),this.quaternion.premultiply(Jo),this}rotateX(t){return this.rotateOnAxis(zb,t)}rotateY(t){return this.rotateOnAxis(Hb,t)}rotateZ(t){return this.rotateOnAxis(Vb,t)}translateOnAxis(t,e){return Fb.copy(t).applyQuaternion(this.quaternion),this.position.add(Fb.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zb,t)}translateY(t){return this.translateOnAxis(Hb,t)}translateZ(t){return this.translateOnAxis(Vb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ks.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ch.copy(t):Ch.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Jc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ks.lookAt(Jc,Ch,this.up):ks.lookAt(Ch,Jc,this.up),this.quaternion.setFromRotationMatrix(ks),s&&(ks.extractRotation(s.matrixWorld),Jo.setFromRotationMatrix(ks),this.quaternion.premultiply(Jo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gb),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pC),w0.child=t,this.dispatchEvent(w0),w0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ks.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ks.multiply(t.parent.matrixWorld)),t.applyMatrix4(ks),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gb),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jc,t,hC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jc,dC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Oe.DEFAULT_UP=new U(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},mC={type:"move"},pl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mC)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},J1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Nh={h:0,s:0,l:0};function R0(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=C_(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=R0(a,r,t+1/3),this.g=R0(a,r,t),this.b=R0(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=J1[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}copyLinearToSRGB(t){return this.r=ll(t.r),this.g=ll(t.g),this.b=ll(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Zt.workingToColorSpace(In.copy(this),t),Math.round($t(In.r*255,0,255))*65536+Math.round($t(In.g*255,0,255))*256+Math.round($t(In.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(In.copy(this),e);let i=In.r,s=In.g,r=In.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Ge){Zt.workingToColorSpace(In.copy(this),t);let e=In.r,i=In.g,s=In.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+e,Fr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fr),t.getHSL(Nh);let i=ru(Fr.h,Nh.h,e),s=ru(Fr.s,Nh.s,e),r=ru(Fr.l,Nh.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Ct;Ct.NAMES=J1;var uu=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Js,this.environmentIntensity=1,this.environmentRotation=new Js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xi=new U,Xs=new U,C0=new U,Ws=new U,jo=new U,$o=new U,kb=new U,N0=new U,D0=new U,L0=new U,U0=new ge,I0=new ge,P0=new ge,kr=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Xi.subVectors(t,e),s.cross(Xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Xi.subVectors(s,e),Xs.subVectors(i,e),C0.subVectors(t,e);let a=Xi.dot(Xi),o=Xi.dot(Xs),l=Xi.dot(C0),c=Xs.dot(Xs),u=Xs.dot(C0),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ws)===null?!1:Ws.x>=0&&Ws.y>=0&&Ws.x+Ws.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ws.x),l.addScaledVector(a,Ws.y),l.addScaledVector(o,Ws.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return U0.setScalar(0),I0.setScalar(0),P0.setScalar(0),U0.fromBufferAttribute(t,e),I0.fromBufferAttribute(t,i),P0.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(U0,r.x),a.addScaledVector(I0,r.y),a.addScaledVector(P0,r.z),a}static isFrontFacing(t,e,i,s){return Xi.subVectors(i,e),Xs.subVectors(t,e),Xi.cross(Xs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),Xs.subVectors(this.a,this.b),Xi.cross(Xs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;jo.subVectors(s,i),$o.subVectors(r,i),N0.subVectors(t,i);let l=jo.dot(N0),c=$o.dot(N0);if(l<=0&&c<=0)return e.copy(i);D0.subVectors(t,s);let u=jo.dot(D0),h=$o.dot(D0);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(jo,a);L0.subVectors(t,r);let d=jo.dot(L0),g=$o.dot(L0);if(g>=0&&d<=g)return e.copy(r);let S=d*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector($o,o);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return kb.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(kb,o);let p=1/(m+S+f);return a=S*p,o=f*p,e.copy(i).addScaledVector(jo,a).addScaledVector($o,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wi):Wi.fromBufferAttribute(r,a),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dh.copy(i.boundingBox)),Dh.applyMatrix4(t.matrixWorld),this.union(Dh)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qc),Lh.subVectors(this.max,Qc),tl.subVectors(t.a,Qc),el.subVectors(t.b,Qc),nl.subVectors(t.c,Qc),zr.subVectors(el,tl),Hr.subVectors(nl,el),Ra.subVectors(tl,nl);let e=[0,-zr.z,zr.y,0,-Hr.z,Hr.y,0,-Ra.z,Ra.y,zr.z,0,-zr.x,Hr.z,0,-Hr.x,Ra.z,0,-Ra.x,-zr.y,zr.x,0,-Hr.y,Hr.x,0,-Ra.y,Ra.x,0];return!O0(e,tl,el,nl,Lh)||(e=[1,0,0,0,1,0,0,0,1],!O0(e,tl,el,nl,Lh))?!1:(Uh.crossVectors(zr,Hr),e=[Uh.x,Uh.y,Uh.z],O0(e,tl,el,nl,Lh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qs=[new U,new U,new U,new U,new U,new U,new U,new U],Wi=new U,Dh=new gi,tl=new U,el=new U,nl=new U,zr=new U,Hr=new U,Ra=new U,Qc=new U,Lh=new U,Uh=new U,Ca=new U;function O0(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ca.fromArray(n,r);let o=s.x*Math.abs(Ca.x)+s.y*Math.abs(Ca.y)+s.z*Math.abs(Ca.z),l=t.dot(Ca),c=e.dot(Ca),u=i.dot(Ca);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var on=new U,Ih=new Kt,gC=0,cn=class extends ps{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gC++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ud,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ih.fromBufferAttribute(this,e),Ih.applyMatrix3(t),this.setXY(e,Ih.x,Ih.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ud&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var fu=class extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var hu=class extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Vn=class extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}},_C=new gi,jc=new U,B0=new U,Jn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_C.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jc.subVectors(t,this.center);let e=jc.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(jc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(B0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jc.copy(t.center).add(B0)),this.expandByPoint(jc.copy(t.center).sub(B0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xC=0,Li=new zt,F0=new Oe,il=new U,di=new gi,$c=new gi,bn=new U,kn=class n extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xC++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(GR(t)?hu:fu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,e,i){return Li.makeTranslation(t,e,i),this.applyMatrix4(Li),this}scale(t,e,i){return Li.makeScale(t,e,i),this.applyMatrix4(Li),this}lookAt(t){return F0.lookAt(t),F0.updateMatrix(),this.applyMatrix4(F0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(il).negate(),this.translate(il.x,il.y,il.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];di.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$c.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(di.min,$c.min),di.expandByPoint(bn),bn.addVectors(di.max,$c.max),di.expandByPoint(bn)):(di.expandByPoint($c.min),di.expandByPoint($c.max))}di.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)bn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(bn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bn.fromBufferAttribute(o,c),l&&(il.fromBufferAttribute(t,c),bn.add(il)),s=Math.max(s,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new U,l[y]=new U;let c=new U,u=new U,h=new U,f=new Kt,d=new Kt,g=new Kt,S=new U,m=new U;function p(y,w,C){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,C),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(N),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),o[y].add(S),o[w].add(S),o[C].add(S),l[y].add(m),l[w].add(m),l[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,w=_.length;y<w;++y){let C=_[y],N=C.start,B=C.count;for(let K=N,Q=N+B;K<Q;K+=3)p(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let M=new U,x=new U,T=new U,E=new U;function A(y){T.fromBufferAttribute(s,y),E.copy(T);let w=o[y];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(E,w);let N=x.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,N)}for(let y=0,w=_.length;y<w;++y){let C=_[y],N=C.start,B=C.count;for(let K=N,Q=N+B;K<Q;K+=3)A(t.getX(K+0)),A(t.getX(K+1)),A(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)bn.fromBufferAttribute(t,e),bn.normalize(),t.setXYZ(e,bn.x,bn.y,bn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new cn(f,u,h)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ml=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ud,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hn=new U,gl=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ou("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ou("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yC=0,Qn=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yC++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Ia,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=nd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ia&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ed&&(i.blendSrc=this.blendSrc),this.blendDst!==nd&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(i.stencilFail=this.stencilFail),this.stencilZFail!==La&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ys=new U,z0=new U,Ph=new U,Vr=new U,H0=new U,Oh=new U,V0=new U,za=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ys)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ys.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ys.copy(this.origin).addScaledVector(this.direction,e),Ys.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){z0.copy(t).add(e).multiplyScalar(.5),Ph.copy(e).sub(t).normalize(),Vr.copy(this.origin).sub(z0);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ph),o=Vr.dot(this.direction),l=-Vr.dot(Ph),c=Vr.lengthSq(),u=Math.abs(1-a*a),h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let S=1/u;h*=S,f*=S,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(z0).addScaledVector(Ph,f),d}intersectSphere(t,e){Ys.subVectors(t.center,this.origin);let i=Ys.dot(this.direction),s=Ys.dot(Ys)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ys)!==null}intersectTriangle(t,e,i,s,r){H0.subVectors(e,t),Oh.subVectors(i,t),V0.crossVectors(H0,Oh);let a=this.direction.dot(V0),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vr.subVectors(this.origin,t);let l=o*this.direction.dot(Oh.crossVectors(Vr,Oh));if(l<0)return null;let c=o*this.direction.dot(H0.cross(Vr));if(c<0||l+c>a)return null;let u=-o*Vr.dot(V0);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Js,this.combine=h_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xb=new zt,Na=new za,Bh=new Jn,Wb=new U,Fh=new U,zh=new U,Hh=new U,G0=new U,Vh=new U,qb=new U,Gh=new U,$e=class extends Oe{constructor(t=new kn,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Vh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(G0.fromBufferAttribute(h,t),a?Vh.addScaledVector(G0,u):Vh.addScaledVector(G0.sub(e),u))}e.add(Vh)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bh.copy(i.boundingSphere),Bh.applyMatrix4(r),Na.copy(t.ray).recast(t.near),!(Bh.containsPoint(Na.origin)===!1&&(Na.intersectSphere(Bh,Wb)===null||Na.origin.distanceToSquared(Wb)>(t.far-t.near)**2))&&(Xb.copy(r).invert(),Na.copy(t.ray).applyMatrix4(Xb),!(i.boundingBox!==null&&Na.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Na)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){let m=f[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,T=M;x<T;x+=3){let E=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);s=kh(this,p,t,i,c,u,h,E,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){let _=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=kh(this,a,t,i,c,u,h,_,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){let m=f[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,T=M;x<T;x+=3){let E=x,A=x+1,y=x+2;s=kh(this,p,t,i,c,u,h,E,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){let _=m,M=m+1,x=m+2;s=kh(this,a,t,i,c,u,h,_,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vC(n,t,e,i,s,r,a,o){let l;if(t.side===Xn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ki,o),l===null)return null;Gh.copy(o),Gh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Gh);return c<e.near||c>e.far?null:{distance:c,point:Gh.clone(),object:n}}function kh(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Fh),n.getVertexPosition(l,zh),n.getVertexPosition(c,Hh);let u=vC(n,t,e,i,Fh,zh,Hh,qb);if(u){let h=new U;kr.getBarycoord(qb,Fh,zh,Hh,h),s&&(u.uv=kr.getInterpolatedAttribute(s,o,l,c,h,new Kt)),r&&(u.uv1=kr.getInterpolatedAttribute(r,o,l,c,h,new Kt)),a&&(u.normal=kr.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new U,materialIndex:0};kr.getNormal(Fh,zh,Hh,f.normal),u.face=f,u.barycoord=h}return u}var tu=new ge,Yb=new ge,Zb=new ge,MC=new ge,Kb=new zt,Xh=new U,k0=new Jn,Jb=new zt,X0=new za,du=class extends $e{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=K0,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Xh),this.boundingBox.expandByPoint(Xh)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Xh),this.boundingSphere.expandByPoint(Xh)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),k0.copy(this.boundingSphere),k0.applyMatrix4(s),t.ray.intersectsSphere(k0)!==!1&&(Jb.copy(s).invert(),X0.copy(t.ray).applyMatrix4(Jb),!(this.boundingBox!==null&&X0.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,X0)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ge,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===K0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===O1?this.bindMatrixInverse.copy(this.bindMatrix).invert():Rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,s=this.geometry;Yb.fromBufferAttribute(s.attributes.skinIndex,t),Zb.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(tu.copy(e),e.set(0,0,0,0)):(tu.set(...e,1),e.set(0,0,0)),tu.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Zb.getComponent(r);if(a!==0){let o=Yb.getComponent(r);Kb.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(MC.copy(tu).applyMatrix4(Kb),a)}}return e.isVector4&&(e.w=tu.w),e.applyMatrix4(this.bindMatrixInverse)}},_l=class extends Oe{constructor(){super(),this.isBone=!0,this.type="Bone"}},xl=class extends mn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Qe,u=Qe,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qb=new zt,SC=new zt,pu=class n{constructor(t=[],e=[]){this.uuid=Zi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new zt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:SC;Qb.multiplyMatrices(o,e[r]),Qb.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new xl(e,t,t,vi,yi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let r=t.bones[i],a=e[r];a===void 0&&(Rt("Skeleton: No bone found with UUID:",r),a=new _l),this.bones.push(a),this.boneInverses.push(new zt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=i[s];t.boneInverses.push(o.toArray())}return t}},qr=class extends cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sl=new zt,jb=new zt,Wh=[],$b=new gi,bC=new zt,eu=new $e,nu=new Jn,ms=class extends $e{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bC)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,sl),$b.copy(t.boundingBox).applyMatrix4(sl),this.boundingBox.union($b)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,sl),nu.copy(t.boundingSphere).applyMatrix4(sl),this.boundingSphere.union(nu)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(eu.geometry=this.geometry,eu.material=this.material,eu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nu.copy(this.boundingSphere),nu.applyMatrix4(i),t.ray.intersectsSphere(nu)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sl),jb.multiplyMatrices(i,sl),eu.matrixWorld=jb,eu.raycast(t,Wh);for(let a=0,o=Wh.length;a<o;a++){let l=Wh[a];l.instanceId=r,l.object=this,e.push(l)}Wh.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(s*this.count),s,this.count,Pd,yi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},W0=new U,TC=new U,EC=new Ht,fs=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=W0.subVectors(i,e).cross(TC.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(W0),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||EC.getNormalMatrix(t),s=this.coplanarPoint(W0).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Da=new Jn,AC=new Kt(.5,.5),qh=new U,yl=class{constructor(t=new fs,e=new fs,i=new fs,s=new fs,r=new fs,a=new fs){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],S=r[9],m=r[10],p=r[11],_=r[12],M=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,d-u,p-g,T-_).normalize(),s[1].setComponents(c+a,d+u,p+g,T+_).normalize(),s[2].setComponents(c+o,d+h,p+S,T+M).normalize(),s[3].setComponents(c-o,d-h,p-S,T-M).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,T-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,T-x).normalize(),e===Yi)s[5].setComponents(c+l,d+f,p+m,T+x).normalize();else if(e===ul)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Da.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Da.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Da)}intersectsSprite(t){Da.center.set(0,0,0);let e=AC.distanceTo(t.center);return Da.radius=.7071067811865476+e,Da.applyMatrix4(t.matrixWorld),this.intersectsSphere(Da)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(qh.x=s.normal.x>0?t.max.x:t.min.x,qh.y=s.normal.y>0?t.max.y:t.min.y,qh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vl=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pd=new U,md=new U,t1=new zt,iu=new za,Yh=new Jn,q0=new U,e1=new U,Ha=class extends Oe{constructor(t=new kn,e=new vl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)pd.fromBufferAttribute(e,s-1),md.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=pd.distanceTo(md);t.setAttribute("lineDistance",new Vn(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yh.copy(i.boundingSphere),Yh.applyMatrix4(s),Yh.radius+=r,t.ray.intersectsSphere(Yh)===!1)return;t1.copy(s).invert(),iu.copy(t.ray).applyMatrix4(t1);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=d,m=g-1;S<m;S+=c){let p=u.getX(S),_=u.getX(S+1),M=Zh(this,t,iu,l,p,_,S);M&&e.push(M)}if(this.isLineLoop){let S=u.getX(g-1),m=u.getX(d),p=Zh(this,t,iu,l,S,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let S=d,m=g-1;S<m;S+=c){let p=Zh(this,t,iu,l,S,S+1,S);p&&e.push(p)}if(this.isLineLoop){let S=Zh(this,t,iu,l,g-1,d,g-1);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zh(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(pd.fromBufferAttribute(o,s),md.fromBufferAttribute(o,r),e.distanceSqToSegment(pd,md,q0,e1)>i)return;q0.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(q0);if(!(c<t.near||c>t.far))return{distance:c,point:e1.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var n1=new U,i1=new U,mu=class extends Ha{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)n1.fromBufferAttribute(e,s),i1.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+n1.distanceTo(i1);t.setAttribute("lineDistance",new Vn(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},gu=class extends Ha{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ml=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},s1=new zt,e_=new za,Kh=new Jn,Jh=new U,_u=class extends Oe{constructor(t=new kn,e=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kh.copy(i.boundingSphere),Kh.applyMatrix4(s),Kh.radius+=r,t.ray.intersectsSphere(Kh)===!1)return;s1.copy(s).invert(),e_.copy(t.ray).applyMatrix4(s1);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,S=d;g<S;g++){let m=c.getX(g);Jh.fromBufferAttribute(h,m),r1(Jh,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,S=d;g<S;g++)Jh.fromBufferAttribute(h,g),r1(Jh,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function r1(n,t,e,i,s,r,a){let o=e_.distanceSqToPoint(n);if(o<e){let l=new U;e_.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var xu=class extends mn{constructor(t=[],e=Qr,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sl=class extends mn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qs=class extends mn{constructor(t,e,i=Qi,s,r,a,o=Qe,l=Qe,c,u=ds,h=1){if(u!==ds&&u!==jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gd=class extends Qs{constructor(t,e=Qi,i=Qr,s,r,a=Qe,o=Qe,l,c=ds){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yu=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yr=class n extends kn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(h,2));function g(S,m,p,_,M,x,T,E,A,y,w){let C=x/A,N=T/y,B=x/2,K=T/2,Q=E/2,F=A+1,Y=y+1,X=0,$=0,nt=new U;for(let ut=0;ut<Y;ut++){let mt=ut*N-K;for(let dt=0;dt<F;dt++){let Ft=dt*C-B;nt[S]=Ft*_,nt[m]=mt*M,nt[p]=Q,c.push(nt.x,nt.y,nt.z),nt[S]=0,nt[m]=0,nt[p]=E>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(dt/A),h.push(1-ut/y),X+=1}}for(let ut=0;ut<y;ut++)for(let mt=0;mt<A;mt++){let dt=f+mt+F*ut,Ft=f+mt+F*(ut+1),ce=f+(mt+1)+F*(ut+1),Wt=f+(mt+1)+F*ut;l.push(dt,Ft,Wt),l.push(Ft,ce,Wt),$+=6}o.addGroup(d,$,w),d+=$,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var js=class n extends kn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],S=[],m=[];for(let p=0;p<u;p++){let _=p*f-a;for(let M=0;M<c;M++){let x=M*h-r;g.push(x,-_,0),S.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let M=_+c*p,x=_+c*(p+1),T=_+1+c*(p+1),E=_+1+c*p;d.push(M,x,E),d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(S,3)),this.setAttribute("uv",new Vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Wa(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(a1(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(a1(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function On(n){let t={};for(let e=0;e<n.length;e++){let i=Wa(n[e]);for(let s in i)t[s]=i[s]}return t}function a1(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wC(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function N_(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Q1={clone:Wa,merge:On},RC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RC,this.fragmentShader=CC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wa(t.uniforms),this.uniformsGroups=wC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[i].value=new Kt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new zt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},_d=class extends _i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Va=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Js,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},jn=class extends Va{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var xd=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yd=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qh(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function NC(n){function t(s,r){return n[s]-n[r]}let e=n.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function o1(n,t,e){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=n[o+l]}return s}function DC(n,t,e,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),e.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),e.push(a)),r=n[s++];while(r!==void 0)}var gs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vd=class extends gs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Q0,endingEnd:Q0}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case j0:r=t,o=2*e-i;break;case $0:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case j0:a=t,l=2*i-e;break;case $0:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),S=g*g,m=S*g,p=-f*m+2*f*S-f*g,_=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*S+.5*g,x=d*m-d*S;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+_*a[c+T]+M*a[l+T]+x*a[h+T];return r}},Md=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},Sd=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bd=class extends gs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-e)/(s-e),S=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*g;return r}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let S=a[c+g],m=a[l+g],p=d*f+g*2,_=h[p],M=h[p+1],x=t*f+g*2,T=u[x],E=u[x+1],A=(i-e)/(s-e),y,w,C,N,B;for(let K=0;K<8;K++){y=A*A,w=y*A,C=1-A,N=C*C,B=N*C;let F=B*e+3*N*A*_+3*C*y*T+w*s-i;if(Math.abs(F)<1e-10)break;let Y=3*N*(_-e)+6*C*A*(T-_)+3*y*(s-T);if(Math.abs(Y)<1e-10)break;A=A-F/Y,A=Math.max(0,Math.min(1,A))}r[g]=B*S+3*N*A*M+3*C*y*E+w*m}return r}},$n=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qh(e,this.TimeBufferType),this.values=Qh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qh(t.times,Array),values:Qh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Sd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Md(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new bd(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Oa:e=this.InterpolantFactoryMethodDiscrete;break;case Ba:e=this.InterpolantFactoryMethodLinear;break;case td:e=this.InterpolantFactoryMethodSmooth;break;case J0:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return td;case this.InterpolantFactoryMethodBezier:return J0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&kR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===td,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let S=e[h+g];if(S!==e[f+g]||S!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[h+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Ba;var $s=class extends $n{constructor(t,e,i){super(t,e,i)}};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Oa;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var vu=class extends $n{constructor(t,e,i,s){super(t,e,i,s)}};vu.prototype.ValueTypeName="color";var tr=class extends $n{constructor(t,e,i,s){super(t,e,i,s)}};tr.prototype.ValueTypeName="number";var Td=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},er=class extends $n{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Td(this.times,this.values,this.getValueSize(),t)}};er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends $n{constructor(t,e,i){super(t,e,i)}};nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Oa;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends $n{constructor(t,e,i,s){super(t,e,i,s)}};Zr.prototype.ValueTypeName="vector";var Mu=class{constructor(t="",e=-1,i=[],s=B1){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=Zi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,s=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(UC(i[a]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=i.length;r!==a;++r)e.push($n.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,e,i,s){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=NC(l);l=o1(l,1,u),c=o1(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new tr(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,i));return a}resetDuration(){let t=this.tracks,e=0;for(let i=0,s=t.length;i!==s;++i){let r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function LC(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return vu;case"quaternion":return er;case"bool":case"boolean":return $s;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function UC(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=LC(n.type);if(n.times===void 0){let e=[],i=[];DC(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}var hs={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(l1(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!l1(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function l1(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ed=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},j1=new Ed,_s=class{constructor(t){this.manager=t!==void 0?t:j1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_s.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs={},n_=class extends Error{constructor(t,e){super(t),this.response=e}},bl=class extends _s{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=hs.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Zs[t]!==void 0){Zs[t].push({onLoad:e,onProgress:i,onError:s});return}Zs[t]=[],Zs[t].push({onLoad:e,onProgress:i,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Zs[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,S=0,m=new ReadableStream({start(p){_();function _(){h.read().then(({done:M,value:x})=>{if(M)p.close();else{S+=x.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:S,total:d});for(let E=0,A=u.length;E<A;E++){let y=u[E];y.onProgress&&y.onProgress(T)}p.enqueue(x),_()}},M=>{p.error(M)})}}});return new Response(m)}else throw new n_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{hs.add(`file:${t}`,c);let u=Zs[t];delete Zs[t];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Zs[t];if(u===void 0)throw this.manager.itemError(t),c;delete Zs[t];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rl=new WeakMap,Ad=class extends _s{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=hs.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let h=rl.get(a);h===void 0&&(h=[],rl.set(a,h)),h.push({onLoad:e,onError:s})}return a}let o=fl("img");function l(){u(),e&&e(this);let h=rl.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}rl.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),hs.remove(`image:${t}`);let f=rl.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}rl.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hs.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Su=class extends _s{constructor(t){super(t)}load(t,e,i,s){let r=new mn,a=new Ad(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Ga=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},bu=class extends Ga{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Y0=new zt,c1=new U,u1=new U,Tu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;c1.setFromMatrixPosition(t.matrixWorld),e.position.copy(c1),u1.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(u1),e.updateMatrixWorld(),Y0.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Y0,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ul||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Y0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jh=new U,$h=new pn,us=new U,Eu=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jh,$h,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jh,$h,us.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(jh,$h,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jh,$h,us.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gr=new U,f1=new Kt,h1=new Kt,ln=class extends Eu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gr.x,Gr.y).multiplyScalar(-t/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gr.x,Gr.y).multiplyScalar(-t/Gr.z)}getViewSize(t,e){return this.getViewBounds(t,f1,h1),e.subVectors(h1,f1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(su*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},i_=class extends Tu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Fa*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Au=class extends Ga{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new i_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},s_=class extends Tu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},wu=class extends Ga{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new s_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Kr=class extends Eu{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},r_=class extends Tu{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jr=class extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new r_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ir=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Z0=new WeakMap,Ru=class extends _s{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Rt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Rt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=hs.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{Z0.has(a)===!0?(s&&s(Z0.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){hs.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t)}).catch(function(c){s&&s(c),Z0.set(l,c),hs.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});hs.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var al=-90,ol=1,wd=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(al,ol,t,e);s.layers=this.layers,this.add(s);let r=new ln(al,ol,t,e);r.layers=this.layers,this.add(r);let a=new ln(al,ol,t,e);a.layers=this.layers,this.add(a);let o=new ln(al,ol,t,e);o.layers=this.layers,this.add(o);let l=new ln(al,ol,t,e);l.layers=this.layers,this.add(l);let c=new ln(al,ol,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Rd=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var D_="\\[\\]\\.:\\/",IC=new RegExp("["+D_+"]","g"),L_="[^"+D_+"]",PC="[^"+D_.replace("\\.","")+"]",OC=/((?:WC+[\/:])*)/.source.replace("WC",L_),BC=/(WCOD+)?/.source.replace("WCOD",PC),FC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",L_),zC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",L_),HC=new RegExp("^"+OC+BC+FC+zC+"$"),VC=["material","materials","bones","map"],a_=class{constructor(t,e,i){let s=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(IC,"")}static parseTrackName(t){let e=HC.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);VC.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=a_;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pI=new Float32Array(1);var o_=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function U_(n,t,e,i){let s=GC(i);switch(e){case E_:return n*t;case Pd:return n*t/s.components*s.byteLength;case Od:return n*t/s.components*s.byteLength;case $r:return n*t*2/s.components*s.byteLength;case Bd:return n*t*2/s.components*s.byteLength;case A_:return n*t*3/s.components*s.byteLength;case vi:return n*t*4/s.components*s.byteLength;case Fd:return n*t*4/s.components*s.byteLength;case Du:case Lu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Uu:case Iu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hd:case Gd:return Math.max(n,16)*Math.max(t,8)/4;case zd:case Vd:return Math.max(n,8)*Math.max(t,8)/2;case kd:case Xd:case qd:case Yd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wd:case Pu:case Zd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Qd:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case jd:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $d:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case tp:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ep:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case np:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ip:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case sp:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ap:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case op:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case lp:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case cp:case up:case fp:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hp:case dp:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ou:case pp:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function GC(n){switch(n){case ei:case M_:return{byteLength:1,components:1};case Al:case S_:case ys:return{byteLength:2,components:1};case Ud:case Id:return{byteLength:2,components:4};case Qi:case Ld:case yi:return{byteLength:4,components:1};case b_:case T_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function MT(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function XC(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],S=h[d];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,h[f]=S)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let S=h[d];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var WC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qC=`#ifdef USE_ALPHAHASH
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
#endif`,YC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$C=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,t2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s2=`#ifdef USE_IRIDESCENCE
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
#endif`,r2=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,o2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,p2=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,m2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,g2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M2="gl_FragColor = linearToOutputTexel( gl_FragColor );",S2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E2=`#ifdef USE_ENVMAP
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
#endif`,A2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L2=`#ifdef USE_GRADIENTMAP
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
}`,U2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,B2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,F2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Z2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e3=`#if defined( USE_POINTS_UV )
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
#endif`,n3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,p3=`#ifdef USE_NORMALMAP
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
#endif`,m3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,M3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,R3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,N3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I3=`#ifdef USE_SKINNING
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
#endif`,P3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F3=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z3=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H3=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q3=`uniform sampler2D t2D;
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
}`,Y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,j3=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,tN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iN=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sN=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rN=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,aN=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,oN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,uN=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,hN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,pN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gN=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_N=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yN=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,vN=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,MN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,SN=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,bN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,TN=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Xt={alphahash_fragment:WC,alphahash_pars_fragment:qC,alphamap_fragment:YC,alphamap_pars_fragment:ZC,alphatest_fragment:KC,alphatest_pars_fragment:JC,aomap_fragment:QC,aomap_pars_fragment:jC,batching_pars_vertex:$C,batching_vertex:t2,begin_vertex:e2,beginnormal_vertex:n2,bsdfs:i2,iridescence_fragment:s2,bumpmap_pars_fragment:r2,clipping_planes_fragment:a2,clipping_planes_pars_fragment:o2,clipping_planes_pars_vertex:l2,clipping_planes_vertex:c2,color_fragment:u2,color_pars_fragment:f2,color_pars_vertex:h2,color_vertex:d2,common:p2,cube_uv_reflection_fragment:m2,defaultnormal_vertex:g2,displacementmap_pars_vertex:_2,displacementmap_vertex:x2,emissivemap_fragment:y2,emissivemap_pars_fragment:v2,colorspace_fragment:M2,colorspace_pars_fragment:S2,envmap_fragment:b2,envmap_common_pars_fragment:T2,envmap_pars_fragment:E2,envmap_pars_vertex:A2,envmap_physical_pars_fragment:B2,envmap_vertex:w2,fog_vertex:R2,fog_pars_vertex:C2,fog_fragment:N2,fog_pars_fragment:D2,gradientmap_pars_fragment:L2,lightmap_pars_fragment:U2,lights_lambert_fragment:I2,lights_lambert_pars_fragment:P2,lights_pars_begin:O2,lights_toon_fragment:F2,lights_toon_pars_fragment:z2,lights_phong_fragment:H2,lights_phong_pars_fragment:V2,lights_physical_fragment:G2,lights_physical_pars_fragment:k2,lights_fragment_begin:X2,lights_fragment_maps:W2,lights_fragment_end:q2,lightprobes_pars_fragment:Y2,logdepthbuf_fragment:Z2,logdepthbuf_pars_fragment:K2,logdepthbuf_pars_vertex:J2,logdepthbuf_vertex:Q2,map_fragment:j2,map_pars_fragment:$2,map_particle_fragment:t3,map_particle_pars_fragment:e3,metalnessmap_fragment:n3,metalnessmap_pars_fragment:i3,morphinstance_vertex:s3,morphcolor_vertex:r3,morphnormal_vertex:a3,morphtarget_pars_vertex:o3,morphtarget_vertex:l3,normal_fragment_begin:c3,normal_fragment_maps:u3,normal_pars_fragment:f3,normal_pars_vertex:h3,normal_vertex:d3,normalmap_pars_fragment:p3,clearcoat_normal_fragment_begin:m3,clearcoat_normal_fragment_maps:g3,clearcoat_pars_fragment:_3,iridescence_pars_fragment:x3,opaque_fragment:y3,packing:v3,premultiplied_alpha_fragment:M3,project_vertex:S3,dithering_fragment:b3,dithering_pars_fragment:T3,roughnessmap_fragment:E3,roughnessmap_pars_fragment:A3,shadowmap_pars_fragment:w3,shadowmap_pars_vertex:R3,shadowmap_vertex:C3,shadowmask_pars_fragment:N3,skinbase_vertex:D3,skinning_pars_vertex:L3,skinning_vertex:U3,skinnormal_vertex:I3,specularmap_fragment:P3,specularmap_pars_fragment:O3,tonemapping_fragment:B3,tonemapping_pars_fragment:F3,transmission_fragment:z3,transmission_pars_fragment:H3,uv_pars_fragment:V3,uv_pars_vertex:G3,uv_vertex:k3,worldpos_vertex:X3,background_vert:W3,background_frag:q3,backgroundCube_vert:Y3,backgroundCube_frag:Z3,cube_vert:K3,cube_frag:J3,depth_vert:Q3,depth_frag:j3,distance_vert:$3,distance_frag:tN,equirect_vert:eN,equirect_frag:nN,linedashed_vert:iN,linedashed_frag:sN,meshbasic_vert:rN,meshbasic_frag:aN,meshlambert_vert:oN,meshlambert_frag:lN,meshmatcap_vert:cN,meshmatcap_frag:uN,meshnormal_vert:fN,meshnormal_frag:hN,meshphong_vert:dN,meshphong_frag:pN,meshphysical_vert:mN,meshphysical_frag:gN,meshtoon_vert:_N,meshtoon_frag:xN,points_vert:yN,points_frag:vN,shadow_vert:MN,shadow_frag:SN,sprite_vert:bN,sprite_frag:TN},gt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Ms={basic:{uniforms:On([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:On([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:On([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:On([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:On([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:On([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:On([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:On([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:On([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:On([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:On([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:On([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:On([gt.lights,gt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ms.physical={uniforms:On([Ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var xp={r:0,b:0,g:0},EN=new zt,ST=new Ht;ST.set(-1,0,0,0,1,0,0,0,1);function AN(n,t,e,i,s,r){let a=new Ct(0),o=s===!0?0:1,l,c,u=null,h=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let x=_.backgroundBlurriness>0;M=t.get(M,x)}return M}function g(_){let M=!1,x=d(_);x===null?m(a,o):x&&x.isColor&&(m(x,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(_,M){let x=d(M);x&&(x.isCubeTexture||x.mapping===Nu)?(c===void 0&&(c=new $e(new Yr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Wa(Ms.backgroundCube.uniforms),vertexShader:Ms.backgroundCube.vertexShader,fragmentShader:Ms.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(EN.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ST),c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==fe,(u!==x||h!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $e(new js(2,2),new _i({name:"BackgroundMaterial",uniforms:Wa(Ms.background.uniforms),vertexShader:Ms.background.vertexShader,fragmentShader:Ms.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(xp,N_(n)),e.buffers.color.setClear(xp.r,xp.g,xp.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:S,dispose:p}}function wN(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(N,B,K,Q,F){let Y=!1,X=h(N,Q,K,B);r!==X&&(r=X,c(r.object)),Y=d(N,Q,K,F),Y&&g(N,Q,K,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(N,B,K,Q),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,B,K,Q){let F=Q.wireframe===!0,Y=i[B.id];Y===void 0&&(Y={},i[B.id]=Y);let X=N.isInstancedMesh===!0?N.id:0,$=Y[X];$===void 0&&($={},Y[X]=$);let nt=$[K.id];nt===void 0&&(nt={},$[K.id]=nt);let ut=nt[F];return ut===void 0&&(ut=f(l()),nt[F]=ut),ut}function f(N){let B=[],K=[],Q=[];for(let F=0;F<e;F++)B[F]=0,K[F]=0,Q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:Q,object:N,attributes:{},index:null}}function d(N,B,K,Q){let F=r.attributes,Y=B.attributes,X=0,$=K.getAttributes();for(let nt in $)if($[nt].location>=0){let mt=F[nt],dt=Y[nt];if(dt===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(dt=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(dt=N.instanceColor)),mt===void 0||mt.attribute!==dt||dt&&mt.data!==dt.data)return!0;X++}return r.attributesNum!==X||r.index!==Q}function g(N,B,K,Q){let F={},Y=B.attributes,X=0,$=K.getAttributes();for(let nt in $)if($[nt].location>=0){let mt=Y[nt];mt===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(mt=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(mt=N.instanceColor));let dt={};dt.attribute=mt,mt&&mt.data&&(dt.data=mt.data),F[nt]=dt,X++}r.attributes=F,r.attributesNum=X,r.index=Q}function S(){let N=r.newAttributes;for(let B=0,K=N.length;B<K;B++)N[B]=0}function m(N){p(N,0)}function p(N,B){let K=r.newAttributes,Q=r.enabledAttributes,F=r.attributeDivisors;K[N]=1,Q[N]===0&&(n.enableVertexAttribArray(N),Q[N]=1),F[N]!==B&&(n.vertexAttribDivisor(N,B),F[N]=B)}function _(){let N=r.newAttributes,B=r.enabledAttributes;for(let K=0,Q=B.length;K<Q;K++)B[K]!==N[K]&&(n.disableVertexAttribArray(K),B[K]=0)}function M(N,B,K,Q,F,Y,X){X===!0?n.vertexAttribIPointer(N,B,K,F,Y):n.vertexAttribPointer(N,B,K,Q,F,Y)}function x(N,B,K,Q){S();let F=Q.attributes,Y=K.getAttributes(),X=B.defaultAttributeValues;for(let $ in Y){let nt=Y[$];if(nt.location>=0){let ut=F[$];if(ut===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(ut=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(ut=N.instanceColor)),ut!==void 0){let mt=ut.normalized,dt=ut.itemSize,Ft=t.get(ut);if(Ft===void 0)continue;let ce=Ft.buffer,Wt=Ft.type,J=Ft.bytesPerElement,ft=Wt===n.INT||Wt===n.UNSIGNED_INT||ut.gpuType===Ld;if(ut.isInterleavedBufferAttribute){let et=ut.data,At=et.stride,Bt=ut.offset;if(et.isInstancedInterleavedBuffer){for(let Ut=0;Ut<nt.locationSize;Ut++)p(nt.location+Ut,et.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ut=0;Ut<nt.locationSize;Ut++)m(nt.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Ut=0;Ut<nt.locationSize;Ut++)M(nt.location+Ut,dt/nt.locationSize,Wt,mt,At*J,(Bt+dt/nt.locationSize*Ut)*J,ft)}else{if(ut.isInstancedBufferAttribute){for(let et=0;et<nt.locationSize;et++)p(nt.location+et,ut.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let et=0;et<nt.locationSize;et++)m(nt.location+et);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let et=0;et<nt.locationSize;et++)M(nt.location+et,dt/nt.locationSize,Wt,mt,dt*J,dt/nt.locationSize*et*J,ft)}}else if(X!==void 0){let mt=X[$];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(nt.location,mt);break;case 3:n.vertexAttrib3fv(nt.location,mt);break;case 4:n.vertexAttrib4fv(nt.location,mt);break;default:n.vertexAttrib1fv(nt.location,mt)}}}}_()}function T(){w();for(let N in i){let B=i[N];for(let K in B){let Q=B[K];for(let F in Q){let Y=Q[F];for(let X in Y)u(Y[X].object),delete Y[X];delete Q[F]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let B=i[N.id];for(let K in B){let Q=B[K];for(let F in Q){let Y=Q[F];for(let X in Y)u(Y[X].object),delete Y[X];delete Q[F]}}delete i[N.id]}function A(N){for(let B in i){let K=i[B];for(let Q in K){let F=K[Q];if(F[N.id]===void 0)continue;let Y=F[N.id];for(let X in Y)u(Y[X].object),delete Y[X];delete F[N.id]}}}function y(N){for(let B in i){let K=i[B],Q=N.isInstancedMesh===!0?N.id:0,F=K[Q];if(F!==void 0){for(let Y in F){let X=F[Y];for(let $ in X)u(X[$].object),delete X[$];delete F[Y]}delete K[Q],Object.keys(K).length===0&&delete i[B]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function RN(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function CN(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==vi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ei&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yi&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Rt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,maxSamples:T,samples:E}}function NN(n){let t=this,e=null,i=0,s=!1,r=!1,a=new fs,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,M=_*4,x=p.clippingState||null;l.value=x,x=u(g,f,M,d);for(let T=0;T!==M;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){let S=h!==null?h.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let p=d+S*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==S;++M,x+=4)a.copy(h[M]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var ta=4,$1=[.125,.215,.35,.446,.526,.582],qa=20,DN=256,zu=new Kr,tT=new Ct,I_=null,P_=0,O_=0,B_=!1,LN=new U,vp=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=LN}=r;I_=this._renderer.getRenderTarget(),P_=this._renderer.getActiveCubeFace(),O_=this._renderer.getActiveMipmapLevel(),B_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(I_,P_,O_),this._renderer.xr.enabled=B_,t.scissorTest=!1,Cl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qr||t.mapping===ka?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),I_=this._renderer.getRenderTarget(),P_=this._renderer.getActiveCubeFace(),O_=this._renderer.getActiveMipmapLevel(),B_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:ys,format:vi,colorSpace:Gn,depthBuffer:!1},s=eT(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eT(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UN(r)),this._blurMaterial=PN(r,t,e),this._ggxMaterial=IN(r,t,e)}return s}_compileMaterial(t){let e=new $e(new kn,t);this._renderer.compile(e,zu)}_sceneToCubeUV(t,e,i,s,r){let l=new ln(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(tT),h.toneMapping=xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Yr,new Pn({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,p=!0):(m.color.copy(tT),p=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let T=this._cubeSize;Cl(s,x*T,M>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(S,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=_}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Qr||t.mapping===ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iT()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nT());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Cl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,zu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-ta?i-g+ta:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Cl(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,zu),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Cl(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(o,zu)}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=c;let f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qa-1),S=r/g,m=isFinite(r)?1+Math.floor(u*S):qa;m>qa&&Rt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qa}`);let p=[],_=0;for(let A=0;A<qa;++A){let y=A/S,w=Math.exp(-y*y/2);p.push(w),A===0?_+=w:A<m&&(_+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let x=this._sizeLods[s],T=3*x*(s>M-ta?s-M+ta:0),E=4*(this._cubeSize-x);Cl(e,T,E,3*x,2*x),l.setRenderTarget(e),l.render(h,zu)}};function UN(n){let t=[],e=[],i=[],s=n,r=n-ta+1+$1.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ta?l=$1[a-n+ta-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,S=3,m=2,p=1,_=new Float32Array(S*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let E=0;E<d;E++){let A=E%3*2/3-1,y=E>2?0:-1,w=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];_.set(w,S*g*E),M.set(f,m*g*E);let C=[E,E,E,E,E,E];x.set(C,p*g*E)}let T=new kn;T.setAttribute("position",new cn(_,S)),T.setAttribute("uv",new cn(M,m)),T.setAttribute("faceIndex",new cn(x,p)),i.push(new $e(T,null)),s>ta&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function eT(n,t,e){let i=new mi(n,t,e);return i.texture.mapping=Nu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function IN(n,t,e){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function PN(n,t,e){let i=new Float32Array(qa),s=new U(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:qa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bp(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function nT(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function iT(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function bp(){return`

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
	`}var Mp=class extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new xu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yr(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:Wa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:xs});r.uniforms.tEquirect.value=e;let a=new $e(s,r),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=je),new wd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function ON(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Cd||d===Nd)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let S=new Mp(g.height);return S.fromEquirectangularTexture(n,f),t.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,g=d===Cd||d===Nd,S=d===Qr||d===ka;if(g||S){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new vp(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return g&&_&&_.height>0||S&&_&&l(_)?(i===null&&(i=new vp(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,d){return d===Cd?f.mapping=Qr:d===Nd&&(f.mapping=ka),f}function l(f){let d=0,g=6;for(let S=0;S<g;S++)f[S]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function BN(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ua("WebGLRenderer: "+i+" extension not supported."),s}}}function FN(n,t,e,i){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,S=0;if(g===void 0)return;if(d!==null){let _=d.array;S=d.version;for(let M=0,x=_.length;M<x;M+=3){let T=_[M+0],E=_[M+1],A=_[M+2];f.push(T,E,E,A,A,T)}}else{let _=g.array;S=g.version;for(let M=0,x=_.length/3-1;M<x;M+=3){let T=M+0,E=M+1,A=M+2;f.push(T,E,E,A,A,T)}}let m=new(g.count>=65535?hu:fu)(f,1);m.version=S;let p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function zN(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*a),e.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*a,d),e.update(f,i,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let S=0;for(let m=0;m<d;m++)S+=f[m];e.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function HN(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function VN(n,t,e){let i=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==h){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),S===!0&&(M=3);let x=o.attributes.position.count*M,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*T*4*h),A=new lu(E,x,T,h);A.type=yi,A.needsUpdate=!0;let y=M*4;for(let C=0;C<h;C++){let N=m[C],B=p[C],K=_[C],Q=x*T*4*C;for(let F=0;F<N.count;F++){let Y=F*y;d===!0&&(s.fromBufferAttribute(N,F),E[Q+Y+0]=s.x,E[Q+Y+1]=s.y,E[Q+Y+2]=s.z,E[Q+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,F),E[Q+Y+4]=s.x,E[Q+Y+5]=s.y,E[Q+Y+6]=s.z,E[Q+Y+7]=0),S===!0&&(s.fromBufferAttribute(K,F),E[Q+Y+8]=s.x,E[Q+Y+9]=s.y,E[Q+Y+10]=s.z,E[Q+Y+11]=K.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Kt(x,T)},i.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function GN(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var kN={[d_]:"LINEAR_TONE_MAPPING",[p_]:"REINHARD_TONE_MAPPING",[m_]:"CINEON_TONE_MAPPING",[g_]:"ACES_FILMIC_TONE_MAPPING",[x_]:"AGX_TONE_MAPPING",[y_]:"NEUTRAL_TONE_MAPPING",[__]:"CUSTOM_TONE_MAPPING"};function XN(n,t,e,i,s,r){let a=new mi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Qs(t,e):void 0}),o=new mi(t,e,{type:ys,depthBuffer:!1,stencilBuffer:!1}),l=new kn;l.setAttribute("position",new Vn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Vn([0,2,0,0,2,0],2));let c=new _d({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $e(l,c),h=new Kr(-1,1,1,-1,0,1),f=null,d=null,g=!1,S,m=null,p=[],_=!1;this.setSize=function(M,x){a.setSize(M,x),o.setSize(M,x);for(let T=0;T<p.length;T++){let E=p[T];E.setSize&&E.setSize(M,x)}},this.setEffects=function(M){p=M,_=p.length>0&&p[0].isRenderPass===!0;let x=a.width,T=a.height;for(let E=0;E<p.length;E++){let A=p[E];A.setSize&&A.setSize(x,T)}},this.begin=function(M,x){if(g||M.toneMapping===xi&&p.length===0)return!1;if(m=x,x!==null){let T=x.width,E=x.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return _===!1&&M.setRenderTarget(a),S=M.toneMapping,M.toneMapping=xi,!0},this.hasRenderPass=function(){return _},this.end=function(M,x){M.toneMapping=S,g=!0;let T=a,E=o;for(let A=0;A<p.length;A++){let y=p[A];if(y.enabled!==!1&&(y.render(M,E,T,x),y.needsSwap!==!1)){let w=T;T=E,E=w}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,c.defines={},Zt.getTransfer(f)===fe&&(c.defines.SRGB_TRANSFER="");let A=kN[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(m),M.render(u,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var bT=new mn,H_=new Qs(1,1),TT=new lu,ET=new dd,AT=new xu,sT=[],rT=[],aT=new Float32Array(16),oT=new Float32Array(9),lT=new Float32Array(4);function Dl(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=sT[s];if(r===void 0&&(r=new Float32Array(s),sT[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function gn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _n(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Tp(n,t){let e=rT[t];e===void 0&&(e=new Int32Array(t),rT[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function WN(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qN(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2fv(this.addr,t),_n(e,t)}}function YN(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;n.uniform3fv(this.addr,t),_n(e,t)}}function ZN(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4fv(this.addr,t),_n(e,t)}}function KN(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,i))return;lT.set(i),n.uniformMatrix2fv(this.addr,!1,lT),_n(e,i)}}function JN(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,i))return;oT.set(i),n.uniformMatrix3fv(this.addr,!1,oT),_n(e,i)}}function QN(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,i))return;aT.set(i),n.uniformMatrix4fv(this.addr,!1,aT),_n(e,i)}}function jN(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $N(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2iv(this.addr,t),_n(e,t)}}function tD(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;n.uniform3iv(this.addr,t),_n(e,t)}}function eD(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4iv(this.addr,t),_n(e,t)}}function nD(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function iD(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;n.uniform2uiv(this.addr,t),_n(e,t)}}function sD(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;n.uniform3uiv(this.addr,t),_n(e,t)}}function rD(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;n.uniform4uiv(this.addr,t),_n(e,t)}}function aD(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(H_.compareFunction=e.isReversedDepthBuffer()?_p:gp,r=H_):r=bT,e.setTexture2D(t||r,s)}function oD(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ET,s)}function lD(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||AT,s)}function cD(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||TT,s)}function uD(n){switch(n){case 5126:return WN;case 35664:return qN;case 35665:return YN;case 35666:return ZN;case 35674:return KN;case 35675:return JN;case 35676:return QN;case 5124:case 35670:return jN;case 35667:case 35671:return $N;case 35668:case 35672:return tD;case 35669:case 35673:return eD;case 5125:return nD;case 36294:return iD;case 36295:return sD;case 36296:return rD;case 35678:case 36198:case 36298:case 36306:case 35682:return aD;case 35679:case 36299:case 36307:return oD;case 35680:case 36300:case 36308:case 36293:return lD;case 36289:case 36303:case 36311:case 36292:return cD}}function fD(n,t){n.uniform1fv(this.addr,t)}function hD(n,t){let e=Dl(t,this.size,2);n.uniform2fv(this.addr,e)}function dD(n,t){let e=Dl(t,this.size,3);n.uniform3fv(this.addr,e)}function pD(n,t){let e=Dl(t,this.size,4);n.uniform4fv(this.addr,e)}function mD(n,t){let e=Dl(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gD(n,t){let e=Dl(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _D(n,t){let e=Dl(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function xD(n,t){n.uniform1iv(this.addr,t)}function yD(n,t){n.uniform2iv(this.addr,t)}function vD(n,t){n.uniform3iv(this.addr,t)}function MD(n,t){n.uniform4iv(this.addr,t)}function SD(n,t){n.uniform1uiv(this.addr,t)}function bD(n,t){n.uniform2uiv(this.addr,t)}function TD(n,t){n.uniform3uiv(this.addr,t)}function ED(n,t){n.uniform4uiv(this.addr,t)}function AD(n,t,e){let i=this.cache,s=t.length,r=Tp(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=H_:a=bT;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function wD(n,t,e){let i=this.cache,s=t.length,r=Tp(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ET,r[a])}function RD(n,t,e){let i=this.cache,s=t.length,r=Tp(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||AT,r[a])}function CD(n,t,e){let i=this.cache,s=t.length,r=Tp(e,s);gn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||TT,r[a])}function ND(n){switch(n){case 5126:return fD;case 35664:return hD;case 35665:return dD;case 35666:return pD;case 35674:return mD;case 35675:return gD;case 35676:return _D;case 5124:case 35670:return xD;case 35667:case 35671:return yD;case 35668:case 35672:return vD;case 35669:case 35673:return MD;case 5125:return SD;case 36294:return bD;case 36295:return TD;case 36296:return ED;case 35678:case 36198:case 36298:case 36306:case 35682:return AD;case 35679:case 36299:case 36307:return wD;case 35680:case 36300:case 36308:case 36293:return RD;case 36289:case 36303:case 36311:case 36292:return CD}}var V_=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uD(e.type)}},G_=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ND(e.type)}},k_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},F_=/(\w+)(\])?(\[|\.)?/g;function cT(n,t){n.seq.push(t),n.map[t.id]=t}function DD(n,t,e){let i=n.name,s=i.length;for(F_.lastIndex=0;;){let r=F_.exec(i),a=F_.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cT(e,c===void 0?new V_(o,n,t):new G_(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new k_(o),cT(e,h)),e=h}}}var Nl=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);DD(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function uT(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var LD=37297,UD=0;function ID(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var fT=new Ht;function PD(n){Zt._getMatrix(fT,Zt.workingColorSpace,n);let t=`mat3( ${fT.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case au:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function hT(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ID(n.getShaderSource(t),o)}else return r}function OD(n,t){let e=PD(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var BD={[d_]:"Linear",[p_]:"Reinhard",[m_]:"Cineon",[g_]:"ACESFilmic",[x_]:"AgX",[y_]:"Neutral",[__]:"Custom"};function FD(n,t){let e=BD[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yp=new U;function zD(){Zt.getLuminanceCoefficients(yp);let n=yp.x.toFixed(4),t=yp.y.toFixed(4),e=yp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vu).join(`
`)}function VD(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function GD(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Vu(n){return n!==""}function dT(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pT(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kD=/^[ \t]*#include +<([\w\d./]+)>/gm;function X_(n){return n.replace(kD,WD)}var XD=new Map;function WD(n,t){let e=Xt[t];if(e===void 0){let i=XD.get(t);if(i!==void 0)e=Xt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return X_(e)}var qD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mT(n){return n.replace(qD,YD)}function YD(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gT(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ZD={[Cu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function KD(n){return ZD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JD={[Qr]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE",[Nu]:"ENVMAP_TYPE_CUBE_UV"};function QD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":JD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var jD={[ka]:"ENVMAP_MODE_REFRACTION"};function $D(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":jD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tL={[h_]:"ENVMAP_BLENDING_MULTIPLY",[I1]:"ENVMAP_BLENDING_MIX",[P1]:"ENVMAP_BLENDING_ADD"};function eL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tL[n.combine]||"ENVMAP_BLENDING_NONE"}function nL(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function iL(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=KD(e),c=QD(e),u=$D(e),h=eL(e),f=nL(e),d=HD(e),g=VD(r),S=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vu).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vu).join(`
`),p.length>0&&(p+=`
`)):(m=[gT(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vu).join(`
`),p=[gT(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==xi?FD("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,OD("linearToOutputTexel",e.outputColorSpace),zD(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vu).join(`
`)),a=X_(a),a=dT(a,e),a=pT(a,e),o=X_(o),o=dT(o,e),o=pT(o,e),a=mT(a),o=mT(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+a,x=_+p+o,T=uT(s,s.VERTEX_SHADER,M),E=uT(s,s.FRAGMENT_SHADER,x);s.attachShader(S,T),s.attachShader(S,E),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function A(N){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(S)||"",K=s.getShaderInfoLog(T)||"",Q=s.getShaderInfoLog(E)||"",F=B.trim(),Y=K.trim(),X=Q.trim(),$=!0,nt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,T,E);else{let ut=hT(s,T,"vertex"),mt=hT(s,E,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+ut+`
`+mt)}else F!==""?Rt("WebGLProgram: Program Info Log:",F):(Y===""||X==="")&&(nt=!1);nt&&(N.diagnostics={runnable:$,programLog:F,vertexShader:{log:Y,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(T),s.deleteShader(E),y=new Nl(s,S),w=GD(s,S)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(S,LD)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=UD++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=E,this}var sL=0,W_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new q_(t),e.set(t,i)),i}},q_=class{constructor(t){this.id=sL++,this.code=t,this.usedTimes=0}};function rL(n){return n===$r||n===Pu||n===Ou}function aL(n,t,e,i,s,r){let a=new cu,o=new W_,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,w,C,N,B,K){let Q=N.fog,F=B.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,$=t.get(y.envMap||Y,X),nt=$&&$.mapping===Nu?$.image.height:null,ut=d[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Rt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let mt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,dt=mt!==void 0?mt.length:0,Ft=0;F.morphAttributes.position!==void 0&&(Ft=1),F.morphAttributes.normal!==void 0&&(Ft=2),F.morphAttributes.color!==void 0&&(Ft=3);let ce,Wt,J,ft;if(ut){let pt=Ms[ut];ce=pt.vertexShader,Wt=pt.fragmentShader}else{ce=y.vertexShader,Wt=y.fragmentShader;let pt=o.getVertexShaderStage(y),ae=o.getFragmentShaderStage(y);o.update(y,pt,ae),J=pt.id,ft=ae.id}let et=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Bt=B.isInstancedMesh===!0,Ut=B.isBatchedMesh===!0,ve=!!y.map,Vt=!!y.matcap,ue=!!$,ee=!!y.aoMap,te=!!y.lightMap,Be=!!y.bumpMap&&y.wireframe===!1,Fe=!!y.normalMap,qe=!!y.displacementMap,en=!!y.emissiveMap,Ne=!!y.metalnessMap,ze=!!y.roughnessMap,L=y.anisotropy>0,Tn=y.clearcoat>0,re=y.dispersion>0,R=y.iridescence>0,v=y.sheen>0,P=y.transmission>0,H=L&&!!y.anisotropyMap,W=Tn&&!!y.clearcoatMap,lt=Tn&&!!y.clearcoatNormalMap,k=Tn&&!!y.clearcoatRoughnessMap,O=R&&!!y.iridescenceMap,q=R&&!!y.iridescenceThicknessMap,rt=v&&!!y.sheenColorMap,xt=v&&!!y.sheenRoughnessMap,it=!!y.specularMap,st=!!y.specularColorMap,at=!!y.specularIntensityMap,vt=P&&!!y.transmissionMap,Mt=P&&!!y.thicknessMap,D=!!y.gradientMap,ct=!!y.alphaMap,Z=y.alphaTest>0,ot=!!y.alphaHash,ht=!!y.extensions,j=xi;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(j=n.toneMapping);let St={shaderID:ut,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:Wt,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&B._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&B.instanceColor!==null,instancingMorph:Bt&&B.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Vt,envMap:ue,envMapMode:ue&&$.mapping,envMapCubeUVHeight:nt,aoMap:ee,lightMap:te,bumpMap:Be,normalMap:Fe,displacementMap:qe,emissiveMap:en,normalMapObjectSpace:Fe&&y.normalMapType===z1,normalMapTangentSpace:Fe&&y.normalMapType===mp,packedNormalMap:Fe&&y.normalMapType===mp&&rL(y.normalMap.format),metalnessMap:Ne,roughnessMap:ze,anisotropy:L,anisotropyMap:H,clearcoat:Tn,clearcoatMap:W,clearcoatNormalMap:lt,clearcoatRoughnessMap:k,dispersion:re,iridescence:R,iridescenceMap:O,iridescenceThicknessMap:q,sheen:v,sheenColorMap:rt,sheenRoughnessMap:xt,specularMap:it,specularColorMap:st,specularIntensityMap:at,transmission:P,transmissionMap:vt,thicknessMap:Mt,gradientMap:D,opaque:y.transparent===!1&&y.blending===Ia&&y.alphaToCoverage===!1,alphaMap:ct,alphaTest:Z,alphaHash:ot,combine:y.combine,mapUv:ve&&g(y.map.channel),aoMapUv:ee&&g(y.aoMap.channel),lightMapUv:te&&g(y.lightMap.channel),bumpMapUv:Be&&g(y.bumpMap.channel),normalMapUv:Fe&&g(y.normalMap.channel),displacementMapUv:qe&&g(y.displacementMap.channel),emissiveMapUv:en&&g(y.emissiveMap.channel),metalnessMapUv:Ne&&g(y.metalnessMap.channel),roughnessMapUv:ze&&g(y.roughnessMap.channel),anisotropyMapUv:H&&g(y.anisotropyMap.channel),clearcoatMapUv:W&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:q&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(y.sheenRoughnessMap.channel),specularMapUv:it&&g(y.specularMap.channel),specularColorMapUv:st&&g(y.specularColorMap.channel),specularIntensityMapUv:at&&g(y.specularIntensityMap.channel),transmissionMapUv:vt&&g(y.transmissionMap.channel),thicknessMapUv:Mt&&g(y.thicknessMap.channel),alphaMapUv:ct&&g(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Fe||L),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(ve||ct),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Fe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:At,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:j,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:en&&y.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ti,flipSided:y.side===Xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ht&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&y.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)w.push(C),w.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(w,y),_(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){let w=d[y.type],C;if(w){let N=Ms[w];C=Q1.clone(N.uniforms)}else C=y.uniforms;return C}function x(y,w){let C=u.get(w);return C!==void 0?++C.usedTimes:(C=new iL(n,w,y,s),c.push(C),u.set(w,C)),C}function T(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:A}}function oL(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function lL(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function _T(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xT(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,S,m,p){let _=n[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:p},n[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=g,_.materialVariant=a(f),_.groupOrder=S,_.renderOrder=f.renderOrder,_.z=m,_.group=p),t++,_}function l(f,d,g,S,m,p){let _=o(f,d,g,S,m,p);g.transmission>0?i.push(_):g.transparent===!0?s.push(_):e.push(_)}function c(f,d,g,S,m,p){let _=o(f,d,g,S,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function u(f,d,g){e.length>1&&e.sort(f||lL),i.length>1&&i.sort(d||_T),s.length>1&&s.sort(d||_T),g&&(e.reverse(),i.reverse(),s.reverse())}function h(){for(let f=t,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function cL(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new xT,n.set(i,[a])):s>=r.length?(a=new xT,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function uL(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ct};break;case"SpotLight":e={position:new U,direction:new U,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function fL(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var hL=0;function dL(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pL(n){let t=new uL,e=fL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new zt,a=new zt;function o(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,g=0,S=0,m=0,p=0,_=0,M=0,x=0,T=0,E=0,A=0;c.sort(dL);for(let w=0,C=c.length;w<C;w++){let N=c[w],B=N.color,K=N.intensity,Q=N.distance,F=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===$r?F=N.shadow.map.texture:F=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=B.r*K,h+=B.g*K,f+=B.b*K;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],K);A++}else if(N.isDirectionalLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let X=N.shadow,$=e.get(N);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=N.shadow.matrix,_++}i.directional[d]=Y,d++}else if(N.isSpotLight){let Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(B).multiplyScalar(K),Y.distance=Q,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[S]=Y;let X=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,X.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[S]=X.matrix,N.castShadow){let $=e.get(N);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,i.spotShadow[S]=$,i.spotShadowMap[S]=F,x++}S++}else if(N.isRectAreaLight){let Y=t.get(N);Y.color.copy(B).multiplyScalar(K),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=Y,m++}else if(N.isPointLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let X=N.shadow,$=e.get(N);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=N.shadow.matrix,M++}i.point[g]=Y,g++}else if(N.isHemisphereLight){let Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(K),Y.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let y=i.hash;(y.directionalLength!==d||y.pointLength!==g||y.spotLength!==S||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==_||y.numPointShadows!==M||y.numSpotShadows!==x||y.numSpotMaps!==T||y.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,y.directionalLength=d,y.pointLength=g,y.spotLength=S,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=_,y.numPointShadows=M,y.numSpotShadows=x,y.numSpotMaps=T,y.numLightProbes=A,i.version=hL++)}function l(c,u){let h=0,f=0,d=0,g=0,S=0,m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let M=c[p];if(M.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let x=i.hemi[S];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function yT(n){let t=new pL(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){e.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function mL(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yT(n),t.set(s,[o])):r>=a.length?(o=new yT(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var gL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_L=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xL=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],yL=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],vT=new zt,Hu=new U,z_=new U;function vL(n,t,e){let i=new yl,s=new Kt,r=new Kt,a=new ge,o=new xd,l=new yd,c={},u=e.maxTextureSize,h={[Ki]:Xn,[Xn]:Ki,[ti]:ti},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:gL,fragmentShader:_L}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new kn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new $e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let p=this.type;this.render=function(E,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===m1&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cu);let w=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(xs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let K=p!==this.type;K&&A.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(F=>F.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,F=E.length;Q<F;Q++){let Y=E[Q],X=Y.shadow;if(X===void 0){Rt("WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let $=X.getFrameExtents();s.multiply($),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,X.mapSize.y=r.y));let nt=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=nt,X.map===null||K===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Tl){if(Y.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new mi(s.x,s.y,{format:$r,type:ys,minFilter:je,magFilter:je,generateMipmaps:!1}),X.map.texture.name=Y.name+".shadowMap",X.map.depthTexture=new Qs(s.x,s.y,yi),X.map.depthTexture.name=Y.name+".shadowMapDepth",X.map.depthTexture.format=ds,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qe,X.map.depthTexture.magFilter=Qe}else Y.isPointLight?(X.map=new Mp(s.x),X.map.depthTexture=new gd(s.x,Qi)):(X.map=new mi(s.x,s.y),X.map.depthTexture=new Qs(s.x,s.y,Qi)),X.map.depthTexture.name=Y.name+".shadowMap",X.map.depthTexture.format=ds,this.type===Cu?(X.map.depthTexture.compareFunction=nt?_p:gp,X.map.depthTexture.minFilter=je,X.map.depthTexture.magFilter=je):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qe,X.map.depthTexture.magFilter=Qe);X.camera.updateProjectionMatrix()}let ut=X.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<ut;mt++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,mt),n.clear();else{mt===0&&(n.setRenderTarget(X.map),n.clear());let dt=X.getViewport(mt);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),B.viewport(a)}if(Y.isPointLight){let dt=X.camera,Ft=X.matrix,ce=Y.distance||dt.far;ce!==dt.far&&(dt.far=ce,dt.updateProjectionMatrix()),Hu.setFromMatrixPosition(Y.matrixWorld),dt.position.copy(Hu),z_.copy(dt.position),z_.add(xL[mt]),dt.up.copy(yL[mt]),dt.lookAt(z_),dt.updateMatrixWorld(),Ft.makeTranslation(-Hu.x,-Hu.y,-Hu.z),vT.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(vT,dt.coordinateSystem,dt.reversedDepth)}else X.updateMatrices(Y);i=X.getFrustum(),x(A,y,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Tl&&_(X,y),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,C,N)};function _(E,A){let y=t.update(S);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mi(s.x,s.y,{format:$r,type:ys})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,y,f,S,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,y,d,S,null)}function M(E,A,y,w){let C=null,N=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=y.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=C.uuid,K=A.uuid,Q=c[B];Q===void 0&&(Q={},c[B]=Q);let F=Q[K];F===void 0&&(F=C.clone(),Q[K]=F,A.addEventListener("dispose",T)),C=F}if(C.visible=A.visible,C.wireframe=A.wireframe,w===Tl?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=y}return C}function x(E,A,y,w,C){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Tl)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let K=t.update(E),Q=E.material;if(Array.isArray(Q)){let F=K.groups;for(let Y=0,X=F.length;Y<X;Y++){let $=F[Y],nt=Q[$.materialIndex];if(nt&&nt.visible){let ut=M(E,nt,w,C);E.onBeforeShadow(n,E,A,y,K,ut,$),n.renderBufferDirect(y,null,K,ut,E,$),E.onAfterShadow(n,E,A,y,K,ut,$)}}}else if(Q.visible){let F=M(E,Q,w,C);E.onBeforeShadow(n,E,A,y,K,F,null),n.renderBufferDirect(y,null,K,F,E,null),E.onAfterShadow(n,E,A,y,K,F,null)}}let B=E.children;for(let K=0,Q=B.length;K<Q;K++)x(B[K],A,y,w,C)}function T(E){E.target.removeEventListener("dispose",T);for(let y in c){let w=c[y],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function ML(n,t){function e(){let D=!1,ct=new ge,Z=null,ot=new ge(0,0,0,0);return{setMask:function(ht){Z!==ht&&!D&&(n.colorMask(ht,ht,ht,ht),Z=ht)},setLocked:function(ht){D=ht},setClear:function(ht,j,St,pt,ae){ae===!0&&(ht*=pt,j*=pt,St*=pt),ct.set(ht,j,St,pt),ot.equals(ct)===!1&&(n.clearColor(ht,j,St,pt),ot.copy(ct))},reset:function(){D=!1,Z=null,ot.set(-1,0,0,0)}}}function i(){let D=!1,ct=!1,Z=null,ot=null,ht=null;return{setReversed:function(j){if(ct!==j){let St=t.get("EXT_clip_control");j?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ct=j;let pt=ht;ht=null,this.setClear(pt)}},getReversed:function(){return ct},setTest:function(j){j?et(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(j){Z!==j&&!D&&(n.depthMask(j),Z=j)},setFunc:function(j){if(ct&&(j=K1[j]),ot!==j){switch(j){case id:n.depthFunc(n.NEVER);break;case sd:n.depthFunc(n.ALWAYS);break;case rd:n.depthFunc(n.LESS);break;case Pa:n.depthFunc(n.LEQUAL);break;case ad:n.depthFunc(n.EQUAL);break;case od:n.depthFunc(n.GEQUAL);break;case ld:n.depthFunc(n.GREATER);break;case cd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=j}},setLocked:function(j){D=j},setClear:function(j){ht!==j&&(ht=j,ct&&(j=1-j),n.clearDepth(j))},reset:function(){D=!1,Z=null,ot=null,ht=null,ct=!1}}}function s(){let D=!1,ct=null,Z=null,ot=null,ht=null,j=null,St=null,pt=null,ae=null;return{setTest:function(Dt){D||(Dt?et(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(Dt){ct!==Dt&&!D&&(n.stencilMask(Dt),ct=Dt)},setFunc:function(Dt,It,Et){(Z!==Dt||ot!==It||ht!==Et)&&(n.stencilFunc(Dt,It,Et),Z=Dt,ot=It,ht=Et)},setOp:function(Dt,It,Et){(j!==Dt||St!==It||pt!==Et)&&(n.stencilOp(Dt,It,Et),j=Dt,St=It,pt=Et)},setLocked:function(Dt){D=Dt},setClear:function(Dt){ae!==Dt&&(n.clearStencil(Dt),ae=Dt)},reset:function(){D=!1,ct=null,Z=null,ot=null,ht=null,j=null,St=null,pt=null,ae=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],S=null,m=!1,p=null,_=null,M=null,x=null,T=null,E=null,A=null,y=new Ct(0,0,0),w=0,C=!1,N=null,B=null,K=null,Q=null,F=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,$=0,nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(nt)[1]),X=$>=1):nt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),X=$>=2);let ut=null,mt={},dt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),ce=new ge().fromArray(dt),Wt=new ge().fromArray(Ft);function J(D,ct,Z,ot){let ht=new Uint8Array(4),j=n.createTexture();n.bindTexture(D,j),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let St=0;St<Z;St++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(ct+St,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return j}let ft={};ft[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(n.DEPTH_TEST),a.setFunc(Pa),Be(!1),Fe(l_),et(n.CULL_FACE),ee(xs);function et(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function At(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Bt(D,ct){return f[D]!==ct?(n.bindFramebuffer(D,ct),f[D]=ct,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ct),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ut(D,ct){let Z=g,ot=!1;if(D){Z=d.get(ct),Z===void 0&&(Z=[],d.set(ct,Z));let ht=D.textures;if(Z.length!==ht.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let j=0,St=ht.length;j<St;j++)Z[j]=n.COLOR_ATTACHMENT0+j;Z.length=ht.length,ot=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ot=!0);ot&&n.drawBuffers(Z)}function ve(D){return S!==D?(n.useProgram(D),S=D,!0):!1}let Vt={[Xr]:n.FUNC_ADD,[_1]:n.FUNC_SUBTRACT,[x1]:n.FUNC_REVERSE_SUBTRACT};Vt[y1]=n.MIN,Vt[v1]=n.MAX;let ue={[M1]:n.ZERO,[S1]:n.ONE,[b1]:n.SRC_COLOR,[ed]:n.SRC_ALPHA,[C1]:n.SRC_ALPHA_SATURATE,[w1]:n.DST_COLOR,[E1]:n.DST_ALPHA,[T1]:n.ONE_MINUS_SRC_COLOR,[nd]:n.ONE_MINUS_SRC_ALPHA,[R1]:n.ONE_MINUS_DST_COLOR,[A1]:n.ONE_MINUS_DST_ALPHA,[N1]:n.CONSTANT_COLOR,[D1]:n.ONE_MINUS_CONSTANT_COLOR,[L1]:n.CONSTANT_ALPHA,[U1]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(D,ct,Z,ot,ht,j,St,pt,ae,Dt){if(D===xs){m===!0&&(At(n.BLEND),m=!1);return}if(m===!1&&(et(n.BLEND),m=!0),D!==g1){if(D!==p||Dt!==C){if((_!==Xr||T!==Xr)&&(n.blendEquation(n.FUNC_ADD),_=Xr,T=Xr),Dt)switch(D){case Ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case c_:n.blendFunc(n.ONE,n.ONE);break;case u_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case f_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",D);break}else switch(D){case Ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case c_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case u_:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f_:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",D);break}M=null,x=null,E=null,A=null,y.set(0,0,0),w=0,p=D,C=Dt}return}ht=ht||ct,j=j||Z,St=St||ot,(ct!==_||ht!==T)&&(n.blendEquationSeparate(Vt[ct],Vt[ht]),_=ct,T=ht),(Z!==M||ot!==x||j!==E||St!==A)&&(n.blendFuncSeparate(ue[Z],ue[ot],ue[j],ue[St]),M=Z,x=ot,E=j,A=St),(pt.equals(y)===!1||ae!==w)&&(n.blendColor(pt.r,pt.g,pt.b,ae),y.copy(pt),w=ae),p=D,C=!1}function te(D,ct){D.side===ti?At(n.CULL_FACE):et(n.CULL_FACE);let Z=D.side===Xn;ct&&(Z=!Z),Be(Z),D.blending===Ia&&D.transparent===!1?ee(xs):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ot=D.stencilWrite;o.setTest(ot),ot&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),en(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){N!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),N=D)}function Fe(D){D!==d1?(et(n.CULL_FACE),D!==B&&(D===l_?n.cullFace(n.BACK):D===p1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),B=D}function qe(D){D!==K&&(X&&n.lineWidth(D),K=D)}function en(D,ct,Z){D?(et(n.POLYGON_OFFSET_FILL),(Q!==ct||F!==Z)&&(Q=ct,F=Z,a.getReversed()&&(ct=-ct),n.polygonOffset(ct,Z))):At(n.POLYGON_OFFSET_FILL)}function Ne(D){D?et(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function ze(D){D===void 0&&(D=n.TEXTURE0+Y-1),ut!==D&&(n.activeTexture(D),ut=D)}function L(D,ct,Z){Z===void 0&&(ut===null?Z=n.TEXTURE0+Y-1:Z=ut);let ot=mt[Z];ot===void 0&&(ot={type:void 0,texture:void 0},mt[Z]=ot),(ot.type!==D||ot.texture!==ct)&&(ut!==Z&&(n.activeTexture(Z),ut=Z),n.bindTexture(D,ct||ft[D]),ot.type=D,ot.texture=ct)}function Tn(){let D=mt[ut];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function v(){try{n.texSubImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function P(){try{n.texSubImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function lt(){try{n.texStorage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function k(){try{n.texStorage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function O(){try{n.texImage2D(...arguments)}catch(D){Pt("WebGLState:",D)}}function q(){try{n.texImage3D(...arguments)}catch(D){Pt("WebGLState:",D)}}function rt(D){return h[D]!==void 0?h[D]:n.getParameter(D)}function xt(D,ct){h[D]!==ct&&(n.pixelStorei(D,ct),h[D]=ct)}function it(D){ce.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function st(D){Wt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Wt.copy(D))}function at(D,ct){let Z=c.get(ct);Z===void 0&&(Z=new WeakMap,c.set(ct,Z));let ot=Z.get(D);ot===void 0&&(ot=n.getUniformBlockIndex(ct,D.name),Z.set(D,ot))}function vt(D,ct){let ot=c.get(ct).get(D);l.get(ct)!==ot&&(n.uniformBlockBinding(ct,ot,D.__bindingPointIndex),l.set(ct,ot))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ut=null,mt={},f={},d=new WeakMap,g=[],S=null,m=!1,p=null,_=null,M=null,x=null,T=null,E=null,A=null,y=new Ct(0,0,0),w=0,C=!1,N=null,B=null,K=null,Q=null,F=null,ce.set(0,0,n.canvas.width,n.canvas.height),Wt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:At,bindFramebuffer:Bt,drawBuffers:Ut,useProgram:ve,setBlending:ee,setMaterial:te,setFlipSided:Be,setCullFace:Fe,setLineWidth:qe,setPolygonOffset:en,setScissorTest:Ne,activeTexture:ze,bindTexture:L,unbindTexture:Tn,compressedTexImage2D:re,compressedTexImage3D:R,texImage2D:O,texImage3D:q,pixelStorei:xt,getParameter:rt,updateUBOMapping:at,uniformBlockBinding:vt,texStorage2D:lt,texStorage3D:k,texSubImage2D:v,texSubImage3D:P,compressedTexSubImage2D:H,compressedTexSubImage3D:W,scissor:it,viewport:st,reset:Mt}}function SL(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,u=new WeakMap,h=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,v){return g?new OffscreenCanvas(R,v):fl("canvas")}function m(R,v,P){let H=1,W=re(R);if((W.width>P||W.height>P)&&(H=P/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let lt=Math.floor(H*W.width),k=Math.floor(H*W.height);f===void 0&&(f=S(lt,k));let O=v?S(lt,k):f;return O.width=lt,O.height=k,O.getContext("2d").drawImage(R,0,0,lt,k),Rt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+lt+"x"+k+")."),O}else return"data"in R&&Rt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),R;return R}function p(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,v,P,H,W,lt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let k;H&&(k=t.get("EXT_texture_norm16"),k||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=v;if(v===n.RED&&(P===n.FLOAT&&(O=n.R32F),P===n.HALF_FLOAT&&(O=n.R16F),P===n.UNSIGNED_BYTE&&(O=n.R8),P===n.UNSIGNED_SHORT&&k&&(O=k.R16_EXT),P===n.SHORT&&k&&(O=k.R16_SNORM_EXT)),v===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(O=n.R8UI),P===n.UNSIGNED_SHORT&&(O=n.R16UI),P===n.UNSIGNED_INT&&(O=n.R32UI),P===n.BYTE&&(O=n.R8I),P===n.SHORT&&(O=n.R16I),P===n.INT&&(O=n.R32I)),v===n.RG&&(P===n.FLOAT&&(O=n.RG32F),P===n.HALF_FLOAT&&(O=n.RG16F),P===n.UNSIGNED_BYTE&&(O=n.RG8),P===n.UNSIGNED_SHORT&&k&&(O=k.RG16_EXT),P===n.SHORT&&k&&(O=k.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(O=n.RG8UI),P===n.UNSIGNED_SHORT&&(O=n.RG16UI),P===n.UNSIGNED_INT&&(O=n.RG32UI),P===n.BYTE&&(O=n.RG8I),P===n.SHORT&&(O=n.RG16I),P===n.INT&&(O=n.RG32I)),v===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(O=n.RGB8UI),P===n.UNSIGNED_SHORT&&(O=n.RGB16UI),P===n.UNSIGNED_INT&&(O=n.RGB32UI),P===n.BYTE&&(O=n.RGB8I),P===n.SHORT&&(O=n.RGB16I),P===n.INT&&(O=n.RGB32I)),v===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(O=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(O=n.RGBA16UI),P===n.UNSIGNED_INT&&(O=n.RGBA32UI),P===n.BYTE&&(O=n.RGBA8I),P===n.SHORT&&(O=n.RGBA16I),P===n.INT&&(O=n.RGBA32I)),v===n.RGB&&(P===n.UNSIGNED_SHORT&&k&&(O=k.RGB16_EXT),P===n.SHORT&&k&&(O=k.RGB16_SNORM_EXT),P===n.UNSIGNED_INT_5_9_9_9_REV&&(O=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(O=n.R11F_G11F_B10F)),v===n.RGBA){let q=lt?au:Zt.getTransfer(W);P===n.FLOAT&&(O=n.RGBA32F),P===n.HALF_FLOAT&&(O=n.RGBA16F),P===n.UNSIGNED_BYTE&&(O=q===fe?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT&&k&&(O=k.RGBA16_EXT),P===n.SHORT&&k&&(O=k.RGBA16_SNORM_EXT),P===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)}return(O===n.R16F||O===n.R32F||O===n.RG16F||O===n.RG32F||O===n.RGBA16F||O===n.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function T(R,v){let P;return R?v===null||v===Qi||v===wl?P=n.DEPTH24_STENCIL8:v===yi?P=n.DEPTH32F_STENCIL8:v===Al&&(P=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qi||v===wl?P=n.DEPTH_COMPONENT24:v===yi?P=n.DEPTH_COMPONENT32F:v===Al&&(P=n.DEPTH_COMPONENT16),P}function E(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qe&&R.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){let v=R.target;v.removeEventListener("dispose",A),w(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function y(R){let v=R.target;v.removeEventListener("dispose",y),N(v)}function w(R){let v=i.get(R);if(v.__webglInit===void 0)return;let P=R.source,H=d.get(P);if(H){let W=H[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(R),Object.keys(H).length===0&&d.delete(P)}i.remove(R)}function C(R){let v=i.get(R);n.deleteTexture(v.__webglTexture);let P=R.source,H=d.get(P);delete H[v.__cacheKey],a.memory.textures--}function N(R){let v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let W=0;W<v.__webglFramebuffer[H].length;W++)n.deleteFramebuffer(v.__webglFramebuffer[H][W]);else n.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)n.deleteFramebuffer(v.__webglFramebuffer[H]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let P=R.textures;for(let H=0,W=P.length;H<W;H++){let lt=i.get(P[H]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),a.memory.textures--),i.remove(P[H])}i.remove(R)}let B=0;function K(){B=0}function Q(){return B}function F(R){B=R}function Y(){let R=B;return R>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function X(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function $(R,v){let P=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){let H=R.image;if(H===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{At(P,R,v);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+v)}function nt(R,v){let P=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){At(P,R,v);return}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+v)}function ut(R,v){let P=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){At(P,R,v);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+v)}function mt(R,v){let P=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&P.__version!==R.version){Bt(P,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+v)}let dt={[Wr]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},Ft={[Qe]:n.NEAREST,[Dd]:n.NEAREST_MIPMAP_NEAREST,[Xa]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[El]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},ce={[H1]:n.NEVER,[W1]:n.ALWAYS,[V1]:n.LESS,[gp]:n.LEQUAL,[G1]:n.EQUAL,[_p]:n.GEQUAL,[k1]:n.GREATER,[X1]:n.NOTEQUAL};function Wt(R,v){if(v.type===yi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===je||v.magFilter===El||v.magFilter===Xa||v.magFilter===Ji||v.minFilter===je||v.minFilter===El||v.minFilter===Xa||v.minFilter===Ji)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,dt[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,dt[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,dt[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ft[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ft[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qe||v.minFilter!==Xa&&v.minFilter!==Ji||v.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function J(R,v){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));let H=v.source,W=d.get(H);W===void 0&&(W={},d.set(H,W));let lt=X(v);if(lt!==R.__cacheKey){W[lt]===void 0&&(W[lt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),W[lt].usedTimes++;let k=W[R.__cacheKey];k!==void 0&&(W[R.__cacheKey].usedTimes--,k.usedTimes===0&&C(v)),R.__cacheKey=lt,R.__webglTexture=W[lt].texture}return P}function ft(R,v,P){return Math.floor(Math.floor(R/P)/v)}function et(R,v,P,H){let lt=R.updateRanges;if(lt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,P,H,v.data);else{lt.sort((xt,it)=>xt.start-it.start);let k=0;for(let xt=1;xt<lt.length;xt++){let it=lt[k],st=lt[xt],at=it.start+it.count,vt=ft(st.start,v.width,4),Mt=ft(it.start,v.width,4);st.start<=at+1&&vt===Mt&&ft(st.start+st.count-1,v.width,4)===vt?it.count=Math.max(it.count,st.start+st.count-it.start):(++k,lt[k]=st)}lt.length=k+1;let O=e.getParameter(n.UNPACK_ROW_LENGTH),q=e.getParameter(n.UNPACK_SKIP_PIXELS),rt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let xt=0,it=lt.length;xt<it;xt++){let st=lt[xt],at=Math.floor(st.start/4),vt=Math.ceil(st.count/4),Mt=at%v.width,D=Math.floor(at/v.width),ct=vt,Z=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Mt,D,ct,Z,P,H,v.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,O),e.pixelStorei(n.UNPACK_SKIP_PIXELS,q),e.pixelStorei(n.UNPACK_SKIP_ROWS,rt)}}function At(R,v,P){let H=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=n.TEXTURE_3D);let W=J(R,v),lt=v.source;e.bindTexture(H,R.__webglTexture,n.TEXTURE0+P);let k=i.get(lt);if(lt.version!==k.__version||W===!0){if(e.activeTexture(n.TEXTURE0+P),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Z=Zt.getPrimaries(Zt.workingColorSpace),ot=v.colorSpace===sr?null:Zt.getPrimaries(v.colorSpace),ht=v.colorSpace===sr||Z===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let q=m(v.image,!1,s.maxTextureSize);q=Tn(v,q);let rt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),it=x(v.internalFormat,rt,xt,v.normalized,v.colorSpace,v.isVideoTexture);Wt(H,v);let st,at=v.mipmaps,vt=v.isVideoTexture!==!0,Mt=k.__version===void 0||W===!0,D=lt.dataReady,ct=E(v,q);if(v.isDepthTexture)it=T(v.format===jr,v.type),Mt&&(vt?e.texStorage2D(n.TEXTURE_2D,1,it,q.width,q.height):e.texImage2D(n.TEXTURE_2D,0,it,q.width,q.height,0,rt,xt,null));else if(v.isDataTexture)if(at.length>0){vt&&Mt&&e.texStorage2D(n.TEXTURE_2D,ct,it,at[0].width,at[0].height);for(let Z=0,ot=at.length;Z<ot;Z++)st=at[Z],vt?D&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,st.width,st.height,rt,xt,st.data):e.texImage2D(n.TEXTURE_2D,Z,it,st.width,st.height,0,rt,xt,st.data);v.generateMipmaps=!1}else vt?(Mt&&e.texStorage2D(n.TEXTURE_2D,ct,it,q.width,q.height),D&&et(v,q,rt,xt)):e.texImage2D(n.TEXTURE_2D,0,it,q.width,q.height,0,rt,xt,q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){vt&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,it,at[0].width,at[0].height,q.depth);for(let Z=0,ot=at.length;Z<ot;Z++)if(st=at[Z],v.format!==vi)if(rt!==null)if(vt){if(D)if(v.layerUpdates.size>0){let ht=U_(st.width,st.height,v.format,v.type);for(let j of v.layerUpdates){let St=st.data.subarray(j*ht/st.data.BYTES_PER_ELEMENT,(j+1)*ht/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,j,st.width,st.height,1,rt,St)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,st.width,st.height,q.depth,rt,st.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,it,st.width,st.height,q.depth,0,st.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,st.width,st.height,q.depth,rt,xt,st.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,it,st.width,st.height,q.depth,0,rt,xt,st.data)}else{vt&&Mt&&e.texStorage2D(n.TEXTURE_2D,ct,it,at[0].width,at[0].height);for(let Z=0,ot=at.length;Z<ot;Z++)st=at[Z],v.format!==vi?rt!==null?vt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,st.width,st.height,rt,st.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,it,st.width,st.height,0,st.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?D&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,st.width,st.height,rt,xt,st.data):e.texImage2D(n.TEXTURE_2D,Z,it,st.width,st.height,0,rt,xt,st.data)}else if(v.isDataArrayTexture)if(vt){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,it,q.width,q.height,q.depth),D)if(v.layerUpdates.size>0){let Z=U_(q.width,q.height,v.format,v.type);for(let ot of v.layerUpdates){let ht=q.data.subarray(ot*Z/q.data.BYTES_PER_ELEMENT,(ot+1)*Z/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,q.width,q.height,1,rt,xt,ht)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,rt,xt,q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,it,q.width,q.height,q.depth,0,rt,xt,q.data);else if(v.isData3DTexture)vt?(Mt&&e.texStorage3D(n.TEXTURE_3D,ct,it,q.width,q.height,q.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,rt,xt,q.data)):e.texImage3D(n.TEXTURE_3D,0,it,q.width,q.height,q.depth,0,rt,xt,q.data);else if(v.isFramebufferTexture){if(Mt)if(vt)e.texStorage2D(n.TEXTURE_2D,ct,it,q.width,q.height);else{let Z=q.width,ot=q.height;for(let ht=0;ht<ct;ht++)e.texImage2D(n.TEXTURE_2D,ht,it,Z,ot,0,rt,xt,null),Z>>=1,ot>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),q.parentNode!==Z){Z.appendChild(q),h.add(v),Z.onpaint=ot=>{let ht=ot.changedElements;for(let j of h)ht.includes(j.image)&&(j.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,q);else{let ht=n.RGBA,j=n.RGBA,St=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ht,j,St,q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(at.length>0){if(vt&&Mt){let Z=re(at[0]);e.texStorage2D(n.TEXTURE_2D,ct,it,Z.width,Z.height)}for(let Z=0,ot=at.length;Z<ot;Z++)st=at[Z],vt?D&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,rt,xt,st):e.texImage2D(n.TEXTURE_2D,Z,it,rt,xt,st);v.generateMipmaps=!1}else if(vt){if(Mt){let Z=re(q);e.texStorage2D(n.TEXTURE_2D,ct,it,Z.width,Z.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt,xt,q)}else e.texImage2D(n.TEXTURE_2D,0,it,rt,xt,q);p(v)&&_(H),k.__version=lt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Bt(R,v,P){if(v.image.length!==6)return;let H=J(R,v),W=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+P);let lt=i.get(W);if(W.version!==lt.__version||H===!0){e.activeTexture(n.TEXTURE0+P);let k=Zt.getPrimaries(Zt.workingColorSpace),O=v.colorSpace===sr?null:Zt.getPrimaries(v.colorSpace),q=v.colorSpace===sr||k===O?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let rt=v.isCompressedTexture||v.image[0].isCompressedTexture,xt=v.image[0]&&v.image[0].isDataTexture,it=[];for(let j=0;j<6;j++)!rt&&!xt?it[j]=m(v.image[j],!0,s.maxCubemapSize):it[j]=xt?v.image[j].image:v.image[j],it[j]=Tn(v,it[j]);let st=it[0],at=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),Mt=x(v.internalFormat,at,vt,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,ct=lt.__version===void 0||H===!0,Z=W.dataReady,ot=E(v,st);Wt(n.TEXTURE_CUBE_MAP,v);let ht;if(rt){D&&ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,Mt,st.width,st.height);for(let j=0;j<6;j++){ht=it[j].mipmaps;for(let St=0;St<ht.length;St++){let pt=ht[St];v.format!==vi?at!==null?D?Z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,pt.width,pt.height,at,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,Mt,pt.width,pt.height,0,pt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,pt.width,pt.height,at,vt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,Mt,pt.width,pt.height,0,at,vt,pt.data)}}}else{if(ht=v.mipmaps,D&&ct){ht.length>0&&ot++;let j=re(it[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,Mt,j.width,j.height)}for(let j=0;j<6;j++)if(xt){D?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,it[j].width,it[j].height,at,vt,it[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Mt,it[j].width,it[j].height,0,at,vt,it[j].data);for(let St=0;St<ht.length;St++){let ae=ht[St].image[j].image;D?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,ae.width,ae.height,at,vt,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,Mt,ae.width,ae.height,0,at,vt,ae.data)}}else{D?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,at,vt,it[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Mt,at,vt,it[j]);for(let St=0;St<ht.length;St++){let pt=ht[St];D?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,at,vt,pt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,Mt,at,vt,pt.image[j])}}}p(v)&&_(n.TEXTURE_CUBE_MAP),lt.__version=W.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ut(R,v,P,H,W,lt){let k=r.convert(P.format,P.colorSpace),O=r.convert(P.type),q=x(P.internalFormat,k,O,P.normalized,P.colorSpace),rt=i.get(v),xt=i.get(P);if(xt.__renderTarget=v,!rt.__hasExternalTextures){let it=Math.max(1,v.width>>lt),st=Math.max(1,v.height>>lt);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,lt,q,it,st,v.depth,0,k,O,null):e.texImage2D(W,lt,q,it,st,0,k,O,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ze(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,W,xt.__webglTexture,0,Ne(v)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,W,xt.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(R,v,P){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){let H=v.depthTexture,W=H&&H.isDepthTexture?H.type:null,lt=T(v.stencilBuffer,W),k=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ze(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(v),lt,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(v),lt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,lt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,R)}else{let H=v.textures;for(let W=0;W<H.length;W++){let lt=H[W],k=r.convert(lt.format,lt.colorSpace),O=r.convert(lt.type),q=x(lt.internalFormat,k,O,lt.normalized,lt.colorSpace);ze(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(v),q,v.width,v.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(v),q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(R,v,P){let H=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(v.depthTexture);if(W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(W.__webglInit===void 0&&(W.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,v.depthTexture);let rt=r.convert(v.depthTexture.format),xt=r.convert(v.depthTexture.type),it;v.depthTexture.format===ds?it=n.DEPTH_COMPONENT24:v.depthTexture.format===jr&&(it=n.DEPTH24_STENCIL8);for(let st=0;st<6;st++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,it,v.width,v.height,0,rt,xt,null)}}else $(v.depthTexture,0);let lt=W.__webglTexture,k=Ne(v),O=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,q=v.depthTexture.format===jr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ds)ze(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,O,lt,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,q,O,lt,0);else if(v.depthTexture.format===jr)ze(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,O,lt,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,q,O,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(R){let v=i.get(R),P=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){let W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=H}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(P)for(let H=0;H<6;H++)Vt(v.__webglFramebuffer[H],R,H);else{let H=R.texture.mipmaps;H&&H.length>0?Vt(v.__webglFramebuffer[0],R,0):Vt(v.__webglFramebuffer,R,0)}else if(P){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=n.createRenderbuffer(),ve(v.__webglDepthbuffer[H],R,!1);else{let W=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,lt)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ve(v.__webglDepthbuffer,R,!1);else{let W=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,lt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(R,v,P){let H=i.get(R);v!==void 0&&Ut(H.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&ue(R)}function te(R){let v=R.texture,P=i.get(R),H=i.get(v);R.addEventListener("dispose",y);let W=R.textures,lt=R.isWebGLCubeRenderTarget===!0,k=W.length>1;if(k||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=v.version,a.memory.textures++),lt){P.__webglFramebuffer=[];for(let O=0;O<6;O++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[O]=[];for(let q=0;q<v.mipmaps.length;q++)P.__webglFramebuffer[O][q]=n.createFramebuffer()}else P.__webglFramebuffer[O]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let O=0;O<v.mipmaps.length;O++)P.__webglFramebuffer[O]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(k)for(let O=0,q=W.length;O<q;O++){let rt=i.get(W[O]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ze(R)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let O=0;O<W.length;O++){let q=W[O];P.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[O]);let rt=r.convert(q.format,q.colorSpace),xt=r.convert(q.type),it=x(q.internalFormat,rt,xt,q.normalized,q.colorSpace,R.isXRRenderTarget===!0),st=Ne(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,st,it,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,P.__webglColorRenderbuffer[O])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(P.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,v);for(let O=0;O<6;O++)if(v.mipmaps&&v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)Ut(P.__webglFramebuffer[O][q],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+O,q);else Ut(P.__webglFramebuffer[O],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);p(v)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(k){for(let O=0,q=W.length;O<q;O++){let rt=W[O],xt=i.get(rt),it=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,xt.__webglTexture),Wt(it,rt),Ut(P.__webglFramebuffer,R,rt,n.COLOR_ATTACHMENT0+O,it,0),p(rt)&&_(it)}e.unbindTexture()}else{let O=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(O=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(O,H.__webglTexture),Wt(O,v),v.mipmaps&&v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)Ut(P.__webglFramebuffer[q],R,v,n.COLOR_ATTACHMENT0,O,q);else Ut(P.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,O,0);p(v)&&_(O),e.unbindTexture()}R.depthBuffer&&ue(R)}function Be(R){let v=R.textures;for(let P=0,H=v.length;P<H;P++){let W=v[P];if(p(W)){let lt=M(R),k=i.get(W).__webglTexture;e.bindTexture(lt,k),_(lt),e.unbindTexture()}}}let Fe=[],qe=[];function en(R){if(R.samples>0){if(ze(R)===!1){let v=R.textures,P=R.width,H=R.height,W=n.COLOR_BUFFER_BIT,lt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=i.get(R),O=v.length>1;if(O)for(let rt=0;rt<v.length;rt++)e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer);let q=R.texture.mipmaps;q&&q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let rt=0;rt<v.length;rt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),O){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,k.__webglColorRenderbuffer[rt]);let xt=i.get(v[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xt,0)}n.blitFramebuffer(0,0,P,H,0,0,P,H,W,n.NEAREST),l===!0&&(Fe.length=0,qe.length=0,Fe.push(n.COLOR_ATTACHMENT0+rt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Fe.push(lt),qe.push(lt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,qe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),O)for(let rt=0;rt<v.length;rt++){e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,k.__webglColorRenderbuffer[rt]);let xt=i.get(v[rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ne(R){return Math.min(s.maxSamples,R.samples)}function ze(R){let v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(R){let v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Tn(R,v){let P=R.colorSpace,H=R.format,W=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==Gn&&P!==sr&&(Zt.getTransfer(P)===fe?(H!==vi||W!==ei)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",P)),v}function re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=K,this.getTextureUnits=Q,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=nt,this.setTexture3D=ut,this.setTextureCube=mt,this.rebindTextures=ee,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bL(n,t){function e(i,s=sr){let r,a=Zt.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===Ud)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return n.UNSIGNED_SHORT_5_5_5_1;if(i===b_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===T_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===M_)return n.BYTE;if(i===S_)return n.SHORT;if(i===Al)return n.UNSIGNED_SHORT;if(i===Ld)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===ys)return n.HALF_FLOAT;if(i===E_)return n.ALPHA;if(i===A_)return n.RGB;if(i===vi)return n.RGBA;if(i===ds)return n.DEPTH_COMPONENT;if(i===jr)return n.DEPTH_STENCIL;if(i===Pd)return n.RED;if(i===Od)return n.RED_INTEGER;if(i===$r)return n.RG;if(i===Bd)return n.RG_INTEGER;if(i===Fd)return n.RGBA_INTEGER;if(i===Du||i===Lu||i===Uu||i===Iu)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Du)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Iu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Du)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Iu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zd||i===Hd||i===Vd||i===Gd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kd||i===Xd||i===Wd||i===qd||i===Yd||i===Pu||i===Zd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kd||i===Xd)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wd)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qd)return r.COMPRESSED_R11_EAC;if(i===Yd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Pu)return r.COMPRESSED_RG11_EAC;if(i===Zd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kd||i===Jd||i===Qd||i===jd||i===$d||i===tp||i===ep||i===np||i===ip||i===sp||i===rp||i===ap||i===op||i===lp)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kd)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jd)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qd)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jd)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tp)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ep)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===np)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ip)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sp)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rp)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ap)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===op)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lp)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cp||i===up||i===fp)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===cp)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===up)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hp||i===dp||i===Ou||i===pp)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===hp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var TL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Y_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new yu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new _i({vertexShader:TL,fragmentShader:EL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $e(new js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Z_=class extends ps{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,S=typeof XRWebGLBinding<"u",m=new Y_,p={},_=e.getContextAttributes(),M=null,x=null,T=[],E=[],A=new Kt,y=null,w=new ln;w.viewport=new ge;let C=new ln;C.viewport=new ge;let N=[w,C],B=new Rd,K=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=T[J];return ft===void 0&&(ft=new pl,T[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=T[J];return ft===void 0&&(ft=new pl,T[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=T[J];return ft===void 0&&(ft=new pl,T[J]=ft),ft.getHandSpace()};function F(J){let ft=E.indexOf(J.inputSource);if(ft===-1)return;let et=T[ft];et!==void 0&&(et.update(J.inputSource,J.frame,c||a),et.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",X);for(let J=0;J<T.length;J++){let ft=E[J];ft!==null&&(E[J]=null,T[J].disconnect(ft))}K=null,Q=null,m.reset();for(let J in p)delete p[J];t.setRenderTarget(M),d=null,f=null,h=null,s=null,x=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,At=null,Bt=null;_.depth&&(Bt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?jr:ds,At=_.stencil?wl:Qi);let Ut={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new mi(f.textureWidth,f.textureHeight,{format:vi,type:ei,depthTexture:new Qs(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let et={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new mi(d.framebufferWidth,d.framebufferHeight,{format:vi,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(J){for(let ft=0;ft<J.removed.length;ft++){let et=J.removed[ft],At=E.indexOf(et);At>=0&&(E[At]=null,T[At].disconnect(et))}for(let ft=0;ft<J.added.length;ft++){let et=J.added[ft],At=E.indexOf(et);if(At===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=E.length){E.push(et),At=Ut;break}else if(E[Ut]===null){E[Ut]=et,At=Ut;break}if(At===-1)break}let Bt=T[At];Bt&&Bt.connect(et)}}let $=new U,nt=new U;function ut(J,ft,et){$.setFromMatrixPosition(ft.matrixWorld),nt.setFromMatrixPosition(et.matrixWorld);let At=$.distanceTo(nt),Bt=ft.projectionMatrix.elements,Ut=et.projectionMatrix.elements,ve=Bt[14]/(Bt[10]-1),Vt=Bt[14]/(Bt[10]+1),ue=(Bt[9]+1)/Bt[5],ee=(Bt[9]-1)/Bt[5],te=(Bt[8]-1)/Bt[0],Be=(Ut[8]+1)/Ut[0],Fe=ve*te,qe=ve*Be,en=At/(-te+Be),Ne=en*-te;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ne),J.translateZ(en),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Bt[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let ze=ve+en,L=Vt+en,Tn=Fe-Ne,re=qe+(At-Ne),R=ue*Vt/L*ze,v=ee*Vt/L*ze;J.projectionMatrix.makePerspective(Tn,re,R,v,ze,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function mt(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ft=J.near,et=J.far;m.texture!==null&&(m.depthNear>0&&(ft=m.depthNear),m.depthFar>0&&(et=m.depthFar)),B.near=C.near=w.near=ft,B.far=C.far=w.far=et,(K!==B.near||Q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),K=B.near,Q=B.far),B.layers.mask=J.layers.mask|6,w.layers.mask=B.layers.mask&-5,C.layers.mask=B.layers.mask&-3;let At=J.parent,Bt=B.cameras;mt(B,At);for(let Ut=0;Ut<Bt.length;Ut++)mt(Bt[Ut],At);Bt.length===2?ut(B,w,C):B.projectionMatrix.copy(w.projectionMatrix),dt(J,B,At)};function dt(J,ft,et){et===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(et.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return p[J]};let Ft=null;function ce(J,ft){if(u=ft.getViewerPose(c||a),g=ft,u!==null){let et=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let At=!1;et.length!==B.cameras.length&&(B.cameras.length=0,At=!0);for(let Vt=0;Vt<et.length;Vt++){let ue=et[Vt],ee=null;if(d!==null)ee=d.getViewport(ue);else{let Be=h.getViewSubImage(f,ue);ee=Be.viewport,Vt===0&&(t.setRenderTargetTextures(x,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(x))}let te=N[Vt];te===void 0&&(te=new ln,te.layers.enable(Vt),te.viewport=new ge,N[Vt]=te),te.matrix.fromArray(ue.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ue.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ee.x,ee.y,ee.width,ee.height),Vt===0&&(B.matrix.copy(te.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),At===!0&&B.cameras.push(te)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=i.getBinding();let Vt=h.getDepthInformation(et[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,s.renderState)}if(Bt&&Bt.includes("camera-access")&&S){t.state.unbindTexture(),h=i.getBinding();for(let Vt=0;Vt<et.length;Vt++){let ue=et[Vt].camera;if(ue){let ee=p[ue];ee||(ee=new yu,p[ue]=ee);let te=h.getCameraImage(ue);ee.sourceTexture=te}}}}for(let et=0;et<T.length;et++){let At=E[et],Bt=T[et];At!==null&&Bt!==void 0&&Bt.update(At,ft,c||a)}Ft&&Ft(J,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),g=null}let Wt=new MT;Wt.setAnimationLoop(ce),this.setAnimationLoop=function(J){Ft=J},this.dispose=function(){}}},AL=new zt,wT=new Ht;wT.set(-1,0,0,0,1,0,0,0,1);function wL(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,N_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),M=_.envMap,x=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(AL.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wT),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function RL(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){let E=T.program;i.uniformBlockBinding(x,E)}function c(x,T){let E=s[x.id];E===void 0&&(m(x),E=u(x),s[x.id]=E,x.addEventListener("dispose",_));let A=T.program;i.updateUBOMapping(x,A);let y=t.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function u(x){let T=h();x.__bindingPointIndex=T;let E=n.createBuffer(),A=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let T=s[x.id],E=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let y=0,w=E.length;y<w;y++){let C=E[y];if(Array.isArray(C))for(let N=0,B=C.length;N<B;N++)d(C[N],y,N,A);else d(C,y,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,T,E,A){if(S(x,T,E,A)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let N=0;N<w.length;N++){let B=w[N],K=p(B);g(B,x.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function g(x,T,E){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,E)}function S(x,T,E,A){let y=x.value,w=T+"_"+E;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{let C=A[w];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(x){let T=x.uniforms,E=0,A=16;for(let w=0,C=T.length;w<C;w++){let N=Array.isArray(T[w])?T[w]:[T[w]];for(let B=0,K=N.length;B<K;B++){let Q=N[B],F=Array.isArray(Q.value)?Q.value:[Q.value];for(let Y=0,X=F.length;Y<X;Y++){let $=F[Y],nt=p($),ut=E%A,mt=ut%nt.boundary,dt=ut+mt;E+=mt,dt!==0&&A-dt<nt.storage&&(E+=A-dt),Q.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,E+=nt.storage}}}let y=E%A;return y>0&&(E+=A-y),x.__size=E,x.__cache={},this}function p(x){let T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",x),T}function _(x){let T=x.target;T.removeEventListener("dispose",_);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function M(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var CL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vs=null;function NL(){return vs===null&&(vs=new xl(CL,16,16,$r,ys),vs.name="DFG_LUT",vs.minFilter=je,vs.magFilter=je,vs.wrapS=Ui,vs.wrapT=Ui,vs.generateMipmaps=!1,vs.needsUpdate=!0),vs}var Sp=class{constructor(t={}){let{canvas:e=q1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ei}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let S=d,m=new Set([Fd,Bd,Od]),p=new Set([ei,Qi,Al,wl,Ud,Id]),_=new Uint32Array(4),M=new Int32Array(4),x=new U,T=null,E=null,A=[],y=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,B=null,K=null,Q=null,F=null;this._outputColorSpace=Ge;let Y=0,X=0,$=null,nt=-1,ut=null,mt=new ge,dt=new ge,Ft=null,ce=new Ct(0),Wt=0,J=e.width,ft=e.height,et=1,At=null,Bt=null,Ut=new ge(0,0,J,ft),ve=new ge(0,0,J,ft),Vt=!1,ue=new yl,ee=!1,te=!1,Be=new zt,Fe=new U,qe=new ge,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function ze(){return $===null?et:1}let L=i;function Tn(b,I){return e.getContext(b,I)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",It,!1),L===null){let I="webgl2";if(L=Tn(I,b),L===null)throw Tn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Pt("WebGLRenderer: "+b.message),b}let re,R,v,P,H,W,lt,k,O,q,rt,xt,it,st,at,vt,Mt,D,ct,Z,ot,ht,j;function St(){re=new BN(L),re.init(),ot=new bL(L,re),R=new CN(L,re,t,ot),v=new ML(L,re),R.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),K=L.createFramebuffer(),Q=L.createFramebuffer(),F=L.createFramebuffer(),P=new HN(L),H=new oL,W=new SL(L,re,v,H,R,ot,P),lt=new ON(C),k=new XC(L),ht=new wN(L,k),O=new FN(L,k,P,ht),q=new GN(L,O,k,ht,P),D=new VN(L,R,W),at=new NN(H),rt=new aL(C,lt,re,R,ht,at),xt=new wL(C,H),it=new cL,st=new mL(re),Mt=new AN(C,lt,v,q,g,l),vt=new vL(C,q,R),j=new RL(L,P,R,v),ct=new RN(L,re,P),Z=new zN(L,re,P),P.programs=rt.programs,C.capabilities=R,C.extensions=re,C.properties=H,C.renderLists=it,C.shadowMap=vt,C.state=v,C.info=P}St(),S!==ei&&(w=new XN(S,e.width,e.height,o,s,r));let pt=new Z_(C,L);this.xr=pt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(J,ft,!1))},this.getSize=function(b){return b.set(J,ft)},this.setSize=function(b,I,G=!0){if(pt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ft=I,e.width=Math.floor(b*et),e.height=Math.floor(I*et),G===!0&&(e.style.width=b+"px",e.style.height=I+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(J*et,ft*et).floor()},this.setDrawingBufferSize=function(b,I,G){J=b,ft=I,et=G,e.width=Math.floor(b*G),e.height=Math.floor(I*G),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(S===ei){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(mt)},this.getViewport=function(b){return b.copy(Ut)},this.setViewport=function(b,I,G,z){b.isVector4?Ut.set(b.x,b.y,b.z,b.w):Ut.set(b,I,G,z),v.viewport(mt.copy(Ut).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(ve)},this.setScissor=function(b,I,G,z){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,I,G,z),v.scissor(dt.copy(ve).multiplyScalar(et).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(b){v.setScissorTest(Vt=b)},this.setOpaqueSort=function(b){At=b},this.setTransparentSort=function(b){Bt=b},this.getClearColor=function(b){return b.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,G=!0){let z=0;if(b){let V=!1;if($!==null){let yt=$.texture.format;V=m.has(yt)}if(V){let yt=$.texture.type,Tt=p.has(yt),_t=Mt.getClearColor(),wt=Mt.getClearAlpha(),Nt=_t.r,Gt=_t.g,qt=_t.b;Tt?(_[0]=Nt,_[1]=Gt,_[2]=qt,_[3]=wt,L.clearBufferuiv(L.COLOR,0,_)):(M[0]=Nt,M[1]=Gt,M[2]=qt,M[3]=wt,L.clearBufferiv(L.COLOR,0,M))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Mt.dispose(),it.dispose(),st.dispose(),H.dispose(),lt.dispose(),q.dispose(),ht.dispose(),j.dispose(),rt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Ts),pt.removeEventListener("sessionend",sn),xn.stop()};function ae(b){b.preventDefault(),ou("WebGLRenderer: Context Lost."),N=!0}function Dt(){ou("WebGLRenderer: Context Restored."),N=!1;let b=P.autoReset,I=vt.enabled,G=vt.autoUpdate,z=vt.needsUpdate,V=vt.type;St(),P.autoReset=b,vt.enabled=I,vt.autoUpdate=G,vt.needsUpdate=z,vt.type=V}function It(b){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){let I=b.target;I.removeEventListener("dispose",Et),He(I)}function He(b){nn(b),H.remove(b)}function nn(b){let I=H.get(b).programs;I!==void 0&&(I.forEach(function(G){rt.releaseProgram(G)}),b.isShaderMaterial&&rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,G,z,V,yt){I===null&&(I=en);let Tt=V.isMesh&&V.matrixWorld.determinantAffine()<0,_t=ar(b,I,G,z,V);v.setMaterial(z,Tt);let wt=G.index,Nt=1;if(z.wireframe===!0){if(wt=O.getWireframeAttribute(G),wt===void 0)return;Nt=2}let Gt=G.drawRange,qt=G.attributes.position,Lt=Gt.start*Nt,_e=(Gt.start+Gt.count)*Nt;yt!==null&&(Lt=Math.max(Lt,yt.start*Nt),_e=Math.min(_e,(yt.start+yt.count)*Nt)),wt!==null?(Lt=Math.max(Lt,0),_e=Math.min(_e,wt.count)):qt!=null&&(Lt=Math.max(Lt,0),_e=Math.min(_e,qt.count));let Ye=_e-Lt;if(Ye<0||Ye===1/0)return;ht.setup(V,z,_t,G,wt);let ke,be=ct;if(wt!==null&&(ke=k.get(wt),be=Z,be.setIndex(ke)),V.isMesh)z.wireframe===!0?(v.setLineWidth(z.wireframeLinewidth*ze()),be.setMode(L.LINES)):be.setMode(L.TRIANGLES);else if(V.isLine){let Cn=z.linewidth;Cn===void 0&&(Cn=1),v.setLineWidth(Cn*ze()),V.isLineSegments?be.setMode(L.LINES):V.isLineLoop?be.setMode(L.LINE_LOOP):be.setMode(L.LINE_STRIP)}else V.isPoints?be.setMode(L.POINTS):V.isSprite&&be.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(re.get("WEBGL_multi_draw"))be.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Cn=V._multiDrawStarts,bt=V._multiDrawCounts,ni=V._multiDrawCount,ie=wt?k.get(wt).bytesPerElement:1,Mi=H.get(z).currentProgram.getUniforms();for(let ts=0;ts<ni;ts++)Mi.setValue(L,"_gl_DrawID",ts),be.render(Cn[ts]/ie,bt[ts])}else if(V.isInstancedMesh)be.renderInstances(Lt,Ye,V.count);else if(G.isInstancedBufferGeometry){let Cn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bt=Math.min(G.instanceCount,Cn);be.renderInstances(Lt,Ye,bt)}else be.render(Lt,Ye)};function En(b,I,G){b.transparent===!0&&b.side===ti&&b.forceSinglePass===!1?(b.side=Xn,b.needsUpdate=!0,oa(b,I,G),b.side=Ki,b.needsUpdate=!0,oa(b,I,G),b.side=ti):oa(b,I,G)}this.compile=function(b,I,G=null){G===null&&(G=b),E=st.get(G),E.init(I),y.push(E),G.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),b!==G&&b.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();let z=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let yt=V.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){let _t=yt[Tt];En(_t,G,V),z.add(_t)}else En(yt,G,V),z.add(yt)}),E=y.pop(),z},this.compileAsync=function(b,I,G=null){let z=this.compile(b,I,G);return new Promise(V=>{function yt(){if(z.forEach(function(Tt){H.get(Tt).currentProgram.isReady()&&z.delete(Tt)}),z.size===0){V(b);return}setTimeout(yt,10)}re.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Bi=null;function ji(b){Bi&&Bi(b)}function Ts(){xn.stop()}function sn(){xn.start()}let xn=new MT;xn.setAnimationLoop(ji),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(b){Bi=b,pt.setAnimationLoop(b),b===null?xn.stop():xn.start()},pt.addEventListener("sessionstart",Ts),pt.addEventListener("sessionend",sn),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(b,I);let G=pt.enabled===!0&&pt.isPresenting===!0,z=w!==null&&($===null||G)&&w.begin(C,$);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(I),I=pt.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,I,$),E=st.get(b,y.length),E.init(I),E.state.textureUnits=W.getTextureUnits(),y.push(E),Be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ue.setFromProjectionMatrix(Be,Yi,I.reversedDepth),te=this.localClippingEnabled,ee=at.init(this.clippingPlanes,te),T=it.get(b,A.length),T.init(),A.push(T),pt.enabled===!0&&pt.isPresenting===!0){let Tt=C.xr.getDepthSensingMesh();Tt!==null&&Me(Tt,I,-1/0,C.sortObjects)}Me(b,I,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(At,Bt,I.reversedDepth),Ne=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Ne&&Mt.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&at.beginShadows();let V=E.state.shadowsArray;if(vt.render(V,b,I),ee===!0&&at.endShadows(),(z&&w.hasRenderPass())===!1){let Tt=T.opaque,_t=T.transmissive;if(E.setupLights(),I.isArrayCamera){let wt=I.cameras;if(_t.length>0)for(let Nt=0,Gt=wt.length;Nt<Gt;Nt++){let qt=wt[Nt];Se(Tt,_t,b,qt)}Ne&&Mt.render(b);for(let Nt=0,Gt=wt.length;Nt<Gt;Nt++){let qt=wt[Nt];Fi(T,b,qt,qt.viewport)}}else _t.length>0&&Se(Tt,_t,b,I),Ne&&Mt.render(b),Fi(T,b,I)}$!==null&&X===0&&(W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($)),z&&w.end(C),b.isScene===!0&&b.onAfterRender(C,b,I),ht.resetDefaultState(),nt=-1,ut=null,y.pop(),y.length>0?(E=y[y.length-1],W.setTextureUnits(E.state.textureUnits),ee===!0&&at.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,B!==null&&B.renderEnd()};function Me(b,I,G,z){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ue.intersectsSprite(b)){z&&qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);let Tt=q.update(b),_t=b.material;_t.visible&&T.push(b,Tt,_t,G,qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ue.intersectsObject(b))){let Tt=q.update(b),_t=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),qe.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),qe.copy(Tt.boundingSphere.center)),qe.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(_t)){let wt=Tt.groups;for(let Nt=0,Gt=wt.length;Nt<Gt;Nt++){let qt=wt[Nt],Lt=_t[qt.materialIndex];Lt&&Lt.visible&&T.push(b,Tt,Lt,G,qe.z,qt)}}else _t.visible&&T.push(b,Tt,_t,G,qe.z,null)}}let yt=b.children;for(let Tt=0,_t=yt.length;Tt<_t;Tt++)Me(yt[Tt],I,G,z)}function Fi(b,I,G,z){let{opaque:V,transmissive:yt,transparent:Tt}=b;E.setupLightsView(G),ee===!0&&at.setGlobalState(C.clippingPlanes,G),z&&v.viewport(mt.copy(z)),V.length>0&&$i(V,I,G),yt.length>0&&$i(yt,I,G),Tt.length>0&&$i(Tt,I,G),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Se(b,I,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Lt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new mi(1,1,{generateMipmaps:!0,type:Lt?ys:ei,minFilter:Ji,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let yt=E.state.transmissionRenderTarget[z.id],Tt=z.viewport||mt;yt.setSize(Tt.z*C.transmissionResolutionScale,Tt.w*C.transmissionResolutionScale);let _t=C.getRenderTarget(),wt=C.getActiveCubeFace(),Nt=C.getActiveMipmapLevel();C.setRenderTarget(yt),C.getClearColor(ce),Wt=C.getClearAlpha(),Wt<1&&C.setClearColor(16777215,.5),C.clear(),Ne&&Mt.render(G);let Gt=C.toneMapping;C.toneMapping=xi;let qt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ee===!0&&at.setGlobalState(C.clippingPlanes,z),$i(b,G,z),W.updateMultisampleRenderTarget(yt),W.updateRenderTargetMipmap(yt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let _e=0,Ye=I.length;_e<Ye;_e++){let ke=I[_e],{object:be,geometry:Cn,material:bt,group:ni}=ke;if(bt.side===ti&&be.layers.test(z.layers)){let ie=bt.side;bt.side=Xn,bt.needsUpdate=!0,Vl(be,G,z,Cn,bt,ni),bt.side=ie,bt.needsUpdate=!0,Lt=!0}}Lt===!0&&(W.updateMultisampleRenderTarget(yt),W.updateRenderTargetMipmap(yt))}C.setRenderTarget(_t,wt,Nt),C.setClearColor(ce,Wt),qt!==void 0&&(z.viewport=qt),C.toneMapping=Gt}function $i(b,I,G){let z=I.isScene===!0?I.overrideMaterial:null;for(let V=0,yt=b.length;V<yt;V++){let Tt=b[V],{object:_t,geometry:wt,group:Nt}=Tt,Gt=Tt.material;Gt.allowOverride===!0&&z!==null&&(Gt=z),_t.layers.test(G.layers)&&Vl(_t,I,G,wt,Gt,Nt)}}function Vl(b,I,G,z,V,yt){b.onBeforeRender(C,I,G,z,V,yt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(C,I,G,z,b,yt),V.transparent===!0&&V.side===ti&&V.forceSinglePass===!1?(V.side=Xn,V.needsUpdate=!0,C.renderBufferDirect(G,I,z,V,b,yt),V.side=Ki,V.needsUpdate=!0,C.renderBufferDirect(G,I,z,V,b,yt),V.side=ti):C.renderBufferDirect(G,I,z,V,b,yt),b.onAfterRender(C,I,G,z,V,yt)}function oa(b,I,G){I.isScene!==!0&&(I=en);let z=H.get(b),V=E.state.lights,yt=E.state.shadowsArray,Tt=V.state.version,_t=rt.getParameters(b,V.state,yt,I,G,E.state.lightProbeGridArray),wt=rt.getProgramCacheKey(_t),Nt=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;let Gt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=lt.get(b.envMap||z.environment,Gt),z.envMapRotation=z.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Et),Nt=new Map,z.programs=Nt);let qt=Nt.get(wt);if(qt!==void 0){if(z.currentProgram===qt&&z.lightsStateVersion===Tt)return la(b,_t),qt}else _t.uniforms=rt.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,G,_t),b.onBeforeCompile(_t,C),qt=rt.acquireProgram(_t,wt),Nt.set(wt,qt),z.uniforms=_t.uniforms;let Lt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=at.uniform),la(b,_t),z.needsLights=WE(b),z.lightsStateVersion=Tt,z.needsLights&&(Lt.ambientLightColor.value=V.state.ambient,Lt.lightProbe.value=V.state.probe,Lt.directionalLights.value=V.state.directional,Lt.directionalLightShadows.value=V.state.directionalShadow,Lt.spotLights.value=V.state.spot,Lt.spotLightShadows.value=V.state.spotShadow,Lt.rectAreaLights.value=V.state.rectArea,Lt.ltc_1.value=V.state.rectAreaLTC1,Lt.ltc_2.value=V.state.rectAreaLTC2,Lt.pointLights.value=V.state.point,Lt.pointLightShadows.value=V.state.pointShadow,Lt.hemisphereLights.value=V.state.hemi,Lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Lt.spotLightMatrix.value=V.state.spotLightMatrix,Lt.spotLightMap.value=V.state.spotLightMap,Lt.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=qt,z.uniformsList=null,qt}function Gl(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Nl.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function la(b,I){let G=H.get(b);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function zi(b,I){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(I.matrixWorld);for(let G=0,z=b.length;G<z;G++){let V=b[G];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function ar(b,I,G,z,V){I.isScene!==!0&&(I=en),W.resetTextureUnits();let yt=I.fog,Tt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,_t=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Zt.workingColorSpace,wt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Nt=lt.get(z.envMap||Tt,wt),Gt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Lt=!!G.morphAttributes.position,_e=!!G.morphAttributes.normal,Ye=!!G.morphAttributes.color,ke=xi;z.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ke=C.toneMapping);let be=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Cn=be!==void 0?be.length:0,bt=H.get(z),ni=E.state.lights;if(ee===!0&&(te===!0||b!==ut)){let we=b===ut&&z.id===nt;at.setState(z,b,we)}let ie=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ni.state.version||bt.outputColorSpace!==_t||V.isBatchedMesh&&bt.batching===!1||!V.isBatchedMesh&&bt.batching===!0||V.isBatchedMesh&&bt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&bt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&bt.instancing===!1||!V.isInstancedMesh&&bt.instancing===!0||V.isSkinnedMesh&&bt.skinning===!1||!V.isSkinnedMesh&&bt.skinning===!0||V.isInstancedMesh&&bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&bt.instancingMorph===!1&&V.morphTexture!==null||bt.envMap!==Nt||z.fog===!0&&bt.fog!==yt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==at.numPlanes||bt.numIntersection!==at.numIntersection)||bt.vertexAlphas!==Gt||bt.vertexTangents!==qt||bt.morphTargets!==Lt||bt.morphNormals!==_e||bt.morphColors!==Ye||bt.toneMapping!==ke||bt.morphTargetsCount!==Cn||!!bt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,bt.__version=z.version);let Mi=bt.currentProgram;ie===!0&&(Mi=oa(z,I,V),B&&z.isNodeMaterial&&B.onUpdateProgram(z,Mi,bt));let ts=!1,or=!1,ja=!1,Te=Mi.getUniforms(),Ze=bt.uniforms;if(v.useProgram(Mi.program)&&(ts=!0,or=!0,ja=!0),z.id!==nt&&(nt=z.id,or=!0),bt.needsLights){let we=zi(E.state.lightProbeGridArray,V);bt.lightProbeGrid!==we&&(bt.lightProbeGrid=we,or=!0)}if(ts||ut!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Te.setValue(L,"projectionMatrix",b.projectionMatrix),Te.setValue(L,"viewMatrix",b.matrixWorldInverse);let cr=Te.map.cameraPosition;cr!==void 0&&cr.setValue(L,Fe.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&Te.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Te.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),ut!==b&&(ut=b,or=!0,ja=!0)}if(bt.needsLights&&(ni.state.directionalShadowMap.length>0&&Te.setValue(L,"directionalShadowMap",ni.state.directionalShadowMap,W),ni.state.spotShadowMap.length>0&&Te.setValue(L,"spotShadowMap",ni.state.spotShadowMap,W),ni.state.pointShadowMap.length>0&&Te.setValue(L,"pointShadowMap",ni.state.pointShadowMap,W)),V.isSkinnedMesh){Te.setOptional(L,V,"bindMatrix"),Te.setOptional(L,V,"bindMatrixInverse");let we=V.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Te.setValue(L,"boneTexture",we.boneTexture,W))}V.isBatchedMesh&&(Te.setOptional(L,V,"batchingTexture"),Te.setValue(L,"batchingTexture",V._matricesTexture,W),Te.setOptional(L,V,"batchingIdTexture"),Te.setValue(L,"batchingIdTexture",V._indirectTexture,W),Te.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Te.setValue(L,"batchingColorTexture",V._colorsTexture,W));let lr=G.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&D.update(V,G,Mi),(or||bt.receiveShadow!==V.receiveShadow)&&(bt.receiveShadow=V.receiveShadow,Te.setValue(L,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Ze.envMapIntensity.value=I.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=NL()),or){if(Te.setValue(L,"toneMappingExposure",C.toneMappingExposure),bt.needsLights&&XE(Ze,ja),yt&&z.fog===!0&&xt.refreshFogUniforms(Ze,yt),xt.refreshMaterialUniforms(Ze,z,et,ft,E.state.transmissionRenderTarget[b.id]),bt.needsLights&&bt.lightProbeGrid){let we=bt.lightProbeGrid;Ze.probesSH.value=we.texture,Ze.probesMin.value.copy(we.boundingBox.min),Ze.probesMax.value.copy(we.boundingBox.max),Ze.probesResolution.value.copy(we.resolution)}Nl.upload(L,Gl(bt),Ze,W)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Nl.upload(L,Gl(bt),Ze,W),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Te.setValue(L,"center",V.center),Te.setValue(L,"modelViewMatrix",V.modelViewMatrix),Te.setValue(L,"normalMatrix",V.normalMatrix),Te.setValue(L,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let we=z.uniformsGroups;for(let cr=0,$a=we.length;cr<$a;cr++){let Zx=we[cr];j.update(Zx,Mi),j.bind(Zx,Mi)}}return Mi}function XE(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function WE(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(b,I,G){let z=H.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=I,H.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let G=H.get(b);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,G=0){$=b,Y=I,X=G;let z=null,V=!1,yt=!1;if(b){let _t=H.get(b);if(_t.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(L.FRAMEBUFFER,_t.__webglFramebuffer),mt.copy(b.viewport),dt.copy(b.scissor),Ft=b.scissorTest,v.viewport(mt),v.scissor(dt),v.setScissorTest(Ft),nt=-1;return}else if(_t.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(_t.__hasExternalTextures)W.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Gt=b.depthTexture;if(_t.__boundDepthTexture!==Gt){if(Gt!==null&&H.has(Gt)&&(b.width!==Gt.image.width||b.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(yt=!0);let Nt=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[I])?z=Nt[I][G]:z=Nt[I],V=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?z=H.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?z=Nt[G]:z=Nt,mt.copy(b.viewport),dt.copy(b.scissor),Ft=b.scissorTest}else mt.copy(Ut).multiplyScalar(et).floor(),dt.copy(ve).multiplyScalar(et).floor(),Ft=Vt;if(G!==0&&(z=K),v.bindFramebuffer(L.FRAMEBUFFER,z)&&v.drawBuffers(b,z),v.viewport(mt),v.scissor(dt),v.setScissorTest(Ft),V){let _t=H.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,G)}else if(yt){let _t=I;for(let wt=0;wt<b.textures.length;wt++){let Nt=H.get(b.textures[wt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+wt,Nt.__webglTexture,G,_t)}}else if(b!==null&&G!==0){let _t=H.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,G)}nt=-1},this.readRenderTargetPixels=function(b,I,G,z,V,yt,Tt,_t=0){if(!(b&&b.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(wt=wt[Tt]),wt){v.bindFramebuffer(L.FRAMEBUFFER,wt);try{let Nt=b.textures[_t],Gt=Nt.format,qt=Nt.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t),!R.textureFormatReadable(Gt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(qt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-z&&G>=0&&G<=b.height-V&&L.readPixels(I,G,z,V,ot.convert(Gt),ot.convert(qt),yt)}finally{let Nt=$!==null?H.get($).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,I,G,z,V,yt,Tt,_t=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(wt=wt[Tt]),wt)if(I>=0&&I<=b.width-z&&G>=0&&G<=b.height-V){v.bindFramebuffer(L.FRAMEBUFFER,wt);let Nt=b.textures[_t],Gt=Nt.format,qt=Nt.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t),!R.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.bufferData(L.PIXEL_PACK_BUFFER,yt.byteLength,L.STREAM_READ),L.readPixels(I,G,z,V,ot.convert(Gt),ot.convert(qt),0);let _e=$!==null?H.get($).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,_e);let Ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Z1(L,Ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,yt),L.deleteBuffer(Lt),L.deleteSync(Ye),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,G=0){let z=Math.pow(2,-G),V=Math.floor(b.image.width*z),yt=Math.floor(b.image.height*z),Tt=I!==null?I.x:0,_t=I!==null?I.y:0;W.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,Tt,_t,V,yt),v.unbindTexture()},this.copyTextureToTexture=function(b,I,G=null,z=null,V=0,yt=0){let Tt,_t,wt,Nt,Gt,qt,Lt,_e,Ye,ke=b.isCompressedTexture?b.mipmaps[yt]:b.image;if(G!==null)Tt=G.max.x-G.min.x,_t=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,Gt=G.min.y,qt=G.isBox3?G.min.z:0;else{let Ze=Math.pow(2,-V);Tt=Math.floor(ke.width*Ze),_t=Math.floor(ke.height*Ze),b.isDataArrayTexture?wt=ke.depth:b.isData3DTexture?wt=Math.floor(ke.depth*Ze):wt=1,Nt=0,Gt=0,qt=0}z!==null?(Lt=z.x,_e=z.y,Ye=z.z):(Lt=0,_e=0,Ye=0);let be=ot.convert(I.format),Cn=ot.convert(I.type),bt;I.isData3DTexture?(W.setTexture3D(I,0),bt=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(W.setTexture2DArray(I,0),bt=L.TEXTURE_2D_ARRAY):(W.setTexture2D(I,0),bt=L.TEXTURE_2D),v.activeTexture(L.TEXTURE0),v.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),v.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),v.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let ni=v.getParameter(L.UNPACK_ROW_LENGTH),ie=v.getParameter(L.UNPACK_IMAGE_HEIGHT),Mi=v.getParameter(L.UNPACK_SKIP_PIXELS),ts=v.getParameter(L.UNPACK_SKIP_ROWS),or=v.getParameter(L.UNPACK_SKIP_IMAGES);v.pixelStorei(L.UNPACK_ROW_LENGTH,ke.width),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ke.height),v.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),v.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),v.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);let ja=b.isDataArrayTexture||b.isData3DTexture,Te=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let Ze=H.get(b),lr=H.get(I),we=H.get(Ze.__renderTarget),cr=H.get(lr.__renderTarget);v.bindFramebuffer(L.READ_FRAMEBUFFER,we.__webglFramebuffer),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let $a=0;$a<wt;$a++)ja&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(b).__webglTexture,V,qt+$a),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(I).__webglTexture,yt,Ye+$a)),L.blitFramebuffer(Nt,Gt,Tt,_t,Lt,_e,Tt,_t,L.DEPTH_BUFFER_BIT,L.NEAREST);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||H.has(b)){let Ze=H.get(b),lr=H.get(I);v.bindFramebuffer(L.READ_FRAMEBUFFER,Q),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let we=0;we<wt;we++)ja?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,V,qt+we):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,V),Te?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lr.__webglTexture,yt,Ye+we):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,lr.__webglTexture,yt),V!==0?L.blitFramebuffer(Nt,Gt,Tt,_t,Lt,_e,Tt,_t,L.COLOR_BUFFER_BIT,L.NEAREST):Te?L.copyTexSubImage3D(bt,yt,Lt,_e,Ye+we,Nt,Gt,Tt,_t):L.copyTexSubImage2D(bt,yt,Lt,_e,Nt,Gt,Tt,_t);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Te?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(bt,yt,Lt,_e,Ye,Tt,_t,wt,be,Cn,ke.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,yt,Lt,_e,Ye,Tt,_t,wt,be,ke.data):L.texSubImage3D(bt,yt,Lt,_e,Ye,Tt,_t,wt,be,Cn,ke):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,yt,Lt,_e,Tt,_t,be,Cn,ke.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,yt,Lt,_e,ke.width,ke.height,be,ke.data):L.texSubImage2D(L.TEXTURE_2D,yt,Lt,_e,Tt,_t,be,Cn,ke);v.pixelStorei(L.UNPACK_ROW_LENGTH,ni),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie),v.pixelStorei(L.UNPACK_SKIP_PIXELS,Mi),v.pixelStorei(L.UNPACK_SKIP_ROWS,ts),v.pixelStorei(L.UNPACK_SKIP_IMAGES,or),yt===0&&I.generateMipmaps&&L.generateMipmap(bt),v.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){Y=0,X=0,$=null,v.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};function K_(n,t){if(t===w_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(t===Rl||t===Bu){let e=n.getIndex();if(e===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),e=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=e.count-2,s=[];if(t===Rl)for(let a=1;a<=i;a++)s.push(e.getX(0)),s.push(e.getX(a)),s.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(e.getX(a)),s.push(e.getX(a+1)),s.push(e.getX(a+2))):(s.push(e.getX(a+2)),s.push(e.getX(a+1)),s.push(e.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),n}function RT(n){let t=new Map,e=new Map,i=n.clone();return CT(n,i,function(s,r){t.set(r,s),e.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function CT(n,t,e){e(n,t);for(let i=0;i<n.children.length;i++)CT(n.children[i],t.children[i],e)}var Ep=class extends _s{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new nx(e)}),this.register(function(e){return new ix(e)}),this.register(function(e){return new hx(e)}),this.register(function(e){return new dx(e)}),this.register(function(e){return new px(e)}),this.register(function(e){return new rx(e)}),this.register(function(e){return new ax(e)}),this.register(function(e){return new ox(e)}),this.register(function(e){return new lx(e)}),this.register(function(e){return new ex(e)}),this.register(function(e){return new cx(e)}),this.register(function(e){return new sx(e)}),this.register(function(e){return new fx(e)}),this.register(function(e){return new ux(e)}),this.register(function(e){return new $_(e)}),this.register(function(e){return new Ap(e,Jt.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Ap(e,Jt.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new mx(e)})}load(t,e,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ir.extractUrlBase(t);a=ir.resolveURL(c,this.path)}else a=ir.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new bl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,a,function(u){e(u),r.manager.itemEnd(t)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,s){let r,a={},o={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===IT){try{a[Jt.KHR_BINARY_GLTF]=new gx(t)}catch(h){s&&s(h);return}r=JSON.parse(a[Jt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new bx(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Jt.KHR_MATERIALS_UNLIT:a[h]=new tx;break;case Jt.KHR_DRACO_MESH_COMPRESSION:a[h]=new _x(r,this.dracoLoader);break;case Jt.KHR_TEXTURE_TRANSFORM:a[h]=new xx;break;case Jt.KHR_MESH_QUANTIZATION:a[h]=new yx;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(t,e){let i=this;return new Promise(function(s,r){i.parse(t,e,s,r)})}};function LL(){let n={};return{get:function(t){return n[t]},add:function(t,e){n[t]=e},remove:function(t){delete n[t]},removeAll:function(){n={}}}}function tn(n,t,e){let i=n.json.materials[t];return i.extensions&&i.extensions[e]?i.extensions[e]:null}var Jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$_=class{constructor(t){this.parser=t,this.name=Jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,s=e.length;i<s;i++){let r=e[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,s=e.cache.get(i);if(s)return s;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,u=new Ct(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Gn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wu(u),c.distance=h;break;case"spot":c=new Au(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ss(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(i,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,r=i.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(e.cache,o,l)})}},tx=class{constructor(){this.name=Jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pn}extendParams(t,e,i){let s=[];t.color=new Ct(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Gn),t.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(t,"map",r.baseColorTexture,Ge))}return Promise.all(s)}},ex=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);return i===null||i.emissiveStrength!==void 0&&(e.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},nx=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(e.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Kt(r,r)}return Promise.all(s)}},ix=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);return i===null||(e.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},sx=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(e.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(e.iridescenceIOR=i.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},rx=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SHEEN}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);if(i===null)return Promise.resolve();let s=[];if(e.sheenColor=new Ct(0,0,0),e.sheenRoughness=0,e.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],Gn)}return i.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",i.sheenColorTexture,Ge)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},ax=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(e.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},ox=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_VOLUME}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);if(i===null)return Promise.resolve();let s=[];e.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",i.thicknessTexture)),e.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return e.attenuationColor=new Ct().setRGB(r[0],r[1],r[2],Gn),Promise.all(s)}},lx=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IOR}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);return i===null||(e.ior=i.ior!==void 0?i.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},cx=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);if(i===null)return Promise.resolve();let s=[];e.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return e.specularColor=new Ct().setRGB(r[0],r[1],r[2],Gn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",i.specularColorTexture,Ge)),Promise.all(s)}},ux=class{constructor(t){this.parser=t,this.name=Jt.EXT_MATERIALS_BUMP}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);if(i===null)return Promise.resolve();let s=[];return e.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",i.bumpTexture)),Promise.all(s)}},fx=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return tn(this.parser,t,this.name)!==null?jn:null}extendMaterialParams(t,e){let i=tn(this.parser,t,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(e.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(e.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},hx=class{constructor(t){this.parser=t,this.name=Jt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,s=i.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}},dx=class{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,i=this.parser,s=i.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(t,a.source,l)}},px=class{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,i=this.parser,s=i.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(t,a.source,l)}},Ap=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},mx=class{constructor(t){this.name=Jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=e.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Pi.TRIANGLES&&c.mode!==Pi.TRIANGLE_STRIP&&c.mode!==Pi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let S=new zt,m=new U,p=new pn,_=new U(1,1,1),M=new ms(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,S.compose(m,p,_));for(let x in l)if(x==="_COLOR_0"){let T=l[x];M.instanceColor=new qr(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Oe.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},IT="glTF",Gu=12,NT={JSON:1313821514,BIN:5130562},gx=class{constructor(t){this.name=Jt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Gu),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==IT)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Gu,r=new DataView(t,Gu),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===NT.JSON){let c=new Uint8Array(t,Gu+a,o);this.content=i.decode(c)}else if(l===NT.BIN){let c=Gu+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_x=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Mx[u]||u.toLowerCase();o[h]=a[u]}for(let u in t.attributes){let h=Mx[u]||u.toLowerCase();if(a[u]!==void 0){let f=i.accessors[t.attributes[u]],d=Ll[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let S=d.attributes[g],m=l[g];m!==void 0&&(S.normalized=m)}h(d)},o,c,Gn,f)})})}},xx=class{constructor(){this.name=Jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},yx=class{constructor(){this.name=Jt.KHR_MESH_QUANTIZATION}},wp=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let a=0;a!==s;a++)e[a]=i[r+a];return e}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-e,h=(i-e)/u,f=h*h,d=f*h,g=t*c,S=g-c,m=-2*d+3*f,p=d-f,_=1-m,M=p-f+h;for(let x=0;x!==o;x++){let T=a[S+x+o],E=a[S+x+l]*u,A=a[g+x+o],y=a[g+x]*u;r[x]=_*T+M*E+m*A+p*y}return r}},UL=new pn,vx=class extends wp{interpolate_(t,e,i,s){let r=super.interpolate_(t,e,i,s);return UL.fromArray(r).normalize().toArray(r),r}},Pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ll={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},DT={9728:Qe,9729:je,9984:Dd,9985:El,9986:Xa,9987:Ji},LT={33071:Ui,33648:cl,10497:Wr},J_={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mx={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ea={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},IL={CUBICSPLINE:void 0,LINEAR:Ba,STEP:Oa},Q_={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function PL(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Va({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),n.DefaultMaterial}function Ya(n,t,e){for(let i in e.extensions)n[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Ss(n,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(n.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function OL(n,t,e){let i=!1,s=!1,r=!1;for(let c=0,u=t.length;c<u;c++){let h=t[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,u=t.length;c<u;c++){let h=t[c];if(i){let f=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):n.attributes.position;a.push(f)}if(s){let f=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(f)}if(r){let f=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function BL(n,t){if(n.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)n.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(n.morphTargetInfluences.length===e.length){n.morphTargetDictionary={};for(let i=0,s=e.length;i<s;i++)n.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function FL(n){let t,e=n.extensions&&n.extensions[Jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+j_(e.attributes):t=n.indices+":"+j_(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)t+=":"+j_(n.targets[i]);return t}function j_(n){let t="",e=Object.keys(n).sort();for(let i=0,s=e.length;i<s;i++)t+=e[i]+":"+n[e[i]]+";";return t}function Sx(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zL(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var HL=new zt,bx=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new LL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Su(this.options.manager):this.textureLoader=new Ru(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Ya(r,o,s),Ss(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let a=e[s].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let a=t[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let s=t(e[i]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&i.push(r)}return i}getDependency(t,e){let i=t+":"+e,s=this.cache.get(i);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(i,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Jt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(ir.resolveURL(e.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let s=e.byteLength||0,r=e.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(t){let e=this,i=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let a=J_[s.type],o=Ll[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new cn(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=J_[s.type],c=Ll[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,S,m;if(d&&d!==h){let p=Math.floor(f/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=e.cache.get(_);M||(S=new c(o,p*d,s.count*d/u),M=new ml(S,d/u),e.cache.add(_,M)),m=new gl(M,l,f%d/u,g)}else o===null?S=new c(s.count*l):S=new c(o,f,s.count*l),m=new cn(S,l,g);if(s.sparse!==void 0){let p=J_.SCALAR,_=Ll[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new _(a[1],M,s.sparse.count*p),E=new c(a[2],x,s.sparse.count*l);o!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=T.length;A<y;A++){let w=T[A];if(m.setX(w,E[A*l]),l>=2&&m.setY(w,E[A*l+1]),l>=3&&m.setZ(w,E[A*l+2]),l>=4&&m.setW(w,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let e=this.json,i=this.options,r=e.textures[t].source,a=e.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,i){let s=this,r=this.json,a=r.textures[t],o=r.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=DT[f.magFilter]||je,u.minFilter=DT[f.minFilter]||Ji,u.wrapS=LT[f.wrapS]||Wr,u.wrapT=LT[f.wrapT]||Wr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qe&&u.minFilter!==je,s.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let i=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());let a=s.images[t],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(S){let m=new mn(S);m.needsUpdate=!0,f(m)}),e.load(ir.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Ss(h,a),h.userData.mimeType=a.mimeType||zL(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[Jt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Jt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Jt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,i=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ml,Qn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(t.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new vl,Qn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return Va}loadMaterial(t){let e=this,i=this.json,s=this.extensions,r=i.materials[t],a,o={},l=r.extensions||{},c=[];if(l[Jt.KHR_MATERIALS_UNLIT]){let h=s[Jt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,e))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ct(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Gn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",h.baseColorTexture,Ge)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=ti);let u=r.alphaMode||Q_.OPAQUE;if(u===Q_.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Q_.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Pn&&(c.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Kt(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Pn&&(c.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Pn){let h=r.emissiveFactor;o.emissive=new Ct().setRGB(h[0],h[1],h[2],Gn)}return r.emissiveTexture!==void 0&&a!==Pn&&c.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Ge)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Ss(h,r),e.associations.set(h,{materials:t}),r.extensions&&Ya(s,h,r),h})}createUniqueName(t){let e=Ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[Jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return UT(l,o,e)})}let a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o],u=FL(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[Jt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=UT(new kn,c,e),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){let e=this,i=this.json,s=this.extensions,r=i.meshes[t],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?PL(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let S=u[d],m=a[d],p,_=c[d];if(m.mode===Pi.TRIANGLES||m.mode===Pi.TRIANGLE_STRIP||m.mode===Pi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new du(S,_):new $e(S,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pi.TRIANGLE_STRIP?p.geometry=K_(p.geometry,Bu):m.mode===Pi.TRIANGLE_FAN&&(p.geometry=K_(p.geometry,Rl));else if(m.mode===Pi.LINES)p=new mu(S,_);else if(m.mode===Pi.LINE_STRIP)p=new Ha(S,_);else if(m.mode===Pi.LINE_LOOP)p=new gu(S,_);else if(m.mode===Pi.POINTS)p=new _u(S,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&BL(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Ss(p,r),m.extensions&&Ya(s,p,m),e.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)e.associations.set(h[d],{meshes:t,primitives:d});if(h.length===1)return r.extensions&&Ya(s,h[0],r),h[0];let f=new pi;r.extensions&&Ya(s,f,r),e.associations.set(f,{meshes:t});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(t){let e,i=this.json.cameras[t],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new ln(Ii.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(e=new Kr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Ss(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let s=0,r=e.joints.length;s<r;s++)i.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new zt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new pu(o,l)})}loadAnimation(t){let e=this.json,i=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],g=s.samplers[d.sampler],S=d.target,m=S.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;S.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(S))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],S=h[3],m=h[4],p=[];for(let M=0,x=f.length;M<x;M++){let T=f[M],E=d[M],A=g[M],y=S[M],w=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let C=i._createAnimationTracks(T,E,A,y,w);if(C)for(let N=0;N<C.length;N++)p.push(C[N])}let _=new Mu(r,void 0,p);return Ss(_,s),_})}createNodeMesh(t){let e=this.json,i=this,s=e.nodes[t];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(t){let e=this.json,i=this,s=e.nodes[t],r=i._loadNodeShallow(t),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,HL)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,g=h[0];u.pivot=new U().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(t){let e=this.json,i=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new _l:c.length>1?u=new pi:c.length===1?u=c[0]:u=new Oe,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Ss(u,r),r.extensions&&Ya(i,u,r),r.matrix!==void 0){let h=new zt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],s=this,r=new pi;i.name&&(r.name=s.createUniqueName(i.name)),Ss(r,i),i.extensions&&Ya(e,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(RT(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof Qn||f instanceof mn)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(t,e,i,s,r){let a=[],o=t.name?t.name:t.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}ea[r.path]===ea.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(o);let u;switch(ea[r.path]){case ea.weights:u=tr;break;case ea.rotation:u=er;break;case ea.translation:case ea.scale:u=Zr;break;default:i.itemSize===1?u=tr:u=Zr;break}let h=s.interpolation!==void 0?IL[s.interpolation]:Ba,f=this._getArrayFromAccessor(i);for(let d=0,g=l.length;d<g;d++){let S=new u(l[d]+"."+ea[r.path],e.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),a.push(S)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=Sx(e.constructor),s=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)s[r]=e[r]*i;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let s=this instanceof er?vx:wp;return new s(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function VL(n,t,e){let i=t.attributes,s=new gi;if(i.POSITION!==void 0){let o=e.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){let u=Sx(Ll[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let o=new U,l=new U;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=e.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let S=Sx(Ll[f.componentType]);l.multiplyScalar(S)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new Jn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function UT(n,t,e){let i=t.attributes,s=[];function r(a,o){return e.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=Mx[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(t.indices!==void 0&&!n.index){let a=e.getDependency("accessor",t.indices).then(function(o){n.setIndex(o)});s.push(a)}return Zt.workingColorSpace!==Gn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Zt.workingColorSpace}" not supported.`),Ss(n,t),VL(n,t,e),Promise.all(s).then(function(){return t.targets!==void 0?OL(n,t.targets,e):n})}var EE=Es(TE()),AE=Es(Ex()),CU=4;function NU(n,t){let e=new Uint8Array(n*n),i=(o,l)=>{o>=0&&o<n&&l>=0&&l<n&&(e[o*n+l]=1)},s=(o,l,c,u)=>{for(let h=o;h<o+c;h+=1)for(let f=l;f<l+u;f+=1)i(h,f)};s(0,0,9,9),s(0,n-8,9,8),s(n-8,0,8,9);for(let o=0;o<n;o+=1)i(6,o),i(o,6);let r=AE.default.getRowColCoords(t),a=r.length-1;for(let o=0;o<r.length;o+=1)for(let l=0;l<r.length;l+=1)o===0&&l===0||o===0&&l===a||o===a&&l===0||s(r[o]-2,r[l]-2,5,5);return t>=7&&(s(0,n-11,6,3),s(n-11,0,3,6)),e}function wE(n,{errorCorrectionLevel:t="H"}={}){let e=EE.default.create(n||" ",{errorCorrectionLevel:t}),i=e.modules.size,s=e.modules.data,r=NU(i,e.version),a=new Uint8Array(i*i),o=(c,u)=>{for(let h=c;h<c+7;h+=1)for(let f=u;f<u+7;f+=1)a[h*i+f]=1};o(0,0),o(0,i-7),o(i-7,0);let l=[];for(let c=0;c<i;c+=1)for(let u=0;u<i;u+=1){let h=c*i+u;s[h]&&!r[h]&&l.push({row:c,col:u})}return{size:i,version:e.version,boardCells:i+CU*2,bits:s,reserved:r,finder:a,data:l}}var kx={peony:[.752,.342,.382],rose:[.561,.039,.086],lily:[.827,.525,.524],leaf:[.378,.507,.063]},Fl=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function DU(n){let t=parseInt(n.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var LU=[1,1,1],RE={rose:!0},UU=5,IU=30;function PU(n){return .2126*Fl(n[0])+.7152*Fl(n[1])+.0722*Fl(n[2])}function Xx(n,t,e=!1){if(!n)return LU;if(Array.isArray(n))return n;let i=DU(n);if(e){let s=Math.max(1e-4,PU(t));return i.map(r=>Math.min(IU,Fl(r)/s))}return i.map((s,r)=>{let a=Fl(t[r]);return a<1e-4?0:Math.min(UU,Fl(s)/a)})}var CE=[{id:"original",label:"Original",accent:"#c96b80",ink:"#3b2b31",darkTones:["#7e3348","#8b3a51","#6b2a3d","#26489f","#2d55b8"],bouquetTint:null,qrTint:[.3,.34,.36],bouquetLeaf:null,qrLeaf:[.5,.46,.55]},{id:"blush",label:"Blush",accent:"#d4587a",ink:"#3b2b31",darkTones:["#a83358","#b83c63","#8c2848","#26489f","#2d55b8"],bouquetTint:"#d86d7a",qrTint:"#753940",bouquetLeaf:"#6b9215",qrLeaf:"#455a09"},{id:"marigold",label:"Marigold",accent:"#d2812f",ink:"#40301c",darkTones:["#9c5410","#ab5d14","#7f430b","#26489f","#2d55b8"],bouquetTint:"#db7235",qrTint:"#783e1d",bouquetLeaf:"#6b9211",qrLeaf:"#455a07"},{id:"sunbeam",label:"Sunbeam",accent:"#c9a233",ink:"#3a3117",darkTones:["#7d6510","#8b7114","#63500b","#26489f","#2d55b8"],bouquetTint:"#cc9b29",qrTint:"#6b4f14",bouquetLeaf:"#6d9c0f",qrLeaf:"#465d06"},{id:"poppy",label:"Poppy",accent:"#d1594c",ink:"#3d2427",darkTones:["#a83128","#b8382e","#8c2620","#26489f","#2d55b8"],bouquetTint:"#db5b45",qrTint:"#782f25",bouquetLeaf:"#699210",qrLeaf:"#455a08"},{id:"azure",label:"Azure",accent:"#5b7fbe",ink:"#1f2c3d",darkTones:["#1d4f96","#2359a6","#153c74","#26489f","#2d55b8"],bouquetTint:"#5f70b0",qrTint:"#3a446e",bouquetLeaf:"#5c941c",qrLeaf:"#3d5c0f"},{id:"dusk",label:"Dusk",accent:"#8a6fb5",ink:"#2e2a44",darkTones:["#4d3a94","#5743a3","#3d2e78","#26489f","#2d55b8"],bouquetTint:"#926198",qrTint:"#5b395f",bouquetLeaf:"#5e921a",qrLeaf:"#3f5c0e"}],NE=["#ffffff","#f6f6f7","#fbfbfc"],DE="#ffffff";var Fp=CE[0];function LE(n){return CE.find(t=>t.id===n)||Fp}var Ju=[{id:"peony",label:"Peony",url:"/models/qr-peony.glb"},{id:"lily",label:"Lily",url:"/models/qr-lily.glb"},{id:"rose",label:"Rose",url:"/models/qr-rose.glb"}],zl=Ju[0];function UE(n){return Ju.find(t=>t.id===n)||zl}var VE=Es(Qu()),BE={vase:"/models/qr-vase.glb",leaf:"/models/qr-leaves.glb"},Hp=.34,FU=.05,ju=9.5,zU=1.05,FE=2.6,HU=1.05,Wx=7,VU=.26,GU=320,kU=160,Vp=.45,XU=3.2,zE=34,WU=16,qU=Ii.degToRad(21),YU=Ii.degToRad(89.3),ZU=640,KU=110,JU=.5,QU=7,$u=12,jU=.75,$U=Math.PI*(1+Math.sqrt(5)),bs=Ii.lerp;function Qa(n){let t=Math.min(1,Math.max(0,n));return t*t*t*(t*(t*6-15)+10)}function HE(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function tI(n){let t=2166136261;for(let e=0;e<n.length;e+=1)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function eI(n,t,e,i=1){let s=Ii.degToRad(t),r=2*Math.atan(Math.tan(s/2)*i),a=2*Math.atan(Math.tan(s/2)*e);return Math.max(n/Math.sin(r/2),n/Math.sin(a/2))}function nI(){let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgba(0,0,0,0.34)"),i.addColorStop(.55,"rgba(0,0,0,0.14)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,128,128);let s=new Sl(t);return s.colorSpace=Ge,s}function iI(){let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.moveTo(4,62),e.bezierCurveTo(18,10,92,2,116,28),e.bezierCurveTo(126,42,102,60,76,66),e.bezierCurveTo(104,74,112,102,86,120),e.bezierCurveTo(60,132,20,108,4,74),e.closePath(),e.fill();let i=new Sl(t);return i.colorSpace=Ge,i}function qx(n){let t=null;if(n.scene.traverse(o=>{!t&&o.isMesh&&(t=o)}),!t)throw new Error("glTF contained no mesh");let e=t.geometry.clone();e.computeBoundingBox();let i=e.boundingBox;e.translate(-(i.min.x+i.max.x)/2,-i.min.y,-(i.min.z+i.max.z)/2),e.computeBoundingBox(),e.computeBoundingSphere();let s=t.material.clone();s.metalness=0,s.roughness=Math.min(1,(s.roughness??.8)*.9+.25);let r={uDesaturate:{value:0}};s.onBeforeCompile=o=>{o.uniforms.uDesaturate=r.uDesaturate,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDesaturate;`).replace("#include <map_fragment>",`#include <map_fragment>
        diffuseColor.rgb = mix(
          diffuseColor.rgb,
          vec3(dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722))),
          uDesaturate
        );`)},s.customProgramCacheKey=()=>"bloom-recolor";let a=e.boundingBox.getSize(new U);return{geometry:e,material:s,size:a,uniforms:r}}function Yx({value:n="",palette:t=Fp,flower:e=zl,showQr:i=!1,bottomInset:s=0,onReady:r,onError:a}){let o=(0,aa.useRef)(null),l=(0,aa.useRef)({value:n,palette:t,flower:e,showQr:i,bottomInset:s});l.current={value:n,palette:t,flower:e,showQr:i,bottomInset:s};let c=(0,aa.useRef)(null);return(0,aa.useEffect)(()=>{let u=o.current;if(!u)return;let f=window.matchMedia("(max-width: 720px)").matches?kU:GU,d=new Sp({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.toneMapping=xi,d.outputColorSpace=Ge,u.appendChild(d.domElement),d.domElement.style.display="block",d.domElement.style.width="100%",d.domElement.style.height="100%",d.domElement.style.touchAction="pan-y";let g=new uu,S=new ln(zE,1,.5,400);g.add(new bu(16777215,14208196,1.55));let m=new Jr(16774892,1.35);m.position.set(14,26,16),g.add(m);let p=new Jr(14477567,.5);p.position.set(-16,10,-12),g.add(p);let _=new pi;g.add(_);let M=new Pn({color:16777215,transparent:!0,opacity:0}),x=new $e(new js(1,1),M);x.rotation.x=-Math.PI/2,x.visible=!1,_.add(x);let T=new Pn({map:nI(),transparent:!0,depthWrite:!1}),E=new $e(new js(1,1),T);E.rotation.x=-Math.PI/2,E.position.y=.02,E.renderOrder=1,E.scale.set(13,13,1),_.add(E);let A=new zt,y=new U,w=new pn,C=new pn,N=new U,B=new Ct,K=new U(0,0,1),Q=new U,F=new pn,Y=new Pn({color:16777215,alphaMap:iI(),alphaTest:.5,side:ti}),X=new js(1,1).translate(.5,0,0),$=X.clone().scale(-1,1,1),nt=new ms(X,Y,$u),ut=new ms($,Y,$u),mt=[],dt=HE(9380259);for(let k=0;k<$u;k+=1)mt.push({radius:[.85+dt()*.7,.4+dt()*.45,.85+dt()*.7],speed:[.24+dt()*.22,.34+dt()*.3,.24+dt()*.22],phase:[dt()*Math.PI*2,dt()*Math.PI*2,dt()*Math.PI*2],heightBias:-.25+dt()*.7,flapSpeed:9+dt()*6,flapPhase:dt()*Math.PI*2,scale:.75+dt()*.5,pale:dt()<.5});[nt,ut].forEach(k=>{k.instanceMatrix.setUsage(Fu),k.frustumCulled=!1,k.setColorAt(0,B.set(16777215)),_.add(k)});let Ft=null,ce=[],Wt=null,J=null,ft=3,et=null,At=0,Bt=!1,Ut=0,ve=null;function Vt(k){k&&(_.remove(k),k.dispose())}function ue({model:k,cells:O,half:q,maxRadius:rt,ballRadius:xt,ballCenterY:it,vaseTopRadius:st,rand:at,kind:vt}){let Mt=O.length,D=new Float32Array(Mt*3),ct=new Float32Array(Mt*4),Z=new Float32Array(Mt),ot=new Float32Array(Mt*3),ht=new Float32Array(Mt*4),j=new Float32Array(Mt),St=new Float32Array(Mt),pt=new Float32Array(Mt),ae=new Float32Array(Mt),Dt=vt==="leaf",It=Dt?HU/k.size.y:zU/k.size.x,Et=Dt?Wx/k.size.y:FE/k.size.x,He=new U(0,1,0),nn=new U,En=new U,Bi=new U,ji=new U,Ts=new U,sn=new zt,xn=new pn,Me=new pn;for(let Se=0;Se<Mt;Se+=1){let $i=O[Se],Vl=$i.col-q,oa=$i.row-q;if(D[Se*3]=Vl,D[Se*3+1]=Hp+(Dt?.04:0),D[Se*3+2]=oa,Dt){let zi=at()*Math.PI*2;nn.set(Math.cos(zi),0,Math.sin(zi)),Ts.copy(He),ji.crossVectors(nn,Ts),sn.makeBasis(ji,nn,Ts),Me.setFromRotationMatrix(sn)}else Me.setFromAxisAngle(He,at()*Math.PI*2);ct.set([Me.x,Me.y,Me.z,Me.w],Se*4),Z[Se]=It*(.9+at()*.2);let Gl=Se+.5,la=$U*Gl;if(Dt){En.set(Math.cos(la),0,Math.sin(la));let zi=st*(.5+at()*.42);ot[Se*3]=En.x*zi,ot[Se*3+1]=ju-.5,ot[Se*3+2]=En.z*zi;let ar=.5+at()*.32;Bi.copy(He).multiplyScalar(1-ar).addScaledVector(En,ar).normalize(),Me.setFromUnitVectors(He,Bi),j[Se]=Et*(.9+at()*.22)}else{let zi=Math.acos(Math.min(1,Math.max(-1,1-2*Gl/Mt)));nn.set(Math.sin(zi)*Math.cos(la),Math.cos(zi),Math.sin(zi)*Math.sin(la));let ar=xt*(.84+at()*.16);ot[Se*3]=nn.x*ar,ot[Se*3+1]=it+nn.y*ar*.86,ot[Se*3+2]=nn.z*ar,Me.setFromUnitVectors(He,nn),j[Se]=Et*(.78+at()*.42)}xn.setFromAxisAngle(He,at()*Math.PI*2),Me.multiply(xn),ht.set([Me.x,Me.y,Me.z,Me.w],Se*4),St[Se]=Math.min(1,Math.hypot(Vl,oa)/rt),pt[Se]=1.5+at()*3.5,ae[Se]=at()*Math.PI*2}let Fi=new ms(k.geometry,k.material,Mt);return Fi.instanceMatrix.setUsage(Fu),Fi.frustumCulled=!1,Fi.setColorAt(0,B.set(16777215)),_.add(Fi),{kind:vt,mesh:Fi,uniforms:k.uniforms,count:Mt,qrPos:D,qrQuat:ct,qrScale:Z,bqPos:ot,bqQuat:ht,bqScale:j,delay:St,arc:pt,swayPhase:ae,tintBouquet:new Ct(16777215),tintQr:new Ct(16777215)}}function ee(k){if(!J)return;let{size:O,bits:q,finder:rt,data:xt,boardCells:it}=wE(k),st=J.blossoms[l.current.flower?.id]||J.blossoms[zl.id],at=(O-1)/2,vt=HE(tI(k||" "));Vt(Ft),ce.forEach(sn=>Vt(sn.mesh)),ce=[];let Mt=O*O,D=new Yr(1,Hp,1),ct=new Pn({color:16777215});Ft=new ms(D,ct,Mt),Ft.instanceMatrix.setUsage(Fu),Ft.frustumCulled=!1,Ft.setColorAt(0,B.set(16777215)),_.add(Ft);let Z=Math.hypot(at,at)||1,ot=new Float32Array(Mt*2),ht=new Float32Array(Mt),j=new Uint8Array(Mt),St=new Uint8Array(Mt);for(let sn=0;sn<O;sn+=1)for(let xn=0;xn<O;xn+=1){let Me=sn*O+xn,Fi=xn-at,Se=sn-at;ot[Me*2]=Fi,ot[Me*2+1]=Se,ht[Me]=Math.min(1,Math.hypot(Fi,Se)/Z);let $i=!!q[Me];j[Me]=$i?1:0,$i?rt[Me]?St[Me]=vt()<.3?4:3:St[Me]=vt()<.16?3+Math.floor(vt()*2):Math.floor(vt()*3):St[Me]=Math.floor(vt()*3)}let pt=xt.slice();for(let sn=pt.length-1;sn>0;sn-=1){let xn=Math.floor(vt()*(sn+1));[pt[sn],pt[xn]]=[pt[xn],pt[sn]]}let ae=Math.min(pt.length,f),Dt=Math.round(ae*VU),It=ae-Dt,Et=Ii.clamp(.41*Math.sqrt(ae),5,9),He=ju+Et*.42,nn={half:at,maxRadius:Z,ballRadius:Et,ballCenterY:He,vaseTopRadius:ft,rand:vt};ce=[ue({...nn,model:st,cells:pt.slice(0,It),kind:"blossom"}),ue({...nn,model:J.leaf,cells:pt.slice(It,ae),kind:"leaf"})].filter(sn=>sn.count>0);let En=FE/st.size.x*1.2*st.size.y,Bi=ft+Wx*.98,ji=Math.max(Et+En,Bi),Ts=Math.max(He+Et*.86+En,ju+Wx*.75);et={boardCells:it,boardRadius:it/2*1.55,tilePos:ot,tileDelay:ht,tileDark:j,tileTone:St,tileCount:Mt,ballCenterY:He,ballRadius:Et,bouquetTargetY:Ts*.51,bouquetRadius:Math.max(ji,Ts*.5)*1.12},Be(l.current.palette)}function te(k,O){return k.r=O[0],k.g=O[1],k.b=O[2],k}function Be(k){let O=k||Fp;if(M.color.set(DE),Ft&&et){let it=O.darkTones.map(at=>new Ct(at)),st=NE.map(at=>new Ct(at));for(let at=0;at<et.tileCount;at+=1){let vt=et.tileDark[at]?it:st;Ft.setColorAt(at,vt[et.tileTone[at]%vt.length])}Ft.instanceColor&&(Ft.instanceColor.needsUpdate=!0)}let q=new Ct(O.accent),rt=new Ct(16774890);for(let it=0;it<$u;it+=1){let st=mt[it].pale?rt:q;nt.setColorAt(it,st),ut.setColorAt(it,st)}nt.instanceColor&&(nt.instanceColor.needsUpdate=!0),ut.instanceColor&&(ut.instanceColor.needsUpdate=!0);let xt=l.current.flower?.id||zl.id;ce.forEach(it=>{let st=it.kind==="leaf",at=st?"leaf":xt,vt=kx[at]||kx[zl.id],Mt=st?O.bouquetLeaf:O.bouquetTint,D=!!RE[at]&&typeof Mt=="string";it.uniforms&&(it.uniforms.uDesaturate.value=D?1:0),te(it.tintBouquet,Xx(Mt,vt,D)),te(it.tintQr,Xx(st?O.qrLeaf:O.qrTint,vt,D))})}c.current={rebuild:ee,applyPalette:Be};let Fe=!1,qe=0,en=0,Ne=k=>{Fe=!0,qe=k.clientX,en=Ut,d.domElement.setPointerCapture?.(k.pointerId)},ze=k=>{if(!Fe)return;let O=(k.clientX-qe)/Math.max(1,u.clientWidth);Ut=Ii.clamp(en+O*2.2,-.9,.9)},L=k=>{Fe=!1,d.domElement.releasePointerCapture?.(k.pointerId)};d.domElement.addEventListener("pointerdown",Ne),d.domElement.addEventListener("pointermove",ze),d.domElement.addEventListener("pointerup",L),d.domElement.addEventListener("pointercancel",L);function Tn(){let k=u.clientWidth||1,O=u.clientHeight||1;d.setSize(k,O,!1),S.aspect=k/O,S.updateProjectionMatrix()}let re=new ResizeObserver(Tn);re.observe(u),Tn();let R=0,v=performance.now(),P=v;function H(k){if(!et)return;let O=(performance.now()-v)/1e3,q=l.current.showQr?1:0;At+=(q-At)*(1-Math.exp(-XU*k)),Math.abs(q-At)<5e-4&&(At=q);let rt=Qa(At),xt=1-Qa(At*2.2);w.identity();for(let Dt=0;Dt<et.tileCount;Dt+=1){let It=Qa((At-et.tileDelay[Dt]*Vp)/(1-Vp)),Et=et.tileDark[Dt]?Hp:FU;y.set(et.tilePos[Dt*2],Et/2*It,et.tilePos[Dt*2+1]),N.set(It,It*(Et/Hp),It),A.compose(y,w,N),Ft.setMatrixAt(Dt,A)}Ft.instanceMatrix.needsUpdate=!0;for(let Dt=0;Dt<ce.length;Dt+=1){let It=ce[Dt];for(let Et=0;Et<It.count;Et+=1){let He=Qa((At-It.delay[Et]*Vp)/(1-Vp)),nn=xt*.32;y.set(bs(It.bqPos[Et*3],It.qrPos[Et*3],He)+Math.sin(O*.7+It.swayPhase[Et])*nn,bs(It.bqPos[Et*3+1],It.qrPos[Et*3+1],He)+Math.sin(He*Math.PI)*It.arc[Et]+Math.sin(O*.55+It.swayPhase[Et]*1.3)*nn*.6,bs(It.bqPos[Et*3+2],It.qrPos[Et*3+2],He)+Math.cos(O*.62+It.swayPhase[Et])*nn),w.fromArray(It.bqQuat,Et*4),C.fromArray(It.qrQuat,Et*4),w.slerp(C,He);let En=bs(It.bqScale[Et],It.qrScale[Et],He);N.set(En,En,En),A.compose(y,w,N),It.mesh.setMatrixAt(Et,A),B.copy(It.tintBouquet).lerp(It.tintQr,He),It.mesh.setColorAt(Et,B)}It.mesh.instanceMatrix.needsUpdate=!0,It.mesh.instanceColor&&(It.mesh.instanceColor.needsUpdate=!0)}if(Wt){let Dt=Qa(At*1.5);Wt.position.y=-ju*1.15*Dt,Wt.rotation.y=O*.06+Ut*.4,Wt.visible=Dt<.995}if(T.opacity=xt,E.visible=xt>.01,xt>.002){nt.visible=!0,ut.visible=!0;let Dt=et.ballRadius;for(let It=0;It<$u;It+=1){let Et=mt[It],He=O*Et.speed[0]+Et.phase[0],nn=O*Et.speed[1]+Et.phase[1],En=O*Et.speed[2]+Et.phase[2];y.set(Math.sin(He)*Dt*Et.radius[0],et.ballCenterY+Et.heightBias*Dt+Math.sin(nn)*Dt*Et.radius[1],Math.cos(En)*Dt*Et.radius[2]),Q.set(Math.cos(He)*Et.speed[0]*Et.radius[0],Math.cos(nn)*Et.speed[1]*Et.radius[1],-Math.sin(En)*Et.speed[2]*Et.radius[2]).normalize(),w.setFromUnitVectors(K,Q);let Bi=Math.sin(O*Et.flapSpeed+Et.flapPhase)*1.05,ji=jU*Et.scale*xt;N.set(ji,ji,ji),F.setFromAxisAngle(K,Bi),A.compose(y,C.copy(w).multiply(F),N),nt.setMatrixAt(It,A),F.setFromAxisAngle(K,-Bi),A.compose(y,C.copy(w).multiply(F),N),ut.setMatrixAt(It,A)}nt.instanceMatrix.needsUpdate=!0,ut.instanceMatrix.needsUpdate=!0}else nt.visible=!1,ut.visible=!1;let it=bs(.46,1,Qa(Math.min(1,At*1.7))),st=et.boardCells*it;x.scale.set(st,st,1),M.opacity=Qa(At*2.5),x.visible=At>.005;let at=bs(zE,WU,rt),vt=bs(qU,YU,rt),Mt=bs(-.42,0,rt)+Ut*(1-rt)+Math.sin(O*.11)*.05*xt,D=u.clientWidth<ZU,ct=bs(et.bouquetRadius,et.boardRadius,rt),Z=Math.max(1,u.clientHeight),ot=typeof l.current.bottomInset=="number"?l.current.bottomInset:D?Math.min(KU,Z*JU):0;ve===null?ve=ot:ve+=(ot-ve)*(1-Math.exp(-QU*k));let ht=ve,j=eI(ct,at,S.aspect,Math.max(.25,(Z-ht)/Z)),St=Math.max(.5,j-ct*3),pt=j+ct*4+50;(Math.abs(S.fov-at)>1e-4||Math.abs(S.near-St)>.5||Math.abs(S.far-pt)>1)&&(S.fov=at,S.near=St,S.far=pt,S.updateProjectionMatrix());let ae=bs(et.bouquetTargetY,0,rt);if(S.position.set(j*Math.cos(vt)*Math.sin(Mt),j*Math.sin(vt),j*Math.cos(vt)*Math.cos(Mt)),S.lookAt(0,ae,0),ht>0){let Dt=2*j*Math.tan(Ii.degToRad(at)/2)/Z;S.translateY(-(ht/2)*Dt)}d.render(g,S)}function W(){R=requestAnimationFrame(W);let k=performance.now(),O=Math.min(.1,(k-P)/1e3);P=k,H(O)}let lt=new Ep;return Promise.all([lt.loadAsync(BE.vase),lt.loadAsync(BE.leaf),...Ju.map(k=>lt.loadAsync(k.url))]).then(([k,O,...q])=>{if(Bt)return;let rt=qx(k),xt=ju/rt.size.y;Wt=new $e(rt.geometry,rt.material),Wt.scale.setScalar(xt),_.add(Wt),ft=rt.size.x*xt/2;let it={};Ju.forEach((st,at)=>{it[st.id]=qx(q[at])}),J={blossoms:it,leaf:qx(O)},ee(l.current.value),W(),r?.({capture:()=>(H(0),d.domElement.toDataURL("image/png")),snapTo:st=>{At=Ii.clamp(st,0,1),H(0)}})}).catch(k=>{Bt||a?.(k)}),()=>{Bt=!0,cancelAnimationFrame(R),re.disconnect(),d.domElement.removeEventListener("pointerdown",Ne),d.domElement.removeEventListener("pointermove",ze),d.domElement.removeEventListener("pointerup",L),d.domElement.removeEventListener("pointercancel",L),c.current=null,Vt(nt),Vt(ut),Y.alphaMap?.dispose(),Vt(Ft),ce.forEach(k=>Vt(k.mesh)),g.traverse(k=>{k.isMesh&&(k.geometry?.dispose?.(),Array.isArray(k.material)?k.material.forEach(O=>O.dispose()):k.material?.dispose?.())}),d.dispose(),d.domElement.parentNode===u&&u.removeChild(d.domElement)}},[]),(0,aa.useEffect)(()=>{c.current?.rebuild(n)},[n,e]),(0,aa.useEffect)(()=>{c.current?.applyPalette(t)},[t]),(0,VE.jsx)("div",{ref:o,className:"h-full w-full",style:{width:"100%",height:"100%",position:"relative"}})}var Hl=Es(Qu());function sI({url:n="https://amanbhardwaj.vercel.app/",flowerId:t="peony",paletteId:e="original",bloomText:i="click to bloom qr",gatherText:s="click to gather"}){let[r,a]=(0,Gp.useState)(!1),o=(0,Gp.useRef)(null),l=UE(t),c=LE(e),u=d=>{o.current={x:d.clientX,y:d.clientY,t:Date.now()}},h=d=>{let g=o.current;if(o.current=null,!g)return;Math.hypot(d.clientX-g.x,d.clientY-g.y)<8&&Date.now()-g.t<500&&a(m=>!m)},f=r?s:i;return(0,Hl.jsxs)("div",{style:{width:"100%",height:"100%",position:"relative",cursor:"pointer",overflow:"hidden"},onPointerDown:u,onPointerUp:h,title:f,children:[(0,Hl.jsx)(Yx,{value:n,palette:c,flower:l,showQr:r,bottomInset:0}),f&&f!=="none"&&(0,Hl.jsx)("div",{style:{position:"absolute",bottom:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",fontFamily:"'Major Mono Display', monospace",fontSize:"11px",letterSpacing:"0.08em",color:"rgba(255, 255, 255, 0.7)",background:"rgba(0, 0, 0, 0.45)",border:"1px solid rgba(255, 255, 255, 0.15)",padding:"5px 16px",borderRadius:"999px",backdropFilter:"blur(8px)",pointerEvents:"none",userSelect:"none",zIndex:2,whiteSpace:"nowrap"},children:f})]})}function GE(){let n=document.getElementById("bloom-container");if(n){let t=n.dataset.url||"https://amanbhardwaj.vercel.app/",e=n.dataset.flower||"peony",i=n.dataset.palette||"original",s=n.dataset.bloomText||"click to bloom qr",r=n.dataset.gatherText||"click to gather";(0,kE.createRoot)(n).render((0,Hl.jsx)(sI,{url:t,flowerId:e,paletteId:i,bloomText:s,gatherText:r}))}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",GE):GE();})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
