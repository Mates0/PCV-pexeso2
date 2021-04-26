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

let outerdiv = document.getElementById("outerdivid")
for (let i = 0; i < cards2.length; i++) {
    let div = document.createElement("div")
    div.id = "pexeso" + i
    div.innerHTML += "<h1>" + cards2[i] + "</h1>"
    div.innerHTML += "<h1 class='firstrow' id='hidden'>" + " " + "</h1>"
    outerdiv.appendChild(div)
}
document.body.appendChild(outerdiv)

for (let i = 0; i < cards2.length; i++) {
    let test = document.getElementById("hidden")
    test.id = i
}

let count = 0
for (let i = 0; i < cards2.length; i++) {
    document.getElementById(i).addEventListener("click", function () {
        document.getElementById(i).style.display = "none"
        count++
        console.log(count)
        if (count === 2) {
            count = 0
            setTimeout(timeout, 1000)
        }
    })
    function timeout() {
        for (let j = 0; j < cards2.length; j++) {
            document.getElementById(j).style.display = "block"
        }
    }
}
