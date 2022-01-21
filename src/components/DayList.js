import dummy from '../db/data.json'

const DayList = ({ list }) => {
  return (
    <>
      <ul className={list}>
        {dummy.days.map(day => (
          <li key={day.id}>Day {day.day}</li>
        ))}
      </ul>
    </>
  )
}

export default DayList
