expect(0).toBe(0);

// Uncommenting this stops the first test failing
// test('dummy', () => undefined);

// This will also fail if the above test.each is not running
test('example', () => {
    expect.assertions(1);  // this fails
    expect(1).toBeGreaterThan(0);
});
