import React from 'react';
import {injectIntl} from 'react-intl';
import ReactMarkdown from 'react-markdown';
import Form from './form';
import face512 from '../../components/avatar/face-512.png';
import Layout from '../../components/layout';
import Seo from '../../components/seo/seo';
import uuidEn from 'raw-loader!./uuid.en.md';
import uuidEs from 'raw-loader!./uuid.es.md';
import {fetchUuids, toJson, processUuids} from '../services';

const CONTENT = {
  en: uuidEn,
  es: uuidEs
};

class Uuid extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnFieldChange = this.onFieldChange.bind(this);
    this.handleOnGenerate = this.onGenerate.bind(this);
    this.resultRef = React.createRef();
    this.handleOnResultMouseOver = this.onResultMouseOver.bind(this);
    this.state = {
      formValues: {
        amount: 1,
        upperCase: false,
        braces: false,
        hyphens: true,
        separator: '\n'
      },
      result: ''
    };
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

  async onGenerate(event) {
    event.preventDefault();
    const uuids = await fetchUuids(this.state.formValues.amount).then(toJson);
    const result = processUuids(uuids)(this.state.formValues);
    this.setState({result});
  }

  onResultMouseOver() {
    const textArea = this.resultRef.current;
    if (textArea) {
      this.resultRef.current.select();
      this.resultRef.current.focus();
    }
  }

  render() {
    const {pageContext, intl} = this.props;
    const {formValues, result} = this.state;
    const title = intl.formatMessage({id: 'uuid.title'});
    return (
      <Layout className="uuid" pageContext={pageContext}>
        <Seo
          pageContext={pageContext}
          lang={pageContext.locale}
          title={title}
          description={intl.formatMessage({id: 'uuid.meta.description'})}
          image={face512}
        />
        <div className={'uuid__title'}>
          <div className={'uuid__title-filter'}>
            <h1 className={'uuid__title-text'}>{title}</h1>
          </div>
        </div>
        <section className="uuid__parameters">
          <Form
            values={formValues}
            onFieldChange={this.handleOnFieldChange}
            onGenerateClick={this.handleOnGenerate}
          />
        </section>
        <section className="uuid__result">
          <textarea
            ref={this.resultRef}
            value={result}
            readOnly
            className="uuid__result-container"
            onMouseOver={this.handleOnResultMouseOver}
          />
        </section>
        <section className="uuid__about" >
          <ReactMarkdown
            source={CONTENT[pageContext.locale]}
            linkTarget="_blank"
          />
        </section>
      </Layout>
    );
  }
}

export default injectIntl(Uuid);
