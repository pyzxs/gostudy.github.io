import{aj as ie,ak as Ne,q as $e,af as Ce,ai as Ee,b as k,aG as ge,n as X,aH as je,G as ee,aI as We,H as C,ax as fe,J as T,d as De,an as de,K as Be,aJ as xe,L as Me,am as He,a8 as Ke,N as D,O as Ye,R as S,T as Je,aD as Ue,aK as Ge,aL as qe}from"./index-3215ace6.js";import{f as Ze}from"./use-form-item-9a3ca6d4.js";function Qe(n,e,t){var r;const i=ie(n,null);if(i===null)return;const s=(r=Ne())===null||r===void 0?void 0:r.proxy;$e(t,a),a(t.value),Ce(()=>{a(void 0,t.value)});function a(u,d){const m=i[e];d!==void 0&&o(m,d),u!==void 0&&f(m,u)}function o(u,d){u[d]||(u[d]=[]),u[d].splice(u[d].findIndex(m=>m===s),1)}function f(u,d){u[d]||(u[d]=[]),~u[d].findIndex(m=>m===s)||u[d].push(s)}}const ce=Ee("n-form"),Xe=Ee("n-form-item-insts");function K(){return K=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},K.apply(this,arguments)}function et(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,ne(n,e)}function pe(n){return pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},pe(n)}function ne(n,e){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ne(n,e)}function tt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ue(n,e,t){return tt()?ue=Reflect.construct.bind():ue=function(i,s,a){var o=[null];o.push.apply(o,s);var f=Function.bind.apply(i,o),u=new f;return a&&ne(u,a.prototype),u},ue.apply(null,arguments)}function rt(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function ve(n){var e=typeof Map=="function"?new Map:void 0;return ve=function(r){if(r===null||!rt(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return ue(r,arguments,pe(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ne(i,r)},ve(n)}var nt=/%[sdj%]/g,it=function(){};typeof process<"u"&&process.env;function be(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function j(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=0,s=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var a=n.replace(nt,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return a}return n}function at(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function R(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||at(e)&&typeof n=="string"&&!n)}function st(n,e,t){var r=[],i=0,s=n.length;function a(o){r.push.apply(r,o||[]),i++,i===s&&t(r)}n.forEach(function(o){e(o,a)})}function Re(n,e,t){var r=0,i=n.length;function s(a){if(a&&a.length){t(a);return}var o=r;r=r+1,o<i?e(n[o],s):t([])}s([])}function ot(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var ke=function(n){et(e,n);function e(t,r){var i;return i=n.call(this,"Async Validation Error")||this,i.errors=t,i.fields=r,i}return e}(ve(Error));function ft(n,e,t,r,i){if(e.first){var s=new Promise(function(b,c){var q=function(l){return r(l),l.length?c(new ke(l,be(l))):b(i)},g=ot(n);Re(g,t,q)});return s.catch(function(b){return b}),s}var a=e.firstFields===!0?Object.keys(n):e.firstFields||[],o=Object.keys(n),f=o.length,u=0,d=[],m=new Promise(function(b,c){var q=function(w){if(d.push.apply(d,w),u++,u===f)return r(d),d.length?c(new ke(d,be(d))):b(i)};o.length||(r(d),b(i)),o.forEach(function(g){var w=n[g];a.indexOf(g)!==-1?Re(w,t,q):st(w,t,q)})});return m.catch(function(b){return b}),m}function dt(n){return!!(n&&n.message!==void 0)}function lt(n,e){for(var t=n,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function Fe(n,e){return function(t){var r;return n.fullFields?r=lt(e,n.fullFields):r=e[t.field||n.fullField],dt(t)?(t.field=t.field||n.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||n.fullField}}}function _e(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r=="object"&&typeof n[t]=="object"?n[t]=K({},n[t],r):n[t]=r}}return n}var Le=function(e,t,r,i,s,a){e.required&&(!r.hasOwnProperty(e.field)||R(t,a||e.type))&&i.push(j(s.messages.required,e.fullField))},ut=function(e,t,r,i,s){(/^\s+$/.test(t)||t==="")&&i.push(j(s.messages.whitespace,e.fullField))},le,ct=function(){if(le)return le;var n="[a-fA-F\\d:]",e=function(y){return y&&y.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+t+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+t+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+t+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+t+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+t+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+t+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+t+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),f=function(y){return y&&y.exact?s:new RegExp("(?:"+e(y)+t+e(y)+")|(?:"+e(y)+i+e(y)+")","g")};f.v4=function(p){return p&&p.exact?a:new RegExp(""+e(p)+t+e(p),"g")},f.v6=function(p){return p&&p.exact?o:new RegExp(""+e(p)+i+e(p),"g")};var u="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",m=f.v4().source,b=f.v6().source,c="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",q="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",g="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",w="(?::\\d{2,5})?",l='(?:[/?#][^\\s"]*)?',M="(?:"+u+"|www\\.)"+d+"(?:localhost|"+m+"|"+b+"|"+c+q+g+")"+w+l;return le=new RegExp("(?:^"+M+"$)","i"),le},Oe={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},te={integer:function(e){return te.number(e)&&parseInt(e,10)===e},float:function(e){return te.number(e)&&!te.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!te.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Oe.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(ct())},hex:function(e){return typeof e=="string"&&!!e.match(Oe.hex)}},mt=function(e,t,r,i,s){if(e.required&&t===void 0){Le(e,t,r,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?te[o](t)||i.push(j(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push(j(s.messages.types[o],e.fullField,e.type))},gt=function(e,t,r,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",f=typeof e.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=t,m=null,b=typeof t=="number",c=typeof t=="string",q=Array.isArray(t);if(b?m="number":c?m="string":q&&(m="array"),!m)return!1;q&&(d=t.length),c&&(d=t.replace(u,"_").length),a?d!==e.len&&i.push(j(s.messages[m].len,e.fullField,e.len)):o&&!f&&d<e.min?i.push(j(s.messages[m].min,e.fullField,e.min)):f&&!o&&d>e.max?i.push(j(s.messages[m].max,e.fullField,e.max)):o&&f&&(d<e.min||d>e.max)&&i.push(j(s.messages[m].range,e.fullField,e.min,e.max))},Z="enum",ht=function(e,t,r,i,s){e[Z]=Array.isArray(e[Z])?e[Z]:[],e[Z].indexOf(t)===-1&&i.push(j(s.messages[Z],e.fullField,e[Z].join(", ")))},pt=function(e,t,r,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(j(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(j(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},v={required:Le,whitespace:ut,type:mt,range:gt,enum:ht,pattern:pt},vt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t,"string")&&!e.required)return r();v.required(e,t,i,a,s,"string"),R(t,"string")||(v.type(e,t,i,a,s),v.range(e,t,i,a,s),v.pattern(e,t,i,a,s),e.whitespace===!0&&v.whitespace(e,t,i,a,s))}r(a)},bt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}r(a)},yt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),R(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}r(a)},wt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}r(a)},xt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t)&&!e.required)return r();v.required(e,t,i,a,s),R(t)||v.type(e,t,i,a,s)}r(a)},qt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}r(a)},Rt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}r(a)},kt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return r();v.required(e,t,i,a,s,"array"),t!=null&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}r(a)},Ft=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}r(a)},_t="enum",Ot=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&v[_t](e,t,i,a,s)}r(a)},Pt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t,"string")&&!e.required)return r();v.required(e,t,i,a,s),R(t,"string")||v.pattern(e,t,i,a,s)}r(a)},At=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t,"date")&&!e.required)return r();if(v.required(e,t,i,a,s),!R(t,"date")){var f;t instanceof Date?f=t:f=new Date(t),v.type(e,f,i,a,s),f&&v.range(e,f.getTime(),i,a,s)}}r(a)},St=function(e,t,r,i,s){var a=[],o=Array.isArray(t)?"array":typeof t;v.required(e,t,i,a,s,o),r(a)},he=function(e,t,r,i,s){var a=e.type,o=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(R(t,a)&&!e.required)return r();v.required(e,t,i,o,s,a),R(t,a)||v.type(e,t,i,o,s)}r(o)},$t=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(R(t)&&!e.required)return r();v.required(e,t,i,a,s)}r(a)},re={string:vt,method:bt,number:yt,boolean:wt,regexp:xt,integer:qt,float:Rt,array:kt,object:Ft,enum:Ot,pattern:Pt,date:At,url:he,hex:he,email:he,required:St,any:$t};function ye(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var we=ye(),ae=function(){function n(t){this.rules=null,this._messages=we,this.define(t)}var e=n.prototype;return e.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(s){var a=r[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(r){return r&&(this._messages=_e(ye(),r)),this._messages},e.validate=function(r,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=r,f=i,u=s;if(typeof f=="function"&&(u=f,f={}),!this.rules||Object.keys(this.rules).length===0)return u&&u(null,o),Promise.resolve(o);function d(g){var w=[],l={};function M(y){if(Array.isArray(y)){var _;w=(_=w).concat.apply(_,y)}else w.push(y)}for(var p=0;p<g.length;p++)M(g[p]);w.length?(l=be(w),u(w,l)):u(null,o)}if(f.messages){var m=this.messages();m===we&&(m=ye()),_e(m,f.messages),f.messages=m}else f.messages=this.messages();var b={},c=f.keys||Object.keys(this.rules);c.forEach(function(g){var w=a.rules[g],l=o[g];w.forEach(function(M){var p=M;typeof p.transform=="function"&&(o===r&&(o=K({},o)),l=o[g]=p.transform(l)),typeof p=="function"?p={validator:p}:p=K({},p),p.validator=a.getValidationMethod(p),p.validator&&(p.field=g,p.fullField=p.fullField||g,p.type=a.getType(p),b[g]=b[g]||[],b[g].push({rule:p,value:l,source:o,field:g}))})});var q={};return ft(b,f,function(g,w){var l=g.rule,M=(l.type==="object"||l.type==="array")&&(typeof l.fields=="object"||typeof l.defaultField=="object");M=M&&(l.required||!l.required&&g.value),l.field=g.field;function p(F,O){return K({},O,{fullField:l.fullField+"."+F,fullFields:l.fullFields?[].concat(l.fullFields,[F]):[F]})}function y(F){F===void 0&&(F=[]);var O=Array.isArray(F)?F:[F];!f.suppressWarning&&O.length&&n.warning("async-validator:",O),O.length&&l.message!==void 0&&(O=[].concat(l.message));var L=O.map(Fe(l,o));if(f.first&&L.length)return q[l.field]=1,w(L);if(!M)w(L);else{if(l.required&&!g.value)return l.message!==void 0?L=[].concat(l.message).map(Fe(l,o)):f.error&&(L=[f.error(l,j(f.messages.required,l.field))]),w(L);var W={};l.defaultField&&Object.keys(g.value).map(function(z){W[z]=l.defaultField}),W=K({},W,g.rule.fields);var Q={};Object.keys(W).forEach(function(z){var h=W[z],$=Array.isArray(h)?h:[h];Q[z]=$.map(p.bind(null,z))});var N=new n(Q);N.messages(f.messages),g.rule.options&&(g.rule.options.messages=f.messages,g.rule.options.error=f.error),N.validate(g.value,g.rule.options||f,function(z){var h=[];L&&L.length&&h.push.apply(h,L),z&&z.length&&h.push.apply(h,z),w(h.length?h:null)})}}var _;if(l.asyncValidator)_=l.asyncValidator(l,g.value,y,g.source,f);else if(l.validator){try{_=l.validator(l,g.value,y,g.source,f)}catch(F){console.error?.(F),f.suppressValidatorError||setTimeout(function(){throw F},0),y(F.message)}_===!0?y():_===!1?y(typeof l.message=="function"?l.message(l.fullField||l.field):l.message||(l.fullField||l.field)+" fails"):_ instanceof Array?y(_):_ instanceof Error&&y(_.message)}_&&_.then&&_.then(function(){return y()},function(F){return y(F)})},function(g){d(g)},o)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!re.hasOwnProperty(r.type))throw new Error(j("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?re.required:re[this.getType(r)]||void 0},n}();ae.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");re[e]=t};ae.warning=it;ae.messages=we;ae.validators=re;function Et(n){const e=ie(ce,null);return{mergedSize:k(()=>n.size!==void 0?n.size:e?.props.size!==void 0?e.props.size:"medium")}}function jt(n){const e=ie(ce,null),t=k(()=>{const{labelPlacement:c}=n;return c!==void 0?c:e?.props.labelPlacement?e.props.labelPlacement:"top"}),r=k(()=>t.value==="left"&&(n.labelWidth==="auto"||e?.props.labelWidth==="auto")),i=k(()=>{if(t.value==="top")return;const{labelWidth:c}=n;if(c!==void 0&&c!=="auto")return ge(c);if(r.value){const q=e?.maxChildLabelWidthRef.value;return q!==void 0?ge(q):void 0}if(e?.props.labelWidth!==void 0)return ge(e.props.labelWidth)}),s=k(()=>{const{labelAlign:c}=n;if(c)return c;if(e?.props.labelAlign)return e.props.labelAlign}),a=k(()=>{var c;return[(c=n.labelProps)===null||c===void 0?void 0:c.style,n.labelStyle,{width:i.value}]}),o=k(()=>{const{showRequireMark:c}=n;return c!==void 0?c:e?.props.showRequireMark}),f=k(()=>{const{requireMarkPlacement:c}=n;return c!==void 0?c:e?.props.requireMarkPlacement||"right"}),u=X(!1),d=k(()=>{const{validationStatus:c}=n;if(c!==void 0)return c;if(u.value)return"error"}),m=k(()=>{const{showFeedback:c}=n;return c!==void 0?c:e?.props.showFeedback!==void 0?e.props.showFeedback:!0}),b=k(()=>{const{showLabel:c}=n;return c!==void 0?c:e?.props.showLabel!==void 0?e.props.showLabel:!0});return{validationErrored:u,mergedLabelStyle:a,mergedLabelPlacement:t,mergedLabelAlign:s,mergedShowRequireMark:o,mergedRequireMarkPlacement:f,mergedValidationStatus:d,mergedShowFeedback:m,mergedShowLabel:b,isAutoLabelWidth:r}}function Mt(n){const e=ie(ce,null),t=k(()=>{const{rulePath:a}=n;if(a!==void 0)return a;const{path:o}=n;if(o!==void 0)return o}),r=k(()=>{const a=[],{rule:o}=n;if(o!==void 0&&(Array.isArray(o)?a.push(...o):a.push(o)),e){const{rules:f}=e.props,{value:u}=t;if(f!==void 0&&u!==void 0){const d=je(f,u);d!==void 0&&(Array.isArray(d)?a.push(...d):a.push(d))}}return a}),i=k(()=>r.value.some(a=>a.required)),s=k(()=>i.value||n.required);return{mergedRules:r,mergedRequired:s}}const{cubicBezierEaseInOut:Pe}=We;function Lt({name:n="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:r=".3s",enterCubicBezier:i=Pe,leaveCubicBezier:s=Pe}={}){return[ee(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),ee(`&.${n}-transition-enter-to, &.${n}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),ee(`&.${n}-transition-leave-active`,{transition:`opacity ${r} ${s}, transform ${r} ${s}`}),ee(`&.${n}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}const zt=C("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[C("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[fe("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),fe("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),C("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),T("auto-label-width",[C("form-item-label","white-space: nowrap;")]),T("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: start;
 `,[C("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[T("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),T("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),T("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),T("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),fe("text",`
 grid-area: text; 
 `),fe("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),T("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[T("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),C("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),C("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),C("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[ee("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),C("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[T("warning",{color:"var(--n-feedback-text-color-warning)"}),T("error",{color:"var(--n-feedback-text-color-error)"}),Lt({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var Ae=globalThis&&globalThis.__awaiter||function(n,e,t,r){function i(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(d){try{u(r.next(d))}catch(m){a(m)}}function f(d){try{u(r.throw(d))}catch(m){a(m)}}function u(d){d.done?s(d.value):i(d.value).then(o,f)}u((r=r.apply(n,e||[])).next())})};const Vt=Object.assign(Object.assign({},Me.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object});function Se(n,e){return(...t)=>{try{const r=n(...t);return!e&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r?.then?r:(r===void 0||qe("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(r){qe("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}const Ct=De({name:"FormItem",props:Vt,setup(n){Qe(Xe,"formItems",de(n,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=Be(n),r=ie(ce,null),i=Et(n),s=jt(n),{validationErrored:a}=s,{mergedRequired:o,mergedRules:f}=Mt(n),{mergedSize:u}=i,{mergedLabelPlacement:d,mergedLabelAlign:m,mergedRequireMarkPlacement:b}=s,c=X([]),q=X(xe()),g=r?de(r.props,"disabled"):X(!1),w=Me("Form","-form-item",zt,Ge,n,e);$e(de(n,"path"),()=>{n.ignorePathChange||l()});function l(){c.value=[],a.value=!1,n.feedback&&(q.value=xe())}function M(){O("blur")}function p(){O("change")}function y(){O("focus")}function _(){O("input")}function F(h,$){return Ae(this,void 0,void 0,function*(){let E,P,B,Y;typeof h=="string"?(E=h,P=$):h!==null&&typeof h=="object"&&(E=h.trigger,P=h.callback,B=h.shouldRuleBeApplied,Y=h.options),yield new Promise((J,U)=>{O(E,B,Y).then(({valid:G,errors:H})=>{G?(P&&P(),J()):(P&&P(H),U(H))})})})}const O=(h=null,$=()=>!0,E={suppressWarning:!0})=>Ae(this,void 0,void 0,function*(){const{path:P}=n;E?E.first||(E.first=n.first):E={};const{value:B}=f,Y=r?je(r.props.model,P||""):void 0,J={},U={},G=(h?B.filter(V=>Array.isArray(V.trigger)?V.trigger.includes(h):V.trigger===h):B).filter($).map((V,I)=>{const x=Object.assign({},V);if(x.validator&&(x.validator=Se(x.validator,!1)),x.asyncValidator&&(x.asyncValidator=Se(x.asyncValidator,!0)),x.renderMessage){const A=`__renderMessage__${I}`;U[A]=x.message,x.message=A,J[A]=x.renderMessage}return x});if(!G.length)return{valid:!0};const H=P??"__n_no_path__",se=new ae({[H]:G}),{validateMessages:oe}=r?.props||{};return oe&&se.messages(oe),yield new Promise(V=>{se.validate({[H]:Y},E,I=>{I?.length?(c.value=I.map(x=>{const A=x?.message||"";return{key:A,render:()=>A.startsWith("__renderMessage__")?J[A]():A}}),I.forEach(x=>{var A;!((A=x.message)===null||A===void 0)&&A.startsWith("__renderMessage__")&&(x.message=U[x.message])}),a.value=!0,V({valid:!1,errors:I})):(l(),V({valid:!0}))})})});He(Ze,{path:de(n,"path"),disabled:g,mergedSize:i.mergedSize,mergedValidationStatus:s.mergedValidationStatus,restoreValidation:l,handleContentBlur:M,handleContentChange:p,handleContentFocus:y,handleContentInput:_});const L={validate:F,restoreValidation:l,internalValidate:O},W=X(null);Ke(()=>{if(!s.isAutoLabelWidth.value)return;const h=W.value;if(h!==null){const $=h.style.whiteSpace;h.style.whiteSpace="nowrap",h.style.width="",r?.deriveMaxChildLabelWidth(Number(getComputedStyle(h).width.slice(0,-2))),h.style.whiteSpace=$}});const Q=k(()=>{var h;const{value:$}=u,{value:E}=d,P=E==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:B},self:{labelTextColor:Y,asteriskColor:J,lineHeight:U,feedbackTextColor:G,feedbackTextColorWarning:H,feedbackTextColorError:se,feedbackPadding:oe,labelFontWeight:V,[D("labelHeight",$)]:I,[D("blankHeight",$)]:x,[D("feedbackFontSize",$)]:A,[D("feedbackHeight",$)]:ze,[D("labelPadding",P)]:Ve,[D("labelTextAlign",P)]:Ie,[D(D("labelFontSize",E),$)]:Te}}=w.value;let me=(h=m.value)!==null&&h!==void 0?h:Ie;return E==="top"&&(me=me==="right"?"flex-end":"flex-start"),{"--n-bezier":B,"--n-line-height":U,"--n-blank-height":x,"--n-label-font-size":Te,"--n-label-text-align":me,"--n-label-height":I,"--n-label-padding":Ve,"--n-label-font-weight":V,"--n-asterisk-color":J,"--n-label-text-color":Y,"--n-feedback-padding":oe,"--n-feedback-font-size":A,"--n-feedback-height":ze,"--n-feedback-text-color":G,"--n-feedback-text-color-warning":H,"--n-feedback-text-color-error":se}}),N=t?Ye("form-item",k(()=>{var h;return`${u.value[0]}${d.value[0]}${((h=m.value)===null||h===void 0?void 0:h[0])||""}`}),Q,n):void 0,z=k(()=>d.value==="left"&&b.value==="left"&&m.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:W,mergedClsPrefix:e,mergedRequired:o,feedbackId:q,renderExplains:c,reverseColSpace:z},s),i),L),{cssVars:t?void 0:Q,themeClass:N?.themeClass,onRender:N?.onRender})},render(){const{$slots:n,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:r,mergedRequireMarkPlacement:i,onRender:s}=this,a=r!==void 0?r:this.mergedRequired;s?.();const o=()=>{const f=this.$slots.label?this.$slots.label():this.label;if(!f)return null;const u=S("span",{class:`${e}-form-item-label__text`},f),d=a?S("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?" *":"* "):i==="right-hanging"&&S("span",{class:`${e}-form-item-label__asterisk-placeholder`}," *"),{labelProps:m}=this;return S("label",Object.assign({},m,{class:[m?.class,`${e}-form-item-label`,`${e}-form-item-label--${i}-mark`,this.reverseColSpace&&`${e}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),i==="left"?[d,u]:[u,d])};return S("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&o(),S("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},n),this.mergedShowFeedback?S("div",{key:this.feedbackId,class:`${e}-form-item-feedback-wrapper`},S(Je,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:f}=this;return Ue(n.feedback,u=>{var d;const{feedback:m}=this,b=u||m?S("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},u||m):this.renderExplains.length?(d=this.renderExplains)===null||d===void 0?void 0:d.map(({key:c,render:q})=>S("div",{key:c,class:`${e}-form-item-feedback__line`},q())):null;return b?f==="warning"?S("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},b):f==="error"?S("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},b):f==="success"?S("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},b):S("div",{key:"controlled-default",class:`${e}-form-item-feedback`},b):null})}})):null)}});export{Ct as _,Xe as a,ce as f};
