(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1039:function(e,t){},1049:function(e,t){},1050:function(e,t){},1051:function(e,t){},1066:function(e,t){},1074:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(194),r=n.n(a),o=(n(396),n(60)),s=n(61),u=n(63),l=n(62),f=n(64),d=n(6),p=n.n(d),v=n(388),h=n(196),y=n.n(h),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={directLine:null},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchToken()}},{key:"fetchToken",value:function(){var e=Object(v.a)(p.a.mark(function e(){var t,n,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://webchat-mockbot.azurewebsites.net/directline/token",{method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.token,this.setState(function(){return{directLine:Object(h.createDirectLine)({token:c})}});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.directLine?i.a.createElement(y.a,Object.assign({className:"chat",directLine:this.state.directLine},this.props)):i.a.createElement("div",null,"Connecting to bot\u2026")}}]),t}(i.a.Component);function m(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",null,"Nothing selected"),i.a.createElement("p",null,"Click on any message sent from the user or the bot to inspect it."))}var O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.inspectedObject,n=e.inspectorRef;return i.a.createElement("div",{className:"inspector",tabIndex:"-1",ref:n},i.a.createElement("h2",null,"Inspector"),i.a.createElement("div",null,t?i.a.createElement("pre",null,JSON.stringify(t,null,4)):i.a.createElement(m,null)))}}]),t}(c.Component),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).activityMiddleware=function(){return function(e){return function(t){return function(c){var a=t.activity===n.state.selectedActivity,r=a?"selected":"",o=a?"Selected activity. Click to deselect activity.":"Click to inspect activity.";return i.a.createElement("div",{"aria-label":o,className:"activity-wrapper ".concat(r),onClick:n.selectActivity(t.activity),onKeyDown:n.handleKeyDown(t.activity),role:"button",tabIndex:"0"},e(t)(c))}}}},n.selectActivity=function(e){return function(){n.setState(function(t){return{selectedActivity:t.selectedActivity===e?null:e}},function(){n.state.selectedActivity&&n.inspectorRef.current.focus()})}},n.handleKeyDown=function(e){return function(t){[" ","Enter"].includes(t.key)&&n.selectActivity(e)(t)}},n.state={selectedActivity:null},n.inspectorRef=i.a.createRef(),n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.selectedActivity;return i.a.createElement("div",{className:"app"},i.a.createElement(b,{activityMiddleware:this.activityMiddleware}),i.a.createElement(O,{inspectedObject:e,inspectorRef:this.inspectorRef}))}}]),t}(i.a.Component);r.a.render(i.a.createElement(j,null),document.getElementById("root"))},391:function(e,t,n){e.exports=n(1074)},396:function(e,t,n){},493:function(e,t){},495:function(e,t){},532:function(e,t){},533:function(e,t){}},[[391,1,2]]]);
//# sourceMappingURL=main.61d32fc3.chunk.js.map