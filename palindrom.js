function palindrom(str) {
    str = str.toLowerCase();
    // console.log(str);
    return (str == str.split('').reverse().join(''));
}

console.log(palindrom('Rar rar'))