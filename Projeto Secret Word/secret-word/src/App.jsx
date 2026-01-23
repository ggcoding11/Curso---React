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
  const guessesQty = 3;

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
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

    wordLetters = wordLetters.map((letra) => {
      switch (letra) {
        case "é":
        case "ê":
          letra = "e";
          break;

        case "ã":
        case "á":
        case "â":
          letra = "a";
          break;

        case "í":
          letra = "i";
          break;

        case "ó":
        case "ô":
        case "õ":
          letra = "o";
          break;

        case "ú":
          letra = "u";
          break;

        case "ç":
          letra = "c";
          break;

        default:
          letra = letra;
      }

      return letra;
    });

    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      !guessedLetters.includes(normalizedLetter) &&
      !wrongLetters.includes(normalizedLetter)
    ) {
      if (letters.includes(normalizedLetter)) {
        setGuessedLetters([...guessedLetters, normalizedLetter]);
      } else {
        setWrongLetters([...wrongLetters, normalizedLetter]);
        setGuesses((guesses) => guesses - 1);
      }
    } else {
      alert("Já foi testada!");
    }
  };

  useEffect(() => {
    if (guesses === 0) {
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  const retry = () => {
    setGameStage(stages[0].name);
    setGuesses(guessesQty);
    setScore(0);
    setGuessedLetters([]);
    setWrongLetters([]);

    startGame();
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
          setGuessedLetters={setGuessedLetters}
          wrongLetters={wrongLetters}
          setWrongLetters={setWrongLetters}
          guesses={guesses}
          score={score}
          setScore={setScore}
          retry={retry}
        ></Game>
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score}></GameOver>}
    </div>
  );
};

export default App;
