let bill = document.querySelector("#bill").value;
let people = document.querySelector("#number-people").value;

let amount = document.querySelectorAll("#amount");

let tip = document.querySelector(".tip");
let total = document.querySelector(".total-tip")

for (let i = 0; i < amount.length; i++) {
    const button = amount[i];
    button.addEventListener("click", e => {
       if (button.className === "custom") {
           console.log("funcionou")
       }
    })
}