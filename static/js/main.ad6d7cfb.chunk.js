(this["webpackJsonphotelist-app"]=this["webpackJsonphotelist-app"]||[]).push([[0],{141:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(20),r=c.n(n),l=(c(84),c(85),c(86),c(63)),i=c.n(l),j=c(68),o=c(25),h=c(3),d=a.a.createContext();function b(e){var t=e.children,c=Object(s.useState)(null),a=Object(o.a)(c,2),n=a[0],r=a[1],l=Object(s.useState)(null),b=Object(o.a)(l,2),x=b[0],u=b[1],O=Object(s.useState)(null),m=Object(o.a)(O,2),p=m[0],f=m[1],g=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://fake-hotel-api.herokuapp.com/api/hotels");case 3:if(200===(t=e.sent).status){e.next=6;break}throw Error("Oops, error! Error code: ".concat(t.status));case 6:return e.next=8,t.json();case 8:c=e.sent,r(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){g()}),[]),Object(s.useEffect)((function(){if(null!==n){var e=n.filter((function(e){return e.id===x}));f(e)}}),[x]),Object(h.jsx)(d.Provider,{value:{data:n,hotel:x,setHotel:u,hotelData:p},children:t})}var x=c(22),u=c(11);function O(){var e=Object(u.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var m=c(149),p=c(156),f=c(155),g=c(72);function v(){return Object(h.jsx)("header",{className:"py-2",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(p.a,{expand:"lg",bg:"light",variant:"light",children:[Object(h.jsx)(p.a.Brand,{className:"font-weight-bold",children:Object(h.jsx)(x.b,{to:"/",children:"Hotelist"})}),Object(h.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(p.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-between flex-grow-1",children:[Object(h.jsxs)(f.a,{className:"align-self-center",children:[Object(h.jsx)(f.a.Link,{children:"Places to Stay"}),Object(h.jsx)(f.a.Link,{children:"Experiences"}),Object(h.jsx)(f.a.Link,{children:"Online Experiences"})]}),Object(h.jsx)(f.a,{children:Object(h.jsx)(g.a,{style:{width:"30px",height:"30px"}})})]})]})})})}var k=c(150);function w(){return Object(h.jsx)("div",{className:"jumbotron-fluid d-flex align-items-center",style:{height:"40vh",background:"url('https://images.unsplash.com/photo-1501601962015-7f11b4445c43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80') no-repeat center/cover"},children:Object(h.jsxs)(m.a,{style:{color:"white"},children:[Object(h.jsx)("h1",{children:"The Greatest Outdoors"}),Object(h.jsx)("p",{children:"Wishlists curated by Hotelist."}),Object(h.jsx)(k.a,{variant:"dark",children:"Get Inspired"})]})})}var y=c(157);function N(e){return Object(h.jsx)(y.a,{className:"h-100",style:{width:"100%"},children:Object(h.jsxs)(x.b,{to:"/hotel/".concat(e.hotel.id),children:[Object(h.jsx)(y.a.Img,{variant:"top",src:e.hotel.images[0]}),Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(y.a.Title,{children:e.hotel.name}),Object(h.jsxs)(y.a.Subtitle,{className:"font-weight-light",style:{fontSize:"0.8em"},children:[e.hotel.city,", ",e.hotel.country]})]})]})})}var D=c(151),S=c(73);function I(){var e,t,c=Object(s.useContext)(d).data;return null===c?"loading":Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsx)(m.a,{className:"card-container",children:Object(h.jsx)(D.a,{children:(e=5,t=c,t.filter((function(t){return t.stars===e}))).slice(0,20).map((function(e){return Object(h.jsx)(S.a,{md:6,lg:3,className:"card-column",children:Object(h.jsx)(N,{hotel:e})},e.id)}))})})]})}var C=c(40),E=function(){return Object(h.jsxs)(C.a,{fade:!0,children:[Object(h.jsx)(C.a.Item,{children:Object(h.jsx)("img",{className:"d-block w-100",src:"https://images.trvl-media.com/hotels/1000000/10000/1900/1801/4a428f73.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",alt:"First slide"})}),Object(h.jsx)(C.a.Item,{children:Object(h.jsx)("img",{className:"d-block w-100",src:"https://images.trvl-media.com/hotels/1000000/10000/1900/1801/44ce7e03.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",alt:"Second slide"})}),Object(h.jsx)(C.a.Item,{children:Object(h.jsx)("img",{className:"d-block w-100",src:"https://images.trvl-media.com/hotels/1000000/10000/1900/1801/2600fdb7.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",alt:"Third slide"})})]})},F=c(76),G=c(0),H=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"info-top-container",children:[Object(h.jsx)("h1",{className:"mb-0",children:e.hotel[0].name}),Object(h.jsxs)("p",{className:"mb-0 text-right",children:[e.hotel[0].city,", ",e.hotel[0].country]})]}),Object(h.jsx)("div",{className:"rating-container mb-3",children:Object(F.a)(Array(5)).map((function(t,c){var s=e.hotel[0].stars>=c?"#FFD700":"rgba(0, 0, 0, .125)";return Object(h.jsx)(G.b.Provider,{value:{color:s},children:Object(h.jsx)(g.b,{},c)},c)}))}),Object(h.jsx)("p",{children:e.hotel[0].description}),Object(h.jsxs)("p",{className:"font-weight-bold mb-0",children:["rating: ",e.hotel[0].rating.toFixed(2)]})]})},T=c(154),B=c(66),L=c.n(B),M=(c(97),function(e){var t=Object(s.useState)(null),c=Object(o.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(null),l=Object(o.a)(r,2),i=l[0],j=l[1],d=Object(s.useState)(0),b=Object(o.a)(d,2),x=b[0],u=b[1];return Object(h.jsxs)("div",{className:"checkout-container p-4",children:[Object(h.jsxs)("h3",{className:"mb-3",children:[Object(h.jsxs)("span",{className:"fw-bold",children:["$",e.hotel[0].price]})," / night"]}),Object(h.jsxs)(T.a,{onSubmit:function(t){if(t.preventDefault(),""===t.target.checkin.value)alert("please enter the check-in date");else if(""===t.target.checkout.value)alert("please enter the checkout date");else if(t.target.checkin.value>=t.target.checkout.value)alert("please check the dates");else{var c=new Date(t.target.checkin.value),s=new Date(t.target.checkout.value),a=Math.abs(s-c),n=Math.ceil(a/864e5);u(e.hotel[0].price*n)}},children:[Object(h.jsxs)(T.a.Row,{children:[Object(h.jsxs)(T.a.Group,{as:S.a,controlId:"formGridCheckIn",children:[Object(h.jsx)(T.a.Label,{children:"check-in"}),Object(h.jsx)(L.a,{selected:a,onChange:function(e){return n(e)},selectsStart:!0,startDate:a,endDate:i,placeholderText:"",name:"checkin"})]}),Object(h.jsxs)(T.a.Group,{as:S.a,controlId:"formGridCheckOut",children:[Object(h.jsx)(T.a.Label,{children:"checkout"}),Object(h.jsx)(L.a,{selected:i,onChange:function(e){return j(e)},selectsEnd:!0,startDate:a,endDate:i,minDate:a,placeholderText:"",name:"checkout"})]})]}),Object(h.jsx)(k.a,{className:"mt-3 w-100",type:"submit",children:x>0?"update total rate":"check total rate"})]}),x>0?Object(h.jsxs)("h4",{className:"mt-3 text-center",children:["your rate is $",x]}):""]})}),q=function(){var e=Object(u.g)().hotelId,t=Object(s.useContext)(d),c=t.setHotel,a=t.hotelData;return Object(s.useEffect)((function(){void 0!==e&&c(e)}),[]),null===a?"loading":Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(E,{}),Object(h.jsx)("section",{className:"detail-section",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(D.a,{children:[Object(h.jsx)(S.a,{md:12,lg:8,children:Object(h.jsx)(H,{hotel:a})}),Object(h.jsx)(S.a,{md:12,lg:4,children:Object(h.jsx)(M,{hotel:a})})]})})})]})},A=c(152),P=c(153);function J(){return Object(h.jsx)("footer",{className:"py-4",style:{backgroundColor:"#F5F5F7"},children:Object(h.jsxs)(m.a,{className:"d-flex justify-content-between",children:[Object(h.jsxs)("div",{className:"d-flex align-items-center",style:{gap:30},children:[Object(h.jsxs)("div",{className:"copyright",children:[Object(h.jsx)(A.a,{})," 2021 Hotelist, Inc."]}),Object(h.jsxs)("div",{className:"d-flex links",style:{gap:30},children:[Object(h.jsx)("span",{children:"Privacy"}),Object(h.jsx)("span",{children:"Terms"}),Object(h.jsx)("span",{children:"Sitemap"})]})]}),Object(h.jsxs)("div",{className:"d-flex align-items-center",style:{gap:30},children:[Object(h.jsxs)("span",{children:[Object(h.jsx)(P.a,{}),"English (CA)"]}),Object(h.jsxs)("span",{children:[Object(h.jsx)(A.b,{}),"CAD"]})]})]})})}var W=function(){return Object(h.jsx)(b,{children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(v,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",children:Object(h.jsx)(I,{})}),Object(h.jsx)(u.a,{exact:!0,path:"/hotel/:hotelId",children:Object(h.jsx)(q,{})})]}),Object(h.jsx)(J,{})]})})};r.a.render(Object(h.jsx)(W,{}),document.getElementById("root"))},84:function(e,t,c){},85:function(e,t,c){}},[[141,1,2]]]);
//# sourceMappingURL=main.ad6d7cfb.chunk.js.map