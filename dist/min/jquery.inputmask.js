/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.5.3
*/
(function(d){if(void 0===d.fn.inputmask){var Q=function(d){var h=document.createElement("input");d="on"+d;var a=d in h;a||(h.setAttribute(d,"return;"),a="function"==typeof h[d]);return a},E=function(e,h,a){return(e=a.aliases[e])?(e.alias&&E(e.alias,void 0,a),d.extend(!0,a,e),d.extend(!0,a,h),!0):!1},D=function(e){function h(a){e.numericInput&&(a=a.split("").reverse().join(""));var g=!1,h=0,n=e.greedy,p=e.repeat;"*"==p&&(n=!1);1==a.length&&!1==n&&0!=p&&(e.placeholder="");a=d.map(a.split(""),function(a,
d){var k=[];if(a==e.escapeChar)g=!0;else if(a!=e.optionalmarker.start&&a!=e.optionalmarker.end||g){var p=e.definitions[a];if(p&&!g)for(var r=0;r<p.cardinality;r++)k.push(e.placeholder.charAt((h+r)%e.placeholder.length));else k.push(a),g=!1;h+=k.length;return k}});for(var s=a.slice(),r=1;r<p&&n;r++)s=s.concat(a.slice());return{mask:s,repeat:p,greedy:n}}function a(a){e.numericInput&&(a=a.split("").reverse().join(""));var g=!1,h=!1,p=!1;return d.map(a.split(""),function(a,d){var k=[];if(a==e.escapeChar)h=
!0;else{if(a!=e.optionalmarker.start||h){if(a!=e.optionalmarker.end||h){var m=e.definitions[a];if(m&&!h){for(var u=m.prevalidator,w=u?u.length:0,v=1;v<m.cardinality;v++){var C=w>=v?u[v-1]:[],K=C.validator,C=C.cardinality;k.push({fn:K?"string"==typeof K?RegExp(K):new function(){this.test=K}:/./,cardinality:C?C:1,optionality:g,newBlockMarker:!0==g?p:!1,offset:0,casing:m.casing,def:m.definitionSymbol||a});!0==g&&(p=!1)}k.push({fn:m.validator?"string"==typeof m.validator?RegExp(m.validator):new function(){this.test=
m.validator}:/./,cardinality:m.cardinality,optionality:g,newBlockMarker:p,offset:0,casing:m.casing,def:m.definitionSymbol||a})}else k.push({fn:null,cardinality:0,optionality:g,newBlockMarker:p,offset:0,casing:null,def:a}),h=!1;p=!1;return k}g=!1}else g=!0;p=!0}})}function m(a){for(var d=a.length,g=0;g<d&&a.charAt(g)!=e.optionalmarker.start;g++);var h=[a.substring(0,g)];g<d&&h.push(a.substring(g+1,d));return h}function g(k,t,w){for(var n=0,v=0,s=t.length,r=0;r<s&&!(t.charAt(r)==e.optionalmarker.start&&
n++,t.charAt(r)==e.optionalmarker.end&&v++,0<n&&n==v);r++);n=[t.substring(0,r)];r<s&&n.push(t.substring(r+1,s));r=m(n[0]);1<r.length?(t=k+r[0]+(e.optionalmarker.start+r[1]+e.optionalmarker.end)+(1<n.length?n[1]:""),-1==d.inArray(t,p)&&""!=t&&(p.push(t),s=h(t),u.push({mask:t,_buffer:s.mask,buffer:s.mask.slice(),tests:a(t),lastValidPosition:-1,greedy:s.greedy,repeat:s.repeat,metadata:w})),t=k+r[0]+(1<n.length?n[1]:""),-1==d.inArray(t,p)&&""!=t&&(p.push(t),s=h(t),u.push({mask:t,_buffer:s.mask,buffer:s.mask.slice(),
tests:a(t),lastValidPosition:-1,greedy:s.greedy,repeat:s.repeat,metadata:w})),1<m(r[1]).length&&g(k+r[0],r[1]+n[1],w),1<n.length&&1<m(n[1]).length&&(g(k+r[0]+(e.optionalmarker.start+r[1]+e.optionalmarker.end),n[1],w),g(k+r[0],n[1],w))):(t=k+n,-1==d.inArray(t,p)&&""!=t&&(p.push(t),s=h(t),u.push({mask:t,_buffer:s.mask,buffer:s.mask.slice(),tests:a(t),lastValidPosition:-1,greedy:s.greedy,repeat:s.repeat,metadata:w})))}var u=[],p=[];d.isFunction(e.mask)&&(e.mask=e.mask.call(this,e));d.isArray(e.mask)?
d.each(e.mask,function(a,d){void 0!=d.mask?g("",d.mask.toString(),d):g("",d.toString())}):g("",e.mask.toString());return e.greedy?u:u.sort(function(a,d){return a.mask.length-d.mask.length})},fa="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),w=navigator.userAgent,ga=null!==w.match(/iphone/i),ha=null!==w.match(/android.*safari.*/i),ia=null!==w.match(/android.*chrome.*/i),Y=null!==w.match(/android.*firefox.*/i),Z=
/Kindle/i.test(w)||/Silk/i.test(w)||/KFTT/i.test(w)||/KFOT/i.test(w)||/KFJWA/i.test(w)||/KFJWI/i.test(w)||/KFSOWI/i.test(w)||/KFTHWA/i.test(w)||/KFTHWI/i.test(w)||/KFAPWA/i.test(w)||/KFAPWI/i.test(w),S=Q("paste")?"paste":Q("input")?"input":"propertychange",v=function(e,h,a,m){function g(){return e[h]}function u(){return g().tests}function p(){return g()._buffer}function k(){return g().buffer}function t(l,c,b){function f(l,b,c,f){for(var d=v(l),g=c?1:0,A="",z=b.buffer,e=b.tests[d].cardinality;e>g;e--)A+=
I(z,d-(e-1));c&&(A+=c);return null!=b.tests[d].fn?b.tests[d].fn.test(A,z,l,f,a):c==I(b._buffer.slice(),l,!0)||c==a.skipOptionalPartCharacter?{refresh:!0,c:I(b._buffer.slice(),l,!0),pos:l}:!1}if(b=!0===b){var z=f(l,g(),c,b);!0===z&&(z={pos:l});return z}var A=[],z=!1,L=h,p=k().slice(),m=g().lastValidPosition;G(l);var t=[];d.each(e,function(a,d){if("object"==typeof d){h=a;var e=l,x=g().lastValidPosition,q;if(x==m){if(1<e-m)for(x=-1==x?0:x;x<e&&(q=f(x,g(),p[x],!0),!1!==q);x++)H(k(),x,p[x],!0),!0===q&&
(q={pos:x}),q=q.pos||x,g().lastValidPosition<q&&(g().lastValidPosition=q);if(!n(e)&&!f(e,g(),c,b)){x=r(e)-e;for(q=0;q<x&&!1===f(++e,g(),c,b);q++);t.push(h)}}(g().lastValidPosition>=m||h==L)&&0<=e&&e<s()&&(z=f(e,g(),c,b),!1!==z&&(!0===z&&(z={pos:e}),q=z.pos||e,g().lastValidPosition<q&&(g().lastValidPosition=q)),A.push({activeMasksetIndex:a,result:z}))}});h=L;return function(a,b){var g=!1;d.each(b,function(l,b){if(g=-1==d.inArray(b.activeMasksetIndex,a)&&!1!==b.result)return!1});if(g)b=d.map(b,function(l,
b){if(-1==d.inArray(l.activeMasksetIndex,a))return l;e[l.activeMasksetIndex].lastValidPosition=m});else{var A=-1,z=-1,k;d.each(b,function(l,b){-1!=d.inArray(b.activeMasksetIndex,a)&&!1!==b.result&(-1==A||A>b.result.pos)&&(A=b.result.pos,z=b.activeMasksetIndex)});b=d.map(b,function(b,g){if(-1!=d.inArray(b.activeMasksetIndex,a)){if(b.result.pos==A)return b;if(!1!==b.result){for(var L=l;L<A;L++)if(k=f(L,e[b.activeMasksetIndex],e[z].buffer[L],!0),!1===k){e[b.activeMasksetIndex].lastValidPosition=A-1;
break}else H(e[b.activeMasksetIndex].buffer,L,e[z].buffer[L],!0),e[b.activeMasksetIndex].lastValidPosition=L;k=f(A,e[b.activeMasksetIndex],c,!0);!1!==k&&(H(e[b.activeMasksetIndex].buffer,A,c,!0),e[b.activeMasksetIndex].lastValidPosition=A);return b}}})}return b}(t,A)}function w(){var a=h,c={activeMasksetIndex:0,lastValidPosition:-1,next:-1};d.each(e,function(a,l){"object"==typeof l&&(h=a,g().lastValidPosition>c.lastValidPosition?(c.activeMasksetIndex=a,c.lastValidPosition=g().lastValidPosition,c.next=
r(g().lastValidPosition)):g().lastValidPosition==c.lastValidPosition&&(-1==c.next||c.next>r(g().lastValidPosition))&&(c.activeMasksetIndex=a,c.lastValidPosition=g().lastValidPosition,c.next=r(g().lastValidPosition)))});h=-1!=c.lastValidPosition&&e[a].lastValidPosition==c.lastValidPosition?a:c.activeMasksetIndex;a!=h&&(K(k(),r(c.lastValidPosition),s()),g().writeOutBuffer=!0);q.data("_inputmask").activeMasksetIndex=h}function n(a){a=v(a);a=u()[a];return void 0!=a?a.fn:!1}function v(a){return a%u().length}
function s(){return a.getMaskLength(p(),g().greedy,g().repeat,k(),a)}function r(a){var c=s();if(a>=c)return c;for(;++a<c&&!n(a););return a}function G(a){if(0>=a)return 0;for(;0<--a&&!n(a););return a}function H(a,c,b,f){f&&(c=E(a,c));f=u()[v(c)];var d=b;if(void 0!=d&&void 0!=f)switch(f.casing){case "upper":d=b.toUpperCase();break;case "lower":d=b.toLowerCase()}a[c]=d}function I(a,c,b){b&&(c=E(a,c));return a[c]}function E(a,c){for(var b;void 0==a[c]&&a.length<s();)for(b=0;void 0!==p()[b];)a.push(p()[b++]);
return c}function C(a,c,b){a._valueSet(c.join(""));void 0!=b&&y(a,b)}function K(a,c,b,f){for(var d=s();c<b&&c<d;c++)!0===f?n(c)||H(a,c,""):H(a,c,I(p().slice(),c,!0))}function D(a,c){var b=v(c);H(a,c,I(p(),b))}function O(l){return a.placeholder.charAt(l%a.placeholder.length)}function J(a,c,b,f,z){f=void 0!=f?f.slice():T(a._valueGet()).split("");d.each(e,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=-1)});!0!==b&&(h=0);c&&a._valueSet("");s();d.each(f,function(f,
e){if(!0===z){var k=g().p,k=-1==k?k:G(k),h=-1==k?f:r(k);-1==d.inArray(e,p().slice(k+1,h))&&R.call(a,void 0,!0,e.charCodeAt(0),c,b,f)}else R.call(a,void 0,!0,e.charCodeAt(0),c,b,f),b=b||0<f&&f>g().p});!0===b&&-1!=g().p&&(g().lastValidPosition=G(g().p))}function Q(a){return d.inputmask.escapeRegex.call(this,a)}function T(a){return a.replace(RegExp("("+Q(p().join(""))+")*$"),"")}function U(a){var c=k(),b=c.slice(),f,d;for(d=b.length-1;0<=d;d--)if(f=v(d),u()[f].optionality)if(n(d)&&t(d,c[d],!0))break;
else b.pop();else break;C(a,b)}function ja(l,c){if(!u()||!0!==c&&l.hasClass("hasDatepicker"))return l[0]._valueGet();var b=d.map(k(),function(a,b){return n(b)&&t(b,a,!0)?a:null}),b=(B?b.reverse():b).join("");return void 0!=a.onUnMask?a.onUnMask.call(l,k().join(""),b,a):b}function M(l){!B||"number"!=typeof l||a.greedy&&""==a.placeholder||(l=k().length-l);return l}function y(l,c,b){var f=l.jquery&&0<l.length?l[0]:l;if("number"==typeof c)c=M(c),b=M(b),d(f).is(":visible")&&(b="number"==typeof b?b:c,f.scrollLeft=
f.scrollWidth,!1==a.insertMode&&c==b&&b++,f.setSelectionRange?(f.selectionStart=c,f.selectionEnd=b):f.createTextRange&&(l=f.createTextRange(),l.collapse(!0),l.moveEnd("character",b),l.moveStart("character",c),l.select()));else{if(!d(l).is(":visible"))return{begin:0,end:0};f.setSelectionRange?(c=f.selectionStart,b=f.selectionEnd):document.selection&&document.selection.createRange&&(l=document.selection.createRange(),c=0-l.duplicate().moveStart("character",-1E5),b=c+l.text.length);c=M(c);b=M(b);return{begin:c,
end:b}}}function P(l){if("*"!=a.repeat){var c=!1,b=0,f=h;d.each(e,function(a,f){if("object"==typeof f){h=a;var d=G(s());if(f.lastValidPosition>=b&&f.lastValidPosition==d){for(var g=!0,e=0;e<=d;e++){var k=n(e),m=v(e);if(k&&(void 0==l[e]||l[e]==O(e))||!k&&l[e]!=p()[m]){g=!1;break}}if(c=c||g)return!1}b=f.lastValidPosition}});h=f;return c}}function ka(a){a=d._data(a).events;d.each(a,function(a,b){d.each(b,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var c=b.handler;b.handler=function(a){if(this.readOnly||
this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function la(a){function c(a){if(void 0==d.valHooks[a]||!0!=d.valHooks[a].inputmaskpatch){var b=d.valHooks[a]&&d.valHooks[a].get?d.valHooks[a].get:function(a){return a.value},c=d.valHooks[a]&&d.valHooks[a].set?d.valHooks[a].set:function(a,b){a.value=b;return a};d.valHooks[a]={get:function(a){var c=d(a);if(c.data("_inputmask")){if(c.data("_inputmask").opts.autoUnmask)return c.inputmask("unmaskedvalue");a=b(a);c=c.data("_inputmask");
return a!=c.masksets[c.activeMasksetIndex]._buffer.join("")?a:""}return b(a)},set:function(a,b){var f=d(a),g=c(a,b);f.data("_inputmask")&&f.triggerHandler("setvalue.inputmask");return g},inputmaskpatch:!0}}}var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get){if(!a._valueGet){var f=b.get,g=b.set;a._valueGet=function(){return B?f.call(this).split("").reverse().join(""):f.call(this)};a._valueSet=function(a){g.call(this,B?a.split("").reverse().join(""):a)};
Object.defineProperty(a,"value",{get:function(){var a=d(this),b=d(this).data("_inputmask"),c=b.masksets,g=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):f.call(this)!=c[g]._buffer.join("")?f.call(this):""},set:function(a){g.call(this,a);d(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?a._valueGet||(f=a.__lookupGetter__("value"),g=a.__lookupSetter__("value"),a._valueGet=function(){return B?f.call(this).split("").reverse().join(""):
f.call(this)},a._valueSet=function(a){g.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=d(this),b=d(this).data("_inputmask"),c=b.masksets,g=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):f.call(this)!=c[g]._buffer.join("")?f.call(this):""}),a.__defineSetter__("value",function(a){g.call(this,a);d(this).triggerHandler("setvalue.inputmask")})):(a._valueGet||(a._valueGet=function(){return B?this.value.split("").reverse().join(""):
this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),c(a.type))}function $(a,c,b,f){var d=k();if(!1!==f)for(;!n(a)&&0<=a-1;)a--;for(f=a;f<c&&f<s();f++)if(n(f)){D(d,f);var e=r(f),h=I(d,e);if(h!=O(e))if(e<s()&&!1!==t(f,h,!0)&&u()[v(f)].def==u()[v(e)].def)H(d,f,h,!0);else if(n(f))break}else D(d,f);void 0!=b&&H(d,G(c),b);if(!1==g().greedy){c=T(d.join("")).split("");d.length=c.length;f=0;for(b=d.length;f<b;f++)d[f]=c[f];0==d.length&&(g().buffer=p().slice())}return a}function aa(a,
c,b){var d=k();if(I(d,a,!0)!=O(a))for(var e=G(c);e>a&&0<=e;e--)if(n(e)){var h=G(e),m=I(d,h);m!=O(h)&&!1!==t(e,m,!0)&&u()[v(e)].def==u()[v(h)].def&&(H(d,e,m,!0),D(d,h))}else D(d,e);void 0!=b&&I(d,a)==O(a)&&H(d,a,b);a=d.length;if(!1==g().greedy){b=T(d.join("")).split("");d.length=b.length;e=0;for(h=d.length;e<h;e++)d[e]=b[e];0==d.length&&(g().buffer=p().slice())}return c-(a-d.length)}function ba(d,c,b){if(a.numericInput||B){switch(c){case a.keyCode.BACKSPACE:c=a.keyCode.DELETE;break;case a.keyCode.DELETE:c=
a.keyCode.BACKSPACE}if(B){var f=b.end;b.end=b.begin;b.begin=f}}f=!0;b.begin==b.end?(f=c==a.keyCode.BACKSPACE?b.begin-1:b.begin,a.isNumeric&&""!=a.radixPoint&&k()[f]==a.radixPoint&&(b.begin=k().length-1==f?b.begin:c==a.keyCode.BACKSPACE?f:r(f),b.end=b.begin),f=!1,c==a.keyCode.BACKSPACE?b.begin--:c==a.keyCode.DELETE&&b.end++):1!=b.end-b.begin||a.insertMode||(f=!1,c==a.keyCode.BACKSPACE&&b.begin--);K(k(),b.begin,b.end);var e=s();if(!1==a.greedy&&(isNaN(a.repeat)||0<a.repeat))$(b.begin,e,void 0,!B&&c==
a.keyCode.BACKSPACE&&!f);else{for(var h=b.begin,p=b.begin;p<b.end;p++)if(n(p)||!f)h=$(b.begin,e,void 0,!B&&c==a.keyCode.BACKSPACE&&!f);f||(b.begin=h)}c=r(-1);K(k(),b.begin,b.end,!0);J(d,!1,!1,k());g().lastValidPosition<c?(g().lastValidPosition=-1,g().p=c):g().p=b.begin}function V(e){W=!1;var c=this,b=d(c),f=e.keyCode,h=y(c);f==a.keyCode.BACKSPACE||f==a.keyCode.DELETE||ga&&127==f||e.ctrlKey&&88==f?(e.preventDefault(),88==f&&(N=k().join("")),ba(c,f,h),w(),C(c,k(),g().p),c._valueGet()==p().join("")&&
b.trigger("cleared"),a.showTooltip&&b.prop("title",g().mask)):f==a.keyCode.END||f==a.keyCode.PAGE_DOWN?setTimeout(function(){var b=r(g().lastValidPosition);a.insertMode||b!=s()||e.shiftKey||b--;y(c,e.shiftKey?h.begin:b,b)},0):f==a.keyCode.HOME&&!e.shiftKey||f==a.keyCode.PAGE_UP?y(c,0,e.shiftKey?h.begin:0):f==a.keyCode.ESCAPE||90==f&&e.ctrlKey?(J(c,!0,!1,N.split("")),b.click()):f!=a.keyCode.INSERT||e.shiftKey||e.ctrlKey?!1!=a.insertMode||e.shiftKey||(f==a.keyCode.RIGHT?setTimeout(function(){var a=
y(c);y(c,a.begin)},0):f==a.keyCode.LEFT&&setTimeout(function(){var a=y(c);y(c,a.begin-1)},0)):(a.insertMode=!a.insertMode,y(c,a.insertMode||h.begin!=s()?h.begin:h.begin-1));b=y(c);!0===a.onKeyDown.call(this,e,k(),a)&&y(c,b.begin,b.end);ca=-1!=d.inArray(f,a.ignorables)}function R(l,c,b,f,p,m){if(void 0==b&&W)return!1;W=!0;var q=d(this);l=l||window.event;b=c?b:l.which||l.charCode||l.keyCode;if(!(!0===c||l.ctrlKey&&l.altKey)&&(l.ctrlKey||l.metaKey||ca))return!0;if(b){!0!==c&&46==b&&!1==l.shiftKey&&","==
a.radixPoint&&(b=44);var n,v,u=String.fromCharCode(b);c?(b=p?m:g().lastValidPosition+1,n={begin:b,end:b}):n=y(this);m=B?1<n.begin-n.end||1==n.begin-n.end&&a.insertMode:1<n.end-n.begin||1==n.end-n.begin&&a.insertMode;var E=h;m&&(d.each(e,function(a,b){"object"==typeof b&&(h=a,g().undoBuffer=k().join(""))}),h=E,ba(this,a.keyCode.DELETE,n),a.insertMode||d.each(e,function(a,b){"object"==typeof b&&(h=a,aa(n.begin,s()),g().lastValidPosition=r(g().lastValidPosition))}),h=E);var D=k().join("").indexOf(a.radixPoint);
a.isNumeric&&!0!==c&&-1!=D&&(a.greedy&&n.begin<=D?(n.begin=G(n.begin),n.end=n.begin):u==a.radixPoint&&(n.begin=D,n.end=n.begin));var F=n.begin;b=t(F,u,p);!0===p&&(b=[{activeMasksetIndex:h,result:b}]);var x=-1;d.each(b,function(b,d){h=d.activeMasksetIndex;g().writeOutBuffer=!0;var c=d.result;if(!1!==c){var e=!1,f=k();!0!==c&&(e=c.refresh,F=void 0!=c.pos?c.pos:F,u=void 0!=c.c?c.c:u);if(!0!==e){if(!0==a.insertMode){c=s();for(f=f.slice();I(f,c,!0)!=O(c)&&c>=F;)c=0==c?-1:G(c);c>=F?(aa(F,s(),u),f=g().lastValidPosition,
c=r(f),c!=s()&&f>=F&&I(k().slice(),c,!0)!=O(c)&&(g().lastValidPosition=c)):g().writeOutBuffer=!1}else H(f,F,u,!0);if(-1==x||x>r(F))x=r(F)}else!p&&(f=F<s()?F+1:F,-1==x||x>f)&&(x=f);x>g().p&&(g().p=x)}});!0!==p&&(h=E,w());if(!1!==f)if(d.each(b,function(a,b){if(b.activeMasksetIndex==h)return v=b,!1}),void 0!=v){var K=this;setTimeout(function(){a.onKeyValidation.call(K,v.result,a)},0);if(g().writeOutBuffer&&!1!==v.result){var J=k();f=c?void 0:a.numericInput?F>D?G(x):u==a.radixPoint?x-1:G(x-1):x;C(this,
J,f);!0!==c&&setTimeout(function(){!0===P(J)&&q.trigger("complete");X=!0;q.trigger("input")},0)}else m&&(g().buffer=g().undoBuffer.split(""))}else m&&(g().buffer=g().undoBuffer.split(""));a.showTooltip&&q.prop("title",g().mask);l&&(l.preventDefault?l.preventDefault():l.returnValue=!1)}}function da(e){var c=d(this),b=e.keyCode,f=k();a.onKeyUp.call(this,e,f,a);b==a.keyCode.TAB&&a.showMaskOnFocus&&(c.hasClass("focus.inputmask")&&0==this._valueGet().length?(f=p().slice(),C(this,f),y(this,0),N=k().join("")):
(C(this,f),f.join("")==p().join("")&&-1!=d.inArray(a.radixPoint,f)?(y(this,M(0)),c.click()):y(this,M(0),M(s()))))}function ea(e){if(!0===X&&"input"==e.type)return X=!1,!0;var c=this,b=d(c);if("propertychange"==e.type&&c._valueGet().length<=s())return!0;setTimeout(function(){var d=void 0!=a.onBeforePaste?a.onBeforePaste.call(c,c._valueGet(),a):c._valueGet();J(c,!1,!1,d.split(""),!0);C(c,k());!0===P(k())&&b.trigger("complete");b.click()},0)}function ma(e){var c=d(this),b=y(this),f=this._valueGet(),
f=f.replace(RegExp("("+Q(p().join(""))+")*"),"");b.begin>f.length&&(y(this,f.length),b=y(this));1!=k().length-f.length||f.charAt(b.begin)==k()[b.begin]||f.charAt(b.begin+1)==k()[b.begin]||n(b.begin)?(J(this,!1,!1,f.split("")),C(this,k()),!0===P(k())&&c.trigger("complete"),c.click()):(e.keyCode=a.keyCode.BACKSPACE,V.call(this,e));e.preventDefault()}function na(l){q=d(l);if(q.is(":input")){q.data("_inputmask",{masksets:e,activeMasksetIndex:h,opts:a,isRTL:!1});a.showTooltip&&q.prop("title",g().mask);
g().greedy=g().greedy?g().greedy:0==g().repeat;if(null!=q.attr("maxLength")){var c=q.prop("maxLength");-1<c&&d.each(e,function(a,b){"object"==typeof b&&"*"==b.repeat&&(b.repeat=c)});s()>=c&&-1<c&&(c<p().length&&(p().length=c),!1==g().greedy&&(g().repeat=Math.round(c/p().length)),q.prop("maxLength",2*s()))}la(l);a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==l.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&q.css("text-align","right");if("rtl"==l.dir||a.numericInput){l.dir=
"ltr";q.removeAttr("dir");var b=q.data("_inputmask");b.isRTL=!0;q.data("_inputmask",b);B=!0}q.unbind(".inputmask");q.removeClass("focus.inputmask");q.closest("form").bind("submit",function(){N!=k().join("")&&q.change()}).bind("reset",function(){setTimeout(function(){q.trigger("setvalue")},0)});q.bind("mouseenter.inputmask",function(){!d(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=k().join("")&&C(this,k())}).bind("blur.inputmask",function(){var b=d(this),c=this._valueGet(),
f=k();b.removeClass("focus.inputmask");N!=k().join("")&&b.change();a.clearMaskOnLostFocus&&""!=c&&(c==p().join("")?this._valueSet(""):U(this));!1===P(f)&&(b.trigger("incomplete"),a.clearIncomplete&&(d.each(e,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)}),h=0,a.clearMaskOnLostFocus?this._valueSet(""):(f=p().slice(),C(this,f))))}).bind("focus.inputmask",function(){var b=d(this),c=this._valueGet();a.showMaskOnFocus&&!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||
a.showMaskOnHover&&""==c)&&this._valueGet()!=k().join("")&&C(this,k(),r(g().lastValidPosition));b.addClass("focus.inputmask");N=k().join("")}).bind("mouseleave.inputmask",function(){var b=d(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||this._valueGet()==b.attr("placeholder")||(this._valueGet()==p().join("")||""==this._valueGet()?this._valueSet(""):U(this)))}).bind("click.inputmask",function(){var b=this;setTimeout(function(){var c=y(b),e=k();if(c.begin==c.end){var c=B?M(c.begin):c.begin,
f=g().lastValidPosition,e=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=d.inArray(a.radixPoint,e)?a.numericInput?r(d.inArray(a.radixPoint,e)):d.inArray(a.radixPoint,e):r(f):r(f);c<e?n(c)?y(b,c):y(b,r(c)):y(b,e)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){y(a,0,r(g().lastValidPosition))},0)}).bind(S+".inputmask dragdrop.inputmask drop.inputmask",ea).bind("setvalue.inputmask",function(){J(this,!0);N=k().join("");this._valueGet()==p().join("")&&this._valueSet("")}).bind("complete.inputmask",
a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);q.bind("keydown.inputmask",V).bind("keypress.inputmask",R).bind("keyup.inputmask",da);if(ha||Y||ia||Z)if(q.attr("autocomplete","off").attr("autocorrect","off").attr("autocapitalize","off").attr("spellcheck",!1),Y||Z)q.unbind("keydown.inputmask",V).unbind("keypress.inputmask",R).unbind("keyup.inputmask",da),"input"==S&&q.unbind(S+".inputmask"),q.bind("input.inputmask",ma);fa&&q.bind("input.inputmask",ea);
b=void 0!=a.onBeforeMask?a.onBeforeMask.call(l,l._valueGet(),a):l._valueGet();J(l,!0,!1,b.split(""));N=k().join("");var f;try{f=document.activeElement}catch(m){}f===l?(q.addClass("focus.inputmask"),y(l,r(g().lastValidPosition))):a.clearMaskOnLostFocus?k().join("")==p().join("")?l._valueSet(""):U(l):C(l,k());ka(l)}}var B=!1,N=k().join(""),q,W=!1,X=!1,ca=!1;if(void 0!=m)switch(m.action){case "isComplete":return P(m.buffer);case "unmaskedvalue":return B=m.$input.data("_inputmask").isRTL,ja(m.$input,
m.skipDatepickerCheck);case "mask":na(m.el);break;case "format":return q=d({}),q.data("_inputmask",{masksets:e,activeMasksetIndex:h,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,B=!0),J(q,!1,!1,m.value.split(""),!0),k().join("");case "isValid":return q=d({}),q.data("_inputmask",{masksets:e,activeMasksetIndex:h,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,B=!0),J(q,!1,!0,m.value.split("")),P(k())}};d.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",
end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:d.noop,onincomplete:d.noop,oncleared:d.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:d.noop,onKeyDown:d.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:d.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,
rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(d,h,a,m,g){g=d.length;h||("*"==a?g=m.length+1:1<a&&(g+=d.length*(a-1)));return g}},escapeRegex:function(d){return d.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(e,h){var a=d.extend(!0,{},d.inputmask.defaults,
h);E(a.alias,h,a);return v(D(a),0,a,{action:"format",value:e})},isValid:function(e,h){var a=d.extend(!0,{},d.inputmask.defaults,h);E(a.alias,h,a);return v(D(a),0,a,{action:"isValid",value:e})}};d.fn.inputmask=function(e,h){var a=d.extend(!0,{},d.inputmask.defaults,h),m,g=0;if("string"===typeof e)switch(e){case "mask":return E(a.alias,h,a),m=D(a),0==m.length?this:this.each(function(){v(d.extend(!0,{},m),0,a,{action:"mask",el:this})});case "unmaskedvalue":var u=d(this);return u.data("_inputmask")?(m=
u.data("_inputmask").masksets,g=u.data("_inputmask").activeMasksetIndex,a=u.data("_inputmask").opts,v(m,g,a,{action:"unmaskedvalue",$input:u})):u.val();case "remove":return this.each(function(){var e=d(this);if(e.data("_inputmask")){m=e.data("_inputmask").masksets;g=e.data("_inputmask").activeMasksetIndex;a=e.data("_inputmask").opts;this._valueSet(v(m,g,a,{action:"unmaskedvalue",$input:e,skipDatepickerCheck:!0}));e.removeData("_inputmask");e.unbind(".inputmask");e.removeClass("focus.inputmask");var k;
Object.getOwnPropertyDescriptor&&(k=Object.getOwnPropertyDescriptor(this,"value"));k&&k.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(h){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?
(m=this.data("_inputmask").masksets,g=this.data("_inputmask").activeMasksetIndex,m[g]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return m=this.data("_inputmask").masksets,g=this.data("_inputmask").activeMasksetIndex,a=this.data("_inputmask").opts,v(m,g,a,{action:"isComplete",buffer:this[0]._valueGet().split("")});case "getmetadata":if(this.data("_inputmask"))return m=this.data("_inputmask").masksets,g=this.data("_inputmask").activeMasksetIndex,
m[g].metadata;break;default:return E(e,h,a)||(a.mask=e),m=D(a),0==m.length?this:this.each(function(){v(d.extend(!0,{},m),g,a,{action:"mask",el:this})})}else{if("object"==typeof e)return a=d.extend(!0,{},d.inputmask.defaults,e),E(a.alias,e,a),m=D(a),0==m.length?this:this.each(function(){v(d.extend(!0,{},m),g,a,{action:"mask",el:this})});if(void 0==e)return this.each(function(){var e=d(this).attr("data-inputmask");if(e&&""!=e)try{var e=e.replace(RegExp("'","g"),'"'),g=d.parseJSON("{"+e+"}");d.extend(!0,
g,h);a=d.extend(!0,{},d.inputmask.defaults,g);E(a.alias,g,a);a.alias=void 0;d(this).inputmask(a)}catch(m){}})}}}})(jQuery);
