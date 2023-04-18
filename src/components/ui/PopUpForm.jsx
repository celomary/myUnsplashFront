import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import propTypes from 'prop-types';

export default function PopUpForm({
  open,
  handleClose,
  title,
  renderContent,
  approve,
  reject,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{renderContent()}</DialogContent>
      <DialogActions>
        {approve}
        {reject}
      </DialogActions>
    </Dialog>
  );
}

PopUpForm.propTypes = {
  open: propTypes.bool,
  handleClose: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  renderContent: propTypes.func.isRequired,
  approve: propTypes.element.isRequired,
  reject: propTypes.element.isRequired,
};

PopUpForm.defaultProps = {
  open: false,
};
