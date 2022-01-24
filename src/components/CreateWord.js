import useFetch from '../hooks/useFetch'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

const CreateWord = ({ input }) => {
  const days = useFetch('http://localhost:3002/days')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = e => {
    e.preventDefault()

    if (!isLoading) {
      setIsLoading(true)
      fetch(`http://localhost:3002/words`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert('추가되었어요~_~')
          navigate(`/day/${dayRef.current.value}`)
          setIsLoading(false)
        }
      })
    }
  }

  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)

  return (
    <form onSubmit={onSubmit}>
      <div className={input}>
        <label>영어</label>
        <input type="text" placeholder="Enter English" ref={engRef} />
      </div>
      <div className={input}>
        <label>한글 번역</label>
        <input type="text" placeholder="번역된 뜻을 입력하세요~" ref={korRef} />
      </div>
      <div className={input}>
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? 'Saving...' : '저장'}
      </button>
    </form>
  )
}

export default CreateWord
