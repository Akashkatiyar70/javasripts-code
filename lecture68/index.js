console.log("Akash")

// let bhupendrajogis =document.getElementsByClassName("box")
// console.groupCollapsed(bhupendrajogis)
// bhupendrajogis[2].style.backgroundColor="yellow"

// document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
})
 