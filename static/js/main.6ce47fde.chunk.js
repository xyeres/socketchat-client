(this["webpackJsonpsocketchat-client"]=this["webpackJsonpsocketchat-client"]||[]).push([[0],{95:function(e,s,a){},96:function(e,s,a){"use strict";a.r(s);var t=a(1),c=a(47),n=a.n(c),i=a(23),r=a(2),o=a(7),l=a(0),m=function(){var e=Object(t.useState)("Anonymous"),s=Object(o.a)(e,2),a=s[0],c=s[1],n=Object(t.useState)("tea-tasting"),r=Object(o.a)(n,2),m=r[0],j=r[1];return Object(l.jsx)("div",{className:"bg",children:Object(l.jsx)("div",{className:"loginContainer",children:Object(l.jsxs)("main",{className:"login",children:[Object(l.jsxs)("div",{className:"logo login__logo",children:[Object(l.jsx)("div",{href:"/",role:"button",tabIndex:"0",className:"logo__icon","aria-label":"socketchat logo",children:Object(l.jsx)("i",{className:"fa fa-comments-o","aria-hidden":"true"})}),Object(l.jsx)("div",{className:"logo__title",children:"Socketchat"})]}),Object(l.jsxs)("form",{className:"login__form",children:[Object(l.jsx)("input",{type:"text",placeholder:"Nickname",name:"user",id:"user",className:"input login__input form__user",autoFocus:!0,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Room to join",name:"room",id:"room",className:"input login__input form__room",onChange:function(e){return j(e.target.value)}}),Object(l.jsx)(i.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m),children:Object(l.jsx)("button",{type:"submit",tabIndex:"0",className:"btn login__btn",children:"Join Chat"})})]})]})})})},j=a(51),d=a(49),u=a.n(d),b=a(50),h=a.n(b),O=a.p+"static/media/building.452805ba.png",g=a.p+"static/media/face.ffdc205d.png",x=a.p+"static/media/ghost.81274bd4.png",f=a.p+"static/media/map.0a4e31df.png",_=a.p+"static/media/owl.8062a06f.png",p=a.p+"static/media/peacock.d8c413c5.png",v=a.p+"static/media/plant.dbba7e1b.png",N=a.p+"static/media/squid.6df2d9c7.png";var k,M=function(e){var s=[O,g,x,f,_,p,p,v,N];if(e)return s[e];var a=Math.floor(8*Math.random());return{pic:s[a],picIndex:a}},C=function(e){var s=e.room,a=e.handleMenuToggle;return Object(l.jsxs)("nav",{className:"infoBar",children:[Object(l.jsx)("div",{className:"infoBar__title",children:s}),Object(l.jsx)("div",{className:"infoBar__userMenuToggle",onClick:a,id:"menuOpen",children:Object(l.jsx)("i",{className:"fa fa-users","aria-hidden":"true"})})]})},I=function(e){var s=e.room,a=e.message,t=e.setMessage,c=e.sendMessage;return Object(l.jsx)("section",{className:"inputBar",children:Object(l.jsxs)("form",{className:"inputBar__form",children:[Object(l.jsx)("input",{className:"input inputBar__input",type:"text",placeholder:"Message ".concat(s),value:a,onChange:function(e){return t(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?c(e):null},name:"message",id:"message"}),Object(l.jsx)("button",{"aria-label":"Send Chat",className:"btn inputBar__btn",onClick:function(e){return c(e)},children:Object(l.jsx)("i",{className:"fa fa-paper-plane-o","aria-hidden":"true"})})]})})},P=a(30),S=a.n(P),y=function(e){var s=e.getProfilePic,a=e.message,t=a.user,c=a.text,n=a.picIndex,i=(e.name,!1);return"admin"===t&&(i=!0),i?Object(l.jsxs)("div",{className:"message",children:[Object(l.jsx)("img",{src:O,alt:"user #231",className:"message__userImage"}),Object(l.jsxs)("div",{className:"message__detail",children:[Object(l.jsxs)("div",{className:"message__header",children:[Object(l.jsx)("div",{className:"message__userName",children:"\u2728ChatBot: "+t}),Object(l.jsx)("div",{className:"message__timestamp",children:"07/14/2021"})]}),Object(l.jsx)("div",{className:"message__text",children:S.a.emojify(c)})]})]}):Object(l.jsxs)("div",{className:"message",children:[Object(l.jsx)("img",{src:s(n),alt:"user #231",className:"message__userImage"}),Object(l.jsxs)("div",{className:"message__detail",children:[Object(l.jsxs)("div",{className:"message__header",children:[Object(l.jsx)("div",{className:"message__userName",children:t}),Object(l.jsx)("div",{className:"message__timestamp",children:"07/14/2021"})]}),Object(l.jsx)("div",{className:"message__text",children:S.a.emojify(c)})]})]})},B=function(e){var s=e.getProfilePic,a=e.messages,t=e.name;return Object(l.jsx)("section",{className:"messages",children:a.map((function(e,a){return Object(l.jsx)(y,{getProfilePic:s,message:e,name:t},a)}))})},w=function(e){var s=e.room,a=(e.name,e.users),t=e.userProfilePic,c=e.menuIsActive,n=e.handleMenuToggle;return Object(l.jsxs)("section",{className:c?"userMenu userMenu--active":"userMenu",children:[Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("div",{role:"button",tabIndex:"0",className:"logo__icon","aria-label":"socketchat logo",children:Object(l.jsx)("i",{className:"fa fa-comments-o","aria-hidden":"true"})}),Object(l.jsx)("div",{className:"logo__title",children:"Socketchat"}),Object(l.jsx)("i",{onClick:n,className:"fa fa-times logo__btn",id:"menuClose",role:"button",tabIndex:"0","aria-label":"Close menu"})]}),Object(l.jsx)("div",{className:"infoBar__title",children:s}),a?Object(l.jsxs)("div",{className:"activeUsers",children:[Object(l.jsxs)("p",{className:"activeUsers__heading",children:["Online \u2014 ",a.length]}),Object(l.jsx)("ul",{className:"users",children:a.map((function(e){var s=e.name,a=e.id;return Object(l.jsxs)("li",{className:"user",children:[Object(l.jsxs)("div",{className:"user__userImage",children:[Object(l.jsx)("i",{className:"user__onlineIcon","aria-hidden":"true"}),Object(l.jsx)("img",{src:t,alt:"user # ".concat(a)})]}),Object(l.jsx)("div",{className:"user__detail",children:Object(l.jsx)("div",{className:"user__header",children:Object(l.jsx)("div",{className:"user__name",children:s})})})]},a)}))})]}):null,Object(l.jsx)("a",{href:"/",role:"button",tabIndex:"0",className:"logout__btn btn",children:"Leave room"})]})},T=function(e){var s=e.location,a=Object(t.useState)("Anonymous"),c=Object(o.a)(a,2),n=c[0],i=c[1],r=Object(t.useState)([]),m=Object(o.a)(r,2),d=m[0],b=m[1],O=Object(t.useState)(""),g=Object(o.a)(O,2),x=g[0],f=g[1],_=Object(t.useState)(""),p=Object(o.a)(_,2),v=p[0],N=p[1],P=Object(t.useState)([]),S=Object(o.a)(P,2),y=S[0],T=S[1],A=Object(t.useState)(!1),E=Object(o.a)(A,2),D=E[0],J=E[1],q=Object(t.useState)(""),U=Object(o.a)(q,2),F=U[0],K=U[1],L="https://socketchat-serve.herokuapp.com/";Object(t.useEffect)((function(){var e=M(),a=e.pic,t=e.picIndex;K(a);var c=u.a.parse(s.search),n=c.room,r=c.name;return k=h()(L),i(r),N(n),k.emit("join",{name:r,room:n,picIndex:t},(function(e){e&&(alert(e),window.location="/")})),function(){k.emit("disconnect"),k.off()}}),[L,s.search]),Object(t.useEffect)((function(){k.on("message",(function(e){b([].concat(Object(j.a)(d),[e]))}))}),[d]),Object(t.useEffect)((function(){k.on("roomData",(function(e){var s=e.users;T(s)})),console.log(y)}),[y]);var R=function(){J(!D)};return Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)(w,{room:v,name:n,users:y,menuIsActive:D,handleMenuToggle:R,userProfilePic:F}),Object(l.jsxs)("div",{className:D?"dim--active":"dim",children:[Object(l.jsxs)("main",{className:"screen",children:[Object(l.jsx)(C,{room:v,handleMenuToggle:R}),Object(l.jsx)("div",{className:"containerContainer",children:Object(l.jsx)("div",{className:"desktopContainer",children:Object(l.jsx)(B,{getProfilePic:M,messages:d,name:n})})})]}),Object(l.jsx)(I,{room:v,message:x,setMessage:f,sendMessage:function(e){e.preventDefault(),x&&k.emit("sendMessage",x,(function(){return f("")}))}})]})]})},A=(a(95),function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(r.a,{path:"/",exact:!0,component:m}),Object(l.jsx)(r.a,{path:"/chat",component:T})]})});n.a.render(Object(l.jsx)(A,{}),document.querySelector("#root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.6ce47fde.chunk.js.map