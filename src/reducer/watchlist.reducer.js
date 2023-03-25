const defaultState= []


const watchlistReducer = (state = defaultState, action) => {
   switch (action.type) {
       case 'SET_WATCHLIST_INFO':
           return action.payload
       case 'RESET_WATCHLIST_INFO':
           return defaultState
       default:
           return state
   }
}


export default watchlistReducer
