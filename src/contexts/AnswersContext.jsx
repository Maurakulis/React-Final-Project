import { createContext, useEffect, useReducer } from "react";
import { DATA } from "./constants";
import { AnswerActionType } from "./constants";

const AnswersContext = createContext()

const reducer = (answers, action) => {
  switch (action.type) {
    case AnswerActionType.GET:
      return action.data
    case AnswerActionType.DELETE:
      fetch(DATA.ANSWERS + '/' + action.id, {
        method: 'DELETE',
      })
      return answers.filter(e => e.id !== action.id)
    default:
      return answers
  }
}

const AnswersProvider = ({ children }) => {
  const [answers, dispatch] = useReducer(reducer, undefined)

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA.ANSWERS)
      const data = await res.json()

      dispatch({
        type: AnswerActionType.GET,
        data: data,
      })
    })()
  }, [])

  return (
    <AnswersContext.Provider value={{ answers, dispatch }}>{children}</AnswersContext.Provider>
  )
}

export { AnswersProvider }
export default AnswersContext