import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Header from "../components/components/Header"

const headerRender = () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

describe("<Header />", () => {
  it("renders without crashing", () => {
    headerRender()
  })

  it("has a clickable link to view the collection", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    )
    const myCollection = screen.getByRole("link", {
      name: /my collection/i
    })
    expect(myCollection).toBeInTheDocument()
  })

  it("has a clickable about us page link", () => {
    headerRender()
    const aboutUs = screen.getByRole("link", {
      name: /about us/i 
    })
    expect(aboutUs).toBeInTheDocument()
  })

  it("has a clickable link to let a user view the home page", () => {
    headerRender()
    const homePage = screen.getByRole("link", {
      name: /home/i
    })
    expect(homePage).toBeInTheDocument()
  })
  
  it("has a clickable link to let a user log in", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    )
    const logIn = screen.getByText(/sign in/i)
    expect(logIn).toBeInTheDocument()
  })

  it("has a clickable link to let a user sign up", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    )
    const createAccount = screen.getByText(/sign up/i)
    expect(createAccount).toBeInTheDocument()
  })
})