import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Switch } from "react-router-dom";
import EditPost from "./EditPost";

// to run the json server
// npx json-server -p 3500 -w data/db.json

function App() {
  return (
    <div className="App">
      
      <Header title={"React JS Blog"} />
    
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/post">
          <NewPost/>
        </Route>

        <Route exact path="/edit/:id">
          <EditPost/>
        </Route>

        <Route path="/post/:id">
          <PostPage />
        </Route>

        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
    
      <Footer />
      
    </div>
  );
}

export default App;
