// src/components/LayerBox.js
import React from 'react';

const LayerBox = ({ title, children, color, icon: Icon }) => (
  <div className={`border-2 ${color} rounded-lg p-4 mb-6 relative`}>
    <h3 className="text-xl font-semibold mb-3 flex items-center">
      <Icon className="mr-3" size={28} />
      {title}
    </h3>
    {children}
  </div>
);

export default LayerBox;
