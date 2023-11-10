import{T as N,u as R,r as D,a as V,I as S,o as i,c as d,b as t,F as z,d as P,J as A,L as E,f as r,t as l,i as G,j as M,k as T,l as U,m as $,q as H,s as J,x as Q,y as W,z as K,A as X,B as Y,C as Z,D as tt,E as et,G as st,H as lt,e as ot,p as nt,h as _t,_ as at}from"./index-4cf6297f.js";const e=c=>(nt("data-v-55f4c631"),c=c(),_t(),c),ct={class:"order-details"},it=e(()=>t("h1",null,"주문 상세 내역",-1)),dt=e(()=>t("tr",null,[t("th",{class:"center"},"상품명"),t("th",{class:"center"},"등급/제휴 할인"),t("th",{class:"center"},"쿠폰 할인"),t("th",{class:"center"},"적립금"),t("th",{class:"center"},"결제 수수료"),t("th",{class:"center"},"주문금액(수량)"),t("th",{class:"center"},"배송 정보"),t("th",{class:"center"},"주문 상태")],-1)),rt={class:"center"},ut=["src"],ht=e(()=>t("br",null,null,-1)),gt=e(()=>t("td",{class:"center"},"0원",-1)),pt=e(()=>t("td",{class:"center"},"0원",-1)),vt={class:"center"},mt=e(()=>t("td",{class:"center"},"0원",-1)),bt={class:"center"},yt=e(()=>t("br",null,null,-1)),ft=e(()=>t("td",{class:"center"},"업체 배송",-1)),wt={class:"center"},xt=e(()=>t("br",null,null,-1)),jt=e(()=>t("br",null,null,-1)),It=["onClick","disabled"],kt=e(()=>t("ul",{style:{padding:"30px 15px"}},[t("li",null," 동일한 주문번호라도 2개 이상의 브랜드에서 주문하신 경우 출고지 주소가 달라 각각 출고됩니다. (택배 박스를 2개 이상 수령 가능) "),t("li",null," 출고 완료 직후 교환 / 환불 요청을 하더라도 상품을 수령하신 후 택배 업체를 통해 보내주셔야 처리 가능합니다. "),t("li",null," 별도의 구매 결정이 없더라도 상품 배송 완료 후 7일이 지난 경우에는 자동 구매확정, 적립금이 자동 지급됩니다. "),t("li",null,"자세한 내용은 FAQ를 확인하여 주시기 바랍니다.")],-1)),Dt={class:"shipping-address"},Vt=e(()=>t("h2",{style:{"border-bottom":"1px solid #000",padding:"10px"}},"배송지 정보",-1)),Ct=e(()=>t("th",{style:{width:"25%"}},"이름",-1)),Bt=e(()=>t("th",null,"연락처",-1)),Ot=e(()=>t("th",null,"배송지 주소",-1)),qt=e(()=>t("th",null,"배송 메세지",-1)),Ft=e(()=>t("ul",{style:{padding:"30px 15px"}},[t("li",null," 발송전 일때만 배송지 주소를 변경하실 수 있습니다.(미입금/입금확인/출고요청 단계까지만가능) ")],-1)),Lt={key:0,class:"payment-method"},Nt=e(()=>t("h2",{style:{"border-bottom":"1px solid #000",padding:"10px"}},"최종 결제 정보",-1)),Rt=e(()=>t("th",{style:{width:"25%"}},"상품 합계",-1)),St=e(()=>t("tr",null,[t("th",null,"배송비 합계"),t("td",{style:{color:"blue"}},"배송비 무료")],-1)),zt=e(()=>t("th",{style:{"font-weight":"bold"}},"할인 합계",-1)),Pt={style:{color:"blue","font-weight":"bold"}},At=e(()=>t("tr",null,[t("th",null,"결제 수수료"),t("td",null,"0원")],-1)),Et=e(()=>t("th",{style:{"font-weight":"bold"}},"최종 결제 금액",-1)),Gt={style:{"font-weight":"bold","font-size":"larger"}},Mt=e(()=>t("th",null,"결제 수단",-1)),Tt=e(()=>t("ul",{style:{padding:"30px 15px"}},[t("li",null," 카드 결제시 현금영수증/세금계산서 발급이 불가능하며 카드전표로 대체하실 수 있습니다. "),t("li",null," PG사 또는 카드사에서 제공하는 즉시 할인은 최종 결제 금액에 반영되지 않습니다.(ex.무신사페이 즉시할인) "),t("li",null,"바로접속 OFF 상태일 때에는 각종 할인 혜택이 제한될 수 있습니다.")],-1)),Ut=N({__name:"OrderDetailView",setup(c){const a=s=>s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");function C(s){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":M,"/src/assets/images/검정 후드티.jpg":T,"/src/assets/images/검정 후드티2.jpg":U,"/src/assets/images/검정 후드티3.jpg":$,"/src/assets/images/고양이 이미지.png":H,"/src/assets/images/나이키 바지.jpg":J,"/src/assets/images/마이페이지.png":Q,"/src/assets/images/슬랙스.jpg":W,"/src/assets/images/야구 잠바.jpg":K,"/src/assets/images/양털 후리스.jpg":X,"/src/assets/images/청바지.jpg":Y,"/src/assets/images/체크셔츠.jpg":Z,"/src/assets/images/파란색 후드티.jpg":tt,"/src/assets/images/패딩 조끼.jpg":et,"/src/assets/images/회색 후드티.jpg":st,"/src/assets/images/회색 후드티2.jpg":lt})[`/src/assets/images/${s}`],self.location).href}const B=R(),o=D([]),u=D([]),O=s=>{ot.push({name:"ReviewView",query:{productId:s}})},h=s=>u.value.includes(s),q=s=>{let _="";return s==="card"?_="카드":s==="account"?_="가상계좌":s==="phone"&&(_="휴대폰"),_};return V.get("api/selectOrderDetailList",{params:{orderId:B.query.orderId}}).then(s=>{o.value=s.data}).catch(s=>{console.log(s)}),V.get("api/selectReview").then(s=>{u.value=s.data.map(_=>_.productId)}).catch(s=>{console.log(s)}),(s,_)=>{var g,p,v,m,b,y,f,w,x,j,I,k;const F=S("router-link");return i(),d("div",ct,[it,t("table",null,[dt,(i(!0),d(z,null,P(o.value,(n,L)=>(i(),d("tr",{key:L},[t("td",rt,[A(F,{to:{name:"productDetailView",query:{id:n.productId}}},{default:E(()=>[t("img",{src:C(n.img),style:{width:"100px"}},null,8,ut)]),_:2},1032,["to"]),ht,r(" "+l(n.productName),1)]),gt,pt,t("td",vt,"+"+l(a(n.price*n.cnt*.01))+"원",1),mt,t("td",bt,[r(l(a(n.price*n.cnt))+"원 ",1),yt,r(" "+l(n.cnt)+"개 ",1)]),ft,t("td",wt,[r(" 구매 확정 "),xt,jt,t("button",{onClick:$t=>O(n.productId),disabled:h(n.productId)},l(h(n.productId)?"후기작성완료":"후기작성"),9,It)])]))),128))]),kt,t("div",Dt,[Vt,t("table",null,[t("tbody",null,[t("tr",null,[Ct,t("td",null,l((g=o.value[0])==null?void 0:g.name),1)]),t("tr",null,[Bt,t("td",null,l((p=o.value[0])==null?void 0:p.phone),1)]),t("tr",null,[Ot,t("td",null," ("+l((v=o.value[0])==null?void 0:v.zipcode)+") "+l((m=o.value[0])==null?void 0:m.addr)+" "+l((b=o.value[0])==null?void 0:b.addrDetail),1)]),t("tr",null,[qt,t("td",null,l((y=o.value[0])==null?void 0:y.req),1)])])]),Ft]),o.value.length>0?(i(),d("div",Lt,[Nt,t("table",null,[t("tbody",null,[t("tr",null,[Rt,t("td",null,l(a((f=o.value[0])==null?void 0:f.totalPrice))+"원",1)]),St,t("tr",null,[zt,t("td",Pt," -"+l(a((w=o.value[0])==null?void 0:w.reserves))+"원 ",1)]),At,t("tr",null,[Et,t("td",Gt,l(a(((x=o.value[0])==null?void 0:x.totalPrice)-((j=o.value[0])==null?void 0:j.reserves)))+"원 ",1)]),t("tr",null,[Mt,t("td",null,l(q((I=o.value[0])==null?void 0:I.paymentMethod))+" "+l(((k=o.value[0])==null?void 0:k.reserves)>0?"+ 적립금":""),1)])])]),Tt])):G("",!0)])}}});const Jt=at(Ut,[["__scopeId","data-v-55f4c631"]]);export{Jt as default};
