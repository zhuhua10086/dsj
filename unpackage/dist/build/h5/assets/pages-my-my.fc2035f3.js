import{m as t,o as e,a as l,w as a,h as o,e as s,g as n,p as i,r,d as c,n as u,b as d,f as h,t as f,i as g,s as b,q as y,u as p}from"./index-328d141a.js";import{r as _,_ as k}from"./uni-app.es.cc4e8e97.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";const m=t=>"number"==typeof t?t+"px":t;const v=C({name:"UniNavBar",components:{statusBar:C({name:"UniStatusBar",data:()=>({statusBarHeight:20}),mounted(){this.statusBarHeight=t().statusBarHeight+"px"}},[["render",function(t,i,r,c,u,d){const h=n;return e(),l(h,{style:s({height:u.statusBarHeight}),class:"uni-status-bar"},{default:a((()=>[o(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-6031795b"]])},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight(){return m(this.height)},leftIconWidth(){return m(this.leftWidth)},rightIconWidth(){return m(this.rightWidth)}},mounted(){uni.report&&this.stat&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft(){this.$emit("clickLeft")},onClickRight(){this.$emit("clickRight")},onClickTitle(){this.$emit("clickTitle")}}},[["render",function(t,b,y,p,C,m){const v=i("status-bar"),x=_(r("uni-icons"),k),B=n,S=g;return e(),l(B,{class:u(["uni-navbar",{"uni-dark":y.dark,"uni-nvue-fixed":y.fixed}])},{default:a((()=>[c(B,{class:u(["uni-navbar__content",{"uni-navbar--fixed":y.fixed,"uni-navbar--shadow":y.shadow,"uni-navbar--border":y.border}]),style:s({"background-color":m.themeBgColor})},{default:a((()=>[y.statusBar?(e(),l(v,{key:0})):d("",!0),c(B,{style:s({color:m.themeColor,backgroundColor:m.themeBgColor,height:m.navbarHeight}),class:"uni-navbar__header"},{default:a((()=>[c(B,{onClick:m.onClickLeft,class:"uni-navbar__header-btns uni-navbar__header-btns-left",style:s({width:m.leftIconWidth})},{default:a((()=>[o(t.$slots,"left",{},(()=>[y.leftIcon.length>0?(e(),l(B,{key:0,class:"uni-navbar__content_view"},{default:a((()=>[c(x,{color:m.themeColor,type:y.leftIcon,size:"20"},null,8,["color","type"])])),_:1})):d("",!0),y.leftText.length?(e(),l(B,{key:1,class:u([{"uni-navbar-btn-icon-left":!y.leftIcon.length>0},"uni-navbar-btn-text"])},{default:a((()=>[c(S,{style:s({color:m.themeColor,fontSize:"12px"})},{default:a((()=>[h(f(y.leftText),1)])),_:1},8,["style"])])),_:1},8,["class"])):d("",!0)]),!0)])),_:3},8,["onClick","style"]),c(B,{class:"uni-navbar__header-container",onClick:m.onClickTitle},{default:a((()=>[o(t.$slots,"default",{},(()=>[y.title.length>0?(e(),l(B,{key:0,class:"uni-navbar__header-container-inner"},{default:a((()=>[c(S,{class:"uni-nav-bar-text uni-ellipsis-1",style:s({color:m.themeColor})},{default:a((()=>[h(f(y.title),1)])),_:1},8,["style"])])),_:1})):d("",!0)]),!0)])),_:3},8,["onClick"]),c(B,{onClick:m.onClickRight,class:"uni-navbar__header-btns uni-navbar__header-btns-right",style:s({width:m.rightIconWidth})},{default:a((()=>[o(t.$slots,"right",{},(()=>[y.rightIcon.length?(e(),l(B,{key:0},{default:a((()=>[c(x,{color:m.themeColor,type:y.rightIcon,size:"22"},null,8,["color","type"])])),_:1})):d("",!0),y.rightText.length&&!y.rightIcon.length?(e(),l(B,{key:1,class:"uni-navbar-btn-text"},{default:a((()=>[c(S,{class:"uni-nav-bar-right-text",style:s({color:m.themeColor})},{default:a((()=>[h(f(y.rightText),1)])),_:1},8,["style"])])),_:1})):d("",!0)]),!0)])),_:3},8,["onClick","style"])])),_:3},8,["style"])])),_:3},8,["class","style"]),y.fixed?(e(),l(B,{key:0,class:"uni-navbar__placeholder"},{default:a((()=>[y.statusBar?(e(),l(v,{key:0})):d("",!0),c(B,{class:"uni-navbar__placeholder-view",style:s({height:m.navbarHeight})},null,8,["style"])])),_:1})):d("",!0)])),_:3},8,["class"])}],["__scopeId","data-v-e825e9eb"]]);const x=C({data:()=>({bgColor:"#2979ff",fontColor:"#ffffff",value:9}),onLoad(){b({backgroundColor:this.bgColor,frontColor:this.fontColor})},methods:{btnScanCode(){y({scanType:["qrCode","barCode"],success(t){console.log("success",t)},fail(t){console.log("fail",t)}})},btnMyPic(){p({extension:["png","jpg"],crop:{width:100,height:100},success(t){console.log("success",t)},fail(t){console.log("fail",t)}})}}},[["render",function(t,o,i,u,d,h){const f=_(r("uni-icons"),k),g=n,b=_(r("uni-nav-bar"),v);return e(),l(g,null,{default:a((()=>[c(g,{class:"my-center"},{default:a((()=>[c(g,{class:"my-setting",style:s({backgroundColor:d.bgColor})},{default:a((()=>[c(f,{type:"scan",size:"24",class:"item",color:"#d4e4ff",onClick:h.btnScanCode},null,8,["onClick"]),c(f,{type:"settings",size:"24",class:"item",color:"#d4e4ff"})])),_:1},8,["style"]),c(g,{class:"my",style:s({backgroundColor:d.bgColor})},{default:a((()=>[c(g,{class:"my-pic"},{default:a((()=>[c(f,{type:"person",size:"60",color:"white"}),c(f,{class:"my-pic-upload",type:"cloud-upload",size:"18",color:"#d4e4ff",onClick:h.btnMyPic},null,8,["onClick"])])),_:1}),c(g,{class:"my-info"})])),_:1},8,["style"])])),_:1}),c(g,{class:"toolbars"},{default:a((()=>[c(g,{class:"toolbars-1"},{default:a((()=>[c(g,{class:"box-bg"},{default:a((()=>[c(b,{shadow:"","right-icon":"right",title:"开启阴影"}),c(b,{shadow:"","right-icon":"right",title:"开启阴影"}),c(b,{shadow:"","right-icon":"right",title:"开启阴影"})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-7c2542ab"]]);export{x as default};
