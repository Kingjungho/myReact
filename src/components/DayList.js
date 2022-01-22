import dummy from '../db/data.json'
import { Link } from 'react-router-dom'

const DayList = ({ list }) => {
  return (
    <>
      <ul className={list}>
        {dummy.days.map(day => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default DayList
