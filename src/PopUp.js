import M from 'materialize-css';

const PopUp = {
  showMessage: (status, message) => {
    if (status === 'success') {
      M.toast({ html: message, classes: 'green', displayLength: 2000 });
    }

    if (status === 'error') {
      M.toast({ html: message, classes: 'red', displayLength: 2000 });
    }
  },
};

export default PopUp;
