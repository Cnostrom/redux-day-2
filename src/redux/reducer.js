const initState = {
    number: 0
}

const reducer = (state = initState, actions) => {
    switch(actions.type){
        case "ADD_ONE":
            return {...state, number: state.number + 1}
        case "ADD_CUSTOM":
            return {...state, number: state.number + actions.payload}
        default: return state
    }
    
}

export default reducer