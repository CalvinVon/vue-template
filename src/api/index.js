import Vue from 'vue';
import ApiModule from '@calvin_von/axios-api-module';
import middleWares from './middleware';

import userApi from './modules/user.api';

const _domain = process.env.VUE_APP_API_URL;
const axiosConfig = {
    baseURL: _domain,
    timeout: 60 * 1000,
    withCredentials: true
};

const apiMod = new ApiModule({
    baseConfig: axiosConfig,
    module: true,
    apiMetas: {
        user: userApi,
    }
});

apiMod.registerForeRequestMiddleWare(middleWares.foreRequestMiddleWare);
apiMod.registerFallbackMiddleWare(middleWares.fallbackMiddleWare);

const apiInstance = apiMod.getInstance();
const axios = apiMod.getAxios();
// apiInstance.$module === apiMod;  // true
Vue.prototype.$api = apiInstance;
export default axios;