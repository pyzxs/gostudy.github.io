import{H as g,J as I,G as w,d as v,K as _,L as x,aK as j,n as M,am as b,R as S,bG as y}from"./index-3215ace6.js";import{f as O,a as P}from"./FormItem-f59a1568.js";const B=g("form",[I("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[g("form-item",{width:"auto",marginRight:"18px"},[w("&:last-child",{marginRight:0})])])]);var L=globalThis&&globalThis.__awaiter||function(n,c,o,s){function u(r){return r instanceof o?r:new o(function(a){a(r)})}return new(o||(o=Promise))(function(r,a){function h(t){try{i(s.next(t))}catch(m){a(m)}}function e(t){try{i(s.throw(t))}catch(m){a(m)}}function i(t){t.done?r(t.value):u(t.value).then(h,e)}i((s=s.apply(n,c||[])).next())})};const R=Object.assign(Object.assign({},x.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:n=>{n.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),K=v({name:"Form",props:R,setup(n){const{mergedClsPrefixRef:c}=_(n);x("Form","-form",B,j,n,c);const o={},s=M(void 0),u=e=>{const i=s.value;(i===void 0||e>=i)&&(s.value=e)};function r(e,i=()=>!0){return L(this,void 0,void 0,function*(){yield new Promise((t,m)=>{const p=[];for(const d of y(o)){const f=o[d];for(const l of f)l.path&&p.push(l.internalValidate(null,i))}Promise.all(p).then(d=>{if(d.some(f=>!f.valid)){const f=d.filter(l=>l.errors).map(l=>l.errors);e&&e(f),m(f)}else e&&e(),t()})})})}function a(){for(const e of y(o)){const i=o[e];for(const t of i)t.restoreValidation()}}return b(O,{props:n,maxChildLabelWidthRef:s,deriveMaxChildLabelWidth:u}),b(P,{formItems:o}),Object.assign({validate:r,restoreValidation:a},{mergedClsPrefix:c})},render(){const{mergedClsPrefix:n}=this;return S("form",{class:[`${n}-form`,this.inline&&`${n}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});export{K as _};
