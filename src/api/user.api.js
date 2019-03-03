import Obeyman from 'obeyman';

export default {
    info: {
        method: 'GET',
        url: '/api/user/:uid/recent/{time}',
        name: '获取用户信息',
        // schema: Obeyman.object().keys({}),
    }
}
