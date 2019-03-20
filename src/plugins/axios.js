import _axios from "@/api";

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
        } else {
            return Promise.reject(new Error(response.data.msg));
        }
    },
    function (error) {
        // Do something with response error
        return Promise.reject(new Error('网络请求失败'));
    }
);