# Politico-react

Politico is a platform that enables citizens give their mandate to politicians running different government offices while building trust in the process through transparency.

[![Netlify Status](https://api.netlify.com/api/v1/badges/b1a4601c-a821-49f2-ae41-e1df1ba982a6/deploy-status)](https://app.netlify.com/sites/keen-murdock-6b52d2/deploys)
[![CircleCI](https://circleci.com/gh/amaechi-chuks/Politico-react.svg?style=svg)](https://circleci.com/gh/amaechi-chuks/Politico-react)
[![Build Status](https://travis-ci.org/amaechi-chuks/Politico-react.svg?branch=develop)](https://travis-ci.org/amaechi-chuks/Politico-react)
[![Maintainability](https://api.codeclimate.com/v1/badges/8111789052b3f577763d/maintainability)](https://codeclimate.com/github/amaechi-chuks/Politico-react/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/amaechi-chuks/Politico-react/badge.svg?branch=develop)](https://coveralls.io/github/amaechi-chuks/Politico-react?branch=develop)

## Table of Contents

- [Introduction](#introduction)
- [Installing](#installing)
- [Working Routes](#working-routes)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contribution](#contribution)
- [Live Demo](#live-demo)

# Introduction

## _Project Overview_

This project enables an online voting system

<b> Test API Endpoints Here: </b> https://politico-software.herokuapp.com/ <br/>
<b> Pivotal Tracker: </b>https://www.pivotaltracker.com/n/projects/2330234<br/>
<b> Hosted application: </b>https://keen-murdock-6b52d2.netlify.com/<br/>

### **Style guide**

[Airbnb ](https://github.com/airbnb/javascript)(Javascript style guide)

## Screenshoot(UI template)

![alt](./screenShoot/readme.png)

## Required Features

1. `Users can sign up`.
2. `Users can login`.
3. `Admin (electoral body) can create political parties`.
4. `Admin (electoral body) can delete a political party`.
5. `Admin (electoral body) can create different political offices`.
6. `Users can vote for only one politician per political office`.
7. `Users can see the results of election`.

# Installing

#### _Prerequisites_

Ensure you have **NodeJS** installed by entering `node -v` on your terminal
If you don't have **NodeJS** installed go to the [NodeJS Website](http://nodejs.org), and follow the download instructions

To install this app

`git clone https://github.com/amaechi-chuks/Politico-react`

And install the required dependencies

`npm install`

Run server

`npm run start:dev`

## Running the tests

To run test cases

`npm test`

# Working Routes

## _API Endpoints_

| Endpoint             |                   Functionality                   | HTTP method |
| -------------------- | :-----------------------------------------------: | ----------: |
| /api/v1/auth/signup  |               Create a user account               |        POST |
| /api/v1/auth/login   |                   Login a user                    |        POST |
| /api/vi/profile      |                 user profile page                 |         GET |
| /api/vi/interest/:id | user can declare an interest to run for an office |        POST |
| /api/vi/interest     |      user can get all interested candidates       |         GET |

## License

This projects is under the MIT LICENSE

## Acknowledgments

- [Egghead](https://egghead.io/)
- [Andela](http://andela.com)
- [Victoria Offoma (Learning Facilitator)](victoria.offoma@andela.com)
- [Stackoverflow](stackoverflow.com)

## Contribution

_If you want to contribute to this project:_

- `Fork it! :fork_and_knife:`
- `Create your feature branch: git checkout -b my-new-feature`
- `Commit your changes: git commit -m 'Add some feature'`
- `Push to the branch: git push origin my-new-feature`
- `Create a pull request.`
