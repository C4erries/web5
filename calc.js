const productsMap = {"cappuccino": {price: 150, milkly: true, syruply: false}, "espresso": {price: 110, milkly: false, syruply: false}, "latte": {price: 180, milkly: false, syruply: true}};
const syrupMap = {"saltCaramel": 20, "pumpkin": 30, "vanilla": 40, "banana": 50};
window.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantityInput");
    const radio = Array.from(document.getElementsByName("radio-type"));
    const syrupSelect = document.getElementById("syrupSelect");
    const milkBox = document.getElementById("milkBox")
    const answerDiv = document.getElementById("answerDiv");
    const render = (price, productState) => {
        if(productState) {
            switch (product) {
                case "espresso": {
                    syrupSelect.parentElement.style.display = "none";
                    milkBox.parentElement.style.display = "none";
                    break;
                }
                case "cappuccino": {
                    syrupSelect.parentElement.style.display = "none";
                    milkBox.parentElement.style.display = "flex";
                    break;
                }
                case "latte": {
                    syrupSelect.parentElement.style.display = "flex";
                    milkBox.parentElement.style.display = "none";
                    break;
                }
            }
        }
        if (isNaN(price)) {
            answerDiv.innerText = `Error: количество товаров должно
             содержать лишь цифры и быть больше нуля`;
            answerDiv.classList.add("text-[#FF0000]");

        } else {
            answerDiv.innerText =
                `Price: ${price}`;
            answerDiv.classList.remove("text-[#FF0000]");
        }
    }
    console.log(radio)
    const undVal = (el) =>{ return (el===undefined?undefined:el.value)}
    let product = undVal(radio.find(el => el.checked));
    let syrupPrice = 0;
    let milkPrice = 0;
    let quantity = quantityInput.value;
    const calc = () => {
        if(quantity === "")
            return 0;
        else if (/^[0-9]+$/.test(quantity)) {
            const prod = productsMap[product]
            return (prod.price + (prod.milkly?milkPrice:0) + (prod.syruply?syrupPrice:0) )* quantity;
        } else {
            return NaN;
        }
    };

    quantityInput.addEventListener("input", (event) => {
        quantity = event.target.value;
        render(calc(), false);
    })

    radio.forEach((el) => {el.addEventListener("change", (event) => {
        if(event.target.checked) {
            product = event.target.value;
            render(calc(), true);
        }
    })})

    milkBox.addEventListener("change", (event) => {

        if(event.target.checked) milkPrice = 5;
        else milkPrice = 0;
        console.log(milkPrice)
        render(calc(), false)
    })

    syrupSelect.addEventListener("change", (event) => {
        let sum = 0;
        Array.from(syrupSelect.selectedOptions).forEach((el) => sum += syrupMap[el.value]);
        syrupPrice = sum;
        render(calc(), false)
    })


});
