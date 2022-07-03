import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { Chip } from '@material-ui/core';
import { width } from '@mui/system';


const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
  }) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
     const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };
    
    const fetchGenres = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=be465489dca09c43c78aa0007a20bf5b&language=en-US`
      );
      setGenres(data.genres);
      
    };
   
    useEffect(() => {
      fetchGenres();
  
      return () => {
        setGenres([]); // unmounting
      };
    }, []);
    console.log(genres);

  
    return (
        
      <div style={{display:"flex" ,
                    justifyContent:'center',
                    flexDirection:'row',
                    marginTop:'2rem',
                    marginBottom:'1rem',
                    padding:'6px',
                    fontFamily:"serif"

                        }}>
        {selectedGenres.map((genre) => (
                <Chip
                style={{ margin: 2 }}
                label={genre.name}
                key={genre.id}
                color="secondary"
                clickable
                onDelete={() => handleRemove(genre)}
                />
            ))}
            {genres.map((genre) => (
                <Chip
                style={{ margin: 2 }}
                label={genre.name}
                key={genre.id}
                clickable
                onClick={() => handleAdd(genre)}
                />
            ))}
      </div>
    );
  };
export default Genres
