import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Word from './Word'
const Day = ({ btnDel, off }) => {
  const { day } = useParams()
  const words = useFetch(`http://localhost:3002/words?day=${day}`)
  console.log(words);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word btnDel={btnDel} word={word} key={word.id} off={off} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Day
