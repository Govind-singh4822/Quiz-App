import React from "react";

function Instruction(){
    return (
        
        <div className="info-list">
            <h1 className="info-title"><span>Some Rules of this Quiz</span></h1>
            <p className="info">1. You will have only 2 min to solve question.</p>
            <p className="info">2. Once you select your answer, it can't be undone.</p>
            <p className="info">3. You can't select any option once time goes off.</p>
            <p className="info">4. You can't exit from the Quiz while you're playing.</p>
            <p className="info">5. You'll get points on the basis of your correct answers.</p>
        </div>

    );
}
export default Instruction