(this["webpackJsonpreact-blog-github"]=this["webpackJsonpreact-blog-github"]||[]).push([[0],{132:function(n,e,t){n.exports=t(489)},488:function(n,e,t){},489:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(115),i=t.n(a),c=t(12),u=t(11),l=t(116),s=t(5),d={githubConvertedToken:"Z2hwX3RFUVA5azExQzhsdXEwbDR2V2VKR1VLbUV0WVdUVDQza3c2WA==",githubUserName:"thongvo109",githubRepo:"did_change_biometric",enableOAuth:!0,OAuthClientID:"Iv1.e4c67b652e09ad53",OAuthSecret:"3f270046472a50a8b6a3739c6b70b5ad7ac05fdb",title:"Thong Vo",subtitle:"Flutter Developer",header:{backgroundColor:"#f1f6f8",backgroundColorDark:"#4C566A",titleColor:"#ff5252",titleColorDark:"#16a085",subtitleColor:"#37474f",subtitleColorDark:"#D8DEE9"}},m=t(22),f=new m.a({uri:"https://api.github.com/graphql",request:function(n){n.setContext({headers:{authorization:"Bearer ".concat(atob(d.githubConvertedToken))}})}}),b=function(n){return new m.a({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat(n)}})}})},p=t(74),h=t(23),g=t(4),v=t(31);function x(){var n=Object(g.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 700px;\n  padding: 20px 10px;\n"]);return x=function(){return n},n}var w=s.c.div(x());function E(){var n=Object(g.a)(["\n  cursor: pointer;\n  margin-bottom: 6rem;\n  border-radius: 10px;\n  padding: 10px;\n  transition: 0.2s;\n  position: relative;\n  background-color: ",";\n\n  :hover {\n    background-color: ",";\n  }\n"]);return E=function(){return n},n}var k=s.c.div(E(),(function(n){return n.color}),(function(n){return"light"===n.theme.mode?"#F5F5F5":"#3B4252"}));function O(){var n=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return O=function(){return n},n}var j=s.c.div(O());function y(){var n=Object(g.a)(["\n  display: inline-block;\n  background: #009bbb;\n  border-radius: 3px;\n  padding: 3px 15px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: ",';\n  font-weight: 300;\n  line-height: 28px;\n  font-family: "Quicksand";\n  margin-right: 10px;\n']);return y=function(){return n},n}var A=s.c.div(y(),(function(n){return n.theme.body})),C=function(n){var e=n.value;return o.a.createElement(A,{key:e.id,style:{backgroundColor:"#".concat(e.color)}},e.name)};function S(){var n=Object(g.a)(["\n  font-size: 34px;\n"]);return S=function(){return n},n}var z=s.c.h2(S());function T(){var n=Object(g.a)(["\n  font-size: 18px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]);return T=function(){return n},n}var U=s.c.p(T());function M(){var n=Object(g.a)(["\n  color: #b5b5b5;\n  font-size: 15px;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n"]);return M=function(){return n},n}var D=s.c.p(M()),R=function(n){var e=n.time;return o.a.createElement(D,null,e," Min Read")},I=t(50),F=t.n(I),L=function(n){var e=n.blog,t=Object(r.useState)([]),a=Object(c.a)(t,2),i=a[0],u=a[1],l=Object(h.f)();return Object(r.useEffect)((function(){var n=e.labels.nodes.filter((function(n){return n.name}));console.log(e.labels.nodes),u(n)}),[e.labels.nodes]),o.a.createElement(k,{color:"#DEDEDE"},o.a.createElement(j,null,o.a.createElement(o.a.Fragment,null,i.map((function(n,e){return o.a.createElement(C,{value:n,key:e})}))),o.a.createElement(R,{time:F()(e.body).minutes})),o.a.createElement("div",{onClick:function(){return n=e.title,t=e.number,void l.push("/blog/".concat(n,"/").concat(t));var n,t}},o.a.createElement(z,null,e.title),o.a.createElement(U,null,e.bodyText)))};function B(n){var e=n.fill;return o.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:e},o.a.createElement("g",{fill:"none",fillRule:"evenodd"},o.a.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},o.a.createElement("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),o.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},o.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function _(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"]);return _=function(){return n},n}var W=s.c.span(_()),H=function(){return o.a.createElement(W,null,o.a.createElement(B,{fill:"#2ecc71"}))};function Y(){var n=Object(g.a)(["\n  position: relative;\n  padding: 5em;\n  text-align: center;\n  background: ",";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n\n  @media only screen and (max-width: 768px) {\n    padding: 3em;\n  }\n"]);return Y=function(){return n},n}var N=d.header,P=N.backgroundColor,V=N.backgroundColorDark,q=s.c.div(Y(),(function(n){return"light"===n.theme.mode?P:V}));function G(){var n=Object(g.a)(["\n  margin: 0 auto;\n  padding: 0 1em;\n  max-width: 1140px;\n  text-align: center;\n"]);return G=function(){return n},n}var Q=s.c.div(G());function J(){var n=Object(g.a)(["\n  font-weight: 700;\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 4.5em;\n  text-align: center;\n  color: ",";\n\n  @media only screen and (max-width: 768px) {\n    font-size: 3em;\n  }\n"]);return J=function(){return n},n}var K=d.header,X=K.titleColor,Z=K.titleColorDark,$=s.c.h1(J(),(function(n){return"light"===n.theme.mode?X:Z}));function nn(){var n=Object(g.a)(["\n  font-weight: 400;\n  color: ",";\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 2.5em;\n  text-align: center;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 2em;\n  }\n"]);return nn=function(){return n},n}var en=d.header,tn=en.subtitleColor,rn=en.subtitleColorDark,on=s.c.h1(nn(),(function(n){return"light"===n.theme.mode?tn:rn})),an=function(){return o.a.createElement(q,null,o.a.createElement(xn,{isAbsolute:!0}),o.a.createElement(Q,null,o.a.createElement($,null,d.title),o.a.createElement(on,null,d.subtitle)))},cn=t(13),un=t.n(cn),ln=t(125),sn=t(126);function dn(){var n=Object(g.a)(["\n  color: #FFF;\n  font-size: 18px;\n"]);return dn=function(){return n},n}function mn(){var n=Object(g.a)(["\n  -webkit-appearance: none;\n  background: linear-gradient(180deg, rgb(136, 220, 109) 0%, rgb(92, 168, 65) 100%);\n  color: #FFF;\n  border: none;\n  padding: 8px 16px;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.2s;\n  outline: 0;\n\n  :hover {\n    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.10);\n  }\n"]);return mn=function(){return n},n}function fn(){var n=Object(g.a)(["\n  display: ",";\n  position: ",";\n  top: 10px;\n  right: 10px;\n"]);return fn=function(){return n},n}var bn=d.enableOAuth,pn=d.OAuthClientID,hn=s.c.div(fn(),bn?"block":"none",(function(n){return n.absolute?"absolute":"initial"})),gn=s.c.button(mn()),vn=s.c.span(dn()),xn=function(n){var e=n.isAbsolute,t=localStorage.getItem("githubToken")||!1;return o.a.createElement(hn,{absolute:e},t?o.a.createElement(vn,null,"Logged in as ",localStorage.getItem("githubUsername")):o.a.createElement(gn,{onClick:function(){return un.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:window.location.href="https://github.com/login/oauth/authorize?client_id="+pn;case 1:case"end":return n.stop()}}))}},o.a.createElement(ln.a,{icon:sn.a})," Log in"))};function wn(){var n=Object(g.a)(['\n{\n  repository(owner: "','", name: "','") {\n    issues(first: 100, states: OPEN, orderBy: { direction: DESC, field: CREATED_AT }) {\n      nodes {\n        title\n        body\n        bodyHTML\n        bodyText\n        number\n        labels(first: 100) {\n          nodes {\n            color\n            name\n            id\n          }\n        }\n        author {\n          url\n          avatarUrl\n          login\n        }\n        updatedAt\n        id\n      }\n    }\n  }\n}\n']);return wn=function(){return n},n}var En=Object(m.b)(wn(),d.githubUserName,d.githubRepo),kn=function(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],a=e[1],i=Object(v.a)(En),u=i.loading,l=i.error,s=i.data;return Object(r.useEffect)((function(){var n,e;u||(l&&console.error(l),s&&a(null===s||void 0===s?void 0:null===(n=s.repository)||void 0===n?void 0:null===(e=n.issues)||void 0===e?void 0:e.nodes))}),[u,l,s]),o.a.createElement(o.a.Fragment,null,o.a.createElement(an,null),o.a.createElement(w,null,u?o.a.createElement(H,null):t.map((function(n,e){return o.a.createElement(L,{blog:n,key:e})}))))},On=t(51),jn=t.n(On),yn=t(52),An=t(78),Cn={THUMBS_UP:"\ud83d\udc4d",THUMBS_DOWN:"\ud83d\udc4e",LAUGH:"\ud83d\ude04",HOORAY:"\ud83c\udf89",CONFUSED:"\ud83d\ude15",HEART:"\u2764\ufe0f",ROCKET:"\ud83d\ude80",EYES:"\ud83d\udc40"},Sn=function(n){return Cn[n]||""},zn=function(n){return function(n){var e={};return Object.keys(n).forEach((function(t){e[n[t]]=t})),e}(Cn)[n]||""},Tn=function(){var n,e,t;return un.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(n=localStorage.getItem("githubToken"))){r.next=10;break}return r.next=4,un.a.awrap(fetch("https://api.github.com/user",{headers:new Headers({authorization:"Bearer ".concat(n)})}));case 4:return e=r.sent,r.next=7,un.a.awrap(e.json());case 7:return(t=r.sent).token=n,r.abrupt("return",t);case 10:case"end":return r.stop()}}))};function Un(){var n=Object(g.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 700px;\n  padding: 20px 10px;\n  position: relative;\n"]);return Un=function(){return n},n}var Mn=s.c.div(Un());function Dn(){var n=Object(g.a)(["\n  @media only screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);return Dn=function(){return n},n}var Rn=s.c.h1(Dn());function In(){var n=Object(g.a)(["\n  color: ",";\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n"]);return In=function(){return n},n}var Fn=s.c.p(In(),(function(n){return n.theme.toggleBorder}));function Ln(){var n=Object(g.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  transition-duration: 0.15s, 0.15s, 0.15s;\n  transition-timing-function: ease-in, ease-in, ease-in;\n  transition-delay: 0s, 0s, 0s;\n  color: ",";\n  \n  :hover {\n    color: ",";\n  }\n"]);return Ln=function(){return n},n}var Bn=s.c.a(Ln(),(function(n){return n.theme.toggleBorder}),(function(n){return n.theme.text}));function _n(){var n=Object(g.a)(["\n  position: static;\n  bottom: 60px;\n  animation-name: scale-in;\n  animation-duration: 0.15s;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n"]);return _n=function(){return n},n}var Wn=s.c.span(_n());function Hn(){var n=Object(g.a)(['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Shadows Into Light", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 30px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n\n  :hover {\n    background-color: ",';\n    color: white;\n  }\n\n  :before {\n    content: "\\27A4";\n    position: absolute;\n    transform: translateY(-50%) rotate(180deg);\n    left: 10px;\n    font-size: 16px;\n    top: 54%;\n  }\n'],['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Shadows Into Light", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 30px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n\n  :hover {\n    background-color: ",';\n    color: white;\n  }\n\n  :before {\n    content: "\\\\27A4";\n    position: absolute;\n    transform: translateY(-50%) rotate(180deg);\n    left: 10px;\n    font-size: 16px;\n    top: 54%;\n  }\n']);return Hn=function(){return n},n}var Yn=s.c.button(Hn(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return"light"===n.theme.mode?"#373737":"#6B8096"}));function Nn(){var n=Object(g.a)(["\n  display: flex;\n  align-items: center;\n"]);return Nn=function(){return n},n}var Pn=s.c.div(Nn());function Vn(){var n=Object(g.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 40px;\n  margin: 10px;\n  margin-left: 0px;\n"]);return Vn=function(){return n},n}var qn=s.c.img(Vn());function Gn(){var n=Object(g.a)(["\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 16px;\n  color: ",";\n"]);return Gn=function(){return n},n}var Qn=s.c.p(Gn(),(function(n){return n.theme.text})),Jn=t(131),Kn=t(494),Xn=t(493),Zn=function(n){var e=n.children,t=Object(Jn.a)(n,["children"]);return o.a.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"blog-post-anchor"},e,o.a.createElement("style",{jsx:"true"},"\n        a {\n          color: #484848;\n          font-weight: 400;\n        }\n      "))},$n=function(n){var e=n.children;return o.a.createElement(Kn.a,{language:"javascript",style:Xn.a},e.props.children)},ne=function(n){var e=n.comment;return o.a.createElement(te,null,o.a.createElement(Pn,null,o.a.createElement(qn,{src:e.author.avatarUrl,alt:e.author.login}),o.a.createElement("div",null,o.a.createElement(Qn,null,e.author.login),o.a.createElement(Fn,null,jn()(e.updatedAt).format("DD MMM YYYY")))),o.a.createElement(yn.a,{options:{overrides:{a:{component:Zn},pre:{component:$n}}}},e.body))};function ee(){var n=Object(g.a)(["\n  margin-top: 3rem;\n  border-radius: 10px;\n  padding: 10px 30px;\n  position: relative;\n  color: ",";\n  border: "," solid 1px;\n  font-size: 16px;\n"]);return ee=function(){return n},n}var te=s.c.div(ee(),(function(n){return n.theme.text}),(function(n){return n.theme.text}));function re(){var n=Object(g.a)(['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Shadows Into Light", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 20px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n  text-decoration: none;\n  margin: auto;\n\n  :hover {\n    background-color: ",";\n    color: white;\n  }\n"]);return re=function(){return n},n}var oe=s.c.a(re(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return"light"===n.theme.mode?"#373737":"#6B8096"}));function ae(){var n=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 3rem;\n"]);return ae=function(){return n},n}var ie=s.c.div(ae()),ce=function(n){var e=n.postUrl,t=n.comments;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ie,null,o.a.createElement(oe,{href:e+"#issue-comment-box",target:"_blank"},"Post a comment")),t.map((function(n,e){return o.a.createElement(ne,{comment:n,key:e})})))};function ue(){var n=Object(g.a)(['\n          mutation RemoveReaction {\n            removeReaction(input:{subjectId:"','",content:',',clientMutationId:"','"}) {\n              reaction {\n                id\n              }\n            }\n          }\n        ']);return ue=function(){return n},n}function le(){var n=Object(g.a)(['\n          mutation AddReaction {\n            addReaction(input:{subjectId:"','",content:',',clientMutationId:"','"}) {\n              reaction {\n                id\n              }\n            }\n          }\n        ']);return le=function(){return n},n}function se(){var n=Object(g.a)(['{\n    repository(owner: "','", name: "','") {\n      issue(number: ',") {\n        title\n        body\n        bodyHTML\n        url\n        bodyText\n        number\n        bodyHTML\n        author {\n          url\n          avatarUrl\n          login\n        }\n        reactions(first:100){\n          nodes{\n            content\n            user{\n              id\n              login\n            }\n          }\n        }\n        updatedAt\n        id\n        comments(first:100) {\n          nodes {\n            author {\n              ... on User {\n                avatarUrl\n                name\n                login\n              }\n            }\n            body\n            bodyHTML\n            bodyText\n            publishedAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n  "]);return se=function(){return n},n}function de(){var n=parseInt(window.location.href.split("/").pop()),e=Object(m.b)(se(),d.githubUserName,d.githubRepo,n),t=Object(r.useState)([]),a=Object(c.a)(t,2),i=a[0],u=a[1],l=Object(r.useState)(""),s=Object(c.a)(l,2),f=s[0],p=s[1],h=Object(r.useState)(!1),g=Object(c.a)(h,2),x=g[0],w=g[1],E=Object(r.useState)([]),k=Object(c.a)(E,2),O=k[0],j=k[1],y=Object(r.useState)([]),A=Object(c.a)(y,2),C=A[0],S=A[1],z=Object(v.a)(e),T=z.loading,U=z.error,M=z.data,D=Object(r.useRef)(null),R=localStorage.getItem("githubToken"),I=Object(r.useCallback)((function(n){var e=[];n.forEach((function(n){var t={by:n.user.login,emoji:Sn(n.content)};e.push(t)})),j(e)}),[]),L=function(n){var e,t,r;return un.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=O,o.next=3,un.a.awrap(Tn());case 3:if(t=o.sent,0!==e.filter((function(e){return e.emoji===n&&e.by===t.login})).length){o.next=12;break}return r={by:t.login,emoji:n},o.next=9,un.a.awrap(b(R).mutate({mutation:Object(m.b)(le(),f,zn(n),t.node_id)}));case 9:e.push(r),o.next=15;break;case 12:return o.next=14,un.a.awrap(b(R).mutate({mutation:Object(m.b)(ue(),f,zn(n),t.node_id)}));case 14:e=e.filter((function(e){return!(e.by===t.login&&e.emoji===n)}));case 15:j(e),D.current.forceUpdate(),w(!1);case 18:case"end":return o.stop()}}))};if(Object(r.useEffect)((function(){if(!T&&M){var n=M.repository.issue;p(n.id),u(n),I(n.reactions.nodes),S(n.comments.nodes)}}),[T,U,M,I]),T)return o.a.createElement(H,null);return o.a.createElement(o.a.Fragment,null,i.title&&o.a.createElement(Mn,null,o.a.createElement(Yn,{onClick:function(){return window.history.go(),void window.history.back()}},"Back"),o.a.createElement(Rn,null,i.title),o.a.createElement("div",null,o.a.createElement(Pn,null,o.a.createElement(qn,{src:i.author.avatarUrl,alt:i.author.login}),o.a.createElement("div",null,o.a.createElement(Qn,null,i.author.login),o.a.createElement(Fn,null,jn()(i.updatedAt).format("DD MMM YYYY")," .",F()(i.body).minutes," Min Read .",o.a.createElement(Bn,{href:i.url,target:"_black"},"View On Github"))))),o.a.createElement(yn.a,{options:{overrides:{a:{component:Zn},pre:{component:$n}}}},i.body),x&&o.a.createElement(Wn,null,R?o.a.createElement(An.GithubSelector,{onSelect:function(n){return L(n)}}):o.a.createElement(xn,{isAbsolute:!1})),o.a.createElement(An.GithubCounter,{ref:D,counters:O,onSelect:function(n){return L(n)},onAdd:function(){return w(!x)}}),o.a.createElement(ce,{postUrl:i.url,comments:C})))}var me=(0,t(16).createBrowserHistory)(),fe=function(){return o.a.createElement(p.a,{history:me},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:kn}),o.a.createElement(h.a,{exact:!0,path:"/blog/:title/:issueNumber",component:de})))},be=d.enableOAuth,pe=d.OAuthClientID,he=d.OAuthSecret,ge=function(){var n=Object(r.useState)(!0),e=Object(c.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){(function(n){var e;return un.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,un.a.awrap(fetch("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{method:"POST",body:new URLSearchParams({client_id:pe,client_secret:he,code:n}),headers:new Headers({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"})}));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}))})(new URLSearchParams(window.location.search).get("code")).then((function(n){n&&(localStorage.setItem("githubToken",n.access_token),function(){var n,e;return un.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,un.a.awrap(Tn());case 2:n=t.sent,e=n.login,localStorage.setItem("githubUsername",e);case 5:case"end":return t.stop()}}))}().then((function(){return a(!1)})))}))}),[]),be&&t?o.a.createElement(H,null):window.location.replace(window.location.origin+window.location.pathname)};function ve(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),o.a.createElement("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"}))}function xe(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}function we(){var n=Object(g.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n  color: ",";\n  width: 70px;\n  height: 70px;\n  outline: none;\n  border-radius: 50%;\n  transition: all 0.1s ease-in-out;\n  color: white;\n  text-align: center;\n  position: fixed;\n  cursor: pointer;\n  right: 30px;\n  bottom: 30px;\n  box-shadow:\n  0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n  0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n  0 12.5px 10px rgba(0, 0, 0, 0.06),\n  0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n  0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n  0 100px 80px rgba(0, 0, 0, 0.12);\n  }"]);return we=function(){return n},n}var Ee=s.c.button(we(),(function(n){return n.theme.background}),(function(n){return n.theme.background}),(function(n){return n.theme.text})),ke=function(n){var e=n.theme,t=n.toggleTheme;return o.a.createElement(Ee,{onClick:t},"light"===e?o.a.createElement(xe,null):o.a.createElement(ve,null))};function Oe(){var n=Object(g.a)(["\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n  "]);return Oe=function(){return n},n}var je=Object(s.b)(Oe(),(function(n){return n.theme.body}),(function(n){return n.theme.text})),ye={mode:"light",body:"#fff",text:"#363537",toggleBorder:"#070707",background:"#363537"},Ae={mode:"dark",body:"#2E3440",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},Ce=function(){var n=new URLSearchParams(window.location.search),e=function(){var n=Object(r.useState)("light"),e=Object(c.a)(n,2),t=e[0],o=e[1],a=function(n){window.localStorage.setItem("theme",n),o(n)};return Object(r.useEffect)((function(){var n=window.localStorage.getItem("theme");n&&o(n)}),[]),[t,function(){a("light"===t?"dark":"light")}]}(),t=Object(c.a)(e,2),a=t[0],i=t[1],m="light"===a?ye:Ae;return n.get("code")?o.a.createElement(ge,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Helmet,null,o.a.createElement("title",null,d.title),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"description",content:d.subtitle}),o.a.createElement("meta",{name:"theme-color",content:d.header.backgroundColor})),o.a.createElement(u.a,{client:f},o.a.createElement(s.a,{theme:m,toggleTheme:i},o.a.createElement(je,null),o.a.createElement(fe,null),o.a.createElement(ke,{theme:a,toggleTheme:i}))))},Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ze(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}t(488);i.a.render(o.a.createElement(Ce,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/thongblog",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/thongblog","/service-worker.js");Se?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):ze(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ze(e,n)}))}}()}},[[132,1,2]]]);
//# sourceMappingURL=main.f503941f.chunk.js.map