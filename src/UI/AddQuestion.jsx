const AddQuestion = () => {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <p>
          Be specific and imagine you’re asking a question to another person.</p>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="text">What are the details of your problem?
        </label>
        <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
        <textarea id="text" name="text" />
      </div>
      <input type="submit" value="Ask question" />
    </form>
  )
}

export default AddQuestion