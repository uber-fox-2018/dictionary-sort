function dictionarySort(arr){
    for(let i = 0; i<arr.length; i++){
            if(arr[i] >= arr[i+1]){
                var swap = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = swap
            }
        }
    return arr.join(',')
}



var arrOfWord = ['makan','duduk','tidur','terbang']
console.log(dictionarySort(arrOfWord))
// output: duduk,makan,terbang,tidur

// var arrOfWord = ['anggi','angga','ani','adi']
// console.log(dictionarySort[arrOfWord])
// output: angga,anggi,adi,ani