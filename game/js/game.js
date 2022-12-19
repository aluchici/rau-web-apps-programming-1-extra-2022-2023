// 2 imagini
// afisam o imagine cu fata in sus, o imagine cu fata in jos ("acoperita")
// cand utilizatorul apasa pe butonul "Same"
// - verificam daca imaginea "acoperita" este aceeasi cu cea pe care o afisam 
// - daca sunt la fel, acordam 1 punct utilizatorului
// - daca nu sunt la fel, ii luam 1 punct utilizatorului
// cand utilizatorul apasa pe butonul "Different"
// - verificam daca imaginea "acoperita" este aceeasi cu cea pe care o afisam 
// - daca nu sunt la fel, acordam 1 punct utilizatorului
// - daca sunt la fel, ii luam 1 punct utilizatorului
// cand utilizatorul apasa pe butonul "Next"
// - generam o noua pereche de imagini la intamplare
// Utilizatorul incepe cu 10 puncte, daca ajunge la 0 => ii dam o alerta ca jocul s-a terminat

class Card {
    path;

    constructor(path) {
        this.path = path;
    }
}

class Game {
    numberOfImages;
    cards;

    suit = ["clubs", "hearts", "diamonds", "spades"];
    symbol = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "Q", "K", "A"];

    constructor(numberOfImages) {
        this.numberOfImages = numberOfImages;
        this.cards = [];
        this.generateImages();
    }

    generateImagePath(suit, symbol) {
        const path = `/Users/luchicla/Work/RAU/rau-web-apps-programming-1-extra-2022-2023/game/assets/card_${suit}_${symbol}.png`;
        return path;
    }

    generateSuit() {
        const suitIndex = Math.floor(Math.random() * (this.suit.length));
        return this.suit[suitIndex];
    }

    generateSymbol() {
        const symbolIndex = Math.floor(Math.random() * (this.symbol.length));
        return this.symbol[symbolIndex];
    }

    generateImages() {
        for (let i = 0; i < this.numberOfImages; i++) {
            const suit = this.generateSuit();
            const symbol = this.generateSymbol();
            const imagePath = this.generateImagePath(suit, symbol);
            const card = new Card(imagePath);
            this.cards.push(card);
        }
    }

    getCard() {
        const nCards = this.cards.length;
        if (nCards > 0) {
            const cardIndex = Math.floor(Math.random() * nCards);
            const card = this.cards[cardIndex];
            this.cards.splice(cardIndex, 1);
            this.numberOfImages = this.numberOfImages - 1;
            return card;
        } else {
            alert("Game over. No cards available.");
        }
    }

    pickSecondCard() {
        const isSameCard = Math.random();
        if (isSameCard > 0.5) {
            return true;
        } 
        return false;
    }

    getBackCard() {
        const imagePath = "/Users/luchicla/Work/RAU/rau-web-apps-programming-1-extra-2022-2023/game/assets/card_back.png";
        const card = new Card(imagePath);
        return card;
    }
}

// save game to session storage
// let game;
// game = sessionStorage.getItem("game");
// if (game) {
//     game = JSON.parse(game);
// } else {
//     game = new Game(30);
// }
const game = new Game(30);

const card = game.getCard();
const backCard = game.getBackCard();

const canvas = document.getElementById("viewport");
const ctx = canvas.getContext("2d");


function drawCardOnCanvas() {
    ctx.drawImage(image, 75, 50);
}

function drawBackCardOnCanvas() {
    ctx.drawImage(coveredImage, 150, 50);
}

const image = new Image();
image.src = card.path;
image.onload = drawCardOnCanvas;

const coveredImage = new Image();
coveredImage.src = backCard.path;
coveredImage.onload = drawBackCardOnCanvas;

function next() {
    function drawNewCardOnCanvas() {
        ctx.drawImage(image, 75, 50);
    }
    const card = game.getCard();
    const image = new Image();
    image.src = card.path;
    image.onload = drawNewCardOnCanvas;

    drawBackCardOnCanvas();
}

let POINTS = 10;
function changePoints(points) {
    const span = document.getElementById("points-span");
    span.innerText = points;
}
changePoints(POINTS);

function same() {
    const isSameCard = game.pickSecondCard();
    if (isSameCard) {
        POINTS = POINTS + 1;
    } else {
        POINTS = POINTS - 1;
    }
    
    changePoints(POINTS);
    next();
}

function different() {
    const isSameCard = game.pickSecondCard();
    if (!isSameCard) {
        POINTS = POINTS + 1;
    } else {
        POINTS = POINTS - 1;
    }
    
    changePoints(POINTS);
    next();
}

const url = "http://localhost:5001/api/v1/setup-game";
const params = {
    "method": "GET",
    "mode": "cors",
    "headers": {
        "Content-Type": "application/json"
    }
}

fetch(url, params).then(convertResponse).then(afterDataReceived).catch(ifError)

function convertResponse(response) {
    if (!response.ok) {
        throw Error("Failed to get data.");
    }
    return response.json();
}

function afterDataReceived(data) {
    POINTS = data["initial_score"];
    changePoints(POINTS);
}

function ifError(error) {
    alert(error.message);
}

function displaySuccessMessage(data) {
    alert("Game data saved successfully...");
}

function saveGameData() {
    const url = "http://localhost:5001/api/v1/save-game-data";
    const body = {
        "points": POINTS,
        "number_of_cards_left": game.cards.length
    }
    const params = {
        "method": "POST",
        "mode": "cors",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    }

    fetch(url, params).then(convertResponse).then(displaySuccessMessage).catch(ifError);

}