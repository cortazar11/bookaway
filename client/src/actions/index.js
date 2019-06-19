import axios from 'axios';

export const createHoster=(formValues)=>{
    return async (dispatch)=>{
        const res=await axios.post('/api/hosters',formValues);
        dispatch({
            type: 'CREATE_HOSTER',
            payload: res.data
                })
       
    }
}


export const fetchHosters=(formValues)=>{
    return async (dispatch)=>{
        const res=await axios.post('/api/hostersList',formValues)
        dispatch({
            type: 'FETCH_HOSTERS',
            payload: res.data
        })
        
    }
}

export const fetchHost=(id)=>{
    console.log('id: '+id)
        return async (dispatch)=>{
            const res= await axios.get(`/api/hosters/${id}`)
            console.log('res: '+JSON.stringify(res))
            dispatch({
                type: 'FETCH_HOST',
                payload: res.data
            })
        }
}

