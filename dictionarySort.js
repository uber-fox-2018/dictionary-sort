function dictionarySort(arr) {
    var hasil = [];
    while(arr.length > 0) {
        var idx = 0;
        var palingKecil = arr[0];
        for(let i = 0; i < arr.length; i++) {
            if(palingKecil > arr[i]) {
                palingKecil = arr[i];
                idx = i;
            }
        }
        hasil.push(palingKecil);
        arr.splice(idx, 1)
    }
    
    return hasil;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));