import axios from "axios"

export const allDeveloper = () =>{
    return async(dispatch) =>{
        try {
            const res = await axios.get('http://localhost:8000/users');

            dispatch({
                type:'ALL_DEVELOPER',
                payload: res.data
            })


        } catch (error) {
            dispatch({
                type:'ERROR',
                payload: error.message
            })
        }
    }
}