import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs";
import '@testing-library/jest-dom'
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

describe("<AboutUs />", () => {

  const aboutUsRender = () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
  }
  it("renders without crashing", () => {
    aboutUsRender()
    const aboutUs = screen.getByText(/Learn More About The Dev Team/i)
    expect(aboutUs).toBeInTheDocument()
  })

  it("shows brandons linkedIn icon", () => {
    aboutUsRender()
    const brandonsLinkedIn = screen.getByRole('img', {
      name: /brandons/i
    })
    expect(brandonsLinkedIn).toBeInTheDocument()
  })

  it("shows simons linkedIn icon", () => {
    aboutUsRender()
    const simonsLinkedIn = screen.getByRole('img', {
      name: /simons/i
    })
    expect(simonsLinkedIn).toBeInTheDocument()
  })

  it("shows joshs linkedIn icon", () => {
    aboutUsRender()
    const joshsLinkedIn = screen.getByRole('img', {
      name: /joshs/i
    })
    expect(joshsLinkedIn).toBeInTheDocument()
  })

  it("shows jacobs linkedIn icon", () => {
    aboutUsRender()
    const jacobsLinkedIn = screen.getByRole('img', {
      name: /jacobs/i
    })
    expect(jacobsLinkedIn).toBeInTheDocument()
  })
})