import { useState } from 'react';
import useAuth from './useAuth';

export default function useManipPostUi(id) {
  const [openToDelete, setOpenToDelete] = useState(false);
  const { removePost } = useAuth();

  const handleCloseDelete = () => setOpenToDelete(false);
  const handleOpenDelete = () => setOpenToDelete(true);

  const handleDeleteApprovedAction = async () => {
    const isDeleted = await removePost(id);
    if (isDeleted) {
      handleCloseDelete();
    }
  };
  return {
    openToDelete,
    handleCloseDelete,
    handleOpenDelete,
    handleDeleteApprovedAction,
  };
}
