import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  LinearProgress,
  Select,
  Switch,
  TextField, useTheme
} from '@mui/material';
import {TextArea} from '../../components/material-ui';

const selectAll = event => {
  event.preventDefault();
  const field = event.target;
  if (field) {
    field.select();
    field.focus();
  }
};

const NoTopBorderTextArea = ({...props}) => <TextArea
  InputProps={{sx: {borderTopWidth: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0}}}
  {...props}
/>;

const Form = ({intl, values, loading, result, onFieldChange, onGenerateClick}) => {
  const theme = useTheme();
  return (
    <Box sx={{mx: theme.spacing(4), py: theme.spacing(4)}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="amount"
            value={values.amount}
            onChange={onFieldChange}
            label={intl.formatMessage({id: 'uuid.form.Amount'})}
            inputProps={{
              min: '1',
              max: '20000'
            }}
            type='number'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id='separator-label'>{intl.formatMessage({id: 'uuid.form.Separator'})}</InputLabel>
            <Select
              id='separator'
              labelId='separator-label'
              label={intl.formatMessage({id: 'uuid.form.Separator'})}
              value={values.separator}
              onChange={onFieldChange}
              inputProps={{
                id: 'separator',
                name: 'separator'
              }}
              native
            >
              <option value={'\n'}>{intl.formatMessage({id: 'uuid.form.Separator.NewLine'})}</option>
              <option value={':'}>{intl.formatMessage({id: 'uuid.form.Separator.Colon'})}</option>
              <option value={';'}>{intl.formatMessage({id: 'uuid.form.Separator.Semicolon'})}</option>
              <option value={'|'}>{intl.formatMessage({id: 'uuid.form.Separator.Pipe'})}</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                id="upperCase"
                type="checkbox"
                checked={values.upperCase}
                onChange={onFieldChange}
              />
            }
            label={intl.formatMessage({id: 'uuid.form.UpperCase'})}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                id="braces"
                type="checkbox"
                checked={values.braces}
                onChange={onFieldChange}
              />
            }
            label={`${intl.formatMessage({id: 'uuid.form.Braces'})} {}`}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                id="hyphens"
                type="checkbox"
                checked={values.hyphens}
                onChange={onFieldChange}
              />
            }
            label={intl.formatMessage({id: 'uuid.form.Hyphens'})}
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button color="primary" disabled={loading} onClick={onGenerateClick}>
            {intl.formatMessage({id: 'uuid.form.Generate'})}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <LinearProgress
            variant={loading === true ? 'indeterminate' : 'determinate'}
            value={100}
          />
          <NoTopBorderTextArea
            id="result"
            value={result}
            inputProps={{
              onMouseOver: selectAll
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

Form.propTypes = {
  intl: PropTypes.object,
  values: PropTypes.shape({
    amount: PropTypes.number,
    upperCase: PropTypes.bool,
    braces: PropTypes.bool,
    hyphens: PropTypes.bool,
    separator: PropTypes.string
  }),
  loading: PropTypes.bool.isRequired,
  result: PropTypes.string,
  onFieldChange: PropTypes.func.isRequired,
  onGenerateClick: PropTypes.func.isRequired
};

Form.defaultProps = {
};

export default injectIntl(Form);
