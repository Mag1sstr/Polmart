import type { IProductResponse } from "../../store/api";
import ProductCard from "../ui/ProductCard";

interface IProps {
  data?: IProductResponse;
}

function ProductList({ data }: IProps) {
  return (
    <div className="grid grid-cols-4 gap-8.75">
      {data?.products?.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
