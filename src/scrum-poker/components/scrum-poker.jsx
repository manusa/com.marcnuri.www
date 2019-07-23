import React from 'react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import {injectIntl} from 'react-intl';
import result from 'lodash/result';
import ExternalLink from '../../components/external-link';
import Layout from '../../components/layout';
import Seo from '../../components/seo/seo';
import PokerCardBack from './poker-card-back';
import PokerCardFront from './poker-card-front';
import shiver from '../shiver';
import scrumPokerEn from 'raw-loader!./scrum-poker.en.md';
import scrumPokerEs from 'raw-loader!./scrum-poker.es.md';
import '../../styles/main.scss';
import '../../styles/pages/scrum-poker.scss';

const CONTENT = {
  en: scrumPokerEn,
  es: scrumPokerEs
};


class ScrumPoker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
      flipped: true
    };
    this.handleFlipCard = this.flipCard.bind(this);
    this.shiver = shiver(this.onShake.bind(this));
  }

  selectCard(symbol) {
    this.setState({
      selectedCard: symbol,
      flipped: !!symbol
    });
  }

  flipCard(event) {
    result(event, 'stopPropagation');
    this.setState({
      flipped: !this.state.flipped
    });
  }

  onShake() {
    const {selectedCard, flipped} = this.state;
    if (selectedCard && flipped) {
      this.flipCard();
    }
  }

  componentDidMount() {
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', this.shiver);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('devicemotion', this.shiver);
  }

  render() {
    const {pageContext, intl} = this.props;
    const {selectedCard, flipped} = this.state;
    const title = intl.formatMessage({id: 'scrum.poker.title'});
    const description = intl.formatMessage({id: 'scrum.poker.meta.description'});
    return (
      <Layout className="scrum-poker" pageContext={pageContext}>
        <Seo
          pageContext={pageContext}
          lang={pageContext.lang}
          title={title}
          description={description}
        />
        <div className={'scrum-poker__title'}>
          <div className={'scrum-poker__title-filter'}>
            <h1 className={'scrum-poker__title-text'}>{title}</h1>
          </div>
        </div>
        <section className={'scrum-poker__deck'}>
          <div className={'scrum-poker__deck-cards'}>
            {['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?', '∞']
              .map(symbol =>
                <PokerCardFront
                  key={symbol} symbol={symbol}
                  onClick={() => this.selectCard(symbol)}
                />
              )}
          </div>
        </section>
        <section className={'scrum-poker__about markdown-section'}>
          <ReactMarkdown
            source={CONTENT[pageContext.lang]}
            linkTarget="_blank"
            renderers={{
              link: ExternalLink
            }}
          />
        </section>
        <div
          className={clsx(
            'scrum-poker__selected-card',
            selectedCard && 'scrum-poker__selected-card--visible',
            !flipped && 'scrum-poker__selected-card--revealed',
            flipped && 'scrum-poker__selected-card--flipped')}
          onClick={() => this.selectCard(null)}
        >
          <div className='scrum-poker__selected-card-container'>
            <PokerCardBack onClick={this.handleFlipCard} />
            <PokerCardFront
              symbol={selectedCard}
              onClick={() => this.selectCard(null)}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default injectIntl((ScrumPoker));
