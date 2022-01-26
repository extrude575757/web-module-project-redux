import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders App without errors', () => {
  render(<App />);
})


test('render App without errors', () =>{
  render(<App />);
  const header = screen.getByText(/Add Movie/i);
  console.log('testrender ',header);


  // Add in npm test to start test
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/Title Director Genre Metascore Description/i);
  expect(header).not.toHaveTextContent(/elections are dumb/i);
  expect(header).not.toBeFalsy();

})