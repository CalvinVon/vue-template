import Vue from 'vue';

import * as UserFunctions from './functions/user';

// 补全地址
Vue.filter('pathFilter', value => {
    return domain + value;
});

Vue.filter('booleanfy', value => {
    return Boolean(value);
});


//#region user filters
// 用户相关
Vue.filter('gender', UserFunctions.gender);
//#region user filters
