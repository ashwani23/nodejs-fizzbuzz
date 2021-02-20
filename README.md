# FizzBuzz REST API

REST API solution to solve the FizzBuzz problem using Node JS and Express

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install NPM.

```bash
npm install
```

If you are a yarn user

```bash
yarn install
```

1. Create `.env` file on root and copy content from `.env.example`, then update the file as follows (for now the app uses v1)

```bash
API_VERSION="v1"
APP_PORT="5000"
```

2. Execute the following command to run the application

```bash
npm run start
```

3. Your application starts over 5000 port and you can access it at [http://localhost:5000](http://localhost:5000)

## App Routes

```python
http://localhost:5000/api/v1/fizzbuzz
http://localhost:5000/api/v1/fizzbuzz/15
http://localhost:5000/api/v1/fizzbuzz/test - Invalid
```

## Unit Tests

Create `.env.test` file on root and copy content from `.env.example`, then update the file as follows (for now the app uses v1)

```bash
API_VERSION="v1"
APP_PORT="6000"
```

Execute the following command to run the tests

```python
npm run test
```

## Author

Ashwani Goyal
[ashwanigoyal@outlook.in](mailto:ashwanigoyal@outlook.in)
