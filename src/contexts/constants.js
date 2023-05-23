export const UserActionType = {
  GET: 'get_all_users',
  REGISTER: 'register_user',
  ADD: 'add_user',
}

export const QuestionActionType = {
  GET: 'get_all_questions',
  ADD: 'add_question',
  DELETE: 'delete_question',
  EDIT: 'edit_question',
}

export const AnswerActionType = {
  GET: 'get_all_answers',
  ADD: 'add_answer',
  DELETE: 'delete_answer',
  EDIT: 'edit_question',
}

export const DATA = {
  QUESTIONS: 'http://localhost:8080/questions',
  USERS: 'http://localhost:8080/users',
  ANSWERS: 'http://localhost:8080/answers',
}
