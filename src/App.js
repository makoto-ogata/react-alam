import React, { useState, useEffect } from 'react';
import sound from './sound/piano-without-melody-short-loop-60-bpm.mp3';
import Alarm from './components/Alarm';
import styled from 'styled-components';
import './App.css';

const alarmSound = new Audio(sound);
alarmSound.loop = true;

let dateMessage = {
  images: '',
  text: ''
}

const App =()=> {
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
  const nowTimeHour = showTime.toLocaleTimeString([],{hour: 'numeric'});
  const nowTimeHourNumber = parseFloat(nowTimeHour);

  useEffect(()=>{
   if(nowTime === alarmTime){
     alarmSound.play();
   }
  }, [nowTime, alarmTime]);

  useEffect(()=>{
    if(nowTimeHourNumber > 18 || nowTimeHourNumber < 6) {
      dateMessage = {
        images: 'https://source.unsplash.com/VZxNq9GytpQ',
        text: 'Good Evening'
      }
    }else if(nowTimeHourNumber > 6 || nowTimeHourNumber < 12){
      dateMessage = {
        images: 'https://source.unsplash.com/-G3rw6Y02D0',
        text: 'Good Morning'
      }
    } else {
      dateMessage = {
        images: 'https://source.unsplash.com/8GVuQUmZW8Y',
        text: 'Good Afternoon'
      }
    }
  }, [nowTimeHourNumber]);

  return (
    <Main style={{backgroundImage: `url(${dateMessage.images})`}}>
      <Alarm dateMessage={dateMessage} nowTime={nowTime} time={time} handleTime={handleTime} handleAdd={handleAdd} stopSound={stopSound} alarmTime={alarmTime} />
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  width: 100%;
  background-size: cover;
`
export default App;
