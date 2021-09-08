import {createStore} from 'vuex'

export default createStore({
    // 定义所需的状态的
    state: {
        tasks: []
    },
    // 同步修改state 都是方法,参数：第一个state，第二个需要修改的值
    mutations: {
        setTaskMap(state, args) {
            state.tasks = args
        }
    },
    // 异步提交mutation，参数：第一个store，第二个参数要修改的值
    actions: {
        asyncSetName(store, params) {
            setTimeout(() => {
                // commit是提交mutation，调用mutation的方法
                store.commit('setTaskMap', params)
            }, 2000)
        }
    },
    // 模块化
    modules: {}
})
