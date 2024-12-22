import React from 'react';

const brandsList = [
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'Nissan',
  'BMW',
  'Mercedes',
  'Volkswagen',
  'Hyundai',
  'Kia',
  'Scoda',
  'Audi',
  'Mitsubishi',
  'Renault',
  'Mazda',
  'Volvo',
  'Opel',
  'Honda',
  'Chevrolet',
  'Suzuki',
  'Lexus',
];

const Brands = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mt-4">
      {brandsList.map((brand, index) => (
        <div
          key={index}
          className="border-2 border-gray-300 rounded-lg p-4 text-center transition-colors duration-200 hover:bg-blue-500 hover:text-white cursor-pointer">
          {brand}
        </div>
      ))}
    </div>
  );
};

export default Brands;
