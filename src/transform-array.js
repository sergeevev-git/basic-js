import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (Array.isArray(arr)) {
        let transformed = [];
        for (let i = 0; i < arr.length; i++) {
            if (
                (arr[i] === "--double-next" &&
                    arr[i + 2] &&
                    arr[i + 2].includes("prev")) ||
                (arr[i] === "--double-next" && arr[i + 1])
            ) {
                transformed.push(arr[i + 1]);
            } else if (
                arr[i] === "--discard-next" &&
                arr[i + 2] &&
                arr[i + 2].includes("prev")
            ) {
                i += 2;
                // } else if (arr[i] === "--double-next" && arr[i + 1]) {
                //     transformed.push(arr[i + 1]);
            } else if (arr[i] === "--discard-next" && arr[i + 1]) {
                i += 1;
            } else if (arr[i] === "--double-prev" && arr[i - 1]) {
                transformed.push(arr[i - 1]);
            } else if (arr[i] === "--discard-prev" && arr[i - 1]) {
                transformed.pop();
            } else if (typeof arr[i] === "number") {
                transformed.push(arr[i]);
            }
        }
        return transformed;
    } else {
        return "'arr' parameter must be an instance of the Array!";
    }
}
