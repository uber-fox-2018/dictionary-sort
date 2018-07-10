function arrOfWord(input){
    for(let i = 0; i < input.length; i++){
      for(let j = 0; j < input.length; j++){
        if(input[j] > input[j+1]){
          var sorting = input[j]
          input[j] = input[j+1]
          input[j+1] = sorting 
        }  
      }
    }
  
    return input
}

console.log(arrOfWord(['makan', 'duduk', 'tidur', 'terbang']))
console.log(arrOfWord(['anggi', 'angga', 'ani', 'adi']))