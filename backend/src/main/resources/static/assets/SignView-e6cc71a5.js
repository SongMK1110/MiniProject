import{r as n,a as _,e as g,_ as B,o as f,c as w,b as e,w as a,v as d,g as h,f as m,p as D,h as U}from"./index-d96fb694.js";const V={name:"SignUpView",setup(){let t=n(""),l=n(""),i=n(""),o=n(""),C=n(""),p=n(""),u=n("");return{id:t,password:l,name:o,email:C,phone:p,signUp:()=>{if(t.value===""){alert("아이디를 입력해주세요.");return}if(C.value===""){alert("이메일을 입력해주세요.");return}if(o.value===""){alert("이름을 입력해주세요.");return}if(p.value===""){alert("전화번호를 입력해주세요.");return}if(l.value===""){alert("비밀번호를 입력해주세요.");return}if(i.value===""){alert("비밀번호를 입력해주세요.");return}if(l.value!==i.value){alert("비밀번호가 일치하지 않습니다.");return}if(u.value===""){alert("성별을 선택해주세요.");return}const v={id:t.value,pw:l.value,name:o.value,email:C.value,gender:u.value,phone:p.value};console.log(v),_.post("/api/idCheck",{id:t.value}).then(r=>{if(console.log(r),r.data==="duplication")return alert("중복된 아이디 입니다."),!1;r.data==="success"&&_.post("/api/signup",v).then(c=>{console.log(c),c.data==="success"&&(alert("회원가입 완료"),g.push("/loginForm"))}).catch(c=>{console.error(c)})}).catch(r=>{console.error(r)})},passwordCheck:i,gender:u}}};const s=t=>(D("data-v-1d8a2e65"),t=t(),U(),t),x={class:"wrapper"},y=s(()=>e("div",{class:"title"},[e("h1",{style:{"font-size":"21px"}},"회원가입")],-1)),k={class:"email"},E=s(()=>e("div",{class:"error"},null,-1)),F={class:"email"},S=s(()=>e("div",{class:"error"},null,-1)),A={class:"name"},I=s(()=>e("div",{class:"error"},null,-1)),b={class:"name"},M=s(()=>e("div",{class:"error"},null,-1)),N={class:"password"},T=s(()=>e("div",{class:"error"},null,-1)),z={class:"passwordCheck"},R=s(()=>e("div",{class:"error"},null,-1)),j={class:"gender"},q=s(()=>e("div",{id:"genderError",class:"error"},null,-1)),G=s(()=>e("div",{class:"line"},[e("hr")],-1)),H=s(()=>e("button",null,"가입하기",-1)),J=[H];function K(t,l,i,o,C,p){return f(),w("div",null,[e("div",x,[y,e("div",k,[a(e("input",{type:"text",placeholder:"아이디를 입력해 주세요.","onUpdate:modelValue":l[0]||(l[0]=u=>o.id=u)},null,512),[[d,o.id]]),E]),e("div",F,[a(e("input",{type:"text",placeholder:"이메일을 입력해 주세요.","onUpdate:modelValue":l[1]||(l[1]=u=>o.email=u)},null,512),[[d,o.email]]),S]),e("div",A,[a(e("input",{type:"text",placeholder:"이름을 입력해 주세요.","onUpdate:modelValue":l[2]||(l[2]=u=>o.name=u)},null,512),[[d,o.name]]),I]),e("div",b,[a(e("input",{type:"text",placeholder:"전화번호를 입력해 주세요.","onUpdate:modelValue":l[3]||(l[3]=u=>o.phone=u)},null,512),[[d,o.phone]]),M]),e("div",N,[a(e("input",{type:"password",placeholder:"비밀번호를 입력해 주세요.","onUpdate:modelValue":l[4]||(l[4]=u=>o.password=u)},null,512),[[d,o.password]]),T]),e("div",z,[a(e("input",{type:"password",placeholder:"비밀번호를 다시 입력해 주세요.","onUpdate:modelValue":l[5]||(l[5]=u=>o.passwordCheck=u)},null,512),[[d,o.passwordCheck]]),R]),e("div",j,[a(e("input",{type:"radio",name:"gender","onUpdate:modelValue":l[6]||(l[6]=u=>o.gender=u),value:"1"},null,512),[[h,o.gender]]),m("남성 "),a(e("input",{type:"radio",name:"gender","onUpdate:modelValue":l[7]||(l[7]=u=>o.gender=u),value:"2"},null,512),[[h,o.gender]]),m("여성 "),q]),G,e("div",{class:"signUp",onClick:l[8]||(l[8]=(...u)=>o.signUp&&o.signUp(...u))},J)])])}const P=B(V,[["render",K],["__scopeId","data-v-1d8a2e65"]]);export{P as default};
