import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {
  Box,
  Button,
  Grid,
  Typography, useTheme
} from '@mui/material';
import {TextArea} from '../../components/material-ui';

const Form = ({intl, values, onFieldChange, onEncodeClick, onDecodeClick}) => {
  const theme = useTheme();
  return (
    <Box sx={{p: theme.spacing(4), margin: 'auto', flexGrow: 1}}>
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Typography>
            {intl.formatMessage({id: 'base64.form.instructions'})}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextArea
            id='input'
            label={intl.formatMessage({id: 'base64.form.Input'})}
            value={values.input}
            onChange={onFieldChange}
            rows={6}
          />
        </Grid>
        <Grid item xs={12}>
          <Button color='primary' disabled={(values.input ?? '').length === 0} onClick={onEncodeClick}>
            {intl.formatMessage({id: 'base64.form.Encode'})}
          </Button>
          <Button color='primary' disabled={(values.input ?? '').length === 0} onClick={onDecodeClick}>
            {intl.formatMessage({id: 'base64.form.Decode'})}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextArea
            id='output'
            label={intl.formatMessage({id: 'base64.form.Output'})}
            value={values.output}
            onChange={onFieldChange}
            rows={6}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

Form.propTypes = {
  intl: PropTypes.object,
  values: PropTypes.shape({
    input: PropTypes.string,
    output: PropTypes.string
  }),
  onFieldChange: PropTypes.func.isRequired,
  onEncodeClick: PropTypes.func.isRequired,
  onDecodeClick: PropTypes.func.isRequired
};

export default injectIntl(Form);
