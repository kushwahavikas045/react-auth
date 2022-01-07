import React from 'react'
import MainNavigation from './components/Layout/MainNavigation';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Hero from './components/Layout/Hero';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Activate from './components/Activate/Activate';
import Deshboard from './components/Deshboard/Deshboard';
import { useSelector } from 'react-redux';
import Education from './components/Deshboard/Education';

const App = () => {


  return (
    <BrowserRouter>
    <MainNavigation />
    <Switch>
        <GuestRoute path="/" exact>
            <Hero />
        </GuestRoute>
        <GuestRoute path="/login">
            <Login />
        </GuestRoute>
        <GuestRoute path="/signup">
            <Signup />
        </GuestRoute>
        <SemiProtectedRoute path="/activate">
            <Activate />
        </SemiProtectedRoute>
        <ProtectedRoute path="/deshboard">
            <Deshboard />
        </ProtectedRoute>
        <ProtectedRoute path="/education">
            <Education/>
        </ProtectedRoute>

    </Switch>
</BrowserRouter>
  )
}

//guest route
const GuestRoute = ({ children, ...rest }) => {
  const {isAuth} = useSelector((state) => state.auth);
  return (
      <Route
          {...rest}
          render={({ location }) => {
              return isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/deshboard',
                          state: { from: location },
                      }}
                  />
              ) : (
                  children
              );
          }}
      ></Route>
  );
};
//activate route access
const SemiProtectedRoute = ({ children, ...rest }) => {
    const {isAuth, activated} = useSelector((state) => state.auth);

  return (
      <Route
          {...rest}
          render={({ location }) => {
              return !isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/login',
                          state: { from: location },
                      }}
                  />
              ) : isAuth && !activated ? (
                  children
              ) : (
                  <Redirect
                      to={{
                          pathname: '/deshboard',
                          state: { from: location },
                      }}
                  />
              );
          }}
      ></Route>
  );
};
const ProtectedRoute = ({ children, ...rest }) => {
    const {isAuth,activated} = useSelector((state) => state.auth);

  return (
      <Route
          {...rest}
          render={({ location }) => {
              return !isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/login',
                          state: { from: location },
                      }}
                  />
              ) : isAuth && !activated ? (
                  <Redirect
                      to={{
                          pathname: '/activate',
                          state: { from: location },
                      }}
                  />
              ) : (
                  children
              );
          }}
      ></Route>
  )
}

export default App;



