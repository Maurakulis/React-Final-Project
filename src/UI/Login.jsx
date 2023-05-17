import { useContext, useState } from 'react'
import * as Yup from 'yup'
import UsersContext from '../contexts/UsersContext'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'

const Login = () => {
  const [failedLogin, setFailedLogin] = useState(false)
  const { users, setCurrentUser } = useContext(UsersContext)

  const navigate = useNavigate()

  const values = {
    loginEmail: '',
    loginPassword: '',
  }

  const validationSchema = Yup.object({
    loginEmail: Yup.string()
      .email('This input must be a valid email')
      .required('Input must be filled'),
    loginPassword: Yup.string()
      .required('Input must be filled'),
  })

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const loggedInUser = users.find(user => user.email === values.loginEmail && user.password === values.loginPassword)

      if (loggedInUser) {
        setCurrentUser(loggedInUser)
        setFailedLogin(false)
        navigate('/allQuestions')
      } else {
        setFailedLogin(true)
      }
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h2>Have an account? Login Here</h2>
        <div>
          <label htmlFor="loginEmail">Email</label>
          <input type="email" id="loginEmail" name="loginEmail"
            value={formik.values.loginEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {
              formik.touched.loginEmail && formik.errors.loginEmail && <span>{formik.errors.loginEmail}</span>
            }
          </div>
        </div>
        <div>
          <label htmlFor="loginPassword">Password</label>
          <input type="password" id="loginPassword" name="loginPassword"
            value={formik.values.loginPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {
              formik.touched.loginPassword && formik.errors.loginPassword && <span>{formik.errors.loginPassword}</span>
            }
          </div>
        </div>
        <input type="submit" value="Login" />
        {
          failedLogin && <p>Incorrect inputs</p>
        }
      </form>
    </>
  )
}

export default Login