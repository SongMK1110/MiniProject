import{T as K,r as i,P as Q,a as m,o,c as n,b as e,G as f,t as v,w as y,v as b,i as W,j as X,k as Y,l as ee,m as se,n as te,q as ae,s as le,x as oe,y as ne,z as ie,A as ce,B as ue,C as _e,D as pe,E as de,p as re,h as ve,_ as ge}from"./index-ef125093.js";const u=x=>(re("data-v-49e5c3d5"),x=x(),ve(),x),me={class:"my-page"},fe=u(()=>e("h2",null,"마이 페이지",-1)),ye={class:"user-info"},be={class:"profile-picture"},he=["src"],ke={style:{position:"absolute"}},we={key:0},xe={key:1},Ce={style:{"margin-top":"5px"}},Pe={class:"info"},je={class:"item"},$e=u(()=>e("span",{class:"label"},"아이디:",-1)),Ie={class:"value"},Ve={class:"item"},Me=u(()=>e("span",{class:"label"},"비밀번호:",-1)),Ue={key:0,class:"value"},Ee={key:1,class:"value"},Ne={class:"password-change-fields"},ze=u(()=>e("label",{for:"current-pw"},"현재 비밀번호:",-1)),De=u(()=>e("label",{for:"new-pw"},"신규 비밀번호:",-1)),Se=u(()=>e("label",{for:"confirm-new-pw"},"신규 비밀번호 재 입력:",-1)),Ae={class:"item"},Be=u(()=>e("span",{class:"label"},"이름:",-1)),Fe={class:"value"},Te={class:"item"},Ze=u(()=>e("span",{class:"label"},"닉네임:",-1)),Re={key:0,class:"value"},qe={key:1,class:"value"},Ge={class:"password-change-fields"},Le=u(()=>e("ul",{style:{"font-size":"small"}},[e("li",null,"길이는 최대 15자 이내로 작성해주세요"),e("li",null,"중복 닉네임 불가합니다."),e("li",null,`이모티콘 및 일부 특수문자 사용 불가합니다. &<>()'/"`)],-1)),Oe={class:"item"},He=u(()=>e("span",{class:"label"},"이메일:",-1)),Je={key:0,class:"value"},Ke={key:1,class:"value"},Qe={class:"password-change-fields"},We={class:"item"},Xe=u(()=>e("span",{class:"label"},"휴대전화:",-1)),Ye={key:0,class:"value"},es={key:1,class:"value"},ss={class:"password-change-fields"},ts={class:"item"},as=u(()=>e("span",{class:"label"},"적립금:",-1)),ls={class:"value"},os=K({__name:"MyPageView",setup(x){function S(t){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":W,"/src/assets/images/검정 후드티.jpg":X,"/src/assets/images/검정 후드티2.jpg":Y,"/src/assets/images/검정 후드티3.jpg":ee,"/src/assets/images/고양이 이미지.png":se,"/src/assets/images/나이키 바지.jpg":te,"/src/assets/images/마이페이지.png":ae,"/src/assets/images/슬랙스.jpg":le,"/src/assets/images/야구 잠바.jpg":oe,"/src/assets/images/양털 후리스.jpg":ne,"/src/assets/images/청바지.jpg":ie,"/src/assets/images/체크셔츠.jpg":ce,"/src/assets/images/파란색 후드티.jpg":ue,"/src/assets/images/패딩 조끼.jpg":_e,"/src/assets/images/회색 후드티.jpg":pe,"/src/assets/images/회색 후드티2.jpg":de})[`/src/assets/images/${t}`],self.location).href}function A(t){return"*".repeat(t.length)}const c=i(),h=i(!1),k=i(),g=i(),w=i(),C=i(!1),p=i(),P=i(!1),d=i(),j=i(!1),_=i(),$=i(null),I=i(!1);let r=null;const B=()=>{$.value&&$.value.click()},F=t=>{r=t.target.files[0],r&&console.log("선택된 파일:",r.name)},T=()=>{if(r){console.log("이미지 저장",r);const t=new FormData;t.append("uploadFile",r),console.log(r.files),m.post("api/uploadImg",t,{headers:{"Content-Type":"multipart/form-data"}}).then(s=>{console.log(s)}).catch(s=>{console.log(s)})}else console.log("파일을 선택하세요.")},Z=()=>{var s;if(((s=c.value)==null?void 0:s.pw)!==k.value){alert("현재 비밀번호가 다릅니다."),k.value="";return}if(g.value!==w.value){alert("신규 비밀번호가 다릅니다."),g.value="",w.value="";return}window.confirm("변경 하시겠습니까?")&&m.post("api/updateMypage",{pw:g.value}).then(a=>{console.log(a),a.data==="success"&&location.reload()}).catch(a=>{console.log(a)})},R=()=>{h.value=!1,k.value="",g.value="",w.value=""},q=()=>{C.value=!1,p.value=""},G=()=>{if(window.confirm("변경 하시겠습니까?")){const s=/[&<>()'"/]/g;if(p.value&&p.value.match(s)){alert("이모티콘 및 일부 특수문자 사용 불가합니다."),p.value="";return}m.post("api/updateMypage",{nickname:p.value}).then(a=>{if(a.data==="success")location.reload();else if(a.data==="duplication"){alert("중복된 닉네임 입니다.");return}}).catch(a=>{console.log(a)})}},L=()=>{P.value=!1,d.value=""},O=()=>{const t=window.confirm("변경 하시겠습니까?"),s=/^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9.-]+$/;if(t){if(d.value&&s.test(d.value)==!1){alert("이메일형식이 올바르지 않습니다."),d.value="";return}m.post("api/updateMypage",{email:d.value}).then(a=>{a.data==="success"&&location.reload()}).catch(a=>{console.log(a)})}},H=()=>{j.value=!1,_.value=""},J=()=>{const t=window.confirm("변경 하시겠습니까?"),s=/01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;if(t){if(_.value&&s.test(_.value)==!1){alert("휴대폰형식이 올바르지 않습니다."),_.value="";return}m.post("api/updateMypage",{phone:_.value}).then(a=>{a.data==="success"&&location.reload()}).catch(a=>{console.log(a)})}};return Q(_,t=>{t&&(_.value=t.replace(/[^0-9]/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/,"$1-$2-$3").replace(/(--)$/,""))}),m.get("api/selectMember").then(t=>{c.value=t.data}).catch(t=>{console.log(t)}),(t,s)=>{var a,V,M,U,E,N,z,D;return o(),n("div",me,[fe,e("div",ye,[e("div",be,[c.value?(o(),n("img",{key:0,src:S((a=c.value)==null?void 0:a.img),alt:"프로필 사진"},null,8,he)):f("",!0),e("div",ke,[I.value?(o(),n("div",xe,[e("button",{type:"button",onClick:B},"선택"),e("div",Ce,[e("button",{type:"button",onClick:T,style:{"margin-right":"5px"}},"저장"),e("button",{type:"button",onClick:s[1]||(s[1]=l=>I.value=!1)},"취소")]),e("input",{type:"file",ref_key:"fileInput",ref:$,style:{display:"none"},onChange:F},null,544)])):(o(),n("div",we,[e("button",{type:"button",onClick:s[0]||(s[0]=l=>I.value=!0)},"변경")]))])]),e("div",Pe,[e("div",je,[$e,e("span",Ie,v((V=c.value)==null?void 0:V.id),1)]),e("div",Ve,[Me,c.value&&!h.value?(o(),n("span",Ue,v(A((M=c.value)==null?void 0:M.pw)),1)):h.value?(o(),n("span",Ee,[e("div",Ne,[ze,y(e("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=l=>k.value=l)},null,512),[[b,k.value]]),De,y(e("input",{type:"password","onUpdate:modelValue":s[3]||(s[3]=l=>g.value=l)},null,512),[[b,g.value]]),Se,y(e("input",{type:"password","onUpdate:modelValue":s[4]||(s[4]=l=>w.value=l)},null,512),[[b,w.value]])]),e("div",{style:{"text-align":"center"}},[e("button",{type:"button",style:{margin:"5px"},onClick:R},"취소"),e("button",{type:"button",style:{margin:"5px"},onClick:Z},"완료")])])):f("",!0),h.value?f("",!0):(o(),n("button",{key:2,type:"button",onClick:s[5]||(s[5]=l=>h.value=!0)},"변경"))]),e("div",Ae,[Be,e("span",Fe,v((U=c.value)==null?void 0:U.name),1)]),e("div",Te,[Ze,C.value?(o(),n("span",qe,[e("div",Ge,[Le,y(e("input",{type:"text","onUpdate:modelValue":s[6]||(s[6]=l=>p.value=l),placeholder:"닉네임 입력(최대 15자)",maxlength:"15"},null,512),[[b,p.value]])]),e("div",{style:{"text-align":"center"}},[e("button",{type:"button",style:{margin:"5px"},onClick:q},"취소"),e("button",{type:"button",style:{margin:"5px"},onClick:G},"완료")])])):(o(),n("span",Re,v((E=c.value)==null?void 0:E.nickname),1)),C.value?f("",!0):(o(),n("button",{key:2,type:"button",onClick:s[7]||(s[7]=l=>C.value=!0)},"변경"))]),e("div",Oe,[He,P.value?(o(),n("span",Ke,[e("div",Qe,[y(e("input",{type:"email","onUpdate:modelValue":s[8]||(s[8]=l=>d.value=l),placeholder:"이메일을 입력해주세요"},null,512),[[b,d.value]])]),e("div",{style:{"text-align":"center"}},[e("button",{type:"button",style:{margin:"5px"},onClick:L},"취소"),e("button",{type:"button",style:{margin:"5px"},onClick:O},"완료")])])):(o(),n("span",Je,v((N=c.value)==null?void 0:N.email),1)),P.value?f("",!0):(o(),n("button",{key:2,type:"button",onClick:s[9]||(s[9]=l=>P.value=!0)},"변경"))]),e("div",We,[Xe,j.value?(o(),n("span",es,[e("div",ss,[y(e("input",{type:"email","onUpdate:modelValue":s[10]||(s[10]=l=>_.value=l),maxlength:"13",placeholder:"휴대폰 번호를 입력해주세요"},null,512),[[b,_.value]])]),e("div",{style:{"text-align":"center"}},[e("button",{type:"button",style:{margin:"5px"},onClick:H},"취소"),e("button",{type:"button",style:{margin:"5px"},onClick:J},"완료")])])):(o(),n("span",Ye,v((z=c.value)==null?void 0:z.phone),1)),j.value?f("",!0):(o(),n("button",{key:2,type:"button",onClick:s[11]||(s[11]=l=>j.value=!0)},"변경"))]),e("div",ts,[as,e("span",ls,v((D=c.value)==null?void 0:D.reserves)+"원",1)])])])])}}});const is=ge(os,[["__scopeId","data-v-49e5c3d5"]]);export{is as default};
