import { useState } from 'react'

const Button = (props) => {
  const {name , handleClick} = props;
  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
}

const Display = (props) => {
  const {good, neutral, bad} = props;
  return (
    <div>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad}   
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good + 1)
  }
  const clickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const clickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button name="good" handleClick={clickGood}/>
        <Button name="neutral" handleClick={clickNeutral}/>
        <Button name="bad" handleClick={clickBad}/>
      </div>
      
      <h1>Statistics</h1>
      <Display good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App