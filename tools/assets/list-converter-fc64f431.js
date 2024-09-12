import{_ as w}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-05e0ef41.js";import{e as m,d as h,E as k,o as g,f as L,g as d,k as r,w as n,i as l,F as S,X as C,y as P,z as U}from"./index-3215ace6.js";import{_ as B}from"./Switch-7ba734e5.js";import{_ as y}from"./FormItem-f59a1568.js";import"./TextareaCopyable-581ba36b.js";import"./Copy-a0668be7.js";import"./Scrollbar-af90be0c.js";import"./use-form-item-9a3ca6d4.js";function I({order:o}){return(a,e)=>o==="asc"?a.localeCompare(e):e.localeCompare(a)}function p(o,a){return e=>o?a(e):e}function D(o,a){const e=a.keepLineBreaks?`
`:"";return m.chain(o).thru(p(a.lowerCase,s=>s.toLowerCase())).split(`
`).thru(p(a.removeDuplicates,m.uniq)).thru(p(a.reverseList,m.reverse)).thru(p(!m.isNull(a.sortList),s=>s.sort(I({order:a.sortList})))).map(p(a.trimItems,m.trim)).without("").map(s=>a.itemPrefix+s+a.itemSuffix).join(a.separator+e).thru(s=>[a.listPrefix,s,a.listSuffix].join(e)).value()}const N={style:{flex:"0 0 100%"}},O={style:{margin:"0 auto","max-width":"600px"}},$={flex:""},j={"flex-1":""},R=h({__name:"list-converter",setup(o){const a=[{label:"Sort ascending",value:"asc",disabled:!1},{label:"Sort descending",value:"desc",disabled:!1}],e=k("list-converter:conversionConfig",{lowerCase:!1,trimItems:!0,removeDuplicates:!0,keepLineBreaks:!1,itemPrefix:"",itemSuffix:"",listPrefix:"",listSuffix:"",reverseList:!1,sortList:null,separator:", "});function s(b){return D(b,e.value)}return(b,t)=>{const v=B,u=y,_=C,f=P,c=U,x=w;return g(),L(S,null,[d("div",N,[d("div",O,[r(c,null,{default:n(()=>[d("div",$,[d("div",null,[r(u,{label:"Trim list items","label-placement":"left","label-width":"150","show-feedback":!1,"mb-2":""},{default:n(()=>[r(v,{value:l(e).trimItems,"onUpdate:value":t[0]||(t[0]=i=>l(e).trimItems=i)},null,8,["value"])]),_:1}),r(u,{label:"Remove duplicates","label-placement":"left","label-width":"150","show-feedback":!1,"mb-2":""},{default:n(()=>[r(v,{value:l(e).removeDuplicates,"onUpdate:value":t[1]||(t[1]=i=>l(e).removeDuplicates=i),"data-test-id":"removeDuplicates"},null,8,["value"])]),_:1}),r(u,{label:"Convert to lowercase","label-placement":"left","label-width":"150","show-feedback":!1,"mb-2":""},{default:n(()=>[r(v,{value:l(e).lowerCase,"onUpdate:value":t[2]||(t[2]=i=>l(e).lowerCase=i)},null,8,["value"])]),_:1}),r(u,{label:"Keep line breaks","label-placement":"left","label-width":"150","show-feedback":!1,"mb-2":""},{default:n(()=>[r(v,{value:l(e).keepLineBreaks,"onUpdate:value":t[3]||(t[3]=i=>l(e).keepLineBreaks=i)},null,8,["value"])]),_:1})]),d("div",j,[r(_,{value:l(e).sortList,"onUpdate:value":t[4]||(t[4]=i=>l(e).sortList=i),label:"Sort list","label-position":"left","label-width":"120px","label-align":"right","mb-2":"",options:a,"w-full":"",disabled:l(e).reverseList,"data-test-id":"sortList",placeholder:"Sort alphabetically"},null,8,["value","disabled"]),r(f,{value:l(e).separator,"onUpdate:value":t[5]||(t[5]=i=>l(e).separator=i),label:"Separator","label-position":"left","label-width":"120px","label-align":"right","mb-2":"",placeholder:","},null,8,["value"]),r(u,{label:"Wrap item","label-placement":"left","label-width":"120","show-feedback":!1,"mb-2":""},{default:n(()=>[r(f,{value:l(e).itemPrefix,"onUpdate:value":t[6]||(t[6]=i=>l(e).itemPrefix=i),placeholder:"Item prefix","test-id":"itemPrefix"},null,8,["value"]),r(f,{value:l(e).itemSuffix,"onUpdate:value":t[7]||(t[7]=i=>l(e).itemSuffix=i),placeholder:"Item suffix","test-id":"itemSuffix"},null,8,["value"])]),_:1}),r(u,{label:"Wrap list","label-placement":"left","label-width":"120","show-feedback":!1,"mb-2":""},{default:n(()=>[r(f,{value:l(e).listPrefix,"onUpdate:value":t[8]||(t[8]=i=>l(e).listPrefix=i),placeholder:"List prefix","test-id":"listPrefix"},null,8,["value"]),r(f,{value:l(e).listSuffix,"onUpdate:value":t[9]||(t[9]=i=>l(e).listSuffix=i),placeholder:"List suffix","test-id":"listSuffix"},null,8,["value"])]),_:1})])])]),_:1})])]),r(x,{"input-label":"Your input data","input-placeholder":"Paste your input data here...","output-label":"Your transformed data",transformer:s})],64)}}});export{R as default};
