import dummy from '../db/data.json'
import { useParams } from 'react-router-dom'
import Word from './Word';
;


const Day = ({ btnDel, off }) => {
  const { day } = useParams()
  const wordList = dummy.words.filter(word => word.day === Number(day))
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <Word btnDel={btnDel} word={word} key={word.id} off={off} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Day
