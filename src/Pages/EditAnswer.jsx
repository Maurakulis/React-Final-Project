import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AnswersContext from "../contexts/AnswersContext"
import { DATA } from "../contexts/constants"

const EditAnswer = () => {
  const { id } = useParams()
  const { dispatch } = useContext(AnswersContext)
  const [answer, setAnswer] = useState()

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA.ANSWERS + '/' + id)
      const data = await res.json()
      setAnswer(data)
    })()
  }, [])

  const initialValues = {
    text: answer ? answer.text : ''
  }


  return (
    <main>
      <form>
        <textarea name="text" id="text" />
        <input type="submit" value="Save changes" />

      </form>
    </main>
  )
}

export default EditAnswer