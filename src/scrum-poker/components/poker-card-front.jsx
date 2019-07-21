import React from 'react';
import PropTypes from 'prop-types';
import PokerCard from './poker-card';

const PokerCardFront = ({symbol, onClick}) => (
  <PokerCard className="poker-card--front" onClick={onClick}>
    <div className="poker-card__background">
      <div className="poker-card__inner-background" />
    </div>
    <div className="poker-card__column-container">
      <div className="poker-card__row-top">
        <div className="poker-card__symbol poker-card__symbol--left">
          <svg viewBox="0 0 30 18">
            <text y="9" dominantBaseline="middle">
              {symbol}
            </text>
          </svg>
        </div>
        <div className="poker-card__symbol poker-card__symbol--right">
          <svg viewBox="0 0 30 18">
            <text x="100%" y="9" dominantBaseline="middle" textAnchor="end">
              {symbol}
            </text>
          </svg>
        </div>
      </div>
      <div className="poker-card__row-middle">
        <svg viewBox="0 0 30 18">
          <text x="50%" y="9" dominantBaseline="middle" textAnchor="middle">
            {symbol}
          </text>
        </svg>
      </div>
      <div className="poker-card__row-bottom">
        <div className="poker-card__symbol poker-card__symbol--left">
          <svg viewBox="0 0 30 18">
            <text x="100%" y="9" dominantBaseline="middle" textAnchor="end">
              {symbol}
            </text>
          </svg>
        </div>
        <div className="poker-card__symbol poker-card__symbol--right">
          <svg viewBox="0 0 30 18">
            <text y="9" dominantBaseline="middle">
              {symbol}
            </text>
          </svg>
        </div>
      </div>
    </div>
  </PokerCard>
);

PokerCardFront.propTypes = {
  onClick: PropTypes.func
};

PokerCardFront.defaultProps = {
  onClick: null
};

export default PokerCardFront;
