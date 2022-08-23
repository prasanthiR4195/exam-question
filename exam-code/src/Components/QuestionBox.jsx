import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./QuestionBox.css";

const QuestionBox = ({ currentQues, setcurrentQues, questions }) => {
  const [selected, setSelected] = useState([]); 
  const navigate = useNavigate();
  const [date,setDate] =useState("")
  const [text,setText]=useState("")
  const [check,setCheck] = useState("") 

 

  const handleNext = () => {                      //handler to go to next question/page
    if (currentQues > 5 || check ) {
      navigate("/result");
      console.log(selected,date,text,check)
   
    } else if (selected  || date || text ) {
      setcurrentQues(currentQues + 1);
      console.log(currentQues + 1);
    }   
  };
  const handlePrev = () => {                     //handler to go to previous question/page
    if (currentQues === 0) {
      navigate("/");
    } else {
      setcurrentQues(currentQues - 1);
    }
  };

  const radioHandler = (e) =>{
     setSelected([...selected, e.target.value])
     
  }

  const arraydata = [...selected]
  arraydata.push(date,text,check)
 
  localStorage.setItem('result', JSON.stringify(arraydata));


 
  const newArr= [];
  newArr.push(questions.questions[currentQues])

  const questionItem =  newArr.map((item,index)=>{
    if(item.questiontype ==='Textarea' ){
      return ( 
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
      )
    }else if(item.questiontype ==='Date'  ){
      return ( 
        <input type="date" onChange={(e)=>setDate(e.target.value)} />
      )
      
    }else if(item.questiontype === 'Radio' ){
      return ( 
        questions.questions[currentQues].questionoption.map((option, index) => {
          return (
            <div className="options" onChange={radioHandler} key={index} checked={selected === option.optionvalue}>
              <input type="radio" id={option.optionid} name="optionname" value={option.optionvalue} />{" "}
              <label>{option.optionvalue}</label>
            </div>
          );
        })
      )
    }else if(item.questiontype ==='Checkbox'  ){
      return ( 
        questions.questions[currentQues].questionoption.map((option, index) => {
          return (
            <div className="options" onChange={()=>setCheck(option.optionvalue)} key={index}>
              <input type="checkbox" id={option.optionid} name="optionname" />{" "}
              <label>{option.optionvalue}</label>
            </div>
          );
        })
      )
    }
  })
  

  return (
    <div>
      <h3>Question {currentQues + 1}</h3>
      <h4>{questions.questions[currentQues].question}</h4>
      {questionItem}
     
      <div className="prev_nex_btn">
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default QuestionBox;
