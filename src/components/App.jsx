import { Component, useState } from "react";
import Info from "./Info";
import Search from "./Search";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddForm from "./Add";
import { v4 as uuidv4 } from 'uuid';

const App  = () => {
    const [data,setData] = useState(arr)
    const [term,setTerm] = useState('')
    const [filter,setFilter] = useState('all')
    const onDelete = id => {
        const newArr  = data.filter(c => c.id !== id)
        setData(newArr)
    }
    const addForm = item => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
        const  newArr = [...data, newItem]
        setData(newArr)
    }
    const onToggleProp = (id, prop) => {
        const newArr = data.map(item => {
            if(item.id === id ) {
                return{...item,[prop]: !item[prop]}
            }
            return item
        })
        setData(newArr)
    }
    const searchHandle = (arr,term) => {
        if(term === 0){
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }
    const   filterHandle = (arr,filter) => {
        switch(filter) {
            case 'popular':
            return arr.filter(c => c.like)
            case 'mostViewers':
                return arr.filter(c => c.viewers > 900)
            default:
                return arr
        }
    }
    const updateTermHandle = term =>  setTerm(term)
    const updateFilterHandle = filter => setFilter(filter)
    return (
        <div className="app font-monospace ">
            <div className="content">
                <Info allMoviesCount={data.length} favouriteMovies={data.filter(c => c.favourite).length} />
                <div className="search-panel">
                    <Search updateTermHandle={updateTermHandle} />
                    <Filter filter={filter} updateFilterHandle={updateFilterHandle} />
                </div>
                <MovieList onToggleProp={onToggleProp}  data={filterHandle(searchHandle(data,term),filter)} onDelete={onDelete} />
                <AddForm addForm={addForm} />
            </div>
        </div>
    )
}
export default App;

const arr = [
    { name: 'Empire of Osman', viewers: 911, favourite: false, like: false, id: 1 },
    { name: 'Breaking Bad', viewers: 890, favourite: false, like: false, id: 2 },
    { name: 'Prison Break', viewers: 1203, favourite: false, like: false, id: 3 },
]