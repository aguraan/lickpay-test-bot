require('dotenv').config()
const bot = require('./src/bot')

bot.use(require('./src/middlewares'))

bot.catch(err => {
    console.error(err)
})


if (process.env.NODE_ENV === 'production') {

    bot.telegram.setWebhook(process.env.WEB_HOOKS_SECRET_URL)
    bot.startWebhook(process.env.WEB_HOOKS_PATH, null, process.env.PORT)

    console.info('Bot launched. mode: Webhook')
} else {

    bot.launch()

    console.info('Bot launched. mode: long-polling')
}