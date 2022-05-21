const Discord = require('discord.js')
const Permissions = require("discord.js")
module.exports = {
    name: "messageCreate",
    async execute(message){
        const msg = message
        if (msg.author.bot) return
        if(msg.channel.id === "958621708707856394"){
	const introEmbed = new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setTitle(`Welcome ${message.member.displayName} :wave::skin-tone-1:`)
            .setAuthor({
                name: `${message.member.displayName}`
            })
            .setTimestamp()
        await message.reply({embeds: [introEmbed]}).then(sentEmbed => {
            message.react("👋")
	     message.startThread({
	    	name: `intro ${message.member.displayName}`,
            	autoArchiveDuration: 1440,
            	type: 'GUILD_PUBLIC_THREAD',
            	reason: 'intro'
	    })
        })
            console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "959501807795732520"){
          const suggestionEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`Thanks for the suggestion ${message.member.displayName} ...Talk more about it in Thread`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [suggestionEmbed]}).then(sentEmbed => {
                 message.react("👍")
                 message.react("👎")
                    message.startThread({
                      name: `suggestion ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'suggestion'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "958621553539579935"){
          const showEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`Nice ${message.member.displayName} ...Talk more about it in Thread`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [showEmbed]}).then(sentEmbed => {
                 message.react("👍")
                 message.react("👎")
                    message.startThread({
                      name: `showcase ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'showcase'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "958622113374273596"){
          const helpEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`${message.member.displayName} wait for someone to help you in thread`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [helpEmbed]}).then(sentEmbed => {
                 message.react("🤔")
                    message.startThread({
                      name: `help ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'help'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "863424771902275584"){
          const disEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`${message.member.displayName} Discuss in thread`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [disEmbed]}).then(sentEmbed => {
                 message.react("🤔")
                    message.startThread({
                      name: `discuss ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'discuss'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "959478549486649394"){
          const collabEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`${message.member.displayName} wait for someone's reply in thread`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [collabEmbed]}).then(sentEmbed => {
                 message.react("👍")
                    message.startThread({
                      name: `collaborate ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'collaborate'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "959477229056823296"){
          const resEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`Thanks ${message.member.displayName} hope someone find it helpful`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [resEmbed]}).then(sentEmbed => {
                 message.react("👍")
                    message.startThread({
                      name: `resource ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'resource'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "959478759814221896"){
          const ideaEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`Good idea ${message.member.displayName}`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [ideaEmbed]}).then(sentEmbed => {
                 message.react("👍")
                 message.react("👎")
                    message.startThread({
                      name: `idea ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'idea'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "959479046222249984"){
          const jobEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`${message.member.displayName} wait for someone's reply in thread`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [jobEmbed]}).then(sentEmbed => {
                 message.react("👍")
                    message.startThread({
                      name: `job ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'job'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "959479592773615636"){
          const picEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`Nice click ${message.member.displayName} !`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [picEmbed]}).then(sentEmbed => {
                 message.react("👍")
                 message.react("👎")
                    message.startThread({
                      name: `pic ${message.member.displayName}`,
                      autoArchiveDuration: 1440,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'pic'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "959857903261581413"){
        const winEmbed = new Discord.MessageEmbed()
               .setColor('#00FFFF')
               .setTitle(`Grats ${message.member.displayName}`)
               .setAuthor({
                   name: `${message.member.displayName}`
               })
               .setTimestamp()
           await message.reply({embeds: [winEmbed]}).then(sentEmbed => {
               message.react("🎉")
                  message.startThread({
                    name: `win ${message.member.displayName}`,
                    autoArchiveDuration: 1440,
                    type: 'GUILD_PUBLIC_THREAD',
                    reason: 'win'
            })
           })
               console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "852843876955717632"){
            if(msg.content.includes(`discord.gg`)){
                msg.channel.send(`${message.author} discord invites aren't allowed here`).then(abc =>{
                    message.delete(message.id)
                    console.log(`deleted invite sent by ${msg.author.name}`)
                })
            }
       } else if(msg.content.includes(`discord.gg`)){
            if(message.member.permissions.has('MANAGE_MESSAGES')){
                return
            }else{
                msg.channel.send(`${message.author} discord invites aren't allowed here`).then(abc=>{
                    message.delete(message.id)
                    console.log(`deleted invite sent by ${msg.author.name} in ${msg.channel.name}`)
                })
            }
    } else if(msg.content.includes(`-r add read-it`)){
            if(message.member.roles.cache.some(r => r.name === "read-it-ping")){
                message.member.removeRole(r => r.name === "read-it-ping")
                message.reply(`Role was successfully removed!`)
                console.log(`read-it role removed from ${message.author.name}`)
            } else{
                message.member.addRole(message.guild.roles.cache.some(r => r.name === "read-it-ping"))
                message.reply(`Successfully added the role \ntype **-r add read-it** again to undo it `)
                console.log(`read-it role added to ${message.author.name}`)
            }
    }
  }
} 
