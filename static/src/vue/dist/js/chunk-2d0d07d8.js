(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d07d8"],{"67cd":function(e,t,n){"use strict";n.r(t);var c=n("f2bf"),i={key:0},r=Object(c["g"])("h1",null,"Your Friends",-1),u={class:"container"},s=Object(c["g"])("br",null,null,-1),o=Object(c["g"])("a",null,"All users",-1),b={class:"container",style:{border:"1px solid"}},f=["href"],l=Object(c["g"])("h2",null,"Friend Requests",-1),d=Object(c["i"])(),j=["href"];function O(e,t,n,O,a,h){return Object(c["t"])(),Object(c["f"])("div",null,[null!=n.quiz_to_invite?(Object(c["t"])(),Object(c["f"])("strong",i,"Quiz to invite: "+Object(c["D"])(n.quiz_to_invite),1)):Object(c["e"])("",!0),r,Object(c["g"])("div",u,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(e.$store.state.user.friends,(function(e){return Object(c["t"])(),Object(c["f"])("div",{key:e},[Object(c["i"])(Object(c["D"])(e)+" ",1),null!=n.quiz_to_invite?(Object(c["t"])(),Object(c["f"])("button",{key:0,onClick:t[0]||(t[0]=function(){return h.inviteFriend&&h.inviteFriend.apply(h,arguments)}),class:"btn btn-outline-secondary"},"Invite to game")):Object(c["e"])("",!0)])})),128))]),s,o,Object(c["g"])("div",b,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(this.users,(function(e){return Object(c["t"])(),Object(c["f"])("div",{key:e.id},[Object(c["i"])(Object(c["D"])(e.username)+" ",1),Object(c["g"])("a",{href:"/api/send_friend_request/".concat(e.id)},"Invite to friends",8,f)])})),128))]),l,(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(a.friend_requests,(function(e){return Object(c["t"])(),Object(c["f"])("div",{key:e.id},[Object(c["g"])("p",null,[Object(c["g"])("span",null,"From user:"+Object(c["D"])(e.from_user),1)]),d,Object(c["g"])("a",{href:"/api/accept_friend_request/".concat(e.id)},"Accept friend request",8,j)])})),128))])}n("d3b7");var a={name:"Friends",props:{quiz_to_invite:null},data:function(){return{users:[],friend_requests:[]}},mounted:function(){var e=this;fetch("https://www.quizcity.net/api/users/").then((function(e){return e.json()})).then((function(t){return e.users=t})).catch((function(e){return console.log(e.message)})),fetch("https://www.quizcity.net/api/user/").then((function(e){return e.json()})).then((function(t){return e.friend_requests=t.friend_request_to})).catch((function(e){return console.log(e.message)}))},methods:{inviteFriend:function(){}}},h=n("6b0d"),p=n.n(h);const v=p()(a,[["render",O]]);t["default"]=v}}]);
//# sourceMappingURL=chunk-2d0d07d8.js.map