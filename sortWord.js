function sortWord (arr) {
  for (var i = 1; i < arr.length; i++) {
        for (var j = i-1; j >= 0;j--) {
            if (arr[j+1] < arr[j]) {
                var y = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = y
            }
        }
    }  
  return arr
  //kapan kapan aja challenge nya mas
}

console.log(sortWord(['makan','duduk','dodok','didi']))