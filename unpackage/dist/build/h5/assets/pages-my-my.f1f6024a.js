import{m as t,o as e,a,w as l,h as o,e as s,g as n,p as i,r,d as c,n as u,b as d,f as h,t as f,i as g,s as b,q as y,u as p,v as _,x as k}from"./index-f7293766.js";import{r as C,_ as m}from"./uni-app.es.d0213e88.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const x=t=>"number"==typeof t?t+"px":t;const B=v({name:"UniNavBar",components:{statusBar:v({name:"UniStatusBar",data:()=>({statusBarHeight:20}),mounted(){this.statusBarHeight=t().statusBarHeight+"px"}},[["render",function(t,i,r,c,u,d){const h=n;return e(),a(h,{style:s({height:u.statusBarHeight}),class:"uni-status-bar"},{default:l((()=>[o(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-6031795b"]])},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight(){return x(this.height)},leftIconWidth(){return x(this.leftWidth)},rightIconWidth(){return x(this.rightWidth)}},mounted(){uni.report&&this.stat&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft(){this.$emit("clickLeft")},onClickRight(){this.$emit("clickRight")},onClickTitle(){this.$emit("clickTitle")}}},[["render",function(t,b,y,p,_,k){const v=i("status-bar"),x=C(r("uni-icons"),m),B=n,S=g;return e(),a(B,{class:u(["uni-navbar",{"uni-dark":y.dark,"uni-nvue-fixed":y.fixed}])},{default:l((()=>[c(B,{class:u(["uni-navbar__content",{"uni-navbar--fixed":y.fixed,"uni-navbar--shadow":y.shadow,"uni-navbar--border":y.border}]),style:s({"background-color":k.themeBgColor})},{default:l((()=>[y.statusBar?(e(),a(v,{key:0})):d("",!0),c(B,{style:s({color:k.themeColor,backgroundColor:k.themeBgColor,height:k.navbarHeight}),class:"uni-navbar__header"},{default:l((()=>[c(B,{onClick:k.onClickLeft,class:"uni-navbar__header-btns uni-navbar__header-btns-left",style:s({width:k.leftIconWidth})},{default:l((()=>[o(t.$slots,"left",{},(()=>[y.leftIcon.length>0?(e(),a(B,{key:0,class:"uni-navbar__content_view"},{default:l((()=>[c(x,{color:k.themeColor,type:y.leftIcon,size:"20"},null,8,["color","type"])])),_:1})):d("",!0),y.leftText.length?(e(),a(B,{key:1,class:u([{"uni-navbar-btn-icon-left":!y.leftIcon.length>0},"uni-navbar-btn-text"])},{default:l((()=>[c(S,{style:s({color:k.themeColor,fontSize:"12px"})},{default:l((()=>[h(f(y.leftText),1)])),_:1},8,["style"])])),_:1},8,["class"])):d("",!0)]),!0)])),_:3},8,["onClick","style"]),c(B,{class:"uni-navbar__header-container",onClick:k.onClickTitle},{default:l((()=>[o(t.$slots,"default",{},(()=>[y.title.length>0?(e(),a(B,{key:0,class:"uni-navbar__header-container-inner"},{default:l((()=>[c(S,{class:"uni-nav-bar-text uni-ellipsis-1",style:s({color:k.themeColor})},{default:l((()=>[h(f(y.title),1)])),_:1},8,["style"])])),_:1})):d("",!0)]),!0)])),_:3},8,["onClick"]),c(B,{onClick:k.onClickRight,class:"uni-navbar__header-btns uni-navbar__header-btns-right",style:s({width:k.rightIconWidth})},{default:l((()=>[o(t.$slots,"right",{},(()=>[y.rightIcon.length?(e(),a(B,{key:0},{default:l((()=>[c(x,{color:k.themeColor,type:y.rightIcon,size:"22"},null,8,["color","type"])])),_:1})):d("",!0),y.rightText.length&&!y.rightIcon.length?(e(),a(B,{key:1,class:"uni-navbar-btn-text"},{default:l((()=>[c(S,{class:"uni-nav-bar-right-text",style:s({color:k.themeColor})},{default:l((()=>[h(f(y.rightText),1)])),_:1},8,["style"])])),_:1})):d("",!0)]),!0)])),_:3},8,["onClick","style"])])),_:3},8,["style"])])),_:3},8,["class","style"]),y.fixed?(e(),a(B,{key:0,class:"uni-navbar__placeholder"},{default:l((()=>[y.statusBar?(e(),a(v,{key:0})):d("",!0),c(B,{class:"uni-navbar__placeholder-view",style:s({height:k.navbarHeight})},null,8,["style"])])),_:1})):d("",!0)])),_:3},8,["class"])}],["__scopeId","data-v-e825e9eb"]]);const S=v({data:()=>({bgColor:"#2979ff",fontColor:"#ffffff",value:9}),onLoad(){b({backgroundColor:this.bgColor,frontColor:this.fontColor})},methods:{navigateToLogin(){y({url:"/pages/index/login"})},btnScanCode(){p({scanType:["qrCode","barCode"],success(t){console.log("success",t)},fail(t){console.log("fail",t)}})},btnMyPic(){_({extension:["png","jpg"],crop:{width:100,height:100},success(t){console.log("success",t)},fail(t){console.log("fail",t)}})}}},[["render",function(t,o,i,u,d,f){const g=C(r("uni-icons"),m),b=n,y=C(r("uni-nav-bar"),B),p=k;return e(),a(b,null,{default:l((()=>[c(b,{class:"my-center"},{default:l((()=>[c(b,{class:"my-setting",style:s({backgroundColor:d.bgColor})},{default:l((()=>[c(g,{type:"scan",size:"24",class:"item",color:"#d4e4ff",onClick:f.btnScanCode},null,8,["onClick"]),c(g,{type:"settings",size:"24",class:"item",color:"#d4e4ff"})])),_:1},8,["style"]),c(b,{class:"my",style:s({backgroundColor:d.bgColor})},{default:l((()=>[c(b,{class:"my-pic"},{default:l((()=>[c(g,{type:"person",size:"60",color:"white"}),c(g,{class:"my-pic-upload",type:"cloud-upload",size:"18",color:"#d4e4ff",onClick:f.btnMyPic},null,8,["onClick"])])),_:1}),c(b,{class:"my-info"})])),_:1},8,["style"])])),_:1}),c(b,{class:"toolbars"},{default:l((()=>[c(b,{class:"toolbars-1"},{default:l((()=>[c(b,{class:"box-bg"},{default:l((()=>[c(y,{shadow:"","right-icon":"right",title:"开启阴影"}),c(y,{shadow:"","right-icon":"right",title:"开启阴影"}),c(y,{shadow:"","right-icon":"right",title:"开启阴影"}),c(p,{type:"primary",onClick:f.navigateToLogin},{default:l((()=>[h("登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-8fad0749"]]);export{S as default};