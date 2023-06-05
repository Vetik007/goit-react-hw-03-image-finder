import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  // слухач для кнопок
  componentDidMount() {
    window.addEventListener('keydown', this.handleClickEsc);
  }
  // чистимо за собою після закриття модалки
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClickEsc);
  }

  handleClickEsc = e => {
    // перевірка клавіші Escape
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  // закриття модалки по кліку на бекдроп
  handleClickBackdrop = e => {
    // перевірка чи клік був на бекдроп
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.handleClickBackdrop}>
        <div className={css.modalDiv}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

// ===================================================================================

// import { Component } from 'react';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import css from './Modal.module.css';

// // Объект модального окна в DOM-дереве
// const modalRoot = document.querySelector('#modal-root');

// // Классовый компонент Modal
// class Modal extends Component {
//   // Метод жизненного цикла: вызывается после монтирования компонента
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown); // Добавляем обработчик события нажатия клавиши
//     document.body.style.overflow = 'hidden';
//   }

//   // Метод жизненного цикла: вызывается перед размонтированием компонента
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown); // Удаляем обработчик события нажатия клавиши
//     document.body.style.overflow = 'visible';
//   }

//   // Обработчик события нажатия клавиши
//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose(); // Закрываем модальное окно при нажатии клавиши Escape
//     }
//   };

//   // Обработчик клика по фону модального окна
//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose(); // Закрываем модальное окно при клике на фон
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props; // Получаем значения пропсов

//     return createPortal(
//       <div className={css.overlay} onClick={this.handleBackdropClick}>
//         <div className={css.modalDiv}>
//           <img src={largeImageURL} alt={tags} />
//         </div>
//       </div>,
//       modalRoot // Рендерим модальное окно в объект modalRoot в DOM-дереве
//     );
//   }
// }

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default Modal;
