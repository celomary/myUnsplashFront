import { useState } from 'react';
import { useFormik } from 'formik';
import useAuth from './useAuth';

export default function useManipProfileUi() {
  const [openProfilePicEditor, setOpenProfilePicEditor] =
    useState(false);
  const [openAddPostPopUp, setOpenAddPostPopUp] =
    useState(false);
  const formik = useFormik({
    initialValues: { label: '', imageUrl: '' },
  });
  const { addPost } = useAuth();

  const handleOpenProfileEditor = () =>
    setOpenProfilePicEditor(true);

  const handleCloseProfileEditor = () =>
    setOpenProfilePicEditor(false);

  const handleOpenAddPostPopUp = () => {
    setOpenAddPostPopUp(true);
    formik.resetForm();
  };

  const handleCloseAddPostPopUp = () =>
    setOpenAddPostPopUp(false);

  const handleAddPost = async () => {
    const isAdded = await addPost(formik.values);
    if (isAdded) {
      formik.resetForm();
      handleCloseAddPostPopUp();
    }
  };
  return {
    openProfilePicEditor,
    openAddPostPopUp,
    handleOpenAddPostPopUp,
    handleOpenProfileEditor,
    handleCloseAddPostPopUp,
    handleCloseProfileEditor,
    handleAddPost,
    formik,
  };
}
