function dictionarySort(arr) {
    
    //insertion sort
    let i;
    let j;

    for(i = 1; i < arr.length; i++) {
        let current = arr[i];
        j = i-1;
        while(j >= 0 && compareString(arr[j], current)) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }

    return arr;
}

//compare string to another string
//return true if str1 has bigger value
//return false if str2 has bigger value
//equivalent with expr: str1 > str2
function compareString(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for (let i = 0; i < str1.length; i++) {
        if(getCharValue(str1[i]) === getCharValue(str2[i]))
            continue
        else if (getCharValue(str1[i]) > getCharValue(str2[i]))
            return true
        else 
            return false
    }
    return false;
}

function getCharValue(c) {
    let alphabets = [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for(let i = 0; i < alphabets.length; i++) {
        if(alphabets[i] === c)
            return i;
    }

    return -1;
}

let arrayOfWord1 = ['makan', 'duduk', 'tidur', 'terbang']
console.log('case 1 before sort:', arrayOfWord1);
console.log('case 1 after sort:', dictionarySort(arrayOfWord1))

let arrayOfWord2 = ['anggi', 'angga', 'ani', 'adi']
console.log('case 2 befoe sort:', arrayOfWord2);
console.log('case 2 after sort:', dictionarySort(arrayOfWord2))

let arrayOfWord3 = ['jbdz6TygBb', '6qU1Qrvzfl', 'GqCiNNZJPQ', 'hv0KBMU33e', 'S4lUixIkuP', '6iYDv2uy8V', 'kejk5pS7Jq', 'LPRo6PnyJQ', 'KZcGp165Fz', '1sMnt9sCWU']
console.log('case 3 befoe sort:', arrayOfWord3);
console.log('case 3 after sort:', dictionarySort(arrayOfWord3))
