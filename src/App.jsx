import React, { useState } from 'react'

const App = () => {
  const[timer, setTimer]=useState(0);

  const startTimer=()=>{
    window.Timer = setInterval(()=>{
      setTimer((timer) => timer + 1);
    },1000);
    };

  const stopTimer=()=>{
    clearInterval(window.Timer);
  };

  const ResetTimer = ()=>{
    clearInterval(window.Timer);
    setTimer(0);
  }

  return (
    <div className='container w-96  max-w-7xl mx-auto px-4 border-2 rounded bg-sky-100 border-sky-600 my-20 h-40'>
    <h1 className='text-center text-2xl font-bold pt-4'>Stopwatch Timer</h1>
    <div className='flex justify-center pt-4 gap-4 text-2xl'>
    <span>{Math.trunc(timer/60)} : mins</span>
    <span>{timer%60} : secs</span>
    </div>
    <div className='flex justify-center pt-6 gap-8'>
      <button onClick = {startTimer} className='bg-lime-900 w-24 text-white'>Start</button>
      <button onClick = {stopTimer} className='bg-red-900 w-24 text-white'>Stop</button>
      <button onClick = {ResetTimer} className='bg-amber-400 w-24 text-bold'>Reset</button>
    </div>
    </div>
  )
}

export default App
