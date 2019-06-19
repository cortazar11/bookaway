
const initialState={
    hosters: [],
    hoster: {}
}

export default function (state=initialState,action){
    
    switch(action.type){
        case 'FETCH_HOSTERS':
            return {
                ...state,
                hosters: action.payload
            }
            
        case 'FETCH_HOST':
            return {
                ...state,
                hoster : action.payload
            }
            
        default:
            return state
    }
}