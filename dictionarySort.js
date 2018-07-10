function dictionarySort(arr){
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0;j--) {
            if (arr[j] < arr[j-1]) {
                let y = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = y
            }
        }  
      }  
    return arr.join();
}
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));//duduk,makan,terbang,tidur
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));//adi,angga,anggi,ani
console.log(dictionarySort(['susan', 'nio', 'xman', 'ironman', 'zoro']));// ironman,nio,susan,xman,zoro