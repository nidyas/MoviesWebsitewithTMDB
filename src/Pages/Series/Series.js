import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import useGenre from '../../myHook/useGenre';
import Genres from '../../components/SingleContent/Genres';

function Series() {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=be465489dca09c43c78aa0007a20bf5b&page=${page}&with_genres=${genreforURL}`
        );

        setContent(data.results ?? []);
        console.log(data)
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchTrending();
    }, [genreforURL,page]);

    return (
        <div>
            <span className="pageTitle">Top Series</span>

                 <Genres
                    type="tv"
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                    genres={genres}
                    setGenres={setGenres}
                    setPage={setPage}
                />
            <div className="trending">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    ))}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Series
