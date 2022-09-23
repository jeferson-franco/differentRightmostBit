# differentRightmostBit

***Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.***

You're given two integers, `n` and `m`. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of `2position_of_the_found_bit` (0-based).

## Example

For `n = 11` and `m = 13`, the output should be
`solution(n, m) = 2`.

`11\^10 = 1011\^2`, `13\^10 = 1101\^2`, the rightmost bit in which they differ is the bit at position `1` (0-based) from the right in the binary representations.
So the answer is `2^1 = 2`.

For `n = 7` and `m = 23`, the output should be
`solution(n, m) = 16`.

`7\^10 = 111\^2, 23\^10 = 10111\^2`, i.e.
```
00111
10111
```
So the answer is `2^4 = 16`.

## Input/Output

- [execution-time-limit] 4 seconds (js)

- [input] integer n

Guaranteed constraints:
`0 ≤ n ≤ 2^30`.

- [input] integer m

Guaranteed constraints:
`0 ≤ m ≤ 2^30`,
`n ≠ m`.

- [output] integer
