import './App.css';
import React from 'react';
import Nav from './components/sidebar/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer'; 
import ProfileContainerHooks from './components/Profile/ProfileContainerHooks'; 
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Slider from './components/sidebar/Slider/Slider';


function App() {
  return (    
      <div className='container'>
        <div className='container'>
          <HeaderComponent />
          <Nav />
          <Slider />
        </div>
        
        <div className='container'>
           <Route path='/profile' component= {ProfileContainer} />                          
           <Route path={'/profiles/:userId'}>
            <ProfileContainerHooks />
           </Route>
           <Route path='/dialogs' component= {DialogsContainer} />
           <Route path='/users' component= {UsersContainer} />
           <Route path='/news' component={News} />
           <Route path='/music' component={Music} /> 
           <Route path='/login' component={Login} />                             
        </div> 
        <div>
          <Footer />
        </div>    
      </div>    
  );
}

export default App;
