import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, phone, category };

    // Форматируем сообщение, которое хотите отправить
    const textMessage = `Имя: ${data.name}\nТелефон: ${data.phone}\nКатегория: ${data.category}`;

    try {
      // Делаем запрос к Telegram API
      await axios.post(
        "https://api.telegram.org/bot7785758545:AAFAaQgA0ob-ws91oAdSw8SGITAeCIUDM8Q/sendMessage",
        {
          chat_id: "1844520562", // Ваш chat_id
          text: textMessage, // Текст сообщения
        }
      );
      alert("Сообщение отправлено");
      setName("");
      setPhone("");
      setCategory("");
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      if (error.response) {
        alert(`Ошибка: ${error.response.data.description}`);
      } else {
        alert("Ошибка при отправке сообщения");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-center mx-auto p-6 py-4  rounded-md bg-blue-900 "
    >
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">
        Форма обратной связи
      </h2>
      <p className="text-white mb-4">
        Заполните форму и мы свяжемся с вами в ближайшее время
      </p>

      <input
        type="text"
        className="w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Введите ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="tel"
        className="w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Введите ваш номер телефона"
        pattern="[+]?[0-9]{1,3}?[ ]?[0-9]{3,14}"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <select
        className="w-full mb-4 p-3 bg-white-200 border max-w-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Выберите категорию</option>
        <option value="категория1">Категория 1</option>
        <option value="категория2">Категория 2</option>
        <option value="категория3">Категория 3</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 max-w-md mb-4 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;
