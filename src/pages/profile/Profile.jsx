import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Loader from '../../components/ui/Loader';
import EmptyPosts from '../../components/ui/EmptyPosts';
import Posts from '../../components/posts/Posts';
import ProfileHeader from './profileHeader/ProfileHeader';
import useAuth from '../../hooks/useAuth';
import Alerts from '../../components/ui/Alerts';
import Seperator from '../../components/ui/Seperator';

export default function Profile() {
  const { user, addPosts } = useAuth();

  useEffect(() => {
    if (!user.isPostLoaded) {
      addPosts();
    }
  }, []);

  const renderPosts = () => {
    if (!user.isPostLoaded) return <Loader />;
    if (!user.posts.length) return <EmptyPosts />;
    return <Posts posts={user.posts} />;
  };

  return (
    <>
      <Alerts />
      <NavBar />
      <Seperator height={100} />
      <ProfileHeader />
      {renderPosts()}
    </>
  );
}
