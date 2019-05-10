import Vue from 'vue'
import App from './App.vue'
import router from './router'
import draggable from 'vuedraggable'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(draggable);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
