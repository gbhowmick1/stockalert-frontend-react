import {combineReducers} from 'redux'
import watchlistReducer from './watchlist.reducer'
const rootReducer = combineReducers({
   watchlist: watchlistReducer
})


export default rootReducer