// #region router
import Vue from 'vue';
import Router from 'vue-router';
import * as qs from '../utils/querystring';
// import WechatLoginUtil from '@/components/login/wechat-login';

import HomeRoute from './modules/home.route'
// #endregion end

Vue.use(Router);

/**
 * 路由字段配置说明
 *
 * @param {Object} meta 路由元数据
 *
 * @param {Boolean} meta.unfold 是否可以在菜单栏展开
 * @param {Boolean} meta.hide 是否可以在菜单栏显示
 * @param {Boolean} meta.iconType 菜单栏图标
 *
 * @param {Boolean} children.meta.hide 是否可以在菜单栏显示
 *
 */


const router = new Router({
    routes: [{
            path: '/',
            redirect: {
                name: 'home'
            },
        }, {
            path: '*',
            redirect: {
                name: 'home'
            }
        }]
        .concat(
            HomeRoute
        )
});

const routerEnterGuard = ((to, from, next) => {
    const token = '' /** get app storage */ ;

    // 需要登录的路由
    if (to.meta.auth) {
        // 用户没有登录
        if (!token) {
            next(false);
        }
        // 用户已登录
        else {
            if (from.query.redirect) {
                const resolvedQuery = qs.queryParse(from.query.query);
                const resolvedParams = qs.queryParse(from.query.params);
                const resolvedName = from.query.redirect;

                // 重定向之前要把重定向的标志删除
                from.query.redirect = '';
                from.query.query = {};

                next({
                    name: resolvedName,
                    query: resolvedQuery,
                    params: resolvedParams
                });
            } else {
                next();
            }
        }
    }
    // 不需要登录
    else {
        if (token) {
            // 已经登录 不需要前往登录页
            if (to.name === 'login') {
                next({
                    name: from.name,
                    query: from.query,
                    replace: true
                });
            } else {
                next();
            }
        } else {
            next();
        }
    }
});

// router.beforeEach(routerEnterGuard);
// router.afterEach((to) => {
//     document.head.querySelector('title').innerText = to.meta.name;
// })

/**
 * 路由组件传参 函数模式
 * @desc 将 route.query 中的 值映射到 props 参数上
 * @author Calvin
 * @param {Array} propsArr 接受的 props 数组。可以传入多个参数，也可以传入一个参数数组
 * @return {Object}
 */
export function routeQueryFactory(...propsArr) {
    if (propsArr[0] && Array.isArray(propsArr[0])) {
        propsArr = propsArr[0];
    }
    return function props(route) {
        const queryProps = {};
        propsArr.forEach(q => {
            queryProps[q] = route.query[q];
        });
        return queryProps;
    }
}


export default router;