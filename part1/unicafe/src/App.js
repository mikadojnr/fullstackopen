import { useState } from "react";

const Button = ({clickHandler, text}) => 
<button onClick={clickHandler}>{text}</button>

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)



const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = (good - bad) / all 
  const positive = (good / all) * 100

  if (all === 0) {
    return (
      <div>
        <p>
          No feedback given!
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value ={average} />
          <StatisticLine text="positive" value ={positive + "%"} />
        </tbody>
      </table>
    </div>
  )


}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('good =', good, ', neutral=',neutral, ', bad=', bad)

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button clickHandler={()=>setGood(good + 1)} text="good"/>
      <Button clickHandler={()=>setNeutral(neutral + 1)} text="neutral"/>
      <Button clickHandler={()=>setBad(bad + 1)} text="bad"/>
      
      <Statistics good = {good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
