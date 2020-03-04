(function(e){function t(t){for(var a,s,o=t[0],u=t[1],c=t[2],h=0,d=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02be":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r=n("2b0e"),i=n("8c4f"),s=n("5f5b"),o=n("b1e0"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.$auth.loading?e._e():n("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"primary"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("ETA")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e.$auth.isAuthenticated?n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[e._v("Dashboard")]),n("b-nav-item",{attrs:{to:"/help"}},[e._v("Help")])],1):e._e(),e.$auth.isAuthenticated?e._e():n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/"}},[e._v("Sign In")])],1),e.$auth.isAuthenticated?n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-text",[e._v("Welcome "+e._s(e.$auth.user.name)+"!")]),n("b-nav-form",[n("img",{staticClass:"rounded-circle",staticStyle:{"margin-left":"16px"},attrs:{src:e.$auth.user.picture,width:"32px",height:"32px"}}),n("b-button",{staticClass:"ml-sm-2",attrs:{size:"ml",variant:"primary"},on:{click:e.signout}},[e._v("Sign Out")])],1)],1):e._e()],1)],1),e.$auth.isAuthenticated||e.$auth.loading?e._e():n("b-container",{staticClass:"p-3"},[n("b-row",{staticClass:"justify-content-lg-center"},[n("b-col",{attrs:{lg:"6"}},[n("b-card",{attrs:{"border-variant":"primary",header:"Sign In","header-tag":"h4"}},[n("b-card-text",[e._v(" In order to use ETA you have to sign in first. ")]),n("b-button",{attrs:{variant:"success"},on:{click:e.signin}},[e._v("Sign In with OAuth0")])],1)],1)],1)],1),e.$auth.loading?n("div",{staticClass:"d-flex min-vh-100 align-items-center justify-content-center"},[n("b-spinner",{attrs:{type:"grow",label:"Loading..."}})],1):e._e(),n("keep-alive",[e.$auth.isAuthenticated?n("router-view"):e._e()],1)],1)},c=[],l={name:"App",methods:{signin:function(){this.$auth.loginWithRedirect()},signout:function(){this.$auth.logout({returnTo:window.location.origin})}}},h=l,d=n("2877"),p=Object(d["a"])(h,u,c,!1,null,null,null),f=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"p-3"},[n("b-row",{staticClass:"justify-content-lg-center"},[n("b-col",{attrs:{lg:"6"}},[n("h1",[e._v("Expectations")]),n("b-card",{attrs:{"no-body":"","border-variant":"primary",header:"Current time is "+e.formatDateTime(e.currentTime),"header-tag":"h4"}},[n("b-card-body",[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("b-input-group",{attrs:{prepend:"Expect"}},[n("b-form-input",{ref:"what",attrs:{placeholder:"What"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addETA(t)}},model:{value:e.what,callback:function(t){e.what=t},expression:"what"}})],1),n("b-input-group",{attrs:{prepend:"@"}},[n("b-form-input",{ref:"when",attrs:{placeholder:"HH:MM"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addETA(t)}},model:{value:e.when,callback:function(t){e.when=t},expression:"when"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"success"},on:{click:e.addETA}},[e._v("Add")])],1)],1)],1)]),n("b-card-body",[n("b-list-group",e._l(e.etas_reversed,(function(t){return n("b-list-group-item",{key:t.id,staticClass:"flex-column align-items-start",attrs:{href:"#",eta:t}},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("p",{staticClass:"mb-1"},[n("img",{staticClass:"rounded-circle",staticStyle:{"margin-right":"5px"},attrs:{width:"24px",height:"24px",src:t.user.picture}}),e._v(e._s(t.user.name)+" ")]),n("small",[e._v(e._s(e.formatDateTime(t.created_at)))])]),n("h5",{staticClass:"mb-1"},[e._v(e._s(t.what)+" at "+e._s(e.formatDateTime(t.when)))])])})),1)],1)],1)],1)],1)],1)},m=[],v=(n("fb6a"),n("b0c0"),n("ac1f"),n("1276"),n("59ca")),g=n.n(v),w=(n("66ce"),{apiKey:"AIzaSyBAlTM9jeN-bVBMJvpjZBs9NvFqzl2HZsE",authDomain:"elm-eta.firebaseapp.com",databaseURL:"https://elm-eta.firebaseio.com",projectId:"elm-eta",storageBucket:"elm-eta.appspot.com",messagingSenderId:"754457526701",appId:"1:754457526701:web:960775a7db9965df522124"}),y=g.a.initializeApp(w).database(),_=n("7c3c"),x={name:"Dashboard",methods:{formatDateTime:function(e){var t=new Date(e);return _.asString("hh:mm",t)},addETA:function(){if(0==this.what.length)console.log("what focus"),this.$refs.what.focus();else if(0==this.when.length)console.log("when focus"),this.$refs.when.focus();else{var e=this.when.split(":");if(2!=e.length)return void this.$refs.when.focus();var t=parseInt(e[0]),n=parseInt(e[1]);if(t<0||t>24||n<0||n>59)return void this.$refs.when.focus();var a=new Date(this.currentTime.getFullYear(),this.currentTime.getMonth(),this.currentTime.getDay(),t,n),r=y.ref().child("etas").push();r.set({id:r.key,what:this.what,when:a.getTime(),created_at:this.currentTime.getTime(),user:{name:this.$auth.user.name,picture:this.$auth.user.picture}}),this.what="",this.when="",this.$refs.what.focus()}}},mounted:function(){var e=this;this.interval=setInterval((function(){e.currentTime=new Date}),1e3)},data:function(){return{interval:"",when:"",what:"",currentTime:new Date,etas:[]}},firebase:function(){return{etas:y.ref("etas").orderByChild("when").limitToLast(100)}},computed:{etas_reversed:function(){return this.etas.slice().reverse()}}},k=x,C=Object(d["a"])(k,b,m,!1,null,null,null),T=C.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-3"},[e._v("Here goes our Help page")])},j=[],A={},$=Object(d["a"])(A,O,j,!1,null,null,null),S=$.exports,I=(n("f9e3"),n("2dd8"),n("02be"),n("8160")),R=(n("caad"),n("2532"),n("841c"),n("96cf"),n("1da1")),E=n("15fd"),D=n("5891"),P=n.n(D),M=function(){return window.history.replaceState({},document.title,window.location.pathname)},W=function(e){var t=e.onRedirectCallback,n=void 0===t?M:t,i=e.redirectUri,s=void 0===i?window.location.origin+window.location.pathname:i,o=Object(E["a"])(e,["onRedirectCallback","redirectUri"]);return a||(a=new r["default"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.popupOpen=!0,n.prev=1,n.next=4,t.auth0Client.loginWithPopup(e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.error(n.t0);case 9:return n.prev=9,t.popupOpen=!1,n.finish(9);case 12:return n.next=14,t.auth0Client.getUser();case 14:t.user=n.sent,t.isAuthenticated=!0;case 16:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},handleRedirectCallback:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.error=t.t0;case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P()({domain:o.domain,client_id:o.clientId,audience:o.audience,redirect_uri:s});case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=10;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:a=t.sent,r=a.appState,n(r);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.error=t.t0;case 15:return t.prev=15,t.next=18,e.auth0Client.isAuthenticated();case 18:return e.isAuthenticated=t.sent,t.next=21,e.auth0Client.getUser();case 21:return e.user=t.sent,e.loading=!1,t.finish(15);case 24:case"end":return t.stop()}}),t,null,[[3,12,15,24]])})))()}}),a)},U={install:function(e,t){e.prototype.$auth=W(t)}},z=n("0ff2");r["default"].use(i["a"]),r["default"].use(z["a"]),r["default"].use(s["a"]),r["default"].use(o["a"]),r["default"].use(U,{domain:I["b"],clientId:I["a"],onRedirectCallback:function(e){B.push(e&&e.targetUrl?e.targetUrl:"/")}}),r["default"].config.productionTip=!1;var B=new i["a"]({mode:"history",base:"/vue-eta/",routes:[{path:"/",name:"dashboard",component:T},{path:"/help",name:"help",component:S}]});new r["default"]({render:function(e){return e(f)},router:B}).$mount("#app")},8160:function(e){e.exports=JSON.parse('{"b":"jardev.auth0.com","a":"B24wma3KZIYZojn2ANrMzsOAqIOzwVD6"}')}});
//# sourceMappingURL=app.9e0c087b.js.map