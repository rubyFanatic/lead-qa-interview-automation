# Welcome to Biobot Search

## Objective
Using the test suite of your choice, thoroughly test a search for kits page with 3 hours of effort.

## Brief
Biobot customers receive a kit with tubes inside of it, which the customer uses to collect samples, and later sends the kit back to the Biobot lab. Your task is to test a search with an autocomplete functionality that our customers use to track the shipping status of that kit. Each kit has a label on it with a unique kit identifier and FedEx tracking number with the format xx-xxx-xxxx.

## Available Scripts
#### `npm start`
Opens two terminal tabs, one for `npm run frontend`, one for `npm run backend`. On MacOS, terminal needs accessibility access and will prompt the user to allow the action. Otherwise, to run the app, open two terminals. In one terminal, run `npm run frontend` in another terminal run `npm run backend`.

#### `npm run frontend`
Runs the app in the development mode at [http://localhost:3000](http://localhost:3000).

#### `npm run backend`
Runs the backend using json-server at [http://localhost:4000](http://localhost:4000). To retrieve shipping data: [http://localhost:4000/shipping_data](http://localhost:4000/shipping_data).

#### `npm run build`
Builds the app for production to the `build` folder. Bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. [Deployment info here](https://facebook.github.io/create-react-app/docs/deployment).

## Automation Run instructions
Codeceptjs is a supercharged E2E testing Javascript framework and is used as part of this excercise.

#### `npm install`
It will install the codeceptjs and puppeteer related dependencies that are needed to run our tests

You can run the tests using the following options from the home directory of the project

#### `npx codeceptjs run`
Runs all the automated tests for the web app (search_test.js file) and API tests (get_search_test.js file)

#### `npx codeceptjs run --grep '@P0'`
Runs all tests that are tagged as @P0 (or) @regression (or) @search_api_test

#### `npx codeceptjs run --override '{ "helpers": {"Puppeteer": {"show": false}}}' `
Runs the tests without opening the browser on the screen
