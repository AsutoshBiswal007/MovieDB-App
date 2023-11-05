import { Container } from "@material-ui/core";
// import { Search } from "@material-ui/icons";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header/Header';
import MainNav from "./components/MainNav";
import Movies  from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className='app'>
      <Container>
        <Switch>
          <Route path='/' component={Trending} exact/>
          <Route path='/movies' component={Movies}/>
          <Route path='/series' component={Series}/>
          <Route path='/search' component={Search}/>
        </Switch>




      </Container>
    </div>

    <MainNav />
    </BrowserRouter>
  );
}

export default App;
