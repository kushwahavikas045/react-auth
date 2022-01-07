const initialState = {
    user:{
    idToken:null,
    email:null,
    },
    isAuth: false,
    activated: false
  };

function authReducers(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case 'SIGNUP':
            return{
                ...state,
                isAuth: true,
                user:{
                ...payload
                }
            }

        case 'LOGIN':
            return{
                ...state,
                isAuth: true,
                user:{
                    ...payload
                }
            }
        case 'ACTIVATED':
            return{
                ...state,
                activated: payload
            }

        default:
            return state;

    }

}

export default authReducers;