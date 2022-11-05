import { useState, useEffect } from "react";
import Card from "./Components/Card";
import uniqid from "uniqid";
import Shapes from "./Shapes";

function App() {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [cards, setCards] = useState([]);
  let [clickedCards, setClickedCards] = useState([]);

  let populateCards = function () {
    let newCards = [];
    let clonedShapes = [...Shapes];
    for (let i = 1; i < 13; i++) {
      let shapeIndex = Math.floor(Math.random() * clonedShapes.length);
      newCards.push({ id: i, bg: clonedShapes[shapeIndex] });
      clonedShapes.splice(shapeIndex, 1);
    }
    setCards(newCards);
  };

  let isCardClicked = (id) => {
    return clickedCards.some((clickedCard) => {
      return clickedCard.id === id;
    });
  };

  if (!cards.length) populateCards();

  let mapCards = function () {
    return cards.map((card) => {
      return <Card obj={card} clickFunc={handleCardClick} key={uniqid()} />;
    });
  };

  let increaseScore = () => {
    setScore(score + 1);
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
  };

  let reset = () => {
    setScore(0);
    setClickedCards([]);
  };

  let handleCardClick = (card) => {
    if (isCardClicked(card.id)) reset();
    else {
      increaseScore();
      setClickedCards(clickedCards.concat(card));
    }
  };

  useEffect(() => {
    let newCards = [];
    let clonedCards = [...cards];
    while (clonedCards.length) {
      newCards.push(
        clonedCards.splice(Math.floor(Math.random() * clonedCards.length), 1)[0]
      );
    }
    setCards(newCards);
  }, [clickedCards]);

  return (
    <div className="App">
      <div className="scoreBoard">
        <h2 className="score">Score: {score}</h2>
        <h2 className="bestScore">Best score: {bestScore}</h2>
      </div>

      <div className="cards">{mapCards()}</div>
    </div>
  );
}

export default App;
