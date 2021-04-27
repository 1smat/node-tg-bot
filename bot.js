const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '818224743:AAEz_yPehFbK1nhYwgeBcuCJUzc-WWh3S2U'

const bot = new TelegramBot(TOKEN, { polling: true })

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  if (msg.text == '/start') {
    bot.sendMessage(chatId, "You started!")
  }
  if (msg.text == 'cat') {
    bot.sendMessage(chatId, "You sent 'cat'")
  }
  
})
