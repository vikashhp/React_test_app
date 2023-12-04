// import { render, screen } from '@testing-library/react';
// import App from './App';

import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting_Components", () => {
  test("testing helloworld", () => {
    render(<Greeting />);
    const helloworld = screen.getByText("Hello World", { exact: false });
    expect(helloworld).toBeInTheDocument();
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
