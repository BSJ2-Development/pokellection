import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from '../components/pages/Home';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'


describe ("<Home />", () => {

  const homeRender = () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  }

  it("renders images in the carousel", () => {
    homeRender()
    const image1 = screen.getByRole('img', {
        name: /bulbasaur/i
      })
      expect(image1).toBeInTheDocument()
    const image2 = screen.getByRole('img', {
        name: /ivysaur/i
      })
      expect(image2).toBeInTheDocument()
    const image3 = screen.getByRole('img', {
        name: /venasaur/i
      })
      expect(image3).toBeInTheDocument()
    const image4 = screen.getByRole('img', {
        name: /charmander/i
      })
      expect(image4).toBeInTheDocument()
    const image5 = screen.getByRole('img', {
        name: /charmeleon/i
      })
      expect(image5).toBeInTheDocument()
    const image6 = screen.getByRole('img', {
        name: /charizard/i
      })
      expect(image6).toBeInTheDocument()
    const image7 = screen.getByRole('img', {
        name: /squirtle/i
      })
      expect(image7).toBeInTheDocument()
    const image8 = screen.getByRole('img', {
        name: /wartortle/i
      })
      expect(image8).toBeInTheDocument()
    const image9 = screen.getByRole('img', {
        name: /blastoise/i
      })
      expect(image9).toBeInTheDocument()
    const image10 = screen.getByRole('img', {
        name: /pikachu/i
      })
      expect(image10).toBeInTheDocument()
  })

  it("has clickable links to view other images", () => {
    homeRender()
    const previous = screen.getByRole('button', {
      name: /Previous/i
    })
    expect(previous).toBeInTheDocument()

    const next = screen.getByRole('button', {
      name: /Next/i
    })
    expect(next).toBeInTheDocument()
  })
  
  it("has the next image render when a user clicks next", async () => {
    homeRender()
    screen.debug()
    const next = screen.getByRole("button", { 
      name: /next/i
    })
      await fireEvent.click(next)
      expect(next).toBeInTheDocument()
  })

  it("has the previous image render when a user clicks previous", async () => {
    homeRender()
    screen.debug()
    const previous = screen.getByRole("button", { 
      name: /previous/i
    })
      await fireEvent.click(previous)
      expect(previous).toBeInTheDocument()
  })

  it("shows a description of the app", () => {
    homeRender()
    const description = screen.getByText(
      /with pokellection, you can manage your entire collection of pokemon across all platforms\. from the video games, to the card game or even the action figures you have on your shelf\. by creating new cards for each pokemon within your collection, you can add to the pokellection pokedex for everyone to see\. when you log in, you can enjoy checking out the cards that everyone has contributed, but you can only modify the listings that you have added yourself\./i
      )
    expect(description).toBeInTheDocument()
  })
})