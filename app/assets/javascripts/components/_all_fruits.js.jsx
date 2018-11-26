const AllFruits = (props) => {
  var fruits = props.fruits.map((fruit) => {
    return(
      <div key={fruit.id}>
        <h2>{fruit.name}</h2>
        <p>{fruit.description}</p>
      </div>
    )
  })

  return(
    <div>
      {fruits}
    </div>
  )
}
