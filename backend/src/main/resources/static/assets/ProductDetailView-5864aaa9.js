import{u as L,r as m,a as g,i as S,j as P,k as Q,l as T,m as N,n as R,q as F,s as E,x as J,y as M,z as O,A as z,e as w,_ as G,o as u,c,b as e,F as B,d as I,t as _,B as f,w as d,v as H,g as r,p as K,h as W}from"./index-0f075794.js";function X(n){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":S,"/src/assets/images/검정 후드티2.jpg":P,"/src/assets/images/검정 후드티3.jpg":Q,"/src/assets/images/나이키 바지.jpg":T,"/src/assets/images/슬랙스.jpg":N,"/src/assets/images/야구 잠바.jpg":R,"/src/assets/images/양털 후리스.jpg":F,"/src/assets/images/청바지.jpg":E,"/src/assets/images/체크셔츠.jpg":J,"/src/assets/images/패딩 조끼.jpg":M,"/src/assets/images/회색 후드티.jpg":O,"/src/assets/images/회색 후드티2.jpg":z})[`/src/assets/images/${n}`],self.location).href}function k(n){if(n!==null){var s=n.split(".")[1],C=s.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(C).split("").map(function(h){return"%"+("00"+h.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}}const Y={setup(){const n=L(),s=m(),C=m([]),a=localStorage.getItem("token"),h=k(a);let y="";h!==void 0&&(y=k(a).userName);const t=m(1),p=m(""),o=m(!1),V=m([]),U=l=>l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),j=()=>{t.value++,b()},A=()=>{t.value>1&&(t.value--,b())},b=()=>{s.value!==void 0&&(p.value=U(s.value.price*t.value))},q=async()=>{if(window.confirm("장바구니에 상품을 넣으시겠습니까?"))try{const v=await g.post("api/cartCheck",{productId:n.query.id});if(console.log(v),v.data==="duplication"){alert("장바구니에 있습니다.");return}const D=await g.post("api/insertCart",{productId:n.query.id,cnt:t.value});console.log(D),D.data==="success"&&w.push({name:"CartView",query:{userId:y}})}catch(v){console.error(v)}},x=()=>{o.value=!o.value,o.value===!1?g.post("/api/deleteLike",{productId:n.query.id}).then(l=>{console.log(l)}).catch(l=>{console.log(l)}):g.post("/api/insertLike",{productId:n.query.id}).then(l=>{console.log(l)}).catch(l=>{console.log(l)})};return g.post("/api/productDetail",{productId:n.query.id}).then(l=>{l!==void 0&&(s.value=l.data.productDetail,C.value=l.data.productDetailImg),l.data.likeCheck>0?o.value=!0:o.value=!1}).catch(l=>{console.log(l)}),g.get("api/reviewProductDetail",{params:{productId:n.query.id}}).then(l=>{console.log(l),V.value=l.data}).catch(l=>{console.log(l)}),{product:s,imgList:C,getImageUrl:X,token:a,parseJwt:k,userId:y,addToCart:q,quantity:t,totalPrice:p,incrementQuantity:j,decrementQuantity:A,calculateTotalPrice:b,parseToken:h,likeBtn:x,liked:o,addCommas:U,reviewList:V}}};const i=n=>(K("data-v-d6a45d6d"),n=n(),W(),n),Z={class:"centered-content"},$=i(()=>e("h1",null,"상품 디테일 페이지",-1)),tt={class:"image-list"},et=["src"],at=i(()=>e("br",null,null,-1)),ot={key:0},lt={key:1},st={key:2},nt=i(()=>e("label",{for:"quantity"},"수량:",-1)),it={key:0},dt={key:1},ut={class:"review-section"},ct=i(()=>e("h2",null,"상품 리뷰",-1)),rt={class:"review-list"},_t={class:"review-author"},pt={class:"review-rating"},mt={class:"rate"},gt=["onUpdate:modelValue"],Ct=i(()=>e("label",{title:"5점"},null,-1)),ht=["onUpdate:modelValue"],yt=i(()=>e("label",{class:"half",title:"4.5점"},null,-1)),vt=["onUpdate:modelValue"],ft=i(()=>e("label",{title:"4점"},null,-1)),bt=["onUpdate:modelValue"],kt=i(()=>e("label",{class:"half",title:"3.5점"},null,-1)),Vt=["onUpdate:modelValue"],Ut=i(()=>e("label",{title:"3점"},null,-1)),Dt=["onUpdate:modelValue"],Bt=i(()=>e("label",{class:"half",title:"2.5점"},null,-1)),It=["onUpdate:modelValue"],jt=i(()=>e("label",{title:"2점"},null,-1)),At=["onUpdate:modelValue"],qt=i(()=>e("label",{class:"half",title:"1.5점"},null,-1)),xt=["onUpdate:modelValue"],Lt=i(()=>e("label",{title:"1점"},null,-1)),St=["onUpdate:modelValue"],Pt=i(()=>e("label",{class:"half",title:"0.5점"},null,-1)),Qt={class:"review-content"};function Tt(n,s,C,a,h,y){return u(),c("div",Z,[$,e("div",null,[e("div",tt,[(u(!0),c(B,null,I(a.imgList,(t,p)=>(u(),c("div",{key:p,class:"image-item"},[e("img",{src:a.getImageUrl(t.img),style:{width:"200px"}},null,8,et),at]))),128))]),a.product?(u(),c("h2",ot,"이름: "+_(a.product.name),1)):f("",!0),a.product?(u(),c("p",lt,"가격: "+_(a.addCommas(a.product.price))+"원",1)):f("",!0),a.product?(u(),c("p",st,"설명: "+_(a.product.content),1)):f("",!0)]),e("div",null,[e("div",null,[nt,e("button",{onClick:s[0]||(s[0]=(...t)=>a.decrementQuantity&&a.decrementQuantity(...t))},"-"),d(e("input",{type:"number",id:"quantity","onUpdate:modelValue":s[1]||(s[1]=t=>a.quantity=t),readonly:""},null,512),[[H,a.quantity]]),e("button",{onClick:s[2]||(s[2]=(...t)=>a.incrementQuantity&&a.incrementQuantity(...t))},"+")]),a.totalPrice!=""?(u(),c("p",it,"총 가격: "+_(a.totalPrice)+"원",1)):a.product?(u(),c("p",dt,"총 가격: "+_(a.addCommas(a.product.price))+"원",1)):f("",!0)]),e("div",null,[e("button",{style:{"margin-right":"10px"},onClick:s[3]||(s[3]=(...t)=>a.likeBtn&&a.likeBtn(...t))},_(a.liked?"좋아요 취소":"좋아요"),1),e("button",{onClick:s[4]||(s[4]=(...t)=>a.addToCart&&a.addToCart(...t))},"장바구니")]),e("div",ut,[ct,e("ul",rt,[(u(!0),c(B,null,I(a.reviewList,(t,p)=>(u(),c("li",{class:"review-item",key:p},[e("div",_t,"작성자: "+_(t.name),1),e("div",pt,"평점: "+_(t.rate)+"/5",1),e("fieldset",mt,[d(e("input",{type:"radio",value:"5","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,gt),[[r,t.rate]]),Ct,d(e("input",{type:"radio",value:"4.5","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,ht),[[r,t.rate]]),yt,d(e("input",{type:"radio",value:"4","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,vt),[[r,t.rate]]),ft,d(e("input",{type:"radio",value:"3.5","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,bt),[[r,t.rate]]),kt,d(e("input",{type:"radio",value:"3","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,Vt),[[r,t.rate]]),Ut,d(e("input",{type:"radio",value:"2.5","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,Dt),[[r,t.rate]]),Bt,d(e("input",{type:"radio",value:"2","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,It),[[r,t.rate]]),jt,d(e("input",{type:"radio",value:"1.5","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,At),[[r,t.rate]]),qt,d(e("input",{type:"radio",value:"1","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,xt),[[r,t.rate]]),Lt,d(e("input",{type:"radio",value:"0.5","onUpdate:modelValue":o=>t.rate=o,readonly:""},null,8,St),[[r,t.rate]]),Pt]),e("div",Qt,_(t.content),1)]))),128))])])])}const Rt=G(Y,[["render",Tt],["__scopeId","data-v-d6a45d6d"]]);export{Rt as default};
