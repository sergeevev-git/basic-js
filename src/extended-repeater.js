import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

export default function repeater(string, options) {
    let result = "";
    string = String(string);

    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    let separator = options.separator ? options.separator : "+";

    let addition =
        options.addition === undefined ? "" : String(options.addition);
    //    String(options.addition) === "false" || options.addition
    //        ? String(options.addition)
    //        : "";

    let additionRepeatTimes = options.additionRepeatTimes
        ? options.additionRepeatTimes
        : 1;

    let additionSeparator = options.additionSeparator
        ? options.additionSeparator
        : "|";

    if (string && repeatTimes) {
        for (let i = 0; i < repeatTimes; i++) {
            result += string;

            if (addition && additionRepeatTimes) {
                for (let j = 0; j < additionRepeatTimes; j++) {
                    result += addition;
                    if (
                        additionSeparator &&
                        j < options.additionRepeatTimes - 1
                    ) {
                        result += additionSeparator;
                    }
                }
            }
            if (separator && i < repeatTimes - 1) {
                result += separator;
            }
        }
    }
    return result;
}
