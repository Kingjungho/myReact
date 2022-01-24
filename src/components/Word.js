import { useState } from 'react'

const Word = ({ word: w, btnDel, off }) => {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone)
  const showWord = () => {
    setIsShow(!isShow)
  }
  const onChange = () => {
    fetch(`http://localhost:3002/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone)
      }
    })
  }

  const del = () => {
    if (window.confirm('진짜 삭제?')) {
      fetch(`http://localhost:3002/words/${word.id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
          setWord({ id: 0 })
        }
      })
    }
  }

  if (word.id === 0) {
    return null
  }
  return (
    <tr className={isDone ? off : ''}>
      <td>
        <input type="checkbox" onChange={onChange} checked={isDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={showWord}>{isShow ? '뜻 숨기기' : '뜻 보기'}</button>
        <button className={btnDel} onClick={del}>삭제</button>
      </td>
    </tr>
  )
}
export default Word
