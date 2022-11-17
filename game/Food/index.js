import { gameBoard, generateRandomBoardPosition } from "../Board/index.js";
import { collision as snakeCollision, expandSnake } from "../Snake/index.js";

const EXPANSION_RATE = 1;

let foodPosition = generateRandonPosition();

export function update() {
  if (snakeCollision(foodPosition)) {
    expandSnake(EXPANSION_RATE);
    foodPosition = generateRandonPosition();
  }
}

export function draw() {
  const foodElement = document.createElement("div");
  //config css
  foodElement.classList.add("food");
  //position
  foodElement.style.gridRowStart = foodPosition.y;
  foodElement.style.gridColumnStart = foodPosition.x;
  //append on DOM
  gameBoard.appendChild(foodElement);
}
function generateRandonPosition() {
  let newFoodPosition;
  while (newFoodPosition === undefined || snakeCollision(newFoodPosition)) {
    newFoodPosition = generateRandomBoardPosition();
  }
  return newFoodPosition;
}
