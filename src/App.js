import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { upValue, downValue, clearValue } from './Redux/Action';


function App() {
  const { value } = useSelector((select) => select.myReducer)
  // console.log(value);

  const dispatch = useDispatch()

  const decrementValue = () => {

    dispatch(downValue(value))
  }
  const incrementValue = () => {
    dispatch(upValue(value))
  }
  const resetValue = () => {
    dispatch(clearValue(value))
  }

  return (
    <>
      <div className="App">
        <h1>Counter APP using <span style={{fontSize:'5rem',color:value%2===0 ? '#AD7BE9':'#EA8FEA'}}>R</span>edux</h1>
        <div className='Counter' style={{background:value%2===0 ? '#AD7BE9':'#EA8FEA'}}>
          <button onClick={decrementValue}>Decrement -1</button> <span>{value}</span> <button onClick={incrementValue}>Increment +1</button>
        </div>
        <button onClick={resetValue} className='btn'>Reset</button>
      </div>
    </>
  );
}

export default App;
