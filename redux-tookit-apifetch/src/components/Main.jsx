import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchallproducts } from '../router/actions';

const Main = () => {
  const dispatch = useDispatch();
  const { allproducts, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchallproducts());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='grid grid-cols-4 gap-4'>
      {allproducts.map((product) => (
        <div key={product.id} className='w-64 h-96 mx-auto flex flex-col items-start bg-zinc-200 my-4 p-3'>
          <div className='h-1/2'>
            <img src={product.thumbnail} alt={product.title} className='w-full h-full object-cover' />
          </div>
          <h3>Title: {product.title}</h3>
          <p>Price: ${product.price}</p>
          <button className='bg-emerald-500 px-6 py-1 mt-auto'>View Product</button>
        </div>
      ))}
    </div>
  );
};

export default Main;
