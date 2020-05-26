/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
};
alert(ucFirst(str));
