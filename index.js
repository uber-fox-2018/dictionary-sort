function dictionarySort (array) {
    for(let i=0; i<array.length; i++){
        if(array[i] > array[i+1]){
            let tmp = array[i];
            array[i] = array[i+1];
            array[i+1] = tmp;
        }
    }
    return array
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
//output : duduk,makan,terbang,tidur
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
//output : angga,anggi,adi,ani
