import React from "react";

const About: React.FC = () => {
  return (
    <div className="mx-auto py-8 ">
      {/* Хлебные крошки */}
      <nav className="mb-8">
        <ol className="list-reset flex text-gray-600">
          <li>
            <a href="#" className="hover:text-blue-500 font-medium text-lg">
              Главная
            </a>
            <span className="mx-2 font-medium text-lg">---</span>
          </li>
          <li className="font-medium text-lg">О компании</li>
        </ol>
      </nav>

      <h2 className="font-bold text-2xl mb-4">О нашей компании</h2>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-xl mb-2">Наша Миссия</h3>
        <p>
          Наша компания стремится предоставить клиентам высококачественные
          услуги по ремонту и обслуживанию автомобилей. Мы используем только
          современные технологии и материалы, чтобы гарантировать надежность и
          долговечность проведенных работ.
        </p>

        <h3 className="font-bold text-xl mb-2 mt-4">Наши Ценности</h3>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Клиентоориентированность</li>
          <li>Качество и надежность</li>
          <li>Профессионализм и опыт</li>
          <li>Постоянное развитие и обучение</li>
        </ul>

        <h3 className="font-bold text-xl mb-2 mt-4">Контакты</h3>
        <p>
          Мы всегда рады новым клиентам! Вы можете связаться с нами по следующим
          контактам:
        </p>
        <ul className="list-inside ml-4 mt-2">
          <li>Телефон: +7 (000) 000-00-00</li>
          <li>Email: info@autoservice.com</li>
          <li>Адрес: г. Раменское, ул. Чкалова, д 13</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
