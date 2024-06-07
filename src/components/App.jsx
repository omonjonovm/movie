import { useState, useEffect } from "react";
import Info from "./Info";
import Search from "./Search";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddForm from "./Add";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [data, setData] = useState([])
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')
    const [isLoading, setisLoading] = useState(false)
    const onDelete = id => {
        const newArr = data.filter(c => c.id !== id)
        setData(newArr)
    }
    const addForm = item => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
        const newArr = [...data, newItem]
        setData(newArr)
    }
    const onToggleProp = (id, prop) => {
        const newArr = data.map(item => {
            if (item.id === id) {
                return { ...item, [prop]: !item[prop] }
            }
            return item
        })
        setData(newArr)
    }
    const searchHandle = (arr, term) => {
        if (term === 0) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }
    const filterHandle = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostViewers':
                return arr.filter(c => c.viewers > 30)
            default:
                return arr
        }
    }
    const updateTermHandle = term => setTerm(term)
    const updateFilterHandle = filter => setFilter(filter)
    useEffect(() => {
        setisLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
            .then(response => response.json())
            .then(json => {
                const newArr = json.map(item => (
                    {
                        name: item.title,
                        id: item.id,
                        viewers:item.id*10,
                        favourite:false,
                        like:false
                    }))
                setData(newArr);
            })
            .catch(err => console.log(err))
            .finally(() => setisLoading(false))
    },[])
    return (
        <div className="app font-monospace ">
            <div className="content">
                <Info allMoviesCount={data.length} favouriteMovies={data.filter(c => c.favourite).length} />
                <div className="search-panel">
                    <Search updateTermHandle={updateTermHandle} />
                    <Filter filter={filter} updateFilterHandle={updateFilterHandle} />
                </div>
                {isLoading && "Loading..."}
                <MovieList onToggleProp={onToggleProp} data={filterHandle(searchHandle(data, term), filter)} onDelete={onDelete} />
                <AddForm addForm={addForm} />
            </div>
        </div>
    )
}
export default App;
