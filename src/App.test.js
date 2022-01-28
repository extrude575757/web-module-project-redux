// import React from "react";
import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux'; 
import App from './App';
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import createMemoryHistory from 'history'
import { BrowserRouter as Router } from 'react-router-dom';

// const inputNode = screen.getByLabelText('Movie')

// test('renders App without errors', () => {
//   // render(<App />);
// })



// import App from './App';

// test('renders without crashing', () => {
//   // const div = document.createElement('div');
//   const history = createMemoryHistory()
// ReactDOM.render(  
//   <Router history={history}>
//   <Provider>
//       <App /> 
//   </Provider>
//   </Router>
//   );
//   // ReactDOM.unmountComponentAtNode(div);
// });
describe('app test', () =>{

  it('render App without errors', () =>{
    // render(<App />);
    const header = screen.getByText(/Add Movie/i);
    console.log('testrender ',header);


    // Add in npm test to start test
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/Title Director Genre Metascore Description/i);
    expect(header).not.toHaveTextContent(/elections are dumb/i);
    expect(header).not.toBeFalsy();

  })
})