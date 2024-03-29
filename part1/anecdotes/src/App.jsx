import { useState } from 'react'

const Anecdote = (props) => {
  const { anecdote, votes } = props;

  return (
    <>
      {anecdote} <br />
      has {votes} votes <br/>
    </>
  )
}

const MostVoted = ({anecdotes, votes}) => {
  const indexMostVoted = votes.indexOf(Math.max(...votes))
  const MosstVoted = anecdotes[indexMostVoted]

  return (
    <Anecdote anecdote={MosstVoted} votes={votes[indexMostVoted]}/>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))


  const updateAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber)
  }
  const updateVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected]++
    setVotes(votesCopy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <button onClick={updateVotes}>
        vote
      </button>
      <button onClick={updateAnecdote}>
        next anecdote
      </button>

      <h1>Anecdote with most votes</h1>
      <MostVoted anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App