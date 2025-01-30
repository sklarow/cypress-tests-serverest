# Cypress Tests for Serverest

This repository contains automated tests for the Serverest application using [Cypress](https://www.cypress.io/). The test suite includes both API and UI (frontend) tests, structured for ease of execution and maintenance, the project also have some [Lint](https://en.wikipedia.org/wiki/Lint_(software)) and [Docker](https://www.docker.com/) support...

Since this is just an exercise on a [App I Don't Control](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Testing-Apps-You-Dont-Control), not all the best practices was applied and the code have some anti-patterns, some of them are addressed in the [TODO](#todo)

## Table of Contents

- [Cypress Tests for Serverest](#cypress-tests-for-serverest)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Tests](#running-the-tests)
    - [Running Cypress UI](#running-cypress-ui)
    - [Running Cypress in Headless Mode](#running-cypress-in-headless-mode)
    - [Running API Tests](#running-api-tests)
    - [Running Frontend Tests](#running-frontend-tests)
    - [Running a Single Test File](#running-a-single-test-file)
      - [Locally](#locally)
      - [Using Docker](#using-docker)
  - [Docker Usage](#docker-usage)
  - [Test Structure](#test-structure)
  - [TODO](#todo)

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for containerized execution)

## Installation

Clone this repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/your-username/cypress-tests-serverest.git
cd cypress-tests-serverest

# Install dependencies
npm install
```

## Configuration

You can configure Cypress through `cypress.config.js`. To set up environment variables, use a `.env` file (if required).

## Running the Tests

### Running Cypress UI

```sh
npx cypress open
```
This opens the Cypress Test Runner, where you can select and run tests interactively.

### Running Cypress in Headless Mode

For command-line execution of all tests:

```sh
npx cypress run
```

### Running API Tests

To run API tests separately:

```sh
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

### Running Frontend Tests

To run Frontend tests separately:

```sh
npx cypress run --spec "cypress/e2e/frontend/**/*.cy.js"
```

### Running a Single Test File

#### Locally

```sh
npx cypress run --spec "cypress/e2e/api/usuarios.cy.js"
```

#### Using Docker

```sh
docker build -t cypress-tests .  
docker-compose run --rm cypress-tests npx cypress run --spec "cypress/e2e/api/usuarios.cy.js"
```

In Docker, the same logic applies for e2e and API tests, just change the --spec "xxxxx"


## Docker Usage

The project includes Docker support. To execute tests inside a container:

```sh
docker-compose up --build
```

This will set up the environment and execute the test suite inside a Docker container.

## Test Structure

- `cypress/e2e/api/`: Contains API test cases covering user creation and authentication and a simple product list GET request.
- `cypress/e2e/frontend/`: UI test cases focusing on user creation and login, with a form submission test, a product search test, and UI validations.
- `cypress/fixtures/`: kept the example and added a product image sample for the form test.
- `cypress/support/`: Custom Cypress commands to avoid repetition.

## TODO

- Handle the [ogin programmatic](https://docs.cypress.io/api/cypress-api/custom-commands#Log-in-command-using-request), since can be considered bad practice do it from the UI
- Separate the commands in modules, in a structure like this:
  
cypress/
│── support/
│   │── commands/
│   │   │── generalCommands.js
│   │   │── authCommands.js
│   │   │── userCommands.js
│   │   └── apiCommands.js
│   └── commands.js

- Improve test coverage by adding more API and frontend tests.
- Implement better error handling and logging.
- Optimize test execution times by running tests in parallel.
- Automate test result reporting and integration with CI/CD pipelines.
- Serve a HTML report from the Docker execution, so this can be send after a pipeline execution

In general, the code need to be reviewed against the [Cypress docs best practices](https://docs.cypress.io/app/core-concepts/best-practices), and for sure I'm missing a lot of things in this TO-DO list, but coding is an ongoing process of improvement and refinement... 