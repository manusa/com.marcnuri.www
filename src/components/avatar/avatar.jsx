import React from 'react';
import PropTypes from 'prop-types';
import defaultFace from './face.png';

const Avatar = ({face = defaultFace, alt}) => (
  <div className={'avatar'}>
    <img className={'avatar__image'} src={face} alt={alt} />
  </div>
);

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  face: PropTypes.string
};

Avatar.defaultProps = {
  face: defaultFace
};

export default Avatar;
