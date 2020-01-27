import React from 'react';
import logo from './logo.svg';
import './App.css';
import './CSS/1000-1184.css';
import './CSS/850-1000.css';
import './CSS/650-850.css';
import './CSS/450-650.css';
import './CSS/350-450.css';
import './style.css';
import Header from './component/Header';
import Main from './component/Main'
import Footer from './component/Footer'
import Teacher_Profile from './component/Teacher-Profile'
import Student_Profile from './component/Student-Profile'
import signout_student from './component/signout-student'
import signout_teacher from './component/signout-teacher'
import signin_student from './component/signin-student'
import signin_teacher from './component/signin-teacher'
import adding_exams from './component/teacher-component/add-exams'
import SharedDataProvider from './SharedData/Shareddata'
// import Tagraba from './tagraba'
import "react-equation"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">

        <SharedDataProvider>
       <BrowserRouter>
        <Header />
        <Route exact="exact" path='/' component={Main}   />
        <Route exact="exact" path='/Teacher-Profile' component={Teacher_Profile}   />
        <Route exact="exact" path='/Student-Profile' component={Student_Profile}   />
        <Route exact="exact" path='/signout-student' component={signout_student}   />
        <Route exact="exact" path='/signout-teacher' component={signout_teacher}   />
        <Route exact="exact" path='/adding-exams' component={adding_exams}   />
        <Route exact="exact" path='/signin-student' component={signin_student}   />
        <Route exact="exact" path='/signin-teacher' component={signin_teacher}   />
        <Footer />
        </BrowserRouter>
        </SharedDataProvider>
    </div>
  );
}

export default App;
