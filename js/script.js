function selectedFirst(selectedOption) {
    const select = document.querySelector('.teste1 .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}

function selectedSecond(selectedOption) {
    const select = document.querySelector('.teste2 .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}

function selectedThird(selectedOption) {
    const select = document.querySelector('.teste3 .selecting');
    if (select !== null) {
        select.classList.remove('selecting');
    }
    selectedOption.classList.toggle('selecting');
}