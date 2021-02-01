import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './actions';
import Board from './components/Board';

function App() {
  // const counter = useSelector(state => state.counter)
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Minesweeper</h1>
      {/* <p>{counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Info I shouldn't see</h3> : 'not logged in'} */}
      <Board />

    </div>
  );
}

export default App;
