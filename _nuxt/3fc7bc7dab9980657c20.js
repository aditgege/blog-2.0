(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{181:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(187);n(183);function o(t){var e=Math.round(t/5);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(o,c)},e),l&&t.apply(o,c)}}},191:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("40b5eeea",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";n(188);var r=n(181),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},c=n(4),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta"},[n("small",{staticClass:"meta__date"},[t._v("\n    📆 "+t._s(t.formatPostDate(t.metaDate))+"\n  ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n    ❤️ "+t._s(t.statsLikes)+" likes\n  ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n    📓 "+t._s(t.statsRead)+" read\n  ")]):t._e()])},[],!1,null,null,null);e.a=component.exports},200:function(t,e,n){var map={"./blog-2-0-in-nuxtjs/index.md":[176,1],"./create-simple-like-button-using-firebase-rtdb/index.md":[177,2],"./eslint-formatter-html-extended/index.md":[178,3],"./membuat-blog-keren-dengan-gridsome/index.md":[179,4],"./pengalaman-menjadi-fasilitator-gdk-mws-2018/index.md":[180,5]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=200,t.exports=r},215:function(t,e,n){"use strict";var r=n(191);n.n(r).a},216:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"h2[data-v-e9e6dbcc] {\n  color: var(--textSubtitle);\n}\nh3[data-v-e9e6dbcc] {\n  color: var(--textWarning);\n}\na[data-v-e9e6dbcc] {\n  color: var(--textHighlight);\n  text-decoration: underline;\n}\np[data-v-e9e6dbcc] {\n  line-height: 1.5;\n}\nimg[data-v-e9e6dbcc] {\n  width: 90%;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 1px 1px 8px 5px rgba(0, 0, 0, 0.2);\n}\nul[data-v-e9e6dbcc], ol > li[data-v-e9e6dbcc] {\n  line-height: 2;\n}\n",""])},233:function(t,e,n){var content=n(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("086e75ed",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";var r={name:"EditContentNav",props:{slug:{type:String,default:""},isDraft:{type:Boolean,default:!1}},computed:{markdownLocation:function(){return this.isDraft?"https://github.com/mazipan/blog-2.0/edit/master/contents/drafts/".concat(this.slug,"/index.md"):"https://github.com/mazipan/blog-2.0/edit/master/contents/markdown/".concat(this.slug,"/index.md")}}},o=n(4),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n    🏠 Back to Home\n  ")]),this._v(" "),e("span",{staticClass:"dot"},[this._v(" • ")]),this._v(" "),e("a",{attrs:{target:"_blank",rel:"noopener",title:"Edit in Github",href:this.markdownLocation}},[this._v("\n    📝 Edit in Github\n  ")])],1)},[],!1,null,"22bcf637",null);e.a=component.exports},235:function(t,e,n){"use strict";var r=n(236),o=n.n(r),c=(n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),{name:"ContentParser",props:{renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},created:function(){this.templateRender=new Function(this.renderFn)(),this.$options.staticRenderFns=new Function(this.staticRenderFn)()},mounted:function(){o.a.highlightAll()},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")}}),l=(n(215),n(4)),component=Object(l.a)(c,void 0,void 0,!1,null,"e9e6dbcc",null);e.a=component.exports},322:function(t,e,n){"use strict";var r=n(233);n.n(r).a},323:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".page__title[data-v-22787f62] {\n  font-size: 2em;\n  margin-bottom: .25em;\n}\n.page__content[data-v-22787f62] {\n  width: 100%;\n  word-break: break-word;\n  margin: 2em 0;\n}\n.page__date[data-v-22787f62] {\n  color: var(--textSubtitle);\n}\n.page__footer[data-v-22787f62] {\n  margin: 1em 0;\n}\n.block-wrap[data-v-22787f62] {\n  margin: 1em 0;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.like[data-v-22787f62], .share[data-v-22787f62] {\n  display: flex;\n}\n.like-btn[data-v-22787f62], .share-btn[data-v-22787f62] {\n    color: var(--textNormal);\n    background: var(--textLink);\n    padding: .25em 1em;\n    border-radius: .25em;\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    margin-right: 1em;\n    text-decoration: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n",""])},324:function(t,e,n){"use strict";n.r(e);n(188);var r=n(94),o=(n(20),n(3)),c=n(96),l=n.n(c),d=n(97),h=n.n(d),m=n(272),f=n.n(m),v=n(273),_=n.n(v),w=n(274),k=n.n(w),x=n(196),S=n(235),y=n(234),C=n(181),D=n(49),L=n(275);function R(t){return"".concat(t,"/claps")}function O(t){return"".concat(t,"/hits")}function j(t,e){var n=R(e);return t.database().ref(n)}function I(t,e){var n=O(e);return t.database().ref(n)}function F(t,e){t.database().ref().update(e)}n(319);var T=null,U={name:"SlugPage",components:{FacebookIcon:l.a,TwitterIcon:h.a,LinkedinIcon:f.a,HeartIcon:_.a,ShareIcon:k.a,MetaData:x.a,EditContentNav:y.a,ContentParser:S.a},head:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="".concat(this.productionUrl,"/").concat(this.meta.slug,"/");return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:e},{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(this.meta.date).toISOString()},{hid:"article:section",property:"article:section",content:"Technology"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:url",name:"twitter:url",content:e}]}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:C.c,formatPostDate:C.b,youClapped:0,claps:0,hits:0,isSupportWebshare:!1}},computed:{encodedTitle:function(){return encodeURIComponent("".concat(this.meta.title))},encodedDesc:function(){return encodeURIComponent("".concat(this.meta.description))},encodedUrl:function(){return encodeURIComponent("".concat(this.productionUrl,"/").concat(this.meta.slug))},fbLinkShare:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.encodedUrl,"&title=").concat(this.encodedTitle,"&description=").concat(this.encodedDesc,"&quote=").concat(this.encodedDesc)},twitterLinkShare:function(){return"https://twitter.com/intent/tweet?text=".concat(this.encodedTitle,"-").concat(this.encodedDesc,"&url=").concat(this.encodedUrl,"&via=maz_ipan")},linkedinLinkShare:function(){return"https://www.linkedin.com/sharing/share-offsite/?url=".concat(this.encodedUrl)}},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(200)("./".concat(r.slug,"/index.md"));case 3:return o=t.sent,c=o.attributes,t.abrupt("return",{meta:{title:c.title,slug:c.slug,date:c.date,minute2read:c.minute2read,description:c.description},renderFn:o.vue.render,staticRenderFn:o.vue.staticRenderFns});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){var t=this;window.navigator.share&&(this.isSupportWebshare=!0),L.apps.length||L.initializeApp({apiKey:"AIzaSyAjEDtmUc9C_mogAdlXPA3gOXwqQnJJP5c",authDomain:"mazipan-blog.firebaseapp.com",databaseURL:"https://mazipan-blog.firebaseio.com",projectId:"mazipan-blog",storageBucket:"",messagingSenderId:"331001770357"}),function(t,e,n){I(t,e).once("value",n)}(T=L,this.meta.slug,function(e){if(e.val())t.hits=Number(e.val()),function(t,e,n){I(t,e).set(n)}(T,t.meta.slug,t.hits+1);else{var n=Object(r.a)({},O(t.meta.slug),1);F(T,n)}}),function(t,e,n){j(t,e).once("value",n)}(T,this.meta.slug,function(e){if(e.val())t.claps=Number(e.val());else{var n=Object(r.a)({},R(t.meta.slug),1);F(T,n)}}),function(t,e,n){j(t,e).on("value",n)}(T,this.meta.slug,function(e){Object(C.a)(function(){t.claps=e.val()},300)()})},methods:{trackSocialShare:function(t){Object(D.c)(this,this.meta.slug,t)},onClickShare:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="/".concat(this.meta.slug);Object(D.d)(this,this.meta.slug);var data={title:title,text:"".concat(t),url:e};window.navigator.share&&window.navigator.share(data)},onClickLike:function(){var t=this;T&&this.youClapped<10&&Object(C.a)(function(){Object(D.b)(t,t.meta.slug),t.youClapped+=1,function(t,e,n){j(t,e).set(n)}(T,t.meta.slug,t.claps+1)},300)()}}},E=(n(322),n(4)),component=Object(E.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("h1",{staticClass:"page__title text-title"},[t._v("\n    "+t._s(t.meta.title)+"\n  ")]),t._v(" "),n("MetaData",{attrs:{"meta-date":t.meta.date,"meta-minute-to-read":t.meta.minute2read,"is-show-stats":!0,"stats-likes":t.claps,"stats-read":t.hits}}),t._v(" "),n("div",{staticClass:"page__content"},[n("ContentParser",{attrs:{"render-fn":t.renderFn,"static-render-fn":t.staticRenderFn}}),t._v(" "),n("EditContentNav",{attrs:{slug:t.meta.slug}})],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"page__footer"},[t._v("\n    🚨Do you like this article? help me to click ❤️ button, share to your followers and subscribe the newsletter.\n\n    "),n("div",{staticClass:"block-wrap"},[t.isSupportWebshare?n("div",{staticClass:"share"},[n("a",{staticClass:"share-btn",attrs:{title:"Share this article"},on:{click:t.onClickShare}},[n("ShareIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"like-btn",attrs:{title:"Like this article"},on:{click:t.onClickLike}},[n("HeartIcon",{attrs:{w:"24px",h:"24px"}}),t._v("\n            "+t._s(t.claps)+"\n        ")],1)]):n("div",{staticClass:"share"},[n("a",{staticClass:"share-btn",attrs:{title:"Share to facebook",href:t.fbLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Facebook")}}},[n("FacebookIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"share-btn",attrs:{title:"Share to twitter",href:t.twitterLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Twitter")}}},[n("TwitterIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"share-btn",attrs:{title:"Share to linkedin",href:t.linkedinLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("LinkedIn")}}},[n("LinkedinIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"like-btn",attrs:{title:"Like this article"},on:{click:t.onClickLike}},[n("HeartIcon",{attrs:{w:"24px",h:"24px"}}),t._v("\n            "+t._s(t.claps)+"\n        ")],1)])])])],1)},[],!1,null,"22787f62",null);e.default=component.exports}}]);