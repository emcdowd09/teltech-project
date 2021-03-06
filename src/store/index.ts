import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Employee } from '@/store/interfaces/employee'
import { result } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees: [] as Array<Employee>
  },
  getters: {
    getEmployees: (state) => {
      return state.employees
    }
  },
  mutations: {
    setEmployees: (state, val: Array<Employee>) => {
      state.employees = val
    }
  },
  actions: {
  	getEmployeesList({commit}) {
      const apiUrl = process.env.VUE_APP_API_URL as string

      //Get employees list
      axios.get(apiUrl).then((response) => {
        if(result(response, 'data', false) && Array.isArray(response.data)) {
          //set all employees
          commit('setEmployees', response.data)
        }
      }).catch(error => {
        console.log(error)
        alert('Something went wrong.')
      })
    },
  }
})
