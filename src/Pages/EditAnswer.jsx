import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import AnswersContext from "../contexts/AnswersContext"

const EditAnswer = () => {
  const { id } = useParams()
  const { dispatch } = useContext(AnswersContext)
  const [answer, setAnswer] = useState()

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