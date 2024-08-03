let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso Primeiro vetor é o ${num[0]}`)
console.log(`O vetor tem ${num.length} elementos`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
