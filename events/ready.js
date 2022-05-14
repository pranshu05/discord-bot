const {REST} = require("@discordjs/rest")
const {Routes} = require("discord-api-types/v9")
const Discord = require('discord.js')
require("dotenv").config()
module.exports = {
    name: "ready",
    once: true,
    execute(client, commands){
        console.log('ready!')
        let watching = [
            `Developer's Hub`
       ]
        let index = 0
        setInterval(() => {
        if(index === watching.length) index = 0
        const status = watching[index]
        client.user.setStatus('dnd')
        client.user.setActivity(status, { type: "WATCHING"})
        index++
    }, 7000) 
    const CLIENT_ID = client.user.id
    const rest = new REST ({
        version : "9"
    }).setToken(process.env.token);

        const embed = new Discord.MessageEmbed()
        .setTitle('Info about server')
        .addField('<#958621708707856394>', 'Channel where you can Introduce yourself!')
        .addField('<#863424771902275584>', 'Discuss about something just send a message and bot will make thread!')
        .addField('<#958621553539579935>', 'Showoff something cool you made! Talk more about it in thread')
        .addField('<#959857903261581413>', 'Done something cool or Achieved something? Just send a message here!')
        .addField('<#958622113374273596>', 'Lokking for help? Just send message in the channel....ppl will help you in thread')
        .addField('<#959478549486649394>', 'Looking for someone to collab with you? Just send message in the channel...Someone will reply in the thread :)')
        .addField('<#959477229056823296>', `Have some cool resources? Why don't send it in the channel`)
        .addField('<#959478759814221896>', 'Have a new idea to start with? Share it with others in the channel!')
        .addField('<#959479046222249984>', 'Hiring someone OR looking for a job? Just send a message and discuss in thread!')

        client.channels.cache.get(`974857251716210728`).send({
            embeds: [embed] 
        })

    (async ()  => {
        try{
            await rest.put(Routes.applicationCommands(CLIENT_ID), {
                body : commands
            });
            console.log(`Succesfully registered commands globally ! with ${client.guilds.cache.map(person => person.memberCount).reduce(function (s, v) { return s + (v || 0) }, 0)} users and ${client.guilds.cache.size} servers `)
        } catch (err) {
          if (err)  console.error(err)
        }
    })()
    }
}
