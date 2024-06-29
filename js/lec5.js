let a = "     Dua Malik    "
let b = "Ali "
let c = "Usman "

console.log(a.length)
console.log(a.toLowerCase())
console.log(a.toUpperCase())
console.log(a.slice(6,12))
console.log(a.concat(b, c))
console.log(b.replace("Ali","Usman"))
console.log(a.trimStart())
console.log(a.trimEnd())
console.log(a.trim())

let elem=['chair','door']

elem.splice(1,0,'laptop','mouse')

console.log(elem)
