export const state = () => ({
    myItems: [],
})

export const mutations = {
    addOne (state, record) {
        state.myItems.push(record)
        // console.log('state', state, 'record', record)
    }
}

export const actions = {
    async add ({commit}, record) {
        await commit('addOne', record)
    }
}

export const getters = {
    materials: (state) => {
    // console.log('getters', state.myItems)
      let fullList = state.myItems.map((item) => {
          return (typeof item.fields.Material !== 'undefined') ? item.fields.Material : null
      })
      return Array.from(new Set(fullList));
    },
  }
  