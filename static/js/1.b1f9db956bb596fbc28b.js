webpackJsonp([1],{"6kHl":function(t,e){},"8PlR":function(t,e){},aHr2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:["data"],data:function(){return{right:!1,left:!1}},methods:{removeItem:function(t){this.$store.dispatch("deleteItem",t)},addToStock:function(t){this.$emit("add",t)}},mounted:function(){var t=this,e=null,a=null;window.addEventListener("touchstart",function(t){"list-item"===t.target.parentNode.classList.value&&(e=t.changedTouches[0].clientX)}),window.addEventListener("touchmove",function(n){"list-item"===n.target.parentNode.classList.value&&(a=n.changedTouches[0].clientX,e<a?(n.target.parentNode.getElementsByClassName("delete-item")[0].style.right="-70px",n.target.parentNode.getElementsByClassName("add-to-stock")[0].style.left=Math.abs(e-a)+"px",n.target.parentNode.getElementsByClassName("add-to-stock")[0].style.opacity=Math.abs(e-a)/n.target.parentNode.getBoundingClientRect().width*4,Math.abs(e-a)>150?t.right=!0:t.right=!1):e>a&&(n.target.parentNode.getElementsByClassName("add-to-stock")[0].style.left="-70px",n.target.parentNode.getElementsByClassName("delete-item")[0].style.right=Math.abs(e-a)+"px",n.target.parentNode.getElementsByClassName("delete-item")[0].style.opacity=Math.abs(e-a)/n.target.getBoundingClientRect().width*4,Math.abs(e-a)>150?t.left=!0:t.left=!1))}),window.addEventListener("touchend",function(e){if("list-item"===e.target.parentNode.classList.value){if(e.target.parentNode.getElementsByClassName("add-to-stock")[0].style.left="-70px",e.target.parentNode.getElementsByClassName("delete-item")[0].style.right="-70px",t.right){var a=t;t.data.forEach(function(t){t.id===Number(e.target.parentNode.id)&&a.addToStock(t)})}else t.left&&t.removeItem(Number(e.target.parentNode.id));t.right=!1,t.left=!1}})}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"list",attrs:{id:"list-id"}},[a("transition-group",{attrs:{name:"list"}},t._l(t.data,function(e,n){return a("li",{key:n,staticClass:"list-item",attrs:{id:e.id}},[a("span",{staticClass:"add-to-stock control-button",class:{"swiped-to-right":t.right},on:{click:function(a){t.addToStock(e)}}},[a("svg",{staticStyle:{"enable-background":"new 0 0 511.898 511.898"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.898 511.898","xml:space":"preserve",width:"20px",height:"20px",fill:"#4ED3C2"}},[a("path",{attrs:{d:"M510.941,129.383c-0.766-0.894-1.874-1.406-3.046-1.406H111.977c-2.211,0-4,1.789-4,3.999c0,2.211,1.789,3.999,4,3.999\n              h391.232l-30.76,192.21L171.341,350.83c-2.204,0.164-3.855,2.085-3.687,4.288c0.156,2.1,1.909,3.694,3.983,3.694\n              c0.101,0,0.203,0,0.304-0.008l304.257-22.878c1.851-0.14,3.359-1.531,3.656-3.358l31.993-199.959\n              C512.035,131.452,511.699,130.273,510.941,129.383z"}}),t._v(" "),a("path",{attrs:{d:"M159.829,354.9L71.848,26.963c-0.57-2.139-2.764-3.389-4.897-2.827c-2.136,0.574-3.401,2.764-2.827,4.897l87.982,327.935\n              c0.48,1.789,2.093,2.961,3.858,2.961c0.343,0,0.691-0.039,1.038-0.132C159.139,359.219,160.403,357.032,159.829,354.9z"}}),t._v(" "),a("path",{attrs:{d:"M175.506,353.79L83.213,10.963c-0.578-2.133-2.769-3.402-4.901-2.824c-2.133,0.574-3.398,2.769-2.824,4.901\n              l92.294,342.828c0.48,1.788,2.096,2.96,3.858,2.96c0.344,0,0.696-0.039,1.043-0.133\n              C174.815,358.117,176.08,355.923,175.506,353.79z"}}),t._v(" "),a("path",{attrs:{d:"M67.986,23.999H11.998c-2.211,0-3.999,1.789-3.999,3.999c0,2.211,1.788,3.999,3.999,3.999h55.988\n              c2.21,0,3.999-1.788,3.999-3.999C71.985,25.788,70.196,23.999,67.986,23.999z"}}),t._v(" "),a("path",{attrs:{d:"M79.352,8.002H11.998c-2.211,0-3.999,1.789-3.999,4c0,2.21,1.788,3.999,3.999,3.999h67.353c2.21,0,3.999-1.789,4-3.999\n              C83.351,9.791,81.562,8.002,79.352,8.002z"}}),t._v(" "),a("path",{attrs:{d:"M11.998,23.999c-2.207,0-3.999-1.793-3.999-3.999c0-2.207,1.792-3.999,3.999-3.999c2.21,0,3.999-1.789,3.999-3.999\n              c0-2.211-1.789-4-3.999-4C5.382,8.002,0,13.384,0,20c0,6.615,5.382,11.997,11.998,11.997c2.21,0,3.999-1.788,3.999-3.999\n              C15.997,25.788,14.208,23.999,11.998,23.999z"}}),t._v(" "),a("path",{attrs:{d:"M475.901,175.968H150.703c-2.21,0-3.999,1.788-3.999,3.999c0,2.21,1.789,3.999,3.999,3.999h325.198\n              c2.211,0,4-1.789,4-3.999C479.901,177.756,478.112,175.968,475.901,175.968z"}}),t._v(" "),a("path",{attrs:{d:"M459.905,231.956H174.698c-2.21,0-3.999,1.788-3.999,3.999s1.789,3.999,3.999,3.999h285.207\n              c2.211,0,3.999-1.788,3.999-3.999S462.116,231.956,459.905,231.956z"}}),t._v(" "),a("path",{attrs:{d:"M443.908,287.944H190.695c-2.211,0-3.999,1.789-3.999,3.999c0,2.211,1.788,4,3.999,4h253.213c2.211,0,3.999-1.789,3.999-4\n              C447.907,289.733,446.119,287.944,443.908,287.944z"}}),t._v(" "),a("path",{attrs:{d:"M173.384,351.229c-1.992-0.946-4.383-0.117-5.339,1.866l-23.675,49.092c-0.961,1.991-0.125,4.382,1.862,5.335\n              c0.562,0.273,1.152,0.398,1.734,0.398c1.488,0,2.917-0.828,3.605-2.257l23.675-49.092\n              C176.207,354.58,175.371,352.19,173.384,351.229z"}}),t._v(" "),a("path",{attrs:{d:"M157.547,351.229c-1.992-0.946-4.382-0.117-5.339,1.866l-23.675,49.092c-0.961,1.991-0.125,4.382,1.863,5.335\n              c0.562,0.273,1.151,0.398,1.733,0.398c1.488,0,2.918-0.828,3.606-2.257l23.675-49.092\n              C160.37,354.58,159.534,352.19,157.547,351.229z"}}),t._v(" "),a("path",{attrs:{d:"M459.905,431.914h-287.94c-2.211,0-3.999,1.789-3.999,4c0,2.21,1.788,3.999,3.999,3.999h287.94\n              c2.211,0,3.999-1.789,3.999-3.999C463.904,433.703,462.116,431.914,459.905,431.914z"}}),t._v(" "),a("path",{attrs:{d:"M459.905,415.918h-287.94c-2.211,0-3.999,1.789-3.999,3.999c0,2.211,1.788,3.999,3.999,3.999h287.94\n              c2.211,0,3.999-1.788,3.999-3.999C463.904,417.707,462.116,415.918,459.905,415.918z"}}),t._v(" "),a("path",{attrs:{d:"M171.965,431.914c-19.847,0-35.993-12.559-35.993-27.994c0-2.21-1.788-3.999-3.999-3.999c-2.21,0-3.999,1.789-3.999,3.999\n              c0,19.847,19.734,35.993,43.991,35.993c2.21,0,3.999-1.789,3.999-3.999C175.964,433.703,174.175,431.914,171.965,431.914z"}}),t._v(" "),a("path",{attrs:{d:"M171.965,415.918c-9.717,0-19.996-6.163-19.996-11.998c0-2.21-1.789-3.999-3.999-3.999c-2.211,0-3.999,1.789-3.999,3.999\n              c0,11.443,14.778,19.996,27.994,19.996c2.21,0,3.999-1.788,3.999-3.999C175.964,417.707,174.175,415.918,171.965,415.918z"}}),t._v(" "),a("path",{attrs:{d:"M459.905,415.918c-2.211,0-3.999,1.789-3.999,3.999c0,2.211,1.788,3.999,3.999,3.999c2.203,0,3.999,1.797,3.999,4\n              c0,2.21-1.796,3.998-3.999,3.998c-2.211,0-3.999,1.789-3.999,4c0,2.21,1.788,3.999,3.999,3.999\n              c6.615,0,11.997-5.382,11.997-11.997C471.902,421.3,466.52,415.918,459.905,415.918z"}}),t._v(" "),a("path",{attrs:{d:"M427.912,159.971c-2.211,0-3.999,1.789-3.999,3.999v143.97c0,2.21,1.788,3.999,3.999,3.999\n              c2.21,0,3.999-1.789,3.999-3.998V163.97C431.911,161.76,430.122,159.971,427.912,159.971z"}}),t._v(" "),a("path",{attrs:{d:"M371.923,159.971c-2.21,0-3.998,1.789-3.998,3.999v143.97c0,2.21,1.788,3.999,3.998,3.999c2.211,0,4-1.789,4-3.998V163.97\n              C375.923,161.76,374.134,159.971,371.923,159.971z"}}),t._v(" "),a("path",{attrs:{d:"M315.934,159.971c-2.21,0-3.999,1.789-3.999,3.999v143.97c0,2.21,1.789,3.999,3.999,3.999c2.211,0,4-1.789,4-3.998V163.97\n              C319.934,161.76,318.145,159.971,315.934,159.971z"}}),t._v(" "),a("path",{attrs:{d:"M259.946,159.971c-2.21,0-3.999,1.789-3.999,3.999v143.97c0,2.21,1.789,3.999,3.999,3.999c2.211,0,4-1.789,4-3.998V163.97\n              C263.946,161.76,262.157,159.971,259.946,159.971z"}}),t._v(" "),a("path",{attrs:{d:"M203.958,159.971c-2.21,0-3.999,1.789-3.999,3.999v143.97c0,2.21,1.789,3.999,3.999,3.999\n              c2.211,0,3.999-1.789,3.999-3.998V163.97C207.957,161.76,206.169,159.971,203.958,159.971z"}}),t._v(" "),a("path",{attrs:{d:"M230.624,462.767c-0.628-2.118-2.843-3.32-4.972-2.688c-2.116,0.625-3.323,2.852-2.69,4.969\n              c0.656,2.217,0.992,4.521,0.992,6.857c0,13.231-10.764,23.995-23.995,23.995c-13.231,0-23.995-10.764-23.995-23.995\n              c0-2.336,0.336-4.639,0.992-6.857c0.633-2.117-0.574-4.344-2.691-4.969c-2.117-0.624-4.339,0.571-4.972,2.688\n              c-0.882,2.952-1.327,6.031-1.327,9.139c0,17.644,14.352,31.993,31.993,31.993c17.64,0,31.993-14.348,31.993-31.993\n              C231.952,468.797,231.507,465.719,230.624,462.767z"}}),t._v(" "),a("path",{attrs:{d:"M221.22,440.123c-2.113-0.704-4.363,0.429-5.058,2.522c-5.51,16.528-13.22,32.088-15.914,33.298\n              c-3.272-1.21-10.982-16.77-16.493-33.298c-0.7-2.092-2.937-3.225-5.058-2.522c-2.092,0.696-3.225,2.96-2.526,5.054\n              c5.886,17.668,14.794,38.727,23.788,38.727s17.902-21.059,23.788-38.727C224.447,443.083,223.314,440.818,221.22,440.123z"}}),t._v(" "),a("path",{attrs:{d:"M438.589,462.776c-0.633-2.117-2.835-3.327-4.975-2.703c-2.109,0.633-3.32,2.86-2.695,4.977\n              c0.664,2.217,0.992,4.521,0.992,6.857c0,13.231-10.764,23.995-23.995,23.995c-13.231,0-23.995-10.764-23.995-23.995\n              c0-2.336,0.336-4.64,1-6.85c0.624-2.118-0.579-4.344-2.688-4.977c-2.124-0.624-4.342,0.571-4.982,2.68\n              c-0.875,2.952-1.328,6.03-1.328,9.146c0,17.644,14.356,31.993,31.993,31.993c17.637,0,31.993-14.348,31.993-31.992\n              C439.909,468.806,439.464,465.728,438.589,462.776z"}}),t._v(" "),a("path",{attrs:{d:"M429.177,440.123c-2.109-0.704-4.359,0.429-5.061,2.522c-5.508,16.528-13.217,32.088-15.911,33.298\n              c-3.272-1.21-10.982-16.77-16.489-33.298c-0.704-2.092-2.953-3.225-5.061-2.522c-2.093,0.696-3.226,2.96-2.531,5.054\n              c5.89,17.668,14.794,38.727,23.792,38.727s17.902-21.059,23.792-38.727C432.404,443.083,431.271,440.818,429.177,440.123z"}})])]),t._v(" "),a("a",{staticClass:"list-item-element",on:{click:function(a){t.$emit("edit",{item:e,index:n})}}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),a("span",{staticClass:"delete-item control-button",class:{"swiped-to-left":t.left},on:{click:function(a){t.removeItem(e.id)}}},[a("svg",{staticStyle:{"enable-background":"new 0 0 59 59"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 59 59","xml:space":"preserve",width:"20px",height:"20px",fill:"#fd3939"}},[a("path",{attrs:{d:"M29.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C28.5,50.553,28.948,51,29.5,51z"}}),t._v(" "),a("path",{attrs:{d:"M19.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C18.5,50.553,18.948,51,19.5,51z"}}),t._v(" "),a("path",{attrs:{d:"M39.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C38.5,50.553,38.948,51,39.5,51z"}}),t._v(" "),a("path",{attrs:{d:"M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289\n              C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h2.041l1.915,46.021C10.493,55.743,11.565,59,15.364,59\n              h28.272c3.799,0,4.871-3.257,4.907-4.958L50.459,8H52.5c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681\n              C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553\n              C20.665,4.952,20.988,3.504,21.792,2.681z M46.544,53.979C46.538,54.288,46.4,57,43.636,57H15.364\n              c-2.734,0-2.898-2.717-2.909-3.042L10.542,8h37.915L46.544,53.979z"}})])])])}))],1)])},staticRenderFns:[]};var c={name:"ShoppingList",components:{ItemsList:a("VU/8")(n,s,!1,function(t){a("8PlR")},"data-v-4f1065ba",null).exports,AppModal:function(){return a.e(5).then(a.bind(null,"+eVg"))}},data:function(){return{items:[],isModalOpen:!1,isModalEdit:!1,stockItem:null}},methods:{toggleModal:function(t){"new"===t?(this.isModalEdit=!1,this.stockItem=null,this.isModalOpen=!this.isModalOpen):"add"===t?(this.isModalEdit=!1,this.isModalOpen=!this.isModalOpen):"edit"===t&&(this.isModalEdit=!0,this.isModalOpen=!this.isModalOpen)},addToStock:function(t){this.stockItem=t,this.toggleModal("add")},editItem:function(t){this.stockItem=t,this.toggleModal("edit")},updateView:function(t){console.log(t.name),this.items.splice(t.index,1,{id:t.id,name:t.name})}},mounted:function(){this.items=this.$store.state.items}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"add-new",on:{click:function(e){t.toggleModal("new")}}},[a("svg",{staticStyle:{"enable-background":"new 0 0 612 612"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"25px",height:"25px",viewBox:"0 0 612 612","xml:space":"preserve"}},[a("polygon",{attrs:{points:"612,286.893 325.116,286.893 325.116,0.296 286.903,0.296 286.903,286.893 0,286.893 0,325.107 286.903,325.107      286.903,611.704 325.116,611.704 325.116,325.107 612,325.107    ",fill:"#FFFFFF"}})])]),t._v(" "),t.items?a("items-list",{attrs:{data:t.items},on:{add:t.addToStock,edit:t.editItem}}):t._e(),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.isModalOpen?a("app-modal",{attrs:{data:{item:t.stockItem,edit:t.isModalEdit}},on:{close:function(e){t.toggleModal("new")},update:t.updateView}}):t._e()],1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,i,!1,function(t){a("6kHl")},null,null);e.default=d.exports}});
//# sourceMappingURL=1.b1f9db956bb596fbc28b.js.map