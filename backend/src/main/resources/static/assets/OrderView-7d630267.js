import{r as n,u as H,a as m,N as J,O as Q,P as X,j as K,k as W,l as Y,m as Z,q as $,s as ee,x as te,y as oe,z as ue,A as le,B as se,C as ne,D as ae,E as de,G as re,H as Ce,e as ie,_ as ce,I as _e,o as i,c,b as e,f as d,w as _,v,i as R,F as N,d as z,t as r,Q as pe,g as V,J as De,L as me,p as ve,h as ge}from"./index-5ca33d36.js";function he(p){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":K,"/src/assets/images/검정 후드티.jpg":W,"/src/assets/images/검정 후드티2.jpg":Y,"/src/assets/images/검정 후드티3.jpg":Z,"/src/assets/images/고양이 이미지.png":$,"/src/assets/images/나이키 바지.jpg":ee,"/src/assets/images/마이페이지.png":te,"/src/assets/images/슬랙스.jpg":oe,"/src/assets/images/야구 잠바.jpg":ue,"/src/assets/images/양털 후리스.jpg":le,"/src/assets/images/청바지.jpg":se,"/src/assets/images/체크셔츠.jpg":ne,"/src/assets/images/파란색 후드티.jpg":ae,"/src/assets/images/패딩 조끼.jpg":de,"/src/assets/images/회색 후드티.jpg":re,"/src/assets/images/회색 후드티2.jpg":Ce})[`/src/assets/images/${p}`],self.location).href}const Be={setup(){const p=n([]),u=n(),k=H(),t=n([]),B=n("배송 시 요청사항을 선택해주세요"),F=n("card"),I=n(!1),o=n(""),D=n(""),A=n(""),x=n(""),j=n(""),E=n(""),f=n(),g=n(0),y=n(0);m.get("/api/selectAddrList").then(s=>{p.value=s.data}).catch(s=>{console.log(s)});const q=s=>s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),L=s=>{m.get("/api/selectAddrInfo",{params:{addrId:s}}).then(a=>{u.value=a.data}).catch(a=>{console.log(a)})},U=n([]);J(async()=>{const s=k.query.products;if(s){const C=s.toString().split(",").map(Number);U.value=C}const a={ids:U.value.join(",")};try{const C=await m.get("api/selectCartProduct",{params:a});t.value=C.data;let b=0;C.data.forEach(h=>{b+=h.price*h.cnt*.01}),y.value=b,console.log(y.value)}catch(C){console.error("Error fetching products:",C)}});const O=async()=>{if(u.value==null)alert("배송지를 선택 해주세요");else{if(B.value==="배송 시 요청사항을 선택해주세요"){alert("요청사항을 선택해주세요");return}if(window.confirm("결제하시겠습니까?")){const a={name:u.value.name,addr:u.value.addr,addrDetail:u.value.addrDetail,phone:u.value.phone,zipcode:u.value.zipcode,req:B.value,price:M.value,paymentMethod:F.value,reservesPlus:y.value,reservesMinus:g.value,reserves:g.value};try{const C=await m.post("/api/order",a);if(console.log(C),C.data!==-1){const b=C.data,h=[];t.value.forEach(w=>{const G={orderId:b,productId:w.productId,price:w.price,cnt:w.cnt};h.push(G)});const P=await m.post("/api/orderDetail",h);console.log(P),P.data==="success"?(console.log("주문이 성공적으로 완료되었습니다."),ie.push({name:"OrderListView",query:{id:k.query.id}})):console.error("상세 주문 정보 저장 실패")}else console.error("주문 저장 실패")}catch(C){console.error("주문 처리 중 오류 발생:",C)}}}},M=Q(()=>t.value.reduce((s,a)=>s+a.cnt*a.price,0)),S=()=>{new window.daum.Postcode({oncomplete:s=>{o.value=s.zonecode,D.value=s.roadAddress}}).open()},T=()=>{if(x.value===""){alert("수령인을 입력해주세요");return}if(E.value===""){alert("휴대전화를 입력해주세요");return}if(o.value===""){alert("우편번호를 입력해주세요");return}if(D.value===""){alert("주소를 입력해주세요");return}if(A.value===""){alert("상세주소를 입력해주세요");return}const s={name:x.value,addrName:j.value,phone:E.value,zipcode:o.value,addr:D.value,addrDetail:A.value};m.post("api/insertAddr",s).then(a=>{a.data==="success"&&location.reload()}).catch(a=>{console.log(a)}),console.log(s)};return m.get("/api/selectReserves").then(s=>{console.log(s),f.value=s.data}).catch(s=>{console.log(s)}),X(g,s=>{f.value!==void 0&&s>f.value.reserves&&(alert("현재 적립금보다 많이 사용할 수 없습니다."),g.value=0)}),{addrList:p,addRadio:L,addrInfo:u,productList:t,getImageUrl:he,paymentBtn:O,getTotalPrice:M,req:B,payMethod:F,modal:I,zonecode:o,roadAddress:D,detailAddress:A,openPostcode:S,name:x,addrName:j,phone:E,saveAddr:T,addCommas:q,reservesInfo:f,useReserves:g,reserves:y}}};const l=p=>(ve("data-v-31e2d0e4"),p=p(),ge(),p),Ae={key:0,class:"black-bg"},fe={class:"white-bg"},ye=l(()=>e("h1",null,"신규 배송지",-1)),be=l(()=>e("span",null,"수령인",-1)),ke=l(()=>e("br",null,null,-1)),Fe=l(()=>e("span",null,"배송지명 (선택)",-1)),Ie=l(()=>e("br",null,null,-1)),xe=l(()=>e("span",null,"휴대전화",-1)),Ee=l(()=>e("br",null,null,-1)),we=l(()=>e("span",null,"배송지 주소",-1)),Ve=l(()=>e("br",null,null,-1)),je=l(()=>e("span",null,null,-1)),Ue=l(()=>e("br",null,null,-1)),Me=l(()=>e("span",null,null,-1)),Pe=l(()=>e("hr",null,null,-1)),Re=l(()=>e("h1",null,"Order / Payment",-1)),Ne=l(()=>e("legend",null,"배송지 정보",-1)),ze=l(()=>e("label",{for:"addr",class:"title"},"배송지",-1)),qe=["onClick"],Le=l(()=>e("label",{for:"tel2",class:"title"},"이름 / 연락처",-1)),Oe={key:0},Se={key:1},Te=l(()=>e("label",{for:"comment",class:"title"},"주소",-1)),Ge={key:0},He={key:1},Je=l(()=>e("label",{for:"comment",class:"title"},"배송 요청사항",-1)),Qe=l(()=>e("option",{value:"배송 시 요청사항을 선택해주세요"}," 배송 시 요청사항을 선택해주세요 ",-1)),Xe=l(()=>e("option",{value:"부재 시 경비실에 맡겨주세요"},"부재 시 경비실에 맡겨주세요",-1)),Ke=l(()=>e("option",{value:"부재 시 택배함에 넣어주세요"},"부재 시 택배함에 넣어주세요",-1)),We=l(()=>e("option",{value:"부재 시 집 앞에 놔주세요"},"부재 시 집 앞에 놔주세요",-1)),Ye=[Qe,Xe,Ke,We],Ze=l(()=>e("legend",null,"주문 정보",-1)),$e=l(()=>e("thead",null,[e("tr",null,[e("th",null,"상품정보"),e("th",null,"수량"),e("th",null,"적립금"),e("th",null,"상품 할인"),e("th",null,"배송 그룹"),e("th",null,"배송비"),e("th",null,"주문금액")])],-1)),et={class:"item-info"},tt=["src"],ot=l(()=>e("br",null,null,-1)),ut=l(()=>e("td",null,"-0원",-1)),lt=l(()=>e("td",null,"무료",-1)),st=l(()=>e("legend",null,"적립금 할인",-1)),nt={key:0},at=l(()=>e("legend",null,"결제 정보",-1)),dt={style:{"padding-right":"10px"}},rt={style:{"padding-right":"10px"}},Ct={style:{"padding-right":"10px"}},it={class:"centered"};function ct(p,u,k,t,B,F){const I=_e("router-link");return i(),c("div",null,[t.modal===!0?(i(),c("div",Ae,[e("div",fe,[e("button",{type:"button",onClick:u[0]||(u[0]=o=>t.modal=!1),style:{float:"right"}},"X"),ye,e("label",null,[be,d(),_(e("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=o=>t.name=o)},null,512),[[v,t.name]])]),d(),ke,e("label",null,[Fe,d(),_(e("input",{type:"text","onUpdate:modelValue":u[2]||(u[2]=o=>t.addrName=o)},null,512),[[v,t.addrName]])]),d(),Ie,e("label",null,[xe,d(),_(e("input",{type:"text","onUpdate:modelValue":u[3]||(u[3]=o=>t.phone=o)},null,512),[[v,t.phone]])]),d(),Ee,e("label",null,[we,_(e("input",{type:"text",placeholder:"우편번호","onUpdate:modelValue":u[4]||(u[4]=o=>t.zonecode=o),readonly:""},null,512),[[v,t.zonecode]]),e("button",{id:"postcode",onClick:u[5]||(u[5]=(...o)=>t.openPostcode&&t.openPostcode(...o))},"검색"),Ve,je,_(e("input",{type:"text","onUpdate:modelValue":u[6]||(u[6]=o=>t.roadAddress=o),placeholder:"주소",readonly:""},null,512),[[v,t.roadAddress]]),Ue,Me,_(e("input",{type:"text","onUpdate:modelValue":u[7]||(u[7]=o=>t.detailAddress=o),placeholder:"상세주소"},null,512),[[v,t.detailAddress]])]),Pe,e("button",{type:"button",onClick:u[8]||(u[8]=o=>t.modal=!1),style:{"margin-right":"10px"}},"취소"),e("button",{type:"button",onClick:u[9]||(u[9]=(...o)=>t.saveAddr&&t.saveAddr(...o))},"저장")])])):R("",!0),Re,e("form",null,[e("fieldset",null,[Ne,e("ul",null,[e("li",null,[ze,(i(!0),c(N,null,z(t.addrList,(o,D)=>(i(),c("span",{key:D},[e("label",null,[e("input",{type:"radio",name:"chk_info",onClick:A=>t.addRadio(o.addrId)},null,8,qe),d(" "+r(o.addrName),1)])]))),128)),e("button",{type:"button",style:{"margin-left":"10px"},onClick:u[10]||(u[10]=o=>t.modal=!0)}," 신규 배송지 추가 ")]),e("li",null,[Le,t.addrInfo?(i(),c("p",Oe,r(t.addrInfo.name)+" / "+r(t.addrInfo.phone),1)):(i(),c("p",Se,"선택해주세요"))]),e("li",null,[Te,t.addrInfo?(i(),c("p",Ge," ("+r(t.addrInfo.zipcode)+") "+r(t.addrInfo.addr)+" "+r(t.addrInfo.addrDetail),1)):(i(),c("p",He,"선택해주세요"))]),e("li",null,[Je,_(e("select",{style:{width:"300px"},"onUpdate:modelValue":u[11]||(u[11]=o=>t.req=o)},Ye,512),[[pe,t.req]])])])]),e("fieldset",null,[Ze,e("table",null,[$e,e("tbody",null,[(i(!0),c(N,null,z(t.productList,(o,D)=>(i(),c("tr",{key:D,class:"cart-item"},[e("td",et,[De(I,{to:{name:"productDetailView",query:{id:o.productId}}},{default:me(()=>[e("span",null,[e("img",{src:t.getImageUrl(o.img),style:{width:"80px"}},null,8,tt)]),ot]),_:2},1032,["to"]),d(" "+r(o.name),1)]),e("td",null,r(o.cnt)+"개",1),e("td",null,r(t.addCommas(o.cnt*o.price*.01))+"원",1),ut,e("td",null,"그룹"+r(D+1),1),lt,e("td",null,r(t.addCommas(o.cnt*o.price))+"원",1)]))),128))])])]),e("fieldset",null,[st,d(" 적립금 사용: "),_(e("input",{type:"text","onUpdate:modelValue":u[12]||(u[12]=o=>t.useReserves=o)},null,512),[[v,t.useReserves]]),d(" 현재 적립금 : "),t.reservesInfo?(i(),c("span",nt,r(t.reservesInfo.reserves),1)):R("",!0)]),e("fieldset",null,[at,e("label",dt,[_(e("input",{type:"radio",name:"chk_info1",value:"card",checked:"","onUpdate:modelValue":u[13]||(u[13]=o=>t.payMethod=o)},null,512),[[V,t.payMethod]]),d("카드")]),e("label",rt,[_(e("input",{type:"radio",name:"chk_info1",value:"account","onUpdate:modelValue":u[14]||(u[14]=o=>t.payMethod=o)},null,512),[[V,t.payMethod]]),d("가상계좌")]),e("label",Ct,[_(e("input",{type:"radio",name:"chk_info1",value:"phone","onUpdate:modelValue":u[15]||(u[15]=o=>t.payMethod=o)},null,512),[[V,t.payMethod]]),d("휴대폰")])]),e("div",it,[e("button",{onClick:u[16]||(u[16]=(...o)=>t.paymentBtn&&t.paymentBtn(...o)),type:"button",style:{cursor:"pointer","font-size":"20px",padding:"10px 20px",color:"white","background-color":"black"}},r(t.addCommas(t.getTotalPrice-t.useReserves))+"원 결제하기 ",1)])])])}const pt=ce(Be,[["render",ct],["__scopeId","data-v-31e2d0e4"]]);export{pt as default};
