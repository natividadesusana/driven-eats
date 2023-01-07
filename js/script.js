function selectedFirst(selectedOption) {
    const select = document.querySelector('.foods .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}

function selectedSecond(selectedOption) {
    const select = document.querySelector('.drinks .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}

function selectedThird(selectedOption) {
    const select = document.querySelector('.desserts .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}

function finalize(finishing) {
    const button = document.querySelector('.finalize-order');
    if (button !== null) {
        button.innerHTML = 'Fechar pedido';
        button.classList.remove('selected-button');
    }
    finishing.classList.add('selected-button');
}

// let foods;
// let drinks;
// let dessert;

// function testando() {
//     if (selectedFirst() !== undefined) {
//         console.log("jogo foi selecionado");
//     }
//         if (selectedSecond() !== undefined) {
//             console.log("jogo foi selecionado");
//         }
//             if (selectedThird() !== undefined) {
//                 console.log("jogo foi selecionado");
//                 const botaoFinalizar = document.querySelector('.finalize-order');
//                 botaoFinalizar.classList.add('selected-button');
//             }
// }

