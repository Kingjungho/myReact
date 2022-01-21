import { useState } from 'react'
import UserName from './UserName';


const Hello = ({ age }) => {
  const [name, setName] = useState('Jungho')
  const [ageNum, setAgeNum] = useState(age)
  const msg = age >= 20 ? '성인입니다' : '애기입니다'
  const onClick = () => {
    setName(name === 'Jungho' ? 'Kim' : 'Jungho')
  }
  const onChange = () => {
    setAgeNum(current => current + 1)
  }
  return (
    <div className="voca">
      <h2>
        {name} ({ageNum}) : {msg}
      </h2>
      <UserName name={name} />
      <button onClick={onClick}>Change!</button>
      <button onClick={onChange}>Change age!</button>
    </div>
  )
}

export default Hello
