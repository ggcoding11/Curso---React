import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  setGuessedLetters,
  wrongLetters,
  setWrongLetters,
  guesses,
  score,
}) => {
  const [letterTry, setLetterTry] = useState("");

  const inputLetterRef = useRef(null);

  useEffect(() => {
    inputLetterRef.current.focus();
  }, []);

  const tentarLetra = () => {
    if (letters.includes(letterTry)) {
      setGuessedLetters([...guessedLetters, letterTry]);
    } else {
      setWrongLetters([...wrongLetters, letterTry]);
    }

    setLetterTry("");
  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>

      <h1>Advinhe a palavra:</h1>

      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>

      <p>Você ainda tem {guesses} tentativa(s)</p>

      <div className="wordContainer">
        {letters.map((letra, i) =>
          guessedLetters.includes(letra) ? (
            <span key={i} className="letter">
              {letra}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          ),
        )}
      </div>

      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            verifyLetter(letterTry);
            setLetterTry("");

            inputLetterRef.current.focus();
          }}
        >
          <input
            type="text"
            name="letter"
            maxLength={1}
            value={letterTry}
            onChange={(e) => setLetterTry(e.target.value)}
            ref={inputLetterRef}
            required
          />

          <button type="submit">Jogar</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>

        {wrongLetters.map((letra, i) => (
          <span key={i}>{letra}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
