import{a3 as _,d as k,n as J,E as m,b as O,p as S,o as N,f as j,g as w,k as n,w as p,i as s,x as c,F as V,y as E,D as z}from"./index-7f7898e7.js";import{l as y}from"./index-231c3e11.js";import{w as C}from"./defaults-4d6daddf.js";import{T as B}from"./TextareaCopyable-3a2ee67e.js";import{_ as P}from"./Switch-dd0f261b.js";import{_ as U}from"./FormItem-332c6278.js";import{_ as A}from"./InputNumber-45de7e96.js";import"./Copy-2f3d1794.js";import"./Scrollbar-24fde48a.js";import"./use-form-item-f6bb8cbd.js";import"./use-locale-d0f3956a.js";import"./Input-ccc7190c.js";import"./Button-abfb8826.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-5bb4e56d.js";function d(t){return typeof t!="object"||t===null?t:Array.isArray(t)?t.map(d):Object.keys(t).sort((o,e)=>o.localeCompare(e)).reduce((o,e)=>(o[e]=d(t[e]),o),{})}function D({rawJson:t,sortKeys:o=!0,indentSize:e=3}){const a=y.parse(_(t));return JSON.stringify(_(o)?d(a):a,null,_(e))}const F={style:{flex:"0 0 100%"}},I={style:{margin:"0 auto","max-width":"600px"},flex:"","justify-center":"","gap-3":""},K=k({__name:"json-viewer",setup(t){const o=J(),e=m("json-prettify:raw-json",'{"hello": "world", "foo": "bar"}'),a=m("json-prettify:indent-size",3),i=m("json-prettify:sort-keys",!0),g=O(()=>C(()=>D({rawJson:e,indentSize:a,sortKeys:i}),"")),v=S({source:e,rules:[{validator:f=>f===""||y.parse(f),message:"Provided JSON is not valid."}]});return(f,l)=>{const x=P,u=U,b=A,h=E;return N(),j(V,null,[w("div",F,[w("div",I,[n(u,{label:"Sort keys :","label-placement":"left","label-width":"100"},{default:p(()=>[n(x,{value:s(i),"onUpdate:value":l[0]||(l[0]=r=>c(i)?i.value=r:null)},null,8,["value"])]),_:1}),n(u,{label:"Indent size :","label-placement":"left","label-width":"100","show-feedback":!1},{default:p(()=>[n(b,{value:s(a),"onUpdate:value":l[1]||(l[1]=r=>c(a)?a.value=r:null),min:"0",max:"10",style:{width:"100px"}},null,8,["value"])]),_:1})])]),n(u,{label:"Your raw JSON",feedback:s(v).message,"validation-status":s(v).status},{default:p(()=>[n(h,{ref_key:"inputElement",ref:o,value:s(e),"onUpdate:value":l[2]||(l[2]=r=>c(e)?e.value=r:null),placeholder:"Paste your raw JSON here...",rows:"20",multiline:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",monospace:""},null,8,["value"])]),_:1},8,["feedback","validation-status"]),n(u,{label:"Prettified version of your JSON"},{default:p(()=>[n(B,{value:s(g),language:"json","follow-height-of":s(o)},null,8,["value","follow-height-of"])]),_:1})],64)}}});const ne=z(K,[["__scopeId","data-v-520af694"]]);export{ne as default};
