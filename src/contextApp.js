import { createContext, useState } from "react";

const ContextApp = createContext();

export function ContextProvider({ children }) {
  const [questions, setQuestions] = useState([
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    "<15",
    "male",
  ]);
  return (
    <ContextApp.Provider value={{ questions, setQuestions }}>
      {children}
    </ContextApp.Provider>
  );
}

// export function SpecificFeedProvider({children}){
//     const [questions,setQuestions] = useState([])
//     return(
//         <ContextApp.Provider value={{questions, setQuestions}} >
//             {children}
//         </ContextApp.Provider>
//     )
// }

export default ContextApp;
