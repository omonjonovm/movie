import { Component } from "react";
import Info from "./Info";
import Search from "./Search";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddForm from "./Add";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'Empire of Osman', viewers: 911, favourite: false, like: false, id: 1 },
                { name: 'Breaking Bad', viewers: 890, favourite: false, like: false, id: 2 },
                { name: 'Prison Break', viewers: 1203, favourite: false, like: false, id: 3 },
            ],
            term:'',
            filter:'all',
        }
    }
    onDelete = id => {
        this.setState(({ data }) => ({
            data: data.filter(c => c.id !== id),
        }))
    }
    addForm = (item) => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
        this.setState(({ data }) => ({
            data: [...data, newItem],
        }))
    }
    onToggleProp = (id , prop) => {
        this.setState(({data}) => ({
            data:data.map(item => {
                if(item.id === id ) {
                    return{...item,[prop]: !item[prop]}
                }
                return item
            })
        }))
    }
    searchHandle = (arr,term) =>{
         if(term.length === 0) {
            return arr
         }
         return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }
    filterHandle = (arr,filter) => {
        switch(filter) {
            case 'popular':
            return arr.filter(c => c.like)
            case 'mostViewers':
                return arr.filter(c => c.viewers > 900)
            default:
                return arr
        }
    }
    updateTermHandle = (term) => {
        this.setState({ term })
    }
  updateFilterHandle = filter => this.setState({filter})
    render() {
        const { data , term , filter } = this.state
        const allMoviesCount = data.length
        const favouriteMovies = data.filter(c => c.favourite).length
        const visibleData = this.filterHandle(this.searchHandle(data,term),filter)
        return (
            <div className="app font-monospace ">
                <div className="content">
                    <Info allMoviesCount={allMoviesCount} favouriteMovies={favouriteMovies} />
                    <div className="search-panel">
                        <Search updateTermHandle={this.updateTermHandle} />
                        <Filter filter={filter} updateFilterHandle={this.updateFilterHandle} />
                    </div>
                    <MovieList onToggleProp={this.onToggleProp}  data={visibleData} onDelete={this.onDelete} />
                    <AddForm addForm={this.addForm} />

                </div>
            </div>
        )
    }
}
export default App;