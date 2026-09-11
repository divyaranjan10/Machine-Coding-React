import ProductCard from "./ProductCard";

const ProductList = ({ filteredProducts }) => {
  return (
    <div>
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
