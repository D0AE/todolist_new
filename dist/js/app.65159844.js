(function(t){function o(o){for(var n,l,s=o[0],r=o[1],a=o[2],u=0,p=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&p.push(c[l][0]),c[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(o);while(p.length)p.shift()();return i.push.apply(i,a||[]),e()}function e(){for(var t,o=0;o<i.length;o++){for(var e=i[o],n=!0,s=1;s<e.length;s++){var r=e[s];0!==c[r]&&(n=!1)}n&&(i.splice(o--,1),t=l(l.s=e[0]))}return t}var n={},c={app:0},i=[];function l(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=n,l.d=function(t,o,e){l.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,o){if(1&o&&(t=l(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)l.d(e,n,function(o){return t[o]}.bind(null,n));return e},l.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(o,"a",o),o},l.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},l.p="/vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=o,s=s.slice();for(var a=0;a<s.length;a++)o(s[a]);var d=r;i.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},2873:function(t,o,e){t.exports=e.p+"img/complete.28fb062d.svg"},"29d1":function(t,o,e){"use strict";e("dd59")},"2b3c":function(t,o,e){t.exports=e.p+"img/delBtn.dd4575b2.svg"},3455:function(t,o,e){"use strict";e("63bc")},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),c=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"app"},[e("Todolist"),e("router-view")],1)},i=[],l={},s=l,r=(e("5c0b"),e("2877")),a=Object(r["a"])(s,c,i,!1,null,null,null),d=a.exports,u=e("8c4f"),p=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"todolist"},[n("div",{staticClass:"container"},[n("div",{staticClass:"clock"},[n("div",{staticClass:"time"},[t._v(" "+t._s(t.time)+" ")]),n("div",{staticClass:"oz"},[t._v(" "+t._s(t.timeCheck)+" ")])]),n("div",{class:{header:!0,click:t.clickToDo}},[n("div",{staticClass:"counting"},[n("div",{staticClass:"text",on:{click:t.clearTodo}},[t._v(" "+t._s(t.dummyList.length)+" ")])]),n("div",{staticClass:"fade right"})]),n("div",{staticClass:"body"},[n("div",{staticClass:"todos",attrs:{id:"todos"}},[n("div",{class:{"black-todos":!0,click:t.clickToDo}}),t._l(t.dummyList,(function(o){return n("ToDo",{key:o.content,attrs:{todo:o,pop:t.pop},on:{black:t.onClickBlack}})}))],2),n("div",{staticClass:"blur-wrap"},[n("div",{class:{blur:!0,click:t.clickToDo}})]),n("div",{class:{"black-body":!0,click:t.clickAdd}}),n("div",{class:{"input-todo":!0,click:t.clickAdd}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todoContent,expression:"todoContent"}],attrs:{type:"text",value:""},domProps:{value:t.todoContent},on:{keypress:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(o){o.target.composing||(t.todoContent=o.target.value)}}}),n("img",{attrs:{src:e("2b3c")},on:{click:function(o){t.todoContent=""}}})])]),n("div",{class:{footer:!0,click:t.clickAdd,clickToDo:t.clickToDo}},[n("div",{class:{button:!0,click:t.clickAdd},on:{click:function(o){t.clickAdd=!t.clickAdd}}},[n("div",{class:{box:!0,row:!0,click:t.clickToDo}}),n("div",{class:{box:!0,column:!0,click:t.clickToDo}})]),n("div",{class:{options:!0,click:t.clickToDo}},[n("div",{staticClass:"option green",on:{click:function(o){t.clickToDo=!1,t.pop=null}}},[n("img",{attrs:{src:e("2873")}})]),n("div",{staticClass:"option blue",on:{click:function(o){t.editTodo,t.clickToDo=!1,t.pop=null}}},[n("img",{attrs:{src:e("6582")}})]),n("div",{staticClass:"option red",on:{click:function(o){t.deleteTodo,t.clickToDo=!1,t.pop=null}}},[n("img",{attrs:{src:e("d739")},on:{click:t.deleteTodo}})])]),n("div",{staticClass:"fade left"})])])])},f=[],v=(e("fb6a"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{class:{todo:!0,pop:t.todo.id==t.pop},on:{click:t.trueBlack}},[e("div",{staticClass:"text"},[t._v(" "+t._s(t.todo.content)+" ")])])}),k=[],m={name:"ToDo",props:["todo","pop"],created:function(){},methods:{trueBlack:function(){this.todo.id===this.pop?this.$emit("black",null):this.$emit("black",this.todo.id)}},data:function(){return{}}},h=m,g=(e("29d1"),Object(r["a"])(h,v,k,!1,null,"55ec103c",null)),b=g.exports,y=!1,T=[{id:0,content:"꽃신 신기"}],C={name:"Todolist",components:{ToDo:b},mounted:function(){setInterval(this.updateTime,1e3)},created:function(){console.log("created");for(var t=0;t<localStorage.length;t++){if("loglevel:webpack-dev-server"!==localStorage.key(t)){var o=JSON.parse(localStorage.getItem(localStorage.key(t))),e={id:o.id,content:o.content};this.dummyList.push(e)}console.log(T[t].content)}},methods:{clearTodo:function(){localStorage.clear()},onClickBlack:function(t){this.clickToDo=!0,null===t&&(this.clickToDo=!1),this.pop=t;var o=t;console.log(o)},updateTime:function(){var t=new Date,o=t.getHours();o>11?(this.timeCheck="PM",o-=12):this.timeCheck="AM",0==o&&(o=12),this.time=this.zeroPadding(o,2)+":"+this.zeroPadding(t.getMinutes(),2),y?(document.getElementById("todos").scrollTop=document.getElementById("todos").scrollHeight,y=!1):y=!1},zeroPadding:function(t,o){for(var e="",n=0;n<o;n++)e+="0";return(e+t).slice(-o)},addTodo:function(){var t={id:this.dummyList.length,content:this.todoContent};localStorage.setItem(this.todoContent,JSON.stringify(t)),this.dummyList.push(t),this.clickAdd=!1,this.todoContent="",y=!0},deleteTodo:function(){var t=this.todoId;console.log(t)},editTodo:function(){alert("edit"),console.log("edit")}},data:function(){return{dummyList:T,clickToDo:!1,pop:null,clickAdd:!1,newTodoText:"",todoContent:"",time:"",timeCheck:"AM",scrollCheck:!1,popId:""}}},_=C,x=(e("3455"),Object(r["a"])(_,p,f,!1,null,"3b2a3bc8",null)),w=x.exports;n["a"].use(u["a"]);var D=[{path:"/",name:"Todolist",component:w}],O=new u["a"]({mode:"history",base:"/vue/",routes:D}),S=O,j=e("2f62");n["a"].use(j["a"]);var P=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:S,store:P,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,o,e){"use strict";e("d978")},"63bc":function(t,o,e){},6582:function(t,o,e){t.exports=e.p+"img/edit.d10f3644.svg"},d739:function(t,o,e){t.exports=e.p+"img/delete.e305ff71.svg"},d978:function(t,o,e){},dd59:function(t,o,e){}});
//# sourceMappingURL=app.65159844.js.map