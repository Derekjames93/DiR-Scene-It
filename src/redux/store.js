import { combineReducers, createStore } from "redux";
import { loadingReducer, movieReducer } from './reducer'

const rootReducer = combineReducers({
    movies: movieReducer,
    loading: loadingReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    export default store;
