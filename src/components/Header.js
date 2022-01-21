const Header = ({ header, menu, link }) => {
  return (
    <div className={header}>
      <h1>
        <a href="/">토익 영단어(고급)</a>
      </h1>
      <div className={menu}>
        <a href="#x" className={link}>
          단어추가
        </a>
        <a href="#x" className={link}>
          Day 추가
        </a>
      </div>
    </div>
  )
}

export default Header