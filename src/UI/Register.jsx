import { useContext, useState } from "react"
import UsersContext from "../contexts/UsersContext"
import * as Yup from 'yup'
import { useFormik } from "formik"
import { UserActionType } from "../contexts/constants"
import { useNavigate } from "react-router"

const Register = () => {
  const [failedRegistration, setFailedRegistration] = useState(false)
  const { users, dispatch, setCurrentUser } = useContext(UsersContext)

  const navigate = useNavigate()

  const values = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const ErrorMessages = {
    EMAIL_VALIDATION: 'This input must be a valid email',
    REQUIRE: 'Input must be filled',
    MIN: 'Input must be at least',
    MATCH: 'Passwords must match'
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(ErrorMessages.REQUIRE),
    email: Yup.string()
      .email(ErrorMessages.EMAIL_VALIDATION)
      .required(ErrorMessages.REQUIRE),
    password: Yup.string()
      .min(5, ErrorMessages.MIN + ' 5 symbols long')
      .required(ErrorMessages.REQUIRE),
    passwordConfirm: Yup.mixed()
      .oneOf([Yup.ref('password')], ErrorMessages.MATCH)
      .required(ErrorMessages.REQUIRE),
  })

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      const registerUser = users.find(user => user.email === values.email)

      if (registerUser === undefined) {
        setFailedRegistration(false)
        setCurrentUser(values)

        dispatch({
          type: UserActionType.REGISTER,
          email: values.email,
          password: values.password,
        })
        navigate('/questions')

      } else {
        setFailedRegistration(true)
      }
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h2>Don&apos;t have an account? Register </h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.name && formik.errors.name &&
            <span>{formik.errors.name}</span>
          }
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.email && formik.errors.email &&
            <span>{formik.errors.email}</span>
          }
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.password && formik.errors.password &&
            <span>{formik.errors.password}</span>
          }
        </div>
        <div>
          <label htmlFor="passwordConfirm">Repeat password</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.passwordConfirm && formik.errors.passwordConfirm &&
            <span>{formik.errors.passwordConfirm}</span>
          }
        </div>
        <input type="submit" value="Register" />
        {
          failedRegistration && <p>This email is already used</p>
        }
      </form>
    </>
  )
}

export default Register