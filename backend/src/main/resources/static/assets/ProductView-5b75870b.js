import{r as d,a as c,_ as i,o as a,c as o,b as l,F as C,d as _,t as u}from"./index-6a972f12.js";const h={name:"ProductPage",setup(){const e=d([]);return c.get("/api/productList").then(n=>{console.log(n),e.value=n.data}),{followers:e}}},f=l("h1",null,"상품",-1),B=l("thead",null,[l("tr",null,[l("th",null,"상품번호"),l("th",null,"카테고리번호"),l("th",null,"이름"),l("th",null,"가격"),l("th",null,"등록일")])],-1);function p(e,n,m,r,D,g){return a(),o("div",null,[f,l("div",null,[l("table",null,[B,l("tbody",null,[(a(!0),o(C,null,_(r.followers,(t,s)=>(a(),o("tr",{key:s},[l("td",null,u(t.productId),1),l("td",null,u(t.categoryId),1),l("td",null,u(t.name),1),l("td",null,u(t.price),1),l("td",null,u(t.rdate),1)]))),128))])])])])}const x=i(h,[["render",p]]);export{x as default};
