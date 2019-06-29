import React from 'react';
import Bunny from '../components/easter/Bunny';
import Home from '../components/home/home';

const Index = props => (
  <>
    <Bunny comment={'Welcome to www.marcnuri.com is it easter already?'}/>
    <Home {...props} />
  </>
);

export default Index;
