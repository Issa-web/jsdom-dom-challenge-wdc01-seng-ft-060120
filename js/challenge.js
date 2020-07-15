document.addEventListener("DOMContentLoaded", function(){
    let timer = document.getElementById("counter")
    let myTimer = setInterval(function(){
        timer.innerHTML++ 
    },1000)
    
    let plusButton = document.getElementById("plus")
    plusButton.addEventListener('click', function(){
        timer.innerHTML++ 
    })

    let minusButton = document.getElementById("minus")
    minusButton.addEventListener('click', function(){
        timer.innerHTML--
    })

    let likesList = document.querySelector(".likes")
    let likesButton = document.getElementById('heart')
    likesButton.addEventListener('click', function(){
        
        let newLike = document.createElement('li')
        newLike.id = `likes${timer.innerHTML}`
        newLike.innerText = `${timer.innerHTML} has been liked x times.`
        likesList.appendChild(newLike)
    })

});