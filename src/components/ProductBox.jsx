import React from 'react';

const ProductBox = ({ users }) => {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-[271px] p-6 m-4 border border-gray-300 hover:bg-slate-100 ">
      <h2 className="text-2xl flex justify-start font-bold">{users.name}</h2>
      <span className='flex flex-row'>Username:<p className="ml-2 text-blue-600">{users.username}</p></span>
      <span className='flex flex-row'>Email:<p className="ml-2 text-green-600">{users.email}</p></span>
      <span className='flex flex-row'>Website:<p className="ml-2 text-red-600">{users.website}</p></span>
    </div>
  );
};

export default ProductBox;
