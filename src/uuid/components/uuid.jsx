import React from 'react';
import {injectIntl} from 'react-intl';
import ReactMarkdown from 'react-markdown';
import {Paper, ThemeProvider} from '@mui/material';
import Form from './form';
import ExternalLink from '../../components/external-link';
import Layout from '../../components/layout';
import uuidEn from 'raw-loader!./uuid.en.md';
import uuidEs from 'raw-loader!./uuid.es.md';
import {
  fetchUuids,
  toJson,
  processUuids,
  MAX_QUANTITY,
  MIN_QUANTITY
} from '../services';
import {darkTheme} from '../../styles';
import '../../styles/main.scss';
import '../../styles/pages/uuid.scss';

const CONTENT = {
  en: uuidEn,
  es: uuidEs
};

class Uuid extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnFieldChange = this.onFieldChange.bind(this);
    this.handleOnGenerate = this.onGenerate.bind(this);
    this.state = {
      formValues: {
        amount: 1,
        upperCase: false,
        braces: false,
        hyphens: true,
        separator: '\n'
      },
      loading: false,
      result: ''
    };
  }

  componentDidMount() {
    this.handleOnGenerate();
    // Forces generation in first browser render (Gatsby's static markup)
    window.addEventListener('load', this.handleOnGenerate);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleOnGenerate);
  }

  onFieldChange(event) {
    event.persist();
    const formValues = {...this.state.formValues};
    let newValue = event.target.value;
    switch (event.target.type) {
      case 'number': {
        newValue = event.target.valueAsNumber;
        break;
      }
      case 'checkbox': {
        newValue = event.target.checked;
        break;
      }
      default:
        break;
    }
    formValues[event.target.id] = newValue;
    this.setState({formValues});
  }

  async onGenerate() {
    const {formValues} = this.state;
    let {formValues: {amount}} = this.state;
    if (amount > MAX_QUANTITY) {
      amount = MAX_QUANTITY;
      this.setState({formValues: {amount: MAX_QUANTITY}});
    } else if (amount < MIN_QUANTITY) {
      amount = MIN_QUANTITY;
    }
    this.setState({
      loading: true,
      formValues: {...formValues, amount}
    });
    try {
      const uuids = await fetchUuids(amount).then(toJson);
      const result = processUuids(uuids)(this.state.formValues);
      this.setState({result});
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {pageContext, intl} = this.props;
    const {formValues, loading, result} = this.state;
    const title = intl.formatMessage({id: 'uuid.title'});
    return (
      <ThemeProvider theme={darkTheme}>
        <Layout className="uuid" pageContext={pageContext}>
          <div className={'uuid__title'}>
            <div className={'uuid__title-filter'}>
              <h1 className={'uuid__title-text'}>{title}</h1>
            </div>
          </div>
          <section className="uuid__form">
            <Paper>
              <Form
                values={formValues}
                loading={loading}
                result={result}
                onFieldChange={this.handleOnFieldChange}
                onGenerateClick={this.handleOnGenerate}
              />
            </Paper>
          </section>
          <section className="uuid__about markdown-section" >
            <ReactMarkdown
              children={CONTENT[pageContext.lang]}
              linkTarget="_blank"
              components={{
                a: ExternalLink
              }}
            />
          </section>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default injectIntl(Uuid);
