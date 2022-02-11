module.exports = function reverse (n) {
    let str = '';
    let m = n;
    if (m < 0) {
        str = String(-m);
    } else { 
        str = String(m);
    }
    let str2 = '';
    let len = str.length;
    for (let i = len-1; i >= 0; i--) {
      str2 += str[i];
    };
    return Number(str2);
}