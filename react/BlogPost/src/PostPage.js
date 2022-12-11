import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useStoreState , useStoreActions} from 'easy-peasy';

import { useHistory } from "react-router-dom";

const PostPage = () => {
const {id} = useParams();
const history = useHistory();
const deletePost = useStoreActions((actions) => actions.deletePost);

const getPostById = useStoreState(state => state.getPostById);
const post = getPostById(id);

  const handleDelete = async (id) => {
      deletePost(id);
      history.push("/");
    
  };

  return (
    <main className='PostPage'>
        <article className='post'>

          {post && 
           <>
             <h2>{post.title}</h2>
             <p className="postDate">{post.datetime}</p>
             <p className="postBody">{post.body}</p>
             <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
             <button onClick={() => handleDelete(post.id)} className='deleteButton'>
               Delete
             </button>
           </>
          }
          {
            !post && 
            <>
              <h2>Post Not found</h2>
              <p>Well, that's disappointing</p>
              <p>
                <Link to="/">Visit Our HomePage</Link>
              </p>
            </>
          }

        </article>
    </main>
  )
}

export default PostPage;
