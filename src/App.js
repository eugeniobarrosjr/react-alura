import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Table from './Table';
import Form from './Form';
import Header from './Header';
import PopUp from './PopUp';

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
    PopUp.showMessage('success', 'Autor removido com sucesso');
  };

  addAuthor = (author) => {
    const { authors } = this.state;
    this.setState({
      authors: [...authors, author],
    });
    PopUp.showMessage('success', 'Autor adicionado com sucesso!');
  };

  render() {
    const { authors } = this.state;
    return (
      <>
        <Header />
        <div className="container mb-10">
          <Table authors={authors} removeAuthor={this.removeAuthor} />
          <Form addAuthor={this.addAuthor} />
        </div>
      </>
    );
  }
}

export default App;
