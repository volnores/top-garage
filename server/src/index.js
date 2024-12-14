const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;

const TOKEN = process.env.TELEGRAM_BOT_API_TOKEN; // Ваш токен бота
const CHAT_ID = process.env.TELEGRAM_CHAT_ID; // Ваш ID чата

app.use(cors());
app.use(bodyParser.json()); // Парсинг JSON в теле запроса

app.post(
  '/send-message',
  body('name').isString().notEmpty(),
  body('phone').isString().notEmpty(),
  body('category').isString().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, category } = req.body;
    const message = `Новое сообщение от ${name} (${phone}).\nКатегория: ${category}`;

    try {
      const response = await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
      });
      console.log(`Telegram Bot Token: ${TOKEN}`);
      console.log(`Chat ID: ${CHAT_ID}`);
      res.status(200).send('Сообщение отправлено');
    } catch (error) {
      console.error(
        'Ошибка при отправке сообщения в Telegram:',
        error.response ? error.response.data : error,
      );
      res.status(500).json({
        error: 'Ошибка при отправке сообщения',
        details: error.response ? error.response.data : error,
      });
    }
  },
);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
