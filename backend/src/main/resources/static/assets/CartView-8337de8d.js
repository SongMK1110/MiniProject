import{u as A,r as d,a as v,C as D,i as y,j,k,l as w,m as x,n as I,q as S,s as V,x as E,y as P,z as U,A as F,e as q,_ as L,D as N,o as p,c as m,b as e,w as B,E as f,F as z,d as O,G as R,H as G,f as i,t as _,p as H,h as M}from"./index-9be3b996.js";function T(a){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":y,"/src/assets/images/검정 후드티2.jpg":j,"/src/assets/images/검정 후드티3.jpg":k,"/src/assets/images/나이키 바지.jpg":w,"/src/assets/images/슬랙스.jpg":x,"/src/assets/images/야구 잠바.jpg":I,"/src/assets/images/양털 후리스.jpg":S,"/src/assets/images/청바지.jpg":V,"/src/assets/images/체크셔츠.jpg":E,"/src/assets/images/패딩 조끼.jpg":P,"/src/assets/images/회색 후드티.jpg":U,"/src/assets/images/회색 후드티2.jpg":F})[`/src/assets/images/${a}`],self.location).href}const J={setup(){const a=A(),l=d([]),h=d(0),o=d([]),c=d(!1),b=s=>s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");v.get("/api/cartList").then(s=>{console.log(s.data[0].memberId),l.value=s.data}).catch(s=>{console.log(s)});const r=(s,u)=>{window.confirm("삭제하시겠습니까?")&&(v.post("/api/deleteCart",{productId:s}).then(C=>{console.log(C)}).catch(C=>console.log(C)),l.value.splice(u,1))},t=()=>{const s=l.value.filter(u=>u.selected).map(u=>u.productId);if(s.length===0){alert("선택된 상품이 없습니다.");return}q.push({name:"OrderView",query:{id:a.query.id,products:s.join(",")}})};return D(()=>{l.value.every(s=>s.selected)?c.value=!0:c.value=!1}),{cartItems:l,route:a,totalPrice:h,getImageUrl:T,delCartBtn:r,selectedProducts:o,orderSelectedProducts:t,selectAll:c,toggleAllSelected:()=>{l.value.forEach(s=>{s.selected=!c.value})},addCommas:b}}};const n=a=>(H("data-v-2dec6b7e"),a=a(),M(),a),K=n(()=>e("h1",null,"장바구니",-1)),Q=n(()=>e("th",null,"상품명",-1)),W=n(()=>e("th",null,"판매",-1)),X=n(()=>e("th",null,"수량",-1)),Y=n(()=>e("th",null,"주문금액",-1)),Z=n(()=>e("th",null,"주문관리",-1)),$=n(()=>e("th",null,"배송비/배송 형태",-1)),ee=["onUpdate:modelValue"],te={class:"item-info"},se=["src"],le=n(()=>e("br",null,null,-1)),oe={class:"item-actions"},ne=["onClick"],ae=n(()=>e("td",null,[i(" 택배배송 "),e("br"),e("span",{style:{"font-weight":"bold"}},"배송비무료"),i(),e("br"),i(" 0원 이상 무료 ")],-1)),ce=n(()=>e("br",null,null,-1)),ue={style:{"text-align":"center"}};function de(a,l,h,o,c,b){const r=N("router-link");return p(),m("div",null,[K,e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[B(e("input",{type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=t=>o.selectAll=t),onClick:l[1]||(l[1]=(...t)=>o.toggleAllSelected&&o.toggleAllSelected(...t))},null,512),[[f,o.selectAll]])]),Q,W,X,Y,Z,$])]),e("tbody",null,[(p(!0),m(z,null,O(o.cartItems,(t,g)=>(p(),m("tr",{key:g,class:"cart-item"},[e("td",null,[B(e("input",{type:"checkbox","onUpdate:modelValue":s=>t.selected=s},null,8,ee),[[f,t.selected]])]),e("td",te,[R(r,{to:{name:"productDetailView",query:{id:t.productId}}},{default:G(()=>[e("span",null,[e("img",{src:o.getImageUrl(t.img),style:{width:"80px"}},null,8,se)]),le]),_:2},1032,["to"]),i(" "+_(t.name),1)]),e("td",null,_(o.addCommas(t.price))+"원",1),e("td",null,_(t.cnt)+"개",1),e("td",null,_(o.addCommas(t.cnt*t.price))+"원",1),e("td",oe,[e("button",{onClick:s=>o.delCartBtn(t.productId,g)},"삭제",8,ne)]),ae]))),128))])]),ce,e("div",ue,[e("button",{onClick:l[2]||(l[2]=(...t)=>o.orderSelectedProducts&&o.orderSelectedProducts(...t)),type:"button",style:{cursor:"pointer","font-size":"20px",padding:"10px 20px",color:"white","background-color":"black"}}," 주문하기 ")])])}const re=L(J,[["render",de],["__scopeId","data-v-2dec6b7e"]]);export{re as default};
