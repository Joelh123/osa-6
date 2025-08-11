import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import Notification from "./Notification";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes.filter((a) => a.content.indexOf(state.filter) > -1))

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    displayNotification(id)
  }

  const displayNotification = (id) => {
    const votedAnecdote = anecdotes.find(a => a.id === id)
    dispatch(setNotification(`you voted '${votedAnecdote.content}'`))

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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList