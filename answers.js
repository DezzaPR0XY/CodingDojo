//Chapter 1 - Fundamentals pg.16
//Setting and Swapping
var myNumber = 42, myName = "Derek Whang";
var temp = myNumber, myNumber=myName, myName=temp;

//Print and Count
var list = [];
for(var i = 512; i <= 4096; i+=1){
    if(i%5 == 0){
        list.push(i);
    }
}
console.log("integers multiples of 5, from 512 to 4096",list);
console.log("how many multiples of 5, from 512 to 4096",list.length);

//Print -52 to 1066
for(var i = -52; i <= 1066; i+=1) console.log(i);

//Multiples of Six
var i = 0;
while(i <= 6000){
    if(i%6 ==0) console.log(i);
    i++;
    }

//Don't Worry, Be Happy
beCheerful(98);
function beCheerful(n){
    for(var i = 0; i < n; i+=1) console.log("good morning!");
}

//Counting, the Dojo Way
var a = "Coding", b = " Dojo";
for(var i = 1; i <= 100; i+=1){
    if(i%5 == 0){
        if(i%10 == 0) console.log(a+b);
        else console.log(a);
    }
    else console.log(i)
}

//Multiples of Three - but Not All
for(var i = -300; i <= 0; i+=1){
    if(i == -3 || i == -6) continue;
    else if(i%3 == 0) console.log(i);
}

//What Do You Know?
function printValue(incoming){
    console.log(incoming);
}

//Printing Integers with While
var i = 2000;
while(i <= 5280) console.log(i), i++;

//Whoa, That Sucker's Huge...
var sum = 0;
for(var i = -300000; i <= 300000; i+=1){
    if(Math.abs(i)%2 == 1) sum+=i;
}
console.log(sum);

var sum = 0;
var list = [];
for(var i = -300000; i<= 300000; i+=1){
    if(Math.abs(i)%2 == 1) list.push(i);
}
var sum = list.reduce((a,b)=>a+b);
console.log(sum);

//You Say It's Your Birthday
var bday = [4,21];
function checkBday(a,b){
    if(bday[0] != bday[1])
        if(bday.includes(a) && bday.includes(b)) console.log("How did you know?");
    if(bday[0] == bday[1]) {
        if(a == b && bday.includes(a)) console.log("How did you know?");
    else console.log("Just another day....");
}

//Countdown by Fours
var i = 2016;
while(i > 0){
    if(i%4 == 0) console.log(i);
    i-=1;
}

//Leap Year
var lyTrue = " is a Leap Year";
var lyFalse = " is not a Leap Year";
function leapYear(year){
    if(year%400 == 0) console.log(year+lyTrue);
    else if(year%100 == 0) console.log(year+lyFalse);
    else if(year%4 == 0) console.log(year+lyTrue);
    else console.log(year,lyFalse);
}

//Flexible Countdown
flexibleCountdown(2,9,3);
function flexibleCountdown(lowNum, highNum, mult){
    for(var i = highNum; i > lowNum; i-=1){
        if(i%mult == 0) console.log(i);
    }
}

//The Final Countdown
finalCountdown(3,5,17,9);
function finalCountdown(param1,param2,param3,param4){
    var i = param2;
    var increment = 0;
    if(param2 > param3){
        increment = -1;
        while(i >= param3){
            if(i%param1 == 0 && i != param4) console.log(i);
            i+= increment;
        }
    }
    else if(param2 < param3){
    increment = 1;
        while(i <= param3){
            if(i%param1 == 0 && i != param4) console.log(i);
            i+= increment;
        }
    }
}

//Chapter 1 - Fundamentals pg.16
//Countdown
// var i = 10;
var arr = [];
countdown(i);
function countdown(i){
    if(Number.isInteger(i)){
        while(i > 0){
            arr.push(i);
            i+= -1;
        }
    }
}
console.log(arr.length);

//Print and Return
var arr = ["first","second"];
pAndR(arr);
function pAndR(arr){
    console.log(arr[0]);
    return(arr[1]);
}

//First Plus Length
var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr[0]+arr.length);
/*
If the first value is a string,
it will concat the first value and length of array
and print it as a string
If the first value is a boolean,
it will print just the length of the array
*/

//Values Greater than Second
var arr = [1,3,5,7,9,13];
var count = 0;
for(var i = 0; i < arr.length; i+=1){
    if(arr[i] > arr[1]) console.log(arr[i]), count+=1;
}
console.log(count);

//Values Greater than Second, Generalized
var arr = ["chump",3,true,7,9,13];
greaterThanSecond(arr);
function greaterThanSecond(arr){
    if (Array.isArray(arr))
        var arrnew = [];
        var count = 0;
        if(arr.length > 1){
            for(var i = 0; i < arr.length; i+=1){
                if(arr[i] > arr[1]) arrnew.push(arr[i]), count+=1;
            }
            console.log(arrnew);
            console.log(count);
        }
        else console.log("Hey! This array has no second value.");
}

//This Length, That Value
lengthValue(2,2);
lengthValue(2,3);
function lengthValue(num1,num2){
    var arr = [];
    if(num1==num2) return("Jinx!");
    else{
        for(var i = 0; i < num1; i+=1){
            arr.push(num2);
        }
    }
    return(arr);
}

//Fit the First Value
// var arr = [10,9,8,7,6,5,4,3,2,1];
if(Array.isArray(arr)){
    fitFirstValue(arr);
}
function fitFirstValue(arr){
    if(arr[0] > arr.length) console.log("Too big!");
    else if(arr[0] < arr.length) console.log("Too small!");
    else console.log("Just right!");
}

//Fahrenheit to Celsius
// fahrenheitToCelsius(180);
function fahrenheitToCelsius(fDegrees){
    var celsius = (5*(fDegrees - 32))/9;
    return(celsius);
}

//Celsius to Fahrenheit
// celsiusToFahrenheit(0);
function celsiusToFahrenheit(cDegrees){
    var fahrenheit = (9/5 * cDegrees) + 32;
    return(fahrenheit);
}

//optional
tempMeet(200);
function tempMeet(t){
    for(var i = t; i >= -500; i-=1){
        if(fahrenheitToCelsius(i) == celsiusToFahrenheit(i)){
            return(i);
        }
    }
}

//Chapter 1 - Fundamentals pg22
//Biggie Size
makeItBig([-1,3,5,-5]);
function makeItBig(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>0){
            arr[i] = "big";
        }
    }
    return(arr);
    return(arr[-1]);
}

//Previous Lengths
// prevLen(["Coding","Dojo","Boot","Camp"]);
function prevLen(arr){
    for(var i = 0; i < arr.length; i++){
        var prev;
        if(i == 0){
            prev = arr[i];
            arr[i] = 0;
        }
        else {
            var temp = arr[i];
            arr[i] = prev.length;
            prev = temp;
        }
    }
    return(arr);
}

//Print Low, Return High
// var arr = [0,1,2,3,4,5];
// lowHigh(arr);
function lowHigh(arr){
    var low = Math.max(...arr);
    var high = Math.min(...arr);
    console.log(low);
    return(high);
}

//Add Seven to Most
// var arr = [0,1,2,3,4];
// addSevenToMost(arr);
function addSevenToMost(arr){
    var arrnew = []
    for(i = 1; i < arr.length; i++){
        arrnew.push(arr[i]+7);
    }
    return(arrnew);
}

//Print One, Return Another
// var arr = [0,2,3,6,7];
// printOneReturnAnother(arr);
function printOneReturnAnother(arr){
    console.log(arr[arr.length-1]);
    for(i = 0; i < arr.length; i++){
        if(arr[i]%2==1){
            return(arr[i]);
        }
    }
}

//Reverse Array
reverse([3,1,6,4,2]);
function reverse(arr){
    arr = arr.reverse();
    return(arr);
}

// reverse([3,1,6,4,2]);
// function reverse(arr){
//     var tempArr = [];
//     for(i = arr.length; i>=0; i--){
//         tempArr.push[arr[i]];
//     }
//     return(arr);
// }

// reverse([3,1,6,4,2]);
// function reverse(arr){
//     for(i = 0; i <Math.ceil(arr.lenth/2); i++){
//         var temp = arr[arr.length-i];
//         arr[arr.length-i] = arr[i];
//         arr[i] = temp;
//     }
//     console.log(arr);
// }

//Double Vision
double([1,2,3]);
function double(arr){
    var arrnew = [];
    for(i = 0; i < arr.length; i++){
        arrnew.push(arr[i]*2);
    }
    return(arrnew);
}

//Outlook: Negative
outlook([1,-3,5]);
function outlook(arr){
    var arrnew = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i]>0) arrnew.push(arr[i]*-1);
        else arrnew.push(arr[i]);
    }
    return(arrnew);
}

//Count Positives
countPositives([-1,1,1,1]);
function countPositives(arr){
    var sum = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i]>0) sum += 1;
    }
    arr[arr.length-1] = sum;
    return(arr);
}

//Always Hungry
// alwaysHungry(["food","chicken","sandwich","food"]);
// alwaysHungry(["Coding","Dojo","Boot","Camp"]);
function alwaysHungry(arr){
    if(arr.includes("food")){
        for(i = 0; i < arr.length; i++){
            if(arr[i] == "food") console.log("yummy");
        }
    }
    else console.log("I'm hungry")
}

//Evens and Odds
// evensAndOdds([1,3,5]);
// evensAndOdds([2,4,6]);
// evensAndOdds([2,3,5,4,6,8,1,3,3,7,5,6,8,6,8,6,8])
function evensAndOdds(arr){
    var numType = "";
    var count = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i]%2 == 1){
            if(numType = "odd") count++;
            else numType = "odd", count = 1;
            if(count == 3){
                console.log("That's odd!");
                numType = "";
                count = 0;
            }
        }
        if(arr[i]%2 == 0){
            if(numType = "even") count++;
            else numType = "even", count = 1;
            if(count == 3){
                console.log("Even more so!");
                numType = "";
                count = 0;
            }
        }
    }
}

//Swap Towards the Center
// swapTowardsTheCenter([1,2,3,4,5,6]);
// function swapTowardsTheCenter(arr){
//     for(i=0;i < Math.ceil(arr.length/2); i++){
//         if(i%2==0){
//             var temp = arr[arr.length-i-1];
//             arr[arr.length-i-1] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }

var arr = [1,2,3,4,5,6];
for(i=0;i < Math.ceil(arr.length/2); i++){
    if(i%2==0){
        var temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = temp;
    }
}

//Increment the Seconds
// incTheSec([1,2,3,4,5])
function incTheSec(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i]%2 == 1){
            arr[i] = arr[i]+1;
        }
        console.log(arr[i]);
    }
    return(arr);
}

//Scale the Array
// scaleTheArray([1,2,3,4,5],2)
function scaleTheArray(arr,num){
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i]*num;
    }
    return(arr);
}
