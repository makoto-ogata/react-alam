import React, { useState, useEffect } from 'react';

function App() {
  const [showTime, setShowTime] = useState(new Date());
  const [time, setTime] = useState('');
  const handleTime =(e)=> setTime(e.target.value);
  const [alarmTime, setAlarmTime] = useState('');
  const handleAdd =()=> {
    const newAlarm = time;
    setAlarmTime(newAlarm);
  }

  useEffect(() => {
    const timer = setInterval(()=> {
      setShowTime(new Date());
    }, 1000);
    return ()=> clearInterval(timer);
  }, []);

  const nowTime = showTime.toLocaleTimeString([],{hour: 'numeric', minute:'numeric'});

  return (
    <div className="App">
      <p>現在の時刻</p>
      <p>{nowTime}</p>
      <input type="time" value={time} onChange={handleTime} />
      <button type="submit" onClick={handleAdd}>Add</button>
      <div>
        {alarmTime}
      </div>
    </div>
  );
}

export default App;
