import{_ as f,I,o as v,c as y,d as j,F as S,b as t,w as h,K as k,J as A,L as V,f as p,t as m,p as D,h as q,u as U,r as d,a as b,M as E,j as L,k as Q,l as F,m as P,q as N,s as M,x as z,y as O,z as R,A as T,B as G,C as H,D as J,E as K,G as X,H as W,e as Y,v as Z,i as $}from"./index-335c009d.js";const tt={props:["cartItems","quantityBtn","delCartBtn","getImageUrl","addCommas"]};const x=l=>(D("data-v-2d685602"),l=l(),q(),l),et=["onUpdate:modelValue"],st={class:"item-info"},nt=["src"],ot=x(()=>t("br",null,null,-1)),lt={class:"item-actions"},at=["onClick"],ut=["onClick"],it=x(()=>t("td",null,[p(" 택배배송 "),t("br"),t("span",{style:{"font-weight":"bold"}},"배송비무료"),p(),t("br"),p(" 0원 이상 무료 ")],-1));function ct(l,s,c,n,r,C){const i=I("router-link");return v(!0),y(S,null,j(c.cartItems,(e,g)=>(v(),y("tr",{key:g,class:"cart-item"},[t("td",null,[h(t("input",{type:"checkbox","onUpdate:modelValue":_=>e.selected=_},null,8,et),[[k,e.selected]])]),t("td",st,[A(i,{to:{name:"productDetailView",query:{id:e.productId}}},{default:V(()=>[t("span",null,[t("img",{src:c.getImageUrl(e.img),style:{width:"80px"}},null,8,nt)]),ot]),_:2},1032,["to"]),p(" "+m(e.name),1)]),t("td",null,m(c.addCommas(e.price))+"원",1),t("td",null,m(e.cnt)+"개",1),t("td",null,m(c.addCommas(e.cnt*e.price))+"원",1),t("td",lt,[t("button",{type:"button",onClick:_=>c.quantityBtn(e.cnt,e.cartId),style:{"margin-right":"5px"}}," 수량 ",8,at),t("button",{type:"button",onClick:_=>c.delCartBtn(e.productId,g)},"삭제",8,ut)]),it]))),128)}const dt=f(tt,[["render",ct],["__scopeId","data-v-2d685602"]]);function rt(l){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":L,"/src/assets/images/검정 후드티.jpg":Q,"/src/assets/images/검정 후드티2.jpg":F,"/src/assets/images/검정 후드티3.jpg":P,"/src/assets/images/고양이 이미지.png":N,"/src/assets/images/나이키 바지.jpg":M,"/src/assets/images/마이페이지.png":z,"/src/assets/images/슬랙스.jpg":O,"/src/assets/images/야구 잠바.jpg":R,"/src/assets/images/양털 후리스.jpg":T,"/src/assets/images/청바지.jpg":G,"/src/assets/images/체크셔츠.jpg":H,"/src/assets/images/파란색 후드티.jpg":J,"/src/assets/images/패딩 조끼.jpg":K,"/src/assets/images/회색 후드티.jpg":X,"/src/assets/images/회색 후드티2.jpg":W})[`/src/assets/images/${l}`],self.location).href}const _t={setup(){const l=U(),s=d([]),c=d(0),n=d([]),r=d(!1),C=d(!1),i=d(1),e=d(0),g=o=>o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");b.get("/api/cartList").then(o=>{s.value=o.data}).catch(o=>{console.log(o)});const _=(o,a)=>{window.confirm("삭제하시겠습니까?")&&(b.post("/api/deleteCart",{productId:o}).then(B=>{console.log(B)}).catch(B=>console.log(B)),s.value.splice(a,1))},w=()=>{const o=s.value.filter(a=>a.selected).map(a=>a.productId);if(o.length===0){alert("선택된 상품이 없습니다.");return}Y.push({name:"OrderView",query:{id:l.query.id,products:o.join(",")}})};return E(()=>{s.value.every(o=>o.selected)?r.value=!0:r.value=!1}),{cartItems:s,route:l,totalPrice:c,getImageUrl:rt,delCartBtn:_,selectedProducts:n,orderSelectedProducts:w,selectAll:r,toggleAllSelected:()=>{s.value.forEach(o=>{o.selected=!r.value})},addCommas:g,modal:C,quantity:i,incrementQuantity:()=>{i.value++},decrementQuantity:()=>{i.value>1&&i.value--},quantityBtn:(o,a)=>{e.value=a,C.value=!0,i.value=o},quantityChange:()=>{window.confirm("변경하시겠습니까?")&&b.post("api/updateCart",{cartId:e.value,cnt:i.value}).then(a=>{a.data==="success"&&location.reload()}).catch(a=>{console.log(a)})},cartId:e}},components:{CartList:dt}};const u=l=>(D("data-v-8afe4a2d"),l=l(),q(),l),Ct={key:0,class:"black-bg"},gt={class:"white-bg"},mt=u(()=>t("h2",null,"수량을 변경 해주세요",-1)),pt=u(()=>t("label",{for:"quantity"},"수량:",-1)),vt=u(()=>t("hr",null,null,-1)),yt=u(()=>t("h1",null,"장바구니",-1)),Bt=u(()=>t("th",null,"상품명",-1)),bt=u(()=>t("th",null,"판매",-1)),ht=u(()=>t("th",null,"수량",-1)),ft=u(()=>t("th",null,"주문금액",-1)),It=u(()=>t("th",null,"주문관리",-1)),kt=u(()=>t("th",null,"배송비/배송 형태",-1)),At=u(()=>t("br",null,null,-1)),Dt={style:{"text-align":"center"}};function qt(l,s,c,n,r,C){const i=I("CartList");return v(),y("div",null,[n.modal===!0?(v(),y("div",Ct,[t("div",gt,[t("button",{type:"button",onClick:s[0]||(s[0]=e=>n.modal=!1),style:{float:"right"}},"X"),mt,t("div",null,[pt,t("button",{onClick:s[1]||(s[1]=(...e)=>n.decrementQuantity&&n.decrementQuantity(...e))},"-"),h(t("input",{type:"number",id:"quantity","onUpdate:modelValue":s[2]||(s[2]=e=>n.quantity=e),readonly:""},null,512),[[Z,n.quantity]]),t("button",{onClick:s[3]||(s[3]=(...e)=>n.incrementQuantity&&n.incrementQuantity(...e))},"+")]),vt,t("button",{type:"button",onClick:s[4]||(s[4]=e=>n.modal=!1),style:{"margin-right":"10px"}},"취소"),t("button",{type:"button",onClick:s[5]||(s[5]=(...e)=>n.quantityChange&&n.quantityChange(...e))},"변경")])])):$("",!0),yt,t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[h(t("input",{type:"checkbox","onUpdate:modelValue":s[6]||(s[6]=e=>n.selectAll=e),onClick:s[7]||(s[7]=(...e)=>n.toggleAllSelected&&n.toggleAllSelected(...e))},null,512),[[k,n.selectAll]])]),Bt,bt,ht,ft,It,kt])]),t("tbody",null,[A(i,{cartItems:n.cartItems,quantityBtn:n.quantityBtn,delCartBtn:n.delCartBtn,getImageUrl:n.getImageUrl,addCommas:n.addCommas},null,8,["cartItems","quantityBtn","delCartBtn","getImageUrl","addCommas"])])]),At,t("div",Dt,[t("button",{onClick:s[8]||(s[8]=(...e)=>n.orderSelectedProducts&&n.orderSelectedProducts(...e)),type:"button",style:{cursor:"pointer","font-size":"20px",padding:"10px 20px",color:"white","background-color":"black"}}," 주문하기 ")])])}const Lt=f(_t,[["render",qt],["__scopeId","data-v-8afe4a2d"]]);export{Lt as default};
