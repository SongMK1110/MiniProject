import{u as C,r as f,R as b,a as c,j as p,k as w,l as h,m as y,q as B,s as k,x as V,y as U,z as D,A as x,B as j,C as I,D as A,E as z,G as R,H as E,e as F,_ as q,I as S,o as _,c as v,b as e,S as L,L as M,i as g,t as N,w as a,g as r,v as G,p as H,h as O}from"./index-6edb44e7.js";function P(n){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":p,"/src/assets/images/검정 후드티.jpg":w,"/src/assets/images/검정 후드티2.jpg":h,"/src/assets/images/검정 후드티3.jpg":y,"/src/assets/images/고양이 이미지.png":B,"/src/assets/images/나이키 바지.jpg":k,"/src/assets/images/마이페이지.png":V,"/src/assets/images/슬랙스.jpg":U,"/src/assets/images/야구 잠바.jpg":D,"/src/assets/images/양털 후리스.jpg":x,"/src/assets/images/청바지.jpg":j,"/src/assets/images/체크셔츠.jpg":I,"/src/assets/images/파란색 후드티.jpg":A,"/src/assets/images/패딩 조끼.jpg":z,"/src/assets/images/회색 후드티.jpg":R,"/src/assets/images/회색 후드티2.jpg":E})[`/src/assets/images/${n}`],self.location).href}const T={name:"ReviewView",setup(){const n=C(),i=f(),s=b({rate:0,size:0,brightness:0,color:0,thickness:0,delivery:0,packaging:0,content:""});return c.get("api/reviewProduct",{params:{productId:n.query.productId}}).then(d=>{i.value=d.data}).catch(d=>{console.log(d)}),{route:n,productInfo:i,getImageUrl:P,review:s,insertReviewBtn:()=>{if(s.rate===0){alert("별점을 입력해주세요");return}if(s.size===0){alert("사이즈를 입력해주세요");return}if(s.brightness===0){alert("밝기를 입력해주세요");return}if(s.color===0){alert("색감을 입력해주세요");return}if(s.thickness===0){alert("두께감을 입력해주세요");return}if(s.delivery===0){alert("배송을 입력해주세요");return}if(s.packaging===0){alert("포장을 입력해주세요");return}if(s.content===""){alert("내용을 입력해주세요");return}if(s.content.length<20){alert("20자 이상 입력해주세요");return}console.log(s.rate),console.log(s.size),console.log(s.brightness),console.log(s.color),console.log(s.thickness),console.log(s.delivery),console.log(s.packaging),console.log(s.content),console.log(n.query.productId);const d={productId:n.query.productId,content:s.content,rate:s.rate,size:s.size,brightness:s.brightness,color:s.color,thickness:s.thickness,delivery:s.delivery,packaging:s.packaging};window.confirm("등록하시겠습니까?")&&c.post("api/insertReview",d).then(u=>{console.log(u),u.data==="success"&&F.push({name:"productDetailView",query:{id:n.query.productId}})}).catch(u=>{console.log(u)})}}}};const l=n=>(H("data-v-b6979ec1"),n=n(),O(),n),J=l(()=>e("h1",null,"후기 작성",-1)),K=["src"],Q={key:1,style:{display:"inline","padding-left":"10px"}},W=l(()=>e("hr",null,null,-1)),X=l(()=>e("div",null,[e("h2",{style:{"font-weight":"bold"}},"별점")],-1)),Y={class:"rate"},Z=l(()=>e("label",{for:"rating10",title:"5점"},null,-1)),$=l(()=>e("label",{class:"half",for:"rating9",title:"4.5점"},null,-1)),ee=l(()=>e("label",{for:"rating8",title:"4점"},null,-1)),oe=l(()=>e("label",{class:"half",for:"rating7",title:"3.5점"},null,-1)),ie=l(()=>e("label",{for:"rating6",title:"3점"},null,-1)),te=l(()=>e("label",{class:"half",for:"rating5",title:"2.5점"},null,-1)),le=l(()=>e("label",{for:"rating4",title:"2점"},null,-1)),se=l(()=>e("label",{class:"half",for:"rating3",title:"1.5점"},null,-1)),ae=l(()=>e("label",{for:"rating2",title:"1점"},null,-1)),re=l(()=>e("label",{class:"half",for:"rating1",title:"0.5점"},null,-1)),ne={class:"mb-3"},de=l(()=>e("label",{class:"form-label"},"사이즈",-1)),ue={class:"form_toggle row-vh d-flex flex-row justify-content-between"},_e={class:"form_radio_btn"},ve=l(()=>e("label",{for:"radio-1"},"커요",-1)),ge={class:"form_radio_btn"},ce=l(()=>e("label",{for:"radio-2"},"보통이에요",-1)),me={class:"form_radio_btn"},Ce=l(()=>e("label",{for:"radio-3"},"작아요",-1)),fe={class:"mb-3"},be=l(()=>e("label",{class:"form-label"},"밝기",-1)),pe={class:"form_toggle row-vh d-flex flex-row justify-content-between"},we={class:"form_radio_btn"},he=l(()=>e("label",{for:"radio2-1"},"밝아요",-1)),ye={class:"form_radio_btn"},Be=l(()=>e("label",{for:"radio2-2"},"보통이에요",-1)),ke={class:"form_radio_btn"},Ve=l(()=>e("label",{for:"radio2-3"},"어두워요",-1)),Ue={class:"mb-3"},De=l(()=>e("label",{class:"form-label"},"색감",-1)),xe={class:"form_toggle row-vh d-flex flex-row justify-content-between"},je={class:"form_radio_btn"},Ie=l(()=>e("label",{for:"radio3-1"},"선명해요",-1)),Ae={class:"form_radio_btn"},ze=l(()=>e("label",{for:"radio3-2"},"보통이에요",-1)),Re={class:"form_radio_btn"},Ee=l(()=>e("label",{for:"radio3-3"},"흐려요",-1)),Fe={class:"mb-3"},qe=l(()=>e("label",{class:"form-label"},"두께감",-1)),Se={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Le={class:"form_radio_btn"},Me=l(()=>e("label",{for:"radio4-1"},"두꺼워요",-1)),Ne={class:"form_radio_btn"},Ge=l(()=>e("label",{for:"radio4-2"},"보통이에요",-1)),He={class:"form_radio_btn"},Oe=l(()=>e("label",{for:"radio4-3"},"얇아요",-1)),Pe={class:"mb-3"},Te=l(()=>e("label",{class:"form-label"},"배송",-1)),Je={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Ke={class:"form_radio_btn"},Qe=l(()=>e("label",{for:"radio5-1"},"빨라요",-1)),We={class:"form_radio_btn"},Xe=l(()=>e("label",{for:"radio5-2"},"아쉬워요",-1)),Ye={class:"mb-3"},Ze=l(()=>e("label",{class:"form-label"},"포장",-1)),$e={class:"form_toggle row-vh d-flex flex-row justify-content-between"},eo={class:"form_radio_btn"},oo=l(()=>e("label",{for:"radio6-1"},"꼼꼼해요",-1)),io={class:"form_radio_btn"},to=l(()=>e("label",{for:"radio6-2"},"아쉬워요",-1)),lo=l(()=>e("hr",null,null,-1)),so=l(()=>e("h2",{style:{"font-weight":"bold"}},"내용",-1)),ao={style:{"text-align":"center","margin-top":"20px"}};function ro(n,i,s,o,d,m){const u=S("router-link");return _(),v("div",null,[J,e("div",null,[e("div",null,[o.productInfo?(_(),L(u,{key:0,to:{name:"productDetailView",query:{id:o.productInfo.productId}}},{default:M(()=>[o.productInfo?(_(),v("img",{key:0,src:o.getImageUrl(o.productInfo.img),style:{width:"100px"}},null,8,K)):g("",!0)]),_:1},8,["to"])):g("",!0),o.productInfo?(_(),v("p",Q," 상품명 : "+N(o.productInfo.name),1)):g("",!0)]),W,X,e("fieldset",Y,[a(e("input",{type:"radio",id:"rating10",name:"rating",value:"5","onUpdate:modelValue":i[0]||(i[0]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),Z,a(e("input",{type:"radio",id:"rating9",name:"rating",value:"4.5","onUpdate:modelValue":i[1]||(i[1]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),$,a(e("input",{type:"radio",id:"rating8",name:"rating",value:"4","onUpdate:modelValue":i[2]||(i[2]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),ee,a(e("input",{type:"radio",id:"rating7",name:"rating",value:"3.5","onUpdate:modelValue":i[3]||(i[3]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),oe,a(e("input",{type:"radio",id:"rating6",name:"rating",value:"3","onUpdate:modelValue":i[4]||(i[4]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),ie,a(e("input",{type:"radio",id:"rating5",name:"rating",value:"2.5","onUpdate:modelValue":i[5]||(i[5]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),te,a(e("input",{type:"radio",id:"rating4",name:"rating",value:"2","onUpdate:modelValue":i[6]||(i[6]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),le,a(e("input",{type:"radio",id:"rating3",name:"rating",value:"1.5","onUpdate:modelValue":i[7]||(i[7]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),se,a(e("input",{type:"radio",id:"rating2",name:"rating",value:"1","onUpdate:modelValue":i[8]||(i[8]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),ae,a(e("input",{type:"radio",id:"rating1",name:"rating",value:"0.5","onUpdate:modelValue":i[9]||(i[9]=t=>o.review.rate=t)},null,512),[[r,o.review.rate]]),re])]),e("div",ne,[de,e("div",ue,[e("div",_e,[a(e("input",{id:"radio-1",type:"radio",name:"size",value:"1","onUpdate:modelValue":i[10]||(i[10]=t=>o.review.size=t)},null,512),[[r,o.review.size]]),ve]),e("div",ge,[a(e("input",{id:"radio-2",type:"radio",name:"size",value:"2","onUpdate:modelValue":i[11]||(i[11]=t=>o.review.size=t)},null,512),[[r,o.review.size]]),ce]),e("div",me,[a(e("input",{id:"radio-3",type:"radio",name:"size",value:"3","onUpdate:modelValue":i[12]||(i[12]=t=>o.review.size=t)},null,512),[[r,o.review.size]]),Ce])])]),e("div",fe,[be,e("div",pe,[e("div",we,[a(e("input",{id:"radio2-1",type:"radio",name:"brightness",value:"1","onUpdate:modelValue":i[13]||(i[13]=t=>o.review.brightness=t)},null,512),[[r,o.review.brightness]]),he]),e("div",ye,[a(e("input",{id:"radio2-2",type:"radio",name:"brightness",value:"2","onUpdate:modelValue":i[14]||(i[14]=t=>o.review.brightness=t)},null,512),[[r,o.review.brightness]]),Be]),e("div",ke,[a(e("input",{id:"radio2-3",type:"radio",name:"brightness",value:"3","onUpdate:modelValue":i[15]||(i[15]=t=>o.review.brightness=t)},null,512),[[r,o.review.brightness]]),Ve])])]),e("div",Ue,[De,e("div",xe,[e("div",je,[a(e("input",{id:"radio3-1",type:"radio",name:"color",value:"1","onUpdate:modelValue":i[16]||(i[16]=t=>o.review.color=t)},null,512),[[r,o.review.color]]),Ie]),e("div",Ae,[a(e("input",{id:"radio3-2",type:"radio",name:"color",value:"2","onUpdate:modelValue":i[17]||(i[17]=t=>o.review.color=t)},null,512),[[r,o.review.color]]),ze]),e("div",Re,[a(e("input",{id:"radio3-3",type:"radio",name:"color",value:"3","onUpdate:modelValue":i[18]||(i[18]=t=>o.review.color=t)},null,512),[[r,o.review.color]]),Ee])])]),e("div",Fe,[qe,e("div",Se,[e("div",Le,[a(e("input",{id:"radio4-1",type:"radio",name:"thickness",value:"1","onUpdate:modelValue":i[19]||(i[19]=t=>o.review.thickness=t)},null,512),[[r,o.review.thickness]]),Me]),e("div",Ne,[a(e("input",{id:"radio4-2",type:"radio",name:"thickness",value:"2","onUpdate:modelValue":i[20]||(i[20]=t=>o.review.thickness=t)},null,512),[[r,o.review.thickness]]),Ge]),e("div",He,[a(e("input",{id:"radio4-3",type:"radio",name:"thickness",value:"3","onUpdate:modelValue":i[21]||(i[21]=t=>o.review.thickness=t)},null,512),[[r,o.review.thickness]]),Oe])])]),e("div",Pe,[Te,e("div",Je,[e("div",Ke,[a(e("input",{id:"radio5-1",type:"radio",name:"delivery",value:"1","onUpdate:modelValue":i[22]||(i[22]=t=>o.review.delivery=t)},null,512),[[r,o.review.delivery]]),Qe]),e("div",We,[a(e("input",{id:"radio5-2",type:"radio",name:"delivery",value:"2","onUpdate:modelValue":i[23]||(i[23]=t=>o.review.delivery=t)},null,512),[[r,o.review.delivery]]),Xe])])]),e("div",Ye,[Ze,e("div",$e,[e("div",eo,[a(e("input",{id:"radio6-1",type:"radio",name:"packaging",value:"1","onUpdate:modelValue":i[24]||(i[24]=t=>o.review.packaging=t)},null,512),[[r,o.review.packaging]]),oo]),e("div",io,[a(e("input",{id:"radio6-2",type:"radio",name:"packaging",value:"2","onUpdate:modelValue":i[25]||(i[25]=t=>o.review.packaging=t)},null,512),[[r,o.review.packaging]]),to])])]),lo,so,a(e("textarea",{name:"",id:"",cols:"150",rows:"15",placeholder:"다른 회원분에게 도움이 되는 나만의 팁을 소개해 주세요.(20자 이상 작성)","onUpdate:modelValue":i[26]||(i[26]=t=>o.review.content=t)},null,512),[[G,o.review.content]]),e("div",ao,[e("button",{onClick:i[27]||(i[27]=(...t)=>o.insertReviewBtn&&o.insertReviewBtn(...t)),type:"button",style:{cursor:"pointer","font-size":"20px",padding:"10px 20px",color:"white","background-color":"black"}}," 등록 ")])])}const uo=q(T,[["render",ro],["__scopeId","data-v-b6979ec1"]]);export{uo as default};
