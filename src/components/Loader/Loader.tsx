import React from 'react';
import { InfinitySpin } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#0056b3"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;