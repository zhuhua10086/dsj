import{y as e,z as a,A as s,o as l,a as o,w as r,g as t,d as i,f as u,B as n,q as m,C as d,r as p,x as f}from"./index-f7293766.js";import{_ as c,a as _,b as g}from"./uni-forms.7c8189ba.js";import{r as y}from"./uni-app.es.d0213e88.js";import{_ as x}from"./logo.04cf753c.js";import{p as V}from"./index.d1c090c0.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const j=h({__name:"login",setup(h){const j=e(),w=a(null),k=s({email:"",password:""}),v={email:{rules:[{required:!0,errorMessage:"必填项"},{format:"email",errorMessage:"邮件格式错误"}]}},b=()=>{w.value.validate().then((e=>{V("api/mobile/elogin",k).then((e=>{if(console.log(e),e.success){const a=e.data.userinfo;j.setToken(a.token),j.fillUser(a),n({url:"/pages/my/my"})}})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)}))};function z(){m({url:"/pages/index/register",success(e){console.log(e)},fail(e){console.log(e)}})}return(e,a)=>{const s=d,n=t,m=y(p("uni-easyinput"),c),V=y(p("uni-forms-item"),_),h=f,j=y(p("uni-forms"),g);return l(),o(n,null,{default:r((()=>[i(n,{class:"logo"},{default:r((()=>[i(s,{src:x})])),_:1}),i(j,{class:"myForm",ref_key:"myForm",ref:w,modelValue:k,rules:v},{default:r((()=>[i(V,{name:"email"},{default:r((()=>[i(m,{class:"input",modelValue:k.email,"onUpdate:modelValue":a[0]||(a[0]=e=>k.email=e),placeholder:"请输入电子邮箱","suffix-icon":"email"},null,8,["modelValue"])])),_:1}),i(V,{name:"password"},{default:r((()=>[i(m,{class:"input",type:"password",modelValue:k.password,"onUpdate:modelValue":a[1]||(a[1]=e=>k.password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),i(h,{type:"primary",onClick:b},{default:r((()=>[u("用户登录")])),_:1}),i(n,{class:"logo-extra"},{default:r((()=>[i(h,{type:"default",size:"mini"},{default:r((()=>[u("忘记密码")])),_:1}),i(h,{type:"default",size:"mini",onClick:z},{default:r((()=>[u("用户注册")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}}},[["__scopeId","data-v-d2e134e3"]]);export{j as default};