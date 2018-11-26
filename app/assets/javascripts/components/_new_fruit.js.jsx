const NewFruit = (props) => {
  let formFields = {}

  return(
    <form onSubmit={ (e) => {
        e.preventDefault()
        props.handleFormSubmit(formFields.name.value, formFields.description.value);
        e.target.reset()
      }}>

      <input ref={input => formFields.name = input} placeholder='Enter fruit'/>
      <input ref={input => formFields.description = input} placeholder='Enter description'/>
      <button>Submit</button>
    </form>
  )
}
