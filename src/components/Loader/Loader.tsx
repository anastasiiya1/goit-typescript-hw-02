import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div>
      <InfinitySpin
        color="#0056b3"
      />
    </div>
  );
};

export default Loader;