 array = [1,2,3,4,5]

function twiceOdd(array){
    
    const odd = [];

    for(let i = 0; i < array.length; i++){

       
       if(array[i] % 2 !== 0){
        odd.push(array[i] * 2);
       }
    }
    return odd;
}

console.log(twiceOdd(array));
