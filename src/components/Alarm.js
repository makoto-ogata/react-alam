
const Alarm =(props)=> {
  const {nowTime,time, handleTime, handleAdd, stopSound, alarmTime} = props;
  return(
   <>
     <p>現在の時刻</p>
     <p>{nowTime}</p>
     <input type="time" value={time} onChange={handleTime} />
     <button type="submit" onClick={handleAdd}>Set</button>
     <button type="submit" onClick={stopSound}>Stop</button>
     <div>
       {alarmTime}
     </div>
   </>
  )
}

export default Alarm;