import React from 'react';

const brandsList: string[] = ['Toyota', 'Nissan', 'Hyundai', 'Mazda', 'Suzuki', 'Lexus'];

const Brands: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
      {brandsList.map((brand: string, index: number) => (
        <div
          key={index}
          className="flex items-center justify-center border-2 border-gray-300 rounded-lg p-4 text-center transition-colors duration-200 hover:bg-blue-500 hover:text-white cursor-pointer">
          {brand}
        </div>
      ))}
    </div>
  );
};

export default Brands;
