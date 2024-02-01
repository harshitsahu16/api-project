import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ProductBox from './components/ProductBox';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 flex flex-wrap">
        {products.map((users) => (
          <ProductBox key={users.id} users={users} />
        ))}
      </div>
      <h2 className='text-2xl font-bold mt-36 flex justify-center'>Made By Harshit</h2>
    </div>
  );
};

export default App;
