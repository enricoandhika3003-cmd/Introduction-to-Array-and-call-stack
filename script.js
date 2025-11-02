var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
console.log(colors[0])

console.log(colors.join("; "))
console.log(colors.pop())

colors.push("Black")

function add(a,b) {
    return a+b;
}
function average(a,b) {
    return add(a,b)/2;
}
let result = average(97,47)