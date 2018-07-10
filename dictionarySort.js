const dictionarySort = (stringArr) => {


let swapped = false;
for (let i = 1; i < stringArr.length; i++){
  debugger;
  if (stringArr[i - 1] > stringArr[i]){
    debugger;
    let temp = stringArr[i - 1];
    stringArr[i - 1] = stringArr[i];
    stringArr[i] = temp;  
    swapped = true;
  }
}  
if (swapped) {
  dictionarySort (stringArr)
} 
  
return stringArr
}

console.log(dictionarySort([1,8,7,4,3,2,5]))