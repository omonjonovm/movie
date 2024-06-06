import {  useState } from 'react'
const Search = props => {
  const [term, setTerm] = useState('')
  const updateTermHandle = e => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    props.updateTermHandle(term)
  }
  return (
    <input type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      onChange={updateTermHandle}
      value={term} />
  )
}


export default Search