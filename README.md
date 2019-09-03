# Bug reproduction repo for jest expect.assertions() bug

Assertions made outside of actual tests are included in the assertion count of
the first test.

```commandline
$ npm install --ci
[...]
$ node_modules/.bin/jest --ci
 FAIL  ./example-2.test.js
  ● example

    expect.assertions(1)

    Expected one assertion to be called but received two assertion calls.

       8 | // This will also fail if the above test.each is not running
       9 | test('example', () => {
    > 10 |     expect.assertions(1);  // this fails
         |            ^
      11 |     expect(1).toBeGreaterThan(0);
      12 | });
      13 | 

      at Object.assertions (example-2.test.js:10:12)

 FAIL  ./example-1.test.js
  ● example test 0 

    expect.assertions(1)

    Expected one assertion to be called but received two assertion calls.

       9 | // second and third pass.
      10 | test.each([[1], [2], [3]])( 'example test %# ', x => {
    > 11 |     expect.assertions(1);
         |            ^
      12 |     expect(x).toBeGreaterThan(0);
      13 | });
      14 | 

      at assertions (example-1.test.js:11:12)

 FAIL  ./example-3.test.js
  ● example

    expect.assertions(1)

    Expected one assertion to be called but received two assertion calls.

       6 | // This will also fail if the above test.each is not running
       7 | test('example', () => {
    >  8 |     expect.assertions(1);  // this fails
         |            ^
       9 |     expect(1).toBeGreaterThan(0);
      10 | });
      11 | 

      at Object.assertions (example-3.test.js:8:12)

Test Suites: 3 failed, 3 total
Tests:       3 failed, 2 passed, 5 total
Snapshots:   0 total
Time:        1.066s
Ran all test suites.
```
