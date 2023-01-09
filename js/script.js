function selectedFirst(selectedOption) {
    const select = document.querySelector('.foods .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    };
    selectedOption.classList.toggle('selecting');
};

function selectedSecond(selectedOption) {
    const select = document.querySelector('.drinks .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    };
    selectedOption.classList.toggle('selecting');
};

function selectedThird(selectedOption) {
    const select = document.querySelector('.desserts .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    };
    selectedOption.classList.toggle('selecting');
};

function finalizeOrder() {
    const foodSession = document.querySelector('.foods .selecting');
    const drinksSession = document.querySelector('.drinks .selecting');
    const dessertsSession = document.querySelector('.desserts .selecting');
    const finishButton = document.querySelector('.finalize-order');
    if (foodSession !== null && drinksSession !== null && dessertsSession !== null) {
        finishButton.innerHTML = 'Fechar pedido';
        finishButton.classList.add('selected-button');
        finishButton.disabled = false;
    };
};

function orderSubmission() {
    let name = prompt('📍 Informe seu nome:');
    let address = prompt('📍 Informe o endereço para entrega:');

    let nameFood = document.querySelector('.foods .selecting .tess').innerHTML;
    let nameDrink = document.querySelector('.drinks .selecting .tess').innerHTML;
    let nameDessert = document.querySelector('.desserts .selecting .tess').innerHTML;

    let priceFoodStr = document.querySelector('.foods .selecting div .price').innerHTML;
    let priceDrinkStr = document.querySelector('.drinks .selecting div .price').innerHTML;
    let priceDessertStr = document.querySelector('.desserts .selecting div .price').innerHTML;

    let priceFood = Number(priceFoodStr.replace('R$', '').replace(',', '.'));
    let priceDrink = Number(priceDrinkStr.replace('R$', '').replace(',', '.'));
    let priceDessert = Number(priceDessertStr.replace('R$', '').replace(',', '.'));

    let amount = (priceFood + priceDrink + priceDessert).toFixed(2).replace('.', ',');
    
    const mesage = `Olá, gostaria de fazer o pedido:\n - Prato: ${nameFood} \n - Bebida: ${nameDrink} \n - Sobremesa: ${nameDessert} \n Total: R$ ${amount} \n\n Nome: ${name} \n Endereço: ${address}`;
    const encode = encodeURIComponent(mesage);
    window.open(`https://wa.me/48000000000?text=${encode}`);
}

