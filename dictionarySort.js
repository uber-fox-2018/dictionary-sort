function dictionarySort(wordArr) {
    for (let i = 0; i < wordArr.length; i++) {
        for (let j = i+1; j < wordArr.length; j++) {
            if (wordArr[j] < wordArr[i]) {
                let tempContain = wordArr[j]
                wordArr[j] = wordArr[i]
                wordArr[i] = tempContain
            }
        }
    }
    return wordArr
}

// let arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
let arrOfWord2 = ['anggi', 'angga', 'ani', 'adi'] 
console.log(dictionarySort(arrOfWord2));