function sortW(arr) {
    for (var i = 1; i < arr.length; i++) {

        for (var j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
            var tmp = arr[i]
            
            arr[i] = arr[j]
            arr[j] = tmp
    
            }
        }
      }  
      return arr
}


console.log (sortW(['makan', 'duduk', 'tidur', 'terbang']))
console.log (sortW(['anggi', 'angga', 'ani', 'adi']))