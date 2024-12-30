import { jsx as _jsx } from "react/jsx-runtime";
const brandsList = ['Toyota', 'Nissan', 'Hyundai', 'Mazda', 'Suzuki', 'Lexus'];
const Brands = () => {
    return (_jsx("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-4 mt-4", children: brandsList.map((brand, index) => (_jsx("div", { className: "flex items-center justify-center border-2 border-gray-300 rounded-lg p-4 text-center transition-colors duration-200 hover:bg-blue-500 hover:text-white cursor-pointer", children: brand }, index))) }));
};
export default Brands;
