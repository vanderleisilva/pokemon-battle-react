const initialState = {output:0}

const playerReducers = (state=initialState,action) => {
    switch (action.type){
        case 'ADD_INPUTS': 
            return {...state,output:action.output}
        case 'SUBTRACT_INPUTS':
            return {...state,output:action.output}
        default: return {...state}

    }
}

export default playerReducers