function nice(name) {
    console.log("hey "+name + " you are nice!")
    console.log("hey "+name + " you are nice!")
    console.log("hey "+name + " your pant is so good!")
    console.log("hey "+name + " whare are you from!")
    console.log("hey "+name + " you are  ugly!")
}
function sum(a, b , c=3){
    // console.log(a+b)
    console.log(a , b, c)
    return a + b + c;
}
//result1 = sum(3) //the sum of these numbers is: NaN
result1 = sum(3,5)
result2=sum(9, 25)
result3=sum(1, 76 , 1)
 
 console.log("the sum of these numbers is:",result1)
 console.log("the sum of these numbers is:",result2)
 console.log("the sum of these numbers is:",result3)

// nice("Rohan")

// nice("Shivam")

// console.log("hey Akash you are good")
// console.log("hey Akash you are nice")
// console.log("hey Akash your pant is so good")
// console.log("hey Akash whare are you from")
// console.log("hey Akash ugly")
