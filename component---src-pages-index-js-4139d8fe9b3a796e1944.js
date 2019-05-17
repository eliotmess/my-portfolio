(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,n){"use strict";n.r(t);n(147);var o=n(7),i=n.n(o),r=n(0),a=n.n(r),c=n(144),s=n(159),l=n.n(s),u=n(4),m=n.n(u),d=n(160),h=n.n(d);function f(){var e=h()(["\n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  html {\n    font-size: 62.5%;\n  }\n  \n  body {\n    margin: 0;\n    font-size: 1.6rem;\n    background-color: #282a36;\n  }\n\n  h1, h2, h3, h4, h5, p, li {\n    &:hover {\n      cursor: default;\n    }\n  }\n"]);return f=function(){return e},e}var p=Object(c.b)(f()),g=n(161),M=n.n(g),w=function(){return a.a.createElement(M.a,null,a.a.createElement("html",{lang:"pl"}),a.a.createElement("title",null,"Grzegorz Olejniczak - front-end / JavaScript / React.js"))},S={primary:"#282a36",secondary:"#6372a4",secondaryDark:"#44485b",pink:"#ec7eb1",green:"#7ec36a",whitey:"#f8f8f2",font:{size:{xxxs:"1.2rem",xxs:"1.5rem",xs:"2rem",s:"2.5rem",m:"4rem",l:"5rem",xl:"5.5rem",xxl:"7.2rem"},family:{nunito:"Nunito Sans, sans-serif"},weight:{light:"300",regular:"400",semiBold:"600",bold:"700"}},mq:{tablet:"@media (min-width: 796px)",desktop:"@media (min-width: 1024px)",wide:"@media (min-width: 1280px)",huge:"@media(min-width: 1600px)"}},L=(n(167),function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,null),a.a.createElement(p,null),a.a.createElement(c.a,{theme:S},a.a.createElement(a.a.Fragment,null,t)))});L.propTypes={children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]).isRequired};var y=L,x=(n(145),n(168)),N=n.n(x),b=c.c.ul.withConfig({displayName:"DesktopMenu__DesktopMenuWrapper",componentId:"sc-1jl8ezq-0"})(["display:none;position:fixed;bottom:12vh;left:7vw;padding:0;margin:0;","{display:flex;}"],function(e){return e.theme.mq.tablet}),j=c.c.li.withConfig({displayName:"DesktopMenu__DesktopMenuLink",componentId:"sc-1jl8ezq-1"})(["list-style:none;height:27px;margin:0 10px;font-size:",";","{font-size:",";height:34px;}"],function(e){return e.theme.font.size.xs},function(e){return e.theme.mq.huge},function(e){return e.theme.font.size.s}),C=c.c.img.withConfig({displayName:"DesktopMenu__Home",componentId:"sc-1jl8ezq-2"})(["height:25px;width:auto;border:none;vertical-align:bottom;padding-bottom:8px;","{height:30px;padding-bottom:8px;}"],function(e){return e.theme.mq.huge}),v=c.c.a.withConfig({displayName:"DesktopMenu__Link",componentId:"sc-1jl8ezq-3"})(["text-decoration:none;transition:all 0.35s ease-in-out;color:",";font-family:",";font-weight:",";"],function(e){return e.theme.pink},function(e){return e.theme.font.family.nunito},function(e){return e.theme.font.weight.bold}),E=c.c.span.withConfig({displayName:"DesktopMenu__Underline",componentId:"sc-1jl8ezq-4"})(["position:absolute;border-bottom:3px solid ",";z-index:-1;transition:all 0.35s ease-in-out;transform:",";width:","px;height:","px;left:","px;top:","px;"],function(e){return e.theme.pink},function(e){return e.transform||"translateX(-60px)"},function(e){return e.coords.width},function(e){return e.coords.height},function(e){return e.coords.left},function(e){return e.coords.top}),z=[{label:"home",img:"home",anchor:"home"},{label:"about me",anchor:"me"},{label:"my works",anchor:"works"},{label:"contact me",anchor:"contact"}],k=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMountOrResize=function(){for(var e in n.sectionRefs)n.sectionRefs[e].classList.contains("active")&&n.handleActive(n.sectionRefs[e])},n.handleUnderline=function(e){if(!e.target.parentNode.classList.contains("active")){var t={width:e.target.getBoundingClientRect().width,height:e.target.getBoundingClientRect().height,left:e.target.getBoundingClientRect().left,top:e.target.getBoundingClientRect().top+3};n.setState({hover:t,transform:"none"})}},n.handleUnderlineLeft=function(){n.setState({hover:{}})},n.handleActive=function(e){var t={width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height,left:e.getBoundingClientRect().left,top:e.getBoundingClientRect().top+3};n.setState({active:t,transform:"none"})},n.state={active:{},selected:"",hover:{},transform:"translateX(-60px)"},n.sectionRefs={},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.handleMountOrResize),this.handleMountOrResize()},t.getDerivedStateFromProps=function(e,t){return e.active!==t.selected?{selected:e.active}:null},n.componentDidUpdate=function(e){var t=this.props.active,n=this.state.selected;t!==e.active&&this.handleActive(this.sectionRefs[n])},n.render=function(){var e=this,t=this.state,n=t.hover,o=t.active,i=t.transform;return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",null,a.a.createElement(b,{id:"menu"},z.map(function(t){return a.a.createElement(j,{"data-menuanchor":t.anchor,key:t.label,ref:function(n){return e.sectionRefs[t.anchor]=n}},a.a.createElement(v,{href:"#".concat(t.anchor),onMouseEnter:function(t){return e.handleUnderline(t)},onMouseLeave:function(t){return e.handleUnderlineLeft(t)}},t.img?a.a.createElement(C,{src:N.a,alt:t.img}):t.label))}))),a.a.createElement(E,{coords:n.width?n:o,transform:i}))},t}(r.Component);k.propTypes={active:m.a.string},k.defaultProps={active:"home"};var D=k,I=n(169),T=n.n(I),R=n(170),_=n.n(R),A=c.c.div.withConfig({displayName:"HeroBar__BarWrapper",componentId:"mgqrx0-0"})(["position:absolute;top:0;left:50%;transform:translateX(-50%);width:94vw;display:flex;justify-content:flex-end;","{width:86vw;}"],function(e){return e.theme.mq.tablet}),Y=c.c.a.withConfig({displayName:"HeroBar__BarSocial",componentId:"mgqrx0-1"})(["display:none;height:4vh;width:4vh;max-height:45px;max-width:45px;margin-left:1.5vw;margin-top:4vh;","{display:block;}"],function(e){return e.theme.mq.tablet}),O=c.c.a.withConfig({displayName:"HeroBar__BarContact",componentId:"mgqrx0-2"})(["display:block;margin-top:4vh;color:",";text-decoration:none;font-family:",";font-weight:",";border-bottom:1.5px solid ",";","{display:none;}"],function(e){return e.theme.pink},function(e){return e.theme.font.family.nunito},function(e){return e.theme.font.weight.bold},function(e){return e.theme.pink},function(e){return e.theme.mq.tablet});var W=function(){return a.a.createElement(A,null,a.a.createElement(Y,{href:"https://github.com/eliotmess"},a.a.createElement("img",{src:T.a,alt:"github"})),a.a.createElement(Y,{href:"https://www.linkedin.com/in/olejniczag"},a.a.createElement("img",{src:_.a,alt:"linkedin"})),a.a.createElement(O,{href:"https://github.com/eliotmess"},"contact me"))},H=c.c.h1.withConfig({displayName:"HeroHeader__HeaderName",componentId:"sc-4skx4k-0"})(["color:",";font-size:",";font-weight:",";margin:0 0 10px 0;","{font-size:",";}","{font-size:",";}"],function(e){return e.theme.green},function(e){return e.theme.font.size.l},function(e){return e.theme.font.weight.bold},function(e){return e.theme.mq.tablet},function(e){return e.theme.font.size.xl},function(e){return e.theme.mq.huge},function(e){return e.theme.font.size.xxl}),U=c.c.h2.withConfig({displayName:"HeroHeader__SubHeaderRole",componentId:"sc-4skx4k-1"})(["color:",";font-size:",";font-weight:",";margin:0;","{font-size:",";}","{font-size:",";}"],function(e){return e.theme.green},function(e){return e.theme.font.size.m},function(e){return e.theme.font.weight.light},function(e){return e.theme.mq.tablet},function(e){return e.theme.font.size.l},function(e){return e.theme.mq.huge},function(e){return e.theme.font.size.xl}),q=c.c.div.withConfig({displayName:"HeroHeader__HeaderWrapper",componentId:"sc-4skx4k-2"})(["position:absolute;font-family:",";top:35vh;left:3vw;","{top:25vh;left:7vw;}"],function(e){return e.theme.font.family.nunito},function(e){return e.theme.mq.tablet});var Q=function(){return a.a.createElement(q,null,a.a.createElement(H,null,"GRZEGORZ OLEJNICZAK"),a.a.createElement(U,null,"Front-End Developer"))},X=(n(74),n(146)),P=n.n(X),B=n(173),J=n.n(B),Z=n(174),F=n.n(Z),G=n(175),V=n.n(G),K=n(176),$=n.n(K),ee=n(177),te=n.n(ee),ne=n(178),oe=n.n(ne),ie=c.c.div.withConfig({displayName:"HeroCube__CubePan",componentId:"i839w4-0"})(["position:absolute;opacity:0.8;top:0;left:0;height:230px;width:230px;background-size:cover;background-image:url(",");transform:"," translateZ(115px);","{height:280px;width:280px;transform:"," translateZ(140px);}"],function(e){return e.img},function(e){return e.transform},function(e){return e.theme.mq.huge},function(e){return e.transform}),re=[{img:""+J.a,transform:"translateX(-50%) translateY(-50%)"},{img:""+F.a,transform:"translateX(-50%) translateY(-50%) rotateY(90deg)"},{img:""+V.a,transform:"translateX(-50%) translateY(-50%) rotateY(-90deg)"},{img:""+$.a,transform:"translateX(-50%) translateY(-50%) rotateX(90deg)"},{img:""+te.a,transform:"translateX(-50%) translateY(-50%) rotateX(-90deg)"},{img:""+oe.a,transform:"translateX(-50%) translateY(-50%) rotateY(-180deg)"}],ae=c.c.div.withConfig({displayName:"HeroCube__CubeWrapper",componentId:"i839w4-1"})(["display:none;height:100vh;width:100vw;z-index:99;&:hover{cursor:","}","{display:block;}"],function(e){return e.grabbed?"grabbing":"grab"},function(e){return e.theme.mq.tablet}),ce=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={midX:0,midY:0,animate:!0},n}i()(t,e);var n=t.prototype;return n.onRotate=function(){var e=this.state.animate,t=document.getElementById("cube"),n=window.getComputedStyle(t,null).getPropertyValue("transform").split("(")[1],o=(n=(n=n.split(")")[0]).split(","))[5],i=n[6],r=Math.round(Math.atan2(i,o)*(180/Math.PI));this.setState({animate:!e,midX:r,midY:r})},n.onStopRotate=function(){var e=this.state.animate;this.setState({animate:!e})},n.handleRotate=function(e){if(!this.state.animate){var t=e.pageX,n=e.pageY,o=t-window.innerWidth/2,i=n-window.innerHeight/2,r=this.state,a=r.midX,c=r.midY;a>o?a++:a--,c<i?c--:c++,this.setState({midX:a,midY:a})}},n.render=function(){var e=this,t=this.state,n=t.midX,o=t.midY,i=t.animate,r=c.c.section.withConfig({displayName:"HeroCube__Section",componentId:"i839w4-2"})(["position:absolute;top:60vh;right:25vw;transform-style:preserve-3d;backface-visibility:hidden;animation:",";transform:rotateX(","deg) rotateY(","deg);@keyframes rotate{0%{transform:rotateX(","deg) rotateY(","deg);}100%{transform:rotateX(","deg) rotateY(","deg);}}"],i?"rotate 12s linear infinite":"",o,n,o,n,o+360,n+360);return a.a.createElement(ae,{onMouseMove:function(t){return e.handleRotate(t)},onMouseUp:function(){return!i&&e.onStopRotate()},onMouseDown:function(t){return e.onRotate(t)},grabbed:!i},a.a.createElement(r,{id:"cube"},re.map(function(e){return a.a.createElement(ie,{transform:e.transform,img:e.img,key:P.a.v4()})})))},t}(r.Component),se=c.c.div.withConfig({displayName:"HeroArrow__ArrowWrapper",componentId:"sc-1fke69s-0"})(["display:block;position:absolute;bottom:2vh;left:50%;transform:translateX(50%);padding-top:52px;"]),le=c.c.span.withConfig({displayName:"HeroArrow__ArrowDown",componentId:"sc-1fke69s-1"})(["display:block;margin:0 auto;width:9px;height:38px;&:after{content:'';display:block;margin:0;padding:0;width:9px;height:9px;border-top:1.5px solid ",";border-right:1.5px solid ",";behavior:url(-ms-transform.htc);transform:rotate(135deg);}&:before{content:' ';position:absolute;top:0px;left:50%;margin-left:-0.5px;width:1.5px;height:60px;background:",";}"],function(e){return e.theme.secondary},function(e){return e.theme.secondary},function(e){return e.theme.secondary});var ue=function(){return a.a.createElement(se,null,a.a.createElement(le,null))},me=c.c.div.withConfig({displayName:"Hero__HeroWrapper",componentId:"sc-1nvnclk-0"})(["width:80vw;margin-left:12vw;"]);var de=function(){return a.a.createElement(me,null,a.a.createElement(W,null),a.a.createElement(Q,null),a.a.createElement(ce,null),a.a.createElement(ue,null))},he=n(179),fe=c.c.div.withConfig({displayName:"SkillsList__SkillsWrapper",componentId:"sc-389gi6-0"})(["overflow-y:scroll;overflow-x:scroll;position:relative;padding-left:10px;top:10%;left:50%;transform:translateX(-50%);z-index:20;height:110%;width:55%;background:",";&::-webkit-scrollbar-thumb{background:",";}&::-webkit-scrollbar-corner{background:",";}&::-webkit-scrollbar{opacity:0;background:",";}","{width:45%;height:120%;top:-10%;}"],function(e){return e.theme.primary},function(e){return e.theme.primary},function(e){return e.theme.primary},function(e){return e.theme.primary},function(e){return e.theme.mq.tablet}),pe=c.c.ul.withConfig({displayName:"SkillsList__SkillsListWrapper",componentId:"sc-389gi6-1"})(["text-align:center;padding:0;margin:0;"]),ge=c.c.li.withConfig({displayName:"SkillsList__SkillsListElement",componentId:"sc-389gi6-2"})(["color:",";font-size:",";line-height:1.4;list-style:none;&:hover{cursor:ns-resize;}","{font-size:",";}","{font-size:",";}","{line-height:1.7;}"],function(e){return e.theme.green},function(e){return e.theme.font.size.s},function(e){return e.theme.mq.tablet},function(e){return e.theme.font.size.xs},function(e){return e.theme.mq.wide},function(e){return e.theme.font.size.s},function(e){return e.theme.mq.huge}),Me=["JSX","Node.js","JavaScript (ES6+)","Adobe CC","CSS3","BEM","RWD","HTML5","REST API","Redux","React.js","Docker","Gatsby.js","Lodash","Git","npm","Shell","Webpack","Postman","Jira","Enzyme","bash","Sass (SCSS)","Socket.IO","Firebase","Express","Bootstrap","MongoDB","React Router","Mocha","Trello","Mongoose","jQuery","Jest","Pug","styled components"],we=function(e){function t(t){var n;return(n=e.call(this,t)||this).skills=a.a.createRef(),n.state={skills:[],animateList:!0,scrollTop:1},n.handleScrolling=Object(he.throttle)(n.handleScrolling,20),n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({skills:Me})},n.componentDidUpdate=function(){var e=this.state,t=e.animateList,n=e.scrollTop,o=this.props.active;t&&"me"===o&&(this.skills.current.scrollTop=++n)},n.handleScrolling=function(){var e=this,t=this.state,n=t.scrollTop,o=t.skills;if(n=++n,setTimeout(function(){e.setState({scrollTop:n})},0),this.skills.current.scrollHeight-this.skills.current.scrollTop===this.skills.current.clientHeight){var i=o.concat(Me);setTimeout(function(){e.setState({skills:i})},200)}},n.handleManualScrollOn=function(){this.skills.current.classList.add("skillsList"),this.setState({animateList:!1})},n.handleManualScrollOff=function(){this.skills.current.classList.remove("skillsList");var e=this.skills.current.scrollTop;this.setState({animateList:!0,scrollTop:e})},n.render=function(){var e=this,t=this.state.skills;return a.a.createElement(fe,{onScroll:function(){return e.handleScrolling()},onMouseEnter:function(){return e.handleManualScrollOn()},onTouchStart:function(){return e.handleManualScrollOn()},onMouseLeave:function(){return e.handleManualScrollOff()},onTouchMove:function(){return e.handleManualScrollOff()},ref:this.skills},a.a.createElement(pe,null,t.map(function(e){return a.a.createElement(ge,{key:P.a.v4()},e)})))},t}(r.Component);we.propTypes={active:m.a.string.isRequired};var Se=we,Le=c.c.div.withConfig({displayName:"AboutSkills__AboutSkillsWrapper",componentId:"sc-18i7b1-0"})(["width:100%;height:45vh;position:relative;margin-top:150px;&::before{content:'';position:absolute;width:100%;height:100%;border:2px solid ",";top:30%;z-index:1;}&::after{position:absolute;right:0;width:70px;height:265px;border:2px solid ",";top:0;z-index:3;}","{width:30%;margin-top:0;&::before{top:0;}&::after{content:'';}}"],function(e){return e.theme.secondaryDark},function(e){return e.theme.primary},function(e){return e.theme.mq.tablet}),ye=c.c.h2.withConfig({displayName:"AboutSkills__HeadingMedium",componentId:"sc-18i7b1-1"})(["color:",";font-size:",";font-weight:",";letter-spacing:6px;margin:0;z-index:10;display:inline;","{transform:translateX(50%) translateY(100%) rotate(90deg);position:absolute;right:20px;top:20px;}","{font-size:",";}"],function(e){return e.theme.pink},function(e){return e.theme.font.size.m},function(e){return e.theme.font.weight.bold},function(e){return e.theme.mq.tablet},function(e){return e.theme.mq.wide},function(e){return e.theme.font.size.l}),xe=function(e){var t=e.active;return a.a.createElement(Le,null,a.a.createElement(ye,null,"my skills"),a.a.createElement(Se,{active:t}))};xe.propTypes={active:m.a.string.isRequired};var Ne=xe,be=c.c.div.withConfig({displayName:"AboutMe__AboutMeWrapper",componentId:"bwes03-0"})(["width:100%;","{width:50%;}"],function(e){return e.theme.mq.tablet}),je=c.c.h1.withConfig({displayName:"AboutMe__HeadingBig",componentId:"bwes03-1"})(["color:",";font-size:",";font-weight:",";letter-spacing:6px;margin:0 0 10px 0;","{font-size:",";}"],function(e){return e.theme.pink},function(e){return e.theme.font.size.l},function(e){return e.theme.font.weight.bold},function(e){return e.theme.mq.wide},function(e){return e.theme.font.size.xl}),Ce=c.c.div.withConfig({displayName:"AboutMe__AboutMeColumn",componentId:"bwes03-2"})(["width:90%;max-width:650px;position:relative;&::before{content:'';position:absolute;width:105%;height:90%;border:2px solid ",";top:15%;z-index:3;}&::after{content:'';position:absolute;width:110%;height:100%;border:2px solid ",";top:15%;z-index:1;}","{width:100%;}"],function(e){return e.theme.primary},function(e){return e.theme.secondaryDark},function(e){return e.theme.mq.tablet}),ve=c.c.p.withConfig({displayName:"AboutMe__AboutMeText",componentId:"bwes03-3"})(["color:",";font-size:",";text-align:justify;position:relative;z-index:5;","{font-size:",";}"],function(e){return e.theme.whitey},function(e){return e.theme.font.size.xs},function(e){return e.theme.mq.wide},function(e){return e.theme.font.size.s});var Ee=function(){return a.a.createElement(be,null,a.a.createElement(je,null,"about me_"),a.a.createElement(Ce,null,a.a.createElement(ve,null,"My goal is to co-create digital products that give users the answers they need while providing remarkable experiences. I deployed my web development skills through self-study, as well as under the supervision of experienced coders — creating, among others, functional, progressive web apps. I pay great attention to details, usability, use of reliable and up-to-date solutions and aesthetics of both, code and layout.")))},ze=c.c.div.withConfig({displayName:"About__AboutWrapper",componentId:"sc-72pkl8-0"})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;padding-bottom:8%;margin:0 7vw 0 7vw;font-family:",";","{flex-direction:row-reverse;}"],function(e){return e.theme.font.family.nunito},function(e){return e.theme.mq.tablet}),ke=function(e){var t=e.active;return a.a.createElement(ze,null,a.a.createElement(Ee,null),a.a.createElement(Ne,{active:t}))};ke.propTypes={active:m.a.string.isRequired};var De=ke,Ie=(n(181),n(182),c.c.div.withConfig({displayName:"WorkCard__WorkCardWrapper",componentId:"sc-35ks5r-0"})(["margin:0;width:100%;height:50%;margin-top:5%;display:flex;flex-direction:column;float:left;","{width:48%;}","{width:32%;}"],function(e){return e.theme.mq.tablet},function(e){return e.theme.mq.wide})),Te=c.c.div.withConfig({displayName:"WorkCard__WorkCardImg",componentId:"sc-35ks5r-1"})(["height:61.8%;width:100%;background:",";"],function(e){return e.theme.secondary}),Re=c.c.div.withConfig({displayName:"WorkCard__WorkCardInfo",componentId:"sc-35ks5r-2"})(["height:38.2%;display:flex;flex-direction:column;justify-content:space-between;padding:3% 5%;"]),_e=c.c.div.withConfig({displayName:"WorkCard__WorkCardHeader",componentId:"sc-35ks5r-3"})(["display:flex;justify-content:space-between;font-size:",";line-height:1.6;margin-top:10px;","{font-size:",";}"],function(e){return e.theme.font.size.xs},function(e){return e.theme.mq.huge},function(e){return e.theme.font.size.xs}),Ae=c.c.div.withConfig({displayName:"WorkCard__WorkCardBasic",componentId:"sc-35ks5r-4"})(["display:flex;flex-direction:column;color:",";"],function(e){return e.theme.whitey}),Ye=c.c.p.withConfig({displayName:"WorkCard__WorkCardName",componentId:"sc-35ks5r-5"})(["display:flex;margin:0;"]),Oe=c.c.div.withConfig({displayName:"WorkCard__WorkCardLinks",componentId:"sc-35ks5r-6"})(["display:flex;"]),We=c.c.a.withConfig({displayName:"WorkCard__WorkCardLink",componentId:"sc-35ks5r-7"})(["color:",";font-size:",";margin-right:15px;&:hover{cursor:pointer;color:",";}","{font-size:",";}"],function(e){return e.theme.whitey},function(e){return e.theme.font.size.xxs},function(e){return e.theme.green},function(e){return e.theme.mq.huge},function(e){return e.theme.font.size.xs}),He=c.c.p.withConfig({displayName:"WorkCard__WorkCardDate",componentId:"sc-35ks5r-8"})(["margin:0;color:",";"],function(e){return e.theme.secondary}),Ue=c.c.div.withConfig({displayName:"WorkCard__WorkCardTech",componentId:"sc-35ks5r-9"})(["display:flex;flex-wrap:wrap;"]),qe=c.c.div.withConfig({displayName:"WorkCard__TechThumbnail",componentId:"sc-35ks5r-10"})(["background:",";padding:1px 4px;border-radius:9px;margin:13px 8px 0 0;color:",";font-weight:",";font-size:",";","{font-size:",";}","{font-size:",";}"],function(e){return e.theme.green},function(e){return e.theme.primary},function(e){return e.theme.font.weight.semiBold},function(e){return e.theme.font.size.xxs},function(e){return e.theme.mq.wide},function(e){return e.theme.font.size.xxs},function(e){return e.theme.mq.huge},function(e){return e.theme.font.size.xs}),Qe=function(e){var t=e.project,n=t.name,o=t.demo,i=t.github,r=t.date,c=t.tech;return a.a.createElement(Ie,null,a.a.createElement(Te,null),a.a.createElement(Re,null,a.a.createElement(_e,null,a.a.createElement(Ae,null,a.a.createElement(Ye,null,n),a.a.createElement(Oe,null,a.a.createElement(We,{href:o},"demo"),a.a.createElement(We,{href:i},"GitHub"))),a.a.createElement(He,null,r)),a.a.createElement(Ue,null,c.map(function(e){return a.a.createElement(qe,{key:P.a.v4()},e)}))))};Qe.propTypes={project:m.a.objectOf(m.a.oneOfType([m.a.string,m.a.array])).isRequired};var Xe=Qe,Pe=[{id:"10",works:[{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"1",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"2",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"3",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]}]},{id:"11",works:[{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"4",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"5",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"6",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]}]}],Be=[{id:"10",works:[{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"1",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"2",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]}]},{id:"11",works:[{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"3",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"4",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]}]},{id:"12",works:[{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"5",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"6",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]}]}],Je=[{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"1",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"2",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"3",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"4",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"5",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]},{name:"v-dreams e-commerce",date:"03.2019",demo:"http://google.com",github:"http://google.com",id:"6",tech:["HTML5","CSS3","Sass (SCSS)","React.js","JS (ES6+)","Redux","Firebase"]}],Ze=c.c.div.withConfig({displayName:"Works__WorksWrapper",componentId:"sc-1oslsbx-0"})(["display:flex;align-items:space-between;position:relative;font-family:",";"],function(e){return e.theme.font.family.nunito}),Fe=c.c.div.withConfig({displayName:"Works__Slide",componentId:"sc-1oslsbx-1"})(["padding:0 10vw;"]),Ge=c.c.h1.withConfig({displayName:"Works__HeadingBig",componentId:"sc-1oslsbx-2"})(["color:",";font-size:",";font-weight:",";letter-spacing:6px;margin:0 0 10px 0;position:absolute;top:15vh;left:10vw;","{font-size:",";}"],function(e){return e.theme.pink},function(e){return e.theme.font.size.l},function(e){return e.theme.font.weight.bold},function(e){return e.theme.mq.wide},function(e){return e.theme.font.size.xl});var Ve=function(){var e=Pe;return window.innerWidth>=796&&window.innerWidth<1280&&(e=Be),window.innerWidth<796&&(e=Je),a.a.createElement(Ze,null,a.a.createElement(Ge,null,"my works_"),window.innerWidth>=796?e.map(function(e){return a.a.createElement(Fe,{key:e.id,className:"slide"},e.works.map(function(e){return a.a.createElement(Xe,{key:e.id,project:e})}))}):e.map(function(e){return a.a.createElement(Fe,{key:-e.id,className:"slide"},a.a.createElement(Xe,{key:e.id,project:e}))}))},Ke=n(183),$e=n.n(Ke),et=c.c.div.withConfig({displayName:"Contact__ContactWrapper",componentId:"sc-1if96uj-0"})(["display:flex;flex-direction:column;padding:0 7vw;font-family:",";"],function(e){return e.theme.font.family.nunito}),tt=c.c.h1.withConfig({displayName:"Contact__HeadingBig",componentId:"sc-1if96uj-1"})(["color:",";font-size:",";font-weight:",";letter-spacing:6px;","{font-size:",";}"],function(e){return e.theme.pink},function(e){return e.theme.font.size.l},function(e){return e.theme.font.weight.bold},function(e){return e.theme.mq.wide},function(e){return e.theme.font.size.xl}),nt=c.c.div.withConfig({displayName:"Contact__Footer",componentId:"sc-1if96uj-2"})(["position:absolute;bottom:2vh;right:8vw;"]),ot=c.c.p.withConfig({displayName:"Contact__FooterText",componentId:"sc-1if96uj-3"})(["color:",";font-weight:",";font-size:",";margin:0;word-spacing:3px;"],function(e){return e.theme.secondary},function(e){return e.theme.font.weight.semiBold},function(e){return e.theme.font.size.xs}),it=c.c.img.withConfig({displayName:"Contact__GatsbyLogo",componentId:"sc-1if96uj-4"})(["height:18px;"]),rt=function(){return a.a.createElement(et,null,a.a.createElement(tt,null,"contact_me"),a.a.createElement(nt,null,a.a.createElement(ot,null,"made with ",a.a.createElement(it,{src:$e.a,alt:"gatsby-logo"})," and 🧛 © Grzegorz Olejniczak, 2019")))},at=c.c.div.withConfig({displayName:"pages__Section",componentId:"sc-6kvjaa-0"})([""]),ct=function(e){function t(t){var n;return(n=e.call(this,t)||this).setActive=function(e){n.setState({activeSection:e})},n.handleReload=function(){setTimeout(function(){location.reload()},100)},n.state={activeSection:""},n}return i()(t,e),t.prototype.render=function(){var e=this,t=this.state.activeSection;return a.a.createElement(y,null,a.a.createElement(l.a,{render:function(){return a.a.createElement(l.a.Wrapper,null,a.a.createElement(at,{className:"section"},a.a.createElement(de,{"data-anchor":"home"})),a.a.createElement(at,{className:"section"},a.a.createElement(De,{"data-anchor":"me",active:t})),a.a.createElement(at,{className:"section"},a.a.createElement(Ve,{"data-anchor":"works"})),a.a.createElement(at,{className:"section"},a.a.createElement(rt,{"data-anchor":"contact"})))},menu:"#menu",anchors:["home","me","works","contact"],onLeave:function(t,n){return e.setActive(n.anchor)},afterResize:function(){return e.handleReload()},licenseKey:"MY_KEY",responsiveWidth:"796",normalScrollElements:".skillsList",continuousHorizontal:!0}),a.a.createElement(D,{active:t}))},t}(r.Component);t.default=ct},168:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkuMzMgMTguNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE4LjE3IDcuNzZ2OS40N2MwIDEtLjI5IDEuMzYtMS4zMSAxLjMtMS4zNC0uMDgtMi43IDAtNCAwLS41OCAwLS43Ni0uMTktLjc1LS43NSAwLTEuODkgMC0zLjc4IDAtNS42NiAwLS43My0uMjMtLjkzLS45Mi0uOWEyMy41NyAyMy41NyAwIDAgMSAtMyAwYy0uOC0uMDYtMSAuMjUtLjk0IDF2NS40NmMwIC42My0uMTQuOS0uODQuODctMS40MS0uMDUtMi44My0uMDUtNC4yNCAwLS44MyAwLTEtLjMxLTEtMS4wNyAwLTMuMjMgMC02LjQ3IDAtOS42Ny0uMjMtLjE0LS4zNyAwLS41LjA2cy0uNDUuMTMtLjYxLS4xMSAwLS40NS4yMS0uNmMuNzMtLjU3IDEuNDItMS4xNiAyLjE0LTEuNyAyLjE5LTEuNzIgNC40LTMuNDYgNi41OS01LjE3YS45Mi45MiAwIDAgMSAxLjMzIDBjMi43OCAyLjE5IDUuNTcgNC4zNSA4LjM1IDYuNTQuMjguMjMuODMuNDMuNTkuOTJzLS42OS0uMTctMS4xLjAxeiIgZmlsbD0iI2ViN2ViMSIvPjxwYXRoIGQ9Im0xNi4xIDMuNzhjLS44Mi0uNjQtMS41Mi0xLjE0LTIuMTctMS43LS4zMS0uMjYtLjI5LS41My4yLS41NmEuMTcuMTcgMCAwIDEgLjEgMGMyLjI3LjA1IDEuOTMtLjQxIDEuODcgMi4yNnoiIGZpbGw9IiNlYjgwYjIiLz48L3N2Zz4="},169:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Mi40NyA1MS4xNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM2MzcyYTQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5aYXPDs2IgMjwvdGl0bGU+PGcgaWQ9IldhcnN0d2FfMiIgZGF0YS1uYW1lPSJXYXJzdHdhIDIiPjxnIGlkPSJXYXJzdHdhXzEtMiIgZGF0YS1uYW1lPSJXYXJzdHdhIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE3LjU1LDQxLjE5YzAsLjIyLS4yNC4zOS0uNTUuMzlzLS41OS0uMTQtLjU5LS4zOS4yNC0uMzguNTUtLjM4UzE3LjU1LDQxLDE3LjU1LDQxLjE5Wm0tMy4yOS0uNDdjLS4wNy4yMS4xNC40NS40Ni41MnMuNTksMCwuNjUtLjIxLS4xNC0uNDYtLjQ1LS41NmEuNTUuNTUsMCwwLDAtLjY2LjI1Wm00LjY4LS4xOGMtLjMxLjA3LS41Mi4yNy0uNDkuNTJzLjMxLjM1LjYyLjI3LjUyLS4yNy40OS0uNDhTMTkuMjQsNDAuNTEsMTguOTQsNDAuNTRaTTI1LjksMEMxMS4yMiwwLDAsMTEuMTQsMCwyNS44MUEyNi41MywyNi41MywwLDAsMCwxNy45Myw1MS4xMmMxLjM2LjI0LDEuODMtLjYsMS44My0xLjI4czAtNC4yOCwwLTYuNWMwLDAtNy40MSwxLjU5LTktMy4xNSwwLDAtMS4yMS0zLjA4LTIuOTQtMy44NywwLDAtMi40Mi0xLjY2LjE3LTEuNjNhNS41OCw1LjU4LDAsMCwxLDQuMDgsMi43M2MyLjMyLDQuMDgsNi4yLDIuOTEsNy43MSwyLjIxYTUuOSw1LjksMCwwLDEsMS43LTMuNTdjLTUuOTItLjY1LTExLjg4LTEuNTEtMTEuODgtMTEuNjlhOCw4LDAsMCwxLDIuNDktNi4yM0ExMCwxMCwwLDAsMSwxMi4zOCwxMWMyLjIxLS42OSw3LjMsMi44Niw3LjMsMi44NmEyNC45NCwyNC45NCwwLDAsMSwxMy4yOCwwczUuMDktMy41Niw3LjMtMi44NmExMCwxMCwwLDAsMSwuMjgsNy4xOGMxLjY5LDEuODgsMi43MywzLjM0LDIuNzMsNi4yMywwLDEwLjIxLTYuMjMsMTEtMTIuMTUsMTEuNjksMSwuODQsMS44LDIuNDMsMS44LDQuOTEsMCwzLjU3LDAsOCwwLDguODUsMCwuNjguNDksMS41MiwxLjgzLDEuMjhBMjYuMjksMjYuMjksMCwwLDAsNTIuNDcsMjUuODFDNTIuNDcsMTEuMTQsNDAuNTcsMCwyNS45LDBaTTEwLjI4LDM2LjQ5Yy0uMTMuMS0uMS4zNS4wOC41NXMuNDEuMjQuNTUuMS4xLS4zNS0uMDgtLjU1UzEwLjQyLDM2LjM1LDEwLjI4LDM2LjQ5Wm0tMS4xNC0uODZjLS4wNy4xNCwwLC4zMS4yNC40MUEuMzIuMzIsMCwwLDAsOS44NCwzNmMuMDctLjE0LDAtLjMxLS4yNC0uNDFTOS4yMSwzNS41Miw5LjE0LDM1LjYzWm0zLjQzLDMuNzdjLS4xNy4xMy0uMTEuNDUuMTQuNjVzLjU1LjI4LjY4LjExLjA4LS40Ni0uMTMtLjY2UzEyLjcxLDM5LjIzLDEyLjU3LDM5LjRabS0xLjIxLTEuNTZjLS4xNy4xMS0uMTcuMzgsMCwuNjJzLjQ2LjM1LjU5LjI1YS40OS40OSwwLDAsMCwwLS42NmMtLjE0LS4yNC0uNDItLjM1LS41OS0uMjFaIi8+PC9nPjwvZz48L3N2Zz4="},170:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MC45IDUxLjE2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzYzNzJhNDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlphc8OzYiAzPC90aXRsZT48ZyBpZD0iV2Fyc3R3YV8yIiBkYXRhLW5hbWU9IldhcnN0d2EgMiI+PGcgaWQ9IldhcnN0d2FfMS0yIiBkYXRhLW5hbWU9IldhcnN0d2EgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDcuMjcsMEgzLjYyQTMuNjYsMy42NiwwLDAsMCwwLDMuNjlWNDcuNDdhMy42NiwzLjY2LDAsMCwwLDMuNjIsMy42OUg0Ny4yN2EzLjY3LDMuNjcsMCwwLDAsMy42My0zLjY5VjMuNjlBMy42NywzLjY3LDAsMCwwLDQ3LjI3LDBaTTE1LjM4LDQzLjg1SDcuODRWMTkuNDRIMTUuNFY0My44NVpNMTEuNjEsMTYuMUE0LjQsNC40LDAsMSwxLDE2LDExLjcxLDQuMzgsNC4zOCwwLDAsMSwxMS42MSwxNi4xWk00My42Nyw0My44NUgzNi4xMlYzMmMwLTIuODQtLjA2LTYuNDgtMy45Mi02LjQ4cy00LjUzLDMuMDgtNC41Myw2LjI3VjQzLjg1SDIwLjEyVjE5LjQ0aDcuMjR2My4zM2guMWE3Ljk0LDcuOTQsMCwwLDEsNy4xNS0zLjk0YzcuNjMsMCw5LjA2LDUuMDYsOS4wNiwxMS42NFoiLz48L2c+PC9nPjwvc3ZnPg=="},173:function(e,t,n){e.exports=n.p+"static/6-052b343e8d2e3230c0b7e91888b91df9.jpg"},174:function(e,t,n){e.exports=n.p+"static/7-3a4beeab87f863519f4760c786aab345.jpg"},175:function(e,t,n){e.exports=n.p+"static/8-826f4845250224bae06687939885c10b.jpg"},176:function(e,t,n){e.exports=n.p+"static/9-f1c85e3ef0ae226d0f054257770f16a0.jpg"},177:function(e,t,n){e.exports=n.p+"static/10-27fd91d91eba0f19fa86c17e91040139.jpg"},178:function(e,t,n){e.exports=n.p+"static/11-112beafad4fd29ee7983373e945d4415.jpg"},183:function(e,t,n){e.exports=n.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-4139d8fe9b3a796e1944.js.map