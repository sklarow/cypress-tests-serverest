# Cypress Tests for Serverest

This repository contains automated tests for the Serverest application using [Cypress](https://www.cypress.io/). The test suite includes both API and UI (frontend) tests, structured for ease of execution and maintenance, the project also have some [Lint](https://en.wikipedia.org/wiki/Lint_(software)), [Allure Report](https://allurereport.org/docs/cypress/) and [Docker](https://www.docker.com/) support...

Since this is just an exercise on a [App I Don't Control](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Testing-Apps-You-Dont-Control), not all the best practices was applied and the code have some anti-patterns, some of them are addressed in the [TODO](#todo)

## Table of Contents

- [Cypress Tests for Serverest](#cypress-tests-for-serverest)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [🧪 Running the Tests](#-running-the-tests)
    - [Running Cypress UI](#running-cypress-ui)
    - [Running Cypress in Headless Mode](#running-cypress-in-headless-mode)
    - [Running API Tests](#running-api-tests)
    - [Running Frontend Tests](#running-frontend-tests)
    - [Running a Single Test File](#running-a-single-test-file)
  - [🐳 Docker Usage](#-docker-usage)
      - [Running a Single Test File with Docker](#running-a-single-test-file-with-docker)
  - [🧪 Test Structure](#-test-structure)
  - [📋 TODO](#-todo)
  - [Test Execution Sample](#test-execution-sample)
  - [Little Extra](#little-extra)

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

You can configure:
- Cypress through `cypress.config.js`
- Lint options in `.prettierrc` and `eslint.config.mjs`
- Docker in `Dockerfile` and `docker-compose.yml`

## 🧪 Running the Tests

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

```sh
npx cypress run --spec "cypress/e2e/api/usuarios.cy.js"
```

## 🐳 Docker Usage

The project includes Docker support. To execute all the tests, inside a container:

```sh
docker-compose up --build
```

After building, to save some resources and time you can just execute:

```sh
docker-compose up 
```

#### Running a Single Test File with Docker

```sh
docker run --rm cypress-tests npx cypress run --spec "cypress/e2e/api/usuarios.cy.js"
```

In Docker, the same logic applies for e2e and API tests, just change the --spec "xxxxx"

## 🧪 Test Structure

I opted to make just a few tests that covers a good portion of the functionalities, they are the following:

- `cypress/e2e/api/`: Contains API test cases covering user creation and authentication and a simple product list GET request.
- `cypress/e2e/frontend/`: UI test cases focusing on user creation and login, with a form submission test, a product search test, and UI validations.
- `cypress/fixtures/`: kept the example and added a product image sample for the form test.
- `cypress/support/`: Custom Cypress commands to avoid repetition.

## 📋 TODO

- Handle the [login programmatic](https://docs.cypress.io/api/cypress-api/custom-commands#Log-in-command-using-request), since can be considered bad practice do it from the UI
- Separate the commands in modules, in a structure like generalCommands.js, authCommands.js, userCommands.js, apiCommands.js, etc..
- Improve test coverage by adding more API and frontend tests.
- Implement better error handling and logging.
- Optimize test execution times by running tests in parallel.
- Automate test result reporting and integration with CI/CD pipelines.
- Serve a HTML report from the Docker execution, so this can be send after a pipeline execution

In general, the code need to be reviewed against the [Cypress docs best practices](https://docs.cypress.io/app/core-concepts/best-practices), and for sure I'm missing a lot of things in this TO-DO list, but coding is an ongoing process of improvement and refinement...

## Test Execution Sample

```
cypress_tests  |        Spec                                              Tests  Passing  Failing  Pending  Skipped  
cypress_tests  |   ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
cypress_tests  |   │ ✔  api/produtos.cy.js                       411ms        1        1        -        -        - │
cypress_tests  |   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
cypress_tests  |   │ ✔  api/usuarios.cy.js                       655ms        2        2        -        -        - │
cypress_tests  |   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
cypress_tests  |   │ ✔  frontend/login.cy.js                     00:11        5        5        -        -        - │
cypress_tests  |   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
cypress_tests  |   │ ✔  frontend/signup.cy.js                    00:12        2        2        -        -        - │
cypress_tests  |   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
cypress_tests  |   │ ✔  frontend/user-admin.cy.js                00:06        1        1        -        -        - │
cypress_tests  |   ├────────────────────────────────────────────────────────────────────────────────────────────────┤
cypress_tests  |   │ ✔  frontend/user.cy.js                      00:05        1        1        -        -        - │
cypress_tests  |   └────────────────────────────────────────────────────────────────────────────────────────────────┘
cypress_tests  |     ✔  All specs passed!                        00:36       12       12        -        -        -  
cypress_tests  | 
```

For the full test output, check [test-execution-sample-output.log](test-execution-sample-output.log)


The command used to generate this output was:

```sh
docker-compose up | tee test-execution-sample-output.log
```
## Little Extra

I added a [github workflow](https://github.com/sklarow/cypress-tests-serverest/blob/main/.github/workflows/cypress.yml) executing and publishing the Allure Report to the GitHub page of the project:
https://sklarow.github.io/cypress-tests-serverest/

🚀🚀🚀🚀🚀🚀🚀