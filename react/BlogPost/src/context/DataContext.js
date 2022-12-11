import { createContext, useState, useEffect } from "react";
import axios from "axios";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
