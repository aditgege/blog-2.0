(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{184:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(200);n(192);function o(t){var e=Math.round(t/5);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(o,c)},e),l&&t.apply(o,c)}}},194:function(t,e,n){var map={"./blog-2-0-in-nuxtjs/index.md":[176,0],"./create-simple-like-button-using-firebase-rtdb/index.md":[177,1],"./eslint-formatter-html-extended/index.md":[178,2],"./membuat-blog-keren-dengan-gridsome/index.md":[179,3],"./pengalaman-menjadi-fasilitator-gdk-mws-2018/index.md":[180,4]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=194,t.exports=r},212:function(t,e,n){var content=n(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("3e8c216a",content,!0,{sourceMap:!1})},227:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("0036a5c1",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n(201);var r=n(184),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},c=n(4),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta"},[n("small",{staticClass:"meta__date"},[t._v("\n    🗓 "+t._s(t.formatPostDate(t.metaDate))+"\n  ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n    ❤️ "+t._s(t.statsLikes)+" likes\n  ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n    📖 "+t._s(t.statsRead)+" read\n  ")]):t._e()])},[],!1,null,null,null);e.a=component.exports},260:function(t,e,n){"use strict";var r=n(212);n.n(r).a},261:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"h2[data-v-49555ab4] {\n  color: var(--textSubtitle);\n}\na[data-v-49555ab4] {\n  color: var(--textHighlight);\n  text-decoration: underline;\n}\np[data-v-49555ab4] {\n  line-height: 1.5;\n}\nimg[data-v-49555ab4] {\n  width: 90%;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 1px 1px 8px 5px rgba(0, 0, 0, 0.2);\n}\n",""])},309:function(t,e,n){"use strict";var r=n(227);n.n(r).a},310:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".page__title[data-v-5e3da426] {\n  font-size: 2em;\n  margin-bottom: .25em;\n}\n.page__content[data-v-5e3da426] {\n  width: 100%;\n  word-break: break-word;\n  margin: 2em 0;\n}\n.page__date[data-v-5e3da426] {\n  color: var(--textSubtitle);\n}\n.page__footer[data-v-5e3da426] {\n  margin: 1em 0;\n}\n.block-wrap[data-v-5e3da426] {\n  margin: 1em 0;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.like[data-v-5e3da426], .share[data-v-5e3da426] {\n  display: flex;\n}\n.like-btn[data-v-5e3da426], .share-btn[data-v-5e3da426] {\n    color: var(--textNormal);\n    background: var(--textLink);\n    padding: .25em 1em;\n    border-radius: .25em;\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    margin-right: 1em;\n    text-decoration: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n",""])},311:function(t,e,n){"use strict";n.r(e);n(201);var r=n(94),o=(n(20),n(3)),c=n(96),l=n.n(c),d=n(97),h=n.n(d),m=n(247),f=n.n(m),v=n(248),w=n.n(v),_=n(249),k=n.n(_),x=n(228),S=n(250),y=n.n(S),C=(n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),{name:"ContentParser",props:{renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},created:function(){this.templateRender=new Function(this.renderFn)(),this.$options.staticRenderFns=new Function(this.staticRenderFn)()},mounted:function(){y.a.highlightAll()},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")}}),D=(n(260),n(4)),R=Object(D.a)(C,void 0,void 0,!1,null,"49555ab4",null).exports,L=n(184),O=n(49),j=n(262);function I(t){return"".concat(t,"/claps")}function F(t){return"".concat(t,"/hits")}function T(t,e){var n=I(e);return t.database().ref(n)}function U(t,e){var n=F(e);return t.database().ref(n)}function z(t,e){t.database().ref().update(e)}n(306);var P=null,M={name:"SlugPage",components:{FacebookIcon:l.a,TwitterIcon:h.a,LinkedinIcon:f.a,HeartIcon:w.a,ShareIcon:k.a,MetaData:x.a,ContentParser:R},head:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="".concat(this.productionUrl,"/").concat(this.meta.slug,"/");return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:e},{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(this.meta.date).toISOString()},{hid:"article:section",property:"article:section",content:"Technology"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:url",name:"twitter:url",content:e}]}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:L.c,formatPostDate:L.b,youClapped:0,claps:0,hits:0,isSupportWebshare:!1}},computed:{encodedTitle:function(){return encodeURIComponent("".concat(this.meta.title))},encodedDesc:function(){return encodeURIComponent("".concat(this.meta.description))},encodedUrl:function(){return encodeURIComponent("".concat(this.productionUrl,"/").concat(this.meta.slug))},fbLinkShare:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.encodedUrl,"&title=").concat(this.encodedTitle,"&description=").concat(this.encodedDesc,"&quote=").concat(this.encodedDesc)},twitterLinkShare:function(){return"https://twitter.com/intent/tweet?text=".concat(this.encodedTitle,"-").concat(this.encodedDesc,"&url=").concat(this.encodedUrl,"&via=maz_ipan")},linkedinLinkShare:function(){return"https://www.linkedin.com/sharing/share-offsite/?url=".concat(this.encodedUrl)}},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(194)("./".concat(r.slug,"/index.md"));case 3:return o=t.sent,c=o.attributes,t.abrupt("return",{meta:{title:c.title,slug:c.slug,date:c.date,minute2read:c.minute2read,description:c.description},renderFn:o.vue.render,staticRenderFn:o.vue.staticRenderFns});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){var t=this;window.navigator.share&&(this.isSupportWebshare=!0),j.apps.length||j.initializeApp({apiKey:"AIzaSyAjEDtmUc9C_mogAdlXPA3gOXwqQnJJP5c",authDomain:"mazipan-blog.firebaseapp.com",databaseURL:"https://mazipan-blog.firebaseio.com",projectId:"mazipan-blog",storageBucket:"",messagingSenderId:"331001770357"}),function(t,e,n){U(t,e).once("value",n)}(P=j,this.meta.slug,function(e){if(e.val())t.hits=Number(e.val()),function(t,e,n){U(t,e).set(n)}(P,t.meta.slug,t.hits+1);else{var n=Object(r.a)({},F(t.meta.slug),1);z(P,n)}}),function(t,e,n){T(t,e).once("value",n)}(P,this.meta.slug,function(e){if(e.val())t.claps=Number(e.val());else{var n=Object(r.a)({},I(t.meta.slug),1);z(P,n)}}),function(t,e,n){T(t,e).on("value",n)}(P,this.meta.slug,function(e){Object(L.a)(function(){t.claps=e.val()},300)()})},methods:{trackSocialShare:function(t){Object(O.c)(this,this.meta.slug,t)},onClickShare:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="/".concat(this.meta.slug);Object(O.d)(this,this.meta.slug);var data={title:title,text:"".concat(t),url:e};window.navigator.share&&window.navigator.share(data)},onClickLike:function(){var t=this;P&&this.youClapped<10&&Object(L.a)(function(){Object(O.b)(t,t.meta.slug),t.youClapped+=1,function(t,e,n){T(t,e).set(n)}(P,t.meta.slug,t.claps+1)},300)()}}},N=(n(309),Object(D.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("h1",{staticClass:"page__title text-title"},[t._v("\n    "+t._s(t.meta.title)+"\n  ")]),t._v(" "),n("MetaData",{attrs:{"meta-date":t.meta.date,"meta-minute-to-read":t.meta.minute2read,"is-show-stats":!0,"stats-likes":t.claps,"stats-read":t.hits}}),t._v(" "),n("div",{staticClass:"page__content"},[n("ContentParser",{attrs:{"render-fn":t.renderFn,"static-render-fn":t.staticRenderFn}}),t._v(" "),n("a",{attrs:{target:"_blank",rel:"noopener",title:"Edit in Github",href:"https://github.com/mazipan/blog-2.0/edit/master/contents/markdown/"+t.meta.slug+"/index.md"}},[t._v("\n      ✏️ Edit in Github\n    ")])],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"page__footer"},[t._v("\n    Do you like this article? help me to click this like button, share it to your followers and subscribe the newsletter.\n\n    "),n("div",{staticClass:"block-wrap"},[t.isSupportWebshare?n("div",{staticClass:"share"},[n("a",{staticClass:"share-btn",attrs:{title:"Share this article"},on:{click:t.onClickShare}},[n("ShareIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"like-btn",attrs:{title:"Like this article"},on:{click:t.onClickLike}},[n("HeartIcon",{attrs:{w:"24px",h:"24px"}}),t._v("\n            "+t._s(t.claps)+"\n        ")],1)]):n("div",{staticClass:"share"},[n("a",{staticClass:"share-btn",attrs:{title:"Share to facebook",href:t.fbLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Facebook")}}},[n("FacebookIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"share-btn",attrs:{title:"Share to twitter",href:t.twitterLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Twitter")}}},[n("TwitterIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"share-btn",attrs:{title:"Share to linkedin",href:t.linkedinLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("LinkedIn")}}},[n("LinkedinIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"like-btn",attrs:{title:"Like this article"},on:{click:t.onClickLike}},[n("HeartIcon",{attrs:{w:"24px",h:"24px"}}),t._v("\n            "+t._s(t.claps)+"\n        ")],1)])])])],1)},[],!1,null,"5e3da426",null));e.default=N.exports}}]);