const express = require("express");
const bodyParser = require("body-parser");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const token = "7521542463:AAEDti3y-zujYBzko8bNRC7zI8q1BeILWRM";
const bot = new TelegramBot(token);

const PORT = process.env.PORT || 8443;
const WEBHOOK_URL = `https://bot-theta-green.vercel.app/webhook`;

bot.setWebHook(WEBHOOK_URL);

app.use(bodyParser.json());
app.post("/webhook", (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть магазин",
            web_app: { url: "https://gameshop-pi-blush.vercel.app/" },
          },
        ],
      ],
    },
  };

  bot.sendMessage(
    chatId,
    "Добро пожаловать в наш магазин игр! Нажмите на кнопку ниже, чтобы открыть приложение.",
    options
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
