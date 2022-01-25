import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux'; 
import reducer from './reducers';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import thunk from 'redux-thunk';  

// creating the redux store
// const store = createStore( 
//     rootReducer, 
//     applyMiddleware(thunk) 
// );


// const logger = (store) => (next) => (action) =>{
//   console.group(action.type);
//   console.log(`preve state:`, store.getState());
//   console.log(`action: `,action);
//   next(action);
//   console.log("new state: ", store.getState());
//   console.groupEnd();
// };

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  ,
  document.getElementById('root')
);
