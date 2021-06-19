import React, { useState, useEffect } from 'react';

import { products } from '../../Api/product';
import { CardItem } from '../Card';
import { Modal } from '../Modal';
import { FormToAdd } from '../FormToAdd';
import './ProductList.scss';

export const ProductList = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    setListOfProducts(products)
  }, [])

  const removeProduct = (id) => (
    setListOfProducts(state => state.filter(product => product.id !== id)
  ));

  const visibileProdects = listOfProducts.filter(
    product => product.name.toLowerCase().includes(query.toLowerCase()));

  const addProduct = (product) => {
    setListOfProducts(products => (
      [...products, product]
    ))
  }

  return (
    <>
      <div className="container__search">
        <input
          type="text"
          className="search__input"
          placeholder="Search product name"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <button
          className="search__button"
          onClick={() => setQuery('')}
        >
          Clear search
        </button>
        <button
          className="search__button"
          onClick={() => setModalActive(true)}
        >
          Add a new product
        </button>
      </div>
      <div className="container__card">
        {products.length === 0 ? (
          'Louding'
        ) : (
          visibileProdects.map(product => (
            <CardItem
              key={product.id}
              {...product}
              onRemove={removeProduct}
            />
          ))
        )}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        <FormToAdd onAdd={addProduct}/>
      </Modal>
    </>
  )
};
