import { useContext } from "react"
import UsersContext from "../contexts/UsersContext"
import { useNavigate } from "react-router"
import * as Yup from 'yup'
import { useFormik } from "formik"
import { v4 as uuidv4 } from 'uuid';
import QuestionsContext from "../contexts/QuestionsContext"
import { QuestionActionType } from "../contexts/constants"



const AddQuestion = () => {
  const { currentUser } = useContext(UsersContext)
  const { dispatch } = useContext(QuestionsContext)

  const navigate = useNavigate()

  const values = {
    title: '',
    text: '',
  }

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Question must have a title')
      .min(8, 'Title should not be shorter than 8 characters')
      .max(100, 'Title should not be longer than 100 characters'),
    text: Yup.string()
      .required('Question must have a explanation text')
      .min(20, 'Explanation should not be shorter than 20 characters')
      .max(1000, 'Explanation should not be longer than 1000 characters'),
  })

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: (values) => {

      const newQuestion = {
        title: values.title,
        text: values.text,
        votes: [],
        isEdited: false,
        id: uuidv4(),
        creatorId: currentUser.id,
        dateCreated: Date.now(),
      }
      dispatch({
        type: QuestionActionType.ADD,
        data: newQuestion
      })
      navigate('/questions')
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <p>
          Be specific and imagine you’re asking a question to another person.</p>
        <input type="text" id="title" name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div>
          {
            formik.touched.title && formik.errors.title && <span>{formik.errors.title}</span>
          }
        </div>
      </div>
      <div>
        <label htmlFor="text">What are the details of your problem?
        </label>
        <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
        <textarea id="text" name="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div>
          {
            formik.touched.text && formik.errors.text && <span>{formik.errors.text}</span>
          }
        </div>
      </div>
      <input type="submit" value="Ask question" />
    </form>
  )
}

export default AddQuestion