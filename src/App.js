import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Row from './components/row';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'alex', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
      ],
      translateX: 0,
    };
  }

  handleTranslate = (amount) => {
    const { translateX } = this.state;
    if (amount === 0) {
      console.log('reset', amount);
      return this.setState({ translateX: amount });
    }
    const translationAmount = translateX - amount;
    console.log('state', translateX);
    this.setState({ translateX: translationAmount });
  };
  render() {
    const { translateX, books } = this.state;
    return (
      <div>
        <Navbar />
        <main className='container'>
          <div className='row'>
            <Row handleTranslate={this.handleTranslate} translateX={translateX} books={books} />
          </div>
          <div className='row'>
            <Row />
          </div>
          <div className='row'>
            <Row />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
