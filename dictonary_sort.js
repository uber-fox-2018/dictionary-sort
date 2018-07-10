function dictonarySort(arr) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    for (let a = 0; a < alpha.length; a++) {
        for (let b = 0; b < arr.length; b++) {
            temp = ''
            if (alpha[a] == arr[b][0]) temp = arr[b]
            if (temp != '') result.push(temp)
        }
    }
    return result.join(', ')
}

console.log(dictonarySort(['makan', 'duduk', 'tidur', 'terbang']));
// duduk, makan, tidur, terbang

console.log(dictonarySort(['anggi', 'angga', 'ani', 'adi']));
// anggi, angga, ani, adi