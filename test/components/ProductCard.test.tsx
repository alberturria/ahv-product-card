import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('Should have render the component properly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <h1>ProductCard</h1>}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
