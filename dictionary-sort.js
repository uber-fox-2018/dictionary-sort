function dictionarySort(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0;j--) {
            if (arr[j] < arr[j-1]) {
                let y = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = y
            }
        }  
      }  
    return arr
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))
