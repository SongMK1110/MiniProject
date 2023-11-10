import{U as z,u as M,r as D,a as C,e as u,f as P,o as i,c as r,b as e,g as F,H as U,F as B,d as A,M as E,h as d,t as l,k as G,l as H,m as $,q as J,s as K,x as Q,y as T,z as W,A as X,B as Y,C as Z,D as ee,E as te,G as se,I as le,J as oe,K as ne,p as ae,j as _e,_ as ce}from"./index-ecfce85c.js";const t=c=>(ae("data-v-254e4753"),c=c(),_e(),c),ie={class:"order-details"},re=t(()=>e("h1",null,"주문 상세 내역",-1)),de=t(()=>e("tr",null,[e("th",{class:"center"},"상품명"),e("th",{class:"center"},"등급/제휴 할인"),e("th",{class:"center"},"쿠폰 할인"),e("th",{class:"center"},"적립금"),e("th",{class:"center"},"결제 수수료"),e("th",{class:"center"},"주문금액(수량)"),e("th",{class:"center"},"배송 정보"),e("th",{class:"center"},"주문 상태")],-1)),ue={class:"center"},he=["src"],pe=t(()=>e("br",null,null,-1)),ge=t(()=>e("td",{class:"center"},"0원",-1)),ve=t(()=>e("td",{class:"center"},"0원",-1)),me={class:"center"},be=t(()=>e("td",{class:"center"},"0원",-1)),ye={class:"center"},fe=t(()=>e("br",null,null,-1)),we=t(()=>e("td",{class:"center"},"업체 배송",-1)),xe={class:"center"},je=t(()=>e("br",null,null,-1)),Ie=t(()=>e("br",null,null,-1)),Ve=["onClick","disabled"],ke=t(()=>e("ul",{style:{padding:"30px 15px"}},[e("li",null," 동일한 주문번호라도 2개 이상의 브랜드에서 주문하신 경우 출고지 주소가 달라 각각 출고됩니다. (택배 박스를 2개 이상 수령 가능) "),e("li",null," 출고 완료 직후 교환 / 환불 요청을 하더라도 상품을 수령하신 후 택배 업체를 통해 보내주셔야 처리 가능합니다. "),e("li",null," 별도의 구매 결정이 없더라도 상품 배송 완료 후 7일이 지난 경우에는 자동 구매확정, 적립금이 자동 지급됩니다. "),e("li",null,"자세한 내용은 FAQ를 확인하여 주시기 바랍니다.")],-1)),De={class:"shipping-address"},Ce=t(()=>e("h2",{style:{"border-bottom":"1px solid #000",padding:"10px"}},"배송지 정보",-1)),Fe=t(()=>e("th",{style:{width:"25%"}},"이름",-1)),Be=t(()=>e("th",null,"연락처",-1)),Oe=t(()=>e("th",null,"배송지 주소",-1)),qe=t(()=>e("th",null,"배송 메세지",-1)),Ne=t(()=>e("ul",{style:{padding:"30px 15px"}},[e("li",null," 발송전 일때만 배송지 주소를 변경하실 수 있습니다.(미입금/입금확인/출고요청 단계까지만가능) ")],-1)),Re={key:0,class:"payment-method"},Se=t(()=>e("h2",{style:{"border-bottom":"1px solid #000",padding:"10px"}},"최종 결제 정보",-1)),Le=t(()=>e("th",{style:{width:"25%"}},"상품 합계",-1)),ze=t(()=>e("tr",null,[e("th",null,"배송비 합계"),e("td",{style:{color:"blue"}},"배송비 무료")],-1)),Me=t(()=>e("th",{style:{"font-weight":"bold"}},"할인 합계",-1)),Pe={style:{color:"blue","font-weight":"bold"}},Ue=t(()=>e("tr",null,[e("th",null,"결제 수수료"),e("td",null,"0원")],-1)),Ae=t(()=>e("th",{style:{"font-weight":"bold"}},"최종 결제 금액",-1)),Ee={style:{"font-weight":"bold","font-size":"larger"}},Ge=t(()=>e("th",null,"결제 수단",-1)),He=t(()=>e("ul",{style:{padding:"30px 15px"}},[e("li",null," 카드 결제시 현금영수증/세금계산서 발급이 불가능하며 카드전표로 대체하실 수 있습니다. "),e("li",null," PG사 또는 카드사에서 제공하는 즉시 할인은 최종 결제 금액에 반영되지 않습니다.(ex.무신사페이 즉시할인) "),e("li",null,"바로접속 OFF 상태일 때에는 각종 할인 혜택이 제한될 수 있습니다.")],-1)),$e=z({__name:"OrderDetailView",setup(c){const _=s=>s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");function O(s){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":H,"/src/assets/images/검정 후드티.jpg":$,"/src/assets/images/검정 후드티2.jpg":J,"/src/assets/images/검정 후드티3.jpg":K,"/src/assets/images/고양이 이미지.png":Q,"/src/assets/images/나이키 바지.jpg":T,"/src/assets/images/마이페이지.png":W,"/src/assets/images/슬랙스.jpg":X,"/src/assets/images/야구 잠바.jpg":Y,"/src/assets/images/양털 후리스.jpg":Z,"/src/assets/images/청바지.jpg":ee,"/src/assets/images/체크셔츠.jpg":te,"/src/assets/images/파란색 후드티.jpg":se,"/src/assets/images/패딩 조끼.jpg":le,"/src/assets/images/회색 후드티.jpg":oe,"/src/assets/images/회색 후드티2.jpg":ne})[`/src/assets/images/${s}`],self.location).href}const q=M(),o=D([]),h=D([]),N=s=>{u.push({name:"ReviewView",query:{productId:s}})},p=s=>h.value.includes(s),R=s=>{let a="";return s==="card"?a="카드":s==="account"?a="가상계좌":s==="phone"&&(a="휴대폰"),a};return C.get("api/selectOrderDetailList",{params:{orderId:q.query.orderId}}).then(s=>{o.value=s.data}).catch(s=>{if(console.log(s),s.response.status===500){u.push("errorForm");return}}),C.get("api/selectReview").then(s=>{h.value=s.data.map(a=>a.productId)}).catch(s=>{if(console.log(s),s.response.status===500){u.push("errorForm");return}}),(s,a)=>{var g,v,m,b,y,f,w,x,j,I,V,k;const S=P("router-link");return i(),r(B,null,[e("header",null,[F(U)]),e("div",ie,[re,e("table",null,[de,(i(!0),r(B,null,A(o.value,(n,L)=>(i(),r("tr",{key:L},[e("td",ue,[F(S,{to:{name:"productDetailView",query:{id:n.productId}}},{default:E(()=>[e("img",{src:O(n.img),style:{width:"100px"}},null,8,he)]),_:2},1032,["to"]),pe,d(" "+l(n.productName),1)]),ge,ve,e("td",me,"+"+l(_(n.price*n.cnt*.01))+"원",1),be,e("td",ye,[d(l(_(n.price*n.cnt))+"원 ",1),fe,d(" "+l(n.cnt)+"개 ",1)]),we,e("td",xe,[d(" 구매 확정 "),je,Ie,e("button",{onClick:Je=>N(n.productId),disabled:p(n.productId)},l(p(n.productId)?"후기작성완료":"후기작성"),9,Ve)])]))),128))]),ke,e("div",De,[Ce,e("table",null,[e("tbody",null,[e("tr",null,[Fe,e("td",null,l((g=o.value[0])==null?void 0:g.name),1)]),e("tr",null,[Be,e("td",null,l((v=o.value[0])==null?void 0:v.phone),1)]),e("tr",null,[Oe,e("td",null," ("+l((m=o.value[0])==null?void 0:m.zipcode)+") "+l((b=o.value[0])==null?void 0:b.addr)+" "+l((y=o.value[0])==null?void 0:y.addrDetail),1)]),e("tr",null,[qe,e("td",null,l((f=o.value[0])==null?void 0:f.req),1)])])]),Ne]),o.value.length>0?(i(),r("div",Re,[Se,e("table",null,[e("tbody",null,[e("tr",null,[Le,e("td",null,l(_((w=o.value[0])==null?void 0:w.totalPrice))+"원",1)]),ze,e("tr",null,[Me,e("td",Pe," -"+l(_((x=o.value[0])==null?void 0:x.reserves))+"원 ",1)]),Ue,e("tr",null,[Ae,e("td",Ee,l(_(((j=o.value[0])==null?void 0:j.totalPrice)-((I=o.value[0])==null?void 0:I.reserves)))+"원 ",1)]),e("tr",null,[Ge,e("td",null,l(R((V=o.value[0])==null?void 0:V.paymentMethod))+" "+l(((k=o.value[0])==null?void 0:k.reserves)>0?"+ 적립금":""),1)])])]),He])):G("",!0)])],64)}}});const Qe=ce($e,[["__scopeId","data-v-254e4753"]]);export{Qe as default};