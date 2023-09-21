import { increment, decrement } from './store'
import './App.css'

function App({ state, dispatch }) {
  // Dispatch increment action
  const incrementerClicked = () => {
    dispatch(increment());
  }
  // Dispatch decrement action
  const decrementerClicked = () => {
    dispatch(decrement());
  }

  return (
    <>
      <div>
        <p id='counter'>{state}</p>
        <button id='incrementer' onClick={incrementerClicked}>+</button>
        <button id='decrementer' onClick={decrementerClicked}>-</button>
      </div>
    </>
  )
}

export default App
