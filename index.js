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
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
}

// At the top of your JS file, select the HTML element with the message id using querySelector. Save it to a variable called message. Right now, it’s just an empty aside element. In the next steps, we’ll assign its textContent to send users different notifications.

// In the deleteMovie function, add a line that assigns the textContent of message to be a string that says something like ‘Movie deleted!’ - You should now see this message pop up when you delete a movie. Test it out!

// In the crossOffMovie function, we’re going to do something similar, but we want to have different messages based off of whether the movie was just checked off as ‘watched’ or if it was added back to the list. So let’s start by creating the structure for an if/else block. Put it below where you toggled the checked class in the crossOffMovie function.

// The condition of your if statement should check if it’s true that the event.target.classList contains the checked class. - contains is a built-in method that can be used on classList, the structure for doing so is event.target.classList.contains(‘some-class-name’)

// If it’s true, then change message’s textContent to be a string that says something like ‘Movie watched!’

// Else, change message’s textContent to be a string that says something like ‘Movie added back!’

// Test it all out!