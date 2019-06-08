import React from 'react';
import defaultFace from './face.png';

const Avatar = ({face = defaultFace, alt}) => (
  <div className={'avatar'}>
    <img className={'avatar__image'} src={face} alt={alt} />
  </div>
);

export default Avatar;
