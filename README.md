# Pokellection

## Description

Pokellection is an application where you can manage your entire collection of Pokemon in one place. You are able to create a personal database based on all of your other pokemon collections and collectibles. This application currently supports the pokeapi.co API but is used for reference only, in the Pokemon Index. The view only Pokemon Index is accessible without creating a login. To create your own personal Pokellection, you must create a unique user account and be logged in. 

## Table of Contents

- [Pokellection](#pokellection)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Live App](#live-app)
  - [Installation](#installation)
  - [Local Usage](#local-usage)
  - [Dependencies](#dependencies)
  - [Features](#features)
  - [Future Dev plans](#future-dev-plans)
  - [Contributors \& Credits](#contributors--credits)

## Live App

The current  live version of the application can be found at: 
https://bsj2-development-pokellection.onrender.com/

## Installation

If you would like to make a copy of this application on your local machine.
Use the following steps:

  ```md
  $ git clone https://github.com/BSJ2-Development/pokellection.git
  $ cd pokellection
  ```
Once you have cloned the repo and moved into the directory, run the following:
  ```md
  $ bundle install
  $ yarn install
  ```
With the initial clone and installs, it is recommended that you create and migrate 
a database on your local machine within rails. To do this, run the following:
   ```md
  $ rails db:create
  $ rails db:migrate
  ```
## Local Usage

Once local installation and setup are complete, the following will run the app locally:

    ```md
 $ rails s
 localhost:3000 (browser URL)
    ```

## Dependencies
 *Ruby:*

- ruby "3.2.0"
- gem "rails", "~> 7.0.4", ">= 7.0.4.3"
- gem "sprockets-rails"
- gem "pg", "~> 1.1"
- gem "puma", "~> 5.0"
- gem "importmap-rails"
- gem "turbo-rails"
- gem "stimulus-rails"
- gem "jbuilder"
- gem "tzinfo-data"
- gem "bootsnap", require: false
- gem "debug"
- gem "web-console"
- gem "rspec-rails", "~> 6.0"
- gem "webpacker", "~> 5.4"
- gem "react-rails", "~> 2.6"
- gem "devise", "~> 4.9"
- gem "bootstrap", "~> 5.2"

 *Javascript:*

- "@babel/preset-react": "^7.18.6",
- "@emotion/react": "^11.10.8",
- "@emotion/styled": "^11.10.8",
- "@material-ui/core": "^4.12.4",
- "@material-ui/icons": "^4.11.3",
- "@mui/icons-material": "^5.11.16",
- "@mui/material": "^5.12.2",
- "@rails/activestorage": "^7.0.4-3",
- "@rails/ujs": "^7.0.4-3",
- "@rails/webpacker": "5.4.4",
- "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
- "prop-types": "^15.8.1",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-router-dom": "^6.10.0",
- "react_ujs": "^2.6.2",
- "reactstrap": "^9.1.9",
- "webpack": "^4.46.0",
- "webpack-cli": "^3.3.12"
---

## Features

*Back-End*
- The database is built around two models.
  - 'User' and 'Pokemon'.
- Each user is associated with their own created Pokemon entries through a Foreign Key.
- The User table and Log in / Log Out functionality is imported using the Devise gem.
- The Pokemon table contains the following Columns and Data Types: 
  - user_id: integer
  - pokemon_name: string
  - pokemon_nickname: string 
  - pokemon_type: string
  - pokedex_entry: integer
  - pokemon_version: string
  - height: float
  - weight: float
  - hp: integer
  - ability: string
  - image: text
- All columns are validated for presence and nickname has the additional validation of uniqueness.
- Index, new, update, and delete all have controller methods for backend CRUD functionality.
- Update and Create will conditionally throw a 422 error if either of these instances are not valid. 

*Front-End*
- Different site options based conditionally on if the user is logged into their account or not.
- The user can create a unique account to create and view their own personal collection.
- Navigation is focused through the header and Pokemon entries to be consistent throughout the application.
- The Pokellection Pokemon Index is populated by the pokeapi.co API and is currently showing all Gen 1(1-151) and Gen 2(152-251) Pokemon.
- The user is able to use the search bar in the Pokemon Index to navigate to a specific entry.
- UI color scheme based on pokemon type and Eeveelutions.
- The user can view each specific pokemon to see additional stats.
- The user is able to create custom pokemon entries into their own personal Pokemon collection. 
- The user is able to edit and/or delete Pokemon in their own collection but not in the pokemon index.

## Future Dev plans

*Back-End*
- Dry code.
- Additional testing.
- Additional form validations

*Front-End*
- Media Queries for enhanced UI/UX.
- Integrate external API into personal collection creation.
- Light/Dark Mode.
- Add Modals.
- Add Toast.
- Randomize favicon.
- Add additional generations of pokemon from pokeapi.co.

## Contributors & Credits

- [Brandon Ray](https://github.com/BxRay95)

- [Simon Curry](https://github.com/SDCurry3)

- [Jacob Ross](https://github.com/JacobR96)

- [Josh Maurer](https://github.com/JoshuaMaurer)
