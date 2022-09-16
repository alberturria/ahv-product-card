# AHV-Product-Card

This is a test package in order to deploy to NPM.

### Alberto Herrera Vargas

## Example

```
import { ProductCard,ProductImage, ProductTitle, ProductButtons } from 'ahv-product-card'
```

```ts
<ProductCard
  key={product.id}
  product={product}
  initialValues={{
    count: 4,
    // maxCount: 10,
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
```
