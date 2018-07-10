function dictionary(arr){
    for(var i = 0 ; i < arr.length ; i++){
        var tmpArr = arr[i] // 3
        var tmpPmr = i // 0
        for(var j = i ; j < arr.length ; j++){
            if(tmpArr > arr[j]){
                tmpArr = arr[j] // 2
                tmpPmr = j // 9
            }
        }
        var tmp = arr[i]
        arr[i] = tmpArr
        arr[tmpPmr] = tmp
    }
    return arr
}
console.log(dictionary(['makan', 'duduk', 'tidur', 'terbang'])) // duduk,makan,terbang,tidur
console.log(dictionary(['anggi', 'angga', 'ani', 'adi'])) // angga,anggi,adi,ani
