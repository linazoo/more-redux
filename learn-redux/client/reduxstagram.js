import React from 'react';
import { render } from 'react-dom';
//import css
import css from './styles/style.styl';
//there is an div with the id of 'root' in our index.html
render(<p>hi</p>, document.getElementById('root'));

