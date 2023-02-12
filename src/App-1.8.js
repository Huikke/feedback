import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad, total}) => {
  return (
    <div>
      <Stat text={"good"} stat={good} />
      <Stat text={"neutral"} stat={neutral} />
      <Stat text={"bad"} stat={bad} />
      <Stat text={"all"} stat={total} />
      <Stat text={"average"} stat={(good - bad) / total} />
      <Stat text={"positive"} stat={good / total * 100 + "%"} />
    </div>
  )
}

const Stat = ({ text, stat }) => <div>{text} {stat}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)
  let total = good + neutral + bad

  return (
    <div>
      <Header text={"give feedback"} />
      <Button onClick={addGood} text="good" />
      <Button onClick={addNeutral} text="neutral" />
      <Button onClick={addBad} text="bad" />
      <Header text={"Statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App