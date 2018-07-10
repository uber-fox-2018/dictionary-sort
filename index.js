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
                                              //Number of passes
      for (var i = 0; i < items.length-1; i++) { //Notice that j < (length - i)
        // console.log('items[i] ==>',items[i])
        //Compare the adjacent positions
        if(items[i] > items[i+1]) {
          //Swap the numbers
          var tmp = items[i];  //Temporary variable to hold the current number
          items[i] = items[i+1]; //Replace current number with adjacent number
          items[i+1] = tmp; //Replace adjacent number with current number
        }
      }        
    return items.join(',')
  }

console.log(arrOfWord(['makan','duduk','tidur','terbang']));
console.log(arrOfWord(['anggi','angga','ani','adi']));