function arrofWord(arr){


	for (var i=0 ; i < arr.length ; i++){
		for (var j=i+1 ; j < arr.length ; j++){
			if (arr[i] > arr[j]){
				var temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
	}

	return arr

	// var alphabet = 'abcdefghijklmnopqrstuvwxyz'
	// var result=[] 
	
	// var result = []
	// for (var i = 0 ; i < arr.length ; i++){
	// 	var num=0
	// 	for (var j = 0 ; j < arr[i].length ; j++){
	// 		for (var k = 0 ; k < alphabet.length ; k++){
	// 			if (alphabet[k] === arr[i][j]){
	// 				num+=k+1		
	// 			}
	// 		}
	// 	}
	// 	result.push(num)
	// }
	// console.log(arr)
	// console.log(result)

	// for (var m=0 ; m < result.length ; m++){
	// 	for (var n=m+1 ; n < result.length ; n++){
	// 		if (result[m] > result[n]){
	// 			var temp = arr[m]
	// 			arr[m] = arr[n]
	// 			arr[n] = temp
	// 		}
	// 	}
	// }
	// return arr
}


console.log(arrofWord(['makan','duduk','tidur','terbang']))
console.log(arrofWord(['anggi','angga','ani','adi']))
console.log(arrofWord(['x','bb','aa','ddd','ccc']))