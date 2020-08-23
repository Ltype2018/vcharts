import Vue from 'vue'
import App from './App.vue'
import { Table,TableColumn, Loading} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/index'

Vue.config.productionTip = false

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

