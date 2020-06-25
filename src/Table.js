import React from 'react';

const THead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TBody = ({ authors, removeAuthor }) => {
  const row = authors.map((author, index) => {
    return (
      <tr key={index}>
        <td>{author.name}</td>
        <td>{author.book}</td>
        <td>{author.price}</td>
        <td>
          <button onClick={() => removeAuthor(index)}>Remover</button>
        </td>
      </tr>
    );
  });
  return <tbody>{row}</tbody>;
};

class Table extends React.Component {
  render() {
    const { authors, removeAuthor } = this.props;
    return (
      <table>
        <THead />
        <TBody authors={authors} removeAuthor={removeAuthor} />
      </table>
    );
  }
}

export default Table;
