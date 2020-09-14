const TelegramBot = require('node-telegram-bot-api');

const token = '1342262228:AAFnnudjYfvNvaPxKg2gNpjCLUwEkVxJ9e0';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Obrigado por sua mensagem');
});