(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={FeedbackInfoItems:"Statistics_FeedbackInfoItems__tjvSz",Item:"Statistics_Item__1irX0"}},,,,function(e,t,n){e.exports={BtnBox:"FeedbackOptions_BtnBox__TNLA5",Btn:"FeedbackOptions_Btn__nvkHQ",FeedbackInfo:"FeedbackOptions_FeedbackInfo__371b6"}},,function(e,t,n){e.exports={NotifItem:"Notification_NotifItem__2aPlX"}},function(e,t,n){e.exports={Title:"Section_Title___jHj5"}},function(e,t,n){e.exports={Feedback:"Container_Feedback__2T3hI"}},,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),r=(n(15),n(4)),o=n(6),d=n.n(o),l=n(0);var b=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("div",{className:d.a.BtnBox,children:t.map((function(e){return Object(l.jsx)("button",{type:"button",className:d.a.Btn,onClick:function(){return n(e)},children:e},e)}))})},j=n(2),u=n.n(j),f=n(8),O=n.n(f),h=n(3),x=n.n(h);function m(e){var t=e.message;return Object(l.jsx)("p",{className:O.a.NotifItem,children:t})}m.ptopTypes={message:x.a.string.isRequired};var p=m;var v=function(e){var t=e.total,n=e.positivePercentage,c=e.good,a=e.neutral,s=e.bad;return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsxs)("ul",{className:u.a.FeedbackInfoItems,children:[Object(l.jsx)("li",{className:u.a.Item,children:Object(l.jsxs)("p",{children:["Good : ",c]})}),Object(l.jsx)("li",{className:u.a.Item,children:Object(l.jsxs)("p",{children:["Neutral : ",a]})}),Object(l.jsx)("li",{className:u.a.Item,children:Object(l.jsxs)("p",{children:["Bad : ",s]})}),Object(l.jsx)("li",{className:u.a.Item,children:Object(l.jsxs)("p",{children:["Total : ",t]})}),Object(l.jsx)("li",{className:u.a.Item,children:Object(l.jsxs)("p",{children:["Positive feedback : ",n," %"]})})]}):Object(l.jsx)(p,{message:"No feedback given"})})},k=n(9),_=n.n(k);function I(e){var t=e.title,n=e.children;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:_.a.Title,children:t}),n]})}I.ptopTypes={title:x.a.string.isRequired,children:x.a.node};var N=I,g=n(10),F=n.n(g);var B=function(e){var t=e.children;return Object(l.jsx)("div",{className:F.a.Feedback,children:t})};var S=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),o=i[0],d=i[1],j=Object(c.useState)(0),u=Object(r.a)(j,2),f=u[0],O=u[1],h=function(){return n+o+f};return Object(l.jsxs)(B,{children:[Object(l.jsx)(N,{title:"Please leave feedback",children:Object(l.jsx)(b,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":d((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}}})}),Object(l.jsx)(N,{title:"Statistics",children:Object(l.jsx)(v,{good:n,neutral:o,bad:f,total:h(),positivePercentage:function(){var e=h(),t=n;return n?Math.ceil(t/e*100):0}()})})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.54aa5eaf.chunk.js.map