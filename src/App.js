import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Row from './components/row';
import axios from 'axios';
import './App.css';
import bookArray from './assets/books.json';

const page1 = '/books/Hide-And-Seek-1.png';
const page2 = '/books/Hide-and-Seek-2.png';

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

  // componentDidMount() {
  //   axios
  //     .all([
  //       axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`),
  //       axios.get(`https://www.googleapis.com/books/v1/volumes?q=peppa`),
  //     ])
  //     .then(
  //       axios.spread((firstResponse, secondResponse) => {
  //         console.log(firstResponse.data, secondResponse.data);
  //         this.setState({
  //           hankBooks: firstResponse.data,
  //           peppaBooks: secondResponse.data,
  //           isLoading: false,
  //         });
  //       })
  //     )
  //     .catch((error) => console.log(error));

  //   // const [hank, peppa] = Promise.all([
  //   //   axios.get('https://www.googleapis.com/books/v1/volumes?q=heres+hank'),
  //   //   axios.get('https://www.googleapis.com/books/v1/volumes?q=peppa'),
  //   // ]).then(() => {
  //   //   this.setState({
  //   //     hankBooks: hank,
  //   //     peppaBooks: peppa,
  //   //     isLoading: false,
  //   //   });
  //   // });
  //   // axios.get('https://www.googleapis.com/books/v1/volumes?q=heres+hank').then((res) => {
  //   //   console.log(res.data);
  //   //   this.setState({ hankBooks: res.data, isLoading: false });
  //   // });
  // }

  render() {
    const { books, categories } = this.state;
    console.log(this.state);
    return (
      <Router>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route path='/'>
              {categories.map((category) => {
                return (
                  <div className='row'>
                    <Row searchTerm={category.searchTerm} category={category.category} />
                  </div>
                );
              })}
              {/* <div className='row'>
                <Row books={'peppa'} category={'Peppa Pig'} searchTerm={'peppa'} />
              </div> */}
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
