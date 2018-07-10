function dictionarySort(input) { 
  for(let i = 0; i < input.length-1; i++) {
    if(input[i] > input[i+1]) {
      let tmp = input[i];
      input[i] = input[i+1];
      input[i+1] = tmp;
      i = -1;
    }
  }
  
  return input;

}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
