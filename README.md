# Angular Airport Search

This repository holds the source code for my **Paxlife Coding Challenge**.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

It is using [Bootstrap](https://v4-alpha.getbootstrap.com/) for convenient prototype UI design.

## Challenge Description

The Challenge was to design and implement a web application that allowed users to search information about an airport. The app was designed with respect to the following directions.

### Technical Requirements

- Use the Paxlife dedicated API (http://sandbox.paxlife.aero/api/)
- Choose a suitable open-source JS framework and libraries. Please motivate your choice!

### Functional Requirements

These user stories needed to be satisfied:
- As a user, I want to request airport information from a city name or from IATA code.
- As a user, I want to see a detailed view of the requested airport with its name, its IATA and ICAO codes, its country code, and a geolocation on a map component.

### Setting

Expected time budget for the task were 6-8 hours. Trade-offs were allowed, all decisions should be documented. The level of feature completeness, documentation, tests was subject to the participant's own decision making. "Product Management is in vacation and not available".

### Mockup

The expected result should approximately look like this:

![Airport Info Mockup](/mockup.jpg)

## Live Demo

See the [app in action](https://alcofribas.github.io/airport-info-ng2/).

## Comments on this submission to the Challenge

### Why Angular?

There are a couple of reasons that brought me to choosing Angular for the task. Most relevant for my decision were aspects offered by Angular which are ultimately related to the sustainability of the product and the development process:

- Componentization/Modularization, Data-Binding, Performance
- Excellent Tooling and Easy Testability
- Suitable for Agile Development and Continuous Integration Strategies

A more difficult question would be why I prefered Angular over other common options with similar advantages. My personal reason here was that I had little knowledge about Angular so far and found it a wonderful opportunity to have a first intense, in-depth encounter with a framework that seemed quite appealing to me on first sight.

### What works

- User stories fulfilled
- Communication with required REST API works
- Overall responsive design and layout

### Where the tradeoffs are

The implementation focused on feature completeness, a mobile first design and a sustainable basic setup for testing and continuous integration. Important tasks like exhaustive error handling, code commenting, thorough testing and UI/UX refinement were given lower priority (don't you run `ng test` in the current state, will you?).

### ToDo

The tradeoffs mentioned above lead to a considerable number of ToDos some of which are pointed out below:

#### VUA (Very Urgent Additions)

- Add comments to the code
- Implement elaborate error handling
- Implement proper testing

#### Enhancements

- Display message in dropdown while retrieving results asyncronously
- Display message in dropdown when there is no result
- Reset zoom level of map when choosing another airport
- Enable keyboard controls for autocomplete dropdown (Esc, Enter, Arrow Up/Down)
- Support mobile phone touch keyboard form input

#### Optimizations

- Add media queries for best responsive user experience
- Optimize app size and performance
- Have UX guy beautify and streamline UI

#### Cleaning-Up

- Remove in-memory web api
- Remove unneeded Console Logging
- Don't push API key to GitHub ;)

## Dev Prerequisites

Make sure that you have Node.js and npm installed. If not, do the [node/npm setup](https://docs.npmjs.com/getting-started/installing-node) first.

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

Run the following commands to get started:

```shell
git clone https://github.com/alcofribas/airport-search-ng2
cd airport-search-ng2
npm install
ng serve
```

Point your browser to http://localhost:4200 to start searching for airport information.
