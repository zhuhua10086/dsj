import{v as e,x as a,y as l,z as s,o,a as r,w as t,g as u,d as i,f as n,A as d,B as m,r as c,C as p}from"./index-328d141a.js";import{_ as f,a as _,b as g,c as y}from"./logo.4df6f2e5.js";import{r as h}from"./uni-app.es.cc4e8e97.js";import{_ as V}from"./_plugin-vue_export-helper.1b428a4d.js";const x=V({__name:"login",setup(V){const x=a(),v=l(null),w=s({email:"",password:""}),k={email:{rules:[{required:!0,errorMessage:"必填项"},{format:"email",errorMessage:"邮件格式错误"}]}},b=()=>{v.value.validate().then((a=>{var l,s;(l="api/mobile/elogin",s=w,e({url:l,method:"POST",data:s})).then((e=>{if(console.log(e),e.success){const a=e.data.userinfo;x.setToken(a.token),x.fillUser(a)}})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)}))};function j(){d({url:"/pages/index/register",success(e){console.log(e)},fail(e){console.log(e)}})}return(e,a)=>{const l=m,s=u,d=h(c("uni-easyinput"),_),V=h(c("uni-forms-item"),g),x=p,z=h(c("uni-forms"),y);return o(),r(s,null,{default:t((()=>[i(s,{class:"logo"},{default:t((()=>[i(l,{src:f})])),_:1}),i(z,{class:"myForm",ref_key:"myForm",ref:v,modelValue:w,rules:k},{default:t((()=>[i(V,{name:"email"},{default:t((()=>[i(d,{class:"input",modelValue:w.email,"onUpdate:modelValue":a[0]||(a[0]=e=>w.email=e),placeholder:"请输入电子邮箱","suffix-icon":"email"},null,8,["modelValue"])])),_:1}),i(V,{name:"password"},{default:t((()=>[i(d,{class:"input",type:"password",modelValue:w.password,"onUpdate:modelValue":a[1]||(a[1]=e=>w.password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),i(x,{type:"primary",onClick:b},{default:t((()=>[n("用户登录")])),_:1}),i(s,{class:"logo-extra"},{default:t((()=>[i(x,{type:"default",size:"mini"},{default:t((()=>[n("忘记密码")])),_:1}),i(x,{type:"default",size:"mini",onClick:j},{default:t((()=>[n("用户注册")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}}},[["__scopeId","data-v-1abb0ea5"]]);export{x as default};
