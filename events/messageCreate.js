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
       }
  }
} 
