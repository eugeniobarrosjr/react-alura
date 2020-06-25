import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = { name: '', book: '', price: '' };

    this.state = this.initialState;
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    const { addAuthor } = this.props;
    event.preventDefault();
    addAuthor(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, book, price } = this.state;
    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <input
              className="validate"
              onChange={this.handleInput}
              id="name"
              type="text"
              name="name"
              value={name}
            />
            <label htmlFor="name">Nome</label>
          </div>

          <div className="input-field col s4">
            <input
              className="validate"
              onChange={this.handleInput}
              id="book"
              type="text"
              name="book"
              value={book}
            />
            <label htmlFor="book">Livro</label>
          </div>
          <div className="input-field col s4">
            <input
              className="validate"
              onChange={this.handleInput}
              id="price"
              type="text"
              name="price"
              value={price}
            />
            <label htmlFor="price">Preço</label>
          </div>
        </div>
        <button
          className="waves-effect waves-light indigo lighten-2 btn"
          onClick={(event) => this.submit(event)}
          type="button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
