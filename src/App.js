import logo from './logo.svg';
import './App.css';
import SearchH from './components/SearchH';
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
import axios from "axios";
import {useEffect, useState} from "react";
import useGenre from './myHook/useGenre';

function App() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=be465489dca09c43c78aa0007a20bf5b&page=${page}`
        );

        setContent(data.results ?? []);
        console.log(data)
    };
    useEffect(() => {
        window.scroll(0, 0);
        fetchTrending();
    }, [page]);

  return (
 <>
 <BrowserRouter>
    <SearchH setContent={setContent}/>
    <div className='app'>
      <Container> 
        <Routes> 
          <Route path="/" element ={<Trending/>} />
          <Route path="/m" element ={<Movies movies={content} setPage={setPage} />}/>
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
