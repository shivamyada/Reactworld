import React from "react";

function QuizResult(props){
    return(
<div>
    your score:{props.score} <br/>
    total score:{props.totalScore}
</div>
    )
}
export default QuizResult