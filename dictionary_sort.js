function dictionarySort(arrOfWords) {
    for (let i = 0; i < arrOfWords.length; i++) {
        for (let j = i+1; j < arrOfWords.length; j++) {
            if (arrOfWords[j] < arrOfWords[i]) {
                let temp = arrOfWords[j];
                arrOfWords[j] = arrOfWords[i];
                arrOfWords[i] = temp;
            }
        }
    }
    return arrOfWords;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang'])); //duduk, makan, terbang, tidur
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi'])); 