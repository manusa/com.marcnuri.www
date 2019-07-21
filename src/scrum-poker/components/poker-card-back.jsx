import React from 'react';
import PropTypes from 'prop-types';
import PokerCard from './poker-card';

const PokerCardBack = ({onClick, children}) => (
  <PokerCard className="poker-card--flipped" onClick={onClick}>
    <div className="poker-card__outer-border">
      <div className="poker-card__inner-border">
        <div className="poker-card__inner">
          {children}
        </div>
      </div>
    </div>
  </PokerCard>
);

PokerCardBack.propTypes = {
  onClick: PropTypes.func
};

PokerCardBack.defaultProps = {
  onClick: null
};

export default PokerCardBack;
