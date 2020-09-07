const Scene = require('telegraf/scenes/base')

const scene = new Scene('start')

scene.enter(async ctx => {
    await ctx.reply('Здарова')
})

scene.on('message', async ctx => {
    await ctx.reply('Че надо?')
})

module.exports = scene