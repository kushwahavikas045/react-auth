import axios from "axios";

export const activateUser = (name, email, avatar) =>{
    return async(dispatch) =>{
         try {
             const res = await axios.post('http://localhost:8000/users',{name, email});
             dispatch({
                type:'ACTIVATE',
                payload: avatar
            })
            dispatch({
                type:'ACTIVATED',
                payload: true
            })
         } catch (error) {
             console.log(error.message);
         }
    }
}