import React from 'react';
import clsx from 'clsx';
import {injectIntl} from 'react-intl';
import Layout from '../../components/layout';
import Seo from '../../components/seo/seo';
import PokerCardBack from './poker-card-back';
import PokerCardFront from './poker-card-front';
import '../../styles/main.scss';
import '../../styles/pages/scrum-poker.scss';

class ScrumPoker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
      flipped: true,
    };
    this.handleFlipCard = this.flipCard.bind(this);
  }

  selectCard(symbol) {
    this.setState({
      selectedCard: symbol,
      flipped: !!symbol
    });
  }

  flipCard() {
    this.setState({
      flipped: !this.state.flipped
    });
  }

  render() {
    const {pageContext, intl} = this.props;
    const {selectedCard, flipped} = this.state;
    const title = intl.formatMessage({id: 'scrum.poker.title'});
    return (
      <Layout className="scrum-poker" pageContext={pageContext}>
        <Seo
          pageContext={pageContext}
          lang={pageContext.lang}
          title={title}
          description={title}
        />
        <div className={'scrum-poker__title'}>
          <div className={'scrum-poker__title-filter'}>
            <h1 className={'scrum-poker__title-text'}>{title}</h1>
          </div>
        </div>
        <section className={'scrum-poker__deck'}>
          <div className={'scrum-poker__deck-cards'}>
            {['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?']
              .map(symbol =>
                <PokerCardFront
                  key={symbol} symbol={symbol}
                  onClick={() => this.selectCard(symbol)}
                />
              )}
          </div>
        </section>
        <section className={'scrum-poker__about'}>
          Play!
        </section>
        <div
          className={clsx(
            'scrum-poker__selected-card',
            selectedCard && 'scrum-poker__selected-card--visible')}>
          {flipped ?
            (<PokerCardBack onClick={this.handleFlipCard} />) :
            (<PokerCardFront
              symbol={selectedCard}
              onClick={() => this.selectCard(null)}
            />)
          }
        </div>
      </Layout>
    );
  }
}

export default injectIntl((ScrumPoker));
