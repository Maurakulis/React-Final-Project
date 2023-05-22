import { useContext, useState } from 'react'
import * as Yup from 'yup'
import UsersContext from '../contexts/UsersContext'

const AddAnswer = () => {
  const [failedAnswer, setFailedAnswer] = useState(false)
  const { currentUser } = useContext(UsersContext)

  return (
    <form onSubmit={() => { }}>
      <h3>Add Your Answer here:</h3>
      <textarea id="answer" name="answer"
      />

    </form>
  )
}

export default AddAnswer