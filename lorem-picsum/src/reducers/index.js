const initialState = {
    temp: 'temp value'
}

const reducer = (state = initialState, action) =>{
    console.log('state: ', state, 'action: ', action);
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;