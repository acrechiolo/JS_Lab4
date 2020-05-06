// let vendingMachine = document.querySelector(".vending-machine");
// total = 0;
// vendingMachine.addEventListener("click", (event) => {
//     if (event.target.classList.contains("lime-cola")) {
//         total += 2;
//     } else if (event.target.classList.contains("salted-peanuts")) {
//         total += 3;
//     } else if (event.target.classList.contains("chocolate-bar")) {
//         total += 4;
//     } else if (event.target.classList.contains("fruit-gummies")) {
//         total += 6;
//     }
//     let amountDue = document.querySelector(".amount-due")
//     amountDue.innerText = `Total: $ ${total}.00`
// });

let vendingMachine = document.querySelector(".vending-machine");
let total = document.querySelector(".amount-due");
let currentTotal = 0;

vendingMachine.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"))
        currentTotal += amount;
        total.innerText = `Total: $${currentTotal.toFixed(2)}`
    }
})

// MAKE MONEY
const coinForm = document.querySelector(".money-form");
const coinPurse = document.querySelector(".coin-purse");
coinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(coinForm);
    let amount = data.get("amount");
    let coinCount = data.get("coin");
    for (let i = 0; i < amount; i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div")
        coinDiv.innerText = coinCount;
        coinPurse.append(coinDiv);

    }
    coinForm.reset();
});

coinPurse.addEventListener("click", (event) => {
    if (event.target.classList.contains("coin-div")) {
        event.target.remove();
    }
})

// LIGHT BULB
//need to mess around with toggle more, couldn't get it to work properly
let lightBulb = document.querySelector(".fa-lightbulb");
let bulbButtons = document.querySelector(".bulb-buttons");
bulbButtons.addEventListener("click", (e) => {
    if (e.target.classList.contains("on")) {
        lightBulb.classList.add("light-on");
    } else if (e.target.classList.contains("off")) {
        lightBulb.classList.remove("light-on");
    } else if (e.target.classList.contains("toggle")) {
        lightBulb.classList.toggle("light-on");
    } else if (e.target.classList.contains("end")) {
        lightBulb.remove()
        let buttons = document.querySelectorAll(".bulb");
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }
});

