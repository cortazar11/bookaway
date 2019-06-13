

export default function (state="",action){
    
        switch(action.type){
            case 'CREATE_HOSTER':
                return action.payload
            default:
                return state
        }
}