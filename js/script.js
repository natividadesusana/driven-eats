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
        button.classList.remove('selected-button');
    }
    finishing.classList.add('selected-button');
}

// function verificaOpcoesSelecionadas() {
//     if (teste1 !== null) {
//         console.log("jogo foi selecionado")
//     }
// }