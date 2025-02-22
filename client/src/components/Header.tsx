import CategorySlider from './CategorySlider';
import logo from '../../public/logo.png';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../router/routes';
import ContactForm from './ContactForm';
import Modal from './Modal';
import { useAppDispatch, useAppSelector } from '../store';
import { setIsOpenModal } from '../store/slices/storeSlice';

const categories = [
  { title: 'Главная' },
  { title: 'Услуги' },
  { title: 'О компании' },
  { title: 'Акции' },
  { title: 'Блог' },
  { title: 'Контакты' },
];

const Header: React.FC = () => {
  const { isOpenModal } = useAppSelector((state) => state.store);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(setIsOpenModal(true));
  };

  const handleCloseModal = () => {
    dispatch(setIsOpenModal(false));
  };

  const handleNav = () => {
    navigate(HOME);
  };

  const handleScrollToMap = () => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.scrollIntoView({
        behavior: 'smooth', // Плавная прокрутка
        block: 'start', // Прокручиваем к началу элемента
      });
    }
  };

  return (
    <header>
      <div className="bg-gray-800 py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={handleNav}
            className="text-3xl font-bold text-white hover:text-indigo-600">
            <img src={logo} alt="" width={60} />
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-white text-3xl font-bold">TOP GARAGE</p>
            <p className="text-gray-400">Диагностика, обслуживание и ремонт авто</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0 md:flex-row md:items-start">
          <div className="flex flex-col text-white text-lg max-w-sm items-center md:items-start mr-8">
            <p className="text-white text-lg text-center md:text-left">
              Мы находимся: <br />{' '}
              <a
                onClick={handleScrollToMap}
                className="cursor-pointer text-blue-400 hover:text-blue-500">
                Посмотреть на карте
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center border-l border-gray-600 pl-4 pr-4 mt-2 md:mt-0 md:pl-8 md:pr-8 md:items-start">
            <p className="text-white font-bold text-xl md:text-2xl text-center md:text-left">
              +7 (985) 242-03-53
            </p>
            <p className="text-gray-300 text-md text-center md:text-left">
              Пн-Сб: с 09:00 до 20:00
            </p>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
            <button
              onClick={handleOpenModal}
              className="text-base font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white rounded px-5 py-3 shadow-sm">
              Заказать обратный звонок
            </button>
          </div>
        </div>
      </div>
      <div>
        <CategorySlider categories={categories} />
      </div>
      <Modal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
        <ContactForm />
      </Modal>
    </header>
  );
};

export default Header;
