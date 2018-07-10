

//Bubble Sort//
function arrOfWord(arr) {
    let str = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        // for (let j = i; j >= 0; j--) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        };
        // };
        str = arr.join()
    };

    return str;


}


console.log(arrOfWord(['makan', 'duduk', 'tidur', 'terbang']));

console.log(arrOfWord(['anggi', 'angga', 'ani', 'adi']));

// angga anggi adi ani
