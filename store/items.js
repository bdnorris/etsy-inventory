export const state = () => ({
    myItems: []
})

export const mutations = {
    addOne (state, record) {
        state.myItems.push(record)
        console.log('state', state, 'record', record)
    }
}

export const actions = {
    async add ({commit}, record) {
        // console.log('record', record)
        await commit('addOne', record)
    }
}