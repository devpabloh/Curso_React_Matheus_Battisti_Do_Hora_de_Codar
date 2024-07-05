// 1 - Criar contexto
import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - Criar provider
export const CounterContextProvider = ({Children}) =>{
    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {Children}
        </CounterContext.Provider>
    );
};