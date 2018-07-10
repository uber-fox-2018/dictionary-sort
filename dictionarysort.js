function arrOfWord(arr) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let container = [];
  for (let i = 0; i < arr.length; i++) {
    container.push(arr[i].charAt(0));
  }

  for (let j = 0; j < container.length; j++) {
     for (let k = j; k <= container.length; k++) {
       let temp = null;
       if (container[j] > container[k]) {
         temp = container[j];
         temp2 = arr[j];
         container[j] = container[k];
         arr[j] = arr[k];
         container[k] = temp;
         arr[k] = temp2;
       }
     }
   } return arr;

   // for (let j = 0; j < arr.length; j++) {
   //   for (let k = 0; k < arr.length; k++) {
   //     let temp = null;
   //     if(arr[j].charAt(0) > arr[j].charAt(0)) {
   //       temp = arr[j];
   //       console.log(temp);
   //       arr[j] = arr[k];
   //       arr[k] = temp;
   //     }
   //   }
   // }
   // return arr;

}

console.log(arrOfWord(['makan', 'duduk', 'tidur', 'terbang']));
console.log(arrOfWord(['anggi', 'angga', 'ani', 'adi']));
