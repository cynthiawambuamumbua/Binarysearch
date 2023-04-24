// Implement a binary search function that takes an array of integers and a target integer as inputs, 
// and returns true if the target exists in the array and false otherwise
function binarySearch(array, target2){
    left = 0
    right = array.length-1;
    while(left>=right){
        let middle = Math.floor((left+right)/2);
        if(array[middle]==target2){
            return true
        }
        else if(array[middle]>target2){
            right=middle-1
        }
        else{
            left = middle +1
        }
    }
    return false
}
let array=[12,23,45,13,42,78]
let target2=4
console.log(binarySearch(array,target2))

// Implement a binary search function that takes an array of objects 
// with a numeric "value" property and a target value, and returns the object 
// with the closest "value" to the target.
function binarySearch(array2,value,property,target){
//    let value=property
    while(value<=property){
        let middle=Math.floor((left+right)/2)
        if(array[middle]==target){
            return Object
        }
        else if(array[middle]>target){
            left=middle+1
        }
        else{
            right=middle-1
        }
    }
    return value
}
let array2=[1,2,3,4,5,6,7,8,9]
let target=2
console.log(binarySearch(array2,target2))

// Implement a binary search function that takes a sorted
//  array of integers and a target integer as inputs, and returns 
//  the number of occurrences of the target in the array.
function binarySearch(sortedIntergers,targetInterger,occurrences){
    // occurrences=[]
    if(targetInterger<occurrences){
        let occurrences=Math.floor((left+right)/2)
        return targetInterger
    }
    else if(sortedIntergers[occurrences]==targetInterger){
      targetInterger=occurrences+1
    }
    else{
       targetInterger=occurrences-1

    }
    return occurrences
}
//  let target3=5
let targetInterger=[1,2,3,4,5,6,7]
console.log(binarySearch(targetInterger))


// Implement a binary search function that takes a sorted array of strings 
// and a target string as inputs, and returns true if the target 
// exists in the array and false otherwise.
function binarySearch(sortedArrIntergers,targetString){
    left=0
    right=sortedArrIntergers.length-1
    while(left>=right){
        let middle=Math.floor((left+right)/2)
        if(sortedArrIntergers[middle]===targetString){
            return true
        }
        else if(sortedArrIntergers[middle]>targetString){
            right=middle+1
        }
        else{
            left=middle-1
        }

    }
    return false
}
let targetString=1
let sortedIntergers=[1,2,3,4,5,6,7,8,9]
console.log(binarySearch(targetString,sortedIntergers))

// Implement a binary search function that takes a sorted array 
// of objects with a string "name" property and a target name, and
//  returns the object with the matching "name" property.
function binarySearch(sortedArray,targetName,object,property){
    while(sortedArray[object]>=property){
        let middle=Math.floor((left+right)/2)
        if(sortedArray===targetName){
            return object
        }
        else if(sortedArray<=targetName){
            right=middle+1
        }
        else{
            left=middle-1
        }
    }
    return property
}
let targetName="cynthia"
let sortedArray=["cynthia","muema","ngina","wambua"]
console.log(targetName,sortedArray)