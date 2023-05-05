import Vue from "vue";
import App from "./App.vue";
import ElementUI from "./element/element-ui.common.js";
import "./element-style.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
