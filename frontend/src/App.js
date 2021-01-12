import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer, Home, NoMatch, Exams } from './components';
// import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ExamData from './assets/data.json'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/exams" component={() => <Exams ExamData={ExamData} />} />
        <Route path="/problems" component={() => <Exams ExamData={ExamData} />} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;