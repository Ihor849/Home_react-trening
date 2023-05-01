import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.nandleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.nandleKeyDown);
  }

  nandleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC нужно закрыть модалку');
      this.props.onClose();
      console.log(this.props.onClose);
    }
  };
  handelBackdropClick = e => {
    // console.log('Кликнули в декдроп');
    if (e.currentTarget === e.target) {
      console.log('Кликнули в Бекдроп');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handelBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
