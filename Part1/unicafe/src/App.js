import React, { useState } from 'react';

const Button = ({handleClick, text}) => {
  return(
    <button onClick = {handleClick}> {text} </button>
  )
}
const StatisticLine = (props) => {
  return(
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{String(props.value)}</td>          
        </tr>
      </tbody>
    </table>
  )
}
const Statistics = (props) => {
  
  return(
    <div>
      <StatisticLine text={props.goodTx} value ={props.good} />
      <StatisticLine text={props.neutralTx} value ={props.neutral} />
      <StatisticLine text={props.badTx} value ={props.bad} />
      <StatisticLine text={props.allTx} value ={props.all} />
      <StatisticLine text={props.aveTx} value ={props.average} />
      <StatisticLine text={props.positiveTx} value ={props.positive} />
      
    </div>
  )
}

const App = () => {
  //save clicks of each buttons to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  const positive = good / all * 100

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)
  

  const handleBadClick = () => setBad(bad + 1)

  if(all === 0){
    return (
      <div >
        <h1>Give feedback</h1>
        <Button handleClick = {handleGoodClick} text = 'Good'/>
        <Button handleClick = {handleNeutralClick} text = 'neutral'/>
        <Button handleClick = {handleBadClick} text = 'Bad'/>
        <h2>Statistics</h2>
        <p>no feedback given</p>
        
        
      </div>
    );
  }
  return (
    <div >
      <h1>Give feedback</h1>
      <Button handleClick = {handleGoodClick} text = 'Good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>
      <Button handleClick = {handleBadClick} text = 'Bad'/>
      <h2>Statistics</h2>
      
      <Statistics
        goodTx = 'Good is: ' good = {good}
        neutralTx = 'Netural is: ' neutral = {neutral}
        badTx = 'Bad is: ' bad = {bad}
        allTx = 'All feeds: ' all = {all}
        aveTx = 'Avarage: ' average = {average}
        positiveTx = 'Positive: ' positive = {positive} 
      />
      
    </div>
  );
  
  
}

export default App;
