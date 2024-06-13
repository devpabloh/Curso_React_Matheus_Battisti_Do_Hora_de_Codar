import { useState } from "react";

const ConditionalRender = () => {
    const[x] = useState(false);
  return (
    <div>
        <h1>Isso será exibido?</h1> 
        {x && <p>se x for true, sim!</p>}
    </div>
  )
}

export default ConditionalRender