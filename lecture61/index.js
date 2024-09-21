let random = math.random()
console.log(random)
let a =  prompt("Enter first number")
let c =  prompt("Enter Operation")
let b =  prompt("Enter Second number")


// let a=prompt("Enter first number")
// let b=prompt("Enter Second number")
// let c=prompt("Enter Operation number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if (random> 0.1){
    //perform correct calculation
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else {
    //perform wrong calculation
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}