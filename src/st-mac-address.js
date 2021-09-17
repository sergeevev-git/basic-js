import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(macAddr) {
    try {
        let arr = macAddr.split("-");
        let isMacAddr = true;
        let regex = /([A-F]|[a-f]|[0-9])/;
        arr.forEach((element) => {
            !regex.test(element[0]) || !regex.test(element[1])
                ? (isMacAddr = false)
                : (isMacAddr = isMacAddr);
        });
        return isMacAddr;
    } catch (e) {
        throw new Error(false);
    }
}
