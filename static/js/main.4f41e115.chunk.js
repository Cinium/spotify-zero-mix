(this["webpackJsonpspotify-single-daily"]=this["webpackJsonpspotify-single-daily"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(17),s=n.n(r),i=(n(27),n(28),n(2)),o=n.n(i),u=n(5),l=n(4),f=(n(15),n(13)),p=n(18),h=n(20),b=n(22);n(21);Error;var j=n(3),d=n(1);var y=function(){var t=Object(j.f)();function e(){return(e=Object(l.a)(o.a.mark((function e(n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.substring(1).split("&"),c={},a.forEach((function(t){var e=t.split("="),n=Object(u.a)(e,2),a=n[0],r=n[1];c[a]=r})),localStorage.setItem("token",JSON.stringify(c)),t("/playlists");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(t){e.apply(this,arguments)}(window.location.hash)}),[]),Object(d.jsx)("div",{children:Object(d.jsx)("main",{children:Object(d.jsx)("h1",{children:"Logging you in..."})})})};var v=function(){var t=["playlist-read-private","playlist-modify-private"].join("%20");return Object(d.jsxs)("main",{children:[Object(d.jsx)("h1",{children:"Log in!"}),Object(d.jsx)("button",{onClick:function(){window.location="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("6f24e1aa19004f7cab42054a136c6efb","&redirect_uri=").concat("https://cinium.github.io/spotify-zero-mix/callback/","&scope=").concat(t,"&response_type=token&show_dialog=false")},children:"Login"})]})},O=n(11),x=n(19),k=function(){function t(e){Object(f.a)(this,t),this.base_url=e}return Object(x.a)(t,[{key:"getTokenFromLocal",value:function(){if(localStorage.getItem("token"))return JSON.parse(localStorage.getItem("token"))}},{key:"getPlaylists",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTokenFromLocal();case 2:return e=t.sent,t.next=5,fetch("".concat(this.base_url,"/v1/me/playlists"),{method:"GET",headers:{Authorization:"".concat(e.token_type," ").concat(e.access_token)}});case 5:return n=t.sent,t.next=8,n.json();case 8:return a=t.sent,t.next=11,a.items;case 11:return c=t.sent,t.abrupt("return",c);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getPlaylistItems",value:function(){var t=Object(l.a)(o.a.mark((function t(e){var n,a,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.getTokenFromLocal(),t.next=3,fetch("".concat(this.base_url,"/v1/playlists/").concat(e,"/tracks"),{method:"GET",headers:{Authorization:"".concat(n.token_type," ").concat(n.access_token)}});case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,t.next=9,c.items;case 9:return r=t.sent,t.abrupt("return",r);case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.getTokenFromLocal(),t.next=3,fetch("".concat(this.base_url,"/v1/me"),{method:"GET",headers:{Authorization:"".concat(e.token_type," ").concat(e.access_token)}});case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"createPlaylist",value:function(){var t=Object(l.a)(o.a.mark((function t(e){var n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.getTokenFromLocal(),t.next=3,fetch("".concat(this.base_url,"/v1/users/").concat(e,"/playlists"),{method:"POST",headers:{Authorization:"".concat(n.token_type," ").concat(n.access_token),"Content-Type":"application/json"},body:JSON.stringify({name:"\u041c\u0438\u043a\u0441 \u0434\u043d\u044f #0",description:"All in one daily mix",public:!1})});case 3:return a=t.sent,c=a.json(),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"addItemsToPlayList",value:function(){var t=Object(l.a)(o.a.mark((function t(e,n){var a,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.getTokenFromLocal(),t.next=3,fetch("".concat(this.base_url,"/v1/playlists/").concat(e,"/tracks"),{method:"POST",headers:{Authorization:"".concat(a.token_type," ").concat(a.access_token),"Content-Type":"application/json"},body:JSON.stringify({uris:n,position:0})});case 3:return c=t.sent,r=c.json(),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()}]),t}(),m=new k("https://api.spotify.com");function g(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),i=s[0],f=s[1],p=Object(a.useState)({}),h=Object(u.a)(p,2),b=h[0],j=h[1],y=Object(a.useState)({}),v=Object(u.a)(y,2),x=v[0],k=v[1],g=Object(a.useState)({}),w=Object(u.a)(g,2),_=w[0],S=w[1],T=Object(a.useState)(null),L=Object(u.a)(T,2),P=L[0],E=L[1],F=Object(a.useState)(!1),I=Object(u.a)(F,2),z=I[0],C=I[1];function A(){return(A=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getPlaylists();case 2:e=t.sent,n=e.find((function(t){return"\u041c\u0438\u043a\u0441 \u0434\u043d\u044f #0"===t.name})),E(n),c(U(e));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(){return(J=Object(l.a)(o.a.mark((function t(){var e,a,c,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],a=Object(O.a)(n),t.prev=2,a.s();case 4:if((c=a.n()).done){t.next=12;break}return r=c.value,t.next=8,m.getPlaylistItems(r.id);case 8:s=t.sent,e=e.concat(s);case 10:t.next=4;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),a.e(t.t0);case 17:return t.prev=17,a.f(),t.finish(17);case 20:f(e);case 21:case"end":return t.stop()}}),t,null,[[2,14,17,20]])})))).apply(this,arguments)}function N(){return(N=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getUserInfo();case 2:e=t.sent,k(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(){return(G=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==P){t.next=7;break}return t.next=3,m.createPlaylist(x.id);case 3:e=t.sent,S(e),t.next=8;break;case 7:S(P);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(){return(M=Object(l.a)(o.a.mark((function t(){var e,n,a,c,r,s,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=i.slice();case 1:if(!(e.length>0)){t.next=13;break}a=[],n=e.splice(0,100),c=Object(O.a)(n);try{for(c.s();!(r=c.n()).done;)s=r.value,a.push(s.track.uri)}catch(o){c.e(o)}finally{c.f()}return t.next=8,m.addItemsToPlayList(_.id,B(a));case 8:u=t.sent,console.log(u),u.snapshot_id&&C(!0),t.next=1;break;case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t){for(var e,n=t.length;0!==n;){e=Math.floor(Math.random()*n),n--;var a=[t[e],t[n]];t[n]=a[0],t[e]=a[1]}return t}function U(t){return t.filter((function(t){var e=t.images[0];if(!e)return!1;var n=e.url;return void 0!==n&&"dailymix"===n.substring(8,16)}))}return Object(a.useEffect)((function(){j(m.getTokenFromLocal())}),[]),Object(a.useEffect)((function(){0!==Object.keys(x).length&&x.constructor===Object&&function(){A.apply(this,arguments)}()}),[x]),Object(a.useEffect)((function(){!function(){J.apply(this,arguments)}()}),[n]),Object(a.useEffect)((function(){!function(){G.apply(this,arguments)}()}),[i]),Object(a.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[_]),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return N.apply(this,arguments)},children:"Create list"}),z&&Object(d.jsx)("p",{children:"Playlist created!"}),b&&"nah"]})}var w=n(12);var _=function(){return Object(d.jsx)(w.a,{basename:"/spotify-zero-mix",children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",element:Object(d.jsx)(v,{})}),Object(d.jsx)(j.a,{path:"/callback/",element:Object(d.jsx)(y,{})}),Object(d.jsx)(j.a,{path:"/playlists",element:Object(d.jsx)(g,{})})]})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),S()}},[[31,1,2]]]);
//# sourceMappingURL=main.4f41e115.chunk.js.map