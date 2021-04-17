let cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
let cards2 = []
for (let i = 0; i < cards.length; i++) {
    cards2[i] = cards[i]
}
for (let i = cards.length; i < cards.length * 2; i++) {
    cards2[i] = cards[i - 8]
}

for (let i = cards2.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = cards2[i]
    cards2[i] = cards2[j]
    cards2[j] = temp
}

let div = document.createElement("div")
for (let i = 0; i < cards2.length; i++) {
    div.innerHTML += "<h1>" + cards2[i] + "</h1>"
    document.body.appendChild(div)
}

