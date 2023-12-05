// import { render, screen } from '@testing-library/react';
// import App from './App';

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";


describe("Greeting_Components", () => {
  test("testing helloworld", () => {
    render(<Greeting />);
    const helloworld = screen.getByText("Hello World", { exact: false });
    expect(helloworld).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was not Clicked',()=>{
    render(<Greeting />);
    const outPutElement = screen.getByText("good to see you", { exact: false });
    expect(outPutElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked',()=>{
    render(<Greeting />);

    const buttonElement=screen.getByRole('button');

    userEvent.click(buttonElement);

    const outPutElement = screen.getByText("Changed!",{exact:false});
    expect(outPutElement).toBeInTheDocument();

  })

  test('does not render "good to see you" if the button was clicked',()=>{
    render(<Greeting />);

    const buttonElement=screen.getByRole('button');

    userEvent.click(buttonElement);

    const outPutElement = screen.queryByText("good to see you",{exact:false});
    expect(outPutElement).toBeNull();
  })


 
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
