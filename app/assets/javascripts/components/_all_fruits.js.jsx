class AllFruits extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/fruits.json')
      .then((res) => { return res.json() })
      .then((data) => { this.setState({ fruits: data }) })
  }

  render() {
    var fruits = this.state.fruits.map((fruit) => {
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
}
