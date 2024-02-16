import { useState } from "react";
import "./Flashcard.css";

const Flashcard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardNumber, setFlashcardNumber] = useState(0);
  const flashcards = [
    {
      question:
        "What are the critical marketing mix elements for start-ups during incubation?",
      answer:
        "The critical marketing mixes for start-ups are people, price, product, and place. Proper application of these elements is essential for business success.",
    },
    {
      question:
        "What is the importance of sensemaking and sensegiving in entrepreneurship?",
      answer:
        "Entrepreneurs must develop a vision or mental model (sensemaking) and communicate it effectively to gain support (sensegiving), especially in uncertain business environments.",
    },
    {
      question:
        "What distinguishes entrepreneurial businesses from traditional businesses?",
      answer:
        "Entrepreneurial businesses often operate in unsettled industries or segments, requiring adaptation to uncertainties and a focus on innovative strategies.",
    },
    {
      question:
        "How does self-efficacy and risk-taking influence startup business success?",
      answer:
        "Self-efficacy and risk-taking propensity are key non-financial factors influencing the success of startup businesses.",
    },
    {
      question:
        "What role does environmental contact play in the success of small businesses?",
      answer:
        "Effective environmental contact, including networking and strategic relationships, is crucial for the financial performance and growth of small businesses.",
    },
    {
      question:
        "What are the essential steps for transitioning from a startup to a scalable enterprise?",
      answer:
        "Essential steps include refining the business concept, establishing a foundation for growth, and focusing on sustainable, profitable growth strategies.",
    },
    {
      question:
        "What factors influence the business development process in start-up companies?",
      answer:
        "Factors like industry experience, customer interaction, and dependency on external parties play a significant role in the business development process of start-ups.",
    },
    {
      question:
        "How do personal traits of entrepreneurs impact business creation and success?",
      answer:
        "Traits such as need for achievement, self-efficacy, innovativeness, and stress tolerance significantly correlate with entrepreneurial behavior and success.",
    },
    {
      question: "Why is a business model important for a successful business?",
      answer:
        "A business model is crucial as it explains how the different parts of a business fit together and complements the competitive strategy for sustainable success.",
    },
    {
      question:
        "What factors are critical in the pre-startup phase for business success?",
      answer:
        "Factors like market risk perception and the entrepreneur's characteristics, including ambition and experience, are critical in determining success in the pre-startup phase.",
    },
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setFlashcardNumber((flashcardNumber + 1) % flashcards.length);
    setIsFlipped(false);
    const guessTextBox = document.querySelector(".guessTextBox");
    if (guessTextBox.classList.contains("incorrectGuess")) {
      guessTextBox.classList.remove("incorrectGuess");
    } else if (guessTextBox.classList.contains("correctGuess")) {
      guessTextBox.classList.remove("correctGuess");
    }
  };

  const handlePrev = () => {
    setFlashcardNumber((flashcardNumber - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
    const guessTextBox = document.querySelector(".guessTextBox");
    if (guessTextBox.classList.contains("incorrectGuess")) {
      guessTextBox.classList.remove("incorrectGuess");
    } else if (guessTextBox.classList.contains("correctGuess")) {
      guessTextBox.classList.remove("correctGuess");
    }
  };

  const handleShuffle = () => {
    setFlashcardNumber(Math.floor(Math.random() * flashcards.length));
    setIsFlipped(false);
    const guessTextBox = document.querySelector(".guessTextBox");
    if (guessTextBox.classList.contains("incorrectGuess")) {
      guessTextBox.classList.remove("incorrectGuess");
    }
    if (guessTextBox.classList.contains("correctGuess")) {
      guessTextBox.classList.remove("correctGuess");
    }
  };

  const handleGuess = () => {
    const guessTextBox = document.querySelector(".guessTextBox");
    const guess = guessTextBox.value;
    const answer = flashcards[flashcardNumber].answer;

    if (isFlipped) {
      return; // Do not allow submission if the back of the flashcard is showing
    }

    if (guessTextBox.classList.contains("incorrectGuess")) {
      guessTextBox.classList.remove("incorrectGuess");
    } else if (guessTextBox.classList.contains("correctGuess")) {
      guessTextBox.classList.remove("correctGuess");
    }
    if (
      guess === "" ||
      guess === " " ||
      guess === null ||
      guess === undefined
    ) {
      alert("Please enter a guess!");
      return;
    }
    if (answer.toLowerCase().includes(guess.toLowerCase())) {
      guessTextBox.classList.add("correctGuess");
    } else {
      guessTextBox.classList.add("incorrectGuess");
    }
  };

  return (
    <>
      <div className="flashcard-container">
        <div className={`flashcard`}>
          <div
            className={`card ${isFlipped ? "flipped" : ""}`}
            onClick={handleFlip}
          >
            <div className="front">{flashcards[flashcardNumber].question}</div>
            <div className="back">{flashcards[flashcardNumber].answer}</div>
          </div>
        </div>
      </div>
      <div className="userGuess">
        <input
          className="guessTextBox"
          type="text"
          placeholder="Enter your guess"
          onChange={(e) => {
            if (e.target.value === "") {
              if (e.target.classList.contains("incorrectGuess")) {
                e.target.classList.remove("incorrectGuess");
              }
              if (e.target.classList.contains("correctGuess")) {
                e.target.classList.remove("correctGuess");
              }
            }
          }}
        />
        <button className="guessBtn" onClick={handleGuess}>
          Submit
        </button>
        <button className="shuffleBtn" onClick={handleShuffle}>
          Shuffle Cards
        </button>
      </div>
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Flashcard;
