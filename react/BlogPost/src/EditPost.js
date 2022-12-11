import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useStoreState , useStoreActions} from 'easy-peasy';
import { format } from "date-fns";
import { useHistory } from "react-router-dom";

const EditPost = () => {
  const {id} = useParams();
 
  const history = useHistory();
  
  
  const posts = useStoreState((state) => state.posts);
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const post = posts.find(post => (post.id).toString() === id);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");

    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      body: editBody,
    };
      editPost(updatedPost);
      history.push("/");
  };

  useEffect(() => {
    if (post) {
      setEditBody(post.body);
      setEditTitle(post.title);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className="NewPost">
      {(editTitle || editBody) && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit= {(e)=> e.preventDefault()}>
            <label htmlFor="editTitle">Title</label>
            <input
              type="text"
              id="editTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label htmlFor="editBody">Post: </label>
            <textarea
              id="editBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="button" onClick={()=> handleEdit(post.id)}>Submit</button>
          </form>
        </>
      )}
      {
        !editTitle && 
        <>
        
        <h2>Post Not Found</h2>
        <p>Well, that's disappointing</p>
        <p>
          <Link to="/">Visit our homepage</Link>
        </p>
        </>
      }
    </main>
  );
};

export default EditPost;
