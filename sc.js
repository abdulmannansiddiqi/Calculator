let buttons = document.querySelectorAll("button")
let inp = document.querySelector("#displaybox")
let string = ""

for (const button of buttons) {
    button.addEventListener("click", (e) => {
        if ( e.target.innerHTML == "AC") {
            string = ""
            inp.value = string
        }
        else if ( e.target.innerHTML == "DEL") {
            string = string.substring(0,string.length - 1)
            inp.value = string
        }
        else if ( e.target.innerHTML == "=") {
            string = eval(string)
            inp.value = string
        }
        else{
            string = string + e.target.innerHTML
            inp.value = string
        }
    })
}