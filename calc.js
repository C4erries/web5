const productsMap = {"cappuccino": 150, "espresso": 110, "latte": 180};

window.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantityInput");
    const productSelect = document.getElementById("productSelect");
    const button = document.getElementById("button-submit");
    const answerDiv = document.getElementById("answerDiv");
    button.addEventListener("click", function () {
        const quantity = quantityInput.value;
        if (/^[0-9]+$/.test(quantity)) {
            answerDiv.innerText =
            `Price: ${productsMap[productSelect.value] * quantity}`;
            answerDiv.classList.remove("text-[#FF0000]");
        } else {
            answerDiv.innerText = `Error: количество товаров должно
             содержать лишь цифры и быть больше нуля`;
            answerDiv.classList.add("text-[#FF0000]");
        }
    });
});
