const caesar = require('./caesar')

describe('caesar', function() {
  it('works with single letters', function() {
    expect(caesar('A', 1)).toEqual('B');
  });
  it('works with words', function() {
    expect(caesar('Aaa', 1)).toEqual('Bbb');
  });
  it('works with phrases', function() {
    expect(caesar('Ht ivhz dn Kvomdxf', 5)).toEqual('My name is Patrick');
  });
  it('works with negative shift', function() {
    expect(caesar('My name is Patrick', -5)).toEqual('Ht ivhz dn Kvomdxf');
  });
  it('wraps', function() {
    expect(caesar('Z', 1)).toEqual('A');
  });
  it('works with large shift factors', function() {
    expect(caesar('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
  });
  it('works with large negative shift factors', function() {
    expect(caesar('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
  });
});
