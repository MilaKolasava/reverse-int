module.exports = function reverse(n) {
   n = String(Math.abs(n));
    let result = n.split('').reverse().join('');
    return result;
}
