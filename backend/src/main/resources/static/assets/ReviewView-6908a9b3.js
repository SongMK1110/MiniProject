import{u as C,r as f,L as b,a as g,i as w,j as p,k as h,l as y,m as B,n as k,q as V,s as U,x as D,y as x,z as j,A as I,e as A,_ as z,D as R,o as _,c as v,b as e,M as E,H as F,B as c,t as q,w as n,g as a,v as S,p as M,h as L}from"./index-c78a98b4.js";function N(s){return new URL(Object.assign({"/src/assets/images/검정 후드티.jpg":w,"/src/assets/images/검정 후드티2.jpg":p,"/src/assets/images/검정 후드티3.jpg":h,"/src/assets/images/나이키 바지.jpg":y,"/src/assets/images/슬랙스.jpg":B,"/src/assets/images/야구 잠바.jpg":k,"/src/assets/images/양털 후리스.jpg":V,"/src/assets/images/청바지.jpg":U,"/src/assets/images/체크셔츠.jpg":D,"/src/assets/images/패딩 조끼.jpg":x,"/src/assets/images/회색 후드티.jpg":j,"/src/assets/images/회색 후드티2.jpg":I})[`/src/assets/images/${s}`],self.location).href}const H={name:"ReviewView",setup(){const s=C(),i=f(),r=b({rate:0,size:0,brightness:0,color:0,thickness:0,delivery:0,packaging:0,content:""});return g.get("api/reviewProduct",{params:{productId:s.query.productId}}).then(d=>{i.value=d.data}).catch(d=>{console.log(d)}),{route:s,productInfo:i,getImageUrl:N,review:r,insertReviewBtn:()=>{if(r.rate===0){alert("별점을 입력해주세요");return}if(r.size===0){alert("사이즈를 입력해주세요");return}if(r.brightness===0){alert("밝기를 입력해주세요");return}if(r.color===0){alert("색감을 입력해주세요");return}if(r.thickness===0){alert("두께감을 입력해주세요");return}if(r.delivery===0){alert("배송을 입력해주세요");return}if(r.packaging===0){alert("포장을 입력해주세요");return}if(r.content===""){alert("내용을 입력해주세요");return}if(r.content.length<20){alert("20자 이상 입력해주세요");return}console.log(r.rate),console.log(r.size),console.log(r.brightness),console.log(r.color),console.log(r.thickness),console.log(r.delivery),console.log(r.packaging),console.log(r.content),console.log(s.query.productId);const d={productId:s.query.productId,content:r.content,rate:r.rate,size:r.size,brightness:r.brightness,color:r.color,thickness:r.thickness,delivery:r.delivery,packaging:r.packaging};window.confirm("등록하시겠습니까?")&&g.post("api/insertReview",d).then(u=>{console.log(u),u.data==="success"&&A.push({name:"productDetailView",query:{id:s.query.productId}})}).catch(u=>{console.log(u)})}}}};const l=s=>(M("data-v-b6979ec1"),s=s(),L(),s),O=l(()=>e("h1",null,"후기 작성",-1)),P=["src"],T={key:1,style:{display:"inline","padding-left":"10px"}},G=l(()=>e("hr",null,null,-1)),J=l(()=>e("div",null,[e("h2",{style:{"font-weight":"bold"}},"별점")],-1)),K={class:"rate"},Q=l(()=>e("label",{for:"rating10",title:"5점"},null,-1)),W=l(()=>e("label",{class:"half",for:"rating9",title:"4.5점"},null,-1)),X=l(()=>e("label",{for:"rating8",title:"4점"},null,-1)),Y=l(()=>e("label",{class:"half",for:"rating7",title:"3.5점"},null,-1)),Z=l(()=>e("label",{for:"rating6",title:"3점"},null,-1)),$=l(()=>e("label",{class:"half",for:"rating5",title:"2.5점"},null,-1)),ee=l(()=>e("label",{for:"rating4",title:"2점"},null,-1)),oe=l(()=>e("label",{class:"half",for:"rating3",title:"1.5점"},null,-1)),ie=l(()=>e("label",{for:"rating2",title:"1점"},null,-1)),te=l(()=>e("label",{class:"half",for:"rating1",title:"0.5점"},null,-1)),le={class:"mb-3"},re=l(()=>e("label",{class:"form-label"},"사이즈",-1)),ne={class:"form_toggle row-vh d-flex flex-row justify-content-between"},ae={class:"form_radio_btn"},se=l(()=>e("label",{for:"radio-1"},"커요",-1)),de={class:"form_radio_btn"},ue=l(()=>e("label",{for:"radio-2"},"보통이에요",-1)),_e={class:"form_radio_btn"},ve=l(()=>e("label",{for:"radio-3"},"작아요",-1)),ce={class:"mb-3"},ge=l(()=>e("label",{class:"form-label"},"밝기",-1)),me={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Ce={class:"form_radio_btn"},fe=l(()=>e("label",{for:"radio2-1"},"밝아요",-1)),be={class:"form_radio_btn"},we=l(()=>e("label",{for:"radio2-2"},"보통이에요",-1)),pe={class:"form_radio_btn"},he=l(()=>e("label",{for:"radio2-3"},"어두워요",-1)),ye={class:"mb-3"},Be=l(()=>e("label",{class:"form-label"},"색감",-1)),ke={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Ve={class:"form_radio_btn"},Ue=l(()=>e("label",{for:"radio3-1"},"선명해요",-1)),De={class:"form_radio_btn"},xe=l(()=>e("label",{for:"radio3-2"},"보통이에요",-1)),je={class:"form_radio_btn"},Ie=l(()=>e("label",{for:"radio3-3"},"흐려요",-1)),Ae={class:"mb-3"},ze=l(()=>e("label",{class:"form-label"},"두께감",-1)),Re={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Ee={class:"form_radio_btn"},Fe=l(()=>e("label",{for:"radio4-1"},"두꺼워요",-1)),qe={class:"form_radio_btn"},Se=l(()=>e("label",{for:"radio4-2"},"보통이에요",-1)),Me={class:"form_radio_btn"},Le=l(()=>e("label",{for:"radio4-3"},"얇아요",-1)),Ne={class:"mb-3"},He=l(()=>e("label",{class:"form-label"},"배송",-1)),Oe={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Pe={class:"form_radio_btn"},Te=l(()=>e("label",{for:"radio5-1"},"빨라요",-1)),Ge={class:"form_radio_btn"},Je=l(()=>e("label",{for:"radio5-2"},"아쉬워요",-1)),Ke={class:"mb-3"},Qe=l(()=>e("label",{class:"form-label"},"포장",-1)),We={class:"form_toggle row-vh d-flex flex-row justify-content-between"},Xe={class:"form_radio_btn"},Ye=l(()=>e("label",{for:"radio6-1"},"꼼꼼해요",-1)),Ze={class:"form_radio_btn"},$e=l(()=>e("label",{for:"radio6-2"},"아쉬워요",-1)),eo=l(()=>e("hr",null,null,-1)),oo=l(()=>e("h2",{style:{"font-weight":"bold"}},"내용",-1)),io={style:{"text-align":"center","margin-top":"20px"}};function to(s,i,r,o,d,m){const u=R("router-link");return _(),v("div",null,[O,e("div",null,[e("div",null,[o.productInfo?(_(),E(u,{key:0,to:{name:"productDetailView",query:{id:o.productInfo.productId}}},{default:F(()=>[o.productInfo?(_(),v("img",{key:0,src:o.getImageUrl(o.productInfo.img),style:{width:"100px"}},null,8,P)):c("",!0)]),_:1},8,["to"])):c("",!0),o.productInfo?(_(),v("p",T," 상품명 : "+q(o.productInfo.name),1)):c("",!0)]),G,J,e("fieldset",K,[n(e("input",{type:"radio",id:"rating10",name:"rating",value:"5","onUpdate:modelValue":i[0]||(i[0]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),Q,n(e("input",{type:"radio",id:"rating9",name:"rating",value:"4.5","onUpdate:modelValue":i[1]||(i[1]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),W,n(e("input",{type:"radio",id:"rating8",name:"rating",value:"4","onUpdate:modelValue":i[2]||(i[2]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),X,n(e("input",{type:"radio",id:"rating7",name:"rating",value:"3.5","onUpdate:modelValue":i[3]||(i[3]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),Y,n(e("input",{type:"radio",id:"rating6",name:"rating",value:"3","onUpdate:modelValue":i[4]||(i[4]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),Z,n(e("input",{type:"radio",id:"rating5",name:"rating",value:"2.5","onUpdate:modelValue":i[5]||(i[5]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),$,n(e("input",{type:"radio",id:"rating4",name:"rating",value:"2","onUpdate:modelValue":i[6]||(i[6]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),ee,n(e("input",{type:"radio",id:"rating3",name:"rating",value:"1.5","onUpdate:modelValue":i[7]||(i[7]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),oe,n(e("input",{type:"radio",id:"rating2",name:"rating",value:"1","onUpdate:modelValue":i[8]||(i[8]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),ie,n(e("input",{type:"radio",id:"rating1",name:"rating",value:"0.5","onUpdate:modelValue":i[9]||(i[9]=t=>o.review.rate=t)},null,512),[[a,o.review.rate]]),te])]),e("div",le,[re,e("div",ne,[e("div",ae,[n(e("input",{id:"radio-1",type:"radio",name:"size",value:"1","onUpdate:modelValue":i[10]||(i[10]=t=>o.review.size=t)},null,512),[[a,o.review.size]]),se]),e("div",de,[n(e("input",{id:"radio-2",type:"radio",name:"size",value:"2","onUpdate:modelValue":i[11]||(i[11]=t=>o.review.size=t)},null,512),[[a,o.review.size]]),ue]),e("div",_e,[n(e("input",{id:"radio-3",type:"radio",name:"size",value:"3","onUpdate:modelValue":i[12]||(i[12]=t=>o.review.size=t)},null,512),[[a,o.review.size]]),ve])])]),e("div",ce,[ge,e("div",me,[e("div",Ce,[n(e("input",{id:"radio2-1",type:"radio",name:"brightness",value:"1","onUpdate:modelValue":i[13]||(i[13]=t=>o.review.brightness=t)},null,512),[[a,o.review.brightness]]),fe]),e("div",be,[n(e("input",{id:"radio2-2",type:"radio",name:"brightness",value:"2","onUpdate:modelValue":i[14]||(i[14]=t=>o.review.brightness=t)},null,512),[[a,o.review.brightness]]),we]),e("div",pe,[n(e("input",{id:"radio2-3",type:"radio",name:"brightness",value:"3","onUpdate:modelValue":i[15]||(i[15]=t=>o.review.brightness=t)},null,512),[[a,o.review.brightness]]),he])])]),e("div",ye,[Be,e("div",ke,[e("div",Ve,[n(e("input",{id:"radio3-1",type:"radio",name:"color",value:"1","onUpdate:modelValue":i[16]||(i[16]=t=>o.review.color=t)},null,512),[[a,o.review.color]]),Ue]),e("div",De,[n(e("input",{id:"radio3-2",type:"radio",name:"color",value:"2","onUpdate:modelValue":i[17]||(i[17]=t=>o.review.color=t)},null,512),[[a,o.review.color]]),xe]),e("div",je,[n(e("input",{id:"radio3-3",type:"radio",name:"color",value:"3","onUpdate:modelValue":i[18]||(i[18]=t=>o.review.color=t)},null,512),[[a,o.review.color]]),Ie])])]),e("div",Ae,[ze,e("div",Re,[e("div",Ee,[n(e("input",{id:"radio4-1",type:"radio",name:"thickness",value:"1","onUpdate:modelValue":i[19]||(i[19]=t=>o.review.thickness=t)},null,512),[[a,o.review.thickness]]),Fe]),e("div",qe,[n(e("input",{id:"radio4-2",type:"radio",name:"thickness",value:"2","onUpdate:modelValue":i[20]||(i[20]=t=>o.review.thickness=t)},null,512),[[a,o.review.thickness]]),Se]),e("div",Me,[n(e("input",{id:"radio4-3",type:"radio",name:"thickness",value:"3","onUpdate:modelValue":i[21]||(i[21]=t=>o.review.thickness=t)},null,512),[[a,o.review.thickness]]),Le])])]),e("div",Ne,[He,e("div",Oe,[e("div",Pe,[n(e("input",{id:"radio5-1",type:"radio",name:"delivery",value:"1","onUpdate:modelValue":i[22]||(i[22]=t=>o.review.delivery=t)},null,512),[[a,o.review.delivery]]),Te]),e("div",Ge,[n(e("input",{id:"radio5-2",type:"radio",name:"delivery",value:"2","onUpdate:modelValue":i[23]||(i[23]=t=>o.review.delivery=t)},null,512),[[a,o.review.delivery]]),Je])])]),e("div",Ke,[Qe,e("div",We,[e("div",Xe,[n(e("input",{id:"radio6-1",type:"radio",name:"packaging",value:"1","onUpdate:modelValue":i[24]||(i[24]=t=>o.review.packaging=t)},null,512),[[a,o.review.packaging]]),Ye]),e("div",Ze,[n(e("input",{id:"radio6-2",type:"radio",name:"packaging",value:"2","onUpdate:modelValue":i[25]||(i[25]=t=>o.review.packaging=t)},null,512),[[a,o.review.packaging]]),$e])])]),eo,oo,n(e("textarea",{name:"",id:"",cols:"150",rows:"15",placeholder:"다른 회원분에게 도움이 되는 나만의 팁을 소개해 주세요.(20자 이상 작성)","onUpdate:modelValue":i[26]||(i[26]=t=>o.review.content=t)},null,512),[[S,o.review.content]]),e("div",io,[e("button",{onClick:i[27]||(i[27]=(...t)=>o.insertReviewBtn&&o.insertReviewBtn(...t)),type:"button",style:{cursor:"pointer","font-size":"20px",padding:"10px 20px",color:"white","background-color":"black"}}," 등록 ")])])}const ro=z(H,[["render",to],["__scopeId","data-v-b6979ec1"]]);export{ro as default};
