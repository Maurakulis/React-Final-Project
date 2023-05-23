import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DATA, QuestionActionType } from "../contexts/constants"
import * as Yup from 'yup'
import { useFormik } from "formik"
import QuestionsContext from "../contexts/QuestionsContext"

const EditQuestion = () => {
  const { id } = useParams()
  const { dispatch } = useContext(QuestionsContext)
  const [question, setQuestion] = useState()

  const navigate = useNavigate()


  useEffect(() => {
    (async () => {
      const res = await fetch(DATA.QUESTIONS + '/' + id)
      const data = await res.json()
      setQuestion(data)
    })()
  }, [])

  const initialValues = {
    title: question ? question.title : '',
    text: question ? question.text : '',
  }

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Input must be filled')
      .min(8, 'Title should not be shorter than 8 characters')
      .max(100, 'Title should not be longer than 100 characters'),
    text: Yup.string()
      .required('Input must be filled')
      .min(20, 'Explanation should not be shorter than 20 characters')
      .max(1000, 'Explanation should not be longer than 1000 characters'),
  })


  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch({
        type: QuestionActionType.EDIT,
        id: question.id,
        data: {
          title: values.title,
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
        question ?

          <form onSubmit={formik.handleSubmit} className="editQuestion">
            <h2>Edit question</h2>
            <input type="text" name="title" id="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              {
                formik.touched.title && formik.errors.title && <span>{formik.errors.title}</span>
              }
            </div>
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

            <input type="submit" value="Save changes" />
          </form> :
          <p>loading... 🐌</p>

      }
    </main>
  )
}

export default EditQuestion