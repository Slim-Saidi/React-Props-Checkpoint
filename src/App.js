import React from 'react';
import './App.css';
import Profile from './Profile/Profile'
import Pic from './50cent.jpg';


function App() {
  
  const fullname = 'Curtis "50 Cent" Jackson'
  const bio = 'King of the streets'
  const profession = 'Rapper, actor and producer'
  const showName =(fullname) =>  {
    alert(fullname)
  }
  
  return (
    <div className="App">
      <>
      <Profile
      fullname = {fullname}
      bio = {bio}
      profession = {profession}
      thisname = {showName}
      >
      <img src={Pic} alt="" width="700"  />
      </Profile>
      </>
    </div>
  );
}

export default App;
