import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
    count: number,
    sideBarOpen: Boolean
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0,
        sideBarOpen: true
    },
    mutations: {
        toggleSidebar(state) {
            // mutate state
            state.sideBarOpen = !state.sideBarOpen
        }
    }
})

export default store