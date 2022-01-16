(self.webpackChunkwp_serverless_grid=self.webpackChunkwp_serverless_grid||[]).push([[854],{887:function(e,t,n){"use strict";var r=n(5318),o=r(n(7757)),i=r(n(8926));n(1539),n(8674);var c=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},a=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&c(t,e,n);return a(t,e),t};Object.defineProperty(t,"X",{value:!0});var l=n(311);t.Z=(0,l.defineComponent)({name:"FrontView",setup:function(){var e=(0,l.ref)(!1),t=(0,l.ref)("");return{comp:(0,l.computed)((function(){return(0,l.defineAsyncComponent)((function(){return Promise.resolve().then((function(){return s(n(729)("./".concat(t.value,".vue")))}))}))})),componentName:t,hasLoaded:e}},methods:{doLoad:function(){var e=this;return(0,i.default)(o.default.mark((function t(){var n,r;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,(0,l.nextTick)();case 3:(r=n.$win.vue_wp_plugin_config_frontview.viewComponent)||(r=n.$route.query.comp),r||(r="Home"),n.componentName=r,n.hasLoaded=!0,n.$forceUpdate();case 9:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;e.$win.vue_wp_plugin_config_frontview?e.doLoad():document.onreadystatechange=(0,i.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"complete"==document.readyState&&e.doLoad();case 1:case"end":return t.stop()}}),t)})))}})},2386:function(e,t,n){"use strict";t.s=void 0;var r=n(311),o={key:0,class:"main-wrapper"};t.s=function(e,t,n,i,c,a){return e.hasLoaded?((0,r.openBlock)(),(0,r.createElementBlock)("div",o,[((0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(e.comp)))])):(0,r.createCommentVNode)("",!0)}},9032:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};var o=n(311),i=r(n(4985));n(4498);var c=r(n(8336)),a=r(n(9536)),s=(0,r(n(5859)).default)(window),l=(0,o.createApp)(i.default);l.config.globalProperties.$win=s,l.use(a.default).use(c.default,s.$appConfig.axios),l.mount("#vue-frontview-app")},9536:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2119),i=[{path:"/",component:r(n(7511)).default}],c=(0,o.createRouter)({history:(0,o.createWebHashHistory)(),routes:i});t.default=c},1043:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(9669)).default.create({baseURL:"/",withCredentials:!1,headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"}});o.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",o.interceptors.response.use((function(e){return e.headers["X-WP-Nonce"]&&(window.$appConfig.nonce=e.headers["X-WP-Nonce"]),e})),o.interceptors.request.use((function(e){return e.headers["X-WP-Nonce"]=window.$appConfig.nonce,e})),t.default=o},5859:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1043)),i=r(n(3279));t.default=function(e){return e.$appConfig={},e.$appConfig.axios=o.default,e.$appConfig.debounce=i.default,e}},4498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(5859),n(1043)},3153:function(e,t,n){"use strict";var r=n(5318);Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o=r(n(7757)),i=r(n(8926));n(1539),n(4747),n(9600),n(6699),n(2023),n(4916),n(4765),n(8674),n(7941),n(2707),n(2222);var c=n(311),a=r(n(3633)),s=(0,c.defineComponent)({components:{Multiselect:a.default},setup:function(e,t){var n=(0,c.reactive)({categories:[],cuisines:[],cookm:0,prepm:0,totalm:0}),r=(0,c.ref)([]);return{dsSearch:(0,c.ref)(""),recipes:r,filters:n,categories:(0,c.ref)({}),cuisines:(0,c.ref)({}),recipeTimes:[{text:"Please select one",value:0},{text:"< 15 minutes",value:14},{text:"< 30 minutes",value:29},{text:"< 60 minutes",value:59},{text:">= 60 minutes",value:60}]}},methods:{getCourses:function(e){var t=this;if(e.length<=0)return"";var n=[];return e.forEach((function(e){n.push(t.categories[e])})),"Course "+n.join(", ")},filterByUrl:function(){this.$route.query.category&&this.filters.categories.push(this.$route.query.category),this.$route.query.s&&(this.dsSearch=this.$route.query.s)},filterCategories:function(e){return this.filters.categories.length<=0||this.filters.categories.some((function(t){return e.includes(t)}))},filterCuisines:function(e){return this.filters.cuisines.length<=0||this.filters.cuisines.some((function(t){return e.includes(t)}))},filterPrepTime:function(e){return this.filterTime(e,this.filters.prepm)},filterCookTime:function(e){return this.filterTime(e,this.filters.cookm)},filterTotalTime:function(e){return this.filterTime(e,this.filters.totalm)},filterTime:function(e,t){if(t<=0)return!0;var n=parseInt(e);return t<60?n<=t:n>=60},clearFilters:function(){this.filters.categories.length=0,this.filters.cuisines.length=0,this.filters.cookm=0,this.filters.prepm=0,this.filters.totalm=0},doLoad:function(){var e=this;this.handleSearch=this.$win.$appConfig.debounce((function(t){e.$refs.myds.search(t)}),300),(0,c.watchEffect)((function(){e.handleSearch(e.dsSearch)}));var t=this.$win.vue_wp_plugin_config_frontend.taxonomies,n=t.wprm_course,r=t.wprm_cuisine;n.forEach((function(t){e.categories[t.value]=t.text})),r.forEach((function(t){e.cuisines[t.value]=t.text})),fetch(this.$win.vue_wp_plugin_config_frontend.indexFileUrl).then((function(e){return e.json()})).then((function(t){var n=[],r=[];Object.keys(t).forEach((function(e){var o=t[e];o.img?n.push(o):r.push(o)}));n.sort((function(e,t){var n=e.title,r=t.title;return(n>r)-(r>n)})),r.sort((function(e,t){var n=e.title,r=t.title;return(n>r)-(r>n)})),e.recipes=n.concat(r),e.filterByUrl()}))}},beforeMount:function(){var e=this;e.$win&&e.$win.vue_wp_plugin_config_admin?e.doLoad():document.onreadystatechange=(0,i.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"complete"==document.readyState&&e.doLoad();case 1:case"end":return t.stop()}}),t)})))}});t.Z=s},4605:function(e,t,n){"use strict";Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var r=(0,n(311).defineComponent)({name:"Home",data:function(){return{msg:"Welcome to Your Vue.js Frontview component 2"}}});t.Z=r},4347:function(e,t,n){"use strict";Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var r=(0,n(311).defineComponent)({name:"Home",data:function(){return{msg:"Welcome to Your Vue.js Frontview default view"}}});t.Z=r},4376:function(e,t,n){"use strict";t.s=function(e,t,n,H,W,R){var I=(0,r.resolveComponent)("Multiselect"),A=(0,r.resolveComponent)("dataset-info"),Y=(0,r.resolveComponent)("dataset-item"),z=(0,r.resolveComponent)("dataset-pager"),G=(0,r.resolveComponent)("dataset");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",i,[c,(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",s,[l,(0,r.createVNode)(I,{modelValue:e.filters.categories,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.filters.categories=t}),mode:"tags",searchable:!0,"close-on-select":!1,"create-option":!0,options:e.categories},null,8,["modelValue","options"])]),(0,r.createElementVNode)("div",u,[d,(0,r.createVNode)(I,{modelValue:e.filters.cuisines,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.filters.cuisines=t}),mode:"tags",searchable:!0,"close-on-select":!1,"create-option":!0,options:e.cuisines},null,8,["modelValue","options"])]),(0,r.createElementVNode)("div",f,[m,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.filters.prepm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,p)})),256))],512),[[r.vModelSelect,e.filters.prepm]])]),(0,r.createElementVNode)("div",v,[h,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.filters.cookm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,g)})),256))],512),[[r.vModelSelect,e.filters.cookm]])]),(0,r.createElementVNode)("div",w,[V,(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-select","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.filters.totalm=t})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.recipeTimes,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.value},(0,r.toDisplayString)(e.text),9,_)})),256))],512),[[r.vModelSelect,e.filters.totalm]])]),(0,r.createElementVNode)("div",y,[E,(0,r.createElementVNode)("button",{type:"button",class:"btn btn-outline-primary",onClick:t[5]||(t[5]=function(){return e.clearFilters&&e.clearFilters.apply(e,arguments)})},"Clear all filters")])])]),(0,r.createVNode)(G,{"ds-data":e.recipes,"ds-filter-fields":{wprm_course:e.filterCategories,wprm_cuisine:e.filterCuisines,wprm_cook_time:e.filterCookTime,wprm_prep_time:e.filterPrepTime,wprm_total_time:e.filterTotalTime},"ds-search-in":["title","cnt"],ref:"myds"},{default:(0,r.withCtx)((function(n){var o=n.ds;return[(0,r.createElementVNode)("div",{class:"row","data-page-count":o.dsPagecount},[(0,r.createElementVNode)("div",b,[k,x,(0,r.createVNode)(A,{class:"mb-2 mb-md-0"})]),(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("div",T,[(0,r.withDirectives)((0,r.createElementVNode)("input",{name:"searchInput",id:"searchInput",type:"text",placeholder:"Type to search...",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.dsSearch=t})},null,512),[[r.vModelText,e.dsSearch]]),B])])],8,N),M,(0,r.createVNode)(Y,{class:"row search-font",style:{"overflow-y":"auto","max-height":"600px"}},{default:(0,r.withCtx)((function(t){var n=t.row;t.rowIndex;return[(0,r.createElementVNode)("a",{class:"recipe-item scale-down col-sm-12 col-md-6 col-lg-4",href:n.src,title:n.title},[(0,r.createElementVNode)("div",$,[(0,r.createElementVNode)("div",O,[(0,r.createElementVNode)("img",{src:n.img?"https://www.ucook.com/"+n.img:"https://www.ucook.com/wp-content/uploads/2021/05/UCook-official-logo.png",class:"card-img-top",alt:n.title},null,8,P)]),(0,r.createElementVNode)("div",S,[(0,r.createElementVNode)("div",L,[(0,r.createElementVNode)("h5",D,(0,r.toDisplayString)(n.title),1)]),(0,r.createElementVNode)("div",X,[(0,r.createElementVNode)("p",Z,(0,r.toDisplayString)(e.getCourses(n.wprm_course)),1)])])])],8,j)]})),noDataFound:(0,r.withCtx)((function(){return[U]})),_:1}),F,(0,r.createElementVNode)("div",q,[(0,r.createVNode)(A,{class:"mb-2 mb-md-0"}),(0,r.createVNode)(z)])]})),_:1},8,["ds-data","ds-filter-fields"])])};var r=n(311),o={class:"app-home"},i={class:"row filter-font"},c=(0,r.createElementVNode)("h3",null,"Filters",-1),a={class:"row"},s={class:"col-md-6 mb-3"},l=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Category",-1),u={class:"col-md-6 mb-3"},d=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Cuisines",-1),f={class:"col-md-3 mb-3"},m=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Preparation Time (minutes)",-1),p=["value"],v={class:"col-md-3 mb-3"},h=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Cook Time (minutes)",-1),g=["value"],w={class:"col-md-3 mb-3"},V=(0,r.createElementVNode)("label",{style:{"text-transform":"uppercase"}},"Total Time (minutes)",-1),_=["value"],y={class:"col-md-3 mb-3"},E=(0,r.createElementVNode)("br",null,null,-1),N=["data-page-count"],b={class:"col-md-6 search-font"},k=(0,r.createElementVNode)("br",null,null,-1),x=(0,r.createElementVNode)("br",null,null,-1),C={class:"col-md-6"},T={class:"form-floating"},B=(0,r.createElementVNode)("label",{for:"searchInput"},"Type to search...",-1),M=(0,r.createElementVNode)("hr",null,null,-1),j=["href","title"],$={class:"card",style:{}},O={style:{"margin-bottom":"20px"}},P=["src","alt"],S={class:"card-body"},L={class:"cut-off-2",style:{"margin-bottom":"20px"}},D={class:"card-title"},X={class:"cut-off-2",style:{"margin-bottom":"20px"}},Z={class:"card-text text-truncate"},U=(0,r.createElementVNode)("div",{class:"col-md-12 search-font"},[(0,r.createElementVNode)("p",{class:"text-center"},"No results found")],-1),F=(0,r.createElementVNode)("hr",null,null,-1),q={class:"d-flex flex-md-row flex-column justify-content-between align-items-center search-font",style:{"text-decoration":"none !important"}}},5328:function(e,t,n){"use strict";t.s=function(e,t,n,c,a,s){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("section",i,(0,r.toDisplayString)(e.msg),1)])};var r=n(311),o={class:"app-home"},i={class:"w-full text-center"}},8302:function(e,t,n){"use strict";t.s=function(e,t,n,c,a,s){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("section",i,(0,r.toDisplayString)(e.msg),1)])};var r=n(311),o={class:"app-home"},i={class:"w-full text-center"}},7511:function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return i}});var r=n(4376),o=n(3153);var i=(0,n(3744).Z)(o.Z,[["render",r.s]])},4985:function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return i}});var r=n(2386),o=n(887);var i=(0,n(3744).Z)(o.Z,[["render",r.s]])},6186:function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return i}});var r=n(5328),o=n(4605);var i=(0,n(3744).Z)(o.Z,[["render",r.s]])},9276:function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return o.X},default:function(){return i}});var r=n(8302),o=n(4347);var i=(0,n(3744).Z)(o.Z,[["render",r.s]])},729:function(e,t,n){var r={"./Comp2.vue":6186,"./Home.vue":9276};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=729},311:function(e){"use strict";e.exports=Vue}},function(e){e.O(0,[898],(function(){return t=9032,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=frontview.js.map