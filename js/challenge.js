document.addEventListener("DOMContentLoaded", function(){
    let timer = document.getElementById("counter")
    function runTimer(){ timer.innerHTML++ }
    let myTimer = setInterval(runTimer,1000)
    
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
        let existingLike = document.getElementById(`likes${timer.innerHTML}`)
        if(existingLike != null) {
            existingLike.dataset.number++
            existingLike.innerText = `${timer.innerHTML} has been liked ${existingLike.dataset.number} times.`
        } else {
            let newLike = document.createElement('li')
            newLike.id = `likes${timer.innerHTML}`
            newLike.dataset.number = 1
            newLike.innerText = `${timer.innerHTML} has been liked ${newLike.dataset.number} times.`
            likesList.appendChild(newLike)
        }
    });
    

    let commentButton = document.getElementById('submit');
    let pauseButton = document.getElementById("pause");
    pauseButton.addEventListener('click', function() {
        if(pauseButton.innerText == 'pause'){
        clearInterval(myTimer);
        pauseButton.innerText = "resume";
        plusButton.disabled = true;
        minusButton.disabled = true;
        likesButton.disabled = true;
        commentButton.disabled = true;
        } else if(pauseButton.innerText == 'resume'){
            myTimer = setInterval(runTimer, 1000);
            pauseButton.innerText = "pause";
            plusButton.disabled = false;
            minusButton.disabled = false;
            likesButton.disabled = false;
            commentButton.disabled = false;
        }
    });

    let commentList = document.getElementById('list');

    commentButton.addEventListener('click', function(e){
        e.preventDefault();
        let commentText = document.getElementById('comment-input');
        let postItem = document.createElement('li');
        postItem.innerText = commentText.value;
        commentList.appendChild(postItem);
    });





});