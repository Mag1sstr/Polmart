import type { Product } from "../../store/api";
import ProductCard from "../ui/ProductCard";

interface IProps {
  products: Product[];
}

function ProductList({ products }: IProps) {
  return (
    <div className="grid grid-cols-4 gap-8.75">
      {products?.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
