const initialState={
    theme:'light'
}
// reducer takes two arguments:- initialState,action
const themeReducer =(state=initialState,action)=> {
    switch(action.type){
        case 'UPDATE_THEME':
            return {
                ...state,
                theme:action.payload,
            };
            default:
                return state;
    }
};

export default themeReducer;
