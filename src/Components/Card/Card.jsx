import React, { useState } from 'react';
import clNames from 'classnames';
import PropTypes from 'prop-types';

import { ScreenDetails } from '../ScreenDetails';
import { Modal } from '../Modal';
import { Comments } from '../Comments';
import './Card.scss';

export const CardItem = ({
  imageUrl,
  name,
  snippet,
  display,
  id,
  onRemove,
  comments,
  countStatus,
  count
}) => {
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {(countStatus || count !== 0) && (
        <div className={clNames("container-items", {
          "container-items--noCount": countStatus && count === 0,
        })}>
          <div className="card">
            <img
              src={imageUrl}
              alt="Product Foto"
              className="card__img"
            />
    
            <h2 className="card__title">
              {name}
            </h2>
    
            <p className="card__text">
              {snippet}
            </p>

            {count === 0 && (
              <p className="card__count">
                Out of stock
              </p>
            )}

            <button
              className={clNames("card__button", {
                'card__button--isActive': visibleDetails,
              })}
              onClick={() => setVisibleDetails(!visibleDetails)}
            >
              {visibleDetails ? (
                'Hide details'
              ) : (
                'Show some details'
              )}
            </button>
            <button
              className="delete"
              onClick={() => onRemove(id)}
            >
              Delete
            </button>
            <button
              className="show"
              onClick={() => setModalActive(true)}
            >
              {`Show comments: ${comments.length}`}
            </button>
          </div>
    
          {visibleDetails ? (
            <ScreenDetails {...display}/>
          ) : (
            null
          )}
    
          <Modal
            active={modalActive}
            setActive={setModalActive}
          >
            <Comments comments={comments}/>
          </Modal>
        </div>
      )}
    </>
  );
}

CardItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  display: PropTypes.shape({
    productId: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
  id: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  countStatus: PropTypes.bool.isRequired,
}
