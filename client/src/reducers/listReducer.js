
const initialState={
    hosters: []
}

export default function (state=initialState,action){
    
    switch(action.type){
        case 'FETCH_HOSTERS':
            return {
                ...state,
                hosters: action.payload
            }
        default:
            return state
    }
}