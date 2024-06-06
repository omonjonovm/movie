import {  useState } from "react"

const AddForm = ({addForm}) => {
 const [state,setState] = useState({name:'',views:''})

 const handleInput = e => {
  setState({...state, [e.target.name] : e.target.value})
 }
 const addFormHandle = e => {
   e.preventDefault()
   if(state.name === '' || state.views === '') return
  const data = {name:state.name,viewers:state.views}
  addForm(data)
  setState({name:'',views:''})
 }
 return (
  <div className="addform">
    <h3>Yangi kino qo'shish</h3>
    <form className="add-form d-flex" onSubmit={ addFormHandle}>
      <input type="text" className="form-control new-post-lebel" placeholder="Qanday kino ?" onChange={handleInput} name='name' value={state.name}/>
      <input type="number" className="form-control new-post-lebel" placeholder="Necha marotaba ko'rilgan ?" onChange={handleInput} name='views'value={state.views} />
      <button type="submit" className="btn btn-outline-dark">Qo'shish</button>
    </form>
  </div>
)
}



export default AddForm