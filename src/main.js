import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import './plugins/axios';
import './api';
import './plugins/utils';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');