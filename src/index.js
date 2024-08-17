module.exports = function reverse(n) {
    let stringFromN = n.toString();

    let rversedStringFomN = stringFromN.split('').reverse().join('');

    return parseInt(rversedStringFomN, 10);

}
