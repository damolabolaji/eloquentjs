function range(start,end,step){
    arrayRange =[]
    step = step || 1
    if(step > 0){
        for(let i = start; i <= end; i+=step){
            arrayRange.push(i)
        }
    }
    else{
        for(let i = start; i >= end; i+=step){
            arrayRange.push(i)
        }
    }
    return arrayRange;
    console.log(arrayRange)
}

function addRange(array){
    sum = 0
    for(let i = 0; i < array.length; i++) {
        
        sum+=array[i]}
        console.log(sum)

}

addRange(range(1,10))



function arrayReverse(array){
arrayReversed = []
 for(let i = 0; i < array.length; i++){
    item = array[i]
    arrayReversed.unshift(item)
 }

 console.log(arrayReversed)
}


function arrayReverse(array){
arrayReversed = []
 for(let i = 0; i < array.length; i++){
    item = array[i]
    arrayReversed.unshift(item)
 }

 console.log(arrayReversed)
}


function arrayReverseInPlace(array){
    for(let i = 0; i < 3; i++){
        itemFirst = array[i]
       array[i] = array[array.length-1-i]
       array[array.length-1-i] = itemFirst
       
       
     }
     
     
     console.log(array)
}
 
arrayReverseInPlace([1,2,3,4,5,6,7])


function arrayList(array){
    list =[]
    for(let i = array.length - 1; i >= 0; i--){
        
        list = {
            value: array[i],
            rest: list
        }
    }
console.log(list)
   
}

arrayList([1,2,3,4,3,2])
