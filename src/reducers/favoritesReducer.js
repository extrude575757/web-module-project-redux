import {TOGGLE_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE} from '../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}
console.log('initstateReducer '+initialState)

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITES:
            return {
              ...state,
              displayFavorites: !state?.displayFavorites
            };
            case ADD_FAVORITE:
                return {
                  ...state,
                  favorites: [...state?.favorites, action?.payload]
                };
            case DELETE_FAVORITE:
                    
                        return {
                      ...state,
                      favorites: state?.favorites === undefined ? initialState : state?.favorites?.filter(favorite => (action?.payload !== favorite?.id ))
                    };
                    
        default:
            return state;
    }
}

export default reducer;