import React from 'react';
import { render } from 'react-dom';
//import css
import css from './styles/style.styl';
//import Components 
import Main from './components/Main';
//there is an div with the id of 'root' in our index.html
render(<Main/>, document.getElementById('root'));

