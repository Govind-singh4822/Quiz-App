import React, { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";
import Image from "./component/image";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);



  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
      
      
    }

    if (currentQuestion + 1 < Question.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };



  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };



  return (

    <div className="App">
   
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <p>Final Results</p>
          <p>
            {score} out of {Question.length} correct - (
            {(score / Question.length) * 100}%)
          </p>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          <header>
            <p><b>Quiz Application</b></p>
               <Timer />
          </header>
         <ul></ul>
          {/* Current Question  */}
          <h3 className="question-text">{Question[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {Question[currentQuestion].options.map((option) => {
              return (
                <li 
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        
          <div className="score">
             {currentQuestion + 1} of {Question.length} Questions
          </div>
        </div>
      )}
    </div>
  );
}

export default App;