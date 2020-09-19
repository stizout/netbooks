import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Row from './components/row';
import './App.css';
import bookArray from './assets/books.json';

const page1 = '/books/Hide-And-Seek-1.png';
const page2 = '/books/Hide-and-Seek-2.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [{ id: 1, title: 'Hide And Seek', img: 'img', pages: [page1, page2] }],
    };
  }
  render() {
    const { books } = this.state;
    console.log(bookArray);
    return (
      <Router>
        <div>
          <Navbar />
          <main className='container'>
            <Switch>
              <Route path='/book'>
                <img src={books[0].pages[0]} alt='book' />
              </Route>
              <Route path='/'>
                <div className='row'>
                  <Row books={bookArray} />
                </div>
                {/* <div className='row'>
                  <Row books={books} />
                </div>
                <div className='row'>
                  <Row books={books} />
                </div> */}
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
