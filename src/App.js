import React, { useState, useEffect } from 'react';

function App() {
  const [showTime, setShowTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(()=> {
      setShowTime(new Date());
    }, 1000);
    return ()=> clearInterval(timer);
  }, [setShowTime]);

  const [time, setTime] = useState('');
  const handleTime =(e)=> setTime(e.target.value);
  return (
    <div className="App">
      <p>現在の時刻</p>
      <p>{showTime.toLocaleTimeString([],{hour: 'numeric', minute:'numeric'})}</p>
      <input type="time" value={time} onChange={handleTime} />
    </div>
  );
}

export default App;
