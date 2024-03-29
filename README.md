# Clean Architecture Principles with Node.js
[![Coverage Status](https://coveralls.io/repos/github/diegovinci/clean-node-api/badge.svg)](https://coveralls.io/github/diegovinci/clean-node-api)
[![Build Status](https://travis-ci.com/diegovinci/clean-node-api.svg?branch=main)](https://travis-ci.com/diegovinci/clean-node-api)
![GitHub top language](https://img.shields.io/github/languages/top/diegovinci/clean-node-api?color=%2344c837)
![Made By](https://img.shields.io/badge/made%20by-diegovinci-%2344c837)
![License](https://img.shields.io/badge/license-MIT-%2344c837)

An example of a simple RESTful API built with Node.js using some of the principles of Clean Architecture, TDD and Design Patterns.

## Concepts Applied
  - Clean Architecture
  - TDD
  - Design Patterns
  - KISS
 
## Getting Started

### Dependencies
  - [node.js](https://github.com/nodejs)
  - [express](https://github.com/expressjs/express)
  - [mongodb](https://github.com/mongodb/node-mongodb-native)
  - [validator.Js](https://github.com/validatorjs/validatorjs)
  - [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
  - [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
  - [fast-glob](https://github.com/mrmlnc/fast-glob)

### Steps
Set a MongoDB database in the `env.js` file located in the following path: 
```bash
cd src/main/config
```
Install the dependencies: 
```bash
npm install
```
Start the server: 
```bash
npm start
```

### Tests
You can also use the following npm scripts to run the tests:
```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration
```

## License
This project is under MIT license. See the [LICENSE](https://github.com/diegovinci/clean-node-api/blob/main/LICENSE) file for more details.
