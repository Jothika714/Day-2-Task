//example 
//var arr=[1,2,3,4,5,6,7,8,9,10];
/*var result = [];
function odd(arr){
for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
}
return result;
}
//console.log(odd(arr))
console.log(odd([1,2,3,4,5,6,7,8,9,10]));*/

//Anonymous Function/IIFE/Arrow Funtion

//Annonymous:
//1.Print odd numbers in an array
var result = [];
var A= function(arr){
for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
}
return result;
}
console.log(A([1,2,3,4,5,6,7,8,9,10]));
//------------------------------------------------------------
//2.Sum of all numbers in an array
var sum1 = 0;
var a = function(num1) {
  for (var i = 0; i < num1.length; i++) {
    sum1 = sum1 + num1[i];
  }
  return sum1;
}
console.log(a([1, 2, 3, 4, 5]));
//----------------------------------------------------------------
//3.Convert all the strings to title caps in a string array
var String=[];
var a2=function(str){
    str=str.toLowerCase().split("");
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        String.push(str[i]);
    }
    return String.join(" ");
}
console.log(a2("guvi geeks"));
//---------------------------------------------------------
//4,Return all the prime numbers in an array
var a3 = function(numbers) {
    function isPrime(num) {
        if (num<=1) return false;
        if (num<=3) return true;
        if (num%2===0 || num%3===0) return false;
        for (var i=5;i*i<=num; i+=6) {
            if (num%i===0 || num % (i+2)===0) return false;
        }
    return true;
    }

    return numbers.filter(function(num) {
        return isPrime(num);
    });
}

var inputArray = [2, 3, 4, 5, 6, 7, 8, 9];
var primeNumbers = a3(inputArray);
console.log(primeNumbers);
//-----------------------------------------------------------
//5,Return all the palindromes in an array
// var palindrome;
// var a4=function(isPalindrome){
//     var len=isPalindrome.length;
//     for(var i=0;i<len/2;i++){
//         if(isPalindrome[i] === isPalindrome(len-1-i)){
//             palindrome.push(isPalindrome[i]);
//         }

//     }
//     return palindrome;
// }
// console.log(a4(["aya","bets","pup"]));
//-------------------------------------------------------------
//6.Remove duplicates from an array
var a5=function (removeDuplicates){
    let unique=[];
    for(var i=0;i<removeDuplicates.length;i++){
        if(unique.indexOf(removeDuplicates[i]===-1)){
            unique.push(removeDuplicates[i]);
        }
    }
    return unique;
}
console.log(a5(["mango","mango","apple","orange","apple"]));


//*****************************************************************

//IIFE:
//({})([])
//1.Print odd numbers in an array
var result1 = [];
(function (arr1){
for(var i=0;i<arr1.length;i++){
    if(arr1[i]%2!==0){
        result1.push(arr1[i]);
    }
}
console.log(result1);
})([1,2,3,4,5,6,7,8,9,10])
//---------------------------------------------------
//2.Sum of all numbers in an array
var sum2 = 0;
(function (num2) {
  for (var i = 0; i < num2.length; i++) {
    sum2 = sum2 + num2[i];
  }
  return sum2;
})([1, 2, 3, 4, 5]);
console.log(sum2);
//---------------------------------------------------
//3.Convert all the strings to title caps in a string array
var a21 = (function(str1) {
    var stringArray=[];
    str1=str1.toLowerCase().split(" ");
    for (var i=0; i<str1.length; i++) {
        str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
        stringArray.push(str1[i]);
    }
    return stringArray.join(" ");
})("guvi geeks");
console.log(a21);
//*******************************************************************

//Arrow Function
//1.Print odd numbers in an array
//var variablename=()=>{}variablename()
var result2 =[];
var odd=(arr2)=>{
    for(var i=0;i<arr2.length;i++){
        if(arr2[i]%2!==0){
            result2.push(arr2[i]);
        }
    }
    return result2;
    }
    console.log(odd([1,2,3,4,5,6,7,8,9,10]));
//----------------------------------------------------
//2.Sum of all numbers in an array
var sum3 = 0;
var sumofarray = (num3)=>{
  for(var i=0;i<num3.length;i++){
    sum3 = sum3 + num3[i];
  }
  return sum3;
}
console.log(sumofarray([1,2,3,4,5]));
//------------------------------------------------------
////3.Convert all the strings to title caps in a string array
var a22 = ((str1) => {
    var stringArray = [];
    str1=str1.toLowerCase().split(" ");
    for (var i=0;i<str1.length;i++) {
        str1[i] = str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
        stringArray.push(str1[i]);
    }
    return stringArray.join(" ");
})("guvi geeks");
console.log(a22);
//---------------------------------------------------------------------