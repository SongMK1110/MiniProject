import{u as C,r as u,a as m,i as b,j as f,k as h,l as j,m as I,n as k,q as w,s as B,x as S,y as x,z as y,A,_ as L,D,o as l,c as g,F as V,d as N,b as t,G as U,H as R,t as v,p as q,h as F}from"./index-c78a98b4.js";function J(s){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":b,"/src/assets/images/검정 후드티2.jpg":f,"/src/assets/images/검정 후드티3.jpg":h,"/src/assets/images/나이키 바지.jpg":j,"/src/assets/images/슬랙스.jpg":I,"/src/assets/images/야구 잠바.jpg":k,"/src/assets/images/양털 후리스.jpg":w,"/src/assets/images/청바지.jpg":B,"/src/assets/images/체크셔츠.jpg":S,"/src/assets/images/패딩 조끼.jpg":x,"/src/assets/images/회색 후드티.jpg":y,"/src/assets/images/회색 후드티2.jpg":A})[`/src/assets/images/${s}`],self.location).href}function O(s){if(s!==null){var o=s.split(".")[1],c=o.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(c).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}}const T={setup(){const s=C(),o=u([]),c=localStorage.getItem("token"),n=O(c).userName,d=u(0),r=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return m.get("/api/likeList").then(e=>{console.log(e),o.value=e.data}).catch(e=>{console.log(e)}),{cartItems:o,userId:n,token:c,route:s,totalPrice:d,getImageUrl:J,delCartBtn:(e,p)=>{window.confirm("삭제하시겠습니까?")&&(m.post("/api/deleteLike",{productId:e}).then(i=>{console.log(i)}).catch(i=>{console.log(i)}),o.value.splice(p,1))},addCommas:r}}};const $=s=>(q("data-v-4dab6ec0"),s=s(),F(),s),z=$(()=>t("h1",null,"좋아요",-1)),E={class:"item-info"},G=["src"],H={class:"item-actions"},P=["onClick"];function K(s,o,c,a,n,d){const r=D("router-link");return l(),g("div",null,[z,(l(!0),g(V,null,N(a.cartItems,(_,e)=>(l(),g("div",{key:e,class:"cart-item"},[t("div",E,[U(r,{to:{name:"productDetailView",query:{id:_.productId}}},{default:R(()=>[t("span",null,[t("img",{src:a.getImageUrl(_.img),style:{width:"80px"}},null,8,G)])]),_:2},1032,["to"]),t("span",null,v(_.name),1),t("span",null,"가격: "+v(a.addCommas(_.price))+"원",1)]),t("div",H,[t("button",{onClick:p=>a.delCartBtn(_.productId,e)},"삭제",8,P)])]))),128))])}const W=L(T,[["render",K],["__scopeId","data-v-4dab6ec0"]]);export{W as default};
