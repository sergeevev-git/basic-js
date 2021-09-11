import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr) && arr.length !== 0) {
        let dreamTeamName = "";
        arr = arr.filter((item) => {
            return typeof item === "string";
        });

        arr = arr.map((element) => {
            return element.toUpperCase().trim();
        });

        arr.sort();

        arr.forEach((item) => {
            dreamTeamName += item[0];
        });
        return dreamTeamName;
    } else {
        return false;
    }
}
