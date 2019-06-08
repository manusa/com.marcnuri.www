import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import Layout from './layout';
import Seo from './seo/seo';
import '../styles/main.scss';

const isBrowser = () => typeof window !== 'undefined';

const coverClass = () => {
  let ret = 'home__cover--java-bromo';
  if (isBrowser()) {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    if (day > 0 && day < 6 && hour > 8 && hour < 19) {
      ret = 'home__cover--office';
    } else if (day > 5) {
      ret = 'home__cover--trail';
    }
  }
  return ret;
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverClassName: ''
    };
  }

  componentDidMount() {
    // setState shiuldn't be here
    // on purpose to force re-render in browser only (Gatsby)
    this.setState({coverClassName: coverClass()});
  }


  render() {
    const {pageContext, intl} = this.props;
    const {coverClassName} = this.state;
    return (
      <Layout className={'home'} locale={pageContext.locale}>
        <Seo
          lang={pageContext.locale}
          title={intl.formatMessage({id: 'home.title'})}
          description={intl.formatMessage({id: 'home.subtitle'})}/>
        <section className={`home__section home__cover ${coverClassName}`}>
          <div className={'home__cover-filter'}>
            <h3 className={'home__cover-hello'}>
              <FormattedMessage id="home.hello"/>
            </h3>
          </div>
        </section>
        <section className={'home__section home__about'}>
          <h1>Marc Nuri</h1>
          <h2><FormattedMessage id="home.subtitle"/></h2>
        </section>
      </Layout>
    );
  }

}

export default injectIntl(Home);
