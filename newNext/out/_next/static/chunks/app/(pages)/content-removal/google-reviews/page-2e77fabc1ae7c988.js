(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3342],{61579:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,72824)),Promise.resolve().then(n.bind(n,44217)),Promise.resolve().then(n.bind(n,99234)),Promise.resolve().then(n.bind(n,52607)),Promise.resolve().then(n.bind(n,24198))},6712:function(e,t,n){"use strict";n.r(t),n.d(t,{useCol:function(){return l}});var s=n(56800),r=n.n(s),i=n(2265),a=n(72574),o=n(57437);function l(e){let{as:t,bsPrefix:n,className:s,...i}=e;n=(0,a.vE)(n,"col");let o=(0,a.pi)(),l=(0,a.zG)(),c=[],d=[];return o.forEach(e=>{let t,s,r;let a=i[e];delete i[e],"object"==typeof a&&null!=a?{span:t,offset:s,order:r}=a:t=a;let o=e!==l?"-".concat(e):"";t&&c.push(!0===t?"".concat(n).concat(o):"".concat(n).concat(o,"-").concat(t)),null!=r&&d.push("order".concat(o,"-").concat(r)),null!=s&&d.push("offset".concat(o,"-").concat(s))}),[{...i,className:r()(s,...c,...d)},{as:t,bsPrefix:n,spans:c}]}let c=i.forwardRef((e,t)=>{let[{className:n,...s},{as:i="div",bsPrefix:a,spans:c}]=l(e);return(0,o.jsx)(i,{...s,ref:t,className:r()(n,!c.length&&a)})});c.displayName="Col",t.default=c},72824:function(e,t,n){"use strict";n.r(t);var s=n(56800),r=n.n(s),i=n(2265),a=n(72574),o=n(57437);let l=i.forwardRef((e,t)=>{let{bsPrefix:n,fluid:s=!1,as:i="div",className:l,...c}=e,d=(0,a.vE)(n,"container");return(0,o.jsx)(i,{ref:t,...c,className:r()(l,s?"".concat(d).concat("string"==typeof s?"-".concat(s):"-fluid"):d)})});l.displayName="Container",t.default=l},358:function(e,t,n){"use strict";n.r(t);var s=n(56800),r=n.n(s),i=n(2265),a=n(72574),o=n(57437);let l=i.forwardRef((e,t)=>{let{bsPrefix:n,className:s,as:i="div",...l}=e,c=(0,a.vE)(n,"row"),d=(0,a.pi)(),u=(0,a.zG)(),f="".concat(c,"-cols"),m=[];return d.forEach(e=>{let t;let n=l[e];delete l[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&m.push("".concat(f).concat(e!==u?"-".concat(e):"","-").concat(t))}),(0,o.jsx)(i,{ref:t,...l,className:r()(s,c,...m)})});l.displayName="Row",t.default=l},72574:function(e,t,n){"use strict";n.d(t,{pi:function(){return l},vE:function(){return o},zG:function(){return c}});var s=n(2265);n(57437);let r=s.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:i,Provider:a}=r;function o(e,t){let{prefixes:n}=(0,s.useContext)(r);return e||n[t]||t}function l(){let{breakpoints:e}=(0,s.useContext)(r);return e}function c(){let{minBreakpoint:e}=(0,s.useContext)(r);return e}},16825:function(e,t,n){"use strict";var s=n(57437);n(2265);var r=n(87138);t.Z=e=>{let{btnName:t,darkBtn:n,href:i="/getAQuote"}=e;return(0,s.jsx)(r.default,{href:i,children:(0,s.jsx)("div",{className:"border_btn text-18 ".concat(n),children:t})})}},44217:function(e,t,n){"use strict";n.d(t,{default:function(){return f}});var s=n(57437);n(2265);var r=n(52607),i=n(66648),a=n(16825),o=n(69824),l=n(85097);n(11572);var c=n(4977),d=n.n(c),u=e=>{let{textArea:t,formBg:n,policy:r}=e;return(0,s.jsx)("div",{children:(0,s.jsx)(d(),{portalId:"46372694",formId:"8aa75828-2572-4499-be85-08fbf0af9587",onSubmit:()=>console.log("Submit!"),onReady:e=>console.log("Form ready!"),loading:(0,s.jsx)("div",{children:"Loading..."})})})},f=e=>{let{title:t,description:n,imageUrl:c,isReverse:d,showPrimeBtn:f,showBorderBtn:m,form:v,primeBtnName:x,borderBtnName:h,subTitle:p,darkButton:j,iconData:g,reviewData:b}=e;return(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row align-items-center ".concat(d&&"flex-row-reverse"),children:[(0,s.jsx)("div",{className:"col-lg-6 mb-5 mb-lg-0 text-center",children:(0,s.jsx)(i.default,{width:610,height:600,className:"responsive_img padding_img ",style:{width:"auto",height:"auto"},src:c,title:t,alt:"side-img"})}),(0,s.jsxs)("div",{className:"col-lg-6 contentWrap",children:[(0,s.jsx)("h2",{className:"title-xl fw-bold margin_bottom_30",children:t}),p&&(0,s.jsx)("p",{className:"fw-bold title-sm",children:p}),(0,s.jsx)("div",{className:"text-16",dangerouslySetInnerHTML:{__html:n}}),(0,s.jsxs)("div",{className:"d-flex flex-wrap gap-3 mt-4",children:[v&&(0,s.jsx)("div",{className:"mt-3",children:(0,s.jsx)(u,{})}),f&&(0,s.jsx)(r.default,{btnName:x}),m&&(0,s.jsx)(a.Z,{darkBtn:j,btnName:h})]}),!0===g&&(0,s.jsxs)("div",{className:"mt-5 d-flex flex-wrap gap-3",children:[(0,s.jsxs)("div",{className:"d-flex ",children:[(0,s.jsx)(o.uUf,{className:"time_icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"title-xl dark_font mb-1",children:"16 Days"}),(0,s.jsx)("p",{className:"text-16 dark_font mb-0",children:"Content removed"})]})]}),!0===b&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"v_line mx-3"}),(0,s.jsxs)("div",{className:"d-flex ",children:[(0,s.jsx)(l.bjh,{className:"close_icon time_icon"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"title-xl dark_font mb-1",children:"32"}),(0,s.jsx)("p",{className:"text-16 dark_font mb-0",children:"Reviews removed"})]})]})]})]})]})]})})}},99234:function(e,t,n){"use strict";var s=n(57437);n(2265);var r=n(358),i=n(6712);t.default=e=>{let{title:t,info:n,imageSrc:a}=e;return(0,s.jsx)("section",{className:"banner-parent position-relative",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"banner-img_box",style:{backgroundImage:"url(".concat(a,")")}}),(0,s.jsxs)(r.default,{children:[(0,s.jsx)(i.default,{xl:3,lg:0}),(0,s.jsx)(i.default,{xl:9,lg:12,children:(0,s.jsxs)("div",{className:"sectionPadding banner-z_index position-relative",children:[(0,s.jsx)("h1",{className:"title-xl text-white fw-bold mb-4 pt-4",children:t}),(0,s.jsx)("p",{className:"text-20 text-white",children:n})]})})]})]})})}},52607:function(e,t,n){"use strict";n.r(t);var s=n(57437);n(2265);var r=n(41942);t.default=e=>{let{btnName:t}=e;return(0,s.jsxs)("button",{className:"prime_btn text-18",children:[t,(0,s.jsx)(r.Z1Y,{className:"ms-2"})]})}},24198:function(e,t,n){"use strict";var s=n(57437),r=n(31666);n(2265),t.default=function(){return(0,s.jsx)("section",{className:"sectionPadding",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"title_section text-center",children:(0,s.jsx)("h2",{className:"title-xl fw-bold mb-5",children:"FAQs"})}),(0,s.jsx)(r.Z,{faqs:[{question:"Can I remove a Google review ? ",answer:"Unfortunately, you cannot directly remove a Google review from your business profile. However, you can flag it for review by Google if it violates their content guidelines. "},{question:"What happens after I flag a Google review? ",answer:"Google will review your report and decide whether to remove the review. You may receive an update notification from Google."},{question:"Is it guaranteed that an ORM service can remove a negative Google review? ",answer:"No, there is no guarantee that an ORM service can remove a negative review. Google has the final say on whether a review violates their policies.  "},{question:"What if a negative Google review is fake or fabricated? ",answer:"If you believe a review is fake, you can flag it for removal as mentioned earlier. Additionally, you can respond to the review, clarifying that the information is incorrect. "},{question:"Can I pay someone to write positive Google reviews for my business? ",answer:"No, Google strictly prohibits fake reviews. Paying for positive reviews can violate Google's policies and harm your business's reputation in the long run. "}]})]})})}},31666:function(e,t,n){"use strict";var s=n(57437),r=n(2265),i=n(63872);t.Z=function(e){let{faqs:t}=e,[n,a]=(0,r.useState)(null),o=e=>{a(n===e?null:e)};return(0,s.jsx)("div",{className:"faqWrapper",children:t.map((e,t)=>(0,s.jsxs)("div",{className:"faqWrap",children:[(0,s.jsxs)("h4",{onClick:()=>o(t),className:"title title-sm fw-semibold mb-0 ".concat(n===t&&"active"),children:[e.question,(0,s.jsx)("div",{className:"faqIcon",children:n===t?(0,s.jsx)(i.iFH,{}):(0,s.jsx)(i.wEH,{})})]}),n===t&&(0,s.jsx)("div",{className:"description",children:e.answer})]},t))})}},56800:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)s.call(e,n)&&e[n]&&(t=i(t,n));return t}(n)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0!==(n=(function(){return r}).apply(t,[]))&&(e.exports=n)}()}},function(e){e.O(0,[5706,5452,7699,7240,231,4974,9868,2971,7023,1744],function(){return e(e.s=61579)}),_N_E=e.O()}]);