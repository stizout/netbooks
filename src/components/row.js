import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  render() {
    const { books } = this.props;
    const { translateX } = this.state;

    if (books == null) {
      return 'Loading';
    }

    return (
      <div>
        <button onClick={() => this.determineTranslate()} disabled={books.length / 5 < 1}>
          XY
        </button>
        <div className='flex book-container'>
          <div
            className={`flex`}
            style={{ transform: `translateX(${translateX}px)`, transitionDuration: '1s' }}
          >
            {books.map((book) => (
              <Link to='/book'>
                <div className='book'>{book.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
