import styled from 'styled-components';

const Alarm =(props)=> {
  const {nowTime,time, handleTime, handleAdd, stopSound, alarmTime, dateMessage} = props;
  return(
      <Content>
        <Message>{dateMessage.text}</Message>
        <DefaultText>The current time is</DefaultText>
        <TimeText>{nowTime}</TimeText>
        <DefaultText>Please, set the alarm</DefaultText>
        <SetTime type="time" value={time} onChange={handleTime} />
        <ButtonArea>
          <SetButton type="submit" onClick={handleAdd}>SetAlarm</SetButton>
          <SetButton type="submit" onClick={stopSound}>StopAlarm</SetButton>
        </ButtonArea>
        <TimeText>{alarmTime}</TimeText>
      </Content>
  )
}

const Content = styled.div`
  display: block;
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  padding-top: 30px;
  text-align: center;
`

const Message = styled.h2`
  font-size: 45px;
  text-shadow: 1px 0 2px #333;
`

const DefaultText = styled.p`
  margin-top: 20px;
  font-size: 20px;
  text-shadow: 1px 0 2px #333;
`

const TimeText = styled.p`
  font-size: 30px;
  margin-top: 30px;
  text-shadow: 1px 0 2px #333;
`

const SetTime = styled.input`
  border: none;
  padding: 5px;
  margin-top: 20px;
`

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`

const SetButton = styled.button`
  border: none;
  font-size: 18px;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #fff;
`
export default Alarm;