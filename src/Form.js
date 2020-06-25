import React from 'react';

import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Entre com um nome.',
      },
      {
        field: 'book',
        method: 'isEmpty',
        validWhen: false,
        message: 'Entre com um livro.',
      },
      {
        field: 'price',
        method: 'isInt',
        validWhen: true,
        args: [{ min: 0, max: 9999 }],
        message: 'Entre com um valor númerico.',
      },
    ]);

    this.initialState = {
      name: '',
      book: '',
      price: '',
      validations: this.validator.isValidate(),
    };

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

    const validation = this.validator.validate(this.state);

    if (validation.isValid) {
      addAuthor(this.state);
      this.setState(this.initialState);
    } else {
      const { name, book, price } = validation;
      const fields = [name, book, price];

      const invalidFields = fields.filter((elem) => {
        return elem.isInvalid;
      });
      invalidFields.forEach((field) =>
        PopUp.showMessage('error', field.message)
      );
    }
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
