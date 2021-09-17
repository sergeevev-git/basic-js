import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(string) {
    let count = 1;
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count += 1;
        } else {
            if (count !== 1) {
                newString += count;
            }
            newString += string[i];
            count = 1;
        }
    }
    return newString;
}
