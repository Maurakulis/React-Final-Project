import { useContext, useState } from 'react'
import * as Yup from 'yup'
import UsersContext from '../contexts/UsersContext'
import { useFormik } from 'formik'
import AnswersContext from '../contexts/AnswersContext'
import { AnswerActionType } from '../contexts/constants'

const AddAnswer = ({ question }) => {
  const [failedAnswer, setFailedAnswer] = useState(false)
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
      if (currentUser) {
        setFailedAnswer(false)
        dispatch({
          type: AnswerActionType.ADD,
          text: values.textInput,
          questionId: question.id,
          creatorId: currentUser.id,
        })
        formik.values.textInput = ''
      } else {
        setFailedAnswer(true)
      }
    }
  })

  return (
    <>
      {
        !currentUser &&
        <div className='SingInError'>
          <p>Sig In for adding your answer</p>
        </div>
      }
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
      </form>
      {
        failedAnswer &&
        <p>You have to Login to add an answer</p>
      }
    </>
  )
}

export default AddAnswer