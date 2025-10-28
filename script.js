var vegetables = ["Carrot", "Broccoli", "Onion", "Potato"]
console.log(vegetables[0])

console.log(vegetables.join("; "))
console.log(vegetables.pop())
console.log(vegetables)

vegetables.push("Spinach")
console.log(vegetables)

function add(a,b) {
    return a+b;
}
function average(a,b) {
    return add(a,b)/2;
}
let result = average(97,47)