const initialState = {
    name:'',
    avatar:'',
  };

function activateReducers(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case 'SETNAME':
            return{
                ...state,
                name:payload
            }

        case 'ACTIVATE':
            return{
                ...state,
                avatar:payload,
            }
        default:
            return state;

    }

}

export default activateReducers;