// function arrOfWord(arr) {

//     var temp = 0

//     for(var i = 0 ; i < arr.length; i++){

//         var ubah = i;

//         for(var j = i + 1; j<arr.length; j++) {
//             if(arr[j] < arr[ubah])
//                 ubah = j;
//         }
//         //proses swap mencari terkecil
//         temp = arr[i];
//         arr[i] = arr[ubah];
//         arr[ubah] = temp;
//     }
//     return arr.join(',')

// }

function arrOfWord(items) {
    var length = items.length;

    for (var i = 0; i < length; i++) { //Number of passes
      for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
        //Compare the adjacent positions
        if(items[j] > items[j+1]) {
          //Swap the numbers
          var tmp = items[j];  //Temporary variable to hold the current number
          items[j] = items[j+1]; //Replace current number with adjacent number
          items[j+1] = tmp; //Replace adjacent number with current number
        }
      }        
    }
    return items.join(',')
  }

console.log(arrOfWord(['makan','duduk','tidur','terbang']));
console.log(arrOfWord(['anggi','angga','ani','adi']));