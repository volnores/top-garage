import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div className="mx-auto py-8 ">
      {/* Хлебные крошки */}
      <nav className="mb-8">
        <ol className="list-reset flex text-gray-600">
          <li className="">
            <a href="#" className="hover:text-blue-500 font-medium text-lg">
              Главная
            </a>
            <span className="mx-2 font-medium text-lg">---</span>
          </li>
          <li className="font-medium text-lg">Контакты</li>
        </ol>
      </nav>

      <h2 className="font-bold text-2xl mb-4">Контактная информация</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h3 className="font-bold text-xl mb-2">Наши Контакты</h3>
        <p>Телефон: +7 (123) 456-78-90</p>
        <p>Email: info@autoservice.com</p>
        <p>Адрес: ул. Примерная, 10, Москва</p>
      </div>

      <h2 className="font-bold text-2xl mb-4">Обратная связь</h2>
      <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Введите ваше имя"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Введите ваш email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Сообщение
          </label>
          <textarea
            id="message"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Введите ваше сообщение"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded font-medium transition duration-200 hover:bg-blue-600">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Contacts;
