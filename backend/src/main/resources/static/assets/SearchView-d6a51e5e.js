import{T as p,I as h,o as _,c as o,b as a,F as d,d as v,J as m,L as b,t as i,p as f,h as j,_ as I,u as k,r as u,a as C,j as y,k as x,l as S,m as w,q as L,s as B,x as U,y as V,z as q,A as D,B as E,C as F,D as N,E as R,G as $,H as z}from"./index-23063745.js";const r=e=>(f("data-v-08332d0b"),e=e(),j(),e),A=r(()=>a("h1",null,"검색 결과 페이지",-1)),G={key:0},H={class:"product-list"},J=["src"],O=r(()=>a("br",null,null,-1)),P={class:"product-info"},T={class:"product-name"},K={class:"product-description"},M={class:"product-price"},Q={key:1},W=r(()=>a("h2",null,"검색 결과 없습니다.",-1)),X=[W],Y=p({__name:"SearchList",props:["searchCheck","productInfo","getImageUrl","addCommas"],setup(e){return(n,l)=>{const c=h("router-link");return _(),o(d,null,[A,e.searchCheck&&e.searchCheck>0?(_(),o("div",G,[a("ul",H,[(_(!0),o(d,null,v(e.productInfo,t=>(_(),o("li",{key:t.productId},[m(c,{to:{name:"productDetailView",query:{id:t.productId}}},{default:b(()=>[a("img",{src:e.getImageUrl(t.img),style:{width:"200px"}},null,8,J),O]),_:2},1032,["to"]),a("div",P,[a("div",T,i(t.name),1),a("div",K,i(t.content),1),a("div",M,i(e.addCommas(t.price))+"원",1)])]))),128))])])):(_(),o("div",Q,X))],64)}}});const Z=I(Y,[["__scopeId","data-v-08332d0b"]]),ts=p({__name:"SearchView",setup(e){function n(s){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":y,"/src/assets/images/검정 후드티.jpg":x,"/src/assets/images/검정 후드티2.jpg":S,"/src/assets/images/검정 후드티3.jpg":w,"/src/assets/images/고양이 이미지.png":L,"/src/assets/images/나이키 바지.jpg":B,"/src/assets/images/마이페이지.png":U,"/src/assets/images/슬랙스.jpg":V,"/src/assets/images/야구 잠바.jpg":q,"/src/assets/images/양털 후리스.jpg":D,"/src/assets/images/청바지.jpg":E,"/src/assets/images/체크셔츠.jpg":F,"/src/assets/images/파란색 후드티.jpg":N,"/src/assets/images/패딩 조끼.jpg":R,"/src/assets/images/회색 후드티.jpg":$,"/src/assets/images/회색 후드티2.jpg":z})[`/src/assets/images/${s}`],self.location).href}const l=s=>s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),c=k(),t=u(),g=u();return C.get("api/searchProduct",{params:{name:c.query.search}}).then(s=>{console.log(s),t.value=s.data,g.value=s.data.length}).catch(s=>{if(console.log(s),s.response.status===500){alert("서버 오류 발생");return}}),(s,ss)=>(_(),o("div",null,[m(Z,{getImageUrl:n,productInfo:t.value,searchCheck:g.value,addCommas:l},null,8,["productInfo","searchCheck"])]))}});export{ts as default};