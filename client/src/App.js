import React, {useEffect} from 'react';
import { Login, Home, ForgotPassword, ResetPassword, Register, ChangePassword } from './components/pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PrivateRoute from './components/routing/PrivateRoute';
import { Message } from './components/common';
import { PersistGate } from 'redux-persist/integration/react';
import { loadUser } from './redux/user/user.actions';
import { store, persistor } from './redux/store';

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    });

    return (
        <Provider store={store}>
            <Router>
                <PersistGate persistor={persistor}>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/forgot-password' component={ForgotPassword} />
                        <Route exact path='/reset-password/:resetToken' component={ResetPassword} />
                        <Route exact path='/register' component={Register} />
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute exact path="/change-password" component={ChangePassword} />
                    </Switch>
                </PersistGate>
            </Router>
            <Message />
        </Provider>
    );
}

export default App;
