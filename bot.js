require("dotenv").config()
const fs = require("fs")
const Discord = require('discord.js')
const {Client,Collection} = require("discord.js")
const client = new Client({ 
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'GUILD_BANS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_PRESENCES',
    ] 
})
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
const commands = []
client.commands = new Collection()
for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
	client.commands.set(command.data.name, command)
}
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
	const event = require(`./events/${file}`)
    if (event.once){
        client.once(event.name, (...args) => event.execute(...args, commands))
    } else {
        client.on(event.name, (...args) => event.execute(...args, commands))
    }
}

client.on('ready' , client => {

    const embed = new Discord.MessageEmbed()
    .setTitle('Info about server')
    .setColor("00FFFF")
    .setDescription('<#958621708707856394> \nChannel where you can Introduce yourself!')
    .setDescription('<#863424771902275584> \nDiscuss about something just send a message and bot will make thread!')
    .setDescription('<#958621553539579935> \nShowoff something cool you made! Talk more about it in thread')
    .setDescription('<#959857903261581413> \nDone something cool or Achieved something? Just send a message!')
    .setDescription('<#958622113374273596> \nLooking for help? Just send message in the channel....ppl will help you in thread')
    .setDescription('<#959478549486649394> \nLooking for someone to collab with you? Just send message in the channel...Someone will reply in the thread :)')
    .setDescription(`<#959477229056823296> \nHave some cool resources? Why don't send it in the channel`)
    .setDescription('<#959478759814221896> \nHave a new idea to start with? Share it with others in the channel!')
    .setDescription('<#959479046222249984> \nHiring someone OR looking for a job? Just send a message and discuss in thread!')

    client.channels.cache.get('974857251716210728').send({
        embeds: [embed] 
    })
})

client.login(process.env.token)
