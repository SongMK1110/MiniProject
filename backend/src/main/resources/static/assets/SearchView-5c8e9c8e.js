import{U as m,f as h,o as _,c as o,b as e,F as i,d as v,g as n,M as b,t as r,p as f,j,_ as I,u as k,r as p,a as C,e as y,H as x,l as S,m as w,q as B,s as L,x as U,y as V,z as q,A as D,B as F,C as E,D as H,E as N,G as R,I as $,J as z,K as A}from"./index-ecfce85c.js";const l=t=>(f("data-v-08332d0b"),t=t(),j(),t),G=l(()=>e("h1",null,"검색 결과 페이지",-1)),J={key:0},K={class:"product-list"},M=["src"],O=l(()=>e("br",null,null,-1)),P={class:"product-info"},Q={class:"product-name"},T={class:"product-description"},W={class:"product-price"},X={key:1},Y=l(()=>e("h2",null,"검색 결과 없습니다.",-1)),Z=[Y],ss=m({__name:"SearchList",props:["searchCheck","productInfo","getImageUrl","addCommas"],setup(t){return(g,d)=>{const c=h("router-link");return _(),o(i,null,[G,t.searchCheck&&t.searchCheck>0?(_(),o("div",J,[e("ul",K,[(_(!0),o(i,null,v(t.productInfo,a=>(_(),o("li",{key:a.productId},[n(c,{to:{name:"productDetailView",query:{id:a.productId}}},{default:b(()=>[e("img",{src:t.getImageUrl(a.img),style:{width:"200px"}},null,8,M),O]),_:2},1032,["to"]),e("div",P,[e("div",Q,r(a.name),1),e("div",T,r(a.content),1),e("div",W,r(t.addCommas(a.price))+"원",1)])]))),128))])])):(_(),o("div",X,Z))],64)}}});const es=I(ss,[["__scopeId","data-v-08332d0b"]]),_s=m({__name:"SearchView",setup(t){function g(s){return new URL(Object.assign({"/src/assets/images/강아지이미지.jpg":S,"/src/assets/images/검정 후드티.jpg":w,"/src/assets/images/검정 후드티2.jpg":B,"/src/assets/images/검정 후드티3.jpg":L,"/src/assets/images/고양이 이미지.png":U,"/src/assets/images/나이키 바지.jpg":V,"/src/assets/images/마이페이지.png":q,"/src/assets/images/슬랙스.jpg":D,"/src/assets/images/야구 잠바.jpg":F,"/src/assets/images/양털 후리스.jpg":E,"/src/assets/images/청바지.jpg":H,"/src/assets/images/체크셔츠.jpg":N,"/src/assets/images/파란색 후드티.jpg":R,"/src/assets/images/패딩 조끼.jpg":$,"/src/assets/images/회색 후드티.jpg":z,"/src/assets/images/회색 후드티2.jpg":A})[`/src/assets/images/${s}`],self.location).href}const d=s=>s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),c=k(),a=p(),u=p();return C.get("api/searchProduct",{params:{name:c.query.search}}).then(s=>{console.log(s),a.value=s.data,u.value=s.data.length}).catch(s=>{if(console.log(s),s.response.status===500){y.push("errorForm");return}}),(s,ts)=>(_(),o(i,null,[e("header",null,[n(x)]),e("div",null,[n(es,{getImageUrl:g,productInfo:a.value,searchCheck:u.value,addCommas:d},null,8,["productInfo","searchCheck"])])],64))}});export{_s as default};
