import React from 'react';
import cN from 'classnames';
import PropTypes from 'prop-types';

import './Modal.scss';

export const Modal = ({
  active,
  setActive,
  children
}) => {

  return (
    <div
      className={cN("modal", {
        "modal--active": active,
      })}
      onClick={() => setActive(false)}
    >
      <div
        className={cN("modal__content", {
          "modal__content--active": active,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
