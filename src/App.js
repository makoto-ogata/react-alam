import React, { useState, useEffect } from 'react';

function App() {
  const [showTime, setShowTime] = useState(new Date());
  const [time, setTime] = useState('');
  const handleTime =(e)=> setTime(e.target.value);
  const [alarmList, setAlarmList] = useState([]);
  const handleAdd =()=> {
    const newAlarm = [...alarmList, time];
    setAlarmList(newAlarm);
  }

  useEffect(() => {
    const timer = setInterval(()=> {
      setShowTime(new Date());
    }, 1000);
    return ()=> clearInterval(timer);
  }, [setShowTime]);

  const nowTime = showTime.toLocaleTimeString([],{hour: 'numeric', minute:'numeric'});
  return (
    <div className="App">
      <p>現在の時刻</p>
      <p>{nowTime}</p>
      <input type="time" value={time} onChange={handleTime} />
      <button type="submit" onClick={handleAdd}>Add</button>
      <div>
        {alarmList.map((alarm, index) => {
          return(
            <div key={index}>{alarm}</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
