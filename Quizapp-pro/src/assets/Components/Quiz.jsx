import React, { useState } from "react";
import { QuizData } from "../../data/Quizdata";
import QuizResult from "./QuizResult";
function Quiz(){
    const [currentquestion, setCurrentquestion]=useState(0);
    const [score ,setScore]=useState(0);
    const [clickedoption,setClickedoption]=useState(0);
    const[showResult,setShowResult]=useState(false)
    
    
    const changequestion=() =>{
        updateScore();
        
        if(currentquestion < QuizData.length-1){
        setCurrentquestion(currentquestion+1);
        setClickedoption(0)
        }else{
            setShowResult(true)

        }
    }
    const updateScore=()=>{
        if(clickedoption===QuizData[currentquestion].answer){
            setScore(score+1)
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentquestion(0);
        setClickedoption(0);
        setScore(0);
    }

    return(
        <div>
          <p className="heading-txt">TODO APP</p>
          <div className="container">
          {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
                <>
                   <div className="question">
                  <span id="question-number">{currentquestion+1}.</span>
                  <span id="question-text">{QuizData[currentquestion+1].question}</span>
            </div>
            <div className="option-container">
             {QuizData[currentquestion].options.map((option,i)=>{
                return(
                    <button 
                     // className="option-btn"
                     className={`option-btn ${
                        clickedoption == i+1?"checked":null
                    }`}
                    key={i}
                    onClick={()=>setClickedoption(i+1)}
                    >
                    {option}
                    </button>
                )
             })}

           
        </div>
        <input type="button" value="Next" id="next-button"
           onClick={changequestion}
           />
           </>)}
     </div>




    </div>
    )
}

export default Quiz