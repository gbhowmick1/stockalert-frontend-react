export const setWatchlistData = (payload) => {
    return {
                type: 'SET_WATCHLIST_INFO',
                payload: payload,
              };
 }
 
 
 export const resetWatchlistData = () => {
  return {
              type: 'RESET_WATCHLIST_INFO',
            };
 }
 