import React, { Component } from 'react';
import './css/row.css';

export default class row extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  determineTranslate = () => {
    const { count } = this.state;
    const { books, handleTranslate } = this.props;
    console.log(count, books.length / 5);
    if (count > books.length / 5) {
      handleTranslate(0);
      return this.setState({ count: 0 });
    }
    handleTranslate(500);
    this.setState({ count: count + 1 });
  };
  render() {
    const { handleTranslate, translateX, books } = this.props;

    if (books == null) {
      return 'Loading';
    }

    return (
      <div>
        <button onClick={() => this.determineTranslate()}>XY</button>
        <div className='flex book-container'>
          <div
            className={`flex`}
            style={{ transform: `translateX(${translateX}px)`, transitionDuration: '1s' }}
          >
            {books.map((book) => (
              <div className='book'>{book.title}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
