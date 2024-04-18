import Info from "./Info";
import Search from "./Search";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddForm from "./Add";

const App = () => {
    const data = [
        { name: 'Empire of Osman', viewers: 911, favourite:false,id:1},
        { name: 'Breaking Bad', viewers: 890, favourite:false,id:2},
        { name: 'Prison Break', viewers: 1203,favourite:true,id:3 },
    ]
    return (
        <div className="app font-monospace ">
            <div className="content">
                <Info />
                <div className="search-panel">
                    <Search />
                    <Filter />
                </div>
                <MovieList data={data}/>
                <AddForm />
            </div>
        </div>
    )
}
export default App;