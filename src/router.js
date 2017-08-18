import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';
import IndexPage from './routes/IndexPage';
import App from './components/app/index';

function RouterConfig({history}) {
  return (
    <Router history={history} component={App}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
