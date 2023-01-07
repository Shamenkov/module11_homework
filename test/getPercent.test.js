const getPercents = require('../getPercent');

test('testing getPercents function', () => {
    expect(getPercents(50, 100)).toBe(50);
  });

  test('percernts should be grater than 50%', () =>{
    expect(getPercents(30, 200)).toBeGreaterThan(50);
  });