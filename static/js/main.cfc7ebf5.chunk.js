(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),c=n(2),i=n(3),u=n(1),l=n(5),d=n(4),h=function(e){var t=e.task,n=e.onClick,a=e.taskId,o={undone:"lightblue",working:"orange",done:"mediumseagreen"}[t.status],s="done"===t.status?"line-through":"none";return r.a.createElement("div",{style:{display:"flex",cursor:"pointer"},onClick:function(){return n(a)}},r.a.createElement("p",{style:{backgroundColor:o,width:"10px"}}),r.a.createElement("p",{style:{textDecoration:s,marginLeft:"10px"}},t.value))},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){"Enter"===e.key&&(this.props.onChange(e.target.value),e.target.value="")}},{key:"render",value:function(){return r.a.createElement("input",{type:"text",onKeyPress:this.handleChange})}}]),n}(r.a.Component),g=(n(13),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={tasks:[]},a.addNewTask=a.addNewTask.bind(Object(u.a)(a)),a.toggleCheckedStatus=a.toggleCheckedStatus.bind(Object(u.a)(a)),a}return Object(i.a)(n,[{key:"addNewTask",value:function(e){this.setState((function(t){var n=t.tasks.slice();return n.push({status:"undone",value:e}),{tasks:n}}))}},{key:"getNextState",value:function(e){var t=["undone","working","done"],n=this.state.tasks[e].status,a=(t.indexOf(n)+1)%3;return t[a]}},{key:"toggleCheckedStatus",value:function(e){var t=this;this.setState((function(n){var a=JSON.parse(JSON.stringify(n.tasks));return a[e].status=t.getNextState(e),{tasks:a}}))}},{key:"render",value:function(){var e=this,t=this.state.tasks.map((function(t,n){return r.a.createElement(h,{task:t,taskId:n,key:n,onClick:e.toggleCheckedStatus})}));return r.a.createElement("div",{className:"todo"},r.a.createElement("h1",null,"Todo"),r.a.createElement("div",null," ",t),r.a.createElement(k,{onChange:this.addNewTask}))}}]),n}(r.a.Component)),v=function(){return r.a.createElement("div",null,r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.cfc7ebf5.chunk.js.map