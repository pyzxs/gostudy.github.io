import{d as f,n as x,b,v,o as u,f as c,k as s,i as a,x as y,w as i,l as p,t as A,g as _,W as C,y as N,z as g,m as k}from"./index-7f7898e7.js";const T=["Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliet","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"];function O({letter:o}){return o.toLowerCase().charCodeAt(0)-"a".charCodeAt(0)}function V({text:o}){return o.split("").map(t=>{const e=O({letter:t});return T[e]??t}).join(" ")}const B={key:0},W=_("div",{"mb-2":""}," Your text in NATO phonetic alphabet ",-1),w={"mt-3":"",flex:"","justify-center":""},P=f({__name:"text-to-nato-alphabet",setup(o){const t=x(""),e=b(()=>V({text:t.value})),{copy:l}=v({source:e,text:"NATO alphabet string copied."});return(I,n)=>{const d=N,m=g,h=k;return u(),c("div",null,[s(d,{value:a(t),"onUpdate:value":n[0]||(n[0]=r=>y(t)?t.value=r:null),label:"Your text to convert to NATO phonetic alphabet",placeholder:"Put your text here...",clearable:"","mb-5":""},null,8,["value"]),a(e)?(u(),c("div",B,[W,s(m,null,{default:i(()=>[p(A(a(e)),1)]),_:1}),_("div",w,[s(h,{autofocus:"",onClick:n[1]||(n[1]=r=>a(l)())},{default:i(()=>[p(" Copy NATO string ")]),_:1})])])):C("",!0)])}}});export{P as default};
