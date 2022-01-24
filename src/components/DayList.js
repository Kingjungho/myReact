import { Link, useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import useFetch from '../hooks/useFetch'
import useFetch from '../hooks/useFetch'

const DayList = ({ list }) => {
  const day = useParams();
  const days = useFetch("http://localhost:3002/days")
  const [dayList, setDayList] = useState(days.id)

  const deleteDay = () => {
    if (window.confirm('진짜 삭제?')) {
      fetch(`http://localhost:3002/words?day=${day}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
          setDayList({ day: 0 })
        }
      })
    }
  }
  if(dayList === 0){
    return null;
  }
  return (
    <>
      <ul className={list}>
        {days.map(day => (
          <li key={day.id}>
            <input type="checkbox" />
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={deleteDay}>Delete</button>
    </>
  )
}

export default DayList
