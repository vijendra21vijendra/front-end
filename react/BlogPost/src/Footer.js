import React from 'react'
import { useStoreState } from 'easy-peasy';
const Footer = () => {
  const today = new Date();
  const postCount = useStoreState((state) => state.postCount);
  return (
    <footer className='Footer'>
        <p>{postCount} posts, Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer;
