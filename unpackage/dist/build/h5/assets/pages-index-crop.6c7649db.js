import{m as t,v as o,D as e,E as a,G as c,H as s,I as r,J as p,o as n,a as u,w as i,g as h,d as l,e as d,K as g,b as m,f as T,C as v,x as f,L as y,p as b}from"./index-5942a641.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";let M,W,I=t(),L=I.screenWidth;I.pixelRatio;let S,R,H,B,w,_,k,D,C,Y=100,X=I.screenWidth;const E=x({data:()=>({name:"杨大宝",imageSrc:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b31d90c0-5168-11eb-bdc1-8bd33eb6adaa.jpg",isShowImg:!1,cropperInitW:L,cropperInitH:L,cropperW:L,cropperH:L,cropperL:0,cropperT:0,transL:0,transT:0,scaleP:0,imageW:0,imageH:0,cutL:0,cutT:0,cutB:L,cutR:"100%",qualityWidth:X,innerAspectRadio:1}),onLoad:function(t){},onReady:function(){this.loadImage()},methods:{setData:function(t){let o=this;Object.keys(t).forEach((function(e){o.$set(o.$data,e,t[e])}))},getImage:function(){var t=this;o({success:function(o){t.setData({imageSrc:o.tempFilePaths[0]}),t.loadImage()}})},loadImage:function(){var t=this;e({title:"图片加载中..."}),a({src:t.imageSrc,success:function(o){k=o.width/o.height,k>=1?(D=L,C=L/k):(D=L*k,C=L);let e=D>C?D:C;if(Y=e>Y?Y:e,k>=1){let o=Math.ceil((L/k-(L/k-Y))/2),e=o,a=Math.ceil((L-L+Y)/2),c=a;t.setData({cropperW:L,cropperH:L/k,cropperL:Math.ceil((L-L)/2),cropperT:Math.ceil((L-L/k)/2),cutL:a,cutT:o,cutR:c,cutB:e,imageW:D,imageH:C,scaleP:D/L,qualityWidth:X,innerAspectRadio:k})}else{let o=Math.ceil((L*k-L*k)/2),e=o,a=Math.ceil((L-Y)/2),c=a;t.setData({cropperW:L*k,cropperH:L,cropperL:Math.ceil((L-L*k)/2),cropperT:Math.ceil((L-L)/2),cutL:o,cutT:a,cutR:e,cutB:c,imageW:D,imageH:C,scaleP:D/L,qualityWidth:X,innerAspectRadio:k})}t.setData({isShowImg:!0}),c()}})},contentStartMove(t){M=t.touches[0].pageX,W=t.touches[0].pageY},contentMoveing(t){var o=1*(M-t.touches[0].pageX),e=1*(W-t.touches[0].pageY);o>0?this.cutL-o<0&&(o=this.cutL):this.cutR+o<0&&(o=-this.cutR),e>0?this.cutT-e<0&&(e=this.cutT):this.cutB+e<0&&(e=-this.cutB),this.setData({cutL:this.cutL-o,cutT:this.cutT-e,cutR:this.cutR+o,cutB:this.cutB+e}),M=t.touches[0].pageX,W=t.touches[0].pageY},contentTouchEnd(){},getImageInfo(){var t=this;e({title:"图片生成中..."});const o=s("myCanvas");o.drawImage(t.imageSrc,0,0,D,C),o.draw(!0,(()=>{var o=(t.cropperW-t.cutL-t.cutR)/t.cropperW*D,e=(t.cropperH-t.cutT-t.cutB)/t.cropperH*C,a=t.cutL/t.cropperW*D,s=t.cutT/t.cropperH*C;r({x:a,y:s,width:o,height:e,destWidth:o,destHeight:e,quality:.5,canvasId:"myCanvas",success:function(t){c(),p({current:"",urls:[t.tempFilePath]})}})}))},dragStart(t){S=t.touches[0].pageX,R=t.touches[0].pageY,H=this.cutL,w=this.cutR,_=this.cutB,B=this.cutT},dragMove(t){switch(t.target.dataset.drag){case"right":var o=1*(S-t.touches[0].pageX);w+o<0&&(o=-w),this.setData({cutR:w+o});break;case"left":o=1*(S-t.touches[0].pageX);H-o<0&&(o=H),H-o>this.cropperW-this.cutR&&(o=H-(this.cropperW-this.cutR)),this.setData({cutL:H-o});break;case"top":o=1*(R-t.touches[0].pageY);B-o<0&&(o=B),B-o>this.cropperH-this.cutB&&(o=B-(this.cropperH-this.cutB)),this.setData({cutT:B-o});break;case"bottom":o=1*(R-t.touches[0].pageY);_+o<0&&(o=-_),this.setData({cutB:_+o});break;case"rightBottom":var e=1*(S-t.touches[0].pageX),a=1*(R-t.touches[0].pageY);_+a<0&&(a=-_),w+e<0&&(e=-w);let c=_+a,s=w+e;this.setData({cutB:c,cutR:s})}}}},[["render",function(t,o,e,a,c,s){const r=v,p=h,x=f,M=y,W=b("page-foot");return n(),u(p,{class:"container"},{default:i((()=>[l(p,{class:"page-body uni-content-info"},{default:i((()=>[l(p,{class:"cropper-content"},{default:i((()=>[c.isShowImg?(n(),u(p,{key:0,class:"uni-corpper",style:d("width:"+c.cropperInitW+"px;height:"+c.cropperInitH+"px;background:#000")},{default:i((()=>[l(p,{class:"uni-corpper-content",style:d("width:"+c.cropperW+"px;height:"+c.cropperH+"px;left:"+c.cropperL+"px;top:"+c.cropperT+"px")},{default:i((()=>[l(r,{src:c.imageSrc,style:d("width:"+c.cropperW+"px;height:"+c.cropperH+"px")},null,8,["src","style"]),l(p,{class:"uni-corpper-crop-box",onTouchstart:g(s.contentStartMove,["stop"]),onTouchmove:g(s.contentMoveing,["stop"]),onTouchend:g(s.contentTouchEnd,["stop"]),style:d("left:"+c.cutL+"px;top:"+c.cutT+"px;right:"+c.cutR+"px;bottom:"+c.cutB+"px")},{default:i((()=>[l(p,{class:"uni-cropper-view-box"},{default:i((()=>[l(p,{class:"uni-cropper-dashed-h"}),l(p,{class:"uni-cropper-dashed-v"}),l(p,{class:"uni-cropper-line-t","data-drag":"top",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),l(p,{class:"uni-cropper-line-r","data-drag":"right",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),l(p,{class:"uni-cropper-line-b","data-drag":"bottom",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),l(p,{class:"uni-cropper-line-l","data-drag":"left",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),l(p,{class:"uni-cropper-point point-t","data-drag":"top",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),l(p,{class:"uni-cropper-point point-tr","data-drag":"topTight"}),l(p,{class:"uni-cropper-point point-r","data-drag":"right",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),l(p,{class:"uni-cropper-point point-rb","data-drag":"rightBottom",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),l(p,{class:"uni-cropper-point point-b","data-drag":"bottom",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"]),onTouchend:g(t.dragEnd,["stop"])},null,8,["onTouchstart","onTouchmove","onTouchend"]),l(p,{class:"uni-cropper-point point-bl","data-drag":"bottomLeft"}),l(p,{class:"uni-cropper-point point-l","data-drag":"left",onTouchstart:g(s.dragStart,["stop"]),onTouchmove:g(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),l(p,{class:"uni-cropper-point point-lt","data-drag":"leftTop"})])),_:1})])),_:1},8,["onTouchstart","onTouchmove","onTouchend","style"])])),_:1},8,["style"])])),_:1},8,["style"])):m("",!0)])),_:1}),l(p,{class:"cropper-config"},{default:i((()=>[l(x,{type:"primary reverse",onClick:s.getImage,style:{"margin-top":"30rpx"}},{default:i((()=>[T(" 选择图片 ")])),_:1},8,["onClick"]),l(x,{type:"warn",onClick:s.getImageInfo,style:{"margin-top":"30rpx"}},{default:i((()=>[T(" 点击生成图片 ")])),_:1},8,["onClick"])])),_:1}),l(M,{"canvas-id":"myCanvas",style:d("position:absolute;border: 1px solid red; width:"+c.imageW+"px;height:"+c.imageH+"px;top:-9999px;left:-9999px;")},null,8,["style"])])),_:1}),l(W,{name:c.name},null,8,["name"])])),_:1})}],["__scopeId","data-v-3e9a03f7"]]);export{E as default};