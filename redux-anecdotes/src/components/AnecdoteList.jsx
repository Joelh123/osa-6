import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import Notification from "./Notification";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes.filter((a) => a.content.indexOf(state.filter) > -1))

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    displayNotification(anecdote)
  }

  const displayNotification = (anecdote) => {
    dispatch(setNotification(`you voted '${anecdote.content}'`))

    setTimeout(() => {
      dispatch(setNotification(''))
    }, 5000)
  }

  return (
    <>
    <h2>Anecdotes</h2>
      <Notification />
      {anecdotes.map(anecdote =>  
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList