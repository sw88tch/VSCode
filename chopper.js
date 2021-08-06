function chopper(arr, excess) {
    arr.splice(0, excess);
    return arr;
    }
    
console.log(chopper(['DFGHJ', 'ERTYU', 'January', 'February', 'March', 'April', 'May', 'June', 'Jule'], 3))