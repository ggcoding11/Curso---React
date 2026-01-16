import React from "react";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { wordsList } from "./data/words";
import StartScreen from "../components/StartScreen";
import Game from "../components/Game";
import GameOver from "../components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickCategoryAndWord = () => {
    const category =
      Object.keys(wordsList)[
        Math.floor(Math.random() * Object.keys(wordsList).length)
      ];

    const categoryList = words[category];

    const word = categoryList[Math.floor(Math.random() * categoryList.length)];

    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickCategoryAndWord();

    let wordLetters = word.toLowerCase().split("");

    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && (
        <StartScreen startGame={startGame}></StartScreen>
      )}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        ></Game>
      )}
      {gameStage === "end" && <GameOver retry={retry}></GameOver>}
    </div>
  );
};

export default App;
