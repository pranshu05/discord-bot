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
    .setDescription(`<#958621708707856394>  \n\nChannel where you can Introduce yourself!  \n\n<#863424771902275584>  \n\nDiscuss about something just send a message and bot will make thread!  \n\n<#958621553539579935>  \n\nShowoff something cool you made! Talk more about it in thread  \n\n<#959857903261581413>  \n\nDone something cool or Achieved something? Just send a message!  \n\n<#958622113374273596>  \n\nLooking for help? Just send message in the channel....ppl will help you in thread  \n\n<#959478549486649394>  \n\nLooking for someone to collab with you? Just send message in the channel...Someone will reply in the thread :)  \n\n<#959477229056823296>  \n\nHave some cool resources? Why don't send it in the channel  \n\n<#959478759814221896>  \n\nHave a new idea to start with? Share it with others in the channel!  \n\n<#959479046222249984>  \n\nHiring someone OR looking for a job? Just send a message and discuss in thread!`)
    client.channels.cache.get('974857251716210728').send({
        embeds: [embed] 
    })
})

client.login(process.env.token)
