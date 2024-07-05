import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const About = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h1>About</h1>
      <p>Valor doc contador: {counter}</p>
    </div>
  )
}

export default About