import Header from '../components/Header'
import DayList from '../components/DayList'
import Day from '../components/Day'
import Styles from './Voca.module.css'

const Voca = () => {
  return (
    <div className={Styles.Voca}>
      <Header header={Styles.header} menu={Styles.menu} link={Styles.link} />
      <DayList list={Styles.listDay} />
      <Day />
    </div>
  )
}

export default Voca
