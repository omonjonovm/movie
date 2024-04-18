import Info from "./Info";
import Search from "./Search";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddForm from "./Add";

const App  = () => {
    return(
        <div className="app font-monospace ">
            <div className="content">
                <Info/>
                <div className="search-panel">
                 <Search/>
                 <Filter/>
                </div>
                <MovieList/>
                <AddForm/>
            </div>
        </div>
    )
}
export default App;