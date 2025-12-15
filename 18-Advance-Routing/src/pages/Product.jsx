import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div className="flex justify-between">
      <div className="text-2xl px-6 py-9 flex gap-4 underline">
        <Link to="/product/grocery">Grocery</Link>
        <Link to="/product/clothes">Clothes</Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Product;
