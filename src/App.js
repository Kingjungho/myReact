import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home.js'
import Detail from './routes/Detail.js'
import Test from './routes/Test.js'
import Voca from './routes/Voca.js'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/voca" element={<Voca />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
