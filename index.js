const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(arr){
    var i = 0
    var length = arr.length 
    debugger;

    while(length !== 0){
        if(arr[i] > arr[i+1]){
            var temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            debugger;
        }
        length--
        if(i !== arr.length){
            i++
        }else{
            i = 0
        }
        debugger
    }

    return arr
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']));
console.log(dictionarySort(['anggi','angga','ani','adi']));



// module.exports = Dictionary
