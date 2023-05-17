const Register = () => {
  return (
    <>
      <form onSubmit="">
        <h2>Don&apos;t have an account? Register Here</h2>
        <div>
          <label htmlFor="name">Name</label>

        </div>
        <div>
          <label htmlFor="email">Email</label>

        </div>
        <div>
          <label htmlFor="password">Password</label>

        </div>
        <div>
          <label htmlFor="password_repeat">Repeat password</label>

        </div>
      </form>
    </>
  )
}

export default Register