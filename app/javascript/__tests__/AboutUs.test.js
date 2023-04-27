import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import AboutUs from "../components/pages/AboutUs"


describe("<AboutUs />", () => {

  const aboutUsRender = () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
  }

  beforeEach(() => {
    aboutUsRender()
  }) 
    
    it("shows brandons linkedIn icon", () => {
      const brandonsLinkedIn = screen.getByRole('img', {
        name: /brandons/i
      })
      expect(brandonsLinkedIn).toBeInTheDocument()
    })
    
    it("shows simons linkedIn icon", () => {
      const simonsLinkedIn = screen.getByRole('img', {
      name: /simons/i
    })
    expect(simonsLinkedIn).toBeInTheDocument()
  })

  it("shows joshs linkedIn icon", () => {
    const joshsLinkedIn = screen.getByRole('img', {
      name: /joshs/i
    })
    expect(joshsLinkedIn).toBeInTheDocument()
  })

  it("shows jacobs linkedIn icon", () => {
    const jacobsLinkedIn = screen.getByRole('img', {
      name: /jacobs/i
    })
    expect(jacobsLinkedIn).toBeInTheDocument()
  })
})