import React from 'react';
import './App.css';

import Table from './Table';

class App extends React.Component {
  state = {
    authors: [
      {
        name: 'Paulo',
        book: 'Java',
        price: '29.49',
      },
      {
        name: 'Marcos',
        book: 'Design',
        price: '28.99',
      },
      {
        name: 'Daniel',
        book: 'DevOps',
        price: '29.99',
      },
    ],
  };

  removeAuthor = (authorIndex) => {
    const { authors } = this.state;
    this.setState({
      authors: authors.filter((author, index) => index !== authorIndex),
    });
  };

  render() {
    const { authors } = this.state;
    return (
      <div className="App">
        <Table authors={authors} removeAuthor={this.removeAuthor} />
      </div>
    );
  }
}

export default App;
