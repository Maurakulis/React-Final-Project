import AddQuestion from "../UI/AddQuestion"

const NewQuestion = () => {
  return (
    <main className="newQuestion">
      <h2>Ask a public question</h2>
      <div>
        <h3>Writing a good question</h3>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <AddQuestion />
    </main>
  )
}

export default NewQuestion