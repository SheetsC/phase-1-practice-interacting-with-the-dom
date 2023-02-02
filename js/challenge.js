const timer = document.querySelector('#counter')
const addition = document.querySelector('#plus')
const subtract = document.querySelector('#minus')
const like = document.querySelector('#heart')
let likeClicks = 0
const commentForm = document.querySelector('#comment-form')
const pauseBtn = document.querySelector('#pause')

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

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const comments = document.createElement('p')
    const commentList = document.querySelector('#list')
    commentList.append(comments)
    comments.textContent = e.target.comment.value
})

pauseBtn.addEventListener('click', () => {
    if(pauseBtn.textContent == "pause") {
        pauseBtn.textContent = "resume"
        addition.disabled = true;
        subtract.disabled = true;
        like.disabled = true;
        document.querySelector('#submit').disabled = true;
    }
    else {
        pauseBtn.textContent = "pause"
        addition.disabled = false;
        subtract.disabled = false;
        like.disabled = false;
        document.querySelector('#submit').disabled = false;
    }
})

setInterval(timerUp, 1000)

function timerUp() {
    if(pauseBtn.textContent == "resume") {
        timer.textContent = timer.textContent
    }
    else {
        timer.textContent = parseInt(timer.textContent)+1
    } 
}
