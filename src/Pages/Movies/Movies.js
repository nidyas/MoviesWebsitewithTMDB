import axios from 'axios'
import React from 'react'
import vid from'../../videos/vid.mp4'
import {useState} from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import {useEffect} from "react";
import Genres from '../../components/SingleContent/Genres';
import useGenre from '../../myHook/useGenre';

function Movies(props) {


  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const [page, setPage] = useState(1);


    return (
        <div>
            <span className="pageTitle" >Top Movies</span>
            <div className="trending">
                {props.movies &&
                    props.movies.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="movie"
                            vote_average={c.vote_average}
                            video={c.video}
                        />
                    ))}
            </div>
            <CustomPagination setPage={props.setPage} />
        </div>

    )
}

export default Movies
