module.exports = function reverse (n) {
   let arr = Math.abs(n); 
    return  (arr + '').split("").reverse().join(""); 
}
