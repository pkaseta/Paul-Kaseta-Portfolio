(this["webpackJsonppauls-portfolio"]=this["webpackJsonppauls-portfolio"]||[]).push([[0],{108:function(e,t){},109:function(e,t){},110:function(e,t){},111:function(e,t){},112:function(e,t){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(25),o=a.n(c),s=(a(73),a(11)),i=(a(74),a(125)),r=a(122),l=a(124),d=a(31),j=a(1);var b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.a,{variant:"light",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(i.a.Brand,{children:Object(j.jsx)(d.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:"Paul Kaseta"})}),Object(j.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(l.a,{className:"me-auto",children:[Object(j.jsx)(l.a.Link,{href:"https://github.com/pkaseta",style:{textDecoration:"none",color:"inherit"},children:"My Github"}),Object(j.jsx)(d.b,{to:"/Resume",style:{textDecoration:"none",color:"inherit"},children:"Resume"})]})})]})})})},h=a(10),m=a(40),u=a.p+"static/media/PaulKaseta1.75a65bee.pdf";a(113);m.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(m.c.version,"/pdf.worker.js");var p=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(1),s=Object(h.a)(o,2),i=s[0],r=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(m.a,{file:u,onLoadSuccess:function(e){var t=e.numPages;c(t)},children:Object(j.jsx)(m.b,{pageNumber:i})}),Object(j.jsxs)("div",{className:"pageButtons",children:[Object(j.jsxs)("p",{children:["Page ",i," of ",a]}),Object(j.jsx)("button",{onClick:function(){i>1&&r(i-1)},children:"-"}),Object(j.jsx)("button",{onClick:function(){i<3&&r(i+1)},children:"+"})]})]})},x=a(126),O=a(67),g=(a(114),a.p+"static/media/bookstoreScreenShot.15fa7bed.PNG"),f=a.p+"static/media/businessWebsite.0f62b57d.PNG",v=[{name:"CSS Text Editor",image:a.p+"static/media/CSSTextApp.9c47f312.PNG",description:"A website created with React.js. This app will allow you to enter any text you desire, manipulate its CSS properties with an easy to use UI, and will display the CSS code required to mimick the results. Still in progress, and adding more features.",githubRepo:"https://github.com/pkaseta/CSS-Text-Manipulaor",website:"https://pkaseta.github.io/CSS-Text-Manipulaor/"},{name:"eCommerce Store",image:g,description:"An ecommerce bookstore website. This site was a capstone project with Kenzie Academy, developed by myself, and three other teamates. There is a built in back end database, and the front end development was done in React.js.",githubRepo:"https://github.com/efgon/kapstone-frontend-book-resale",website:"https://efgon.github.io/kapstone-frontend-book-resale/"},{name:"Business Website",image:f,description:"A business landing page for a web design and application small business start-up. Built with React.js and utilizing node packages, this site is fully responsive, and deployed utilizing firebase.",githubRepo:"https://github.com/pkaseta/KW-Web-Integrations-Site",website:"https://kw-web-integrations.com"}];var w=function(){return Object(j.jsx)("div",{className:"project-card-container",children:Object(j.jsxs)(x.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",color:"white",marginTop:"5%",marginBottom:"8%",boxShadow:"5px 5px 5px black",display:"flex",justifyContent:"center"},children:[Object(j.jsx)(x.a.Header,{style:{textShadow:"3px 3px 3px black"},children:Object(j.jsx)("h4",{children:"My Projects"})}),Object(j.jsx)("div",{className:"project-cards",children:v.length?v.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(x.a,{style:{margin:"2vh 1vw 2vh 1vw",color:"white",backgroundColor:"rgba(0, 0, 0, 0.1)",width:"60%"},children:[Object(j.jsx)(x.a.Img,{variant:"top",src:e.image},e.name),Object(j.jsxs)(x.a.Body,{className:"d-flex flex-column",children:[Object(j.jsx)(x.a.Title,{style:{fontWeight:"bold",fontSize:"160%",textShadow:"2px 2px 2px black"},children:e.name}),Object(j.jsx)(x.a.Text,{style:{fontSize:"130%",textShadow:"2px 2px 2px black"},children:e.description}),Object(j.jsx)(O.a,{className:"mt-auto",href:e.website,variant:"dark",children:"Go To Site"},e.name),Object(j.jsx)(O.a,{href:e.githubRepo,style:{marginTop:"1rem"},variant:"dark",children:"GitHub Repo"},e.name)]})]})})})):""}),Object(j.jsx)(x.a.Footer,{})]})})},y=(a(115),a.p+"static/media/profilePic.b8095b60.jpeg"),S=a(123),k=(a(116),a(9)),C=a(3),N=a(18),F=(a(117),a(68));var T=function(e){var t=e.handleClose,a=Object(n.useRef)(),c=Object(n.useState)({email:"",name:"",phone:"",message:""}),o=Object(h.a)(c,2),s=o[0],i=o[1],r="user_bNRCAOqZaHeAQpPelPUZx",l=function(e){i(Object(C.a)(Object(C.a)({},s),{},Object(k.a)({},e.target.name,e.target.value)))};return console.log(s),Object(j.jsx)("div",{className:"contactForm",children:Object(j.jsxs)(N.a,{ref:a,onSubmit:function(e){var a=document.querySelector("#reactForm");console.log(a),e.preventDefault(),console.log(r),F.a.sendForm("service_33jx9fe","template_g058ppd",a,r).then((function(e){console.log(e.text),t()}),(function(e){console.log(e.text)}))},id:"reactForm",children:[Object(j.jsxs)(N.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(j.jsx)(N.a.Label,{children:"Email address"}),Object(j.jsx)(N.a.Control,{type:"email",placeholder:"name@example.com",name:"email",onChange:l})]}),Object(j.jsxs)(N.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(j.jsx)(N.a.Label,{children:"Name"}),Object(j.jsx)(N.a.Control,{type:"text",placeholder:"Full Name",name:"name",onChange:l})]}),Object(j.jsxs)(N.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(j.jsx)(N.a.Label,{children:"Phone Number"}),Object(j.jsx)(N.a.Control,{type:"text",placeholder:"555-555-5555",name:"phone",onChange:l})]}),Object(j.jsxs)(N.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(j.jsx)(N.a.Label,{children:"Message"}),Object(j.jsx)(N.a.Control,{as:"textarea",rows:3,name:"message",onChange:l})]}),Object(j.jsx)(O.a,{variant:"dark",type:"submit",children:"Submit"})]})})},P=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],o=a[1],s=function(){return o(!1)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.a,{variant:"dark",onClick:function(){return o(!0)},children:"Contact Me"}),Object(j.jsxs)(S.a,{show:c,onHide:s,id:"contact-offcanvas",children:[Object(j.jsx)(S.a.Header,{closeButton:!0,children:Object(j.jsx)(S.a.Title,{children:"Contact Form"})}),Object(j.jsx)(S.a.Body,{children:Object(j.jsx)(T,{handleClose:s})})]})]})};var R=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(x.a,{id:"about-me-card",children:[Object(j.jsx)(x.a.Header,{style:{textShadow:"3px 3px 3px white"},children:Object(j.jsx)("h4",{children:"About Me"})}),Object(j.jsx)(x.a.Img,{variant:"top",src:y,style:{margin:"auto",height:"10rem",width:"15rem",marginTop:"2rem"}}),Object(j.jsx)(x.a.Body,{style:{fontSize:"170%"},children:Object(j.jsx)(x.a.Text,{id:"about-me-card-text",children:"Highly motivated certified Front-End Developer, eager to share my management skills, sales, customer service background, and drive, to assist the business growth while advancing my development skills."})}),Object(j.jsx)(x.a.Footer,{children:Object(j.jsx)(P,{})})]})})};a(118);var I=function(e){return e.show,e.setShow,e.handleClose,e.handleShow,Object(j.jsxs)("div",{className:"home-page-container",id:"home",children:[Object(j.jsx)("div",{children:Object(j.jsx)(R,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(w,{})})]})};var G=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:I}),Object(j.jsx)(s.a,{exact:!0,path:"/Resume",component:p})]})]})};a(119);o.a.render(Object(j.jsx)(d.a,{basename:"/Paul-Kaseta-Portfolio",children:Object(j.jsx)(G,{})}),document.getElementById("root"))},61:function(e,t){},73:function(e,t,a){},74:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.ffcbf0a7.chunk.js.map