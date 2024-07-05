// 3 - Alterando contexto
import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext);

  return (
    <div>
        <button onClick={()=>setCounter(counter + 1 )}>Add Value to counter</button>
    </div>
  )
}

export default ChangeCounter