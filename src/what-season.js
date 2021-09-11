import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function isValidDate(value) {
    var dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate());
}

export default function getSeason(date) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!date) {
        return "Unable to determine the time of year!";
    }
    try {
        date.toJSON();
    } catch (e) {
        return "Invalid date!";
    }

    if (
        date.getMonth() === 11 ||
        date.getMonth() === 0 ||
        date.getMonth() === 1
    ) {
        return "winter";
    } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
        return "spring";
    } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
        return "summer";
    } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
        return "fall";
    }
}
