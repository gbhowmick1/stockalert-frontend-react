import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(
   rootReducer,
   applyMiddleware(thunk),
)


// FOR REDUX DEV TOOLS
// export const store = createStore(
//    rootReducer,
//    composeWithDevTools(
//       applyMiddleware(thunk),
//      // other store enhancers if any
//    )
//  );





