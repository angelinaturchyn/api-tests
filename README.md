# API Test Automation Project using SuperTest

This project demonstrates the setup and use of SuperTest for writing automated API tests in JavaScript.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 14 or later)
- npm or yarn installed

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/angelinaturchyn/cypress-test-automation
    cd cypress-test-automation
    ```

2. **Install dependencies:**

    Using npm:

    ```sh
    npm install
    ```

    Using yarn:

    ```sh
    yarn install
    ```

3. **Install SuperTest:**

    To add SuperTest to your project, run the following command:

    ```sh
    npm install supertest --save-dev
    ```

## Writing API Tests

Tests are written using the SuperTest library and can be placed in the `./tests` directory.

### Sample API Test File

Create a file `example-api.test.js` in the `./tests` directory:

```javascript
const request = require('supertest');
const assert = require('assert');

describe('API Test Example', () => {
  it('should return a 200 status code and expected response body', async () => {
    const response = await request('https://jsonplaceholder.typicode.com')
      .get('/posts/1')
      .expect('Content-Type', /json/)
      .expect(200);

    assert.strictEqual(response.body.id, 1);
    assert.strictEqual(response.body.userId, 1);
    assert.strictEqual(response.body.title, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });
});
```

### Running Tests

To execute the tests, use the following command:

``` npx mocha ./tests/**/*.test.js ```


### Project Structure


```
├── tests
│   └── example-api.test.js
├── package.json
├── README.md
└── ...

```
