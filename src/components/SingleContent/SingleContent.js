import { Badge } from '@mui/material';
import React from 'react'
import { img_300, unavailable } from '../../config/config';
import ContModal from '../Modal/ContModal';
import './SingleContent.css'
const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
  }) => {
    return (
      <ContModal media_type={media_type} id ={id} >
          
          <Badge
        badgeContent={vote_average} color={vote_average > 6 ? "secondary" : "primary"} />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
  
        </ContModal>
    );
  };
  

export default SingleContent
