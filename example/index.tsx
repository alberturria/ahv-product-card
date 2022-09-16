import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const App = () => {
  const product = {
    id: '1',
    title: 'Product title',
  };
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
        }}
      >
        {({ count, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
