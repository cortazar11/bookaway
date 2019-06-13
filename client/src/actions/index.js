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
