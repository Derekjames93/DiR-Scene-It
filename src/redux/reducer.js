import { ADD_MOVIE, DELETE_MOVIE, SET_LOADING , SET_DATA} from './action';


export function movieReducer(state= [], action) {
    switch (action.type) {
        case ADD_MOVIE:
            return [...state, action.movie]
            

        case DELETE_MOVIE:
            return state.filter((movie) => movie.imdbID !== action.imdbID);
        default:
            return state;
    }
}
// export function searchReducer(state = [], action){
//     switch(action.type){
        

//         case SET_DATA:
//             return action.payload.moviesArray
        


//         default:
//             return state;
//     }
// }

export function loadingReducer (state=false, action) {
    switch(action.type) {
        case SET_LOADING:
            return action.value
        default:
            return state
    }
}