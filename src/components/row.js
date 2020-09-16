import React, { Component } from 'react';
import './css/row.css';

export default class row extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
        { id: 1, title: 'Title', img: 'img' },
      ],
    };
  }
  render() {
    const { books } = this.state;
    return (
      <div className='flex'>
        {books.map(() => (
          <div className='book'>hello</div>
        ))}
        <div className='book'>alex</div>
      </div>
    );
  }
}
