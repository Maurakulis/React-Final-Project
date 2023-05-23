import { useState } from "react"
import { useParams } from "react-router-dom"

const EditQuestion = () => {
  const { id } = useParams()
  const [quetion, setQuestion] = useState()

  return (
    <main>
      <form onSubmit="">
        <input type="text" name="title" id="title" />
        <textarea name="title" id="title" />
        <input type="submit" value="Save changes" />
      </form>
    </main>
  )
}

export default EditQuestion