import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import i18n from './i18n.js'
import Vuex from 'vuex'
import BQserviceClientsApi from './services/BQserviceClientsApi'


/**
 * on dit à VueJs qu'on va utiliser Vuex dans notre appli
 * pour gérer le Store # injection de Spring
 * pour éviter d'utiliser des props entre composants
 */
Vue.use(Vuex)

Vue.config.productionTip = false



const store = new Vuex.Store( {
  state : {
    monState : "State Store 01",
    listeclient : null
    //  [
      // { nom : "Client 01"}
    // ]
  },
  getters: {
    allClients: state => {
      return state.listeclient
    },
    addListeClient : state => client => {
      state.listeclient.push(client)
    },
    getAllClients: (state) => {
      BQserviceClientsApi.getAll().then( 
        (response) => {
          state.listeclient = response.data
          console.log(state.listeclient)
        }
      )
    }
  }
})

store.getters.getAllClients


new Vue({
  vuetify,
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
