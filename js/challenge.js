const timer = document.querySelector('#counter')
const addition = document.querySelector('#plus')
const subtract = document.querySelector('#minus')
const like = document.querySelector('#heart')
let likeClicks = 0
addition.addEventListener('click', () => { 
    timer.textContent = parseInt(timer.textContent)+1
})

subtract.addEventListener('click', () => { 
    if(timer.textContent <= 0) {
        return 0
    }
    timer.textContent = Math.abs(parseInt(timer.textContent)-1)
})

like.addEventListener('click', () => {
    const likesList = document.querySelector('.likes')
    const li = document.createElement('li')
    likesList.append(li)
    li.textContent = `${timer.textContent} has been liked ${likeClicks+=1} times`
})









