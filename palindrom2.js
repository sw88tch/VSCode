function palindrom(str) {
    var len = str.length;
    var mid = Math.floor(len/2);
    str2 = str.toLowerCase();
    for ( var i = 0; i < mid; i++ ) {
        if (str2[i] !== str2[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrom('пРи  1 ирп'))