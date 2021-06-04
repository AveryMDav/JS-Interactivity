message = document.querySelector("#message")
document.querySelector("form").addEventListener("submit",addMovie);

function addMovie(event){
event.preventDefault()
let inputField = document.querySelector("input");

const movie = document.createElement("li");

const movieTitle = document.createElement("Span");
movieTitle.textContent = inputField.value;
movieTitle.addEventListener("click", crossOffMovie)
movie.appendChild(movieTitle)

deleteBtn = document.createElement('button')
deleteBtn.textContent = 'X'
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)

const movieList = document.querySelector('ul');
movieList.appendChild(movie);
inputField.value = '';
};

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie Obliterated'
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked") === true){
        message.textContent = event.target.textContent + ' consumed'
    } else {
        message.textContent = event.target.textContent + ' deconsumed'
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(() => {message.classList.add('hide')}, 1000)
}
