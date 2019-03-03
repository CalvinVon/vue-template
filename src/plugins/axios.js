import Vue from 'vue';
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const _domain = process.env.VUE_APP_API_URL;
const config = {
    baseURL: _domain,
    timeout: 60 * 1000,
    withCredentials: true
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        // if (token) {
        //     config.headers.common['Authorization'] = token;
        // }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        const token = response.headers['authorization'];
        if (token) {
            UserInfoTool.setToken(token);
        }

        // Do something with response data
        if (response.data.code === 200) {
            return response.data.data;
        } else if (response.data.code === 202) {
            // token 失效，重新登录
            EventBus.emit('login:relogin');
            return Promise.reject(new Error('登录已经失效，请重新登录'));
        } else {
            return Promise.reject(new Error(response.data.msg));
        }
    },
    function (error) {
        // Do something with response error
        return Promise.reject(new Error('网络请求失败'));
    }
);

Vue.prototype.$axios = _axios;
Vue.prototype.$baseUrl = config.baseURL;

export default _axios;
export const domain = _domain;