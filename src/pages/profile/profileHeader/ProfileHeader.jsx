import React from 'react';
import {
  Box,
  Badge,
  Avatar,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { AddRounded } from '@mui/icons-material';
import { AddPostButton, ConstumizeButton } from './styled';
import PopUpForm from '../../../components/ui/PopUpForm';
import ProfilePicEditorPopUp from './ProfilePicEditorPopUp';
import useManipProfileUi from '../../../hooks/useManipProfileUi';
import useAuth from '../../../hooks/useAuth';

const FIELDS = [
  {
    name: 'label',
    label: 'Label',
  },
  {
    name: 'imageUrl',
    label: 'imageUrl',
  },
];

export default function ProfileHeader() {
  const { user } = useAuth();
  const {
    openProfilePicEditor,
    openAddPostPopUp,
    handleOpenAddPostPopUp,
    handleOpenProfileEditor,
    handleCloseAddPostPopUp,
    handleCloseProfileEditor,
    handleAddPost,
    formik,
  } = useManipProfileUi();

  const renderForm = () => (
    <Grid
      container
      gap="15px"
      flexDirection="column"
      width="350px"
    >
      {FIELDS.map((field) => (
        <Grid item key={field.name}>
          <TextField
            label={field.label}
            name={field.name}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            variant="standard"
            fullWidth
          />
        </Grid>
      ))}
    </Grid>
  );

  const renderBadge = () => (
    <Badge
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      badgeContent={
        <ConstumizeButton onClick={handleOpenProfileEditor}>
          <AddRounded />
        </ConstumizeButton>
      }
    >
      <Avatar
        alt="{user.username}"
        src={user.imageUrl}
        sx={{ width: 100, height: 100 }}
      />
    </Badge>
  );

  const renderPopUp = () => (
    <PopUpForm
      open={openAddPostPopUp}
      handleClose={handleCloseAddPostPopUp}
      title="Add Post"
      renderContent={renderForm}
      approve={
        <Button onClick={handleAddPost}>Create</Button>
      }
      reject={
        <Button onClick={handleCloseAddPostPopUp}>
          Cancel
        </Button>
      }
    />
  );

  const renderUsername = () => (
    <Typography fontSize="22px" fontWeight="700">
      {user.username}
    </Typography>
  );

  const renderAddPostButton = () => (
    <AddPostButton onClick={handleOpenAddPostPopUp}>
      Add Post
    </AddPostButton>
  );

  const renderProfileEditorPopup = () => (
    <ProfilePicEditorPopUp
      open={openProfilePicEditor}
      handleClose={handleCloseProfileEditor}
      handleSave={handleCloseProfileEditor}
    />
  );

  return (
    <Box sx={{ marginBottom: '20px' }}>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        gap="10px"
      >
        {renderBadge()}
        {renderUsername()}
        {renderAddPostButton()}
        {renderPopUp()}
        {renderProfileEditorPopup()}
      </Grid>
    </Box>
  );
}
