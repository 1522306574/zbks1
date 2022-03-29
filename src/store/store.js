import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import state from "./state/state"
import actions from "./action/actions"
import mutations from "./mutations/mutations"
let store = new Vuex.Store({
    state,
    actions,
    mutations
})
export default store