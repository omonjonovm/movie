const Filter = ({updateFilterHandle , filter}) => {
    return (
     <div className="btn-group">
        {btnsArr.map(btn =>     (
            <button key={btn.name} onClick={() => updateFilterHandle(btn.name)} className={`btn ${filter === btn.name ? "btn-dark":"btn-outline-dark"}`} type="button">{btn.label}</button>
        ))}
    </div>
    )
}
const  btnsArr = [
    {name:"all", label:"Barcha Kinolar"},
    {name:"popular",label:"Mashxur Kinolar"},
    {name:"mostViewers",label:"Eng ko'p ko'rilgan"}
]
export default Filter