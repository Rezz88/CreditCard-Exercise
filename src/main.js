import Vue from "vue";
import "./plugins/vuetify";
import VeeValidate from "vee-validate";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
}).$mount("#app");
