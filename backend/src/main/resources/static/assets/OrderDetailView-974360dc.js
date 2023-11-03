import{T as R,u as S,r as k,a as V,I as N,o as d,c as r,b as t,F as z,d as P,K as A,L as E,f as i,t as l,i as M,j as T,k as U,l as $,m as G,n as K,q as Q,s as W,x as H,y as J,z as X,A as Y,B as Z,C as tt,D as st,E as et,e as lt,p as ot,h as nt,_ as _t}from"./index-ef125093.js";const s=c=>(ot("data-v-07450247"),c=c(),nt(),c),at={class:"order-details"},ct=s(()=>t("h1",null,"주문 상세 내역",-1)),it=s(()=>t("tr",null,[t("th",{class:"center"},"상품명"),t("th",{class:"center"},"등급/제휴 할인"),t("th",{class:"center"},"쿠폰 할인"),t("th",{class:"center"},"적립금"),t("th",{class:"center"},"결제 수수료"),t("th",{class:"center"},"주문금액(수량)"),t("th",{class:"center"},"배송 정보"),t("th",{class:"center"},"주문 상태")],-1)),dt={class:"center"},rt=["src"],ut=s(()=>t("br",null,null,-1)),ht=s(()=>t("td",{class:"center"},"0원",-1)),gt=s(()=>t("td",{class:"center"},"0원",-1)),pt={class:"center"},vt=s(()=>t("td",{class:"center"},"0원",-1)),mt={class:"center"},bt=s(()=>t("br",null,null,-1)),yt=s(()=>t("td",{class:"center"},"업체 배송",-1)),ft={class:"center"},wt=s(()=>t("br",null,null,-1)),xt=s(()=>t("br",null,null,-1)),jt=["onClick","disabled"],It=s(()=>t("ul",{style:{padding:"30px 15px"}},[t("li",null," 동일한 주문번호라도 2개 이상의 브랜드에서 주문하신 경우 출고지 주소가 달라 각각 출고됩니다. (택배 박스를 2개 이상 수령 가능) "),t("li",null," 출고 완료 직후 교환 / 환불 요청을 하더라도 상품을 수령하신 후 택배 업체를 통해 보내주셔야 처리 가능합니다. "),t("li",null," 별도의 구매 결정이 없더라도 상품 배송 완료 후 7일이 지난 경우에는 자동 구매확정, 적립금이 자동 지급됩니다. "),t("li",null,"자세한 내용은 FAQ를 확인하여 주시기 바랍니다.")],-1)),Dt={class:"shipping-address"},kt=s(()=>t("h2",{style:{"border-bottom":"1px solid #000",padding:"10px"}},"배송지 정보",-1)),Vt=s(()=>t("th",{style:{width:"25%"}},"이름",-1)),Ct=s(()=>t("th",null,"연락처",-1)),Bt=s(()=>t("th",null,"배송지 주소",-1)),Ot=s(()=>t("th",null,"배송 메세지",-1)),qt=s(()=>t("ul",{style:{padding:"30px 15px"}},[t("li",null," 발송전 일때만 배송지 주소를 변경하실 수 있습니다.(미입금/입금확인/출고요청 단계까지만가능) ")],-1)),Ft={class:"payment-method"},Lt=s(()=>t("h2",{style:{"border-bottom":"1px solid #000",padding:"10px"}},"최종 결제 정보",-1)),Rt=s(()=>t("th",{style:{width:"25%"}},"상품 합계",-1)),St=s(()=>t("tr",null,[t("th",null,"배송비 합계"),t("td",{style:{color:"blue"}},"배송비 무료")],-1)),Nt=s(()=>t("th",{style:{"font-weight":"bold"}},"할인 합계",-1)),zt={style:{color:"blue","font-weight":"bold"}},Pt=s(()=>t("tr",null,[t("th",null,"결제 수수료"),t("td",null,"0원")],-1)),At=s(()=>t("th",{style:{"font-weight":"bold"}},"최종 결제 금액",-1)),Et={style:{"font-weight":"bold","font-size":"larger"}},Mt=s(()=>t("th",null,"결제 수단",-1)),Tt=s(()=>t("ul",{style:{padding:"30px 15px"}},[t("li",null," 카드 결제시 현금영수증/세금계산서 발급이 불가능하며 카드전표로 대체하실 수 있습니다. "),t("li",null," PG사 또는 카드사에서 제공하는 즉시 할인은 최종 결제 금액에 반영되지 않습니다.(ex.무신사페이 즉시할인) "),t("li",null,"바로접속 OFF 상태일 때에는 각종 할인 혜택이 제한될 수 있습니다.")],-1)),Ut=R({__name:"OrderDetailView",setup(c){const a=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");function C(e){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":M,"/src/assets/images/검정 후드티.jpg":T,"/src/assets/images/검정 후드티2.jpg":U,"/src/assets/images/검정 후드티3.jpg":$,"/src/assets/images/고양이 이미지.png":G,"/src/assets/images/나이키 바지.jpg":K,"/src/assets/images/마이페이지.png":Q,"/src/assets/images/슬랙스.jpg":W,"/src/assets/images/야구 잠바.jpg":H,"/src/assets/images/양털 후리스.jpg":J,"/src/assets/images/청바지.jpg":X,"/src/assets/images/체크셔츠.jpg":Y,"/src/assets/images/파란색 후드티.jpg":Z,"/src/assets/images/패딩 조끼.jpg":tt,"/src/assets/images/회색 후드티.jpg":st,"/src/assets/images/회색 후드티2.jpg":et})[`/src/assets/images/${e}`],self.location).href}const B=S(),o=k([]),u=k([]),O=e=>{lt.push({name:"ReviewView",query:{productId:e}})},h=e=>u.value.includes(e),q=e=>{let _="";return e==="card"?_="카드":e==="account"?_="가상계좌":e==="phone"&&(_="휴대폰"),_};return V.post("api/selectOrderDetailList",{orderId:B.query.orderId}).then(e=>{console.log(e),o.value=e.data}).catch(e=>{console.log(e)}),V.get("api/selectReview").then(e=>{u.value=e.data.map(_=>_.productId)}).catch(e=>{console.log(e)}),(e,_)=>{var g,p,v,m,b,y,f,w,x,j,I,D;const F=N("router-link");return d(),r("div",at,[ct,t("table",null,[it,(d(!0),r(z,null,P(o.value,(n,L)=>(d(),r("tr",{key:L},[t("td",dt,[A(F,{to:{name:"productDetailView",query:{id:n.productId}}},{default:E(()=>[t("img",{src:C(n.img),style:{width:"100px"}},null,8,rt)]),_:2},1032,["to"]),ut,i(" "+l(n.productName),1)]),ht,gt,t("td",pt,"+"+l(a(n.price*n.cnt*.01))+"원",1),vt,t("td",mt,[i(l(a(n.price*n.cnt))+"원 ",1),bt,i(" "+l(n.cnt)+"개 ",1)]),yt,t("td",ft,[i(" 구매 확정 "),wt,xt,t("button",{onClick:$t=>O(n.productId),disabled:h(n.productId)},l(h(n.productId)?"후기작성완료":"후기작성"),9,jt)])]))),128))]),It,t("div",Dt,[kt,t("table",null,[t("tbody",null,[t("tr",null,[Vt,t("td",null,l((g=o.value[0])==null?void 0:g.name),1)]),t("tr",null,[Ct,t("td",null,l((p=o.value[0])==null?void 0:p.phone),1)]),t("tr",null,[Bt,t("td",null," ("+l((v=o.value[0])==null?void 0:v.zipcode)+") "+l((m=o.value[0])==null?void 0:m.addr)+" "+l((b=o.value[0])==null?void 0:b.addrDetail),1)]),t("tr",null,[Ot,t("td",null,l((y=o.value[0])==null?void 0:y.req),1)])])]),qt]),t("div",Ft,[Lt,t("table",null,[t("tbody",null,[t("tr",null,[Rt,t("td",null,l(a((f=o.value[0])==null?void 0:f.totalPrice))+"원",1)]),St,t("tr",null,[Nt,t("td",zt," -"+l(a((w=o.value[0])==null?void 0:w.reserves))+"원 ",1)]),Pt,t("tr",null,[At,t("td",Et,l(a(((x=o.value[0])==null?void 0:x.totalPrice)-((j=o.value[0])==null?void 0:j.reserves)))+"원 ",1)]),t("tr",null,[Mt,t("td",null,l(q((I=o.value[0])==null?void 0:I.paymentMethod))+" "+l(((D=o.value[0])==null?void 0:D.reserves)>0?"+ 적립금":""),1)])])]),Tt])])}}});const Kt=_t(Ut,[["__scopeId","data-v-07450247"]]);export{Kt as default};
