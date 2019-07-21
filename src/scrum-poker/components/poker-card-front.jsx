import React from 'react';
import PropTypes from 'prop-types';
import PokerCard from './poker-card';

const PokerCardFront = ({symbol, onClick}) => (
  <PokerCard className="poker-card--front" onClick={onClick}>
    <div className="poker-card__column-container">
      <div className="poker-card__row-top">
        <div className="poker-card__symbol-left">
          {symbol}
        </div>
        <div className="poker-card__symbol-right">
          {symbol}
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
        <div className="poker-card__symbol-left">
          {symbol}
        </div>
        <div className="poker-card__symbol-right">
          {symbol}
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
