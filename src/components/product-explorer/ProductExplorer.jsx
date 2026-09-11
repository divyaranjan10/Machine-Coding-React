import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { products } from "./data/products";
import CategoryFilter from "./CategoryFilter";

const ProductExplorer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    ...new Set(
      products.map((product) => {
        return product.category;
      }),
    ),
  ];

  const handleChange = (value) => {
    setSearchQuery(value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <SearchBar searchQuery={searchQuery} handleChange={handleChange} />
      <div className="flex justify-between">
        <ProductList filteredProducts={filteredProducts} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default ProductExplorer;
