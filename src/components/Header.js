import {Link} from 'react-router-dom';

const Header = ({ header, menu, link }) => {
  return (
    <div className={header}>
      <h1>
        <Link to="/DayList">영어 단어 하루 5개 외우기</Link>
      </h1>
      <div className={menu}>
        <Link to="/create_word" className={link}>
          단어추가
        </Link>
        <a href="/create_day" className={link}>
          Day 추가
        </a>
      </div>
    </div>
  )
}

export default Header
