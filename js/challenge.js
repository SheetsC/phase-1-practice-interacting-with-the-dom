const timer = document.querySelector('#counter')
const addition = document.querySelector('#plus')
const subtract = document.querySelector('#minus')
addition.addEventListener('click', () => { 
    timer.textContent = parseInt(timer.textContent)+1
})

subtract.addEventListener('click', () => { 
    timer.textContent = Math.abs(parseInt(timer.textContent)-1)
    for( i=0; i>0; i++) {
        return i;
    }
})







