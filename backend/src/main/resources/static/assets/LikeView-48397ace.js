import{u as f,r as u,a as g,i as h,j as C,k as I,l as b,m as j,n as k,q as w,s as B,x,_ as y,z as S,o as i,c as l,F as A,d as L,b as t,A as V,B as D,t as m,p as N,h as U}from"./index-a2b628f1.js";function q(e){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":h,"/src/assets/images/검정 후드티2.jpg":C,"/src/assets/images/검정 후드티3.jpg":I,"/src/assets/images/슬랙스.jpg":b,"/src/assets/images/야구 잠바.jpg":j,"/src/assets/images/청바지.jpg":k,"/src/assets/images/체크셔츠.jpg":w,"/src/assets/images/회색 후드티.jpg":B,"/src/assets/images/회색 후드티2.jpg":x})[`/src/assets/images/${e}`],self.location).href}function R(e){if(e!==null){var o=e.split(".")[1],c=o.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(c).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}}const $={setup(){const e=f(),o=u([]),c=localStorage.getItem("token"),n=R(c).userName,d=u(0);return g.get("/likeList").then(s=>{console.log(s),o.value=s.data}).catch(s=>{console.log(s)}),{cartItems:o,userId:n,token:c,route:e,totalPrice:d,getImageUrl:q,delCartBtn:(s,r)=>{window.confirm("삭제하시겠습니까?")&&(g.post("/deleteLike",{productId:e.query.id}).then(_=>{console.log(_)}).catch(_=>{console.log(_)}),o.value.splice(r,1))}}}};const F=e=>(N("data-v-85972632"),e=e(),U(),e),J=F(()=>t("h1",null,"좋아요",-1)),O={class:"item-info"},T=["src"],z={class:"item-actions"},E=["onClick"];function P(e,o,c,a,n,d){const p=S("router-link");return i(),l("div",null,[J,(i(!0),l(A,null,L(a.cartItems,(s,r)=>(i(),l("div",{key:r,class:"cart-item"},[t("div",O,[V(p,{to:{name:"productDetailView",query:{id:s.productId}}},{default:D(()=>[t("span",null,[t("img",{src:a.getImageUrl(s.img),style:{width:"80px"}},null,8,T)])]),_:2},1032,["to"]),t("span",null,m(s.name),1),t("span",null,"가격: "+m(s.price)+"원",1)]),t("div",z,[t("button",{onClick:v=>a.delCartBtn(s.productId,r)},"삭제",8,E)])]))),128))])}const H=y($,[["render",P],["__scopeId","data-v-85972632"]]);export{H as default};
