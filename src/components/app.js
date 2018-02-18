import React, { Component } from 'react';
// import { Component } from 'react';

// don't need line 2 because line 1 already covers for { component }

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
