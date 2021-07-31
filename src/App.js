import React, { useState, useEffect } from 'react';
import sound from './sound/piano-without-melody-short-loop-60-bpm.mp3';
import Alarm from './components/Alarm';
const alarmSound = new Audio(sound);
alarmSound.loop = true;

function App() {
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
      <Alarm nowTime={nowTime} time={time} handleTime={handleTime} handleAdd={handleAdd} stopSound={stopSound} alarmTime={alarmTime} />
    </div>
  );
}

export default App;
