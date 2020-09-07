const { Composer } = require('telegraf')
const Stage = require('telegraf/stage')
const session = require('telegraf/session')

const startScene = require('../scenes/start')

const composer = new Composer()

const stage = new Stage([
    startScene
])

composer.use(session())
composer.use(stage.middleware())

composer.command('start', async ctx => await ctx.scene.enter('start'))
composer.on('message', async ctx => {
    await ctx.reply('Я вас не понимать')
})

module.exports = composer
