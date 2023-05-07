const errorsReducer = (state=[], action) => {
    switch(action.type) {
        case "SET_ERRORS":
        return action.payload
        
        default:
        return state
    }
}

export default errorsReducer;