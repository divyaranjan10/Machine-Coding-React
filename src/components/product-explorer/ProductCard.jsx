const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border m-2">
      <section>{product.name}</section>
      <section>{product.category}</section>
      <section>{product.price}</section>
    </div>
  );
};

export default ProductCard;
