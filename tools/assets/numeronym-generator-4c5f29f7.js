import{_ as m}from"./InputCopyable.vue_vue_type_script_setup_true_lang-842fc165.js";import{o as a,f as l,g as p,d,n as f,b as g,k as t,i as r,x as h,y as v}from"./index-7f7898e7.js";const x={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},w=p("path",{fill:"currentColor",d:"M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4Z"},null,-1),y=[w];function $(n,e){return a(),l("svg",x,y)}const b={name:"mdi-arrow-down",render:$};function B(n){const e=n.length;return e<=3?n:`${n.at(0)}${e-2}${n.at(-1)}`}const L={flex:"","flex-col":"","items-center":"","gap-4":""},V=d({__name:"numeronym-generator",setup(n){const e=f(""),s=g(()=>B(e.value));return(k,o)=>{const _=v,c=b,i=m;return a(),l("div",L,[t(_,{value:r(e),"onUpdate:value":o[0]||(o[0]=u=>h(e)?e.value=u:null),placeholder:"Enter a word, e.g. 'internationalization'",size:"large",clearable:"","test-id":"word-input"},null,8,["value"]),t(c,{"text-30px":""}),t(i,{value:r(s),size:"large",readonly:"",placeholder:"Your numeronym will be here, e.g. 'i18n'","test-id":"numeronym"},null,8,["value"])])}}});export{V as default};
