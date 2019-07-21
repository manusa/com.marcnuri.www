import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const PokerCard = ({className, onClick, children}) => (
  <div className={clsx('poker-card', className)} onClick={onClick}>
    <div className="poker-card__container">
      <div className="poker-card__card">
        {children}
      </div>
    </div>
  </div>
);

PokerCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

PokerCard.defaultProps = {
  className: null,
  onClick: null
};

export default PokerCard;
