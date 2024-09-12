import{d as v,o as w,f as p,g as l,b9 as y,E,b as N,k as m,i as g,x as V,w as b,F as C,h as P,l as F,W as A,y as $,aT as B,m as j,t as x,c as M}from"./index-7f7898e7.js";import{w as z}from"./defaults-4d6daddf.js";import{i as S}from"./boolean-c7e7c785.js";import{_ as R}from"./SpanCopyable.vue_vue_type_script_setup_true_lang-2599591b.js";import{_ as T}from"./Table-725639d5.js";const D={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},O=l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("path",{d:"M5 12h14"}),l("path",{d:"M5 12l6 6"}),l("path",{d:"M5 12l6-6"})],-1),W=[O],U=v({name:"ArrowLeft",render:function(i,c){return w(),p("svg",D,W)}}),G={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},X=l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("path",{d:"M5 12h14"}),l("path",{d:"M13 18l6-6"}),l("path",{d:"M13 6l6 6"})],-1),q=[X],H=v({name:"ArrowRight",render:function(i,c){return w(),p("svg",G,q)}});var I;(function(){var u,i,c,d,k,_,f,n;n=function(e){var t,s,o,r;return t=(e&255<<24)>>>24,s=(e&255<<16)>>>16,o=(e&65280)>>>8,r=e&255,[t,s,o,r].join(".")},f=function(e){var t,s,o,r,a,h;for(t=[],o=r=0;r<=3&&e.length!==0;o=++r){if(o>0){if(e[0]!==".")throw new Error("Invalid IP");e=e.substring(1)}h=i(e),a=h[0],s=h[1],e=e.substring(s),t.push(a)}if(e.length!==0)throw new Error("Invalid IP");switch(t.length){case 1:if(t[0]>4294967295)throw new Error("Invalid IP");return t[0]>>>0;case 2:if(t[0]>255||t[1]>16777215)throw new Error("Invalid IP");return(t[0]<<24|t[1])>>>0;case 3:if(t[0]>255||t[1]>255||t[2]>65535)throw new Error("Invalid IP");return(t[0]<<24|t[1]<<16|t[2])>>>0;case 4:if(t[0]>255||t[1]>255||t[2]>255||t[3]>255)throw new Error("Invalid IP");return(t[0]<<24|t[1]<<16|t[2]<<8|t[3])>>>0;default:throw new Error("Invalid IP")}},c=function(e){return e.charCodeAt(0)},d=c("0"),_=c("a"),k=c("A"),i=function(e){var t,s,o,r,a;for(r=0,t=10,s="9",o=0,e.length>1&&e[o]==="0"&&(e[o+1]==="x"||e[o+1]==="X"?(o+=2,t=16):"0"<=e[o+1]&&e[o+1]<="9"&&(o++,t=8,s="7")),a=o;o<e.length;){if("0"<=e[o]&&e[o]<=s)r=r*t+(c(e[o])-d)>>>0;else if(t===16)if("a"<=e[o]&&e[o]<="f")r=r*t+(10+c(e[o])-_)>>>0;else if("A"<=e[o]&&e[o]<="F")r=r*t+(10+c(e[o])-k)>>>0;else break;else break;if(r>4294967295)throw new Error("too large");o++}if(o===a)throw new Error("empty octet");return[r,o]},u=function(){function e(t,s){var o,r,a;if(typeof t!="string")throw new Error("Missing `net' parameter");if(s||(a=t.split("/",2),t=a[0],s=a[1]),s||(s=32),typeof s=="string"&&s.indexOf(".")>-1){try{this.maskLong=f(s)}catch{throw new Error("Invalid mask: "+s)}for(o=r=32;r>=0;o=--r)if(this.maskLong===4294967295<<32-o>>>0){this.bitmask=o;break}}else if(s||s===0)this.bitmask=parseInt(s,10),this.maskLong=0,this.bitmask>0&&(this.maskLong=4294967295<<32-this.bitmask>>>0);else throw new Error("Invalid mask: empty");try{this.netLong=(f(t)&this.maskLong)>>>0}catch{throw new Error("Invalid net address: "+t)}if(!(this.bitmask<=32))throw new Error("Invalid mask for ip4: "+s);this.size=Math.pow(2,32-this.bitmask),this.base=n(this.netLong),this.mask=n(this.maskLong),this.hostmask=n(~this.maskLong),this.first=this.bitmask<=30?n(this.netLong+1):this.base,this.last=this.bitmask<=30?n(this.netLong+this.size-2):n(this.netLong+this.size-1),this.broadcast=this.bitmask<=30?n(this.netLong+this.size-1):void 0}return e.prototype.contains=function(t){return typeof t=="string"&&(t.indexOf("/")>0||t.split(".").length!==4)&&(t=new e(t)),t instanceof e?this.contains(t.base)&&this.contains(t.broadcast||t.last):(f(t)&this.maskLong)>>>0===(this.netLong&this.maskLong)>>>0},e.prototype.next=function(t){return t==null&&(t=1),new e(n(this.netLong+this.size*t),this.mask)},e.prototype.forEach=function(t){var s,o,r;for(r=f(this.first),o=f(this.last),s=0;r<=o;)t(n(r),r,s),s++,r++},e.prototype.toString=function(){return this.base+"/"+this.bitmask},e}(),I=u}).call(y);function J({ip:u}){const[i]=u.split(".").map(Number);if(i<128)return"A";if(i>127&&i<192)return"B";if(i>191&&i<224)return"C";if(i>223&&i<240)return"D";if(i>239&&i<256)return"E"}const K={key:0},Q={"font-bold":""},Y={key:1,"op-70":""},Z={"mt-3":"",flex:"","items-center":"","justify-between":""},st=v({__name:"ipv4-subnet-calculator",setup(u){const i=E("ipv4-subnet-calculator:ip","192.168.0.1/24"),c=n=>new I(n.trim()),d=N(()=>z(()=>c(i.value),void 0)),k=[{message:"We cannot parse this address, check the format",validator:n=>S(()=>c(n.trim()))}],_=[{label:"Netmask",getValue:n=>n.toString()},{label:"Network address",getValue:({base:n})=>n},{label:"Network mask",getValue:({mask:n})=>n},{label:"Network mask in binary",getValue:({bitmask:n})=>("1".repeat(n)+"0".repeat(32-n)).match(/.{8}/g)?.join(".")??""},{label:"CIDR notation",getValue:({bitmask:n})=>`/${n}`},{label:"Wildcard mask",getValue:({hostmask:n})=>n},{label:"Network size",getValue:({size:n})=>String(n)},{label:"First address",getValue:({first:n})=>n},{label:"Last address",getValue:({last:n})=>n},{label:"Broadcast address",getValue:({broadcast:n})=>n,undefinedFallback:"No broadcast address with this mask"},{label:"IP class",getValue:({base:n})=>J({ip:n}),undefinedFallback:"Unknown class type"}];function f({count:n=1}){const e=d.value?.next(n);e&&(i.value=e.toString())}return(n,e)=>{const t=$,s=T,o=B,r=j;return w(),p("div",null,[m(t,{value:g(i),"onUpdate:value":e[0]||(e[0]=a=>V(i)?i.value=a:null),label:"An IPv4 address with or without mask",placeholder:"The ipv4 address...","validation-rules":k,"mb-4":""},null,8,["value"]),g(d)?(w(),p("div",K,[m(s,null,{default:b(()=>[l("tbody",null,[(w(),p(C,null,P(_,({getValue:a,label:h,undefinedFallback:L})=>l("tr",{key:h},[l("td",Q,x(h),1),l("td",null,[a(g(d))?(w(),M(R,{key:0,value:a(g(d))},null,8,["value"])):(w(),p("span",Y,x(L),1))])])),64))])]),_:1}),l("div",Z,[m(r,{onClick:e[1]||(e[1]=a=>f({count:-1}))},{default:b(()=>[m(o,{component:g(U)},null,8,["component"]),F(" Previous block ")]),_:1}),m(r,{onClick:e[2]||(e[2]=a=>f({count:1}))},{default:b(()=>[F(" Next block "),m(o,{component:g(H)},null,8,["component"])]),_:1})])])):A("",!0)])}}});export{st as default};
