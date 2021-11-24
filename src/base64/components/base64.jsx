import React, {useState} from 'react';
import {injectIntl} from 'react-intl';
import {Paper, ThemeProvider} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import {encode, decode} from 'js-base64';
import Layout from '../../components/layout';
import Seo from '../../components/seo/seo';
import face512 from '../../components/avatar/face-512.png';
import Form from './form';
import ExternalLink from '../../components/external-link';
import base64En from 'raw-loader!./base64.en.md';
import base64Es from 'raw-loader!./base64.es.md';
import {darkTheme} from '../../styles';
import '../../styles/main.scss';
import '../../styles/pages/base64.scss';

const CONTENT = {
  en: base64En,
  es: base64Es
};

const Base64 = ({pageContext, intl, classes}) => {
  const title = intl.formatMessage({id: 'base64.title'});
  const [{formValues}, setState] = useState({formValues: {input: '', output: ''}});
  const onFieldChange = event => {
    event.persist();
    formValues[event.target.id] = event.target.value;
    setState({formValues});
  };
  const onEncodeClick = () => setState({formValues: {...formValues, output: encode(formValues.input)}});
  const onDecodeClick = () => setState({formValues: {...formValues, output: decode(formValues.input)}});
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout className="base64" pageContext={pageContext}>
        <Seo
          pageContext={pageContext}
          lang={pageContext.lang}
          title={title}
          description={intl.formatMessage({id: 'base64.meta.description'})}
          image={face512}
        />
        <div className={'base64__title'}>
          <div className={'base64__title-filter'}>
            <h1 className={'base64__title-text'}>{title}</h1>
          </div>
        </div>
        <section className='base64__form'>
          <Paper>
            <Form
              values={formValues}
              onFieldChange={onFieldChange}
              onEncodeClick={onEncodeClick}
              onDecodeClick={onDecodeClick}
            />
          </Paper>
        </section>
        <section className='base64__about markdown-section' >
          <ReactMarkdown
            children={CONTENT[pageContext.lang]}
            linkTarget='_blank'
            components={{
              a: ExternalLink
            }}
          />
        </section>
      </Layout>
    </ThemeProvider>
  );
};

export default injectIntl(Base64);
