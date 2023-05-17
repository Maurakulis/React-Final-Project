const Register = () => {
  return (
    <>
      <form onSubmit="">
        <h2>Don&apos;t have an account? Register Here</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Repeat password</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" />
        </div>
        <input type="submit" value="Register" />
      </form>
    </>
  )
}

export default Register