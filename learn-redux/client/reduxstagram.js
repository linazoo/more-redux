import React from 'react';
import { render } from 'react-dom';
//import css
import css from './styles/style.styl';
//import Components 
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={ browserHistory }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ PhotoGrid }></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

//there is an div with the id of 'root' in our index.html
render(router, document.getElementById('root'));

