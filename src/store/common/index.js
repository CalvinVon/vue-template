import * as types from '../mutation-types'

const state = {
    aside_collapsed: false,
    is_multi_station: false
}

const mutations = {
    // accept type true/false
    [types.ASIDE_COLLAPSE](state, status) {
        state.aside_collapsed = status;
    },
}

const actions = {

}

const getters = {
    aside_collapsed: state => state.aside_collapsed,
}

export default {
    state,
    mutations,
    actions,
    getters
}