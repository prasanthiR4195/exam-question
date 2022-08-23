import React from "react";
import {  useState } from "react";
import "./Question.css";
import questions from "../question.json"; 
import Card from "../UI/Card";
import QuestionBox from "./QuestionBox";

const Question = ({}) => {
  const [currentQues, setcurrentQues] = useState(0);   //set the currest question initially 1st question
  
  return (
    <>
      <Card>
        {questions ?
        <QuestionBox setcurrentQues={setcurrentQues}
        currentQues={currentQues}
        questions={questions}
        />
      
      : ""}
      </Card>
    </>
  );
};

export default Question;
