/*! For license information please see main.8ab1cc97.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),i=n(43),o=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(a(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var h=Object.assign,f=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var T=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var I=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var A=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=A&&e[A]||e["@@iterator"])?e:null}var P=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===P?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case m:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case E:return"Suspense";case S:return"SuspenseList";case T:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case k:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return N(e(t))}catch(n){}}return null}var O=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},z=[],F=-1;function M(e){return{current:e}}function U(e){0>F||(e.current=z[F],z[F]=null,F--)}function V(e,t){F++,z[F]=e.current,e.current=t}var $=M(null),B=M(null),H=M(null),q=M(null);function W(e,t){switch(V(H,t),V(B,e),V($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=od(t=id(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U($),V($,e)}function G(){U($),U(B),U(H)}function K(e){null!==e.memoizedState&&V(q,e);var t=$.current,n=od(t,e.type);t!==n&&(V(B,e),V($,n))}function Y(e){B.current===e&&(U($),U(B)),q.current===e&&(U(q),Kd._currentValue=L)}var Q=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ie=r.unstable_UserBlockingPriority,oe=r.unstable_NormalPriority,ae=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function he(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var fe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(pe(e)/ge|0)|0},pe=Math.log,ge=Math.LN2;var me=256,ye=4194304;function ve(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~o)?i=ve(r):0!==(a&=s)?i=ve(a):n||0!==(n=s&~e)&&(i=ve(n)):0!==(s=r&~o)?i=ve(s):0!==a?i=ve(a):n||0!==(n=r&~e)&&(i=ve(n)),0===i?0:0!==t&&t!==i&&0===(t&o)&&((o=i&-i)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:i}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function _e(){var e=me;return 0===(4194048&(me<<=1))&&(me=256),e}function Ee(){var e=ye;return 0===(62914560&(ye<<=1))&&(ye=4194304),e}function Se(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ke(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-fe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Te(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ae(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Re(){var e=j.p;return 0!==e?e:void 0===(e=window.event)?32:ch(e.type)}var Pe=Math.random().toString(36).slice(2),Ne="__reactFiber$"+Pe,Oe="__reactProps$"+Pe,De="__reactContainer$"+Pe,je="__reactEvents$"+Pe,Le="__reactListeners$"+Pe,ze="__reactHandles$"+Pe,Fe="__reactResources$"+Pe,Me="__reactMarker$"+Pe;function Ue(e){delete e[Ne],delete e[Oe],delete e[je],delete e[Le],delete e[ze]}function Ve(e){var t=e[Ne];if(t)return t;for(var n=e.parentNode;n;){if(t=n[De]||n[Ne]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bd(e);null!==e;){if(n=e[Ne])return n;e=bd(e)}return t}n=(e=n).parentNode}return null}function $e(e){if(e=e[Ne]||e[De]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Be(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function He(e){var t=e[Fe];return t||(t=e[Fe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Me]=!0}var We=new Set,Ge={};function Ke(e,t){Ye(e,t),Ye(e+"Capture",t)}function Ye(e,t){for(Ge[e]=t,e=0;e<t.length;e++)We.add(t[e])}var Qe,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(i=t,Q.call(et,i)||!Q.call(Ze,i)&&(Je.test(i)?et[i]=!0:(Ze[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Qe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Qe+e+Xe}var ot=!1;function at(e,t){if(!e||ot)return"";ot=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),a=o[0],s=o[1];if(a&&s){var l=a.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{ot=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return it("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ft(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var pt=/[\n"\\]/g;function gt(e){return e.replace(pt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function mt(e,t,n,r,i,o,a,s){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?vt(e,a,ct(t)):null!=n?vt(e,a,ct(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=o&&(e.defaultChecked=!!o),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function yt(e,t,n,r,i,o,a,s){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a)}function vt(e,t,n){"number"===t&&ft(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(O(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function _t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Et=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function St(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||Et.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function kt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&St(e,i,r)}else for(var o in t)t.hasOwnProperty(o)&&St(e,o,t[o])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),It=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function At(e){return It.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Rt=null;function Pt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Nt=null,Ot=null;function Dt(e){var t=$e(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;e:switch(e=t.stateNode,t.type){case"input":if(mt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Oe]||null;if(!i)throw Error(a(90));mt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ht(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var jt=!1;function Lt(e,t,n){if(jt)return e(t,n);jt=!0;try{return e(t)}finally{if(jt=!1,(null!==Nt||null!==Ot)&&(Vc(),Nt&&(t=Nt,e=Ot,Ot=Nt=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function zt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Oe]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Ft=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Mt=!1;if(Ft)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Mt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch(Oh){Mt=!1}var Vt=null,$t=null,Bt=null;function Ht(){if(Bt)return Bt;var e,t,n=$t,r=n.length,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Bt=i.slice(e,1<t?1-t:void 0)}function qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Wt(){return!0}function Gt(){return!1}function Kt(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Wt:Gt,this.isPropagationStopped=Gt,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){},isPersistent:Wt}),t}var Yt,Qt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Kt(Jt),en=h({},Jt,{view:0,detail:0}),tn=Kt(en),nn=h({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Yt=e.screenX-Xt.screenX,Qt=e.screenY-Xt.screenY):Qt=Yt=0,Xt=e),Yt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),rn=Kt(nn),on=Kt(h({},nn,{dataTransfer:0})),an=Kt(h({},en,{relatedTarget:0})),sn=Kt(h({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Kt(h({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Kt(h({},Jt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=hn[e])&&!!t[e]}function pn(){return fn}var gn=Kt(h({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return"keypress"===e.type?qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mn=Kt(h({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),yn=Kt(h({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn})),vn=Kt(h({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=Kt(h({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Kt(h({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],_n=Ft&&"CompositionEvent"in window,En=null;Ft&&"documentMode"in document&&(En=document.documentMode);var Sn=Ft&&"TextEvent"in window&&!En,kn=Ft&&(!_n||En&&8<En&&11>=En),Cn=String.fromCharCode(32),Tn=!1;function In(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function An(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Rn=!1;var Pn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Pn[e.type]:"textarea"===t}function On(e,t,n,r){Nt?Ot?Ot.push(r):Ot=[r]:Nt=r,0<(t=Hu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,jn=null;function Ln(e){Lu(e,0)}function zn(e){if(ht(Be(e)))return e}function Fn(e,t){if("change"===e)return t}var Mn=!1;if(Ft){var Un;if(Ft){var Vn="oninput"in document;if(!Vn){var $n=document.createElement("div");$n.setAttribute("oninput","return;"),Vn="function"===typeof $n.oninput}Un=Vn}else Un=!1;Mn=Un&&(!document.documentMode||9<document.documentMode)}function Bn(){Dn&&(Dn.detachEvent("onpropertychange",Hn),jn=Dn=null)}function Hn(e){if("value"===e.propertyName&&zn(jn)){var t=[];On(t,jn,e,Pt(e)),Lt(Ln,t)}}function qn(e,t,n){"focusin"===e?(Bn(),jn=n,(Dn=t).attachEvent("onpropertychange",Hn)):"focusout"===e&&Bn()}function Wn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return zn(jn)}function Gn(e,t){if("click"===e)return zn(t)}function Kn(e,t){if("input"===e||"change"===e)return zn(t)}var Yn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Qn(e,t){if(Yn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Q.call(t,i)||!Yn(e[i],t[i]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ft((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ft((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Ft&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,or=null,ar=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ar||null==rr||rr!==ft(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},or&&Qn(or,r)||(or=r,0<(r=Hu(ir,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function hr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Ft&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var fr=hr("animationend"),pr=hr("animationiteration"),gr=hr("animationstart"),mr=hr("transitionrun"),yr=hr("transitionstart"),vr=hr("transitioncancel"),br=hr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){xr.set(e,t),Ke(t,[e])}wr.push("scrollEnd");var Er=new WeakMap;function Sr(e,t){if("object"===typeof e&&null!==e){var n=Er.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},Er.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var kr=[],Cr=0,Tr=0;function Ir(){for(var e=Cr,t=Tr=Cr=0;t<e;){var n=kr[t];kr[t++]=null;var r=kr[t];kr[t++]=null;var i=kr[t];kr[t++]=null;var o=kr[t];if(kr[t++]=null,null!==r&&null!==i){var a=r.pending;null===a?i.next=i:(i.next=a.next,a.next=i),r.pending=i}0!==o&&Nr(n,i,o)}}function Ar(e,t,n,r){kr[Cr++]=e,kr[Cr++]=t,kr[Cr++]=n,kr[Cr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Rr(e,t,n,r){return Ar(e,t,n,r),Or(e)}function Pr(e,t){return Ar(e,null,null,t),Or(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(i=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,i&&null!==t&&(i=31-fe(n),null===(r=(e=o.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),o):null}function Or(e){if(50<Nc)throw Nc=0,Oc=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Dr={};function jr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lr(e,t,n,r){return new jr(e,t,n,r)}function zr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Fr(e,t){var n=e.alternate;return null===n?((n=Lr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ur(e,t,n,r,i,o){var s=0;if(r=e,"function"===typeof e)zr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,$.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case T:return(e=Lr(31,n,t,i)).elementType=T,e.lanes=o,e;case m:return Vr(n.children,i,o,t);case y:s=8,i|=24;break;case v:return(e=Lr(12,n,t,2|i)).elementType=v,e.lanes=o,e;case E:return(e=Lr(13,n,t,i)).elementType=E,e.lanes=o,e;case S:return(e=Lr(19,n,t,i)).elementType=S,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:s=10;break e;case x:s=9;break e;case _:s=11;break e;case k:s=14;break e;case C:s=16,r=null;break e}s=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=Lr(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Vr(e,t,n,r){return(e=Lr(7,e,r,t)).lanes=n,e}function $r(e,t,n){return(e=Lr(6,e,null,t)).lanes=n,e}function Br(e,t,n){return(t=Lr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hr=[],qr=0,Wr=null,Gr=0,Kr=[],Yr=0,Qr=null,Xr=1,Jr="";function Zr(e,t){Hr[qr++]=Gr,Hr[qr++]=Wr,Wr=e,Gr=t}function ei(e,t,n){Kr[Yr++]=Xr,Kr[Yr++]=Jr,Kr[Yr++]=Qr,Qr=e;var r=Xr;e=Jr;var i=32-fe(r)-1;r&=~(1<<i),n+=1;var o=32-fe(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xr=1<<32-fe(t)+i|n<<i|r,Jr=o+e}else Xr=1<<o|n<<i|r,Jr=e}function ti(e){null!==e.return&&(Zr(e,1),ei(e,1,0))}function ni(e){for(;e===Wr;)Wr=Hr[--qr],Hr[qr]=null,Gr=Hr[--qr],Hr[qr]=null;for(;e===Qr;)Qr=Kr[--Yr],Kr[Yr]=null,Jr=Kr[--Yr],Kr[Yr]=null,Xr=Kr[--Yr],Kr[Yr]=null}var ri=null,ii=null,oi=!1,ai=null,si=!1,li=Error(a(519));function ci(e){throw gi(Sr(Error(a(418,"")),e)),li}function ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ne]=e,t[Oe]=r,n){case"dialog":zu("cancel",t),zu("close",t);break;case"iframe":case"object":case"embed":zu("load",t);break;case"video":case"audio":for(n=0;n<Du.length;n++)zu(Du[n],t);break;case"source":zu("error",t);break;case"img":case"image":case"link":zu("error",t),zu("load",t);break;case"details":zu("toggle",t);break;case"input":zu("invalid",t),yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":zu("invalid",t);break;case"textarea":zu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Qu(t.textContent,n)?(null!=r.popover&&(zu("beforetoggle",t),zu("toggle",t)),null!=r.onScroll&&zu("scroll",t),null!=r.onScrollEnd&&zu("scrollend",t),null!=r.onClick&&(t.onclick=Xu),t=!0):t=!1,t||ci(e)}function di(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 13:return void(si=!1);case 27:case 3:return void(si=!0);default:ri=ri.return}}function hi(e){if(e!==ri)return!1;if(!oi)return di(e),oi=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||ad(e.type,e.memoizedProps)),t=!t),t&&ii&&ci(e),di(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ii=yd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ii=null}}else 27===n?(n=ii,fd(e.type)?(e=vd,vd=null,ii=e):ii=n):ii=ri?yd(e.stateNode.nextSibling):null;return!0}function fi(){ii=ri=null,oi=!1}function pi(){var e=ai;return null!==e&&(null===bc?bc=e:bc.push.apply(bc,e),ai=null),e}function gi(e){null===ai?ai=[e]:ai.push(e)}var mi=M(null),yi=null,vi=null;function bi(e,t,n){V(mi,t._currentValue),t._currentValue=n}function xi(e){e._currentValue=mi.current,U(mi)}function wi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _i(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var o=i.dependencies;if(null!==o){var s=i.child;o=o.firstContext;e:for(;null!==o;){var l=o;o=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),wi(o.return,n,e),r||(s=null);break e}o=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(a(341));s.lanes|=n,null!==(o=s.alternate)&&(o.lanes|=n),wi(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function Ei(e,t,n,r){e=null;for(var i=t,o=!1;null!==i;){if(!o)if(0!==(524288&i.flags))o=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(a(387));if(null!==(s=s.memoizedProps)){var l=i.type;Yn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===q.current){if(null===(s=i.alternate))throw Error(a(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(Kd):e=[Kd])}i=i.return}null!==e&&_i(t,e,n,r),t.flags|=262144}function Si(e){for(e=e.firstContext;null!==e;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ki(e){yi=e,vi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ci(e){return Ii(yi,e)}function Ti(e,t){return null===yi&&ki(e),Ii(e,t)}function Ii(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===vi){if(null===e)throw Error(a(308));vi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vi=vi.next=t;return n}var Ai="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ri=r.unstable_scheduleCallback,Pi=r.unstable_NormalPriority,Ni={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oi(){return{controller:new Ai,data:new Map,refCount:0}}function Di(e){e.refCount--,0===e.refCount&&Ri(Pi,function(){e.controller.abort()})}var ji=null,Li=0,zi=0,Fi=null;function Mi(){if(0===--Li&&null!==ji){null!==Fi&&(Fi.status="fulfilled");var e=ji;ji=null,zi=0,Fi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ui=D.S;D.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===ji){var n=ji=[];Li=0,zi=Au(),Fi={status:"pending",value:void 0,then:function(e){n.push(e)}}}Li++,t.then(Mi,Mi)}(0,t),null!==Ui&&Ui(e,t)};var Vi=M(null);function $i(){var e=Vi.current;return null!==e?e:rc.pooledCache}function Bi(e,t){V(Vi,null===t?Vi.current:t.pool)}function Hi(){var e=$i();return null===e?null:{parent:Ni._currentValue,pool:e}}var qi=Error(a(460)),Wi=Error(a(474)),Gi=Error(a(542)),Ki={then:function(){}};function Yi(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Qi(){}function Xi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Qi,Qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Qi,Qi);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e}throw Ji=t,qi}}var Ji=null;function Zi(){if(null===Ji)throw Error(a(459));var e=Ji;return Ji=null,e}function eo(e){if(e===qi||e===Gi)throw Error(a(483))}var to=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function io(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Or(e),Nr(e,null,n),t}return Ar(e,r,t,n),Or(e)}function ao(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}function so(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lo=!1;function co(){if(lo){if(null!==Fi)throw Fi}}function uo(e,t,n,r){lo=!1;var i=e.updateQueue;to=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var f=-536870913&s.lane,p=f!==s.lane;if(p?(oc&f)===f:(r&f)===f){0!==f&&f===zi&&(lo=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var g=e,m=s;f=t;var y=n;switch(m.tag){case 1:if("function"===typeof(g=m.payload)){d=g.call(y,d,f);break e}d=g;break e;case 3:g.flags=-65537&g.flags|128;case 0:if(null===(f="function"===typeof(g=m.payload)?g.call(y,d,f):g)||void 0===f)break e;d=h({},d,f);break e;case 2:to=!0}}null!==(f=s.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=i.callbacks)?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=p,l=d):u=u.next=p,a|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===o&&(i.shared.lanes=0),fc|=a,e.lanes=a,e.memoizedState=d}}function ho(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function fo(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)ho(n[e],t)}var po=M(null),go=M(0);function mo(e,t){V(go,e=dc),V(po,t),dc=e|t.baseLanes}function yo(){V(go,dc),V(po,po.current)}function vo(){dc=go.current,U(po),U(go)}var bo=0,xo=null,wo=null,_o=null,Eo=!1,So=!1,ko=!1,Co=0,To=0,Io=null,Ao=0;function Ro(){throw Error(a(321))}function Po(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function No(e,t,n,r,i,o){return bo=o,xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=null===e||null===e.memoizedState?Wa:Ga,ko=!1,o=n(r,i),ko=!1,So&&(o=Do(t,n,r,i)),Oo(e),o}function Oo(e){D.H=qa;var t=null!==wo&&null!==wo.next;if(bo=0,_o=wo=xo=null,Eo=!1,To=0,Io=null,t)throw Error(a(300));null===e||Ts||null!==(e=e.dependencies)&&Si(e)&&(Ts=!0)}function Do(e,t,n,r){xo=e;var i=0;do{if(So&&(Io=null),To=0,So=!1,25<=i)throw Error(a(301));if(i+=1,_o=wo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}D.H=Ka,o=t(n,r)}while(So);return o}function jo(){var e=D.H,t=e.useState()[0];return t="function"===typeof t.then?Vo(t):t,e=e.useState()[0],(null!==wo?wo.memoizedState:null)!==e&&(xo.flags|=1024),t}function Lo(){var e=0!==Co;return Co=0,e}function zo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fo(e){if(Eo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Eo=!1}bo=0,_o=wo=xo=null,So=!1,To=Co=0,Io=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===_o?xo.memoizedState=_o=e:_o=_o.next=e,_o}function Uo(){if(null===wo){var e=xo.alternate;e=null!==e?e.memoizedState:null}else e=wo.next;var t=null===_o?xo.memoizedState:_o.next;if(null!==t)_o=t,wo=e;else{if(null===e){if(null===xo.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(wo=e).memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},null===_o?xo.memoizedState=_o=e:_o=_o.next=e}return _o}function Vo(e){var t=To;return To+=1,null===Io&&(Io=[]),e=Xi(Io,e,t),t=xo,null===(null===_o?t.memoizedState:_o.next)&&(t=t.alternate,D.H=null===t||null===t.memoizedState?Wa:Ga),e}function $o(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Vo(e);if(e.$$typeof===w)return Ci(e)}throw Error(a(438,String(e)))}function Bo(e){var t=null,n=xo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=I;return t.index++,n}function Ho(e,t){return"function"===typeof t?t(e):t}function qo(e){return Wo(Uo(),wo,e)}function Wo(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,null===i)e.memoizedState=o;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var h=-536870913&u.lane;if(h!==u.lane?(oc&h)===h:(bo&h)===h){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===zi&&(d=!0);else{if((bo&f)===f){u=u.next,f===zi&&(d=!0);continue}h={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,s=o):c=c.next=h,xo.lanes|=f,fc|=f}h=u.action,ko&&n(o,h),o=u.hasEagerState?u.eagerState:n(o,h)}else f={lane:h,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,s=o):c=c.next=f,xo.lanes|=h,fc|=h;u=u.next}while(null!==u&&u!==t);if(null===c?s=o:c.next=l,!Yn(o,e.memoizedState)&&(Ts=!0,d&&null!==(n=Fi)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=c,r.lastRenderedState=o}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Go(e){var t=Uo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);Yn(o,t.memoizedState)||(Ts=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ko(e,t,n){var r=xo,i=Uo(),o=oi;if(o){if(void 0===n)throw Error(a(407));n=n()}else n=t();var s=!Yn((wo||i).memoizedState,n);if(s&&(i.memoizedState=n,Ts=!0),i=i.queue,ya(2048,8,Xo.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==_o&&1&_o.memoizedState.tag){if(r.flags|=2048,pa(9,{destroy:void 0,resource:void 0},Qo.bind(null,r,i,n,t),null),null===rc)throw Error(a(349));o||0!==(124&bo)||Yo(r,t,n)}return n}function Yo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Qo(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Zo(e)}function Xo(e,t,n){return n(function(){Jo(t)&&Zo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch(r){return!0}}function Zo(e){var t=Pr(e,2);null!==t&&Lc(t,e,2)}function ea(e){var t=Mo();if("function"===typeof e){var n=e;if(e=n(),ko){he(!0);try{n()}finally{he(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t}function ta(e,t,n,r){return e.baseState=n,Wo(e,wo,"function"===typeof r?r:Ho)}function na(e,t,n,r,i){if($a(e))throw Error(a(485));if(null!==(e=t.action)){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==D.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,ra(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ra(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var o=D.T,a={};D.T=a;try{var s=n(i,r),l=D.S;null!==l&&l(a,s),ia(e,t,s)}catch(c){aa(e,t,c)}finally{D.T=o}}else try{ia(e,t,o=n(i,r))}catch(u){aa(e,t,u)}}function ia(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){oa(e,t,n)},function(n){return aa(e,t,n)}):oa(e,t,n)}function oa(e,t,n){t.status="fulfilled",t.value=n,sa(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ra(e,n)))}function aa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,sa(t),t=t.next}while(t!==r)}e.action=null}function sa(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function la(e,t){return t}function ca(e,t){if(oi){var n=rc.formState;if(null!==n){e:{var r=xo;if(oi){if(ii){t:{for(var i=ii,o=si;8!==i.nodeType;){if(!o){i=null;break t}if(null===(i=yd(i.nextSibling))){i=null;break t}}i="F!"===(o=i.data)||"F"===o?i:null}if(i){ii=yd(i.nextSibling),r="F!"===i.data;break e}}ci(r)}r=!1}r&&(t=n[0])}}return(n=Mo()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n.queue=r,n=Ma.bind(null,xo,r),r.dispatch=n,r=ea(!1),o=Va.bind(null,xo,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Mo()).queue=i,n=na.bind(null,xo,i,o,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ua(e){return da(Uo(),wo,e)}function da(e,t,n){if(t=Wo(e,t,la)[0],e=qo(Ho)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Vo(t)}catch(a){if(a===qi)throw Gi;throw a}else r=t;var i=(t=Uo()).queue,o=i.dispatch;return n!==t.memoizedState&&(xo.flags|=2048,pa(9,{destroy:void 0,resource:void 0},ha.bind(null,i,n),null)),[r,o,e]}function ha(e,t){e.action=t}function fa(e){var t=Uo(),n=wo;if(null!==n)return da(t,n,e);Uo(),t=t.memoizedState;var r=(n=Uo()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function pa(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ga(){return Uo().memoizedState}function ma(e,t,n,r){var i=Mo();r=void 0===r?null:r,xo.flags|=e,i.memoizedState=pa(1|t,{destroy:void 0,resource:void 0},n,r)}function ya(e,t,n,r){var i=Uo();r=void 0===r?null:r;var o=i.memoizedState.inst;null!==wo&&null!==r&&Po(r,wo.memoizedState.deps)?i.memoizedState=pa(t,o,n,r):(xo.flags|=e,i.memoizedState=pa(1|t,o,n,r))}function va(e,t){ma(8390656,8,e,t)}function ba(e,t){ya(2048,8,e,t)}function xa(e,t){return ya(4,2,e,t)}function wa(e,t){return ya(4,4,e,t)}function _a(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Ea(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ya(4,4,_a.bind(null,t,e),n)}function Sa(){}function ka(e,t){var n=Uo();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ca(e,t){var n=Uo();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Po(t,r[1]))return r[0];if(r=e(),ko){he(!0);try{e()}finally{he(!1)}}return n.memoizedState=[r,t],r}function Ta(e,t,n){return void 0===n||0!==(1073741824&bo)?e.memoizedState=t:(e.memoizedState=n,e=jc(),xo.lanes|=e,fc|=e,n)}function Ia(e,t,n,r){return Yn(n,t)?n:null!==po.current?(e=Ta(e,n,r),Yn(e,t)||(Ts=!0),e):0===(42&bo)?(Ts=!0,e.memoizedState=n):(e=jc(),xo.lanes|=e,fc|=e,t)}function Aa(e,t,n,r,i){var o=j.p;j.p=0!==o&&8>o?o:8;var a=D.T,s={};D.T=s,Va(e,!1,t,n);try{var l=i(),c=D.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)Ua(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(l,r),Dc());else Ua(e,t,r,Dc())}catch(u){Ua(e,t,{then:function(){},status:"rejected",reason:u},Dc())}finally{j.p=o,D.T=a}}function Ra(){}function Pa(e,t,n,r){if(5!==e.tag)throw Error(a(476));var i=Na(e).queue;Aa(e,i,t,L,null===n?Ra:function(){return Oa(e),n(r)})}function Na(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:L},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Oa(e){Ua(e,Na(e).next.queue,{},Dc())}function Da(){return Ci(Kd)}function ja(){return Uo().memoizedState}function La(){return Uo().memoizedState}function za(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Dc(),r=oo(t,e=io(n),n);return null!==r&&(Lc(r,t,n),ao(r,t,n)),t={cache:Oi()},void(e.payload=t)}t=t.return}}function Fa(e,t,n){var r=Dc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},$a(e)?Ba(t,n):null!==(n=Rr(e,t,n,r))&&(Lc(n,e,r),Ha(n,t,r))}function Ma(e,t,n){Ua(e,t,n,Dc())}function Ua(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if($a(e))Ba(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Yn(s,a))return Ar(e,t,i,0),null===rc&&Ir(),!1}catch(l){}if(null!==(n=Rr(e,t,i,r)))return Lc(n,e,r),Ha(n,t,r),!0}return!1}function Va(e,t,n,r){if(r={lane:2,revertLane:Au(),action:r,hasEagerState:!1,eagerState:null,next:null},$a(e)){if(t)throw Error(a(479))}else null!==(t=Rr(e,n,r,2))&&Lc(t,e,2)}function $a(e){var t=e.alternate;return e===xo||null!==t&&t===xo}function Ba(e,t){So=Eo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ha(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}var qa={readContext:Ci,use:$o,useCallback:Ro,useContext:Ro,useEffect:Ro,useImperativeHandle:Ro,useLayoutEffect:Ro,useInsertionEffect:Ro,useMemo:Ro,useReducer:Ro,useRef:Ro,useState:Ro,useDebugValue:Ro,useDeferredValue:Ro,useTransition:Ro,useSyncExternalStore:Ro,useId:Ro,useHostTransitionStatus:Ro,useFormState:Ro,useActionState:Ro,useOptimistic:Ro,useMemoCache:Ro,useCacheRefresh:Ro},Wa={readContext:Ci,use:$o,useCallback:function(e,t){return Mo().memoizedState=[e,void 0===t?null:t],e},useContext:Ci,useEffect:va,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ma(4194308,4,_a.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ma(4194308,4,e,t)},useInsertionEffect:function(e,t){ma(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=void 0===t?null:t;var r=e();if(ko){he(!0);try{e()}finally{he(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(void 0!==n){var i=n(t);if(ko){he(!0);try{n(t)}finally{he(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fa.bind(null,xo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Mo().memoizedState=e},useState:function(e){var t=(e=ea(e)).queue,n=Ma.bind(null,xo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Sa,useDeferredValue:function(e,t){return Ta(Mo(),e,t)},useTransition:function(){var e=ea(!1);return e=Aa.bind(null,xo,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xo,i=Mo();if(oi){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===rc)throw Error(a(349));0!==(124&oc)||Yo(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,va(Xo.bind(null,r,o,e),[e]),r.flags|=2048,pa(9,{destroy:void 0,resource:void 0},Qo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=rc.identifierPrefix;if(oi){var n=Jr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-fe(Xr)-1)).toString(32)+n),0<(n=Co++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Ao++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Da,useFormState:ca,useActionState:ca,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Va.bind(null,xo,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bo,useCacheRefresh:function(){return Mo().memoizedState=za.bind(null,xo)}},Ga={readContext:Ci,use:$o,useCallback:ka,useContext:Ci,useEffect:ba,useImperativeHandle:Ea,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Ca,useReducer:qo,useRef:ga,useState:function(){return qo(Ho)},useDebugValue:Sa,useDeferredValue:function(e,t){return Ia(Uo(),wo.memoizedState,e,t)},useTransition:function(){var e=qo(Ho)[0],t=Uo().memoizedState;return["boolean"===typeof e?e:Vo(e),t]},useSyncExternalStore:Ko,useId:ja,useHostTransitionStatus:Da,useFormState:ua,useActionState:ua,useOptimistic:function(e,t){return ta(Uo(),0,e,t)},useMemoCache:Bo,useCacheRefresh:La},Ka={readContext:Ci,use:$o,useCallback:ka,useContext:Ci,useEffect:ba,useImperativeHandle:Ea,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Ca,useReducer:Go,useRef:ga,useState:function(){return Go(Ho)},useDebugValue:Sa,useDeferredValue:function(e,t){var n=Uo();return null===wo?Ta(n,e,t):Ia(n,wo.memoizedState,e,t)},useTransition:function(){var e=Go(Ho)[0],t=Uo().memoizedState;return["boolean"===typeof e?e:Vo(e),t]},useSyncExternalStore:Ko,useId:ja,useHostTransitionStatus:Da,useFormState:fa,useActionState:fa,useOptimistic:function(e,t){var n=Uo();return null!==wo?ta(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bo,useCacheRefresh:La},Ya=null,Qa=0;function Xa(e){var t=Qa;return Qa+=1,null===Ya&&(Ya=[]),Xi(Ya,e,t)}function Ja(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Za(e,t){if(t.$$typeof===f)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Fr(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=$r(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===m?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===C&&es(o)===t.type)?(Ja(t=i(t,n.props),n),t.return=e,t):(Ja(t=Ur(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Br(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Vr(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=$r(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case p:return Ja(n=Ur(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Br(t,e.mode,n)).return=e,t;case C:return h(e,t=(0,t._init)(t._payload),n)}if(O(t)||R(t))return(t=Vr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return h(e,Xa(t),n);if(t.$$typeof===w)return h(e,Ti(e,t),n);Za(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case p:return n.key===i?c(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case C:return f(e,t,n=(i=n._init)(n._payload),r)}if(O(n)||R(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,Xa(n),r);if(n.$$typeof===w)return f(e,t,Ti(e,n),r);Za(e,n)}return null}function y(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case p:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case g:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case C:return y(e,t,n,r=(0,r._init)(r._payload),i)}if(O(r)||R(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return y(e,t,n,Xa(r),i);if(r.$$typeof===w)return y(e,t,n,Ti(t,r),i);Za(t,r)}return null}function v(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===m&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case p:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===m){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===C&&es(b)===c.type){n(l,c.sibling),Ja(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===m?((d=Vr(u.props.children,l.mode,d,u.key)).return=l,l=d):(Ja(d=Ur(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case g:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Br(u,l.mode,d)).return=l,l=d}return s(l);case C:return v(l,c,u=(b=u._init)(u._payload),d)}if(O(u))return function(i,a,s,l){for(var c=null,u=null,d=a,p=a=0,g=null;null!==d&&p<s.length;p++){d.index>p?(g=d,d=null):g=d.sibling;var m=f(i,d,s[p],l);if(null===m){null===d&&(d=g);break}e&&d&&null===m.alternate&&t(i,d),a=o(m,a,p),null===u?c=m:u.sibling=m,u=m,d=g}if(p===s.length)return n(i,d),oi&&Zr(i,p),c;if(null===d){for(;p<s.length;p++)null!==(d=h(i,s[p],l))&&(a=o(d,a,p),null===u?c=d:u.sibling=d,u=d);return oi&&Zr(i,p),c}for(d=r(d);p<s.length;p++)null!==(g=y(d,i,p,s[p],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?p:g.key),a=o(g,a,p),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),oi&&Zr(i,p),c}(l,c,u,d);if(R(u)){if("function"!==typeof(b=R(u)))throw Error(a(150));return function(i,s,l,c){if(null==l)throw Error(a(151));for(var u=null,d=null,p=s,g=s=0,m=null,v=l.next();null!==p&&!v.done;g++,v=l.next()){p.index>g?(m=p,p=null):m=p.sibling;var b=f(i,p,v.value,c);if(null===b){null===p&&(p=m);break}e&&p&&null===b.alternate&&t(i,p),s=o(b,s,g),null===d?u=b:d.sibling=b,d=b,p=m}if(v.done)return n(i,p),oi&&Zr(i,g),u;if(null===p){for(;!v.done;g++,v=l.next())null!==(v=h(i,v.value,c))&&(s=o(v,s,g),null===d?u=v:d.sibling=v,d=v);return oi&&Zr(i,g),u}for(p=r(p);!v.done;g++,v=l.next())null!==(v=y(p,i,g,v.value,c))&&(e&&null!==v.alternate&&p.delete(null===v.key?g:v.key),s=o(v,s,g),null===d?u=v:d.sibling=v,d=v);return e&&p.forEach(function(e){return t(i,e)}),oi&&Zr(i,g),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return v(l,c,Xa(u),d);if(u.$$typeof===w)return v(l,c,Ti(l,u),d);Za(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=$r(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{Qa=0;var i=v(e,t,n,r);return Ya=null,i}catch(a){if(a===qi||a===Gi)throw a;var o=Lr(29,a,null,e.mode);return o.lanes=r,o.return=e,o}}}var ns=ts(!0),rs=ts(!1),is=M(null),os=null;function as(e){var t=e.alternate;V(us,1&us.current),V(is,e),null===os&&(null===t||null!==po.current||null!==t.memoizedState)&&(os=e)}function ss(e){if(22===e.tag){if(V(us,us.current),V(is,e),null===os){var t=e.alternate;null!==t&&null!==t.memoizedState&&(os=e)}}else ls()}function ls(){V(us,us.current),V(is,is.current)}function cs(e){U(is),os===e&&(os=null),U(us)}var us=M(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||md(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function hs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:h({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dc(),i=io(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=oo(e,i,r))&&(Lc(t,e,r),ao(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dc(),i=io(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=oo(e,i,r))&&(Lc(t,e,r),ao(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dc(),r=io(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=oo(e,r,n))&&(Lc(t,e,n),ao(t,e,n))}};function ps(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!Qn(n,r)||!Qn(i,o))}function gs(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function ms(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var ys="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function vs(e){ys(e)}function bs(e){console.error(e)}function xs(e){ys(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function _s(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Es(e,t,n){return(n=io(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Ss(e){return(e=io(e)).tag=3,e}function ks(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var o=r.value;e.payload=function(){return i(o)},e.callback=function(){_s(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){_s(t,n,r),"function"!==typeof i&&(null===Sc?Sc=new Set([this]):Sc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Cs=Error(a(461)),Ts=!1;function Is(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function As(e,t,n,r,i){n=n.render;var o=t.ref;if("ref"in r){var a={};for(var s in r)"ref"!==s&&(a[s]=r[s])}else a=r;return ki(t),r=No(e,t,n,a,o,i),s=Lo(),null===e||Ts?(oi&&s&&ti(t),t.flags|=1,Is(e,t,r,i),t.child):(zo(e,t,i),Ys(e,t,i))}function Rs(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||zr(o)||void 0!==o.defaultProps||null!==n.compare?((e=Ur(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ps(e,t,o,r,i))}if(o=e.child,!Qs(e,i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:Qn)(a,r)&&e.ref===t.ref)return Ys(e,t,i)}return t.flags|=1,(e=Fr(o,r)).ref=t.ref,e.return=t,t.child=e}function Ps(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(Qn(o,r)&&e.ref===t.ref){if(Ts=!1,t.pendingProps=r=o,!Qs(e,i))return t.lanes=e.lanes,Ys(e,t,i);0!==(131072&e.flags)&&(Ts=!0)}}return js(e,t,n,r,i)}function Ns(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(i=t.child=e.child,o=0;null!==i;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return Os(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Os(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Bi(0,null!==o?o.cachePool:null),null!==o?mo(t,o):yo(),ss(t)}else null!==o?(Bi(0,o.cachePool),mo(t,o),ls(),t.memoizedState=null):(null!==e&&Bi(0,null),yo(),ls());return Is(e,t,i,n),t.child}function Os(e,t,n,r){var i=$i();return i=null===i?null:{parent:Ni._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Bi(0,null),yo(),ss(t),null!==e&&Ei(e,t,r,!0),null}function Ds(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function js(e,t,n,r,i){return ki(t),n=No(e,t,n,r,void 0,i),r=Lo(),null===e||Ts?(oi&&r&&ti(t),t.flags|=1,Is(e,t,n,i),t.child):(zo(e,t,i),Ys(e,t,i))}function Ls(e,t,n,r,i,o){return ki(t),t.updateQueue=null,n=Do(t,r,n,i),Oo(e),r=Lo(),null===e||Ts?(oi&&r&&ti(t),t.flags|=1,Is(e,t,n,o),t.child):(zo(e,t,o),Ys(e,t,o))}function zs(e,t,n,r,i){if(ki(t),null===t.stateNode){var o=Dr,a=n.contextType;"object"===typeof a&&null!==a&&(o=Ci(a)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=fs,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},no(t),a=n.contextType,o.context="object"===typeof a&&null!==a?Ci(a):Dr,o.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(hs(t,n,a,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(a=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),a!==o.state&&fs.enqueueReplaceState(o,o.state,null),uo(t,r,o,i),co(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var s=t.memoizedProps,l=ms(n,s);o.props=l;var c=o.context,u=n.contextType;a=Dr,"object"===typeof u&&null!==u&&(a=Ci(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s||c!==a)&&gs(t,o,r,a),to=!1;var h=t.memoizedState;o.state=h,uo(t,r,o,i),co(),c=t.memoizedState,s||h!==c||to?("function"===typeof d&&(hs(t,n,d,r),c=t.memoizedState),(l=to||ps(t,n,l,r,h,c,a))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=a,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ro(e,t),u=ms(n,a=t.memoizedProps),o.props=u,d=t.pendingProps,h=o.context,c=n.contextType,l=Dr,"object"===typeof c&&null!==c&&(l=Ci(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(a!==d||h!==l)&&gs(t,o,r,l),to=!1,h=t.memoizedState,o.state=h,uo(t,r,o,i),co();var f=t.memoizedState;a!==d||h!==f||to||null!==e&&null!==e.dependencies&&Si(e.dependencies)?("function"===typeof s&&(hs(t,n,s,r),f=t.memoizedState),(u=to||ps(t,n,u,r,h,f,l)||null!==e&&null!==e.dependencies&&Si(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=l,r=u):("function"!==typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Ds(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,i),t.child=ns(t,null,n,i)):Is(e,t,n,i),t.memoizedState=o.state,e=t.child):e=Ys(e,t,i),e}function Fs(e,t,n,r){return fi(),t.flags|=256,Is(e,t,n,r),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Us(e){return{baseLanes:e,cachePool:Hi()}}function Vs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=mc),e}function $s(e,t,n){var r,i=t.pendingProps,o=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(oi){if(o?as(t):ls(),oi){var l,c=ii;if(l=c){e:{for(l=c,c=si;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=yd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Qr?{id:Xr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(l=Lr(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ri=t,ii=null,l=!0):l=!1}l||ci(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return md(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=i.children,i=i.fallback,o?(ls(),c=Hs({mode:"hidden",children:c},o=t.mode),i=Vr(i,o,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,(o=t.child).memoizedState=Us(n),o.childLanes=Vs(e,r,n),t.memoizedState=Ms,i):(as(t),Bs(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(as(t),t.flags&=-257,t=qs(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),o=i.fallback,c=t.mode,i=Hs({mode:"visible",children:i.children},c),(o=Vr(o,c,n,null)).flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ns(t,e.child,null,n),(i=t.child).memoizedState=Us(n),i.childLanes=Vs(e,r,n),t.memoizedState=Ms,t=o);else if(as(t),md(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(a(419))).stack="",i.digest=r,gi({value:i,source:null,stack:null}),t=qs(e,t,n)}else if(Ts||Ei(e,t,n,!1),r=0!==(n&e.childLanes),Ts||r){if(null!==(r=rc)&&(0!==(i=0!==((i=0!==(42&(i=n&-n))?1:Ie(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,Pr(e,i),Lc(r,e,i),Cs;"$?"===c.data||Gc(),t=qs(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ii=yd(c.nextSibling),ri=t,oi=!0,ai=null,si=!1,null!==e&&(Kr[Yr++]=Xr,Kr[Yr++]=Jr,Kr[Yr++]=Qr,Xr=e.id,Jr=e.overflow,Qr=t),(t=Bs(t,i.children)).flags|=4096);return t}return o?(ls(),o=i.fallback,c=t.mode,u=(l=e.child).sibling,(i=Fr(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?o=Fr(u,o):(o=Vr(o,c,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,null===(c=e.child.memoizedState)?c=Us(n):(null!==(l=c.cachePool)?(u=Ni._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Hi(),c={baseLanes:c.baseLanes|n,cachePool:l}),o.memoizedState=c,o.childLanes=Vs(e,r,n),t.memoizedState=Ms,i):(as(t),e=(n=e.child).sibling,(n=Fr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Bs(e,t){return(t=Hs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Hs(e,t){return(e=Lr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function qs(e,t,n){return ns(t,e.child,null,n),(e=Bs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ws(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wi(e.return,t,n)}function Gs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ks(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Is(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ws(e,n,t);else if(19===e.tag)Ws(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(V(us,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ds(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gs(t,!0,n,null,o);break;case"together":Gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ys(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),fc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Ei(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Fr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Qs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Si(e))}function Xs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ts=!0;else{if(!Qs(e,n)&&0===(128&t.flags))return Ts=!1,function(e,t,n){switch(t.tag){case 3:W(t,t.stateNode.containerInfo),bi(0,Ni,e.memoizedState.cache),fi();break;case 27:case 5:K(t);break;case 4:W(t,t.stateNode.containerInfo);break;case 10:bi(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(as(t),t.flags|=128,null):0!==(n&t.child.childLanes)?$s(e,t,n):(as(t),null!==(e=Ys(e,t,n))?e.sibling:null);as(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Ei(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return Ks(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,Ns(e,t,n);case 24:bi(0,Ni,e.memoizedState.cache)}return Ys(e,t,n)}(e,t,n);Ts=0!==(131072&e.flags)}else Ts=!1,oi&&0!==(1048576&t.flags)&&ei(t,Gr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===_){t.tag=11,t=As(null,t,r,e,n);break e}if(i===k){t.tag=14,t=Rs(null,t,r,e,n);break e}}throw t=N(r)||r,Error(a(306,t,""))}zr(r)?(e=ms(r,e),t.tag=1,t=zs(null,t,r,e,n)):(t.tag=0,t=js(null,t,r,e,n))}return t;case 0:return js(e,t,t.type,t.pendingProps,n);case 1:return zs(e,t,r=t.type,i=ms(r,t.pendingProps),n);case 3:e:{if(W(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,ro(e,t),uo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,bi(0,Ni,r),r!==o.cache&&_i(t,[Ni],n,!0),co(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Fs(e,t,r,n);break e}if(r!==i){gi(i=Sr(Error(a(424)),t)),t=Fs(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ii=yd(e.firstChild),ri=t,oi=!0,ai=null,si=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fi(),r===i){t=Ys(e,t,n);break e}Is(e,t,r,n)}t=t.child}return t;case 26:return Ds(e,t),null===e?(n=Id(t.type,null,t.pendingProps,null))?t.memoizedState=n:oi||(n=t.type,e=t.pendingProps,(r=rd(H.current).createElement(n))[Ne]=t,r[Oe]=e,ed(r,n,e),qe(r),t.stateNode=r):t.memoizedState=Id(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),null===e&&oi&&(r=t.stateNode=xd(t.type,t.pendingProps,H.current),ri=t,si=!0,i=ii,fd(t.type)?(vd=i,ii=yd(r.firstChild)):ii=i),Is(e,t,t.pendingProps.children,n),Ds(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&oi&&((i=r=ii)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Me])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===o)return e}if(null===(e=yd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,si))?(t.stateNode=r,ri=t,ii=yd(r.firstChild),si=!1,i=!0):i=!1),i||ci(t)),K(t),i=t.type,o=t.pendingProps,s=null!==e?e.memoizedProps:null,r=o.children,ad(i,o)?r=null:null!==s&&ad(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=No(e,t,jo,null,null,n),Kd._currentValue=i),Ds(e,t),Is(e,t,r,n),t.child;case 6:return null===e&&oi&&((e=n=ii)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=yd(e.nextSibling)))return null}return e}(n,t.pendingProps,si))?(t.stateNode=n,ri=t,ii=null,e=!0):e=!1),e||ci(t)),null;case 13:return $s(e,t,n);case 4:return W(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):Is(e,t,r,n),t.child;case 11:return As(e,t,t.type,t.pendingProps,n);case 7:return Is(e,t,t.pendingProps,n),t.child;case 8:case 12:return Is(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,bi(0,t.type,r.value),Is(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ki(t),r=r(i=Ci(i)),t.flags|=1,Is(e,t,r,n),t.child;case 14:return Rs(e,t,t.type,t.pendingProps,n);case 15:return Ps(e,t,t.type,t.pendingProps,n);case 19:return Ks(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Hs(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Fr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ns(e,t,n);case 24:return ki(t),r=Ci(Ni),null===e?(null===(i=$i())&&(i=rc,o=Oi(),i.pooledCache=o,o.refCount++,null!==o&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},no(t),bi(0,Ni,i)):(0!==(e.lanes&n)&&(ro(e,t),uo(t,null,null,n),co()),i=e.memoizedState,o=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),bi(0,Ni,r)):(r=o.cache,bi(0,Ni,r),r!==i.cache&&_i(t,[Ni],n,!0))),Is(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Vd(t)){if(null!==(t=is.current)&&((4194048&oc)===oc?null!==os:(62914560&oc)!==oc&&0===(536870912&oc)||t!==os))throw Ji=Ki,Wi;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ee():536870912,e.lanes|=t,yc|=t)}function tl(e,t){if(!oi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xi(Ni),G(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(hi(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,pi())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Js(t),nl(t),t.flags&=-16777217),null;case 27:Y(t),n=H.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}e=$.current,hi(t)?ui(t):(e=xd(i,r,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(Y(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}if(e=$.current,hi(t))ui(t);else{switch(i=rd(H.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Ne]=t,e[Oe]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=H.current,hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ri))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Ne]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Qu(e.nodeValue,n)))||ci(t)}else(e=rd(e).createTextNode(r))[Ne]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=hi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[Ne]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),i=!1}else i=pi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var o=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return G(),null===e&&Uu(t.stateNode.containerInfo),nl(t),null;case 10:return xi(t.type),nl(t),null;case 19:if(U(us),null===(i=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(o=i.rendering))if(r)tl(i,!1);else{if(0!==hc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=ds(e))){for(t.flags|=128,tl(i,!1),e=o.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Mr(n,e),n=n.sibling;return V(us,1&us.current|2),t.child}e=e.sibling}null!==i.tail&&te()>_c&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(o))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!o.alternate&&!oi)return nl(t),null}else 2*te()-i.renderingStartTime>_c&&536870912!==n&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=i.last)?e.sibling=o:t.child=o,i.last=o)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,e=us.current,V(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),vo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&U(Vi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xi(Ni),nl(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function il(e,t){switch(ni(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xi(Ni),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return U(us),null;case 4:return G(),null;case 10:return xi(t.type),null;case 22:case 23:return cs(t),vo(),null!==e&&U(Vi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xi(Ni),null;default:return null}}function ol(e,t){switch(ni(t),t.tag){case 3:xi(Ni),G();break;case 26:case 27:case 5:Y(t);break;case 4:G();break;case 13:cs(t);break;case 19:U(us);break;case 10:xi(t.type);break;case 22:case 23:cs(t),vo(),null!==e&&U(Vi);break;case 24:xi(Ni)}}function al(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var o=n.create,a=n.inst;r=o(),a.destroy=r}n=n.next}while(n!==i)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var o=i.next;r=o;do{if((r.tag&e)===e){var a=r.inst,s=a.destroy;if(void 0!==s){a.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){uu(i,l,u)}}}r=r.next}while(r!==o)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{fo(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=ms(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){uu(e,t,i)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){uu(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){uu(e,t,o)}else n.current=null}function hl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){uu(e,e.return,i)}}function fl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,s=null,l=null,c=null,u=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&null!=h)switch(p){case"checked":case"value":break;case"defaultValue":c=h;default:r.hasOwnProperty(p)||Ju(e,t,p,null,r,h)}}for(var f in r){var p=r[f];if(h=n[f],r.hasOwnProperty(f)&&(null!=p||null!=h))switch(f){case"type":o=p;break;case"name":i=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(a(137,t));break;default:p!==h&&Ju(e,t,f,p,r,h)}}return void mt(e,s,l,c,u,d,o,i);case"select":for(o in p=s=l=f=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":p=c;default:r.hasOwnProperty(o)||Ju(e,t,o,null,r,c)}for(i in r)if(o=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=o||null!=c))switch(i){case"value":f=o;break;case"defaultValue":l=o;break;case"multiple":s=o;default:o!==c&&Ju(e,t,i,o,r,c)}return t=l,n=s,r=p,void(null!=f?bt(e,!!n,f,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(l in p=f=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Ju(e,t,l,null,r,i)}for(s in r)if(i=r[s],o=n[s],r.hasOwnProperty(s)&&(null!=i||null!=o))switch(s){case"value":f=i;break;case"defaultValue":p=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(a(91));break;default:i!==o&&Ju(e,t,s,i,r,o)}return void xt(e,f,p);case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g))if("selected"===g)e.selected=!1;else Ju(e,t,g,null,r,f);for(c in r)if(f=r[c],p=n[c],r.hasOwnProperty(c)&&f!==p&&(null!=f||null!=p))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Ju(e,t,c,f,r,p);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in n)f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m)&&Ju(e,t,m,null,r,f);for(u in r)if(f=r[u],p=n[u],r.hasOwnProperty(u)&&f!==p&&(null!=f||null!=p))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(a(137,t));break;default:Ju(e,t,u,f,r,p)}return;default:if(Ct(t)){for(var y in n)f=n[y],n.hasOwnProperty(y)&&void 0!==f&&!r.hasOwnProperty(y)&&Zu(e,t,y,void 0,r,f);for(d in r)f=r[d],p=n[d],!r.hasOwnProperty(d)||f===p||void 0===f&&void 0===p||Zu(e,t,d,f,r,p);return}}for(var v in n)f=n[v],n.hasOwnProperty(v)&&null!=f&&!r.hasOwnProperty(v)&&Ju(e,t,v,null,r,f);for(h in r)f=r[h],p=n[h],!r.hasOwnProperty(h)||f===p||null==f&&null==p||Ju(e,t,h,f,r,p)}(r,e.type,n,t),r[Oe]=t}catch(i){uu(e,e.return,i)}}function pl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&fd(e.type)||4===e.tag}function gl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&fd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ml(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xu));else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(ml(e,t,n),e=e.sibling;null!==e;)ml(e,t,n),e=e.sibling}function yl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(yl(e,t,n),e=e.sibling;null!==e;)yl(e,t,n),e=e.sibling}function vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ed(t,r,n),t[Ne]=e,t[Oe]=n}catch(o){uu(e,e.return,o)}}var bl=!1,xl=!1,wl=!1,_l="function"===typeof WeakSet?WeakSet:Set,El=null;function Sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:zl(e,n),4&r&&al(5,n);break;case 1:if(zl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){uu(n,n.return,a)}else{var i=ms(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(zl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{fo(e,t)}catch(a){uu(n,n.return,a)}}break;case 27:null===t&&4&r&&vl(n);case 26:case 5:zl(e,n),null===t&&4&r&&hl(n),512&r&&ul(n,n.return);break;case 12:zl(e,n);break;case 13:zl(e,n),4&r&&Rl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=pu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bl)){t=null!==t&&null!==t.memoizedState||xl,i=bl;var o=xl;bl=r,(xl=t)&&!o?Ml(e,n,0!==(8772&n.subtreeFlags)):zl(e,n),bl=i,xl=o}break;case 30:break;default:zl(e,n)}}function kl(e){var t=e.alternate;null!==t&&(e.alternate=null,kl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ue(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cl=null,Tl=!1;function Il(e,t,n){for(n=n.child;null!==n;)Al(e,t,n),n=n.sibling}function Al(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(o){}switch(n.tag){case 26:xl||dl(n,t),Il(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var r=Cl,i=Tl;fd(n.type)&&(Cl=n.stateNode,Tl=!1),Il(e,t,n),wd(n.stateNode),Cl=r,Tl=i;break;case 5:xl||dl(n,t);case 6:if(r=Cl,i=Tl,Cl=null,Il(e,t,n),Tl=i,null!==(Cl=r))if(Tl)try{(9===Cl.nodeType?Cl.body:"HTML"===Cl.nodeName?Cl.ownerDocument.body:Cl).removeChild(n.stateNode)}catch(a){uu(n,t,a)}else try{Cl.removeChild(n.stateNode)}catch(a){uu(n,t,a)}break;case 18:null!==Cl&&(Tl?(pd(9===(e=Cl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Th(e)):pd(Cl,n.stateNode));break;case 4:r=Cl,i=Tl,Cl=n.stateNode.containerInfo,Tl=!0,Il(e,t,n),Cl=r,Tl=i;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),Il(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),Il(e,t,n);break;case 21:Il(e,t,n);break;case 22:xl=(r=xl)||null!==n.memoizedState,Il(e,t,n),xl=r;break;default:Il(e,t,n)}}function Rl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Th(e)}catch(n){uu(t,t.return,n)}}function Pl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new _l),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new _l),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){var r=gu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Nl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(fd(l.type)){Cl=l.stateNode,Tl=!1;break e}break;case 5:Cl=l.stateNode,Tl=!1;break e;case 3:case 4:Cl=l.stateNode.containerInfo,Tl=!0;break e}l=l.return}if(null===Cl)throw Error(a(160));Al(o,s,i),Cl=null,Tl=!1,null!==(o=i.alternate)&&(o.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Dl(t,e),t=t.sibling}var Ol=null;function Dl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nl(t,e),jl(e),4&r&&(sl(3,e,e.return),al(3,e),sl(5,e,e.return));break;case 1:Nl(t,e),jl(e),512&r&&(xl||null===n||dl(n,n.return)),64&r&&bl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Ol;if(Nl(t,e),jl(e),512&r&&(xl||null===n||dl(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(o=i.getElementsByTagName("title")[0])||o[Me]||o[Ne]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=i.createElement(r),i.head.insertBefore(o,i.querySelector("head > title"))),ed(o,r,n),o[Ne]=e,qe(o),r=o;break e;case"link":var s=Md("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((o=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(o=i.createElement(r),r,n),i.head.appendChild(o);break;case"meta":if(s=Md("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((o=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(o=i.createElement(r),r,n),i.head.appendChild(o);break;default:throw Error(a(468,r))}o[Ne]=e,qe(o),r=o}e.stateNode=r}else Ud(i,e.type,e.stateNode);else e.stateNode=Dd(i,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?Ud(i,e.type,e.stateNode):Dd(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&fl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Nl(t,e),jl(e),512&r&&(xl||null===n||dl(n,n.return)),null!==n&&4&r&&fl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Nl(t,e),jl(e),512&r&&(xl||null===n||dl(n,n.return)),32&e.flags){i=e.stateNode;try{_t(i,"")}catch(p){uu(e,e.return,p)}}4&r&&null!=e.stateNode&&fl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(wl=!0);break;case 6:if(Nl(t,e),jl(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(p){uu(e,e.return,p)}}break;case 3:if(Fd=null,i=Ol,Ol=Sd(t.containerInfo),Nl(t,e),Ol=i,jl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Th(t.containerInfo)}catch(p){uu(e,e.return,p)}wl&&(wl=!1,Ll(e));break;case 4:r=Ol,Ol=Sd(e.stateNode.containerInfo),Nl(t,e),jl(e),Ol=r;break;case 12:default:Nl(t,e),jl(e);break;case 13:Nl(t,e),jl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Pl(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=bl,d=xl;if(bl=u||i,xl=d||c,Nl(t,e),xl=d,bl=u,jl(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||bl||xl||Fl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(o=c.stateNode,i)"function"===typeof(s=o.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var h=c.memoizedProps.style,f=void 0!==h&&null!==h&&h.hasOwnProperty("display")?h.display:null;l.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(p){uu(c,c.return,p)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(p){uu(c,c.return,p)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Pl(e,n))));break;case 19:Nl(t,e),jl(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Pl(e,r)));case 30:case 21:}}function jl(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(pl(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var i=n.stateNode;yl(e,gl(e),i);break;case 5:var o=n.stateNode;32&n.flags&&(_t(o,""),n.flags&=-33),yl(e,gl(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;ml(e,gl(e),s);break;default:throw Error(a(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ll(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ll(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function zl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Sl(e,t.alternate,t),t=t.sibling}function Fl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Fl(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Fl(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Fl(t);break;case 22:null===t.memoizedState&&Fl(t);break;default:Fl(t)}e=e.sibling}}function Ml(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,o=t,a=o.flags;switch(o.tag){case 0:case 11:case 15:Ml(i,o,n),al(4,o);break;case 1:if(Ml(i,o,n),"function"===typeof(i=(r=o).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(i=(r=o).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)ho(l[i],s)}catch(c){uu(r,r.return,c)}}n&&64&a&&ll(o),ul(o,o.return);break;case 27:vl(o);case 26:case 5:Ml(i,o,n),n&&null===r&&4&a&&hl(o),ul(o,o.return);break;case 12:Ml(i,o,n);break;case 13:Ml(i,o,n),n&&4&a&&Rl(i,o);break;case 22:null===o.memoizedState&&Ml(i,o,n),ul(o,o.return);break;case 30:break;default:Ml(i,o,n)}t=t.sibling}}function Ul(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Di(n))}function Vl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Di(e))}function $l(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Bl(e,t,n,r),t=t.sibling}function Bl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:$l(e,t,n,r),2048&i&&al(9,t);break;case 1:case 13:default:$l(e,t,n,r);break;case 3:$l(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Di(e)));break;case 12:if(2048&i){$l(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,a=o.id,s=o.onPostCommit;"function"===typeof s&&s(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else $l(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,a=t.alternate,null!==t.memoizedState?2&o._visibility?$l(e,t,n,r):ql(e,t):2&o._visibility?$l(e,t,n,r):(o._visibility|=2,Hl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&Ul(a,t);break;case 24:$l(e,t,n,r),2048&i&&Vl(t.alternate,t)}}function Hl(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,a=t,s=n,l=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:Hl(o,a,s,l,i),al(8,a);break;case 23:break;case 22:var u=a.stateNode;null!==a.memoizedState?2&u._visibility?Hl(o,a,s,l,i):ql(o,a):(u._visibility|=2,Hl(o,a,s,l,i)),i&&2048&c&&Ul(a.alternate,a);break;case 24:Hl(o,a,s,l,i),i&&2048&c&&Vl(a.alternate,a);break;default:Hl(o,a,s,l,i)}t=t.sibling}}function ql(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:ql(n,r),2048&i&&Ul(r.alternate,r);break;case 24:ql(n,r),2048&i&&Vl(r.alternate,r);break;default:ql(n,r)}t=t.sibling}}var Wl=8192;function Gl(e){if(e.subtreeFlags&Wl)for(e=e.child;null!==e;)Kl(e),e=e.sibling}function Kl(e){switch(e.tag){case 26:Gl(e),e.flags&Wl&&null!==e.memoizedState&&function(e,t,n){if(null===$d)throw Error(a(475));var r=$d;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=Ad(n.href),o=e.querySelector(Rd(i));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Hd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,void qe(o);o=e.ownerDocument||e,n=Pd(n),(i=_d.get(i))&&Ld(n,i),qe(o=o.createElement("link"));var s=o;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ed(o,"link",n),t.instance=o}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Hd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ol,e.memoizedState,e.memoizedProps);break;case 5:default:Gl(e);break;case 3:case 4:var t=Ol;Ol=Sd(e.stateNode.containerInfo),Gl(e),Ol=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Wl,Wl=16777216,Gl(e),Wl=t):Gl(e))}}function Yl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ql(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];El=r,Zl(r,e)}Yl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xl(e),e=e.sibling}function Xl(e){switch(e.tag){case 0:case 11:case 15:Ql(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Ql(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):Ql(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];El=r,Zl(r,e)}Yl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==El;){var n=El;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Di(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,El=r;else e:for(n=e;null!==El;){var i=(r=El).sibling,o=r.return;if(kl(r),r===n){El=null;break e}if(null!==i){i.return=o,El=i;break e}El=o}}}var ec={getCacheForType:function(e){var t=Ci(Ni),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ic=null,oc=0,ac=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,hc=0,fc=0,pc=0,gc=0,mc=0,yc=0,vc=null,bc=null,xc=!1,wc=0,_c=1/0,Ec=null,Sc=null,kc=0,Cc=null,Tc=null,Ic=0,Ac=0,Rc=null,Pc=null,Nc=0,Oc=null;function Dc(){if(0!==(2&nc)&&0!==oc)return oc&-oc;if(null!==D.T){return 0!==zi?zi:Au()}return Re()}function jc(){0===mc&&(mc=0===(536870912&oc)||oi?_e():536870912);var e=is.current;return null!==e&&(e.flags|=32),mc}function Lc(e,t,n){(e!==rc||2!==ac&&9!==ac)&&null===e.cancelPendingCommit||(Bc(e,0),Uc(e,oc,mc,!1)),ke(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(pc|=n),4===hc&&Uc(e,oc,mc,!1)),_u(e))}function zc(e,t,n){if(0!==(6&nc))throw Error(a(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),i=r?function(e,t){var n=nc;nc|=2;var r=qc(),i=Wc();rc!==e||oc!==t?(Ec=null,_c=te()+500,Bc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==ac&&null!==ic){t=ic;var o=sc;t:switch(ac){case 1:ac=0,sc=null,Zc(e,t,o,1);break;case 2:case 9:if(Yi(o)){ac=0,sc=null,Jc(t);break}t=function(){2!==ac&&9!==ac||rc!==e||(ac=7),_u(e)},o.then(t,t);break e;case 3:ac=7;break e;case 4:ac=5;break e;case 7:Yi(o)?(ac=0,sc=null,Jc(t)):(ac=0,sc=null,Zc(e,t,o,7));break;case 5:var s=null;switch(ic.tag){case 26:s=ic.memoizedState;case 5:case 27:var l=ic;if(!s||Vd(s)){ac=0,sc=null;var c=l.sibling;if(null!==c)ic=c;else{var u=l.return;null!==u?(ic=u,eu(u)):ic=null}break t}}ac=0,sc=null,Zc(e,t,o,5);break;case 6:ac=0,sc=null,Zc(e,t,o,6);break;case 8:$c(),hc=6;break e;default:throw Error(a(462))}}Qc();break}catch(d){Hc(e,d)}return vi=yi=null,D.H=r,D.A=i,nc=n,null!==ic?0:(rc=null,oc=0,Ir(),hc)}(e,t):Kc(e,t,!0),o=r;;){if(0===i){cc&&!r&&Uc(e,t,0,!1);break}if(n=e.current.alternate,!o||Mc(n)){if(2===i){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=vc;var c=l.current.memoizedState.isDehydrated;if(c&&(Bc(l,s).flags|=256),2!==(s=Kc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=o,pc|=o,i=4;break e}o=bc,bc=i,null!==o&&(null===bc?bc=o:bc.push.apply(bc,o))}i=s}if(o=!1,2!==i)continue}}if(1===i){Bc(e,0),Uc(e,t,0,!0);break}e:{switch(r=e,o=i){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:Uc(r,t,mc,!lc);break e;case 2:bc=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(i=wc+300-te())){if(Uc(r,t,mc,!lc),0!==be(r,0,!0))break e;r.timeoutHandle=ld(Fc.bind(null,r,n,bc,Ec,xc,t,mc,pc,yc,lc,o,2,-0,0),i)}else Fc(r,n,bc,Ec,xc,t,mc,pc,yc,lc,o,0,-0,0)}break}i=Kc(e,t,!1),o=!1}_u(e)}function Fc(e,t,n,r,i,o,s,l,c,u,d,h,f,p){if(e.timeoutHandle=-1,(8192&(h=t.subtreeFlags)||16785408===(16785408&h))&&($d={stylesheets:null,count:0,unsuspend:Bd},Kl(t),null!==(h=function(){if(null===$d)throw Error(a(475));var e=$d;return e.stylesheets&&0===e.count&&Wd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Wd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=h(nu.bind(null,e,t,o,n,r,i,s,l,c,d,1,f,p)),void Uc(e,o,s,!u);nu(e,t,o,n,r,i,s,l,c)}function Mc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Yn(o(),i))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Uc(e,t,n,r){t&=~gc,t&=~pc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var o=31-fe(i),a=1<<o;r[o]=-1,i&=~a}0!==n&&Ce(e,n,t)}function Vc(){return 0!==(6&nc)||(Eu(0,!1),!1)}function $c(){if(null!==ic){if(0===ac)var e=ic.return;else vi=yi=null,Fo(e=ic),Ya=null,Qa=0,e=ic;for(;null!==e;)ol(e.alternate,e),e=e.return;ic=null}}function Bc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),$c(),rc=e,ic=n=Fr(e.current,null),oc=t,ac=0,sc=null,lc=!1,cc=xe(e,t),uc=!1,yc=mc=gc=pc=fc=hc=0,bc=vc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-fe(r),o=1<<i;t|=e[i],r&=~o}return dc=t,Ir(),n}function Hc(e,t){xo=null,D.H=qa,t===qi||t===Gi?(t=Zi(),ac=3):t===Wi?(t=Zi(),ac=4):ac=t===Cs?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===ic&&(hc=1,ws(e,Sr(t,e.current)))}function qc(){var e=D.H;return D.H=qa,null===e?qa:e}function Wc(){var e=D.A;return D.A=ec,e}function Gc(){hc=4,lc||(4194048&oc)!==oc&&null!==is.current||(cc=!0),0===(134217727&fc)&&0===(134217727&pc)||null===rc||Uc(rc,oc,mc,!1)}function Kc(e,t,n){var r=nc;nc|=2;var i=qc(),o=Wc();rc===e&&oc===t||(Ec=null,Bc(e,t)),t=!1;var a=hc;e:for(;;)try{if(0!==ac&&null!==ic){var s=ic,l=sc;switch(ac){case 8:$c(),a=6;break e;case 3:case 2:case 9:case 6:null===is.current&&(t=!0);var c=ac;if(ac=0,sc=null,Zc(e,s,l,c),n&&cc){a=0;break e}break;default:c=ac,ac=0,sc=null,Zc(e,s,l,c)}}Yc(),a=hc;break}catch(u){Hc(e,u)}return t&&e.shellSuspendCounter++,vi=yi=null,nc=r,D.H=i,D.A=o,null===ic&&(rc=null,oc=0,Ir()),a}function Yc(){for(;null!==ic;)Xc(ic)}function Qc(){for(;null!==ic&&!Z();)Xc(ic)}function Xc(e){var t=Xs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ls(n,t,t.pendingProps,t.type,void 0,oc);break;case 11:t=Ls(n,t,t.pendingProps,t.type.render,t.ref,oc);break;case 5:Fo(t);default:ol(n,t),t=Xs(n,t=ic=Mr(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Zc(e,t,n,r){vi=yi=null,Fo(t),Ya=null,Qa=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Ei(t,n,i,!0),null!==(n=is.current)){switch(n.tag){case 13:return null===os?Gc():null===n.alternate&&0===hc&&(hc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ki?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,i)),!1;case 22:return n.flags|=65536,r===Ki?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,i)),!1}throw Error(a(435,n.tag))}return du(e,r,i),Gc(),!1}if(oi)return null!==(t=is.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==li&&gi(Sr(e=Error(a(422),{cause:r}),n))):(r!==li&&gi(Sr(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Sr(r,n),so(e,i=Es(e.stateNode,r,i)),4!==hc&&(hc=2)),!1;var o=Error(a(520),{cause:r});if(o=Sr(o,n),null===vc?vc=[o]:vc.push(o),4!==hc&&(hc=2),null===t)return!0;r=Sr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,so(n,e=Es(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Sc||!Sc.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,ks(i=Ss(i),e,n,r),so(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,oc))return hc=1,ws(e,Sr(n,e.current)),void(ic=null)}catch(o){if(null!==i)throw ic=i,o;return hc=1,ws(e,Sr(n,e.current)),void(ic=null)}32768&t.flags?(oi||1===r?e=!0:cc||0!==(536870912&oc)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=is.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===hc&&(hc=5)}function tu(e,t){do{var n=il(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);hc=6,ic=null}function nu(e,t,n,r,i,o,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==kc);if(0!==(6&nc))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,i,o){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-fe(n),d=1<<u;s[u]=0,l[u]=-1;var h=c[u];if(null!==h)for(c[u]=null,u=0;u<h.length;u++){var f=h[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Ce(e,r,0),0!==o&&0===i&&0!==e.tag&&(e.suspendedLanes|=o&~(a&~t))}(e,n,o|=Tr,s,l,c),e===rc&&(ic=rc=null,oc=0),Tc=t,Cc=e,Ic=n,Ac=o,Rc=i,Pc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(oe,function(){return lu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=D.T,D.T=null,i=j.p,j.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=nh,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(m){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||0!==i&&3!==h.nodeType||(l=s+i),h!==o||0!==r&&3!==h.nodeType||(c=s+r),3===h.nodeType&&(s+=h.nodeValue.length),null!==(p=h.firstChild);)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(c=s),null!==(p=h.nextSibling))break;f=(h=f).parentNode}h=p}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nh=!1,El=t;null!==El;)if(e=(t=El).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,El=e;else for(;null!==El;){switch(o=(t=El).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var g=ms(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(g,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){uu(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))gd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,El=e;break}El=t.return}}(e,t)}finally{nc=s,j.p=i,D.T=r}}kc=1,ru(),iu(),ou()}}function ru(){if(1===kc){kc=0;var e=Cc,t=Tc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=D.T,D.T=null;var r=j.p;j.p=2;var i=nc;nc|=4;try{Dl(t,e);var o=nd,a=er(e.containerInfo),s=o.focusedElem,l=o.selectionRange;if(a!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var f=h.getSelection(),p=s.textContent.length,g=Math.min(l.start,p),m=void 0===l.end?g:Math.min(l.end,p);!f.extend&&g>m&&(a=m,m=g,g=a);var y=Jn(s,g),v=Jn(s,m);if(y&&v&&(1!==f.rangeCount||f.anchorNode!==y.node||f.anchorOffset!==y.offset||f.focusNode!==v.node||f.focusOffset!==v.offset)){var b=d.createRange();b.setStart(y.node,y.offset),f.removeAllRanges(),g>m?(f.addRange(b),f.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),f.addRange(b))}}}}for(d=[],f=s;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nh=!!td,nd=td=null}finally{nc=i,j.p=r,D.T=n}}e.current=t,kc=2}}function iu(){if(2===kc){kc=0;var e=Cc,t=Tc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=D.T,D.T=null;var r=j.p;j.p=2;var i=nc;nc|=4;try{Sl(e,t.alternate,t)}finally{nc=i,j.p=r,D.T=n}}kc=3}}function ou(){if(4===kc||3===kc){kc=0,ee();var e=Cc,t=Tc,n=Ic,r=Pc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?kc=5:(kc=0,Tc=Cc=null,au(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Sc=null),Ae(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=D.T,i=j.p,j.p=2,D.T=null;try{for(var o=e.onRecoverableError,a=0;a<r.length;a++){var s=r[a];o(s.value,{componentStack:s.stack})}}finally{D.T=t,j.p=i}}0!==(3&Ic)&&su(),_u(e),i=e.pendingLanes,0!==(4194090&n)&&0!==(42&i)?e===Oc?Nc++:(Nc=0,Oc=e):Nc=0,Eu(0,!1)}}function au(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Di(t)))}function su(e){return ru(),iu(),ou(),lu()}function lu(){if(5!==kc)return!1;var e=Cc,t=Ac;Ac=0;var n=Ae(Ic),r=D.T,i=j.p;try{j.p=32>n?32:n,D.T=null,n=Rc,Rc=null;var o=Cc,s=Ic;if(kc=0,Tc=Cc=null,Ic=0,0!==(6&nc))throw Error(a(331));var l=nc;if(nc|=4,Xl(o.current),Bl(o,o.current,s,n),nc=l,Eu(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,o)}catch(c){}return!0}finally{j.p=i,D.T=r,au(e,t)}}function cu(e,t,n){t=Sr(n,t),null!==(e=oo(e,t=Es(e.stateNode,t,2),2))&&(ke(e,2),_u(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Sc||!Sc.has(r))){e=Sr(n,e),null!==(r=oo(t,n=Ss(2),2))&&(ks(n,r,t,e),ke(r,2),_u(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(uc=!0,i.add(n),e=hu.bind(null,e,t,n),t.then(e,e))}function hu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(oc&n)===n&&(4===hc||3===hc&&(62914560&oc)===oc&&300>te()-wc?0===(2&nc)&&Bc(e,0):gc|=n,yc===oc&&(yc=0)),_u(e)}function fu(e,t){0===t&&(t=Ee()),null!==(e=Pr(e,t))&&(ke(e,t),_u(e))}function pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),fu(e,n)}function gu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),fu(e,n)}var mu=null,yu=null,vu=!1,bu=!1,xu=!1,wu=0;function _u(e){e!==yu&&null===e.next&&(null===yu?mu=yu=e:yu=yu.next=e),bu=!0,vu||(vu=!0,dd(function(){0!==(6&nc)?X(re,Su):ku()}))}function Eu(e,t){if(!xu&&bu){xu=!0;do{for(var n=!1,r=mu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var o=0;else{var a=r.suspendedLanes,s=r.pingedLanes;o=(1<<31-fe(42|e)+1)-1,o=201326741&(o&=i&~(a&~s))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Iu(r,o))}else o=oc,0===(3&(o=be(r,r===rc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,o)||(n=!0,Iu(r,o));r=r.next}}while(n);xu=!1}}function Su(){ku()}function ku(){bu=vu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=mu;null!==r;){var i=r.next,o=Cu(r,t);0===o?(r.next=null,null===n?mu=i:n.next=i,null===i&&(yu=n)):(n=r,(0!==e||0!==(3&o))&&(bu=!0)),r=i}Eu(e,!1)}function Cu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var a=31-fe(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=we(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}if(n=oc,n=be(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ac||9===ac)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),Ae(n)){case 2:case 8:n=ie;break;case 32:default:n=oe;break;case 268435456:n=se}return r=Tu.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function Tu(e,t){if(0!==kc&&5!==kc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=oc;return 0===(r=be(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(zc(e,r,t),Cu(e,te()),null!=e.callbackNode&&e.callbackNode===n?Tu.bind(null,e):null)}function Iu(e,t){if(su())return null;zc(e,t,!0)}function Au(){return 0===wu&&(wu=_e()),wu}function Ru(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:At(""+e)}function Pu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Nu=0;Nu<wr.length;Nu++){var Ou=wr[Nu];_r(Ou.toLowerCase(),"on"+(Ou[0].toUpperCase()+Ou.slice(1)))}_r(fr,"onAnimationEnd"),_r(pr,"onAnimationIteration"),_r(gr,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(mr,"onTransitionRun"),_r(yr,"onTransitionStart"),_r(vr,"onTransitionCancel"),_r(br,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ju=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du));function Lu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;o=s,i.currentTarget=c;try{o(i)}catch(u){ys(u)}i.currentTarget=null,o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;o=s,i.currentTarget=c;try{o(i)}catch(u){ys(u)}i.currentTarget=null,o=l}}}}function zu(e,t){var n=t[je];void 0===n&&(n=t[je]=new Set);var r=e+"__bubble";n.has(r)||(Vu(t,e,2,!1),n.add(r))}function Fu(e,t,n){var r=0;t&&(r|=4),Vu(n,e,r,t)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Uu(e){if(!e[Mu]){e[Mu]=!0,We.forEach(function(t){"selectionchange"!==t&&(ju.has(t)||Fu(t,!1,e),Fu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Mu]||(t[Mu]=!0,Fu("selectionchange",!1,t))}}function Vu(e,t,n,r){switch(ch(t)){case 2:var i=rh;break;case 8:i=ih;break;default:i=oh}n=i.bind(null,t,n,e),i=void 0,!Mt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $u(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i)break;if(4===a)for(a=r.return;null!==a;){var c=a.tag;if((3===c||4===c)&&a.stateNode.containerInfo===i)return;a=a.return}for(;null!==s;){if(null===(a=Ve(s)))return;if(5===(c=a.tag)||6===c||26===c||27===c){r=o=a;continue e}s=s.parentNode}}r=r.return}Lt(function(){var r=o,i=Pt(n),a=[];e:{var s=xr.get(e);if(void 0!==s){var c=Zt,u=e;switch(e){case"keypress":if(0===qt(n))break e;case"keydown":case"keyup":c=gn;break;case"focusin":u="focus",c=an;break;case"focusout":u="blur",c=an;break;case"beforeblur":case"afterblur":c=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=on;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=yn;break;case fr:case pr:case gr:c=sn;break;case br:c=vn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=bn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=mn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),h=!d&&("scroll"===e||"scrollend"===e),f=d?null!==s?s+"Capture":null:s;d=[];for(var p,g=r;null!==g;){var m=g;if(p=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===p||null===f||null!=(m=zt(g,f))&&d.push(Bu(g,m,p)),h)break;g=g.return}0<d.length&&(s=new c(s,u,null,n,i),a.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Rt||!(u=n.relatedTarget||n.fromElement)||!Ve(u)&&!u[De])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ve(u):null)&&(h=l(u),d=u.tag,u!==h||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,m="onMouseLeave",f="onMouseEnter",g="mouse","pointerout"!==e&&"pointerover"!==e||(d=mn,m="onPointerLeave",f="onPointerEnter",g="pointer"),h=null==c?s:Be(c),p=null==u?s:Be(u),(s=new d(m,g+"leave",c,n,i)).target=h,s.relatedTarget=p,m=null,Ve(i)===r&&((d=new d(f,g+"enter",u,n,i)).target=p,d.relatedTarget=h,m=d),h=m,c&&u)e:{for(f=u,g=0,p=d=c;p;p=qu(p))g++;for(p=0,m=f;m;m=qu(m))p++;for(;0<g-p;)d=qu(d),g--;for(;0<p-g;)f=qu(f),p--;for(;g--;){if(d===f||null!==f&&d===f.alternate)break e;d=qu(d),f=qu(f)}d=null}else d=null;null!==c&&Wu(a,s,c,d,!1),null!==u&&null!==h&&Wu(a,h,u,d,!0)}if("select"===(c=(s=r?Be(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var y=Fn;else if(Nn(s))if(Mn)y=Kn;else{y=Wn;var v=qn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Ct(r.elementType)&&(y=Fn):y=Gn;switch(y&&(y=y(e,r))?On(a,y,n,i):(v&&v(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&vt(s,"number",s.value)),v=r?Be(r):window,e){case"focusin":(Nn(v)||"true"===v.contentEditable)&&(rr=v,ir=r,or=null);break;case"focusout":or=ir=rr=null;break;case"mousedown":ar=!0;break;case"contextmenu":case"mouseup":case"dragend":ar=!1,sr(a,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(a,n,i)}var b;if(_n)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Rn?In(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(kn&&"ko"!==n.locale&&(Rn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Rn&&(b=Ht()):($t="value"in(Vt=i)?Vt.value:Vt.textContent,Rn=!0)),0<(v=Hu(r,x)).length&&(x=new cn(x,e,null,n,i),a.push({event:x,listeners:v}),b?x.data=b:null!==(b=An(n))&&(x.data=b))),(b=Sn?function(e,t){switch(e){case"compositionend":return An(t);case"keypress":return 32!==t.which?null:(Tn=!0,Cn);case"textInput":return(e=t.data)===Cn&&Tn?null:e;default:return null}}(e,n):function(e,t){if(Rn)return"compositionend"===e||!_n&&In(e,t)?(e=Ht(),Bt=$t=Vt=null,Rn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Hu(r,"onBeforeInput")).length&&(v=new cn("onBeforeInput","beforeinput",null,n,i),a.push({event:v,listeners:x}),v.data=b)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var o=Ru((i[Oe]||null).action),a=r.submitter;a&&null!==(t=(t=a[Oe]||null)?Ru(t.formAction):a.getAttribute("formAction"))&&(o=t,a=null);var s=new Zt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=a?Pu(i,a):new FormData(i);Pa(n,{pending:!0,data:e,method:i.method,action:o},null,e)}}else"function"===typeof o&&(s.preventDefault(),e=a?Pu(i,a):new FormData(i),Pa(n,{pending:!0,data:e,method:i.method,action:o},o,e))},currentTarget:i}]})}}(a,e,r,n,i)}Lu(a,t)})}function Bu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===o||(null!=(i=zt(e,n))&&r.unshift(Bu(e,i,o)),null!=(i=zt(e,t))&&r.push(Bu(e,i,o))),3===e.tag)return r;e=e.return}return[]}function qu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Wu(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=zt(n,o))&&a.unshift(Bu(n,c,l)):i||null!=(c=zt(n,o))&&a.push(Bu(n,c,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Yu(e){return("string"===typeof e?e:""+e).replace(Gu,"\n").replace(Ku,"")}function Qu(e,t){return t=Yu(t),Yu(e)===t}function Xu(){}function Ju(e,t,n,r,i,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||_t(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&_t(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":kt(e,r,o);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=At(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&Ju(e,t,"name",i.name,i,null),Ju(e,t,"formEncType",i.formEncType,i,null),Ju(e,t,"formMethod",i.formMethod,i,null),Ju(e,t,"formTarget",i.formTarget,i,null)):(Ju(e,t,"encType",i.encType,i,null),Ju(e,t,"method",i.method,i,null),Ju(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=At(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"onScroll":null!=r&&zu("scroll",e);break;case"onScrollEnd":null!=r&&zu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=At(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":zu("beforetoggle",e),zu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Tt.get(n)||n,r)}}function Zu(e,t,n,r,i,o){switch(n){case"style":kt(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?_t(e,r):("number"===typeof r||"bigint"===typeof r)&&_t(e,""+r);break;case"onScroll":null!=r&&zu("scroll",e);break;case"onScrollEnd":null!=r&&zu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ge.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(o=null!=(o=e[Oe]||null)?o[n]:null)&&e.removeEventListener(t,o,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zu("error",e),zu("load",e);var r,i=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Ju(e,t,r,s,n,null)}}return o&&Ju(e,t,"srcSet",n.srcSet,n,null),void(i&&Ju(e,t,"src",n.src,n,null));case"input":zu("invalid",e);var l=r=s=o=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":o=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:Ju(e,t,i,d,n,null)}}return yt(e,r,l,c,u,s,o,!1),void dt(e);case"select":for(o in zu("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(o)&&null!=(l=n[o]))switch(o){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Ju(e,t,o,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?bt(e,!!i,t,!1):null!=n&&bt(e,!!i,n,!0));case"textarea":for(s in zu("invalid",e),r=o=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":o=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(a(91));break;default:Ju(e,t,s,l,n,null)}return wt(e,i,o,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Ju(e,t,c,i,n,null);return;case"dialog":zu("beforetoggle",e),zu("toggle",e),zu("cancel",e),zu("close",e);break;case"iframe":case"object":zu("load",e);break;case"video":case"audio":for(i=0;i<Du.length;i++)zu(Du[i],e);break;case"image":zu("error",e),zu("load",e);break;case"details":zu("toggle",e);break;case"embed":case"source":case"link":zu("error",e),zu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Ju(e,t,u,i,n,null)}return;default:if(Ct(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&Zu(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Ju(e,t,l,i,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function ad(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(hd)}:ld;function hd(e){setTimeout(function(){throw e})}function fd(e){return"head"===e}function pd(e,t){var n=t,r=0,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0<r&&8>r){n=r;var a=e.ownerDocument;if(1&n&&wd(a.documentElement),2&n&&wd(a.body),4&n)for(wd(n=a.head),a=n.firstChild;a;){var s=a.nextSibling,l=a.nodeName;a[Me]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=s}}if(0===i)return e.removeChild(o),void Th(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=o}while(n);Th(t)}function gd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gd(n),Ue(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function md(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function yd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var vd=null;function bd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ue(e)}var _d=new Map,Ed=new Set;function Sd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var kd=j.d;j.d={f:function(){var e=kd.f(),t=Vc();return e||t},r:function(e){var t=$e(e);null!==t&&5===t.tag&&"form"===t.type?Oa(t):kd.r(e)},D:function(e){kd.D(e),Td("dns-prefetch",e,null)},C:function(e,t){kd.C(e,t),Td("preconnect",e,t)},L:function(e,t,n){kd.L(e,t,n);var r=Cd;if(r&&e&&t){var i='link[rel="preload"][as="'+gt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+gt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+gt(n.imageSizes)+'"]')):i+='[href="'+gt(e)+'"]';var o=i;switch(t){case"style":o=Ad(e);break;case"script":o=Nd(e)}_d.has(o)||(e=h({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),_d.set(o,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Rd(o))||"script"===t&&r.querySelector(Od(o))||(ed(t=r.createElement("link"),"link",e),qe(t),r.head.appendChild(t)))}},m:function(e,t){kd.m(e,t);var n=Cd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+gt(r)+'"][href="'+gt(e)+'"]',o=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Nd(e)}if(!_d.has(o)&&(e=h({rel:"modulepreload",href:e},t),_d.set(o,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Od(o)))return}ed(r=n.createElement("link"),"link",e),qe(r),n.head.appendChild(r)}}},X:function(e,t){kd.X(e,t);var n=Cd;if(n&&e){var r=He(n).hoistableScripts,i=Nd(e),o=r.get(i);o||((o=n.querySelector(Od(i)))||(e=h({src:e,async:!0},t),(t=_d.get(i))&&zd(e,t),qe(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}},S:function(e,t,n){kd.S(e,t,n);var r=Cd;if(r&&e){var i=He(r).hoistableStyles,o=Ad(e);t=t||"default";var a=i.get(o);if(!a){var s={loading:0,preload:null};if(a=r.querySelector(Rd(o)))s.loading=5;else{e=h({rel:"stylesheet",href:e,"data-precedence":t},n),(n=_d.get(o))&&Ld(e,n);var l=a=r.createElement("link");qe(l),ed(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,jd(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:s},i.set(o,a)}}},M:function(e,t){kd.M(e,t);var n=Cd;if(n&&e){var r=He(n).hoistableScripts,i=Nd(e),o=r.get(i);o||((o=n.querySelector(Od(i)))||(e=h({src:e,async:!0,type:"module"},t),(t=_d.get(i))&&zd(e,t),qe(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}}};var Cd="undefined"===typeof document?null:document;function Td(e,t,n){var r=Cd;if(r&&"string"===typeof t&&t){var i=gt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),Ed.has(i)||(Ed.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(ed(t=r.createElement("link"),"link",e),qe(t),r.head.appendChild(t)))}}function Id(e,t,n,r){var i,o,s,l,c=(c=H.current)?Sd(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Ad(n.href),(r=(n=He(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Ad(n.href);var u=He(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Rd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),_d.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_d.set(e,n),u||(i=c,o=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+o+"]")?l.loading=1:(o=i.createElement("link"),l.preload=o,o.addEventListener("load",function(){return l.loading|=1}),o.addEventListener("error",function(){return l.loading|=2}),ed(o,"link",s),qe(o),i.head.appendChild(o))))),t&&null===r)throw Error(a(528,""));return d}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Nd(n),(r=(n=He(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Ad(e){return'href="'+gt(e)+'"'}function Rd(e){return'link[rel="stylesheet"]['+e+"]"}function Pd(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nd(e){return'[src="'+gt(e)+'"]'}function Od(e){return"script[async]"+e}function Dd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+gt(n.href)+'"]');if(r)return t.instance=r,qe(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return qe(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",i),jd(r,n.precedence,e),t.instance=r;case"stylesheet":i=Ad(n.href);var o=e.querySelector(Rd(i));if(o)return t.state.loading|=4,t.instance=o,qe(o),o;r=Pd(n),(i=_d.get(i))&&Ld(r,i),qe(o=(e.ownerDocument||e).createElement("link"));var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ed(o,"link",r),t.state.loading|=4,jd(o,n.precedence,e),t.instance=o;case"script":return o=Nd(n.src),(i=e.querySelector(Od(o)))?(t.instance=i,qe(i),i):(r=n,(i=_d.get(o))&&zd(r=h({},n),i),qe(i=(e=e.ownerDocument||e).createElement("script")),ed(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,jd(r,n.precedence,e));return t.instance}function jd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,o=i,a=0;a<r.length;a++){var s=r[a];if(s.dataset.precedence===t)o=s;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Ld(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function zd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Fd=null;function Md(e,t,n){if(null===Fd){var r=new Map,i=Fd=new Map;i.set(n,r)}else(r=(i=Fd).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[Me]||o[Ne]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var a=o.getAttribute(t)||"";a=e+a;var s=r.get(a);s?s.push(o):r.set(a,[o])}}return r}function Ud(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Vd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var $d=null;function Bd(){}function Hd(){if(this.count--,0===this.count)if(this.stylesheets)Wd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var qd=null;function Wd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,qd=new Map,t.forEach(Gd,e),qd=null,Hd.call(e))}function Gd(e,t){if(!(4&t.state.loading)){var n=qd.get(e);if(n)var r=n.get(null);else{n=new Map,qd.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var a=i[o];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(i=t.instance).getAttribute("data-precedence"),(o=n.get(a)||r)===r&&n.set(null,i),n.set(a,i),this.count++,r=Hd.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),o?o.parentNode.insertBefore(i,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var Kd={$$typeof:w,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function Yd(e,t,n,r,i,o,a,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Se(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Se(0),this.hiddenUpdates=Se(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Qd(e,t,n,r,i,o,a,s,l,c,u,d){return e=new Yd(e,t,n,a,s,l,c,d),t=1,!0===o&&(t|=24),o=Lr(3,null,null,t),e.current=o,o.stateNode=e,(t=Oi()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},no(o),e}function Xd(e){return e?e=Dr:Dr}function Jd(e,t,n,r,i,o){i=Xd(i),null===r.context?r.context=i:r.pendingContext=i,(r=io(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=oo(e,r,t))&&(Lc(n,0,t),ao(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function eh(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function th(e){if(13===e.tag){var t=Pr(e,67108864);null!==t&&Lc(t,0,67108864),eh(e,67108864)}}var nh=!0;function rh(e,t,n,r){var i=D.T;D.T=null;var o=j.p;try{j.p=2,oh(e,t,n,r)}finally{j.p=o,D.T=i}}function ih(e,t,n,r){var i=D.T;D.T=null;var o=j.p;try{j.p=8,oh(e,t,n,r)}finally{j.p=o,D.T=i}}function oh(e,t,n,r){if(nh){var i=ah(r);if(null===i)$u(e,t,r,sh,n),vh(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return dh=bh(dh,e,t,n,r,i),!0;case"dragenter":return hh=bh(hh,e,t,n,r,i),!0;case"mouseover":return fh=bh(fh,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ph.set(o,bh(ph.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,gh.set(o,bh(gh.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(vh(e,r),4&t&&-1<yh.indexOf(e)){for(;null!==i;){var o=$e(i);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var a=ve(o.pendingLanes);if(0!==a){var s=o;for(s.pendingLanes|=2,s.entangledLanes|=2;a;){var l=1<<31-fe(a);s.entanglements[1]|=l,a&=~l}_u(o),0===(6&nc)&&(_c=te()+500,Eu(0,!1))}}break;case 13:null!==(s=Pr(o,2))&&Lc(s,0,2),Vc(),eh(o,2)}if(null===(o=ah(r))&&$u(e,t,r,sh,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else $u(e,t,r,null,n)}}function ah(e){return lh(e=Pt(e))}var sh=null;function lh(e){if(sh=null,null!==(e=Ve(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sh=e,null}function ch(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ie:return 8;case oe:case ae:return 32;case se:return 268435456;default:return 32}default:return 32}}var uh=!1,dh=null,hh=null,fh=null,ph=new Map,gh=new Map,mh=[],yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vh(e,t){switch(e){case"focusin":case"focusout":dh=null;break;case"dragenter":case"dragleave":hh=null;break;case"mouseover":case"mouseout":fh=null;break;case"pointerover":case"pointerout":ph.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gh.delete(t.pointerId)}}function bh(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=$e(t))&&th(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function xh(e){var t=Ve(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}(e.priority,function(){if(13===n.tag){var e=Dc();e=Ie(e);var t=Pr(n,e);null!==t&&Lc(t,0,e),eh(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wh(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=ah(e.nativeEvent);if(null!==n)return null!==(t=$e(n))&&th(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Rt=r,n.target.dispatchEvent(r),Rt=null,t.shift()}return!0}function _h(e,t,n){wh(e)&&n.delete(t)}function Eh(){uh=!1,null!==dh&&wh(dh)&&(dh=null),null!==hh&&wh(hh)&&(hh=null),null!==fh&&wh(fh)&&(fh=null),ph.forEach(_h),gh.forEach(_h)}function Sh(e,t){e.blockedOn===t&&(e.blockedOn=null,uh||(uh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Eh)))}var kh=null;function Ch(e){kh!==e&&(kh=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){kh===e&&(kh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===lh(r||n))continue;break}var o=$e(n);null!==o&&(e.splice(t,3),t-=3,Pa(o,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Th(e){function t(t){return Sh(t,e)}null!==dh&&Sh(dh,e),null!==hh&&Sh(hh,e),null!==fh&&Sh(fh,e),ph.forEach(t),gh.forEach(t);for(var n=0;n<mh.length;n++){var r=mh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<mh.length&&null===(n=mh[0]).blockedOn;)xh(n),null===n.blockedOn&&mh.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],o=n[r+1],a=i[Oe]||null;if("function"===typeof o)a||Ch(n);else if(a){var s=null;if(o&&o.hasAttribute("formAction")){if(i=o,a=o[Oe]||null)s=a.formAction;else if(null!==lh(i))continue}else s=a.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Ch(n)}}}function Ih(e){this._internalRoot=e}function Ah(e){this._internalRoot=e}Ah.prototype.render=Ih.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Jd(t.current,Dc(),e,t,null,null)},Ah.prototype.unmount=Ih.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Vc(),t[De]=null}},Ah.prototype.unstable_scheduleHydration=function(e){if(e){var t=Re();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mh.length&&0!==t&&t<mh[n].priority;n++);mh.splice(n,0,e),0===n&&xh(e)}};var Rh=i.version;if("19.1.0"!==Rh)throw Error(a(527,Rh,"19.1.0"));j.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Ph={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nh.isDisabled&&Nh.supportsFiber)try{ue=Nh.inject(Ph),de=Nh}catch(Dh){}}t.createRoot=function(e,t){if(!s(e))throw Error(a(299));var n=!1,r="",i=vs,o=bs,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Qd(e,1,!1,null,0,n,r,i,o,l,0,null),e[De]=t.current,Uu(e),new Ih(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(a(299));var r=!1,i="",o=vs,l=bs,c=xs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Qd(e,1,!0,t,0,r,i,o,l,c,0,u)).context=Xd(null),n=t.current,(i=io(r=Ie(r=Dc()))).callback=null,oo(n,i,r),n=r,t.current.lanes=n,ke(t,n),_u(t),e[De]=t.current,Uu(e),new Ah(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var x=b.prototype=new v;x.constructor=b,g(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,_={H:null,A:null,T:null,S:null,V:null},E=Object.prototype.hasOwnProperty;function S(e,t,r,i,o,a){return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function k(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function I(){}function A(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case h:return A((u=e._init)(e._payload),t,i,o,a)}}if(u)return a=a(e),u=""===o?"."+T(e,0):o,w(a)?(i="",null!=u&&(i=u.replace(C,"$&/")+"/"),A(a,t,i,"",function(e){return e})):null!=a&&(k(a)&&(l=a,c=i+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+u,a=S(l.type,c,void 0,0,0,l.props)),t.push(a)),1;u=0;var d,p=""===o?".":o+":";if(w(e))for(var g=0;g<e.length;g++)u+=A(o=e[g],t,i,s=p+T(o,g),a);else if("function"===typeof(g=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=g.call(e),g=0;!(o=e.next()).done;)u+=A(o=o.value,t,i,s=p+T(o,g++),a);else if("object"===s){if("function"===typeof e.then)return A(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(I,I):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,o,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function R(e,t,n){if(null==e)return e;var r=[],i=0;return A(e,r,"","",function(e){return t.call(n,e,i++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function O(){}t.Children={map:R,forEach:function(e,t,n){R(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=a,t.PureComponent=b,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return _.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),i=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!E.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var a=Array(o),s=0;s<o;s++)a[s]=arguments[s+2];r.children=a}return S(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)E.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return S(e,o,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=_.T,n={};_.T=n;try{var r=e(),i=_.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(O,N)}catch(o){N(o)}finally{_.T=t}},t.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},t.use=function(e){return _.H.use(e)},t.useActionState=function(e,t,n){return _.H.useActionState(e,t,n)},t.useCallback=function(e,t){return _.H.useCallback(e,t)},t.useContext=function(e){return _.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return _.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=_.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return _.H.useId()},t.useImperativeHandle=function(e,t,n){return _.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return _.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return _.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return _.H.useMemo(e,t)},t.useOptimistic=function(e,t){return _.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return _.H.useReducer(e,t,n)},t.useRef=function(e){return _.H.useRef(e)},t.useState=function(e){return _.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return _.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return _.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,f=3,p=!1,g=!1,m=!1,y=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function _(e){if(m=!1,w(e),!g)if(null!==r(c))g=!0,S||(S=!0,E());else{var t=r(u);null!==t&&N(_,t.startTime-e)}}var E,S=!1,k=-1,C=5,T=-1;function I(){return!!y||!(t.unstable_now()-T<C)}function A(){if(y=!1,S){var e=t.unstable_now();T=e;var n=!0;try{e:{g=!1,m&&(m=!1,b(k),k=-1),p=!0;var o=f;try{t:{for(w(e),h=r(c);null!==h&&!(h.expirationTime>e&&I());){var a=h.callback;if("function"===typeof a){h.callback=null,f=h.priorityLevel;var s=a(h.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){h.callback=s,w(e),n=!0;break t}h===r(c)&&i(c),w(e)}else i(c);h=r(c)}if(null!==h)n=!0;else{var l=r(u);null!==l&&N(_,l.startTime-e),n=!1}}break e}finally{h=null,f=o,p=!1}n=void 0}}finally{n?E():S=!1}}}if("function"===typeof x)E=function(){x(A)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,P=R.port2;R.port1.onmessage=A,E=function(){P.postMessage(null)}}else E=function(){v(A,0)};function N(e,n){k=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(m?(b(k),k=-1):m=!0,N(_,o-a))):(e.sortIndex=s,n(c,e),g||p||(g=!0,S||(S=!0,E()))),e},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/report-portal---Copy/",n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,a=o?e[i+1]:0,s=i+2<e.length,l=s?e[i+2]:0,c=t>>2,u=(3&t)<<4|a>>4;let d=(15&a)<<2|l>>6,h=63&l;s||(h=64,o||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const s=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==s||null==l)throw new o;const c=t<<2|a>>4;if(r.push(c),64!==s){const e=a<<4&240|s>>2;if(r.push(e),64!==l){const e=s<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){return function(e){const t=r(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},s=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}const c=()=>{try{return l().__FIREBASE_DEFAULTS__||(()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&s(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},u=e=>{var t,n;return null===(n=null===(t=c())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},d=e=>{const t=u(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},h=()=>{var e;return null===(e=c())||void 0===e?void 0:e.config},f=e=>{var t;return null===(t=c())||void 0===t?void 0:t[`_${e}`]};class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function g(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch(t){return!1}}async function m(e){return(await fetch(e,{credentials:"include"})).ok}function y(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[a(JSON.stringify({alg:"none",type:"JWT"})),a(JSON.stringify(o)),""].join(".")}const v={};let b=!1;function x(e,t){if("undefined"===typeof window||"undefined"===typeof document||!g(window.location.host)||v[e]===t||v[e]||b)return;function n(e){return`__firebase__banner__${e}`}v[e]=t;const r="__firebase__banner",i=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(v))v[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function o(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{b=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function a(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),a=document.getElementById(t)||document.createElement("span"),s=n("learnmore"),l=document.getElementById(s)||document.createElement("a"),c=n("preprendIcon"),u=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,s);const n=o();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,c),t.append(u,a,l,n),document.body.appendChild(t)}i?(a.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',a.innerText="Preview backend running in this workspace."),a.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",a):a()}function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function _(){var e;const t=null===(e=c())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function E(){return!_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){try{return"object"===typeof indexedDB}catch(e){return!1}}class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e){const t=(arguments.length<=1?void 0:arguments[1])||{},n=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(T,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(r,t):"Error",o=`${this.serviceName}: ${i} (${n}).`;return new k(n,o,t)}}const T=/\{\$([^}]+)}/g;function I(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(A(n)&&A(o)){if(!I(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A(e){return null!==e&&"object"===typeof e}function R(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function P(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function N(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class O{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}function j(e){return e&&e._delegate?e._delegate:e}class L{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const z="[DEFAULT]";class F{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new p;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:z})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(i){}return r||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return this.component?this.component.multipleInstances?e:z:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function M(e){return e===z?void 0:e}class U{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new F(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const V=[];var $;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}($||($={}));const B={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},H=$.INFO,q={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},W=function(e,t){if(t<e.logLevel)return;const n=(new Date).toISOString(),r=q[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);for(var i=arguments.length,o=new Array(i>2?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a];console[r](`[${n}]  ${e.name}:`,...o)};class G{constructor(e){this.name=e,this._logLevel=H,this._logHandler=W,this._userLogHandler=null,V.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?B[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}let K,Y;const Q=new WeakMap,X=new WeakMap,J=new WeakMap,Z=new WeakMap,ee=new WeakMap;let te={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return X.get(e);if("objectStoreNames"===t)return e.objectStoreNames||J.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ne(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Y||(Y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(oe(this),n),ie(Q.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ie(e.apply(oe(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];const o=e.call(oe(this),t,...r);return J.set(o,t.sort?t.sort():[t]),ie(o)}}function re(e){return"function"===typeof e?ne(e):(e instanceof IDBTransaction&&function(e){if(X.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});X.set(e,t)}(e),t=e,(K||(K=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,te):e);var t}function ie(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(ie(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&Q.set(t,e)}).catch(()=>{}),ee.set(t,e),t}(e);if(Z.has(e))return Z.get(e);const t=re(e);return t!==e&&(Z.set(e,t),ee.set(t,e)),t}const oe=e=>ee.get(e);const ae=["get","getKey","getAll","getAllKeys","count"],se=["put","add","delete","clear"],le=new Map;function ce(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(le.get(t))return le.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=se.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ae.includes(n))return;const o=async function(e){const t=this.transaction(e,i?"readwrite":"readonly");let o=t.store;for(var a=arguments.length,s=new Array(a>1?a-1:0),l=1;l<a;l++)s[l-1]=arguments[l];return r&&(o=o.index(s.shift())),(await Promise.all([o[n](...s),i&&t.done]))[0]};return le.set(t,o),o}te=(e=>({...e,get:(t,n,r)=>ce(t,n)||e.get(t,n,r),has:(t,n)=>!!ce(t,n)||e.has(t,n)}))(te);class ue{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const de="@firebase/app",he="0.13.2",fe=new G("@firebase/app"),pe="@firebase/app-compat",ge="@firebase/analytics-compat",me="@firebase/analytics",ye="@firebase/app-check-compat",ve="@firebase/app-check",be="@firebase/auth",xe="@firebase/auth-compat",we="@firebase/database",_e="@firebase/data-connect",Ee="@firebase/database-compat",Se="@firebase/functions",ke="@firebase/functions-compat",Ce="@firebase/installations",Te="@firebase/installations-compat",Ie="@firebase/messaging",Ae="@firebase/messaging-compat",Re="@firebase/performance",Pe="@firebase/performance-compat",Ne="@firebase/remote-config",Oe="@firebase/remote-config-compat",De="@firebase/storage",je="@firebase/storage-compat",Le="@firebase/firestore",ze="@firebase/ai",Fe="@firebase/firestore-compat",Me="firebase",Ue="[DEFAULT]",Ve={[de]:"fire-core",[pe]:"fire-core-compat",[me]:"fire-analytics",[ge]:"fire-analytics-compat",[ve]:"fire-app-check",[ye]:"fire-app-check-compat",[be]:"fire-auth",[xe]:"fire-auth-compat",[we]:"fire-rtdb",[_e]:"fire-data-connect",[Ee]:"fire-rtdb-compat",[Se]:"fire-fn",[ke]:"fire-fn-compat",[Ce]:"fire-iid",[Te]:"fire-iid-compat",[Ie]:"fire-fcm",[Ae]:"fire-fcm-compat",[Re]:"fire-perf",[Pe]:"fire-perf-compat",[Ne]:"fire-rc",[Oe]:"fire-rc-compat",[De]:"fire-gcs",[je]:"fire-gcs-compat",[Le]:"fire-fst",[Fe]:"fire-fst-compat",[ze]:"fire-vertex","fire-js":"fire-js",[Me]:"fire-js-all"},$e=new Map,Be=new Map,He=new Map;function qe(e,t){try{e.container.addComponent(t)}catch(n){fe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function We(e){const t=e.name;if(He.has(t))return fe.debug(`There were multiple attempts to register component ${t}.`),!1;He.set(t,e);for(const n of $e.values())qe(n,e);for(const n of Be.values())qe(n,e);return!0}function Ge(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ke(e){return null!==e&&void 0!==e&&void 0!==e.settings}const Ye=new C("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class Qe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new L("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}const Xe="11.10.0";function Je(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!==typeof t){t={name:t}}const r=Object.assign({name:Ue,automaticDataCollectionEnabled:!0},t),i=r.name;if("string"!==typeof i||!i)throw Ye.create("bad-app-name",{appName:String(i)});if(n||(n=h()),!n)throw Ye.create("no-options");const o=$e.get(i);if(o){if(I(n,o.options)&&I(r,o.config))return o;throw Ye.create("duplicate-app",{appName:i})}const a=new U(i);for(const l of He.values())a.addComponent(l);const s=new Qe(n,r,a);return $e.set(i,s),s}function Ze(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;const t=$e.get(e);if(!t&&e===Ue&&h())return Je();if(!t)throw Ye.create("no-app",{appName:e});return t}function et(e,t,n){var r;let i=null!==(r=Ve[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void fe.warn(e.join(" "))}We(new L(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const tt="firebase-heartbeat-store";let nt=null;function rt(){return nt||(nt=function(e,t){let{blocked:n,upgrade:r,blocking:i,terminated:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=indexedDB.open(e,t),s=ie(a);return r&&a.addEventListener("upgradeneeded",e=>{r(ie(a.result),e.oldVersion,e.newVersion,ie(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(tt)}catch(n){console.warn(n)}}}).catch(e=>{throw Ye.create("idb-open",{originalErrorMessage:e.message})})),nt}async function it(e,t){try{const n=(await rt()).transaction(tt,"readwrite"),r=n.objectStore(tt);await r.put(t,ot(e)),await n.done}catch(n){if(n instanceof k)fe.warn(n.message);else{const e=Ye.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});fe.warn(e.message)}}}function ot(e){return`${e.name}!${e.options.appId}`}class at{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lt(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=st();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){fe.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=st(),{heartbeatsToSend:n,unsentEntries:r}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ct(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ct(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return fe.warn(t),""}}}function st(){return(new Date).toISOString().substring(0,10)}class lt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!S()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await rt()).transaction(tt),n=await t.objectStore(tt).get(ot(e));return await t.done,n}catch(t){if(t instanceof k)fe.warn(t.message);else{const e=Ye.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});fe.warn(e.message)}}}(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ct(e){return a(JSON.stringify({version:2,heartbeats:e})).length}var ut;ut="",We(new L("platform-logger",e=>new ue(e),"PRIVATE")),We(new L("heartbeat",e=>new at(e),"PRIVATE")),et(de,he,ut),et(de,he,"esm2017"),et("fire-js","");et("firebase","11.10.0","app");function dt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;function ht(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ft=ht,pt=new C("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),gt=new G("@firebase/auth");function mt(e){if(gt.logLevel<=$.ERROR){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];gt.error(`Auth (${Xe}): ${e}`,...n)}}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw wt(e,...n)}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return wt(e,...n)}function bt(e,t,n){const r=Object.assign(Object.assign({},ft()),{[t]:n});return new C("auth","Firebase",r).create(t,{appName:e.name})}function xt(e){return bt(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if("string"!==typeof e){const t=n[0],r=[...n.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(t,...r)}return pt.create(e,...n)}function _t(e,t){if(!e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];throw wt(t,...r)}}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mt(t),new Error(t)}function St(e,t){e||Et(t)}function kt(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ct(){return"http:"===Tt()||"https:"===Tt()}function Tt(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}function It(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Ct()||function(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}class At{constructor(e,t){this.shortDelay=e,this.longDelay=t,St(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())||"object"===typeof navigator&&"ReactNative"===navigator.product}get(){return It()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Rt(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}class Pt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Nt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ot=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dt=new At(3e4,6e4);function jt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lt(e,t,n,r){return zt(e,arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=R(Object.assign({key:e.config.apiKey},o)).slice(1),s=await e._getAdditionalHeaders();s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:s},i);return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&g(e.emulatorConfig.host)&&(l.credentials="include"),Pt.fetch()(await Mt(e,e.config.apiHost,n,a),l)})}async function zt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nt),t);try{const t=new Vt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $t(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $t(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw $t(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw $t(e,"user-disabled",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw bt(e,s,a);yt(e,s)}}catch(i){if(i instanceof k)throw i;yt(e,"network-request-failed",{message:String(i)})}}async function Ft(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const o=await Lt(e,t,n,r,i);return"mfaPendingCredential"in o&&yt(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function Mt(e,t,n,r){const i=`${t}${n}?${r}`,o=e,a=o.config.emulator?Rt(e.config,i):`${e.config.apiScheme}://${i}`;if(Ot.includes(n)&&(await o._persistenceManagerAvailable,"COOKIE"===o._getPersistenceType())){return o._getPersistence()._getFinalTarget(a).toString()}return a}function Ut(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(vt(this.auth,"network-request-failed")),Dt.get())})}}function $t(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(e,t,r);return i.customData._tokenResponse=n,i}function Bt(e){return void 0!==e&&void 0!==e.enterprise}class Ht{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ut(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qt(e,t){return Lt(e,"GET","/v2/recaptchaConfig",jt(e,t))}async function Wt(e,t){return Lt(e,"POST","/v1/accounts:lookup",t)}function Gt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Kt(e){return 1e3*Number(e)}function Yt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return mt("JWT malformed, contained fewer than 3 sections"),null;try{const e=s(n);return e?JSON.parse(e):(mt("Failed to decode base64 JWT payload"),null)}catch(i){return mt("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function Qt(e){const t=Yt(e);return _t(t,"internal-error"),_t("undefined"!==typeof t.exp,"internal-error"),_t("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}async function Xt(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return t;try{return await t}catch(n){throw n instanceof k&&function(e){let{code:t}=e;return"auth/user-disabled"===t||"auth/user-token-expired"===t}(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}class Jt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}class Zt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gt(this.lastLoginAt),this.creationTime=Gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function en(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Xt(e,Wt(n,{idToken:r}));_t(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?tn(o.providerUserInfo):[],s=(l=e.providerData,c=a,[...l.filter(e=>!c.some(t=>t.providerId===e.providerId)),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&o.passwordHash)&&!(null===s||void 0===s?void 0:s.length),h=!!u&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Zt(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,f)}function tn(e){return e.map(e=>{var{providerId:t}=e,n=dt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_t(e.idToken,"internal-error"),_t("undefined"!==typeof e.idToken,"internal-error"),_t("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Qt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_t(0!==e.length,"internal-error");const t=Qt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]||!this.accessToken||this.isExpired?(_t(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await zt(e,{},async()=>{const n=R({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=await Mt(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const s={method:"POST",headers:a,body:n};return e.emulatorConfig&&g(e.emulatorConfig.host)&&(s.credentials="include"),Pt.fetch()(o,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new nn;return n&&(_t("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(_t("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(_t("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return Et("not implemented")}}function rn(e,t){_t("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class on{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=dt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xt(this,this.stsTokenManager.getToken(this.auth,e));return _t(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=j(e),r=await n.getIdToken(t),i=Yt(r);_t(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,a=null===o||void 0===o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Gt(Kt(i.auth_time)),issuedAtTime:Gt(Kt(i.iat)),expirationTime:Gt(Kt(i.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=j(e);await en(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_t(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await en(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await Xt(this,async function(e,t){return Lt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,g=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:x,providerData:w,stsTokenManager:_}=t;_t(v&&_,e,"internal-error");const E=nn.fromJSON(this.name,_);_t("string"===typeof v,e,"internal-error"),rn(u,e.name),rn(d,e.name),_t("boolean"===typeof b,e,"internal-error"),_t("boolean"===typeof x,e,"internal-error"),rn(h,e.name),rn(f,e.name),rn(p,e.name),rn(g,e.name),rn(m,e.name),rn(y,e.name);const S=new on({uid:v,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:x,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(S.providerData=w.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=new nn;r.updateFromServerResponse(t);const i=new on({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await en(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];_t(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?tn(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),a=new nn;a.updateFromIdToken(n);const s=new on({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Zt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(s,l),s}}const an=new Map;function sn(e){St(e instanceof Function,"Expected a class definition");let t=an.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,an.set(e,t),t)}class ln{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ln.type="NONE";const cn=ln;function un(e,t,n){return`firebase:${e}:${t}:${n}`}class dn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=un(this.userKey,r.apiKey,i),this.fullPersistenceKey=un("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await Wt(this.auth,{idToken:e}).catch(()=>{});return t?on._fromGetAccountInfoResponse(this.auth,t,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";if(!t.length)return new dn(sn(cn),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||sn(cn);const o=un(n,e.config.apiKey,e.name);let a=null;for(const c of t)try{const t=await c._get(o);if(t){let n;if("string"===typeof t){const r=await Wt(e,{idToken:t}).catch(()=>{});if(!r)break;n=await on._fromGetAccountInfoResponse(e,r,t)}else n=on._fromJSON(e,t);c!==i&&(a=n),i=c;break}}catch(l){}const s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(l){}})),new dn(i,e,n)):new dn(i,e,n)}}function hn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(mn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vn(t))return"Blackberry";if(bn(t))return"Webos";if(pn(t))return"Safari";if((t.includes("chrome/")||gn(t))&&!t.includes("edge/"))return"Chrome";if(yn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/firefox\//i.test(e)}function pn(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:w()).toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/crios\//i.test(e)}function mn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/iemobile/i.test(e)}function yn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/android/i.test(e)}function vn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/blackberry/i.test(e)}function bn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/webos/i.test(e)}function xn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function wn(){return function(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function _n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return xn(e)||yn(e)||bn(e)||vn(e)||/windows phone/i.test(e)||mn(e)}function En(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=hn(w());break;case"Worker":t=`${hn(w())}-${e}`;break;default:t=e}const r=n.length?n.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xe}/${r}`}class Sn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(By){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}class kn{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,a;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(o=s.containsNumericCharacter)||void 0===o||o),s.isValid&&(s.isValid=null===(a=s.containsNonAlphanumericCharacter)||void 0===a||a),s}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}class Cn{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new In(this),this.idTokenSubscription=new In(this),this.beforeStateQueue=new Sn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=sn(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Wt(this,{idToken:e}),n=await on._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ke(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null===a||void 0===a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await en(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(xt(this));const t=e?j(e):null;return t&&_t(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this._deleted)return e&&_t(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e){return Lt(e,"GET","/v2/passwordPolicy",jt(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}(this),t=new kn(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new C("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Lt(e,"POST","/v2/accounts:revokeToken",jt(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&sn(e)||this._popupRedirectResolver;_t(t,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[sn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_t(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=En(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&function(e){if(gt.logLevel<=$.WARN){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];gt.warn(`Auth (${Xe}): ${e}`,...n)}}(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Tn(e){return j(e)}class In{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new O(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return _t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let An={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rn(e){return An.loadJS(e)}function Pn(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Nn{constructor(){this.enterprise=new On}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class On{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Dn="NO_RECAPTCHA";class jn{constructor(e){this.type="recaptcha-enterprise",this.auth=Tn(e)}async verify(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function n(t,n,r){const i=window.grecaptcha;Bt(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Dn)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Nn).execute("siteKey",{action:"verify"})}return new Promise((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{qt(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Ht(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})})(this.auth).then(i=>{if(!t&&Bt(window.grecaptcha))n(i,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=An.recaptchaEnterpriseScript;0!==t.length&&(t+=i),Rn(t).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function Ln(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const o=new jn(e);let a;if(i)a=Dn;else try{a=await o.verify(n)}catch(l){a=await o.verify(n,!0)}const s=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in s){const e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in s){const e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return s}return r?Object.assign(s,{captchaResp:a}):Object.assign(s,{captchaResponse:a}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function zn(e,t,n,r,i){var o,a;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ln(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ln(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(null===(a=e._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("PHONE_PROVIDER")){const i=await Ln(e,t,n);return r(e,i).catch(async i=>{var o;if("AUDIT"===(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Ln(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await Ln(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function Fn(e){const t=Tn(e),n=await qt(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ht(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){new jn(t).verify()}}function Mn(e,t,n){const r=Tn(e);_t(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Un(t),{host:a,port:s}=function(e){const t=Un(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Vn(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Vn(t)}}}(t),l=null===s?"":`:${s}`,c={url:`${o}//${a}${l}/`},u=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return _t(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void _t(I(c,r.config.emulator)&&I(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,g(a)?(m(`${o}//${a}${l}`),x("Auth",!0)):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function Un(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class $n{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function Bn(e,t){return Lt(e,"POST","/v1/accounts:signUp",t)}async function Hn(e,t){return Ft(e,"POST","/v1/accounts:signInWithPassword",jt(e,t))}class qn extends $n{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new qn(e,t,"password")}static _fromEmailAndCode(e,t){return new qn(e,t,"emailLink",arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return zn(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Hn,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithEmailLink",jt(e,t))}(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return zn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Bn,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithEmailLink",jt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function Wn(e,t){return Ft(e,"POST","/v1/accounts:signInWithIdp",jt(e,t))}class Gn extends $n{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=dt(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Gn(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return Wn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Wn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=R(t)}return e}}async function Kn(e,t){return Lt(e,"POST","/v1/accounts:sendVerificationCode",jt(e,t))}const Yn={USER_NOT_FOUND:"user-not-found"};class Qn extends $n{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Qn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Qn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",jt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",jt(e,t));if(n.temporaryProof)throw $t(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",jt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Yn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Qn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class Xn{constructor(e){var t,n,r,i,o,a;const s=P(N(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,c=null!==(n=s.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);_t(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.lang)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=P(N(e)).link,n=t?P(N(t)).deep_link_id:null,r=P(N(e)).deep_link_id;return(r?P(N(r)).link:null)||r||n||t||e}(e);try{return new Xn(t)}catch(n){return null}}}class Jn{constructor(){this.providerId=Jn.PROVIDER_ID}static credential(e,t){return qn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xn.parseLink(t);return _t(n,"argument-error"),qn._fromEmailAndCode(e,n.code,n.tenantId)}}Jn.PROVIDER_ID="password",Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class Zn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class er extends Zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class tr extends er{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return tr.credential(t.oauthAccessToken)}catch(n){return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com",tr.PROVIDER_ID="facebook.com";class nr extends er{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gn._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nr.credential(n,r)}catch(i){return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com",nr.PROVIDER_ID="google.com";class rr extends er{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return rr.credential(t.oauthAccessToken)}catch(n){return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com",rr.PROVIDER_ID="github.com";class ir extends er{constructor(){super("twitter.com")}static credential(e,t){return Gn._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ir.credential(n,r)}catch(i){return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com",ir.PROVIDER_ID="twitter.com";class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=await on._fromIdTokenResponse(e,n,r),o=ar(n);return new or({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ar(n);return new or({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ar(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class sr extends k{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,sr.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new sr(e,t,n,r)}}function lr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw sr._fromErrorAndOperation(e,n,t,r);throw n})}async function cr(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=await Xt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return or._forOperation(e,"link",r)}async function ur(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{auth:r}=e;if(Ke(r.app))return Promise.reject(xt(r));const i="reauthenticate";try{const o=await Xt(e,lr(r,i,t,e),n);_t(o.idToken,r,"internal-error");const a=Yt(o.idToken);_t(a,r,"internal-error");const{sub:s}=a;return _t(e.uid===s,r,"user-mismatch"),or._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&yt(r,"user-mismatch"),o}}async function dr(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Ke(e.app))return Promise.reject(xt(e));const r="signIn",i=await lr(e,r,t),o=await or._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function hr(e,t){return dr(Tn(e),t)}async function fr(e){const t=Tn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function pr(e){return j(e).signOut()}function gr(e,t){return Lt(e,"POST","/v2/accounts/mfaEnrollment:start",jt(e,t))}new WeakMap;const mr="__sak";class yr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class vr extends yr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_n(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);wn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vr.type="LOCAL";const br=vr;function xr(e){var t,n;const r=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return null!==(n=null===(t=document.cookie.match(i))||void 0===t?void 0:t[1])&&void 0!==n?n:null}function wr(e){return`${"http:"===window.location.protocol?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class _r{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(null===(e=navigator.cookieEnabled)||void 0===e||e))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=wr(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return null===e||void 0===e?void 0:e.value}return xr(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=wr(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=wr(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);e.deleted.find(e=>e.name===n)&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=xr(n);const i=setInterval(()=>{const e=xr(n);e!==r&&(t(e),r=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}_r.type="COOKIE";class Er extends yr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Er.type="SESSION";const Sr=Er;class kr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new kr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async e=>e(t.origin,i)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}function Cr(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}kr.receivers=[];class Tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50;const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,s)=>{const l=Cr("",20);r.port1.start();const c=setTimeout(()=>{s(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(c),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}function Ir(){return window}function Ar(){return"undefined"!==typeof Ir().WorkerGlobalScope&&"function"===typeof Ir().importScripts}const Rr="firebaseLocalStorageDb",Pr="firebaseLocalStorage",Nr="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dr(e,t){return e.transaction([Pr],t?"readwrite":"readonly").objectStore(Pr)}function jr(){const e=indexedDB.open(Rr,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Pr,{keyPath:Nr})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Pr)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Rr);return new Or(e).toPromise()}(),t(await jr()))})})}async function Lr(e,t,n){const r=Dr(e,!0).put({[Nr]:t,value:n});return new Or(r).toPromise()}function zr(e,t){const n=Dr(e,!0).delete(t);return new Or(n).toPromise()}class Fr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await jr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ar()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kr._getInstance(Ar()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Tr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jr();return await Lr(e,mr,"1"),await zr(e,mr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lr(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Dr(e,!1).get(t),r=await new Or(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Dr(e,!1).getAll();return new Or(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Fr.type="LOCAL";const Mr=Fr;function Ur(e,t){return Lt(e,"POST","/v2/accounts/mfaSignIn:start",jt(e,t))}Pn("rcb"),new At(3e4,6e4);const Vr="recaptcha";async function $r(e,t,n){var r;if(!e._getRecaptchaConfig())try{await Fn(e)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){_t("enroll"===t.type,e,"internal-error");const r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},o=zn(e,r,"mfaSmsEnrollment",async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Dn){_t((null===n||void 0===n?void 0:n.type)===Vr,e,"argument-error");return gr(e,await Br(e,t,n))}return gr(e,t)},"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{_t("signin"===t.type,e,"internal-error");const o=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;_t(o,e,"missing-multi-factor-info");const a={mfaPendingCredential:t.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},s=zn(e,a,"mfaSmsSignIn",async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Dn){_t((null===n||void 0===n?void 0:n.type)===Vr,e,"argument-error");return Ur(e,await Br(e,t,n))}return Ur(e,t)},"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=zn(e,t,"sendVerificationCode",async(e,t)=>{if(t.captchaResponse===Dn){_t((null===n||void 0===n?void 0:n.type)===Vr,e,"argument-error");return Kn(e,await Br(e,t,n))}return Kn(e,t)},"PHONE_PROVIDER");return(await r.catch(e=>Promise.reject(e))).sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function Br(e,t,n){_t(n.type===Vr,e,"argument-error");const r=await n.verify();_t("string"===typeof r,e,"argument-error");const i=Object.assign({},t);if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,o=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:o}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}class Hr{constructor(e){this.providerId=Hr.PROVIDER_ID,this.auth=Tn(e)}verifyPhoneNumber(e,t){return $r(this.auth,e,j(t))}static credential(e,t){return Qn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Hr.credentialFromTaggedObject(t)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{phoneNumber:n,temporaryProof:r}=t;return n&&r?Qn._fromTokenResponse(n,r):null}}function qr(e,t){return t?sn(t):(_t(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}Hr.PROVIDER_ID="phone",Hr.PHONE_SIGN_IN_METHOD="phone";class Wr extends $n{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gr(e){return dr(e.auth,new Wr(e),e.bypassAuthState)}function Kr(e){const{auth:t,user:n}=e;return _t(n,t,"internal-error"),ur(n,new Wr(e),e.bypassAuthState)}async function Yr(e){const{auth:t,user:n}=e;return _t(n,t,"internal-error"),cr(n,new Wr(e),e.bypassAuthState)}class Qr{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gr;case"linkViaPopup":case"linkViaRedirect":return Yr;case"reauthViaPopup":case"reauthViaRedirect":return Kr;default:yt(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const Xr=new At(2e3,1e4);class Jr extends Qr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _t(e,this.auth,"internal-error"),e}async onExecution(){St(1===this.filter.length,"Popup operations only handle one event");const e=Cr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Xr.get())};e()}}Jr.currentPopupAction=null;const Zr=new Map;class ei extends Qr{constructor(e,t){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,arguments.length>2&&void 0!==arguments[2]&&arguments[2]),this.eventId=null}async execute(){let e=Zr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ri(t),r=ni(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Zr.set(this.auth._key(),e)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ti(e,t){Zr.set(e._key(),t)}function ni(e){return sn(e._redirectPersistence)}function ri(e){return un("pendingRedirect",e.config.apiKey,e.name)}async function ii(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Ke(e.app))return Promise.reject(xt(e));const r=Tn(e),i=qr(r,t),o=new ei(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class oi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return si(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!si(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(vt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ai(e))}saveEventToCache(e){this.cachedEventUids.add(ai(e)),this.lastProcessedEventTime=Date.now()}}function ai(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function si(e){let{type:t,error:n}=e;return"unknown"===t&&"auth/no-auth-event"===(null===n||void 0===n?void 0:n.code)}const li=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ci=/^https?/;async function ui(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e){return Lt(e,"GET","/v1/projects",arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}(e);for(const r of t)try{if(di(r))return}catch(n){}yt(e,"unauthorized-domain")}function di(e){const t=kt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ci.test(n))return!1;if(li.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}const hi=new At(3e4,6e4);function fi(){const e=Ir().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function pi(e){return new Promise((t,n)=>{var r,i,o;function a(){fi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fi(),n(vt(e,"network-request-failed"))},timeout:hi.get()})}if(null===(i=null===(r=Ir().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Ir().gapi)||void 0===o?void 0:o.load)){const t=Pn("iframefcb");return Ir()[t]=()=>{gapi.load?a():n(vt(e,"network-request-failed"))},Rn(`${An.gapiScript}?onload=${t}`).catch(e=>n(e))}a()}}).catch(e=>{throw gi=null,e})}let gi=null;const mi=new At(5e3,15e3),yi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bi(e){const t=e.config;_t(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Rt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Xe},i=vi.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${R(r).slice(1)}`}async function xi(e){const t=await function(e){return gi=gi||pi(e),gi}(e),n=Ir().gapi;return _t(n,e,"internal-error"),t.open({where:document.body,url:bi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yi,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=vt(e,"network-request-failed"),o=Ir().setTimeout(()=>{r(i)},mi.get());function a(){Ir().clearTimeout(o),n(t)}t.ping(a).then(a,()=>{r(i)})}))}const wi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class _i{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ei(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600;const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},wi),{width:r.toString(),height:i.toString(),top:o,left:a}),c=w().toLowerCase();n&&(s=gn(c)?"_blank":n),fn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,t)=>{let[n,r]=t;return`${e}${n}=${r},`},"");if(function(){var e;return xn(arguments.length>0&&void 0!==arguments[0]?arguments[0]:w())&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",s),new _i(null);const d=window.open(t||"",s,u);_t(d,e,"popup-blocked");try{d.focus()}catch(h){}return new _i(d)}const Si="__/auth/handler",ki="emulator/auth/handler",Ci=encodeURIComponent("fac");async function Ti(e,t,n,r,i,o){_t(e.config.authDomain,e,"auth-domain-config-required"),_t(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Xe,eventId:i};if(t instanceof Zn){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))a[e]=t}if(t instanceof er){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const u of Object.keys(s))void 0===s[u]&&delete s[u];const l=await e._getAppCheckToken(),c=l?`#${Ci}=${encodeURIComponent(l)}`:"";return`${function(e){let{config:t}=e;if(!t.emulator)return`https://${t.authDomain}/${Si}`;return Rt(t,ki)}(e)}?${R(s).slice(1)}${c}`}const Ii="webStorageSupport";const Ai=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sr,this._completeRedirectFn=ii,this._overrideRedirectResult=ti}async _openPopup(e,t,n,r){var i;St(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ei(e,await Ti(e,t,n,kt(),r),Cr())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Ir().location.href=e}(await Ti(e,t,n,kt(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(St(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await xi(e),n=new oi(e);return t.register("authEvent",t=>{_t(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ii,{type:Ii},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ii];void 0!==i&&t(!!i),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ui(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _n()||pn()||xn()}};var Ri="@firebase/auth",Pi="1.10.8";class Ni{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const Oi=f("authIdTokenMaxAge")||300;let Di=null;var ji;An={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=vt("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},ji="Browser",We(new L("auth",(e,t)=>{let{options:n}=t;const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=r.options;_t(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:s,clientPlatform:ji,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:En(ji)},c=new Cn(r,i,o,l);return function(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),We(new L("auth-internal",e=>(e=>new Ni(e))(Tn(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),et(Ri,Pi,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(ji)),et(Ri,Pi,"esm2017");var Li,zi,Fi="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Mi={};(function(){var e;function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],a=t+(o^n&(i^o))+r[0]+3614090360&4294967295;a=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=n+(a<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^o&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^o)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~o))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~o))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~o))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((o=(t=n+((a=t+(i^(n|~o))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=o+((a=i+(t^(o|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=0|e[i];r&&o==t||(n[i]=o,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,o=this.h,a=0;a<t;){if(0==o)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"===typeof e){for(;a<t;)if(i[o++]=e.charCodeAt(a++),o==this.blockSize){n(this,i),o=0;break}}else for(;a<t;)if(i[o++]=e[a++],o==this.blockSize){n(this,i),o=0;break}}this.h=o,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function o(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],0>e?-1:0)}):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return s;if(0>e)return h(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var s=o(0),l=o(1),c=o(16777216);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return-1==e.h}function h(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(h(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(u(t))throw Error("division by zero");if(u(e))return new g(s,s);if(d(e))return t=m(h(e),t),new g(h(t.g),h(t.h));if(d(t))return t=m(e,h(t)),new g(h(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),o=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var c=o.add(r);0>=c.l(e)&&(i=i.add(n),o=c),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new g(i,t)}for(i=s;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),c=(o=a(n)).j(t);d(c)||0<c.l(e);)c=(o=a(n-=r)).j(t);u(o)&&(o=l),i=i.add(o),e=f(e,c)}return new g(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,o=[],a=0;a<i;a++)o[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(o,e.h)}(e=r.prototype).m=function(){if(d(this))return-h(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(d(this))return"-"+h(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=m(n,t).g,o=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return d(e=f(this,e))?-1:u(e)?0:1},e.abs=function(){return d(this)?h(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,o=0;o<=t;o++){var a=i+(65535&this.i(o))+(65535&e.i(o)),s=(a>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);i=s>>>16,a&=65535,s&=65535,n[o]=s<<16|a}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return s;if(d(this))return d(e)?h(this).j(h(e)):h(h(this).j(e));if(d(e))return h(this.j(h(e)));if(0>this.l(c)&&0>e.l(c))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var o=0;o<e.g.length;o++){var l=this.i(i)>>>16,f=65535&this.i(i),g=e.i(o)>>>16,m=65535&e.i(o);n[2*i+2*o]+=f*m,p(n,2*i+2*o),n[2*i+2*o+1]+=l*m,p(n,2*i+2*o+1),n[2*i+2*o+1]+=f*g,p(n,2*i+2*o+1),n[2*i+2*o+2]+=l*g,p(n,2*i+2*o+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return m(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,zi=Mi.Md5=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return h(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=s,o=0;o<t.length;o+=8){var l=Math.min(8,t.length-o),c=parseInt(t.substring(o,o+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(c))):i=(i=i.j(r)).add(a(c))}return i},Li=Mi.Integer=r}).apply("undefined"!==typeof Fi?Fi:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var Ui,Vi,$i,Bi,Hi,qi,Wi,Gi,Ki="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Yi={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Ki&&Ki];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var o=0;o<e.length-1;o++){var a=e[o];if(!(a in i))break e;i=i[a]}(r=r(o=i[e=e[e.length-1]]))!=o&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,function(e,t){return t})}});var r=r||{},i=this||self;function o(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function s(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?s:l).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function h(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(o(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function g(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function m(e){return m[" "](e),e}m[" "]=function(){};var y=-1!=g().indexOf("Gecko")&&!(-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge"))&&!(-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE"))&&-1==g().indexOf("Edge");function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function b(e){const t={};for(const n in e)t[n]=e[n];return t}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<x.length;t++)n=x[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function _(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function E(e){i.setTimeout(()=>{throw e},0)}function S(){var e=A;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var k=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new C,e=>e.reset());class C{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let T,I=!1,A=new class{constructor(){this.h=this.g=null}add(e,t){const n=k.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},R=()=>{const e=i.Promise.resolve(void 0);T=()=>{e.then(P)}};var P=()=>{for(var e;e=S();){try{e.h.call(e.g)}catch(n){E(n)}var t=k;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}I=!1};function N(){this.s=this.s,this.C=this.C}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.s=!1,N.prototype.ma=function(){this.s||(this.s=!0,this.N())},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function j(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{m(t.nodeName);var i=!0;break e}catch(Ly){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:L[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&j.aa.h.call(this)}}d(j,O);var L={2:"touch",3:"pen",4:"mouse"};j.prototype.h=function(){j.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),F=0;function M(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function U(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function V(e){this.src=e,this.g={},this.h=0}function $(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=Array.prototype.indexOf.call(i,t,void 0);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(U(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function B(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.da&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}V.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var a=B(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new M(t,this.src,o,!!r,i)).fa=n,e.push(t)),t};var H="closure_lm_"+(1e6*Math.random()|0),q={};function W(e,t,n,r,i){if(r&&r.once)return K(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)W(e,t[o],n,r,i);return null}return n=te(n),e&&e[z]?e.K(t,n,a(r)?!!r.capture:!!r,i):G(e,t,n,!1,r,i)}function G(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=a(i)?!!i.capture:!!i,l=Z(e);if(l||(e[H]=l=new V(e)),(n=l.add(t,n,r,s,o)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=J;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)D||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(X(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function K(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)K(e,t[o],n,r,i);return null}return n=te(n),e&&e[z]?e.L(t,n,a(r)?!!r.capture:!!r,i):G(e,t,n,!0,r,i)}function Y(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)Y(e,t[o],n,r,i);else r=a(r)?!!r.capture:!!r,n=te(n),e&&e[z]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=B(o=e.g[t],n,r,i))&&(U(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Z(e))&&(t=e.g[t.toString()],e=-1,t&&(e=B(t,n,r,i)),(n=-1<e?t[e]:null)&&Q(n))}function Q(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[z])$(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(X(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Z(t))?($(n,e),0==n.h&&(n.src=null,t[H]=null)):U(e)}}}function X(e){return e in q?q[e]:q[e]="on"+e}function J(e,t){if(e.da)e=!0;else{t=new j(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&Q(e),e=n.call(r,t)}return e}function Z(e){return(e=e[H])instanceof V?e:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(e){return"function"===typeof e?e:(e[ee]||(e[ee]=function(t){return e.handleEvent(t)}),e[ee])}function ne(){N.call(this),this.i=new V(this),this.M=this,this.F=null}function re(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;w(t=new O(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var a=t.g=n[o];i=ie(a,r,!0,t)&&i}if(i=ie(a=t.g=e,r,!0,t)&&i,i=ie(a,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=ie(a=t.g=n[o],r,!1,t)&&i}function ie(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var a=t[o];if(a&&!a.da&&a.capture==n){var s=a.listener,l=a.ha||a.src;a.fa&&$(e.i,a),i=!1!==s.call(l,r)&&i}}return i&&!r.defaultPrevented}function oe(e,t,n){if("function"===typeof e)n&&(e=c(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ae(e){e.g=oe(()=>{e.g=null,e.i&&(e.i=!1,ae(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}d(ne,N),ne.prototype[z]=!0,ne.prototype.removeEventListener=function(e,t,n,r){Y(this,e,t,n,r)},ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)U(n[r]);delete t.g[e],t.h--}}this.F=null},ne.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ne.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends N{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ae(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function le(e){N.call(this),this.h=e,this.g={}}d(le,N);var ce=[];function ue(e){v(e.g,function(e,t){this.g.hasOwnProperty(t)&&Q(e)},e),e.g={}}le.prototype.N=function(){le.aa.N.call(this),ue(this)},le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var de=i.JSON.stringify,he=i.JSON.parse,fe=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function pe(){}function ge(e){return e.h||(e.h=e.i())}function me(){}pe.prototype.h=null;var ye={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ve(){O.call(this,"d")}function be(){O.call(this,"c")}d(ve,O),d(be,O);var xe={},we=null;function _e(){return we=we||new ne}function Ee(e){O.call(this,xe.La,e)}function Se(e){const t=_e();re(t,new Ee(t))}function ke(e,t){O.call(this,xe.STAT_EVENT,e),this.stat=t}function Ce(e){const t=_e();re(t,new ke(t,e))}function Te(e,t){O.call(this,xe.Ma,e),this.size=t}function Ie(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function Ae(){this.g=!0}function Re(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var a=1;a<i.length;a++)i[a]=""}}}return de(n)}catch(zy){return t}}(e,n)+(r?" "+r:"")})}xe.La="serverreachability",d(Ee,O),xe.STAT_EVENT="statevent",d(ke,O),xe.Ma="timingevent",d(Te,O),Ae.prototype.xa=function(){this.g=!1},Ae.prototype.info=function(){};var Pe,Ne={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oe={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function De(){}function je(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Le}function Le(){this.i=null,this.g="",this.h=!1}d(De,pe),De.prototype.g=function(){return new XMLHttpRequest},De.prototype.i=function(){return{}},Pe=new De;var ze={},Fe={};function Me(e,t,n){e.L=1,e.v=dt(at(t)),e.m=n,e.P=!0,Ue(e,null)}function Ue(e,t){e.F=Date.now(),Be(e),e.A=at(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),kt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Le,e.g=fn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ce[0]=i.toString()),i=ce);for(var o=0;o<i.length;o++){var a=W(n,i[o],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Se(),function(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var a="",s=o.split("&"),l=0;l<s.length;l++){var c=s[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");a=2<=d.length&&"type"==d[1]?a+(u+"=")+c+"&":a+(u+"=redacted&")}}else a=null;else a=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ve(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function $e(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Fe:(n=Number(t.substring(n,r)),isNaN(n)?ze:(r+=1)+n>t.length?Fe:(t=t.slice(r,r+n),e.C=r+n,t))}function Be(e){e.S=Date.now()+e.I,He(e,e.I)}function He(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ie(c(e.ba,e),t)}function qe(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function We(e){0==e.j.G||e.J||ln(e.j,e)}function Ge(e){qe(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ue(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ke(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Ze(n.h,e)))if(!e.K&&Ze(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sn(n),Qt(n)}rn(n),Ce(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ie(c(n.Za,n),6e3));if(1>=Je(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else un(n,11)}else if((e.K||n.g==e)&&sn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const t=c[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=c[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(et(o,o.h),o.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ut(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var a=e;if((r=n).qa=hn(r,r.J?r.ia:null,r.W),a.K){tt(r.h,a);var s=a,l=r.L;l&&(s.I=l),s.B&&(qe(s),Be(s)),r.g=a}else nn(r);0<n.i.length&&Jt(n)}else"stop"!=c[0]&&"close"!=c[0]||un(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?un(n,7):Yt(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}Se()}catch(u){}}je.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==qt(e)?t.j():this.Y(e)},je.prototype.Y=function(e){try{if(e==this.g)e:{const h=qt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||Wt(this.g)))){this.J||4!=h||7==t||Se(),qe(this);var n=this.g.Z();this.X=n;t:if(Ve(this)){var r=Wt(this.g);e="";var o=r.length,a=4==qt(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ge(this),We(this);var s="";break t}this.h.i=new i.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==o-1)});r.length=0,this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,o,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+a})}(this.i,this.u,this.A,this.l,this.R,h,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var u=l;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,Ce(12),Ge(this),We(this);break e}Re(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ke(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<s.length;){if(e=$e(this,s),e==Fe){4==h&&(this.s=4,Ce(14),n=!1),Re(this.i,this.l,null,"[Incomplete Response]");break}if(e==ze){this.s=4,Ce(15),Re(this.i,this.l,s,"[Invalid Chunk]"),n=!1;break}Re(this.i,this.l,e,null),Ke(this,e)}if(Ve(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=s.length||this.h.h||(this.s=1,Ce(16),n=!1),this.o=this.o&&n,n){if(0<s.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),on(d),d.M=!0,Ce(11))}}else Re(this.i,this.l,s,"[Invalid Chunked Response]"),Ge(this),We(this)}else Re(this.i,this.l,s,null),Ke(this,s);4==h&&Ge(this),this.o&&!this.J&&(4==h?ln(this.j,this):(this.o=!1,Be(this)))}else(function(e){const t={};e=(e.g&&2<=qt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=_(e[r]);const i=n[0];if("string"!==typeof(n=n[1]))continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),Ge(this),We(this)}}}catch($y){}},je.prototype.cancel=function(){this.J=!0,Ge(this)},je.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(Se(),Ce(17)),Ge(this),this.s=2,We(this)):He(this,this.S-e)};var Ye=class{constructor(e,t){this.g=e,this.map=t}};function Qe(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Je(e){return e.h?1:e.g?e.g.size:0}function Ze(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function et(e,t){e.g?e.g.add(t):e.h=t}function tt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function nt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return h(e.i)}function rt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(o(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(o(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(o(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}Qe.prototype.cancel=function(){if(this.i=nt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var it=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ot(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof ot){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,lt(this,e.s),this.l=e.l;var t=e.i,n=new wt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ct(this,n),this.m=e.m}else e&&(t=String(e).match(it))?(this.h=!1,st(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),lt(this,t[4]),this.l=ht(t[5]||"",!0),ct(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}function at(e){return new ot(e)}function st(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function lt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ct(e,t,n){t instanceof wt?(e.i=t,function(e,t){t&&!e.j&&(_t(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(Et(this,t),kt(this,n,e))},e)),e.j=t}(e.i,e.h)):(n||(t=ft(t,bt)),e.i=new wt(t,e.h))}function ut(e,t,n){e.i.set(t,n)}function dt(e){return ut(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ft(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,pt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function pt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ot.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ft(t,mt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ft(t,mt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ft(n,"/"==n.charAt(0)?vt:yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ft(n,xt)),e.join("")};var gt,mt=/[#\/\?@]/g,yt=/[#\?:]/g,vt=/[#\?]/g,bt=/[#\?@]/g,xt=/#/g;function wt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _t(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function Et(e,t){_t(e),t=Ct(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function St(e,t){return _t(e),t=Ct(e,t),e.g.has(t)}function kt(e,t,n){Et(e,t),0<n.length&&(e.i=null,e.g.set(Ct(e,t),h(n)),e.h+=n.length)}function Ct(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Tt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(Ly){}}function It(){this.g=new fe}function At(e,t,n){const r=n||"";try{rt(e,function(e,n){let i=e;a(e)&&(i=de(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Pt(e,t){ne.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Nt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Ot(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Dt(e)}function Dt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function jt(e){let t="";return v(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Lt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jt(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):ut(e,t,n))}function zt(e){ne.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=wt.prototype).add=function(e,t){_t(this),this.i=null,e=Ct(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){_t(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.na=function(){_t(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){_t(this);let t=[];if("string"===typeof e)St(this,e)&&(t=t.concat(this.g.get(Ct(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return _t(this),this.i=null,St(this,e=Ct(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=o;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},d(Rt,pe),Rt.prototype.g=function(){return new Pt(this.l,this.j)},Rt.prototype.i=(gt={},function(){return gt}),d(Pt,ne),(e=Pt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Dt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ot(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Dt(this)),this.g&&(this.readyState=3,Dt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ot(this):Dt(this),3==this.readyState&&Nt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Ot(this))},e.Qa=function(e){this.g&&(this.response=e,Ot(this))},e.ga=function(){this.g&&Ot(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Pt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(zt,ne);var Ft=/^https?$/i,Mt=["POST","PUT"];function Ut(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Vt(e),Bt(e)}function Vt(e){e.A||(e.A=!0,re(e,"complete"),re(e,"error"))}function $t(e){if(e.h&&"undefined"!=typeof r&&(!e.v[1]||4!=qt(e)||2!=e.Z()))if(e.u&&4==qt(e))oe(e.Ea,0,e);else if(re(e,"readystatechange"),4==qt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var o;if(o=0===r){var a=String(e.D).match(it)[1]||null;!a&&i.self&&i.self.location&&(a=i.self.location.protocol.slice(0,-1)),o=!Ft.test(a?a.toLowerCase():"")}n=o}if(n)re(e,"complete"),re(e,"success");else{e.m=6;try{var s=2<qt(e)?e.g.statusText:""}catch(zy){s=""}e.l=s+" ["+e.Z()+"]",Vt(e)}}finally{Bt(e)}}}function Bt(e,t){if(e.g){Ht(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||re(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Ht(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function qt(e){return e.g?e.g.readyState:0}function Wt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Gt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kt(e){this.Aa=0,this.i=[],this.j=new Ae,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gt("baseRetryDelayMs",5e3,e),this.cb=Gt("retryDelaySeedMs",1e4,e),this.Wa=Gt("forwardChannelMaxRetries",2,e),this.wa=Gt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Qe(e&&e.concurrentRequestLimit),this.Da=new It,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Yt(e){if(Xt(e),3==e.G){var t=e.U++,n=at(e.I);if(ut(n,"SID",e.K),ut(n,"RID",t),ut(n,"TYPE","terminate"),en(e,n),(t=new je(e,e.j,t)).L=2,t.v=dt(at(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=fn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),Be(t)}dn(e)}function Qt(e){e.g&&(on(e),e.g.cancel(),e.g=null)}function Xt(e){Qt(e),e.u&&(i.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.s&&("number"===typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Jt(e){if(!Xe(e.h)&&!e.s){e.s=!0;var t=e.Ga;T||R(),I||(T(),I=!0),A.add(t,e),e.B=0}}function Zt(e,t){var n;n=t?t.l:e.U++;const r=at(e.I);ut(r,"SID",e.K),ut(r,"RID",n),ut(r,"AID",e.T),en(e,r),e.m&&e.o&&Lt(r,e.m,e.o),n=new je(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),et(e.h,n),Me(n,r,t)}function en(e,t){e.H&&v(e.H,function(e,n){ut(t,n,e)}),e.l&&rt({},function(e,n){ut(t,n,e)})}function tn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const s=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{At(s,e,"req"+n+"_")}catch($y){r&&r(s)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;T||R(),I||(T(),I=!0),A.add(t,e),e.v=0}}function rn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ie(c(e.Fa,e),cn(e,e.v)),e.v++,!0)}function on(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function an(e){e.g=new je(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=at(e.qa);ut(t,"RID","rpc"),ut(t,"SID",e.K),ut(t,"AID",e.T),ut(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ut(t,"TO",e.ja),ut(t,"TYPE","xmlhttp"),en(e,t),e.m&&e.o&&Lt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=dt(at(t)),n.m=null,n.P=!0,Ue(n,e)}function sn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function ln(e,t){var n=null;if(e.g==t){sn(e),on(e),e.g=null;var r=2}else{if(!Ze(e.h,t))return;n=t.D,tt(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;re(r=_e(),new Te(r,n)),Jt(e)}else nn(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Je(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=Ie(c(e.Ga,e,t),cn(e,e.B)),e.B++,!0))}(e,t)||2==r&&rn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:un(e,5);break;case 4:un(e,10);break;case 3:un(e,6);break;default:un(e,2)}}function cn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function un(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;const t=!r;r=new ot(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),dt(r),t?function(e,t){const n=new Ae;if(i.Image){const r=new Image;r.onload=u(Tt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(Tt,n,"TestLoadImage: error",!1,t,r),r.onabort=u(Tt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(Tt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ae;const n=new AbortController,r=setTimeout(()=>{n.abort(),Tt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Tt(0,0,!0,t):Tt(0,0,!1,t)}).catch(()=>{clearTimeout(r),Tt(0,0,!1,t)})}(r.toString(),n)}else Ce(2);e.G=0,e.l&&e.l.sa(t),dn(e),Xt(e)}function dn(e){if(e.G=0,e.ka=[],e.l){const t=nt(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,h(e.i),e.i.length=0),e.l.ra()}}function hn(e,t,n){var r=n instanceof ot?at(n):new ot(n);if(""!=r.g)t&&(r.g=t+"."+r.g),lt(r,r.s);else{var o=i.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var a=new ot(null);r&&st(a,r),t&&(a.g=t),o&&lt(a,o),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&ut(r,n,t),ut(r,"VER",e.la),en(e,r),r}function fn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new zt(new Rt({eb:n})):new zt(e.pa)).Ha(e.J),t}function pn(){}function gn(){}function mn(e,t){ne.call(this),this.g=new Kt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new bn(this)}function yn(e){ve.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function vn(){be.call(this),this.status=1}function bn(e){this.g=e}(e=zt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pe.g(),this.v=this.o?ge(this.o):ge(Pe),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(Ly){return void Ut(this,Ly)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),o=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Mt,t,void 0))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ht(this),this.u=!0,this.g.send(e),this.u=!1}catch(Ly){Ut(this,Ly)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,re(this,"complete"),re(this,"abort"),Bt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bt(this,!0)),zt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?$t(this):this.bb())},e.bb=function(){$t(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch(gt){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(gt){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),he(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},(e=Kt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Ce(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=hn(this,null,this.W),Jt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new je(this,this.j,e);let o=this.o;if(this.S&&(o?(o=b(o),w(o,this.S)):o=this.S),null!==this.m||this.O||(i.H=o,o=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"===typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tn(this,i,t),ut(n=at(this.I),"RID",e),ut(n,"CVER",22),this.D&&ut(n,"X-HTTP-Session-Id",this.D),en(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(jt(o)))+"&"+t:this.m&&Lt(n,this.m,o)),et(this.h,i),this.Ua&&ut(n,"TYPE","init"),this.P?(ut(n,"$req",t),ut(n,"SID","null"),i.T=!0,Me(i,n,null)):Me(i,n,t),this.G=2}}else 3==this.G&&(e?Zt(this,e):0==this.i.length||Xe(this.h)||Zt(this))},e.Fa=function(){if(this.u=null,an(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ie(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),Qt(this),an(this))},e.Za=function(){null!=this.C&&(this.C=null,Qt(this),rn(this),Ce(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=pn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},gn.prototype.g=function(e,t){return new mn(e,t)},d(mn,ne),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Yt(this.g)},mn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=de(e),e=n);t.i.push(new Ye(t.Ya++,e)),3==t.G&&Jt(t)},mn.prototype.N=function(){this.g.l=null,delete this.j,Yt(this.g),delete this.g,mn.aa.N.call(this)},d(yn,ve),d(vn,be),d(bn,pn),bn.prototype.ua=function(){re(this.g,"a")},bn.prototype.ta=function(e){re(this.g,new yn(e))},bn.prototype.sa=function(e){re(this.g,new vn)},bn.prototype.ra=function(){re(this.g,"b")},gn.prototype.createWebChannel=gn.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Gi=Yi.createWebChannelTransport=function(){return new gn},Wi=Yi.getStatEventTarget=function(){return _e()},qi=Yi.Event=xe,Hi=Yi.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ne.NO_ERROR=0,Ne.TIMEOUT=8,Ne.HTTP_ERROR=6,Bi=Yi.ErrorCode=Ne,Oe.COMPLETE="complete",$i=Yi.EventType=Oe,me.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Vi=Yi.WebChannel=me,Yi.FetchXmlHttpFactory=Rt,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,Ui=Yi.XhrIo=zt}).apply("undefined"!==typeof Ki?Ki:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const Qi="@firebase/firestore",Xi="4.8.0";class Ji{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ji.UNAUTHENTICATED=new Ji(null),Ji.GOOGLE_CREDENTIALS=new Ji("google-credentials-uid"),Ji.FIRST_PARTY=new Ji("first-party-uid"),Ji.MOCK_USER=new Ji("mock-user");let Zi="11.10.0";const eo=new G("@firebase/firestore");function to(){return eo.logLevel}function no(e){if(eo.logLevel<=$.DEBUG){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(oo);eo.debug(`Firestore (${Zi}): ${e}`,...i)}}function ro(e){if(eo.logLevel<=$.ERROR){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(oo);eo.error(`Firestore (${Zi}): ${e}`,...i)}}function io(e){if(eo.logLevel<=$.WARN){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(oo);eo.warn(`Firestore (${Zi}): ${e}`,...i)}}function oo(e){if("string"==typeof e)return e;try{return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}function ao(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,so(e,r,n)}function so(e,t,n){let r=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw ro(r),new Error(r)}function lo(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||so(t,i,r)}function co(e,t){return e}const uo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ho extends k{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class fo{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}class po{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class go{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ji.UNAUTHENTICATED))}shutdown(){}}class mo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yo{constructor(e){this.t=e,this.currentUser=Ji.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){lo(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new fo;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fo,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{no("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(no("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fo)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(no("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(lo("string"==typeof t.accessToken,31837,{l:t}),new po(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lo(null===e||"string"==typeof e,2055,{h:e}),new Ji(e)}}class vo{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ji.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bo{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new vo(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ji.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wo{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ke(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){lo(void 0===this.o,3512);const n=e=>{null!=e.error&&no("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,no("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{no("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):no("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xo(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(lo("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new xo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function _o(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}function Eo(){return new TextEncoder}class So{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=_o(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function ko(e,t){return e<t?-1:e>t?1:0}function Co(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return ko(r,i);{const o=Eo(),a=Io(o.encode(To(e,n)),o.encode(To(t,n)));return 0!==a?a:ko(r,i)}}n+=r>65535?2:1}return ko(e.length,t.length)}function To(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function Io(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return ko(e[n],t[n]);return ko(e.length,t.length)}function Ao(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}const Ro="__name__";class Po{constructor(e,t,n){void 0===t?t=0:t>e.length&&ao(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&ao(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Po.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Po.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return ko(e.length,t.length)}static compareSegments(e,t){const n=Po.isNumericId(e),r=Po.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Po.extractNumericId(e).compare(Po.extractNumericId(t)):Co(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Li.fromString(e.substring(4,e.length-2))}}class No extends Po{construct(e,t,n){return new No(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(){const e=[];for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n){if(i.indexOf("//")>=0)throw new ho(uo.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(e=>e.length>0))}return new No(e)}static emptyPath(){return new No([])}}const Oo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Do extends Po{construct(e,t,n){return new Do(e,t,n)}static isValidIdentifier(e){return Oo.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Do.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Ro}static keyField(){return new Do([Ro])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ho(uo.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ho(uo.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ho(uo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new ho(uo.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Do(t)}static emptyPath(){return new Do([])}}class jo{constructor(e){this.path=e}static fromPath(e){return new jo(No.fromString(e))}static fromName(e){return new jo(No.fromString(e).popFirst(5))}static empty(){return new jo(No.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===No.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return No.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new jo(new No(e.slice()))}}function Lo(e,t,n){if(!n)throw new ho(uo.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function zo(e){if(!jo.isDocumentKey(e))throw new ho(uo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Fo(e){if(jo.isDocumentKey(e))throw new ho(uo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Mo(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Uo(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ao(12329,{type:typeof e})}function Vo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ho(uo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uo(e);throw new ho(uo.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function $o(e,t){const n={typeString:e};return t&&(n.value=t),n}function Bo(e,t){if(!Mo(e))throw new ho(uo.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==o&&a!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new ho(uo.INVALID_ARGUMENT,n);return!0}const Ho=-62135596800,qo=1e6;class Wo{static now(){return Wo.fromMillis(Date.now())}static fromDate(e){return Wo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*qo);return new Wo(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ho(uo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ho(uo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ho)throw new ho(uo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ho(uo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qo}_compareTo(e){return this.seconds===e.seconds?ko(this.nanoseconds,e.nanoseconds):ko(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Wo._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Bo(e,Wo._jsonSchema))return new Wo(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ho;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Wo._jsonSchemaVersion="firestore/timestamp/1.0",Wo._jsonSchema={type:$o("string",Wo._jsonSchemaVersion),seconds:$o("number"),nanoseconds:$o("number")};class Go{static fromTimestamp(e){return new Go(e)}static min(){return new Go(new Wo(0,0))}static max(){return new Go(new Wo(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}const Ko=-1;class Yo{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Yo.UNKNOWN_ID=-1;function Qo(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Go.fromTimestamp(1e9===r?new Wo(n+1,0):new Wo(n,r));return new Jo(i,jo.empty(),t)}function Xo(e){return new Jo(e.readTime,e.key,Ko)}class Jo{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Jo(Go.min(),jo.empty(),Ko)}static max(){return new Jo(Go.max(),jo.empty(),Ko)}}function Zo(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=jo.comparator(e.documentKey,t.documentKey),0!==n?n:ko(e.largestBatchId,t.largestBatchId))}const ea="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ta{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}async function na(e){if(e.code!==uo.FAILED_PRECONDITION||e.message!==ea)throw e;no("LocalStore","Unexpectedly lost primary lease")}class ra{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ao(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ra((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ra?t:ra.resolve(t)}catch(e){return ra.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ra.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ra.reject(t)}static resolve(e){return new ra((t,n)=>{t(e)})}static reject(e){return new ra((t,n)=>{n(e)})}static waitFor(e){return new ra((t,n)=>{let r=0,i=0,o=!1;e.forEach(e=>{++r,e.next(()=>{++i,o&&i===r&&t()},e=>n(e))}),o=!0,i===r&&t()})}static or(e){let t=ra.resolve(!1);for(const n of e)t=t.next(e=>e?ra.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ra((n,r)=>{const i=e.length,o=new Array(i);let a=0;for(let s=0;s<i;s++){const l=s;t(e[l]).next(e=>{o[l]=e,++a,a===i&&n(o)},e=>r(e))}})}static doWhile(e,t){return new ra((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function ia(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oa(e){return"IndexedDbTransactionError"===e.name}class aa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this._e(e),this.ae=e=>t.writeSequenceNumber(e))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}aa.ue=-1;const sa=-1;function la(e){return null==e}function ca(e){return 0===e&&1/e==-1/0}function ua(e){return"number"==typeof e&&Number.isInteger(e)&&!ca(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}const da="\x01";function ha(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=pa(t)),t=fa(e.get(n),t);return pa(t)}function fa(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="\x01\x10";break;case da:n+="\x01\x11";break;default:n+=t}}return n}function pa(e){return e+da+"\x01"}const ga="remoteDocuments",ma="owner",ya="mutationQueues",va="mutations";const ba="documentMutations",xa="remoteDocumentsV14",wa="remoteDocumentGlobal",_a="targets",Ea="targetDocuments",Sa="targetGlobal",ka="collectionParents",Ca="clientMetadata",Ta="bundles",Ia="namedQueries",Aa="indexConfiguration",Ra="indexState",Pa="indexEntries",Na="documentOverlays",Oa="globals",Da=[ya,va,ba,ga,_a,ma,Sa,Ea,Ca,wa,ka,Ta,Ia],ja=[ya,va,ba,xa,_a,ma,Sa,Ea,Ca,wa,ka,Ta,Ia,Na],La=ja,za=[...La,Aa,Ra,Pa];function Fa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ma(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ua(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}class Va{constructor(e,t){this.comparator=e,this.root=t||Ba.EMPTY}insert(e,t){return new Va(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ba.BLACK,null,null))}remove(e){return new Va(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ba.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ba{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ba.RED,this.left=null!=r?r:Ba.EMPTY,this.right=null!=i?i:Ba.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ba(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ba.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ba.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ba.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ba.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ao(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ao(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ao(27949);return e+(this.isRed()?0:1)}}Ba.EMPTY=null,Ba.RED=!0,Ba.BLACK=!1,Ba.EMPTY=new class{constructor(){this.size=0}get key(){throw ao(57766)}get value(){throw ao(16141)}get color(){throw ao(16727)}get left(){throw ao(29726)}get right(){throw ao(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ba(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};class Ha{constructor(e){this.comparator=e,this.data=new Va(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qa(this.data.getIterator())}getIteratorFrom(e){return new qa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ha))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ha(this.comparator);return t.data=e,t}}class qa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class Wa{constructor(e){this.fields=e,e.sort(Do.comparator)}static empty(){return new Wa([])}unionWith(e){let t=new Ha(Do.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Wa(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,(e,t)=>e.isEqual(t))}}class Ga extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class Ka{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ga("Invalid base64 string: "+e):e}}(e);return new Ka(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ka(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ko(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ka.EMPTY_BYTE_STRING=new Ka("");const Ya=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qa(e){if(lo(!!e,39018),"string"==typeof e){let t=0;const n=Ya.exec(e);if(lo(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Xa(e.seconds),nanos:Xa(e.nanos)}}function Xa(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ja(e){return"string"==typeof e?Ka.fromBase64String(e):Ka.fromUint8Array(e)}const Za="server_timestamp",es="__type__",ts="__previous_value__",ns="__local_write_time__";function rs(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[es])||void 0===n?void 0:n.stringValue)===Za}function is(e){const t=e.mapValue.fields[ts];return rs(t)?is(t):t}function os(e){const t=Qa(e.mapValue.fields[ns].timestampValue);return new Wo(t.seconds,t.nanos)}class as{constructor(e,t,n,r,i,o,a,s,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=s,this.useFetchStreams=l,this.isUsingEmulator=c}}const ss="(default)";class ls{constructor(e,t){this.projectId=e,this.database=t||ss}static empty(){return new ls("","")}get isDefaultDatabase(){return this.database===ss}isEqual(e){return e instanceof ls&&e.projectId===this.projectId&&e.database===this.database}}const cs="__type__",us="__max__",ds={mapValue:{fields:{__type__:{stringValue:us}}}},hs="__vector__",fs="value";function ps(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rs(e)?4:Ps(e)?9007199254740991:As(e)?10:11:ao(28295,{value:e})}function gs(e,t){if(e===t)return!0;const n=ps(e);if(n!==ps(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return os(e).isEqual(os(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Qa(e.timestampValue),r=Qa(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ja(e.bytesValue).isEqual(Ja(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Xa(e.geoPointValue.latitude)===Xa(t.geoPointValue.latitude)&&Xa(e.geoPointValue.longitude)===Xa(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Xa(e.integerValue)===Xa(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Xa(e.doubleValue),r=Xa(t.doubleValue);return n===r?ca(n)===ca(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ao(e.arrayValue.values||[],t.arrayValue.values||[],gs);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Fa(n)!==Fa(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!gs(n[i],r[i])))return!1;return!0}(e,t);default:return ao(52216,{left:e})}}function ms(e,t){return void 0!==(e.values||[]).find(e=>gs(e,t))}function ys(e,t){if(e===t)return 0;const n=ps(e),r=ps(t);if(n!==r)return ko(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ko(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Xa(e.integerValue||e.doubleValue),r=Xa(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return vs(e.timestampValue,t.timestampValue);case 4:return vs(os(e),os(t));case 5:return Co(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ja(e),r=Ja(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=ko(n[i],r[i]);if(0!==e)return e}return ko(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ko(Xa(e.latitude),Xa(t.latitude));return 0!==n?n:ko(Xa(e.longitude),Xa(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return bs(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,o;const a=e.fields||{},s=t.fields||{},l=null===(n=a[fs])||void 0===n?void 0:n.arrayValue,c=null===(r=s[fs])||void 0===r?void 0:r.arrayValue,u=ko((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(o=null==c?void 0:c.values)||void 0===o?void 0:o.length)||0);return 0!==u?u:bs(l,c)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ds.mapValue&&t===ds.mapValue)return 0;if(e===ds.mapValue)return 1;if(t===ds.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let a=0;a<r.length&&a<o.length;++a){const e=Co(r[a],o[a]);if(0!==e)return e;const t=ys(n[r[a]],i[o[a]]);if(0!==t)return t}return ko(r.length,o.length)}(e.mapValue,t.mapValue);default:throw ao(23264,{le:n})}}function vs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ko(e,t);const n=Qa(e),r=Qa(t),i=ko(n.seconds,r.seconds);return 0!==i?i:ko(n.nanos,r.nanos)}function bs(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ys(n[i],r[i]);if(e)return e}return ko(n.length,r.length)}function xs(e){return ws(e)}function ws(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Qa(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Ja(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return jo.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ws(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ws(e.fields[i])}`;return n+"}"}(e.mapValue):ao(61005,{value:e})}function _s(e){switch(ps(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=is(e);return t?16+_s(t):16;case 5:return 2*e.stringValue.length;case 6:return Ja(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+_s(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return Ma(e.fields,(e,n)=>{t+=e.length+_s(n)}),t}(e.mapValue);default:throw ao(13486,{value:e})}}function Es(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ss(e){return!!e&&"integerValue"in e}function ks(e){return!!e&&"arrayValue"in e}function Cs(e){return!!e&&"nullValue"in e}function Ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Is(e){return!!e&&"mapValue"in e}function As(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[cs])||void 0===n?void 0:n.stringValue)===hs}function Rs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ma(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Rs(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Rs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ps(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===us}class Ns{constructor(e){this.value=e}static empty(){return new Ns({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(t)}setAll(e){let t=Do.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Rs(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gs(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Is(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ma(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Ns(Rs(this.value))}}class Os{constructor(e,t,n,r,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Os(e,0,Go.min(),Go.min(),Go.min(),Ns.empty(),0)}static newFoundDocument(e,t,n,r){return new Os(e,1,t,Go.min(),n,r,0)}static newNoDocument(e,t){return new Os(e,2,t,Go.min(),Go.min(),Ns.empty(),0)}static newUnknownDocument(e,t){return new Os(e,3,t,Go.min(),Go.min(),Ns.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Go.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ns.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ns.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Go.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Os&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Os(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Ds{constructor(e,t){this.position=e,this.inclusive=t}}function js(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],a=e.position[i];if(r=o.field.isKeyField()?jo.comparator(jo.fromName(a.referenceValue),n.key):ys(a,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Ls(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gs(e.position[n],t.position[n]))return!1;return!0}class zs{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";this.field=e,this.dir=t}}function Fs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}class Ms{}class Us extends Ms{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ks(e,t,n):"array-contains"===t?new Js(e,n):"in"===t?new Zs(e,n):"not-in"===t?new el(e,n):"array-contains-any"===t?new tl(e,n):new Us(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ys(e,n):new Qs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(ys(t,this.value)):null!==t&&ps(this.value)===ps(t)&&this.matchesComparison(ys(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ao(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vs extends Ms{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Vs(e,t)}matches(e){return $s(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.he||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function $s(e){return"and"===e.op}function Bs(e){return Hs(e)&&$s(e)}function Hs(e){for(const t of e.filters)if(t instanceof Vs)return!1;return!0}function qs(e){if(e instanceof Us)return e.field.canonicalString()+e.op.toString()+xs(e.value);if(Bs(e))return e.filters.map(e=>qs(e)).join(",");{const t=e.filters.map(e=>qs(e)).join(",");return`${e.op}(${t})`}}function Ws(e,t){return e instanceof Us?function(e,t){return t instanceof Us&&e.op===t.op&&e.field.isEqual(t.field)&&gs(e.value,t.value)}(e,t):e instanceof Vs?function(e,t){return t instanceof Vs&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Ws(n,t.filters[r]),!0)}(e,t):void ao(19439)}function Gs(e){return e instanceof Us?function(e){return`${e.field.canonicalString()} ${e.op} ${xs(e.value)}`}(e):e instanceof Vs?function(e){return e.op.toString()+" {"+e.getFilters().map(Gs).join(" ,")+"}"}(e):"Filter"}class Ks extends Us{constructor(e,t,n){super(e,t,n),this.key=jo.fromName(n.referenceValue)}matches(e){const t=jo.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ys extends Us{constructor(e,t){super(e,"in",t),this.keys=Xs("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qs extends Us{constructor(e,t){super(e,"not-in",t),this.keys=Xs("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>jo.fromName(e.referenceValue))}class Js extends Us{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ks(t)&&ms(t.arrayValue,this.value)}}class Zs extends Us{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ms(this.value.arrayValue,t)}}class el extends Us{constructor(e,t){super(e,"not-in",t)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!ms(this.value.arrayValue,t)}}class tl extends Us{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ks(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ms(this.value.arrayValue,e))}}class nl{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Pe=null}}function rl(e){return new nl(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,arguments.length>6&&void 0!==arguments[6]?arguments[6]:null)}function il(e){const t=co(e);if(null===t.Pe){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>qs(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),la(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>xs(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>xs(e)).join(",")),t.Pe=e}return t.Pe}function ol(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Fs(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ws(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ls(e.startAt,t.startAt)&&Ls(e.endAt,t.endAt)}function al(e){return jo.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class sl{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=s,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ll(e,t,n,r,i,o,a,s){return new sl(e,t,n,r,i,o,a,s)}function cl(e){return new sl(e)}function ul(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function dl(e){return null!==e.collectionGroup}function hl(e){const t=co(e);if(null===t.Te){t.Te=[];const e=new Set;for(const i of t.explicitOrderBy)t.Te.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Ha(Do.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new zs(r,n))}),e.has(Do.keyField().canonicalString())||t.Te.push(new zs(Do.keyField(),n))}return t.Te}function fl(e){const t=co(e);return t.Ie||(t.Ie=pl(t,hl(e))),t.Ie}function pl(e,t){if("F"===e.limitType)return rl(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new zs(e.field,t)});const n=e.endAt?new Ds(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ds(e.startAt.position,e.startAt.inclusive):null;return rl(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function gl(e,t){const n=e.filters.concat([t]);return new sl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ml(e,t,n){return new sl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yl(e,t){return ol(fl(e),fl(t))&&e.limitType===t.limitType}function vl(e){return`${il(fl(e))}|lt:${e.limitType}`}function bl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Gs(e)).join(", ")}]`),la(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>xs(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>xs(e)).join(",")),`Target(${t})`}(fl(e))}; limitType=${e.limitType})`}function xl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):jo.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of hl(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=js(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,hl(e),t))&&!(e.endAt&&!function(e,t,n){const r=js(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,hl(e),t))}(e,t)}function wl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function _l(e){return(t,n)=>{let r=!1;for(const i of hl(e)){const e=El(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function El(e,t,n){const r=e.field.isKeyField()?jo.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ys(r,i):ao(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ao(19790,{direction:e.dir})}}class Sl{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ma(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return Ua(this.inner)}size(){return this.innerSize}}const kl=new Va(jo.comparator);function Cl(){return kl}const Tl=new Va(jo.comparator);function Il(){let e=Tl;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n)e=e.insert(i.key,i);return e}function Al(e){let t=Tl;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Rl(){return Nl()}function Pl(){return Nl()}function Nl(){return new Sl(e=>e.toString(),(e,t)=>e.isEqual(t))}new Va(jo.comparator);const Ol=new Ha(jo.comparator);function Dl(){let e=Ol;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n)e=e.add(i);return e}const jl=new Ha(ko);function Ll(){return jl}function zl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(t)?"-0":t}}function Fl(e){return{integerValue:""+e}}function Ml(e,t){return ua(t)?Fl(t):zl(e,t)}class Ul{constructor(){this._=void 0}}function Vl(e,t,n){return e instanceof Hl?function(e,t){const n={fields:{[es]:{stringValue:Za},[ns]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&rs(t)&&(t=is(t)),t&&(n.fields[ts]=t),{mapValue:n}}(n,t):e instanceof ql?Wl(e,t):e instanceof Gl?Kl(e,t):function(e,t){const n=Bl(e,t),r=Ql(n)+Ql(e.Ee);return Ss(n)&&Ss(e.Ee)?Fl(r):zl(e.serializer,r)}(e,t)}function $l(e,t,n){return e instanceof ql?Wl(e,t):e instanceof Gl?Kl(e,t):n}function Bl(e,t){return e instanceof Yl?function(e){return Ss(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Hl extends Ul{}class ql extends Ul{constructor(e){super(),this.elements=e}}function Wl(e,t){const n=Xl(t);for(const r of e.elements)n.some(e=>gs(e,r))||n.push(r);return{arrayValue:{values:n}}}class Gl extends Ul{constructor(e){super(),this.elements=e}}function Kl(e,t){let n=Xl(t);for(const r of e.elements)n=n.filter(e=>!gs(e,r));return{arrayValue:{values:n}}}class Yl extends Ul{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Ql(e){return Xa(e.integerValue||e.doubleValue)}function Xl(e){return ks(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Jl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jl}static exists(e){return new Jl(void 0,e)}static updateTime(e){return new Jl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ec{}function tc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new uc(e.key,Jl.none()):new oc(e.key,e.data,Jl.none());{const n=e.data,r=Ns.empty();let i=new Ha(Do.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ac(e.key,r,new Wa(i.toArray()),Jl.none())}}function nc(e,t,n){e instanceof oc?function(e,t,n){const r=e.value.clone(),i=lc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ac?function(e,t,n){if(!Zl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=lc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(sc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function rc(e,t,n,r){return e instanceof oc?function(e,t,n,r){if(!Zl(e.precondition,t))return n;const i=e.value.clone(),o=cc(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ac?function(e,t,n,r){if(!Zl(e.precondition,t))return n;const i=cc(e.fieldTransforms,r,t),o=t.data;return o.setAll(sc(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return Zl(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ic(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ao(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ql&&t instanceof ql||e instanceof Gl&&t instanceof Gl?Ao(e.elements,t.elements,gs):e instanceof Yl&&t instanceof Yl?gs(e.Ee,t.Ee):e instanceof Hl&&t instanceof Hl}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class oc extends ec{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ac extends ec{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function lc(e,t,n){const r=new Map;lo(e.length===n.length,32656,{Ae:n.length,Re:e.length});for(let i=0;i<n.length;i++){const o=e[i],a=o.transform,s=t.data.field(o.field);r.set(o.field,$l(a,s,n[i]))}return r}function cc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,Vl(e,o,t))}return r}class uc extends ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&nc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=rc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=rc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Pl();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const s=tc(o,a);null!==s&&n.set(r.key,s),o.isValidDocument()||o.convertToNoDocument(Go.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Dl())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,(e,t)=>ic(e,t))&&Ao(this.baseMutations,e.baseMutations,(e,t)=>ic(e,t))}}class hc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}class fc{constructor(e,t){this.count=e,this.unchangedNames=t}}var pc,gc;function mc(e){if(void 0===e)return ro("GRPC error has no .code"),uo.UNKNOWN;switch(e){case pc.OK:return uo.OK;case pc.CANCELLED:return uo.CANCELLED;case pc.UNKNOWN:return uo.UNKNOWN;case pc.DEADLINE_EXCEEDED:return uo.DEADLINE_EXCEEDED;case pc.RESOURCE_EXHAUSTED:return uo.RESOURCE_EXHAUSTED;case pc.INTERNAL:return uo.INTERNAL;case pc.UNAVAILABLE:return uo.UNAVAILABLE;case pc.UNAUTHENTICATED:return uo.UNAUTHENTICATED;case pc.INVALID_ARGUMENT:return uo.INVALID_ARGUMENT;case pc.NOT_FOUND:return uo.NOT_FOUND;case pc.ALREADY_EXISTS:return uo.ALREADY_EXISTS;case pc.PERMISSION_DENIED:return uo.PERMISSION_DENIED;case pc.FAILED_PRECONDITION:return uo.FAILED_PRECONDITION;case pc.ABORTED:return uo.ABORTED;case pc.OUT_OF_RANGE:return uo.OUT_OF_RANGE;case pc.UNIMPLEMENTED:return uo.UNIMPLEMENTED;case pc.DATA_LOSS:return uo.DATA_LOSS;default:return ao(39323,{code:e})}}(gc=pc||(pc={}))[gc.OK=0]="OK",gc[gc.CANCELLED=1]="CANCELLED",gc[gc.UNKNOWN=2]="UNKNOWN",gc[gc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gc[gc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gc[gc.NOT_FOUND=5]="NOT_FOUND",gc[gc.ALREADY_EXISTS=6]="ALREADY_EXISTS",gc[gc.PERMISSION_DENIED=7]="PERMISSION_DENIED",gc[gc.UNAUTHENTICATED=16]="UNAUTHENTICATED",gc[gc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gc[gc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gc[gc.ABORTED=10]="ABORTED",gc[gc.OUT_OF_RANGE=11]="OUT_OF_RANGE",gc[gc.UNIMPLEMENTED=12]="UNIMPLEMENTED",gc[gc.INTERNAL=13]="INTERNAL",gc[gc.UNAVAILABLE=14]="UNAVAILABLE",gc[gc.DATA_LOSS=15]="DATA_LOSS";let yc=null;const vc=new Li([4294967295,4294967295],0);function bc(e){const t=Eo().encode(e),n=new zi;return n.update(t),new Uint8Array(n.digest())}function xc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Li([n,r],0),new Li([i,o],0)]}class wc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new _c(`Invalid padding: ${t}`);if(n<0)throw new _c(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new _c(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new _c(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Li.fromNumber(this.fe)}pe(e,t,n){let r=e.add(t.multiply(Li.fromNumber(n)));return 1===r.compare(vc)&&(r=new Li([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.fe)return!1;const t=bc(e),[n,r]=xc(t);for(let i=0;i<this.hashCount;i++){const e=this.pe(n,r,i);if(!this.ye(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wc(i,r,t);return n.forEach(e=>o.insert(e)),o}insert(e){if(0===this.fe)return;const t=bc(e),[n,r]=xc(t);for(let i=0;i<this.hashCount;i++){const e=this.pe(n,r,i);this.we(e)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class _c extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class Ec{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Sc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ec(Go.min(),r,new Va(ko),Cl(),Dl())}}class Sc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Sc(n,t,Dl(),Dl(),Dl())}}class kc{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=r}}class Cc{constructor(e,t){this.targetId=e,this.De=t}}class Tc{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ka.EMPTY_BYTE_STRING,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ic{constructor(){this.ve=0,this.Ce=Pc(),this.Fe=Ka.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return 0!==this.ve}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Dl(),t=Dl(),n=Dl();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ao(38017,{changeType:i})}}),new Sc(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Pc()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,lo(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Ac{constructor(e){this.We=e,this.Ge=new Map,this.ze=Cl(),this.je=Rc(),this.Je=Rc(),this.He=new Va(ko)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:ao(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){const t=e.targetId,n=e.De.count,r=this.st(t);if(r){const i=r.target;if(al(i))if(0===n){const e=new jo(i.path);this.Xe(t,e,Os.newNoDocument(e,Go.min()))}else lo(1===n,20013,{expectedCount:n});else{const r=this.ot(t);if(r!==n){const n=this._t(e),i=n?this.ut(n,e,r):1;if(0!==i){this.rt(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,e)}null==yc||yc.ct(function(e,t,n,r,i){var o,a,s,l,c,u;const d={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},h=t.unchangedNames;return h&&(d.bloomFilter={applied:0===i,hashCount:null!==(o=null==h?void 0:h.hashCount)&&void 0!==o?o:0,bitmapLength:null!==(l=null===(s=null===(a=null==h?void 0:h.bits)||void 0===a?void 0:a.bitmap)||void 0===s?void 0:s.length)&&void 0!==l?l:0,padding:null!==(u=null===(c=null==h?void 0:h.bits)||void 0===c?void 0:c.padding)&&void 0!==u?u:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),d}(r,e.De,this.We.lt(),n,i))}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=Ja(n).toUint8Array()}catch(e){if(e instanceof Ga)return io("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{a=new wc(o,r,i)}catch(e){return io(e instanceof _c?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===a.fe?null:a}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.We.lt(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(o)||(this.Xe(t,n,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((n,r)=>{const i=this.st(r);if(i){if(n.current&&al(i.target)){const t=new jo(i.target.path);this.Tt(t).has(r)||this.It(r,t)||this.Xe(r,t,Os.newNoDocument(t,e))}n.Ne&&(t.set(r,n.Le()),n.ke())}});let n=Dl();this.Je.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ze.forEach((t,n)=>n.setReadTime(e));const r=new Ec(e,t,this.He,this.ze,n);return this.ze=Cl(),this.je=Rc(),this.Je=Rc(),this.He=new Va(ko),r}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ic,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ha(ko),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ha(ko),this.je=this.je.insert(e,t)),t}nt(e){const t=null!==this.st(e);return t||no("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ic),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Rc(){return new Va(jo.comparator)}function Pc(){return new Va(jo.comparator)}const Nc={asc:"ASCENDING",desc:"DESCENDING"},Oc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dc={and:"AND",or:"OR"};class jc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lc(e,t){return e.useProto3Json||la(t)?t:{value:t}}function zc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Mc(e){return lo(!!e,49232),Go.fromTimestamp(function(e){const t=Qa(e);return new Wo(t.seconds,t.nanos)}(e))}function Uc(e,t){return Vc(e,t).canonicalString()}function Vc(e,t){const n=function(e){return new No(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function $c(e){const t=No.fromString(e);return lo(iu(t),10190,{key:t.toString()}),t}function Bc(e,t){const n=$c(t);if(n.get(1)!==e.databaseId.projectId)throw new ho(uo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ho(uo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new jo(Gc(n))}function Hc(e,t){return Uc(e.databaseId,t)}function qc(e){const t=$c(e);return 4===t.length?No.emptyPath():Gc(t)}function Wc(e){return new No(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Gc(e){return lo(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Kc(e,t){return{documents:[Hc(e,t.path)]}}function Yc(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Hc(e,i);const o=function(e){if(0!==e.length)return ru(Vs.create(e,"and"))}(t.filters);o&&(n.structuredQuery.where=o);const a=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:tu(e.field),direction:Jc(e.dir)}}(e))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const s=Lc(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{Vt:n,parent:i}}function Qc(e){let t=qc(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lo(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=Xc(e);return t instanceof Vs&&Bs(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=function(e){return e.map(e=>function(e){return new zs(nu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let s=null;n.limit&&(s=function(e){let t;return t="object"==typeof e?e.value:e,la(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Ds(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Ds(n,t)}(n.endAt)),ll(t,i,a,o,s,"F",l,c)}function Xc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=nu(e.unaryFilter.field);return Us.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=nu(e.unaryFilter.field);return Us.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=nu(e.unaryFilter.field);return Us.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=nu(e.unaryFilter.field);return Us.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ao(61313);default:return ao(60726)}}(e):void 0!==e.fieldFilter?function(e){return Us.create(nu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ao(58110);default:return ao(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Vs.create(e.compositeFilter.filters.map(e=>Xc(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ao(1026)}}(e.compositeFilter.op))}(e):ao(30097,{filter:e})}function Jc(e){return Nc[e]}function Zc(e){return Oc[e]}function eu(e){return Dc[e]}function tu(e){return{fieldPath:e.canonicalString()}}function nu(e){return Do.fromServerFormat(e.fieldPath)}function ru(e){return e instanceof Us?function(e){if("=="===e.op){if(Ts(e.value))return{unaryFilter:{field:tu(e.field),op:"IS_NAN"}};if(Cs(e.value))return{unaryFilter:{field:tu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ts(e.value))return{unaryFilter:{field:tu(e.field),op:"IS_NOT_NAN"}};if(Cs(e.value))return{unaryFilter:{field:tu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tu(e.field),op:Zc(e.op),value:e.value}}}(e):e instanceof Vs?function(e){const t=e.getFilters().map(e=>ru(e));return 1===t.length?t[0]:{compositeFilter:{op:eu(e.op),filters:t}}}(e):ao(54877,{filter:e})}function iu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}class ou{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Go.min(),o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Go.min(),a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:Ka.EMPTY_BYTE_STRING,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=s}withSequenceNumber(e){return new ou(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ou(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ou(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ou(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class au{constructor(e){this.gt=e}}function su(e){const t=Qc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ml(t,t.limit,"L"):t}class lu{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(Xa(e.integerValue));else if("doubleValue"in e){const n=Xa(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),ca(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),"string"==typeof n&&(n=Qa(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Ja(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?Ps(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):As(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):ao(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const r of Object.keys(n))this.xt(r,t),this.Dt(n[r],t)}Lt(e,t){var n,r;const i=e.fields||{};this.Ct(t,53);const o=fs,a=(null===(r=null===(n=i[o].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Ct(t,15),t.Ft(Xa(a)),this.xt(o,t),this.Dt(i[o],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const r of n)this.Dt(r,t)}Bt(e,t){this.Ct(t,37),jo.fromName(e).path.forEach(e=>{this.Ct(t,60),this.$t(e,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}lu.Ut=new lu;class cu{constructor(){this.Dn=new uu}addToCollectionParentIndex(e,t){return this.Dn.add(t),ra.resolve()}getCollectionParents(e,t){return ra.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return ra.resolve()}deleteFieldIndex(e,t){return ra.resolve()}deleteAllFieldIndexes(e){return ra.resolve()}createTargetIndexes(e,t){return ra.resolve()}getDocumentsMatchingTarget(e,t){return ra.resolve(null)}getIndexType(e,t){return ra.resolve(0)}getFieldIndexes(e,t){return ra.resolve([])}getNextCollectionGroupToUpdate(e){return ra.resolve(null)}getMinOffset(e,t){return ra.resolve(Jo.min())}getMinOffsetFromCollectionGroup(e,t){return ra.resolve(Jo.min())}updateCollectionGroup(e,t,n){return ra.resolve()}updateIndexEntries(e,t){return ra.resolve()}}class uu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ha(No.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ha(No.comparator)).toArray()}}new Uint8Array(0);const du={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hu=41943040;class fu{static withCacheSize(e){return new fu(e,fu.DEFAULT_COLLECTION_PERCENTILE,fu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}fu.DEFAULT_COLLECTION_PERCENTILE=10,fu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fu.DEFAULT=new fu(hu,fu.DEFAULT_COLLECTION_PERCENTILE,fu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fu.DISABLED=new fu(-1,0,0);class pu{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new pu(0)}static ur(){return new pu(-1)}}const gu="LruGarbageCollector",mu=1048576;function yu(e,t){let[n,r]=e,[i,o]=t;const a=ko(n,i);return 0===a?ko(r,o):a}class vu{constructor(e){this.Tr=e,this.buffer=new Ha(yu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();yu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bu{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return null!==this.Ar}Rr(e){no(gu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){oa(e)?no(gu,"Ignoring IndexedDB error during garbage collection: ",e):await na(e)}await this.Rr(3e5)})}}class xu{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ra.resolve(aa.ue);const n=new vu(t);return this.Vr.forEachTarget(e,e=>n.Er(e.sequenceNumber)).next(()=>this.Vr.gr(e,e=>n.Er(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(no("LruGarbageCollector","Garbage collection skipped; disabled"),ra.resolve(du)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(no("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),du):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,r,i,o,a,s,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(no("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,s=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),to()<=$.DEBUG&&no("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-c}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(s-a)+"ms\n"+`\tRemoved ${e} documents in `+(l-s)+"ms\n"+`Total Duration: ${l-c}ms`),ra.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function wu(e,t){return new xu(e,t)}class _u{constructor(){this.changes=new Sl(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Os.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ra.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class Eu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class Su{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&rc(n.mutation,e,Wa.empty(),Wo.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Dl()).next(()=>t))}getLocalViewOfDocuments(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Dl();const r=Rl();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Il();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Rl();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Dl()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Cl();const o=Nl(),a=Nl();return t.forEach((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof ac)?i=i.insert(t.key,t):void 0!==a?(o.set(t.key,a.mutation.getFieldMask()),rc(a.mutation,t,a.mutation.getFieldMask(),Wo.now())):o.set(t.key,Wa.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>o.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new Eu(t,null!==(n=o.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){const n=Nl();let r=new Va((e,t)=>e-t),i=Dl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const o=t.get(e);if(null===o)return;let a=n.get(e)||Wa.empty();a=i.applyToLocalView(o,a),n.set(e,a);const s=(r.get(i.batchId)||Dl()).add(e);r=r.insert(i.batchId,s)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),s=r.key,l=r.value,c=Pl();l.forEach(e=>{if(!i.has(e)){const r=tc(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),o.push(this.documentOverlayCache.saveOverlays(e,s,c))}return ra.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return jo.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ra.resolve(Rl());let a=Ko,s=i;return o.next(t=>ra.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?ra.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{s=s.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,s,t,Dl())).next(e=>({batchId:a,changes:Al(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new jo(t)).next(e=>{let t=Il();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=Il();return this.indexManager.getCollectionParents(e,i).next(a=>ra.forEach(a,a=>{const s=function(e,t){return new sl(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,s,n,r).next(e=>{e.forEach((e,t)=>{o=o.insert(e,t)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Os.newInvalidDocument(r)))});let n=Il();return e.forEach((e,r)=>{const o=i.get(e);void 0!==o&&rc(o.mutation,r,Wa.empty(),Wo.now()),xl(t,r)&&(n=n.insert(e,r))}),n})}}class ku{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return ra.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Mc(e.createTime)}}(t)),ra.resolve()}getNamedQuery(e,t){return ra.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(e){return{name:e.name,query:su(e.bundledQuery),readTime:Mc(e.readTime)}}(t)),ra.resolve()}}class Cu{constructor(){this.overlays=new Va(jo.comparator),this.kr=new Map}getOverlay(e,t){return ra.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Rl();return ra.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),ra.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.kr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.kr.delete(n)),ra.resolve()}getOverlaysForCollection(e,t,n){const r=Rl(),i=t.length+1,o=new jo(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const e=a.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ra.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Va((e,t)=>e-t);const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Rl(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Rl(),s=i.getIterator();for(;s.hasNext()&&(s.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return ra.resolve(a)}wt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.kr.get(r.largestBatchId).delete(n.key);this.kr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new hc(t,n));let i=this.kr.get(t);void 0===i&&(i=Dl(),this.kr.set(t,i)),this.kr.set(t,i.add(n.key))}}class Tu{constructor(){this.sessionToken=Ka.EMPTY_BYTE_STRING}getSessionToken(e){return ra.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ra.resolve()}}class Iu{constructor(){this.qr=new Ha(Au.Qr),this.$r=new Ha(Au.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new Au(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new Au(e,t))}Gr(e,t){e.forEach(e=>this.removeReference(e,t))}zr(e){const t=new jo(new No([])),n=new Au(t,e),r=new Au(t,e+1),i=[];return this.$r.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new jo(new No([])),n=new Au(t,e),r=new Au(t,e+1);let i=Dl();return this.$r.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Au(e,0),n=this.qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Au{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return jo.comparator(e.key,t.key)||ko(e.Hr,t.Hr)}static Ur(e,t){return ko(e.Hr,t.Hr)||jo.comparator(e.key,t.key)}}class Ru{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ha(Au.Qr)}checkEmpty(e){return ra.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dc(i,t,n,r);this.mutationQueue.push(o);for(const a of r)this.Yr=this.Yr.add(new Au(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ra.resolve(o)}lookupMutationBatch(e,t){return ra.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),i=r<0?0:r;return ra.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ra.resolve(0===this.mutationQueue.length?sa:this.er-1)}getAllMutationBatches(e){return ra.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Au(t,0),r=new Au(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,r],e=>{const t=this.Zr(e.Hr);i.push(t)}),ra.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ha(ko);return t.forEach(e=>{const t=new Au(e,0),r=new Au(e,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([t,r],e=>{n=n.add(e.Hr)})}),ra.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;jo.isDocumentKey(i)||(i=i.child(""));const o=new Au(new jo(i),0);let a=new Ha(ko);return this.Yr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Hr)),!0)},o),ra.resolve(this.ei(a))}ei(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){lo(0===this.ti(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Yr;return ra.forEach(t.mutations,r=>{const i=new Au(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){const n=new Au(t,0),r=this.Yr.firstAfterOrEqual(n);return ra.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ra.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class Pu{constructor(e){this.ni=e,this.docs=new Va(jo.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ra.resolve(n?n.document.mutableCopy():Os.newInvalidDocument(t))}getEntries(e,t){let n=Cl();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Os.newInvalidDocument(e))}),ra.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Cl();const o=t.path,a=new jo(o.child("__id-9223372036854775808__")),s=this.docs.getIteratorFrom(a);for(;s.hasNext();){const{key:e,value:{document:a}}=s.getNext();if(!o.isPrefixOf(e.path))break;e.path.length>o.length+1||Zo(Xo(a),n)<=0||(r.has(a.key)||xl(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ra.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ao(9500)}ri(e,t){return ra.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Nu(this)}getSize(e){return ra.resolve(this.size)}}class Nu extends _u{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(n)}),ra.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}class Ou{constructor(e){this.persistence=e,this.ii=new Sl(e=>il(e),ol),this.lastRemoteSnapshotVersion=Go.min(),this.highestTargetId=0,this.si=0,this.oi=new Iu,this.targetCount=0,this._i=pu.ar()}forEachTarget(e,t){return this.ii.forEach((e,n)=>t(n)),ra.resolve()}getLastRemoteSnapshotVersion(e){return ra.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ra.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ra.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),ra.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new pu(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,ra.resolve()}updateTargetData(e,t){return this.hr(t),ra.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,ra.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ii.forEach((o,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),ra.waitFor(i).next(()=>r)}getTargetCount(e){return ra.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return ra.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),ra.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ra.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),ra.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return ra.resolve(n)}containsKey(e,t){return ra.resolve(this.oi.containsKey(t))}}class Du{constructor(e,t){this.ai={},this.overlays={},this.ui=new aa(0),this.ci=!1,this.ci=!0,this.li=new Tu,this.referenceDelegate=e(this),this.hi=new Ou(this),this.indexManager=new cu,this.remoteDocumentCache=function(e){return new Pu(e)}(e=>this.referenceDelegate.Pi(e)),this.serializer=new au(t),this.Ti=new ku(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new Ru(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){no("MemoryPersistence","Starting transaction:",e);const r=new ju(this.ui.next());return this.referenceDelegate.Ii(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ei(e,t){return ra.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}}class ju extends ta{constructor(e){super(),this.currentSequenceNumber=e}}class Lu{constructor(e){this.persistence=e,this.Ai=new Iu,this.Ri=null}static Vi(e){return new Lu(e)}get mi(){if(this.Ri)return this.Ri;throw ao(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),ra.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),ra.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),ra.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(e=>this.mi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.mi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ra.forEach(this.mi,n=>{const r=jo.fromPath(n);return this.fi(e,r).next(e=>{e||t.removeEntry(r,Go.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(e=>{e?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return ra.or([()=>ra.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class zu{constructor(e,t){this.persistence=e,this.gi=new Sl(e=>ha(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=wu(this,t)}static Vi(e,t){return new zu(e,t)}Ii(){}di(e){return ra.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}gr(e,t){return ra.forEach(this.gi,(n,r)=>this.Sr(e,n,r).next(e=>e?ra.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,r=>this.Sr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,Go.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),ra.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),ra.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),ra.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),ra.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_s(e.data.value)),t}Sr(e,t,n){return ra.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.gi.get(t);return ra.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class Fu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=r}static Es(e,t){let n=Dl(),r=Dl();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fu(e,t.fromCache,n,r)}}class Mu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class Uu{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=E()?8:ia(w())>0?6:4}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ps(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ys(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new Mu;return this.ws(e,t,n).next(r=>{if(i.result=r,this.Rs)return this.Ss(e,t,n,r.size)})}).next(()=>i.result)}Ss(e,t,n,r){return n.documentReadCount<this.Vs?(to()<=$.DEBUG&&no("QueryEngine","SDK will not create cache indexes for query:",bl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ra.resolve()):(to()<=$.DEBUG&&no("QueryEngine","Query:",bl(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.fs*r?(to()<=$.DEBUG&&no("QueryEngine","The SDK decides to create cache indexes for query:",bl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fl(t))):ra.resolve())}ps(e,t){if(ul(t))return ra.resolve(null);let n=fl(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=ml(t,null,"F"),n=fl(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=Dl(...r);return this.gs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const o=this.bs(t,r);return this.Ds(t,o,i,n.readTime)?this.ps(e,ml(t,null,"F")):this.vs(e,o,t,n)}))})))}ys(e,t,n,r){return ul(t)||r.isEqual(Go.min())?ra.resolve(null):this.gs.getDocuments(e,n).next(i=>{const o=this.bs(t,i);return this.Ds(t,o,n,r)?ra.resolve(null):(to()<=$.DEBUG&&no("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bl(t)),this.vs(e,o,t,Qo(r,Ko)).next(e=>e))})}bs(e,t){let n=new Ha(_l(e));return t.forEach((t,r)=>{xl(e,r)&&(n=n.add(r))}),n}Ds(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,n){return to()<=$.DEBUG&&no("QueryEngine","Using full collection scan to execute query:",bl(t)),this.gs.getDocumentsMatchingQuery(e,t,Jo.min(),n)}vs(e,t,n,r){return this.gs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}const Vu="LocalStore";class $u{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new Va(ko),this.Ms=new Sl(e=>il(e),ol),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Su(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Bu(e,t,n,r){return new $u(e,t,n,r)}async function Hu(e,t){const n=co(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Ns(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],o=[];let a=Dl();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next(e=>({Bs:e,removedBatchIds:i,addedBatchIds:o}))})})}function qu(e){const t=co(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function Wu(e,t,n){let r=Dl(),i=Dl();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Cl();return n.forEach((n,o)=>{const a=e.get(n);o.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(Go.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):no(Vu,"Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),{Ls:r,ks:i}})}function Gu(e,t){const n=co(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.hi.getTargetData(e,t).next(i=>i?(r=i,ra.resolve(r)):n.hi.allocateTargetId(e).next(i=>(r=new ou(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.hi.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Fs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(e.targetId,e),n.Ms.set(t,e.targetId)),e})}async function Ku(e,t,n){const r=co(e),i=r.Fs.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!oa(e))throw e;no(Vu,`Failed to update sequence numbers for target ${t}: ${e}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(i.target)}function Yu(e,t,n){const r=co(e);let i=Go.min(),o=Dl();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=co(e),i=r.Ms.get(n);return void 0!==i?ra.resolve(r.Fs.get(i)):r.hi.getTargetData(t,n)}(r,e,fl(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(e,t.targetId).next(e=>{o=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?i:Go.min(),n?o:Dl())).next(e=>(Qu(r,wl(t),e),{documents:e,qs:o})))}function Qu(e,t,n){let r=e.xs.get(t)||Go.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.xs.set(t,r)}class Xu{constructor(){this.activeTargetIds=Ll()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ju{constructor(){this.Fo=new Xu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Xu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class Zu{xo(e){}shutdown(){}}const ed="ConnectivityMonitor";class td{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){no(ed,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){no(ed,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}let nd=null;function rd(){return null===nd?nd=268435456+Math.round(2147483648*Math.random()):nd++,"0x"+nd.toString(16)}const id="RestConnection",od={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ad{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.Ko=this.databaseId.database===ss?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){const o=rd(),a=this.Go(e,t.toUriEncodedString());no(id,`Sending RPC '${e}' ${o}:`,a,n);const s={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(s,r,i);const{host:l}=new URL(a),c=g(l);return this.jo(e,a,s,n,c).then(t=>(no(id,`Received RPC '${e}' ${o}: `,t),t),t=>{throw io(id,`RPC '${e}' ${o} failed with error: `,t,"url: ",a,"request:",n),t})}Jo(e,t,n,r,i,o){return this.Wo(e,t,n,r,i)}zo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Go(e,t){const n=od[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}class sd{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}const ld="WebChannelConnection";class cd extends ad{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,r,i){const o=rd();return new Promise((i,a)=>{const s=new Ui;s.setWithCredentials(!0),s.listenOnce($i.COMPLETE,()=>{try{switch(s.getLastErrorCode()){case Bi.NO_ERROR:const t=s.getResponseJson();no(ld,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(t)),i(t);break;case Bi.TIMEOUT:no(ld,`RPC '${e}' ${o} timed out`),a(new ho(uo.DEADLINE_EXCEEDED,"Request time out"));break;case Bi.HTTP_ERROR:const n=s.getStatus();if(no(ld,`RPC '${e}' ${o} failed with status:`,n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(uo).indexOf(t)>=0?t:uo.UNKNOWN}(t.status);a(new ho(e,t.message))}else a(new ho(uo.UNKNOWN,"Server responded with status "+s.getStatus()))}else a(new ho(uo.UNAVAILABLE,"Connection failed."));break;default:ao(9055,{c_:e,streamId:o,l_:s.getLastErrorCode(),h_:s.getLastError()})}}finally{no(ld,`RPC '${e}' ${o} completed.`)}});const l=JSON.stringify(r);no(ld,`RPC '${e}' ${o} sending request:`,r),s.send(t,"POST",l,n,15)})}P_(e,t,n){const r=rd(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Gi(),a=Wi(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(s.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(s.useFetchStreams=!0),this.zo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const c=i.join("");no(ld,`Creating RPC '${e}' stream ${r}: ${c}`,s);const u=o.createWebChannel(c,s);this.T_(u);let d=!1,h=!1;const f=new sd({Ho:t=>{h?no(ld,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(no(ld,`Opening RPC '${e}' stream ${r} transport.`),u.open(),d=!0),no(ld,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Yo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(u,Vi.EventType.OPEN,()=>{h||(no(ld,`RPC '${e}' stream ${r} transport opened.`),f.s_())}),p(u,Vi.EventType.CLOSE,()=>{h||(h=!0,no(ld,`RPC '${e}' stream ${r} transport closed`),f.__(),this.I_(u))}),p(u,Vi.EventType.ERROR,t=>{h||(h=!0,io(ld,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),f.__(new ho(uo.UNAVAILABLE,"The operation could not be completed")))}),p(u,Vi.EventType.MESSAGE,t=>{var n;if(!h){const i=t.data[0];lo(!!i,16349);const o=i,a=(null==o?void 0:o.error)||(null===(n=o[0])||void 0===n?void 0:n.error);if(a){no(ld,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=pc[e];if(void 0!==t)return mc(t)}(t),i=a.message;void 0===n&&(n=uo.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),h=!0,f.__(new ho(n,i)),u.close()}else no(ld,`RPC '${e}' stream ${r} received:`,i),f.a_(i)}}),p(a,qi.STAT_EVENT,t=>{t.stat===Hi.PROXY?no(ld,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Hi.NOPROXY&&no(ld,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.o_()},0),f}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function ud(){return"undefined"!=typeof document?document:null}function dd(e){return new jc(e,!0)}class hd{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;this.Fi=e,this.timerId=t,this.d_=n,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&no("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}const fd="PersistentStream";class pd{constructor(e,t,n,r,i,o,a,s){this.Fi=e,this.w_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=s,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new hd(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.C_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===uo.RESOURCE_EXHAUSTED?(ro(t.toString()),ro("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===uo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(e=>{let[n,r]=e;this.b_===t&&this.W_(n,r)},t=>{e(()=>{const e=new ho(uo.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.C_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return no(fd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(no(fd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gd extends pd{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ao(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(lo(void 0===t||"string"==typeof t,58123),Ka.fromBase64String(t||"")):(lo(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Ka.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,s=a&&function(e){const t=void 0===e.code?uo.UNKNOWN:mc(e.code);return new ho(t,e.message||"")}(a);n=new Tc(r,i,o,s||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bc(e,r.document.name),o=Mc(r.document.updateTime),a=r.document.createTime?Mc(r.document.createTime):Go.min(),s=new Ns({mapValue:{fields:r.document.fields}}),l=Os.newFoundDocument(i,o,a,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new kc(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Bc(e,r.document),o=r.readTime?Mc(r.readTime):Go.min(),a=Os.newNoDocument(i,o),s=r.removedTargetIds||[];n=new kc([],s,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Bc(e,r.document),o=r.removedTargetIds||[];n=new kc([],o,i,null)}else{if(!("filter"in t))return ao(11601,{At:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,o=new fc(r,i),a=e.targetId;n=new Cc(a,o)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Go.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Go.min():t.readTime?Mc(t.readTime):Go.min()}(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Wc(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=al(r)?{documents:Kc(e,r)}:{query:Yc(e,r).Vt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Fc(e,t.resumeToken);const r=Lc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Go.min())>0){n.readTime=zc(e,t.snapshotVersion.toTimestamp());const r=Lc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ao(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Wc(this.serializer),t.removeTarget=e,this.k_(t)}}class md{}class yd extends md{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new ho(uo.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(i=>{let[o,a]=i;return this.connection.Wo(e,Vc(t,n),r,o,a)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===uo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ho(uo.UNKNOWN,e.toString())})}Jo(e,t,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(o=>{let[a,s]=o;return this.connection.Jo(e,Vc(t,n),r,a,s,i)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===uo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ho(uo.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class vd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ro(t),this._a=!1):no("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}const bd="RemoteStore";class xd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(e=>{n.enqueueAndForget(async()=>{Ad(this)&&(no(bd,"Restarting streams for network reachability change."),await async function(e){const t=co(e);t.Ia.add(4),await _d(t),t.Aa.set("Unknown"),t.Ia.delete(4),await wd(t)}(this))})}),this.Aa=new vd(n,r)}}async function wd(e){if(Ad(e))for(const t of e.da)await t(!0)}async function _d(e){for(const t of e.da)await t(!1)}function Ed(e,t){const n=co(e);n.Ta.has(t.targetId)||(n.Ta.set(t.targetId,t),Id(n)?Td(n):Fd(n).x_()&&kd(n,t))}function Sd(e,t){const n=co(e),r=Fd(n);n.Ta.delete(t),r.x_()&&Cd(n,t),0===n.Ta.size&&(r.x_()?r.B_():Ad(n)&&n.Aa.set("Unknown"))}function kd(e,t){if(e.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Go.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Fd(e).H_(t)}function Cd(e,t){e.Ra.$e(t),Fd(e).Y_(t)}function Td(e){e.Ra=new Ac({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),Fd(e).start(),e.Aa.aa()}function Id(e){return Ad(e)&&!Fd(e).M_()&&e.Ta.size>0}function Ad(e){return 0===co(e).Ia.size}function Rd(e){e.Ra=void 0}async function Pd(e){e.Aa.set("Online")}async function Nd(e){e.Ta.forEach((t,n)=>{kd(e,t)})}async function Od(e,t){Rd(e),Id(e)?(e.Aa.la(t),Td(e)):e.Aa.set("Unknown")}async function Dd(e,t,n){if(e.Aa.set("Online"),t instanceof Tc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ta.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ta.delete(r),e.Ra.removeTarget(r))}(e,t)}catch(n){no(bd,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await jd(e,n)}else if(t instanceof kc?e.Ra.Ye(t):t instanceof Cc?e.Ra.it(t):e.Ra.et(t),!n.isEqual(Go.min()))try{const t=await qu(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Ra.Pt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ta.get(r);i&&e.Ta.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ta.get(t);if(!r)return;e.Ta.set(t,r.withResumeToken(Ka.EMPTY_BYTE_STRING,r.snapshotVersion)),Cd(e,t);const i=new ou(r.target,t,n,r.sequenceNumber);kd(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){no(bd,"Failed to raise snapshot:",t),await jd(e,t)}}async function jd(e,t,n){if(!oa(t))throw t;e.Ia.add(1),await _d(e),e.Aa.set("Offline"),n||(n=()=>qu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{no(bd,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await wd(e)})}async function Ld(e,t){const n=co(e);n.asyncQueue.verifyOperationInProgress(),no(bd,"RemoteStore received new credentials");const r=Ad(n);n.Ia.add(3),await _d(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await wd(n)}async function zd(e,t){const n=co(e);t?(n.Ia.delete(2),await wd(n)):t||(n.Ia.add(2),await _d(n),n.Aa.set("Unknown"))}function Fd(e){return e.Va||(e.Va=function(e,t,n){const r=co(e);return r.ia(),new gd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:Pd.bind(null,e),e_:Nd.bind(null,e),n_:Od.bind(null,e),J_:Dd.bind(null,e)}),e.da.push(async t=>{t?(e.Va.N_(),Id(e)?Td(e):e.Aa.set("Unknown")):(await e.Va.stop(),Rd(e))})),e.Va}class Md{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new fo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new Md(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ho(uo.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ud(e,t){if(ro("AsyncQueue",`${t}: ${e}`),oa(e))return new ho(uo.UNAVAILABLE,`${t}: ${e}`);throw e}class Vd{static emptySet(e){return new Vd(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||jo.comparator(t.key,n.key):(e,t)=>jo.comparator(e.key,t.key),this.keyedMap=Il(),this.sortedSet=new Va(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Vd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}class $d{constructor(){this.fa=new Va(jo.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?0!==e.type&&3===n.type?this.fa=this.fa.insert(t,e):3===e.type&&1!==n.type?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.fa=this.fa.remove(t):1===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ao(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,n)=>{e.push(n)}),e}}class Bd{constructor(e,t,n,r,i,o,a,s,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=s,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach(e=>{o.push({type:0,doc:e})}),new Bd(e,t,Vd.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}class Hd{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class qd{constructor(){this.queries=Wd(),this.onlineState="Unknown",this.Da=new Set}terminate(){!function(e,t){const n=co(e),r=n.queries;n.queries=Wd(),r.forEach((e,n)=>{for(const r of n.wa)r.onError(t)})}(this,new ho(uo.ABORTED,"Firestore shutting down"))}}function Wd(){return new Sl(e=>vl(e),yl)}async function Gd(e,t){const n=co(e);let r=3;const i=t.query;let o=n.queries.get(i);o?!o.Sa()&&t.ba()&&(r=2):(o=new Hd,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await n.onListen(i,!0);break;case 1:o.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Ud(e,`Initialization of query '${bl(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,o),o.wa.push(t),t.va(n.onlineState),o.ya&&t.Ca(o.ya)&&Xd(n)}async function Kd(e,t){const n=co(e),r=t.query;let i=3;const o=n.queries.get(r);if(o){const e=o.wa.indexOf(t);e>=0&&(o.wa.splice(e,1),0===o.wa.length?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Yd(e,t){const n=co(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.wa)e.Ca(i)&&(r=!0);t.ya=i}}r&&Xd(n)}function Qd(e,t,n){const r=co(e),i=r.queries.get(t);if(i)for(const o of i.wa)o.onError(n);r.queries.delete(t)}function Xd(e){e.Da.forEach(e=>{e.next()})}var Jd,Zd;(Zd=Jd||(Jd={})).Fa="default",Zd.Cache="cache";class eh{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Bd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache)return!0;if(!this.ba())return!0;const n="Offline"!==t;return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}La(e){e=Bd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Jd.Cache}}class th{constructor(e){this.key=e}}class nh{constructor(e){this.key=e}}class rh{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Dl(),this.mutatedKeys=Dl(),this.Xa=_l(e),this.eu=new Vd(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new $d,r=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),u=xl(this.query,t)?t:null,d=!!c&&this.mutatedKeys.has(c.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),f=!0):this.iu(c,u)||(n.track({type:2,doc:u}),f=!0,(s&&this.Xa(u,s)>0||l&&this.Xa(u,l)<0)&&(a=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(s||l)&&(a=!0)),f&&(u?(o=o.add(u),i=h?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{eu:o,ru:n,Ds:a,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ao(20277,{At:e})}};return n(e)-n(t)}(e.type,t.type)||this.Xa(e.doc,t.doc)),this.su(n),r=null!=r&&r;const a=t&&!r?this.ou():[],s=0===this.Za.size&&this.current&&!r?1:0,l=s!==this.Ya;return this.Ya=s,0!==o.length||l?{snapshot:new Bd(this.query,e.eu,i,o,e.mutatedKeys,0===s,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({eu:this.eu,ru:new $d,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Dl(),this.eu.forEach(e=>{this.au(e.key)&&(this.Za=this.Za.add(e.key))});const t=[];return e.forEach(e=>{this.Za.has(e)||t.push(new nh(e))}),this.Za.forEach(n=>{e.has(n)||t.push(new th(n))}),t}uu(e){this.Ha=e.qs,this.Za=Dl();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Bd.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,0===this.Ya,this.hasCachedResults)}}const ih="SyncEngine";class oh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ah{constructor(e){this.key=e,this.lu=!1}}class sh{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Sl(e=>vl(e),yl),this.Tu=new Map,this.Iu=new Set,this.du=new Va(jo.comparator),this.Eu=new Map,this.Au=new Iu,this.Ru={},this.Vu=new Map,this.mu=pu.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return!0===this.fu}}async function lh(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=kh(e);let i;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await uh(r,t,n,!0),i}async function ch(e,t){const n=kh(e);await uh(n,t,!0,!1)}async function uh(e,t,n,r){const i=await Gu(e.localStore,fl(t)),o=i.targetId,a=e.sharedClientState.addLocalQueryTarget(o,n);let s;return r&&(s=await dh(e,t,o,"current"===a,i.resumeToken)),e.isPrimaryClient&&n&&Ed(e.remoteStore,i),s}async function dh(e,t,n,r,i){e.gu=(t,n,r)=>async function(e,t,n,r){let i=t.view.nu(n);i.Ds&&(i=await Yu(e.localStore,t.query,!1).then(e=>{let{documents:n}=e;return t.view.nu(n,i)}));const o=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o,a);return bh(e,t.targetId,s._u),s.snapshot}(e,t,n,r);const o=await Yu(e.localStore,t,!0),a=new rh(t,o.qs),s=a.nu(o.documents),l=Sc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=a.applyChanges(s,e.isPrimaryClient,l);bh(e,n,c._u);const u=new oh(t,n,a);return e.Pu.set(t,u),e.Tu.has(n)?e.Tu.get(n).push(t):e.Tu.set(n,[t]),c.snapshot}async function hh(e,t,n){const r=co(e),i=r.Pu.get(t),o=r.Tu.get(i.targetId);if(o.length>1)return r.Tu.set(i.targetId,o.filter(e=>!yl(e,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ku(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sd(r.remoteStore,i.targetId),yh(r,i.targetId)}).catch(na)):(yh(r,i.targetId),await Ku(r.localStore,i.targetId,!0))}async function fh(e,t){const n=co(e),r=n.Pu.get(t),i=n.Tu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sd(n.remoteStore,r.targetId))}async function ph(e,t){const n=co(e);try{const e=await function(e,t){const n=co(e),r=t.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const a=[];t.targetChanges.forEach((o,s)=>{const l=i.get(s);if(!l)return;a.push(n.hi.removeMatchingKeys(e,o.removedDocuments,s).next(()=>n.hi.addMatchingKeys(e,o.addedDocuments,s)));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(s)?c=c.withResumeToken(Ka.EMPTY_BYTE_STRING,Go.min()).withLastLimboFreeSnapshotVersion(Go.min()):o.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(o.resumeToken,r)),i=i.insert(s,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,o)&&a.push(n.hi.updateTargetData(e,c))});let s=Cl(),l=Dl();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(Wu(e,o,t.documentUpdates).next(e=>{s=e.Ls,l=e.ks})),!r.isEqual(Go.min())){const t=n.hi.getLastRemoteSnapshotVersion(e).next(t=>n.hi.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(t)}return ra.waitFor(a).next(()=>o.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,s,l)).next(()=>s)}).then(e=>(n.Fs=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Eu.get(t);r&&(lo(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.lu=!0:e.modifiedDocuments.size>0?lo(r.lu,14607):e.removedDocuments.size>0&&(lo(r.lu,42227),r.lu=!1))}),await _h(n,e,t)}catch(e){await na(e)}}function gh(e,t,n){const r=co(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Pu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=co(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.wa)i.va(t)&&(r=!0)}),r&&Xd(n)}(r.eventManager,t),e.length&&r.hu.J_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function mh(e,t,n){const r=co(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Eu.get(t),o=i&&i.key;if(o){let e=new Va(jo.comparator);e=e.insert(o,Os.newNoDocument(o,Go.min()));const n=Dl().add(o),i=new Ec(Go.min(),new Map,new Va(ko),e,n);await ph(r,i),r.du=r.du.remove(o),r.Eu.delete(t),wh(r)}else await Ku(r.localStore,t,!1).then(()=>yh(r,t,n)).catch(na)}function yh(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Tu.get(t))e.Pu.delete(r),n&&e.hu.pu(r,n);e.Tu.delete(t),e.isPrimaryClient&&e.Au.zr(t).forEach(t=>{e.Au.containsKey(t)||vh(e,t)})}function vh(e,t){e.Iu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(Sd(e.remoteStore,n),e.du=e.du.remove(t),e.Eu.delete(n),wh(e))}function bh(e,t,n){for(const r of n)r instanceof th?(e.Au.addReference(r.key,t),xh(e,r)):r instanceof nh?(no(ih,"Document no longer in limbo: "+r.key),e.Au.removeReference(r.key,t),e.Au.containsKey(r.key)||vh(e,r.key)):ao(19791,{yu:r})}function xh(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Iu.has(r)||(no(ih,"New document in limbo: "+n),e.Iu.add(r),wh(e))}function wh(e){for(;e.Iu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new jo(No.fromString(t)),r=e.mu.next();e.Eu.set(r,new ah(n)),e.du=e.du.insert(n,r),Ed(e.remoteStore,new ou(fl(cl(n.path)),r,"TargetPurposeLimboResolution",aa.ue))}}async function _h(e,t,n){const r=co(e),i=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((e,s)=>{a.push(r.gu(s,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(s.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(s.targetId,i?"current":"not-current")}if(e){i.push(e);const t=Fu.Es(s.targetId,e);o.push(t)}}))}),await Promise.all(a),r.hu.J_(i),await async function(e,t){const n=co(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>ra.forEach(t,t=>ra.forEach(t.Is,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>ra.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!oa(e))throw e;no(Vu,"Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Fs.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Fs=n.Fs.insert(e,i)}}}(r.localStore,o))}async function Eh(e,t){const n=co(e);if(!n.currentUser.isEqual(t)){no(ih,"User change. New user:",t.toKey());const e=await Hu(n.localStore,t);n.currentUser=t,function(e,t){e.Vu.forEach(e=>{e.forEach(e=>{e.reject(new ho(uo.CANCELLED,t))})}),e.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await _h(n,e.Bs)}}function Sh(e,t){const n=co(e),r=n.Eu.get(t);if(r&&r.lu)return Dl().add(r.key);{let e=Dl();const r=n.Tu.get(t);if(!r)return e;for(const t of r){const r=n.Pu.get(t);e=e.unionWith(r.view.tu)}return e}}function kh(e){const t=co(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ph.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mh.bind(null,t),t.hu.J_=Yd.bind(null,t.eventManager),t.hu.pu=Qd.bind(null,t.eventManager),t}class Ch{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Bu(this.persistence,new Uu,e.initialUser,this.serializer)}Du(e){return new Du(Lu.Vi,this.serializer)}bu(e){return new Ju}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ch.provider={build:()=>new Ch};class Th extends Ch{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){lo(this.persistence.referenceDelegate instanceof zu,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new bu(n,e.asyncQueue,t)}Du(e){const t=void 0!==this.cacheSizeBytes?fu.withCacheSize(this.cacheSizeBytes):fu.DEFAULT;return new Du(e=>zu.Vi(e,t),this.serializer)}}class Ih{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>gh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Eh.bind(null,this.syncEngine),await zd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qd}createDatastore(e){const t=dd(e.databaseInfo.databaseId),n=function(e){return new cd(e)}(e.databaseInfo);return function(e,t,n,r){return new yd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new xd(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,e=>gh(this.syncEngine,e,0),td.C()?new td:new Zu)}createSyncEngine(e,t){return function(e,t,n,r,i,o,a){const s=new sh(e,t,n,r,i,o);return a&&(s.fu=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=co(e);no(bd,"RemoteStore shutting down."),t.Ia.add(5),await _d(t),t.Ea.shutdown(),t.Aa.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}Ih.provider={build:()=>new Ih};class Ah{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ro("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}const Rh="FirestoreClient";class Ph{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ji.UNAUTHENTICATED,this.clientId=So.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{no(Rh,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(no(Rh,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ud(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Nh(e,t){e.asyncQueue.verifyOperationInProgress(),no(Rh,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Hu(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>{io("Terminating Firestore due to IndexedDb database deletion"),e.terminate().then(()=>{no("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(e=>{io("Terminating Firestore due to IndexedDb database deletion failed",e)})}),e._offlineComponents=t}async function Oh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Dh(e);no(Rh,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Ld(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Ld(t.remoteStore,n)),e._onlineComponents=t}async function Dh(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){no(Rh,"Using user provided OfflineComponentProvider");try{await Nh(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===uo.FAILED_PRECONDITION||e.code===uo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;io("Error using user provided cache. Falling back to memory cache: "+n),await Nh(e,new Ch)}}else no(Rh,"Using default OfflineComponentProvider"),await Nh(e,new Th(void 0));return e._offlineComponents}async function jh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(no(Rh,"Using user provided OnlineComponentProvider"),await Oh(e,e._uninitializedComponentsProvider._online)):(no(Rh,"Using default OnlineComponentProvider"),await Oh(e,new Ih))),e._onlineComponents}async function Lh(e){const t=await jh(e),n=t.eventManager;return n.onListen=lh.bind(null,t.syncEngine),n.onUnlisten=hh.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ch.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=fh.bind(null,t.syncEngine),n}function zh(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=new fo;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const o=new Ah({next:s=>{o.Ou(),t.enqueueAndForget(()=>Kd(e,a));const l=s.docs.has(n);!l&&s.fromCache?i.reject(new ho(uo.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&s.fromCache&&r&&"server"===r.source?i.reject(new ho(uo.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new eh(cl(n.path),o,{includeMetadataChanges:!0,ka:!0});return Gd(e,a)}(await Lh(e),e.asyncQueue,t,n,r)),r.promise}function Fh(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=new fo;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const o=new Ah({next:n=>{o.Ou(),t.enqueueAndForget(()=>Kd(e,a)),n.fromCache&&"server"===r.source?i.reject(new ho(uo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new eh(n,o,{includeMetadataChanges:!0,ka:!0});return Gd(e,a)}(await Lh(e),e.asyncQueue,t,n,r)),r.promise}function Mh(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}const Uh=new Map,Vh="firestore.googleapis.com",$h=!0;class Bh{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ho(uo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vh,this.ssl=$h}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:$h;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=hu;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<mu)throw new ho(uo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new ho(uo.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mh(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ho(uo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ho(uo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ho(uo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ho(uo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ho(uo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bh(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new go;switch(e.type){case"firstParty":return new bo(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ho(uo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Uh.get(e);t&&(no("ComponentProvider","Removing Datastore"),Uh.delete(e),t.terminate())}(this),Promise.resolve()}}class qh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qh(this.firestore,e,this._query)}}class Wh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wh(this.firestore,e,this._key)}toJSON(){return{type:Wh._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Bo(t,Wh._jsonSchema))return new Wh(e,n||null,new jo(No.fromString(t.referencePath)))}}Wh._jsonSchemaVersion="firestore/documentReference/1.0",Wh._jsonSchema={type:$o("string",Wh._jsonSchemaVersion),referencePath:$o("string")};class Gh extends qh{constructor(e,t,n){super(e,t,cl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wh(this.firestore,null,new jo(e))}withConverter(e){return new Gh(this.firestore,e,this._path)}}function Kh(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=j(e),Lo("collection","path",t),e instanceof Hh){const n=No.fromString(t,...r);return Fo(n),new Gh(e,null,n)}{if(!(e instanceof Wh||e instanceof Gh))throw new ho(uo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(No.fromString(t,...r));return Fo(n),new Gh(e.firestore,null,n)}}function Yh(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=j(e),1===arguments.length&&(t=So.newId()),Lo("doc","path",t),e instanceof Hh){const n=No.fromString(t,...r);return zo(n),new Wh(e,null,new jo(n))}{if(!(e instanceof Wh||e instanceof Gh))throw new ho(uo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(No.fromString(t,...r));return zo(n),new Wh(e.firestore,e instanceof Gh?e.converter:null,new jo(n))}}const Qh="AsyncQueue";class Xh{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Promise.resolve();this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new hd(this,"async_queue_retry"),this.oc=()=>{const e=ud();e&&no(Qh,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;const t=ud();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ud();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new fo;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!oa(e))throw e;no(Qh,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,ro("INTERNAL UNHANDLED ERROR: ",Jh(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=Md.createAndSchedule(this,e,t,n,e=>this.lc(e));return this.ec.push(r),r}ac(){this.tc&&ao(47125,{hc:Jh(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do{e=this._c,await e}while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Jh(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class Zh extends Hh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Xh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xh(e),this._firestoreClient=void 0,await e}}}function ef(e){if(e._terminated)throw new ho(uo.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||tf(e),e._firestoreClient}function tf(e){var t,n,r;const i=e._freezeSettings(),o=function(e,t,n,r){return new as(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Mh(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new Ph(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}class nf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nf(Ka.fromBase64String(e))}catch(e){throw new ho(uo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new nf(Ka.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nf._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Bo(e,nf._jsonSchema))return nf.fromBase64String(e.bytes)}}nf._jsonSchemaVersion="firestore/bytes/1.0",nf._jsonSchema={type:$o("string",nf._jsonSchemaVersion),bytes:$o("string")};class rf{constructor(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(let r=0;r<t.length;++r)if(0===t[r].length)throw new ho(uo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Do(t)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class of{constructor(e){this._methodName=e}}class af{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ho(uo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ho(uo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ko(this._lat,e._lat)||ko(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:af._jsonSchemaVersion}}static fromJSON(e){if(Bo(e,af._jsonSchema))return new af(e.latitude,e.longitude)}}af._jsonSchemaVersion="firestore/geoPoint/1.0",af._jsonSchema={type:$o("string",af._jsonSchemaVersion),latitude:$o("number"),longitude:$o("number")};class sf{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sf._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Bo(e,sf._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new sf(e.vectorValues);throw new ho(uo.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sf._jsonSchemaVersion="firestore/vectorValue/1.0",sf._jsonSchema={type:$o("string",sf._jsonSchemaVersion),vectorValues:$o("object")};const lf=/^__.*__$/;function cf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ao(40011,{Ec:e})}}class uf{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.fc(e),r}gc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return xf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(0===e.length)throw this.wc("Document fields must not be empty");if(cf(this.Ec)&&lf.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class df{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||dd(e)}Dc(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new uf({Ec:e,methodName:t,bc:n,path:Do.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hf(e){const t=e._freezeSettings(),n=dd(e._databaseId);return new df(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ff(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return pf(n,e.Dc(r?4:3,t))}function pf(e,t){if(mf(e=j(e)))return yf("Unsupported field value:",t,e),gf(e,t);if(e instanceof of)return function(e,t){if(!cf(t.Ec))throw t.wc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.wc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.mc&&4!==t.Ec)throw t.wc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=pf(i,t.yc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=j(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ml(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Wo.fromDate(e);return{timestampValue:zc(t.serializer,n)}}if(e instanceof Wo){const n=new Wo(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:zc(t.serializer,n)}}if(e instanceof af)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof nf)return{bytesValue:Fc(t.serializer,e._byteString)};if(e instanceof Wh){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.wc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Uc(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof sf)return function(e,t){return{mapValue:{fields:{[cs]:{stringValue:hs},[fs]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.wc("VectorValues must only contain numeric values.");return zl(t.serializer,e)})}}}}}}(e,t);throw t.wc(`Unsupported field value: ${Uo(e)}`)}(e,t)}function gf(e,t){const n={};return Ua(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ma(e,(e,r)=>{const i=pf(r,t.Vc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function mf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Wo||e instanceof af||e instanceof nf||e instanceof Wh||e instanceof of||e instanceof sf)}function yf(e,t,n){if(!mf(n)||!Mo(n)){const r=Uo(n);throw"an object"===r?t.wc(e+" a custom object"):t.wc(e+" "+r)}}const vf=new RegExp("[~\\*/\\[\\]]");function bf(e,t,n){if(t.search(vf)>=0)throw xf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new rf(...t.split("."))._internalPath}catch(r){throw xf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function xf(e,t,n,r,i){const o=r&&!r.isEmpty(),a=void 0!==i;let s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new ho(uo.INVALID_ARGUMENT,s+e+l)}class wf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Wh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new _f(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ef("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class _f extends wf{data(){return super.data()}}function Ef(e,t){return"string"==typeof t?bf(e,t):t instanceof rf?t._internalPath:t._delegate._internalPath}function Sf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ho(uo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kf{}class Cf extends kf{}function Tf(e,t){let n=[];for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];t instanceof kf&&n.push(t),n=n.concat(i),function(e){const t=e.filter(e=>e instanceof Rf).length,n=e.filter(e=>e instanceof If).length;if(t>1||t>0&&n>0)throw new ho(uo.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const a of n)e=a._apply(e);return e}class If extends Cf{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new If(e,t,n)}_apply(e){const t=this._parse(e);return Of(e._query,t),new qh(e.firestore,e.converter,gl(e._query,t))}_parse(e){const t=hf(e.firestore),n=function(e,t,n,r,i,o,a){let s;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new ho(uo.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Nf(a,o);const t=[];for(const n of a)t.push(Pf(r,e,n));s={arrayValue:{values:t}}}else s=Pf(r,e,a)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Nf(a,o),s=ff(n,t,a,"in"===o||"not-in"===o);return Us.create(i,o,s)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Af(e,t,n){const r=t,i=Ef("where",e);return If._create(i,r,n)}class Rf extends kf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rf(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Vs.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Of(n,i),n=gl(n,i)}(e._query,t),new qh(e.firestore,e.converter,gl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Pf(e,t,n){if("string"==typeof(n=j(n))){if(""===n)throw new ho(uo.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dl(t)&&-1!==n.indexOf("/"))throw new ho(uo.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(No.fromString(n));if(!jo.isDocumentKey(r))throw new ho(uo.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Es(e,new jo(r))}if(n instanceof Wh)return Es(e,n._key);throw new ho(uo.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uo(n)}.`)}function Nf(e,t){if(!Array.isArray(e)||0===e.length)throw new ho(uo.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Of(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ho(uo.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ho(uo.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Df{convertValue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xa(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ja(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ao(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";const n={};return Ma(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[fs].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>Xa(e.doubleValue));return new sf(i)}convertGeoPoint(e){return new af(Xa(e.latitude),Xa(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=is(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(os(e));default:return null}}convertTimestamp(e){const t=Qa(e);return new Wo(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=No.fromString(e);lo(iu(n),9688,{name:e});const r=new ls(n.get(1),n.get(3)),i=new jo(n.popFirst(5));return r.isEqual(t)||ro(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class jf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lf extends wf{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){const t=new zf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){const n=this._document.data.field(Ef("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ho(uo.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Lf._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Lf._jsonSchemaVersion="firestore/documentSnapshot/1.0",Lf._jsonSchema={type:$o("string",Lf._jsonSchemaVersion),bundleSource:$o("string","DocumentSnapshot"),bundleName:$o("string"),bundle:$o("string")};class zf extends Lf{data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return super.data(e)}}class Ff{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new jf(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new zf(this._firestore,this._userDataWriter,n.key,n,new jf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(){const e=!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ho(uo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new zf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new jf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new zf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new jf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:Mf(t.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ho(uo.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ff._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=So.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Mf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ao(61501,{type:e})}}function Uf(e){e=Vo(e,Wh);const t=Vo(e.firestore,Zh);return zh(ef(t),e._key).then(n=>Bf(t,e,n))}Ff._jsonSchemaVersion="firestore/querySnapshot/1.0",Ff._jsonSchema={type:$o("string",Ff._jsonSchemaVersion),bundleSource:$o("string","QuerySnapshot"),bundleName:$o("string"),bundle:$o("string")};class Vf extends Df{constructor(e){super(),this.firestore=e}convertBytes(e){return new nf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wh(this.firestore,null,t)}}function $f(e){e=Vo(e,qh);const t=Vo(e.firestore,Zh),n=ef(t),r=new Vf(t);return Sf(e._query),Fh(n,e._query).then(n=>new Ff(t,r,e,n))}function Bf(e,t,n){const r=n.docs.get(t._key),i=new Vf(e);return new Lf(e,i,t._key,r,new jf(n.hasPendingWrites,n.fromCache),t.converter)}new WeakMap;!function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!function(e){Zi=e}(Xe),We(new L("firestore",(e,n)=>{let{instanceIdentifier:r,options:i}=n;const o=e.getProvider("app").getImmediate(),a=new Zh(new yo(e.getProvider("auth-internal")),new wo(o,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ho(uo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(e.options.projectId,t)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),et(Qi,Xi,e),et(Qi,Xi,"esm2017")}();const Hf="firebasestorage.googleapis.com",qf="storageBucket";class Wf extends k{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;super(Yf(e),`Firebase Storage: ${t} (${Yf(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wf.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var Gf,Kf;function Yf(e){return"storage/"+e}function Qf(){return new Wf(Gf.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function Xf(){return new Wf(Gf.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jf(){return new Wf(Gf.CANCELED,"User canceled the upload/download.")}function Zf(e){return new Wf(Gf.INVALID_ARGUMENT,e)}function ep(){return new Wf(Gf.APP_DELETED,"The Firebase app was deleted.")}!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(Gf||(Gf={}));class tp{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=tp.makeFromUrl(e,t)}catch(i){return new tp(e,"")}if(""===n.path)return n;throw r=e,new Wf(Gf.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const a=t.replace(/[.]/g,"\\."),s=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${t===Hf?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let l=0;l<s.length;l++){const t=s[l],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new tp(e,i),t.postModify(n);break}}if(null==n)throw function(e){return new Wf(Gf.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class np{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(){}}function rp(e,t,n,r){if(r<t)throw Zf(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Zf(`Invalid value for '${e}'. Expected ${n} or less.`)}function ip(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}function op(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(Kf||(Kf={}));class ap{constructor(e,t,n,r,i,o,a,s,l,c,u){let d=!(arguments.length>11&&void 0!==arguments[11])||arguments[11],h=arguments.length>12&&void 0!==arguments[12]&&arguments[12];this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=s,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=d,this.isUsingEmulator=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new sp(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Kf.NO_ERROR,i=n.getStatus();if(!t||op(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===Kf.ABORT;return void e(!1,new sp(!1,null,t))}const o=-1!==this.successCodes_.indexOf(i);e(!0,new sp(o,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!function(e){return void 0!==e}(e)?n():n(e)}catch(o){r(o)}else if(null!==i){const e=Qf();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?ep():Jf())}else{r(Xf())}};this.canceled_?t(0,new sp(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,o=null,a=!1,s=0;function l(){return 2===s}let c=!1;function u(){if(!c){c=!0;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.apply(null,n)}}function d(t){i=setTimeout(()=>{i=null,e(f,l())},t)}function h(){o&&clearTimeout(o)}function f(e){if(c)return void h();for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(e)return h(),void u.call(null,e,...n);if(l()||a)return h(),void u.call(null,e,...n);let o;r<64&&(r*=2),1===s?(s=2,o=0):o=1e3*(r+Math.random()),d(o)}let p=!1;function g(e){p||(p=!0,h(),c||(null!==i?(e||(s=2),clearTimeout(i),d(0)):e||(s=1)))}return d(0),o=setTimeout(()=>{a=!0,g(!0)},n),g}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class sp{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function lp(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}class cp{constructor(e,t){this._service=e,this._location=t instanceof tp?t:tp.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new cp(e,t)}get root(){const e=new tp(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lp(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new tp(this._location.bucket,e);return new cp(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Wf(Gf.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function up(e,t){const n=null===t||void 0===t?void 0:t[qf];return null==n?null:tp.makeFromBucketSpec(n,e)}class dp{constructor(e,t,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Hf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?tp.makeFromBucketSpec(r,this._host):up(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=tp.makeFromBucketSpec(this._url,e):this._bucket=up(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cp(this,e)}_makeRequest(e,t,n,r){let i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this._deleted)return new np(ep());{const o=function(e,t,n,r,i,o){let a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s=arguments.length>7&&void 0!==arguments[7]&&arguments[7];const l=ip(e.urlParams),c=e.url+l,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}(u,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new ap(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a,s)}(e,this._appId,n,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const hp="@firebase/storage",fp="0.13.14",pp="storage";function gp(e,t){let{instanceIdentifier:n}=t;const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new dp(r,i,o,n,Xe)}We(new L(pp,gp,"PUBLIC").setMultipleInstances(!0)),et(hp,fp,""),et(hp,fp,"esm2017");const mp=["REACT_APP_FIREBASE_API_KEY","REACT_APP_FIREBASE_AUTH_DOMAIN","REACT_APP_FIREBASE_PROJECT_ID","REACT_APP_FIREBASE_STORAGE_BUCKET","REACT_APP_FIREBASE_MESSAGING_SENDER_ID","REACT_APP_FIREBASE_APP_ID"].filter(e=>!{NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}[e]);if(mp.length>0)throw console.error("Missing required environment variables:",mp),new Error(`Missing required environment variables: ${mp.join(", ")}`);const yp=Je({apiKey:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",authDomain:"login-portal-d1e76.firebaseapp.com",projectId:"login-portal-d1e76",storageBucket:"login-portal-d1e76.firebasestorage.app",messagingSenderId:"379102189334",appId:"1:379102189334:web:75c7f816f7eafe4923e237"}),vp=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze();const t=Ge(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ge(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(I(n.getOptions(),null!==t&&void 0!==t?t:{}))return e;yt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ai,persistence:[Mr,br,Sr]}),r=f("authTokenSyncURL");if(r&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Oi)return;const r=null===t||void 0===t?void 0:t.token;Di!==r&&(Di=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){j(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){j(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const o=u("auth");return o&&Mn(n,`http://${o}`),n}(yp),bp=function(e,t){const n="object"==typeof e?e:Ze(),r="string"==typeof e?e:t||ss,i=Ge(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=d("firestore");e&&function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};var i;e=Vo(e,Hh);const o=g(t),a=e._getSettings(),s=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;o&&(m(`https://${l}`),x("Firestore",!0)),a.host!==Vh&&a.host!==l&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},a),{host:l,ssl:o,emulatorOptions:r});if(!I(c,s)&&(e._setSettings(c),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ji.MOCK_USER;else{t=y(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new ho(uo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ji(o)}e._authCredentials=new mo(new po(t,n))}}(i,...e)}return i}(yp);!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze(),t=arguments.length>1?arguments[1]:void 0;e=j(e);const n=Ge(e,pp).getImmediate({identifier:t}),r=d("storage");r&&function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.host=`${t}:${n}`;const i=g(t);i&&(m(`https://${e.host}/b`),x("Storage",!0)),e._isUsingEmulator=!0,e._protocol=i?"https":"http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"===typeof o?o:y(o,e.app.options.projectId))}(e,t,n,r)}(n,...r)}(yp);var xp=n(579);const wp=(0,e.createContext)(),_p=t=>{let{children:n}=t;const[r,i]=(0,e.useState)(null),[o,a]=(0,e.useState)(null),[s,l]=(0,e.useState)(!0),[c,u]=(0,e.useState)(null),[d,h]=(0,e.useState)(null);(0,e.useEffect)(()=>{const e=function(e,t,n,r){return j(e).onAuthStateChanged(t,n,r)}(vp,async e=>{if(l(!0),u(null),e){if(!e.email)return console.warn("AuthContext: User authenticated but no email found"),i(null),a(null),void l(!1);try{const t=e.email.toLowerCase(),n=Yh(bp,"Users",t),r=await Uf(n);if(r.exists()){const n=r.data(),o=n.role||"user";if(!["user","admin","superadmin"].includes(o))return console.error("AuthContext: Invalid user role:",o),u("Invalid user role from Firestore"),i(null),a(null),await vp.signOut(),void l(!1);i({uid:e.uid,email:e.email,displayName:e.displayName||n.username||n.email,photoURL:e.photoURL||n.photoURL,...n}),a(o),console.log("AuthContext: User authenticated successfully",{email:t,role:o,username:n.username})}else console.warn("AuthContext: User authenticated but no document found in Users collection for:",t),u("User profile not found"),i(null),a(null)}catch(c){console.error("AuthContext: Error fetching user data from Firestore:",c),u("Failed to load user profile"),i(null),a(null)}}else i(null),a(null);l(!1)});return()=>e()},[]);const f={user:r,role:o,loading:s,error:c,authError:d,setAuthError:h,logout:async()=>{try{await vp.signOut(),i(null),a(null),u(null)}catch(c){console.error("AuthContext: Error during logout:",c),u("Failed to logout")}},setUser:i,setRole:a};return(0,xp.jsx)(wp.Provider,{value:f,children:n})},Ep=()=>{const t=(0,e.useContext)(wp);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t};n(358);var Sp="popstate";function kp(){return Np(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Ap("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:Rp(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function Cp(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function Tp(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Ip(e,t){return{usr:e.state,key:e.key,idx:t}}function Ap(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?Pp(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function Rp(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Pp(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Np(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s="POP",l=null,c=u();function u(){return(a.state||{idx:null}).idx}function d(){s="POP";let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:f.location,delta:t})}function h(e){return Op(e)}null==c&&(c=0,a.replaceState({...a.state,idx:c},""));let f={get action(){return s},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Sp,d),l=e,()=>{i.removeEventListener(Sp,d),l=null}},createHref:e=>t(i,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s="PUSH";let r=Ap(f.location,e,t);n&&n(r,e),c=u()+1;let d=Ip(r,c),h=f.createHref(r);try{a.pushState(d,"",h)}catch(p){if(p instanceof DOMException&&"DataCloneError"===p.name)throw p;i.location.assign(h)}o&&l&&l({action:s,location:f.location,delta:1})},replace:function(e,t){s="REPLACE";let r=Ap(f.location,e,t);n&&n(r,e),c=u();let i=Ip(r,c),d=f.createHref(r);a.replaceState(i,"",d),o&&l&&l({action:s,location:f.location,delta:0})},go:e=>a.go(e)};return f}function Op(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),Cp(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:Rp(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function Dp(e,t){return jp(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function jp(e,t,n,r){let i=Qp(("string"===typeof t?Pp(t):t).pathname||"/",n);if(null==i)return null;let o=Lp(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=Yp(i);a=Wp(o[s],e,r)}return a}function Lp(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(Cp(a.relativePath.startsWith(r),`Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(r.length));let s=tg([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(Cp(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),Lp(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:qp(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of zp(e.path))i(e,t,n);else i(e,t)}),t}function zp(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=zp(r.join("/")),s=[];return s.push(...a.map(e=>""===e?o:[o,e].join("/"))),i&&s.push(...a),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var Fp=/^:[\w-]+$/,Mp=3,Up=2,Vp=1,$p=10,Bp=-2,Hp=e=>"*"===e;function qp(e,t){let n=e.split("/"),r=n.length;return n.some(Hp)&&(r+=Bp),t&&(r+=Up),n.filter(e=>!Hp(e)).reduce((e,t)=>e+(Fp.test(t)?Mp:""===t?Vp:$p),r)}function Wp(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=Gp({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=Gp({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:tg([o,u.pathname]),pathnameBase:ng(tg([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=tg([o,u.pathnameBase]))}return a}function Gp(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:a,pattern:e}}function Kp(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Tp("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Yp(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return Tp(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Qp(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Xp(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jp(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function Zp(e){let t=Jp(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function eg(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=Pp(e):(r={...e},Cp(!r.pathname||!r.pathname.includes("?"),Xp("?","pathname","search",r)),Cp(!r.pathname||!r.pathname.includes("#"),Xp("#","pathname","hash",r)),Cp(!r.search||!r.search.includes("#"),Xp("#","search","hash",r)));let o,a=""===e||""===r.pathname,s=a?"/":r.pathname;if(null==s)o=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?Pp(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:rg(r),hash:ig(i)}}(r,o),c=s&&"/"!==s&&s.endsWith("/"),u=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}var tg=e=>e.join("/").replace(/\/\/+/g,"/"),ng=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rg=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ig=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function og(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var ag=["POST","PUT","PATCH","DELETE"],sg=(new Set(ag),["GET",...ag]);new Set(sg),Symbol("ResetLoaderData");var lg=e.createContext(null);lg.displayName="DataRouter";var cg=e.createContext(null);cg.displayName="DataRouterState";var ug=e.createContext({isTransitioning:!1});ug.displayName="ViewTransition";var dg=e.createContext(new Map);dg.displayName="Fetchers";var hg=e.createContext(null);hg.displayName="Await";var fg=e.createContext(null);fg.displayName="Navigation";var pg=e.createContext(null);pg.displayName="Location";var gg=e.createContext({outlet:null,matches:[],isDataRoute:!1});gg.displayName="Route";var mg=e.createContext(null);mg.displayName="RouteError";function yg(){return null!=e.useContext(pg)}function vg(){return Cp(yg(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(pg).location}var bg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xg(t){e.useContext(fg).static||e.useLayoutEffect(t)}function wg(){let{isDataRoute:t}=e.useContext(gg);return t?function(){let{router:t}=Pg("useNavigate"),n=Og("useNavigate"),r=e.useRef(!1);xg(()=>{r.current=!0});let i=e.useCallback(async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Tp(r.current,bg),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))},[t,n]);return i}():function(){Cp(yg(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(lg),{basename:n,navigator:r}=e.useContext(fg),{matches:i}=e.useContext(gg),{pathname:o}=vg(),a=JSON.stringify(Zp(i)),s=e.useRef(!1);xg(()=>{s.current=!0});let l=e.useCallback(function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Tp(s.current,bg),!s.current)return;if("number"===typeof e)return void r.go(e);let l=eg(e,JSON.parse(a),o,"path"===i.relative);null==t&&"/"!==n&&(l.pathname="/"===l.pathname?n:tg([n,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)},[n,r,a,o,t]);return l}()}e.createContext(null);function _g(){let{matches:t}=e.useContext(gg),n=t[t.length-1];return n?n.params:{}}function Eg(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(gg),{pathname:i}=vg(),o=JSON.stringify(Zp(r));return e.useMemo(()=>eg(t,JSON.parse(o),i,"path"===n),[t,o,i,n])}function Sg(t,n,r,i){Cp(yg(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=e.useContext(fg),{matches:a}=e.useContext(gg),s=a[a.length-1],l=s?s.params:{},c=s?s.pathname:"/",u=s?s.pathnameBase:"/",d=s&&s.route;{let e=d&&d.path||"";Lg(c,!d||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let h,f=vg();if(n){let e="string"===typeof n?Pp(n):n;Cp("/"===u||e.pathname?.startsWith(u),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${e.pathname}" was given in the \`location\` prop.`),h=e}else h=f;let p=h.pathname||"/",g=p;if("/"!==u){let e=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=Dp(t,{pathname:g});Tp(d||null!=m,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Tp(null==m||void 0!==m[m.length-1].route.element||void 0!==m[m.length-1].route.Component||void 0!==m[m.length-1].route.lazy,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Ag(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:tg([u,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:tg([u,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,r,i);return n&&y?e.createElement(pg.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},y):y}function kg(){let t=Dg(),n=og(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,s)}var Cg=e.createElement(kg,null),Tg=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(gg.Provider,{value:this.props.routeContext},e.createElement(mg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ig(t){let{routeContext:n,match:r,children:i}=t,o=e.useContext(lg);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(gg.Provider,{value:n},i)}function Ag(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,o=r?.errors;if(null!=o){let e=i.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);Cp(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let a=!1,s=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){a=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight((t,l,c)=>{let u,d=!1,h=null,f=null;r&&(u=o&&l.route.id?o[l.route.id]:void 0,h=l.route.errorElement||Cg,a&&(s<0&&0===c?(Lg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):s===c&&(d=!0,f=l.route.hydrateFallbackElement||null)));let p=n.concat(i.slice(0,c+1)),g=()=>{let n;return n=u?h:d?f:l.route.Component?e.createElement(l.route.Component,null):l.route.element?l.route.element:t,e.createElement(Ig,{match:l,routeContext:{outlet:t,matches:p,isDataRoute:null!=r},children:n})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===c)?e.createElement(Tg,{location:r.location,revalidation:r.revalidation,component:h,error:u,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}function Rg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pg(t){let n=e.useContext(lg);return Cp(n,Rg(t)),n}function Ng(t){let n=e.useContext(cg);return Cp(n,Rg(t)),n}function Og(t){let n=function(t){let n=e.useContext(gg);return Cp(n,Rg(t)),n}(t),r=n.matches[n.matches.length-1];return Cp(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function Dg(){let t=e.useContext(mg),n=Ng("useRouteError"),r=Og("useRouteError");return void 0!==t?t:n.errors?.[r]}var jg={};function Lg(e,t,n){t||jg[e]||(jg[e]=!0,Tp(!1,n))}e.memo(function(e){let{routes:t,future:n,state:r}=e;return Sg(t,void 0,r,n)});function zg(t){let{to:n,replace:r,state:i,relative:o}=t;Cp(yg(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=e.useContext(fg);Tp(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=e.useContext(gg),{pathname:l}=vg(),c=wg(),u=eg(n,Zp(s),l,"path"===o),d=JSON.stringify(u);return e.useEffect(()=>{c(JSON.parse(d),{replace:r,state:i,relative:o})},[c,d,o,r,i]),null}function Fg(e){Cp(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Mg(t){let{basename:n="/",children:r=null,location:i,navigationType:o="POP",navigator:a,static:s=!1}=t;Cp(!yg(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),c=e.useMemo(()=>({basename:l,navigator:a,static:s,future:{}}),[l,a,s]);"string"===typeof i&&(i=Pp(i));let{pathname:u="/",search:d="",hash:h="",state:f=null,key:p="default"}=i,g=e.useMemo(()=>{let e=Qp(u,l);return null==e?null:{location:{pathname:e,search:d,hash:h,state:f,key:p},navigationType:o}},[l,u,d,h,f,p,o]);return Tp(null!=g,`<Router basename="${l}"> is not able to match the URL "${u}${d}${h}" because it does not start with the basename, so the <Router> won't render anything.`),null==g?null:e.createElement(fg.Provider,{value:c},e.createElement(pg.Provider,{children:r,value:g}))}function Ug(e){let{children:t,location:n}=e;return Sg(Vg(t),n)}e.Component;function Vg(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,(t,i)=>{if(!e.isValidElement(t))return;let o=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,Vg(t.props.children,o));Cp(t.type===Fg,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Cp(!t.props.index||!t.props.children,"An index route cannot have child routes.");let a={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(a.children=Vg(t.props.children,o)),r.push(a)}),r}var $g="get",Bg="application/x-www-form-urlencoded";function Hg(e){return null!=e&&"string"===typeof e.tagName}function qg(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}var Wg=null;var Gg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kg(e){return null==e||Gg.has(e)?e:(Tp(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bg}"`),null)}function Yg(e,t){let n,r,i,o,a;if(Hg(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?Qp(a,t):null,n=e.getAttribute("method")||$g,i=Kg(e.getAttribute("enctype"))||Bg,o=new FormData(e)}else if(function(e){return Hg(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Hg(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?Qp(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||$g,i=Kg(e.getAttribute("formenctype"))||Kg(a.getAttribute("enctype"))||Bg,o=new FormData(a,e),!function(){if(null===Wg)try{new FormData(document.createElement("form"),0),Wg=!1}catch(e){Wg=!0}return Wg}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(Hg(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=$g,r=null,i=Bg,a=e}var s;return o&&"text/plain"===i&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}function Qg(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Xg(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jg(e){return null!=e&&"string"===typeof e.page}function Zg(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function em(e,t,n,r,i,o){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>a(e,t)||s(e,t)):"data"===o?t.filter((t,o)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,o)||s(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function tm(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function nm(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Jg(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(o)||(n.add(o),e.push({key:o,link:i})),e},[])}function rm(e){return{__html:e}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;Symbol("SingleFetchRedirect");var im=new Set([100,101,204,205]);function om(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===Qp(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function am(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,o=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(og(n))return e.createElement(sm,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(sm,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),o)}function sm(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:o}=t,{routeModules:a}=hm();return a.root?.Layout&&!i?o:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?e.createElement(bm,null):null)))}function lm(e,t){return"lazy"===e.mode&&!0===t}function cm(){let t=e.useContext(lg);return Qg(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function um(){let t=e.useContext(cg);return Qg(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var dm=e.createContext(void 0);function hm(){let t=e.useContext(dm);return Qg(t,"You must render this element inside a <HydratedRouter> element"),t}function fm(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function pm(e,t,n){if(n&&!vm)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}function gm(t){let{page:n,...r}=t,{router:i}=cm(),o=e.useMemo(()=>Dp(i.routes,n,i.basename),[i.routes,n,i.basename]);return o?e.createElement(ym,{page:n,matches:o,...r}):null}function mm(t){let{manifest:n,routeModules:r}=hm(),[i,o]=e.useState([]);return e.useEffect(()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Xg(r,n);return e.links?e.links():[]}return[]}));return nm(r.flat(1).filter(Zg).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(t,n,r).then(t=>{e||o(t)}),()=>{e=!0}},[t,n,r]),i}function ym(t){let{page:n,matches:r,...i}=t,o=vg(),{manifest:a,routeModules:s}=hm(),{basename:l}=cm(),{loaderData:c,matches:u}=um(),d=e.useMemo(()=>em(n,r,u,a,o,"data"),[n,r,u,a,o]),h=e.useMemo(()=>em(n,r,u,a,o,"assets"),[n,r,u,a,o]),f=e.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach(n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!d.some(e=>e.route.id===n.route.id)&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))}),0===e.size)return[];let i=om(n,l);return t&&e.size>0&&i.searchParams.set("_routes",r.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[i.pathname+i.search]},[l,c,o,a,d,r,n,s]),p=e.useMemo(()=>tm(h,a),[h,a]),g=mm(h);return e.createElement(e.Fragment,null,f.map(t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i})),p.map(t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i})),g.map(t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})}))}dm.displayName="FrameworkContext";var vm=!1;function bm(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,renderMeta:o,routeDiscovery:a,ssr:s}=hm(),{router:l,static:c,staticContext:u}=cm(),{matches:d}=um(),h=lm(a,s);o&&(o.didRenderScripts=!0);let f=pm(d,null,i);e.useEffect(()=>{0},[]);let p=e.useMemo(()=>{let i=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=c?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(n.url)}`};\n${f.map((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];Qg(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,u=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${h?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map(e=>e.route.id)),o=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(o.pop();o.length>0;)a.push(`/${o.join("/")}`),o.pop();a.forEach(e=>{let n=Dp(t.routes,e,t.basename);n&&n.forEach(e=>i.add(e.route.id))});let s=[...i].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:s,sri:!!n||void 0}}(n,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:rm(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:rm(o),type:"module",async:!0}))},[]),g=vm?[]:(n.entry.imports.concat(tm(f,n,{includeHydrateFallback:!0})),[...new Set(m)]);var m;let y="object"===typeof n.sri?n.sri:{};return vm?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,h?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:y[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:y[n.entry.module],suppressHydrationWarning:!0}),g.map(n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:y[n],suppressHydrationWarning:!0})),p)}function xm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}var wm="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{wm&&(window.__reactRouterVersion="7.6.3")}catch(xC){}function _m(t){let{basename:n,children:r,window:i}=t,o=e.useRef();null==o.current&&(o.current=kp({window:i,v5Compat:!0}));let a=o.current,[s,l]=e.useState({action:a.action,location:a.location}),c=e.useCallback(t=>{e.startTransition(()=>l(t))},[l]);return e.useLayoutEffect(()=>a.listen(c),[a,c]),e.createElement(Mg,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:a})}var Em=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sm=e.forwardRef(function(t,n){let r,{onClick:i,discover:o="render",prefetch:a="none",relative:s,reloadDocument:l,replace:c,state:u,target:d,to:h,preventScrollReset:f,viewTransition:p,...g}=t,{basename:m}=e.useContext(fg),y="string"===typeof h&&Em.test(h),v=!1;if("string"===typeof h&&y&&(r=h,wm))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),n=Qp(t.pathname,m);t.origin===e.origin&&null!=n?h=n+t.search+t.hash:v=!0}catch(xC){Tp(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Cp(yg(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(fg),{hash:o,pathname:a,search:s}=Eg(t,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:tg([r,a])),i.createHref({pathname:l,search:s,hash:o})}(h,{relative:s}),[x,w,_]=function(t,n){let r=e.useContext(dm),[i,o]=e.useState(!1),[a,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:h}=n,f=e.useRef(null);e.useEffect(()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[t]),e.useEffect(()=>{if(i){let e=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(e)}}},[i]);let p=()=>{o(!0)},g=()=>{o(!1),s(!1)};return r?"intent"!==t?[a,f,{}]:[a,f,{onFocus:fm(l,p),onBlur:fm(c,g),onMouseEnter:fm(u,p),onMouseLeave:fm(d,g),onTouchStart:fm(h,p)}]:[!1,f,{}]}(a,g),E=function(t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=wg(),c=vg(),u=Eg(t,{relative:a});return e.useCallback(e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:Rp(c)===Rp(u);l(t,{replace:n,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[c,l,u,r,i,n,t,o,a,s])}(h,{replace:c,state:u,target:d,preventScrollReset:f,relative:s,viewTransition:p});let S=e.createElement("a",{...g,..._,href:r||b,onClick:v||l?i:function(e){i&&i(e),e.defaultPrevented||E(e)},ref:xm(n,w),target:d,"data-discover":y||"render"!==o?void 0:"true"});return x&&!y?e.createElement(e.Fragment,null,S,e.createElement(gm,{page:b})):S});Sm.displayName="Link";var km=e.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,viewTransition:c,children:u,...d}=t,h=Eg(l,{relative:d.relative}),f=vg(),p=e.useContext(cg),{navigator:g,basename:m}=e.useContext(fg),y=null!=p&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(ug);Cp(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Im("useViewTransitionState"),o=Eg(t,{relative:n.relative});if(!r.isTransitioning)return!1;let a=Qp(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=Qp(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=Gp(o.pathname,s)||null!=Gp(o.pathname,a)}(h)&&!0===c,v=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,b=f.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(b=b.toLowerCase(),x=x?x.toLowerCase():null,v=v.toLowerCase()),x&&m&&(x=Qp(x,m)||x);const w="/"!==v&&v.endsWith("/")?v.length-1:v.length;let _,E=b===v||!a&&b.startsWith(v)&&"/"===b.charAt(w),S=null!=x&&(x===v||!a&&x.startsWith(v)&&"/"===x.charAt(v.length)),k={isActive:E,isPending:S,isTransitioning:y},C=E?r:void 0;_="function"===typeof o?o(k):[o,E?"active":null,S?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof s?s(k):s;return e.createElement(Sm,{...d,"aria-current":C,className:_,ref:n,style:T,to:l,viewTransition:c},"function"===typeof u?u(k):u)});km.displayName="NavLink";var Cm=e.forwardRef((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:o,reloadDocument:a,replace:s,state:l,method:c=$g,action:u,onSubmit:d,relative:h,preventScrollReset:f,viewTransition:p,...g}=t,m=Nm(),y=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(fg),i=e.useContext(gg);Cp(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Eg(t||".",{relative:n})},s=vg();if(null==t){a.search=s.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}t&&"."!==t||!o.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:tg([r,a.pathname]));return Rp(a)}(u,{relative:h}),v="get"===c.toLowerCase()?"get":"post",b="string"===typeof u&&Em.test(u);return e.createElement("form",{ref:n,method:v,action:y,onSubmit:a?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c;m(t||e.currentTarget,{fetcherKey:i,method:n,navigate:o,replace:s,state:l,relative:h,preventScrollReset:f,viewTransition:p})},...g,"data-discover":b||"render"!==r?void 0:"true"})});function Tm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Im(t){let n=e.useContext(lg);return Cp(n,Tm(t)),n}function Am(t){Tp("undefined"!==typeof URLSearchParams,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let n=e.useRef(qg(t)),r=e.useRef(!1),i=vg(),o=e.useMemo(()=>function(e,t){let n=qg(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}(i.search,r.current?null:n.current),[i.search]),a=wg(),s=e.useCallback((e,t)=>{const n=qg("function"===typeof e?e(o):e);r.current=!0,a("?"+n,t)},[a,o]);return[o,s]}Cm.displayName="Form";var Rm=0,Pm=()=>`__${String(++Rm)}__`;function Nm(){let{router:t}=Im("useSubmit"),{basename:n}=e.useContext(fg),r=Og("useRouteId");return e.useCallback(async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:a,encType:s,formData:l,body:c}=Yg(e,n);if(!1===i.navigate){let e=i.fetcherKey||Pm();await t.fetch(e,r,i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||a,formEncType:i.encType||s,flushSync:i.flushSync})}else await t.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||a,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,n,r])}var Om=function(){return Om=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Om.apply(this,arguments)};Object.create;function Dm(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var jm=n(324),Lm=n.n(jm),zm="-ms-",Fm="-moz-",Mm="-webkit-",Um="comm",Vm="rule",$m="decl",Bm="@keyframes",Hm=Math.abs,qm=String.fromCharCode,Wm=Object.assign;function Gm(e){return e.trim()}function Km(e,t){return(e=t.exec(e))?e[0]:e}function Ym(e,t,n){return e.replace(t,n)}function Qm(e,t,n){return e.indexOf(t,n)}function Xm(e,t){return 0|e.charCodeAt(t)}function Jm(e,t,n){return e.slice(t,n)}function Zm(e){return e.length}function ey(e){return e.length}function ty(e,t){return t.push(e),e}function ny(e,t){return e.filter(function(e){return!Km(e,t)})}var ry=1,iy=1,oy=0,ay=0,sy=0,ly="";function cy(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ry,column:iy,length:a,return:"",siblings:s}}function uy(e,t){return Wm(cy("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dy(e){for(;e.root;)e=uy(e.root,{children:[e]});ty(e,e.siblings)}function hy(){return sy=ay>0?Xm(ly,--ay):0,iy--,10===sy&&(iy=1,ry--),sy}function fy(){return sy=ay<oy?Xm(ly,ay++):0,iy++,10===sy&&(iy=1,ry++),sy}function py(){return Xm(ly,ay)}function gy(){return ay}function my(e,t){return Jm(ly,e,t)}function yy(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vy(e){return ry=iy=1,oy=Zm(ly=e),ay=0,[]}function by(e){return ly="",e}function xy(e){return Gm(my(ay-1,Ey(91===e?e+2:40===e?e+1:e)))}function wy(e){for(;(sy=py())&&sy<33;)fy();return yy(e)>2||yy(sy)>3?"":" "}function _y(e,t){for(;--t&&fy()&&!(sy<48||sy>102||sy>57&&sy<65||sy>70&&sy<97););return my(e,gy()+(t<6&&32==py()&&32==fy()))}function Ey(e){for(;fy();)switch(sy){case e:return ay;case 34:case 39:34!==e&&39!==e&&Ey(sy);break;case 40:41===e&&Ey(e);break;case 92:fy()}return ay}function Sy(e,t){for(;fy()&&e+sy!==57&&(e+sy!==84||47!==py()););return"/*"+my(t,ay-1)+"*"+qm(47===e?e:fy())}function ky(e){for(;!yy(py());)fy();return my(e,ay)}function Cy(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ty(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case $m:return e.return=e.return||e.value;case Um:return"";case Bm:return e.return=e.value+"{"+Cy(e.children,r)+"}";case Vm:if(!Zm(e.value=e.props.join(",")))return""}return Zm(n=Cy(e.children,r))?e.return=e.value+"{"+n+"}":""}function Iy(e,t,n){switch(function(e,t){return 45^Xm(e,0)?(((t<<2^Xm(e,0))<<2^Xm(e,1))<<2^Xm(e,2))<<2^Xm(e,3):0}(e,t)){case 5103:return Mm+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Mm+e+e;case 4789:return Fm+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Mm+e+Fm+e+zm+e+e;case 5936:switch(Xm(e,t+11)){case 114:return Mm+e+zm+Ym(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Mm+e+zm+Ym(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Mm+e+zm+Ym(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Mm+e+zm+e+e;case 6165:return Mm+e+zm+"flex-"+e+e;case 5187:return Mm+e+Ym(e,/(\w+).+(:[^]+)/,Mm+"box-$1$2"+zm+"flex-$1$2")+e;case 5443:return Mm+e+zm+"flex-item-"+Ym(e,/flex-|-self/g,"")+(Km(e,/flex-|baseline/)?"":zm+"grid-row-"+Ym(e,/flex-|-self/g,""))+e;case 4675:return Mm+e+zm+"flex-line-pack"+Ym(e,/align-content|flex-|-self/g,"")+e;case 5548:return Mm+e+zm+Ym(e,"shrink","negative")+e;case 5292:return Mm+e+zm+Ym(e,"basis","preferred-size")+e;case 6060:return Mm+"box-"+Ym(e,"-grow","")+Mm+e+zm+Ym(e,"grow","positive")+e;case 4554:return Mm+Ym(e,/([^-])(transform)/g,"$1"+Mm+"$2")+e;case 6187:return Ym(Ym(Ym(e,/(zoom-|grab)/,Mm+"$1"),/(image-set)/,Mm+"$1"),e,"")+e;case 5495:case 3959:return Ym(e,/(image-set\([^]*)/,Mm+"$1$`$1");case 4968:return Ym(Ym(e,/(.+:)(flex-)?(.*)/,Mm+"box-pack:$3"+zm+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Mm+e+e;case 4200:if(!Km(e,/flex-|baseline/))return zm+"grid-column-align"+Jm(e,t)+e;break;case 2592:case 3360:return zm+Ym(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Km(e.props,/grid-\w+-end/)})?~Qm(e+(n=n[t].value),"span",0)?e:zm+Ym(e,"-start","")+e+zm+"grid-row-span:"+(~Qm(n,"span",0)?Km(n,/\d+/):+Km(n,/\d+/)-+Km(e,/\d+/))+";":zm+Ym(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Km(e.props,/grid-\w+-start/)})?e:zm+Ym(Ym(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ym(e,/(.+)-inline(.+)/,Mm+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zm(e)-1-t>6)switch(Xm(e,t+1)){case 109:if(45!==Xm(e,t+4))break;case 102:return Ym(e,/(.+:)(.+)-([^]+)/,"$1"+Mm+"$2-$3$1"+Fm+(108==Xm(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Qm(e,"stretch",0)?Iy(Ym(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ym(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,a,s){return zm+n+":"+r+s+(i?zm+n+"-span:"+(o?a:+a-+r)+s:"")+e});case 4949:if(121===Xm(e,t+6))return Ym(e,":",":"+Mm)+e;break;case 6444:switch(Xm(e,45===Xm(e,14)?18:11)){case 120:return Ym(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Mm+(45===Xm(e,14)?"inline-":"")+"box$3$1"+Mm+"$2$3$1"+zm+"$2box$3")+e;case 100:return Ym(e,":",":"+zm)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ym(e,"scroll-","scroll-snap-")+e}return e}function Ay(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $m:return void(e.return=Iy(e.value,e.length,n));case Bm:return Cy([uy(e,{value:Ym(e.value,"@","@"+Mm)})],r);case Vm:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Km(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dy(uy(e,{props:[Ym(t,/:(read-\w+)/,":-moz-$1")]})),dy(uy(e,{props:[t]})),Wm(e,{props:ny(n,r)});break;case"::placeholder":dy(uy(e,{props:[Ym(t,/:(plac\w+)/,":"+Mm+"input-$1")]})),dy(uy(e,{props:[Ym(t,/:(plac\w+)/,":-moz-$1")]})),dy(uy(e,{props:[Ym(t,/:(plac\w+)/,zm+"input-$1")]})),dy(uy(e,{props:[t]})),Wm(e,{props:ny(n,r)})}return""})}}function Ry(e){return by(Py("",null,null,null,[""],e=vy(e),0,[0],e))}function Py(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,h=0,f=0,p=0,g=1,m=1,y=1,v=0,b="",x=i,w=o,_=r,E=b;m;)switch(p=v,v=fy()){case 40:if(108!=p&&58==Xm(E,d-1)){-1!=Qm(E+=Ym(xy(v),"&","&\f"),"&\f",Hm(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:E+=xy(v);break;case 9:case 10:case 13:case 32:E+=wy(p);break;case 92:E+=_y(gy()-1,7);continue;case 47:switch(py()){case 42:case 47:ty(Oy(Sy(fy(),gy()),t,n,l),l);break;default:E+="/"}break;case 123*g:s[c++]=Zm(E)*y;case 125*g:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+u:-1==y&&(E=Ym(E,/\f/g,"")),f>0&&Zm(E)-d&&ty(f>32?Dy(E+";",r,n,d-1,l):Dy(Ym(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(ty(_=Ny(E,t,n,c,u,i,s,b,x=[],w=[],d,o),o),123===v)if(0===u)Py(E,t,_,_,x,o,d,s,w);else switch(99===h&&110===Xm(E,3)?100:h){case 100:case 108:case 109:case 115:Py(e,_,_,r&&ty(Ny(e,_,_,0,0,i,s,b,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:Py(E,_,_,_,[""],w,0,s,w)}}c=u=f=0,g=y=1,b=E="",d=a;break;case 58:d=1+Zm(E),f=p;default:if(g<1)if(123==v)--g;else if(125==v&&0==g++&&125==hy())continue;switch(E+=qm(v),v*g){case 38:y=u>0?1:(E+="\f",-1);break;case 44:s[c++]=(Zm(E)-1)*y,y=1;break;case 64:45===py()&&(E+=xy(fy())),h=py(),u=d=Zm(b=E+=ky(gy())),v++;break;case 45:45===p&&2==Zm(E)&&(g=0)}}return o}function Ny(e,t,n,r,i,o,a,s,l,c,u,d){for(var h=i-1,f=0===i?o:[""],p=ey(f),g=0,m=0,y=0;g<r;++g)for(var v=0,b=Jm(e,h+1,h=Hm(m=a[g])),x=e;v<p;++v)(x=Gm(m>0?f[v]+" "+b:Ym(b,/&\f/g,f[v])))&&(l[y++]=x);return cy(e,t,n,0===i?Vm:s,l,c,u,d)}function Oy(e,t,n,r){return cy(e,t,n,Um,qm(sy),Jm(e,2,-2),0,r)}function Dy(e,t,n,r,i){return cy(e,t,n,$m,Jm(e,0,r),Jm(e,r+1,-1),r,i)}var jy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ly="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}&&({NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.SC_ATTR)||"data-styled",zy="active",Fy="data-styled-version",My="6.1.19",Uy="/*!sc*/\n",Vy="undefined"!=typeof window&&"undefined"!=typeof document,$y=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/report-portal---Copy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCAdHUYXJAu56y_g2CRpeHgLatGTYoRZgc",REACT_APP_FIREBASE_APP_ID:"1:379102189334:web:75c7f816f7eafe4923e237",REACT_APP_FIREBASE_AUTH_DOMAIN:"login-portal-d1e76.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"379102189334",REACT_APP_FIREBASE_PROJECT_ID:"login-portal-d1e76",REACT_APP_FIREBASE_STORAGE_BUCKET:"login-portal-d1e76.firebasestorage.app"}.SC_DISABLE_SPEEDY)),By=(new Set,Object.freeze([])),Hy=Object.freeze({});function qy(e,t,n){return void 0===n&&(n=Hy),e.theme!==n.theme&&e.theme||t||n.theme}var Wy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ky=/(^-|-$)/g;function Yy(e){return e.replace(Gy,"-").replace(Ky,"")}var Qy=/(a)(d)/gi,Xy=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jy(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Xy(t%52)+n;return(Xy(t%52)+n).replace(Qy,"$1-$2")}var Zy,ev=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},tv=function(e){return ev(5381,e)};function nv(e){return Jy(tv(e)>>>0)}function rv(e){return e.displayName||e.name||"Component"}function iv(e){return"string"==typeof e&&!0}var ov="function"==typeof Symbol&&Symbol.for,av=ov?Symbol.for("react.memo"):60115,sv=ov?Symbol.for("react.forward_ref"):60112,lv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dv=((Zy={})[sv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zy[av]=uv,Zy);function hv(e){return("type"in(t=e)&&t.type.$$typeof)===av?uv:"$$typeof"in e?dv[e.$$typeof]:lv;var t}var fv=Object.defineProperty,pv=Object.getOwnPropertyNames,gv=Object.getOwnPropertySymbols,mv=Object.getOwnPropertyDescriptor,yv=Object.getPrototypeOf,vv=Object.prototype;function bv(e,t,n){if("string"!=typeof t){if(vv){var r=yv(t);r&&r!==vv&&bv(e,r,n)}var i=pv(t);gv&&(i=i.concat(gv(t)));for(var o=hv(e),a=hv(t),s=0;s<i.length;++s){var l=i[s];if(!(l in cv||n&&n[l]||a&&l in a||o&&l in o)){var c=mv(t,l);try{fv(e,l,c)}catch(e){}}}}return e}function xv(e){return"function"==typeof e}function wv(e){return"object"==typeof e&&"styledComponentId"in e}function _v(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ev(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Sv(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kv(e,t,n){if(void 0===n&&(n=!1),!n&&!Sv(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=kv(e[r],t[r]);else if(Sv(t))for(var r in t)e[r]=kv(e[r],t[r]);return e}function Cv(e,t){Object.defineProperty(e,"toString",{value:t})}function Tv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Iv=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Tv(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(Uy);return t},e}(),Av=new Map,Rv=new Map,Pv=1,Nv=function(e){if(Av.has(e))return Av.get(e);for(;Rv.has(Pv);)Pv++;var t=Pv++;return Av.set(e,t),Rv.set(t,e),t},Ov=function(e,t){Pv=t+1,Av.set(e,t),Rv.set(t,e)},Dv="style[".concat(Ly,"][").concat(Fy,'="').concat(My,'"]'),jv=new RegExp("^".concat(Ly,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lv=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},zv=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Uy),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(jv);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Ov(u,c),Lv(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},Fv=function(e){for(var t=document.querySelectorAll(Dv),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ly)!==zy&&(zv(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Mv(){return n.nc}var Uv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Ly,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(Ly,zy),r.setAttribute(Fy,My);var a=Mv();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Vv=function(){function e(e){this.element=Uv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Tv(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),$v=function(){function e(e){this.element=Uv(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Bv=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Hv=Vy,qv={isServer:!Vy,useCSSOMInjection:!$y},Wv=function(){function e(e,t,n){void 0===e&&(e=Hy),void 0===t&&(t={});var r=this;this.options=Om(Om({},qv),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Vy&&Hv&&(Hv=!1,Fv(this)),Cv(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return Rv.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(Ly,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Uy)},o=0;o<n;o++)i(o);return r}(r)})}return e.registerId=function(e){return Nv(e)},e.prototype.rehydrate=function(){!this.server&&Vy&&Fv(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Om(Om({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Bv(n):t?new Vv(n):new $v(n)}(this.options),new Iv(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Nv(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Nv(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Nv(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Gv=/&/g,Kv=/^\s*\/\/.*$/gm;function Yv(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Yv(e.children,t)),e})}function Qv(e){var t,n,r,i=void 0===e?Hy:e,o=i.options,a=void 0===o?Hy:o,s=i.plugins,l=void 0===s?By:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===Vm&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Gv,n).replace(r,c))}),a.prefix&&u.push(Ay),u.push(Ty);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Kv,""),c=Ry(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Yv(c,a.namespace));var d=[];return Cy(c,function(e){var t=ey(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(u.concat(function(e){return function(t){t.root||(t=t.return)&&e(t)}}(function(e){return d.push(e)})))),d};return d.hash=l.length?l.reduce(function(e,t){return t.name||Tv(15),ev(e,t.name)},5381).toString():"",d}var Xv=new Wv,Jv=Qv(),Zv=e.createContext({shouldForwardProp:void 0,styleSheet:Xv,stylis:Jv}),eb=(Zv.Consumer,e.createContext(void 0));function tb(){return(0,e.useContext)(Zv)}function nb(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],o=tb().styleSheet,a=(0,e.useMemo)(function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,o]),s=(0,e.useMemo)(function(){return Qv({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})},[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)(function(){Lm()(r,t.stylisPlugins)||i(t.stylisPlugins)},[t.stylisPlugins]);var l=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:a,stylis:s}},[t.shouldForwardProp,a,s]);return e.createElement(Zv.Provider,{value:l},e.createElement(eb.Provider,{value:s},t.children))}var rb=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Jv);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Cv(this,function(){throw Tv(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Jv),this.name+e.hash},e}(),ib=function(e){return e>="A"&&e<="Z"};function ob(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;ib(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ab=function(e){return null==e||!1===e||""===e},sb=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!ab(o)&&(Array.isArray(o)&&o.isCss||xv(o)?r.push("".concat(ob(i),":"),o,";"):Sv(o)?r.push.apply(r,Dm(Dm(["".concat(i," {")],sb(o),!1),["}"],!1)):r.push("".concat(ob(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in jy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lb(e,t,n,r){return ab(e)?[]:wv(e)?[".".concat(e.styledComponentId)]:xv(e)?!xv(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:lb(e(t),t,n,r):e instanceof rb?n?(e.inject(n,r),[e.getName(r)]):[e]:Sv(e)?sb(e):Array.isArray(e)?Array.prototype.concat.apply(By,e.map(function(e){return lb(e,t,n,r)})):[e.toString()];var i}function cb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xv(n)&&!wv(n))return!1}return!0}var ub=tv(My),db=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&cb(e),this.componentId=t,this.baseHash=ev(ub,t),this.baseStyle=n,Wv.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=_v(r,this.staticRulesId);else{var i=Ev(lb(this.rules,e,t,n)),o=Jy(ev(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=_v(r,o),this.staticRulesId=o}else{for(var s=ev(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Ev(lb(u,e,t,n));s=ev(s,d+c),l+=d}}if(l){var h=Jy(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),r=_v(r,h)}}return r},e}(),hb=e.createContext(void 0);hb.Consumer;var fb={};new Set;function pb(t,n,r){var i=wv(t),o=t,a=!iv(t),s=n.attrs,l=void 0===s?By:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Yy(e);fb[n]=(fb[n]||0)+1;var r="".concat(n,"-").concat(nv(My+n+fb[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,h=void 0===d?function(e){return iv(e)?"styled.".concat(e):"Styled(".concat(rv(e),")")}(t):d,f=n.displayName&&n.componentId?"".concat(Yy(n.displayName),"-").concat(n.componentId):n.componentId||u,p=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,g=n.shouldForwardProp;if(i&&o.shouldForwardProp){var m=o.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;g=function(e,t){return m(e,t)&&y(e,t)}}else g=m}var v=new db(r,f,i?o.componentStyle:void 0);function b(t,n){return function(t,n,r){var i=t.attrs,o=t.componentStyle,a=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(hb),d=tb(),h=t.shouldForwardProp||d.shouldForwardProp,f=qy(n,u,a)||Hy,p=function(e,t,n){for(var r,i=Om(Om({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=xv(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?_v(i[s],a[s]):"style"===s?Om(Om({},i[s]),a[s]):a[s]}return t.className&&(i.className=_v(i.className,t.className)),i}(i,n,f),g=p.as||c,m={};for(var y in p)void 0===p[y]||"$"===y[0]||"as"===y||"theme"===y&&p.theme===f||("forwardedAs"===y?m.as=p.forwardedAs:h&&!h(y,g)||(m[y]=p[y]));var v=function(e,t){var n=tb();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,p),b=_v(s,l);return v&&(b+=" "+v),p.className&&(b+=" "+p.className),m[iv(g)&&!Wy.has(g)?"class":"className"]=b,r&&(m.ref=r),(0,e.createElement)(g,m)}(x,t,n)}b.displayName=h;var x=e.forwardRef(b);return x.attrs=p,x.componentStyle=v,x.displayName=h,x.shouldForwardProp=g,x.foldedComponentIds=i?_v(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=f,x.target=i?o.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)kv(e,i[r],!0);return e}({},o.defaultProps,e):e}}),Cv(x,function(){return".".concat(x.styledComponentId)}),a&&bv(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function gb(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var mb=function(e){return Object.assign(e,{isCss:!0})};function yb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xv(e)||Sv(e))return mb(lb(gb(By,Dm([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?lb(r):mb(lb(gb(r,t)))}function vb(e,t,n){if(void 0===n&&(n=Hy),!t)throw Tv(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,yb.apply(void 0,Dm([r],i,!1)))};return r.attrs=function(r){return vb(e,t,Om(Om({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return vb(e,t,Om(Om({},n),r))},r}var bb=function(e){return vb(pb,e)},xb=bb;Wy.forEach(function(e){xb[e]=bb(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=cb(e),Wv.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(Ev(lb(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Wv.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function wb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ev(yb.apply(void 0,Dm([e],t,!1))),i=nv(r);return new rb(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=Mv(),r=Ev([n&&'nonce="'.concat(n,'"'),"".concat(Ly,'="true"'),"".concat(Fy,'="').concat(My,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Tv(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Tv(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[Ly]="",n[Fy]=My,n.dangerouslySetInnerHTML={__html:r},n),o=Mv();return o&&(i.nonce=o),[e.createElement("style",Om({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Wv({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Tv(2);return e.createElement(nb,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Tv(3)}})(),"__sc-".concat(Ly,"__");const _b=n.p+"static/media/ai-vs-human-intelligence-debate.8b68bce013b6b254ef9b.webp",Eb=xb.div`
  background: url(${_b}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", "Segoe UI", sans-serif;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  @media (max-width: 768px) {
    position: fixed;
    overflow-y: auto;
    min-height: 100vh;
    height: 100vh;
    background-attachment: scroll;
  }
`,Sb=xb.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 48px 40px;
  width: 420px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(59, 130, 246, 0.1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`,kb=xb.h2`
  font-weight: 800;
  font-size: 28px;
  background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  animation: fadeInDown 0.6s ease-out 0.2s both;
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Cb=xb.p`
  font-size: 15px;
  color: #64748b;
  margin-bottom: 32px;
  animation: fadeInDown 0.6s ease-out 0.4s both;
`,Tb=xb.div`
  position: relative;
  margin: 20px 0;
`,Ib=xb.label`
  position: absolute;
  top: ${e=>{let{$focused:t}=e;return t?"2px":"50%"}};
  left: 15px;
  font-size: ${e=>{let{$focused:t}=e;return t?"11px":"14px"}};
  color: #5f6c8b;
  background: white;
  padding: 0 5px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  pointer-events: none;
`,Ab=xb.input`
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  font-size: 15px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;

  &:hover {
    border-color: #3b82f6;
    background: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  }

  &:focus {
    border-color: #3b82f6;
    background: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 25px rgba(59, 130, 246, 0.15);
  }
`,Rb=xb.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  color: #3f51b5;
  cursor: pointer;
  user-select: none;
`,Pb=xb.select`
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  font-size: 15px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  outline: none;
  margin-top: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%233b82f6%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13.2-6.4H18.4c-5%200-9.3%201.8-13.2%206.4-3.9%204.5-5.9%209.7-5.9%2015.6s2%2011.1%205.9%2015.6l128%20127.9c3.9%203.9%209.1%205.8%2014.3%205.8s10.4-1.9%2014.3-5.8L287%20100.6c3.9-4.5%205.9-9.7%205.9-15.6s-2-11.1-5.9-15.6z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 18px center;
  background-size: 14px;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: #3b82f6;
    background: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  }

  &:focus {
    border-color: #3b82f6;
    background: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 25px rgba(59, 130, 246, 0.15);
  }
`,Nb=xb.button`
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  font-weight: 700;
  padding: 16px 20px;
  width: 100%;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  margin-top: 28px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  font-family: inherit;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4), 0 4px 16px rgba(139, 92, 246, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    background: linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &::before {
      display: none;
    }
  }
`,Ob=xb.p`
  color: #e53935;
  font-size: 13px;
  margin-top: 5px;
  animation: shake 0.3s ease-in-out;

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    50% { transform: translateX(4px); }
    75% { transform: translateX(-4px); }
    100% { transform: translateX(0); }
  }
`,Db=()=>{const[t,n]=(0,e.useState)(""),[r,i]=(0,e.useState)(""),[o,a]=(0,e.useState)(""),[s,l]=(0,e.useState)("user"),[c,u]=(0,e.useState)(""),[d,h]=(0,e.useState)(!1),[f,p]=(0,e.useState)(!1),g=wg(),{user:m,role:y,authError:v,setAuthError:b}=Ep();e.useEffect(()=>{if(m&&y&&!f)switch(y){case"admin":g("/admin",{replace:!0});break;case"superadmin":g("/superadmin",{replace:!0});break;case"user":g("/dashboard",{replace:!0});break;default:console.warn("Unknown role after login, redirecting to default dashboard."),g("/dashboard",{replace:!0})}},[m,y,g,f]),e.useEffect(()=>()=>{b&&b(null)},[b]);const x=async()=>{if(u(""),b&&b(null),p(!0),!t||!r||!s)return u("Please enter email, password, and select a role."),void p(!1);const e=t.toLowerCase();try{await function(e,t,n){return Ke(e.app)?Promise.reject(xt(e)):hr(j(e),Jn.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&fr(e),t})}(vp,e,r);const t=Yh(bp,"Users",e),n=await Uf(t);let i=null;if(n.exists()){i=n.data().role||"user"}if(!i)return u("Your account is not configured with a role. Please contact support."),void await vp.signOut();if(i!==s)return b&&b(`Permission Denied: You are registered as a '${i}'. Please log in with the correct role.`),await vp.signOut(),void p(!1);switch(i){case"admin":g("/admin");break;case"superadmin":g("/superadmin");break;case"user":g("/dashboard");break;default:u("An unexpected error occurred. Please try again."),await vp.signOut()}}catch(n){console.error("Login failed:",n),"auth/invalid-email"===n.code||"auth/user-not-found"===n.code||"auth/wrong-password"===n.code?u("Invalid email or password."):"auth/too-many-requests"===n.code?u("Too many login attempts. Please try again later."):u("Login failed. Please check your credentials.")}finally{p(!1)}},w=e=>{"Enter"!==e.key||f||x()},_=f?"Logging In...":`Login as ${s.charAt(0).toUpperCase()+s.slice(1)}`;return(0,xp.jsx)(Eb,{children:(0,xp.jsxs)(Sb,{children:[(0,xp.jsx)(kb,{children:"Welcome Back"}),(0,xp.jsx)(Cb,{children:"Access your personalized intelligence dashboard"}),(0,xp.jsxs)(Tb,{children:[(0,xp.jsx)(Ab,{type:"email",value:t,onFocus:()=>a("email"),onBlur:()=>a(""),onChange:e=>n(e.target.value),onKeyDown:w,autoComplete:"email",required:!0,disabled:f}),(0,xp.jsx)(Ib,{$focused:"email"===o||t,children:"Email"})]}),(0,xp.jsxs)(Tb,{children:[(0,xp.jsx)(Ab,{type:d?"text":"password",value:r,onFocus:()=>a("password"),onBlur:()=>a(""),onChange:e=>i(e.target.value),onKeyDown:w,autoComplete:"current-password",required:!0,disabled:f}),(0,xp.jsx)(Ib,{$focused:"password"===o||r,children:"Password"}),(0,xp.jsx)(Rb,{onClick:()=>h(!d),children:d?"Hide":"Show"})]}),(0,xp.jsxs)(Pb,{value:s,onChange:e=>l(e.target.value),disabled:f,children:[(0,xp.jsx)("option",{value:"user",children:"User"}),(0,xp.jsx)("option",{value:"admin",children:"Admin"}),(0,xp.jsx)("option",{value:"superadmin",children:"Superadmin"})]}),c&&(0,xp.jsx)(Ob,{children:c}),v&&(0,xp.jsx)(Ob,{children:v}),(0,xp.jsx)(Nb,{onClick:x,disabled:f||!t||!r||!s,children:_})]})})},jb=wb`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Lb=xb.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #5c6bc0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${jb} 1s linear infinite;
  margin: 50px auto;
`,zb=()=>(0,xp.jsx)(Lb,{}),Fb=n.p+"static/media/Aaruchudar Final Logo (1).09094cccc49e45fffa8b.png",Mb=xb.nav`
  background: #ffffff;
  color: #1e293b;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", "Segoe UI", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #e2e8f0;
  height: 64px;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    padding: 0 24px;
  }
  
  @media (max-width: 768px) {
    padding: 0 16px;
    height: 56px;
  }
`,Ub=xb.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Vb=xb.img`
  height: 40px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 32px;
  }
`,$b=xb.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Bb=xb.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1e293b;
  cursor: pointer;
  padding: 8px;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Hb=xb.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    display: none;
  }
`,qb=xb.div`
  display: none;
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  background: white;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 999998;
  gap: 16px;
  
  @media (max-width: 768px) {
    display: ${e=>e.$isOpen?"flex":"none"};
  }
`,Wb=xb(Sm)`
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #3b82f6;
    background: #f8fafc;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    text-align: center;
    border: 1px solid #e2e8f0;
  }
`,Gb=xb.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 24px;
  border-left: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding-left: 0;
    border-left: none;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
    justify-content: center;
  }
`,Kb=xb.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
`,Yb=xb.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Qb=xb.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.2;
`,Xb=xb.span`
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.2;
`,Jb=xb.button`
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #475569;
    border-color: #cbd5e1;
  }
`,Zb=xb.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999997;
  
  @media (max-width: 768px) {
    display: ${e=>e.$isOpen?"block":"none"};
  }
`,ex=()=>{const{user:t}=Ep(),n=wg(),[r,i]=(0,e.useState)(!1),o=async()=>{try{await pr(vp),n("/")}catch(e){console.error("Logout failed",e)}},a=(null===t||void 0===t?void 0:t.photoURL)||"https://i.pravatar.cc/150?img=3",s=(null===t||void 0===t?void 0:t.displayName)||(null===t||void 0===t?void 0:t.email)||"Guest";return(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsxs)(Mb,{children:[(0,xp.jsxs)(Ub,{children:[(0,xp.jsx)(Vb,{src:Fb,alt:"Aaruchudar Logo"}),(0,xp.jsx)($b,{children:"Aaruchudar"})]}),t&&(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsx)(Bb,{onClick:()=>i(!r),children:"\u2630"}),(0,xp.jsxs)(Hb,{children:[(0,xp.jsx)(Wb,{to:"/dashboard",children:"Dashboard"}),(0,xp.jsx)(Wb,{to:"/achievement",children:"Achievements"}),(0,xp.jsx)(Wb,{to:"/courses-user",children:"Courses"}),(0,xp.jsx)(Wb,{to:"/hilabs-user",children:"Labs"}),(0,xp.jsxs)(Gb,{children:[(0,xp.jsx)(Kb,{src:a,alt:`${s}'s Profile`}),(0,xp.jsxs)(Yb,{children:[(0,xp.jsx)(Qb,{children:s.split("@")[0]||s}),(0,xp.jsx)(Xb,{children:"Student"})]}),(0,xp.jsx)(Jb,{onClick:o,children:"Sign Out"})]})]})]})]}),(0,xp.jsxs)(qb,{$isOpen:r,children:[(0,xp.jsx)(Wb,{to:"/dashboard",onClick:()=>i(!1),children:"Dashboard"}),(0,xp.jsx)(Wb,{to:"/achievement",onClick:()=>i(!1),children:"Achievements"}),(0,xp.jsx)(Wb,{to:"/courses-user",onClick:()=>i(!1),children:"Courses"}),(0,xp.jsx)(Wb,{to:"/hilabs-user",onClick:()=>i(!1),children:"Labs"}),(0,xp.jsxs)(Gb,{children:[(0,xp.jsx)(Kb,{src:a,alt:`${s}'s Profile`}),(0,xp.jsxs)(Yb,{children:[(0,xp.jsx)(Qb,{children:s.split("@")[0]||s}),(0,xp.jsx)(Xb,{children:"Student"})]}),(0,xp.jsx)(Jb,{onClick:o,children:"Sign Out"})]})]}),(0,xp.jsx)(Zb,{$isOpen:r,onClick:()=>i(!1)})]})},tx=wb`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`,nx=xb.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  display: flex;
  flex-direction: column;
`,rx=xb.div`
  flex: 1;
  padding: 1.25rem 1.5rem;
  padding-top: 5.25rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 5.25rem);
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    padding: 1rem 1.25rem;
    padding-top: 5rem;
    max-width: 1200px;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 4.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    padding-top: 4rem;
  }
`,ix=xb.div`
  margin-bottom: 24px;
`,ox=xb.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 6px 0;
`,ax=xb.p`
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
`,sx=xb.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  flex: 1;
  align-items: start;
  
  @media (max-width: 1200px) {
    grid-template-columns: 280px 1fr;
    gap: 16px;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,lx=xb.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  animation: ${tx} 0.6s ease;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
  }
`,cx=xb(lx)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
`,ux=xb.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`,dx=xb.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #f1f5f9;
`,hx=xb.h2`
  color: #1e293b;
  font-size: 1.5rem;
  margin-bottom: 4px;
  font-weight: 600;
`,fx=xb.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 20px;
`,px=xb.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,gx=xb.div`
  background: #f8fafc;
  padding: 1rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 0.875rem 0.625rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
  }
`,mx=xb.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 1.625rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,yx=xb.div`
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`,vx=xb.p`
  color: #64748b;
  font-size: 0.9rem;
  margin: 8px 0;
  line-height: 1.5;
`,bx=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`,xx=xb.span`
  color: #64748b;
  font-size: 0.9rem;
`,wx=xb.span`
  color: #1e293b;
  font-weight: 500;
  font-size: 0.9rem;
`,_x=xb(lx)`
  margin-bottom: 20px;
`,Ex=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,Sx=xb.h3`
  font-size: 1rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0;
`,kx=xb.div`
  font-size: 1rem;
  font-weight: 600;
  color: #3b82f6;
`,Cx=xb.div`
  width: 100%;
  height: 8px;
  background: #f1f5f9;
  border-radius: 4px;
  overflow: hidden;
`,Tx=xb.div`
  height: 100%;
  background: #3b82f6;
  width: ${e=>{let{$percent:t}=e;return t||0}}%;
  transition: width 1.2s ease;
  border-radius: 4px;
`,Ix=(xb.p`
  color: #555;
  font-size: 0.95rem;
  margin-top: 30px;
  margin-bottom: 12px;
`,xb(lx)``),Ax=xb.h3`
  color: #1e293b;
  font-size: 1.1rem;
  margin: 0 0 16px 0;
  font-weight: 600;
`,Rx=xb.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`,Px=xb.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`,Nx=xb.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
`,Ox=xb(Nx)`
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
    text-decoration: none;
    color: white;
  }
`,Dx=xb(Nx)`
  background: #f8fafc;
  color: #475569;
  border: 1px solid #e2e8f0;
  
  &:hover {
    background: #eff6ff;
    text-decoration: none;
    color: #3b82f6;
    border-color: #3b82f6;
  }
`,jx=xb.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  background: #fef2f2;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin-top: 1.5rem;
    border-radius: 6px;
  }
`,Lx=()=>{var t;const{user:n,loading:r}=Ep(),[i,o]=(0,e.useState)(!0),[a,s]=(0,e.useState)(null),[l,c]=(0,e.useState)("");(0,e.useEffect)(()=>{(async()=>{if(r||null===n||void 0===n||!n.email)return void o(!1);o(!0),c("");const e=n.email.toLowerCase();try{const t=Yh(bp,"Users",e),n=await Uf(t);n.exists()?s(n.data()):(c("User data not found in Firestore."),s(null))}catch(t){console.error("Error fetching dashboard data:",t),c("Failed to load dashboard data. Please try again.")}finally{o(!1)}})()},[n,r]);return(0,xp.jsxs)(nx,{children:[(0,xp.jsx)(ex,{}),(0,xp.jsxs)(rx,{children:[(0,xp.jsxs)(ix,{children:[(0,xp.jsx)(ox,{children:"Dashboard"}),(0,xp.jsx)(ax,{children:"Track your learning progress and access your reports"})]}),r||i?(0,xp.jsx)(zb,{}):l?(0,xp.jsx)(jx,{children:l}):a?(0,xp.jsxs)(sx,{children:[(0,xp.jsxs)(cx,{children:[(0,xp.jsx)(dx,{src:a.photoURL||"https://i.pravatar.cc/150",alt:"Profile"}),(0,xp.jsx)(hx,{children:a.username||(null===n||void 0===n||null===(t=n.email)||void 0===t?void 0:t.split("@")[0])||"User"}),(0,xp.jsx)(fx,{children:"Student"}),(0,xp.jsxs)(px,{children:[(0,xp.jsxs)(gx,{children:[(0,xp.jsxs)(mx,{children:[a.completion||0,"%"]}),(0,xp.jsx)(yx,{children:"Progress"})]}),(0,xp.jsxs)(gx,{children:[(0,xp.jsx)(mx,{children:a.labName?"1":"0"}),(0,xp.jsx)(yx,{children:"Active Labs"})]})]}),(a.labName||a.enrolment)&&(0,xp.jsxs)("div",{style:{width:"100%",marginTop:"16px"},children:[a.labName&&(0,xp.jsxs)(bx,{children:[(0,xp.jsx)(xx,{children:"Current Lab"}),(0,xp.jsx)(wx,{children:a.labName})]}),a.enrolment&&(0,xp.jsxs)(bx,{children:[(0,xp.jsx)(xx,{children:"Enrolled"}),(0,xp.jsx)(wx,{children:(e=>{if(!e)return"N/A";try{const[t,n,r]=e.split("-");return new Date(t,n-1,r).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch(xC){return console.error("Error formatting date:",xC),e}})(a.enrolment)})]})]})]}),(0,xp.jsx)(ux,{children:a.labName||a.enrolment||a.completion||a.reportUrl?(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsxs)(_x,{children:[(0,xp.jsxs)(Ex,{children:[(0,xp.jsx)(Sx,{children:"Course Progress"}),(0,xp.jsxs)(kx,{children:[a.completion||0,"%"]})]}),(0,xp.jsx)(Cx,{children:(0,xp.jsx)(Tx,{$percent:a.completion||0})})]}),a.reportUrl&&(0,xp.jsxs)(Ix,{children:[(0,xp.jsx)(Ax,{children:"Learning Report"}),(0,xp.jsx)(Rx,{src:a.reportUrl,title:"Your Report",allow:"fullscreen"}),(0,xp.jsxs)(Px,{children:[(0,xp.jsx)(Ox,{href:(e=>{if(!e)return"#";const t=e.match(/\/d\/(.*?)\//),n=t?t[1]:null;return n?`https://drive.google.com/uc?export=download&id=${n}`:"#"})(a.reportUrl),target:"_blank",rel:"noopener noreferrer",children:"Download PDF"}),(0,xp.jsx)(Dx,{as:"button",onClick:()=>window.open(a.reportUrl,"_blank"),children:"Open in New Tab"})]})]}),!a.reportUrl&&(0,xp.jsx)(lx,{children:(0,xp.jsx)(vx,{style:{textAlign:"center",color:"#64748b"},children:"Your personalized report will be available once you complete more of the course."})})]}):(0,xp.jsx)(lx,{children:(0,xp.jsx)(vx,{style:{textAlign:"center",color:"#64748b"},children:"No active course or lab data found. Start your learning journey by enrolling in a course!"})})})]}):(0,xp.jsx)(jx,{children:"No user data found for your account. Please contact support."})]})]})},zx=()=>{const[t,n]=(0,e.useState)({width:window.innerWidth,height:window.innerHeight}),[r,i]=(0,e.useState)(window.innerWidth<=768),[o,a]=(0,e.useState)(window.innerWidth>768&&window.innerWidth<=1024),[s,l]=(0,e.useState)(window.innerWidth>1024);return(0,e.useEffect)(()=>{const e=()=>{const e=window.innerWidth,t=window.innerHeight;n({width:e,height:t}),i(e<=768),a(e>768&&e<=1024),l(e>1024)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),{screenSize:t,isMobile:r,isTablet:o,isDesktop:s,breakpoints:{mobile:768,tablet:1024,desktop:1200}}},Fx=wb`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,Mx=wb`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Ux=wb`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,Vx=xb.div`
  width: 300px;
  height: 100vh;
  background: linear-gradient(145deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Inter", "Segoe UI", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${Fx} 0.6s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
  
  @media (max-width: 768px) {
    width: 280px;
    transform: ${e=>e.$isOpen?"translateX(0)":"translateX(-100%)"};
  }
`,$x=xb.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
  backdrop-filter: blur(20px);
  z-index: 999;
  padding: 0 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  
  @media (max-width: 768px) {
    display: flex;
    animation: ${Mx} 0.5s ease-out;
  }
`,Bx=xb.button`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  font-size: 1.4rem;
  color: #60a5fa;
  cursor: pointer;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
`,Hx=xb.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,qx=xb.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  
  @media (max-width: 768px) {
    display: ${e=>e.$isOpen?"block":"none"};
  }
`,Wx=xb.div`
  padding: 32px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 24px;
    right: 24px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
`,Gx=xb(Sm)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: none;
    color: white;
    transform: scale(1.02);
  }
`,Kx=xb.img`
  height: 40px;
  width: auto;
  filter: brightness(1.2) drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3));
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1.4) drop-shadow(0 6px 12px rgba(59, 130, 246, 0.5));
    animation: ${Ux} 2s infinite;
  }
`,Yx=xb.h2`
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`,Qx=xb.nav`
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Xx=xb.div`
  margin-bottom: 40px;
`,Jx=xb.h3`
  font-size: 0.7rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 20px 0;
  padding: 0 16px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 16px;
    width: 24px;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 1px;
  }
`,Zx=xb(Sm)`
  color: #cbd5e1;
  text-decoration: none;
  padding: 16px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 16px;
  margin-bottom: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  overflow: hidden;
  animation: ${Mx} 0.6s ease-out;
  animation-delay: ${e=>e.$delay||"0s"};
  animation-fill-mode: both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: linear-gradient(180deg, #3b82f6, #8b5cf6);
    border-radius: 0 2px 2px 0;
    transition: height 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
    color: #60a5fa;
    text-decoration: none;
    transform: translateX(8px);
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      height: 24px;
    }
  }
  
  &.active {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
    color: #60a5fa;
    transform: translateX(8px);
    
    &::after {
      height: 32px;
    }
  }
`,ew=xb.div`
  padding: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 24px;
    right: 24px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
`,tw=xb.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
  animation: ${Mx} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.2);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  }
`,nw=xb.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6) border-box;
  background-clip: padding-box, border-box;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    animation: ${Ux} 2s infinite;
  }
`,rw=xb.div`
  flex: 1;
  min-width: 0;
`,iw=xb.div`
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ow=xb.div`
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 500;
`,aw=xb.button`
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%);
    color: #f87171;
    border-color: rgba(239, 68, 68, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
    
    &::before {
      left: 100%;
    }
  }
`,sw=()=>{var t;const{user:n}=Ep(),r=wg(),i=vg(),{isMobile:o}=zx(),[a,s]=(0,e.useState)(!1);(0,e.useEffect)(()=>{s(!1)},[i.pathname]);const l=(null===n||void 0===n?void 0:n.photoURL)||"https://i.pravatar.cc/150?img=5",c=(null===n||void 0===n?void 0:n.displayName)||(null===n||void 0===n||null===(t=n.email)||void 0===t?void 0:t.split("@")[0])||"User";return(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsxs)($x,{children:[(0,xp.jsx)(Bx,{onClick:()=>{s(!a)},children:"\u2630"}),(0,xp.jsxs)(Hx,{children:[(0,xp.jsx)(Kx,{src:Fb,alt:"Aaruchudar Logo",style:{height:"24px"}}),(0,xp.jsx)(Yx,{children:"Aaruchudar"})]}),(0,xp.jsx)("div",{style:{width:"24px"}})]}),(0,xp.jsx)(qx,{$isOpen:a,onClick:()=>s(!1)}),(0,xp.jsxs)(Vx,{$isOpen:a,children:[(0,xp.jsx)(Wx,{children:(0,xp.jsxs)(Gx,{to:"/admin",children:[(0,xp.jsx)(Kx,{src:Fb,alt:"Aaruchudar Logo"}),(0,xp.jsx)(Yx,{children:"Aaruchudar"})]})}),(0,xp.jsx)(Qx,{children:n&&(0,xp.jsxs)(Xx,{children:[(0,xp.jsx)(Jx,{children:"Admin Panel"}),(0,xp.jsx)(Zx,{to:"/admin",onClick:()=>o&&s(!1),$delay:"0.1s",children:"Dashboard"}),(0,xp.jsx)(Zx,{to:"/participants",onClick:()=>o&&s(!1),$delay:"0.2s",children:"Participants"})]})}),(0,xp.jsxs)(ew,{children:[(0,xp.jsxs)(tw,{children:[(0,xp.jsx)(nw,{src:l,alt:`${c}'s Profile`}),(0,xp.jsxs)(rw,{children:[(0,xp.jsx)(iw,{children:c}),(0,xp.jsx)(ow,{children:"Administrator"})]})]}),(0,xp.jsx)(aw,{onClick:async()=>{try{await pr(vp),r("/")}catch(e){console.error("Logout failed",e)}},children:"Sign Out"})]})]})]})},lw=xb.div`
  display: flex;
  min-height: 100vh;
  background: #f8f9fc;
  font-family: "Inter", "Segoe UI", sans-serif;
  margin-left: 250px; /* Adjust margin-left to account for fixed Sidebar */
  
  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
  }
`,cw=xb.div`
  flex: 1;
  padding: 40px 30px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 768px) {
    padding: 20px 16px;
    margin-top: 60px;
  }
`,uw=xb.h2`
  font-size: 2rem;
  color: #2e3a50;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 20px;
  }
`,dw=xb.div`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #333;
`,hw=xb.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 24px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,fw=xb.div`
  margin-bottom: 40px;
`,pw=xb.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 20px;
  
  @media (max-width: 1024px) {
    gap: 16px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,gw=xb.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`,mw=xb.h3`
  font-size: 1.1rem;
  color: #1e293b;
  margin: 0 0 16px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`,yw=xb.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (max-width: 480px) {
    gap: 6px;
  }
`,vw=xb.div`
  background: ${e=>"lab"===e.type?"linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)":"linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"};
  color: ${e=>"lab"===e.type?"#166534":"#1d4ed8"};
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid ${e=>"lab"===e.type?"rgba(34, 197, 94, 0.2)":"rgba(59, 130, 246, 0.2)"};
  word-break: break-word;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${e=>"lab"===e.type?"linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)":"linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)"};
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${e=>"lab"===e.type?"rgba(34, 197, 94, 0.2)":"rgba(59, 130, 246, 0.2)"};
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 12px;
  }
`,bw=xb.div`
  color: #64748b;
  font-style: italic;
  font-size: 0.9rem;
`,xw=xb.div`
  flex: 1 1 200px;
  background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    flex: 1 1 auto;
    padding: 16px;
  }
`,ww=xb.h3`
  font-size: 32px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 12px 0;
  font-weight: 800;
  transition: all 0.3s ease;
  
  ${xw}:hover & {
    color: white;
    -webkit-text-fill-color: white;
    transform: scale(1.1);
  }
`,_w=xb.p`
  font-size: 15px;
  color: #555;
  font-weight: 500;
`,Ew=xb.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`,Sw=xb.li`
  padding: 18px 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #333;
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.05), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 10px;
    font-size: 0.95rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,kw=xb.span`
  font-weight: 600;
  word-break: break-word;
  
  @media (max-width: 768px) {
    margin-bottom: 4px;
  }
`,Cw=xb.button`
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 16px;
  }
`,Tw=xb.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`,Iw=(xb.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`,xb.button`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
  margin-left: 10px;

  &:hover {
    background-color: #5a6268;
  }
`),Aw=()=>{const{user:t,role:n,loading:r}=Ep(),i=wg(),{organizationId:o}=_g(),[a,s]=(0,e.useState)([]),[l,c]=(0,e.useState)(!0),[u,d]=(0,e.useState)("Loading..."),[h,f]=(0,e.useState)(""),[p,g]=(0,e.useState)(""),[m,y]=(0,e.useState)(null),v=o||(null===t||void 0===t?void 0:t.organizationId);(0,e.useEffect)(()=>{(async()=>{if(!r&&t&&v){c(!0),g("");try{const e=Yh(bp,"Organizations",v),t=await Uf(e);if(t.exists()){const e=t.data();d(e.name||"Unknown Organization"),f(e.type||"")}else d("Organization Not Found"),g("Organization details not found.");const n=Tf(Kh(bp,"Users"),Af("organizationId","==",v),Af("role","==","user")),r=(await $f(n)).docs.map(e=>({id:e.id,...e.data()}));s(r)}catch(e){console.error("Error fetching admin dashboard data:",e),g("Failed to load dashboard data. Please try again.")}finally{c(!1)}}else r||t&&v||(g("Admin profile or organization ID not found."),c(!1))})()},[t,r,v]);const{labs:b,courses:x}=(()=>{const e=new Set,t=new Set;return a.forEach(n=>{n.labName&&e.add(n.labName),n.courses&&n.courses.length>0&&n.courses.forEach(e=>{const n={course_01:"Empowering Human Intelligence \u2013 7-Day Online Course",course_02:"The 7-Day Reset: Clarity, Confidence, and Communication",course_03:"The 30-Day Foundation: Purpose-Driven Professionalism",course_04:"The 45-Day Career Rewire: Aligning Work with Self",course_05:"Leadership from Within: 21-Day Intensive for Founders & Changemakers",course_06:"The Aaruchudar Educator Program (30 Days or Custom)",course_07:"Institutional Innovation Catalyst (45 Days)",course_08:"Custom Sprint Labs / Retreats (2\u20135 Days)"}[r=e]||r;var r;t.add(n)})}),{labs:Array.from(e),courses:Array.from(t)}})(),{total:w,hiLabs:_,courses:E}=(()=>{let e=0,t=0;return a.forEach(n=>{n.labName&&e++,n.courses&&n.courses.length>0&&t++}),{total:a.length,hiLabs:e,courses:t}})(),S=a.filter(e=>"hilabs"===m?e.labName:"courses"!==m||e.courses&&e.courses.length>0),k=e=>{i(`/participants/${e}`)};return(0,xp.jsxs)(lw,{children:[(0,xp.jsx)(sw,{}),(0,xp.jsx)(cw,{children:r||l?(0,xp.jsx)(zb,{}):p?(0,xp.jsx)(Tw,{children:p}):v?(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[(0,xp.jsx)(uw,{children:"Admin Dashboard"}),(0,xp.jsx)("div",{children:"superadmin"===n&&(0,xp.jsx)(Iw,{onClick:()=>i((()=>{if(!h)return"/organizations";const e={School:"schools",College:"colleges",Corporate:"corporates",Individual:"individuals"}[h];return e?`/organizations/${e}`:"/organizations"})()),children:(()=>{if(!h)return"Back to Organizations";const e={School:"schools",College:"colleges",Corporate:"corporates",Individual:"individuals"}[h];return e?`Back to ${e.charAt(0).toUpperCase()+e.slice(1)}`:"Back to Organizations"})()})})]}),(0,xp.jsxs)(dw,{children:[(0,xp.jsx)("strong",{children:"Organization:"})," ",u]}),(0,xp.jsxs)(hw,{children:[(0,xp.jsxs)(xw,{onClick:()=>y(null),children:[(0,xp.jsx)(ww,{children:w}),(0,xp.jsx)(_w,{children:"Total Participants"})]}),(0,xp.jsxs)(xw,{onClick:()=>y("hilabs"),children:[(0,xp.jsx)(ww,{children:_}),(0,xp.jsx)(_w,{children:"Opted for HI Labs"})]}),(0,xp.jsxs)(xw,{onClick:()=>y("courses"),children:[(0,xp.jsx)(ww,{children:E}),(0,xp.jsx)(_w,{children:"Opted for Courses"})]})]}),(0,xp.jsx)(fw,{children:(0,xp.jsxs)(pw,{children:[(0,xp.jsxs)(gw,{children:[(0,xp.jsx)(mw,{children:"HI Labs in Organization"}),(0,xp.jsx)(yw,{children:b.length>0?b.map((e,t)=>(0,xp.jsx)(vw,{type:"lab",children:e},t)):(0,xp.jsx)(bw,{children:"No HI Labs enrolled"})})]}),(0,xp.jsxs)(gw,{children:[(0,xp.jsx)(mw,{children:"Courses in Organization"}),(0,xp.jsx)(yw,{children:x.length>0?x.map((e,t)=>(0,xp.jsx)(vw,{type:"course",children:e},t)):(0,xp.jsx)(bw,{children:"No courses enrolled"})})]})]})}),(0,xp.jsxs)(uw,{style:{fontSize:"1.5rem",marginTop:"40px"},children:[m?`Filtered Participants (${m})`:"All Participants"," in ",u]}),(0,xp.jsx)(Ew,{children:0===S.length?(0,xp.jsx)("p",{children:"No participants match the current filter."}):S.map(e=>(0,xp.jsxs)(Sw,{onClick:()=>k(e.id),children:[(0,xp.jsx)(kw,{children:e.username||e.email}),(0,xp.jsx)(Cw,{onClick:t=>{t.stopPropagation(),k(e.id)},children:"View Details"})]},e.id))})]}):(0,xp.jsx)(Tw,{children:"Your admin account is not linked to an organization. Please contact support."})})]})},Rw=xb.div`
  width: 300px;
  height: 100vh;
  background: #1e293b;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Inter", "Segoe UI", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-right: 1px solid #334155;
  z-index: 1000;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    width: 260px;
    transform: ${e=>e.$isOpen?"translateX(0)":"translateX(-100%)"};
  }
`,Pw=xb.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #1e293b;
  z-index: 999;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: space-between;
  color: white;
  
  @media (max-width: 768px) {
    display: flex;
  }
`,Nw=xb.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ow=xb.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Dw=xb.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  
  @media (max-width: 768px) {
    display: ${e=>e.$isOpen?"block":"none"};
  }
`,jw=xb.div`
  padding: 24px;
  border-bottom: 1px solid #334155;
`,Lw=xb(km)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: white;
  
  &:hover {
    text-decoration: none;
    color: white;
    opacity: 0.9;
  }
`,zw=xb.img`
  height: 40px;
  width: auto;
`,Fw=xb.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
`,Mw=xb.nav`
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
`,Uw=xb.div`
  margin-bottom: 40px;
`,Vw=xb.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 16px 0;
  padding: 0 12px;
`,$w=xb(km)`
  color: #cbd5e1;
  text-decoration: none;
  padding: 12px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  margin-bottom: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  &:hover {
    background: #334155;
    color: white;
    text-decoration: none;
  }
  
  &.active {
    background: #3b82f6;
    color: white;
  }
`,Bw=xb.span`
  font-size: 0.9rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`,Hw=xb.div`
  padding: 20px;
  border-top: 1px solid #334155;
  margin-top: auto;
`,qw=xb.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #334155;
  border-radius: 8px;
  margin-bottom: 16px;
`,Ww=xb.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #475569;
`,Gw=xb.div`
  flex: 1;
  min-width: 0;
`,Kw=xb.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yw=xb.div`
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
`,Qw=xb.button`
  width: 100%;
  padding: 10px 16px;
  background: #475569;
  color: #cbd5e1;
  border: 1px solid #64748b;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #64748b;
    color: white;
  }
`,Xw=()=>{var t;const{user:n}=Ep(),r=wg(),i=vg(),{isMobile:o}=zx(),[a,s]=(0,e.useState)(!1);(0,e.useEffect)(()=>{s(!1)},[i.pathname]);const l=(null===n||void 0===n?void 0:n.photoURL)||"https://i.pravatar.cc/150?img=5",c=(null===n||void 0===n?void 0:n.displayName)||(null===n||void 0===n||null===(t=n.email)||void 0===t?void 0:t.split("@")[0])||"User";return(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsxs)(Pw,{children:[(0,xp.jsx)(Nw,{onClick:()=>{s(!a)},children:"\u2630"}),(0,xp.jsxs)(Ow,{children:[(0,xp.jsx)(zw,{src:Fb,alt:"Aaruchudar Logo",style:{height:"24px"}}),(0,xp.jsx)(Fw,{style:{fontSize:"1.2rem"},children:"Aaruchudar"})]}),(0,xp.jsx)("div",{style:{width:"24px"}})]}),(0,xp.jsx)(Dw,{$isOpen:a,onClick:()=>s(!1)}),(0,xp.jsxs)(Rw,{$isOpen:a,children:[(0,xp.jsx)(jw,{children:(0,xp.jsxs)(Lw,{to:"/superadmin",children:[(0,xp.jsx)(zw,{src:Fb,alt:"Aaruchudar Logo"}),(0,xp.jsx)(Fw,{children:"Aaruchudar"})]})}),(0,xp.jsx)(Mw,{children:(0,xp.jsxs)(Uw,{children:[(0,xp.jsx)(Vw,{children:"Super Admin Panel"}),(0,xp.jsxs)($w,{to:"/superadmin",onClick:()=>o&&s(!1),children:[(0,xp.jsx)(Bw,{children:"\u25a0"}),"Dashboard"]}),(0,xp.jsxs)($w,{to:"/organizations",onClick:()=>o&&s(!1),children:[(0,xp.jsx)(Bw,{children:"\u25c6"}),"Organizations"]}),(0,xp.jsxs)($w,{to:"/labs",onClick:()=>o&&s(!1),children:[(0,xp.jsx)(Bw,{children:"\u25b2"}),"HI Labs"]}),(0,xp.jsxs)($w,{to:"/courses",onClick:()=>o&&s(!1),children:[(0,xp.jsx)(Bw,{children:"\u25cf"}),"Courses"]}),(0,xp.jsxs)($w,{to:"/reports",onClick:()=>o&&s(!1),children:[(0,xp.jsx)(Bw,{children:"\u25ac"}),"Reports"]})]})}),(0,xp.jsxs)(Hw,{children:[(0,xp.jsxs)(qw,{children:[(0,xp.jsx)(Ww,{src:l,alt:`${c}'s Profile`}),(0,xp.jsxs)(Gw,{children:[(0,xp.jsx)(Kw,{children:c}),(0,xp.jsx)(Yw,{children:"Super Administrator"})]})]}),(0,xp.jsx)(Qw,{onClick:async()=>{try{await pr(vp),r("/")}catch(e){console.error("Logout failed",e)}},children:"Sign Out"})]})]})]})},Jw=xb.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`,Zw=xb.div`
  flex: 1;
  margin-left: 300px;
  padding: 40px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 32px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`,e_=xb.div`
  margin-bottom: 40px;
`,t_=xb.h1`
  font-size: 2.5rem;
  color: #1e293b;
  margin: 0 0 8px 0;
  font-weight: 700;
`,n_=xb.p`
  color: #64748b;
  font-size: 1.1rem;
  margin: 0;
`,r_=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,i_=xb.div`
  background: linear-gradient(135deg, ${e=>e.gradient});
  border-radius: 16px;
  padding: 28px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: ${e=>e.onClick?"pointer":"default"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(30px, -30px);
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  }
`,o_=xb.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`,a_=xb.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
`,s_=xb.div`
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 500;
  position: relative;
  z-index: 1;
`,l_=xb.div`
  margin-bottom: 40px;
`,c_=xb.div`
  margin-bottom: 40px;
`,u_=xb.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  margin-bottom: 24px;
`,d_=xb.h3`
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
`,h_=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`,f_=xb.div`
  text-align: center;
`,p_=xb.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
`,g_=xb.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`,m_=xb.circle`
  fill: none;
  stroke: #f1f5f9;
  stroke-width: 8;
`,y_=xb.circle`
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: ${e=>e.circumference};
  stroke-dashoffset: ${e=>e.offset};
  transition: stroke-dashoffset 0.5s ease-in-out;
`,v_=xb.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
`,b_=xb.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`,x_=xb.div`
  display: flex;
  align-items: end;
  gap: 8px;
  height: 120px;
  padding: 20px 0;
`,w_=xb.div`
  flex: 1;
  background: linear-gradient(to top, ${e=>e.color}, ${e=>e.lightColor});
  border-radius: 4px 4px 0 0;
  height: ${e=>e.height}%;
  min-height: 20px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,__=xb.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  font-weight: 600;
  color: #1e293b;
  white-space: nowrap;
`,E_=xb.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,S_=xb.div`
  flex: 1;
  text-align: center;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
`,k_=xb.h2`
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 24px;
  font-weight: 600;
`,C_=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,T_=xb.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: #3b82f6;
  }
`,I_=xb.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,A_=xb.div`
  font-size: 1.8rem;
`,R_=xb.h3`
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0;
`,P_=xb.div`
  display: flex;
  justify-content: center;
`,N_=xb.div`
  text-align: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
`,O_=xb.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
`,D_=xb.div`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`,j_=xb.div`
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 2px solid #f1f5f9;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${e=>e.onClick?"pointer":"default"};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${e=>e.accentColor};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: ${e=>e.accentColor};
    
    &::before {
      transform: scaleX(1);
    }
  }
`,L_=xb.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${e=>e.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  ${j_}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`,z_=xb.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 8px;
  line-height: 1;
`,F_=xb.div`
  font-size: 1rem;
  color: #64748b;
  font-weight: 600;
  letter-spacing: 0.025em;
`,M_=xb.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`,U_=()=>{const[t,n]=(0,e.useState)({totalParticipants:0,hiLabParticipants:0,courseParticipants:0,totalOrganizations:0}),[r,i]=(0,e.useState)({schools:{total:0,hiLab:0,courses:0,orgCount:0},colleges:{total:0,hiLab:0,courses:0,orgCount:0},corporates:{total:0,hiLab:0,courses:0,orgCount:0},individuals:{total:0,hiLab:0,courses:0,orgCount:0}}),[o,a]=(0,e.useState)(!0),[s,l]=(0,e.useState)(""),c=wg();(0,e.useEffect)(()=>{(async()=>{a(!0),l("");try{const[e,t]=await Promise.all([$f(Kh(bp,"Organizations")),$f(Kh(bp,"Users"))]),r=t.docs.map(e=>({id:e.id,...e.data()})).filter(e=>"user"===e.role),o=e.docs.map(e=>{const t=e.data(),n=r.filter(t=>t.organizationId===e.id);return{id:e.id,name:t.name||"N/A",type:t.type||"N/A",participantsCount:n.length,joinedDate:t.joinedOn||t.joinedDate||"N/A",hasHILab:t.hasHILab||!1,hasCourses:t.hasCourses||!1,hasWorkshops:t.hasWorkshops||!1,participants:n}}),a=r.length,s=r.filter(e=>e.labName).length,l=r.filter(e=>e.courses&&e.courses.length>0).length,c=o.length;n({totalParticipants:a,hiLabParticipants:s,courseParticipants:l,totalOrganizations:c});const u={schools:{total:0,hiLab:0,courses:0,orgCount:0},colleges:{total:0,hiLab:0,courses:0,orgCount:0},corporates:{total:0,hiLab:0,courses:0,orgCount:0},individuals:{total:0,hiLab:0,courses:0,orgCount:0}};o.forEach(e=>{const t="school"===e.type.toLowerCase()?"schools":"college"===e.type.toLowerCase()?"colleges":"corporate"===e.type.toLowerCase()?"corporates":"individual"===e.type.toLowerCase()?"individuals":null;t&&u[t]&&(u[t].total+=e.participantsCount,u[t].hiLab+=e.participants.filter(e=>e.labName).length,u[t].courses+=e.participants.filter(e=>e.courses&&e.courses.length>0).length,u[t].orgCount+=1)}),i(u)}catch(e){console.error("Error fetching data for Super Admin Dashboard:",e),l("Failed to load dashboard data. Please try again.")}finally{a(!1)}})()},[]);const u=e=>{c(`/participants?category=${e}`)};return(0,xp.jsxs)(Jw,{children:[(0,xp.jsx)(Xw,{}),(0,xp.jsx)(Zw,{children:o?(0,xp.jsx)(zb,{}):s?(0,xp.jsx)(M_,{children:s}):(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsxs)(e_,{children:[(0,xp.jsx)(t_,{children:"Super Admin Dashboard"}),(0,xp.jsx)(n_,{children:"Comprehensive overview of all participants and organizations"})]}),(0,xp.jsxs)(r_,{children:[(0,xp.jsxs)(i_,{gradient:"#3b82f6, #2563eb",children:[(0,xp.jsx)(o_,{children:"\ud83d\udc65"}),(0,xp.jsx)(a_,{children:t.totalParticipants}),(0,xp.jsx)(s_,{children:"Total Participants"})]}),(0,xp.jsxs)(i_,{gradient:"#10b981, #059669",children:[(0,xp.jsx)(o_,{children:"\ud83c\udfe2"}),(0,xp.jsx)(a_,{children:t.hiLabParticipants}),(0,xp.jsx)(s_,{children:"Lab Enrolled"})]}),(0,xp.jsxs)(i_,{gradient:"#f59e0b, #d97706",children:[(0,xp.jsx)(o_,{children:"\ud83d\udcda"}),(0,xp.jsx)(a_,{children:t.courseParticipants}),(0,xp.jsx)(s_,{children:"Course Enrolled"})]}),(0,xp.jsxs)(i_,{gradient:"#8b5cf6, #7c3aed",children:[(0,xp.jsx)(o_,{children:"\ud83c\udfe2"}),(0,xp.jsx)(a_,{children:t.totalOrganizations}),(0,xp.jsx)(s_,{children:"Organizations"})]})]}),(0,xp.jsxs)(l_,{children:[(0,xp.jsx)(k_,{children:"\ud83c\udfe2 Organizations by Category"}),(0,xp.jsxs)(r_,{children:[(0,xp.jsxs)(j_,{accentColor:"#3b82f6",onClick:()=>c("/organizations/school"),children:[(0,xp.jsx)(L_,{bgColor:"rgba(59, 130, 246, 0.1)",children:"\ud83c\udfeb"}),(0,xp.jsx)(z_,{children:r.schools.orgCount}),(0,xp.jsx)(F_,{children:"Schools"})]}),(0,xp.jsxs)(j_,{accentColor:"#10b981",onClick:()=>c("/organizations/college"),children:[(0,xp.jsx)(L_,{bgColor:"rgba(16, 185, 129, 0.1)",children:"\ud83c\udf93"}),(0,xp.jsx)(z_,{children:r.colleges.orgCount}),(0,xp.jsx)(F_,{children:"Colleges"})]}),(0,xp.jsxs)(j_,{accentColor:"#f59e0b",onClick:()=>c("/organizations/corporate"),children:[(0,xp.jsx)(L_,{bgColor:"rgba(245, 158, 11, 0.1)",children:"\ud83c\udfe2"}),(0,xp.jsx)(z_,{children:r.corporates.orgCount}),(0,xp.jsx)(F_,{children:"Corporates"})]}),(0,xp.jsxs)(j_,{accentColor:"#8b5cf6",onClick:()=>c("/organizations/individual"),children:[(0,xp.jsx)(L_,{bgColor:"rgba(139, 92, 246, 0.1)",children:"\ud83d\udc64"}),(0,xp.jsx)(z_,{children:r.individuals.orgCount}),(0,xp.jsx)(F_,{children:"Individuals"})]})]})]}),(0,xp.jsxs)(c_,{children:[(0,xp.jsx)(k_,{children:"Analytics Overview"}),(0,xp.jsxs)(u_,{children:[(0,xp.jsxs)(d_,{children:[(0,xp.jsx)("span",{})," Enrollment Progress"]}),(0,xp.jsxs)(h_,{children:[(0,xp.jsxs)(f_,{children:[(0,xp.jsxs)(p_,{children:[(0,xp.jsxs)(g_,{children:[(0,xp.jsx)(m_,{cx:"60",cy:"60",r:"52"}),t.totalParticipants>0&&(0,xp.jsx)(y_,{cx:"60",cy:"60",r:"52",color:"#3b82f6",circumference:327,offset:327-t.hiLabParticipants/t.totalParticipants*327})]}),(0,xp.jsxs)(v_,{children:[t.totalParticipants>0?Math.round(t.hiLabParticipants/t.totalParticipants*100):0,"%"]})]}),(0,xp.jsx)(b_,{children:"Lab Enrollment Rate"})]}),(0,xp.jsxs)(f_,{children:[(0,xp.jsxs)(p_,{children:[(0,xp.jsxs)(g_,{children:[(0,xp.jsx)(m_,{cx:"60",cy:"60",r:"52"}),t.totalParticipants>0&&(0,xp.jsx)(y_,{cx:"60",cy:"60",r:"52",color:"#10b981",circumference:327,offset:327-t.courseParticipants/t.totalParticipants*327})]}),(0,xp.jsxs)(v_,{children:[t.totalParticipants>0?Math.round(t.courseParticipants/t.totalParticipants*100):0,"%"]})]}),(0,xp.jsx)(b_,{children:"Course Enrollment Rate"})]}),(0,xp.jsxs)(f_,{children:[(0,xp.jsxs)(p_,{children:[(0,xp.jsx)(g_,{children:(0,xp.jsx)(m_,{cx:"60",cy:"60",r:"52"})}),(0,xp.jsx)(v_,{children:t.totalOrganizations})]}),(0,xp.jsx)(b_,{children:"Active Organizations"})]})]})]}),(0,xp.jsxs)(u_,{children:[(0,xp.jsx)(d_,{children:"Category Distribution"}),(0,xp.jsx)(x_,{children:t.totalParticipants>0?(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsx)(w_,{height:Math.max(r.schools.total/t.totalParticipants*100,5),color:"#3b82f6",lightColor:"#93c5fd",children:(0,xp.jsx)(__,{children:r.schools.total})}),(0,xp.jsx)(w_,{height:Math.max(r.colleges.total/t.totalParticipants*100,5),color:"#10b981",lightColor:"#6ee7b7",children:(0,xp.jsx)(__,{children:r.colleges.total})}),(0,xp.jsx)(w_,{height:Math.max(r.corporates.total/t.totalParticipants*100,5),color:"#f59e0b",lightColor:"#fbbf24",children:(0,xp.jsx)(__,{children:r.corporates.total})}),(0,xp.jsx)(w_,{height:Math.max(r.individuals.total/t.totalParticipants*100,5),color:"#8b5cf6",lightColor:"#c4b5fd",children:(0,xp.jsx)(__,{children:r.individuals.total})})]}):(0,xp.jsx)("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"No participant data available"})}),(0,xp.jsxs)(E_,{children:[(0,xp.jsx)(S_,{children:"Schools"}),(0,xp.jsx)(S_,{children:"Colleges"}),(0,xp.jsx)(S_,{children:"Corporates"}),(0,xp.jsx)(S_,{children:"Individuals"})]})]})]}),(0,xp.jsxs)(l_,{children:[(0,xp.jsx)(k_,{children:"Enrollment by Category"}),(0,xp.jsxs)(C_,{children:[(0,xp.jsxs)(T_,{onClick:()=>u("school"),children:[(0,xp.jsxs)(I_,{children:[(0,xp.jsx)(A_,{children:"\ud83c\udfeb"}),(0,xp.jsx)(R_,{children:"Schools"})]}),(0,xp.jsx)(P_,{children:(0,xp.jsxs)(N_,{children:[(0,xp.jsx)(O_,{children:r.schools.total}),(0,xp.jsx)(D_,{children:"Total Students"})]})})]}),(0,xp.jsxs)(T_,{onClick:()=>u("college"),children:[(0,xp.jsxs)(I_,{children:[(0,xp.jsx)(A_,{children:"\ud83c\udf93"}),(0,xp.jsx)(R_,{children:"Colleges"})]}),(0,xp.jsx)(P_,{children:(0,xp.jsxs)(N_,{children:[(0,xp.jsx)(O_,{children:r.colleges.total}),(0,xp.jsx)(D_,{children:"Total Students"})]})})]}),(0,xp.jsxs)(T_,{onClick:()=>u("corporate"),children:[(0,xp.jsxs)(I_,{children:[(0,xp.jsx)(A_,{children:"\ud83c\udfe2"}),(0,xp.jsx)(R_,{children:"Corporates"})]}),(0,xp.jsx)(P_,{children:(0,xp.jsxs)(N_,{children:[(0,xp.jsx)(O_,{children:r.corporates.total}),(0,xp.jsx)(D_,{children:"Total Employees"})]})})]}),(0,xp.jsxs)(T_,{onClick:()=>u("individual"),children:[(0,xp.jsxs)(I_,{children:[(0,xp.jsx)(A_,{children:"\ud83d\udc64"}),(0,xp.jsx)(R_,{children:"Individuals"})]}),(0,xp.jsx)(P_,{children:(0,xp.jsxs)(N_,{children:[(0,xp.jsx)(O_,{children:r.individuals.total}),(0,xp.jsx)(D_,{children:"Total Learners"})]})})]})]})]})]})})]})},V_=xb.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  display: flex;
  flex-direction: column;
  padding-top: ${e=>e.isAdminView?"0":"70px"};
  margin-left: ${e=>e.isAdminView?"250px":"0"};
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`,$_=xb.div`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 30px;
  text-align: center;
`,B_=xb.h2`
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
  font-weight: 700;
  letter-spacing: -0.025em;
`,H_=xb.p`
  color: #64748b;
  margin-bottom: 3rem;
  font-size: 1rem;
  line-height: 1.6;
`,q_=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`,W_=xb.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  height: fit-content;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 16px 16px 0 0;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    border-color: #3b82f6;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,G_=xb.h3`
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`,K_=xb.iframe`
  width: 100%;
  height: 240px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    height: 220px;
  }
`,Y_=xb.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    height: 220px;
  }
`,Q_=(xb.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  width: 100%;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,xb.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  cursor: pointer;
`),X_=(xb(Q_)`
  background: #f8fafc;
  color: #374151;
  border: 1px solid #e2e8f0;
  
  &:hover {
    background: #f1f5f9;
    border-color: #3b82f6;
    color: #3b82f6;
    text-decoration: none;
  }
`,xb.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    text-decoration: none;
    color: white;
  }
`),J_=xb.div`
  padding: 4rem 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.6;
`,Z_=xb.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  background: #fef2f2;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #fecaca;
  line-height: 1.5;
`,eE=()=>{const{user:t,loading:n}=Ep(),{userEmail:r}=_g(),[i,o]=(0,e.useState)([]),[a,s]=(0,e.useState)(!0),[l,c]=(0,e.useState)(""),[u,d]=(0,e.useState)(null),h=!!r,f=r||(null===t||void 0===t?void 0:t.email),p=e=>{if(e.includes("drive.google.com/file/d/")){var t;const n=null===(t=e.match(/\/d\/(.*?)\//))||void 0===t?void 0:t[1];return n?`https://drive.google.com/file/d/${n}/preview`:e}return e},g=e=>e.includes("drive.google.com/file/d/"),m=e=>{if(g(e)){var t;const n=null===(t=e.match(/\/d\/(.*?)\//))||void 0===t?void 0:t[1];return n?`https://drive.google.com/uc?export=download&id=${n}`:e}return e};return(0,e.useEffect)(()=>{(async()=>{if(n||!f)return void s(!1);s(!0),c("");const e=f.toLowerCase();try{const t=Yh(bp,"Users",e),n=await Uf(t);if(n.exists()){const e=n.data();d(e);const t=e.certificates||[];console.log("Fetched certificates:",t),o(t),0===t.length&&c("No achievements yet.")}else c("User data not found for achievements.")}catch(t){console.error("Error fetching certificates:",t),c("Failed to load achievements. Please try again.")}finally{s(!1)}})()},[n,f]),(0,xp.jsxs)(V_,{isAdminView:h,children:[h?(0,xp.jsx)(sw,{}):(0,xp.jsx)(ex,{}),(0,xp.jsxs)($_,{children:[(0,xp.jsx)(B_,{children:h?`${(null===u||void 0===u?void 0:u.username)||"User"}'s Achievements`:"Your Achievements"}),(0,xp.jsx)(H_,{children:"Below are the certificates for courses and labs you have successfully completed."}),n||a?(0,xp.jsx)(zb,{}):l?(0,xp.jsx)(Z_,{children:l}):i.length>0?(0,xp.jsx)(q_,{children:i.map((e,t)=>(0,xp.jsxs)(W_,{children:[(0,xp.jsxs)(G_,{children:["Certificate ",t+1]}),g(e)?(0,xp.jsx)(K_,{src:p(e),title:`Certificate ${t+1}`,onClick:()=>window.open(e,"_blank"),style:{cursor:"pointer"}}):(0,xp.jsx)(Y_,{src:e,alt:`Certificate ${t+1}`,onClick:()=>window.open(e,"_blank"),style:{cursor:"pointer"},onError:t=>{console.log("Failed to load certificate:",e),t.target.onerror=null,t.target.src="https://placehold.co/300x200/E0E0E0/555555?text=Certificate+Not+Available"}}),(0,xp.jsx)(X_,{href:m(e),target:"_blank",rel:"noopener noreferrer",download:!0,children:"Download Certificate"})]},t))}):(0,xp.jsx)(J_,{children:"No achievements yet."})]})]})},tE=xb.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  display: flex;
  margin-left: 250px;
`,nE=xb.div`
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`,rE=xb.h2`
  font-size: 1.875rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
`,iE=xb.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,oE=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.95rem;
  
  &:last-child {
    border-bottom: none;
  }
`,aE=xb.span`
  color: #64748b;
  font-weight: 500;
`,sE=xb.span`
  color: #1e293b;
  font-weight: 600;
  text-align: right;
`,lE=xb.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 3px solid #f1f5f9;
`,cE=xb.h3`
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-align: center;
`,uE=xb.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,dE=xb.a`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  background: #eff6ff;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #dbeafe;
    text-decoration: none;
  }
`,hE=xb.button`
  margin-top: 2rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: #2563eb;
  }
`,fE=xb.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  background: #fef2f2;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
`,pE=()=>{const{participantId:t}=_g(),n=wg(),[r,i]=(vg(),(0,e.useState)(null)),[o,a]=(0,e.useState)(""),[s,l]=(0,e.useState)(!0),[c,u]=(0,e.useState)("");return(0,e.useEffect)(()=>{t&&(async()=>{if(l(!0),u(""),!t)return u("No participant ID provided."),void l(!1);try{const n=Yh(bp,"Users",t),r=await Uf(n);if(r.exists()){const t={id:r.id,...r.data()};if(i(t),t.organizationId&&"Independent"!==t.organizationId)try{const e=Yh(bp,"Organizations",t.organizationId),n=await Uf(e);n.exists()?a(n.data().name||t.organizationId):a(t.organizationId)}catch(e){console.error("Error fetching organization:",e),a(t.organizationId)}else a("Independent")}else u("Participant data not found."),i(null)}catch(n){console.error("Error fetching participant details:",n),u("Failed to load participant details. Please try again.")}finally{l(!1)}})()},[t]),(0,xp.jsxs)(tE,{children:[(0,xp.jsx)(sw,{})," ",(0,xp.jsxs)(nE,{children:[(0,xp.jsx)(rE,{children:"Participant Details"}),s?(0,xp.jsx)(zb,{}):c?(0,xp.jsx)(fE,{children:c}):r?(0,xp.jsxs)(iE,{children:[(0,xp.jsx)(lE,{src:r.photoURL||"https://i.pravatar.cc/150",alt:"Profile"}),(0,xp.jsx)(cE,{children:r.username||"N/A"}),(0,xp.jsx)(uE,{children:r.email||"N/A"}),(0,xp.jsxs)(oE,{children:[(0,xp.jsx)(aE,{children:"Organization:"}),(0,xp.jsx)(sE,{children:o||"Independent"})]}),(0,xp.jsxs)(oE,{children:[(0,xp.jsx)(aE,{children:"Enrolled In:"}),(0,xp.jsx)(sE,{children:r.labName||"N/A"})]}),(0,xp.jsxs)(oE,{children:[(0,xp.jsx)(aE,{children:"Enrollment Date:"}),(0,xp.jsx)(sE,{children:r.enrolment?new Date(r.enrolment).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"N/A"})]}),(0,xp.jsxs)(oE,{children:[(0,xp.jsx)(aE,{children:"Progress:"}),(0,xp.jsxs)(sE,{children:[r.completion||0,"%"]})]}),r.courses&&r.courses.length>0&&(0,xp.jsxs)(oE,{children:[(0,xp.jsx)(aE,{children:"Courses:"}),(0,xp.jsxs)(sE,{children:[r.courses.length," enrolled"]})]}),r.reportUrl&&(0,xp.jsxs)(oE,{children:[(0,xp.jsx)(aE,{children:"Report:"}),(0,xp.jsx)(dE,{href:r.reportUrl,target:"_blank",rel:"noopener noreferrer",children:"View Report"})]}),r.certificates&&r.certificates.length>0&&(0,xp.jsxs)(oE,{children:[(0,xp.jsx)(aE,{children:"Achievements:"}),(0,xp.jsx)(dE,{href:`/achievements/${r.email}`,target:"_blank",rel:"noopener noreferrer",children:"View Certificates"})]}),(0,xp.jsx)(hE,{onClick:()=>n(-1),children:"\u2190 Back"})]}):(0,xp.jsx)(fE,{children:"Participant data not found."})]})]})},gE=xb.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-image: url('${e=>e.backgroundImage}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  
  * {
    box-sizing: border-box;
    font-family: inherit;
  }
  
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
`,mE=xb.div`
  flex: 1;
  margin-left: 280px;
  padding: 32px;
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow-y: auto;
  
  @media (max-width: 1024px) {
    margin-left: 250px;
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 16px;
    padding-top: 76px;
  }
`,yE=xb.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
`,vE=xb.button`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #1e293b;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(59, 130, 246, 0.3);
    color: #3b82f6;
    transform: translateX(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,bE=xb.div`
  flex: 1;
`,xE=xb.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Poppins', 'Inter', sans-serif;
`,wE=xb.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  font-weight: 500;
`,_E=xb.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`,EE=xb.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,SE=xb.input`
  flex: 1;
  min-width: 300px;
  padding: 12px 18px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(59, 130, 246, 0.15);
    background: #ffffff;
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  @media (max-width: 768px) {
    min-width: 200px;
    width: 100%;
    padding: 10px 16px;
  }
`,kE=xb.button`
  padding: 12px 20px;
  border: 1px solid ${e=>e.active?"transparent":"rgba(59, 130, 246, 0.2)"};
  border-radius: 12px;
  background: ${e=>e.active?"linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)":"linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)"};
  color: ${e=>e.active?"white":"#64748b"};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${e=>e.active?"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)":"linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)"};
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: ${e=>e.active?"linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)":"linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"};
    color: ${e=>e.active?"white":"#3b82f6"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`,CE=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,TE=xb.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`,IE=xb.div`
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  font-family: 'Poppins', 'Inter', sans-serif;
  
  ${TE}:hover & {
    color: white;
    -webkit-text-fill-color: white;
    transform: scale(1.1);
  }
`,AE=xb.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
`,RE=xb.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @media (max-width: 768px) {
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
    
    &::before {
      display: none;
    }
  }
`,PE=xb.div`
  display: grid;
  grid-template-columns: 1fr 200px 150px 120px 100px;
  gap: 16px;
  padding: 16px 24px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 600;
  font-size: 0.85rem;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 150px 100px 80px;
    padding: 12px 16px;
    
    div:nth-child(3) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,NE=xb.div`
  display: grid;
  grid-template-columns: 1fr 200px 150px 120px 100px;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #f1f5f9;
  transition: background 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: #f8fafc;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 150px 100px 80px;
    padding: 12px 16px;
    
    div:nth-child(3) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    display: block;
    padding: 16px;
    background: white;
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
    
    .desktop-only {
      display: none;
    }
    
    .mobile-only {
      display: block !important;
    }
  }
`,OE=xb.div`
  font-weight: 700;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Poppins', 'Inter', sans-serif;
`,DE=xb.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
`,jE=xb.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${e=>"active"===e.type?"#dcfce7":"completed"===e.type?"#dbeafe":"#f1f5f9"};
  color: ${e=>"active"===e.type?"#166534":"completed"===e.type?"#1e40af":"#64748b"};
`,LE=xb.button`
  padding: 8px 16px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    
    &::before {
      left: 100%;
    }
  }
`,zE=xb.div`
  padding: 48px 24px;
  text-align: center;
  color: #64748b;
`,FE=xb.p`
  color: #dc2626;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`,ME=()=>{const{user:t,loading:n}=Ep(),r=wg(),{organizationId:i}=_g(),[o]=Am(),a=o.get("category"),s=o.get("course"),l=o.get("title"),[c,u]=(0,e.useState)([]),[d,h]=(0,e.useState)(!0),[f,p]=(0,e.useState)(""),[g,m]=(0,e.useState)(""),[y,v]=(0,e.useState)(""),[b,x]=(0,e.useState)("all"),[w,_]=(0,e.useState)([]),E=i||(null===t||void 0===t?void 0:t.organizationId);(0,e.useEffect)(()=>{(async()=>{if(!n){if(!t)return m("User not authenticated."),void h(!1);console.log("Current user:",t),console.log("User organizationId:",t.organizationId),console.log("Param organizationId:",i),console.log("Final organizationId:",E),h(!0),m("");try{const e=(await $f(Kh(bp,"Organizations"))).docs.map(e=>({id:e.id,...e.data()}));if(_(e),s&&l)p(`Course: ${decodeURIComponent(l)}`);else if(a){const e=a.charAt(0).toUpperCase()+a.slice(1)+"s";p(`${e} Category`)}else if(E&&"undefined"!==E){const e=Yh(bp,"Organizations",E),t=await Uf(e);t.exists()?p(t.data().name||"Unknown Organization"):p("Unknown Organization")}else p("All Organizations");let t;t=E&&"undefined"!==E?Tf(Kh(bp,"Users"),Af("organizationId","==",E),Af("role","==","user")):Tf(Kh(bp,"Users"),Af("role","==","user"));let n=(await $f(t)).docs.map(e=>({id:e.id,...e.data()}));if(a){const t=e.filter(e=>e.type&&e.type.toLowerCase()===a.toLowerCase()).map(e=>e.id);n=n.filter(e=>t.includes(e.organizationId))}s&&(n=n.filter(e=>{if(!e.courses)return!1;return(Array.isArray(e.courses)?e.courses:[e.courses]).some(e=>String(e).toLowerCase().trim()===s.toLowerCase())})),console.log("Fetched participants:",n),u(n)}catch(e){console.error("Error fetching data:",e),m("Failed to load participants data. Please try again.")}finally{h(!1)}}})()},[t,n,E]);const S=c.filter(e=>{var t,n;return((null===(t=e.username)||void 0===t?void 0:t.toLowerCase().includes(y.toLowerCase()))||(null===(n=e.email)||void 0===n?void 0:n.toLowerCase().includes(y.toLowerCase())))&&(()=>{switch(b){case"hilabs":return e.labName;case"courses":return e.courses&&e.courses.length>0;case"completed":return e.completion>=100;default:return!0}})()}),{total:k,hiLabs:C,courses:T,completed:I}=(()=>{const e=c.length,t=c.filter(e=>e.labName).length,n=c.filter(e=>e.courses&&e.courses.length>0).length,r=c.filter(e=>e.completion>=100).length;return{total:e,hiLabs:t,courses:n,completed:r}})(),A=e=>{r(`/participants/${e}`)};if(n||d)return(0,xp.jsxs)(gE,{children:[(0,xp.jsx)(sw,{}),(0,xp.jsx)(mE,{children:(0,xp.jsx)(zb,{})})]});if(g)return(0,xp.jsxs)(gE,{children:[(0,xp.jsx)(sw,{}),(0,xp.jsx)(mE,{children:(0,xp.jsx)(FE,{children:g})})]});const R=s&&l?{"Empowering Human Intelligence \u2013 7-Day Online Course":"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The 7-Day Reset: Clarity, Confidence, and Communication":"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The 30-Day Foundation: Purpose-Driven Professionalism":"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The 45-Day Career Rewire: Aligning Work with Self":"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Leadership from Within: 21-Day Intensive for Founders & Changemakers":"https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The Aaruchudar Educator Program (30 Days or Custom)":"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Institutional Innovation Catalyst":"https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Custom Sprint Labs / Retreats":"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"}[decodeURIComponent(l)]||"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80":"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";return(0,xp.jsxs)(gE,{backgroundImage:R,children:[(0,xp.jsx)(sw,{}),(0,xp.jsxs)(mE,{children:[(0,xp.jsxs)(yE,{children:[(0,xp.jsx)(vE,{onClick:()=>r(-1),children:"\u2190"}),(0,xp.jsxs)(bE,{children:[(0,xp.jsx)(xE,{children:"Participants"}),(0,xp.jsxs)(wE,{children:["Manage and view all participants in ",f]})]})]}),!s&&(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsxs)(CE,{children:[(0,xp.jsxs)(TE,{onClick:()=>x("all"),children:[(0,xp.jsx)(IE,{children:k}),(0,xp.jsx)(AE,{children:"Total Participants"})]}),(0,xp.jsxs)(TE,{onClick:()=>x("hilabs"),children:[(0,xp.jsx)(IE,{children:C}),(0,xp.jsx)(AE,{children:"HI Labs Enrolled"})]}),(0,xp.jsxs)(TE,{onClick:()=>x("courses"),children:[(0,xp.jsx)(IE,{children:T}),(0,xp.jsx)(AE,{children:"Courses Enrolled"})]}),(0,xp.jsxs)(TE,{onClick:()=>x("completed"),children:[(0,xp.jsx)(IE,{children:I}),(0,xp.jsx)(AE,{children:"Completed"})]})]}),(0,xp.jsx)(_E,{children:(0,xp.jsxs)(EE,{children:[(0,xp.jsx)(SE,{type:"text",placeholder:"Search participants by name or email...",value:y,onChange:e=>v(e.target.value)}),(0,xp.jsx)(kE,{active:"all"===b,onClick:()=>x("all"),children:"All"}),(0,xp.jsx)(kE,{active:"hilabs"===b,onClick:()=>x("hilabs"),children:"HI Labs"}),(0,xp.jsx)(kE,{active:"courses"===b,onClick:()=>x("courses"),children:"Courses"}),(0,xp.jsx)(kE,{active:"completed"===b,onClick:()=>x("completed"),children:"Completed"})]})})]}),(0,xp.jsxs)(RE,{children:[(0,xp.jsxs)(PE,{children:[(0,xp.jsx)("div",{children:"Participant"}),(0,xp.jsx)("div",{children:"Lab/Course"}),(0,xp.jsx)("div",{children:"Progress"}),(0,xp.jsx)("div",{children:"Status"}),(0,xp.jsx)("div",{children:"Action"})]}),0===S.length?(0,xp.jsx)(zE,{children:y||"all"!==b?"No participants match your current filters.":"No participants found."}):S.map(e=>{var t,n,r,i;return(0,xp.jsxs)(NE,{onClick:()=>A(e.id),children:[(0,xp.jsxs)(OE,{children:[(0,xp.jsx)(DE,{src:e.photoURL||"https://i.pravatar.cc/150",alt:e.username||e.email}),(0,xp.jsxs)("div",{children:[(0,xp.jsx)("div",{children:e.username||(null===(t=e.email)||void 0===t?void 0:t.split("@")[0])}),(0,xp.jsx)("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:e.email}),a&&(0,xp.jsx)("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:(null===(n=w.find(t=>t.id===e.organizationId))||void 0===n?void 0:n.name)||"Unknown Org"})]})]}),(0,xp.jsx)("div",{className:"desktop-only",children:e.labName||(null===(r=e.courses)||void 0===r?void 0:r[0])||"Not enrolled"}),(0,xp.jsxs)("div",{className:"desktop-only",children:[e.completion||0,"%"]}),(0,xp.jsx)("div",{className:"desktop-only",children:(0,xp.jsx)(jE,{type:e.completion>=100?"completed":e.labName?"active":"inactive",children:e.completion>=100?"Completed":e.labName?"Active":"Inactive"})}),(0,xp.jsx)("div",{className:"desktop-only",children:(0,xp.jsx)(LE,{onClick:t=>{t.stopPropagation(),A(e.id)},children:"View"})}),(0,xp.jsx)("div",{className:"mobile-only",style:{display:"none"},children:(0,xp.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"8px"},children:[(0,xp.jsxs)("div",{children:[(0,xp.jsxs)("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:["Lab/Course: ",e.labName||(null===(i=e.courses)||void 0===i?void 0:i[0])||"Not enrolled"]}),(0,xp.jsxs)("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:["Progress: ",e.completion||0,"%"]})]}),(0,xp.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,xp.jsx)(jE,{type:e.completion>=100?"completed":e.labName?"active":"inactive",children:e.completion>=100?"Completed":e.labName?"Active":"Inactive"}),(0,xp.jsx)(LE,{onClick:t=>{t.stopPropagation(),A(e.id)},children:"View"})]})]})})]},e.id)})]})]})]})},UE=xb.div`
  height: 100vh;
  background: linear-gradient(135deg, #e3f2fd, #fce4ec);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`,VE=xb.h1`
  font-size: 6rem;
  margin-bottom: 10px;
  color: #3f51b5;
`,$E=xb.p`
  font-size: 1.4rem;
  color: #444;
  margin-bottom: 20px;
`,BE=xb(Sm)`
  padding: 12px 24px;
  font-size: 1rem;
  color: white;
  background-color: #5c6bc0;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #3f51b5;
  }
`,HE=()=>(0,xp.jsxs)(UE,{children:[(0,xp.jsx)(VE,{children:"404"}),(0,xp.jsx)($E,{children:"Oops! The page you're looking for doesn't exist."}),(0,xp.jsx)(BE,{to:"/",children:"Go to Home"})]}),qE=xb.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`,WE=xb.div`
  flex: 1;
  margin-left: 300px;
  padding: 48px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 32px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`,GE=xb.div`
  margin-bottom: 48px;
`,KE=xb.h1`
  font-size: 2.5rem;
  color: #1e293b;
  margin: 0 0 12px 0;
  font-weight: 700;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,YE=xb.p`
  font-size: 1.1rem;
  color: #64748b;
  margin: 0;
  font-weight: 400;
`,QE=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
`,XE=xb(Sm)`
  background: white;
  border-radius: 20px;
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  cursor: pointer;

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }

  &:hover .card-background {
    transform: scale(1.1);
    opacity: 0.9;
  }

  &:hover .card-image {
    opacity: 0.6;
  }

  &:hover .card-overlay {
    opacity: 0.7;
  }

  &:hover .card-content {
    transform: translateY(-8px);
  }

  &:hover .card-icon {
    transform: scale(1.2) rotate(5deg);
  }

  &:active {
    transform: translateY(-8px) scale(1.01);
  }
`,JE=xb.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: ${e=>e.gradient};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`,ZE=xb.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  filter: blur(2px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
`,eS=xb.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
`,tS=xb.div`
  position: relative;
  z-index: 4;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,nS=xb.div`
  font-size: 2.5rem;
  margin-bottom: 12px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  align-self: flex-start;
`,rS=xb.div`
  margin-top: auto;
`,iS=xb.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px 0;
  line-height: 1.3;
  font-family: "Inter", "Segoe UI", sans-serif;
`,oS=xb.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
  font-family: "Inter", "Segoe UI", sans-serif;
`,aS=xb.div`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #64748b;
  transition: all 0.3s ease;
  z-index: 5;
`,sS=()=>(0,xp.jsxs)(qE,{children:[(0,xp.jsx)(Xw,{}),(0,xp.jsxs)(WE,{children:[(0,xp.jsxs)(GE,{children:[(0,xp.jsx)(KE,{children:"Organization Categories"}),(0,xp.jsx)(YE,{children:"Select a category to view and manage organizations"})]}),(0,xp.jsx)(QE,{children:[{name:"Schools",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",icon:"\ud83c\udfeb",description:"Educational institutions and K-12 schools",image:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032&auto=format&fit=crop"},{name:"Colleges",gradient:"linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",icon:"\ud83c\udf93",description:"Universities and higher education institutes",image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"},{name:"Corporates",gradient:"linear-gradient(135deg, #2af598 0%, #009efd 100%)",icon:"\ud83c\udfe2",description:"Business organizations and enterprises",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop"},{name:"Individuals",gradient:"linear-gradient(135deg, #ef32d9 0%, #89fffd 100%)",icon:"\ud83d\udc64",description:"Individual learners and professionals",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"}].map(e=>(0,xp.jsxs)(XE,{to:`/organizations/${e.name.toLowerCase()}`,children:[(0,xp.jsx)(JE,{className:"card-background",gradient:e.gradient}),(0,xp.jsx)(ZE,{className:"card-image",image:e.image}),(0,xp.jsx)(eS,{className:"card-overlay"}),(0,xp.jsx)(aS,{children:"\u2192"}),(0,xp.jsxs)(tS,{className:"card-content",children:[(0,xp.jsx)("div",{children:(0,xp.jsx)(nS,{className:"card-icon",children:e.icon})}),(0,xp.jsxs)(rS,{children:[(0,xp.jsx)(iS,{children:e.name}),(0,xp.jsx)(oS,{children:e.description})]})]})]},e.name))})]})]}),lS=xb.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`,cS=xb.div`
  flex: 1;
  margin-left: 300px;
  padding: 32px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`,uS=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`,dS=xb.div``,hS=xb.h1`
  font-size: 2rem;
  color: #1e293b;
  margin: 0 0 8px 0;
  font-weight: 700;
  text-transform: capitalize;
`,fS=xb.p`
  color: #64748b;
  font-size: 1rem;
  margin: 0;
`,pS=xb.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`,gS=xb.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`,mS=xb.input`
  flex: 1;
  min-width: 300px;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,yS=xb.select`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  background: white;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`,vS=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #64748b;
  font-size: 0.9rem;
`,bS=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`,xS=xb.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: #3b82f6;
  }
`,wS=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`,_S=xb.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 600;
  line-height: 1.3;
`,ES=xb.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: #dcfce7;
  color: #166534;
`,SS=xb.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,kS=xb.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #64748b;
`,CS=xb.span`
  font-weight: 500;
  color: #374151;
`,TS=xb.div`
  text-align: center;
  padding: 48px 24px;
  color: #64748b;
  
  h3 {
    color: #374151;
    margin-bottom: 8px;
  }
`,IS=xb.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #475569;
    border-color: #cbd5e1;
  }
`,AS=()=>{const{category:t}=_g(),n=wg(),[r,i]=(0,e.useState)([]),[o,a]=(0,e.useState)(!0),[s,l]=(0,e.useState)(""),[c,u]=(0,e.useState)(""),[d,h]=(0,e.useState)("name");(0,e.useEffect)(()=>{(async()=>{a(!0),l("");try{let e=t;e.endsWith("s")&&(e=e.slice(0,-1));const n=e.charAt(0).toUpperCase()+e.slice(1),r=Tf(Kh(bp,"Organizations"),Af("type","==",n)),o=(await $f(r)).docs.map(e=>{const t=e.data();return console.log("Organization data:",t),{id:e.id,...t}});i(o)}catch(e){console.error("Error fetching organizations by category:",e),l("Failed to load organizations. Please try again.")}finally{a(!1)}})()},[t]);const f=(0,e.useMemo)(()=>r.filter(e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(c.toLowerCase())}).sort((e,t)=>{switch(d){case"name":return(e.name||"").localeCompare(t.name||"");case"date":return new Date(t.joinedDate||0)-new Date(e.joinedDate||0);default:return 0}}),[r,c,d]);return(0,xp.jsxs)(lS,{children:[(0,xp.jsx)(Xw,{}),(0,xp.jsxs)(cS,{children:[(0,xp.jsxs)(uS,{children:[(0,xp.jsxs)(dS,{children:[(0,xp.jsxs)(hS,{children:[t," Organizations"]}),(0,xp.jsx)(fS,{children:"Manage organizations in this category"})]}),(0,xp.jsx)(IS,{onClick:()=>n("/organizations"),children:"\u2190 Back to Organizations"})]}),(0,xp.jsx)(pS,{children:(0,xp.jsxs)(gS,{children:[(0,xp.jsx)(mS,{type:"text",placeholder:"Search organizations...",value:c,onChange:e=>u(e.target.value)}),(0,xp.jsxs)(yS,{value:d,onChange:e=>h(e.target.value),children:[(0,xp.jsx)("option",{value:"name",children:"Sort by Name"}),(0,xp.jsx)("option",{value:"date",children:"Sort by Join Date"})]})]})}),o?(0,xp.jsx)(zb,{}):s?(0,xp.jsxs)(TS,{children:[(0,xp.jsx)("h3",{children:"Error"}),(0,xp.jsx)("p",{children:s})]}):(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsx)(vS,{children:(0,xp.jsxs)("span",{children:["Showing ",f.length," of ",r.length," organizations"]})}),0===f.length?(0,xp.jsxs)(TS,{children:[(0,xp.jsx)("h3",{children:"No organizations found"}),(0,xp.jsx)("p",{children:c?`No organizations match "${c}"`:"No organizations found in this category."})]}):(0,xp.jsx)(bS,{children:f.map(e=>(0,xp.jsxs)(xS,{onClick:()=>n(`/admin/${e.id}`),children:[(0,xp.jsxs)(wS,{children:[(0,xp.jsx)(_S,{children:e.name}),(0,xp.jsx)(ES,{children:"Active"})]}),(0,xp.jsxs)(SS,{children:[(0,xp.jsxs)(kS,{children:[(0,xp.jsx)(CS,{children:"\ud83d\udcc5 Joined:"}),(()=>{const t=[e.joinedOn,e.joinedDate,e.createdAt,e.dateCreated,e.enrolledDate,e.created_at,e.timestamp,e.registrationDate,e.signupDate];for(let e of t)if(e&&"N/A"!==e&&null!==e)try{const t=new Date(e);if(!isNaN(t.getTime()))return t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(xC){continue}return"Not Available"})()]}),(0,xp.jsxs)(kS,{children:[(0,xp.jsx)(CS,{children:"\ud83c\udfe2 Type:"}),e.type||"N/A"]})]})]},e.id))})]})]})]})},RS=xb.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`,PS=xb.div`
  flex: 1;
  margin-left: 300px;
  padding: 32px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`,NS=xb.div`
  margin-bottom: 32px;
`,OS=xb.h1`
  font-size: 2rem;
  color: #1e293b;
  margin: 0 0 8px 0;
  font-weight: 700;
`,DS=xb.p`
  color: #64748b;
  font-size: 1rem;
  margin: 0;
`,jS=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 28px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,LS=xb.div`
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.bgGradient||"white"};
    opacity: 0.1;
    z-index: 1;
  }
  
  &::after {
    content: '${e=>e.icon||""}';
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 2rem;
    opacity: 0.15;
    z-index: 1;
    color: #64748b;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    border-color: #10b981;
    
    &::before {
      opacity: 0.15;
    }
    
    &::after {
      opacity: 0.3;
      transform: scale(1.05);
      color: #10b981;
    }
  }
`,zS=xb.div`
  margin-bottom: 20px;
  padding-right: 60px;
`,FS=xb.h3`
  font-size: 1.3rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.3;
`,MS=xb.div`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  color: #10b981;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.1);
`,US=xb.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
`,VS=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;
`,$S=xb.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10b981;
  font-weight: 600;
  font-size: 0.9rem;
  background: rgba(16, 185, 129, 0.1);
  padding: 6px 12px;
  border-radius: 12px;
`,BS=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`,HS=xb.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  color: #166534;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(22, 101, 52, 0.1);
`,qS=xb.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }
`,WS=(xb.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: modalFadeIn 0.3s ease-out;
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`,xb.div`
  background: ${e=>e.bgGradient||"white"};
  border-radius: 20px;
  padding: 0;
  max-width: 700px;
  width: 90%;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.bgPattern||"rgba(255, 255, 255, 0.95)"};
    z-index: 1;
  }
  
  &::after {
    content: '${e=>e.icon||""}';
    position: absolute;
    top: 30px;
    right: 80px;
    font-size: 4rem;
    opacity: 0.1;
    z-index: 1;
  }
  
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(50px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`,xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 0 32px;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
`,xb.h2`
  font-size: 1.8rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0;
  max-width: 80%;
  line-height: 1.3;
  animation: titleSlideIn 0.6s ease-out 0.2s both;
  
  @keyframes titleSlideIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,xb.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #64748b;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    transform: scale(1.1);
  }
`,xb.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 32px 32px 32px;
  position: relative;
  z-index: 2;
  max-height: 60vh;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(16, 185, 129, 0.3);
    border-radius: 3px;
  }
`,xb.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: participantSlideIn 0.5s ease-out;
  animation-delay: ${e=>.1*(e.index||0)}s;
  animation-fill-mode: both;
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  @keyframes participantSlideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,xb.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(16, 185, 129, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(16, 185, 129, 0.5);
    transform: scale(1.1);
  }
`,xb.div`
  flex: 1;
`,xb.div`
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
  font-size: 1.1rem;
`,xb.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`,xb.div`
  text-align: center;
  padding: 60px 32px;
  color: #64748b;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '🔬';
    font-size: 4rem;
    display: block;
    margin-bottom: 16px;
    opacity: 0.3;
  }
`,()=>{const t=wg(),[n,r]=(0,e.useState)(null),[i,o]=(0,e.useState)([]),[a,s]=(0,e.useState)(!1),[l,c]=(0,e.useState)([]);(0,e.useEffect)(()=>{(async()=>{try{const e=(await $f(Kh(bp,"Users"))).docs.map(e=>({id:e.id,...e.data()}));c(e)}catch(e){console.error("Error fetching users:",e)}})()},[]);const u=e=>({"Clarity as Culture":"Build organizational clarity through structured communication and shared understanding.","Decision-Making Without Drama":"Learn to make effective decisions while minimizing workplace conflict and tension.","Inner Focus in Noisy Worlds":"Develop mindfulness and concentration skills in distracting environments.","The Power of Listening":"Master active listening techniques to improve communication and relationships.","Intelligent Conflict and Recovery":"Navigate conflicts intelligently and build stronger relationships through recovery.","Systemic Thinking":"Understand complex systems and develop strategic thinking capabilities.","Voice, Value and Vulnerability":"Discover your authentic voice while embracing vulnerability as a leadership strength.","Leadership Without Imitation":"Develop your unique leadership style without copying others."}[e]||"Intensive lab experience designed to develop specific skills and capabilities."),d=e=>({"Clarity as Culture":"radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Decision-Making Without Drama":"radial-gradient(circle at 30% 70%, rgba(240, 147, 251, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(245, 87, 108, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Inner Focus in Noisy Worlds":"radial-gradient(circle at 25% 75%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(0, 242, 254, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","The Power of Listening":"radial-gradient(circle at 35% 65%, rgba(67, 233, 123, 0.3) 0%, transparent 50%), radial-gradient(circle at 65% 35%, rgba(56, 249, 215, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Intelligent Conflict and Recovery":"radial-gradient(circle at 40% 60%, rgba(250, 112, 154, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(254, 225, 64, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Systemic Thinking":"radial-gradient(circle at 45% 55%, rgba(168, 237, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 55% 45%, rgba(254, 214, 227, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Voice, Value and Vulnerability":"radial-gradient(circle at 50% 50%, rgba(255, 154, 158, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(254, 207, 239, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Leadership Without Imitation":"radial-gradient(circle at 60% 40%, rgba(255, 236, 210, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(252, 182, 159, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)"}[e]||"rgba(255, 255, 255, 0.9)"),h=e=>({"Clarity as Culture":"\ud83c\udfdb\ufe0f","Decision-Making Without Drama":"\u2696\ufe0f","Inner Focus in Noisy Worlds":"\ud83e\uddd8","The Power of Listening":"\ud83d\udc42","Intelligent Conflict and Recovery":"\ud83e\udd1d","Systemic Thinking":"\ud83d\udd04","Voice, Value and Vulnerability":"\ud83c\udfa4","Leadership Without Imitation":"\ud83d\udc51"}[e]||"\ud83d\udd2c");return(0,xp.jsxs)(RS,{children:[(0,xp.jsx)(Xw,{}),(0,xp.jsxs)(PS,{children:[(0,xp.jsxs)(NS,{children:[(0,xp.jsx)(OS,{children:"Labs Management"}),(0,xp.jsx)(DS,{children:"View and manage all available labs and their participants"})]}),(0,xp.jsx)(jS,{children:[{id:1,title:"Clarity as Culture",type:"Organizational",focus:"Culture Building"},{id:2,title:"Decision-Making Without Drama",type:"Leadership",focus:"Decision Skills"},{id:3,title:"Inner Focus in Noisy Worlds",type:"Personal",focus:"Mindfulness"},{id:4,title:"The Power of Listening",type:"Communication",focus:"Active Listening"},{id:5,title:"Intelligent Conflict and Recovery",type:"Conflict Resolution",focus:"Relationship Management"},{id:6,title:"Systemic Thinking",type:"Strategic",focus:"Systems Analysis"},{id:7,title:"Voice, Value and Vulnerability",type:"Personal Growth",focus:"Authentic Leadership"},{id:8,title:"Leadership Without Imitation",type:"Leadership",focus:"Authentic Leadership"}].map(e=>{return(0,xp.jsxs)(LS,{onClick:()=>(e=>{t(`/labs/${e.id}`)})(e),bgGradient:(r=e.title,{"Clarity as Culture":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)","Decision-Making Without Drama":"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","Inner Focus in Noisy Worlds":"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","The Power of Listening":"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)","Intelligent Conflict and Recovery":"linear-gradient(135deg, #fa709a 0%, #fee140 100%)","Systemic Thinking":"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)","Voice, Value and Vulnerability":"linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)","Leadership Without Imitation":"linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"}[r]||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"),bgPattern:d(e.title),hoverBgPattern:d(e.title).replace("0.9)","0.85)"),icon:h(e.title),children:[(0,xp.jsxs)(zS,{children:[(0,xp.jsx)(FS,{children:e.title}),(0,xp.jsx)(MS,{children:"Lab Experience"})]}),(0,xp.jsx)(US,{children:u(e.title)}),(0,xp.jsx)(VS,{children:(0,xp.jsxs)($S,{children:[(0,xp.jsx)("span",{children:"\ud83d\udc65"})," ",(n=e.title,l.filter(e=>e.labName&&e.labName.toLowerCase().includes(n.toLowerCase())).length)," Enrolled"]})}),(0,xp.jsxs)(BS,{children:[(0,xp.jsx)(HS,{children:e.type}),(0,xp.jsx)(qS,{children:"View Details"})]})]},e.id);var n,r})})]})]})}),GS=xb.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`,KS=xb.div`
  flex: 1;
  margin-left: 300px;
  padding: 32px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`,YS=xb.div`
  margin-bottom: 32px;
`,QS=xb.h1`
  font-size: 2rem;
  color: #1e293b;
  margin: 0 0 8px 0;
  font-weight: 700;
`,XS=xb.p`
  color: #64748b;
  font-size: 1rem;
  margin: 0;
`,JS=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 28px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,ZS=xb.div`
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.bgGradient||"white"};
    opacity: 0.1;
    z-index: 1;
  }
  
  &::after {
    content: '${e=>e.icon||""}';
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 2rem;
    opacity: 0.15;
    z-index: 1;
    color: #64748b;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    border-color: #3b82f6;
    
    &::before {
      opacity: 0.15;
    }
    
    &::after {
      opacity: 0.3;
      transform: scale(1.05);
      color: #3b82f6;
    }
  }
`,ek=xb.div`
  margin-bottom: 20px;
  padding-right: 60px;
`,tk=xb.h3`
  font-size: 1.3rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.3;
`,nk=xb.div`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  color: #3b82f6;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.1);
`,rk=xb.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
`,ik=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;
`,ok=xb.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10b981;
  font-weight: 600;
  font-size: 0.9rem;
  background: rgba(16, 185, 129, 0.1);
  padding: 6px 12px;
  border-radius: 12px;
`,ak=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`,sk=xb.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  color: #166534;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(22, 101, 52, 0.1);
`,lk=xb.div`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
`,ck=(xb.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: modalFadeIn 0.3s ease-out;
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`,xb.div`
  background: ${e=>e.bgGradient||"white"};
  border-radius: 20px;
  padding: 0;
  max-width: 700px;
  width: 90%;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.bgPattern||"rgba(255, 255, 255, 0.95)"};
    z-index: 1;
  }
  
  &::after {
    content: '${e=>e.icon||""}';
    position: absolute;
    top: 30px;
    right: 80px;
    font-size: 4rem;
    opacity: 0.1;
    z-index: 1;
  }
  
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(50px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`,xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 0 32px;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
`,xb.h2`
  font-size: 1.8rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0;
  max-width: 80%;
  line-height: 1.3;
  animation: titleSlideIn 0.6s ease-out 0.2s both;
  
  @keyframes titleSlideIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,xb.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #64748b;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    transform: scale(1.1);
  }
`,xb.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 32px 32px 32px;
  position: relative;
  z-index: 2;
  max-height: 60vh;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.3);
    border-radius: 3px;
  }
`,xb.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: participantSlideIn 0.5s ease-out;
  animation-delay: ${e=>.1*(e.index||0)}s;
  animation-fill-mode: both;
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  @keyframes participantSlideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,xb.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
    transform: scale(1.1);
  }
`,xb.div`
  flex: 1;
`,xb.div`
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
  font-size: 1.1rem;
`,xb.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`,xb.div`
  text-align: center;
  padding: 60px 32px;
  color: #64748b;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '📚';
    font-size: 4rem;
    display: block;
    margin-bottom: 16px;
    opacity: 0.3;
  }
`,()=>{const t=wg(),[n,r]=(0,e.useState)([]);(0,e.useEffect)(()=>{(async()=>{try{const e=(await $f(Kh(bp,"Users"))).docs.map(e=>({id:e.id,...e.data()}));console.log("All users fetched:",e),console.log("Users with courses:",e.filter(e=>e.courses)),r(e)}catch(e){console.error("Error fetching users:",e)}})()},[]);const i=e=>{const t={"Empowering Human Intelligence":"Unlock your cognitive potential through structured learning and practical exercises.","The 7-Day Reset":"Transform your mindset with clarity-focused techniques and communication skills.","The 30-Day Foundation":"Build professional excellence through purpose-driven methodologies.","The 45-Day Career Rewire":"Align your career path with your authentic self and values.","Leadership from Within":"Intensive leadership development for founders and change agents.","The Aaruchudar Educator Program":"Comprehensive training program for educators and trainers.","Institutional Innovation Catalyst":"Drive organizational change through innovative thinking.","Custom Sprint Labs":"Tailored intensive workshops for specific organizational needs."},n=Object.keys(t).find(t=>e.includes(t));return t[n]||"Professional development course designed to enhance your skills."},o=e=>{const t={"Empowering Human Intelligence":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)","The 7-Day Reset":"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","The 30-Day Foundation":"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","The 45-Day Career Rewire":"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)","Leadership from Within":"linear-gradient(135deg, #fa709a 0%, #fee140 100%)","The Aaruchudar Educator Program":"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)","Institutional Innovation Catalyst":"linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)","Custom Sprint Labs":"linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"},n=Object.keys(t).find(t=>e.includes(t));return t[n]||"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},a=e=>{const t={"Empowering Human Intelligence":"radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%), rgba(255, 255, 255, 0.9)","The 7-Day Reset":"radial-gradient(circle at 30% 70%, rgba(240, 147, 251, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(245, 87, 108, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","The 30-Day Foundation":"radial-gradient(circle at 25% 75%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(0, 242, 254, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","The 45-Day Career Rewire":"radial-gradient(circle at 35% 65%, rgba(67, 233, 123, 0.3) 0%, transparent 50%), radial-gradient(circle at 65% 35%, rgba(56, 249, 215, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Leadership from Within":"radial-gradient(circle at 40% 60%, rgba(250, 112, 154, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(254, 225, 64, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","The Aaruchudar Educator Program":"radial-gradient(circle at 45% 55%, rgba(168, 237, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 55% 45%, rgba(254, 214, 227, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Institutional Innovation Catalyst":"radial-gradient(circle at 50% 50%, rgba(255, 154, 158, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(254, 207, 239, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)","Custom Sprint Labs":"radial-gradient(circle at 60% 40%, rgba(255, 236, 210, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(252, 182, 159, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)"},n=Object.keys(t).find(t=>e.includes(t));return t[n]||"rgba(255, 255, 255, 0.9)"},s=e=>{const t={"Empowering Human Intelligence":"\ud83e\udde0","The 7-Day Reset":"\ud83d\udd04","The 30-Day Foundation":"\ud83c\udfd7\ufe0f","The 45-Day Career Rewire":"\ud83d\ude80","Leadership from Within":"\ud83d\udc51","The Aaruchudar Educator Program":"\ud83c\udf93","Institutional Innovation Catalyst":"\ud83d\udca1","Custom Sprint Labs":"\u2699\ufe0f"},n=Object.keys(t).find(t=>e.includes(t));return t[n]||"\ud83d\udcda"},l=e=>({"Empowering Human Intelligence \u2013 7-Day Online Course":"course_01","The 7-Day Reset: Clarity, Confidence, and Communication":"course_02","The 30-Day Foundation: Purpose-Driven Professionalism":"course_03","The 45-Day Career Rewire: Aligning Work with Self":"course_04","Leadership from Within: 21-Day Intensive for Founders & Changemakers":"course_05","The Aaruchudar Educator Program (30 Days or Custom)":"course_06","Institutional Innovation Catalyst":"course_07","Custom Sprint Labs / Retreats":"course_08"}[e]),c=e=>{const t=l(e);console.log(`Checking enrollment for "${e}" (ID: ${t})`);const r=n.filter(n=>{if(!n.courses)return!1;const r=(Array.isArray(n.courses)?n.courses:[n.courses]).some(e=>String(e).toLowerCase().trim()===(null===t||void 0===t?void 0:t.toLowerCase()));return r&&console.log(`\u2713 User ${n.email||n.id} enrolled in ${e}`),r});return console.log(`Total enrolled: ${r.length}`),r.length};return(0,xp.jsxs)(GS,{children:[(0,xp.jsx)(Xw,{}),(0,xp.jsxs)(KS,{children:[(0,xp.jsxs)(YS,{children:[(0,xp.jsx)(QS,{children:"Courses Management"}),(0,xp.jsx)(XS,{children:"View and manage all available courses and their participants"})]}),(0,xp.jsx)(JS,{children:[{id:1,title:"Empowering Human Intelligence \u2013 7-Day Online Course",duration:"7 Days",type:"Online"},{id:2,title:"The 7-Day Reset: Clarity, Confidence, and Communication",duration:"7 Days",type:"Reset Program"},{id:3,title:"The 30-Day Foundation: Purpose-Driven Professionalism",duration:"30 Days",type:"Foundation"},{id:4,title:"The 45-Day Career Rewire: Aligning Work with Self",duration:"45 Days",type:"Career Development"},{id:5,title:"Leadership from Within: 21-Day Intensive for Founders & Changemakers",duration:"21 Days",type:"Leadership"},{id:6,title:"The Aaruchudar Educator Program (30 Days or Custom)",duration:"30+ Days",type:"Education"},{id:7,title:"Institutional Innovation Catalyst",duration:"45 Days",type:"Innovation"},{id:8,title:"Custom Sprint Labs / Retreats",duration:"2\u20135 Days",type:"Custom"}].map(e=>(0,xp.jsxs)(ZS,{onClick:()=>(e=>{const n=l(e.title);t(`/participants?course=${n}&title=${encodeURIComponent(e.title)}`)})(e),bgGradient:o(e.title),bgPattern:a(e.title),hoverBgPattern:a(e.title).replace("0.9)","0.85)"),icon:s(e.title),children:[(0,xp.jsxs)(ek,{children:[(0,xp.jsx)(tk,{children:e.title}),(0,xp.jsx)(nk,{children:e.duration})]}),(0,xp.jsx)(rk,{children:i(e.title)}),(0,xp.jsx)(ik,{children:(0,xp.jsxs)(ok,{children:[(0,xp.jsx)("span",{children:"\ud83d\udc65"})," ",c(e.title)," Enrolled"]})}),(0,xp.jsxs)(ak,{children:[(0,xp.jsx)(sk,{children:e.type}),(0,xp.jsx)(lk,{onClick:n=>((e,n)=>{e.stopPropagation();const r=l(n.title);t(`/participants?course=${r}&title=${encodeURIComponent(n.title)}`)})(n,e),children:"View Details"})]})]},e.id))})]})]})}),uk=xb.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  margin: 0 !important;
  padding: 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${e=>e.bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  font-family: "Inter", "Segoe UI", sans-serif;
  overflow-x: hidden;
  
  * {
    box-sizing: border-box;
  }
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`,dk=xb.div`
  flex: 1;
  margin-left: 300px;
  padding: 32px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`,hk=xb.div`
  margin-bottom: 32px;
  animation: headerSlideIn 0.6s ease-out;
  
  @keyframes headerSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,fk=xb.button`
  background: rgba(255, 255, 255, 0.95);
  border: none;
  padding: 12px 20px;
  border-radius: 12px;
  cursor: pointer;
  color: #374151;
  font-weight: 600;
  margin-bottom: 20px;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateX(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`,pk=xb.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin: 0 0 8px 0;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`,gk=xb.p`
  color: #e2e8f0;
  font-size: 1.1rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`,mk=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,yk=xb.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  animation: cardSlideIn 0.5s ease-out;
  animation-delay: ${e=>.1*(e.index||0)}s;
  animation-fill-mode: both;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.98);
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }
  
  @keyframes cardSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,vk=xb.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`,bk=xb.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
    transform: scale(1.05);
  }
`,xk=xb.div`
  flex: 1;
`,wk=xb.div`
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
  font-size: 1.2rem;
`,_k=xb.div`
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 500;
`,Ek=xb.div`
  text-align: center;
  padding: 80px 32px;
  color: #374151;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '📚';
    font-size: 5rem;
    display: block;
    margin-bottom: 20px;
    opacity: 0.4;
  }
`,Sk=()=>{const{courseId:t}=_g(),n=wg(),[r,i]=(0,e.useState)([]),[o,a]=(0,e.useState)(!0),[s,l]=(0,e.useState)(null),c=[{id:1,title:"Empowering Human Intelligence \u2013 7-Day Online Course",duration:"7 Days",type:"Online"},{id:2,title:"The 7-Day Reset: Clarity, Confidence, and Communication",duration:"7 Days",type:"Reset Program"},{id:3,title:"The 30-Day Foundation: Purpose-Driven Professionalism",duration:"30 Days",type:"Foundation"},{id:4,title:"The 45-Day Career Rewire: Aligning Work with Self",duration:"45 Days",type:"Career Development"},{id:5,title:"Leadership from Within: 21-Day Intensive for Founders & Changemakers",duration:"21 Days",type:"Leadership"},{id:6,title:"The Aaruchudar Educator Program (30 Days or Custom)",duration:"30+ Days",type:"Education"},{id:7,title:"Institutional Innovation Catalyst",duration:"45 Days",type:"Innovation"},{id:8,title:"Custom Sprint Labs / Retreats",duration:"2\u20135 Days",type:"Custom"}];(0,e.useEffect)(()=>{const e=c.find(e=>e.id===parseInt(t));l(e),e&&u(e.title)},[t]);const u=async e=>{try{const t=(await $f(Kh(bp,"Users"))).docs.map(e=>({id:e.id,...e.data()})),n=t.filter(t=>t.courses&&t.courses.some(t=>t.toLowerCase().includes(e.toLowerCase().split(" ")[0])||e.toLowerCase().includes(t.toLowerCase())));i(n)}catch(t){console.error("Error fetching participants:",t),i([])}finally{a(!1)}};return s?(0,xp.jsxs)(uk,{bgImage:(e=>{const t={"Empowering Human Intelligence":"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The 7-Day Reset":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The 30-Day Foundation":"https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The 45-Day Career Rewire":"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Leadership from Within":"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The Aaruchudar Educator Program":"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Institutional Innovation Catalyst":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Custom Sprint Labs":"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"},n=Object.keys(t).find(t=>e.includes(t));return t[n]||"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"})(s.title),children:[(0,xp.jsx)(Xw,{}),(0,xp.jsxs)(dk,{children:[(0,xp.jsxs)(hk,{children:[(0,xp.jsx)(fk,{onClick:()=>n("/courses"),children:"\u2190 Back to Courses"}),(0,xp.jsx)(pk,{children:s.title}),(0,xp.jsxs)(gk,{children:[r.length," participants enrolled"]})]}),o?(0,xp.jsx)("div",{style:{padding:"60px 0"},children:(0,xp.jsx)(zb,{})}):r.length>0?(0,xp.jsx)(mk,{children:r.map((e,t)=>{var r;return(0,xp.jsx)(yk,{index:t,onClick:()=>n(`/participants/${e.id}`),children:(0,xp.jsxs)(vk,{children:[(0,xp.jsx)(bk,{src:e.photoURL||"https://i.pravatar.cc/150",alt:e.username||e.email}),(0,xp.jsxs)(xk,{children:[(0,xp.jsx)(wk,{children:e.username||(null===(r=e.email)||void 0===r?void 0:r.split("@")[0])||"Unknown User"}),(0,xp.jsx)(_k,{children:e.email})]})]})},e.id)})}):(0,xp.jsx)(Ek,{children:(0,xp.jsx)("p",{children:"No participants enrolled in this course yet."})})]})]}):(0,xp.jsx)("div",{children:"Course not found"})},kk=xb.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  margin: 0 !important;
  padding: 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${e=>e.bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  font-family: "Inter", "Segoe UI", sans-serif;
  overflow-x: hidden;
  
  * {
    box-sizing: border-box;
  }
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`,Ck=xb.div`
  flex: 1;
  margin-left: 300px;
  padding: 32px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`,Tk=xb.div`
  margin-bottom: 32px;
  animation: headerSlideIn 0.6s ease-out;
  display: flex;
  align-items: center;
  gap: 16px;
  
  @keyframes headerSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Ik=xb.button`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #1e293b;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(59, 130, 246, 0.3);
    color: #3b82f6;
    transform: translateX(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Ak=xb.div`
  flex: 1;
`,Rk=xb.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin: 0 0 8px 0;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`,Pk=xb.p`
  color: #e2e8f0;
  font-size: 1.1rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`,Nk=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ok=xb.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  animation: cardSlideIn 0.5s ease-out;
  animation-delay: ${e=>.1*(e.index||0)}s;
  animation-fill-mode: both;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.98);
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }
  
  @keyframes cardSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Dk=xb.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`,jk=xb.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(16, 185, 129, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(16, 185, 129, 0.5);
    transform: scale(1.05);
  }
`,Lk=xb.div`
  flex: 1;
`,zk=xb.div`
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
  font-size: 1.2rem;
`,Fk=xb.div`
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 500;
`,Mk=xb.div`
  text-align: center;
  padding: 80px 32px;
  color: #374151;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '🔬';
    font-size: 5rem;
    display: block;
    margin-bottom: 20px;
    opacity: 0.4;
  }
`,Uk=()=>{const{labId:t}=_g(),n=wg(),[r,i]=(0,e.useState)([]),[o,a]=(0,e.useState)(!0),[s,l]=(0,e.useState)(null),c=[{id:1,title:"Clarity as Culture",type:"Organizational",focus:"Culture Building"},{id:2,title:"Decision-Making Without Drama",type:"Leadership",focus:"Decision Skills"},{id:3,title:"Inner Focus in Noisy Worlds",type:"Personal",focus:"Mindfulness"},{id:4,title:"The Power of Listening",type:"Communication",focus:"Active Listening"},{id:5,title:"Intelligent Conflict and Recovery",type:"Conflict Resolution",focus:"Relationship Management"},{id:6,title:"Systemic Thinking",type:"Strategic",focus:"Systems Analysis"},{id:7,title:"Voice, Value and Vulnerability",type:"Personal Growth",focus:"Authentic Leadership"},{id:8,title:"Leadership Without Imitation",type:"Leadership",focus:"Authentic Leadership"}];(0,e.useEffect)(()=>{const e=c.find(e=>e.id===parseInt(t));l(e),e&&u(e.title)},[t]);const u=async e=>{try{const t=(await $f(Kh(bp,"Users"))).docs.map(e=>({id:e.id,...e.data()})),n=t.filter(t=>t.labName&&t.labName.toLowerCase().includes(e.toLowerCase()));i(n)}catch(t){console.error("Error fetching participants:",t),i([])}finally{a(!1)}};return s?(0,xp.jsxs)(kk,{bgImage:(d=s.title,{"Clarity as Culture":"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Decision-Making Without Drama":"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Inner Focus in Noisy Worlds":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","The Power of Listening":"https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Intelligent Conflict and Recovery":"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Systemic Thinking":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Voice, Value and Vulnerability":"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80","Leadership Without Imitation":"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"}[d]||"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"),children:[(0,xp.jsx)(Xw,{}),(0,xp.jsxs)(Ck,{children:[(0,xp.jsxs)(Tk,{children:[(0,xp.jsx)(Ik,{onClick:()=>n("/labs"),children:"\u2190"}),(0,xp.jsxs)(Ak,{children:[(0,xp.jsx)(Rk,{children:s.title}),(0,xp.jsxs)(Pk,{children:[r.length," participants enrolled"]})]})]}),o?(0,xp.jsx)("div",{style:{padding:"60px 0"},children:(0,xp.jsx)(zb,{})}):r.length>0?(0,xp.jsx)(Nk,{children:r.map((e,t)=>{var r;return(0,xp.jsx)(Ok,{index:t,onClick:()=>n(`/participants/${e.id}`),children:(0,xp.jsxs)(Dk,{children:[(0,xp.jsx)(jk,{src:e.photoURL||"https://i.pravatar.cc/150",alt:e.username||e.email}),(0,xp.jsxs)(Lk,{children:[(0,xp.jsx)(zk,{children:e.username||(null===(r=e.email)||void 0===r?void 0:r.split("@")[0])||"Unknown User"}),(0,xp.jsx)(Fk,{children:e.email})]})]})},e.id)})}):(0,xp.jsx)(Mk,{children:(0,xp.jsx)("p",{children:"No participants enrolled in this lab yet."})})]})]}):(0,xp.jsx)("div",{children:"Lab not found"});var d},Vk=xb.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f8fafc;
  padding: 40px;
  text-align: center;
`,$k=xb.div`
  font-size: 4rem;
  margin-bottom: 24px;
`,Bk=xb.h1`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 700;
`,Hk=xb.p`
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 32px;
  max-width: 500px;
  line-height: 1.6;
`,qk=xb.button`
  background: #3b82f6;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }
`,Wk=()=>{const e=wg();return(0,xp.jsxs)(Vk,{children:[(0,xp.jsx)($k,{children:"\ud83d\udea7"}),(0,xp.jsx)(Bk,{children:"Reports Page"}),(0,xp.jsx)(Hk,{children:"This page is currently under construction. We're working hard to bring you comprehensive reporting features soon!"}),(0,xp.jsx)(qk,{onClick:()=>e(-1),children:"Go Back"})]})},Gk=xb.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  padding-top: 70px;
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`,Kk=xb.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.875rem;
  text-align: center;
  
  @media (max-width: 1024px) {
    max-width: 1000px;
    padding: 2rem 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`,Yk=xb.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`,Qk=xb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Xk=xb.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
  }
`,Jk=xb.h3`
  font-size: 1.3rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.3;
  width: 100%;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }
`,Zk=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.95rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.75rem 0;
    font-size: 0.9rem;
  }
`,eC=xb.span`
  color: #64748b;
  font-weight: 500;
  font-size: 0.95rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,tC=xb.span`
  color: #1e293b;
  font-weight: 600;
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.95rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.375rem 0.75rem;
  }
`,nC=xb.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.125rem;
  background: #fef2f2;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`,rC=xb.div`
  padding: 3.75rem 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`,iC=()=>{const{user:t,loading:n}=Ep(),[r,i]=(0,e.useState)([]),[o,a]=(0,e.useState)(!0),[s,l]=(0,e.useState)("");return(0,e.useEffect)(()=>{(async()=>{if(n||null===t||void 0===t||!t.email)return void a(!1);a(!0),l("");const e=t.email.toLowerCase();try{const t=Yh(bp,"Users",e),n=await Uf(t);if(n.exists()){const e=n.data().courses||[];if(e.length>0){const t=Kh(bp,"Courses"),n=await $f(t),r=new Map;n.docs.forEach(e=>r.set(e.id,e.data()));const o=e.map(e=>{const t=r.get(e);return t?{id:e,...t}:null}).filter(e=>null!==e);i(o),0===o.length&&l("No detailed course information found for your enrollments.")}else l("You are not currently enrolled in any courses.")}else l("User data not found.")}catch(r){console.error("Error fetching user courses:",r),l("Failed to load your courses. Please try again.")}finally{a(!1)}})()},[t,n]),(0,xp.jsxs)(Gk,{children:[(0,xp.jsx)(ex,{}),(0,xp.jsx)(Kk,{children:n||o?(0,xp.jsx)(zb,{}):s?(0,xp.jsx)(nC,{children:s}):r.length>0?(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsx)(Yk,{children:"Your Enrolled Courses"}),(0,xp.jsx)(Qk,{children:r.map(e=>(0,xp.jsxs)(Xk,{children:[(0,xp.jsx)(Jk,{children:e.name||"N/A"}),(0,xp.jsxs)(Zk,{children:[(0,xp.jsx)(eC,{children:"Category:"}),(0,xp.jsx)(tC,{children:e.category||"N/A"})]}),(0,xp.jsxs)(Zk,{children:[(0,xp.jsx)(eC,{children:"Duration:"}),(0,xp.jsx)(tC,{children:e.duration||"N/A"})]}),(0,xp.jsxs)(Zk,{children:[(0,xp.jsx)(eC,{children:"Status:"}),(0,xp.jsx)(tC,{children:e.active?"Active":"Inactive"})]})]},e.id))})]}):(0,xp.jsx)(rC,{children:"You are not currently enrolled in any courses."})})]})},oC=xb.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  padding-top: 70px;
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`,aC=xb.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`,sC=xb.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`,lC=xb.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 8px;
  }
`,cC=xb.h3`
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  width: 100%;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.375rem;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`,uC=xb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 1rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem 0;
    font-size: 0.9rem;
  }
`,dC=xb.span`
  color: #64748b;
  font-weight: 500;
  font-size: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,hC=xb.span`
  color: #1e293b;
  font-weight: 600;
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.375rem 0.75rem;
  }
`,fC=xb.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.125rem;
  background: #fef2f2;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`,pC=xb.div`
  padding: 3rem 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`,gC=()=>{const{user:t,loading:n}=Ep(),[r,i]=(0,e.useState)(null),[o,a]=(0,e.useState)(!0),[s,l]=(0,e.useState)("");return(0,e.useEffect)(()=>{(async()=>{if(n||null===t||void 0===t||!t.email)return void a(!1);a(!0),l("");const e=t.email.toLowerCase();try{const t=Yh(bp,"Users",e),n=await Uf(t);if(n.exists()){const e=n.data(),t=e.labName,r=e.enrolment;t?i({name:t,enrolledDate:r,category:"HI Lab",duration:"N/A",active:!0}):l("You are not currently enrolled in any HI Labs.")}else l("User data not found.")}catch(r){console.error("Error fetching user HI Lab:",r),l("Failed to load your HI Labs. Please try again.")}finally{a(!1)}})()},[t,n]),(0,xp.jsxs)(oC,{children:[(0,xp.jsx)(ex,{}),(0,xp.jsx)(aC,{children:n||o?(0,xp.jsx)(zb,{}):s?(0,xp.jsx)(fC,{children:s}):r?(0,xp.jsxs)(xp.Fragment,{children:[(0,xp.jsx)(sC,{children:"Your HI Labs"}),(0,xp.jsxs)(lC,{children:[(0,xp.jsx)(cC,{children:r.name||"N/A"}),(0,xp.jsxs)(uC,{children:[(0,xp.jsx)(dC,{children:"Enrolled Date:"}),(0,xp.jsx)(hC,{children:r.enrolledDate?new Date(r.enrolledDate).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"N/A"})]}),(0,xp.jsxs)(uC,{children:[(0,xp.jsx)(dC,{children:"Category:"}),(0,xp.jsx)(hC,{children:r.category||"N/A"})]}),(0,xp.jsxs)(uC,{children:[(0,xp.jsx)(dC,{children:"Duration:"}),(0,xp.jsx)(hC,{children:r.duration||"N/A"})]}),(0,xp.jsxs)(uC,{children:[(0,xp.jsx)(dC,{children:"Status:"}),(0,xp.jsx)(hC,{children:r.active?"Active":"Inactive"})]})]})]}):(0,xp.jsx)(pC,{children:"You are not currently enrolled in any HI Labs."})})]})},mC=e=>{let{children:t,allowedRoles:n}=e;const{user:r,role:i,loading:o}=Ep();if(o)return(0,xp.jsx)(zb,{});if(!r)return(0,xp.jsx)(zg,{to:"/",replace:!0});if(!n.includes(i)){const e="admin"===i?"/admin":"superadmin"===i?"/superadmin":"/dashboard";return(0,xp.jsx)(zg,{to:e,replace:!0})}return t},yC=()=>(0,xp.jsxs)(Ug,{children:[(0,xp.jsx)(Fg,{path:"/",element:(0,xp.jsx)(Db,{})}),(0,xp.jsx)(Fg,{path:"/dashboard",element:(0,xp.jsx)(mC,{allowedRoles:["user"],children:(0,xp.jsx)(Lx,{})})}),(0,xp.jsx)(Fg,{path:"/achievement",element:(0,xp.jsx)(mC,{allowedRoles:["user"],children:(0,xp.jsx)(eE,{})})}),(0,xp.jsx)(Fg,{path:"/courses-user",element:(0,xp.jsx)(mC,{allowedRoles:["user"],children:(0,xp.jsx)(iC,{})})}),(0,xp.jsx)(Fg,{path:"/hilabs-user",element:(0,xp.jsx)(mC,{allowedRoles:["user"],children:(0,xp.jsx)(gC,{})})}),(0,xp.jsx)(Fg,{path:"/admin/:organizationId",element:(0,xp.jsx)(mC,{allowedRoles:["admin","superadmin"],children:(0,xp.jsx)(Aw,{})})}),(0,xp.jsx)(Fg,{path:"/admin",element:(0,xp.jsx)(mC,{allowedRoles:["admin"],children:(0,xp.jsx)(Aw,{})})}),(0,xp.jsx)(Fg,{path:"/participants",element:(0,xp.jsx)(mC,{allowedRoles:["admin","superadmin"],children:(0,xp.jsx)(ME,{})})}),(0,xp.jsx)(Fg,{path:"/participants/:participantId",element:(0,xp.jsx)(mC,{allowedRoles:["admin","superadmin"],children:(0,xp.jsx)(pE,{})})}),(0,xp.jsx)(Fg,{path:"/achievements/:userEmail",element:(0,xp.jsx)(mC,{allowedRoles:["admin","superadmin"],children:(0,xp.jsx)(eE,{})})}),(0,xp.jsx)(Fg,{path:"/superadmin",element:(0,xp.jsx)(mC,{allowedRoles:["superadmin"],children:(0,xp.jsx)(U_,{})})}),(0,xp.jsx)(Fg,{path:"/organizations",element:(0,xp.jsx)(mC,{allowedRoles:["superadmin"],children:(0,xp.jsx)(sS,{})})}),(0,xp.jsx)(Fg,{path:"/organizations/:category",element:(0,xp.jsx)(mC,{allowedRoles:["superadmin"],children:(0,xp.jsx)(AS,{})})}),(0,xp.jsx)(Fg,{path:"/labs",element:(0,xp.jsx)(mC,{allowedRoles:["superadmin"],children:(0,xp.jsx)(WS,{})})}),(0,xp.jsx)(Fg,{path:"/labs/:labId",element:(0,xp.jsx)(mC,{allowedRoles:["superadmin"],children:(0,xp.jsx)(Uk,{})})}),(0,xp.jsx)(Fg,{path:"/courses",element:(0,xp.jsx)(mC,{allowedRoles:["superadmin"],children:(0,xp.jsx)(ck,{})})}),(0,xp.jsx)(Fg,{path:"/courses/:courseId",element:(0,xp.jsx)(mC,{allowedRoles:["superadmin"],children:(0,xp.jsx)(Sk,{})})}),(0,xp.jsx)(Fg,{path:"/reports",element:(0,xp.jsx)(mC,{allowedRoles:["superadmin"],children:(0,xp.jsx)(Wk,{})})}),(0,xp.jsx)(Fg,{path:"*",element:(0,xp.jsx)(HE,{})})]}),vC=xb.div`
  font-family: "Poppins", sans-serif;
  background-color: #f7f9fb;
  min-height: 100vh;
`;const bC=function(){const{loading:e}=Ep();return e?(0,xp.jsx)(vC,{style:{justifyContent:"center",alignItems:"center"},children:(0,xp.jsx)(zb,{})}):(0,xp.jsx)(vC,{children:(0,xp.jsx)(yC,{})})};t.createRoot(document.getElementById("root")).render((0,xp.jsx)(e.StrictMode,{children:(0,xp.jsx)(_m,{children:(0,xp.jsx)(_p,{children:(0,xp.jsx)(bC,{})})})}))})()})();
//# sourceMappingURL=main.8ab1cc97.js.map