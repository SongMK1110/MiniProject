import{u as J,r as y,a as p,i as M,j as O,k as z,l as G,m as H,n as K,q as W,s as X,x as Y,y as Z,z as $,A as ee,B as te,e as ae,_ as oe,o as i,c as s,b as a,F as A,d as w,t as C,C as m,w as u,v as j,g as r,p as le,h as ne}from"./index-f28f60b9.js";function ie(c){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":M,"/src/assets/images/검정 후드티2.jpg":O,"/src/assets/images/검정 후드티3.jpg":z,"/src/assets/images/나이키 바지.jpg":G,"/src/assets/images/마이페이지.png":H,"/src/assets/images/슬랙스.jpg":K,"/src/assets/images/야구 잠바.jpg":W,"/src/assets/images/양털 후리스.jpg":X,"/src/assets/images/청바지.jpg":Y,"/src/assets/images/체크셔츠.jpg":Z,"/src/assets/images/패딩 조끼.jpg":$,"/src/assets/images/회색 후드티.jpg":ee,"/src/assets/images/회색 후드티2.jpg":te})[`/src/assets/images/${c}`],self.location).href}function q(c){if(c!==null){var n=c.split(".")[1],R=n.replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(atob(R).split("").map(function(U){return"%"+("00"+U.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(e)}}const se={setup(){const c=J(),n=y(),R=y([]),e=localStorage.getItem("token"),U=q(e);let k="";U!==void 0&&(k=q(e).userName);const t=y(1),V=y(""),l=y(!1),v=y(0),h=y(""),b=y([]),I=y([]),x=o=>o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),S=()=>{t.value++,D()},E=()=>{t.value>1&&(t.value--,D())},D=()=>{n.value!==void 0&&(V.value=x(n.value.price*t.value))},P=async()=>{if(window.confirm("장바구니에 상품을 넣으시겠습니까?"))try{const _=await p.post("api/cartCheck",{productId:c.query.id});if(console.log(_),_.data==="duplication"){alert("장바구니에 있습니다.");return}const f=await p.post("api/insertCart",{productId:c.query.id,cnt:t.value});console.log(f),f.data==="success"&&ae.push({name:"CartView",query:{userId:k}})}catch(_){console.error(_)}},Q=()=>{l.value=!l.value,l.value===!1?p.post("/api/deleteLike",{productId:c.query.id}).then(o=>{console.log(o)}).catch(o=>{console.log(o)}):p.post("/api/insertLike",{productId:c.query.id}).then(o=>{console.log(o)}).catch(o=>{console.log(o)})};p.post("/api/productDetail",{productId:c.query.id}).then(o=>{o!==void 0&&(n.value=o.data.productDetail,R.value=o.data.productDetailImg),o.data.likeCheck>0?l.value=!0:l.value=!1}).catch(o=>{console.log(o)}),p.get("api/reviewProductDetail",{params:{productId:c.query.id}}).then(o=>{I.value=o.data}).catch(o=>{console.log(o)}),p.get("api/reviewRateAvg",{params:{productId:c.query.id}}).then(o=>{v.value=o.data,o.data<.5||o.data<1?v.value=.5:o.data<1.5?v.value=1:o.data<2?v.value=1.5:o.data<2.5?v.value=2:o.data<3?v.value=2.5:o.data<3.5?v.value=3:o.data<4?v.value=3.5:o.data<4.5?v.value=4:o.data<5?v.value=4.5:v.value=5}).catch(o=>{console.log(o)});const T=o=>{const _=I.value.find(g=>g.reviewId===o);window.confirm("등록하시겠습니까?")&&p.post("api/insertReviewComment",{reviewId:o,content:_==null?void 0:_.reviewComment}).then(g=>{b.value.push(g.data),_&&_.reviewComment!==void 0&&(_.reviewComment="")}).catch(g=>{console.log(g)})};p.get("api/selectReviewComment").then(o=>{b.value=o.data}).catch(o=>{console.log(o)});const F=o=>{window.confirm("삭제하시겠습니까?")&&p.post("api/deleteComment",{commentId:o,memberId:k}).then(f=>{f.data==="success"&&(b.value=b.value.filter(g=>g.commentId!==o))}).catch(f=>{console.log(f)})},B=y();return{product:n,imgList:R,getImageUrl:ie,token:e,parseJwt:q,userId:k,addToCart:P,quantity:t,totalPrice:V,incrementQuantity:S,decrementQuantity:E,calculateTotalPrice:D,parseToken:U,likeBtn:Q,liked:l,addCommas:x,reviewList:I,averageRate:v,insertComment:T,reviewComment:h,reviewCommentList:b,deleteComment:F,updateComment:(o,_)=>{B.value=o,h.value=_},editingCommentId:B,saveEditedComment:o=>{const _=h.value;window.confirm("수정하시겠습니까?")&&p.post("api/updateComment",{commentId:o,content:_,memberId:k}).then(g=>{if(g.data==="success"){B.value=-1;const L=b.value.findIndex(N=>N.commentId===o);L!==-1&&(b.value[L].content=_)}}).catch(g=>{console.log(g)})}}}};const d=c=>(le("data-v-76315596"),c=c(),ne(),c),de={class:"centered-content"},ue=d(()=>a("h1",null,"상품 디테일 페이지",-1)),re={class:"image-list"},ce=["src"],_e=d(()=>a("br",null,null,-1)),me={key:0},ve={key:1},Ce={key:2},ge=d(()=>a("label",{for:"quantity"},"수량:",-1)),pe={key:0},ye={key:1},he={class:"average-rating"},fe=d(()=>a("h3",null,"전체 평균 별점",-1)),be={class:"rate"},ke=d(()=>a("label",{title:"5점"},null,-1)),Ve=d(()=>a("label",{class:"half",title:"4.5점"},null,-1)),Re=d(()=>a("label",{title:"4점"},null,-1)),Ue=d(()=>a("label",{class:"half",title:"3.5점"},null,-1)),Ie=d(()=>a("label",{title:"3점"},null,-1)),De=d(()=>a("label",{class:"half",title:"2.5점"},null,-1)),Be=d(()=>a("label",{title:"2점"},null,-1)),Ae=d(()=>a("label",{class:"half",title:"1.5점"},null,-1)),we=d(()=>a("label",{title:"1점"},null,-1)),je=d(()=>a("label",{class:"half",title:"0.5점"},null,-1)),qe={class:"review-section"},xe=d(()=>a("h2",null,"상품 리뷰",-1)),Le={class:"review-list"},Se={class:"review-author"},Ee={class:"review-rating"},Pe={class:"rate"},Qe=["onUpdate:modelValue"],Te=d(()=>a("label",{title:"5점"},null,-1)),Fe=["onUpdate:modelValue"],Ne=d(()=>a("label",{class:"half",title:"4.5점"},null,-1)),Je=["onUpdate:modelValue"],Me=d(()=>a("label",{title:"4점"},null,-1)),Oe=["onUpdate:modelValue"],ze=d(()=>a("label",{class:"half",title:"3.5점"},null,-1)),Ge=["onUpdate:modelValue"],He=d(()=>a("label",{title:"3점"},null,-1)),Ke=["onUpdate:modelValue"],We=d(()=>a("label",{class:"half",title:"2.5점"},null,-1)),Xe=["onUpdate:modelValue"],Ye=d(()=>a("label",{title:"2점"},null,-1)),Ze=["onUpdate:modelValue"],$e=d(()=>a("label",{class:"half",title:"1.5점"},null,-1)),et=["onUpdate:modelValue"],tt=d(()=>a("label",{title:"1점"},null,-1)),at=["onUpdate:modelValue"],ot=d(()=>a("label",{class:"half",title:"0.5점"},null,-1)),lt={class:"review-content"},nt=d(()=>a("label",{for:""},"댓글: ",-1)),it=["onUpdate:modelValue"],st=["onClick"],dt={key:0,class:"comment"},ut={key:0},rt={class:"comment-author"},ct={class:"comment-date"},_t=["onClick"],mt={key:1},vt={class:"comment-author"},Ct={class:"comment-content"},gt={class:"comment-date"},pt={key:0},yt=["onClick"],ht=["onClick"];function ft(c,n,R,e,U,k){return i(),s("div",de,[ue,a("div",null,[a("div",re,[(i(!0),s(A,null,w(e.imgList,(t,V)=>(i(),s("div",{key:V,class:"image-item"},[a("img",{src:e.getImageUrl(t.img),style:{width:"200px"}},null,8,ce),_e]))),128))]),e.product?(i(),s("h2",me,"이름: "+C(e.product.name),1)):m("",!0),e.product?(i(),s("p",ve,"가격: "+C(e.addCommas(e.product.price))+"원",1)):m("",!0),e.product?(i(),s("p",Ce,"설명: "+C(e.product.content),1)):m("",!0)]),a("div",null,[a("div",null,[ge,a("button",{onClick:n[0]||(n[0]=(...t)=>e.decrementQuantity&&e.decrementQuantity(...t))},"-"),u(a("input",{type:"number",id:"quantity","onUpdate:modelValue":n[1]||(n[1]=t=>e.quantity=t),readonly:""},null,512),[[j,e.quantity]]),a("button",{onClick:n[2]||(n[2]=(...t)=>e.incrementQuantity&&e.incrementQuantity(...t))},"+")]),e.totalPrice!=""?(i(),s("p",pe,"총 가격: "+C(e.totalPrice)+"원",1)):e.product?(i(),s("p",ye,"총 가격: "+C(e.addCommas(e.product.price))+"원",1)):m("",!0)]),a("div",null,[a("button",{style:{"margin-right":"10px"},onClick:n[3]||(n[3]=(...t)=>e.likeBtn&&e.likeBtn(...t))},C(e.liked?"좋아요 취소":"좋아요"),1),a("button",{onClick:n[4]||(n[4]=(...t)=>e.addToCart&&e.addToCart(...t))},"장바구니")]),a("div",he,[fe,a("fieldset",be,[e.averageRate>=5?u((i(),s("input",{key:0,type:"radio",value:"5","onUpdate:modelValue":n[5]||(n[5]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),ke,e.averageRate>=4.5?u((i(),s("input",{key:1,type:"radio",value:"4.5","onUpdate:modelValue":n[6]||(n[6]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),Ve,e.averageRate>=4?u((i(),s("input",{key:2,type:"radio",value:"4","onUpdate:modelValue":n[7]||(n[7]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),Re,e.averageRate>=3.5?u((i(),s("input",{key:3,type:"radio",value:"3.5","onUpdate:modelValue":n[8]||(n[8]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),Ue,e.averageRate>=3?u((i(),s("input",{key:4,type:"radio",value:"3","onUpdate:modelValue":n[9]||(n[9]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),Ie,e.averageRate>=2.5?u((i(),s("input",{key:5,type:"radio",value:"2.5","onUpdate:modelValue":n[10]||(n[10]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),De,e.averageRate>=2?u((i(),s("input",{key:6,type:"radio",value:"2","onUpdate:modelValue":n[11]||(n[11]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),Be,e.averageRate>=1.5?u((i(),s("input",{key:7,type:"radio",value:"1.5","onUpdate:modelValue":n[12]||(n[12]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),Ae,e.averageRate>=1?u((i(),s("input",{key:8,type:"radio",value:"1","onUpdate:modelValue":n[13]||(n[13]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),we,e.averageRate>=.5?u((i(),s("input",{key:9,type:"radio",value:"0.5","onUpdate:modelValue":n[14]||(n[14]=t=>e.averageRate=t),readonly:""},null,512)),[[r,e.averageRate]]):m("",!0),je])]),a("div",qe,[xe,a("ul",Le,[(i(!0),s(A,null,w(e.reviewList,(t,V)=>(i(),s("li",{class:"review-item",key:V},[a("div",Se,"작성자: "+C(t.name),1),a("div",Ee,"평점: "+C(t.rate)+"/5",1),a("fieldset",Pe,[u(a("input",{type:"radio",value:"5","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,Qe),[[r,t.rate]]),Te,u(a("input",{type:"radio",value:"4.5","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,Fe),[[r,t.rate]]),Ne,u(a("input",{type:"radio",value:"4","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,Je),[[r,t.rate]]),Me,u(a("input",{type:"radio",value:"3.5","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,Oe),[[r,t.rate]]),ze,u(a("input",{type:"radio",value:"3","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,Ge),[[r,t.rate]]),He,u(a("input",{type:"radio",value:"2.5","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,Ke),[[r,t.rate]]),We,u(a("input",{type:"radio",value:"2","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,Xe),[[r,t.rate]]),Ye,u(a("input",{type:"radio",value:"1.5","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,Ze),[[r,t.rate]]),$e,u(a("input",{type:"radio",value:"1","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,et),[[r,t.rate]]),tt,u(a("input",{type:"radio",value:"0.5","onUpdate:modelValue":l=>t.rate=l,readonly:""},null,8,at),[[r,t.rate]]),ot]),a("div",lt,C(t.content),1),nt,u(a("input",{type:"text","onUpdate:modelValue":l=>t.reviewComment=l},null,8,it),[[j,t.reviewComment]]),a("button",{type:"button",onClick:l=>e.insertComment(t.reviewId)},"등록",8,st),(i(!0),s(A,null,w(e.reviewCommentList,(l,v)=>(i(),s("div",{class:"comment-list",key:v},[l.reviewId===t.reviewId?(i(),s("div",dt,[e.editingCommentId===l.commentId?(i(),s("div",ut,[a("div",rt,"작성자: "+C(l.name),1),u(a("textarea",{"onUpdate:modelValue":n[15]||(n[15]=h=>e.reviewComment=h)},null,512),[[j,e.reviewComment]]),a("div",ct,"작성일: "+C(l.rdate),1),a("button",{onClick:h=>e.saveEditedComment(l.commentId)},"저장",8,_t)])):(i(),s("div",mt,[a("div",vt,"작성자: "+C(l.name),1),a("div",Ct,"내용: "+C(l.content),1),a("div",gt,"작성일: "+C(l.rdate),1),l.memberId===parseInt(e.userId)?(i(),s("div",pt,[a("button",{onClick:h=>e.updateComment(l.commentId,l.content)},"수정",8,yt),a("button",{onClick:h=>e.deleteComment(l.commentId)},"삭제",8,ht)])):m("",!0)]))])):m("",!0)]))),128))]))),128))])])])}const Rt=oe(se,[["render",ft],["__scopeId","data-v-76315596"]]);export{Rt as default};
