import {Component} from 'react'
class Search  extends Component {
  constructor(props){
    super(props)
    this.state= {term:''}
  }
  updateTermHandle = (e) => {
      const term = e.target.value.toLowerCase()
      this.setState({term})
      this.props.updateTermHandle(term)
  }
  render() {
    return  <input type="text"  className="form-control search-input" placeholder="Kinolarni qidirish" onChange={this.updateTermHandle} value={this.state.term}/>
  }
  
}

export default Search