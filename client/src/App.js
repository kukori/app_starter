import React, {Fragment} from 'react';
import { Login, Home, } from './components/pages';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PrivateRoute from './components/routing/PrivateRoute';
import { Message } from './components/common';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        <Router>
          <PersistGate persistor={persistor}>
            <Fragment>
              <Switch>
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path="/" component={Home} />
              </Switch>
            </Fragment>
          </PersistGate>
        </Router>
        <Message />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
