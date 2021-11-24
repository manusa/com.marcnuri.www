import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField
} from '@mui/material';

const TextArea = ({
  fullWidth = true,
  multiline = true,
  variant = 'outlined',
  rows = 4,
  ...props
}) =>
  <TextField
    fullWidth={fullWidth}
    multiline={multiline}
    variant={variant}
    rows={rows}
    {...props}
  />;

TextArea.propTypes = {
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  variant: PropTypes.string,
  rows: PropTypes.number
};

export default TextArea;
