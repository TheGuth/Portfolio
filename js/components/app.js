import React from 'react';
import {Nav} from './nav';
import {Footer} from './footer';
import {Projects} from './projects';

export const App = () => {
  return (
    <div>
      <Nav />
      <Projects />
      <Footer />
    </div>
  );
}
