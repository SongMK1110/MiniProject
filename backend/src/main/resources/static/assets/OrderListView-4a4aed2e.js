import{r as g,a as C,i as v,j as h,k as B,l as b,m as w,n as j,q as f,s as D,x as I,y as x,z as y,A as L,e as k,_ as F,D as V,o as c,c as r,b as e,F as A,d as R,G as E,H as O,f as u,t as i,p as S,h as q}from"./index-65dcf8fb.js";function N(a){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":v,"/src/assets/images/검정 후드티2.jpg":h,"/src/assets/images/검정 후드티3.jpg":B,"/src/assets/images/나이키 바지.jpg":b,"/src/assets/images/슬랙스.jpg":w,"/src/assets/images/야구 잠바.jpg":j,"/src/assets/images/양털 후리스.jpg":f,"/src/assets/images/청바지.jpg":D,"/src/assets/images/체크셔츠.jpg":I,"/src/assets/images/패딩 조끼.jpg":x,"/src/assets/images/회색 후드티.jpg":y,"/src/assets/images/회색 후드티2.jpg":L})[`/src/assets/images/${a}`],self.location).href}const U={name:"OrderListView",setup(){const a=g([]),n=g([]),d=s=>s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),_=s=>n.value.includes(s);return C.get("/api/selectOrderList").then(s=>{a.value=s.data}).catch(s=>{console.log(s)}),C.get("api/selectReview").then(s=>{n.value=s.data.map(o=>o.productId)}).catch(s=>{console.log(s)}),{getImageUrl:N,orderList:a,addCommas:d,reviewBtn:s=>{k.push({name:"ReviewView",query:{productId:s}})},reviewList:n,isReviewWritten:_}}};const l=a=>(S("data-v-0e21406a"),a=a(),q(),a),W=l(()=>e("h1",null,"주문내역 조회",-1)),z=l(()=>e("thead",null,[e("tr",null,[e("th",null,"상품정보"),e("th",null,"주문일자"),e("th",null,"주문번호"),e("th",null,"주문금액(수량)"),e("th",null,"주문 상태")])],-1)),G={class:"item-info"},H=["src"],T=l(()=>e("br",null,null,-1)),J=l(()=>e("br",null,null,-1)),K={class:"item-actions"},M=l(()=>e("br",null,null,-1)),P=["onClick","disabled"];function Q(a,n,d,_,p,s){const o=V("router-link");return c(),r("div",null,[W,e("table",null,[z,e("tbody",null,[(c(!0),r(A,null,R(_.orderList,(t,m)=>(c(),r("tr",{key:m,class:"cart-item"},[e("td",G,[E(o,{to:{name:"productDetailView",query:{id:t.productId}}},{default:O(()=>[e("span",null,[e("img",{src:_.getImageUrl(t.img),style:{width:"80px"}},null,8,H)]),T]),_:2},1032,["to"]),u(" "+i(t.name),1)]),e("td",null,i(t.rdate),1),e("td",null,i(t.orderId),1),e("td",null,[u(i(_.addCommas(t.price))+"원 ",1),J,u(" "+i(t.cnt)+"개 ",1)]),e("td",K,[u(" 배송 완료 "),M,e("button",{onClick:X=>_.reviewBtn(t.productId),disabled:_.isReviewWritten(t.productId)},i(_.isReviewWritten(t.productId)?"후기작성완료":"후기작성"),9,P)])]))),128))])])])}const Z=F(U,[["render",Q],["__scopeId","data-v-0e21406a"]]);export{Z as default};
