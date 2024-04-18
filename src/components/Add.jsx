const AddForm = () => {
  return (
    <div className="addform">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex">
            <input type="text" className="form-control new-post-lebel" placeholder="Qanday kino ?" />
            <input type="number" className="form-control new-post-lebel" placeholder="Necha marotaba ko'rilgan ?" />
            <button type="submit" className="btn btn-outline-dark">Qo'shish</button>
        </form>
    </div>
  )
}

export default AddForm