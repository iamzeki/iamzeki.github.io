webpackJsonp([4],{158:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=(t(10),t(4)),i=t(6),o=t(94),a=t.n(o),s=t(95),c=t.n(s),d=t(245);t.n(d);r.default={data:function(){return{breadcrumb:[{text:"首页",href:"/"},{text:"我的订单",href:"/order/index.html"},{text:"订单号详情"}],order_info:!1,is_order_loading:!0}},components:{detail:c.a,orderBtn:a.a},methods:{getOrderInfo:function(){var e=this;this.is_order_loading=!0;var r=window.location.search;if(r){var o=r.slice(1,r.length).split("&"),a={};o.forEach(function(e){var r=e.indexOf("=");if(-1!=r){var t=e.slice(0,r);a[t]=e.slice(r+1,e.length)}});var s=a.order_id;if(s){var c=n.a.bxw_api_root+"/v1/order/info";t.i(i.a)("GET",c,{order_id:s},!0).then(function(r){e.is_order_loading=!1,r=r.data,console.log(r),r.success&&(e.order_info=r.data)})}}},btnSubmit:function(e){e&&this.getOrderInfo()},cancelOrder:function(e){var r=this;this.$confirm("是否取消订单？").then(function(){var o=n.a.bxw_api_root+"/v1/order/cancel",a={order_id:e};t.i(i.a)("POST",o,a,!0).then(function(e){e=e.data,r.$message({type:e.success?"info":"error",message:e.success?"操作成功":e.data.message}),e.success&&r.getOrderInfo()})})}},watch:{},mounted:function(){this.getOrderInfo()}}},172:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0),i=t(99),o=t.n(i);new n.default({render:function(e){return e(o.a)}}).$mount("#app")},245:function(e,r){},302:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.is_order_loading,expression:"is_order_loading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"玩命加载中..."}},[t("jk-header"),e._v(" "),t("jk-nav",{attrs:{cur_nav:"我的订单"}}),e._v(" "),t("breadcrumb",{attrs:{data:e.breadcrumb}}),e._v(" "),e.order_info?t("div",{staticClass:"jk-container jk-box-style"},[t("div",{staticClass:"jk-order-info-log clearfix"},[t("div",{staticClass:"jk-log-control"},[t("p",[e._v("订单号："+e._s(e.order_info.order_sn))]),e._v(" "),t("p",{staticClass:"status"},[e._v("\n                    "+e._s(e.order_info.status)+"\n                ")]),e._v(" "),t("order-btn",{attrs:{action:e.order_info.action,order_id:e.order_info.id,"on-success":e.btnSubmit}}),e._v(" "),t("div",{staticClass:"other"},[e._m(0),e._v(" "),e.order_info.is_cancel?t("a",{staticClass:"right",attrs:{href:"javascript:"},on:{click:function(r){e.cancelOrder(e.order_info.id)}}},[t("i",{staticClass:"jk-icon jk-icon-cancel"}),e._v("\n                        取消订单\n                    ")]):e._e()])],1),e._v(" "),t("div",{staticClass:"jk-log-list"},[t("ul",e._l(e.order_info.action_log,function(r,n){return t("li",{class:{cur:0==n}},[e._v("\n                        "+e._s(r.created_at)+"\n                        "),t("span",{domProps:{innerHTML:e._s(r.send_info)}})])}))])]),e._v(" "),t("detail",{attrs:{order_info:e.order_info}})],1):e._e(),e._v(" "),t("jk-footer")],1)},staticRenderFns:[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a",{staticClass:"left",attrs:{href:"javascript:",onclick:"window.print();"}},[t("i",{staticClass:"jk-icon jk-icon-print"}),e._v("\n                        打印订单\n                    ")])}]}},99:function(e,r,t){var n=t(2)(t(158),t(302),null,null);e.exports=n.exports}},[172]);