import React from 'react';
import {injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import LinearProgress from '@material-ui/core/LinearProgress';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const selectAll = event => {
  event.preventDefault();
  const field = event.target;
  if (field) {
    field.select();
    field.focus();
  }
};

const ResultTextArea = withStyles({
  notchedOutline: {
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
})(({classes, ...props}) =>
  <TextField
    className={classes.root}
    InputProps={{classes: {notchedOutline: classes.notchedOutline}}}
    {...props}
  />);

const Form = ({intl, values, loading, result, onFieldChange, onGenerateClick}) =>
  (
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
          <InputLabel htmlFor="age-simple">{intl.formatMessage({id: 'uuid.form.Separator'})}</InputLabel>
          <Select
            id="separator"
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
      <Grid container justify="flex-end">
        <Button color="primary" onClick={onGenerateClick}>
          {intl.formatMessage({id: 'uuid.form.Generate'})}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <LinearProgress
          variant={loading === true ? 'indeterminate' : 'determinate'}
        />
        <ResultTextArea
          id="result"
          value={result}
          inputProps={{
            onMouseOver: selectAll
          }}
          multiline
          fullWidth
          variant="outlined"
          rows={4}
        />
      </Grid>
    </Grid>
  );

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
