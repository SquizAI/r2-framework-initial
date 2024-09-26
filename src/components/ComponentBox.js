// src/components/ComponentBox.js
import React from 'react';

const ComponentBox = ({ title, items, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <h4 className="text-md font-semibold mb-2 flex items-center">
      <Icon className="mr-2" size={20} />
      {title}
    </h4>
    <ul className="list-disc list-inside text-sm">
      {items.map((item, index) => (
        <li key={index} className="mb-1">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ComponentBox;
