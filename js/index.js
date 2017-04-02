import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app';

const Portfolio = () => {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<Portfolio />, document.querySelector('#root'));
