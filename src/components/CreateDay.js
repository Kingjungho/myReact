import { useNavigate } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import useFetch from '../hooks/useFetch'

const CreateDay = () => {
  const day = useFetch('http://localhost:3002/days')
  const navigate = useNavigate();
  const addDay = () => {
    fetch(`http://localhost:3002/days`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: day.length + 1
      }),
    }).then(res => {
      if (res.ok) {
        alert("날짜 추가되었어요 ~~")
        navigate(`/DayList`)
      }
    })
  }
  return (
    <div>
      <h3>현재 일수 : {day.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}
export default CreateDay
