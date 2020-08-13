import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
// axios.defaults.baseURL = 'http://localhost:3000/api/products';
axios.defaults.baseURL = '/api/products';
export default {
    namespaced: true,
    state: {
        productsState: [],
        productsStateError: ""
    },
    mutations: {
        setProducts(state, payload) {
            state.productsState = payload;
        },
        setError(state, payload) {
            state.productsStateError = payload;
        }
    },
    actions: {
        getProducts({ commit }) {
            Vue.axios.get("/")
                .then(res => {

                    //Calcula el rating
                    let products = [];

                    res.data.forEach(product => {
                        let sum = 0;
                        let count = 0;
                        product.details.ratings.forEach(value => {
                            sum += value.score;
                            count++;
                        });
                        product.details.ratingsAverage = parseFloat((sum / count).toFixed(1));

                        // If not have stock, is no add tu display
                        if (product.stock > 0) {
                            products.push(product);
                        }

                    });

                    commit('setProducts', products);
                })
                .catch(error => {
                    commit('setError', error);
                });
        },

    },
    getters: {}
};
