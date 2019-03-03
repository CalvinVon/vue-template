import { routeQueryFactory } from '../router';


export default [{
    path: '/',
    component: TabLayout,
    children: [{
        path: '',
        name: 'home',
        component: HomePage,
        meta: {
            name: 'Home',
            auth: false
        }
    }, {
        path: 'recommend',
        name: 'recommend',
        component: RecommendPage,
        meta: {
            name: 'Recommend',
            auth: false
        }
    }, {
        path: 'category',
        name: 'category',
        component: CategoryPage,
        meta: {
            name: 'Category',
            auth: false
        }
    }, {
        path: 'personal',
        name: 'personal',
        component: PersonalPage,
        meta: {
            name: 'Personal',
            auth: false
        },
        props: routeQueryFactory('openId', 'mobile'),
    }]
}]