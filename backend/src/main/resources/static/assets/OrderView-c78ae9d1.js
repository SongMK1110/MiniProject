import{r as a,u as L,a as m,I as R,J as S,i as O,j as T,k as G,l as H,m as J,n as K,q as X,s as Q,x as W,y as Y,z as Z,A as $,e as ee,_ as te,D as oe,o as i,c,b as e,f as C,w as _,v as g,B as ue,F as j,d as U,t as d,K as le,g as F,G as ne,H as se,p as ae,h as de}from"./index-1c1586e4.js";function re(p){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":O,"/src/assets/images/검정 후드티2.jpg":T,"/src/assets/images/검정 후드티3.jpg":G,"/src/assets/images/나이키 바지.jpg":H,"/src/assets/images/슬랙스.jpg":J,"/src/assets/images/야구 잠바.jpg":K,"/src/assets/images/양털 후리스.jpg":X,"/src/assets/images/청바지.jpg":Q,"/src/assets/images/체크셔츠.jpg":W,"/src/assets/images/패딩 조끼.jpg":Y,"/src/assets/images/회색 후드티.jpg":Z,"/src/assets/images/회색 후드티2.jpg":$})[`/src/assets/images/${p}`],self.location).href}const Ce={setup(){const p=a([]),u=a(),B=L(),t=a([]),h=a("배송 시 요청사항을 선택해주세요"),f=a("card"),A=a(!1),o=a(""),D=a(""),v=a(""),y=a(""),x=a(""),b=a("");m.get("/api/selectAddrList").then(n=>{p.value=n.data}).catch(n=>{console.log(n)});const M=n=>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),P=n=>{m.post("/api/selectAddrInfo",{addrId:n}).then(s=>{u.value=s.data}).catch(s=>{console.log(s)})},I=a([]);R(async()=>{const n=B.query.products;if(n){const r=n.toString().split(",").map(Number);I.value=r}const s={ids:I.value.join(",")};try{const r=await m.get("api/selectCartProduct",{params:s});t.value=r.data}catch(r){console.error("Error fetching products:",r)}});const z=async()=>{if(u.value==null)alert("배송지를 선택 해주세요");else{if(h.value==="배송 시 요청사항을 선택해주세요"){alert("요청사항을 선택해주세요");return}if(window.confirm("결제하시겠습니까?")){const s={name:u.value.name,addr:u.value.addr,addrDetail:u.value.addrDetail,phone:u.value.phone,zipcode:u.value.zipcode,req:h.value,price:w.value,paymentMethod:f.value};try{const r=await m.post("/api/order",s);if(console.log(r),r.data!==-1){const N=r.data,E=[];t.value.forEach(k=>{const q={orderId:N,productId:k.productId,price:k.price,cnt:k.cnt};E.push(q)});const V=await m.post("/api/orderDetail",E);console.log(V),V.data==="success"?(console.log("주문이 성공적으로 완료되었습니다."),ee.push({name:"OrderListView",query:{id:B.query.id}})):console.error("상세 주문 정보 저장 실패")}else console.error("주문 저장 실패")}catch(r){console.error("주문 처리 중 오류 발생:",r)}}}},w=S(()=>t.value.reduce((n,s)=>n+s.cnt*s.price,0));return{addrList:p,addRadio:P,addrInfo:u,productList:t,getImageUrl:re,paymentBtn:z,getTotalPrice:w,req:h,payMethod:f,modal:A,zonecode:o,roadAddress:D,detailAddress:v,openPostcode:()=>{new window.daum.Postcode({oncomplete:n=>{o.value=n.zonecode,D.value=n.roadAddress}}).open()},name:y,addrName:x,phone:b,saveAddr:()=>{if(y.value===""){alert("수령인을 입력해주세요");return}if(b.value===""){alert("휴대전화를 입력해주세요");return}if(o.value===""){alert("우편번호를 입력해주세요");return}if(D.value===""){alert("주소를 입력해주세요");return}if(v.value===""){alert("상세주소를 입력해주세요");return}const n={name:y.value,addrName:x.value,phone:b.value,zipcode:o.value,addr:D.value,addrDetail:v.value};m.post("api/insertAddr",n).then(s=>{s.data==="success"&&location.reload()}).catch(s=>{console.log(s)}),console.log(n)},addCommas:M}}};const l=p=>(ae("data-v-bc22d4f6"),p=p(),de(),p),ie={key:0,class:"black-bg"},ce={class:"white-bg"},_e=l(()=>e("h1",null,"신규 배송지",-1)),pe=l(()=>e("span",null,"수령인",-1)),De=l(()=>e("br",null,null,-1)),me=l(()=>e("span",null,"배송지명 (선택)",-1)),ge=l(()=>e("br",null,null,-1)),he=l(()=>e("span",null,"휴대전화",-1)),ve=l(()=>e("br",null,null,-1)),Be=l(()=>e("span",null,"배송지 주소",-1)),fe=l(()=>e("br",null,null,-1)),Ae=l(()=>e("span",null,null,-1)),ye=l(()=>e("br",null,null,-1)),be=l(()=>e("span",null,null,-1)),ke=l(()=>e("hr",null,null,-1)),Fe=l(()=>e("h1",null,"Order / Payment",-1)),xe=l(()=>e("legend",null,"배송지 정보",-1)),Ie=l(()=>e("label",{for:"addr",class:"title"},"배송지",-1)),we=["onClick"],Ee=l(()=>e("label",{for:"tel2",class:"title"},"이름 / 연락처",-1)),Ve={key:0},je={key:1},Ue=l(()=>e("label",{for:"comment",class:"title"},"주소",-1)),Me={key:0},Pe={key:1},ze=l(()=>e("label",{for:"comment",class:"title"},"배송 요청사항",-1)),Ne=l(()=>e("option",{value:"배송 시 요청사항을 선택해주세요"}," 배송 시 요청사항을 선택해주세요 ",-1)),qe=l(()=>e("option",{value:"부재 시 경비실에 맡겨주세요"},"부재 시 경비실에 맡겨주세요",-1)),Le=l(()=>e("option",{value:"부재 시 택배함에 넣어주세요"},"부재 시 택배함에 넣어주세요",-1)),Re=l(()=>e("option",{value:"부재 시 집 앞에 놔주세요"},"부재 시 집 앞에 놔주세요",-1)),Se=[Ne,qe,Le,Re],Oe=l(()=>e("legend",null,"주문 정보",-1)),Te=l(()=>e("thead",null,[e("tr",null,[e("th",null,"상품정보"),e("th",null,"수량"),e("th",null,"적립금"),e("th",null,"상품 할인"),e("th",null,"배송 그룹"),e("th",null,"배송비"),e("th",null,"주문금액")])],-1)),Ge={class:"item-info"},He=["src"],Je=l(()=>e("br",null,null,-1)),Ke=l(()=>e("td",null,"-0원",-1)),Xe=l(()=>e("td",null,"무료",-1)),Qe=l(()=>e("legend",null,"결제 정보",-1)),We={style:{"padding-right":"10px"}},Ye={style:{"padding-right":"10px"}},Ze={style:{"padding-right":"10px"}},$e={class:"centered"};function et(p,u,B,t,h,f){const A=oe("router-link");return i(),c("div",null,[t.modal===!0?(i(),c("div",ie,[e("div",ce,[e("button",{type:"button",onClick:u[0]||(u[0]=o=>t.modal=!1),style:{float:"right"}},"X"),_e,e("label",null,[pe,C(),_(e("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=o=>t.name=o)},null,512),[[g,t.name]])]),C(),De,e("label",null,[me,C(),_(e("input",{type:"text","onUpdate:modelValue":u[2]||(u[2]=o=>t.addrName=o)},null,512),[[g,t.addrName]])]),C(),ge,e("label",null,[he,C(),_(e("input",{type:"text","onUpdate:modelValue":u[3]||(u[3]=o=>t.phone=o)},null,512),[[g,t.phone]])]),C(),ve,e("label",null,[Be,_(e("input",{type:"text",placeholder:"우편번호","onUpdate:modelValue":u[4]||(u[4]=o=>t.zonecode=o),readonly:""},null,512),[[g,t.zonecode]]),e("button",{id:"postcode",onClick:u[5]||(u[5]=(...o)=>t.openPostcode&&t.openPostcode(...o))},"검색"),fe,Ae,_(e("input",{type:"text","onUpdate:modelValue":u[6]||(u[6]=o=>t.roadAddress=o),placeholder:"주소",readonly:""},null,512),[[g,t.roadAddress]]),ye,be,_(e("input",{type:"text","onUpdate:modelValue":u[7]||(u[7]=o=>t.detailAddress=o),placeholder:"상세주소"},null,512),[[g,t.detailAddress]])]),ke,e("button",{type:"button",onClick:u[8]||(u[8]=o=>t.modal=!1),style:{"margin-right":"10px"}},"취소"),e("button",{type:"button",onClick:u[9]||(u[9]=(...o)=>t.saveAddr&&t.saveAddr(...o))},"저장")])])):ue("",!0),Fe,e("form",null,[e("fieldset",null,[xe,e("ul",null,[e("li",null,[Ie,(i(!0),c(j,null,U(t.addrList,(o,D)=>(i(),c("span",{key:D},[e("label",null,[e("input",{type:"radio",name:"chk_info",onClick:v=>t.addRadio(o.addrId)},null,8,we),C(" "+d(o.addrName),1)])]))),128)),e("button",{type:"button",style:{"margin-left":"10px"},onClick:u[10]||(u[10]=o=>t.modal=!0)}," 신규 배송지 추가 ")]),e("li",null,[Ee,t.addrInfo?(i(),c("p",Ve,d(t.addrInfo.name)+" / "+d(t.addrInfo.phone),1)):(i(),c("p",je,"선택해주세요"))]),e("li",null,[Ue,t.addrInfo?(i(),c("p",Me," ("+d(t.addrInfo.zipcode)+") "+d(t.addrInfo.addr)+" "+d(t.addrInfo.addrDetail),1)):(i(),c("p",Pe,"선택해주세요"))]),e("li",null,[ze,_(e("select",{style:{width:"300px"},"onUpdate:modelValue":u[11]||(u[11]=o=>t.req=o)},Se,512),[[le,t.req]])])])]),e("fieldset",null,[Oe,e("table",null,[Te,e("tbody",null,[(i(!0),c(j,null,U(t.productList,(o,D)=>(i(),c("tr",{key:D,class:"cart-item"},[e("td",Ge,[ne(A,{to:{name:"productDetailView",query:{id:o.productId}}},{default:se(()=>[e("span",null,[e("img",{src:t.getImageUrl(o.img),style:{width:"80px"}},null,8,He)]),Je]),_:2},1032,["to"]),C(" "+d(o.name),1)]),e("td",null,d(o.cnt)+"개",1),e("td",null,d(t.addCommas(o.cnt*o.price*.01))+"원",1),Ke,e("td",null,"그룹"+d(D+1),1),Xe,e("td",null,d(t.addCommas(o.cnt*o.price))+"원",1)]))),128))])])]),e("fieldset",null,[Qe,e("label",We,[_(e("input",{type:"radio",name:"chk_info1",value:"card",checked:"","onUpdate:modelValue":u[12]||(u[12]=o=>t.payMethod=o)},null,512),[[F,t.payMethod]]),C("카드")]),e("label",Ye,[_(e("input",{type:"radio",name:"chk_info1",value:"account","onUpdate:modelValue":u[13]||(u[13]=o=>t.payMethod=o)},null,512),[[F,t.payMethod]]),C("가상계좌")]),e("label",Ze,[_(e("input",{type:"radio",name:"chk_info1",value:"phone","onUpdate:modelValue":u[14]||(u[14]=o=>t.payMethod=o)},null,512),[[F,t.payMethod]]),C("휴대폰")])]),e("div",$e,[e("button",{onClick:u[15]||(u[15]=(...o)=>t.paymentBtn&&t.paymentBtn(...o)),type:"button",style:{cursor:"pointer","font-size":"20px",padding:"10px 20px",color:"white","background-color":"black"}},d(t.addCommas(t.getTotalPrice))+"원 결제하기 ",1)])])])}const lt=te(Ce,[["render",et],["__scopeId","data-v-bc22d4f6"]]);export{lt as default};
