import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from './Home';
import '@testing-library/jest-dom/extend-expect'
import { Carousel, Container } from "reactstrap";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

describe ("<Home />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const welcome = screen.getByText('Welcome to Pokellection')
    expect(welcome).toBeInTheDocument()
  })
  it("shows content inside of the carousel", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const carouselContent = screen.getByRole('img', {
      name: /test/i
    })
    expect(carouselContent).toBeInTheDocument()
  })
  
  it("shows a description of the app", () => {
    render(
      <BrowserRouter>
    <Home />
    </BrowserRouter>
    )
    const description = screen.getByText(
      /with pokellection, you can manage your entire collection of pokemon across all platforms\. from the video games, to the card game or even the action figures you have on your shelf\. by creating new cards for each pokemon within your collection, you can add to the pokellection pokedex for everyone to see\. when you log in, you can enjoy checking out the cards that everyone has contributed, but you can only modify the listings that you have added yourself\./i
      )
    expect(description).toBeInTheDocument()
  })
})