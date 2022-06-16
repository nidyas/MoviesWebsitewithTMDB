import React, { useState ,useEffect} from 'react'
import axios from "axios";
import SingleContent from '../../components/SingleContent/SingleContent';
import '../Trending/Trending.css'
function Trending() {

    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=be465489dca09c43c78aa0007a20bf5b`
      );
        
      setContent(data.results);
      console.log(data)
    };
  
    useEffect(() => {
      window.scroll(0, 0);
      fetchTrending();
      // eslint-disable-next-line
    }, []);
    return (
        <div>
        <span className="pageTitle">Trending Today</span>
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
        </div>

    )
}

export default Trending
