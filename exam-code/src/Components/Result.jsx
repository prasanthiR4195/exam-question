import React from 'react'
import Button from '../UI/Button'
import './Result.css'

const Result = () => {
  const handleSubmit =(e)=>{
    e.preventDefault();
    alert("are you sure you want to submit")
  }
  var resultValue= localStorage.getItem('result');
  console.log(JSON.parse(resultValue),"resultValue");
  const finalData = JSON.parse(resultValue);

  return (
    <div className='Result_wrap'>
        <h1>Results</h1>
        <p>Selected answers</p>
      <div className='result_box'>
        <ul>
        {finalData.map((item,key)=>{ return  <li> {item}</li>   })}
        </ul>
      
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}

export default Result