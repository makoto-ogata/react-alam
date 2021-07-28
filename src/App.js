import React, { useState, useEffect } from 'react';
import sound from './sound/piano-without-melody-short-loop-60-bpm.mp3';

function App() {
  const alarmSound = new Audio(sound);
  alarmSound.loop = true;
  const [showTime, setShowTime] = useState(new Date());
  const [time, setTime] = useState('');
  const handleTime =(e)=> setTime(e.target.value);
  const [alarmTime, setAlarmTime] = useState('');
  const handleAdd =()=> {
    const newAlarm = time;
    setAlarmTime(newAlarm);
  }

  const stopSound =()=> {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }

  useEffect(() => {
    const timer = setInterval(()=> {
      setShowTime(new Date());
    }, 1000);
    return ()=> clearInterval(timer);
  }, []);

  const nowTime = showTime.toLocaleTimeString([],{hour: 'numeric', minute:'numeric'});

  useEffect(()=>{
   if(nowTime === alarmTime){
     alarmSound.play();
   }
  }, [nowTime]);
  return (
    <div className="App">
      <p>現在の時刻</p>
      <p>{nowTime}</p>
      <input type="time" value={time} onChange={handleTime} />
      <button type="submit" onClick={handleAdd}>Set</button>
      <button type="submit" onClick={stopSound}>Stop</button>
      <div>
        {alarmTime}
      </div>
    </div>
  );
}

export default App;
