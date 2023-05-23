import { useContext } from 'react'
import * as Yup from 'yup'
import UsersContext from '../contexts/UsersContext'
import { useFormik } from 'formik'
import AnswersContext from '../contexts/AnswersContext'
import { AnswerActionType } from '../contexts/constants'
import { Link } from 'react-router-dom'

const AddAnswer = ({ question }) => {
  const { currentUser } = useContext(UsersContext)
  const { dispatch } = useContext(AnswersContext)

  const values = {
    textInput: ''
  }

  const validationSchema = Yup.object({
    textInput: Yup.string().required('This input must be filled'),
  })

  const formik = useFormik({
    initialValues: values,
    validationShema: validationSchema,
    onSubmit: (values) => {

      dispatch({
        type: AnswerActionType.ADD,
        text: values.textInput,
        questionId: question.id,
        creatorId: currentUser.id,
      })
      formik.values.textInput = ''
    }
  })

  return (
    <>
      {
        currentUser ?
          <form onSubmit={formik.handleSubmit}>
            <h2>Add Your Answer</h2>
            <textarea name='textInput' id='textInput'
              value={formik.values.textInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.textInput && formik.errors.textInput && <span>{formik.errors.textInput}</span>
            }
            <input type="submit" value="Add answer" />
          </form> :
          <h2>Want to add answer? <Link to='/'>Sign up</Link></h2>
      }
    </>
  )
}

export default AddAnswer