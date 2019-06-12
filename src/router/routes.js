import React from 'react';
import { Route,Switch,HashRouter} from 'react-router-dom';
 import {PrivateRoute} from '../components/authrouter';
import Login from '../routes/loginPage';
import Result from '../routes/resultPage';
const Root = () => (
    <HashRouter >
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/login" exact component={Login}/>
        <PrivateRoute path="/result" exact component={Result}/>
      </Switch>
      </HashRouter>
);
export default Root;