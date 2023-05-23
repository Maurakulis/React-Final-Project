/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer } from "react";
import { DATA } from "./constants";
import { AnswerActionType } from "./constants";
import { v4 as uuidv4 } from 'uuid';

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
    case AnswerActionType.ADD:

      const newAnswer = {
        text: action.text,
        votes: [],
        isEdited: false,
        id: uuidv4(),
        questionId: action.questionId,
        creatorId: action.creatorId,
      }

      fetch(DATA.ANSWERS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAnswer)
      })
      return [...answers, newAnswer]
    case AnswerActionType.EDIT:
      fetch(DATA.ANSWERS + '/' + action.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.data)
      })
      return answers.map(answer => {
        if (answer.id === action.id) {
          return { ...answer, ...action.data }
        } else {
          return answer
        }
      })
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