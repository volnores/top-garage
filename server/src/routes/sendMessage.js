const express = require('express');
const axios = require('axios');
const { body, validationResult } = require('express-validator');

const router = express.Router();

const TOKEN = process.env.TELEGRAM_BOT_API_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

router.post('/', async (req, res) => {
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
    res.status(200).send('Message sent');

    console.log(`Chat ID: ${CHAT_ID}`);
  } catch (error) {
    console.error(
      'Error sending message to Telegram:',
      error.response ? error.response.data : error,
    );
    res.status(500).json({
      error: 'Error sending message',
      details: error.response ? error.response.data : error,
    });
  }
});

module.exports = router;
