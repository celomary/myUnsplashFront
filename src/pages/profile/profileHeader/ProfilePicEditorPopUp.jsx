import React from 'react';
import Avatar from 'react-avatar-edit';
import {
  Dialog,
  Slide,
  DialogActions,
  DialogContent,
  Grid,
  Box,
  Button,
} from '@mui/material';
import propTypes from 'prop-types';
import useAvatarEvent from '../../../hooks/useAvatarEvent';
import useAuth from '../../../hooks/useAuth';

const Transition = React.forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Slide direction="up" {...props} ref={ref} />
));

export default function ProfilePicEditorPopUp({
  open,
  handleClose,
  handleSave,
}) {
  const { preview, onCrop, onClose, resetPreview } =
    useAvatarEvent();
  const { updateProfilePicture } = useAuth();

  const handleCloseAndReset = () => {
    handleClose();
    resetPreview();
  };

  const handleSaveAndReset = () => {
    const isSaved = updateProfilePicture(preview);
    if (isSaved) {
      handleSave();
      resetPreview();
    }
  };

  const renderImage = preview && (
    <Grid item>
      <Box
        component="img"
        alt="preview"
        src={preview}
        sx={{ width: '200px', height: '200px' }}
      />
    </Grid>
  );

  const renderDialogContent = () => (
    <DialogContent>
      <Grid
        container
        justifyContent="space-around"
        gap="100px"
        alignItems="center"
      >
        <Grid item>
          <Avatar
            width={300}
            height={300}
            border={50}
            borderRadius={125}
            onCrop={onCrop}
            onClose={onClose}
          />
        </Grid>
        {renderImage}
      </Grid>
    </DialogContent>
  );

  const renderDialogActions = () => (
    <DialogActions>
      <Button onClick={handleSaveAndReset}>Save</Button>
      <Button onClick={handleCloseAndReset}>Cancel</Button>
    </DialogActions>
  );

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseAndReset}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="md"
      fullWidth
    >
      {renderDialogContent()}
      {renderDialogActions()}
    </Dialog>
  );
}

ProfilePicEditorPopUp.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  handleSave: propTypes.func.isRequired,
};
