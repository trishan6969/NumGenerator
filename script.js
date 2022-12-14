const generateBtn = document.querySelector(".input--btn")
const numberDiv = document.querySelector(".numbers--div")
const input = document.querySelector(".input--userChoice")

const generateBtnFunc = () => {
    numberDiv.innerHTML = ""
    input.classList.remove("error")
    const choice = input.value

    if (choice > 1000) {
        numberDiv.innerHTML =
            `
        <p class = "alert"> Please enter the value less than or equal to 1000. (1000 is our maximum capacity)</p>
        <p class = "alert"> You choosed ${choice - 1000} number higher than our maximum capacity </p>
        `
        input.classList.add("error")
    }

    else if (choice <= 0) {
        numberDiv.innerHTML =
            `
        <p class = "alert"> Please enter the value greater than 0. (1 is our minimum capacity)</p>
        <p class = "alert"> You choosed ${0 - choice} number lower than our minimum capacity </p>
        `
        input.classList.add("error")
    }

    else {
        document.querySelector(".input--userChoice").value = ""
        let arr = []

        for (let i = 1; i <= choice; i++) {
            arr.push(i)
        }

        arr.forEach((element) => {
            let numClass

            if (element % 2 == 0) {
                numClass = "green"
            }
            else {
                numClass = "yellow"
            }

            let iHtml = `
            <p class="number ${numClass}">${element}</p>
            `
            numberDiv.innerHTML += iHtml
        })
    }
}

generateBtn.addEventListener("click", generateBtnFunc)

