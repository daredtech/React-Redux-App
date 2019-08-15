import {GET_PICSUM_DATA_REQUEST, GET_PICSUM_DATA_SUCCESS, GET_PICSUM_DATA_FAILURE} from '../actions';

const initialState = {
    picsums: [],
    error: ''
}

const reducer = (state = initialState, action) =>{
    console.log('state: ', state, 'action: ', action);
    switch(action.type){
        case GET_PICSUM_DATA_REQUEST:
            return{
                ...state
            }
        case GET_PICSUM_DATA_SUCCESS:
                return{
                    ...state,
                    picsums: action.payload
                }
        case GET_PICSUM_DATA_FAILURE:
                return{
                    ...state
                }







        default:
            return state;
    }
}

export default reducer;