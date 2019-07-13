import React from 'react';
import {injectIntl} from 'react-intl';
import PropTypes from 'prop-types';

const Form = ({intl, values, onFieldChange, onGenerateClick}) => (
  <form>
    <label htmlFor="amount">{intl.formatMessage({id: 'uuid.form.Amount'})}</label>
    <input
      id="amount"
      value={values.amount}
      onChange={onFieldChange}
      placeholder={intl.formatMessage({id: 'uuid.form.Amount'})}
      type='number'
      min='1'
      max='20000'
    />
    <label htmlFor="upperCase">{intl.formatMessage({id: 'uuid.form.UpperCase'})}</label>
    <input
      id="upperCase"
      type="checkbox"
      checked={values.upperCase}
      onChange={onFieldChange}
    />
    <label htmlFor="braces">{intl.formatMessage({id: 'uuid.form.Braces'})}</label>
    <input
      id="braces"
      type="checkbox"
      checked={values.braces}
      onChange={onFieldChange}
    />
    <label htmlFor="hyphens">{intl.formatMessage({id: 'uuid.form.Hyphens'})}</label>
    <input
      id="hyphens"
      type="checkbox"
      checked={values.hyphens}
      onChange={onFieldChange}
    />
    <label htmlFor="separator">{intl.formatMessage({id: 'uuid.form.Separator'})}</label>
    <select
      id="separator"
      value={values.separator}
      onChange={onFieldChange}
    >
      <option value={'\n'}>{intl.formatMessage({id: 'uuid.form.Separator.NewLine'})}</option>
      <option value={':'}>{intl.formatMessage({id: 'uuid.form.Separator.Colon'})}</option>
      <option value={';'}>{intl.formatMessage({id: 'uuid.form.Separator.Semicolon'})}</option>
      <option value={'|'}>{intl.formatMessage({id: 'uuid.form.Separator.Pipe'})}</option>
    </select>
    <button onClick={onGenerateClick}>{intl.formatMessage({id: 'uuid.form.Generate'})}</button>
  </form>
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
  onFieldChange: PropTypes.func.isRequired,
  onGenerateClick: PropTypes.func.isRequired
};

Form.defaultProps = {
};

export default injectIntl(Form);
