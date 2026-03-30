//board
let board;
const rowCount = 19;
const colCount = 21;
const boxSize = 32;
const boardHeight = (boxSize * rowCount);
const boardWidth = (boxSize * colCount);
let context ;

//images

let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

window.onload = function(){
    board = document.querySelector(".board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used to do drowing on board 

    loadImage()
}

function loadImage(){
    wallImage = new Image();
    wallImage.src = "images/wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "images/blueGhost.png";
    orangeGhostImage = new Image();
    orangeGhostImage.src = "images/orangeGhost.png";
    pinkGhostImage = new Image();
    pinkGhostImage.src = "images/pinkGhost.png";
    redGhostImage = new Image();
    redGhostImage.src = "images/redGhost.png";

    pacmanUpImage = new Image();
    pacmanUpImage.src = "images/pacmanUp.png";
    pacmanDownImage = new Image();
    pacmanDownImage.src = "images/pacmanDown.png";
    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "images/pacmanLeft.png";
    pacmanRightImage = new Image();
    pacmanRightImage.src = "images/pacmanRight.png";
}
