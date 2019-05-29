import Vue from 'vue'
import FormBuilder from './index.vue'
import router from './router'
import Vuex from 'vuex'
import draggable from 'vuedraggable'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

window._ = require('lodash');


Vue.config.productionTip = false
Vue.use(draggable);
Vue.use(Vuex);
Vue.use(ElementUI,{ locale });
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);


new Vue({
  router,
  render: h => h(FormBuilder)
}).$mount('#app')
