import{u as w,r as d,a as _,i as j,j as q,k as A,l as x,m as S,n as L,q as Q,s as T,x as V,e as P,_ as U,o as r,c as l,b as i,F as N,d as R,t as g,y as f,w as E,v as F,p as J,h as O}from"./index-8cf32698.js";function M(a){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":j,"/src/assets/images/검정 후드티2.jpg":q,"/src/assets/images/검정 후드티3.jpg":A,"/src/assets/images/슬랙스.jpg":x,"/src/assets/images/야구 잠바.jpg":S,"/src/assets/images/청바지.jpg":L,"/src/assets/images/체크셔츠.jpg":Q,"/src/assets/images/회색 후드티.jpg":T,"/src/assets/images/회색 후드티2.jpg":V})[`/src/assets/images/${a}`],self.location).href}function y(a){if(a!==null){var o=a.split(".")[1],c=o.replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(atob(c).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(t)}}const z={setup(){const a=w(),o=d(),c=d([]),t=localStorage.getItem("token"),u=y(t);let p="";u!==void 0&&(p=y(t).userName);const e=d(1),C=d(0),n=d(!1),b=()=>{e.value++,v()},D=()=>{e.value>1&&(e.value--,v())},v=()=>{o.value!==void 0&&(C.value=o.value.price*e.value)},I=async()=>{if(window.confirm("장바구니에 상품을 넣으시겠습니까?"))try{const m=await _.post("api/cartCheck",{productId:a.query.id});if(console.log(m),m.data==="duplication"){alert("장바구니에 있습니다.");return}const h=await _.post("api/insertCart",{productId:a.query.id,cnt:e.value});console.log(h),h.data==="success"&&P.push({name:"CartView",query:{userId:p}})}catch(m){console.error(m)}},B=()=>{n.value=!n.value,n.value===!1?_.post("/api/deleteLike",{productId:a.query.id}).then(s=>{console.log(s)}).catch(s=>{console.log(s)}):_.post("/api/insertLike",{productId:a.query.id}).then(s=>{console.log(s)}).catch(s=>{console.log(s)})};return _.post("/api/productDetail",{productId:a.query.id}).then(s=>{s!==void 0&&(o.value=s.data.productDetail,c.value=s.data.productDetailImg),s.data.likeCheck>0?n.value=!0:n.value=!1}).catch(s=>{console.log(s)}),{product:o,imgList:c,getImageUrl:M,token:t,parseJwt:y,userId:p,addToCart:I,quantity:e,totalPrice:C,incrementQuantity:b,decrementQuantity:D,calculateTotalPrice:v,parseToken:u,likeBtn:B,liked:n}}};const k=a=>(J("data-v-67889350"),a=a(),O(),a),G={class:"centered-content"},H=k(()=>i("h1",null,"상품 디테일 페이지",-1)),K={class:"image-list"},W=["src"],X=k(()=>i("br",null,null,-1)),Y={key:0},Z={key:1},$={key:2},tt=k(()=>i("label",{for:"quantity"},"수량:",-1));function et(a,o,c,t,u,p){return r(),l("div",G,[H,i("div",null,[i("div",K,[(r(!0),l(N,null,R(t.imgList,(e,C)=>(r(),l("div",{key:C,class:"image-item"},[i("img",{src:t.getImageUrl(e.img),style:{width:"200px"}},null,8,W),X]))),128))]),t.product?(r(),l("h2",Y,"이름: "+g(t.product.name),1)):f("",!0),t.product?(r(),l("p",Z,"가격: "+g(t.product.price)+"원",1)):f("",!0),t.product?(r(),l("p",$,"설명: "+g(t.product.content),1)):f("",!0)]),i("div",null,[i("div",null,[tt,i("button",{onClick:o[0]||(o[0]=(...e)=>t.decrementQuantity&&t.decrementQuantity(...e))},"-"),E(i("input",{type:"number",id:"quantity","onUpdate:modelValue":o[1]||(o[1]=e=>t.quantity=e)},null,512),[[F,t.quantity]]),i("button",{onClick:o[2]||(o[2]=(...e)=>t.incrementQuantity&&t.incrementQuantity(...e))},"+")]),i("p",null,"총 가격: "+g(t.totalPrice)+"원",1)]),i("div",null,[i("button",{onClick:o[3]||(o[3]=(...e)=>t.likeBtn&&t.likeBtn(...e))},g(t.liked?"좋아요 취소":"좋아요"),1),i("button",{onClick:o[4]||(o[4]=(...e)=>t.addToCart&&t.addToCart(...e))},"장바구니")])])}const at=U(z,[["render",et],["__scopeId","data-v-67889350"]]);export{at as default};
