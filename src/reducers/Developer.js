const initState = {
    items: [],
    single: null,
    loading: true,
    error: null,
}

export const developerReducers = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ALL_DEVELOPER':
            return {
                ...state,
                items: payload,
                loading: false
            }
        case 'SINGLE_DEVELOPER':
            return {
                ...state,
                single: payload,
                loading: false
            }
        case 'ERROR':
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}

export default developerReducers;