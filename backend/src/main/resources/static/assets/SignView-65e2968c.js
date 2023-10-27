import{r as a,a as m,e as h,_ as B,o as g,c as f,b as e,w as n,v as d,g as v,f as _,p as w,h as D}from"./index-f5e2348f.js";const U={name:"SignUpView",setup(){let t=a(""),l=a(""),r=a(""),u=a(""),i=a(""),C=a(""),o=a("");return{id:t,password:l,name:u,email:i,phone:C,signUp:()=>{if(t.value===""){alert("아이디를 입력해주세요.");return}if(i.value===""){alert("이메일을 입력해주세요.");return}if(u.value===""){alert("이름을 입력해주세요.");return}if(C.value===""){alert("전화번호를 입력해주세요.");return}if(l.value===""){alert("비밀번호를 입력해주세요.");return}if(r.value===""){alert("비밀번호를 입력해주세요.");return}if(l.value!==r.value){alert("비밀번호가 일치하지 않습니다.");return}if(o.value===""){alert("성별을 선택해주세요.");return}const c={id:t.value,pw:l.value,name:u.value,email:i.value,gender:o.value,phone:C.value};console.log(c),m.post("/signup",c).then(p=>{console.log(p),p.data==="success"&&(alert("회원가입 완료"),h.push("/loginForm"))}).catch(p=>{console.error(p)})},passwordCheck:r,gender:o}}};const s=t=>(w("data-v-50dba26f"),t=t(),D(),t),V={class:"wrapper"},x=s(()=>e("div",{class:"title"},[e("h1",{style:{"font-size":"21px"}},"회원가입")],-1)),y={class:"email"},k=s(()=>e("div",{class:"error"},null,-1)),E={class:"email"},F=s(()=>e("div",{class:"error"},null,-1)),S={class:"name"},b=s(()=>e("div",{class:"error"},null,-1)),A={class:"name"},I=s(()=>e("div",{class:"error"},null,-1)),M={class:"password"},N=s(()=>e("div",{class:"error"},null,-1)),T={class:"passwordCheck"},z=s(()=>e("div",{class:"error"},null,-1)),R={class:"gender"},j=s(()=>e("div",{id:"genderError",class:"error"},null,-1)),q=s(()=>e("div",{class:"line"},[e("hr")],-1)),G=s(()=>e("button",null,"가입하기",-1)),H=[G];function J(t,l,r,u,i,C){return g(),f("div",null,[e("div",V,[x,e("div",y,[n(e("input",{type:"text",placeholder:"아이디를 입력해 주세요.","onUpdate:modelValue":l[0]||(l[0]=o=>u.id=o)},null,512),[[d,u.id]]),k]),e("div",E,[n(e("input",{type:"text",placeholder:"이메일을 입력해 주세요.","onUpdate:modelValue":l[1]||(l[1]=o=>u.email=o)},null,512),[[d,u.email]]),F]),e("div",S,[n(e("input",{type:"text",placeholder:"이름을 입력해 주세요.","onUpdate:modelValue":l[2]||(l[2]=o=>u.name=o)},null,512),[[d,u.name]]),b]),e("div",A,[n(e("input",{type:"text",placeholder:"전화번호를 입력해 주세요.","onUpdate:modelValue":l[3]||(l[3]=o=>u.phone=o)},null,512),[[d,u.phone]]),I]),e("div",M,[n(e("input",{type:"password",placeholder:"비밀번호를 입력해 주세요.","onUpdate:modelValue":l[4]||(l[4]=o=>u.password=o)},null,512),[[d,u.password]]),N]),e("div",T,[n(e("input",{type:"password",placeholder:"비밀번호를 다시 입력해 주세요.","onUpdate:modelValue":l[5]||(l[5]=o=>u.passwordCheck=o)},null,512),[[d,u.passwordCheck]]),z]),e("div",R,[n(e("input",{type:"radio",name:"gender","onUpdate:modelValue":l[6]||(l[6]=o=>u.gender=o),value:"1"},null,512),[[v,u.gender]]),_("남성 "),n(e("input",{type:"radio",name:"gender","onUpdate:modelValue":l[7]||(l[7]=o=>u.gender=o),value:"2"},null,512),[[v,u.gender]]),_("여성 "),j]),q,e("div",{class:"signUp",onClick:l[8]||(l[8]=(...o)=>u.signUp&&u.signUp(...o))},H)])])}const O=B(U,[["render",J],["__scopeId","data-v-50dba26f"]]);export{O as default};
