import React,{Suspense} from 'react'
import MainNavigation from './components/Layout/MainNavigation';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Loading from './components/Layout/Loading';
import { useSelector } from 'react-redux';
import Experience from './components/Deshboard/Experience';

//lazy loading
const Hero = React.lazy(() =>  import('./components/Layout/Hero'));
const Signup = React.lazy(() => import ('./components/Auth/Signup'));
const Login = React.lazy(() => import ('./components/Auth/Login'));
const Activate = React.lazy(() => import ('./components/Activate/Activate'));
const Deshboard = React.lazy(() => import ('./components/Deshboard/Deshboard'));
const Education = React.lazy(() => import ('./components/Deshboard/Education'));

//main app
const App = () => {

    return (
    <BrowserRouter>
    <MainNavigation />
    <Suspense fallback = {<Loading/>}>
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
        <ProtectedRoute path="/experience">
            <Experience/>
        </ProtectedRoute>
        <Route path="/education">
            <Education/>
        </Route>

    </Switch>
    </Suspense>
</BrowserRouter>
  )
}

//guest route ---> (guest user)
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

//activate route access ---> for login user (have token but not activated)
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

// protected route (user which have token and activated)
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



