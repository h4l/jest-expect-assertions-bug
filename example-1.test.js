beforeAll(() => {
    expect(0).toBe(0);
});

// Uncommenting this stops the first test failing
// test('dummy', () => undefined);

// The first test here fails (with 2 assertions instead of 1),
// second and third pass.
test.each([[1], [2], [3]])( 'example test %# ', x => {
    expect.assertions(1);
    expect(x).toBeGreaterThan(0);
});
