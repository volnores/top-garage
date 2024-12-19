import React from "react";

const Blog: React.FC = () => {
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
          <li className="font-medium text-lg">Блог</li>
        </ol>
      </nav>

      <h2 className="font-bold text-2xl mb-4">Статьи блога</h2>
      <div className="space-y-6">
        {/* Пример статьи 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">
            Как выбрать масло для вашего автомобиля
          </h3>
          <p className="text-gray-700 mb-2">
            Советы по выбору правильного масла в зависимости от типа и марки
            вашего автомобиля.
          </p>
          <a
            target="blank"
            href="https://liquimoly.ru/servis/info/kak_vybrat_maslo/"
            className="text-blue-500 font-medium hover:underline"
          >
            Читать далее
          </a>
        </div>

        {/* Пример статьи 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">
            Зачем нужно выполнять регулярные ТО
          </h3>
          <p className="text-gray-700 mb-2">
            Узнайте, почему регулярные технические обслуживания важны для
            долговечности вашего автомобиля.
          </p>
          <a
            target="blank"
            href="https://toyotaspb.com/stati/zachem-nuzhno-delat-reglamentnoe-tehnicheskoe-obsluzhivanie-avtomobilya/"
            className="text-blue-500 font-medium hover:underline"
          >
            Читать далее
          </a>
        </div>

        {/* Пример статьи 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-2">
            Подбор тормозных колодок: что нужно знать
          </h3>
          <p className="text-gray-700 mb-2">
            Все, что вам нужно знать об актуальных типах тормозных колодок и их
            замене.
          </p>
          <a
            target="blank"
            href="https://avilon-trade.ru/articles/kak-vybrat-tormoznye-kolodki/"
            className="text-blue-500 font-medium hover:underline"
          >
            Читать далее
          </a>
        </div>

        {/* Добавьте дополнительные статьи аналогичным образом */}
      </div>
    </div>
  );
};

export default Blog;
