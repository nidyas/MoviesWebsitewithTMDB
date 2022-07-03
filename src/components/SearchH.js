import React, {useEffect, useState} from 'react'
import './Header.css'
import {Autocomplete} from "@mui/lab";
import {TextField} from "@mui/material";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import SingleContent from "./SingleContent/SingleContent";

function SearchH(props) {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=be465489dca09c43c78aa0007a20bf5b&query=${searchText}&language=en-US&page=1&include_adult=false`
            );
            setContent(data.results);
            props.setContent(data.results);
           // setNumOfPages(data.total_pages);
             console.log(data.results);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type]);



    return (
        <>
        <div className="header  ">
            <img src="" className="img"></img>
            <div className="SearchBar">
                
                <input type="text" placeholder="Search for Movies " className="bar" style={{width: 500 ,height:30, borderRadius: "20    px"}}
                       onChange={(e) => setSearchText(e.target.value) } 
                ></input>

           <div className="searchIC"><button onClick={fetchSearch}> <SearchIcon /></button> </div>
            </div>

        </div>

        </>

    )
}

export default SearchH
