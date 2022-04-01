const Discord = require('discord.js')
module.exports = {
    name: "messageCreate",
    async execute(message){
        const msg = message
        if (msg.author.bot) return
        if(msg.channel.id === "958621708707856394"){
	const introEmbed = new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setTitle(`Welcome ${message.author.name} :wave::skin-tone-1:`)
            .setAuthor({
                name: `${message.member.displayName}`
            })
            .setTimestamp()
        await message.reply({embeds: [introEmbed]}).then(sentEmbed => {
            sentEmbed.react(":wave::skin-tone-1:")
	    message.startThread({
	    	name: `intro ${message.author.name}`,
            	autoArchiveDuration: 60,
            	type: 'GUILD_PUBLIC_THREAD',
            	reason: 'intro'
	    })
        })
            console.log(`Created thread in ${message.channel}`)
       }
  }
} 
