const Discord = require('discord.js')
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
            sentEmbed.react("👋")
	    message.startThread({
	    	name: `intro ${message.member.displayName}`,
            	autoArchiveDuration: 60,
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
                 sentEmbed.react("👍")
                 sentEmbed.react("👎")
                    message.startThread({
                      name: `suggestion ${message.member.displayName}`,
                      autoArchiveDuration: 60,
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
                 sentEmbed.react("👍")
                 sentEmbed.react("👎")
                    message.startThread({
                      name: `showcase ${message.member.displayName}`,
                      autoArchiveDuration: 60,
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
                 sentEmbed.react("🤔")
                    message.startThread({
                      name: `help ${message.member.displayName}`,
                      autoArchiveDuration: 60,
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
                 sentEmbed.react("🤔")
                    message.startThread({
                      name: `discuss ${message.member.displayName}`,
                      autoArchiveDuration: 60,
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
                 sentEmbed.react("👍")
                    message.startThread({
                      name: `collaborate ${message.member.displayName}`,
                      autoArchiveDuration: 60,
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
                 sentEmbed.react("👍")
                    message.startThread({
                      name: `resource ${message.member.displayName}`,
                      autoArchiveDuration: 60,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'resource'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       } else if(msg.channel.id === "959477229056823296"){
          const ideaEmbed = new Discord.MessageEmbed()
                 .setColor('#00FFFF')
                 .setTitle(`Good idea${message.member.displayName}`)
                 .setAuthor({
                     name: `${message.member.displayName}`
                 })
                 .setTimestamp()
             await message.reply({embeds: [ideaEmbed]}).then(sentEmbed => {
                 sentEmbed.react("👍")
                 sentEmbed.react("👎")
                    message.startThread({
                      name: `idea ${message.member.displayName}`,
                      autoArchiveDuration: 60,
                      type: 'GUILD_PUBLIC_THREAD',
                      reason: 'idea'
              })
             })
                 console.log(`Created thread in ${message.channel.name}`)
       }
  }
} 
