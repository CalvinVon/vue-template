import Vue from 'vue';
import ApiModule from '@calvin_von/axios-api-module';
import middleWares from './middleware';

import userApi from './user.api';

const apiMod = new ApiModule({
    module: true,
    apiMetas: {
        user: userApi,
    }
});

apiMod.registerForeRequestMiddleWare(middleWares.foreRequestMiddleWare);
apiMod.registerFallbackMiddleWare(middleWares.fallbackMiddleWare);

const apiInstance = apiMod.getInstance();
// apiInstance.$module === apiMod;  // true
Vue.prototype.$api = apiInstance;