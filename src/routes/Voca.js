import Header from '../components/Header'
import DayList from '../components/DayList'
import Day from '../components/Day'
import CreateWord from '../components/CreateWord'
import CreateDay from '../components/CreateDay'
import EmptyPage from '../components/EmptyPage'
import Styles from './Voca.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Voca = () => {
  return (
    <BrowserRouter>
      <div className={Styles.Voca}>
        <Header header={Styles.header} menu={Styles.menu} link={Styles.link} />
        <Routes>
          <Route
            exact
            path="/dayList"
            element={<DayList list={Styles.listDay} />}
          ></Route>
          <Route
            exact
            path="/day/:day"
            element={<Day btnDel={Styles.btnDel} off={Styles.off} />}
          ></Route>
          <Route
            path="/create_word"
            element={<CreateWord input={Styles.inputArea} />}
          ></Route>
          <Route
            path="/create_day"
            element={<CreateDay input={Styles.inputArea} />}
          ></Route>
          <Route path="/:id" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Voca
