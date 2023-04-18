import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
  Typography,
} from '@mui/material';
import { DeleteRounded } from '@mui/icons-material';
import propTypes from 'prop-types';
import moment from 'moment';
import useAuth from '../../../hooks/useAuth';
import PopUpForm from '../../ui/PopUpForm';
import useManipPostUi from '../../../hooks/useManipPostUi';

export default function Post({
  id,
  label,
  imageUrl,
  date,
  user,
}) {
  const {
    openToDelete,
    handleCloseDelete,
    handleOpenDelete,
    handleDeleteApprovedAction,
  } = useManipPostUi(id);
  const { user: authUser } = useAuth();
  const dateString = moment(date).format('MMM Do YYYY');
  const isUserPost =
    authUser.isAuthenticated &&
    authUser.username === user.username;

  const renderCardHeader = () => (
    <CardHeader
      avatar={<Avatar src={user.picture} alt="avatar" />}
      title={user.username}
      subheader={dateString}
    />
  );

  const renderCardMedia = () => (
    <CardMedia
      data-testid="postImage"
      component="img"
      src={imageUrl}
    />
  );

  const renderCardContent = () => (
    <CardContent data-testid="postLabel">
      {label}
    </CardContent>
  );

  const renderCardActions = () =>
    isUserPost && (
      <CardActions>
        <IconButton
          onClick={handleOpenDelete}
          data-testid="deleteButton"
        >
          <DeleteRounded style={{ color: '#8C0615' }} />
        </IconButton>
      </CardActions>
    );

  const renderDeletePostPopUp = () => (
    <PopUpForm
      data-testid="deletePopUp"
      open={openToDelete}
      handleClose={handleCloseDelete}
      title="Delete Picture"
      renderContent={() => (
        <Typography>
          Are you sure you want to delete this picture?
        </Typography>
      )}
      approve={
        <Button onClick={handleDeleteApprovedAction}>
          Delete
        </Button>
      }
      reject={
        <Button onClick={handleCloseDelete}>Cancel</Button>
      }
    />
  );

  return (
    <Card>
      {renderCardHeader()}
      {renderCardMedia()}
      {renderCardContent()}
      {renderCardActions()}
      {renderDeletePostPopUp()}
    </Card>
  );
}

Post.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  user: propTypes.shape({
    username: propTypes.string,
    picture: propTypes.string,
  }).isRequired,
};
