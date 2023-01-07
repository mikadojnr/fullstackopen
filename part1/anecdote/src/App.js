import { useState } from "react"

const Button = ({clickHandler, text}) => <button onClick = {clickHandler} >{text}</button>

const Vote = ({vote}) => {
  return (
    <p>has {vote} votes</p>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // initialize the state value to zero
  const [selected, setSelected] = useState(0)

  // creates empty array with state
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // generate random numbers within the range of the anecdote array length
  const randomNumbers = () => Math.floor(Math.random() * anecdotes.length)

  // handle votes and increase vote counts
  const anecdoteVote = () => {
    // update the number of votes of the currently slected anecdote
    votes[selected] += 1

    //make a copy of the votes of the original votes object
    setVotes([...votes])
  }
  
  // gets maximum value from the votes array
  const highestVote = votes.reduce((a, b) => Math.max(a, b), -Infinity)

  // checks index of  first maximum voted in the votes array 
  const mostVotedAnecdote = votes.indexOf(highestVote)

  // console.log('highest vote', highestVote)
  // console.log('most voted', mostVotedAnecdote)
  // console.log('selected',selected)
  // console.log('votes',votes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
      </p>

      <Vote vote={votes[selected]} />

      <Button text="vote" clickHandler={anecdoteVote}/>
    
      <Button clickHandler={() => setSelected(randomNumbers)} text="Next Anecdote" />

      <h1>Anecdote with most vote</h1>
      <p>{anecdotes[mostVotedAnecdote]}</p>
      <Vote vote={votes[mostVotedAnecdote]}/>
    </div>
    
  )
}

export default App