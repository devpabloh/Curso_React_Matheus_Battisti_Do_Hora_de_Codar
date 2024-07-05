import { useContext } from "react"
import {CounterContext} from "../Context/CounterContext"
import ChangeCounter from "../Components/ChangeCounter";

const Home = () => {
  const {counter} = useContext(CounterContext);
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor com texto */}
      <ChangeCounter/>
    </div>
  )
}

export default Home