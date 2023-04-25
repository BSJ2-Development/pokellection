import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
import '@testing-library/jest-dom'

describe("<NotFound />", () => {

  const notFoundRender = () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  }

  it("renders without crashing", () => {
    notFoundRender()
    const errorHeader = screen.getByText('404 Page Not Found')
    expect(errorHeader).toBeInTheDocument()
  })

  it("renders the not found image", () => {
    notFoundRender()
    const notFoundImage = screen.getByRole('img', {
      name: /not found image/i
    })
    expect(notFoundImage).toBeInTheDocument()
  })
})