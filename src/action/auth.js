import axios from 'axios';
//signup
export const signUp = (email, password) => async(dispatch) =>{

    try {
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6sCdPzP3fTWeTOOLmgK-P3h7bgBEGVFI',
            {
                  email: email,
                  password: password,
                  returnSecureToken: true,
            },)

              dispatch({
                  type:'SIGNUP',
                  payload: res.data,
              })

    } catch (error) {
        console.log(error);
    }
}

export const login = (email, password, history) => async(dispatch) =>{

    try {
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6sCdPzP3fTWeTOOLmgK-P3h7bgBEGVFI',
            {
                  email: email,
                  password: password,
                  returnSecureToken: true,
            },)

              dispatch({
                  type:'LOGIN',
                  payload: res.data,
              })

              history.push('/deshboard');

    } catch (error) {
        console.log(error);
    }
}