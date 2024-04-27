import { Component } from "react"
class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      views:'',
    }
  }
  handleInput = e => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  render() {
    const {name,views} =this.state
    return (
      <div className="addform">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex">
          <input type="text" className="form-control new-post-lebel" placeholder="Qanday kino ?" onChange={this.handleInput} name='name' value={name}/>
          <input type="number" className="form-control new-post-lebel" placeholder="Necha marotaba ko'rilgan ?" onChange={this.handleInput} name='views'value={views} />
          <button type="submit" className="btn btn-outline-dark">Qo'shish</button>
        </form>
      </div>
    )
  }
}

export default AddForm