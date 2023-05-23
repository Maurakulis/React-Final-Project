import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AnswersContext from "../contexts/AnswersContext"
import { AnswerActionType, DATA } from "../contexts/constants"
import * as Yup from 'yup'
import { useFormik } from "formik"


const EditAnswer = () => {
  const { id } = useParams()
  const { dispatch } = useContext(AnswersContext)
  const [answer, setAnswer] = useState()
  const navigate = useNavigate()

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

  const validationSchema = Yup.object({
    text: Yup.string()
      .required('Input must be filled')
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch({
        type: AnswerActionType.EDIT,
        id: answer.id,
        data: {
          text: values.text,
          isEdited: true,
        }
      })
      navigate(-1)
    }
  })

  return (
    <main>
      {
        answer ?
          <form onSubmit={formik.handleSubmit}>
            <textarea name="text" id="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              {
                formik.touched.text && formik.errors.text && <span>{formik.errors.text}</span>
              }
            </div>
            <input type="submit" value="Save changes"
            />
          </form> :
          <p>loading... 🐌</p>
      }
    </main>
  )
}

export default EditAnswer