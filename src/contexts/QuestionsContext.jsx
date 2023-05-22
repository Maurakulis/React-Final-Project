import { createContext, useEffect, useReducer } from "react";
import { DATA, QuestionActionType } from "./constants";

const QuestionsContext = createContext()

const reducer = (questions, action) => {
  switch (action.type) {
    case QuestionActionType.GET:
      return action.data
    case QuestionActionType.DELETE:
      fetch(DATA.QUESTIONS + '/' + action.id, {
        method: 'DELETE',
      })
      return questions.filter(e => e.id !== action.id)
    case QuestionActionType.ADD:
      fetch(DATA.QUESTIONS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.data)
      })
      return [...questions, action.data]
    case QuestionActionType.EDIT:
      fetch(DATA.QUESTIONS + '/' + action.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.data)
      })
      return action.data
    default:
      return questions
  }
}

const QuestionProvider = ({ children }) => {
  const [questions, dispatch] = useReducer(reducer, undefined)

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA.QUESTIONS)

      const data = await res.json()

      dispatch({
        type: QuestionActionType.GET,
        data: data,
      })
    })()
  }, [])

  return (
    <QuestionsContext.Provider value={{ questions, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  )
}

export { QuestionProvider }
export default QuestionsContext