import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useAuth } from '../../Signin/context/AuthContext';


import { getAllPost } from '../adapters/post';
import { getFollowing } from '../adapters/follow';

import { getExplorePost } from '../utils/getPersonalisedPost';

import HeaderTab from '../components/Header';
import UserPostModal from '../components/UserPostModal';
import { ExploreContainer } from '../styles/posts';
import { UserPosts } from '../styles/profile';
import { LoaderContainer } from '../styles/authForm';

function Explore({ match }) {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState();

  const { currentUser } = useAuth();

  useEffect(() => {
    setLoading(true);
    getFollowing(currentUser.displayName).then((following) => {
      getAllPost()
        .then((posts) => {
          setPosts(getExplorePost(posts.docs, following.docs, currentUser));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    });
  }, []);

  return (
    <ExploreContainer>
      <HeaderTab currentPath={match.path} />
      {loading ? (
        <LoaderContainer className="home">
          <ReactLoading
            color="#000000"
            type="spokes"
            height="5rem"
            width="5rem"
          />
        </LoaderContainer>
      ) : (
        <UserPosts>
          {posts?.map((post) => (
            <UserPostModal post={post} key={post.id} />
          ))}
        </UserPosts>
      )}
    </ExploreContainer>
  );
}

export default Explore;
