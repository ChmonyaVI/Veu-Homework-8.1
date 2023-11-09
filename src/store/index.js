import { createStore } from 'vuex'
import { selectorItems } from '../data/selectorItem.js'
import { itemsList } from '../data/itemsList.js'

const store = createStore({
    state() {
        return {
            selectorItems: [],
            itemsListFilter: [],
            currentCategory: '',
        }
    },
    getters: {
        getItemsFromSelector: (state) => {
            if (state.currentCategory === '') return itemsList
            state.itemsListFilter = []
            itemsList.filter((item) => {
                if (item.category === state.currentCategory) {
                    state.itemsListFilter.push(item)
                    console.log(state.itemsListFilter)
                }
            })
            return state.itemsListFilter
        },
        getSelectorItems: ({ selectorItems }) => selectorItems,
        getItemsList: ({ itemsListFilter }) => itemsListFilter,
        getCurrentCategory: ({ currentCategory }) => currentCategory,
    },
    mutations: {
        setSelectorItems(state, list) {
            state.selectorItems = list
        },

        selectCategoryCart(state, category) {
            state.currentCategory = category
            console.log(state.currentCategory)
        },
    },
    actions: {
        loadSelectorItems({ commit }) {
            commit('setSelectorItems', selectorItems)
        },
        selectCategoryCart({ commit }, category) {
            commit('selectCategoryCart', category)
        },
    },
    modules: {},
})
export default store
