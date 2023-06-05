import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
// import { ToastContainer, toast } from 'react-toastify';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  // 	//* функція handleChange відновлює значення value в state в відповідно до введенних в інпут відомостей

  handleChange = evt => {
    // деструктурізація
    const { target } = evt;
    const { value } = target;

    this.setState({ value });
    //     console.log('Searchbar value', value);
  };

  handleSubmit = e => {
    e.preventDefault(); // скасування дії за замовчуванням - перезавантаження сторінки після сабміту
    //   деструктурізація
    const { onSubmit } = this.props;
    const { value } = this.state;
    //   робимо перевірку на пусту строку та виводимо повідомлення
    if (value === '') {
      //   toast.error(`${notificationMassege}`, notificationOptions);
    }

    onSubmit(value); // викликаємо функцію handleSearch, яка прийшла з Аpp через пропси

    // console.log('Searchbar state', this.state);
    // console.log('Searchbar props', this.props);

    //   очищення поля пошуку(input) після сабміту
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <BiSearch size="24" />
          </button>

          <input
            className={css.input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>

      // ====================================================
    );
  }
}

export default Searchbar;
