import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(num) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let str = String(num);
    let arr = str.split("");
    let tempArr = str.split("");
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        tempArr.splice(i, 1);
        let tempStr = tempArr.join("");
        Number(tempStr) > max ? (max = Number(tempStr)) : (max = max);
        tempArr = str.split("");
    }
    return max;
}
