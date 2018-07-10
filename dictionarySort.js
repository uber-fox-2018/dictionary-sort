function ditctionarySort(input){
    for (let i = 0; i < input.length; i++){
        for (let j = i+1; j < input.length; j++){
            if (input[i]>input[j]){
                let tmp = input[i]
                input[i] = input[j]
                input[j] = tmp
            }
        }
    }

    return input
}

console.log(ditctionarySort(['anggi','angga','ani','adi']))