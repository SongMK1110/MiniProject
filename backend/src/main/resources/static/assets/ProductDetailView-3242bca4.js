import{u as A,r as _,a as g,i as w,j as q,k as x,l as S,m as L,n as P,q as Q,s as T,x as V,y as U,z as N,A as R,e as E,_ as F,o as n,c as r,b as i,F as J,d as O,t as l,B as v,w as z,v as M,p as G,h as H}from"./index-ea569c00.js";function K(s){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":w,"/src/assets/images/검정 후드티2.jpg":q,"/src/assets/images/검정 후드티3.jpg":x,"/src/assets/images/나이키 바지.jpg":S,"/src/assets/images/슬랙스.jpg":L,"/src/assets/images/야구 잠바.jpg":P,"/src/assets/images/양털 후리스.jpg":Q,"/src/assets/images/청바지.jpg":T,"/src/assets/images/체크셔츠.jpg":V,"/src/assets/images/패딩 조끼.jpg":U,"/src/assets/images/회색 후드티.jpg":N,"/src/assets/images/회색 후드티2.jpg":R})[`/src/assets/images/${s}`],self.location).href}function y(s){if(s!==null){var a=s.split(".")[1],u=a.replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(atob(u).split("").map(function(d){return"%"+("00"+d.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(t)}}const W={setup(){const s=A(),a=_(),u=_([]),t=localStorage.getItem("token"),d=y(t);let p="";d!==void 0&&(p=y(t).userName);const e=_(1),m=_(""),c=_(!1),b=o=>o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),D=()=>{e.value++,f()},B=()=>{e.value>1&&(e.value--,f())},f=()=>{a.value!==void 0&&(m.value=b(a.value.price*e.value))},j=async()=>{if(window.confirm("장바구니에 상품을 넣으시겠습니까?"))try{const C=await g.post("api/cartCheck",{productId:s.query.id});if(console.log(C),C.data==="duplication"){alert("장바구니에 있습니다.");return}const h=await g.post("api/insertCart",{productId:s.query.id,cnt:e.value});console.log(h),h.data==="success"&&E.push({name:"CartView",query:{userId:p}})}catch(C){console.error(C)}},I=()=>{c.value=!c.value,c.value===!1?g.post("/api/deleteLike",{productId:s.query.id}).then(o=>{console.log(o)}).catch(o=>{console.log(o)}):g.post("/api/insertLike",{productId:s.query.id}).then(o=>{console.log(o)}).catch(o=>{console.log(o)})};return g.post("/api/productDetail",{productId:s.query.id}).then(o=>{o!==void 0&&(a.value=o.data.productDetail,u.value=o.data.productDetailImg),o.data.likeCheck>0?c.value=!0:c.value=!1}).catch(o=>{console.log(o)}),{product:a,imgList:u,getImageUrl:K,token:t,parseJwt:y,userId:p,addToCart:j,quantity:e,totalPrice:m,incrementQuantity:D,decrementQuantity:B,calculateTotalPrice:f,parseToken:d,likeBtn:I,liked:c,addCommas:b}}};const k=s=>(G("data-v-fa147ba3"),s=s(),H(),s),X={class:"centered-content"},Y=k(()=>i("h1",null,"상품 디테일 페이지",-1)),Z={class:"image-list"},$=["src"],tt=k(()=>i("br",null,null,-1)),et={key:0},at={key:1},ot={key:2},st=k(()=>i("label",{for:"quantity"},"수량:",-1)),it={key:0},nt={key:1};function rt(s,a,u,t,d,p){return n(),r("div",X,[Y,i("div",null,[i("div",Z,[(n(!0),r(J,null,O(t.imgList,(e,m)=>(n(),r("div",{key:m,class:"image-item"},[i("img",{src:t.getImageUrl(e.img),style:{width:"200px"}},null,8,$),tt]))),128))]),t.product?(n(),r("h2",et,"이름: "+l(t.product.name),1)):v("",!0),t.product?(n(),r("p",at,"가격: "+l(t.addCommas(t.product.price))+"원",1)):v("",!0),t.product?(n(),r("p",ot,"설명: "+l(t.product.content),1)):v("",!0)]),i("div",null,[i("div",null,[st,i("button",{onClick:a[0]||(a[0]=(...e)=>t.decrementQuantity&&t.decrementQuantity(...e))},"-"),z(i("input",{type:"number",id:"quantity","onUpdate:modelValue":a[1]||(a[1]=e=>t.quantity=e),readonly:""},null,512),[[M,t.quantity]]),i("button",{onClick:a[2]||(a[2]=(...e)=>t.incrementQuantity&&t.incrementQuantity(...e))},"+")]),t.totalPrice!=""?(n(),r("p",it,"총 가격: "+l(t.totalPrice)+"원",1)):t.product?(n(),r("p",nt,"총 가격: "+l(t.addCommas(t.product.price))+"원",1)):v("",!0)]),i("div",null,[i("button",{onClick:a[3]||(a[3]=(...e)=>t.likeBtn&&t.likeBtn(...e))},l(t.liked?"좋아요 취소":"좋아요"),1),i("button",{onClick:a[4]||(a[4]=(...e)=>t.addToCart&&t.addToCart(...e))},"장바구니")])])}const lt=F(W,[["render",rt],["__scopeId","data-v-fa147ba3"]]);export{lt as default};
