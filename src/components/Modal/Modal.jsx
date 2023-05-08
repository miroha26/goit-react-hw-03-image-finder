import clsx from 'clsx';
import React from 'react';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={clsx('Overlay')} onClick={this.handleBackdropClick}>
        <div className={clsx('Modal')}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
