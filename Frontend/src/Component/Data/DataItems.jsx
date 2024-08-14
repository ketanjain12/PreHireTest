
import React from 'react';

const DataItems = () => {
  // Define your categories array
  const Categories = [
    {
      Category: 'Admin',
      value: 1,
    },
    {
      Category: 'User',
      value: 2,
    },
  ];

 

  // Use the array inside a component render
  return (
    <>
      <h1>Categories</h1>
      <ul>
        {Categories.map((category) => (
          <li key={category.value}>
            {category.Category} (Value: {category.value})
          </li>
        ))}
      </ul>
    </>
  );
};

export default DataItems;
