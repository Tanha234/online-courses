
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Signup from './Components/Signup/Signup';



function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <Home></Home>

        </Route>
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="/about">
          <About></About>

        </Route>
        <Route path="/courses">
          <Courses></Courses>

        </Route>
        
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/singup">
          <Signup></Signup>
          </Route>
        <Route path="/*">
          <PageNotFound></PageNotFound>

        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
