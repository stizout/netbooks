import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Row from './components/row';
import axios from 'axios';
import './App.css';
import bookArray from './assets/books.json';
import Login from './Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        { searchTerm: 'heres+hank', category: 'Adventures of Hank' },
        { searchTerm: 'peppa', category: 'Peppa Pig' },
        { searchTerm: 'winne+the+pooh', category: 'Winnie-the-Pooh' },
      ],
    };
  }

  render() {
    const { books, categories } = this.state;
    console.log(this.state);
    return (
      <Router>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route path='/login' render={() => <Login loggedIn={false} />} />
            <Route path='/'>
              {categories.map((category) => {
                return (
                  <div className='row'>
                    <Row searchTerm={category.searchTerm} category={category.category} />
                  </div>
                );
              })}
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
