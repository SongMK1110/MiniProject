import{H as p,u as b,r as w,S as h,a as g,l as y,m as B,q as V,s as k,x as U,y as D,z as x,A as j,B as I,C as A,D as z,E,G as R,I as F,J as q,K as S,e as H,_ as M,f as m,o as _,c as v,b as e,g as N,T,M as G,k as c,t as J,w as s,i as n,v as K,F as L,p as O,j as P}from"./index-ae286a28.js";function Q(r){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":y,"/src/assets/images/검정 후드티.jpg":B,"/src/assets/images/검정 후드티2.jpg":V,"/src/assets/images/검정 후드티3.jpg":k,"/src/assets/images/고양이 이미지.png":U,"/src/assets/images/나이키 바지.jpg":D,"/src/assets/images/마이페이지.png":x,"/src/assets/images/슬랙스.jpg":j,"/src/assets/images/야구 잠바.jpg":I,"/src/assets/images/양털 후리스.jpg":A,"/src/assets/images/청바지.jpg":z,"/src/assets/images/체크셔츠.jpg":E,"/src/assets/images/파란색 후드티.jpg":R,"/src/assets/images/패딩 조끼.jpg":F,"/src/assets/images/회색 후드티.jpg":q,"/src/assets/images/회색 후드티2.jpg":S})[`/src/assets/images/${r}`],self.location).href}const W={name:"ReviewView",components:{HeaderView:p},setup(){const r=b(),t=w(),a=h({rate:0,size:0,brightness:0,color:0,thickness:0,delivery:0,packaging:0,content:""});return g.get("api/reviewProduct",{params:{productId:r.query.productId}}).then(u=>{t.value=u.data}).catch(u=>{if(console.log(u),u.response.status===500){alert("서버 오류 발생");return}}),{route:r,productInfo:t,getImageUrl:Q,review:a,insertReviewBtn:()=>{if(a.rate===0){alert("별점을 입력해주세요");return}if(a.size===0){alert("사이즈를 입력해주세요");return}if(a.brightness===0){alert("밝기를 입력해주세요");return}if(a.color===0){alert("색감을 입력해주세요");return}if(a.thickness===0){alert("두께감을 입력해주세요");return}if(a.delivery===0){alert("배송을 입력해주세요");return}if(a.packaging===0){alert("포장을 입력해주세요");return}if(a.content===""){alert("내용을 입력해주세요");return}if(a.content.length<20){alert("20자 이상 입력해주세요");return}console.log(a.rate),console.log(a.size),console.log(a.brightness),console.log(a.color),console.log(a.thickness),console.log(a.delivery),console.log(a.packaging),console.log(a.content),console.log(r.query.productId);const u={productId:r.query.productId,content:a.content,rate:a.rate,size:a.size,brightness:a.brightness,color:a.color,thickness:a.thickness,delivery:a.delivery,packaging:a.packaging};window.confirm("등록하시겠습니까?")&&g.post("api/insertReview",u).then(d=>{console.log(d),d.data==="success"&&H.push({name:"productDetailView",query:{id:r.query.productId}})}).catch(d=>{if(console.log(d),d.response.data==="fail"){alert("리뷰 등록 실패");return}if(d.response.status===500){alert("서버 오류 발생");return}})}}}};const l=r=>(O("data-v-65cadfc7"),r=r(),P(),r),X=l(()=>e("h1",null,"후기 작성",-1)),Y=["src"],Z={key:1,style:{display:"inline","padding-left":"10px"}},$=l(()=>e("hr",null,null,-1)),ee=l(()=>e("div",null,[e("h2",{style:{"font-weight":"bold"}},"별점")],-1)),oe={class:"rate"},te=l(()=>e("label",{for:"rating10",title:"5점"},null,-1)),ie=l(()=>e("label",{class:"half",for:"rating9",title:"4.5점"},null,-1)),le=l(()=>e("label",{for:"rating8",title:"4점"},null,-1)),ae=l(()=>e("label",{class:"half",for:"rating7",title:"3.5점"},null,-1)),se=l(()=>e("label",{for:"rating6",title:"3점"},null,-1)),ne=l(()=>e("label",{class:"half",for:"rating5",title:"2.5점"},null,-1)),re=l(()=>e("label",{for:"rating4",title:"2점"},null,-1)),de=l(()=>e("label",{class:"half",for:"rating3",title:"1.5점"},null,-1)),ue=l(()=>e("label",{for:"rating2",title:"1점"},null,-1)),_e=l(()=>e("label",{class:"half",for:"rating1",title:"0.5점"},null,-1)),ve={class:"mb-3"},ce=l(()=>e("label",{class:"form-label"},"사이즈",-1)),ge={class:"form_toggle row-vh d-flex flex-row justify-content-between"},me={class:"form_radio_btn"},Ce=l(()=>e("label",{for:"radio-1"},"커요",-1)),fe={class:"form_radio_btn"},pe=l(()=>e("label",{for:"radio-2"},"보통이에요",-1)),be={class:"form_radio_btn"},we=l(()=>e("label",{for:"radio-3"},"작아요",-1)),he={class:"mb-3"},ye=l(()=>e("label",{class:"form-label"},"밝기",-1)),Be={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Ve={class:"form_radio_btn"},ke=l(()=>e("label",{for:"radio2-1"},"밝아요",-1)),Ue={class:"form_radio_btn"},De=l(()=>e("label",{for:"radio2-2"},"보통이에요",-1)),xe={class:"form_radio_btn"},je=l(()=>e("label",{for:"radio2-3"},"어두워요",-1)),Ie={class:"mb-3"},Ae=l(()=>e("label",{class:"form-label"},"색감",-1)),ze={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Ee={class:"form_radio_btn"},Re=l(()=>e("label",{for:"radio3-1"},"선명해요",-1)),Fe={class:"form_radio_btn"},qe=l(()=>e("label",{for:"radio3-2"},"보통이에요",-1)),Se={class:"form_radio_btn"},He=l(()=>e("label",{for:"radio3-3"},"흐려요",-1)),Me={class:"mb-3"},Ne=l(()=>e("label",{class:"form-label"},"두께감",-1)),Te={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Ge={class:"form_radio_btn"},Je=l(()=>e("label",{for:"radio4-1"},"두꺼워요",-1)),Ke={class:"form_radio_btn"},Le=l(()=>e("label",{for:"radio4-2"},"보통이에요",-1)),Oe={class:"form_radio_btn"},Pe=l(()=>e("label",{for:"radio4-3"},"얇아요",-1)),Qe={class:"mb-3"},We=l(()=>e("label",{class:"form-label"},"배송",-1)),Xe={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Ye={class:"form_radio_btn"},Ze=l(()=>e("label",{for:"radio5-1"},"빨라요",-1)),$e={class:"form_radio_btn"},eo=l(()=>e("label",{for:"radio5-2"},"아쉬워요",-1)),oo={class:"mb-3"},to=l(()=>e("label",{class:"form-label"},"포장",-1)),io={class:"form_toggle row-vh d-flex flex-row justify-content-between"},lo={class:"form_radio_btn"},ao=l(()=>e("label",{for:"radio6-1"},"꼼꼼해요",-1)),so={class:"form_radio_btn"},no=l(()=>e("label",{for:"radio6-2"},"아쉬워요",-1)),ro=l(()=>e("hr",null,null,-1)),uo=l(()=>e("h2",{style:{"font-weight":"bold"}},"내용",-1)),_o={style:{"text-align":"center","margin-top":"20px"}};function vo(r,t,a,o,u,C){const d=m("HeaderView"),f=m("router-link");return _(),v(L,null,[e("header",null,[N(d)]),e("div",null,[X,e("div",null,[e("div",null,[o.productInfo?(_(),T(f,{key:0,to:{name:"productDetailView",query:{id:o.productInfo.productId}}},{default:G(()=>[o.productInfo?(_(),v("img",{key:0,src:o.getImageUrl(o.productInfo.img),style:{width:"100px"}},null,8,Y)):c("",!0)]),_:1},8,["to"])):c("",!0),o.productInfo?(_(),v("p",Z," 상품명 : "+J(o.productInfo.name),1)):c("",!0)]),$,ee,e("fieldset",oe,[s(e("input",{type:"radio",id:"rating10",name:"rating",value:"5","onUpdate:modelValue":t[0]||(t[0]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),te,s(e("input",{type:"radio",id:"rating9",name:"rating",value:"4.5","onUpdate:modelValue":t[1]||(t[1]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),ie,s(e("input",{type:"radio",id:"rating8",name:"rating",value:"4","onUpdate:modelValue":t[2]||(t[2]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),le,s(e("input",{type:"radio",id:"rating7",name:"rating",value:"3.5","onUpdate:modelValue":t[3]||(t[3]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),ae,s(e("input",{type:"radio",id:"rating6",name:"rating",value:"3","onUpdate:modelValue":t[4]||(t[4]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),se,s(e("input",{type:"radio",id:"rating5",name:"rating",value:"2.5","onUpdate:modelValue":t[5]||(t[5]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),ne,s(e("input",{type:"radio",id:"rating4",name:"rating",value:"2","onUpdate:modelValue":t[6]||(t[6]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),re,s(e("input",{type:"radio",id:"rating3",name:"rating",value:"1.5","onUpdate:modelValue":t[7]||(t[7]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),de,s(e("input",{type:"radio",id:"rating2",name:"rating",value:"1","onUpdate:modelValue":t[8]||(t[8]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),ue,s(e("input",{type:"radio",id:"rating1",name:"rating",value:"0.5","onUpdate:modelValue":t[9]||(t[9]=i=>o.review.rate=i)},null,512),[[n,o.review.rate]]),_e])]),e("div",ve,[ce,e("div",ge,[e("div",me,[s(e("input",{id:"radio-1",type:"radio",name:"size",value:"1","onUpdate:modelValue":t[10]||(t[10]=i=>o.review.size=i)},null,512),[[n,o.review.size]]),Ce]),e("div",fe,[s(e("input",{id:"radio-2",type:"radio",name:"size",value:"2","onUpdate:modelValue":t[11]||(t[11]=i=>o.review.size=i)},null,512),[[n,o.review.size]]),pe]),e("div",be,[s(e("input",{id:"radio-3",type:"radio",name:"size",value:"3","onUpdate:modelValue":t[12]||(t[12]=i=>o.review.size=i)},null,512),[[n,o.review.size]]),we])])]),e("div",he,[ye,e("div",Be,[e("div",Ve,[s(e("input",{id:"radio2-1",type:"radio",name:"brightness",value:"1","onUpdate:modelValue":t[13]||(t[13]=i=>o.review.brightness=i)},null,512),[[n,o.review.brightness]]),ke]),e("div",Ue,[s(e("input",{id:"radio2-2",type:"radio",name:"brightness",value:"2","onUpdate:modelValue":t[14]||(t[14]=i=>o.review.brightness=i)},null,512),[[n,o.review.brightness]]),De]),e("div",xe,[s(e("input",{id:"radio2-3",type:"radio",name:"brightness",value:"3","onUpdate:modelValue":t[15]||(t[15]=i=>o.review.brightness=i)},null,512),[[n,o.review.brightness]]),je])])]),e("div",Ie,[Ae,e("div",ze,[e("div",Ee,[s(e("input",{id:"radio3-1",type:"radio",name:"color",value:"1","onUpdate:modelValue":t[16]||(t[16]=i=>o.review.color=i)},null,512),[[n,o.review.color]]),Re]),e("div",Fe,[s(e("input",{id:"radio3-2",type:"radio",name:"color",value:"2","onUpdate:modelValue":t[17]||(t[17]=i=>o.review.color=i)},null,512),[[n,o.review.color]]),qe]),e("div",Se,[s(e("input",{id:"radio3-3",type:"radio",name:"color",value:"3","onUpdate:modelValue":t[18]||(t[18]=i=>o.review.color=i)},null,512),[[n,o.review.color]]),He])])]),e("div",Me,[Ne,e("div",Te,[e("div",Ge,[s(e("input",{id:"radio4-1",type:"radio",name:"thickness",value:"1","onUpdate:modelValue":t[19]||(t[19]=i=>o.review.thickness=i)},null,512),[[n,o.review.thickness]]),Je]),e("div",Ke,[s(e("input",{id:"radio4-2",type:"radio",name:"thickness",value:"2","onUpdate:modelValue":t[20]||(t[20]=i=>o.review.thickness=i)},null,512),[[n,o.review.thickness]]),Le]),e("div",Oe,[s(e("input",{id:"radio4-3",type:"radio",name:"thickness",value:"3","onUpdate:modelValue":t[21]||(t[21]=i=>o.review.thickness=i)},null,512),[[n,o.review.thickness]]),Pe])])]),e("div",Qe,[We,e("div",Xe,[e("div",Ye,[s(e("input",{id:"radio5-1",type:"radio",name:"delivery",value:"1","onUpdate:modelValue":t[22]||(t[22]=i=>o.review.delivery=i)},null,512),[[n,o.review.delivery]]),Ze]),e("div",$e,[s(e("input",{id:"radio5-2",type:"radio",name:"delivery",value:"2","onUpdate:modelValue":t[23]||(t[23]=i=>o.review.delivery=i)},null,512),[[n,o.review.delivery]]),eo])])]),e("div",oo,[to,e("div",io,[e("div",lo,[s(e("input",{id:"radio6-1",type:"radio",name:"packaging",value:"1","onUpdate:modelValue":t[24]||(t[24]=i=>o.review.packaging=i)},null,512),[[n,o.review.packaging]]),ao]),e("div",so,[s(e("input",{id:"radio6-2",type:"radio",name:"packaging",value:"2","onUpdate:modelValue":t[25]||(t[25]=i=>o.review.packaging=i)},null,512),[[n,o.review.packaging]]),no])])]),ro,uo,s(e("textarea",{name:"",id:"",cols:"150",rows:"15",placeholder:"다른 회원분에게 도움이 되는 나만의 팁을 소개해 주세요.(20자 이상 작성)","onUpdate:modelValue":t[26]||(t[26]=i=>o.review.content=i)},null,512),[[K,o.review.content]]),e("div",_o,[e("button",{onClick:t[27]||(t[27]=(...i)=>o.insertReviewBtn&&o.insertReviewBtn(...i)),type:"button",style:{cursor:"pointer","font-size":"20px",padding:"10px 20px",color:"white","background-color":"black"}}," 등록 ")])])],64)}const go=M(W,[["render",vo],["__scopeId","data-v-65cadfc7"]]);export{go as default};
