import React, { useEffect } from 'react';
import Posts from '../../components/posts/Posts';
import NavBar from '../../components/navBar/NavBar';
import usePosts from '../../hooks/usePosts';
import Loader from '../../components/ui/Loader';
import EmptyPosts from '../../components/ui/EmptyPosts';
import Alerts from '../../components/ui/Alerts';
import Seperator from '../../components/ui/Seperator';

function Home() {
  const {
    posts: { data, isLoaded },
    allPosts,
  } = usePosts();

  useEffect(() => {
    if (!isLoaded) {
      allPosts();
    }
  }, [isLoaded]);

  const renderPosts = () => {
    if (!isLoaded) return <Loader />;
    if (!data.length) return <EmptyPosts />;
    return <Posts posts={data} />;
  };

  return (
    <>
      <NavBar />
      <Seperator height={100} />
      <Alerts />
      {renderPosts()}
      <Seperator height={50} />
    </>
  );
}

export default Home;
