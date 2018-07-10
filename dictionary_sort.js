function dictionarySort(arrOfWords) {
    for (let i = 0; i < arrOfWords.length; i++) {
        // for (let j = i+1; j < arrOfWords.length; j++) {
            if (arrOfWords[i+1] < arrOfWords[i]) {
                let temp = arrOfWords[i];
                arrOfWords[i] = arrOfWords[i+1];
                arrOfWords[i+1] = temp;
            }
        // }
    }
    return arrOfWords;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang'])); //duduk, makan, terbang, tidur
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi'])); //angga, anggi, adi, ani