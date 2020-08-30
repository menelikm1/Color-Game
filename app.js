var squares = document.querySelectorAll(".square");
var randomColor;
var colorArray = [];
var winningColorIndex;
var selected = document.querySelector("#selected");
var logger = document.querySelector("#logger");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var header = document.querySelector("h1");
var messageBar = document.querySelector("#messageBar");


randomize(6);
hard.classList.add("headerDisplay");

//randomize square colors and fill our array
function randomize(size) {
    colorArray = [];
    winningColorIndex = Math.floor(Math.random() * Math.floor(size));
    for (var i = 0; i < size; i++) {
        randomColor = "rgb(" + Math.floor(Math.random() * Math.floor(256)) + ", " + Math.floor(Math.random() * Math.floor(256)) + ", " + Math.floor(Math.random() * Math.floor(256)) + ")";
        colorArray.push(randomColor);
        squares[i].style.backgroundColor = randomColor;
    }
    //change the header rgb to the correct rgb
    selected.textContent = colorArray[winningColorIndex];
}

//check if clicked color equals the winning color
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
        if (colorArray[winningColorIndex] == this.style.backgroundColor) {
            logger.textContent = "Correct!";
            win();
        } else {
            logger.textContent = "Try again!";
            this.style.backgroundColor = "#232323";
        }
    })
}

//set the squares to the winning color
function win() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colorArray[winningColorIndex];
    }
    header.style.backgroundColor = colorArray[winningColorIndex];
    reset.textContent = "Play Again?";
}

//set game difficulty to easy
easy.addEventListener("click", function(){
    randomize(3);
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.backgroundColor = "#232323";
    }
    header.style.backgroundColor = "steelblue";
    hard.classList.remove("headerDisplay");
    easy.classList.add("headerDisplay");
    logger.textContent = '';
})

//set game difficulty to hard
hard.addEventListener("click", function(){
    randomize(6);
    header.style.backgroundColor = "steelblue";
    easy.classList.remove("headerDisplay");
    hard.classList.add("headerDisplay");
    logger.textContent = '';
})

//reset when "New Colors" is clicked
reset.addEventListener("click", function(){
    randomize(6);
    header.style.backgroundColor = "steelblue";
    easy.classList.remove("headerDisplay");
    hard.classList.remove("headerDisplay");
    logger.textContent = '';
    reset.textContent = "New Colors";
});