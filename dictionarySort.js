function dictionarySorted(words) {

    for (let i = 0; i < words.length-1; i++) {
        if (words[i] > words[i+1]) {
            let temp = words[i]
            words[i] = words[i+1]
            words[i+1] = temp
        }
    }
    return words.join(',')
}

console.log(dictionarySorted(["makan", "duduk", "tidur", "terbang"])); // duduk,makan,terbang,tidur
console.log(dictionarySorted(["anggi", "angga", "ani", "adi"])); // angga,anggi,adi,ani
