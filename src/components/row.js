import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './css/row.css';

export default class row extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
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

  determineTranslate = () => {
    const { count } = this.state;
    const { books } = this.props;
    console.log(count, books.length / 5);
    if (count > books.length / 5) {
      this.handleTranslate(0);
      return this.setState({ count: 0 });
    }
    this.handleTranslate(500);
    this.setState({ count: count + 1 });
  };

  getBook = () => {
    axios.get('https://www.googleapis.com/books/v1/volumes/Oaw9AQAAQBAJ').then((res) => {
      console.log(res.data);
    });
  };
  render() {
    const { books } = this.props;
    const { translateX } = this.state;

    if (books == null) {
      return 'Loading';
    }
    console.log(books[0]);

    return (
      <div>
        <div className='flex book-container'>
          <button
            onClick={() => this.determineTranslate()}
            disabled={books.length / 5 < 1}
            className='scroll-button'
          >
            XY
          </button>
          <button onClick={() => this.getBook()}>book</button>
          <div
            className={`flex`}
            style={{ transform: `translateX(${translateX}px)`, transitionDuration: '1s' }}
          >
            {books.map((book) => (
              <Link to='/book'>
                <div className='book'>
                  <img src={book.volumeInfo.imageLinks.small} alt='book' />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
