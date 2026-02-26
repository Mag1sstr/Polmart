import ProductCard from "../ui/ProductCard";

function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-8.75">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductList;
