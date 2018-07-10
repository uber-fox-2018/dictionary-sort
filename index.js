const dictionarySort = (input) => {
  for (var i = 0; i < input.length; i++) {
    if (input[i] > input[i+1]) {
      let swap   = input[i]
      input[i]   = input[i+1]
      input[i+1] = swap
    }
  }
  return input.join(', ')
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

