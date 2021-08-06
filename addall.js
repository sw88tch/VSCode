function addAll(array) {
    var max = Math.max(array[0], array[1]);
    var min = Math.min(array[0], array[1]);
    var total = 0;
    for (var i = min; i <= max; i++) {
        total += i;
    }
    return total;
}


console.log(addAll([1, 4]))