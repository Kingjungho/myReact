import Hello from '../components/Hello'
import Styles from './Voca.module.css'

const Voca = () => {
  return (
    <div>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  )
}

export default Voca
