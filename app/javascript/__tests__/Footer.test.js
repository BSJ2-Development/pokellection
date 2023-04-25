import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Footer from "../components/components/Footer";


const footerRender = () => {
  render(
    <BrowserRouter>
        <Footer />
      </BrowserRouter>
  )
}
describe("<Footer />", () => {
  it("renders without crashing", () => {
    footerRender()
  })

  it("renders the content in the footer", () => {
    footerRender()
    const footerText = screen.getByText(/Pokellection | BSJ2 Development/i)
    expect(footerText).toBeInTheDocument()
  })
})