(this.webpackJsonpaliexpref=this.webpackJsonpaliexpref||[]).push([[0],{48:function(e,c,t){},68:function(e,c,t){},69:function(e,c,t){},75:function(e,c,t){},76:function(e,c,t){},77:function(e,c,t){},78:function(e,c,t){},81:function(e,c,t){},82:function(e,c,t){},83:function(e,c,t){},84:function(e,c,t){},85:function(e,c,t){},86:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t.n(s),n=t(39),i=t.n(n),r=(t(48),t(13)),o=t(4),l=t(5),j=t(3),b=t(7),d=t.n(b),m="AliExpref",h="https://devf-website.s3.amazonaws.com/static/assets/img/logo-devf-white.svg",u="https://ecomerce-master.herokuapp.com/api/v1/item",O="https://ecomerce-master.herokuapp.com/api/v1/item/",x="https://ecomerce-master.herokuapp.com/api/v1/singup",g="https://ecomerce-master.herokuapp.com/api/v1/login",p="https://ecomerce-master.herokuapp.com/api/v1/user/me",f="https://ecomerce-master.herokuapp.com/api/v1/user/",v="https://oicrruf.github.io/aliexpref",N=t(14),y=t(24),w=t(25),_=t(18),C=t(41),S=t(40),F=t(22),k=t(21),A=t(15),E=t(1),I=[{name:"Automotive",icon:Object(E.jsx)(N.c,{})},{name:"Baby",icon:Object(E.jsx)(y.b,{})},{name:"Beauty",icon:Object(E.jsx)(F.d,{})},{name:"Books",icon:Object(E.jsx)(_.a,{})},{name:"Computers",icon:Object(E.jsx)(A.a,{})},{name:"Electronics",icon:Object(E.jsx)(w.b,{})},{name:"Games",icon:Object(E.jsx)(w.a,{})},{name:"Garden",icon:Object(E.jsx)(F.c,{})},{name:"Grocery",icon:Object(E.jsx)(_.c,{})},{name:"Health",icon:Object(E.jsx)(A.d,{})},{name:"Home",icon:Object(E.jsx)(A.c,{})},{name:"Industrial",icon:Object(E.jsx)(S.a,{})},{name:"Jewelery",icon:Object(E.jsx)(C.a,{})},{name:"Kids",icon:Object(E.jsx)(k.a,{})},{name:"Movies",icon:Object(E.jsx)(y.a,{})},{name:"Music",icon:Object(E.jsx)(_.b,{})},{name:"Outdoors",icon:Object(E.jsx)(y.c,{})},{name:"Shoes",icon:Object(E.jsx)(A.b,{})},{name:"Sports",icon:Object(E.jsx)(F.a,{})},{name:"Tools",icon:Object(E.jsx)(N.e,{})},{name:"Toys",icon:Object(E.jsx)(F.b,{})}],T=[{name:"Argentina",flag:"/assets/img/flags/ar.svg",currency:"ARS",symbol:"$"},{name:"Colombia",flag:"/assets/img/flags/co.svg",currency:"COP",symbol:"$"},{name:"Costa Rica",flag:"/assets/img/flags/cr.svg",currency:"CRC",symbol:"\u20a1"},{name:"Dinamarca",flag:"/assets/img/flags/dm.svg",currency:"DKK",symbol:"kr"},{name:"Ecuador",flag:"/assets/img/flags/ec.svg",currency:"ECS",symbol:"S/"},{name:"El Salvador",flag:"/assets/img/flags/sv.svg",currency:"USD",symbol:"$"},{name:"Estados Unidos",flag:"/assets/img/flags/us.svg",currency:"USD",symbol:"$"},{name:"Guatemala",flag:"/assets/img/flags/gu.svg",currency:"GQT",symbol:"Q"},{name:"M\xe9xico",flag:"/assets/img/flags/mx.svg",currency:"MXN",symbol:"$"},{name:"Panam\xe1",flag:"/assets/img/flags/pn.svg",currency:"PAB",symbol:"B/.\u200b"},{name:"Per\xfa",flag:"/assets/img/flags/pu.svg",currency:"PEN",symbol:"S/\u200b"}],q=[{id:"automotive",name:"Automotive",icon:Object(E.jsx)(N.c,{className:"category-box__icon"})},{id:"computers",name:"Computers",icon:Object(E.jsx)(A.a,{className:"category-box__icon"})},{id:"games",name:"Games",icon:Object(E.jsx)(w.a,{className:"category-box__icon"})},{id:"grocery",name:"Grocery",icon:Object(E.jsx)(_.c,{className:"category-box__icon"})},{id:"home",name:"Home",icon:Object(E.jsx)(A.c,{className:"category-box__icon"})},{id:"kids",name:"Kids",icon:Object(E.jsx)(k.a,{className:"category-box__icon"})},{id:"music",name:"Music",icon:Object(E.jsx)(_.b,{className:"category-box__icon"})},{id:"tools",name:"Tools",icon:Object(E.jsx)(N.e,{className:"category-box__icon"})}],R=function(e,c,t){return t.indexOf(e)===c},D=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,L=function(){return!!localStorage.getItem("@session")},P=function(){localStorage.removeItem("@session")},H=t(9),M=(t(68),function(){return Object(E.jsxs)("div",{className:"product-rating",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(H.d,{}),Object(E.jsx)(H.d,{}),Object(E.jsx)(H.d,{}),Object(E.jsx)(H.d,{}),Object(E.jsx)(H.d,{})]}),Object(E.jsx)(H.c,{})]})}),z=(t(19),t(43)),B=(t(69),h),$=u,X=function(e){var c=Object(s.useState)(["Todas las categor\xedas"]),t=Object(j.a)(c,2),n=t[0],i=t[1],r=Object(s.useState)([]),l=Object(j.a)(r,2),b=l[0],m=l[1];return Object(s.useEffect)((function(){var e=b.map((function(e,c){return Object(E.jsx)("option",{value:c,children:e},c)}));i(e)}),[b]),Object(s.useEffect)((function(){d.a.get($).then((function(e){var c=e.data,t=[];c.map((function(e){void 0!==e.category&&t.push(e.category)})),m(t.filter(R).sort())})).catch((function(e){console.log(e)}))}),[]),Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)("div",{className:"search-bar",children:Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)(o.b,{to:"/",children:Object(E.jsx)("img",{src:B,id:"logo",className:"img-fluid"})}),Object(E.jsxs)("div",{className:"input-group",children:[Object(E.jsx)("input",{type:"text",className:"form-control",placeholder:"Buscar"}),Object(E.jsxs)("select",{className:"px-3",name:"categories",id:"search-bar__categories",children:[Object(E.jsx)("option",{value:"-1",children:"Todas las categor\xedas"}),n]}),Object(E.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"search",children:Object(E.jsx)(z.a,{})})]}),Object(E.jsxs)("div",{className:"whishlist-and-shopping-bag",children:[Object(E.jsx)("a",{href:"#",children:Object(E.jsx)(H.c,{className:"whishlist-and-shopping-bag__icon"})}),Object(E.jsx)("a",{href:"#",children:Object(E.jsx)(A.e,{className:"whishlist-and-shopping-bag__icon"})})]})]})})})},G=(t(75),function(e){var c=Object(s.useState)(!0),t=Object(j.a)(c,2),n=t[0],i=t[1],r=Object(s.useState)([]),o=Object(j.a)(r,2),l=o[0],b=o[1],d=Array.from(document.querySelectorAll(".dropdown-list"));Object(s.useEffect)((function(){m(e.type,e.data),n?document.querySelector("#".concat(e.type)).setAttribute("hidden",""):document.querySelector("#".concat(e.type)).removeAttribute("hidden",""),document.addEventListener("click",(function(e){d.map((function(e){e.setAttribute("hidden","")}))}))}),[n]);var m=function(e,c){var t=[];switch(e){case"country":t=c.map((function(e,c){return Object(E.jsx)("li",{children:Object(E.jsxs)("a",{href:"#",children:[Object(E.jsx)("img",{src:e.flag}),e.value]})},c)})),b(t);break;case"currency":t=c.map((function(e,c){return Object(E.jsx)("li",{children:Object(E.jsxs)("a",{href:"#",className:"dropdown-list-currency",children:[Object(E.jsx)("span",{children:e.symbol})," ",e.value]})},c)})),b(t)}b(t)};return Object(E.jsxs)(a.a.Fragment,{children:[Object(E.jsxs)("a",{className:"btn btn-light btn-dropdown-list",onClick:function(){return i(!n)},children:[e.name,Object(E.jsx)(k.b,{})]}),Object(E.jsx)("ul",{id:e.type,className:"dropdown-list",children:l})]})}),W=(t(76),m),J=p,K=v,U=function(e){var c=Object(s.useState)({}),t=Object(j.a)(c,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){d.a.get(J,{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(localStorage.getItem("@session"))}}).then((function(e){i(e.data.user)})).catch((function(e){console.log(e)}))}),[]),e.isAuthenticated?Object(E.jsxs)(a.a.Fragment,{children:["|",Object(E.jsxs)(o.b,{to:"/me",children:["\xa1Bienvenido ","".concat(n.first_name," ").concat(n.last_name),"!",Object(E.jsx)("img",{src:"oicrruf.github.io"!=window.location.hostname?"/assets/img/avatar.png":"".concat(K,"/assets/img/avatar.png"),height:"16",className:"ml-2"})]})]}):Object(E.jsxs)(a.a.Fragment,{children:["|",Object(E.jsx)(o.b,{to:"/login",children:"Iniciar Sesi\xf3n"}),"|",Object(E.jsx)(o.b,{to:"/singup",children:"Crear cuenta"})]})},Q=function(e){var c=Object(s.useState)([]),t=Object(j.a)(c,2),n=t[0],i=t[1],r=Object(s.useState)([]),l=Object(j.a)(r,2),b=l[0],d=l[1];return Object(s.useEffect)((function(){var e=[],c=[];T.map((function(t){e.push({value:t.name,flag:"oicrruf.github.io"!=window.location.hostname?t.flag:"".concat(K+t.flag)}),c.push({value:t.currency,symbol:t.symbol})})),i(e),d(c)}),[]),Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)("div",{className:"navbar__header",children:Object(E.jsxs)("div",{className:"container",children:[Object(E.jsxs)("div",{className:"navbar__header-international",children:[Object(E.jsx)(G,{name:"Moneda",type:"currency",data:b}),Object(E.jsx)(G,{name:"Pa\xeds",type:"country",data:n})]}),Object(E.jsxs)("div",{className:"navbar__header-nav",children:[Object(E.jsxs)(o.b,{href:"#",children:["Bienvenido a ",W]}),"|",Object(E.jsx)(o.b,{to:"/contact",children:"Cont\xe1ctanos"}),Object(E.jsx)(U,{isAuthenticated:e.isAuthenticated})]})]})})})},Z=(t(77),function(){return Object(E.jsxs)(a.a.Fragment,{children:[Object(E.jsx)("div",{className:"header-overlay"}),Object(E.jsxs)("div",{className:"header-container",children:[Object(E.jsx)("h1",{children:"Bienvenido a AliExpref"}),Object(E.jsx)("p",{children:"Conoce nuestros productos y encuentra lo que necesitas"}),Object(E.jsxs)("div",{className:"header-counters",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"27"}),Object(E.jsx)("span",{children:"Categorias"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"83"}),Object(E.jsx)("span",{children:"Productos"})]})]}),Object(E.jsx)("a",{id:"all-products",type:"button",className:"btn btn-light",href:"#products__container",children:"Ver todos los productos"})]})]})}),V=(t(78),m),Y=u,ee=v,ce=function(){var e=Object(s.useState)(["Todas las categor\xedas"]),c=Object(j.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)([]),r=Object(j.a)(i,2),l=r[0],b=r[1];return Object(s.useEffect)((function(){var e=l.map((function(e,c){return Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},c)}));n(e)}),[l]),Object(s.useEffect)((function(){d.a.get(Y).then((function(e){var c=e.data,t=[];c.map((function(e){void 0!==e.category&&t.push(e.category)})),b(t.filter(R).sort())})).catch((function(e){console.log(e)}))}),[]),Object(E.jsxs)(a.a.Fragment,{children:[Object(E.jsx)("div",{className:"newsletter-block",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"row",children:[Object(E.jsx)("div",{className:"col-lg-3",children:Object(E.jsx)("h4",{children:"Suscr\xedbete al bolet\xedn"})}),Object(E.jsxs)("div",{className:"col-lg-5",children:[Object(E.jsx)("p",{children:"Obtenga toda la informaci\xf3n m\xe1s reciente sobre eventos, ventas y ofertas."}),Object(E.jsx)("h5",{children:"Reciba un cup\xf3n de $ 10 para la primera compra."})]}),Object(E.jsx)("div",{className:"col-lg-4",children:Object(E.jsxs)("div",{className:"input-group",children:[Object(E.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo electr\xf3nico"}),Object(E.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"search",children:"Suscribirse"})]})})]})})}),Object(E.jsx)("footer",{children:Object(E.jsxs)("div",{className:"container",children:[Object(E.jsxs)("div",{className:"footer-content row",children:[Object(E.jsxs)("div",{className:"col-lg-6",children:[Object(E.jsx)(o.b,{to:"/",children:Object(E.jsx)("img",{src:"oicrruf.github.io"!=window.location.hostname?"/assets/img/logo-devf-black.svg":"".concat(ee,"/assets/img/logo-devf-black.svg"),className:"img-fluid w-25"})}),Object(E.jsxs)("div",{className:"contact-info",children:[Object(E.jsxs)("div",{className:"info-detail",children:[Object(E.jsx)("span",{children:"Ll\xe1manos ahora:"}),Object(E.jsx)("h6",{children:"+503 7859 0168"})]}),Object(E.jsxs)("div",{className:"info-detail",children:[Object(E.jsx)("span",{children:"Correo electr\xf3nico"}),Object(E.jsx)("h6",{children:"vm.reyesal@gmail.com"})]}),Object(E.jsxs)("div",{className:"info-detail info-follow",children:[Object(E.jsx)("span",{children:"S\xedguenos"}),Object(E.jsxs)("h6",{children:[Object(E.jsx)(H.a,{}),Object(E.jsx)(H.e,{}),Object(E.jsx)(H.b,{})]})]})]})]}),Object(E.jsx)("div",{className:"col-lg-6",children:Object(E.jsxs)("div",{className:"categories-info",children:[Object(E.jsx)("h6",{children:"Categorias"}),Object(E.jsx)("ul",{className:"categories-list",children:t})]})})]}),Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{className:"footer-bottom",children:[Object(E.jsxs)("p",{children:["\xa9 ",V,". ",(new Date).getFullYear(),". Reservados todos los derechos"]}),Object(E.jsx)("img",{src:"https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/03/content/payment-icon.png"})]})]})})]})},te=t(16),se=t(23),ae=t.n(se),ne=(t(80),t(81),p),ie=f,re=v,oe=function(e){var c=Object(s.useState)({}),t=Object(j.a)(c,2),n=t[0],i=t[1],r=Object(s.useState)(!1),b=Object(j.a)(r,2),m=b[0],h=b[1];return Object(s.useEffect)((function(){d.a.get(ne,{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(localStorage.getItem("@session"))}}).then((function(e){i(e.data.user)})).catch((function(e){console.log(e)}))}),[]),Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)("div",{className:"container user-container ",children:Object(E.jsxs)("div",{className:"row ",children:[Object(E.jsx)("div",{className:"offset-lg-2 col-lg-4",children:Object(E.jsx)("div",{className:"avatar-and-action float-right",children:Object(E.jsx)("img",{src:"oicrruf.github.io"!=window.location.hostname?"/assets/img/avatar.png":"".concat(re,"/assets/img/avatar.png")})})}),Object(E.jsx)("div",{className:"col-lg-6",children:Object(E.jsxs)("div",{className:"user-info",children:[Object(E.jsx)("h1",{className:"mb-4",children:"".concat(n.first_name," ").concat(n.last_name)}),Object(E.jsxs)("p",{className:"mb-2",children:["ID: ",n._id]}),Object(E.jsxs)("p",{className:"mb-2",children:["Correo electr\xf3nico: ",n.email]}),Object(E.jsxs)("p",{className:"mb-2",children:["\xdaltima actualizaci\xf3n:"," ",ae()(n.updatedAt).fromNow()]}),Object(E.jsx)(o.b,{className:"btn btn-primary btn-auth mt-4",to:"/me/edit",children:"Editar"}),Object(E.jsx)("button",{onClick:function(){P(),h(!0)},className:"btn btn-dark btn-auth ml-4 mt-4",children:"Cerrar sesi\xf3n"}),m&&Object(E.jsx)(l.a,{to:"/"})]})})]})})})},le=function(e){var c=Object(s.useState)({}),t=Object(j.a)(c,2),n=t[0],i=t[1],l=Object(s.useState)(!1),b=Object(j.a)(l,2),m=b[0],h=b[1],u=Object(s.useState)({}),O=Object(j.a)(u,2),x=O[0],g=O[1],p=function(e,c){g(Object(r.a)(Object(r.a)({},x),{},Object(te.a)({},c,e)))},f=function(){d.a.get(ne,{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(localStorage.getItem("@session"))}}).then((function(e){i(e.data.user)})).catch((function(e){console.log(e)}))};return Object(s.useEffect)((function(){f()}),[]),Object(s.useEffect)((function(){f()}),[m]),Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)("div",{className:"container user-container ",children:Object(E.jsxs)("div",{className:"row ",children:[Object(E.jsx)("div",{className:"offset-lg-2 col-lg-4",children:Object(E.jsx)("div",{className:"avatar-and-action float-right",children:Object(E.jsx)("img",{src:"oicrruf.github.io"!=window.location.hostname?"/assets/img/avatar.png":"".concat(re,"/assets/img/avatar.png")})})}),Object(E.jsx)("div",{className:"col-lg-6",children:Object(E.jsxs)("div",{className:"user-info",children:[Object(E.jsxs)("div",{className:"mb-3",children:[Object(E.jsx)("label",{htmlFor:"firts_name",className:"form-label",children:"Nombre"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"firts_name",placeholder:"Nombre",onChange:function(e){p(e.target.value,"first_name")}}),Object(E.jsx)("label",{htmlFor:"last_name",className:"form-label mt-3",children:"Apellido"}),Object(E.jsx)("input",{type:"text",className:"form-control",id:"last_name",placeholder:"Apellido",onChange:function(e){p(e.target.value,"last_name")}})]}),Object(E.jsxs)("p",{className:"mb-2",children:["ID: ",n._id]}),Object(E.jsxs)("p",{className:"mb-2",children:["Correo electr\xf3nico: ",n.email]}),Object(E.jsxs)("p",{className:"mb-2",children:["Editar usuario \xdaltima actualizaci\xf3n:"," ",ae()(n.updatedAt).fromNow()]}),Object(E.jsx)("button",{onClick:function(){d.a.patch("".concat(ie+n._id),x,{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:"JWT ".concat(localStorage.getItem("@session"))}}).then((function(e){h(!0)})).catch((function(e){console.log(e)}))},className:"btn btn-primary btn-auth mt-4",children:"Guardar"}),Object(E.jsx)(o.b,{to:"/me",className:"btn btn-dark btn-auth ml-4 mt-4",children:"Cancelar"})]})})]})})})},je=function(){return Object(E.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8803333470782!2d-99.16443658461279!3d19.417575746191503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3980ac181f%3A0xe357573c8ab8ef4d!2sDev.f!5e0!3m2!1ses-419!2ssv!4v1617173259432!5m2!1ses-419!2ssv",width:"100%",height:"450",style:{border:0},allowfullscreen:"",loading:"lazy"})},be=(t(82),function(){return Object(E.jsxs)("div",{className:"container",id:"form-contact",children:[Object(E.jsx)(je,{}),Object(E.jsxs)("div",{className:"row mt-5 form-contact",children:[Object(E.jsxs)("div",{className:"col-lg-8",children:[Object(E.jsx)("h2",{className:"mb-3",children:"Escr\xedbenos"}),Object(E.jsxs)("div",{className:"row",children:[Object(E.jsxs)("div",{className:"col-lg-6",children:[Object(E.jsxs)("div",{className:"mb-3",children:[Object(E.jsx)("label",{htmlFor:"name",class:"form-label",children:"Nombre"}),Object(E.jsx)("input",{type:"email",className:"form-control",id:"name"})]}),Object(E.jsxs)("div",{class:"mb-3",children:[Object(E.jsx)("label",{htmlFor:"email",class:"form-label",children:"Correo electr\xf3nico"}),Object(E.jsx)("input",{type:"email",className:"form-control",id:"email"})]}),Object(E.jsxs)("div",{class:"mb-3",children:[Object(E.jsx)("label",{htmlFor:"phone",class:"form-label",children:"N\xfamero de tel\xe9fono"}),Object(E.jsx)("input",{type:"email",className:"form-control",id:"phone"})]}),Object(E.jsx)(o.b,{className:"btn btn-primary btn-auth mt-4",to:"/me/edit",children:"Editar"})]}),Object(E.jsx)("div",{className:"col-lg-6",children:Object(E.jsxs)("div",{className:"mb-3",children:[Object(E.jsx)("label",{htmlFor:"whats-on-your-mind",className:"form-label",children:"\xbfQu\xe9 tienen en mente?"}),Object(E.jsx)("textarea",{className:"form-control",id:"whats-on-your-mind",rows:"3"})]})})]})]}),Object(E.jsxs)("div",{className:"col-lg-4",children:[Object(E.jsxs)("h2",{className:"mb-3",children:[Object(E.jsx)("span",{children:"Detalles de "}),"Contacto"]}),Object(E.jsxs)("div",{className:"contact-detail",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(N.b,{}),Object(E.jsx)("p",{children:"+503 7859 0168"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)(N.a,{}),Object(E.jsx)("p",{children:"vm.reyesal@gmail.com"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)(N.d,{}),Object(E.jsx)("p",{children:"/oicrruf"})]})]})]})]})]})}),de=function(e){var c=m,t=Object(s.useState)(L()),n=Object(j.a)(t,2),i=n[0],r=(n[1],Object(l.g)().pathname);return document.querySelector("title").innerText="".concat(e.title," | ").concat(c),Object(s.useEffect)((function(){window.scrollTo(0,0)}),[r]),Object(E.jsx)(a.a.Fragment,{children:Object(E.jsxs)("div",{className:"home__container",children:[Object(E.jsx)(Q,{isAuthenticated:i}),Object(E.jsx)(X,{isAuthenticated:i}),e.children,Object(E.jsx)(ce,{})]})})},me=(t(83),u),he=v,ue=function(){var e=q.map((function(e,c){return Object(E.jsx)("div",{className:"category-box",children:Object(E.jsxs)("a",{href:"#".concat(e.id),children:[e.icon,Object(E.jsx)("h5",{children:e.name})]})},c)}));return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)("div",{className:"categories__container",children:Object(E.jsx)("div",{className:"container",children:e})})})},Oe=function(e){var c=Object(s.useState)([]),t=Object(j.a)(c,2),n=t[0],i=t[1],r=Object(s.useState)([]),l=Object(j.a)(r,2),b=l[0],m=l[1],h=Object(s.useState)([]),u=Object(j.a)(h,2),O=u[0],x=u[1];return Object(s.useEffect)((function(){d.a.get(me).then((function(e){var c=e.data;m(c);var t=[];c.map((function(e){void 0!==e.category&&t.push(e.category)})),x(t.filter(R).sort())})).catch((function(e){console.log(e)}))}),[]),Object(s.useEffect)((function(){var e=O.map((function(e,c){return Object(E.jsx)("div",{id:e.toLowerCase(),className:"py-5 product-categoty__box",children:Object(E.jsxs)("div",{className:"container",children:[Object(E.jsxs)("h5",{className:"mb-0 category-name",children:[e===I[c].name&&I[c].icon,Object(E.jsx)("span",{children:"\xb7"}),e]}),Object(E.jsx)("hr",{}),Object(E.jsx)("div",{className:"products-by-category",children:b.map((function(c,t){if(c.category===e)return Object(E.jsxs)("div",{className:"single-product",id:c._id,children:[Object(E.jsx)(o.b,{to:"/product/".concat(c._id),children:Object(E.jsx)("img",{className:"img-fluid",src:c.image&&c.image.includes(".")?c.image:"oicrruf.github.io"!=window.location.hostname?"/assets/img/product.jpg":"".concat(he,"/assets/img/product.jpg")})}),Object(E.jsx)(o.b,{to:"/product/".concat(c._id),children:Object(E.jsx)("h6",{children:c.product_name})}),Object(E.jsx)("div",{className:"rating-block",children:Object(E.jsx)(M,{})}),Object(E.jsx)("h4",{children:void 0!==c.price?"$".concat(c.price,".00"):"$0.00"})]},t)}))})]})},c)}));i(e)}),[O]),Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)("div",{id:"products__container",className:"products__container",children:n})})},xe=function(e){var c=Object(s.useState)(L()),t=Object(j.a)(c,2);t[0],t[1];return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsxs)(de,{title:"Inicio",children:[Object(E.jsx)(Z,{children:Object(E.jsx)("div",{className:"container",children:e.children})}),Object(E.jsx)(ue,{}),Object(E.jsx)(Oe,{})]})})},ge=(t(84),x),pe=g,fe=function(e){return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)("div",{id:"form-container",className:"row",children:e.children})})},ve=function(){var e=Object(s.useState)({}),c=Object(j.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)(!1),o=Object(j.a)(i,2),b=o[0],m=o[1],h=function(e,c){n(Object(r.a)(Object(r.a)({},t),{},Object(te.a)({},c,e)))};return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"col-lg-12 row form-container__title",children:Object(E.jsx)("h1",{children:"Crear nueva cuenta de usuario"})}),Object(E.jsxs)(fe,{children:[Object(E.jsxs)("div",{className:"col-lg-6",children:[Object(E.jsx)("h3",{children:"Informaci\xf3n personal"}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsxs)("label",{htmlFor:"firstName",children:["Nombre ",Object(E.jsx)("span",{children:"*"})]}),Object(E.jsx)("input",{value:t.first_name,onChange:function(e){h(e.target.value,"first_name")},type:"text",className:"form-control","aria-describedby":"emailHelp",id:"firstName"}),Object(E.jsx)("small",{id:"emailHelp",className:"form-text text-muted"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsxs)("label",{htmlFor:"lastName",children:["Apellido ",Object(E.jsx)("span",{children:"*"})]}),Object(E.jsx)("input",{value:t.last_name,onChange:function(e){h(e.target.value,"last_name")},type:"text",className:"form-control",id:"lastName"})]}),Object(E.jsxs)("div",{className:"form-group form-check",children:[Object(E.jsx)("input",{type:"checkbox",className:"form-check-input",id:"newsletter"}),Object(E.jsx)("label",{className:"form-check-label",htmlFor:"newsletter",children:"Sucribirme al Newsletter"})]})]}),Object(E.jsxs)("div",{className:"col-lg-6",children:[Object(E.jsx)("h3",{children:"Informaci\xf3n de registro"}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsxs)("label",{htmlFor:"email",children:["Correo electr\xf3nico ",Object(E.jsx)("span",{children:"*"})]}),Object(E.jsx)("input",{value:t.email,onChange:function(e){h(e.target.value,"email")},type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsxs)("label",{htmlFor:"password",children:["Contrase\xf1a ",Object(E.jsx)("span",{children:"*"})]}),Object(E.jsx)("input",{value:t.password,onChange:function(e){h(e.target.value,"password")},type:"password",className:"form-control",id:"password"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsxs)("label",{htmlFor:"confirmPassword",children:["Confirmar contrase\xf1a ",Object(E.jsx)("span",{children:"*"})]}),Object(E.jsx)("input",{value:t.confirm_password,onChange:function(e){h(e.target.value,"confirm_password")},type:"password",className:"form-control",id:"confirmPassword"})]})]}),Object(E.jsxs)("div",{className:"col-lg-12 mt-4",children:[Object(E.jsx)("button",{onClick:function(){var e;e=t,""!==t.first_name&&""!==t.last_name&&""!==t.email&&D.test(String(t.email).toLowerCase())&&""!==t.password&&""!==t.confirm_password&&t.password===t.confirm_password?(delete t.confirm_password,d.a.post(ge,e).then((function(e){200===e.status&&m(!0)})).catch((function(e){console.log(e)}))):console.log("invalid",t)},type:"submit",className:"btn btn-primary btn-auth",children:"Crear mi cuenta"}),b&&Object(E.jsx)(l.a,{to:"/login"})]})]})]})})},Ne=function(){var e=Object(s.useState)({}),c=Object(j.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)(!1),b=Object(j.a)(i,2),m=b[0],h=b[1],u=function(e,c){n(Object(r.a)(Object(r.a)({},t),{},Object(te.a)({},c,e)))};return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"col-lg-12 row form-container__title",children:Object(E.jsx)("h1",{children:"Crear nueva cuenta de usuario"})}),Object(E.jsxs)(fe,{children:[Object(E.jsxs)("div",{className:"col-lg-6",children:[Object(E.jsx)("h3",{children:"Usuarios registrados"}),Object(E.jsx)("p",{className:"login-copy",children:"Si tiene una cuenta, inicie sesi\xf3n con su direcci\xf3n de correo electr\xf3nico."}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsxs)("label",{htmlFor:"email",children:["Correo electr\xf3nico ",Object(E.jsx)("span",{children:"*"})]}),Object(E.jsx)("input",{value:t.email,onChange:function(e){u(e.target.value,"email")},type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsxs)("label",{htmlFor:"password",children:["Contrase\xf1a ",Object(E.jsx)("span",{children:"*"})]}),Object(E.jsx)("input",{value:t.password,onChange:function(e){u(e.target.value,"password")},type:"password",className:"form-control",id:"password"})]}),Object(E.jsx)("button",{onClick:function(){var e;e=t,""!==t.email&&D.test(String(t.email).toLowerCase())&&""!==t.password?(console.log(t),delete t.confirm_password,d.a.post(pe,e).then((function(e){200===e.status&&localStorage.setItem("@session",e.data.token),h(!0)})).catch((function(e){console.log(e)}))):console.log("invalid",t)},type:"submit",className:"btn btn-primary btn-auth mt-4",children:"Iniciar sesi\xf3n"}),m&&Object(E.jsx)(l.a,{to:"/me"})]}),Object(E.jsxs)("div",{className:"col-lg-6",children:[Object(E.jsx)("h3",{children:"Informaci\xf3n de registro"}),Object(E.jsx)("p",{className:"why-register",children:"Crear una cuenta tiene muchos beneficios: realice el pago m\xe1s r\xe1pido, mantenga m\xe1s de una direcci\xf3n, realice un seguimiento de los pedidos y m\xe1s."}),Object(E.jsxs)(o.b,{to:"/singup",type:"submit",className:"btn btn-primary btn-auth mt-4",children:[" ","Crear mi cuenta"]})]})]})]})})},ye=function(){return L()?Object(E.jsx)(l.a,{to:"/me"}):Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)(de,{title:"Registrarme",children:Object(E.jsx)(ve,{})})})},we=function(){return L()?Object(E.jsx)(l.a,{to:"/me"}):Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)(de,{title:"Iniciar sesi\xf3n",children:Object(E.jsx)(Ne,{})})})},_e=(t(85),m),Ce=O,Se=v,Fe=function(e){var c=Object(s.useState)({}),t=Object(j.a)(c,2),n=t[0],i=t[1],r=Object(s.useState)(),l=Object(j.a)(r,2),b=l[0],m=l[1];return Object(s.useEffect)((function(){m(L()),d.a.get("".concat(Ce+e.id)).then((function(e){200===e.status&&i(e.data)})).catch((function(e){console.log(e)}))}),[]),document.querySelector("title").innerText="".concat(n.product_name," | ").concat(_e),Object(E.jsxs)(a.a.Fragment,{children:[Object(E.jsx)("div",{className:"border-bottom",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsx)("nav",{"aria-label":"breadcrumb",children:Object(E.jsxs)("ol",{className:"breadcrumb",children:[Object(E.jsx)("li",{className:"breadcrumb-item",children:Object(E.jsx)(o.b,{to:"/",children:"Inicio"})}),Object(E.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:n.product_name})]})})})}),Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"row product-detail",children:[Object(E.jsx)("div",{className:"col-lg-6",children:Object(E.jsx)("img",{className:"img-fluid",src:n.image&&n.image.includes(".")?n.image:"oicrruf.github.io"!=window.location.hostname?"/assets/img/product.jpg":"".concat(Se,"/assets/img/product.jpg")})}),Object(E.jsxs)("div",{className:"col-lg-6",children:[Object(E.jsx)("h1",{children:n.product_name}),Object(E.jsx)(M,{}),Object(E.jsx)("p",{children:n.description}),Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{className:"stock-and-price",children:[Object(E.jsxs)("div",{className:"stock-and-price__price",children:[Object(E.jsx)("span",{children:"Desde:"}),Object(E.jsx)("h4",{children:"$".concat(n.price,".00")})]}),Object(E.jsx)("div",{className:"stock-and-price__stock",children:Object(E.jsxs)("span",{children:["Disponibilidad:",n.isActive?" En stock":" Agotado"]})})]}),b?Object(E.jsxs)(o.b,{to:"/",type:"submit",className:"btn btn-primary btn-product \r mt-4",children:[" ","A\xf1adir al carrito"]}):Object(E.jsxs)(o.b,{to:"/login",type:"submit",className:"btn btn-primary btn-product \r mt-4",children:[" ","Iniciar sesi\xf3n"]})]})]})})]})},ke=function(e){var c=e.match.params.id;return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)(de,{children:Object(E.jsx)(Fe,{id:c})})})},Ae=function(e){return L()?Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)(de,{title:"Perfil",children:Object(E.jsx)(oe,{})})}):Object(E.jsx)(l.a,{to:"/login"})},Ee=function(e){return L()?Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)(de,{title:"Editar usuario",children:Object(E.jsx)(le,{})})}):Object(E.jsx)(l.a,{to:"/login"})},Ie=function(e){return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)(de,{title:"Contacto",children:Object(E.jsx)(be,{})})})},Te=function(){return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsx)(o.a,{children:Object(E.jsxs)(l.d,{children:[Object(E.jsx)(l.b,{path:"/contact",children:Object(E.jsx)(Ie,{})}),Object(E.jsx)(l.b,{path:"/me/edit",children:Object(E.jsx)(Ee,{})}),Object(E.jsx)(l.b,{path:"/me",children:Object(E.jsx)(Ae,{})}),Object(E.jsx)(l.b,{path:"/login",children:Object(E.jsx)(we,{})}),Object(E.jsx)(l.b,{path:"/singup",children:Object(E.jsx)(ye,{})}),Object(E.jsx)(l.b,{path:"/product/:id",render:function(e){return Object(E.jsx)(ke,Object(r.a)({},e))}}),Object(E.jsx)(l.b,{path:"/",children:Object(E.jsx)(xe,{})})]})})})},qe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(Te,{})}),document.querySelector("#root")),qe()}},[[86,1,2]]]);
//# sourceMappingURL=main.7eb655b9.chunk.js.map