const solution = require('./differentRightmostBit.js');

test('test 1', () => {
    expect(solution(11, 13)).toBe(2);
});

test('test 2', () => {
    expect(solution(7, 23)).toBe(16);
});

test('test 3', () => {
    expect(solution(1, 0)).toBe(1);
});

test('test 4', () => {
    expect(solution(64, 65)).toBe(1);
});

test('test 5', () => {
    expect(solution(1073741823, 1071513599)).toBe(131072);
});

test('test 6', () => {
    expect(solution(42, 22)).toBe(4);
});
