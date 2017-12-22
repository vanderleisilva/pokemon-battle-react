export default (state, action) => ({
    ...state, 
    api: {
        ...state.api,
        selected: action.api
    }
})