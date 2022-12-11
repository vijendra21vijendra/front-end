import React, { useEffect } from 'react'
import Feed from './Feed';
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from 'axios';

const Home = () => {
  const searchResults = useStoreState(state => state.searchResults);
  const setPosts = useStoreActions((actions) => actions.setPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3500/posts");
        setPosts(response.data);
      } catch (err) {
        // not in the 200 response range
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error : ${err.message}`);
        }
      }
    };

    fetchPosts();
  }, []);
  return (
    <main className='Home'>
        {
          searchResults.length ? (
            <Feed posts={searchResults}/>
          ) : (
            <p style={{marginTop: "2rem"}}>
              No posts to display
            </p>
          )
        }
    </main>
  )
}

export default Home;
