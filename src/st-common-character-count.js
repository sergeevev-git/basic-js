import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(str1, str2) {
    // throw new NotImplementedError('Not implemented');
    let count = 0;
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let letterPos = 0;

    if (arr1.length >= arr2.length) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.some((item) => item === arr2[i])) {
                count += 1;
                letterPos = arr1.findIndex((item) => item === arr2[i]);
                arr1.splice(letterPos, 1);
            }
        }
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.some((item) => item === arr1[i])) {
                count += 1;
                letterPos = arr2.findIndex((item) => item === arr1[i]);
                arr2.splice(letterPos, 1);
            }
        }
    }
    return count;
}
