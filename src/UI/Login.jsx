const Login = () => {
  return (
    <>
      <form onSubmit="">
        <h2>Have an account? Login Here</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login