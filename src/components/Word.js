import { useRef, useState } from "react";

const Word = ({word, btnDel, off}) => {
  const [isShow, setIsShow] = useState(false);
  const [wordOn, setWordOn] = useState(word.isDone);
  const showWord = () => {
    setIsShow(!isShow)
  }
  const onChange = () => {
    setWordOn(!wordOn)
  }
  return (
    <tr className={wordOn ? off : ""}>
      <td>
        <input type="checkbox" onChange={onChange} checked={wordOn} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={showWord}>{isShow ? "뜻 숨기기" : "뜻 보기"}</button>
        <button className={btnDel}>삭제</button>
      </td>
    </tr>
  )
}
export default Word;

