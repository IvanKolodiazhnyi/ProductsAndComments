import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import './FormToAdd.scss';

export const FormToAdd = ({ onAdd }) => {
  const [imageUrl, setimageUrl] = useState('');
  const [name, setName] = useState('');
  const [snippet, setSnippet] = useState('');
  const [count, setCount] = useState('')

  const clear = () => {
    setimageUrl('');
    setName('');
    setSnippet('');
    setCount('');
  };

  const handleSumbit = () => {
    const newProduct = {
      imageUrl,
      name,
      snippet,
      count: +count,
      id: uuidv4(),
      display: {},
      comments: [],
    }

    onAdd(newProduct);
    clear();
  };

  return (
    <div className="container">
      <h2 className="title">Form add product</h2>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSumbit();
        }}
      >
      <div className="form__input-wrapper">
        <input
          type="text"
          className="form__input"
          name="imageUrl"
          value={imageUrl}
          onChange={({ target }) => setimageUrl(target.value)}
          required
          placeholder="Enter an imageUrl"
        />
      </div>
      <div className="form__input-wrapper">
        <input
          type="text"
          className="form__input"
          name="name"
          placeholder="Enter a product name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
      </div>
      <div className="form__input-wrapper">
        <input
          type="text"
          className="form__input"
          name="snippet"
          value={snippet}
          onChange={({ target }) => setSnippet(target.value)}
          required
          placeholder="Enter a product description"
        />
      </div>
      <div className="form__input-wrapper">
        <input
          className="form__input"
          type="number"
          name="count"
          value={count}
          onChange={({ target }) => setCount(target.value)}
          required
          placeholder="How much in stock"
        />
      </div>
      <button
        className="form__button"
        type="submit"
      >
        Submit
      </button>
      </form>
    </div>
  );
};

FormToAdd.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
