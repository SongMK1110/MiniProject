import{r as c,a as n,_ as i,o as C,c as l,b as u,F as r,d as _,C as p,f,t as D,p as B,h as b}from"./index-8cf32698.js";const v={setup(){const t=c([]);return n.get("/api/selectAddrList").then(e=>{console.log(e.data),t.value=e.data}).catch(e=>{console.log(e)}),{addrList:t}}};const a=t=>(B("data-v-c3d4af7b"),t=t(),b(),t),h={class:"container"},A=a(()=>u("h1",null,"Order / Payment",-1)),m=a(()=>u("legend",null,"배송지 정보",-1)),F=a(()=>u("label",{for:"addr",class:"title"},"배송지",-1)),y=a(()=>u("input",{type:"radio",name:"chk_info"},null,-1)),g=a(()=>u("button",{type:"button"},"배송지 변경",-1)),x=p('<li data-v-c3d4af7b><label for="tel2" class="title" data-v-c3d4af7b>이름 / 연락처</label><p data-v-c3d4af7b>이름 | 전화번호</p></li><li data-v-c3d4af7b><label for="comment" class="title" data-v-c3d4af7b>주소</label><p data-v-c3d4af7b>주소임</p></li><li data-v-c3d4af7b><label for="comment" class="title" data-v-c3d4af7b>배송 요청사항</label><select style="width:300px;" data-v-c3d4af7b><option value="0" data-v-c3d4af7b>배송 시 요청사항을 선택해주세요</option><option value="1" data-v-c3d4af7b>부재 시 경비실에 맡겨주세요</option><option value="2" data-v-c3d4af7b>부재 시 택배함에 넣어주세요</option><option value="3" data-v-c3d4af7b>부재 시 집 앞에 놔주세요</option></select></li>',3),E=a(()=>u("fieldset",null,[u("legend",null,"주문 정보")],-1)),S=a(()=>u("div",{class:"centered"},[u("input",{type:"submit",value:"주문하기"})],-1));function V(t,e,k,o,w,I){return C(),l("div",h,[A,u("form",null,[u("fieldset",null,[m,u("ul",null,[u("li",null,[F,(C(!0),l(r,null,_(o.addrList,(d,s)=>(C(),l("span",{key:s},[u("label",null,[y,f(" "+D(d.name),1)])]))),128)),g]),x])]),E,S])])}const N=i(v,[["render",V],["__scopeId","data-v-c3d4af7b"]]);export{N as default};