import{r as a,e as C,a as g,_ as c,o as f,c as m,b as l,f as s,w as r,v as d}from"./index-ea569c00.js";const w={name:"LoginView",setup(){let u=a(""),o=a("");return{id:u,password:o,login:()=>{g.post("/api/login",{id:u.value,pw:o.value}).then(e=>{if(console.log(e),e.data==="fail"){alert("아이디 또는 비밀번호가 잘못 되었습니다.");return}const i=e.data;localStorage.setItem("token",i),location.href="/"}).catch(e=>{console.error(e)})},signup:()=>{C.push("signForm")}}}},B=l("h1",null,"로그인 페이지",-1);function v(u,o,p,n,e,i){return f(),m("div",null,[B,l("div",null,[s(" 아이디 : "),r(l("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>n.id=t),type:"text"},null,512),[[d,n.id]]),s(" 비밀번호 : "),r(l("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>n.password=t),type:"password"},null,512),[[d,n.password]]),l("button",{onClick:o[2]||(o[2]=(...t)=>n.login&&n.login(...t))},"로그인"),l("button",{onClick:o[3]||(o[3]=(...t)=>n.signup&&n.signup(...t))},"회원가입")])])}const D=c(w,[["render",v]]);export{D as default};
