import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SimpleBottomNavigation from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/system';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import {Routes} from 'react-router-dom';
import { Route,Switch } from "react-router-dom";

function App() {
  return (
 <> 
 <BrowserRouter>
    <Header/>
    <br></br>
    <div className='app'>
      <Container> 
        <Routes> 
          <Route path="/" element ={<Trending/>} />
          <Route path="/m" element ={<Movies/>}/>
          <Route path="/s"element ={<Series/>}/>
          <Route path="/search" element ={<Search/>}/>
        </Routes>
      </Container>
      
        </div>

    <SimpleBottomNavigation/>
    </BrowserRouter>
    </>
  )
   
}

export default App;
