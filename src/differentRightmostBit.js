function solution(n, m) {
    return 2 ** (n ^ m).toString(2).split('').reverse().join('').indexOf('1');
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test differentRightmostBit

// alternative solution
