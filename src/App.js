import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home.js'
import Detail from './routes/Detail.js'
import Test from './routes/Test.js'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route exact path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
