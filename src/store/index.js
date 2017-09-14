import Vue from 'vue'
import Vuex from 'vuex'
import TextForm from '@/components/TextForm/duex'

console.log(TextForm)

Vue.use(Vuex)

const modules = {
  TextForm
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules
})
