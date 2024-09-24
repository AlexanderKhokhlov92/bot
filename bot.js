const TelegramBot = require("node-telegram-bot-api");

const token = "7521542463:AAEDti3y-zujYBzko8bNRC7zI8q1BeILWRM";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть магазин",
            web_app: { url: "https://gameshop-pi-blush.vercel.app/" }, // Используем web_app
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

bot.on("polling_error", (error) => {
  console.error(`Polling error: ${error.code}`);
});
