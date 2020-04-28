import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/layouts/Home';
import Register from './components/layouts/Register';
import Login from './components/layouts/Login';
import Dashboard from './components/layouts/Dashboard';
import ManagePosts from './components/layouts/ManagePosts';
import CreateProfile from './components/layouts/CreateProfile';
import EditProfile from './components/layouts/EditProfile';
import AddEducation from './components/layouts/AddEducation';
import AddExperience from './components/layouts/AddExperience';
import ProfileList from './components/layouts/ProfileList';
import Profile from './components/layouts/Profile';
import Posts from './components/layouts/Posts';
import SinglePost from './components/layouts/SinglePost';
import Authenticate from './utils/Authenticate';
import Footer from './components/Footer';
// import NotFound from './components/layouts/NotFound';
import store from './store';
import { loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {
  // componentDidMount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return  (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <div className='container'>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Authenticate exact path='/posts' component={Posts} />
              <Authenticate exact path='/posts/:postId' component={SinglePost} />
              <Authenticate exact path='/dashboard' component={Dashboard} />
              <Authenticate exact path='/manage-posts' component={ManagePosts} />
              <Authenticate exact path='/create-profile' component={CreateProfile} />
              <Authenticate exact path='/edit-profile' component={EditProfile} />
              <Authenticate exact path='/add-education' component={AddEducation} />
              <Authenticate exact path='/add-experience' component={AddExperience} />
              <Authenticate exact path='/profiles' component={ProfileList} />
              <Authenticate exact path='/profiles/:id' component={ Profile} />
              
            </div>
          </Switch>
          <Footer />
          {/* <Route component={NotFound} /> */}

        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
