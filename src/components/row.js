import React, { Component } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './css/row.css';

export default class row extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      translateX: 0,
      books: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    const { searchTerm } = this.props;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`)
      .then((response) => {
        console.log(response.data.items);
        this.setState({
          books: response.data.items,
          isLoading: false,
        });
      })
      .catch((error) => console.log(error));

    // const [hank, peppa] = Promise.all([
    //   axios.get('https://www.googleapis.com/books/v1/volumes?q=heres+hank'),
    //   axios.get('https://www.googleapis.com/books/v1/volumes?q=peppa'),
    // ]).then(() => {
    //   this.setState({
    //     hankBooks: hank,
    //     peppaBooks: peppa,
    //     isLoading: false,
    //   });
    // });
    // axios.get('https://www.googleapis.com/books/v1/volumes?q=heres+hank').then((res) => {
    //   console.log(res.data);
    //   this.setState({ hankBooks: res.data, isLoading: false });
    // });
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
    const { count, books } = this.state;
    console.log(count, Math.floor(books.length / 8));
    if (count > Math.floor(books.length / 8)) {
      this.handleTranslate(0);
      return this.setState({ count: 1 });
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
    const { category } = this.props;
    const { translateX, books, isLoading } = this.state;

    if (isLoading) {
      return 'Loading Alex';
    }
    console.log(books[0].volumeInfo.imageLinks);

    return (
      <div>
        <p
          style={{
            color: 'white',
            fontFamily: 'Lucida Console, Monoco, monospace',
            fontWeight: '500',
          }}
        >
          {category}
        </p>
        <div className='row-container flex'>
          <a
            onClick={() => this.determineTranslate()}
            disabled={books.length / 5 < 1}
            className='scroll-button'
          >
            <BsChevronLeft />
          </a>
          <div className='flex row-container'>
            <div className='flex book-container'>
              <div
                className={`flex`}
                style={{ transform: `translateX(${translateX}px)`, transitionDuration: '1s' }}
              >
                {books.map((book) => (
                  <Link to='/book'>
                    <div className='book'>
                      <img
                        src={
                          book.volumeInfo.imageLinks
                            ? book.volumeInfo.imageLinks.smallThumbnail
                            : null
                        }
                        alt='book'
                        className='book-img'
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
